const Parser = require('rss-parser');
const parser = new Parser({ customFields: { item: [['content:encoded', 'contentEncoded']] } });
const parseFeed = async (url) => {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(3500),
    headers: { 'User-Agent': 'Biogy/1.0 (+https://biogy.netlify.app)', Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml' },
  });
  if (!response.ok) throw new Error(`RSS HTTP ${response.status}`);
  return parser.parseString(await response.text());
};

// Mots-clés généraux de biotechnologie pour filtrer les articles
const BIOTECH_KEYWORDS = [
  // Termes généraux
  'biotechnologie', 'biotech', 'biologie', 'génétique', 'génome', 
  'ADN', 'ARN', 'CRISPR', 'bactérie',
  'microbiologie', 'fermentation', 'biocarburant', 'biomatériau',
  'biomolécule', 'bioréacteur', 'thérapie génique', 'OGM', 'transgénique',
  'biosynthèse', 'bioingénierie', 'biocapteur', 'biocatalyseur', 'biomédical',
  'culture cellulaire', 'clonage', 'séquençage', 'micro-organisme', 'levure',
  'immunologie', 'anticorps', 'bioprocédé', 'biotransformation',
  
  // Termes spécifiques à la biotechnologie bleue (marine)
  'aquaculture', 'biotechnologie marine', 'biotechnologie bleue', 'algue', 'microalgue',
  'ressource marine', 'biologie marine', 'biomasse marine', 'biodiversité marine',
  'valorisation marine', 'écosystème marin', 'organisme marin', 'phytoplancton',
  'pisciculture',
  
  // Termes spécifiques à la biotechnologie verte (agronomie)
  'amélioration végétale', 'plante génétiquement', 'agriculture biotech', 'biotechnologie verte',
  'agroalimentaire biotech', 'biofertilisant', 'fertilisation biologique', 'biocontrôle',
  'agronomie', 'semence', 'nutrition végétale', 'sélection variétale', 'photosynthèse',
  
  // Termes spécifiques à la biotechnologie jaune (environnement)
  'biodépollution', 'bioremédiation', 'traitement biologique', 'biorestauration',
  'décontamination biologique', 'dépollution', 'biotechnologie environnementale',
  'recyclage biologique', 'traitement biologique de l’eau',
  
  // Termes spécifiques à la biotechnologie blanche (industrielle)
  'biotechnologie industrielle', 'enzyme industrielle', 'fermentation industrielle',
  'biocatalyse', 'bioéconomie', 'enzyme', 'protéine recombinante', 'protéine thérapeutique',
  'bioproduction', 'biocarburant', 'biomasse', 'chimie verte',
  
];

// FALLBACK ARTICLES - dossiers pedagogiques internes, servent de filet de
// securite quand les flux RSS ne renvoient pas assez de contenu (coupure
// reseau, blocage 403, etc.). Contenus evergreen, valides pour le
// programme STL biotechnologie.

const FALLBACK_ARTICLES = {
  red: [
    {
      title: "Comprendre la thérapie génique",
      description: "Un dossier Inserm pour étudier les principes de la thérapie génique, les différentes stratégies et les vecteurs utilisés. Une ressource pour approfondir le cours, à lire en tenant compte de sa date de mise à jour.",
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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
      pubDate: null,
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

const COLORS = Object.keys(FALLBACK_ARTICLES);
const safeUrl = (value) => {
  try { const url = new URL(value); return ['http:', 'https:'].includes(url.protocol) ? url.href : null; }
  catch { return null; }
};
const publicationDate = (item) => {
  const value = item.pubDate || item.dcDate || item.isoDate;
  const timestamp = value ? Date.parse(value) : NaN;
  return Number.isFinite(timestamp) ? new Date(timestamp).toISOString() : null;
};
const describe = (item) => String(item.contentSnippet || item.description || item.contentEncoded || item.content || '')
  .replace(/<[^>]*>/g, '').trim().slice(0, 500);
const normalizedWords = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
const biotechTerms = BIOTECH_KEYWORDS.map(normalizedWords).filter(term => term.length);
const isBiotech = (article) => {
  const words = normalizedWords(`${article.title} ${article.description}`);
  return biotechTerms.some(term => {
    for (let start = 0; start <= words.length - term.length; start += 1) {
      let matches = true;
      for (let index = 0; index < term.length; index += 1) {
        const value = words[start + index];
        if (value !== term[index] && !(index === term.length - 1 && ['s', 'x'].some(suffix => value === `${term[index]}${suffix}`))) {
          matches = false;
          break;
        }
      }
      if (matches) return true;
    }
    return false;
  });
};
const normalizeArticle = (item, source) => ({
  title: String(item.title || '').trim(),
  link: safeUrl(item.link),
  pubDate: publicationDate(item),
  description: describe(item),
  imageUrl: safeUrl(item.enclosure?.url || String(item.contentEncoded || item.description || item.content || '').match(/<img[^>]+src=["']([^"']+)["']/i)?.[1]),
  source: source.source,
  biotechColor: source.color,
  langue: source.langue,
  fallback: false,
});

// Bound every feed independently: one stalled source must not discard the others.
const fetchWithin = async (parseFeed, url, timeoutMs) => {
  let timer;
  try {
    const feed = await Promise.race([
      Promise.resolve().then(() => parseFeed(url)),
      new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('Feed timeout')), timeoutMs); }),
    ]);
    return { ok: Array.isArray(feed?.items), items: Array.isArray(feed?.items) ? feed.items : [] };
  } catch { return { ok: false, items: [] }; }
  finally { clearTimeout(timer); }
};

