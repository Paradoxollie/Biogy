// Fonction simple pour tester l'état du serveur et des variables d'environnement
exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  try {
    // Récupérer des informations de base sur l'environnement
    const envInfo = {
      nodeVersion: process.version,
      environment: process.env.NODE_ENV,
      netlifyContext: context.clientContext,
      requestId: context.awsRequestId,
      timestamp: new Date().toISOString(),
      envVars: {
        // Ne pas exposer les secrets mais montrer quelles variables sont définies
        URL: process.env.URL ? 'défini' : 'non défini',
        NETLIFY: process.env.NETLIFY ? 'défini' : 'non défini',
        CONTEXT: process.env.CONTEXT || 'non défini'
      }
    };

    // Tester la connexion avec un service externe simple
    let connectionTest = 'non testé';
    try {
      const testResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        timeout: 3000 // Petit timeout pour tester rapidement
      });
      connectionTest = testResponse.ok ? 'OK' : `Échec: ${testResponse.status}`;
    } catch (fetchError) {
      connectionTest = `Erreur: ${fetchError.message}`;
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        status: 'ok',
        info: envInfo,
        connectionTest,
        message: 'Le serveur Netlify fonctionne correctement'
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        status: 'error',
        message: `Erreur lors du diagnostic: ${error.message}`
      })
    };
  }
}; 