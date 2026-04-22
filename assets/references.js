/**
 * Lysa Conseil — Bibliothèque de références clients
 *
 * Pour ajouter / modifier / supprimer une référence,
 * éditez simplement ce tableau puis sauvegardez.
 * Le carrousel se met à jour automatiquement.
 *
 * Champs disponibles :
 *   sector      : libellé du badge secteur (ex. "Énergie")
 *   sector_en   : English sector label
 *   title       : intitulé de la mission
 *   title_en    : English mission title
 *   desc        : description courte (2-3 phrases max)
 *   desc_en     : English description
 *   results     : tableau de 2 à 4 résultats chiffrés ou qualitatifs
 *   results_en  : English results
 *   tags        : mots-clés techniques (optionnel, max 4)
 *   tags_en     : English tags
 */

const LYSA_REFERENCES = [
  {
    sector: "Énergie",
    sector_en: "Energy",
    title: "Programme Data Driven Company",
    title_en: "Data Driven Company Programme",
    desc: "Transformation d'un leader mondial de l'énergie autour de l'IA : gouvernance multi-niveaux (Groupe, BU, Opérationnels), plateforme AWS groupe pour industrialiser les projets, animation d'un portefeuille de plusieurs centaines de cas d'usage sur 18 Business Units.",
    desc_en: "Transformation of a global energy leader around AI: multi-level governance (Group, BU, Operations), Group AWS platform to industrialise projects, management of a portfolio of several hundred use cases across 18 Business Units.",
    results: ["18 BU transformées", "300+ cas d'usage", "400+ data scientists", "Plateforme AWS groupe"],
    results_en: ["18 BUs transformed", "300+ use cases", "400+ data scientists", "Group AWS platform"],
    tags: ["Gouvernance IA", "Programme transformation", "Communauté data", "AWS"],
    tags_en: ["AI Governance", "Transformation programme", "Data community", "AWS"]
  },
  {
    sector: "Assurance",
    sector_en: "Insurance",
    title: "Transformation IA 360",
    title_en: "360° AI Transformation",
    desc: "Définition du programme de transformation IA sur les activités Vie et IARD, et conception de plusieurs modèles IA à fort potentiel : ciblage marketing, détection de fraude sinistres, élasticité prix à date anniversaire.",
    desc_en: "Definition of the AI transformation programme for Life and P&C insurance activities, and design of several high-potential AI models: marketing targeting, claims fraud detection, price elasticity at renewal.",
    results: ["25+ cas d'usage priorisés", "4 MVP IA", "Ciblage souscription", "Détection de fraude", "Elasticité prix", "Formation ML équipes"],
    results_en: ["25+ prioritised use cases", "4 AI MVPs", "Subscription targeting", "Fraud detection", "Price elasticity", "ML team training"],
    tags: ["Machine Learning", "Fraude", "Pricing", "Feuille de route"],
    tags_en: ["Machine Learning", "Fraud", "Pricing", "Roadmap"]
  },
  {
    sector: "Banque",
    sector_en: "Banking",
    title: "Feuilles de route IA multi-entités",
    title_en: "Multi-entity AI Roadmaps",
    desc: "Programme de transformation IA couvrant les activités banque de réseau (grand public, professionnels, entreprises) et assurance IARD. Structuration de deux feuilles de route distinctes articulées autour d'un datalake commun.",
    desc_en: "AI transformation programme covering retail banking (mass market, professionals, corporates) and P&C insurance activities. Structuring of two distinct roadmaps articulated around a shared data lake.",
    results: ["2 feuilles de route", "40 cas d'usage", "Datalake mutualisé", "Multi-entités"],
    results_en: ["2 roadmaps", "40 use cases", "Shared data lake", "Multi-entity"],
    tags: ["Feuille de route", "Banque de réseau", "Assurance", "Data Lake"],
    tags_en: ["Roadmap", "Retail banking", "Insurance", "Data Lake"]
  },
  {
    sector: "Énergie & Utilities",
    sector_en: "Energy & Utilities",
    title: "Solution digitale de maîtrise de la consommation",
    title_en: "Digital Energy Consumption Management Solution",
    desc: "Conception et déploiement d'une application mobile multi-fluide (compteurs communicants) intégrant un moteur IA de classification des profils de consommation, une facture intelligente personnalisée et un programme complet d'aides comportementales.",
    desc_en: "Design and deployment of a multi-utility mobile application (smart meters) integrating an AI engine for consumption profile classification, a personalised smart bill and a comprehensive behavioural assistance programme.",
    results: ["Des milliers de factures intelligentes transmises", "Modèle IA en production", "Programme d'aides personnalisées", "Déploiement industriel"],
    results_en: ["Thousands of smart bills delivered", "AI model in production", "Personalised assistance programme", "Industrial deployment"],
    tags: ["IA prédictive", "Marketing comportemental", "Déploiement", "Utilities"],
    tags_en: ["Predictive AI", "Behavioural marketing", "Deployment", "Utilities"]
  },
  {
    sector: "Banque",
    sector_en: "Banking",
    title: "Gouvernance des données ESG",
    title_en: "ESG Data Governance",
    desc: "Structuration de la gouvernance des données ESG pour une grande banque BFI — réglementation SFDR, CSRD et taxonomie verte. Cartographie des besoins réglementaires, benchmark des data providers extra-financiers et définition du modèle cible de gouvernance aligné sur le calendrier CSRD.",
    desc_en: "Structuring of ESG data governance for a major BFI bank — SFDR, CSRD and green taxonomy regulations. Mapping of regulatory requirements, benchmarking of extra-financial data providers and definition of the target governance model aligned with the CSRD timeline.",
    results: ["Gouvernance ESG cible", "Feuille de route réglementaire", "Stratégie décarbonation (PCAF)", "SFDR / CSRD / Taxonomie"],
    results_en: ["Target ESG governance", "Regulatory roadmap", "Decarbonisation strategy (PCAF)", "SFDR / CSRD / Taxonomy"],
    tags: ["ESG Data", "Conformité réglementaire", "BFI", "Gouvernance données"],
    tags_en: ["ESG Data", "Regulatory compliance", "BFI", "Data governance"]
  },
  {
    sector: "Télécom",
    sector_en: "Telecom",
    title: "Optimisation du réseau de distribution",
    title_en: "Distribution Network Optimisation",
    desc: "Mission bout-en-bout d'un an : modélisation géomarketing du réseau de boutiques d'un opérateur national sur 300 zones de chalandise (données socio-démographiques, concurrence, CA), recommandations par zone (fermeture, relocalisation, ouverture avec caractéristiques cibles), déploiement national, puis déclinaison sur les offres de niche (segments Pro).",
    desc_en: "End-to-end assignment over one year: geomarketing modelling of a national operator's retail network across 300 catchment areas (socio-demographic data, competition, revenue), zone-by-zone recommendations (closure, relocation, opening with target characteristics), national deployment, then rollout to niche offerings (Pro segments).",
    results: ["300 zones de chalandise modélisées", "Déploiement national des recommandations", "Déclinaison offres Pro", "Mission bout-en-bout > 1 an"],
    results_en: ["300 catchment areas modelled", "National deployment of recommendations", "Pro offer rollout", "End-to-end assignment > 1 year"],
    tags: ["Géomarketing", "Modélisation réseau", "Data Science", "Zone de chalandise"],
    tags_en: ["Geomarketing", "Network modelling", "Data Science", "Catchment area"]
  },
  {
    sector: "Asset Management",
    sector_en: "Asset Management",
    title: "Services ESG data-driven",
    title_en: "Data-driven ESG Services",
    desc: "Accompagnement d'un leader des Security Services dans la conception et le lancement de services ESG innovants pour ses clients Asset Managers : architecture données, benchmark fournisseurs extra-financiers, gouvernance et mise en production.",
    desc_en: "Supporting a Securities Services leader in the design and launch of innovative ESG services for its Asset Manager clients: data architecture, extra-financial provider benchmarking, governance and production launch.",
    results: ["2 offres lancées", "Gouvernance ESG", "Architecture data", "CSRD / SFDR"],
    results_en: ["2 services launched", "ESG governance", "Data architecture", "CSRD / SFDR"],
    tags: ["ESG Data", "Asset Management", "Données extra-financières", "Mise en production"],
    tags_en: ["ESG Data", "Asset Management", "Extra-financial data", "Production launch"]
  },
  {
    sector: "Automobile",
    sector_en: "Automotive",
    title: "Modèle data science pricing véhicules d'occasion",
    title_en: "Used Vehicle Data Science Pricing Model",
    desc: "Conception et mise en production d'un modèle de valorisation des Véhicule d'Occasion (VO) intégrant données marché, historiques de vente et caractéristiques véhicule. Enjeu principal : permettre au constructeur de gagner en visibilité et en autonomie face à la dépendance de l'acteur historique.",
    desc_en: "Design and production deployment of a used vehicle (UV) valuation model integrating market data, sales history and vehicle characteristics. Key challenge: enabling the manufacturer to gain visibility and autonomy from dependence on the incumbent player.",
    results: ["Modèle pricing VO en production", "Autonomie", "Données marché intégrées", "Modèle industrialisé"],
    results_en: ["UV pricing model in production", "Autonomy", "Integrated market data", "Industrialised model"],
    tags: ["Data Science", "Pricing VO", "Automobile", "Modélisation"],
    tags_en: ["Data Science", "UV Pricing", "Automotive", "Modelling"]
  },
  {
    sector: "Asset Management",
    sector_en: "Asset Management",
    title: "Programme de formation IA",
    title_en: "AI Training Programme",
    desc: "Conception et animation d'un programme complet en Data Science, Machine Learning et IA générative. Quatre modules couvrant l'ensemble du spectre IA, mêlant fondamentaux théoriques et ateliers pratiques sur 15 cas d'usage concrets.",
    desc_en: "Design and delivery of a comprehensive programme in Data Science, Machine Learning and Generative AI. Six modules covering the full AI spectrum, combining theoretical foundations and practical workshops on 15 concrete use cases.",
    results: ["6 modules", "15h de formation", "15 cas d'usage réels", "Prompt engineering"],
    results_en: ["6 modules", "15h of training", "15 real use cases", "Prompt engineering"],
    tags: ["Formation IA", "Machine Learning", "IA générative et agentique", "Biais cognitifs"],
    tags_en: ["AI Training", "Machine Learning", "Generative & Agentic AI", "Cognitive biases"]
  }
];
