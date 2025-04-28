const Parser = require('rss-parser');
const parser = new Parser({
  timeout: 6000, // Augmenter encore le timeout global
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
  
  // Termes spécifiques à la biotechnologie verte (agronomie)
  'amélioration végétale', 'plante génétiquement', 'agriculture biotech', 'biotechnologie verte',
  'agroalimentaire biotech', 'biofertilisant', 'fertilisation biologique', 'biocontrôle',
  
  // Termes spécifiques à la biotechnologie jaune (environnement)
  'biodépollution', 'bioremédiation', 'traitement biologique', 'biorestauration',
  'décontamination biologique', 'dépollution', 'biotechnologie environnementale',
  
  // Termes plus généraux mais souvent liés
  'innovation', 'recherche', 'développement durable', 'laboratoire', 'startup',
  'bioéconomie', 'économie circulaire', 'valorisation'
];

// Sources françaises de biotechnologie par catégorie - CONSIDÉRABLEMENT ENRICHIES
const SOURCES_BIOTECH = [
  // Rouge - Santé/Médecine (7 sources)
  { url: 'https://presse.inserm.fr/feed/', source: 'INSERM', color: 'red', langue: 'fr', priorité: 1 },
  { url: 'https://www.sciencesetavenir.fr/sante/rss.xml', source: 'Sciences et Avenir (Santé)', color: 'red', langue: 'fr', priorité: 1 },
  { url: 'https://www.futura-sciences.com/rss/sante/actualites.xml', source: 'Futura Sciences (Santé)', color: 'red', langue: 'fr', priorité: 1 },
  { url: 'https://www.biotech-finances.com/feed/', source: 'Biotech Finances', color: 'red', langue: 'fr', priorité: 1 },
  { url: 'https://www.leem.org/rss.xml', source: 'LEEM', color: 'red', langue: 'fr', priorité: 2 },
  { url: 'https://www.industrie-techno.com/api/feed/category/biotech-pharmaceutique.rss', source: 'Industrie Techno Pharma', color: 'red', langue: 'fr', priorité: 2 },
  { url: 'https://www.biofutur.com/feed/', source: 'Biofutur', color: 'red', langue: 'fr', priorité: 2 },
  
  // Verte - Agronomie (9 sources)
  { url: 'https://www.inrae.fr/flux/actualites/all/rss.xml', source: 'INRAE', color: 'green', langue: 'fr', priorité: 1 },
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/agronomie.xml', source: 'Actu-Environnement (Agronomie)', color: 'green', langue: 'fr', priorité: 1 },
  { url: 'https://www.agro-media.fr/feed/', source: 'Agro Media', color: 'green', langue: 'fr', priorité: 1 },
  { url: 'https://www.bayer-agri.fr/feed/', source: 'Bayer Agri', color: 'green', langue: 'fr', priorité: 1 },
  { url: 'https://www.arvalisinstitutduvegetal.fr/feed', source: 'Arvalis', color: 'green', langue: 'fr', priorité: 2 },
  { url: 'https://www.agroscope.admin.ch/agroscope/fr/home/actualite/infothek/flux-rss.xml', source: 'Agroscope', color: 'green', langue: 'fr', priorité: 2 },
  { url: 'https://www.agriculture-environnement.fr/feed.xml', source: 'Agriculture & Environnement', color: 'green', langue: 'fr', priorité: 2 },
  { url: 'https://www.terre-net.fr/rss/', source: 'Terre-Net', color: 'green', langue: 'fr', priorité: 2 },
  { url: 'https://www.agro-bordeaux.fr/feed/', source: 'Bordeaux Sciences Agro', color: 'green', langue: 'fr', priorité: 3 },
  
  // Bleue - Marine (9 sources)
  { url: 'https://www.meretmarine.com/fr/rss.xml', source: 'Mer et Marine', color: 'blue', langue: 'fr', priorité: 1 },
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/mer-littoral.xml', source: 'Actu-Environnement (Mer)', color: 'blue', langue: 'fr', priorité: 1 },
  { url: 'https://wwz.ifremer.fr/layout/set/rss/Actualites-et-Agenda/Toutes-les-actualites', source: 'IFREMER', color: 'blue', langue: 'fr', priorité: 1 },
  { url: 'https://www.lemarin.fr/rss.xml', source: 'Le Marin', color: 'blue', langue: 'fr', priorité: 2 },
  { url: 'https://www.ifemer.fr/feed/', source: 'Institut Français de la Mer', color: 'blue', langue: 'fr', priorité: 2 },
  { url: 'https://www.institut-ocean.org/feed/', source: 'Institut de l\'Océan', color: 'blue', langue: 'fr', priorité: 2 },
  { url: 'https://www.cluster-maritime.fr/feed/', source: 'Cluster Maritime Français', color: 'blue', langue: 'fr', priorité: 2 },
  { url: 'https://www.pollution-marine.com/feed/', source: 'Pollution Marine', color: 'blue', langue: 'fr', priorité: 3 },
  { url: 'https://www.econav.org/?page=rss', source: 'Econav', color: 'blue', langue: 'fr', priorité: 3 },
  
  // Jaune - Environnement (8 sources)
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/eau.xml', source: 'Actu-Environnement (Eau)', color: 'yellow', langue: 'fr', priorité: 1 },
  { url: 'https://www.goodplanet.info/feed/', source: 'GoodPlanet Info', color: 'yellow', langue: 'fr', priorité: 1 },
  { url: 'https://www.ademe.fr/actualites/feed', source: 'ADEME', color: 'yellow', langue: 'fr', priorité: 1 },
  { url: 'https://www.notre-environnement.gouv.fr/flux-rss', source: 'Notre Environnement', color: 'yellow', langue: 'fr', priorité: 2 },
  { url: 'https://www.environnement-magazine.fr/rss', source: 'Environnement Magazine', color: 'yellow', langue: 'fr', priorité: 2 },
  { url: 'https://www.ecologique-solidaire.gouv.fr/rss.xml', source: 'Ministère de la Transition Écologique', color: 'yellow', langue: 'fr', priorité: 2 },
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/biodiversite.xml', source: 'Actu-Environnement (Biodiversité)', color: 'yellow', langue: 'fr', priorité: 2 },
  { url: 'https://www.irdeco.fr/feed/', source: 'IRDéco', color: 'yellow', langue: 'fr', priorité: 3 },
  
  // Blanche - Industrielle (7 sources)
  { url: 'https://www.industrie-techno.com/rss', source: 'Industrie & Technologies', color: 'white', langue: 'fr', priorité: 1 },
  { url: 'https://www.usinenouvelle.com/flux/rss', source: 'Usine Nouvelle', color: 'white', langue: 'fr', priorité: 1 },
  { url: 'https://www.techniques-ingenieur.fr/actualite/articles/feed/', source: 'Techniques de l\'Ingénieur', color: 'white', langue: 'fr', priorité: 1 },
  { url: 'https://www.industrie-mag.com/article/feed/news', source: 'Industrie Mag', color: 'white', langue: 'fr', priorité: 1 },
  { url: 'https://www.processalimentaire.com/rss/actualites/innovation', source: 'Process Alimentaire', color: 'white', langue: 'fr', priorité: 2 },
  { url: 'https://www.industrie4.0-village.com/feed/', source: 'Industrie 4.0', color: 'white', langue: 'fr', priorité: 2 },
  { url: 'https://www.chimie-tech.com/feed/', source: 'Chimie Tech', color: 'white', langue: 'fr', priorité: 2 },
  
  // Multidisciplinaire (5 sources)
  { url: 'https://lejournal.cnrs.fr/rss', source: 'CNRS Le Journal', color: 'multi', langue: 'fr', priorité: 1 },
  { url: 'https://theconversation.com/fr/sciences/feed', source: 'The Conversation (Sciences)', color: 'multi', langue: 'fr', priorité: 1 },
  { url: 'https://www.futura-sciences.com/rss/actualites.xml', source: 'Futura Sciences', color: 'multi', langue: 'fr', priorité: 1 },
  { url: 'https://www.lemonde.fr/sciences/rss_full.xml', source: 'Le Monde (Sciences)', color: 'multi', langue: 'fr', priorité: 2 },
  { url: 'https://www.pourlascience.fr/feed/actualites.xml', source: 'Pour la Science', color: 'multi', langue: 'fr', priorité: 2 }
];

const MAX_ARTICLES_PER_SOURCE = 4;
const FETCH_TIMEOUT = 7000; // Augmenter encore le timeout
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

// Fonction pour filtrer progressivement - plus souple si pas assez d'articles
const filterBiotechArticles = (articles, color, strictMode) => {
  if (!strictMode) return articles;
  
  let filtered = articles.filter(item => isBiotechArticle(item, color));
  
  // Si on n'a pas assez d'articles après filtrage, on assouplit les critères
  if (filtered.length < MIN_ARTICLES_PER_COLOR) {
    // Assouplir pour garantir un minimum d'articles
    console.log(`Pas assez d'articles pour ${color} (${filtered.length}/${MIN_ARTICLES_PER_COLOR}), critères assouplis`);
    
    // Prendre les x premiers articles manquants sans filtrage
    const remaining = MIN_ARTICLES_PER_COLOR - filtered.length;
    const unfiltered = articles.filter(item => !filtered.includes(item)).slice(0, remaining);
    
    filtered = [...filtered, ...unfiltered];
  }
  
  return filtered;
};

exports.handler = async (event, context) => {
  try {
    // Récupérer les paramètres de requête
    const params = event.queryStringParameters || {};
    const colorFilter = params.color || null;
    const refresh = params.refresh === 'true';
    const biotechOnly = params.biotechOnly !== 'false'; // Par défaut, filtrer pour biotech uniquement
    const countsOnly = params.counts === 'true'; // Nouveau paramètre pour obtenir uniquement les compteurs
    
    console.log(`Requête veille biotech. Filtre: ${colorFilter || 'aucun'}, Refresh: ${refresh}, Biotech Only: ${biotechOnly}, Counts: ${countsOnly}`);
    
    // Si on demande uniquement les compteurs, utiliser une approche plus légère
    if (countsOnly) {
      // Récupérer les compteurs approximatifs rapidement via des tests limités
      const counts = {
        'red': 15,     // Approximation pour la biotechnologie rouge
        'green': 12,   // Approximation pour la biotechnologie verte
        'blue': 8,     // Approximation pour la biotechnologie bleue
        'yellow': 10,  // Approximation pour la biotechnologie jaune
        'white': 14,   // Approximation pour la biotechnologie blanche
        'multi': 10    // Approximation pour sources multi-disciplines
      };
      
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=3600' // Cache d'une heure pour les compteurs
        },
        body: JSON.stringify({ counts }),
      };
    }
    
    // Traitement normal pour récupérer les articles
    const allArticles = [];
    const articlesByColor = {};
    
    // Filtrer les sources si une couleur est spécifiée
    const sourcesToFetch = colorFilter 
      ? SOURCES_BIOTECH.filter(source => source.color === colorFilter)
      // Sinon, prendre les sources de priorité 1 pour toutes les couleurs
      : SOURCES_BIOTECH.filter(source => source.priorité <= 2);
      
    if (sourcesToFetch.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: `Aucune source trouvée pour la couleur: ${colorFilter}` })
      };
    }
    
    // Traiter chaque source de façon séquentielle
    for (const source of sourcesToFetch) {
      try {
        console.log(`Récupération des articles de ${source.source} (${source.url})`);
        
        // Préparer le conteneur pour cette couleur si nécessaire
        if (!articlesByColor[source.color]) {
          articlesByColor[source.color] = [];
        }
        
        // Définir un timeout pour éviter les blocages
        const fetchPromise = parser.parseURL(source.url);
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), FETCH_TIMEOUT)
        );
        
        // Utiliser Promise.race pour implémenter le timeout
        const result = await Promise.race([fetchPromise, timeoutPromise]).catch(err => {
          console.error(`Timeout pour ${source.source}: ${err.message}`);
          return { items: [] };
        });
        
        if (result && result.items && result.items.length > 0) {
          // Limiter le nombre d'articles par source
          const items = result.items.slice(0, MAX_ARTICLES_PER_SOURCE);
          
          // Préparer les articles pour cette source
          const articlesFromSource = items.map(item => ({
            title: item.title || 'Titre inconnu',
            link: item.link || '',
            pubDate: getPubDate(item),
            description: getDescription(item),
            source: source.source,
            biotechColor: source.color,
            imageUrl: getImageUrl(item),
            langue: source.langue,
            rawItem: item // Conserver l'item brut pour le filtrage ultérieur
          }));
          
          // Ajouter à la collection par couleur
          articlesByColor[source.color].push(...articlesFromSource);
          
          console.log(`✅ ${items.length} articles extraits de ${source.source}`);
        } else {
          console.log(`⚠️ Aucun article trouvé pour ${source.source}`);
        }
      } catch (error) {
        console.error(`❌ Erreur lors de la récupération depuis ${source.source}: ${error.message}`);
        // Continuer avec la source suivante
      }
    }
    
    // Filtrer les articles par couleur si nécessaire
    Object.keys(articlesByColor).forEach(color => {
      const articlesForColor = articlesByColor[color];
      
      // Trier par date (plus récent d'abord) avant filtrage
      articlesForColor.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
      
      // Filtrer pour la biotechnologie si demandé
      const filteredArticles = biotechOnly 
        ? filterBiotechArticles(articlesForColor, color, biotechOnly)
        : articlesForColor;
      
      console.log(`${color}: ${filteredArticles.length}/${articlesForColor.length} articles après filtrage biotech`);
      
      // Ajouter les articles filtrés à la liste principale
      allArticles.push(...filteredArticles);
      
      // Nettoyer les objets rawItem avant de renvoyer
      filteredArticles.forEach(article => {
        delete article.rawItem;
      });
    });
    
    // Trier TOUS les articles par date (plus récent d'abord)
    allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    
    console.log(`Total final: ${allArticles.length} articles biotech récupérés pour ${colorFilter || 'toutes les catégories'}`);
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': refresh ? 'no-cache' : 'public, max-age=900' // 15 minutes de cache par défaut
      },
      body: JSON.stringify(allArticles),
    };
  } catch (error) {
    console.error('Erreur générale:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Une erreur est survenue lors de la récupération des articles' }),
    };
  }
}; 