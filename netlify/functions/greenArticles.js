const axios = require('axios');
const Parser = require('rss-parser');
const parser = new Parser();

// Flux RSS pour la catégorie verte (santé et bien-être)
const GREEN_FEEDS = [
  'https://www.health.harvard.edu/blog/feed',
  'https://www.mindbodygreen.com/rss/articles.xml'
];

// Fonction pour récupérer et parser un flux RSS
async function fetchRSS(feedUrl) {
  try {
    const feed = await parser.parseURL(feedUrl);
    
    // Transformation des articles pour un format uniforme
    const articles = feed.items.map(item => ({
      title: item.title,
      link: item.link,
      date: item.pubDate || item.isoDate,
      source: feed.title,
      description: item.contentSnippet || item.content || '',
      author: item.creator || item.author || 'Unknown',
      categories: item.categories || []
    }));
    
    return articles;
  } catch (error) {
    console.error(`Erreur lors de la récupération du flux ${feedUrl}:`, error);
    return [];
  }
}

// Fonction principale
exports.handler = async (event) => {
  // Vérifier si on doit ignorer le cache
  const refresh = event.queryStringParameters && event.queryStringParameters.refresh === 'true';
  
  try {
    // Récupérer tous les articles de cette catégorie
    const promises = GREEN_FEEDS.map(feed => fetchRSS(feed));
    const articleArrays = await Promise.all(promises);
    
    // Fusionner tous les tableaux d'articles
    const allArticles = [].concat(...articleArrays);
    
    // Trier par date (plus récent d'abord)
    const sortedArticles = allArticles.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    
    // Limiter à 20 articles pour éviter de surcharger l'interface
    const limitedArticles = sortedArticles.slice(0, 20);
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        // Cache pour 30 minutes sauf si refresh=true
        'Cache-Control': refresh ? 'no-cache' : 'public, max-age=1800'
      },
      body: JSON.stringify(limitedArticles)
    };
  } catch (error) {
    console.error('Erreur lors du traitement des articles verts:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erreur lors de la récupération des articles' })
    };
  }
}; 