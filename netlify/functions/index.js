// Fonction index pour router les requêtes vers les bonnes fonctions
const proxy = require('./proxy');
const directApi = require('./direct-api');
const simple = require('./simple');
const profileProxy = require('./profile-proxy');
const testProfile = require('./test-profile');
const apiTest = require('./api-test');

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
    // Extraire le chemin de la requête
    const path = event.path;

    console.log(`Routing request for path: ${path}`);

    // Router la requête vers la bonne fonction
    if (path.startsWith('/.netlify/functions/proxy')) {
      console.log('Routing to proxy function');
      return await proxy.handler(event, context);
    } else if (path.startsWith('/.netlify/functions/direct-api')) {
      console.log('Routing to direct-api function');
      return await directApi.handler(event, context);
    } else if (path.startsWith('/.netlify/functions/simple')) {
      console.log('Routing to simple function');
      return await simple.handler(event, context);
    } else if (path.startsWith('/.netlify/functions/profile-proxy')) {
      console.log('Routing to profile-proxy function');
      return await profileProxy.handler(event, context);
    } else if (path.startsWith('/.netlify/functions/test-profile')) {
      console.log('Routing to test-profile function');
      return await testProfile.handler(event, context);
    } else if (path.startsWith('/.netlify/functions/api-test')) {
      console.log('Routing to api-test function');
      return await apiTest.handler(event, context);
    } else if (path.startsWith('/.netlify/functions/index')) {
      // Si la requête est pour index.js, retourner une liste des fonctions disponibles
      return {
        statusCode: 200,
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: 'Netlify Functions Router',
          timestamp: new Date().toISOString(),
          availableFunctions: [
            '/.netlify/functions/proxy',
            '/.netlify/functions/direct-api',
            '/.netlify/functions/simple',
            '/.netlify/functions/profile-proxy',
            '/.netlify/functions/test-profile',
            '/.netlify/functions/api-test'
          ],
          event: {
            path: event.path,
            httpMethod: event.httpMethod
          }
        })
      };
    } else {
      // Si la requête ne correspond à aucune fonction, retourner une erreur 404
      return {
        statusCode: 404,
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          error: 'Function Not Found',
          message: `No function found for path: ${path}`,
          availableFunctions: [
            '/.netlify/functions/proxy',
            '/.netlify/functions/direct-api',
            '/.netlify/functions/simple',
            '/.netlify/functions/profile-proxy',
            '/.netlify/functions/test-profile',
            '/.netlify/functions/api-test'
          ]
        })
      };
    }
  } catch (error) {
    console.error('Router error:', error);

    // Retourner l'erreur
    return {
      statusCode: 500,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        error: 'Router Error',
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
};
