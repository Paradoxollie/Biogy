// Netlify Function pour proxy CORS
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
    // Extraire le chemin de la requête
    const path = event.path.replace('/.netlify/functions/proxy', '');
    
    // Construire l'URL complète
    const url = `${API_URL}${path || ''}`;
    
    // Extraire les paramètres de requête
    const queryString = event.queryStringParameters 
      ? '?' + Object.entries(event.queryStringParameters)
          .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
          .join('&')
      : '';
    
    // URL finale avec paramètres
    const fullUrl = `${url}${queryString}`;
    
    console.log(`Proxying request to: ${fullUrl}`);
    
    // Extraire les headers de la requête
    const requestHeaders = event.headers || {};
    
    // Préparer les headers pour la requête à l'API
    const apiHeaders = {
      'Content-Type': 'application/json'
    };
    
    // Ajouter le header d'autorisation s'il existe
    if (requestHeaders.authorization) {
      apiHeaders.Authorization = requestHeaders.authorization;
    }
    
    // Extraire le corps de la requête pour les méthodes POST, PUT
    let requestBody;
    if (event.body && (event.httpMethod === 'POST' || event.httpMethod === 'PUT')) {
      try {
        requestBody = JSON.parse(event.body);
      } catch (e) {
        requestBody = event.body;
      }
    }
    
    // Faire la requête à l'API
    const response = await axios({
      method: event.httpMethod,
      url: fullUrl,
      headers: apiHeaders,
      data: requestBody,
      validateStatus: () => true // Accepter tous les codes de statut
    });
    
    // Retourner la réponse
    return {
      statusCode: response.status,
      headers: {
        ...headers,
        'Content-Type': response.headers['content-type'] || 'application/json'
      },
      body: typeof response.data === 'object' 
        ? JSON.stringify(response.data) 
        : response.data
    };
  } catch (error) {
    console.error('Proxy error:', error);
    
    // Retourner l'erreur
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Proxy Error',
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
};
