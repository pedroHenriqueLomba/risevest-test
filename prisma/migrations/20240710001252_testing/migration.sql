/*
  Warnings:

  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('free_user', 'premium_user', 'plus_user', 'admin_user');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'free_user',
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
