// Fonction Netlify pour tester la connexion API
const axios = require('axios');

// URL de l'API backend
const API_URL = 'https://biogy-api.onrender.com/api';

exports.handler = async function(event, context) {
  // Définir les headers CORS permissifs
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept, Origin',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
    'Access-Control-Allow-Credentials': 'true'
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
    // Tester la connexion à l'API
    console.log('Test de connexion à l\'API...');
    
    // Tester l'endpoint de santé
    const healthResponse = await axios({
      method: 'GET',
      url: `${API_URL}/health`,
      timeout: 5000,
      validateStatus: () => true
    });
    
    // Tester l'endpoint du forum
    const forumResponse = await axios({
      method: 'GET',
      url: `${API_URL}/forum/topics?page=1&limit=1`,
      timeout: 5000,
      validateStatus: () => true
    });
    
    // Tester l'endpoint du profil (sans authentification)
    const profileResponse = await axios({
      method: 'GET',
      url: `${API_URL}/social/profile/public`,
      timeout: 5000,
      validateStatus: () => true
    });
    
    // Retourner les résultats
    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Test de connexion API',
        timestamp: new Date().toISOString(),
        results: {
          health: {
            status: healthResponse.status,
            success: healthResponse.status >= 200 && healthResponse.status < 300,
            data: healthResponse.data
          },
          forum: {
            status: forumResponse.status,
            success: forumResponse.status >= 200 && forumResponse.status < 300,
            data: forumResponse.data
          },
          profile: {
            status: profileResponse.status,
            success: profileResponse.status >= 200 && profileResponse.status < 300,
            data: profileResponse.data
          }
        }
      })
    };
  } catch (error) {
    console.error('Erreur lors du test de connexion API:', error);
    
    return {
      statusCode: 500,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Erreur lors du test de connexion API',
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
};
