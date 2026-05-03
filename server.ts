import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
// NOVOS IMPORTS DE SEGURANÇA
import nodemailer from 'nodemailer';
import crypto from 'crypto'; // Para gerar o token aleatório
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Resend } from 'resend';
import { MercadoPagoConfig, Payment } from 'mercadopago';

// Instancie a classe passando o token no construtor
const mpClient = new MercadoPagoConfig({ 
  accessToken: process.env.MP_ACCESS_TOKEN as string 
});

const paymentClient = new Payment(mpClient)
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

const resend = new Resend(process.env.RESEND_API_KEY);

// Configs de Imagem (Mantido)
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});
const upload = multer({ storage: multer.memoryStorage() });

// --- ROTA DE UPLOAD (Mantido) ---
app.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'Nenhuma imagem enviada' });
    try {
        const b64 = Buffer.from(req.file.buffer).toString('base64');
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const result = await cloudinary.uploader.upload(dataURI, { folder: 'afrobraids-app' });
        res.json({ url: result.secure_url });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer upload' });
    }
});

/// 1. Configuração do Carteiro (Nodemailer)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dkntj27@gmail.com', // COLOQUE SEU GMAIL AQUI
        pass: 'uqct abrk hxts qvqf'  // COLOQUE A SENHA DE APP DO GOOGLE AQUI
    }
});

// ...

// 2. REGISTRO ATUALIZADO (Com envio de e-mail)
app.post('/auth/register', async (req, res) => {
    console.log("🔥 [REGISTER] Nova tentativa");

    const { name, email, password, cpf, phone, isAdmin } = req.body;

    try {
        // =========================
        // 🧹 VALIDAÇÕES
        // =========================
        if (!name || !email || !password || !cpf || !phone) {
            console.log("❌ Campos obrigatórios faltando");
            return res.status(400).json({ error: "Preencha todos os campos." });
        }

        const cleanEmail = email.trim().toLowerCase();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(cleanEmail)) {
            console.log("❌ Email inválido:", cleanEmail);
            return res.status(400).json({ error: "E-mail inválido." });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: "Senha deve ter no mínimo 6 caracteres." });
        }

        console.log("📧 Email validado:", cleanEmail);

        // =========================
        // 🔎 VERIFICA DUPLICIDADE
        // =========================
        const userExists = await prisma.users.findFirst({
            where: {
                OR: [{ email: cleanEmail }, { cpf }]
            }
        });

        if (userExists) {
            console.log("⚠️ Usuário já existe:", cleanEmail);
            return res.status(400).json({ error: "E-mail ou CPF já cadastrado." });
        }

        // =========================
        // 🔐 HASH SENHA
        // =========================
        const hash = await bcrypt.hash(password, 10);

        // =========================
        // 🎟 TOKEN
        // =========================
        const verificationToken = crypto.randomBytes(32).toString('hex');

        // =========================
        // 💾 CRIA USUÁRIO
        // =========================
        const user = await prisma.users.create({
            data: {
                name,
                email: cleanEmail,
                cpf,
                phone,
                password_hash: hash,
                role: isAdmin ? 'ADMIN' : 'CLIENT',
                verificationToken
            }
        });

        console.log("✅ Usuário criado:", user.id);

        // =========================
        // 🔗 LINK DE VERIFICAÇÃO
        // =========================
        const link = `https://tranca-app.vercel.app/verify?token=${verificationToken}`;

        // =========================
        // 📧 ENVIO DE EMAIL (NÃO BLOQUEIA)
        // =========================
        (async () => {
            try {
                if (!process.env.RESEND_API_KEY) {
                    throw new Error("RESEND_API_KEY não configurada");
                }

                const response = await resend.emails.send({
                    from: 'Belezafro <no-reply@dev-dk.tech>',
                    to: [user.email], // sempre array
                    subject: 'Confirme seu cadastro - Belezafro',
                    html: `
                        <div style="font-family: Arial, sans-serif;">
                            <h1>Bem-vindo, ${user.name} 👋</h1>
                            <p>Obrigado por se cadastrar na Belezafro.</p>
                            <p>Clique no botão abaixo para ativar sua conta:</p>

                            <a href="${link}" 
                               style="display:inline-block;margin-top:10px;padding:10px 20px;background:#C48F76;color:#fff;text-decoration:none;border-radius:5px;">
                               Confirmar E-mail
                            </a>

                            <p style="margin-top:20px;font-size:12px;color:#777;">
                                Ou copie o link:<br/> ${link}
                            </p>
                        </div>
                    `
                });

                console.log("📨 Email enviado:");

            } catch (err) {
                console.error("❌ Erro ao enviar email:", err);
            }
        })();

        // =========================
        // 🚀 RESPOSTA
        // =========================
        return res.json({
            message: "Cadastro realizado! Verifique seu e-mail para ativar."
        });

    } catch (error: any) {
        console.error("🔥 ERRO REGISTER:");
        console.error(error);

        return res.status(500).json({
            error: error.message || "Erro interno no servidor"
        });
    }
});

