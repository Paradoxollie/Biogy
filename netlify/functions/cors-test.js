// Fonction Netlify pour tester la connexion CORS avec le backend
const axios = require('axios');

// URL de l'API backend
const API_URL = 'https://biogy-api.onrender.com/api';

exports.handler = async function(event, context) {
  // Définir les headers CORS permissifs
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept, Origin',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Max-Age': '86400'
  };

  // Gérer les requêtes OPTIONS (preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Récupérer l'origine de la requête
    const origin = event.headers.origin || event.headers.Origin || 'https://biogy.netlify.app';
    
    console.log(`Test CORS depuis l'origine: ${origin}`);
    
    // Tester la connexion à l'API
    const endpoints = [
      '/cors-test',
      '/health',
      '/forum/topics?page=1&limit=1'
    ];
    
    const results = {};
    
    for (const endpoint of endpoints) {
      try {
        console.log(`Test de l'endpoint: ${endpoint}`);
        
        // Ajouter un délai entre les requêtes pour éviter les problèmes de rate limiting
        if (Object.keys(results).length > 0) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        const response = await axios({
          method: 'GET',
          url: `${API_URL}${endpoint}`,
          headers: {
            'Origin': origin,
            'Content-Type': 'application/json'
          },
          timeout: 10000,
          validateStatus: () => true // Accepter tous les codes de statut
        });
        
        results[endpoint] = {
          status: response.status,
          success: response.status >= 200 && response.status < 300,
          data: response.data,
          headers: {
            'access-control-allow-origin': response.headers['access-control-allow-origin'],
            'access-control-allow-methods': response.headers['access-control-allow-methods'],
            'access-control-allow-headers': response.headers['access-control-allow-headers'],
            'access-control-allow-credentials': response.headers['access-control-allow-credentials']
          }
        };
      } catch (error) {
        results[endpoint] = {
          status: 'error',
          success: false,
          error: error.message,
          stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        };
      }
    }
    
    // Retourner les résultats
    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Test CORS',
        timestamp: new Date().toISOString(),
        origin: origin,
        results: results
      })
    };
  } catch (error) {
    console.error('Erreur lors du test CORS:', error);
    
    return {
      statusCode: 500,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Erreur lors du test CORS',
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
};
