-- Active: 1674558580970@@127.0.0.1@3306@techquity
CREATE SCHEMA IF NOT EXISTS `techquity` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `techquity`;

CREATE TABLE IF NOT EXISTS `techquity`.`model` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand_id`int NOT NULL,
  `model_name` varchar(100) NOT NULL,
  `os` varchar(100) NOT NULL,
  `ram` int NOT NULL,
  `memory` int NOT NULL,
  `screen_size` decimal(10,0) NOT NULL,
  `network` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `image` varchar(255) NOT NULL,
  CONSTRAINT `model_PK` PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE IF NOT EXISTS `techquity`.`brand` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(100) NOT NULL,
  CONSTRAINT `brand_PK` PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `techquity`.`phone` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand_id` int NOT NULL,
  `model_id` int NOT NULL,
 CONSTRAINT `phone_PK` PRIMARY KEY (`id`),
CONSTRAINT `brand_FK` FOREIGN KEY (`brand_id`) REFERENCES `techquity`.`brand`(`id`),
CONSTRAINT `model_FK` FOREIGN KEY (`model_id`) REFERENCES `techquity`.`model`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

