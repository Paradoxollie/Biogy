// Fonction Netlify pour servir de proxy vers l'API backend
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
    // Extraire le chemin de l'API à partir du chemin de la fonction
    const path = event.path.replace('/.netlify/functions/api-proxy', '');

    // Construire l'URL complète pour l'API backend
    const url = `${API_URL}${path}`;

    console.log(`API Proxy: ${event.httpMethod} ${path} -> ${url}`);
    console.log(`Auth header present: ${!!(event.headers.authorization || event.headers.Authorization)}`);

    // Extraire les en-têtes d'autorisation
    const authHeader = event.headers.authorization || event.headers.Authorization;
    const requestHeaders = {};

    if (authHeader) {
      requestHeaders['Authorization'] = authHeader;
    }

    // Effectuer la requête au backend
    const response = await axios({
      method: event.httpMethod,
      url,
      headers: {
        ...requestHeaders,
        'Content-Type': 'application/json',
        'Origin': event.headers.origin || event.headers.Origin || 'https://biogy.netlify.app'
      },
      data: event.body ? JSON.parse(event.body) : undefined,
      timeout: 10000,
      validateStatus: () => true // Accepter tous les codes de statut
    });

    console.log(`Réponse du backend: ${response.status}`);

    // Retourner la réponse du backend
    return {
      statusCode: response.status,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Erreur dans la fonction API Proxy:', error);

    return {
      statusCode: 500,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Erreur lors de la connexion au backend',
        error: error.message
      })
    };
  }
};
