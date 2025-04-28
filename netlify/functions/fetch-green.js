const Parser = require('rss-parser');
const parser = new Parser();

// Seulement 2 sources pour la biotechnologie verte
const FEEDS = [
  { url: 'https://www.inrae.fr/flux/actualites/all/rss.xml', source: 'INRAE', color: 'green' },
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/agronomie.xml', source: 'Actu-Environnement (Agronomie)', color: 'green' },
];

const MAX_ARTICLES_PER_FEED = 5;
const FETCH_TIMEOUT = 3000;

// Fonctions utilitaires
const getDescription = (item) => {
  let desc = item.description || item.contentEncoded || item.content || '';
  desc = desc.replace(/<[^>]*>/g, '').trim();
  return desc;
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
  if (item.enclosure && item.enclosure.url && item.enclosure.type && item.enclosure.type.startsWith('image/')) {
    return item.enclosure.url;
  }
  
  return null;
};

exports.handler = async (event, context) => {
  try {
    const allArticles = [];
    
    // Traiter un flux à la fois de façon séquentielle
    for (const feed of FEEDS) {
      try {
        console.log(`Fetching ${feed.source}: ${feed.url}`);
        const result = await parser.parseURL(feed.url, { timeout: FETCH_TIMEOUT });
        
        if (result.items) {
          const items = result.items.slice(0, MAX_ARTICLES_PER_FEED);
          
          items.forEach(item => {
            allArticles.push({
              title: item.title || 'Titre inconnu',
              link: item.link || '',
              pubDate: getPubDate(item),
              description: getDescription(item),
              source: feed.source,
              biotechColor: feed.color,
              imageUrl: getImageUrl(item),
            });
          });
        }
      } catch (error) {
        console.error(`Error fetching ${feed.source}: ${error.message}`);
        // Continue with next feed
      }
    }
    
    // Trier par date (plus récent d'abord)
    allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300'
      },
      body: JSON.stringify(allArticles),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Function failed' }),
    };
  }
}; 