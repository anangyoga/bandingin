-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "dimension" TEXT NOT NULL,
    "display" TEXT NOT NULL,
    "chipset" TEXT NOT NULL,
    "memory" INTEGER NOT NULL,
    "battery" INTEGER NOT NULL,
    "front_camera" INTEGER NOT NULL,
    "rear_camera" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
