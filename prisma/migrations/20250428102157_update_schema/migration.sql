-- CreateTable
CREATE TABLE `Agents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `agent_name` VARCHAR(100) NOT NULL,
    `password` TEXT NOT NULL,
    `role` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `client_name` VARCHAR(100) NOT NULL,
    `password` TEXT NOT NULL,
    `phone_number` TEXT NOT NULL,
    `city` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Materials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `date_added` INTEGER NOT NULL,
    `agent_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoriesOfMaterials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `image` VARCHAR(200) NOT NULL,
    `material_id` INTEGER NOT NULL,
    `parent_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoriesDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `It_detail_name` VARCHAR(200) NOT NULL,
    `code` VARCHAR(100) NOT NULL,
    `dimensions` TEXT NOT NULL,
    `total` BIGINT NOT NULL,
    `rest` INTEGER NOT NULL,
    `remaining` INTEGER NOT NULL,
    `category_material_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `client_id` INTEGER NOT NULL,
    `agent_id` INTEGER NOT NULL,
    `order_date` DATE NOT NULL,
    `order_status` VARCHAR(50) NOT NULL,
    `order` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categories_detail_id` INTEGER NOT NULL,
    `count` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `order_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NotificationsAndNotes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `client_id` INTEGER NOT NULL,
    `agent_id` INTEGER NOT NULL,
    `title` TEXT NOT NULL,
    `body` TEXT NOT NULL,
    `Notice_Date` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Materials` ADD CONSTRAINT `Materials_agent_id_fkey` FOREIGN KEY (`agent_id`) REFERENCES `Agents`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriesOfMaterials` ADD CONSTRAINT `CategoriesOfMaterials_material_id_fkey` FOREIGN KEY (`material_id`) REFERENCES `Materials`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriesDetails` ADD CONSTRAINT `CategoriesDetails_category_material_id_fkey` FOREIGN KEY (`category_material_id`) REFERENCES `CategoriesOfMaterials`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_agent_id_fkey` FOREIGN KEY (`agent_id`) REFERENCES `Agents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderDetails` ADD CONSTRAINT `OrderDetails_categories_detail_id_fkey` FOREIGN KEY (`categories_detail_id`) REFERENCES `CategoriesDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderDetails` ADD CONSTRAINT `OrderDetails_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NotificationsAndNotes` ADD CONSTRAINT `NotificationsAndNotes_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NotificationsAndNotes` ADD CONSTRAINT `NotificationsAndNotes_agent_id_fkey` FOREIGN KEY (`agent_id`) REFERENCES `Agents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
