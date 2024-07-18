-- CreateTable
CREATE TABLE "users_table" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_table_username_key" ON "users_table"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_table_email_key" ON "users_table"("email");
