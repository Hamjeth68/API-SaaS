/*
  Warnings:

  - You are about to drop the `Communication` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "CommunicationType" AS ENUM ('ANNOUNCEMENT', 'NOTICE', 'ALERT', 'MESSAGE');

-- CreateEnum
CREATE TYPE "CommunicationPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'URGENT');

-- DropForeignKey
ALTER TABLE "Communication" DROP CONSTRAINT "Communication_senderId_fkey";

-- DropForeignKey
ALTER TABLE "Communication" DROP CONSTRAINT "Communication_tenantId_fkey";

-- DropTable
DROP TABLE "Communication";

-- CreateTable
CREATE TABLE "communications" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "audience" TEXT[],
    "type" "CommunicationType" NOT NULL DEFAULT 'ANNOUNCEMENT',
    "priority" "CommunicationPriority" NOT NULL DEFAULT 'MEDIUM',
    "sendEmail" BOOLEAN NOT NULL DEFAULT false,
    "sendNotification" BOOLEAN NOT NULL DEFAULT true,
    "scheduledAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "communications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "communication_reads" (
    "id" TEXT NOT NULL,
    "communicationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "readAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "communication_reads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "communication_reads_communicationId_userId_key" ON "communication_reads"("communicationId", "userId");

-- AddForeignKey
ALTER TABLE "communications" ADD CONSTRAINT "communications_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "communications" ADD CONSTRAINT "communications_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "communication_reads" ADD CONSTRAINT "communication_reads_communicationId_fkey" FOREIGN KEY ("communicationId") REFERENCES "communications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "communication_reads" ADD CONSTRAINT "communication_reads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
