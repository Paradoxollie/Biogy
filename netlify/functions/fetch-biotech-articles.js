const Parser = require('rss-parser');
const parser = new Parser({
  customFields: {
    item: [
      ['description', 'description'],
      ['content:encoded', 'contentEncoded'], // Handle potential content field
      ['pubDate', 'pubDate'],
      ['dc:date', 'dcDate'], // Handle alternate date field (Dublin Core)
      ['isoDate', 'isoDate'], // Often added by rss-parser
      ['media:content', 'mediaContent'], // Extract media content
      ['enclosure', 'enclosure'], // Handle enclosures (often contain images)
      ['media:thumbnail', 'mediaThumbnail'], // Extract media thumbnails
      ['media:group', 'mediaGroup'], // Extract media groups
      ['image', 'image'], // Direct image field
      ['thumbnail', 'thumbnail'], // Thumbnail field
      ['featured_image', 'featuredImage'], // WordPress and some others
      ['wp:featuredmedia', 'wpFeaturedMedia'], // WordPress
    ],
    feed: [
      ['image', 'feedImage'], // Feed level image
    ]
  }
});

// --- Configuration ---
const FEEDS = [
  // Sélection des sources les plus fiables par catégorie (réduites pour éviter le timeout)
  // Général / Multi-couleurs
  { id: 'cnrs', url: 'https://lejournal.cnrs.fr/rss', source: 'CNRS Le Journal', color: 'multi' },
  { id: 'conversation_sci', url: 'https://theconversation.com/fr/sciences/feed', source: 'The Conversation (Sciences)', color: 'multi' },
  
  // Verte
  { id: 'inrae', url: 'https://www.inrae.fr/flux/actualites/all/rss.xml', source: 'INRAE', color: 'green' },
  { id: 'actu_env_agro', url: 'https://www.actu-environnement.com/feeds/rss/ae/agronomie.xml', source: 'Actu-Environnement (Agronomie)', color: 'green' },
  
  // Rouge
  { id: 'inserm', url: 'https://presse.inserm.fr/feed/', source: 'INSERM', color: 'red' },
  { id: 'sciences_avenir', url: 'https://www.sciencesetavenir.fr/sante/rss.xml', source: 'Sciences et Avenir (Santé)', color: 'red' },
  
  // Blanche
  { id: 'usine_nouvelle', url: 'https://www.usinenouvelle.com/flux/rss', source: 'Usine Nouvelle (Général)', color: 'white' },
  { id: 'industrie_techno', url: 'https://www.industrie-techno.com/rss', source: 'Industrie & Technologies', color: 'white' },
  
  // Jaune
  { id: 'actu_env_eau', url: 'https://www.actu-environnement.com/feeds/rss/ae/eau.xml', source: 'Actu-Environnement (Eau)', color: 'yellow' },
  { id: 'goodplanet', url: 'https://www.goodplanet.info/feed/', source: 'GoodPlanet Info', color: 'yellow' },
  
  // Bleue
  { id: 'mer_marine', url: 'https://www.meretmarine.com/fr/rss.xml', source: 'Mer et Marine', color: 'blue' },
  { id: 'actu_env_mer', url: 'https://www.actu-environnement.com/feeds/rss/ae/mer-littoral.xml', source: 'Actu-Environnement (Mer)', color: 'blue' },
  
  // Noir
  { id: 'conversation_edu', url: 'https://theconversation.com/fr/education/feed', source: 'The Conversation (Éducation)', color: 'black' },
  { id: 'vousnousils', url: 'https://www.vousnousils.fr/feed', source: 'VousNousIls (Éducation)', color: 'black' },
];

// Max articles par flux et timeout pour les requêtes
const MAX_ARTICLES_PER_FEED = 5;
const FETCH_TIMEOUT = 3000; // 3 secondes de timeout par requête
const MAX_FEEDS_PER_REQUEST = 2; // Nombre maximum de flux à traiter par requête

// Système de cache pour éviter de requêter les flux à chaque fois
let CACHE = {
  // Structure: { feedId: { data: [...articles], timestamp: Date.now() } }
};
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes en millisecondes

// Helper to extract description (handles variations)
const getDescription = (item) => {
  let desc = item.description || item.contentEncoded || item.content || '';
  // Basic HTML tag removal (more robust parsing might be needed if complex HTML exists)
  desc = desc.replace(/<[^>]*>/g, '').trim();
  return desc;
};

// Helper to extract publication date (handles variations)
const getPubDate = (item) => {
  return item.pubDate || item.dcDate || item.isoDate || new Date().toISOString(); // Fallback to now if no date
};

