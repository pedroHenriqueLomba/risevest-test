-- CreateEnum
CREATE TYPE "EnumExtension" AS ENUM ('jpg', 'jpeg', 'png', 'json', 'txt', 'pdf');

-- AlterTable
ALTER TABLE "File" ADD COLUMN     "extension" "EnumExtension";