// 3. NOVA ROTA: VALIDAR E-MAIL (Quando clicar no link)
app.post('/auth/verify-email', async (req, res) => {
    const { token } = req.body;

    if (!token) return res.status(400).json({ error: "Token inválido" });

    try {
        // Procura usuário com esse token
        const user = await prisma.users.findFirst({ where: { verificationToken: token } });

        if (!user) return res.status(400).json({ error: "Link inválido ou expirado." });

        // Ativa o usuário e limpa o token
        await prisma.users.update({
            where: { id: user.id },
            data: { 
                verified: true, 
                verificationToken: null // Token já usado, apaga ele
            }
        });

        res.json({ message: "E-mail verificado com sucesso!" });

    } catch (error) {
        res.status(500).json({ error: "Erro ao verificar e-mail" });
    }
});

// 4. LOGIN ATUALIZADO (Bloqueia quem não confirmou)
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.users.findUnique({ where: { email } });
        if (!user) return res.status(400).json({ error: "E-mail ou senha inválidos" });

        // === BLOQUEIO AQUI ===
        if (!user.verified && user.role !== 'ADMIN') { // Admin a gente deixa passar
            return res.status(403).json({ error: "Por favor, confirme seu e-mail antes de entrar." });
        }

        const senhaBate = await bcrypt.compare(password, user.password_hash);
        if (!senhaBate) return res.status(400).json({ error: "E-mail ou senha inválidos" });

        const token = jwt.sign(
            { id: user.id, role: user.role, name: user.name }, 
            process.env.JWT_SECRET as string,
            { expiresIn: '7d' } 
        );

        res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });

    } catch (error) {
        res.status(500).json({ error: "Erro no login" });
    }
});

// --- ROTAS DE SERVIÇOS (Mantido) ---
app.get('/services', async (req, res) => {
    const services = await prisma.services.findMany({ orderBy: { name: 'asc' } });
    res.json(services);
});

app.post('/services', async (req, res) => {
    const { name, description, price, duration_minutes, image_url } = req.body;
    try {
        const newService = await prisma.services.create({
            data: {
                name, description, price: parseFloat(price), duration_minutes: parseInt(duration_minutes), image_url: image_url || ""
            }
        });
        res.json(newService);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar serviço" });
    }
});

app.delete('/services/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.services.delete({ where: { id } });
    res.json({ message: "Deletado" });
});
// Adicione isso no seu server.ts
app.put('/services/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price, duration_minutes, image_url } = req.body;
    
    try {
        const updatedService = await prisma.services.update({
            where: { id },
            data: {
                name, 
                description, 
                price: parseFloat(price), 
                duration_minutes: parseInt(duration_minutes), 
                // Se vier uma URL nova, usa ela. Se não, o frontend deve mandar a antiga ou tratamos aqui.
                // Abaixo, assumimos que o frontend manda a string correta.
                image_url: image_url 
            }
        });
        res.json(updatedService);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar serviço" });
    }
});
// ==========================================
// --- PERFIL DO USUÁRIO ---
// ==========================================

