// Fonction Netlify pour gérer les requêtes vers l'API de profil
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
    // Extraire le token d'authentification
    const authHeader = event.headers.authorization || event.headers.Authorization;

    // Construire l'URL de l'API
    const endpoint = '/social/profile';
    const url = `${API_URL}${endpoint}`;

    console.log(`Proxying request to: ${url}`);
    console.log(`Method: ${event.httpMethod}`);
    console.log(`Auth header present: ${!!authHeader}`);

    // Préparer les headers pour la requête à l'API
    const apiHeaders = {
      'Content-Type': 'application/json'
    };

    if (authHeader) {
      apiHeaders['Authorization'] = authHeader;
    }

    // Préparer les options pour la requête à l'API
    const options = {
      method: event.httpMethod,
      url,
      headers: apiHeaders,
      timeout: 30000 // 30 secondes
    };

    // Ajouter le corps de la requête si nécessaire
    if (event.body) {
      try {
        const parsedBody = JSON.parse(event.body);

        // Vérifier et traiter les intérêts
        if (parsedBody.interests !== undefined) {
          console.log('Type de interests dans la requête:', typeof parsedBody.interests, Array.isArray(parsedBody.interests));

          try {
            // S'assurer que interests est un tableau
            if (Array.isArray(parsedBody.interests)) {
              // Déjà un tableau, ne rien faire
              console.log('interests est déjà un tableau:', parsedBody.interests);
            } else if (typeof parsedBody.interests === 'string') {
              // Convertir la chaîne en tableau
              console.log('Conversion de interests de chaîne en tableau');
              parsedBody.interests = parsedBody.interests
                .split(',')
                .map(item => item.trim())
                .filter(item => item);
              console.log('interests après conversion:', parsedBody.interests);
            } else {
              // Ni un tableau ni une chaîne, utiliser un tableau vide
              console.log('interests n\'est ni un tableau ni une chaîne, utilisation d\'un tableau vide');
              parsedBody.interests = [];
            }
          } catch (interestsError) {
            console.error('Erreur lors du traitement des intérêts:', interestsError);
            // En cas d'erreur, utiliser un tableau vide
            parsedBody.interests = [];
          }
        }

        options.data = parsedBody;
        console.log('Données à envoyer à l\'API:', options.data);
      } catch (error) {
        console.error('Error parsing request body:', error);
        options.data = event.body;
      }
    }

    // Effectuer la requête à l'API
    const response = await axios(options);

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
    console.error('Error proxying request:', error);

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
        error: true
      })
    };
  }
};
