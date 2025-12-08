-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 08 déc. 2025 à 11:03
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `app_juridique_assurance_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `assurance_accidents_travail`
--

CREATE TABLE `assurance_accidents_travail` (
  `id` int(11) NOT NULL,
  `id_dossiers_assurance` int(11) NOT NULL,
  `salarie_concerne` varchar(200) DEFAULT NULL,
  `date_incident` date DEFAULT NULL,
  `documents` text DEFAULT NULL,
  `statut` varchar(100) DEFAULT NULL,
  `observations` text DEFAULT NULL,
  `montant_indemnisation` decimal(10,2) DEFAULT NULL,
  `date_cloture` date DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `assurance_categories`
--

CREATE TABLE `assurance_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `assurance_responsabilite_civile`
--

CREATE TABLE `assurance_responsabilite_civile` (
  `id` int(11) NOT NULL,
  `id_dossiers_assurance` int(11) NOT NULL,
  `categorie` varchar(100) DEFAULT NULL,
  `date_incident` date DEFAULT NULL,
  `date_envoi_assurance` date DEFAULT NULL,
  `gerance` varchar(200) DEFAULT NULL,
  `responsable_civile` varchar(200) DEFAULT NULL,
  `montant_devis` decimal(10,2) DEFAULT NULL,
  `montant_expert` decimal(10,2) DEFAULT NULL,
  `rapport_du_sinistre` text DEFAULT NULL,
  `documents` text DEFAULT NULL,
  `statut` varchar(50) DEFAULT NULL,
  `observations` text DEFAULT NULL,
  `montant_indemnisation` decimal(10,2) DEFAULT NULL,
  `date_cloture` date DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `assurance_sinistres_multirisques`
--

CREATE TABLE `assurance_sinistres_multirisques` (
  `id` int(11) NOT NULL,
  `id_dossiers_assurance` int(11) NOT NULL,
  `type` varchar(100) DEFAULT NULL,
  `declaration` text DEFAULT NULL,
  `estimation_pertes` text DEFAULT NULL,
  `documents` text DEFAULT NULL,
  `statut` varchar(50) DEFAULT NULL,
  `observations` text DEFAULT NULL,
  `montant_indemnisation` decimal(10,2) DEFAULT NULL,
  `date_cloture` date DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `assurance_vehicules_service`
--

CREATE TABLE `assurance_vehicules_service` (
  `id` int(11) NOT NULL,
  `id_dossiers_assurance` int(11) NOT NULL,
  `vehicule_id` int(11) DEFAULT NULL,
  `matricule_vehicule` varchar(100) DEFAULT NULL,
  `modele_vehicule` varchar(150) DEFAULT NULL,
  `conducteur_vehicule` varchar(200) DEFAULT NULL,
  `type_sinistre` varchar(100) DEFAULT NULL,
  `documents` text DEFAULT NULL,
  `statut` varchar(50) DEFAULT NULL,
  `observations` text DEFAULT NULL,
  `montant_indemnisation` decimal(10,2) DEFAULT NULL,
  `date_cloture` date DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cheques_et_effets_impayes`
--

CREATE TABLE `cheques_et_effets_impayes` (
  `id` int(11) NOT NULL,
  `code_reference` varchar(50) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `numero` varchar(100) DEFAULT NULL,
  `emetteur` varchar(200) DEFAULT NULL,
  `banque` varchar(200) DEFAULT NULL,
  `montant` decimal(12,2) DEFAULT NULL,
  `date_rejet` date DEFAULT NULL,
  `date_echeance` date DEFAULT NULL,
  `date_transmission_avocat` date DEFAULT NULL,
  `date_reglement` date DEFAULT NULL,
  `mode_reglement` varchar(100) DEFAULT NULL,
  `motif_rejet` text DEFAULT NULL,
  `documents` text DEFAULT NULL,
  `date_procedure` timestamp NOT NULL DEFAULT current_timestamp(),
  `commentaire` text DEFAULT NULL,
  `convention_contrat` varchar(200) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `compagnies_assurance`
--

CREATE TABLE `compagnies_assurance` (
  `id` int(11) NOT NULL,
  `nom` varchar(200) DEFAULT NULL,
  `telephone` varchar(50) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `adresse` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `documents`
--

CREATE TABLE `documents` (
  `id` int(11) NOT NULL,
  `code_reference` varchar(50) DEFAULT NULL,
  `file_path` text DEFAULT NULL,
  `original_name` varchar(255) DEFAULT NULL,
  `stored_name` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `type_document` varchar(100) DEFAULT NULL,
  `related_table` varchar(100) DEFAULT NULL,
  `related_id` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `dossiers_assurance`
--

CREATE TABLE `dossiers_assurance` (
  `id` int(11) NOT NULL,
  `code_reference` varchar(50) DEFAULT NULL,
  `numero_dossier` varchar(150) DEFAULT NULL,
  `categorie` int(11) DEFAULT NULL,
  `date_incident` date DEFAULT NULL,
  `statut` varchar(50) DEFAULT NULL,
  `compagnie_assurance_id` int(11) DEFAULT NULL,
  `lieu_incident` varchar(200) DEFAULT NULL,
  `description_incident` text DEFAULT NULL,
  `date_ouverture` date DEFAULT NULL,
  `date_cloture` date DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `dossiers_contentieux`
--

CREATE TABLE `dossiers_contentieux` (
  `id` int(11) NOT NULL,
  `code_reference` varchar(50) DEFAULT NULL,
  `numero_dossier` varchar(100) NOT NULL,
  `tribunal_type` varchar(100) DEFAULT NULL,
  `type_affaire` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT 'en_cours',
  `priority` varchar(100) DEFAULT 'medium',
  `description` text DEFAULT NULL,
  `date_ouverture` date DEFAULT NULL,
  `date_cloture` date DEFAULT NULL,
  `documents` text DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `dossier_contentieux_dates`
--

CREATE TABLE `dossier_contentieux_dates` (
  `id` int(11) NOT NULL,
  `id_dossiers_contentieux` int(11) NOT NULL,
  `id_tribunaux` int(11) NOT NULL,
  `type_date` varchar(100) DEFAULT NULL,
  `date_evenement` datetime DEFAULT current_timestamp(),
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `dossier_contentieux_parties`
--

CREATE TABLE `dossier_contentieux_parties` (
  `id` int(11) NOT NULL,
  `id_dossiers_contentieux` int(11) NOT NULL,
  `nom` varchar(200) DEFAULT NULL,
  `type_partie` varchar(100) DEFAULT NULL,
  `contact` varchar(100) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `adresse` text DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `historique_actions`
--

CREATE TABLE `historique_actions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `action_type` varchar(100) DEFAULT NULL,
  `table_name` varchar(150) DEFAULT NULL,
  `record_id` int(11) DEFAULT NULL,
  `old_values` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`old_values`)),
  `new_values` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`new_values`)),
  `ip_address` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `message` text DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `name`, `description`, `created_by`, `created_at`) VALUES
