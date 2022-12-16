-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 16 déc. 2022 à 11:35
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gestionnaire_absence`
--

-- --------------------------------------------------------

--
-- Structure de la table `absencegenerale`
--

CREATE TABLE `absencegenerale` (
  `IdAbsenceGenerale` int(11) NOT NULL,
  `Jour` varchar(250) NOT NULL,
  `Type` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `absencegenerale`
--

INSERT INTO `absencegenerale` (`IdAbsenceGenerale`, `Jour`, `Type`) VALUES
(2, 'LUNDI', 'Jour fériés');

-- --------------------------------------------------------

--
-- Structure de la table `absences`
--

CREATE TABLE `absences` (
  `IdAbsence` int(11) NOT NULL,
  `DateDebut` date NOT NULL,
  `DateFin` date NOT NULL,
  `DateDemande` date NOT NULL,
  `Label` varchar(250) DEFAULT NULL,
  `Statut` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `absences`
--

INSERT INTO `absences` (`IdAbsence`, `DateDebut`, `DateFin`, `DateDemande`, `Label`, `Statut`) VALUES
(1, '2023-12-19', '2023-12-22', '2022-12-16', 'Absence factice 1', 'INITIALE'),
(2, '2023-05-08', '2023-05-09', '2022-12-16', 'fête nationale', 'INITIALE'),
(3, '2023-02-09', '2023-02-10', '2022-12-16', 'Absence factice 2', 'INITIALE');

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `IdRole` int(11) NOT NULL,
  `Admin` int(11) NOT NULL,
  `Manageur` int(11) NOT NULL,
  `Salarie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`IdRole`, `Admin`, `Manageur`, `Salarie`) VALUES
(1, 1, 0, 0),
(2, 0, 1, 0),
(3, 0, 0, 1);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `IdUser` int(11) NOT NULL,
  `Nom` varchar(250) NOT NULL,
  `Prenom` varchar(250) NOT NULL,
  `Mail` varchar(250) NOT NULL,
  `Mdp` varchar(250) NOT NULL,
  `solde` int(30) NOT NULL,
  `role` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`IdUser`, `Nom`, `Prenom`, `Mail`, `Mdp`, `solde`, `role`) VALUES
(1, 'Pinceau Eliadore', 'Eva', 'eva.pinceau@gmail.com', 'admin123', 0, 1),
(2, 'Calcei ', 'Pamela', 'calcei.pamela@gmail.com', 'manageur123', 0, 2),
(3, 'Derré', 'Nicolas', 'derre.nicolas@gmail.com', 'salarie123', 0, 3);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `absencegenerale`
--
ALTER TABLE `absencegenerale`
  ADD PRIMARY KEY (`IdAbsenceGenerale`);

--
-- Index pour la table `absences`
--
ALTER TABLE `absences`
  ADD PRIMARY KEY (`IdAbsence`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`IdRole`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`IdUser`),
  ADD KEY `role` (`role`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `absences`
--
ALTER TABLE `absences`
  MODIFY `IdAbsence` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `IdRole` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `IdUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `absencegenerale`
--
ALTER TABLE `absencegenerale`
  ADD CONSTRAINT `absencegenerale_ibfk_1` FOREIGN KEY (`IdAbsenceGenerale`) REFERENCES `absences` (`IdAbsence`);

--
-- Contraintes pour la table `absences`
--
ALTER TABLE `absences`
  ADD CONSTRAINT `absences_ibfk_1` FOREIGN KEY (`IdAbsence`) REFERENCES `users` (`IdUser`);

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `roles` (`IdRole`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
