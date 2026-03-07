const Parser = require('rss-parser');

const parser = new Parser({
  timeout: 5000,
  headers: {
    'User-Agent': 'Biogy-STL-Watch/1.0',
    Accept: 'application/rss+xml, application/xml, text/xml;q=0.9',
  },
  customFields: {
    item: [
      ['description', 'description'],
      ['content:encoded', 'contentEncoded'],
      ['pubDate', 'pubDate'],
      ['dc:date', 'dcDate'],
      ['media:content', 'mediaContent'],
      ['media:thumbnail', 'mediaThumbnail'],
      ['enclosure', 'enclosure'],
    ],
  },
});

const CACHE_TTL_MS = 20 * 60 * 1000;
const FEED_TIMEOUT_MS = 3500;
const MAX_ITEMS_PER_FEED = 6;
const MAX_SECTION_ITEMS = 6;
const MIN_LIVE_ITEMS_PER_CATEGORY = 3;
const CATEGORY_ORDER = ['red', 'white', 'green', 'yellow', 'blue', 'multi'];

let digestCache = {
  data: null,
  timestamp: 0,
};

const STL_CATEGORIES = {
  red: {
    key: 'red',
    name: 'Rouge',
    title: 'Sante, diagnostic et biotechnologies medicales',
    shortTitle: 'Sante',
    official: true,
    domain: 'Sante humaine',
    description:
      'Vaccins, therapie, diagnostic, immunologie, biologie moleculaire et innovations biomedicales mobilisables en STL.',
    lens:
      'Utile pour contextualiser les analyses biologiques, les techniques de laboratoire et les enjeux de sante publique.',
    keywords: [
      'sante',
      'medical',
      'medecine',
      'vaccin',
      'diagnostic',
      'immun',
      'cancer',
      'biomarqueur',
      'therapie',
      'cellule',
      'micro-aiguille',
      'crispr',
      'genom',
      'sequenc',
      'anticorps',
      'pathogene',
      'microbiote',
    ],
    defaultUsages: ['Techniques de labo', 'Oral STL'],
  },
  white: {
    key: 'white',
    name: 'Blanche',
    title: 'Bioproduction, procedes et bio-industries',
    shortTitle: 'Bio-industries',
    official: true,
    domain: 'Production industrielle',
    description:
      'Fermentation, enzymes, bioproduction, procedes, qualite et valorisation industrielle du vivant.',
    lens:
      'Pertinent pour la demarche de projet, l optimisation de procedes et les situations professionnelles STL.',
    keywords: [
      'industrie',
      'industriel',
      'bioproduction',
      'fermentation',
      'enzyme',
      'bioreacteur',
      'bioprocede',
      'production',
      'materiau',
      'bioplastique',
      'process',
      'qualite',
      'usine',
      'catalyse',
      'bioraffinerie',
      'bioeconomie',
    ],
    defaultUsages: ['Projet technologique', 'Qualite / production'],
  },
  green: {
    key: 'green',
    name: 'Verte',
    title: 'Agronomie, alimentation et ressources du vivant',
    shortTitle: 'Agronomie',
    official: true,
    domain: 'Agronomie et alimentation',
    description:
      'Selection, microbiologie alimentaire, production vegetale, agro-ressources et biotechnologies pour l alimentation.',
    lens:
      'Permet de relier les actualites a la qualite sanitaire, a la transformation biologique et aux filieres agroalimentaires.',
    keywords: [
      'agro',
      'aliment',
      'alimentaire',
      'agriculture',
      'vegetal',
      'plante',
      'culture',
      'agronomie',
      'selection',
      'semence',
      'ferme',
      'microorganisme',
      'sol',
      'levure',
      'fermentation',
      'nutrition',
      'microalgue',
    ],
    defaultUsages: ['Contextualisation de TP', 'Culture scientifique'],
  },
  yellow: {
    key: 'yellow',
    name: 'Jaune',
    title: 'Environnement, traitement et depollution',
    shortTitle: 'Environnement',
    official: true,
    domain: 'Environnement',
    description:
      'Qualite de l eau, bioremediation, dechets, bioindication et surveillance des milieux.',
    lens:
      'Alimente les enjeux de developpement durable, d analyse des pollutions et de prevention en STL.',
    keywords: [
      'environnement',
      'eau',
      'pollu',
      'depoll',
      'bioremed',
      'dechet',
      'recycl',
      'station',
      'traitement',
      'assainissement',
      'microplastique',
      'biodiversite',
      'sol',
      'ecosysteme',
      'carbone',
    ],
    defaultUsages: ['One Health', 'Oral STL'],
  },
  blue: {
    key: 'blue',
    name: 'Bleue',
    title: 'Ressources marines, aquaculture et biomolecules',
    shortTitle: 'Milieux marins',
    official: true,
    domain: 'Milieux marins',
    description:
      'Aquaculture, biodiversite marine, algues, biomolecules et innovations issues du vivant marin.',
    lens:
      'Ouvre la STL a la biodiversite, aux ressources marines et a la valorisation biotechnologique des milieux aquatiques.',
    keywords: [
      'marin',
      'marine',
      'mer',
      'ocean',
      'aquaculture',
      'algue',
      'microalgue',
      'littoral',
      'peche',
      'biodiversite marine',
      'aquatique',
      'phytoplancton',
      'spiruline',
      'ressource marine',
    ],
    defaultUsages: ['Culture scientifique', 'Projet technologique'],
  },
  multi: {
    key: 'multi',
    name: 'Transversale',
    title: 'Recherche, innovation et culture scientifique STL',
    shortTitle: 'Transversale',
    official: false,
    domain: 'Culture scientifique',
    description:
      'Articles transversaux utiles pour ouvrir une sequence, nourrir un oral ou relier plusieurs domaines STL.',
    lens:
      'Permet de garder une veille scientifique generale sans perdre le lien avec les attendus STL.',
    keywords: [
      'recherche',
      'innovation',
      'science',
      'technologie',
      'donnee',
      'ethique',
      'societe',
      'laboratoire',
      'ingenierie',
      'souverainete',
    ],
    defaultUsages: ['Culture scientifique', 'Oral STL'],
  },
};

