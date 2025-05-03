// Fonction Netlify pour gérer les requêtes de profil en ligne
const axios = require('axios');

// URL de l'API backend
const API_URL = 'https://biogy-api.onrender.com/api';

// Proxies CORS alternatifs en cas d'échec
const CORS_PROXIES = [
  '', // Direct (pas de proxy)
  'https://corsproxy.io/?',
  'https://cors-anywhere.herokuapp.com/',
  'https://api.allorigins.win/raw?url='
];

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

  // Extraire le token d'authentification
  const authHeader = event.headers.authorization || event.headers.Authorization;
  const token = authHeader ? authHeader.replace('Bearer ', '') : null;

  // Extraire le chemin de la requête
  const path = event.path.replace('/.netlify/functions/profile-online', '');

  // Construire l'URL complète
  const baseUrl = `${API_URL}/social/profile${path}`;

  console.log(`Requête profile-online: ${event.httpMethod} ${baseUrl}`);

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

  // Données à envoyer
  const data = event.body ? JSON.parse(event.body) : undefined;

  // Essayer chaque proxy jusqu'à ce qu'un fonctionne
  let lastError = null;
  let response = null;

  for (const proxy of CORS_PROXIES) {
    try {
      const url = proxy ? `${proxy}${encodeURIComponent(baseUrl)}` : baseUrl;
      console.log(`Essai avec ${proxy ? 'proxy: ' + proxy : 'connexion directe'}`);

      response = await axios({
        method: event.httpMethod.toLowerCase(),
        url,
        headers: requestHeaders,
        data,
        validateStatus: () => true, // Accepter tous les codes de statut
        timeout: 10000 // 10 secondes de timeout
      });

      console.log(`Réponse reçue: ${response.status}`);

      // Si la requête a réussi, sortir de la boucle
      if (response.status >= 200 && response.status < 500) {
        break;
      }
    } catch (error) {
      console.error(`Erreur avec ${proxy || 'connexion directe'}:`, error.message);
      lastError = error;
    }
  }

  // Si aucun proxy n'a fonctionné
  if (!response) {
    console.error('Tous les proxies ont échoué');

    // Essayer une dernière fois avec une approche différente
    try {
      // Utiliser un proxy CORS externe comme dernier recours
      const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
      const url = `${corsAnywhereUrl}${baseUrl}`;

      console.log('Dernier essai avec cors-anywhere');

      response = await axios({
        method: event.httpMethod.toLowerCase(),
        url,
        headers: {
          ...requestHeaders,
          'X-Requested-With': 'XMLHttpRequest'
        },
        data,
        timeout: 15000
      });
    } catch (finalError) {
      console.error('Erreur finale:', finalError.message);

      // Retourner une réponse d'erreur
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          message: 'Impossible de communiquer avec le serveur après plusieurs tentatives',
          error: lastError ? lastError.message : finalError.message,
          fallback: true
        })
      };
    }
  }

  // Retourner la réponse
  return {
    statusCode: response.status,
    headers,
    body: JSON.stringify(response.data)
  };
};
