/*
  Warnings:

  - Added the required column `amount_total` to the `appointments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "appointments" DROP CONSTRAINT "appointments_service_id_fkey";

-- DropForeignKey
ALTER TABLE "appointments" DROP CONSTRAINT "appointments_user_id_fkey";

-- AlterTable
ALTER TABLE "appointments" ADD COLUMN     "amount_paid" DOUBLE PRECISION,
ADD COLUMN     "amount_total" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "payment_id" TEXT,
ADD COLUMN     "payment_link" TEXT,
ADD COLUMN     "payment_status" TEXT NOT NULL DEFAULT 'PENDING';

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
