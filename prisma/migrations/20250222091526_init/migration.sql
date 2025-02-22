-- CreateTable
CREATE TABLE `Field` (
    `fieldCode` VARCHAR(191) NOT NULL,
    `fieldName` VARCHAR(191) NOT NULL,
    `fieldLocation` VARCHAR(191) NOT NULL,
    `fieldSize` DECIMAL(65, 30) NOT NULL,
    `fieldImage01` VARCHAR(191) NOT NULL,
    `fieldImage02` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`fieldCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
