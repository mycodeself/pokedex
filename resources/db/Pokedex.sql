-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: 0.0.0.0    Database: pokedex_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.23-MariaDB-1~jessie

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pokemon`
--

DROP TABLE IF EXISTS `pokemon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pokemon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `evolution_id` int(11) DEFAULT NULL,
  `name` varchar(24) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `primary_type` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secondary_type` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_62DC90F3CDFF215A` (`evolution_id`),
  CONSTRAINT `FK_62DC90F3CDFF215A` FOREIGN KEY (`evolution_id`) REFERENCES `pokemon` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemon`
--

LOCK TABLES `pokemon` WRITE;
/*!40000 ALTER TABLE `pokemon` DISABLE KEYS */;
INSERT INTO `pokemon` VALUES (39,40,'Bulbasaur','For some time after its birth, it grows by gaining nourishment from the seed on its back.','Grass','Poison','Bulbasaur5adb1c50bb660.png'),(40,41,'Ivysaur','When the bud on its back starts swelling, a sweet aroma wafts to indicate the flowers coming bloom.','Grass','Poison','Ivysaur5adb1c5e3cf27.png'),(41,NULL,'Venusaur','After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.','Grass','Poison','Venusaur5adb1d5715b33.png'),(42,43,'Charmander','The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.','Fire','','Charmander5adb1be99344e.png'),(43,44,'Charmeleon','In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars.','Fire','','Charmeleon5adb1bef152fd.png'),(44,NULL,'Charizard','It is said that Charizards fire burns hotter if it has experienced harsh battles.','Fire','Flying','Charizard5adb1be211105.png'),(45,46,'Squirtle','It shelters itself in its shell then strikes back with spouts of water at every opportunity.','Water','','Squirtle5adb1f2b47701.png'),(46,47,'Wartortle','It is said to live 10,000 years. Its furry tail is popular as a symbol of longevity.','Water','','Wartortle5adb1f5fca70d.png'),(47,NULL,'Blastoise','The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.','Water','','Blastoise5adb1f69592ab.png'),(48,49,'Pidgey','It is docile and prefers to avoid conflict. If disturbed, however, it can ferociously strike back.','Flying','Normal','Pidgey5adb1fa4d5ed6.png'),(49,50,'Pidgeotto','It flies over its wide territory in search of prey, downing it with its highly developed claws.','Flying','Normal','Pidgeotto5adb1fb9cd664.png'),(50,NULL,'Pidgeot','It flies over its wide territory in search of prey, downing it with its highly developed claws.','Flying','Normal','Pidgeot5adb1fbf6087e.png'),(51,52,'Pikachu','It occasionally uses an electric shock to recharge a fellow Pikachu that is in a weakened state.','Electric','','Pikachu5adb1fdfe0695.png'),(52,NULL,'Raichu','Its tail discharges electricity into the ground, protecting it from getting shocked.','Electric','','Raichu5adb1fe62bd67.png'),(53,54,'Abra','Using its psychic power is such a strain on its brain that it needs to sleep for 18 hours a day.','Psychic','','Abra5adb20207138e.png'),(54,55,'Kadabra','It stares at its silver spoon to focus its mind. It emits more alpha waves while doing so.','Psychic','','Kadabra5adb202b349c8.png'),(55,NULL,'Alakazam','The spoons clutched in its hands are said to have been created by its psychic powers.','Psychic','','Alakazam5adb2034732a7.png'),(56,57,'Machop','Though small in stature, it is powerful enough to easily heft and throw a number of Geodude at once.','Fighting','','Machop5adb2401cccba.png'),(57,58,'Machoke','It happily carries heavy cargo to toughen up. It willingly does hard work for people.','Fighting','','Machoke5adb2411a0980.png'),(58,NULL,'Machamp','Its four muscled arms slam foes with powerful punches and chops at blinding speed.','Fighting','','Machamp5adb241e1c3e8.png');
/*!40000 ALTER TABLE `pokemon` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-22 21:52:03
