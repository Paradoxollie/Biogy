/**
 * Script pour vérifier que les fonctions Netlify sont correctement déployées
 * Exécuter avec: node check-netlify-functions.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const NETLIFY_SITE = 'https://biogy.netlify.app';
const FUNCTIONS = [
  '/.netlify/functions/profile-api',
  '/.netlify/functions/profile-avatar'
];

// Token d'authentification (à remplacer par un token valide)
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MGU0ZmQ0NjFjNmVjZGZkMzJmMTE0MiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0NTc2OTgyMCwiZXhwIjoxNzQ4MzYxODIwfQ.1sb2FF4o9bSRrIwQlqRTuJqTGAVfhL-_HdhWWpUgWvs";

// Fonction pour tester une fonction Netlify
function testNetlifyFunction(functionPath) {
  return new Promise((resolve, reject) => {
    console.log(`\n🔍 Test de la fonction Netlify: ${functionPath}`);
    
    const url = `${NETLIFY_SITE}${functionPath}`;
    console.log(`URL: ${url}`);
    
    const options = {
      method: 'OPTIONS',
      headers: {
        'Origin': 'https://biogy.netlify.app',
        'Access-Control-Request-Method': 'PUT',
        'Access-Control-Request-Headers': 'Content-Type, Authorization'
      }
    };
    
    const req = https.request(url, options, (res) => {
      console.log(`Statut: ${res.statusCode} ${res.statusMessage}`);
      console.log('Headers:');
      console.log(JSON.stringify(res.headers, null, 2));
      
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (data) {
          try {
            const jsonData = JSON.parse(data);
            console.log('Réponse (JSON):');
            console.log(JSON.stringify(jsonData, null, 2));
          } catch (e) {
            console.log('Réponse:');
            console.log(data);
          }
        }
        
        resolve({
          url,
          status: res.statusCode,
          headers: res.headers,
          data,
          success: res.statusCode >= 200 && res.statusCode < 300
        });
      });
    });
    
    req.on('error', (error) => {
      console.error(`Erreur: ${error.message}`);
      reject({
        url,
        error: error.message,
        success: false
      });
    });
    
    req.end();
  });
}

// Fonction principale
async function main() {
  console.log('🔍 Vérification des fonctions Netlify');
  console.log('===================================');
  
  const results = [];
  
  for (const functionPath of FUNCTIONS) {
    try {
      const result = await testNetlifyFunction(functionPath);
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
      console.log(`✅ ${result.url} - OK (${result.status})`);
    } else {
      console.log(`❌ ${result.url} - Échec (${result.error || 'Erreur inconnue'})`);
    }
  });
  
  console.log(`\n🏁 ${successCount}/${results.length} tests réussis`);
  
  if (successCount === 0) {
    console.log('\n⚠️ Tous les tests ont échoué. Vérifiez que les fonctions Netlify sont correctement déployées.');
    console.log('Suggestions:');
    console.log('1. Vérifiez que les fonctions sont bien présentes dans le dossier netlify/functions');
    console.log('2. Vérifiez que le site Netlify est correctement configuré pour utiliser les fonctions');
    console.log('3. Redéployez le site Netlify');
  }
}

// Exécuter le script
main().catch(console.error);
