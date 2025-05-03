// Fonction Netlify pour contourner les problèmes CORS
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
    console.log('Handling OPTIONS preflight request');
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Extraire le chemin de la requête
    const path = event.path.replace('/.netlify/functions/cors-proxy', '');
    
    // Extraire les paramètres de requête
    const queryString = event.queryStringParameters 
      ? '?' + Object.entries(event.queryStringParameters)
          .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
          .join('&')
      : '';
    
    // Construire l'URL complète
    const url = `${API_URL}${path || ''}${queryString}`;
    
    console.log(`CORS Proxy: Forwarding request to: ${url}`);
    console.log(`Method: ${event.httpMethod}`);
    
    // Extraire le token d'authentification
    const authHeader = event.headers.authorization || event.headers.Authorization;
    console.log(`Auth header present: ${!!authHeader}`);
    
    // Préparer les headers pour la requête à l'API
    const apiHeaders = {
      'Content-Type': 'application/json',
      'Origin': 'https://biogy.netlify.app'
    };
    
    if (authHeader) {
      apiHeaders['Authorization'] = authHeader;
    }
    
    // Préparer les données à envoyer
    let requestData;
    if (event.body) {
      try {
        requestData = JSON.parse(event.body);
        console.log('Request data:', JSON.stringify(requestData).substring(0, 200) + '...');
        
        // Traitement spécial pour les intérêts si c'est une mise à jour de profil
        if (path.includes('/social/profile') && event.httpMethod === 'PUT') {
          if (requestData.interests !== undefined) {
            if (Array.isArray(requestData.interests)) {
              console.log('interests is already an array:', requestData.interests);
            } else if (typeof requestData.interests === 'string') {
              requestData.interests = requestData.interests.trim()
                ? requestData.interests.split(',').map(item => item.trim()).filter(Boolean)
                : [];
              console.log('interests converted from string to array:', requestData.interests);
            } else {
              requestData.interests = [];
              console.log('interests is neither array nor string, using empty array');
            }
          }
        }
      } catch (error) {
        console.error('Error parsing request body:', error);
        requestData = event.body;
      }
    }
    
    // Effectuer la requête à l'API
    const response = await axios({
      method: event.httpMethod,
      url,
      headers: apiHeaders,
      data: requestData,
      timeout: 30000, // 30 secondes
      validateStatus: () => true // Accepter tous les codes de statut
    });
    
    console.log(`Response status: ${response.status}`);
    
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
    console.error('CORS Proxy error:', error);
    
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
        error: true,
        details: error.response?.data || null
      })
    };
  }
};
