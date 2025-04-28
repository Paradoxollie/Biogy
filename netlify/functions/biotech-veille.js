const Parser = require('rss-parser');
const parser = new Parser({
  timeout: 10000, // Augmenter considérablement le timeout global
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

// Sources françaises de biotechnologie par catégorie - CONSIDÉRABLEMENT ENRICHIES
const SOURCES_BIOTECH = [
  // Rouge - Santé/Médecine (sources inchangées car fonctionne bien)
  { url: 'https://presse.inserm.fr/feed/', source: 'INSERM', color: 'red', langue: 'fr', priorité: 1 },
  { url: 'https://www.sciencesetavenir.fr/sante/rss.xml', source: 'Sciences et Avenir (Santé)', color: 'red', langue: 'fr', priorité: 1 },
  { url: 'https://www.futura-sciences.com/rss/sante/actualites.xml', source: 'Futura Sciences (Santé)', color: 'red', langue: 'fr', priorité: 1 },
  { url: 'https://www.biotech-finances.com/feed/', source: 'Biotech Finances', color: 'red', langue: 'fr', priorité: 1 },
  { url: 'https://www.leem.org/rss.xml', source: 'LEEM', color: 'red', langue: 'fr', priorité: 2 },
  { url: 'https://www.industrie-techno.com/api/feed/category/biotech-pharmaceutique.rss', source: 'Industrie Techno Pharma', color: 'red', langue: 'fr', priorité: 2 },
  { url: 'https://www.biofutur.com/feed/', source: 'Biofutur', color: 'red', langue: 'fr', priorité: 2 },
  
  // Verte - Agronomie (+ 4 nouvelles sources pour atteindre 13 au total)
  { url: 'https://www.inrae.fr/flux/actualites/all/rss.xml', source: 'INRAE', color: 'green', langue: 'fr', priorité: 1 },
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/agronomie.xml', source: 'Actu-Environnement (Agronomie)', color: 'green', langue: 'fr', priorité: 1 },
  { url: 'https://www.agro-media.fr/feed/', source: 'Agro Media', color: 'green', langue: 'fr', priorité: 1 },
  { url: 'https://www.bayer-agri.fr/feed/', source: 'Bayer Agri', color: 'green', langue: 'fr', priorité: 1 },
  { url: 'https://www.arvalisinstitutduvegetal.fr/feed', source: 'Arvalis', color: 'green', langue: 'fr', priorité: 2 },
  { url: 'https://www.agroscope.admin.ch/agroscope/fr/home/actualite/infothek/flux-rss.xml', source: 'Agroscope', color: 'green', langue: 'fr', priorité: 2 },
  { url: 'https://www.agriculture-environnement.fr/feed.xml', source: 'Agriculture & Environnement', color: 'green', langue: 'fr', priorité: 2 },
  { url: 'https://www.terre-net.fr/rss/', source: 'Terre-Net', color: 'green', langue: 'fr', priorité: 2 },
  { url: 'https://www.agro-bordeaux.fr/feed/', source: 'Bordeaux Sciences Agro', color: 'green', langue: 'fr', priorité: 3 },
  { url: 'https://www.pleinchamp.com/rss', source: 'Plein Champ', color: 'green', langue: 'fr', priorité: 2 },
  { url: 'https://revue-sesame-inrae.fr/feed/', source: 'Revue Sésame', color: 'green', langue: 'fr', priorité: 2 },
  { url: 'https://www.cirad.fr/flux-rss', source: 'CIRAD', color: 'green', langue: 'fr', priorité: 1 },
  { url: 'https://www.acta.asso.fr/flux-rss.html', source: 'ACTA', color: 'green', langue: 'fr', priorité: 2 },
  
  // Bleue - Marine (+ 5 nouvelles sources pour atteindre 14 au total)
  { url: 'https://www.meretmarine.com/fr/rss.xml', source: 'Mer et Marine', color: 'blue', langue: 'fr', priorité: 1 },
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/mer-littoral.xml', source: 'Actu-Environnement (Mer)', color: 'blue', langue: 'fr', priorité: 1 },
  { url: 'https://wwz.ifremer.fr/layout/set/rss/Actualites-et-Agenda/Toutes-les-actualites', source: 'IFREMER', color: 'blue', langue: 'fr', priorité: 1 },
  { url: 'https://www.lemarin.fr/rss.xml', source: 'Le Marin', color: 'blue', langue: 'fr', priorité: 2 },
  { url: 'https://www.ifemer.fr/feed/', source: 'Institut Français de la Mer', color: 'blue', langue: 'fr', priorité: 2 },
  { url: 'https://www.institut-ocean.org/feed/', source: 'Institut de l\'Océan', color: 'blue', langue: 'fr', priorité: 2 },
  { url: 'https://www.cluster-maritime.fr/feed/', source: 'Cluster Maritime Français', color: 'blue', langue: 'fr', priorité: 2 },
  { url: 'https://www.pollution-marine.com/feed/', source: 'Pollution Marine', color: 'blue', langue: 'fr', priorité: 3 },
  { url: 'https://www.econav.org/?page=rss', source: 'Econav', color: 'blue', langue: 'fr', priorité: 3 },
  { url: 'https://www.futura-sciences.com/rss/planete/actualites.xml', source: 'Futura Sciences (Planète)', color: 'blue', langue: 'fr', priorité: 2 },
  { url: 'https://www.mnhn.fr/fr/rss', source: 'Muséum National d\'Histoire Naturelle', color: 'blue', langue: 'fr', priorité: 2 },
  { url: 'https://www.environnement-magazine.fr/rss/eau', source: 'Environnement Magazine (Eau)', color: 'blue', langue: 'fr', priorité: 2 },
  { url: 'https://www.journaldelenvironnement.net/RSS/categorie/6/eau.xml', source: 'JDLE (Eau)', color: 'blue', langue: 'fr', priorité: 2 },
  { url: 'https://www.planetoscope.com/rss/Ocean-mers-littoral', source: 'Planetoscope (Océan)', color: 'blue', langue: 'fr', priorité: 3 },
  
  // Jaune - Environnement (+ 4 nouvelles sources pour atteindre 12 au total)
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/eau.xml', source: 'Actu-Environnement (Eau)', color: 'yellow', langue: 'fr', priorité: 1 },
  { url: 'https://www.goodplanet.info/feed/', source: 'GoodPlanet Info', color: 'yellow', langue: 'fr', priorité: 1 },
  { url: 'https://www.ademe.fr/actualites/feed', source: 'ADEME', color: 'yellow', langue: 'fr', priorité: 1 },
  { url: 'https://www.notre-environnement.gouv.fr/flux-rss', source: 'Notre Environnement', color: 'yellow', langue: 'fr', priorité: 2 },
  { url: 'https://www.environnement-magazine.fr/rss', source: 'Environnement Magazine', color: 'yellow', langue: 'fr', priorité: 2 },
  { url: 'https://www.ecologique-solidaire.gouv.fr/rss.xml', source: 'Ministère de la Transition Écologique', color: 'yellow', langue: 'fr', priorité: 2 },
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/biodiversite.xml', source: 'Actu-Environnement (Biodiversité)', color: 'yellow', langue: 'fr', priorité: 2 },
  { url: 'https://www.irdeco.fr/feed/', source: 'IRDéco', color: 'yellow', langue: 'fr', priorité: 3 },
  { url: 'https://www.novethic.fr/rss/theme/environnement.xml', source: 'Novethic (Environnement)', color: 'yellow', langue: 'fr', priorité: 1 },
  { url: 'https://www.encyclopedie-environnement.org/feed/', source: 'Encyclopédie Environnement', color: 'yellow', langue: 'fr', priorité: 2 },
  { url: 'https://www.reporterre.net/spip.php?page=backend', source: 'Reporterre', color: 'yellow', langue: 'fr', priorité: 2 },
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/dechets.xml', source: 'Actu-Environnement (Déchets)', color: 'yellow', langue: 'fr', priorité: 2 },
  
  // Blanche - Industrielle (+ 5 nouvelles sources pour atteindre 12 au total)
  { url: 'https://www.industrie-techno.com/rss', source: 'Industrie & Technologies', color: 'white', langue: 'fr', priorité: 1 },
  { url: 'https://www.usinenouvelle.com/flux/rss', source: 'Usine Nouvelle', color: 'white', langue: 'fr', priorité: 1 },
  { url: 'https://www.techniques-ingenieur.fr/actualite/articles/feed/', source: 'Techniques de l\'Ingénieur', color: 'white', langue: 'fr', priorité: 1 },
  { url: 'https://www.industrie-mag.com/article/feed/news', source: 'Industrie Mag', color: 'white', langue: 'fr', priorité: 1 },
  { url: 'https://www.processalimentaire.com/rss/actualites/innovation', source: 'Process Alimentaire', color: 'white', langue: 'fr', priorité: 2 },
  { url: 'https://www.industrie4.0-village.com/feed/', source: 'Industrie 4.0', color: 'white', langue: 'fr', priorité: 2 },
  { url: 'https://www.chimie-tech.com/feed/', source: 'Chimie Tech', color: 'white', langue: 'fr', priorité: 2 },
  { url: 'https://www.industrie-chimie.fr/feed/', source: 'Industrie Chimie', color: 'white', langue: 'fr', priorité: 1 },
  { url: 'https://lachimie.net/feed/', source: 'La Chimie', color: 'white', langue: 'fr', priorité: 2 },
  { url: 'https://www.formule-verte.com/feed/', source: 'Formule Verte', color: 'white', langue: 'fr', priorité: 1 },
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/energie.xml', source: 'Actu-Environnement (Énergie)', color: 'white', langue: 'fr', priorité: 2 },
  { url: 'https://www.enerzine.com/feed', source: 'Enerzine', color: 'white', langue: 'fr', priorité: 2 },
  
  // Multidisciplinaire (inchangé)
  { url: 'https://lejournal.cnrs.fr/rss', source: 'CNRS Le Journal', color: 'multi', langue: 'fr', priorité: 1 },
  { url: 'https://theconversation.com/fr/sciences/feed', source: 'The Conversation (Sciences)', color: 'multi', langue: 'fr', priorité: 1 },
  { url: 'https://www.futura-sciences.com/rss/actualites.xml', source: 'Futura Sciences', color: 'multi', langue: 'fr', priorité: 1 },
  { url: 'https://www.lemonde.fr/sciences/rss_full.xml', source: 'Le Monde (Sciences)', color: 'multi', langue: 'fr', priorité: 2 },
  { url: 'https://www.pourlascience.fr/feed/actualites.xml', source: 'Pour la Science', color: 'multi', langue: 'fr', priorité: 2 }
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
  const maxParam = params.max ? parseInt(params.max, 10) : 20; // Réduire le nombre d'articles par défaut
  const max = isNaN(maxParam) ? 20 : Math.min(maxParam, 30); // Limiter à 30 articles maximum
  
  console.log(`Biotech-veille function invoked. Requested color: ${requestedColor}, max: ${max}`);

  try {
    // Pour les demandes de couleur spécifique, court-circuiter et utiliser directement la fonction dédiée
    if (requestedColor !== 'all') {
      console.log(`Requesting specific color: ${requestedColor}, using direct function`);
      try {
        const colorResponse = await fetch(`${process.env.URL}/.netlify/functions/fetch-${requestedColor}`, {
          timeout: 8000  // Réduire le timeout pour éviter que la fonction Netlify ne timeout (limite à 10s)
        });
        
        if (colorResponse.ok) {
          const colorData = await colorResponse.json();
          let articles = colorData.articles || [];
          
          // Ajouter des articles de secours si nécessaire
          if (articles.length < 3 && FALLBACK_ARTICLES[requestedColor]) {
            const fallbackToAdd = FALLBACK_ARTICLES[requestedColor];
            articles = [...articles, ...fallbackToAdd];
          }
          
          // Trier et limiter
          articles.sort((a, b) => new Date(b.pubDate || 0) - new Date(a.pubDate || 0));
          const limitedArticles = articles.slice(0, max);
          
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ articles: limitedArticles })
          };
        }
      } catch (error) {
        console.log(`Error fetching ${requestedColor} articles directly: ${error.message}`);
        // Continue to fallback strategy
      }
    }
    
    // Si la demande concerne tous les articles ou si la requête directe a échoué
    // Utiliser les articles de secours immédiatement pour garantir une réponse rapide
    console.log("Using fallback articles for quick response");
    
    let fallbackArticles = [];
    
    if (requestedColor === 'all') {
      // Pour tous les articles, prendre quelques-uns de chaque couleur
      ['red', 'blue', 'green', 'white', 'yellow'].forEach(color => {
        if (FALLBACK_ARTICLES[color]) {
          // Prendre seulement 2-3 articles de chaque couleur pour aller vite
          fallbackArticles = [...fallbackArticles, ...FALLBACK_ARTICLES[color].slice(0, 3)];
        }
      });
      
      // Ajouter quelques articles multi
      if (FALLBACK_ARTICLES.multi) {
        fallbackArticles = [...fallbackArticles, ...FALLBACK_ARTICLES.multi.slice(0, 3)];
      }
    } else if (FALLBACK_ARTICLES[requestedColor]) {
      // Utiliser les articles de secours pour la couleur demandée
      fallbackArticles = FALLBACK_ARTICLES[requestedColor];
    }
    
    // Trier par date et limiter
    fallbackArticles.sort((a, b) => {
      const dateA = a.pubDate ? new Date(a.pubDate) : new Date(0);
      const dateB = b.pubDate ? new Date(b.pubDate) : new Date(0);
      return dateB - dateA;
    });
    
    const limitedFallbackArticles = fallbackArticles.slice(0, max);
    
    // Essayer de charger les articles dynamiquement en arrière-plan et mettre en cache pour la prochaine requête
    // Mais retourner les articles de secours immédiatement
    setTimeout(async () => {
      try {
        // Charger les articles en arrière-plan pour la prochaine requête
        console.log("Background loading articles for next request");
        const allArticlesResponse = await fetch(`${process.env.URL}/.netlify/functions/fetch-all`, {
          timeout: 8000
        });
        
        if (allArticlesResponse.ok) {
          console.log("Successfully loaded articles in background");
          // Netlify n'a pas de mécanisme intégré pour mettre en cache entre les requêtes
          // Cette partie est donc uniquement pour éviter les timeouts
        }
      } catch (error) {
        console.log(`Background loading error: ${error.message}`);
      }
    }, 0);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        articles: limitedFallbackArticles,
        source: 'fallback', // Indiquer que ce sont des articles de secours
      })
    };
  } catch (error) {
    console.error('Error in biotech-veille function:', error);
    
    // En cas d'erreur ultime, retourner un ensemble minimal d'articles de secours
    const emergencyArticles = [];
    
    // Prendre juste quelques articles
    if (requestedColor === 'all') {
      Object.values(FALLBACK_ARTICLES).forEach(colorArticles => {
        if (colorArticles && colorArticles.length > 0) {
          emergencyArticles.push(colorArticles[0]);
        }
      });
    } else if (FALLBACK_ARTICLES[requestedColor] && FALLBACK_ARTICLES[requestedColor].length > 0) {
      emergencyArticles.push(...FALLBACK_ARTICLES[requestedColor].slice(0, 3));
    } else {
      // Articles multi en dernier recours
      emergencyArticles.push(...(FALLBACK_ARTICLES.multi || []).slice(0, 3));
    }
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        articles: emergencyArticles,
        error: `Error fetching articles: ${error.message}`,
        source: 'emergency'
      })
    };
  }
}; 