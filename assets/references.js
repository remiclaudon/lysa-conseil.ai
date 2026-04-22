/**
 * Lysa Conseil — Bibliothèque de références clients
 *
 * Pour ajouter / modifier / supprimer une référence,
 * éditez simplement ce tableau puis sauvegardez.
 * Le carrousel se met à jour automatiquement.
 *
 * Champs disponibles :
 *   sector   : libellé du badge secteur (ex. "Énergie")
 *   title    : intitulé de la mission
 *   desc     : description courte (2-3 phrases max)
 *   results  : tableau de 2 à 4 résultats chiffrés ou qualitatifs
 *   tags     : mots-clés techniques (optionnel, max 4)
 */

const LYSA_REFERENCES = [
  {
    sector: "Énergie",
    title: "Programme Data Driven Company",
    desc: "Transformation d'un leader mondial de l'énergie autour de l'IA : gouvernance multi-niveaux (Groupe, BU, Opérationnels), plateforme AWS groupe pour industrialiser les projets, animation d'un portefeuille de plusieurs centaines de cas d'usage sur 18 Business Units.",
    results: ["18 BU transformées", "300+ cas d'usage", "400+ data scientists", "Plateforme AWS groupe"],
    tags: ["Gouvernance IA", "Programme transformation", "Communauté data", "AWS"]
  },
  {
    sector: "Assurance",
    title: "Transformation IA 360",
    desc: "Définition du programme de transformation IA sur les activités Vie et IARD, et conception de plusieurs modèles IA à fort potentiel : ciblage marketing, détection de fraude sinistres, élasticité prix à date anniversaire.",
    results: ["25+ cas d'usage priorisés", "4 MVP IA", "Ciblage souscription", "Détection de fraude", "Elasticité prix", "Formation ML équipes"],
    tags: ["Machine Learning", "Fraude", "Pricing", "Feuille de route"]
  },
  {
    sector: "Banque",
    title: "Feuilles de route IA multi-entités",
    desc: "Programme de transformation IA couvrant les activités banque de réseau (grand public, professionnels, entreprises) et assurance IARD. Structuration de deux feuilles de route distinctes articulées autour d'un datalake commun.",
    results: ["2 feuilles de route", "40 cas d'usage", "Datalake mutualisé", "Multi-entités"],
    tags: ["Feuille de route", "Banque de réseau", "Assurance", "Data Lake"]
  },
  {
  sector: "Énergie & Utilities",
  title: "Solution digitale de maîtrise de la consommation",
  desc: "Conception et déploiement d'une application mobile multi-fluide (compteurs communicants) intégrant un moteur IA de classification des profils de consommation, une facture intelligente personnalisée et un programme complet d'aides comportementales.",
  results: ["Des milliers de factures intelligentes transmises", "Modèle IA en production", "Programme d'aides personnalisées", "Déploiement industriel"],
  tags: ["IA prédictive", "Marketing comportemental", "Déploiement", "Utilities"]
  },
  {
  sector: "Banque",
  title: "Gouvernance des données ESG",
  desc: "Structuration de la gouvernance des données ESG pour une grande banque BFI — réglementation SFDR, CSRD et taxonomie verte. Cartographie des besoins réglementaires, benchmark des data providers extra-financiers et définition du modèle cible de gouvernance aligné sur le calendrier CSRD.",
  results: ["Gouvernance ESG cible", "Feuille de route réglementaire", "Stratégie décarbonation (PCAF)", "SFDR / CSRD / Taxonomie"],
  tags: ["ESG Data", "Conformité réglementaire", "BFI", "Gouvernance données"]
  },
  {
  sector: "Télécom",
  title: "Optimisation du réseau de distribution",
  desc: "Mission bout-en-bout d'un an : modélisation géomarketing du réseau de boutiques d'un opérateur national sur 300 zones de chalandise (données socio-démographiques, concurrence, CA), recommandations par zone (fermeture, relocalisation, ouverture avec caractéristiques cibles), déploiement national, puis déclinaison sur les offres de niche (segments Pro).",
  results: ["300 zones de chalandise modélisées", "Déploiement national des recommandations", "Déclinaison offres Pro", "Mission bout-en-bout > 1 an"],
  tags: ["Géomarketing", "Modélisation réseau", "Data Science", "Zone de chalandise"]
  },
  {
    sector: "Asset Management",
    title: "Services ESG data-driven",
    desc: "Accompagnement d'un leader des Security Services dans la conception et le lancement de services ESG innovants pour ses clients Asset Managers : architecture données, benchmark fournisseurs extra-financiers, gouvernance et mise en production.",
    results: ["2 offres lancées", "Gouvernance ESG", "Architecture data", "CSRD / SFDR"],
    tags: ["ESG Data", "Asset Management", "Données extra-financières", "Mise en production"]
  },
   {
  sector: "Automobile",
  title: "Modèle data science pricing véhicules d'occasion",
  desc: "Conception et mise en production d'un modèle de valorisation des Véhicule d'Occasion (VO) intégrant données marché, historiques de vente et caractéristiques véhicule. Enjeu principal : permettre au constructeur de gagner en visibilité et en autonomie face à la dépendance de l'acteur historique.",
  results: ["Modèle pricing VO en production", "Autonomie", "Données marché intégrées", "Modèle industrialisé"],
  tags: ["Data Science", "Pricing VO", "Automobile", "Modélisation"]
},
  {
    sector: "Asset Management",
    title: "Programme de formation IA",
    desc: "Conception et animation d'un programme complet en Data Science, Machine Learning et IA générative. Quatre modules couvrant l'ensemble du spectre IA, mêlant fondamentaux théoriques et ateliers pratiques sur 15 cas d'usage concrets.",
    results: ["6 modules", "15h de formation", "15 cas d'usage réels", "Prompt engineering"],
    tags: ["Formation IA", "Machine Learning", "IA générative et agentique", "Biais cognitifs"]
   }
];
