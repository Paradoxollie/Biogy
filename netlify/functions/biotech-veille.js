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

// FALLBACK ARTICLES - dossiers pedagogiques internes, servent de filet de
// securite quand les flux RSS ne renvoient pas assez de contenu (coupure
// reseau, blocage 403, etc.). Contenus evergreen, valides pour le
// programme STL biotechnologie.
const FALLBACK_DAYS_AGO = (d) => new Date(Date.now() - d * 24 * 60 * 60 * 1000).toISOString();

const FALLBACK_ARTICLES = {
  red: [
    {
      title: "Thérapie génique : CRISPR-Cas9 valide son premier traitement de la drépanocytose",
      description: "Les ciseaux moléculaires CRISPR-Cas9 permettent de réparer le gène de l'hémoglobine directement dans les cellules souches du patient. Ce traitement, autorisé en Europe, illustre comment la biotechnologie rouge transforme la prise en charge des maladies génétiques rares.",
      pubDate: FALLBACK_DAYS_AGO(0),
      source: "Dossier pédagogique Biogy",
      biotechColor: "red",
      link: "https://www.inserm.fr/dossier/therapie-genique/",
      imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Vaccins à ARN messager : des plateformes pédagogiques pour comprendre",
      description: "La technologie ARNm a révolutionné la vaccinologie. Les élèves de STL biotechnologie peuvent modéliser la traduction d'un ARNm en protéine antigénique et le rôle des lipides nanoparticulaires dans la vectorisation.",
      pubDate: FALLBACK_DAYS_AGO(2),
      source: "Dossier pédagogique Biogy",
      biotechColor: "red",
      link: "https://www.inserm.fr/actualite/vaccins-a-arn-messager-ce-quil-faut-savoir/",
      imageUrl: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Anticorps monoclonaux : du hybridome à l'immunothérapie ciblée",
      description: "Les anticorps monoclonaux produits par biotechnologie (lignées hybridomes, cellules CHO) ciblent aujourd'hui des antigènes tumoraux spécifiques. Support idéal pour étudier culture cellulaire, purification protéique et contrôle qualité.",
      pubDate: FALLBACK_DAYS_AGO(4),
      source: "Dossier pédagogique Biogy",
      biotechColor: "red",
      link: "https://presse.inserm.fr/thematique/immunologie/",
      imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "CAR-T cells : reprogrammer les lymphocytes pour combattre le cancer",
      description: "Les cellules CAR-T sont des lymphocytes T du patient modifiés génétiquement ex vivo pour exprimer un récepteur chimérique. Exemple majeur de thérapie cellulaire associant génie génétique et culture cellulaire.",
      pubDate: FALLBACK_DAYS_AGO(6),
      source: "Dossier pédagogique Biogy",
      biotechColor: "red",
      link: "https://www.inserm.fr/dossier/cancer-immunotherapie/",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    }
  ],
  blue: [
    {
      title: "Les microalgues, l'or bleu de la biotechnologie",
      description: "Riches en protéines, lipides et pigments, les microalgues (Spirulina, Chlorella, Dunaliella...) se cultivent en photobioréacteurs. Elles fournissent compléments alimentaires, biocarburants, bioplastiques et molécules pour la cosmétique.",
      pubDate: FALLBACK_DAYS_AGO(0),
      source: "Dossier pédagogique Biogy",
      biotechColor: "blue",
      link: "https://ocean-climate.org/",
      imageUrl: "https://images.unsplash.com/photo-1580377968242-e11d25c4c07e?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Biotechnologie marine : des applications prometteuses pour la santé",
      description: "De nombreux organismes marins (éponges, coraux, bactéries abyssales) produisent des molécules aux propriétés pharmacologiques uniques. Plusieurs anticancéreux récents en sont issus, illustrant l'intérêt de la bioprospection marine.",
      pubDate: FALLBACK_DAYS_AGO(2),
      source: "Dossier pédagogique Biogy",
      biotechColor: "blue",
      link: "https://www.ifremer.fr/fr/presse-et-actualites",
      imageUrl: "https://images.unsplash.com/photo-1576514129883-2f1678c39bac?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Aquaculture durable : les biotechnologies au service d'une production responsable",
      description: "Sélection génomique des poissons d'élevage, probiotiques marins, aliments à base d'insectes ou d'algues : l'aquaculture mobilise l'ensemble des biotechnologies pour limiter son empreinte environnementale.",
      pubDate: FALLBACK_DAYS_AGO(4),
      source: "Dossier pédagogique Biogy",
      biotechColor: "blue",
      link: "https://fondationtaraocean.org/",
      imageUrl: "https://images.unsplash.com/photo-1534236780928-e84cb529000b?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Valoriser les coproduits de la pêche par voie biotechnologique",
      description: "Peaux, arêtes et viscères issus de la filière pêche fournissent collagène, gélatines, chitosane et acides gras. Les procédés enzymatiques permettent d'en extraire des molécules à forte valeur ajoutée pour la cosmétique et la nutrition.",
      pubDate: FALLBACK_DAYS_AGO(6),
      source: "Dossier pédagogique Biogy",
      biotechColor: "blue",
      link: "https://www.ademe.fr/",
      imageUrl: "https://images.unsplash.com/photo-1578981257191-7e50167396b0?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    }
  ],
  white: [
    {
      title: "Enzymes industrielles : catalyseurs vivants au cœur de la biotechnologie blanche",
      description: "Amylases, lipases, cellulases... Les enzymes remplacent les catalyseurs chimiques classiques dans l'industrie des lessives, du papier, du textile ou de l'agroalimentaire. Elles travaillent à basse température et dans l'eau : gain énergétique et environnemental majeur.",
      pubDate: FALLBACK_DAYS_AGO(0),
      source: "Dossier pédagogique Biogy",
      biotechColor: "white",
      link: "https://www.techniques-ingenieur.fr/",
      imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Fermentation de précision : produire des protéines sans animaux ni plantes",
      description: "La fermentation de précision utilise des microorganismes reprogrammés (levures, bactéries) pour synthétiser à grande échelle des protéines identiques à celles d'origine animale (caséine, ovalbumine, collagène). Technologie clef des aliments du futur.",
      pubDate: FALLBACK_DAYS_AGO(3),
      source: "Dossier pédagogique Biogy",
      biotechColor: "white",
      link: "https://www.biotech-finances.com/",
      imageUrl: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Bioplastiques : les biotechnologies au service d'un avenir sans pétrole",
      description: "Les biotechnologies blanches produisent des polymères biodégradables (PLA, PHA) à partir d'amidon, de sucre de canne ou d'huiles végétales. Alternative crédible aux plastiques pétrochimiques si l'analyse de cycle de vie est rigoureuse.",
      pubDate: FALLBACK_DAYS_AGO(5),
      source: "Dossier pédagogique Biogy",
      biotechColor: "white",
      link: "https://www.enerzine.com/",
      imageUrl: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Bioraffineries : transformer la biomasse en produits chimiques",
      description: "Les bioraffineries traitent la biomasse (paille, bois, résidus agricoles) pour en extraire fibres, sucres, acides et biocarburants. Leur essor dépend des enzymes capables d'hydrolyser cellulose et hémicellulose efficacement.",
      pubDate: FALLBACK_DAYS_AGO(7),
      source: "Dossier pédagogique Biogy",
      biotechColor: "white",
      link: "https://www.techniques-ingenieur.fr/",
      imageUrl: "https://images.unsplash.com/photo-1581093577421-e484c139d871?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    }
  ],
  yellow: [
    {
      title: "Bioremédiation : des microorganismes pour dépolluer sols et eaux",
      description: "La bioremédiation exploite la capacité des bactéries, champignons et levures à dégrader des polluants (hydrocarbures, PCB, solvants). Approche plus douce et moins coûteuse que l'excavation ou l'incinération pour les sites pollués.",
      pubDate: FALLBACK_DAYS_AGO(0),
      source: "Dossier pédagogique Biogy",
      biotechColor: "yellow",
      link: "https://www.encyclopedie-environnement.org/",
      imageUrl: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Traitement biologique des eaux usées : boues activées et bioréacteurs à membrane",
      description: "Les stations d'épuration urbaines utilisent l'activité métabolique des bactéries pour dégrader la matière organique. Les biotechnologies jaunes développent des procédés capables d'éliminer micropolluants pharmaceutiques et microplastiques.",
      pubDate: FALLBACK_DAYS_AGO(2),
      source: "Dossier pédagogique Biogy",
      biotechColor: "yellow",
      link: "https://www.goodplanet.info/",
      imageUrl: "https://images.unsplash.com/photo-1501531835477-57224b837134?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Biocapteurs environnementaux : suivre la qualité de l'eau en temps réel",
      description: "Un biocapteur associe un élément biologique (enzyme, anticorps, cellule) à un transducteur. Il permet la détection rapide et sélective de polluants (métaux lourds, pesticides) à très faibles concentrations, directement sur site.",
      pubDate: FALLBACK_DAYS_AGO(4),
      source: "Dossier pédagogique Biogy",
      biotechColor: "yellow",
      link: "https://reporterre.net/",
      imageUrl: "https://images.unsplash.com/photo-1627636588610-109fa098aa31?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Phytoremédiation : des plantes pour dépolluer l'environnement",
      description: "Certaines plantes hyperaccumulatrices (Thlaspi, Alyssum, peupliers transgéniques) extraient des métaux lourds ou dégradent des molécules organiques via leur microbiome racinaire. Technique longue mais peu invasive.",
      pubDate: FALLBACK_DAYS_AGO(7),
      source: "Dossier pédagogique Biogy",
      biotechColor: "yellow",
      link: "https://www.encyclopedie-environnement.org/",
      imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    }
  ],
  green: [
    {
      title: "Sélection variétale assistée par marqueurs : la génomique en agriculture",
      description: "La sélection assistée par marqueurs moléculaires (SNP, microsatellites) permet d'identifier rapidement les individus porteurs des gènes d'intérêt. Cette approche accélère les programmes d'amélioration du blé, du maïs ou du riz face au changement climatique.",
      pubDate: FALLBACK_DAYS_AGO(0),
      source: "Dossier pédagogique Biogy",
      biotechColor: "green",
      link: "https://agriculture.gouv.fr/",
      imageUrl: "https://images.unsplash.com/photo-1620856405654-fffdb09f2332?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Biofertilisants : des microorganismes au service des plantes",
      description: "Rhizobium, mycorhizes et bactéries PGPR (Plant Growth-Promoting Rhizobacteria) améliorent la disponibilité de l'azote, du phosphore et du potassium. Alternative écologique aux engrais minéraux dans une agriculture bas-carbone.",
      pubDate: FALLBACK_DAYS_AGO(3),
      source: "Dossier pédagogique Biogy",
      biotechColor: "green",
      link: "https://www.terre-net.fr/",
      imageUrl: "https://images.unsplash.com/photo-1625246333195-78d73de2f637?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Biocontrôle et biopesticides : protéger les cultures sans polluer",
      description: "Extraits végétaux, phéromones, auxiliaires entomophages et préparations à base de Bacillus thuringiensis constituent l'arsenal du biocontrôle. Ces produits s'intègrent dans les stratégies de protection intégrée des cultures.",
      pubDate: FALLBACK_DAYS_AGO(5),
      source: "Dossier pédagogique Biogy",
      biotechColor: "green",
      link: "https://www.lafranceagricole.fr/",
      imageUrl: "https://images.unsplash.com/photo-1599332483383-2dda37d26fe1?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    }
  ],
  multi: [
    {
      title: "Cinq couleurs, une même démarche expérimentale",
      description: "Rouge, verte, bleue, jaune, blanche : les cinq familles de biotechnologies partagent le même socle scientifique (culture, bioréacteur, contrôle qualité, génie génétique). L'approche STL biotechnologie les aborde de façon transversale.",
      pubDate: FALLBACK_DAYS_AGO(1),
      source: "Dossier pédagogique Biogy",
      biotechColor: "multi",
      link: "https://lejournal.cnrs.fr/",
      imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    },
    {
      title: "Bioéthique : les garde-fous du génie génétique",
      description: "Edition du génome, cellules souches embryonnaires, clonage : chaque avancée biotechnologique s'accompagne d'un débat éthique et réglementaire. Comprendre les repères du Comité consultatif national d'éthique est essentiel pour un futur technicien.",
      pubDate: FALLBACK_DAYS_AGO(3),
      source: "Dossier pédagogique Biogy",
      biotechColor: "multi",
      link: "https://www.ccne-ethique.fr/",
      imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1200&auto=format&fit=crop",
      langue: "fr",
      fallback: true
    }
  ]
};

// Sources francaises de biotechnologie - liste auditee (avril 2026)
// Chaque URL a ete verifiee : reponse 200 + contenu RSS non vide.
// Les sources mortes (Allo Docteurs, INRAE /flux/, IFREMER wwz, Le Marin,
// Novethic, Notre Environnement, Process Alimentaire, Formule Verte,
// Pour la Science, The Conversation /sciences/feed) ont ete retirees.
const SOURCES_BIOTECH = [
  // Rouge - Sante / Medecine
  { url: 'https://presse.inserm.fr/feed/', source: 'INSERM', color: 'red', langue: 'fr', priorité: 1 },
  { url: 'https://www.sciencesetavenir.fr/sante/rss.xml', source: 'Sciences et Avenir (Santé)', color: 'red', langue: 'fr', priorité: 1 },
  { url: 'https://www.futura-sciences.com/rss/sante/actualites.xml', source: 'Futura Sciences (Santé)', color: 'red', langue: 'fr', priorité: 1 },
  { url: 'https://www.lemonde.fr/sante/rss_full.xml', source: 'Le Monde (Santé)', color: 'red', langue: 'fr', priorité: 2 },
  { url: 'https://www.lefigaro.fr/rss/figaro_sante.xml', source: 'Le Figaro (Santé)', color: 'red', langue: 'fr', priorité: 2 },
  { url: 'https://destinationsante.com/feed', source: 'Destination Santé', color: 'red', langue: 'fr', priorité: 2 },

  // Verte - Agronomie / Agro-alimentaire
  { url: 'https://agriculture.gouv.fr/rss.xml', source: 'Ministère de l\'Agriculture', color: 'green', langue: 'fr', priorité: 1 },
  { url: 'https://www.terre-net.fr/rss/actualite-agricole', source: 'Terre-Net', color: 'green', langue: 'fr', priorité: 1 },
  { url: 'https://www.agro-media.fr/feed/', source: 'Agro Media', color: 'green', langue: 'fr', priorité: 1 },
  { url: 'https://www.lafranceagricole.fr/rss', source: 'La France Agricole', color: 'green', langue: 'fr', priorité: 2 },
  { url: 'https://www.reussir.fr/rss.xml', source: 'Reussir', color: 'green', langue: 'fr', priorité: 2 },

  // Bleue - Marine / Aquaculture (plus rare en RSS FR, on mixe specialistes + grand public filtre)
  { url: 'https://ocean-climate.org/feed/', source: 'Plateforme Océan & Climat', color: 'blue', langue: 'fr', priorité: 1 },
  { url: 'https://www.sciencesetavenir.fr/nature-environnement/rss.xml', source: 'Sciences et Avenir (Nature)', color: 'blue', langue: 'fr', priorité: 1 },
  { url: 'https://fondationtaraocean.org/feed/', source: 'Fondation Tara Océan', color: 'blue', langue: 'fr', priorité: 1 },
  { url: 'https://surfrider.eu/feed/', source: 'Surfrider Europe', color: 'blue', langue: 'fr', priorité: 2 },

  // Jaune - Environnement / Depollution
  { url: 'https://www.goodplanet.info/feed/', source: 'GoodPlanet Info', color: 'yellow', langue: 'fr', priorité: 1 },
  { url: 'https://reporterre.net/spip.php?page=backend', source: 'Reporterre', color: 'yellow', langue: 'fr', priorité: 1 },
  { url: 'https://www.futura-sciences.com/rss/environnement/actualites.xml', source: 'Futura Sciences (Environnement)', color: 'yellow', langue: 'fr', priorité: 1 },
  { url: 'https://www.20minutes.fr/feeds/rss-planete.xml', source: '20 Minutes Planète', color: 'yellow', langue: 'fr', priorité: 2 },
  { url: 'https://www.encyclopedie-environnement.org/feed/', source: 'Encyclopédie de l\'Environnement', color: 'yellow', langue: 'fr', priorité: 2 },

  // Blanche - Industrielle / Bioeconomie
  { url: 'https://www.techniques-ingenieur.fr/actualite/articles/feed/', source: 'Techniques de l\'Ingénieur', color: 'white', langue: 'fr', priorité: 1 },
  { url: 'https://www.enerzine.com/feed', source: 'Enerzine', color: 'white', langue: 'fr', priorité: 1 },
  { url: 'https://www.biotech-finances.com/feed/', source: 'Biotech Finances', color: 'white', langue: 'fr', priorité: 1 },

  // Multidisciplinaire
  { url: 'https://lejournal.cnrs.fr/rss', source: 'CNRS Le Journal', color: 'multi', langue: 'fr', priorité: 1 },
  { url: 'https://www.futura-sciences.com/rss/actualites.xml', source: 'Futura Sciences', color: 'multi', langue: 'fr', priorité: 1 },
  { url: 'https://www.lemonde.fr/sciences/rss_full.xml', source: 'Le Monde (Sciences)', color: 'multi', langue: 'fr', priorité: 1 },
  { url: 'https://www.sciencesetavenir.fr/rss.xml', source: 'Sciences et Avenir', color: 'multi', langue: 'fr', priorité: 2 },
  { url: 'https://www.numerama.com/sciences/feed/', source: 'Numerama Sciences', color: 'multi', langue: 'fr', priorité: 2 },
  { url: 'https://theconversation.com/fr/articles.atom', source: 'The Conversation (FR)', color: 'multi', langue: 'fr', priorité: 2 }
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
  const params = event.queryStringParameters || {};
  const requestedColor = params.color || 'all';
  const maxParam = params.max ? parseInt(params.max, 10) : 20;
  const max = isNaN(maxParam) ? 20 : Math.min(maxParam, 30);
  const forceRefresh = params.refresh === 'true';

  // CORS + cache (edge Netlify). Quand refresh=true on court-circuite le cache
  // via l instruction no-store; sinon on laisse le CDN servir la reponse
  // pendant 30 minutes (stale-while-revalidate 2h) pour eviter que chaque
  // eleve declenche un aller-retour vers 15+ flux RSS.
  const cacheHeader = forceRefresh
    ? 'no-store'
    : 'public, s-maxage=1800, stale-while-revalidate=7200';

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Cache-Control': cacheHeader,
    'Netlify-CDN-Cache-Control': cacheHeader,
    'Content-Type': 'application/json; charset=utf-8',
    Vary: 'Accept-Encoding',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }
  
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
    
    // En cas d echec on ne veut pas figer la reponse degradee au CDN
    const errorHeaders = {
      ...headers,
      'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=600',
      'Netlify-CDN-Cache-Control': 'public, s-maxage=120, stale-while-revalidate=600',
    };

    return {
      statusCode: 200,
      headers: errorHeaders,
      body: JSON.stringify({
        articles: emergencyArticles,
        error: errorMessage,
        usesFallback: true
      })
    };
  }
}; 