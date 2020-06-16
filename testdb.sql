-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 15 juin 2020 à 04:55
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `testdb`
--

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'USER', '2020-06-14 11:21:43', '2020-06-14 11:21:43'),
(2, 'MEMBER', '2020-06-14 11:21:43', '2020-06-14 11:21:43'),
(3, 'ADMIN', '2020-06-14 11:21:43', '2020-06-14 11:21:43');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `factureabonment` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `department`, `adress`, `factureabonment`, `createdAt`, `updatedAt`) VALUES
(16, 'hello', 'hello', 'hello@gmail.com', '$2a$08$v22xHKoNkWP7d9EmGwHPouXgqAZmGYehoi6bhmw7bXmiJLMHm8SB2', NULL, NULL, NULL, '2020-06-15 04:47:10', '2020-06-15 04:47:10'),
(17, 'test', 'test', 'test@thp.fr', '$2a$08$Vrc6mz.LqTFt/vpWgd81/u8hkJSZFYvOdPzff6OjAZcYLi1czri5C', NULL, NULL, NULL, '2020-06-15 04:51:53', '2020-06-15 04:51:53'),
(18, 'testthp', 'testthp', 'testthp@gmail.com', '$2a$08$xAX.N/WjlDB1fUmbSdG.b.G3Qb9iA7sYoXkNDVucZEHdHnBB6xlmq', NULL, NULL, NULL, '2020-06-15 04:52:48', '2020-06-15 04:52:48'),
(19, 'testAB', 'testAB', 'testAB@gmail.com', '$2a$08$4LMOWKZLtdipLGgDe6zHQ.hAdKgH/02Fk79L4o4GIaURt21C6Wm2i', NULL, NULL, NULL, '2020-06-15 04:53:37', '2020-06-15 04:53:37');

-- --------------------------------------------------------

--
-- Structure de la table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE IF NOT EXISTS `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`roleId`,`userId`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user_roles`
--

INSERT INTO `user_roles` (`createdAt`, `updatedAt`, `roleId`, `userId`) VALUES
('2020-06-15 04:51:53', '2020-06-15 04:51:53', 1, 17),
('2020-06-15 04:52:48', '2020-06-15 04:52:48', 2, 18),
('2020-06-15 04:53:37', '2020-06-15 04:53:37', 2, 19),
('2020-06-15 04:47:10', '2020-06-15 04:47:10', 3, 16);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