const SOURCE_REGISTRY = [
  {
    id: 'inserm',
    source: 'Inserm',
    url: 'https://presse.inserm.fr/feed/',
    type: 'official',
    defaultCategory: 'red',
    categories: ['red', 'multi'],
  },
  {
    id: 'futura-sante',
    source: 'Futura Sciences - Sante',
    url: 'https://www.futura-sciences.com/rss/sante/actualites.xml',
    type: 'media',
    defaultCategory: 'red',
    categories: ['red'],
  },
  {
    id: 'futura-environnement',
    source: 'Futura Sciences - Environnement',
    url: 'https://www.futura-sciences.com/rss/environnement/actualites.xml',
    type: 'media',
    defaultCategory: 'yellow',
    categories: ['yellow', 'green', 'blue'],
  },
  {
    id: 'futura-nature',
    source: 'Futura Sciences - Nature',
    url: 'https://www.futura-sciences.com/rss/nature/actualites.xml',
    type: 'media',
    defaultCategory: 'green',
    categories: ['green', 'blue', 'yellow'],
  },
  {
    id: 'techniques-ingenieur',
    source: "Techniques de l'Ingenieur",
    url: "https://www.techniques-ingenieur.fr/actualite/articles/feed/",
    type: 'media',
    defaultCategory: 'white',
    categories: ['white', 'yellow', 'multi'],
  },
  {
    id: 'conversation-environnement',
    source: 'The Conversation - Environnement',
    url: 'https://theconversation.com/fr/environnement/articles.atom',
    type: 'media',
    defaultCategory: 'yellow',
    categories: ['yellow', 'green', 'blue', 'multi'],
  },
  {
    id: 'lemonde-sciences',
    source: 'Le Monde - Sciences',
    url: 'https://www.lemonde.fr/sciences/rss_full.xml',
    type: 'media',
    defaultCategory: 'multi',
    categories: ['multi', 'red', 'white', 'green', 'yellow', 'blue'],
  },
  {
    id: 'cnrs',
    source: 'CNRS Le Journal',
    url: 'https://lejournal.cnrs.fr/rss',
    type: 'official',
    defaultCategory: 'multi',
    categories: ['multi', 'red', 'white', 'green', 'yellow', 'blue'],
  },
  {
    id: 'conversation-fr',
    source: 'The Conversation - France',
    url: 'https://theconversation.com/fr/articles.atom?language=fr',
    type: 'media',
    defaultCategory: 'multi',
    categories: ['multi', 'red', 'white', 'green', 'yellow', 'blue'],
  },
  {
    id: 'conversation-sante',
    source: 'The Conversation - Sante',
    url: 'https://theconversation.com/fr/sante/articles.atom',
    type: 'media',
    defaultCategory: 'red',
    categories: ['red', 'multi'],
  },
  {
    id: 'conversation-technologie',
    source: 'The Conversation - Technologie',
    url: 'https://theconversation.com/fr/technologie/articles.atom',
    type: 'media',
    defaultCategory: 'white',
    categories: ['white', 'multi'],
  },
];

