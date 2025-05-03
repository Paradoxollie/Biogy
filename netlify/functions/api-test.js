// Fonction Netlify simple pour tester l'accès aux fonctions Netlify
// et servir de proxy pour les requêtes de profil
const axios = require('axios');

// URL de l'API backend
const API_URL = 'https://biogy-api.onrender.com/api';

// Fonction pour logger les informations de débogage
const logDebug = (message, data = null) => {
  console.log(`[API-TEST] ${message}`);
  if (data) {
    console.log(JSON.stringify(data, null, 2).substring(0, 500));
  }
};

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
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Récupérer les informations sur la requête
  const requestInfo = {
    path: event.path,
    method: event.httpMethod,
    headers: event.headers,
    queryParams: event.queryStringParameters || {},
    body: event.body ? JSON.parse(event.body) : null
  };

  logDebug('Requête reçue', requestInfo);

  // Si c'est une requête POST avec une action spécifique, la traiter
  if (event.httpMethod === 'POST' && event.body) {
    try {
      const body = JSON.parse(event.body);

      // Si c'est une action fetchProfile, essayer de récupérer le profil
      if (body.action === 'fetchProfile') {
        logDebug('Action fetchProfile détectée', { userId: body.userId, hasToken: !!body.token });

        try {
          // Construire l'URL pour récupérer le profil
          const endpoint = body.userId ? `social/profile/${body.userId}` : 'social/profile';
          const url = `${API_URL}/${endpoint}`;

          // Préparer les headers pour la requête à l'API
          const apiHeaders = {
            'Content-Type': 'application/json',
            'Origin': 'https://biogy.netlify.app'
          };

          // Ajouter le header d'autorisation s'il existe
          if (body.token) {
            apiHeaders['Authorization'] = `Bearer ${body.token}`;
            logDebug('Token inclus dans la requête');
          }

          logDebug('Envoi de la requête à l\'API', { url, method: 'GET' });

          // Faire la requête à l'API
          const response = await axios({
            method: 'GET',
            url,
            headers: apiHeaders,
            timeout: 10000
          });

          logDebug('Réponse reçue de l\'API', { status: response.status });

          // Retourner la réponse
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
              message: 'Profil récupéré avec succès',
              profile: response.data,
              timestamp: new Date().toISOString()
            })
          };
        } catch (error) {
          logDebug('Erreur lors de la récupération du profil', {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data
          });

          // Retourner une erreur
          return {
            statusCode: error.response?.status || 500,
            headers,
            body: JSON.stringify({
              message: `Erreur lors de la récupération du profil: ${error.message}`,
              error: true,
              timestamp: new Date().toISOString()
            })
          };
        }
      }
    } catch (parseError) {
      logDebug('Erreur lors du parsing du body', { message: parseError.message });
    }
  }

  // Retourner une réponse avec les informations sur la requête
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      message: 'API Test function is working!',
      timestamp: new Date().toISOString(),
      request: requestInfo,
      availableFunctions: [
        'api-test',
        'profile-proxy',
        'test-profile'
      ]
    })
  };
};
