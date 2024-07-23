/*
  Warnings:

  - You are about to drop the column `itemId` on the `orders_table` table. All the data in the column will be lost.
  - Added the required column `userId` to the `orders_table` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "orders_table" DROP CONSTRAINT "orders_table_itemId_fkey";

-- AlterTable
ALTER TABLE "orders_table" DROP COLUMN "itemId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "orders_table" ADD CONSTRAINT "orders_table_userId_fkey" FOREIGN KEY ("userId") REFERENCES "items_table"("itemId") ON DELETE RESTRICT ON UPDATE CASCADE;