const BACKGROUND_ARTICLES = {
  red: [
    {
      title: 'Vaccins et anticorps : repere de fond pour comprendre les innovations de sante',
      link: 'https://presse.inserm.fr/',
      source: 'Inserm',
      kind: 'background',
      description:
        'Un point d entree utile pour relier actualite biomedicale, diagnostic, immunologie et techniques de laboratoire en STL.',
      pubDate: '2025-01-01T00:00:00.000Z',
      imageUrl: null,
    },
  ],
  white: [
    {
      title: 'Bioproduction et enzymes : repere de fond sur les bio-industries',
      link: 'https://www.techniques-ingenieur.fr/base-documentaire/procedes-chimie-bio-agro-th2/biotechnologies-et-chimie-de-fermentation-42164210/',
      source: "Techniques de l'Ingenieur",
      kind: 'background',
      description:
        'Une ressource de contexte pour relier fermentation, enzymes, qualite et optimisation des procedes.',
      pubDate: '2025-01-01T00:00:00.000Z',
      imageUrl: null,
    },
  ],
  green: [
    {
      title: 'Agronomie, alimentation et vivant : repere de fond pour la STL',
      link: 'https://www.inrae.fr/actualites',
      source: 'INRAE',
      kind: 'background',
      description:
        'Un repere fiable pour faire le lien entre microbiologie alimentaire, production vegetale et innovation en agronomie.',
      pubDate: '2025-01-01T00:00:00.000Z',
      imageUrl: null,
    },
  ],
  yellow: [
    {
      title: 'Bioremediation et qualite de l eau : repere de fond environnemental',
      link: 'https://www.actu-environnement.com/ae/dossiers/traitement-eaux-usees/procedes-biologiques.php',
      source: 'Actu-Environnement',
      kind: 'background',
      description:
        'Une ressource de contexte pour lire les actualites sur l eau, les pollutions et les traitements biologiques.',
      pubDate: '2025-01-01T00:00:00.000Z',
      imageUrl: null,
    },
  ],
  blue: [
    {
      title: 'Algues, aquaculture et biodiversite : repere de fond sur les biotech bleues',
      link: 'https://wwz.ifremer.fr/Recherche/Departements-scientifiques/Departement-Ressources-Biologiques-et-Environnement/Biotechnologies-et-Ressources-Marines',
      source: 'Ifremer',
      kind: 'background',
      description:
        'Une base de contexte pour relier ressources marines, aquaculture et valorisation biotechnologique du milieu marin.',
      pubDate: '2025-01-01T00:00:00.000Z',
      imageUrl: null,
    },
  ],
  multi: [
    {
      title: 'Recherche et innovation : repere de fond pour ouvrir la veille STL',
      link: 'https://lejournal.cnrs.fr/',
      source: 'CNRS Le Journal',
      kind: 'background',
      description:
        'Un point d entree transversal pour nourrir l oral, la culture scientifique et les passerelles entre domaines STL.',
      pubDate: '2025-01-01T00:00:00.000Z',
      imageUrl: null,
    },
  ],
};

const USAGE_RULES = [
  {
    label: 'Techniques de labo',
    keywords: ['diagnostic', 'analyse', 'dosage', 'culture', 'sequenc', 'pcr', 'capteur', 'enzyme', 'biomarqueur'],
  },
  {
    label: 'Projet technologique',
    keywords: ['process', 'procede', 'prototype', 'optimis', 'production', 'fermentation', 'bior', 'innovation'],
  },
  {
    label: 'One Health',
    keywords: ['ecosysteme', 'environnement', 'zoonose', 'sante publique', 'biodiversite', 'eau', 'pollu', 'microbiote'],
  },
  {
    label: 'Oral STL',
    keywords: ['enjeu', 'impact', 'innovation', 'ethique', 'societe', 'souverainete', 'prevention'],
  },
];

const OFFICIAL_REFERENCES = [
  {
    title: 'Programmes et ressources en serie STL',
    url: 'https://eduscol.education.fr/1652/programmes-et-ressources-en-serie-stl',
    source: 'eduscol',
  },
  {
    title: 'Programme de terminale STL - biochimie-biologie-biotechnologies',
    url: 'https://eduscol.education.fr/document/23101/download',
    source: 'eduscol',
  },
  {
    title: 'Biotechnologies et STMS - ressources et actualites',
    url: 'https://eduscol.education.fr/2340/biotechnologies-sciences-et-techniques-medico-sociales',
    source: 'eduscol',
  },
];

