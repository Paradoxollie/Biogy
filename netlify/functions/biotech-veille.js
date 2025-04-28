const Parser = require('rss-parser');
const parser = new Parser();

// Sources françaises de biotechnologie par catégorie
const SOURCES_BIOTECH = [
  // Rouge - Santé/Médecine
  { url: 'https://presse.inserm.fr/feed/', source: 'INSERM', color: 'red', langue: 'fr' },
  { url: 'https://www.sciencesetavenir.fr/sante/rss.xml', source: 'Sciences et Avenir (Santé)', color: 'red', langue: 'fr' },
  
  // Verte - Agronomie
  { url: 'https://www.inrae.fr/flux/actualites/all/rss.xml', source: 'INRAE', color: 'green', langue: 'fr' },
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/agronomie.xml', source: 'Actu-Environnement (Agronomie)', color: 'green', langue: 'fr' },
  
  // Bleue - Marine
  { url: 'https://www.meretmarine.com/fr/rss.xml', source: 'Mer et Marine', color: 'blue', langue: 'fr' },
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/mer-littoral.xml', source: 'Actu-Environnement (Mer)', color: 'blue', langue: 'fr' },
  
  // Jaune - Environnement
  { url: 'https://www.actu-environnement.com/feeds/rss/ae/eau.xml', source: 'Actu-Environnement (Eau)', color: 'yellow', langue: 'fr' },
  { url: 'https://www.goodplanet.info/feed/', source: 'GoodPlanet Info', color: 'yellow', langue: 'fr' },
  
  // Blanche - Industrielle
  { url: 'https://www.industrie-techno.com/rss', source: 'Industrie & Technologies', color: 'white', langue: 'fr' },
  { url: 'https://www.usinenouvelle.com/flux/rss', source: 'Usine Nouvelle', color: 'white', langue: 'fr' },
  
  // Multidisciplinaire
  { url: 'https://lejournal.cnrs.fr/rss', source: 'CNRS Le Journal', color: 'multi', langue: 'fr' },
  { url: 'https://theconversation.com/fr/sciences/feed', source: 'The Conversation (Sciences)', color: 'multi', langue: 'fr' }
];

const MAX_ARTICLES_PER_SOURCE = 5;
const FETCH_TIMEOUT = 4000;

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

exports.handler = async (event, context) => {
  try {
    // Récupérer les paramètres de requête
    const params = event.queryStringParameters || {};
    const colorFilter = params.color || null;
    const refresh = params.refresh === 'true';
    
    console.log(`Requête veille biotech. Filtre: ${colorFilter || 'aucun'}, Refresh: ${refresh}`);
    
    const allArticles = [];
    
    // Filtrer les sources si une couleur est spécifiée
    const sourcesToFetch = colorFilter 
      ? SOURCES_BIOTECH.filter(source => source.color === colorFilter)
      : SOURCES_BIOTECH;
      
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
        
        // Définir un timeout pour éviter les blocages
        const fetchPromise = parser.parseURL(source.url);
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), FETCH_TIMEOUT)
        );
        
        // Utiliser Promise.race pour implémenter le timeout
        const result = await Promise.race([fetchPromise, timeoutPromise]);
        
        if (result && result.items) {
          const items = result.items.slice(0, MAX_ARTICLES_PER_SOURCE);
          
          items.forEach(item => {
            allArticles.push({
              title: item.title || 'Titre inconnu',
              link: item.link || '',
              pubDate: getPubDate(item),
              description: getDescription(item),
              source: source.source,
              biotechColor: source.color,
              imageUrl: getImageUrl(item),
              langue: source.langue
            });
          });
          
          console.log(`✅ ${items.length} articles récupérés de ${source.source}`);
        }
      } catch (error) {
        console.error(`❌ Erreur lors de la récupération depuis ${source.source}: ${error.message}`);
        // Continuer avec la source suivante
      }
    }
    
    // Trier par date (plus récent d'abord)
    allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    
    console.log(`Total: ${allArticles.length} articles récupérés pour ${colorFilter || 'toutes les catégories'}`);
    
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