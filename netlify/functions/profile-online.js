// Fonction Netlify pour gérer les requêtes de profil en ligne
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
    'Access-Control-Max-Age': '86400',
    'Content-Type': 'application/json'
  };

  // Gérer les requêtes OPTIONS (preflight)
  if (event.httpMethod === 'OPTIONS') {
    console.log('Traitement d\'une requête OPTIONS (preflight)');
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Extraire le token d'authentification
    const authHeader = event.headers.authorization || event.headers.Authorization;
    const token = authHeader ? authHeader.replace('Bearer ', '') : null;

    // Extraire le chemin de la requête
    const path = event.path.replace('/.netlify/functions/profile-online', '');
    
    // Construire l'URL complète
    const url = `${API_URL}/social/profile${path}`;
    
    console.log(`Requête profile-online: ${event.httpMethod} ${url}`);

    // Préparer les headers pour la requête au backend
    const requestHeaders = {
      'Origin': 'https://biogy.netlify.app'
    };
    
    if (token) {
      requestHeaders['Authorization'] = `Bearer ${token}`;
    }
    
    if (event.httpMethod === 'POST' || event.httpMethod === 'PUT') {
      requestHeaders['Content-Type'] = 'application/json';
    }

    // Envoyer la requête au backend
    const response = await axios({
      method: event.httpMethod.toLowerCase(),
      url,
      headers: requestHeaders,
      data: event.body ? JSON.parse(event.body) : undefined,
      validateStatus: () => true, // Accepter tous les codes de statut
      timeout: 30000 // 30 secondes de timeout
    });

    console.log(`Réponse du backend: ${response.status}`);

    // Retourner la réponse
    return {
      statusCode: response.status,
      headers,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Erreur dans profile-online:', error);
    
    // Retourner une réponse d'erreur
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: 'Erreur lors de la communication avec le serveur',
        error: error.message
      })
    };
  }
};