const SOURCE_WEIGHTS = {
  official: 30,
  media: 18,
};

const stripHtml = (value = '') =>
  String(value)
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const normalizeDate = (value) => {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) {
    return new Date();
  }
  return date;
};

const extractImageUrl = (item) => {
  if (item.enclosure && item.enclosure.url) {
    return item.enclosure.url;
  }

  if (item.mediaContent && item.mediaContent.$ && item.mediaContent.$.url) {
    return item.mediaContent.$.url;
  }

  if (item.mediaThumbnail && item.mediaThumbnail.$ && item.mediaThumbnail.$.url) {
    return item.mediaThumbnail.$.url;
  }

  const content = item.contentEncoded || item.description || '';
  const imageMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  return imageMatch ? imageMatch[1] : null;
};

const keywordScore = (text, keywords) =>
  keywords.reduce((score, keyword) => {
    if (text.includes(keyword)) {
      return score + 1;
    }
    return score;
  }, 0);

const inferCategory = (source, text) => {
  let bestCategory = source.defaultCategory;
  let bestScore = source.defaultCategory === 'multi' ? 0 : 1;

  source.categories.forEach((categoryKey) => {
    if (categoryKey === 'multi') {
      return;
    }

    const category = STL_CATEGORIES[categoryKey];
    const score = keywordScore(text, category.keywords);
    if (score > bestScore) {
      bestScore = score;
      bestCategory = categoryKey;
    }
  });

  if (bestScore === 0 && source.defaultCategory === 'multi') {
    return 'multi';
  }

  return bestCategory;
};

const computeUsages = (text, categoryKey) => {
  const usages = [];

  USAGE_RULES.forEach((rule) => {
    if (keywordScore(text, rule.keywords) > 0) {
      usages.push(rule.label);
    }
  });

  STL_CATEGORIES[categoryKey].defaultUsages.forEach((usage) => {
    if (!usages.includes(usage) && usages.length < 2) {
      usages.push(usage);
    }
  });

  if (usages.length === 0) {
    usages.push('Culture scientifique');
  }

  return usages.slice(0, 2);
};

const buildWhyItMatters = (categoryKey) => STL_CATEGORIES[categoryKey].lens;

const computeArticleScore = (article, sourceType, categoryKey) => {
  const publicationDate = normalizeDate(article.pubDate);
  const ageInDays = Math.max(
    0,
    Math.floor((Date.now() - publicationDate.getTime()) / (24 * 60 * 60 * 1000)),
  );
  const recencyScore = Math.max(0, 25 - ageInDays);
  const text = `${article.title} ${article.description}`.toLowerCase();
  const categoryScore = keywordScore(text, STL_CATEGORIES[categoryKey].keywords) * 4;
  const usageScore = computeUsages(text, categoryKey).length * 5;
  return recencyScore + categoryScore + usageScore + (SOURCE_WEIGHTS[sourceType] || 10);
};

const dedupeArticles = (articles) => {
  const seen = new Set();
  return articles.filter((article) => {
    const key = `${article.link || ''}::${article.title.toLowerCase()}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
};

const normalizeFeedArticles = (source, feed) => {
  const items = Array.isArray(feed.items) ? feed.items.slice(0, MAX_ITEMS_PER_FEED) : [];
  return items
    .map((item) => {
      const title = stripHtml(item.title || '');
      const description = stripHtml(item.description || item.contentEncoded || item.content || '');
      if (!title || !description) {
        return null;
      }

      const text = `${title} ${description}`.toLowerCase();
      const categoryKey = inferCategory(source, text);
      const usages = computeUsages(text, categoryKey);

      return {
        title,
        description: description.slice(0, 360),
        link: item.link || '',
        pubDate: normalizeDate(item.pubDate || item.dcDate).toISOString(),
        imageUrl: extractImageUrl(item),
        source: source.source,
        sourceType: source.type,
        biotechColor: categoryKey,
        categoryKey,
        usages,
        whyItMatters: buildWhyItMatters(categoryKey),
        score: computeArticleScore({ title, description, pubDate: item.pubDate || item.dcDate }, source.type, categoryKey),
        kind: 'news',
      };
    })
    .filter(Boolean);
};

const fetchSourceArticles = async (source) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FEED_TIMEOUT_MS);
    const response = await fetch(source.url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Biogy-STL-Watch/1.0',
        Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml;q=0.9',
      },
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Status code ${response.status}`);
    }

    const xml = await response.text();
    const feed = await parser.parseString(xml);

    return normalizeFeedArticles(source, feed);
  } catch (error) {
    if (error.name === 'AbortError') {
      console.warn(`biotech-veille: unable to fetch ${source.source}: Feed timeout`);
      return [];
    }

    console.warn(`biotech-veille: unable to fetch ${source.source}: ${error.message}`);
    return [];
  }
};

