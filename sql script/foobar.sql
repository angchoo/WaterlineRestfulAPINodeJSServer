-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.5.5-10.0.10-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             8.0.0.4396
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for foobar
DROP DATABASE IF EXISTS `foobar`;
CREATE DATABASE IF NOT EXISTS `foobar` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `foobar`;


-- Dumping structure for table foobar.pet
DROP TABLE IF EXISTS `pet`;
CREATE TABLE IF NOT EXISTS `pet` (
  `name` varchar(255) DEFAULT NULL,
  `breed` varchar(255) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table foobar.pet: ~3 rows (approximately)
DELETE FROM `pet`;
/*!40000 ALTER TABLE `pet` DISABLE KEYS */;
INSERT INTO `pet` (`name`, `breed`, `id`, `createdAt`, `updatedAt`) VALUES
	('Fish', 'water', 4, NULL, NULL),
	('Pig', 'bread', 5, NULL, NULL),
	('Loin', 'meat', 6, NULL, NULL);
/*!40000 ALTER TABLE `pet` ENABLE KEYS */;


-- Dumping structure for view foobar.vw_count_pet
DROP VIEW IF EXISTS `vw_count_pet`;
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `vw_count_pet` (
	`table_name` VARCHAR(64) NOT NULL COLLATE 'utf8_general_ci',
	`table_rows` BIGINT(21) UNSIGNED NULL
) ENGINE=MyISAM;


-- Dumping structure for view foobar.vw_count_pet
DROP VIEW IF EXISTS `vw_count_pet`;
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `vw_count_pet`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` VIEW `foobar`.`vw_count_pet` AS select table_name,table_rows from information_schema.`TABLES`
where table_schema='foobar'
and table_name='pet' ;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
