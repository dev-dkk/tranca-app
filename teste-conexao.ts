// Arquivo: teste-conexao.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Tenta buscar os serviços que inserimos via SQL
  const servicos = await prisma.services.findMany()
  console.log('--- CONEXÃO COM SUCESSO! ---')
  console.log('Serviços encontrados no banco:')
  console.log(servicos)
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect())