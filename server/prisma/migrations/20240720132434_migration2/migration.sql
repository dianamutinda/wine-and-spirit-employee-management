-- AlterTable
ALTER TABLE "users_table" ALTER COLUMN "role" SET DEFAULT 'user',
ALTER COLUMN "approvedAccount" DROP NOT NULL;
