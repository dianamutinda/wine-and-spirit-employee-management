-- CreateTable
CREATE TABLE "orders_table" (
    "orderId" TEXT NOT NULL,
    "itemname" TEXT NOT NULL,
    "imageurl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ordereditems" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "itemId" TEXT NOT NULL,

    CONSTRAINT "orders_table_pkey" PRIMARY KEY ("orderId")
);

-- AddForeignKey
ALTER TABLE "orders_table" ADD CONSTRAINT "orders_table_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items_table"("itemId") ON DELETE RESTRICT ON UPDATE CASCADE;
