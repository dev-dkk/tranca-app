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

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

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
    const { name, email, password, cpf, phone, isAdmin } = req.body;

    try {
        const userExists = await prisma.users.findFirst({
            where: { OR: [{ email }, { cpf }] }
        });

        if (userExists) {
            if (userExists.email === email) return res.status(400).json({ error: "E-mail já cadastrado." });
            if (userExists.cpf === cpf) return res.status(400).json({ error: "CPF já cadastrado." });
        }

        const hash = await bcrypt.hash(password, 10);
        
        // Gera um token aleatório (código único)
        const verificationToken = crypto.randomBytes(32).toString('hex');

        // Cria usuário como NÃO verificado (verified: false é o padrão)
        const user = await prisma.users.create({
            data: {
                name, email, cpf, phone, password_hash: hash, 
                role: isAdmin ? 'ADMIN' : 'CLIENT',
                verificationToken: verificationToken // Salva o token
            }
        });

        // Envia o E-mail
        const link = `http://localhost:3000/verify?token=${verificationToken}`;
        
        await transporter.sendMail({
            from: '"Belezafro Sistema" <seu.email@gmail.com>',
            to: email,
            subject: 'Confirme seu cadastro - Belezafro',
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h1>Bem-vindo à Belezafro, ${name}!</h1>
                    <p>Para ativar sua conta e agendar serviços, clique no botão abaixo:</p>
                    <a href="${link}" style="background-color: #C48F76; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Confirmar meu E-mail</a>
                    <p style="margin-top: 20px; font-size: 12px; color: #777;">Ou copie este link: ${link}</p>
                </div>
            `
        });

        res.json({ message: "Cadastro realizado! Verifique seu e-mail para ativar." });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar usuário" });
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

// 2. CRIAR AGENDAMENTO (COM CÁLCULO DE END_TIME)
app.post('/appointments', async (req, res) => {
    const { userId, serviceId, date } = req.body;

    console.log("Criando agendamento:", { userId, serviceId, date });

    try {
        // 1. Buscamos o serviço para saber a duração dele
        const service = await prisma.services.findUnique({
            where: { id: serviceId }
        });

        if (!service) {
            return res.status(404).json({ error: "Serviço não encontrado." });
        }

        // 2. Calculamos a Hora Final (Start + Duração)
        const startTime = new Date(date);
        const endTime = new Date(startTime);
        endTime.setMinutes(startTime.getMinutes() + service.duration_minutes);

        // 3. Verificamos conflito de horário
        // (Lógica simples: verifica se o inicio bate. 
        // Idealmente verificaríamos intervalos, mas vamos manter simples por enquanto)
        const exists = await prisma.appointments.findFirst({
            where: { 
                start_time: startTime, 
                status: { not: 'CANCELED' } 
            }
        });

        if (exists) return res.status(400).json({ error: "Horário indisponível!" });

        // 4. Cria o agendamento completo
        const newApp = await prisma.appointments.create({
            data: {
                user_id: userId,
                service_id: serviceId,
                start_time: startTime,
                end_time: endTime, 
                status: "CONFIRMED"
            }
        });

        res.json(newApp);

    } catch (error) {
        console.error("ERRO AO CRIAR:", error);
        res.status(500).json({ error: "Erro ao agendar. Verifique o terminal." });
    }
});
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});