// Helper to extract image URL from various RSS formats
const getImageUrl = (item) => {
  // Try to extract from media:content
  if (item.mediaContent) {
    if (item.mediaContent.$ && item.mediaContent.$.url) {
      return item.mediaContent.$.url;
    } else if (typeof item.mediaContent === 'string') {
      return item.mediaContent;
    }
  }
  
  // Try to extract from enclosure
  if (item.enclosure) {
    if (item.enclosure.url) {
      return item.enclosure.url;
    } else if (item.enclosure.$ && item.enclosure.$.url) {
      return item.enclosure.$.url;
    }
  }

  // Try extracting from media:thumbnail
  if (item.mediaThumbnail) {
    if (item.mediaThumbnail.$ && item.mediaThumbnail.$.url) {
      return item.mediaThumbnail.$.url;
    } else if (typeof item.mediaThumbnail === 'string') {
      return item.mediaThumbnail;
    }
  }

  // Try extracting from media:group
  if (item.mediaGroup && item.mediaGroup['media:content'] && 
      item.mediaGroup['media:content'].length > 0 && 
      item.mediaGroup['media:content'][0].$ && 
      item.mediaGroup['media:content'][0].$.url) {
    return item.mediaGroup['media:content'][0].$.url;
  }

  // Try direct image field
  if (item.image) {
    if (typeof item.image === 'string') {
      return item.image;
    } else if (item.image.url) {
      return item.image.url;
    }
  }

  // Try thumbnail field
  if (item.thumbnail) {
    if (typeof item.thumbnail === 'string') {
      return item.thumbnail;
    } else if (item.thumbnail.url) {
      return item.thumbnail.url;
    }
  }

  // Try featured image (WordPress and some others)
  if (item.featuredImage) {
    return item.featuredImage;
  }

  // Try WordPress featured media
  if (item.wpFeaturedMedia && item.wpFeaturedMedia.url) {
    return item.wpFeaturedMedia.url;
  }

  // Try common RSS extension for image
  if (item['media:thumbnail'] && item['media:thumbnail'].$ && item['media:thumbnail'].$.url) {
    return item['media:thumbnail'].$.url;
  }

  // Try to get image from categories field that sometimes contains image URLs
  if (item.categories && Array.isArray(item.categories)) {
    for (const category of item.categories) {
      if (category && typeof category === 'string' && (category.endsWith('.jpg') || category.endsWith('.jpeg') || category.endsWith('.png'))) {
        return category;
      }
    }
  }

  // Try to extract the first image from HTML content
  const content = item.contentEncoded || item.description || item.content || '';
  // Look for <img> tag with src attribute
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }

  // Look for figure with image inside
  const figureMatch = content.match(/<figure[^>]*>.*?<img[^>]+src=["']([^"']+)["']/is);
  if (figureMatch && figureMatch[1]) {
    return figureMatch[1];
  }

  // For WordPress feeds, try to find the first image in media
  if (item['wp:featuredmedia'] && item['wp:featuredmedia'].url) {
    return item['wp:featuredmedia'].url;
  }

  // If no image URL is found, return null
  return null;
};

// Fonction pour récupérer des articles à partir d'un flux spécifique
const fetchFeedArticles = async (feedInfo) => {
  try {
    // Vérifier si nous avons ce flux en cache
    if (CACHE[feedInfo.id] && CACHE[feedInfo.id].timestamp > Date.now() - CACHE_DURATION) {
      console.log(`Using cached data for feed: ${feedInfo.source}`);
      return CACHE[feedInfo.id].data;
    }
    
    console.log(`- Fetching ${feedInfo.source} (${feedInfo.url})`);
    const feed = await parser.parseURL(feedInfo.url, { timeout: FETCH_TIMEOUT });
    
    console.log(`  - Parsed ${feed.items?.length || 0} items from ${feedInfo.source}`);
    const articles = [];
    
    if (feed.items) {
      // Limit the number of articles per feed
      const limitedItems = feed.items.slice(0, MAX_ARTICLES_PER_FEED); 
      
      limitedItems.forEach(item => {
        articles.push({
          title: item.title || 'Titre inconnu',
          link: item.link || '',
          pubDate: getPubDate(item),
          description: getDescription(item),
          source: feedInfo.source,
          biotechColor: feedInfo.color,
          imageUrl: getImageUrl(item), // Extract image URL
          feedId: feedInfo.id
        });
      });
    }
    
    // Sauvegarder dans le cache
    CACHE[feedInfo.id] = {
      data: articles,
      timestamp: Date.now()
    };
    
    return articles;
  } catch (error) {
    console.error(`  - Error fetching feed ${feedInfo.source}: ${error.message}`);
    return []; // Retourner un tableau vide en cas d'erreur
  }
};

