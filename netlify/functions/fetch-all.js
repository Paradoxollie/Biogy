const axios = require('axios');

// Configuration des URL des fonctions Netlify pour chaque couleur
const FUNCTIONS = [
  { url: '/.netlify/functions/fetch-red', color: 'red' },
  { url: '/.netlify/functions/fetch-blue', color: 'blue' },
  { url: '/.netlify/functions/fetch-green', color: 'green' }
];

exports.handler = async (event, context) => {
  try {
    const allArticles = [];
    
    // Traiter une fonction à la fois de façon séquentielle
    for (const func of FUNCTIONS) {
      try {
        console.log(`Fetching articles from ${func.color} function`);
        
        // Appeler la fonction Netlify correspondante
        const response = await axios.get(func.url, {
          baseURL: process.env.URL || 'http://localhost:8888',
          timeout: 5000 // 5 secondes de timeout
        });
        
        if (response.data && Array.isArray(response.data)) {
          console.log(`Got ${response.data.length} articles from ${func.color}`);
          allArticles.push(...response.data);
        }
      } catch (error) {
        console.error(`Error fetching ${func.color} articles: ${error.message}`);
        // Continue avec la fonction suivante
      }
    }
    
    // Trier par date (plus récent d'abord)
    allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300' // Cache de 5 minutes
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