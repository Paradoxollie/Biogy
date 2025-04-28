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
  { url: 'https://lejournal.cnrs.fr/rss', source: 'CNRS Le Journal', color: 'multi' },
  { url: 'https://theconversation.com/fr/sciences/feed', source: 'The Conversation (Sciences)', color: 'multi' },
  
  // Verte
  { url: 'https://www.inrae.fr/flux/actualites/all/rss.xml', source: 'INRAE', color: 'green' },
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/agronomie.xml', source: 'Actu-Environnement (Agronomie)', color: 'green' },
  
  // Rouge
  { url: 'https://presse.inserm.fr/feed/', source: 'INSERM', color: 'red' },
  { url: 'https://www.sciencesetavenir.fr/sante/rss.xml', source: 'Sciences et Avenir (Santé)', color: 'red' },
  
  // Blanche
  { url: 'https://www.usinenouvelle.com/flux/rss', source: 'Usine Nouvelle (Général)', color: 'white' },
  { url: 'https://www.industrie-techno.com/rss', source: 'Industrie & Technologies', color: 'white' },
  
  // Jaune
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/eau.xml', source: 'Actu-Environnement (Eau)', color: 'yellow' },
  { url: 'https://www.goodplanet.info/feed/', source: 'GoodPlanet Info', color: 'yellow' },
  
  // Bleue
  { url: 'https://www.meretmarine.com/fr/rss.xml', source: 'Mer et Marine', color: 'blue' },
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/mer-littoral.xml', source: 'Actu-Environnement (Mer)', color: 'blue' },
  
  // Noir
  { url: 'https://theconversation.com/fr/education/feed', source: 'The Conversation (Éducation)', color: 'black' },
  { url: 'https://www.vousnousils.fr/feed', source: 'VousNousIls (Éducation)', color: 'black' },
];

// Max articles par flux et timeout pour les requêtes
const MAX_ARTICLES_PER_FEED = 5;
const FETCH_TIMEOUT = 3000; // 3 secondes de timeout par requête

// Système de cache pour éviter de requêter les flux à chaque fois
let CACHE = {
  // Structure: { color: { data: [...articles], timestamp: Date.now() } }
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

// Fonction pour récupérer les articles par couleur (avec cache)
const fetchArticlesByColor = async (colorFilter) => {
  // Vérifier si nous avons des données en cache pour cette couleur
  const cacheKey = colorFilter || 'all';
  if (CACHE[cacheKey] && CACHE[cacheKey].timestamp > Date.now() - CACHE_DURATION) {
    console.log(`Using cached data for color: ${cacheKey}`);
    return CACHE[cacheKey].data;
  }
  
  console.log(`Cache miss or expired for color: ${cacheKey}, fetching fresh data...`);
  
  // Filtrer les feeds par couleur si un filtre est spécifié
  const filteredFeeds = colorFilter ? FEEDS.filter(feed => feed.color === colorFilter) : FEEDS;
  
  console.log(`Fetching ${filteredFeeds.length} feeds for color: ${cacheKey}...`);
  const allArticles = [];
  
  // Plutôt que d'envoyer toutes les requêtes en parallèle, nous les traitons en série
  // Ce qui est plus lent mais garantit de ne pas dépasser les limites de Netlify
  for (const feedInfo of filteredFeeds) {
    try {
      console.log(`- Fetching ${feedInfo.source} (${feedInfo.url})`);
      const feed = await parser.parseURL(feedInfo.url, { timeout: FETCH_TIMEOUT });
      
      console.log(`  - Parsed ${feed.items?.length || 0} items from ${feedInfo.source}`);
      if (feed.items) {
        // Limit the number of articles per feed
        const limitedItems = feed.items.slice(0, MAX_ARTICLES_PER_FEED); 
        
        limitedItems.forEach(item => {
          allArticles.push({
            title: item.title || 'Titre inconnu',
            link: item.link || '',
            pubDate: getPubDate(item),
            description: getDescription(item),
            source: feedInfo.source,
            biotechColor: feedInfo.color,
            imageUrl: getImageUrl(item), // Extract image URL
          });
        });
      }
    } catch (error) {
      console.error(`  - Error fetching or parsing feed ${feedInfo.source} (${feedInfo.url}):`, error.message);
      // Continue with next feed
    }
  }
  
  console.log(`Total articles collected for color ${cacheKey}: ${allArticles.length}`);
  
  // Sort articles by date (most recent first)
  allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  
  // Save to cache
  CACHE[cacheKey] = {
    data: allArticles,
    timestamp: Date.now()
  };
  
  return allArticles;
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
    
    console.log(`Fetching articles with color filter: ${colorFilter || 'none (all colors)'}, skipCache: ${skipCache}`);
    
    // Nettoyer le cache des entrées expirées
    cleanupCache();
    
    // Si skip_cache est true, nous ignorons le cache
    if (skipCache && CACHE[colorFilter || 'all']) {
      console.log(`Clearing cache for: ${colorFilter || 'all'}`);
      delete CACHE[colorFilter || 'all'];
    }
    
    // Récupérer les articles (du cache ou frais)
    const articles = await fetchArticlesByColor(colorFilter);
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300' // Cache côté client de 5 minutes
      },
      body: JSON.stringify(articles),
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