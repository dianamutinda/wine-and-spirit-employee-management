-- CreateTable
CREATE TABLE "items_table" (
    "itemId" TEXT NOT NULL,
    "itemname" TEXT NOT NULL,
    "imageurl" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "items_table_pkey" PRIMARY KEY ("itemId")
);

-- AddForeignKey
ALTER TABLE "items_table" ADD CONSTRAINT "items_table_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
