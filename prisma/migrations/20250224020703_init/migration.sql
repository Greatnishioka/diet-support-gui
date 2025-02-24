-- CreateTable
CREATE TABLE "calorie_intakes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "food" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "calorie" INTEGER NOT NULL
);
