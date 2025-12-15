-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateEnum
CREATE TYPE "appointment_status" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('CLIENT', 'ADMIN');

-- CreateTable
CREATE TABLE "appointments" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "user_id" UUID NOT NULL,
    "service_id" UUID NOT NULL,
    "start_time" TIMESTAMPTZ(6) NOT NULL,
    "end_time" TIMESTAMPTZ(6) NOT NULL,
    "status" "appointment_status" DEFAULT 'PENDING',
    "notes" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedule_blocks" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "start_time" TIMESTAMPTZ(6) NOT NULL,
    "end_time" TIMESTAMPTZ(6) NOT NULL,
    "reason" VARCHAR(255),

    CONSTRAINT "schedule_blocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "duration_minutes" INTEGER NOT NULL,
    "image_url" VARCHAR(255),
    "active" BOOLEAN DEFAULT true,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(20) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "role" "user_role" DEFAULT 'CLIENT',
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
