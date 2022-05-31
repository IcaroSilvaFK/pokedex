/*
  Warnings:

  - You are about to drop the `Ability` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Stats` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ability" DROP CONSTRAINT "Ability_poke_id_fkey";

-- DropForeignKey
ALTER TABLE "Stats" DROP CONSTRAINT "Stats_poke_id_fkey";

-- DropTable
DROP TABLE "Ability";

-- DropTable
DROP TABLE "Stats";

-- CreateTable
CREATE TABLE "ability" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "poke_id" TEXT NOT NULL,

    CONSTRAINT "ability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stats" (
    "id" TEXT NOT NULL,
    "base_stat" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "poke_id" TEXT NOT NULL,

    CONSTRAINT "stats_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ability" ADD CONSTRAINT "ability_poke_id_fkey" FOREIGN KEY ("poke_id") REFERENCES "pokes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stats" ADD CONSTRAINT "stats_poke_id_fkey" FOREIGN KEY ("poke_id") REFERENCES "pokes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
