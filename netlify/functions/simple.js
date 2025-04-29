// Fonction simple pour tester le déploiement des fonctions Netlify
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: 'Netlify Functions are working!',
      timestamp: new Date().toISOString(),
      event: {
        path: event.path,
        httpMethod: event.httpMethod,
        headers: event.headers,
        queryStringParameters: event.queryStringParameters
      }
    })
  };
};