// 1. BUSCAR DADOS DO PERFIL
app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.users.findUnique({
            where: { id },
            // Selecionamos apenas o que é seguro mostrar
            select: { id: true, name: true, email: true, cpf: true, phone: true, role: true }
        });
        if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar perfil" });
    }
});

// 2. ATUALIZAR PERFIL (Apenas Email e Telefone)
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { email, phone } = req.body; // Recebemos só o que pode mudar

    try {
        // Verifica se o novo email já está em uso por OUTRA pessoa
        if (email) {
            const emailEmUso = await prisma.users.findFirst({
                where: { 
                    email: email,
                    NOT: { id: id } // Ignora o próprio usuário
                }
            });
            if (emailEmUso) return res.status(400).json({ error: "Este e-mail já está em uso." });
        }

        const updatedUser = await prisma.users.update({
            where: { id },
            data: { 
                email, 
                phone 
            }
        });

        res.json({ message: "Perfil atualizado com sucesso!", user: updatedUser });
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar perfil" });
    }
});

// ==========================================
// --- AGENDAMENTOS (CORRIGIDO FINAL) ---
// ==========================================

// 1. VERIFICAR DISPONIBILIDADE
app.get('/appointments/availability', async (req, res) => {
    const { date } = req.query; 

    if (!date) return res.status(400).json({ error: "Data obrigatória" });

    // Definir o intervalo do dia
    const searchDate = new Date(date as string);
    const startOfDay = new Date(searchDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(searchDate.setHours(23, 59, 59, 999));

    try {
        // Busca no banco usando 'start_time'
        const apps = await prisma.appointments.findMany({
            where: {
                start_time: { // <--- O NOME CERTO NO SEU BANCO É ESSE
                    gte: startOfDay,
                    lte: endOfDay
                },
                status: { not: 'CANCELED' }
            },
            select: { start_time: true } // Selecionamos o campo certo
        });

        // TRADUÇÃO: O Frontend espera receber "date", então convertemos aqui
        const respostaFormatada = apps.map(app => ({
            date: app.start_time
        }));

        res.json(respostaFormatada);

    } catch (error) {
        console.error("ERRO AO BUSCAR:", error);
        res.status(500).json({ error: "Erro ao buscar agenda" });
    }
});

// 2. CRIAR AGENDAMENTO (COM E-MAILS DE CONFIRMAÇÃO)
app.post('/appointments', async (req, res) => {
    const { userId, serviceId, date } = req.body;

    try {
        console.log("📅 Criando agendamento...");

        const service = await prisma.services.findUnique({ where: { id: serviceId } });
        const user = await prisma.users.findUnique({ where: { id: userId } });

        if (!service || !user) {
            return res.status(404).json({ error: "Serviço ou usuário não encontrado." });
        }

        const startTime = new Date(date);
        const endTime = new Date(startTime);
        endTime.setMinutes(startTime.getMinutes() + service.duration_minutes);

        // 🔒 verifica conflito
        const exists = await prisma.appointments.findFirst({
            where: { 
                start_time: startTime,
                status: { not: 'CANCELED' }
            }
        });

        if (exists) {
            return res.status(400).json({ error: "Horário indisponível!" });
        }

        const total = Number(service.price);
        const metade = total / 2;

        // 🧾 cria agendamento PENDENTE
        const appointment = await prisma.appointments.create({
            data: {
                user_id: userId,
                service_id: serviceId,
                start_time: startTime,
                end_time: endTime,
                status: "PENDING",
                payment_status: "PENDING",
                amount_total: total,
                amount_paid: 0
            }
        });

        // 💳 cria PIX
        console.log("DEBUG PIX:", {
            metade,
            email: user.email,
            service: service.name
            });
        const payment = await paymentClient.create({
            body: {
                transaction_amount: metade,
                description: `Agendamento - ${service.name}`,
                payment_method_id: 'pix',
                payer: {
                    email: "test_user_123456@testuser.com"
                },
                notification_url: 'https://tranca-app.onrender.com/webhook/mercadopago',
                external_reference: appointment.id
            }
        });

        const pix = payment.point_of_interaction?.transaction_data;

        // salva dados do pagamento
        await prisma.appointments.update({
            where: { id: appointment.id },
            data: {
                payment_id: payment.id?.toString(),
                payment_link: pix?.ticket_url
            }
        });

        console.log("✅ PIX gerado");

        res.json({
            message: "Pagamento necessário",
            appointmentId: appointment.id,
            pix: {
                qr_code: pix?.qr_code,
                qr_code_base64: pix?.qr_code_base64,
                ticket_url: pix?.ticket_url
            }
        });

    } catch (error) {
        console.error("❌ ERRO AO CRIAR PIX:", error);
        res.status(500).json({ error: "Erro ao gerar pagamento" });
    }
});
//Rota de confirmação de pagamento
app.post('/appointments/confirm-payment', async (req, res) => {
    const { appointmentId } = req.body;

    try {
        const appointment = await prisma.appointments.findUnique({
            where: { id: appointmentId }
        });

        if (!appointment) {
            return res.status(404).json({ error: "Agendamento não encontrado" });
        }

        await prisma.appointments.update({
            where: { id: appointmentId },
            data: {
                status: "CONFIRMED",
                payment_status: "PAID",
                amount_paid: appointment.amount_total / 2
            }
        });

        res.json({ message: "Pagamento confirmado e agendamento ativado!" });

    } catch (error) {
        res.status(500).json({ error: "Erro ao confirmar pagamento" });
    }
});

// Rota do Webhook do Mercado Pago
app.post('/webhook/mercadopago', async (req, res) => {
    try {
        console.log("🔔 Webhook recebido");

        const paymentId = req.body.data?.id;

        if (!paymentId) {
            return res.sendStatus(200);
        }

        const payment = await paymentClient.get({ id: paymentId });

        if (payment.status !== 'approved') {
            return res.sendStatus(200);
        }

        const appointmentId = payment.external_reference;

        if (!appointmentId) {
            console.log("⚠️ Sem external_reference");
            return res.sendStatus(200);
        }

        await prisma.appointments.update({
            where: { id: appointmentId },
            data: {
                status: "CONFIRMED",
                payment_status: "PAID",
                amount_paid: payment.transaction_amount
            }
        });

        console.log("✅ PAGAMENTO CONFIRMADO:", appointmentId);

        res.sendStatus(200);

    } catch (error) {
        console.error("❌ ERRO WEBHOOK:", error);
        res.sendStatus(500);
    }
});
// ==========================================
// --- LISTAGEM DE AGENDAMENTOS ---
// ==========================================

// 1. MEUS AGENDAMENTOS (Para o Cliente ver o histórico dele)
app.get('/appointments/my/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const myApps = await prisma.appointments.findMany({
            where: { user_id: userId },
            include: { 
                services: true // Traz o nome e preço do serviço junto
            },
            orderBy: { start_time: 'desc' } // Mais recentes primeiro
        });
        res.json(myApps);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar agendamentos." });
    }
});

