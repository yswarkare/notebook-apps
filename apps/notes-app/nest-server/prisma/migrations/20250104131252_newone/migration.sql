/*
  Warnings:

  - You are about to drop the column `orderId` on the `reference_urls` table. All the data in the column will be lost.
  - You are about to drop the `_ArticleToReferencesUrl` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CliffNotesToReferencesUrl` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_NotebookToReferencesUrl` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_QuestionToReferencesUrl` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ReferencesUrlToSection` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name,notebookId,createdBy]` on the table `articles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderId,notebookId,createdBy]` on the table `articles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,notebookId,createdBy]` on the table `cliff_notes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderId,notebookId,createdBy]` on the table `cliff_notes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url,createdBy]` on the table `images` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderId,createdBy]` on the table `images` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,userId]` on the table `notebooks` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderId,userId]` on the table `notebooks` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,articleId,createdBy]` on the table `questions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderId,articleId,createdBy]` on the table `questions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url,createdBy]` on the table `reference_urls` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,articleId,createdBy]` on the table `sections` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderId,articleId,createdBy]` on the table `sections` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,createdBy]` on the table `tags` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_ArticleToReferencesUrl" DROP CONSTRAINT "_ArticleToReferencesUrl_A_fkey";

-- DropForeignKey
ALTER TABLE "_ArticleToReferencesUrl" DROP CONSTRAINT "_ArticleToReferencesUrl_B_fkey";

-- DropForeignKey
ALTER TABLE "_CliffNotesToReferencesUrl" DROP CONSTRAINT "_CliffNotesToReferencesUrl_A_fkey";

-- DropForeignKey
ALTER TABLE "_CliffNotesToReferencesUrl" DROP CONSTRAINT "_CliffNotesToReferencesUrl_B_fkey";

-- DropForeignKey
ALTER TABLE "_NotebookToReferencesUrl" DROP CONSTRAINT "_NotebookToReferencesUrl_A_fkey";

-- DropForeignKey
ALTER TABLE "_NotebookToReferencesUrl" DROP CONSTRAINT "_NotebookToReferencesUrl_B_fkey";

-- DropForeignKey
ALTER TABLE "_QuestionToReferencesUrl" DROP CONSTRAINT "_QuestionToReferencesUrl_A_fkey";

-- DropForeignKey
ALTER TABLE "_QuestionToReferencesUrl" DROP CONSTRAINT "_QuestionToReferencesUrl_B_fkey";

-- DropForeignKey
ALTER TABLE "_ReferencesUrlToSection" DROP CONSTRAINT "_ReferencesUrlToSection_A_fkey";

-- DropForeignKey
ALTER TABLE "_ReferencesUrlToSection" DROP CONSTRAINT "_ReferencesUrlToSection_B_fkey";

-- AlterTable
ALTER TABLE "reference_urls" DROP COLUMN "orderId";

-- DropTable
DROP TABLE "_ArticleToReferencesUrl";

-- DropTable
DROP TABLE "_CliffNotesToReferencesUrl";

-- DropTable
DROP TABLE "_NotebookToReferencesUrl";

-- DropTable
DROP TABLE "_QuestionToReferencesUrl";

-- DropTable
DROP TABLE "_ReferencesUrlToSection";

-- CreateTable
CREATE TABLE "_ArticleToReferenceUrl" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_ArticleToReferenceUrl_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CliffNotesToReferenceUrl" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_CliffNotesToReferenceUrl_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_NotebookToReferenceUrl" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_NotebookToReferenceUrl_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_QuestionToReferenceUrl" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_QuestionToReferenceUrl_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ReferenceUrlToSection" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_ReferenceUrlToSection_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ArticleToReferenceUrl_B_index" ON "_ArticleToReferenceUrl"("B");

-- CreateIndex
CREATE INDEX "_CliffNotesToReferenceUrl_B_index" ON "_CliffNotesToReferenceUrl"("B");

-- CreateIndex
CREATE INDEX "_NotebookToReferenceUrl_B_index" ON "_NotebookToReferenceUrl"("B");

-- CreateIndex
CREATE INDEX "_QuestionToReferenceUrl_B_index" ON "_QuestionToReferenceUrl"("B");

-- CreateIndex
CREATE INDEX "_ReferenceUrlToSection_B_index" ON "_ReferenceUrlToSection"("B");

-- CreateIndex
CREATE UNIQUE INDEX "articles_name_notebookId_createdBy_key" ON "articles"("name", "notebookId", "createdBy");

-- CreateIndex
CREATE UNIQUE INDEX "articles_orderId_notebookId_createdBy_key" ON "articles"("orderId", "notebookId", "createdBy");

-- CreateIndex
CREATE UNIQUE INDEX "cliff_notes_name_notebookId_createdBy_key" ON "cliff_notes"("name", "notebookId", "createdBy");

-- CreateIndex
CREATE UNIQUE INDEX "cliff_notes_orderId_notebookId_createdBy_key" ON "cliff_notes"("orderId", "notebookId", "createdBy");

-- CreateIndex
CREATE UNIQUE INDEX "images_url_createdBy_key" ON "images"("url", "createdBy");

-- CreateIndex
CREATE UNIQUE INDEX "images_orderId_createdBy_key" ON "images"("orderId", "createdBy");

-- CreateIndex
CREATE UNIQUE INDEX "notebooks_name_userId_key" ON "notebooks"("name", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "notebooks_orderId_userId_key" ON "notebooks"("orderId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "questions_name_articleId_createdBy_key" ON "questions"("name", "articleId", "createdBy");

-- CreateIndex
CREATE UNIQUE INDEX "questions_orderId_articleId_createdBy_key" ON "questions"("orderId", "articleId", "createdBy");

-- CreateIndex
CREATE UNIQUE INDEX "reference_urls_url_createdBy_key" ON "reference_urls"("url", "createdBy");

-- CreateIndex
CREATE UNIQUE INDEX "sections_name_articleId_createdBy_key" ON "sections"("name", "articleId", "createdBy");

-- CreateIndex
CREATE UNIQUE INDEX "sections_orderId_articleId_createdBy_key" ON "sections"("orderId", "articleId", "createdBy");

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_createdBy_key" ON "tags"("name", "createdBy");

-- AddForeignKey
ALTER TABLE "_ArticleToReferenceUrl" ADD CONSTRAINT "_ArticleToReferenceUrl_A_fkey" FOREIGN KEY ("A") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticleToReferenceUrl" ADD CONSTRAINT "_ArticleToReferenceUrl_B_fkey" FOREIGN KEY ("B") REFERENCES "reference_urls"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CliffNotesToReferenceUrl" ADD CONSTRAINT "_CliffNotesToReferenceUrl_A_fkey" FOREIGN KEY ("A") REFERENCES "cliff_notes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CliffNotesToReferenceUrl" ADD CONSTRAINT "_CliffNotesToReferenceUrl_B_fkey" FOREIGN KEY ("B") REFERENCES "reference_urls"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotebookToReferenceUrl" ADD CONSTRAINT "_NotebookToReferenceUrl_A_fkey" FOREIGN KEY ("A") REFERENCES "notebooks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotebookToReferenceUrl" ADD CONSTRAINT "_NotebookToReferenceUrl_B_fkey" FOREIGN KEY ("B") REFERENCES "reference_urls"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionToReferenceUrl" ADD CONSTRAINT "_QuestionToReferenceUrl_A_fkey" FOREIGN KEY ("A") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionToReferenceUrl" ADD CONSTRAINT "_QuestionToReferenceUrl_B_fkey" FOREIGN KEY ("B") REFERENCES "reference_urls"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReferenceUrlToSection" ADD CONSTRAINT "_ReferenceUrlToSection_A_fkey" FOREIGN KEY ("A") REFERENCES "reference_urls"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReferenceUrlToSection" ADD CONSTRAINT "_ReferenceUrlToSection_B_fkey" FOREIGN KEY ("B") REFERENCES "sections"("id") ON DELETE CASCADE ON UPDATE CASCADE;
