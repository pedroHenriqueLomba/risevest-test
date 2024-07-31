/*
  Warnings:

  - You are about to drop the column `path` on the `File` table. All the data in the column will be lost.
  - Added the required column `identifier` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "path",
ADD COLUMN     "identifier" TEXT NOT NULL,
ALTER COLUMN "description" SET DEFAULT '';
