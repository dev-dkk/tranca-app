import "dotenv/config"; // Garante que lê o .env
import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  // A mágica acontece aqui:
  datasource: {
    provider: "postgresql",
    url: process.env.DATABASE_URL, 
  },
});