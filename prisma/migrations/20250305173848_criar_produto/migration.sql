-- CreateTable
CREATE TABLE `Produto` (
    `codigo` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `codigo_barras` VARCHAR(191) NULL,
    `quantidade` DOUBLE NOT NULL,
    `preco` DOUBLE NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
