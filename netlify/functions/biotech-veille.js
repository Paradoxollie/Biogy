const Parser = require('rss-parser');
const parser = new Parser({
  timeout: 3000, // Réduire le timeout par flux pour éviter de bloquer trop longtemps
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    'Accept': 'application/rss+xml, application/xml, text/xml; q=0.1'
  },
  customFields: {
    item: [
      ['description', 'description'],
      ['content:encoded', 'contentEncoded'],
      ['pubDate', 'pubDate']
    ]
  }
});

// Mots-clés généraux de biotechnologie pour filtrer les articles
const BIOTECH_KEYWORDS = [
  // Termes généraux
  'biotechnologie', 'biotech', 'biologie', 'génétique', 'génome', 
  'ADN', 'ARN', 'CRISPR', 'enzyme', 'protéine', 'bactérie', 
  'microbiologie', 'fermentation', 'biocarburant', 'biomatériau',
  'biomolécule', 'bioréacteur', 'thérapie génique', 'OGM', 'transgénique',
  'biosynthèse', 'bioingénierie', 'biocapteur', 'biocatalyseur', 'biomédical',
  'culture cellulaire', 'clonage', 'séquençage', 'micro-organisme', 'levure',
  'immunologie', 'anticorps', 'bioprocédé', 'biotransformation',
  
  // Termes spécifiques à la biotechnologie bleue (marine)
  'aquaculture', 'biotechnologie marine', 'biotechnologie bleue', 'algue', 'microalgue',
  'ressource marine', 'biologie marine', 'biomasse marine', 'biodiversité marine',
  'valorisation marine', 'écosystème marin', 'organisme marin', 'phytoplancton',
  'aquatique', 'océan', 'mer', 'maritime', 'pêche', 'pisciculture', 'maritime',
  
  // Termes spécifiques à la biotechnologie verte (agronomie)
  'amélioration végétale', 'plante génétiquement', 'agriculture biotech', 'biotechnologie verte',
  'agroalimentaire biotech', 'biofertilisant', 'fertilisation biologique', 'biocontrôle',
  'agronomie', 'semence', 'nutrition végétale', 'sélection variétale', 'photosynthèse',
  
  // Termes spécifiques à la biotechnologie jaune (environnement)
  'biodépollution', 'bioremédiation', 'traitement biologique', 'biorestauration',
  'décontamination biologique', 'dépollution', 'biotechnologie environnementale',
  'écologie', 'déchet', 'environnement', 'recyclage biologique', 'traitement eau',
  
  // Termes spécifiques à la biotechnologie blanche (industrielle)
  'biotechnologie industrielle', 'enzyme industrielle', 'fermentation industrielle',
  'procédé industriel', 'biocatalyse', 'industrie', 'procédé', 'bioéconomie',
  'bioproduction', 'biocarburant', 'biomasse', 'chimie verte',
  
  // Termes plus généraux mais souvent liés
  'innovation', 'recherche', 'développement durable', 'laboratoire', 'startup',
  'bioéconomie', 'économie circulaire', 'valorisation', 'science', 'technologie'
];