(1, 'Administrateur', 'Full access', 1, '2025-12-05 09:32:45'),
(2, 'Juriste', 'Can manage dossiers_contentieux', 1, '2025-12-05 09:32:45');

-- --------------------------------------------------------

--
-- Structure de la table `tribunaux`
--

CREATE TABLE `tribunaux` (
  `id` int(11) NOT NULL,
  `type` varchar(150) DEFAULT NULL,
  `city` varchar(150) DEFAULT NULL,
  `section` varchar(200) DEFAULT NULL,
  `name_ar` varchar(200) DEFAULT NULL,
  `name_fr` varchar(200) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` int(11) NOT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role_id`, `phone`, `last_login`, `is_active`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 'admin@example.com', '$2b$10$qwMRY5sN2Di2iO27P4xiFecAgbg3cRHLKNJ4XKv7Vwax45RUOBhdC', 1, '0600000000', NULL, 1, 1, '2025-12-05 09:33:35', '2025-12-05 09:33:35'),
(2, 'John Doe', 'juriste@example.com', '$2b$10$IfOVj9.fTssdtEbXewi4iuxdINgNLzoulgLmgaObCfk7uGuKb7kxi', 2, '0611111111', NULL, 1, 1, '2025-12-05 09:33:35', '2025-12-05 09:33:35');

-- --------------------------------------------------------

--
-- Structure de la table `vehicules_asrnc`
--

