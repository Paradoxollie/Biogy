// Fonction Netlify pour mettre à jour le profil directement
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

    if (!authHeader) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({
          message: 'Authentification requise',
          error: true
        })
      };
    }

    // Construire l'URL de l'API
    const url = `${API_URL}/social/profile`;

    console.log(`Proxying request to: ${url}`);
    console.log(`Method: ${event.httpMethod}`);

    // Préparer les données à envoyer
    let requestData = {};

    if (event.body) {
      try {
        // Parser le corps de la requête
        const parsedBody = JSON.parse(event.body);
        console.log('Données reçues du frontend:', parsedBody);

        // Créer un nouvel objet avec seulement les champs nécessaires
        requestData = {
          displayName: parsedBody.displayName || '',
          bio: parsedBody.bio || '',
          specialization: parsedBody.specialization || '',
          institution: parsedBody.institution || '',
          level: parsedBody.level || 'autre',
          interests: Array.isArray(parsedBody.interests) ? parsedBody.interests : [],
          socialLinks: {
            website: parsedBody.socialLinks?.website || '',
            linkedin: parsedBody.socialLinks?.linkedin || '',
            twitter: parsedBody.socialLinks?.twitter || '',
            github: parsedBody.socialLinks?.github || '',
            researchGate: parsedBody.socialLinks?.researchGate || ''
          },
          settings: {
            emailNotifications: parsedBody.settings?.emailNotifications ?? true,
            privateProfile: parsedBody.settings?.privateProfile ?? false,
            showEmail: parsedBody.settings?.showEmail ?? false
          }
        };

        // Traiter les intérêts en fonction de leur type
        if (parsedBody.interests !== undefined) {
          try {
            if (Array.isArray(parsedBody.interests)) {
              // Si c'est déjà un tableau, l'utiliser directement
              requestData.interests = parsedBody.interests;
              console.log('interests est déjà un tableau:', requestData.interests);
            } else if (typeof parsedBody.interests === 'string') {
              // Si c'est une chaîne, la diviser en tableau
              requestData.interests = parsedBody.interests.trim()
                ? parsedBody.interests
                    .split(',')
                    .map(item => item.trim())
                    .filter(item => item)
                : [];
              console.log('interests converti de chaîne en tableau:', requestData.interests);
            } else {
              // Si ce n'est ni un tableau ni une chaîne, utiliser un tableau vide
              requestData.interests = [];
              console.log('interests n\'est ni un tableau ni une chaîne, utilisation d\'un tableau vide');
            }
          } catch (error) {
            console.error('Erreur lors du traitement des intérêts:', error);
            // En cas d'erreur, utiliser un tableau vide
            requestData.interests = [];
          }
        }

        console.log('Données préparées pour l\'API:', requestData);
      } catch (error) {
        console.error('Error parsing request body:', error);
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            message: 'Erreur lors du traitement des données',
            error: true
          })
        };
      }
    }

    // Effectuer la requête à l'API
    const response = await axios({
      method: 'PUT',
      url,
      data: requestData,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      timeout: 30000 // 30 secondes
    });

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
