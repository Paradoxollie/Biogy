// Fichier vide pour résoudre l'erreur de déploiement Netlify
// Ce fichier est créé pour résoudre une erreur de déploiement mentionnant un module manquant nommé 'fish'

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: 'Fish function is working!',
      timestamp: new Date().toISOString()
    })
  };
};
