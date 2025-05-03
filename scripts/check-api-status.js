/**
 * Script pour vérifier l'état de l'API Biogy
 * Exécuter avec: node check-api-status.js
 */

const https = require('https');
const http = require('http');

// Configuration
const API_URL = 'https://biogy-api.onrender.com';
const ENDPOINTS = [
  '/api/health',
  '/api/forum/topics?page=1&limit=1',
  '/api/social/profile/public'
];

// Fonction pour effectuer une requête HTTP/HTTPS
const makeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const result = {
            status: res.statusCode,
            headers: res.headers,
            data: data
          };
          
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    // Timeout de 10 secondes
    req.setTimeout(10000, () => {
      req.abort();
      reject(new Error('Request timed out'));
    });
    
    req.end();
  });
};

// Fonction principale
async function main() {
  console.log('🔍 Vérification de l\'état de l\'API Biogy');
  console.log('=======================================');
  console.log(`API URL: ${API_URL}`);
  console.log('');
  
  let allSuccess = true;
  
  for (const endpoint of ENDPOINTS) {
    const url = `${API_URL}${endpoint}`;
    console.log(`Testing: ${url}`);
    
    try {
      const result = await makeRequest(url);
      
      if (result.status >= 200 && result.status < 300) {
        console.log(`✅ Success (${result.status})`);
        
        try {
          // Essayer de parser la réponse JSON
          const data = JSON.parse(result.data);
          console.log('Response:', JSON.stringify(data, null, 2).substring(0, 200) + '...');
        } catch (e) {
          console.log('Response (not JSON):', result.data.substring(0, 100) + '...');
        }
      } else {
        console.log(`❌ Error (${result.status})`);
        console.log('Response:', result.data);
        allSuccess = false;
      }
    } catch (error) {
      console.log(`❌ Error: ${error.message}`);
      allSuccess = false;
    }
    
    console.log('----------------------------');
  }
  
  if (allSuccess) {
    console.log('✅ L\'API est opérationnelle et répond correctement à toutes les requêtes.');
  } else {
    console.log('❌ L\'API rencontre des problèmes. Vérifiez les détails ci-dessus.');
    
    // Suggestions
    console.log('\nSuggestions:');
    console.log('1. Vérifiez que l\'API est bien déployée et en cours d\'exécution sur Render');
    console.log('2. Vérifiez les logs de l\'API sur Render pour identifier les erreurs');
    console.log('3. Assurez-vous que les routes sont correctement configurées dans le backend');
    console.log('4. Vérifiez que la base de données MongoDB est accessible');
  }
}

// Exécuter le script
main().catch(error => {
  console.error('Script error:', error);
  process.exit(1);
});
