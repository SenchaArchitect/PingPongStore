# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.6.11)
# Database: orders
# Generation Time: 2013-06-03 21:20:48 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Customers
# ------------------------------------------------------------

CREATE TABLE `Customers` (
  `customerId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `state` char(2) DEFAULT NULL,
  `zip` mediumint(6) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `fax` varchar(20) DEFAULT NULL,
  `category` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`customerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Customers` WRITE;
/*!40000 ALTER TABLE `Customers` DISABLE KEYS */;

INSERT INTO `Customers` (`customerId`, `name`, `address`, `city`, `state`, `zip`, `phone`, `fax`, `category`)
VALUES
	(1000,'Sencha, Inc.','1700 Seaport Boulevard','Redwood City','CA',94301,'1-800-SENCHA1','1-800-SENCHA2','SMB'),
	(1001,'Abraham Elias','555 Center Ave','Palo Alto','CA',94306,'305-555-1234',NULL,'Individual'),
	(1002,'Aaron Conran','123 Hawthorne Ave','Palo Alto','CA',94301,'443-123-5555',NULL,'Individual'),
	(1003,'Jason Johnston','999 Main St','Denver','CO',80227,'720-678-5555',NULL,'Individual'),
	(1004,'CourtEXPRESS','301 E. Patrick St','Frederick','MD',21701,'301-321-1234',NULL,'Enterprise'),
	(1005,'John Doe','1290 Trent Ave','Austin','TX',78701,'512-999-1111',NULL,'Team'),
	(1006,'TLI Systems','34 Floral St','New York','NY',10003,'212-678-2324',NULL,'Enterprise');

/*!40000 ALTER TABLE `Customers` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Employees
# ------------------------------------------------------------

CREATE TABLE `Employees` (
  `employeeId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL DEFAULT '',
  `title` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`employeeId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Employees` WRITE;
/*!40000 ALTER TABLE `Employees` DISABLE KEYS */;

INSERT INTO `Employees` (`employeeId`, `name`, `title`)
VALUES
	(1,'Ron Burgundy','CEO'),
	(2,'Brian Fantana','Inventory manager'),
	(3,'Champ Kind','Associate'),
	(4,'Brick Tamland','Associate');

/*!40000 ALTER TABLE `Employees` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Items
# ------------------------------------------------------------

CREATE TABLE `Items` (
  `itemId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` text,
  `imgUrl` varchar(255) DEFAULT NULL,
  `quantityInStock` int(11) DEFAULT NULL,
  `bin` varchar(4) DEFAULT NULL,
  `lot` int(11) DEFAULT NULL,
  `perUnitPrice` float DEFAULT NULL,
  PRIMARY KEY (`itemId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Items` WRITE;
/*!40000 ALTER TABLE `Items` DISABLE KEYS */;

INSERT INTO `Items` (`itemId`, `name`, `description`, `imgUrl`, `quantityInStock`, `bin`, `lot`, `perUnitPrice`)
VALUES
	(1000,'Nittaku Premium Bulk Pack Balls (Ten Dozen)','This is the Nittaku 3-Star Premium Balls, packaged as 10 dozen loose balls in a bulk box. (This means 10 dozen of loose balls in one box with no inner packaging). The Nittaku 3-Star Premium 40mm ball is the highest grade of Nittaku 3-Star balls. It is manufactured in Japan by Nittaku to higher specifications with higher quality material than any other ball. It stands in a classification of its own. Nittaku 3-Star Premium balls are more consistant in hardness and they last longer than any other ball in the world. Label on ball says \"Premium 40, Made in Japan\".','balls/nittakubulk.jpg',50,'A',1,208.95),
	(1001,'Nittaku Large 44mm Balls (One Dozen)','44mm Nittaku 3-Star balls. Standard size is 40mm. These are extra-large 44mm balls for the 44mm game. Slower speed, less spin--easier to see, hit, and control. Top quality, made in Japan by Nittaku. Orange only.','balls/nittakularge.jpg',49,'A',2,25.95),
	(1002,'Nittaku 3-Star Balls (One Dozen)','The Nittaku 3-Star 40mm ball is a high quality 3-star ball, exceeding the highest standards for ITTF approval. This ball is made in China, as are virtually all 3-Star balls of the major brands. Label on ball says \"40\" and \"Japan\". Packaged in boxes of 3 balls. Available in white or orange.','balls/nittaku3.jpg',50,'B',4,17.95),
	(1003,'Nittaku Premium 3* Balls (One Dozen)','The Nittaku 3-Star Premium 40mm table tennis ball is the highest grade of Nittaku 3-Star balls. It is manufactured in Japan by Nittaku to higher specifications with higher quality material than any other ball. It stands in a classification of its own. Nittaku 3-Star Premium balls are more consistant in hardness and they last longer than any other ball in the world. Label on ball says \"Premium 40, Made in Japan\". The best ball in any dimension!','balls/nittaku3*.jpg',50,'A',2,25.95),
	(1004,'Stiga Rosewood XO','STIGA Rosewood XO: For the attack player with finesse! Built with exclusive Rosewood outer veneers that have been aged and seasoned since the first introduction of Rosewood NCT blades in 2008. The extraordinary high quality wood with its beautiful pattern and excellent construction provides outstanding feeling and touch with a smooth sound, for a performance that is equal to its great beauty. Rosewood XO provides extra speed and feeling compared to the Rosewood NCT V. \nRosewood XO: For the attack player with finesse!','blades/ssrox.jpg',50,'D',12,209.95),
	(1005,'Nittaku Acoustic','The Acoustic blade is made with special wood lamination technology originally used in striged instrument production. Feel the blade in every part of your hand. Thicker wood productes solid feeling for close-to-table topspin play.','blades/snaco.jpg',49,'C',14,149.95),
	(1006,'Tibhar Texo ALL','5-ply classical Allround wood based on control and stability, The TEXO ALL from TIBHAR is perfectly adapted to controlled, variable, spin-oriented strokes. It permits all the techniques of the game ranging from block, push, counter, topspin or shot. Balance is the key word to describe this straight-forward blade.','blades/sttea.jpg',47,'E',10,45.95),
	(1007,'Stiga STS 420 Table','Best Buy with a 1\" Top! Quick, Easy Assembly!\n\nThis table features a full 1\" thick top and a 2.5\" steel apron with integrated ball storage on each end. Four 5\" mag-style wheels give the table easy maneuverability when folded, and 2.5\" square steel legs with adjustable levelers provide excellent stability. The table comes with a premium net set with spring clip mounting, allowing easy removal and adjustment. The Quickplay chassis design comes partially assembled, making final assembly quick and easy. The compact storage position makes it safer to move due to the low center of gravity. The table folds for playback as well as storage.\n\nMeasures 62\" x 60\" x 30\" in storage position','tables/te420.jpg',50,'T',1,899),
	(1008,'Stiga Optimum 30','The Stiga Optimum 30 sets a new standard for consistency and design in table tennis tables. With a 30 mm (1.2 inch) top, the thickest in the sport and 20% thicker than its closest competitor, the Optimum 30 has the most even and consistent bounce of any table. ITTF approved and made in Germany, this table represents the pinnacle of current table tennis tables.\nUsed at the famous SPiN clubs in New York, Los Angeles, Milwaukee, and Toronto, these tables represent the leading edge of modern table design. The playing surface is coated with a special varnish, formulated to produce the ideal amount of friction and guarantee the truest bounce even with today\'s ultra-high spin game. The edge and center lines are silk screened for even placement and professional appearance.\n\nThe undercarriage has also been specially designed to correctly support the table top and make set up and storage easy even with the increased weight. Features include a 2.4 inch steel apron, 2.4 by 1.6 inch steel legs with levelers, and 4 inch locking ball-bearing casters. The table separates into two halves, each with their own set of four casters for easy movement, compact storage and use in playback position. Stiga has also designed unique, patented connecters to join the two halves for play. The Optimum 30 also comes with a high-quality Stiga VM net set.\n\nStiga\'s Optimum 30 table sets a new standard for top-quality table tennis play. You want the best? There is only one optimum choice, the Optimum 30.','tables/teop3.jpg',50,'T',3,1399),
	(1009,'Butterfly Home Rollaway','The Home Rollaway tables are Butterfly\'s most lightweight and economical home use playback tables ever! They are ideal for the garage or basement. Two safety levers on each table side provide an effective child safety feature. Folds into playback and storage positions.\nThis table includes a two year warranty against factory defective merchandise.','tables/tbhom.jpg',49,'T',5,499.99);

/*!40000 ALTER TABLE `Items` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table LineItems
# ------------------------------------------------------------

CREATE TABLE `LineItems` (
  `lineItemId` int(11) NOT NULL AUTO_INCREMENT,
  `orderId` int(11) DEFAULT NULL,
  `customerId` int(11) DEFAULT NULL,
  `itemId` int(11) DEFAULT NULL,
  `quantityOrdered` int(11) DEFAULT NULL,
  `perUnitPrice` float DEFAULT NULL,
  `totalPrice` float DEFAULT NULL,
  `packDate` datetime DEFAULT NULL,
  `shipDate` datetime DEFAULT NULL,
  PRIMARY KEY (`lineItemId`),
  KEY `orderId_idx` (`orderId`),
  KEY `customerId_idx` (`customerId`),
  KEY `itemId_idx` (`itemId`),
  CONSTRAINT `lineItems_customerId` FOREIGN KEY (`customerId`) REFERENCES `Customers` (`customerId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `lineItems_itemId` FOREIGN KEY (`itemId`) REFERENCES `Items` (`itemId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `lineItems_orderId` FOREIGN KEY (`orderId`) REFERENCES `Orders` (`orderId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `LineItems` WRITE;
/*!40000 ALTER TABLE `LineItems` DISABLE KEYS */;

INSERT INTO `LineItems` (`lineItemId`, `orderId`, `customerId`, `itemId`, `quantityOrdered`, `perUnitPrice`, `totalPrice`, `packDate`, `shipDate`)
VALUES
	(1,1000,1002,1000,1,208.95,208.95,'2013-03-02 20:26:19','2013-03-02 20:26:41'),
	(2,1000,1002,1004,1,209.95,209.95,'2013-03-02 20:26:21','2013-03-02 20:26:41'),
	(3,1000,1002,1006,1,45.95,45.95,NULL,NULL),
	(4,1000,1002,1005,1,149.95,149.95,NULL,NULL),
	(5,1000,1002,1007,1,899,899,NULL,NULL),
	(6,1001,1005,1009,1,499.99,499.99,NULL,NULL),
	(7,1001,1005,1006,4,45.95,183.8,NULL,NULL),
	(8,1001,1005,1003,1,25.95,25.95,NULL,NULL),
	(9,1002,1000,1000,1,208.95,208.95,'2013-03-02 20:26:45','2013-03-02 20:26:56'),
	(10,1002,1000,1008,1,1399,1399,'2013-03-02 20:26:47','2013-03-02 20:26:56'),
	(11,1002,1000,1004,4,209.95,839.8,'2013-03-02 20:26:48','2013-03-02 20:26:56'),
	(12,1002,1000,1006,4,45.95,183.8,'2013-03-02 20:26:51','2013-03-02 20:26:56'),
	(13,1003,1003,1004,1,209.95,209.95,NULL,NULL),
	(14,1004,1004,1009,1,499.99,499.99,NULL,NULL),
	(15,1004,1004,1006,4,45.95,183.8,NULL,NULL),
	(16,1004,1004,1003,1,25.95,25.95,NULL,NULL),
	(17,1005,1001,1004,1,209.95,209.95,NULL,NULL),
	(18,1005,1001,1005,1,149.95,149.95,NULL,NULL),
	(19,1005,1001,1006,1,45.95,45.95,NULL,NULL),
	(20,1006,1006,1008,1,1399,1399,'2013-03-02 20:27:02','2013-03-02 20:28:46'),
	(21,1006,1006,1005,4,149.95,599.8,'2013-03-02 20:27:04','2013-03-02 20:28:46'),
	(22,1006,1006,1002,1,17.95,17.95,'2013-03-02 20:28:43','2013-03-02 20:28:46'),
	(23,1007,1000,1005,1,149.95,149.95,'2013-05-22 17:02:29','2013-05-22 17:02:31'),
	(24,1007,1000,1001,1,25.95,25.95,'2013-05-22 17:01:32','2013-05-22 17:02:31'),
	(25,1008,1000,1006,3,45.95,137.85,'2013-05-24 13:17:45',NULL),
	(26,1009,1001,1009,1,499.99,499.99,'2013-05-28 10:18:23',NULL),
	(27,1010,1001,1004,1,209.95,209.95,NULL,NULL),
	(28,1011,1002,1005,10,149.95,1499.5,NULL,NULL),
	(29,1012,1003,1008,5,1399,6995,NULL,NULL),
	(30,1012,1003,1004,1,209.95,209.95,NULL,NULL),
	(31,1013,1004,1007,1,899,899,NULL,NULL),
	(32,1014,1005,1000,1,208.95,208.95,NULL,NULL),
	(33,1014,1005,1001,1,25.95,25.95,NULL,NULL),
	(34,1015,1006,1004,1,209.95,209.95,NULL,NULL),
	(35,1016,1000,1000,9,208.95,1880.55,NULL,NULL),
	(36,1017,1005,1005,15,149.95,2249.25,NULL,NULL),
	(37,1018,1004,1009,15,499.99,7499.85,NULL,NULL),
	(38,1019,1000,1000,1,208.95,208.95,NULL,NULL),
	(39,1020,1000,1000,1,208.95,208.95,NULL,NULL),
	(40,1021,1000,1005,1,149.95,149.95,NULL,NULL),
	(41,1021,1000,1006,1,45.95,45.95,NULL,NULL),
	(42,1021,1000,1007,1,899,899,NULL,NULL),
	(43,1022,1000,1007,5,899,4729.75,NULL,NULL),
	(44,1023,1000,1007,5,899,4729.75,NULL,NULL),
	(45,1024,1000,1007,5,899,4729.75,NULL,NULL),
	(46,1025,1000,1007,5,899,4729.75,NULL,NULL),
	(47,1026,1001,1007,10,899,9449.5,NULL,NULL),
	(48,1027,1001,1007,7,899,6617.65,NULL,NULL),
	(49,1028,1001,1007,5,899,4729.75,NULL,NULL),
	(50,1029,1006,1007,5,899,4729.75,NULL,NULL),
	(51,1030,1006,1007,5,899,4729.75,NULL,NULL),
	(52,1031,1006,1007,5,899,4729.75,NULL,NULL),
	(53,1032,1006,1007,6,899,5673.7,NULL,NULL),
	(54,1033,1004,1007,5,899,4729.75,NULL,NULL),
	(55,1034,1004,1007,5,899,4729.75,NULL,NULL),
	(56,1035,1004,1007,5,899,4729.75,NULL,NULL),
	(57,1036,1004,1007,5,899,4729.75,NULL,NULL),
	(58,1037,1005,1007,10,899,9449.5,NULL,NULL),
	(59,1038,1005,1007,10,899,9449.5,NULL,NULL),
	(60,1039,1005,1008,4,1399,5885.8,NULL,NULL),
	(61,1042,1000,1001,165,25.95,4505.84,NULL,NULL),
	(62,1043,1005,1007,8,899,7561.6,NULL,NULL),
	(63,1044,1004,1006,167,45.95,8067.33,NULL,NULL),
	(64,1045,1002,1009,12,499.99,6309.87,NULL,NULL),
	(65,1046,1005,1009,21,499.99,11034.8,NULL,NULL);

/*!40000 ALTER TABLE `LineItems` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Orders
# ------------------------------------------------------------

CREATE TABLE `Orders` (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `orderNo` varchar(15) DEFAULT NULL,
  `customerId` int(11) DEFAULT NULL,
  `orderDate` datetime DEFAULT NULL,
  `shipDate` datetime DEFAULT NULL,
  `total` float DEFAULT NULL,
  `paid` float DEFAULT NULL,
  `tax` float DEFAULT NULL,
  `shipping` float DEFAULT NULL,
  PRIMARY KEY (`orderId`),
  KEY `customerId_idx` (`customerId`),
  CONSTRAINT `orders_customerId` FOREIGN KEY (`customerId`) REFERENCES `Customers` (`customerId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;

INSERT INTO `Orders` (`orderId`, `orderNo`, `customerId`, `orderDate`, `shipDate`, `total`, `paid`, `tax`, `shipping`)
VALUES
	(1007,'CA1007',1000,'2012-11-12 12:34:56','2013-05-22 17:02:31',204.695,NULL,8.795,10),
	(1008,'CA1008',1000,'2012-10-12 12:34:56',NULL,154.742,NULL,6.8925,10),
	(1009,'CA1009',1001,'2013-02-12 12:34:56',NULL,534.99,NULL,24.9995,10),
	(1010,'CA1010',1001,'2013-01-12 12:34:56',NULL,230.447,NULL,10.4975,10),
	(1011,'CA1011',1002,'2012-10-12 12:34:56',NULL,1584.47,NULL,74.975,10),
	(1012,'CO1012',1003,'2012-10-12 12:34:56',NULL,7585.2,NULL,360.247,10),
	(1013,'MD1013',1004,'2013-01-12 12:34:56',NULL,953.95,NULL,44.95,10),
	(1014,'TX1014',1005,'2013-01-12 12:34:56',NULL,266.645,NULL,11.745,10),
	(1015,'NY1015',1006,'2013-01-12 12:34:56',NULL,230.447,NULL,10.4975,10),
	(1016,'CA1016',1000,'2012-10-12 12:34:56',NULL,1984.58,NULL,94.0275,10),
	(1017,'TX1017',1005,'2013-02-12 12:34:56',NULL,2371.71,NULL,112.463,10),
	(1018,'MD1018',1004,'2013-02-12 12:34:56',NULL,7884.84,NULL,374.992,10),
	(1019,'CA1019',1000,'2013-01-12 12:34:56',NULL,229.398,NULL,10.4475,10),
	(1020,'CA1020',1000,'2012-10-12 12:34:56',NULL,229.398,NULL,10.4475,10),
	(1021,'CA1021',1000,'2012-10-12 12:34:56',NULL,1179.65,NULL,54.745,10),
	(1022,NULL,1000,'2013-01-12 12:34:56',NULL,4729.75,NULL,224.75,10),
	(1023,NULL,1000,'2013-01-12 12:34:56',NULL,4729.75,NULL,224.75,10),
	(1024,NULL,1000,'2012-12-12 12:34:56',NULL,4729.75,NULL,224.75,10),
	(1025,NULL,1000,'2012-11-12 12:34:56',NULL,4729.75,NULL,224.75,10),
	(1026,NULL,1001,'2013-01-12 12:34:56',NULL,9449.5,NULL,449.5,10),
	(1027,NULL,1001,'2013-02-12 12:34:56',NULL,6617.65,NULL,314.65,10),
	(1028,NULL,1001,'2012-11-12 12:34:56',NULL,4729.75,NULL,224.75,10),
	(1029,NULL,1006,'2013-01-12 12:34:56',NULL,4729.75,NULL,224.75,10),
	(1030,NULL,1006,'2012-12-12 12:34:56',NULL,4729.75,NULL,224.75,10),
	(1031,NULL,1006,'2012-11-12 12:34:56',NULL,4729.75,NULL,224.75,10),
	(1032,NULL,1006,'2012-10-12 12:34:56',NULL,5673.7,NULL,269.7,10),
	(1033,NULL,1004,'2013-02-12 12:34:56',NULL,4729.75,NULL,224.75,10),
	(1034,NULL,1004,'2013-01-12 12:34:56',NULL,4729.75,NULL,224.75,10),
	(1035,NULL,1004,'2012-11-12 12:34:56',NULL,4729.75,NULL,224.75,10),
	(1036,NULL,1004,'2012-10-12 12:34:56',NULL,4729.75,NULL,224.75,10),
	(1037,NULL,1005,'2013-01-12 12:34:56',NULL,9449.5,NULL,449.5,10),
	(1038,NULL,1005,'2012-11-12 12:34:56',NULL,9449.5,NULL,449.5,10),
	(1039,NULL,1005,'2012-12-12 12:34:56',NULL,5885.8,NULL,279.8,10),
	(1042,NULL,1000,'2013-05-08 16:35:43',NULL,4505.84,NULL,214.087,10),
	(1043,NULL,1005,'2013-05-08 16:36:01',NULL,7561.6,NULL,359.6,10),
	(1044,NULL,1004,'2013-05-08 16:36:28',NULL,8067.33,NULL,383.682,10),
	(1045,NULL,1002,'2013-05-08 16:36:54',NULL,6309.87,NULL,299.994,10),
	(1046,NULL,1005,'2012-10-12 16:40:38',NULL,11034.8,NULL,524.99,10);

/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Punches
# ------------------------------------------------------------

CREATE TABLE `Punches` (
  `punchId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `employeeId` int(11) NOT NULL,
  `timeIn` datetime NOT NULL,
  `timeOut` datetime NOT NULL,
  PRIMARY KEY (`punchId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Punches` WRITE;
/*!40000 ALTER TABLE `Punches` DISABLE KEYS */;

INSERT INTO `Punches` (`punchId`, `employeeId`, `timeIn`, `timeOut`)
VALUES
	(37,1,'2013-01-01 08:30:00','2013-01-01 17:00:00'),
	(38,1,'2013-01-02 08:30:00','2013-01-02 17:00:00'),
	(39,1,'2013-01-03 08:30:00','2013-01-03 17:00:00'),
	(40,1,'2013-01-04 08:30:00','2013-01-04 17:00:00'),
	(41,1,'2013-01-05 08:30:00','2013-01-05 17:00:00'),
	(42,1,'2013-01-06 08:30:00','2013-01-06 17:00:00'),
	(43,1,'2013-01-07 08:30:00','2013-01-07 17:00:00'),
	(44,2,'2013-01-01 08:30:00','2013-01-01 17:00:00'),
	(45,2,'2013-01-02 08:30:00','2013-01-02 17:00:00'),
	(46,2,'2013-01-03 08:30:00','2013-01-03 17:00:00'),
	(47,2,'2013-01-04 08:30:00','2013-01-04 17:00:00'),
	(48,2,'2013-01-05 08:30:00','2013-01-05 17:00:00'),
	(49,2,'2013-01-06 08:30:00','2013-01-06 17:00:00'),
	(50,2,'2013-01-07 08:30:00','2013-01-07 17:00:00'),
	(51,3,'2013-01-01 08:30:00','2013-01-01 17:00:00'),
	(52,3,'2013-01-02 08:30:00','2013-01-02 17:00:00'),
	(53,3,'2013-01-03 08:30:00','2013-01-03 17:00:00'),
	(54,3,'2013-01-04 08:30:00','2013-01-04 17:00:00'),
	(55,3,'2013-01-05 08:30:00','2013-01-05 17:00:00'),
	(56,3,'2013-01-06 08:30:00','2013-01-06 17:00:00'),
	(57,3,'2013-01-07 08:30:00','2013-01-07 17:00:00'),
	(58,4,'2013-01-01 08:30:00','2013-01-01 17:00:00'),
	(59,4,'2013-01-02 08:30:00','2013-01-02 17:00:00'),
	(60,4,'2013-01-03 08:30:00','2013-01-03 17:00:00'),
	(61,4,'2013-01-04 08:30:00','2013-01-04 17:00:00'),
	(62,4,'2013-01-05 08:30:00','2013-01-05 17:00:00'),
	(63,4,'2013-01-06 08:30:00','2013-01-06 17:00:00'),
	(64,4,'2013-01-07 08:30:00','2013-01-07 17:00:00');

/*!40000 ALTER TABLE `Punches` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
