/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `passed` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "passed_user_id_key" ON "passed"("user_id");
