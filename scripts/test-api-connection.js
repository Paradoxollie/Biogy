/**
 * Script pour tester la connectivité avec l'API Biogy
 * Exécuter avec: node test-api-connection.js
 */

const https = require('https');
const http = require('http');

// Configuration
const API_URLS = [
  'https://biogy-api.onrender.com/api/health',
  'https://biogy-api.onrender.com/api/forum/topics?page=1&limit=1',
  'https://biogy-api.onrender.com/api/social/profile',
  'https://corsproxy.io/?https://biogy-api.onrender.com/api/health',
  'https://api.allorigins.win/raw?url=https://biogy-api.onrender.com/api/health',
  'https://thingproxy.freeboard.io/fetch/https://biogy-api.onrender.com/api/health'
];

// Fonction pour tester une URL
function testUrl(url) {
  return new Promise((resolve, reject) => {
    console.log(`\nTest de connexion à: ${url}`);

    const protocol = url.startsWith('https') ? https : http;
    const startTime = Date.now();

    const req = protocol.get(url, (res) => {
      const endTime = Date.now();
      const duration = endTime - startTime;

      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        console.log(`✅ Statut: ${res.statusCode} ${res.statusMessage}`);
        console.log(`⏱️ Temps de réponse: ${duration}ms`);
        console.log(`📝 En-têtes CORS:`);
        console.log(`   Access-Control-Allow-Origin: ${res.headers['access-control-allow-origin'] || 'Non défini'}`);
        console.log(`   Access-Control-Allow-Methods: ${res.headers['access-control-allow-methods'] || 'Non défini'}`);
        console.log(`   Access-Control-Allow-Headers: ${res.headers['access-control-allow-headers'] || 'Non défini'}`);

        try {
          // Essayer de parser la réponse comme JSON
          const jsonData = JSON.parse(data);
          console.log(`📄 Réponse (JSON):`);
          console.log(JSON.stringify(jsonData, null, 2));
        } catch (e) {
          // Si ce n'est pas du JSON, afficher les premiers caractères
          console.log(`📄 Réponse (premiers 200 caractères):`);
          console.log(data.substring(0, 200) + (data.length > 200 ? '...' : ''));
        }

        resolve({
          url,
          status: res.statusCode,
          duration,
          success: res.statusCode >= 200 && res.statusCode < 300
        });
      });
    });

    req.on('error', (error) => {
      console.error(`❌ Erreur: ${error.message}`);
      reject({
        url,
        error: error.message,
        success: false
      });
    });

    // Timeout après 10 secondes
    req.setTimeout(10000, () => {
      req.abort();
      console.error('❌ Timeout après 10 secondes');
      reject({
        url,
        error: 'Timeout',
        success: false
      });
    });
  });
}

// Fonction principale
async function main() {
  console.log('🔍 Test de connectivité avec l\'API Biogy');
  console.log('=======================================');

  const results = [];

  for (const url of API_URLS) {
    try {
      const result = await testUrl(url);
      results.push(result);
    } catch (error) {
      results.push(error);
    }
  }

  // Résumé
  console.log('\n📊 Résumé des tests:');
  console.log('-------------------');

  let successCount = 0;

  results.forEach((result) => {
    if (result.success) {
      successCount++;
      console.log(`✅ ${result.url} - OK (${result.status}, ${result.duration}ms)`);
    } else {
      console.log(`❌ ${result.url} - Échec (${result.error || 'Erreur inconnue'})`);
    }
  });

  console.log(`\n🏁 ${successCount}/${results.length} tests réussis`);

  if (successCount === 0) {
    console.log('\n⚠️ Tous les tests ont échoué. Vérifiez votre connexion Internet et l\'état de l\'API.');
    console.log('Suggestions:');
    console.log('1. Vérifiez que l\'API est bien déployée et en cours d\'exécution sur Render');
    console.log('2. Vérifiez les paramètres CORS dans le backend');
    console.log('3. Essayez d\'accéder directement aux URLs dans un navigateur');
  }
}

// Exécuter le script
main().catch(console.error);