CREATE TABLE `vehicules_asrnc` (
  `id` int(11) NOT NULL,
  `matricule` varchar(100) DEFAULT NULL,
  `modele` varchar(150) DEFAULT NULL,
  `conducteur` varchar(200) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `vehicule_sinistre_etapes`
--

CREATE TABLE `vehicule_sinistre_etapes` (
  `id` int(11) NOT NULL,
  `id_dossier_assurance_vehicules` int(11) NOT NULL,
  `type_etape` varchar(100) DEFAULT NULL,
  `date_etape` date DEFAULT NULL,
  `description` text DEFAULT NULL,
  `document_id` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `assurance_accidents_travail`
--
ALTER TABLE `assurance_accidents_travail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_dossiers_assurance` (`id_dossiers_assurance`);

--
-- Index pour la table `assurance_categories`
--
ALTER TABLE `assurance_categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `assurance_responsabilite_civile`
--
ALTER TABLE `assurance_responsabilite_civile`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_dossiers_assurance` (`id_dossiers_assurance`);

--
-- Index pour la table `assurance_sinistres_multirisques`
--
ALTER TABLE `assurance_sinistres_multirisques`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_dossiers_assurance` (`id_dossiers_assurance`);

--
-- Index pour la table `assurance_vehicules_service`
--
ALTER TABLE `assurance_vehicules_service`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vehicule_id` (`vehicule_id`),
  ADD KEY `id_dossiers_assurance` (`id_dossiers_assurance`);

--
-- Index pour la table `cheques_et_effets_impayes`
--
ALTER TABLE `cheques_et_effets_impayes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code_reference` (`code_reference`);

--
-- Index pour la table `compagnies_assurance`
--
ALTER TABLE `compagnies_assurance`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code_reference` (`code_reference`);

--
-- Index pour la table `dossiers_assurance`
--
ALTER TABLE `dossiers_assurance`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code_reference` (`code_reference`);

--
-- Index pour la table `dossiers_contentieux`
--
ALTER TABLE `dossiers_contentieux`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code_reference` (`code_reference`);

--
-- Index pour la table `dossier_contentieux_dates`
--
ALTER TABLE `dossier_contentieux_dates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_dossiers_contentieux` (`id_dossiers_contentieux`),
  ADD KEY `id_tribunaux` (`id_tribunaux`);

--
-- Index pour la table `dossier_contentieux_parties`
--
ALTER TABLE `dossier_contentieux_parties`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_dossiers_contentieux` (`id_dossiers_contentieux`);

--
-- Index pour la table `historique_actions`
--
ALTER TABLE `historique_actions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tribunaux`
--
ALTER TABLE `tribunaux`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `role_id` (`role_id`);

--
-- Index pour la table `vehicules_asrnc`
--
ALTER TABLE `vehicules_asrnc`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `vehicule_sinistre_etapes`
--
ALTER TABLE `vehicule_sinistre_etapes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_dossier_assurance_vehicules` (`id_dossier_assurance_vehicules`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `assurance_accidents_travail`
--
ALTER TABLE `assurance_accidents_travail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `assurance_categories`
--
ALTER TABLE `assurance_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `assurance_responsabilite_civile`
--
ALTER TABLE `assurance_responsabilite_civile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `assurance_sinistres_multirisques`
--
ALTER TABLE `assurance_sinistres_multirisques`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `assurance_vehicules_service`
--
ALTER TABLE `assurance_vehicules_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `cheques_et_effets_impayes`
--
ALTER TABLE `cheques_et_effets_impayes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `compagnies_assurance`
--
ALTER TABLE `compagnies_assurance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `dossiers_assurance`
--
ALTER TABLE `dossiers_assurance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `dossiers_contentieux`
--
ALTER TABLE `dossiers_contentieux`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `dossier_contentieux_dates`
--
ALTER TABLE `dossier_contentieux_dates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `dossier_contentieux_parties`
--
ALTER TABLE `dossier_contentieux_parties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `historique_actions`
--
ALTER TABLE `historique_actions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `tribunaux`
--
ALTER TABLE `tribunaux`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `vehicules_asrnc`
--
ALTER TABLE `vehicules_asrnc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `vehicule_sinistre_etapes`
--
ALTER TABLE `vehicule_sinistre_etapes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `assurance_accidents_travail`
--
ALTER TABLE `assurance_accidents_travail`
  ADD CONSTRAINT `assurance_accidents_travail_ibfk_1` FOREIGN KEY (`id_dossiers_assurance`) REFERENCES `dossiers_assurance` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `assurance_responsabilite_civile`
--
ALTER TABLE `assurance_responsabilite_civile`
  ADD CONSTRAINT `assurance_responsabilite_civile_ibfk_1` FOREIGN KEY (`id_dossiers_assurance`) REFERENCES `dossiers_assurance` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `assurance_sinistres_multirisques`
--
ALTER TABLE `assurance_sinistres_multirisques`
  ADD CONSTRAINT `assurance_sinistres_multirisques_ibfk_1` FOREIGN KEY (`id_dossiers_assurance`) REFERENCES `dossiers_assurance` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `assurance_vehicules_service`
--
ALTER TABLE `assurance_vehicules_service`
  ADD CONSTRAINT `assurance_vehicules_service_ibfk_1` FOREIGN KEY (`vehicule_id`) REFERENCES `vehicules_asrnc` (`id`),
  ADD CONSTRAINT `assurance_vehicules_service_ibfk_2` FOREIGN KEY (`id_dossiers_assurance`) REFERENCES `dossiers_assurance` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `dossier_contentieux_dates`
--
ALTER TABLE `dossier_contentieux_dates`
  ADD CONSTRAINT `dossier_contentieux_dates_ibfk_1` FOREIGN KEY (`id_dossiers_contentieux`) REFERENCES `dossiers_contentieux` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `dossier_contentieux_dates_ibfk_2` FOREIGN KEY (`id_tribunaux`) REFERENCES `tribunaux` (`id`);

--
-- Contraintes pour la table `dossier_contentieux_parties`
--
ALTER TABLE `dossier_contentieux_parties`
  ADD CONSTRAINT `dossier_contentieux_parties_ibfk_1` FOREIGN KEY (`id_dossiers_contentieux`) REFERENCES `dossiers_contentieux` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `historique_actions`
--
ALTER TABLE `historique_actions`
  ADD CONSTRAINT `historique_actions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);

--
-- Contraintes pour la table `vehicule_sinistre_etapes`
--
ALTER TABLE `vehicule_sinistre_etapes`
  ADD CONSTRAINT `vehicule_sinistre_etapes_ibfk_1` FOREIGN KEY (`id_dossier_assurance_vehicules`) REFERENCES `assurance_vehicules_service` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
