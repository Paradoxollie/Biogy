// Fonction Netlify pour un proxy CORS simple et direct
const axios = require('axios');

// URL de l'API backend
const API_URL = 'https://biogy-api.onrender.com/api';

exports.handler = async function(event, context) {
  // Headers CORS permissifs
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json'
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
    // Extraire le chemin de la requête
    const path = event.path.replace('/.netlify/functions/simple-proxy', '');
    
    // Construire l'URL complète
    const url = `${API_URL}${path || ''}`;
    
    console.log(`Simple Proxy: Forwarding ${event.httpMethod} request to: ${url}`);
    
    // Extraire les headers
    const authHeader = event.headers.authorization || event.headers.Authorization;
    
    // Préparer les headers pour la requête à l'API
    const apiHeaders = {};
    if (authHeader) {
      apiHeaders['Authorization'] = authHeader;
    }
    
    // Préparer les données à envoyer
    let data = null;
    if (event.body) {
      try {
        data = JSON.parse(event.body);
      } catch (error) {
        console.error('Error parsing request body:', error);
      }
    }
    
    // Préparer les paramètres de requête
    const params = event.queryStringParameters || {};
    
    // Effectuer la requête à l'API
    const response = await axios({
      method: event.httpMethod,
      url,
      headers: apiHeaders,
      data,
      params,
      validateStatus: () => true // Accepter tous les codes de statut
    });
    
    console.log(`Response status: ${response.status}`);
    
    // Retourner la réponse
    return {
      statusCode: response.status,
      headers,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Simple Proxy error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: error.message || 'Internal Server Error',
        error: true
      })
    };
  }
};
