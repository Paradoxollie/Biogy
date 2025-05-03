// Fonction Netlify pour contourner les problèmes CORS
const axios = require('axios');

// URL de l'API backend
const API_URL = 'https://biogy-api.onrender.com/api';

// Ajouter un délai pour éviter les problèmes de rate limiting
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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
    console.log('Handling OPTIONS preflight request');
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Log pour le débogage
  console.log(`CORS Proxy: Received ${event.httpMethod} request for ${event.path}`);
  console.log(`Origin: ${event.headers.origin || event.headers.Origin || 'unknown'}`);
  console.log(`Auth header present: ${!!(event.headers.authorization || event.headers.Authorization)}`);


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

    // Effectuer la requête à l'API avec retry
    let retries = 3;
    let response;
    let lastError;

    while (retries > 0) {
      try {
        console.log(`Tentative d'appel API (${4-retries}/3): ${url}`);

        response = await axios({
          method: event.httpMethod,
          url,
          headers: apiHeaders,
          data: requestData,
          timeout: 30000, // 30 secondes
          validateStatus: () => true // Accepter tous les codes de statut
        });

        console.log(`Response status: ${response.status}`);

        // Si la réponse est OK, sortir de la boucle
        if (response.status >= 200 && response.status < 300) {
          break;
        }

        // Si la réponse est une erreur 5xx, retenter
        if (response.status >= 500) {
          lastError = new Error(`Server error: ${response.status}`);
          retries--;
          if (retries > 0) {
            console.log(`Retrying due to server error (${response.status})...`);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Attendre 1 seconde
            continue;
          }
        } else {
          // Pour les autres erreurs, ne pas retenter
          break;
        }
      } catch (error) {
        console.error(`Erreur lors de l'appel API:`, error);
        lastError = error;
        retries--;

        if (retries > 0) {
          console.log(`Retrying due to error: ${error.message}...`);
          await new Promise(resolve => setTimeout(resolve, 1000)); // Attendre 1 seconde
        }
      }
    }

    // Si aucune réponse n'a été obtenue après toutes les tentatives
    if (!response) {
      throw lastError || new Error('Failed to get response after multiple attempts');
    }

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
