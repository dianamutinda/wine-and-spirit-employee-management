-- DropForeignKey
ALTER TABLE "orders_table" DROP CONSTRAINT "orders_table_userId_fkey";

-- AddForeignKey
ALTER TABLE "orders_table" ADD CONSTRAINT "orders_table_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
