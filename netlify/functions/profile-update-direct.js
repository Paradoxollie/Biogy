// Fonction Netlify pour mettre à jour le profil directement
const axios = require('axios');

// URL de l'API backend
const API_URL = 'https://biogy.onrender.com/api';

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
          interests: [], // Forcer un tableau vide pour éviter les problèmes
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
        
        // Si des intérêts sont fournis et que c'est une chaîne, la convertir en tableau
        if (typeof parsedBody.interests === 'string' && parsedBody.interests.trim()) {
          requestData.interests = parsedBody.interests
            .split(',')
            .map(item => item.trim())
            .filter(item => item);
        } 
        // Si des intérêts sont fournis et que c'est déjà un tableau, l'utiliser
        else if (Array.isArray(parsedBody.interests)) {
          requestData.interests = parsedBody.interests;
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
