-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: pedidos
-- ------------------------------------------------------
-- Server version	8.0.25

-- CREATE DATABASE `pedidos` 
-- /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `archivos_subidos`
--

DROP TABLE IF EXISTS `archivos_subidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `archivos_subidos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `es_imagen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nombre_original` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `imagen_original_uid` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `imagen_lowres_uid` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `archivos_subidos`
--

LOCK TABLES `archivos_subidos` WRITE;
/*!40000 ALTER TABLE `archivos_subidos` DISABLE KEYS */;
INSERT INTO `archivos_subidos` VALUES (1,'1','437580169_01532679484216039758_c.jpg','201435689_05192384674963725018_c.jpg','201435689_05396248177456931820_c.jpg','2020-01-26 10:33:11',NULL,NULL,'admin',NULL,NULL),(2,'1','CAT.png','819365720_76895410238024513967_c.jpg','819365720_26049537818374109526_c.jpg','2020-01-26 11:08:38',NULL,NULL,'admin',NULL,NULL),(3,'1','hush-puppies-apparel-profile.jpg','987362105_50367142987356081294_c.jpg','987362105_48567930129743852601_c.jpg','2020-01-26 11:08:57',NULL,NULL,'admin',NULL,NULL),(4,'1','square-converse-logo.png','209354816_87490316529456120738_c.jpg','209354816_68975342012159703846_c.jpg','2020-01-26 11:09:08',NULL,NULL,'admin',NULL,NULL),(5,'1','TIGER.jpg','879312645_69431782057439065182_c.jpg','879312645_27869453108137962540_c.jpg','2020-01-26 11:09:20',NULL,NULL,'admin',NULL,NULL),(6,'1','Vans.jpg','187964350_67514029384803175926_c.jpg','187964350_68074253910428961357_c.jpg','2020-01-26 11:09:33',NULL,NULL,'admin',NULL,NULL),(7,'1','energias.jpg','053869241_36248905718902315764_c.jpg','053869241_36785491022810536479_c.jpg','2020-01-29 09:00:17',NULL,NULL,'admin',NULL,NULL),(8,'1','71FVQUhfx5L._UY395_.jpg','517043962_46597238101508734692_c.jpg','517043962_69528473019726148503_c.jpg','2020-01-30 07:02:38',NULL,NULL,'admin',NULL,NULL),(9,'1','71rR1V+9FqL._UY395_ (1).jpg','546907128_03218659475098761432_c.jpg','546907128_19384607524267985031_c.jpg','2020-01-31 19:32:49',NULL,NULL,'admin',NULL,NULL),(10,'1','71RXCX-5-0L._UY395_.jpg','519873264_54089627311590283746_c.jpg','519873264_40953287611598023674_c.jpg','2020-01-31 19:45:49',NULL,NULL,'admin',NULL,NULL),(11,'1','25759l.jpg','285491067_70142396854186293075_c.jpg','285491067_16789024358903276514_c.jpg','2020-01-31 19:46:51',NULL,NULL,'admin',NULL,NULL),(12,'1','05746792_zi_dark_beige.jpg','612034957_76154389029326184075_c.jpg','612034957_39456280712649035871_c.jpg','2020-01-31 19:47:46',NULL,NULL,'admin',NULL,NULL),(13,'1','il_570xN.1834452742_pduy.jpg','801243657_07413629581254738609_c.jpg','801243657_07384659211679245830_c.jpg','2020-01-31 19:48:37',NULL,NULL,'admin',NULL,NULL),(14,'1','5051769-BK729.jpg','546783219_53264807196357109842_c.jpg','546783219_34729165806087342951_c.jpg','2020-01-31 19:49:19',NULL,NULL,'admin',NULL,NULL),(15,'1','Skate-Shoes-_310321.jpg','703219564_39406218752435197068_c.jpg','703219564_32560984719831642075_c.jpg','2020-01-31 19:50:18',NULL,NULL,'admin',NULL,NULL),(16,'1','onitsuka-tiger-mexico-66-1183a223-600-5.jpg','572490316_56804792130378912465_c.jpg','572490316_56137980246874351920_c.jpg','2020-02-02 06:36:17',NULL,NULL,'admin',NULL,NULL),(17,'1','2424540015_ld1.jpg','463750812_68239574108417026395_c.jpg','463750812_84736592010243159768_c.jpg','2020-02-02 07:03:31',NULL,NULL,'admin',NULL,NULL),(18,'1','cover-a6f2e6a.png','918624073_50231486979125748630_c.jpg','918624073_62437810955413869270_c.jpg','2020-02-02 07:10:42',NULL,NULL,'admin',NULL,NULL),(19,'1','bg-0c36ce4.jpg','710286953_58341907629206184735_c.jpg','710286953_36450219873549281760_c.jpg','2020-02-02 07:18:31',NULL,NULL,'admin',NULL,NULL),(20,'1','miracles.jpg','095642318_17832659400653879124_c.jpg','095642318_81375904624257813609_c.jpg','2020-02-02 07:19:00',NULL,NULL,'admin',NULL,NULL),(21,'1','vans-old-skool-warped-floral-shoes.jpg','674538201_94063275814609218357_c.jpg','674538201_71063429587324510896_c.jpg','2020-02-02 07:22:19',NULL,NULL,'admin',NULL,NULL),(22,'1','51CcSSNpXDL._AC_UY625_.jpg','812457096_71368402957369401258_c.jpg','812457096_09257418632591674830_c.jpg','2020-02-02 07:53:28',NULL,NULL,'admin',NULL,NULL),(23,'1','51CcSSNpXDL._AC_UY625_.jpg','543197802_16325987402517049683_c.jpg','543197802_36958204177941328605_c.jpg','2020-02-02 08:06:34',NULL,NULL,'admin',NULL,NULL),(24,'1','flowers_window.jpg','479035261_02683754195427103896_c.jpg','479035261_61509734822507498631_c.jpg','2020-02-02 08:38:31',NULL,NULL,'admin',NULL,NULL),(25,'1','Vizzano.png','938540627_74502819362791865340_c.jpg','938540627_69521047381345672098_c.jpg','2020-02-12 00:10:33',NULL,NULL,'admin',NULL,NULL),(26,'1','Xti.png','087645921_94256180732864503719_c.jpg','087645921_40165793824031752986_c.jpg','2020-02-12 00:11:37',NULL,NULL,'admin',NULL,NULL),(27,'1','Carmela.png','410865297_69731205485471603928_c.jpg','410865297_84265319075416980327_c.jpg','2020-02-12 00:13:53',NULL,NULL,'admin',NULL,NULL),(28,'1','XTI.png','389740216_78603259419827150463_c.jpg','389740216_76340519285136948702_c.jpg','2020-02-12 05:24:27',NULL,NULL,'admin',NULL,NULL),(29,'1','XTI.jpg','520317489_23516098478624139750_c.jpg','520317489_64285031975346901728_c.jpg','2020-02-12 23:59:12',NULL,NULL,'admin',NULL,NULL),(30,'1','XTI.jpg','321589470_36981042755381740962_c.jpg','321589470_42308917563271049856_c.jpg','2020-02-13 01:26:38',NULL,NULL,'admin',NULL,NULL),(31,'1','XTI.jpg','473658902_92315047860316425978_c.jpg','473658902_69385042717052314869_c.jpg','2020-02-13 01:30:07',NULL,NULL,'admin',NULL,NULL),(32,'1','XTI.jpg','015839764_24963781059785361420_c.jpg','015839764_71902834654912860375_c.jpg','2020-02-13 01:30:48',NULL,NULL,'admin',NULL,NULL),(33,'1','XTI.jpg','518469237_95038217462904386175_c.jpg','518469237_34980265712048963157_c.jpg','2020-02-13 01:44:45',NULL,NULL,'admin',NULL,NULL),(34,'1','XTI.jpg','285673091_49358126077152069843_c.jpg','285673091_36914280754193627508_c.jpg','2020-02-13 02:13:44',NULL,NULL,'admin',NULL,NULL),(35,'1','XTI.jpg','154968072_34865920174620573918_c.jpg','154968072_82435760190946712538_c.jpg','2020-02-13 03:17:03',NULL,NULL,'admin',NULL,NULL),(36,'1','XTI.jpg','689057124_32961047859567123840_c.jpg','689057124_78261495307890563241_c.jpg','2020-02-13 03:19:29',NULL,NULL,'admin',NULL,NULL),(37,'1','XTI.jpg','421650793_53679028419823406571_c.jpg','421650793_75816239408352967041_c.jpg','2020-02-13 03:25:31',NULL,NULL,'admin',NULL,NULL),(38,'1','XTI.jpg','895716324_12639475087413659820_c.jpg','895716324_15764928031437598206_c.jpg','2020-02-13 03:28:25',NULL,NULL,'admin',NULL,NULL),(39,'1','XTI.jpg','816405397_41690827356073591284_c.jpg','816405397_03684912750219576843_c.jpg','2020-02-13 03:35:21',NULL,NULL,'admin',NULL,NULL),(40,'1','Vizzano.jpg','917245830_89765120348024673195_c.jpg','917245830_20145689372108469735_c.jpg','2020-02-13 03:46:55',NULL,NULL,'admin',NULL,NULL),(41,'1','Rateira.jpg','253648109_87132465093806175429_c.jpg','253648109_14650839727490823615_c.jpg','2020-02-13 03:51:16',NULL,NULL,'admin',NULL,NULL),(42,'1','Rateira_Preta.jpg','594871026_87635491022340716958_c.jpg','594871026_70864532197029163584_c.jpg','2020-02-13 03:55:48',NULL,NULL,'admin',NULL,NULL),(43,'1','tenis-casual-feminino-vizzano.jpg','216398054_68504279136872390514_c.jpg','216398054_80691342570794268513_c.jpg','2020-02-13 03:57:20',NULL,NULL,'admin',NULL,NULL),(44,'1','page_1.jpg','863427519_19263587041709634258_c.jpg','863427519_28154697033061284759_c.jpg','2020-02-13 03:59:20',NULL,NULL,'admin',NULL,NULL),(45,'1','71oYICJ08jL._AC_UX500_.jpg','372856941_01328546978039471526_c.jpg','372856941_67301984524597812603_c.jpg','2020-02-13 04:50:42',NULL,NULL,'admin',NULL,NULL),(46,'1','Timberland.jpg','346850912_96743215080615379824_c.jpg','346850912_48357201963561780294_c.jpg','2020-02-13 04:54:57',NULL,NULL,'admin',NULL,NULL),(47,'1','51L8JijdJWL._AC_UX625_.jpg','780315249_13680975245834072619_c.jpg','780315249_47629358100169387452_c.jpg','2020-02-13 04:56:18',NULL,NULL,'admin',NULL,NULL);
/*!40000 ALTER TABLE `archivos_subidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrito` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_cliente` int NOT NULL,
  `id_producto` int NOT NULL,
  `cantidad` int NOT NULL,
  `precio` decimal(15,3) NOT NULL,
  `precio_total` decimal(15,3) NOT NULL,
  `tiene_descuento_porprod` int NOT NULL,
  `descuento_porprod` decimal(15,3) DEFAULT NULL,
  `precio_descuento_porprod` decimal(15,3) DEFAULT NULL,
  `precio_total_descuento_porprod` decimal(15,3) DEFAULT NULL,
  `tiene_descuento_pormrc` int NOT NULL,
  `descuento_pormrc` decimal(15,3) DEFAULT NULL,
  `precio_descuento_pormrc` decimal(15,3) DEFAULT NULL,
  `precio_total_descuento_pormrc` decimal(15,3) DEFAULT NULL,
  `id_estado_carrito` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
INSERT INTO `carrito` VALUES (1,2,3,1,640.000,640.000,1,15.000,544.000,544.000,0,NULL,NULL,NULL,17,'2020-02-12 00:06:48',NULL,NULL,'johnpaul',NULL,NULL),(2,2,9,1,526.000,526.000,1,15.000,447.000,447.000,0,NULL,NULL,NULL,17,'2020-02-12 00:06:55',NULL,NULL,'johnpaul',NULL,NULL),(3,2,1,1,625.000,625.000,1,12.000,550.000,550.000,0,NULL,NULL,NULL,17,'2020-02-12 00:08:08',NULL,NULL,'johnpaul',NULL,NULL),(4,20,2,1,720.000,720.000,0,NULL,NULL,NULL,1,15.000,612.000,612.000,17,'2020-02-12 00:19:33',NULL,NULL,'jmjose',NULL,NULL);
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogos`
--

DROP TABLE IF EXISTS `catalogos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `catalogos` (
  `id_catalogo` bigint unsigned NOT NULL AUTO_INCREMENT,
  `codigo_catalogo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `valor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_catalogo_padre` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id_catalogo`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogos`
--

LOCK TABLES `catalogos` WRITE;
/*!40000 ALTER TABLE `catalogos` DISABLE KEYS */;
INSERT INTO `catalogos` VALUES (1,'CLRS','Colores',NULL,'2020-01-27 01:31:40',NULL,NULL,'admin',NULL,NULL),(2,'AZUL','Azul',1,'2020-01-27 01:31:51',NULL,NULL,'admin',NULL,NULL),(3,'RJJ','Rojo',1,'2020-01-27 01:32:30',NULL,NULL,'admin',NULL,NULL),(4,'TPMTRL','Tipos de materiales',NULL,'2020-01-27 01:32:53',NULL,NULL,'admin',NULL,NULL),(5,'CRRR','Cuero',4,'2020-01-27 01:33:09',NULL,NULL,'admin',NULL,NULL),(6,'GMSS','Gamusa',4,'2020-01-27 01:33:21',NULL,NULL,'admin',NULL,NULL),(7,'GNRR','Géneros',NULL,'2020-01-27 01:33:35',NULL,NULL,'admin',NULL,NULL),(8,'MSCLN','Masculino',7,'2020-01-27 01:33:52',NULL,NULL,'admin',NULL,NULL),(9,'FMNN','Femenino',7,'2020-01-27 01:33:59',NULL,NULL,'admin',NULL,NULL),(10,'CTGRS','Categorías',NULL,'2020-01-27 01:34:19',NULL,NULL,'admin',NULL,NULL),(11,'ZPTSS','Zapatos',10,'2020-01-27 01:34:27','2020-02-01 22:34:17',NULL,'admin','admin',NULL),(12,'CRTSS','Carteras',10,'2020-01-27 01:34:32','2020-02-01 22:34:34',NULL,'admin','admin',NULL),(13,'CMSSTS','Camisetas',10,'2020-01-27 01:34:37','2020-02-01 22:36:54',NULL,'admin','admin',NULL),(14,'STDSCRT','Estados del carrito',NULL,'2020-02-02 02:00:58',NULL,NULL,'admin',NULL,NULL),(15,'DRAFT','Draft',14,'2020-02-02 02:01:14',NULL,NULL,'admin',NULL,NULL),(16,'VERIFIED','Verificado',14,'2020-02-02 02:04:54',NULL,NULL,'admin',NULL,NULL),(17,'APPROVED','Aprobado',14,'2020-02-02 02:05:14',NULL,NULL,'admin',NULL,NULL),(18,'MMRLL','Amarillo',1,'2020-02-02 14:35:40',NULL,NULL,'admin',NULL,NULL),(19,'VRRDD','Verde',1,'2020-02-02 14:35:48',NULL,NULL,'admin',NULL,NULL),(20,'BBLCC','Blanco',1,'2020-02-02 14:36:07',NULL,NULL,'admin',NULL,NULL),(21,'TLLL','Tela',4,'2020-02-02 14:41:34',NULL,NULL,'admin',NULL,NULL),(23,'TPPYMNT','Tipos de pago',NULL,'2020-02-02 23:40:43',NULL,NULL,'admin',NULL,NULL),(24,'CRRDT','Crédito',23,'2020-02-02 23:41:06',NULL,NULL,'admin',NULL,NULL),(25,'CNTDD','Contado',23,'2020-02-02 23:41:19',NULL,NULL,'admin',NULL,NULL),(26,'CDDDS','Ciudades',NULL,'2020-02-03 00:16:29','2020-02-03 00:18:08',NULL,'admin','admin',NULL),(27,'GRND','Granada',26,'2020-02-03 00:16:45',NULL,NULL,'admin',NULL,NULL),(28,'MSY','Masaya',26,'2020-02-03 00:18:23',NULL,NULL,'admin',NULL,NULL),(29,'MNG','Managua',26,'2020-02-03 00:18:31',NULL,NULL,'admin',NULL,NULL),(30,'RVS','Rivas',26,'2020-02-03 00:18:37',NULL,NULL,'admin',NULL,NULL),(31,'CHNDG','Chinandega',26,'2020-02-03 00:18:49',NULL,NULL,'admin',NULL,NULL),(32,'JNTH','Jinotega',26,'2020-02-03 00:19:04',NULL,NULL,'admin',NULL,NULL),(33,'MTGLP','Matagalpa',26,'2020-02-03 00:19:26',NULL,NULL,'admin',NULL,NULL),(34,'ZNSSS','Zonas',NULL,'2020-02-03 00:27:47',NULL,NULL,'admin',NULL,NULL),(35,'PCFC','Pacifico',34,'2020-02-03 00:28:05',NULL,NULL,'admin',NULL,NULL),(36,'CNTRR','Centro',34,'2020-02-03 00:28:53',NULL,NULL,'admin',NULL,NULL),(37,'NRTTT','Norte',34,'2020-02-03 00:29:01',NULL,NULL,'admin',NULL,NULL),(38,'CRBBB','Caribe',34,'2020-02-03 00:29:15',NULL,NULL,'admin',NULL,NULL),(39,'DELETED','Eliminado',14,'2020-02-08 00:40:21',NULL,NULL,'johnpaul',NULL,NULL),(40,'STDPDD','Estados del pedido',NULL,'2020-02-09 15:47:14',NULL,NULL,'johnpaul',NULL,NULL),(41,'PDDNVDD','Enviado',40,'2020-02-09 15:47:41',NULL,NULL,'johnpaul',NULL,NULL),(42,'PDDCMPLTD','Completado',40,'2020-02-09 15:47:56',NULL,NULL,'johnpaul',NULL,NULL),(43,'GRYYY','Gris',1,'2020-02-13 04:47:51',NULL,NULL,'admin',NULL,NULL),(44,'BLCKKK','Negro',1,'2020-02-13 04:48:04',NULL,NULL,'admin',NULL,NULL),(45,'BRWNNN','Café',1,'2020-02-13 04:48:32',NULL,NULL,'admin',NULL,NULL),(46,'RDWNNN','Rojo Vino',1,'2020-02-13 04:48:57',NULL,NULL,'admin',NULL,NULL);
/*!40000 ALTER TABLE `catalogos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `condiciones_x_cliente`
--

DROP TABLE IF EXISTS `condiciones_x_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `condiciones_x_cliente` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_cliente` int NOT NULL,
  `tipo_pago` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `limite_credito` decimal(15,3) NOT NULL,
  `costo_por_envio` decimal(15,3) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `condiciones_x_cliente`
--

LOCK TABLES `condiciones_x_cliente` WRITE;
/*!40000 ALTER TABLE `condiciones_x_cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `condiciones_x_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `descuentos_x_cliente_marca`
--

DROP TABLE IF EXISTS `descuentos_x_cliente_marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `descuentos_x_cliente_marca` (
  `id_cliente` int NOT NULL,
  `id_marca` int NOT NULL,
  `descuento` decimal(15,3) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `descuentos_x_cliente_marca`
--

LOCK TABLES `descuentos_x_cliente_marca` WRITE;
/*!40000 ALTER TABLE `descuentos_x_cliente_marca` DISABLE KEYS */;
/*!40000 ALTER TABLE `descuentos_x_cliente_marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_archivo_subido_img` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'Adidas',1,'2020-01-26 10:33:13',NULL,NULL,'admin',NULL,NULL),(2,'CAT',2,'2020-01-26 11:08:43',NULL,NULL,'admin',NULL,NULL),(3,'Hush Puppies',3,'2020-01-26 11:08:59',NULL,NULL,'admin',NULL,NULL),(4,'Converse',4,'2020-01-26 11:09:10','2020-01-28 17:52:21',NULL,'admin','admin',NULL),(5,'Tiger',5,'2020-01-26 11:09:22',NULL,NULL,'admin',NULL,NULL),(6,'XTI',39,'2020-01-26 11:09:35','2020-02-13 03:35:23',NULL,'admin','admin',NULL),(10,'VIzzano',44,'2020-02-12 00:10:35','2020-02-13 03:59:21',NULL,'admin','admin',NULL),(11,'Timberland',46,'2020-02-13 04:54:59',NULL,NULL,'admin',NULL,NULL);
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas_x_cliente`
--

DROP TABLE IF EXISTS `marcas_x_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas_x_cliente` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_cliente` int NOT NULL,
  `id_marca` int NOT NULL,
  `descuento` decimal(15,3) NOT NULL,
  `observaciones` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas_x_cliente`
--

LOCK TABLES `marcas_x_cliente` WRITE;
/*!40000 ALTER TABLE `marcas_x_cliente` DISABLE KEYS */;
INSERT INTO `marcas_x_cliente` VALUES (40,2,3,18.000,'Segundo','2020-01-29 06:26:10','2020-01-29 08:36:31',NULL,'admin','admin',NULL),(43,2,1,125.000,'Otro más','2020-02-02 06:50:13',NULL,NULL,'admin',NULL,NULL),(44,2,2,15.000,'Está todo bien','2020-02-02 06:50:29',NULL,NULL,'admin',NULL,NULL),(45,2,6,13.000,'Para sus compras','2020-02-02 08:07:33','2020-02-13 04:19:20','2020-02-13 04:19:20','admin','admin','admin'),(46,20,1,0.000,'Marca habilitada','2020-02-11 21:54:25',NULL,NULL,'admin',NULL,NULL),(47,20,3,15.000,'Para sus compras','2020-02-11 21:54:46',NULL,NULL,'admin',NULL,NULL),(48,20,4,16.000,'Para sus compras','2020-02-11 21:55:00',NULL,NULL,'admin',NULL,NULL),(49,2,6,10.000,'Aplica 10% de descuento','2020-02-12 00:18:47',NULL,NULL,'admin',NULL,NULL);
/*!40000 ALTER TABLE `marcas_x_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (2,'2014_10_12_100000_create_password_resets_table',1),(3,'2016_06_01_000001_create_oauth_auth_codes_table',1),(4,'2016_06_01_000002_create_oauth_access_tokens_table',1),(5,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),(6,'2016_06_01_000004_create_oauth_clients_table',1),(7,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),(9,'2020_01_05_102253_create_marcas_table',1),(10,'2020_01_05_102613_create_cat_catalogos_table',1),(13,'2020_01_05_110931_create_sec_opciones_menu_table',1),(15,'2020_01_09_044529_create_sec_roles_users_table',1),(16,'2020_01_09_050617_create_sec_permisos_pantalla_table',1),(17,'2020_01_09_051020_create_sec_accesos_table',1),(18,'2020_01_09_051508_create_sec_accesos_permisos_table',1),(19,'2020_01_09_053012_create_condiciones_x_cliente_table',1),(20,'2020_01_09_053041_create_descuentos_x_cliente_marca_table',1),(21,'2020_01_09_054731_create_precio_desc_x_prod_cliente_table',1),(22,'2020_01_23_044731_create_archivos_subidos_table',1),(23,'2020_01_09_044243_create_sec_roles_table',2),(24,'2020_01_05_105511_create_marcas_x_cliente_table',3),(26,'2020_01_05_100346_create_productos_table',4),(27,'2014_10_12_000000_create_users_table',5),(29,'2020_01_05_110312_create_carrito_table',6),(30,'2020_02_07_124558_create_pedidos_table',7);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` bigint DEFAULT NULL,
  `client_id` int unsigned NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `scopes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_access_tokens`
--

LOCK TABLES `oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` bigint NOT NULL,
  `client_id` int unsigned NOT NULL,
  `scopes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_auth_codes`
--

LOCK TABLES `oauth_auth_codes` WRITE;
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_clients` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `secret` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `redirect` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_clients`
--

LOCK TABLES `oauth_clients` WRITE;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
INSERT INTO `oauth_clients` VALUES (1,NULL,'PEDIDOS Personal Access Client','ChvA8CqPek0c08lr6ka4Bk481DVXd7eKsP0mKKdS','http://localhost',1,0,0,'2020-01-26 09:06:49','2020-01-26 09:06:49'),(2,NULL,'PEDIDOS Password Grant Client','F8KvBMf8ZLcCla3bHPtickZGH6aSBt7WFlDTrn1b','http://localhost',0,1,0,'2020-01-26 09:06:49','2020-01-26 09:06:49');
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_personal_access_clients` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_personal_access_clients`
--

LOCK TABLES `oauth_personal_access_clients` WRITE;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` VALUES (1,1,'2020-01-26 09:06:49','2020-01-26 09:06:49');
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `access_token_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_refresh_tokens`
--

LOCK TABLES `oauth_refresh_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `numero_pedido` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_cliente` int NOT NULL,
  `id_producto` int NOT NULL,
  `id_estado_pedido` int NOT NULL,
  `cantidad` int NOT NULL,
  `precio` decimal(15,3) NOT NULL,
  `precio_total` decimal(15,3) NOT NULL,
  `tiene_descuento_porprod` int NOT NULL,
  `descuento_porprod` decimal(15,3) DEFAULT NULL,
  `precio_descuento_porprod` decimal(15,3) DEFAULT NULL,
  `precio_total_descuento_porprod` decimal(15,3) DEFAULT NULL,
  `tiene_descuento_pormrc` int NOT NULL,
  `descuento_pormrc` decimal(15,3) DEFAULT NULL,
  `precio_descuento_pormrc` decimal(15,3) DEFAULT NULL,
  `precio_total_descuento_pormrc` decimal(15,3) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'000001',2,3,41,1,640.000,640.000,1,15.000,544.000,544.000,0,NULL,NULL,NULL,'2020-02-13 04:09:19',NULL,NULL,'johnpaul',NULL,NULL),(2,'000001',2,9,41,1,526.000,526.000,1,15.000,447.000,447.000,0,NULL,NULL,NULL,'2020-02-13 04:09:20',NULL,NULL,'johnpaul',NULL,NULL),(3,'000001',2,1,41,1,625.000,625.000,1,12.000,550.000,550.000,0,NULL,NULL,NULL,'2020-02-13 04:09:21',NULL,NULL,'johnpaul',NULL,NULL),(4,'000004',20,2,41,1,720.000,720.000,0,NULL,NULL,NULL,1,15.000,612.000,612.000,'2020-02-13 04:42:07',NULL,NULL,'jmjose',NULL,NULL);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `precio_desc_x_prod_cliente`
--

DROP TABLE IF EXISTS `precio_desc_x_prod_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `precio_desc_x_prod_cliente` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_cliente` int NOT NULL,
  `id_producto` int NOT NULL,
  `descuento` decimal(15,3) NOT NULL,
  `precio` decimal(15,3) NOT NULL,
  `observaciones` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `precio_desc_x_prod_cliente`
--

LOCK TABLES `precio_desc_x_prod_cliente` WRITE;
/*!40000 ALTER TABLE `precio_desc_x_prod_cliente` DISABLE KEYS */;
INSERT INTO `precio_desc_x_prod_cliente` VALUES (3,2,1,12.000,120.000,'Observacion','2020-01-31 05:31:17',NULL,NULL,'admin',NULL,NULL),(4,2,9,15.000,256.000,'Para su pedido','2020-02-02 08:13:18',NULL,NULL,'admin',NULL,NULL),(5,2,3,15.000,246.000,'Para sus compras','2020-02-02 08:28:23',NULL,NULL,'admin',NULL,NULL),(7,2,4,17.000,256.000,'Para sus pedidos','2020-02-02 08:31:18',NULL,NULL,'admin',NULL,NULL),(9,2,6,19.000,19.000,'Para sus pedidos','2020-02-02 08:33:15',NULL,NULL,'admin',NULL,NULL);
/*!40000 ALTER TABLE `precio_desc_x_prod_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `referencia_cod_prov` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `descripcion` varchar(2500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `id_archivo_subido_img` int NOT NULL,
  `id_color` int NOT NULL,
  `id_marca` int NOT NULL,
  `id_tipo_material` int DEFAULT NULL,
  `id_genero` int DEFAULT NULL,
  `id_categoria` int DEFAULT NULL,
  `precio` decimal(15,3) DEFAULT NULL,
  `total_unidades` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'DHCNSNJ','Adidas Running Sport','Soft knit mesh upper with leather hits on heel and tongue, add a little modern appeal to your athletic look',10,2,1,6,8,11,625.000,122,'2020-01-31 19:45:51','2020-02-02 07:57:43',NULL,'admin','admin',NULL),(2,'JHDNNDS','Hush Puppies Ejecutivo','This casual sneaker built of soft mesh fabric, cushioned footbed energize every step and delivers daylong comfort. Small bumps on the soles for a nice massage when you walk',11,3,3,5,8,11,720.000,0,'2020-01-31 19:46:53','2020-02-02 03:00:53',NULL,'admin','admin',NULL),(3,'CJDKSDJ','CAT Casual','Durable outsole and cushioned insole lends to long-lasting wear',12,2,2,5,8,11,640.000,19,'2020-01-31 19:47:48','2020-02-01 16:35:37',NULL,'admin','admin',NULL),(4,'SDKSDJK','Converse EMO','Sleek and simple, this casual sneakers offer performance with everyday style that can be dressed up or down depending on the occasion. It is a great addition to any outfit.',13,3,4,6,9,11,254.000,20,'2020-01-31 19:48:39','2020-02-01 16:35:54',NULL,'admin','admin',NULL),(5,'NCKJDKJ','Tiger Sports','We have upgraded the correct size. We recommend ordering the size that wears usually',14,2,5,5,8,11,542.000,30,'2020-01-31 19:49:21','2020-02-01 16:36:31',NULL,'admin','admin',NULL),(6,'VDSKJS','Vans Girls','This Oxford shoes featuring burnished brogue perforated trims, smooth genuine leather upper reveal the beauty of light and shadow',15,3,6,6,9,12,645.000,41,'2020-01-31 19:50:20',NULL,NULL,'admin',NULL,NULL),(7,'SLKDJLALKED','Para borrar','The Hey Dude™ Wally L Stretch will be an instant favorite in your modern-casual collection.',16,3,5,5,8,11,523.000,125,'2020-02-02 06:36:20','2020-02-02 06:37:32',NULL,'admin','admin',NULL),(8,'DSFLML','Para Borrar 2','These shoes are suitable for any daily used,such as:long time standing work,walking,casual,floor shoes,plantar fasciitis,nursing,fishing,gardening,dress,shopping,travel,driving,jazz,tap dance,street jazz,ballet,folk dance,zumba,athletic,workout.',17,3,5,5,8,11,786.000,7,'2020-02-02 07:03:33',NULL,NULL,'admin',NULL,NULL),(9,'KMSDKDM','Classic Vans II','Durable suede and canvas combination upper with classic leather side stripe Padded collar for optimal comfort and support Lace closure offers a secure fit Cushioned footbed provides shock-absorbing comfort Vulcanized rubber outsole with signature waffle tread delivers flexible grip and traction',23,2,6,6,8,11,526.000,11,'2020-02-02 08:06:37',NULL,NULL,'admin',NULL,NULL),(10,'B46823452','VZH291155','Zapato casual de mujer tacon alto',27,2,6,5,9,11,100.000,1,'2020-02-12 00:13:55',NULL,NULL,'admin',NULL,NULL),(11,'DMSDMSM','Rasteira','Para uso en casa',41,20,10,6,9,11,246.000,13,'2020-02-13 03:51:17',NULL,NULL,'admin',NULL,NULL),(12,'KNSKKSD','Rasteira preta','Para usar en casa',42,19,10,5,9,11,456.000,125,'2020-02-13 03:55:50',NULL,NULL,'admin',NULL,NULL),(13,'MNKSMDKM','Tenis Casual Femenino','Tenis Casual Femenino',43,3,10,6,9,11,458.000,13,'2020-02-13 03:57:22',NULL,NULL,'admin',NULL,NULL),(14,'DFLKJFLE','Woman Sneaker with Wedge','XTI Shoes Woman Sneakers with Wedge 48513 Gray - Sole: Gum Rubber; Heel Type: Tacco alto; Material Composition: Ecopelle, camoscio con applicazioni',45,43,6,6,9,11,425.000,12,'2020-02-13 04:50:44',NULL,NULL,'admin',NULL,NULL),(15,'NSKFKJD','Timberland Classic 74036 Boat Shoe','Upper made with premium leather\nTraditional handsewn construction\nOuter Material: Leather\nShoe Width: Medium\n360Ú functional rawhide lacing system\n3/4 length, leather-lined EVA footbed\nRubber outsole is siped for slip resistance and traction',47,2,11,5,8,11,456.000,15,'2020-02-13 04:56:21',NULL,NULL,'admin',NULL,NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sec_accesos`
--

DROP TABLE IF EXISTS `sec_accesos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sec_accesos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_sec_rol` int NOT NULL,
  `id_sec_opcion_menu` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sec_accesos`
--

LOCK TABLES `sec_accesos` WRITE;
/*!40000 ALTER TABLE `sec_accesos` DISABLE KEYS */;
INSERT INTO `sec_accesos` VALUES (60,1,1,'2020-02-11 21:49:42',NULL,NULL,'admin',NULL,NULL),(61,1,2,'2020-02-11 21:49:42',NULL,NULL,'admin',NULL,NULL),(62,1,4,'2020-02-11 21:49:42',NULL,NULL,'admin',NULL,NULL),(63,1,6,'2020-02-11 21:49:42',NULL,NULL,'admin',NULL,NULL),(64,1,7,'2020-02-11 21:49:42',NULL,NULL,'admin',NULL,NULL),(65,1,9,'2020-02-11 21:49:42',NULL,NULL,'admin',NULL,NULL),(66,1,11,'2020-02-11 21:49:42',NULL,NULL,'admin',NULL,NULL),(67,1,13,'2020-02-11 21:49:42',NULL,NULL,'admin',NULL,NULL),(68,3,2,'2020-02-11 21:50:15',NULL,NULL,'admin',NULL,NULL),(69,3,4,'2020-02-11 21:50:15',NULL,NULL,'admin',NULL,NULL),(70,3,6,'2020-02-11 21:50:15',NULL,NULL,'admin',NULL,NULL),(71,3,7,'2020-02-11 21:50:15',NULL,NULL,'admin',NULL,NULL),(72,3,9,'2020-02-11 21:50:15',NULL,NULL,'admin',NULL,NULL),(73,3,11,'2020-02-11 21:50:15',NULL,NULL,'admin',NULL,NULL),(74,4,1,'2020-02-11 21:51:12',NULL,NULL,'admin',NULL,NULL),(75,2,12,'2020-02-11 21:53:46',NULL,NULL,'admin',NULL,NULL);
/*!40000 ALTER TABLE `sec_accesos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sec_accesos_permisos`
--

DROP TABLE IF EXISTS `sec_accesos_permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sec_accesos_permisos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_sec_acceso` int NOT NULL,
  `id_sec_permiso` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sec_accesos_permisos`
--

LOCK TABLES `sec_accesos_permisos` WRITE;
/*!40000 ALTER TABLE `sec_accesos_permisos` DISABLE KEYS */;
/*!40000 ALTER TABLE `sec_accesos_permisos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sec_opciones_menu`
--

DROP TABLE IF EXISTS `sec_opciones_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sec_opciones_menu` (
  `id_opcion_menu` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_opcion_menu_padre` int DEFAULT NULL,
  `descripcion` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ruta` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `componente_ruta` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nombre_ruta` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `es_form_registro` tinyint(1) NOT NULL,
  `icon_fa` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `imagen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `tip` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id_opcion_menu`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sec_opciones_menu`
--

LOCK TABLES `sec_opciones_menu` WRITE;
/*!40000 ALTER TABLE `sec_opciones_menu` DISABLE KEYS */;
INSERT INTO `sec_opciones_menu` VALUES (1,NULL,'Opciones de menú','/regoptmnu','../pages/SecOpcionesMenu.vue','regoptmnu',1,NULL,NULL,NULL,'2020-01-26 09:06:46','2020-02-03 00:37:37',NULL,'admin','admin',NULL),(2,NULL,'Accesos','/accesos','../pages/SecAccesos.vue','accesos',1,NULL,NULL,NULL,'2020-01-26 09:06:46','2020-02-03 00:40:11',NULL,'admin','admin',NULL),(3,1,'unamas','/unamas','../pages/unamas.vue','unamas',1,'unamas','unamas.jpg','unamas','2020-01-26 09:06:46','2020-02-03 00:26:10','2020-02-03 00:26:10','admin',NULL,'admin'),(4,NULL,'Marcas','/marcas','../pages/Marcas.vue','marcas',1,NULL,NULL,NULL,'2020-01-26 09:06:46','2020-02-03 00:39:58',NULL,'admin','admin',NULL),(5,2,'rutanew','/rutanew','../pages/rutanew.vue','rutanew',1,'rutanew','rutanew.jpg','rutanew','2020-01-26 09:06:46','2020-02-03 00:26:13','2020-02-03 00:26:13','admin',NULL,'admin'),(6,NULL,'Productos','/productos','../pages/Productos.vue','productos',1,NULL,NULL,NULL,'2020-01-26 09:06:46','2020-02-03 00:40:04',NULL,'admin','admin',NULL),(7,NULL,'Catalogos','/catalogos','../pages/Catalogos.vue','catalogos',1,NULL,NULL,NULL,'2020-01-26 09:06:46','2020-02-03 00:40:36',NULL,'admin','admin',NULL),(8,1,'cierraOnWorked','/cierraOnWorked','../pages/cierraOnWorked.vue','cierraOnWorked',1,'cierraOnWorked','cierraOnWorked.jpg','cierraOnWorked','2020-01-26 09:06:46','2020-02-03 00:26:07','2020-02-03 00:26:07','admin',NULL,'admin'),(9,NULL,'Marcas por cliente','/marcasxcli','../pages/MarcasXCliente.vue','marcasxcli',1,NULL,NULL,NULL,'2020-01-26 09:06:46','2020-02-03 00:41:09',NULL,'admin','admin',NULL),(11,NULL,'Productos por cliente','/productosxcli','../pages/ProductosXCliente.vue','productosxcli',1,NULL,NULL,NULL,'2020-02-03 00:42:21',NULL,NULL,'admin',NULL,NULL),(12,NULL,'Pedidos','/vuecart','../pages/vue-cart/VueCart.vue','vuecart',0,NULL,NULL,NULL,'2020-02-03 00:44:22',NULL,NULL,'admin',NULL,NULL),(13,NULL,'Ver pedidos','/pedidoschk','../pages/vue-cart/components/pedidosRealizados.vue','pedidoschk',0,NULL,NULL,NULL,'2020-02-07 20:16:02',NULL,NULL,'admin',NULL,NULL);
/*!40000 ALTER TABLE `sec_opciones_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sec_permisos_pantalla`
--

DROP TABLE IF EXISTS `sec_permisos_pantalla`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sec_permisos_pantalla` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sec_permisos_pantalla`
--

LOCK TABLES `sec_permisos_pantalla` WRITE;
/*!40000 ALTER TABLE `sec_permisos_pantalla` DISABLE KEYS */;
/*!40000 ALTER TABLE `sec_permisos_pantalla` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sec_roles`
--

DROP TABLE IF EXISTS `sec_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sec_roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `codigo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sec_roles`
--

LOCK TABLES `sec_roles` WRITE;
/*!40000 ALTER TABLE `sec_roles` DISABLE KEYS */;
INSERT INTO `sec_roles` VALUES (1,'admin','ADMIN','Administrador','2020-01-26 11:33:06','2020-02-11 21:52:05',NULL,'admin','admin',NULL),(2,'customer','CUSTOMER','Cliente','2020-01-26 11:33:06','2020-02-11 21:51:43',NULL,'admin','admin',NULL),(3,'datainput','DATAINPUT','Digitador','2020-01-26 11:33:06','2020-02-11 21:51:30',NULL,'admin','admin',NULL),(4,'Desarrollador','DEVELOPER','Desarrollador','2020-02-11 21:50:35',NULL,NULL,'admin',NULL,NULL);
/*!40000 ALTER TABLE `sec_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sec_roles_users`
--

DROP TABLE IF EXISTS `sec_roles_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sec_roles_users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `roles_id` int unsigned NOT NULL,
  `users_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sec_roles_users`
--

LOCK TABLES `sec_roles_users` WRITE;
/*!40000 ALTER TABLE `sec_roles_users` DISABLE KEYS */;
INSERT INTO `sec_roles_users` VALUES (26,1,1,'2020-02-11 21:49:42',NULL,NULL,'admin',NULL,NULL),(27,3,3,'2020-02-11 21:50:15',NULL,NULL,'admin',NULL,NULL),(28,4,19,'2020-02-11 21:51:12',NULL,NULL,'admin',NULL,NULL),(29,2,2,'2020-02-11 21:53:47',NULL,NULL,'admin',NULL,NULL),(30,2,20,'2020-02-11 21:53:47',NULL,NULL,'admin',NULL,NULL);
/*!40000 ALTER TABLE `sec_roles_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `id_archivo_subido_img` int DEFAULT NULL,
  `nombre_completo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `telefono_fijo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `telefono_celular` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `id_ciudad` int DEFAULT NULL,
  `id_zona` int DEFAULT NULL,
  `talla_zapato` double(8,2) DEFAULT NULL,
  `cedula` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `id_tipo_pago` int DEFAULT NULL,
  `limite_credito` decimal(12,4) DEFAULT NULL,
  `costo_por_envio` decimal(12,4) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_update` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_delete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin@gmail.com','2020-01-26 09:06:44','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','AOrJjyInUF',NULL,'Roberto Antonio Perez López','22568342','81856324',27,35,NULL,NULL,'Capulín #1',NULL,NULL,NULL,'2020-01-26 09:06:44','2020-02-02 23:22:02',NULL,'admin','admin',NULL),(2,'johnpaul','cliente1@gmail.com','2020-01-26 09:06:45','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','4ANwAZ2Ys2',NULL,'Johnpaul Johnston',NULL,NULL,29,35,NULL,NULL,NULL,NULL,NULL,NULL,'2020-01-26 09:06:45','2020-02-02 23:22:33',NULL,'admin','admin',NULL),(3,'bruen','digitador@gmail.com','2020-01-26 09:06:45','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','pmyQIM2Gyh',NULL,'Lisa Bruen',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-01-26 09:06:45',NULL,NULL,'admin',NULL,NULL),(4,'frami','frami.stefanie@example.com','2020-01-26 09:06:45','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','ue5yKU22gK',NULL,'London Frami Sr.',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-01-26 09:06:45',NULL,NULL,'admin',NULL,NULL),(5,'legros','norene.huels@example.net','2020-01-26 09:06:45','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','NSyRxJVG9g',NULL,'Shayne Legros',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-01-26 09:06:45',NULL,NULL,'admin',NULL,NULL),(6,'corine','fschultz@example.org','2020-01-26 09:06:45','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','dCGrElMKQJ',NULL,'Miss Corine Cruickshank IV',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-01-26 09:06:45',NULL,NULL,'admin',NULL,NULL),(19,'walteri','walteri@gmail.com',NULL,'$2y$10$x24gQc13XpZeYjrlBD8wtuLAMPkqAewdIktYu3pLtGpnLgQbjZwH6',NULL,NULL,'Walter Izaguirre',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-02-11 21:51:06',NULL,NULL,'admin',NULL,NULL),(20,'jmjose','cliente2@gmail.com',NULL,'$2y$10$0aLt4CYMkAhG7ZY3Rgvi2eSMPMm9OIgGN7uTk3HwE6Vy5UmiLx8jK',NULL,NULL,'Jim Michael Jose Sanchez','22134569','88562314',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-02-11 21:53:41',NULL,NULL,'admin',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'pedidos'
--

--
-- Dumping routines for database 'pedidos'
--
/*!50003 DROP FUNCTION IF EXISTS `es_en_carrito_draft` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` FUNCTION `es_en_carrito_draft`(`intIdCliente` INT(11) UNSIGNED, `intIdProducto` INT(11) UNSIGNED) RETURNS int
    READS SQL DATA
    DETERMINISTIC
BEGIN

	if exists (SELECT *
			FROM  pedidos.carrito c
			inner join pedidos.catalogos g on c.id_estado_carrito = g.id_catalogo 
			WHERE c.id_cliente = intIdCliente 
			and c.id_producto = intIdProducto
			and g.codigo_catalogo IN ('DRAFT', 'VERIFIED')
			and c.deleted_at is null) then
		return 1;
	else
		return 0;
	end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP FUNCTION IF EXISTS `es_marca_con_desc` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` FUNCTION `es_marca_con_desc`(`intIdCliente` INT(11) UNSIGNED, `intIdMarca` INT(11) UNSIGNED) RETURNS int
    READS SQL DATA
    DETERMINISTIC
begin
	
	if exists (SELECT *
			FROM pedidos.marcas_x_cliente mxp
			WHERE mxp.id_cliente = intIdCliente 
			and mxp.id_marca = intIdMarca
			and mxp.deleted_at is null) then
		return 1;
	else
		return 0;
	end if;

end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP FUNCTION IF EXISTS `es_producto_con_desc` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` FUNCTION `es_producto_con_desc`(`intIdCliente` INT(11) UNSIGNED, `intIdProducto` INT(11) UNSIGNED) RETURNS int
    READS SQL DATA
    DETERMINISTIC
begin
	
	if exists (SELECT *
			FROM  pedidos.precio_desc_x_prod_cliente dxp
			WHERE dxp.id_cliente = intIdCliente 
			and dxp.id_producto = intIdProducto
			and dxp.deleted_at is null) then
		return 1;
	else
		return 0;
	end if;

end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP FUNCTION IF EXISTS `get_marca_desc` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` FUNCTION `get_marca_desc`(`intIdCliente` INT(11) UNSIGNED, `intIdMarca` INT(11) UNSIGNED) RETURNS decimal(5,2)
    READS SQL DATA
    DETERMINISTIC
begin
	declare var_descuento DECIMAL(5,2);
	
	if exists (SELECT *
			FROM  pedidos.marcas_x_cliente mxp
			WHERE mxp.id_cliente = intIdCliente 
			and mxp.id_marca = intIdMarca
			and mxp.deleted_at is null) then
		SET var_descuento = (SELECT descuento FROM pedidos.marcas_x_cliente 
							 WHERE id_cliente = intIdCliente 
							 and id_marca = intIdMarca
							 and deleted_at is null LIMIT 1);
	else
		SET var_descuento =  -1.0;
	end if;

	return var_descuento;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP FUNCTION IF EXISTS `get_producto_desc` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` FUNCTION `get_producto_desc`(`intIdCliente` INT(11) UNSIGNED, `intIdProducto` INT(11) UNSIGNED) RETURNS decimal(5,2)
    READS SQL DATA
    DETERMINISTIC
begin
	declare var_descuento DECIMAL(5,2);
	
	if exists (SELECT *
			FROM  pedidos.precio_desc_x_prod_cliente dxp
			WHERE dxp.id_cliente = intIdCliente 
			and dxp.id_producto = intIdProducto
			and dxp.deleted_at is null) then
		SET var_descuento = (SELECT descuento FROM pedidos.precio_desc_x_prod_cliente 
							 WHERE id_cliente = intIdCliente 
							 and id_producto = intIdProducto
							 and deleted_at is null LIMIT 1);
	else
		SET var_descuento =  -1.0;
	end if;

	return var_descuento;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP FUNCTION IF EXISTS `SPLIT_STRING` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` FUNCTION `SPLIT_STRING`(`str` VARCHAR(255), `delim` VARCHAR(12), `pos` INT) RETURNS varchar(255) CHARSET utf8mb4 COLLATE utf8mb4_0900_ai_ci
    READS SQL DATA
    DETERMINISTIC
BEGIN

RETURN REPLACE(SUBSTRING(SUBSTRING_INDEX(str, delim, pos), LENGTH(SUBSTRING_INDEX(str, delim, pos-1)) + 1), delim, '');

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `completar_pedido` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` PROCEDURE `completar_pedido`(IN `intIdCliente` INT(11) UNSIGNED, IN `strNombreCliente` VARCHAR(50), IN `intIdCodPedidoCompletado` INT(11) UNSIGNED, IN `strNumeroPedido` VARCHAR(50))
begin
	
	update pedidos.pedidos
	set 
		id_estado_pedido = intIdCodPedidoCompletado,
		updated_at = now(),
		user_update = strNombreCliente
	where numero_pedido = strNumeroPedido;
	
	select strNumeroPedido message;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `get_carrito_info` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` PROCEDURE `get_carrito_info`(IN `intIdCarrito` INT(11) UNSIGNED, IN `strUrlBaseImg` VARCHAR(100), IN `strUrl` VARCHAR(100))
begin

	select 
		c.id,
		c.id_estado_carrito,
		c.id_cliente,
		c.id_producto,
		p.referencia_cod_prov,
		p.descripcion prod_descripcion,
		c.cantidad,
		c.precio,
		c.precio_total,
		f.imagen_lowres_uid, f.imagen_original_uid,
	    CONCAT(strUrlBaseImg, strUrl, f.imagen_lowres_uid) url_imagen_lowres_uid, 
	    CONCAT(strUrlBaseImg, strUrl, f.imagen_original_uid) url_imagen_original_uid
	from pedidos.carrito c
	inner join pedidos.productos p on c.id_producto  = p.id 
	inner join archivos_subidos f on p.id_archivo_subido_img = f.id
	inner join pedidos.catalogos cat on c.id_estado_carrito = cat.id_catalogo 
	where (intIdCarrito is null or (c.id = intIdCarrito))
	and c.deleted_at is null and cat.codigo_catalogo = 'DRAFT';
	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `get_catalogos_xcodpadre` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` PROCEDURE `get_catalogos_xcodpadre`(IN `codPadre` VARCHAR(50))
begin
	
	select ch.id_catalogo, ch.id_catalogo_padre, ch.codigo_catalogo, ch.valor
	from pedidos.catalogos ch
	where ch.id_catalogo_padre = (select ssp.id_catalogo from pedidos.catalogos ssp where ssp.codigo_catalogo = codPadre);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `get_catalogo_hijos` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` PROCEDURE `get_catalogo_hijos`(IN `intIdPadre` INT(11) UNSIGNED)
BEGIN
	DECLARE bol_done BOOLEAN DEFAULT FALSE;
	DECLARE var_idcat INT(11);
	DECLARE var_idcatpadre INT(11);
	DECLARE var_strdescr VARCHAR(200);
	DECLARE var_icon VARCHAR(20);
	DECLARE var_inodo TINYINT(1);
	
	DECLARE cur_catroot CURSOR FOR
		select id_catalogo idcat, valor descr, id_catalogo_padre idpdr
		from catalogos 
		where id_catalogo_padre is null 
		and deleted_at is null;

	DECLARE cur_catleaves CURSOR FOR
		select id_catalogo idcat, valor descr, id_catalogo_padre idpdr
		from catalogos 
		where id_catalogo_padre = intIdPadre
		and deleted_at is null;

	DECLARE CONTINUE HANDLER FOR NOT FOUND SET bol_done = TRUE;

	DROP TABLE IF EXISTS `tmp_cats`;
	CREATE TEMPORARY TABLE tmp_cats (
		icon VARCHAR(20) NOT NULL,
		idcat INT(11) NOT NULL,
		idcatpdr INT(11) NULL,
		inodo VARCHAR(10) NOT NULL,
		label VARCHAR(200) NOT NULL,
		nodopen VARCHAR(10) NOT NULL
	);

	if intIdPadre is null then
		OPEN cur_catroot;

		loop_roots: loop
		
			FETCH cur_catroot INTO var_idcat, var_strdescr, var_idcatpadre;
		
			IF bol_done THEN
				LEAVE loop_roots;
			END IF;

			if exists (select * from catalogos where id_catalogo_padre = var_idcat) then
				SET var_icon = 'folder';
				SET var_inodo = true;
			else
				SET var_icon = 'file';
				SET var_inodo = false;
			end if;
		
			INSERT INTO tmp_cats
			(icon, idcat, idcatpdr, inodo, label, nodopen)
			VALUES
			(var_icon, var_idcat, var_idcatpadre, var_inodo, var_strdescr, 'false');
		END LOOP loop_roots;
	
		SELECT icon, idcat id, idcatpdr, inodo inode, label, nodopen as 'open' FROM tmp_cats;

		CLOSE cur_catroot;
	end if;

	if intIdPadre is not null then
		OPEN cur_catleaves;

		loop_leaves: loop
		
			FETCH cur_catleaves INTO var_idcat, var_strdescr, var_idcatpadre;
		
			IF bol_done THEN
				LEAVE loop_leaves;
			END IF;

			if exists (select * from catalogos where id_catalogo_padre = var_idcat) then
				SET var_icon = 'folder';
				SET var_inodo = true;
			else
				SET var_icon = 'file';
				SET var_inodo = false;
			end if;
		
			INSERT INTO tmp_cats
			(icon, idcat, idcatpdr, inodo, label, nodopen)
			VALUES
			(var_icon, var_idcat, var_idcatpadre, var_inodo, var_strdescr, 'false');
		
		END LOOP loop_leaves;
	
		SELECT icon, idcat id, idcatpdr, inodo inode, label, nodopen as 'open' FROM tmp_cats;

		CLOSE cur_catleaves;
	
	end if;

	DROP TABLE tmp_cats;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `get_marcas` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` PROCEDURE `get_marcas`(IN `intIdMarca` INT(11) UNSIGNED, IN `strUrlBaseImg` VARCHAR(100), IN `strUrl` VARCHAR(100))
begin

	select 
	m.id, 
	m.nombre nombre_marca, 
	m.id_archivo_subido_img, 
	f.imagen_lowres_uid, 
	f.imagen_original_uid,
		   CONCAT(strUrlBaseImg, strUrl, f.imagen_lowres_uid) url_imagen_lowres_uid, 
		   CONCAT(strUrlBaseImg, strUrl, f.imagen_original_uid) url_imagen_original_uid
	from marcas m
	inner join archivos_subidos f on m.id_archivo_subido_img = f.id
	where (intIdMarca is null or (m.id = intIdMarca))
	and m.deleted_at is null;
	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `get_marcasxclienteId` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` PROCEDURE `get_marcasxclienteId`(IN `intIdCliente` INT(11) UNSIGNED, IN `strUrlBaseImg` VARCHAR(100), IN `strUrl` VARCHAR(100))
begin

	select 
		   mxc.id,
		   mxc.id_cliente,
		   mxc.id_marca,
		   mrc.nombre nombre_marca, 
		   mrc.id_archivo_subido_img, 
		   imgmrc.imagen_lowres_uid, 
		   imgmrc.imagen_original_uid,
		   CONCAT(strUrlBaseImg, strUrl, imgmrc.imagen_lowres_uid) url_imagen_lowres_uid, 
		   CONCAT(strUrlBaseImg, strUrl, imgmrc.imagen_original_uid) url_imagen_original_uid,
		   mxc.descuento,
		   mxc.observaciones
	from pedidos.marcas_x_cliente mxc
	inner join pedidos.marcas mrc on mxc.id_marca = mrc.id
	left join pedidos.archivos_subidos imgmrc on mrc.id_archivo_subido_img = imgmrc.id
	where (intIdCliente is null or (mxc.id_cliente = intIdCliente))
		  and mxc.deleted_at is null;
	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `get_optmnu_xroleyusr` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` PROCEDURE `get_optmnu_xroleyusr`(IN `intIdRole` INT(11) UNSIGNED)
begin
	
	select distinct
		acc.id id_acceso,
		optmnu.id_opcion_menu,
		optmnu.id_opcion_menu_padre,
		optmnu.ruta,
		optmnu.nombre_ruta,
		optmnu.componente_ruta,
		optmnu.descripcion,
		optmnu.icon_fa,
		optmnu.es_form_registro,
		optmnu.tip,
		optmnu.imagen
	from pedidos.sec_accesos acc
	inner join pedidos.sec_opciones_menu optmnu on acc.id_sec_opcion_menu = optmnu.id_opcion_menu 
	inner join pedidos.sec_roles rl on acc.id_sec_rol  = rl.id 
	inner join pedidos.sec_roles_users sru on acc.id_sec_rol = sru.roles_id 
	where (intIdRole is null or (acc.id_sec_rol = intIdRole))
	and acc.deleted_at is null and optmnu.deleted_at is null;
	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `get_optsmnu_hijos` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` PROCEDURE `get_optsmnu_hijos`(IN `intIdPadre` INT(11) UNSIGNED)
BEGIN
	DECLARE bol_done BOOLEAN DEFAULT FALSE;
	DECLARE var_idmnu INT(11);
	DECLARE var_idmnupadre INT(11);
	DECLARE var_strdescr VARCHAR(200);
	DECLARE var_esfrmreg TINYINT(1);
	DECLARE var_icon VARCHAR(20);
	DECLARE var_inodo TINYINT(1);
	
	DECLARE cur_catroot CURSOR FOR
		select id_opcion_menu idmnu, descripcion descr, id_opcion_menu_padre idpdr, es_form_registro esfrmreg
		from sec_opciones_menu 
		where id_opcion_menu_padre is null 
		and deleted_at is null;

	DECLARE cur_mnuleaves CURSOR FOR
		select id_opcion_menu idmnu, descripcion descr, id_opcion_menu_padre idpdr, es_form_registro esfrmreg
		from sec_opciones_menu 
		where id_opcion_menu_padre = intIdPadre
		and deleted_at is null;

	DECLARE CONTINUE HANDLER FOR NOT FOUND SET bol_done = TRUE;

	DROP TABLE IF EXISTS `tmp_mnus`;
	CREATE TEMPORARY TABLE tmp_mnus (
		icon VARCHAR(20) NOT NULL,
		idmnu INT(11) NOT NULL,
		idmnupdr INT(11) NULL,
		esfrmreg TINYINT(1),
		inodo VARCHAR(10) NOT NULL,
		label VARCHAR(200) NOT NULL,
		nodopen VARCHAR(10) NOT NULL
	);

	if intIdPadre is null then
		OPEN cur_catroot;

		loop_roots: loop
		
			FETCH cur_catroot INTO var_idmnu, var_strdescr, var_idmnupadre, var_esfrmreg;
		
			IF bol_done THEN
				LEAVE loop_roots;
			END IF;

			if exists (select * from sec_opciones_menu where id_opcion_menu_padre = var_idmnu and deleted_at = null) then
				SET var_icon = 'folder';
				SET var_inodo = true;
			else
				SET var_icon = 'file';
				SET var_inodo = false;
			end if;
		
			INSERT INTO tmp_mnus
			(icon, idmnu, idmnupdr, esfrmreg, inodo, label, nodopen)
			VALUES
			(var_icon, var_idmnu, var_idmnupadre, var_esfrmreg, var_inodo, var_strdescr, 'false');
		END LOOP loop_roots;
	
		SELECT icon, idmnu id, esfrmreg, inodo inode, label, nodopen as 'open' FROM tmp_mnus;

		CLOSE cur_catroot;
	end if;

	if intIdPadre is not null then
		OPEN cur_mnuleaves;

		loop_leaves: loop
		
			FETCH cur_mnuleaves INTO var_idmnu, var_strdescr, var_idmnupadre, var_esfrmreg;
		
			IF bol_done THEN
				LEAVE loop_leaves;
			END IF;

			if exists (select * from sec_opciones_menu where id_opcion_menu_padre = var_idmnu and deleted_at = null) then
				SET var_icon = 'folder';
				SET var_inodo = true;
			else
				SET var_icon = 'file';
				SET var_inodo = false;
			end if;
		
			INSERT INTO tmp_mnus
			(icon, idmnu, idmnupdr, esfrmreg, inodo, label, nodopen)
			VALUES
			(var_icon, var_idmnu, var_idmnupadre, var_esfrmreg, var_inodo, var_strdescr, 'false');
		
		END LOOP loop_leaves;
	
		SELECT icon, idmnu id, idmnupdr, esfrmreg, inodo inode, label, nodopen as 'open' FROM tmp_mnus;
	
		-- select * from sec_opciones_menu where id_opcion_menu in (select idmnu from tmp_mnus);

		CLOSE cur_mnuleaves;
	
	end if;

	DROP TABLE tmp_mnus;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `get_prods_xcliid` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` PROCEDURE `get_prods_xcliid`(IN `intIdCliente` INT(11) UNSIGNED, IN `strUrlBaseImg` VARCHAR(100), IN `strUrl` VARCHAR(100))
begin
		 
	select 
		pxc.id,
		pxc.id_cliente,
		pxc.id_producto,
		pxc.precio,
		pxc.descuento,
		pxc.observaciones,
		p.referencia_cod_prov,
		p.id_marca,
		p.nombre nombre_producto,
		mrc.nombre nombre_marca,
		p.id_archivo_subido_img,
	    imgprd.imagen_lowres_uid, 
	    imgprd.imagen_original_uid,
	    CONCAT(strUrlBaseImg, strUrl, imgprd.imagen_lowres_uid) url_imagen_lowres_uid, 
	    CONCAT(strUrlBaseImg, strUrl, imgprd.imagen_original_uid) url_imagen_original_uid
	from pedidos.precio_desc_x_prod_cliente pxc
	inner join pedidos.productos p on pxc.id_producto = p.id
	left join pedidos.archivos_subidos imgprd on p.id_archivo_subido_img = imgprd.id
	left join pedidos.marcas mrc on mrc.id = p.id_marca
	where (intIdCliente is null or (pxc.id_cliente = intIdCliente))
		  and pxc.deleted_at is null;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `get_productos_en_carrito` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` PROCEDURE `get_productos_en_carrito`(IN `intIdCliente` INT(11) UNSIGNED, IN `strUrlBaseImg` VARCHAR(100), IN `strUrl` VARCHAR(100))
begin

	select 
		   c.id id_carrito,
		   c.cantidad cantidad_producto,
		   c.precio precio_unitario,
		   c.precio_total,
		   c.tiene_descuento_porprod, 
		   c.descuento_porprod,
		   c.precio_descuento_porprod, 
		   c.precio_total_descuento_porprod,
		   c.tiene_descuento_pormrc,
		   c.descuento_pormrc,
		   c.precio_descuento_pormrc,
		   c.precio_total_descuento_pormrc,
		   p.id id_productocrrt, 
		   p.referencia_cod_prov, 
		   p.nombre nombre_producto,
		   p.descripcion, 
		   p.id_archivo_subido_img,
		   CONCAT(strUrlBaseImg, strUrl, f.imagen_lowres_uid) url_imagen_lowres_uid, 
		   CONCAT(strUrlBaseImg, strUrl, f.imagen_original_uid) url_imagen_original_uid
	from pedidos.carrito c
	inner join pedidos.productos p on c.id_producto = p.id 
	inner join pedidos.catalogos estcrrt on estcrrt.id_catalogo = c.id_estado_carrito 
	left join pedidos.archivos_subidos f on p.id_archivo_subido_img = f.id 
	where (intIdCliente is null or (c.id_cliente = intIdCliente))
	and c.deleted_at is null and estcrrt.codigo_catalogo IN ('DRAFT', 'VERIFIED');
	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `get_productos_pedidos` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` PROCEDURE `get_productos_pedidos`(IN `intIdCliente` INT(11) UNSIGNED, IN `intIdEstadoPedido` INT(11) UNSIGNED, IN `strNumeroPedido` VARCHAR(50), IN `strUrlBaseImg` VARCHAR(100), IN `strUrl` VARCHAR(100))
begin

	select 
		   pdd.id id_pedido,
		   pdd.numero_pedido,
		   usrs.nombre_completo nombre_cliente,
		   estpdd.codigo_catalogo codigo_estado_pedido,
		   estpdd.valor estado_pedido,
		   pdd.cantidad cantidad_producto,
		   pdd.precio precio_unitario,
		   pdd.precio_total,
		   pdd.tiene_descuento_porprod,
		   pdd.descuento_porprod,
		   pdd.precio_descuento_porprod,
		   pdd.precio_total_descuento_porprod,
		   pdd.tiene_descuento_pormrc,
		   pdd.descuento_pormrc,
		   pdd.precio_descuento_pormrc,
		   pdd.precio_total_descuento_pormrc,
		   p.id id_productocrrt, 
		   p.referencia_cod_prov, 
		   p.nombre nombre_producto,
		   p.descripcion, 
		   p.id_archivo_subido_img,
		   CONCAT(strUrlBaseImg, strUrl, f.imagen_lowres_uid) url_imagen_lowres_uid, 
		   CONCAT(strUrlBaseImg, strUrl, f.imagen_original_uid) url_imagen_original_uid
	from pedidos.pedidos pdd
	inner join pedidos.productos p on pdd.id_producto = p.id 
	inner join pedidos.users usrs on pdd.id_cliente = usrs.id 
	inner join pedidos.catalogos estpdd on pdd.id_estado_pedido = estpdd.id_catalogo 
	left join pedidos.archivos_subidos f on p.id_archivo_subido_img = f.id 
	where pdd.deleted_at is null
	and (intIdCliente is null or (pdd.id_cliente = intIdCliente))
	and (intIdEstadoPedido is null or (pdd.id_estado_pedido = intIdEstadoPedido))
	and (strNumeroPedido is null or (pdd.numero_pedido = strNumeroPedido))
	order by pdd.numero_pedido asc;
	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `get_productos_to_order` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` PROCEDURE `get_productos_to_order`(IN `intIdCliente` INT(11) UNSIGNED, IN `intIdProducto` INT(11) UNSIGNED, IN `intIdCategoria` INT(11) UNSIGNED, IN `intIdMarca` INT(11) UNSIGNED, IN `strNombreDescripcion` VARCHAR(255), IN `intEsBusqueda` INT(11) UNSIGNED, IN `intEsMarcasXCliente` INT(11) UNSIGNED, IN `strUrlBaseImg` VARCHAR(100), IN `strUrl` VARCHAR(100))
BEGIN

	DECLARE selectStatement VARCHAR(2500);
	DECLARE whereVariable VARCHAR(2300);
	DECLARE limitVariable VARCHAR(100);
	
	set selectStatement = ' select '; 
	set selectStatement = concat(selectStatement, 'p.id, ');
	set selectStatement = concat(selectStatement, 'p.referencia_cod_prov, ');
	set selectStatement = concat(selectStatement, 'p.nombre nombre_producto,');
	set selectStatement = concat(selectStatement, 'p.descripcion, ');
	set selectStatement = concat(selectStatement, 'p.id_archivo_subido_img,');
	set selectStatement = concat(selectStatement, 'concat(\'', strUrlBaseImg, '\', \'', strUrl, '\', f.imagen_lowres_uid) url_imagen_lowres_uid, ');
	set selectStatement = concat(selectStatement, ' concat(\'', strUrlBaseImg, '\', \'', strUrl, '\', f.imagen_original_uid) url_imagen_original_uid,');
	set selectStatement = concat(selectStatement, 'p.id_color, ');
	set selectStatement = concat(selectStatement, 'clr.valor color,');
	set selectStatement = concat(selectStatement, 'p.id_marca, ');
	set selectStatement = concat(selectStatement, 'm.nombre nombre_marca, ');
	set selectStatement = concat(selectStatement, 'm.id_archivo_subido_img id_img_marca,');
	set selectStatement = concat(selectStatement, 'p.id_tipo_material, ');
	set selectStatement = concat(selectStatement, 'tmat.valor tipo_material,');
	set selectStatement = concat(selectStatement, 'p.id_genero, ');
	set selectStatement = concat(selectStatement, 'gnr.valor genero,');
	set selectStatement = concat(selectStatement, 'p.id_categoria, ');
	set selectStatement = concat(selectStatement, 'catgr.valor categoria,');
	set selectStatement = concat(selectStatement, 'p.precio,');
	set selectStatement = concat(selectStatement, 'es_producto_con_desc(',CAST(intIdCliente AS CHAR(20)) ,', p.id) tiene_producto_desc,');
	set selectStatement = concat(selectStatement, 'get_producto_desc(',CAST(intIdCliente AS CHAR(20)) ,', p.id) descuento_producto_cliente,');
	set selectStatement = concat(selectStatement, 'es_marca_con_desc(',CAST(intIdCliente AS CHAR(20)) ,', p.id_marca) tiene_marca_desc,');
	set selectStatement = concat(selectStatement, 'get_marca_desc(',CAST(intIdCliente AS CHAR(20)) ,', p.id_marca) descuento_marca_prod,');
	set selectStatement = concat(selectStatement, 'p.total_unidades,');
	set selectStatement = concat(selectStatement, 'es_en_carrito_draft(', CAST(intIdCliente AS CHAR(20)), ', p.id) esta_en_carrito_draft ');
	set selectStatement = concat(selectStatement, 'from pedidos.productos p ');
	set selectStatement = concat(selectStatement, 'inner join pedidos.catalogos clr on p.id_color = clr.id_catalogo ');
	set selectStatement = concat(selectStatement, 'inner join pedidos.marcas m on p.id_marca = m.id ');
	set selectStatement = concat(selectStatement, 'left join pedidos.archivos_subidos f on p.id_archivo_subido_img = f.id ');
	set selectStatement = concat(selectStatement, 'left join pedidos.catalogos tmat on p.id_tipo_material = tmat.id_catalogo ');
	set selectStatement = concat(selectStatement, 'left join pedidos.catalogos gnr on p.id_genero = gnr.id_catalogo ');
	set selectStatement = concat(selectStatement, 'left join pedidos.catalogos catgr on p.id_categoria = catgr.id_catalogo ');

	set whereVariable = concat('where');

	if intIdProducto is not null then 
		set whereVariable = concat(whereVariable, ' (', CAST(intIdProducto AS CHAR(20)), ' is null or (p.id = ', CAST(intIdProducto AS CHAR(20)), '))');
	end if;
	if intIdCategoria is not null then
		if strcmp(whereVariable, 'where') <> 0 then
			set whereVariable = concat(whereVariable, ' and ');
		end if;
		set whereVariable = concat(whereVariable, ' (', CAST(intIdCategoria AS CHAR(20)), ' is null or (p.id_categoria = ', CAST(intIdCategoria AS CHAR(20)), '))');
	end if;
	if intIdMarca is not null then
		if strcmp(whereVariable, 'where') <> 0 then
			set whereVariable = concat(whereVariable, ' and ');
		end if;
		set whereVariable = concat(whereVariable, ' (', CAST(intIdMarca AS CHAR(20)), ' is null or (p.id_marca = ', CAST(intIdMarca AS CHAR(20)), '))');
	end if;
	if strNombreDescripcion is not null then
		if strcmp(whereVariable, 'where') <> 0 then
			set whereVariable = concat(whereVariable, ' and ');
		end if;
		set whereVariable = concat(whereVariable, ' ((\'', strNombreDescripcion, '\' is null or (upper(p.nombre) like upper(concat(\'%\',\'', strNombreDescripcion, '\',\'%\'))))');
		set whereVariable = concat(whereVariable, ' or (\'', strNombreDescripcion, '\' is null or (upper(p.descripcion) like upper(concat(\'%\',\'', strNombreDescripcion, '\',\'%\'))))');
		set whereVariable = concat(whereVariable, ' or (\'', strNombreDescripcion, '\' is null or (upper(m.nombre) like upper(concat(\'%\',\'', strNombreDescripcion, '\',\'%\')))))');
	end if;
	if intEsMarcasXCliente = 1 then
		if strcmp(whereVariable, 'where') <> 0 then
			set whereVariable = concat(whereVariable, ' and ');
		end if;
		set whereVariable = concat(whereVariable, ' ( p.id_marca in (select mxccnt.id_marca from pedidos.marcas_x_cliente mxccnt where mxccnt.id_cliente = ', CAST(intIdCliente AS CHAR(20)),' ) ) ');
	end if;

	if strcmp(whereVariable, 'where') <> 0 then
		set whereVariable = concat(whereVariable, ' and ');
	end if;
	
	set whereVariable = concat(whereVariable, ' p.deleted_at is null ');

	if intEsBusqueda = 1 then
		set limitVariable = ' limit 6';
	else
		set limitVariable = ' limit 50000';
	end if;
	
	set selectStatement = concat(selectStatement, whereVariable, limitVariable);

	-- select selectStatement;

     SET @statement = selectStatement;
     PREPARE dynquery FROM @statement;
     EXECUTE dynquery;
     DEALLOCATE PREPARE dynquery;
	
/*		   select 
		   p.id, 
		   p.referencia_cod_prov, 
		   p.nombre nombre_producto,
		   p.descripcion, 
		   p.id_archivo_subido_img,
		   CONCAT(strUrlBaseImg, strUrl, f.imagen_lowres_uid) url_imagen_lowres_uid, 
		   CONCAT(strUrlBaseImg, strUrl, f.imagen_original_uid) url_imagen_original_uid,
		   p.id_color, 
		   clr.valor color,
		   p.id_marca, 
		   m.nombre nombre_marca, 
		   m.id_archivo_subido_img id_img_marca,
		   p.id_tipo_material, 
		   tmat.valor tipo_material,
		   p.id_genero, 
		   gnr.valor genero,
		   p.id_categoria, 
		   catgr.valor categoria,
		   p.precio,
		   p.total_unidades,
		   es_en_carrito_draft(intIdCliente, p.id) esta_en_carrito_draft
	from pedidos.productos p
	inner join pedidos.catalogos clr on p.id_color = clr.id_catalogo
	inner join pedidos.marcas m on p.id_marca = m.id
	left join pedidos.archivos_subidos f on p.id_archivo_subido_img = f.id
	left join pedidos.catalogos tmat on p.id_tipo_material = tmat.id_catalogo
	left join pedidos.catalogos gnr on p.id_genero = gnr.id_catalogo
	left join pedidos.catalogos catgr on p.id_categoria = catgr.id_catalogo
	where (intIdProducto is null or (p.id = intIdProducto))
	and (intIdCategoria is null or (p.id_categoria = intIdCategoria))
	and ((strNombreDescripcion is null or (upper(p.nombre) like upper(concat('%',strNombreDescripcion,'%'))))
		  or (strNombreDescripcion is null or (upper(p.descripcion) like upper(concat('%',strNombreDescripcion,'%')))))
	and p.deleted_at is null;*/

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `get_totalprod_incart` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` PROCEDURE `get_totalprod_incart`(IN `intIdCliente` INT(11) UNSIGNED)
begin

	select 
		count(c.id) totalprods
	from pedidos.carrito c
	inner join pedidos.catalogos estcrrt on estcrrt.id_catalogo = c.id_estado_carrito 
	where (intIdCliente is null or (c.id_cliente = intIdCliente))
	and c.deleted_at is null and estcrrt.codigo_catalogo IN ('DRAFT', 'VERIFIED');
	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `get_usuarios_by_codrole` */;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`sirega`@`127.0.0.1` PROCEDURE `get_usuarios_by_codrole`(IN `intIdUsuario` INT(11) UNSIGNED, IN `strCodigoRole` VARCHAR(100), IN `strUrlBaseImg` VARCHAR(100), IN `strUrl` VARCHAR(100))
begin

	select urs.id, urs.username, urs.email, 
		   urs.id_archivo_subido_img, urs.nombre_completo, urs.telefono_fijo, 
		   urs.telefono_celular, urs.id_ciudad, ct.valor ciudad, urs.id_zona, zn.valor zona, 
		   urs.talla_zapato, urs.direccion,
		   urs.id_tipo_pago,
		   tpy.valor tipo_pago,
		   urs.limite_credito,
		   urs.costo_por_envio,
		   
		   CASE COALESCE(f.imagen_lowres_uid, 0)
           WHEN 0 THEN CONCAT(strUrlBaseImg, CONCAT(strUrl,'/default_imgs/'), 'user.png')
                  ELSE CONCAT(strUrlBaseImg, strUrl, f.imagen_lowres_uid)
           END  AS url_imagen_lowres_uid,
           
		   CASE COALESCE(f.imagen_original_uid, 0)
           WHEN 0 THEN CONCAT(strUrlBaseImg, CONCAT(strUrl,'/default_imgs/'), 'user.png')
                  ELSE CONCAT(strUrlBaseImg, strUrl, f.imagen_original_uid)
           END  AS url_imagen_original_uid
	from pedidos.users urs
	inner join pedidos.sec_roles_users rusrs on urs.id = rusrs.users_id
	inner join pedidos.sec_roles srls on rusrs.roles_id = srls.id
	left join archivos_subidos f on urs.id_archivo_subido_img = f.id
	left join pedidos.catalogos ct on urs.id_ciudad = ct.id_catalogo
	left join pedidos.catalogos zn on urs.id_zona = zn.id_catalogo
	left join pedidos.catalogos tpy on urs.id_tipo_pago = tpy.id_catalogo
	where (strCodigoRole is null or (srls.codigo = strCodigoRole))
	and (intIdUsuario is null or (urs.id = intIdUsuario))
	and urs.deleted_at is null;
	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `pedidos` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-16 20:35:14