// FALLBACK ARTICLES - articles pré-définis pour garantir un minimum par couleur
const FALLBACK_ARTICLES = {
  blue: [
    {
      title: "Les algues, un potentiel immense pour la biotechnologie bleue",
      description: "Les algues constituent une ressource naturelle dont le potentiel est encore largement sous-exploité. Riches en molécules d'intérêt pour de nombreux secteurs (alimentaire, cosmétique, pharmaceutique), elles représentent un enjeu majeur pour la biotechnologie bleue.",
      pubDate: new Date().toISOString(),
      source: "Mer et Marine (Archive)",
      biotechColor: "blue",
      link: "https://www.meretmarine.com/fr/content/les-biotechnologies-marines-un-secteur-plein-davenir",
      imageUrl: "https://images.unsplash.com/photo-1621494547431-5769f12d686c?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Biotechnologie marine : des applications prometteuses pour la santé",
      description: "De nombreux organismes marins produisent des molécules aux propriétés pharmacologiques uniques, offrant de nouvelles perspectives pour le développement de médicaments innovants contre le cancer, les maladies infectieuses ou neurodégénératives.",
      pubDate: new Date(Date.now() - 2*24*60*60*1000).toISOString(),
      source: "IFREMER (Archive)",
      biotechColor: "blue",
      link: "https://wwz.ifremer.fr/Recherche/Departements-scientifiques/Departement-Ressources-Biologiques-et-Environnement/Biotechnologies-et-Ressources-Marines",
      imageUrl: "https://images.unsplash.com/photo-1576514129883-2f1678c39bac?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Les microalgues, l'or bleu de la biotechnologie",
      description: "Les microalgues représentent un potentiel considérable pour produire des biocarburants, des compléments alimentaires, des cosmétiques et des médicaments de manière durable et écologique.",
      pubDate: new Date(Date.now() - 4*24*60*60*1000).toISOString(),
      source: "Sciences et Avenir (Archive)",
      biotechColor: "blue",
      link: "https://www.sciencesetavenir.fr/nature-environnement/microalgues-la-promesse-de-l-or-bleu_125747",
      imageUrl: "https://images.unsplash.com/photo-1580377968242-e11d25c4c07e?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Aquaculture du futur : les biotechnologies au service d'une production durable",
      description: "L'aquaculture fait face à de nombreux défis pour répondre à la demande croissante de produits de la mer tout en limitant son impact environnemental. Les biotechnologies marines offrent des solutions innovantes pour améliorer la santé des élevages et optimiser les rendements.",
      pubDate: new Date(Date.now() - 6*24*60*60*1000).toISOString(),
      source: "Cluster Maritime Français (Archive)",
      biotechColor: "blue",
      link: "https://www.cluster-maritime.fr/fr/maritime-innovation/biotechnologies-marines",
      imageUrl: "https://images.unsplash.com/photo-1534236780928-e84cb529000b?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Biotechnologie bleue : valorisation des déchets de la pêche en France",
      description: "Les coproduits de la pêche et de l'aquaculture représentent une ressource importante pour les biotechnologies bleues. Ces déchets peuvent être transformés en produits à forte valeur ajoutée comme des compléments alimentaires, des bioplastiques ou des ingrédients cosmétiques.",
      pubDate: new Date(Date.now() - 8*24*60*60*1000).toISOString(),
      source: "ADEME (Archive)",
      biotechColor: "blue",
      link: "https://www.ademe.fr/expertises/economie-circulaire/passer-a-laction/valorisation-biomasse/dossier/produits-biosources/valoriser-coproduits-peche-laquaculture",
      imageUrl: "https://images.unsplash.com/photo-1578981257191-7e50167396b0?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    }
  ],
  white: [
    {
      title: "Bioraffineries : la biotechnologie blanche révolutionne l'industrie chimique",
      description: "Les bioraffineries utilisent des procédés biologiques pour transformer la biomasse en produits chimiques, carburants et matériaux. Cette approche basée sur les biotechnologies blanches offre une alternative durable aux procédés pétrochimiques traditionnels.",
      pubDate: new Date().toISOString(),
      source: "Usine Nouvelle (Archive)",
      biotechColor: "white",
      link: "https://www.usinenouvelle.com/article/la-chimie-verte-francaise-se-structure.N151482",
      imageUrl: "https://images.unsplash.com/photo-1581093577421-e484c139d871?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Enzymes industrielles : le cœur de la biotechnologie blanche",
      description: "Les enzymes sont des catalyseurs biologiques permettant de réaliser des réactions chimiques dans des conditions douces. Leur utilisation dans l'industrie permet de réduire la consommation d'énergie et l'impact environnemental tout en améliorant l'efficacité des procédés.",
      pubDate: new Date(Date.now() - 3*24*60*60*1000).toISOString(),
      source: "Techniques de l'Ingénieur (Archive)",
      biotechColor: "white",
      link: "https://www.techniques-ingenieur.fr/base-documentaire/procedes-chimie-bio-agro-th2/biotechnologies-et-chimie-de-fermentation-42164210/",
      imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Bioplastiques : les biotechnologies au service d'un avenir sans pétrole",
      description: "Les biotechnologies blanches permettent de produire des polymères biodégradables à partir de ressources renouvelables comme l'amidon, la cellulose ou les huiles végétales. Ces matériaux représentent une alternative durable aux plastiques conventionnels issus du pétrole.",
      pubDate: new Date(Date.now() - 5*24*60*60*1000).toISOString(),
      source: "Industrie & Technologies (Archive)",
      biotechColor: "white",
      link: "https://www.industrie-techno.com/article/bioeconomie-les-promesses-de-la-chimie-verte.55634",
      imageUrl: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Fermentation industrielle : une technologie ancestrale réinventée par les biotechnologies",
      description: "La fermentation est un procédé biologique exploité depuis des millénaires pour la production d'aliments et de boissons. Aujourd'hui, les biotechnologies blanches l'utilisent pour produire des molécules complexes à haute valeur ajoutée pour les industries pharmaceutique, cosmétique et alimentaire.",
      pubDate: new Date(Date.now() - 7*24*60*60*1000).toISOString(),
      source: "Process Alimentaire (Archive)",
      biotechColor: "white",
      link: "https://www.processalimentaire.com/ingredients/fermentation-une-biotechnologie-en-plein-essor",
      imageUrl: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Biocarburants de deuxième génération : les promesses de la biotechnologie blanche",
      description: "Les biotechnologies blanches permettent de produire des biocarburants à partir de résidus agricoles ou forestiers sans entrer en compétition avec l'alimentation humaine. Ces procédés enzymatiques transforment la cellulose et l'hémicellulose en sucres fermentescibles pour produire de l'éthanol ou d'autres biocarburants.",
      pubDate: new Date(Date.now() - 9*24*60*60*1000).toISOString(),
      source: "INRAE (Archive)",
      biotechColor: "white",
      link: "https://www.inrae.fr/actualites/biocarburants-2e-generation",
      imageUrl: "https://images.unsplash.com/photo-1500382017256-9822c1c2245c?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    }
  ],
  yellow: [
    {
      title: "Bioremédiation : des microorganismes pour dépolluer les sols contaminés",
      description: "La bioremédiation utilise des microorganismes pour dégrader les polluants présents dans les sols ou les eaux. Cette approche de biotechnologie jaune offre une solution écologique et économique pour traiter les sites pollués par des hydrocarbures, métaux lourds ou pesticides.",
      pubDate: new Date().toISOString(),
      source: "ADEME (Archive)",
      biotechColor: "yellow",
      link: "https://www.ademe.fr/expertises/sols-pollues/elements-contexte/perspectives/filiere-bioremediation",
      imageUrl: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Traitement biologique des eaux usées : les innovations de la biotechnologie environnementale",
      description: "Les procédés biologiques de traitement des eaux usées utilisent des bactéries, champignons ou algues pour éliminer les polluants. Les biotechnologies jaunes développent des techniques plus performantes pour traiter les pollutions émergentes comme les résidus pharmaceutiques ou les microplastiques.",
      pubDate: new Date(Date.now() - 2*24*60*60*1000).toISOString(),
      source: "Actu-Environnement (Archive)",
      biotechColor: "yellow",
      link: "https://www.actu-environnement.com/ae/dossiers/traitement-eaux-usees/procedes-biologiques.php",
      imageUrl: "https://images.unsplash.com/photo-1501531835477-57224b837134?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Biotechnologies jaunes : surveiller la qualité de l'environnement grâce aux biocapteurs",
      description: "Les biocapteurs utilisent des organismes vivants ou des molécules biologiques pour détecter et mesurer des polluants dans l'environnement. Ces outils issus des biotechnologies jaunes permettent une surveillance précise, rapide et économique de la qualité de l'air, de l'eau ou des sols.",
      pubDate: new Date(Date.now() - 4*24*60*60*1000).toISOString(),
      source: "Environnement Magazine (Archive)",
      biotechColor: "yellow",
      link: "https://www.environnement-magazine.fr/eau/article/2020/04/24/128940/biocapteurs-une-revolution-pour-surveillance-des-milieux",
      imageUrl: "https://images.unsplash.com/photo-1627636588610-109fa098aa31?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Valorisation des déchets organiques par biotechnologie : vers une économie circulaire",
      description: "Les biotechnologies jaunes permettent de transformer les déchets organiques en ressources valorisables comme du compost, du biogaz ou des bioproduits. Ces approches contribuent à réduire l'empreinte environnementale des activités humaines tout en créant de la valeur à partir de résidus.",
      pubDate: new Date(Date.now() - 6*24*60*60*1000).toISOString(),
      source: "GoodPlanet Info (Archive)",
      biotechColor: "yellow",
      link: "https://www.goodplanet.info/actualite/2020/01/15/les-biotechnologies-au-service-de-leconomie-circulaire/",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Phytoremédiation : des plantes pour dépolluer l'environnement",
      description: "La phytoremédiation utilise des plantes pour extraire, dégrader ou immobiliser les polluants présents dans les sols, les eaux ou l'air. Cette technique de biotechnologie jaune représente une solution écologique et économique pour la réhabilitation des sites contaminés.",
      pubDate: new Date(Date.now() - 8*24*60*60*1000).toISOString(),
      source: "Notre Environnement (Archive)",
      biotechColor: "yellow",
      link: "https://www.notre-environnement.gouv.fr/themes/sante-environnement/article/les-phytotechnologies",
      imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    }
  ],
  green: [
    {
      title: "Sélection variétale assistée par marqueurs : la révolution génomique en agriculture",
      description: "La sélection assistée par marqueurs permet d'identifier précisément les gènes d'intérêt pour créer de nouvelles variétés végétales plus résistantes aux maladies ou mieux adaptées aux conditions climatiques. Cette approche de biotechnologie verte accélère considérablement les programmes d'amélioration des plantes.",
      pubDate: new Date().toISOString(),
      source: "INRAE (Archive)",
      biotechColor: "green",
      link: "https://www.inrae.fr/actualites/selection-genetique-plantes-animaux-elevage",
      imageUrl: "https://images.unsplash.com/photo-1620856405654-fffdb09f2332?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Biofertilisants : les microorganismes au service d'une agriculture durable",
      description: "Les biofertilisants sont composés de microorganismes bénéfiques qui favorisent la croissance des plantes en améliorant la disponibilité des nutriments dans le sol. Ces produits issus des biotechnologies vertes constituent une alternative écologique aux engrais chimiques conventionnels.",
      pubDate: new Date(Date.now() - 3*24*60*60*1000).toISOString(),
      source: "Agro Media (Archive)",
      biotechColor: "green",
      link: "https://www.agro-media.fr/actualite/agriculture-les-biofertilisants-ont-le-vent-en-poupe-46588.html",
      imageUrl: "https://images.unsplash.com/photo-1625246333195-78d73de2f637?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Biopesticides : la biotechnologie verte pour protéger les cultures",
      description: "Les biopesticides sont des produits naturels issus de plantes, microorganismes ou insectes utilisés pour lutter contre les ravageurs des cultures. Ces solutions développées par les biotechnologies vertes offrent une alternative plus respectueuse de l'environnement aux pesticides chimiques.",
      pubDate: new Date(Date.now() - 5*24*60*60*1000).toISOString(),
      source: "Actu-Environnement (Archive)",
      biotechColor: "green",
      link: "https://www.actu-environnement.com/ae/news/biocontrole-biopesticides-phytosanitaires-marche-developpement-33629.php4",
      imageUrl: "https://images.unsplash.com/photo-1599332483383-2dda37d26fe1?q=80&w=1000&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    }
  ]
};

// Sources françaises de biotechnologie par catégorie - OPTIMISÉES POUR DES CONTENUS RÉCENTS
const SOURCES_BIOTECH = [
  // Rouge - Santé/Médecine - Sources à jour
  { url: 'https://presse.inserm.fr/feed/', source: 'INSERM', color: 'red', langue: 'fr', priorité: 1 },
  { url: 'https://www.sciencesetavenir.fr/sante/rss.xml', source: 'Sciences et Avenir (Santé)', color: 'red', langue: 'fr', priorité: 1 },
  { url: 'https://www.futura-sciences.com/rss/sante/actualites.xml', source: 'Futura Sciences (Santé)', color: 'red', langue: 'fr', priorité: 1 },
  { url: 'https://www.allodocteurs.fr/rss/rss.xml', source: 'Allo Docteurs', color: 'red', langue: 'fr', priorité: 1 },
  { url: 'https://www.santepubliquefrance.fr/rss', source: 'Santé Publique France', color: 'red', langue: 'fr', priorité: 1 },
  
  // Verte - Agronomie - Sources à jour
  { url: 'https://www.inrae.fr/flux/actualites/all/rss.xml', source: 'INRAE', color: 'green', langue: 'fr', priorité: 1 },
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/agronomie.xml', source: 'Actu-Environnement (Agronomie)', color: 'green', langue: 'fr', priorité: 1 },
  { url: 'https://www.agro-media.fr/feed/', source: 'Agro Media', color: 'green', langue: 'fr', priorité: 1 },
  { url: 'https://www.campagnesetenvironnement.fr/feed/', source: 'Campagnes et Environnement', color: 'green', langue: 'fr', priorité: 1 },
  { url: 'https://www.lafranceagricole.fr/rss', source: 'La France Agricole', color: 'green', langue: 'fr', priorité: 1 },
  
  // Bleue - Marine - Sources à jour
  { url: 'https://www.meretmarine.com/fr/rss.xml', source: 'Mer et Marine', color: 'blue', langue: 'fr', priorité: 1 },
  { url: 'https://wwz.ifremer.fr/layout/set/rss/Actualites-et-Agenda/Toutes-les-actualites', source: 'IFREMER', color: 'blue', langue: 'fr', priorité: 1 },
  { url: 'https://lemarin.ouest-france.fr/rss/rss.xml', source: 'Le Marin', color: 'blue', langue: 'fr', priorité: 1 },
  { url: 'https://www.futura-sciences.com/rss/planete/actualites.xml', source: 'Futura Sciences (Planète)', color: 'blue', langue: 'fr', priorité: 1 },
  
  // Jaune - Environnement - Sources à jour
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/eau.xml', source: 'Actu-Environnement (Eau)', color: 'yellow', langue: 'fr', priorité: 1 },
  { url: 'https://www.goodplanet.info/feed/', source: 'GoodPlanet Info', color: 'yellow', langue: 'fr', priorité: 1 },
  { url: 'https://www.novethic.fr/rss/theme/environnement.xml', source: 'Novethic (Environnement)', color: 'yellow', langue: 'fr', priorité: 1 },
  { url: 'https://www.notre-environnement.gouv.fr/flux-rss', source: 'Notre Environnement', color: 'yellow', langue: 'fr', priorité: 1 },
  { url: 'https://reporterre.net/spip.php?page=backend', source: 'Reporterre', color: 'yellow', langue: 'fr', priorité: 1 },
  
  // Blanche - Industrielle - Sources à jour
  { url: 'https://www.industrie-techno.com/rss', source: 'Industrie & Technologies', color: 'white', langue: 'fr', priorité: 1 },
  { url: 'https://www.usinenouvelle.com/flux/rss', source: 'Usine Nouvelle', color: 'white', langue: 'fr', priorité: 1 },
  { url: 'https://www.techniques-ingenieur.fr/actualite/articles/feed/', source: 'Techniques de l\'Ingénieur', color: 'white', langue: 'fr', priorité: 1 },
  { url: 'https://www.processalimentaire.com/rss/actualites/innovation', source: 'Process Alimentaire', color: 'white', langue: 'fr', priorité: 1 },
  { url: 'https://www.formule-verte.com/feed/', source: 'Formule Verte', color: 'white', langue: 'fr', priorité: 1 },
  
  // Multidisciplinaire - Sources à jour
  { url: 'https://lejournal.cnrs.fr/rss', source: 'CNRS Le Journal', color: 'multi', langue: 'fr', priorité: 1 },
  { url: 'https://theconversation.com/fr/sciences/feed', source: 'The Conversation (Sciences)', color: 'multi', langue: 'fr', priorité: 1 },
  { url: 'https://www.futura-sciences.com/rss/actualites.xml', source: 'Futura Sciences', color: 'multi', langue: 'fr', priorité: 1 },
  { url: 'https://www.lemonde.fr/sciences/rss_full.xml', source: 'Le Monde (Sciences)', color: 'multi', langue: 'fr', priorité: 1 },
  { url: 'https://www.pourlascience.fr/feed/actualites.xml', source: 'Pour la Science', color: 'multi', langue: 'fr', priorité: 1 }
];

const MAX_ARTICLES_PER_SOURCE = 4;
const FETCH_TIMEOUT = 12000; // Augmenter considérablement le timeout
const MIN_ARTICLES_PER_COLOR = 6; // Minimum d'articles par couleur

// Fonctions utilitaires
const getDescription = (item) => {
  let desc = item.description || item.contentEncoded || item.content || '';
  desc = desc.replace(/<[^>]*>/g, '').trim();
  // Limiter la longueur
  return desc.length > 500 ? desc.substring(0, 500) + '...' : desc;
};

const getPubDate = (item) => {
  return item.pubDate || item.dcDate || item.isoDate || new Date().toISOString();
};

const getImageUrl = (item) => {
  // Essayer d'extraire de contentEncoded ou description
  const content = item.contentEncoded || item.description || item.content || '';
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }
  
  // Essayer enclosure (souvent pour images)
  if (item.enclosure && item.enclosure.url) {
    return item.enclosure.url;
  }
  
  return null;
};

// Fonction pour vérifier si un texte contient des mots-clés liés à la biotechnologie
const isBiotechArticle = (item, color) => {
  const textToSearch = [
    item.title || '',
    item.description || '',
    item.content || '',
    item.contentEncoded || ''
  ].join(' ').toLowerCase();
  
  // La recherche est plus souple pour les catégories problématiques (bleu, jaune, vert)
  const minKeywordsNeeded = (color === 'blue' || color === 'yellow' || color === 'green') ? 1 : 1;
  
  // Compter combien de mots-clés sont présents
  const matchedKeywords = BIOTECH_KEYWORDS.filter(keyword => 
    textToSearch.includes(keyword.toLowerCase())
  );
  
  return matchedKeywords.length >= minKeywordsNeeded;
};

// Filtrer les articles par mots-clés de biotechnologie et couleur
function filterBiotechArticles(articles, requestedColor, allColors = false) {
  console.log(`Filtrage des articles pour la couleur: ${requestedColor}, tous? ${allColors}`);
  console.log(`Total d'articles avant filtrage: ${articles.length}`);
  
  // Articles par couleur
  const articlesByColor = {
    red: [],
    green: [],
    blue: [],
    yellow: [],
    white: [],
    multi: []
  };
  
  // Filtrer d'abord par mots-clés de biotechnologie (filtrage très souple)
  const biotechArticles = articles.filter(article => {
    // Vérifier si l'article contient des mots-clés de biotechnologie
    // Utilisation de toLowerCase pour ignorer la casse
    const title = article.title ? article.title.toLowerCase() : '';
    const description = article.description ? article.description.toLowerCase() : '';
    
    // Recherche souple : un seul mot-clé suffit pour être considéré comme un article de biotechnologie
    return BIOTECH_KEYWORDS.some(keyword => 
      title.includes(keyword.toLowerCase()) || 
      description.includes(keyword.toLowerCase())
    );
  });
  
  console.log(`Articles après filtrage par mots-clés biotech: ${biotechArticles.length}`);
  
  // Répartir les articles par couleur
  biotechArticles.forEach(article => {
    if (article.biotechColor) {
      // Si l'article a déjà une couleur assignée, l'ajouter au tableau correspondant
      articlesByColor[article.biotechColor].push(article);
    } else {
      // Déterminer la couleur en fonction de la source
      const source = article.source || '';
      const sourceInfo = SOURCES_BIOTECH.find(s => source.includes(s.source));
      
      if (sourceInfo) {
        article.biotechColor = sourceInfo.color;
        articlesByColor[sourceInfo.color].push(article);
      } else {
        // Si pas de correspondance, assigner à "multi" par défaut
        article.biotechColor = 'multi';
        articlesByColor.multi.push(article);
      }
    }
  });
  
  // Ajouter les articles de secours si nécessaire pour atteindre le minimum requis
  Object.keys(articlesByColor).forEach(color => {
    if (articlesByColor[color].length < MIN_ARTICLES_PER_COLOR && FALLBACK_ARTICLES[color]) {
      console.log(`Ajout d'articles de secours pour la couleur ${color} (${articlesByColor[color].length}/${MIN_ARTICLES_PER_COLOR})`);
      
      // Calculer combien d'articles de secours sont nécessaires
      const nbFallbackNeeded = MIN_ARTICLES_PER_COLOR - articlesByColor[color].length;
      
      // Ajouter uniquement le nombre nécessaire d'articles de secours
      const fallbackToAdd = FALLBACK_ARTICLES[color].slice(0, nbFallbackNeeded);
      articlesByColor[color] = [...articlesByColor[color], ...fallbackToAdd];
      
      console.log(`Après ajout de secours: ${articlesByColor[color].length}/${MIN_ARTICLES_PER_COLOR}`);
    }
  });
  
  console.log(`Articles par couleur après filtrage:`);
  Object.keys(articlesByColor).forEach(color => {
    console.log(`${color}: ${articlesByColor[color].length}`);
  });
  
  // Retourner tous les articles si demandé, sinon seulement ceux de la couleur spécifiée
  if (allColors) {
    // Fusionner tous les tableaux en un seul
    let allArticles = Object.values(articlesByColor).flat();
    return allArticles;
  } else {
    return articlesByColor[requestedColor] || [];
  }
}

// Handler de la fonction Netlify
exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Récupérer le paramètre 'color' de la requête
  const params = event.queryStringParameters || {};
  const requestedColor = params.color || 'all';
  const maxParam = params.max ? parseInt(params.max, 10) : 20; 
  const max = isNaN(maxParam) ? 20 : Math.min(maxParam, 30); 
  const forceRefresh = params.refresh === 'true';
  
  // Mesurer le temps d'exécution pour éviter de dépasser les limites de Netlify
  const startTime = Date.now();
  
  console.log(`Biotech-veille function invoked. Requested color: ${requestedColor}, max: ${max}, forceRefresh: ${forceRefresh}`);

  try {
    // Récupération directe des articles via les flux RSS - approche directe plutôt que fetch-all
    console.log("Récupération directe des flux RSS...");

    // Filtrer les sources selon la couleur demandée
    let sourcesToFetch = [];
    if (requestedColor !== 'all') {
      sourcesToFetch = SOURCES_BIOTECH.filter(source => source.color === requestedColor);
    } else {
      // Pour "all", prendre un sous-ensemble bien réparti de sources
      const colorGroups = {};
      
      // Regrouper par couleur et priorité
      SOURCES_BIOTECH.forEach(source => {
        if (!colorGroups[source.color]) {
          colorGroups[source.color] = [];
        }
        colorGroups[source.color].push(source);
      });
      
      // Prendre les 2-3 meilleures sources de chaque couleur
      Object.values(colorGroups).forEach(sources => {
        // Trier par priorité
        sources.sort((a, b) => a.priorité - b.priorité);
        // Prendre les 2-3 premières
        sourcesToFetch = [...sourcesToFetch, ...sources.slice(0, 3)];
      });
    }
    
    console.log(`Récupération de ${sourcesToFetch.length} sources...`);
    
    // Récupérer les articles de manière parallèle mais avec un timeout strict
    const articlePromises = sourcesToFetch.map(source => {
      return new Promise(async (resolve) => {
        try {
          const feedResponse = await parser.parseURL(source.url);
          
          // Extraire et transformer les données
          const articles = feedResponse.items
            .slice(0, 5) // Limiter à 5 articles par source
            .map(item => ({
              title: item.title,
              link: item.link,
              pubDate: getPubDate(item),
              description: getDescription(item),
              content: item.contentEncoded || item.content || '',
              contentSnippet: item.contentSnippet || '',
              imageUrl: getImageUrl(item),
              source: source.source,
              biotechColor: source.color,
              langue: source.langue
            }));
            
          console.log(`Récupéré ${articles.length} articles de ${source.source}`);
          
          // Filtrer les articles par mots-clés biotechnologie
          const biotechArticles = articles.filter(article => isBiotechArticle(article, source.color));
          console.log(`Dont ${biotechArticles.length} articles de biotechnologie de ${source.source}`);
          
          resolve(biotechArticles);
        } catch (error) {
          console.log(`Erreur lors de la récupération de ${source.source}: ${error.message}`);
          resolve([]); // Continuer avec un tableau vide
        }
      });
    });
    
    // Timeout global pour toutes les requêtes
    const timeoutPromise = new Promise(resolve => {
      setTimeout(() => {
        console.log("Timeout global atteint pour la récupération des articles");
        resolve([]);
      }, 7000); // 7 secondes max pour rester dans les limites de Netlify
    });
    
    // Attendre que toutes les requêtes soient terminées ou que le timeout soit atteint
    const results = await Promise.race([
      Promise.all(articlePromises),
      timeoutPromise.then(() => articlePromises.map(() => []))
    ]);
    
    // Fusionner tous les articles
    let allArticles = results.flat();
    console.log(`Total d'articles récupérés: ${allArticles.length}`);
    
    // Si nous n'avons pas assez d'articles, essayer de manière séquentielle pour les sources restantes
    if (allArticles.length < 10 && requestedColor === 'all') {
      console.log("Pas assez d'articles, tentative séquentielle pour les principales sources...");
      
      // Prendre une source par couleur pour compléter rapidement
      const mainSources = ['red', 'blue', 'green', 'white', 'yellow'].map(color => {
        const sources = SOURCES_BIOTECH.filter(s => s.color === color);
        return sources.length > 0 ? sources[0] : null;
      }).filter(s => s !== null);
      
      for (const source of mainSources) {
        if (Date.now() - startTime > 7000) {
          console.log("Temps imparti dépassé, arrêt des requêtes séquentielles");
          break;
        }
        
        try {
          console.log(`Tentative séquentielle pour ${source.source}...`);
          const feedResponse = await parser.parseURL(source.url);
          
          const articles = feedResponse.items
            .slice(0, 3) // Seulement 3 articles par source en séquentiel
            .map(item => ({
              title: item.title,
              link: item.link,
              pubDate: getPubDate(item),
              description: getDescription(item),
              content: item.contentEncoded || item.content || '',
              contentSnippet: item.contentSnippet || '',
              imageUrl: getImageUrl(item),
              source: source.source,
              biotechColor: source.color,
              langue: source.langue
            }));
            
          // Filtrer les articles de biotechnologie
          const biotechArticles = articles.filter(article => isBiotechArticle(article, source.color));
          allArticles = [...allArticles, ...biotechArticles];
          
          console.log(`Ajout de ${biotechArticles.length} articles de ${source.source}`);
        } catch (error) {
          console.log(`Erreur séquentielle pour ${source.source}: ${error.message}`);
          continue;
        }
      }
    }
    
    // Vérification finale du nombre d'articles par couleur
    const articlesByColor = {};
    ['red', 'blue', 'green', 'white', 'yellow'].forEach(color => {
      articlesByColor[color] = allArticles.filter(article => article.biotechColor === color);
    });
    
    let usesFallback = false;
    let filteredArticles = [];
    
    if (requestedColor !== 'all') {
      // Filtrer par couleur demandée
      filteredArticles = allArticles.filter(article => article.biotechColor === requestedColor);
      
      // Si pas assez d'articles après filtrage (moins de 3), ajouter quelques fallbacks
      if (filteredArticles.length < 3 && FALLBACK_ARTICLES[requestedColor]) {
        console.log(`Pas assez d'articles pour ${requestedColor}, ajout de quelques fallbacks`);
        usesFallback = true;
        
        // Ne prendre que le complément nécessaire
        const neededFallbacks = 3 - filteredArticles.length;
        const fallbacksToAdd = FALLBACK_ARTICLES[requestedColor].slice(0, neededFallbacks);
        
        filteredArticles = [...filteredArticles, ...fallbacksToAdd];
      }
    } else {
      // Pour "all", s'assurer d'avoir quelques articles de chaque couleur
      let hasEnoughPerColor = true;
      
      // Vérifier s'il y a au moins 2 articles par couleur
      for (const color of ['red', 'blue', 'green', 'white', 'yellow']) {
        if (articlesByColor[color].length < 2) {
          hasEnoughPerColor = false;
          break;
        }
      }
      
      if (hasEnoughPerColor) {
        // On a assez d'articles de chaque couleur, les combiner
        filteredArticles = allArticles;
      } else {
        // On n'a pas assez d'articles, compléter chaque couleur avec des fallbacks
        usesFallback = true;
        console.log("Utilisation de fallbacks pour compléter certaines couleurs manquantes");
        
        for (const color of ['red', 'blue', 'green', 'white', 'yellow']) {
          const colorArticles = articlesByColor[color];
          
          // Si moins de 2 articles pour cette couleur
          if (colorArticles.length < 2 && FALLBACK_ARTICLES[color]) {
            // Ajouter juste ce qu'il faut pour atteindre 2 articles
            const needed = 2 - colorArticles.length;
            const fallbacksToAdd = FALLBACK_ARTICLES[color].slice(0, needed);
            filteredArticles = [...filteredArticles, ...colorArticles, ...fallbacksToAdd];
          } else {
            // Sinon ajouter tous les articles de cette couleur
            filteredArticles = [...filteredArticles, ...colorArticles];
          }
        }
        
        // Ajouter quelques articles multi-disciplines
        if (filteredArticles.length < 10) {
          const multiArticles = allArticles.filter(article => article.biotechColor === 'multi');
          filteredArticles = [...filteredArticles, ...multiArticles];
        }
      }
    }
    
    // Trier les articles par date de publication (du plus récent au plus ancien)
    filteredArticles.sort((a, b) => {
      const dateA = a.pubDate ? new Date(a.pubDate) : new Date(0);
      const dateB = b.pubDate ? new Date(b.pubDate) : new Date(0);
      return dateB - dateA;
    });
    
    // Limiter le nombre d'articles retournés
    const limitedArticles = filteredArticles.slice(0, max);
    
    console.log(`Retournant ${limitedArticles.length} articles pour couleur: ${requestedColor} (fallback: ${usesFallback})`);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        articles: limitedArticles,
        usesFallback: usesFallback
      })
    };
  } catch (error) {
    console.error('Erreur dans biotech-veille:', error);
    
    // En cas d'erreur complète, retourner un minimum d'articles de fallback
    let emergencyArticles = [];
    let errorMessage = `Erreur lors de la récupération des articles: ${error.message}`;
    
    if (requestedColor !== 'all' && FALLBACK_ARTICLES[requestedColor]) {
      emergencyArticles = FALLBACK_ARTICLES[requestedColor].slice(0, Math.min(max, 5));
    } else {
      // Prendre quelques articles de chaque couleur
      for (const color of ['red', 'blue', 'green', 'white', 'yellow']) {
        if (FALLBACK_ARTICLES[color]) {
          emergencyArticles.push(FALLBACK_ARTICLES[color][0]); // Juste 1 article par couleur
        }
      }
      
      if (emergencyArticles.length < 5 && FALLBACK_ARTICLES.multi) {
        emergencyArticles = [...emergencyArticles, ...FALLBACK_ARTICLES.multi.slice(0, 2)];
      }
    }
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        articles: emergencyArticles,
        error: errorMessage,
        usesFallback: true
      })
    };
  }
}; 