// 2. AGENDA GERAL (Para o Admin ver tudo)
app.get('/appointments/admin/all', async (req, res) => {
    try {
        const allApps = await prisma.appointments.findMany({
            include: {
                users: true,   // Traz dados do cliente (Nome, Telefone)
                services: true // Traz dados do serviço
            },
            orderBy: { start_time: 'asc' } // Do mais antigo para o futuro
        });
        res.json(allApps);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar agenda geral." });
    }
});

// ==========================================
// --- DASHBOARD (MÉTRICAS) ---
// ==========================================
app.get('/dashboard/metrics', async (req, res) => {
    try {
        const now = new Date();
        // Pega o primeiro dia do mês atual (ex: 01/12/2025)
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        
        // 1. FATURAMENTO E CONTAGEM (Só Confirmados deste mês)
        // Buscamos todos os agendamentos do mês com o preço do serviço
        const agendamentosDoMes = await prisma.appointments.findMany({
            where: {
                start_time: { gte: startOfMonth },
                status: 'CONFIRMED'
            },
            include: { services: true } // Traz o preço junto
        });

        const totalAgendamentos = agendamentosDoMes.length;
        
        // Soma os preços (Reduce é uma função que acumula valores)
        const faturamento = agendamentosDoMes.reduce((total, app) => {
            return total + Number(app.services?.price || 0);
        }, 0);

        // 2. SERVIÇO MAIS POPULAR (Geral)
        const topServiceGroup = await prisma.appointments.groupBy({
            by: ['service_id'],
            _count: { service_id: true },
            orderBy: {
                _count: { service_id: 'desc' }
            },
            take: 1 // Pega só o top 1
        });

        let nomeServicoTop = "Nenhum ainda";
        let qtdServicoTop = 0;

        if (topServiceGroup.length > 0) {
            const topId = topServiceGroup[0].service_id;
            qtdServicoTop = topServiceGroup[0]._count.service_id;
            
            // Busca o nome do serviço pelo ID
            const service = await prisma.services.findUnique({ where: { id: topId } });
            if (service) nomeServicoTop = service.name;
        }

        res.json({
            faturamento,
            totalAgendamentos,
            topServico: {
                nome: nomeServicoTop,
                qtd: qtdServicoTop
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao calcular métricas" });
    }
});

// ==========================================
// --- CANCELAMENTO ---
// ==========================================
app.patch('/appointments/:id/cancel', async (req, res) => {
    const { id } = req.params;
    const { userId, role } = req.body; // Quem está pedindo o cancelamento

    try {
        const app = await prisma.appointments.findUnique({
            where: { id },
            include: { users: true, services: true }
        });

        if (!app) return res.status(404).json({ error: "Agendamento não encontrado" });

        // Segurança: Só o dono do agendamento ou o Admin podem cancelar
        if (role !== 'ADMIN' && app.user_id !== userId) {
            return res.status(403).json({ error: "Sem permissão." });
        }

        // Verifica se já passou da data (opcional, mas bom evitar cancelar coisa velha)
        if (new Date(app.start_time) < new Date()) {
            return res.status(400).json({ error: "Não é possível cancelar agendamentos passados." });
        }

        // Atualiza para CANCELADO
        const updated = await prisma.appointments.update({
            where: { id },
            data: { status: 'CANCELED' }
        });

        // --- ENVIA E-MAIL DE AVISO ---
        const dataFormatada = format(new Date(app.start_time), "dd 'de' MMMM 'às' HH:mm", { locale: ptBR });
        
        // Email para o Cliente
        transporter.sendMail({
            from: '"Belezafro" <dknj27@gmail.com>',
            to: app.users.email,
            subject: '🚫 Agendamento Cancelado',
            html: `<p>Olá, ${app.users.name}. O agendamento de <strong>${app.services.name}</strong> para ${dataFormatada} foi cancelado.</p>`
        }).catch(err => console.error(err));

        // Email para o Admin (se foi o cliente que cancelou)
        if (role !== 'ADMIN') {
            transporter.sendMail({
                from: '"Sistema" <dkntj27@gmail.com>',
                to: 'dkntj27@gmail.com',
                subject: '⚠️ Um cliente cancelou!',
                html: `<p>O cliente <strong>${app.users.name}</strong> cancelou o horário de ${dataFormatada}. O horário está livre novamente.</p>`
            }).catch(err => console.error(err));
        }
        // -----------------------------

        res.json({ message: "Agendamento cancelado com sucesso!", app: updated });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao cancelar." });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em https://tranca-app.onrender.com`);
});