const addBackgroundArticles = (sections) => {
  const usedBackground = {};

  CATEGORY_ORDER.forEach((categoryKey) => {
    const currentItems = sections[categoryKey] || [];
    const liveItems = currentItems.filter((item) => item.kind === 'news');

    if (liveItems.length >= MIN_LIVE_ITEMS_PER_CATEGORY || !BACKGROUND_ARTICLES[categoryKey]) {
      usedBackground[categoryKey] = false;
      return;
    }

    const fallbacksNeeded = MIN_LIVE_ITEMS_PER_CATEGORY - liveItems.length;
    const backgroundItems = BACKGROUND_ARTICLES[categoryKey]
      .slice(0, fallbacksNeeded)
      .map((item, index) => ({
        ...item,
        sourceType: 'official',
        biotechColor: categoryKey,
        categoryKey,
        usages: STL_CATEGORIES[categoryKey].defaultUsages.slice(0, 2),
        whyItMatters: buildWhyItMatters(categoryKey),
        score: 1 - index,
      }));

    sections[categoryKey] = [...currentItems, ...backgroundItems];
    usedBackground[categoryKey] = backgroundItems.length > 0;
  });

  return usedBackground;
};

const buildDigest = async () => {
  const fetchedArticles = await Promise.all(SOURCE_REGISTRY.map(fetchSourceArticles));
  const dedupedArticles = dedupeArticles(fetchedArticles.flat());

  const sections = CATEGORY_ORDER.reduce((accumulator, categoryKey) => {
    accumulator[categoryKey] = [];
    return accumulator;
  }, {});

  dedupedArticles.forEach((article) => {
    const categoryKey = article.categoryKey || 'multi';
    sections[categoryKey].push(article);
  });

  CATEGORY_ORDER.forEach((categoryKey) => {
    sections[categoryKey].sort((left, right) => right.score - left.score);
    sections[categoryKey] = sections[categoryKey].slice(0, MAX_SECTION_ITEMS);
  });

  const usedBackground = addBackgroundArticles(sections);

  const counts = CATEGORY_ORDER.reduce((accumulator, categoryKey) => {
    accumulator[categoryKey] = sections[categoryKey].length;
    return accumulator;
  }, {});

  const highlights = dedupeArticles(
    CATEGORY_ORDER
      .map((categoryKey) => sections[categoryKey].slice(0, 2))
      .flat()
      .sort((left, right) => right.score - left.score),
  ).slice(0, 8);

  const flatArticles = CATEGORY_ORDER.map((categoryKey) => sections[categoryKey]).flat();

  return {
    generatedAt: new Date().toISOString(),
    categories: CATEGORY_ORDER.map((categoryKey) => ({
      ...STL_CATEGORIES[categoryKey],
      count: counts[categoryKey],
      usedBackground: usedBackground[categoryKey],
    })),
    counts,
    sections,
    highlights,
    articles: flatArticles,
    usedBackground,
    officialReferences: OFFICIAL_REFERENCES,
  };
};

const getDigest = async (forceRefresh) => {
  if (!forceRefresh && digestCache.data && Date.now() - digestCache.timestamp < CACHE_TTL_MS) {
    return digestCache.data;
  }

  const digest = await buildDigest();
  digestCache = {
    data: digest,
    timestamp: Date.now(),
  };
  return digest;
};

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    };
  }

  try {
    const params = event.queryStringParameters || {};
    const category = params.color || params.category || 'all';
    const countsOnly = params.counts === 'true';
    const forceRefresh = params.refresh === 'true';
    const digest = await getDigest(forceRefresh);

    if (countsOnly) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          generatedAt: digest.generatedAt,
          counts: digest.counts,
        }),
      };
    }

    if (category !== 'all' && digest.sections[category]) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          ...digest,
          highlights: digest.highlights.filter((article) => article.categoryKey === category).slice(0, 4),
          sections: {
            [category]: digest.sections[category],
          },
          articles: digest.sections[category],
        }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(digest),
    };
  } catch (error) {
    console.error('biotech-veille failure:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "La veille STL n'a pas pu etre chargee.",
      }),
    };
  }
};
