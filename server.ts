import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Resend } from 'resend';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

// =======================
// RESEND CONFIG
// =======================
const resend = new Resend(process.env.RESEND_API_KEY);

// =======================
// CLOUDINARY
// =======================
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const upload = multer({ storage: multer.memoryStorage() });

// =======================
// UPLOAD
// =======================
app.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'Nenhuma imagem enviada' });

    try {
        const b64 = Buffer.from(req.file.buffer).toString('base64');
        const dataURI = `data:${req.file.mimetype};base64,${b64}`;

        const result = await cloudinary.uploader.upload(dataURI, {
            folder: 'afrobraids-app'
        });

        res.json({ url: result.secure_url });
    } catch {
        res.status(500).json({ error: 'Erro ao fazer upload' });
    }
});

// =======================
// REGISTER + EMAIL
// =======================
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

// =======================
// VERIFY EMAIL
// =======================
app.post('/auth/verify-email', async (req, res) => {
    const { token } = req.body;

    const user = await prisma.users.findFirst({
        where: { verificationToken: token }
    });

    if (!user) return res.status(400).json({ error: "Token inválido" });

    await prisma.users.update({
        where: { id: user.id },
        data: {
            verified: true,
            verificationToken: null
        }
    });

    res.json({ message: "Email verificado!" });
});

// =======================
// LOGIN
// =======================
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: "Credenciais inválidas" });

    if (!user.verified && user.role !== 'ADMIN') {
        return res.status(403).json({ error: "Confirme seu email" });
    }

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) return res.status(400).json({ error: "Credenciais inválidas" });

    const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET as string,
        { expiresIn: '7d' }
    );

    res.json({ token, user });
});

// =======================
// APPOINTMENT + EMAIL
// =======================
app.post('/appointments', async (req, res) => {
    const { userId, serviceId, date } = req.body;

    try {
        const service = await prisma.services.findUnique({ where: { id: serviceId } });
        const user = await prisma.users.findUnique({ where: { id: userId } });

        if (!service || !user) return res.status(404).json({ error: "Erro" });

        const startTime = new Date(date);
        const endTime = new Date(startTime);
        endTime.setMinutes(startTime.getMinutes() + service.duration_minutes);

        const newApp = await prisma.appointments.create({
            data: {
                user_id: userId,
                service_id: serviceId,
                start_time: startTime,
                end_time: endTime,
                status: "CONFIRMED"
            }
        });

        const dataFormatada = format(startTime, "dd/MM HH:mm", { locale: ptBR });

        // EMAIL CLIENTE
        await resend.emails.send({
            from: 'Belezafro <no-reply@dev-dk.tech>',
            to: user.email,
            subject: "Agendamento confirmado",
            html: `<p>${service.name} em ${dataFormatada}</p>`
        });

        res.json(newApp);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao agendar" });
    }
});
app.get('/test-email', async (req, res) => {
  try {
    const data = await resend.emails.send({
      from: 'Belezafro <no-reply@dev-dk.tech>',
      to: ['sobacot416@lohinja.com'],
      subject: 'Teste de envio 🚀',
      html: '<h1>Funcionou!</h1><p>Seu Resend está OK.</p>',
    });

    res.json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});
const PORT = 3001;
app.listen(PORT, () => {
    console.log("🚀 Rodando na porta", PORT);
});