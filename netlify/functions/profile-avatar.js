// Fonction Netlify pour gérer les requêtes vers l'API d'avatar
const axios = require('axios');

// URL de l'API backend
const API_URL = 'https://biogy-api.onrender.com/api';

exports.handler = async function(event, context) {
  // Définir les headers CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
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
    // Extraire le token d'authentification
    const authHeader = event.headers.authorization || event.headers.Authorization;

    // Construire l'URL de l'API
    const endpoint = '/social/profile/avatar/predefined';
    const url = `${API_URL}${endpoint}`;

    console.log(`Proxying request to: ${url}`);
    console.log(`Method: ${event.httpMethod}`);
    console.log(`Auth header present: ${!!authHeader}`);

    // Préparer les headers pour la requête à l'API
    const apiHeaders = {
      'Content-Type': 'application/json'
    };

    if (authHeader) {
      apiHeaders['Authorization'] = authHeader;
    }

    // Préparer les options pour la requête à l'API
    const options = {
      method: event.httpMethod,
      url,
      headers: apiHeaders,
      timeout: 30000 // 30 secondes
    };

    // Ajouter le corps de la requête si nécessaire
    if (event.body) {
      try {
        options.data = JSON.parse(event.body);
      } catch (error) {
        console.error('Error parsing request body:', error);
        options.data = event.body;
      }
    }

    // Effectuer la requête à l'API
    const response = await axios(options);

    // Retourner la réponse
    return {
      statusCode: response.status,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Error proxying request:', error);

    // Extraire le message d'erreur et le code de statut
    const statusCode = error.response?.status || 500;
    const errorMessage = error.response?.data?.message || error.message || 'Internal Server Error';

    // Retourner l'erreur
    return {
      statusCode,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: errorMessage,
        error: true
      })
    };
  }
};
