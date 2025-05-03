// Fonction Netlify spécifique pour les requêtes de profil
const axios = require('axios');

// URL de l'API backend
const API_URL = 'https://biogy-api.onrender.com/api';

// Fonction pour logger les informations de débogage
const logDebug = (message, data = null) => {
  console.log(`[PROFILE-PROXY] ${message}`);
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

  // Log de la requête entrante
  logDebug('Requête entrante', {
    path: event.path,
    method: event.httpMethod,
    headers: event.headers,
    queryParams: event.queryStringParameters
  });

  // Gérer les requêtes OPTIONS (preflight)
  if (event.httpMethod === 'OPTIONS') {
    logDebug('Handling OPTIONS preflight request for profile');
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Extraire le chemin de la requête
    // Avec la nouvelle configuration, le chemin sera /api/social/profile ou /api/social/profile/...
    const path = event.path.replace('/api/social', '');
    logDebug(`Chemin de la requête: ${event.path}, chemin extrait: ${path}`);

    // Gérer les cas spéciaux
    if (path === '/test') {
      logDebug('Test de connexion demandé');
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: 'Profile proxy function is working!',
          timestamp: new Date().toISOString()
        })
      };
    }

    // Construire l'URL complète pour l'API
    // Le chemin sera /profile ou /profile/... ou vide
    const endpoint = path ? `social${path}` : 'social/profile';
    const url = `${API_URL}/${endpoint}`;

    logDebug(`Forwarding ${event.httpMethod} request to: ${url}`);

    // Extraire les headers
    const authHeader = event.headers.authorization || event.headers.Authorization;

    // Préparer les headers pour la requête à l'API
    const apiHeaders = {
      'Content-Type': 'application/json',
      'Origin': 'https://biogy.netlify.app',
      'Accept': 'application/json'
    };

    if (authHeader) {
      apiHeaders['Authorization'] = authHeader;
      logDebug('Auth header included in request');
    } else {
      logDebug('No auth header found in request');
    }

    // Préparer les données à envoyer
    let data = null;
    if (event.body) {
      try {
        data = JSON.parse(event.body);
        logDebug('Request data:', data);
      } catch (error) {
        logDebug('Error parsing request body:', { error: error.message });
      }
    }

    // Préparer les paramètres de requête
    const params = event.queryStringParameters || {};

    try {
      // Effectuer la requête à l'API
      logDebug('Sending request to API', {
        method: event.httpMethod,
        url,
        headers: apiHeaders,
        dataPresent: !!data
      });

      const response = await axios({
        method: event.httpMethod,
        url,
        headers: apiHeaders,
        data,
        params,
        validateStatus: () => true, // Accepter tous les codes de statut
        timeout: 30000 // 30 secondes
      });

      logDebug(`Response received with status: ${response.status}`);

      // Vérifier si la réponse contient des données
      if (response.data) {
        logDebug('Response data:', response.data);
      } else {
        logDebug('No data in response');
      }

      // Retourner la réponse
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify(response.data || { message: 'No data returned from API' })
      };
    } catch (apiError) {
      logDebug('API request error:', {
        message: apiError.message,
        code: apiError.code,
        response: apiError.response ? {
          status: apiError.response.status,
          data: apiError.response.data
        } : null
      });

      // Si nous avons une réponse de l'API, la retourner
      if (apiError.response) {
        return {
          statusCode: apiError.response.status,
          headers,
          body: JSON.stringify(apiError.response.data || {
            message: `API Error: ${apiError.message}`,
            error: true
          })
        };
      }

      // Sinon, retourner une erreur 500
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          message: `API Connection Error: ${apiError.message}`,
          error: true
        })
      };
    }
  } catch (error) {
    logDebug('Profile Proxy error:', {
      message: error.message,
      stack: error.stack
    });

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: `Internal Error: ${error.message}`,
        error: true
      })
    };
  }
};
