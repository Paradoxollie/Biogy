// Fonction Netlify pour servir de proxy vers l'API backend
const axios = require('axios');

// URL de l'API backend
const API_URL = 'https://biogy-api.onrender.com/api';

// Ajouter un délai pour éviter les problèmes de rate limiting
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Nombre maximum de tentatives
const MAX_RETRIES = 3;

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

  // Extraire le chemin de l'API à partir du chemin de la fonction
  const path = event.path.replace('/.netlify/functions/api-proxy', '');

  // Log pour le débogage
  console.log(`API Proxy: ${event.httpMethod} ${path}`);
  console.log(`Origin: ${event.headers.origin || event.headers.Origin || 'unknown'}`);
  console.log(`Auth header present: ${!!(event.headers.authorization || event.headers.Authorization)}`);

  try {
    // Construire l'URL complète pour l'API backend
    const url = `${API_URL}${path}`;
    console.log(`Proxy: ${event.httpMethod} ${path} -> ${url}`);

    // Extraire les en-têtes d'autorisation
    const authHeader = event.headers.authorization || event.headers.Authorization;
    const requestHeaders = {};

    if (authHeader) {
      requestHeaders['Authorization'] = authHeader;
    }

    let lastError = null;

    // Essayer plusieurs fois avec un délai entre les tentatives
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        console.log(`Tentative ${attempt}/${MAX_RETRIES} pour ${url}`);

        if (attempt > 1) {
          // Attendre un peu plus longtemps entre chaque tentative
          const waitTime = 1000 * attempt;
          console.log(`Attente de ${waitTime}ms avant la prochaine tentative...`);
          await delay(waitTime);
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
          timeout: 10000 * attempt, // Augmenter le timeout à chaque tentative
          validateStatus: () => true // Accepter tous les codes de statut
        });

        console.log(`Réponse du backend (tentative ${attempt}): ${response.status}`);

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
        console.error(`Erreur lors de la tentative ${attempt}: ${error.message}`);
        lastError = error;
      }
    }

    // Si on arrive ici, c'est que toutes les tentatives ont échoué
    console.error(`Toutes les tentatives ont échoué pour ${url}: ${lastError?.message}`);

    // Retourner une erreur
    return {
      statusCode: 502,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Erreur lors de la connexion au backend',
        error: lastError?.message || 'Erreur inconnue',
        path: path
      })
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
        message: 'Erreur interne du serveur',
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
};