// Fonction pour nettoyer le cache des anciennes entrées
const cleanupCache = () => {
  const now = Date.now();
  Object.keys(CACHE).forEach(key => {
    if (CACHE[key].timestamp < now - CACHE_DURATION) {
      console.log(`Cleaning up expired cache for: ${key}`);
      delete CACHE[key];
    }
  });
};

// --- Netlify Function Handler ---
exports.handler = async (event, context) => {
  try {
    // Extraire les paramètres de la requête
    const params = event.queryStringParameters || {};
    const colorFilter = params.color || null; // Paramètre de filtrage par couleur
    const skipCache = params.skipCache === 'true'; // Paramètre pour forcer le rafraîchissement
    const feedIds = params.feeds ? params.feeds.split(',') : null; // Liste spécifique de flux à récupérer
    const batch = parseInt(params.batch || '0', 10); // Numéro du lot (pour le chargement progressif)
    
    // Nettoyer le cache des entrées expirées
    cleanupCache();
    
    // Si skip_cache est true, nous nettoyons le cache pour les flux demandés
    if (skipCache && feedIds) {
      feedIds.forEach(id => {
        if (CACHE[id]) {
          console.log(`Clearing cache for feed: ${id}`);
          delete CACHE[id];
        }
      });
    }
    
    let articlesToReturn = [];
    let feedsToProcess = [];
    
    // Déterminer quels flux traiter
    if (feedIds) {
      // Si une liste spécifique de flux est fournie, nous les récupérons
      feedsToProcess = FEEDS.filter(feed => feedIds.includes(feed.id));
      console.log(`Processing specific feeds: ${feedsToProcess.map(f => f.id).join(', ')}`);
    } else if (colorFilter) {
      // Si un filtre de couleur est spécifié
      feedsToProcess = FEEDS.filter(feed => feed.color === colorFilter);
      console.log(`Processing feeds for color: ${colorFilter}`);
      
      // Appliquer la pagination pour éviter les timeouts
      const startIndex = batch * MAX_FEEDS_PER_REQUEST;
      const endIndex = startIndex + MAX_FEEDS_PER_REQUEST;
      
      // Pour le premier lot, inclure également des infos sur tous les lots disponibles
      if (batch === 0) {
        const totalFeeds = feedsToProcess.length;
        const totalBatches = Math.ceil(totalFeeds / MAX_FEEDS_PER_REQUEST);
        
        // Réduire à juste ce lot
        feedsToProcess = feedsToProcess.slice(startIndex, endIndex);
        
        // Inclure les métadonnées sur les lots
        const metadata = {
          totalFeeds,
          totalBatches,
          currentBatch: batch,
          feedsInCurrentBatch: feedsToProcess.length,
          allFeedIds: FEEDS.filter(feed => feed.color === colorFilter).map(feed => feed.id),
          batchSize: MAX_FEEDS_PER_REQUEST
        };
        
        console.log(`Batch ${batch}/${totalBatches-1}: Processing ${feedsToProcess.length} feeds`);
        
        // Traiter les flux pour ce lot
        const promises = feedsToProcess.map(feed => fetchFeedArticles(feed));
        const results = await Promise.all(promises);
        
        // Combiner tous les articles
        articlesToReturn = results.flat();
        
        // Trier par date (plus récent d'abord)
        articlesToReturn.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
        
        return {
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=300' // Cache côté client de 5 minutes
          },
          body: JSON.stringify({
            articles: articlesToReturn,
            metadata
          }),
        };
      } else {
        // Pour les lots suivants, juste retourner les articles
        feedsToProcess = feedsToProcess.slice(startIndex, endIndex);
        console.log(`Batch ${batch}: Processing ${feedsToProcess.length} feeds`);
      }
    } else {
      // Si aucun filtre ou feedIds, limiter à un nombre sûr de flux
      feedsToProcess = FEEDS.slice(0, MAX_FEEDS_PER_REQUEST);
      console.log(`No filter specified, processing first ${MAX_FEEDS_PER_REQUEST} feeds only`);
    }
    
    // Traiter les flux sélectionnés
    const promises = feedsToProcess.map(feed => fetchFeedArticles(feed));
    const results = await Promise.all(promises);
    
    // Combiner tous les articles
    articlesToReturn = results.flat();
    
    // Trier par date (plus récent d'abord)
    articlesToReturn.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300' // Cache côté client de 5 minutes
      },
      body: JSON.stringify({
        articles: articlesToReturn
      }),
    };
  } catch (error) {
    console.error('Error in fetch-biotech-articles function:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
}; 