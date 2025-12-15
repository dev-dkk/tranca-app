import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("🔍 Verificando modelos do Prisma...");
  
  // Lista todas as chaves dentro do objeto prisma para ver os nomes das tabelas
  const chaves = Object.keys(prisma);
  
  console.log("Tabelas disponíveis:", chaves.filter(key => !key.startsWith('_') && !key.startsWith('$')));
}

main();