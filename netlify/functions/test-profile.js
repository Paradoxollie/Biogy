// Fonction de test pour vérifier que la fonction profile-proxy fonctionne correctement
const axios = require('axios');

// URL de l'API backend
const API_URL = 'https://biogy-api.onrender.com/api';

exports.handler = async function(event, context) {
  // Headers CORS permissifs
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept, Origin',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json'
  };

  try {
    // Tester la connexion à l'API
    console.log('Test de connexion à l\'API...');
    
    // Tester d'abord l'endpoint health
    let healthStatus = 'non testé';
    try {
      const healthResponse = await axios({
        method: 'GET',
        url: `${API_URL}/health`,
        headers: {
          'Origin': 'https://biogy.netlify.app'
        },
        timeout: 5000
      });
      
      healthStatus = healthResponse.status === 200 ? 'OK' : `Échec: ${healthResponse.status}`;
    } catch (healthError) {
      healthStatus = `Erreur: ${healthError.message}`;
    }
    
    // Tester ensuite l'endpoint profile avec un token fictif
    let profileStatus = 'non testé';
    try {
      const profileResponse = await axios({
        method: 'GET',
        url: `${API_URL}/social/profile`,
        headers: {
          'Origin': 'https://biogy.netlify.app',
          'Authorization': 'Bearer test-token'
        },
        timeout: 5000
      });
      
      profileStatus = profileResponse.status === 200 || profileResponse.status === 401 
        ? `OK (${profileResponse.status})` 
        : `Échec: ${profileResponse.status}`;
    } catch (profileError) {
      // 401 est attendu car le token est invalide
      profileStatus = profileError.response && profileError.response.status === 401
        ? 'OK (401 Unauthorized)'
        : `Erreur: ${profileError.message}`;
    }
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'Test de la fonction profile-proxy',
        timestamp: new Date().toISOString(),
        tests: {
          health: healthStatus,
          profile: profileStatus
        }
      })
    };
  } catch (error) {
    console.error('Erreur lors du test:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: 'Erreur lors du test',
        error: error.message
      })
    };
  }
};