const createHandler = ({ parseFeed: fetchFeed = parseFeed, feedTimeoutMs = 4000, now = () => new Date() } = {}) => async (event) => {
  const params = event.queryStringParameters || {};
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Netlify-CDN-Cache-Control': 'no-store',
    Vary: 'Accept-Encoding',
  };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers, body: '' };
  if (event.httpMethod && event.httpMethod !== 'GET') return { statusCode: 405, headers: { ...headers, Allow: 'GET, OPTIONS' }, body: JSON.stringify({ error: 'Méthode non autorisée.' }) };
  const color = params.color || 'all';
  if (color !== 'all' && !COLORS.includes(color)) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Catégorie inconnue.' }) };
  const requestedMax = Number.parseInt(params.max, 10);
  const max = Number.isFinite(requestedMax) ? Math.max(1, Math.min(requestedMax, 30)) : 20;
  const biotechOnly = params.biotechOnly !== 'false';
  const colors = color === 'all' ? COLORS : [color];
  const sources = colors.flatMap(key => SOURCES_BIOTECH.filter(source => source.color === key)
    .sort((a, b) => a.priorité - b.priorité).slice(0, color === 'all' ? 3 : 6));
  const results = await Promise.all(sources.map(async source => ({
    source, ...await fetchWithin(fetchFeed, source.url, feedTimeoutMs),
  })));
  const seen = new Set();
  const articles = results.flatMap(({ source, items }) => items.slice(0, 20)
    .map(item => normalizeArticle(item, source))
    .filter(article => article.title && article.link && (!biotechOnly || isBiotech(article)))
    .slice(0, 5))
    .filter(article => { if (seen.has(article.link)) return false; seen.add(article.link); return true; });

  for (const key of colors) {
    const count = articles.filter(article => article.biotechColor === key).length;
    const needed = Math.max(0, (color === 'all' ? 2 : 3) - count);
    articles.push(...FALLBACK_ARTICLES[key].filter(article => !seen.has(article.link)).slice(0, needed));
  }
  // Undated reference resources always follow actual news. Never invent a date.
  articles.sort((a, b) => Number(Boolean(a.fallback)) - Number(Boolean(b.fallback)) ||
    (Date.parse(b.pubDate) || 0) - (Date.parse(a.pubDate) || 0));
  const limitedArticles = articles.slice(0, max);
  const successful = results.filter(result => result.ok).length;
  const cache = params.refresh === 'true' ? 'no-store' : successful === 0
    ? 'public, s-maxage=120, stale-while-revalidate=600'
    : 'public, s-maxage=1800, stale-while-revalidate=7200';
  return {
    statusCode: 200,
    headers: { ...headers, 'Cache-Control': cache, 'Netlify-CDN-Cache-Control': cache },
    body: JSON.stringify({
      articles: limitedArticles,
      usesFallback: limitedArticles.some(article => article.fallback),
      fetchedAt: now().toISOString(),
      feeds: { successful, total: results.length },
    }),
  };
};

exports.handler = createHandler();
exports.createHandler = createHandler;
