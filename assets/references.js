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
    desc: "Transformation d'un leader mondial de l'énergie autour de l'IA : gouvernance multi-niveaux (holding, BU, CDO), plateforme AWS groupe pour industrialiser les projets, animation d'un portefeuille de plusieurs centaines de cas d'usage sur 18 Business Units.",
    results: ["18 BU transformées", "300+ cas d'usage", "400+ data scientists", "Plateforme AWS groupe"],
    tags: ["Gouvernance IA", "Programme transformation", "Communauté data", "AWS"]
  },
  {
    sector: "Banque",
    title: "Feuilles de route IA multi-entités",
    desc: "Programme de transformation IA couvrant les activités banque de réseau (grand public, professionnels, entreprises) et assurance IARD. Structuration de deux feuilles de route distinctes articulées autour d'un datalake commun.",
    results: ["2 feuilles de route", "40 cas d'usage", "Datalake mutualisé", "Multi-entités"],
    tags: ["Feuille de route", "Bancassurance", "Data Lake", "Change management"]
  },
  {
    sector: "Asset Management",
    title: "Programme de formation IA",
    desc: "Conception et animation d'un programme complet en Data Science, Machine Learning et IA générative. Quatre modules couvrant l'ensemble du spectre IA, mêlant fondamentaux théoriques et ateliers pratiques sur 15 cas d'usage concrets.",
    results: ["4 modules", "14h de formation", "15 cas d'usage réels", "Prompt engineering"],
    tags: ["Formation IA", "LLM", "Machine Learning", "Biais cognitifs"]
  },
  {
    sector: "Banque",
    title: "Services ESG data-driven",
    desc: "Accompagnement d'un leader des Security Services dans la conception et le lancement de services ESG innovants pour ses clients Asset Managers : architecture données, benchmark fournisseurs extra-financiers, gouvernance et mise en production.",
    results: ["2 offres lancées", "Gouvernance ESG", "Architecture data", "CSRD / SFDR"],
    tags: ["ESG Data", "Asset Management", "Données extra-financières", "Mise en production"]
  },
  {
    sector: "Assurance",
    title: "Feuille de route IA et MVP",
    desc: "Définition du programme de transformation IA sur les activités Vie et IARD, et conception de plusieurs modèles IA à fort potentiel : ciblage marketing, détection de fraude sinistres, élasticité prix à date anniversaire.",
    results: ["20+ cas d'usage priorisés", "3 MVP IA", "Ciblage, fraude, pricing", "Formation ML équipes"],
    tags: ["Machine Learning", "Fraude", "Pricing", "Feuille de route"]
  }
];
