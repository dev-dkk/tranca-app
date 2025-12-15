import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = "admin@belezafro.com"; // Seu email de admin
  const senha = "admin123";          // Sua senha

  // Verifica se já existe
  const exists = await prisma.users.findUnique({ where: { email } });
  if (exists) {
    console.log("⚠️ O Admin já existe!");
    return;
  }

  const hash = await bcrypt.hash(senha, 10);

  await prisma.users.create({
    data: {
      name: "Administrador Mestre",
      email: email,
      password_hash: hash,
      // NOVOS DADOS OBRIGATÓRIOS:
      cpf: "000.000.000-00", // CPF fictício pro Admin
      phone: "(00) 00000-0000",
      role: "ADMIN"
    }
  });

  console.log(`✅ Admin criado! \nEmail: ${email} \nSenha: ${senha}`);
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());