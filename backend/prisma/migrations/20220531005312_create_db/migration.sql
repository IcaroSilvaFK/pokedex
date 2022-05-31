-- CreateTable
CREATE TABLE "pokes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,

    CONSTRAINT "pokes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ability" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "poke_id" TEXT NOT NULL,

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sprites" (
    "id" TEXT NOT NULL,
    "back_default" TEXT NOT NULL,
    "back_shiny" TEXT NOT NULL,
    "front_default" TEXT NOT NULL,
    "front_shiny" TEXT NOT NULL,
    "front_default_svg" TEXT NOT NULL,
    "poke_id" TEXT NOT NULL,

    CONSTRAINT "sprites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "poke_id" TEXT NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stats" (
    "id" TEXT NOT NULL,
    "base_stat" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "poke_id" TEXT NOT NULL,

    CONSTRAINT "Stats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sprites_poke_id_key" ON "sprites"("poke_id");

-- AddForeignKey
ALTER TABLE "Ability" ADD CONSTRAINT "Ability_poke_id_fkey" FOREIGN KEY ("poke_id") REFERENCES "pokes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sprites" ADD CONSTRAINT "sprites_poke_id_fkey" FOREIGN KEY ("poke_id") REFERENCES "pokes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_poke_id_fkey" FOREIGN KEY ("poke_id") REFERENCES "pokes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_poke_id_fkey" FOREIGN KEY ("poke_id") REFERENCES "pokes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
