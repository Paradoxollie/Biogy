// Fonction Netlify spécifique pour les requêtes de profil
const axios = require('axios');

// URL de l'API backend
const API_URL = 'https://biogy-api.onrender.com/api';

exports.handler = async function(event, context) {
  // Headers CORS permissifs
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept, Origin',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json'
  };

  // Gérer les requêtes OPTIONS (preflight)
  if (event.httpMethod === 'OPTIONS') {
    console.log('Handling OPTIONS preflight request for profile');
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Extraire le chemin de la requête
    const path = event.path.replace('/.netlify/functions/profile-proxy', '');
    
    // Construire l'URL complète pour le profil
    const endpoint = path ? `social/profile${path}` : 'social/profile';
    const url = `${API_URL}/${endpoint}`;
    
    console.log(`Profile Proxy: Forwarding ${event.httpMethod} request to: ${url}`);
    
    // Extraire les headers
    const authHeader = event.headers.authorization || event.headers.Authorization;
    
    // Préparer les headers pour la requête à l'API
    const apiHeaders = {
      'Content-Type': 'application/json',
      'Origin': 'https://biogy.netlify.app'
    };
    
    if (authHeader) {
      apiHeaders['Authorization'] = authHeader;
      console.log('Auth header included in request');
    } else {
      console.log('No auth header found in request');
    }
    
    // Préparer les données à envoyer
    let data = null;
    if (event.body) {
      try {
        data = JSON.parse(event.body);
        console.log('Request data:', JSON.stringify(data).substring(0, 200));
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
      validateStatus: () => true, // Accepter tous les codes de statut
      timeout: 30000 // 30 secondes
    });
    
    console.log(`Response status: ${response.status}`);
    
    // Retourner la réponse
    return {
      statusCode: response.status,
      headers,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Profile Proxy error:', error);
    
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
