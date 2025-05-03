/**
 * Script pour tester la connectivité avec l'API Biogy de manière détaillée
 * Exécuter avec: node test-api-connection-detailed.js
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Configuration
const API_URLS = [
  'https://biogy-api.onrender.com/api/health',
  'https://biogy-api.onrender.com/api/social/profile',
  'https://biogy.onrender.com/api/health',
  'https://biogy.onrender.com/api/social/profile',
  'https://corsproxy.io/?https://biogy-api.onrender.com/api/health',
  'https://corsproxy.io/?https://biogy.onrender.com/api/health'
];

// Token d'authentification (à remplacer par un token valide)
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MGU0ZmQ0NjFjNmVjZGZkMzJmMTE0MiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0NTc2OTgyMCwiZXhwIjoxNzQ4MzYxODIwfQ.1sb2FF4o9bSRrIwQlqRTuJqTGAVfhL-_HdhWWpUgWvs";

// Fonction pour tester une URL
function testUrl(url, options = {}) {
  return new Promise((resolve, reject) => {
    console.log(`\n🔍 Test de connexion à: ${url}`);
    console.log(`📋 Options: ${JSON.stringify(options)}`);
    
    const protocol = url.startsWith('https') ? https : http;
    const startTime = Date.now();
    
    // Préparer les options de la requête
    const urlObj = new URL(url);
    const requestOptions = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: options.method || 'GET',
      headers: {
        'User-Agent': 'Biogy-API-Test/1.0',
        ...options.headers
      },
      timeout: options.timeout || 10000
    };
    
    console.log(`🔧 Options de requête: ${JSON.stringify(requestOptions, null, 2)}`);
    
    const req = protocol.request(requestOptions, (res) => {
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        console.log(`✅ Statut: ${res.statusCode} ${res.statusMessage}`);
        console.log(`⏱️ Temps de réponse: ${duration}ms`);
        console.log(`📝 En-têtes:`);
        console.log(JSON.stringify(res.headers, null, 2));
        
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
          headers: res.headers,
          data,
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
    
    // Ajouter un corps à la requête si nécessaire
    if (options.body) {
      req.write(options.body);
    }
    
    req.end();
  });
}

// Fonction principale
async function main() {
  console.log('🔍 Test détaillé de connectivité avec l\'API Biogy');
  console.log('===============================================');
  
  const results = [];
  
  // Tester les URLs de base
  for (const url of API_URLS) {
    try {
      const result = await testUrl(url);
      results.push(result);
    } catch (error) {
      results.push(error);
    }
  }
  
  // Tester l'URL de profil avec authentification
  try {
    const profileUrl = 'https://biogy-api.onrender.com/api/social/profile';
    console.log(`\n🔐 Test avec authentification: ${profileUrl}`);
    
    const result = await testUrl(profileUrl, {
      headers: {
        'Authorization': `Bearer ${AUTH_TOKEN}`
      }
    });
    
    results.push({
      ...result,
      authenticated: true
    });
  } catch (error) {
    results.push({
      ...error,
      authenticated: true
    });
  }
  
  // Tester la mise à jour de profil
  try {
    const updateProfileUrl = 'https://biogy-api.onrender.com/api/social/profile';
    console.log(`\n✏️ Test de mise à jour de profil: ${updateProfileUrl}`);
    
    const testData = {
      displayName: 'Test User',
      bio: 'Ceci est un test de mise à jour de profil',
      interests: ['test', 'api', 'debug']
    };
    
    const result = await testUrl(updateProfileUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${AUTH_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testData)
    });
    
    results.push({
      ...result,
      update: true
    });
  } catch (error) {
    results.push({
      ...error,
      update: true
    });
  }
  
  // Résumé
  console.log('\n📊 Résumé des tests:');
  console.log('-------------------');
  
  let successCount = 0;
  
  results.forEach((result) => {
    if (result.success) {
      successCount++;
      console.log(`✅ ${result.url}${result.authenticated ? ' (auth)' : ''}${result.update ? ' (update)' : ''} - OK (${result.status}, ${result.duration}ms)`);
    } else {
      console.log(`❌ ${result.url}${result.authenticated ? ' (auth)' : ''}${result.update ? ' (update)' : ''} - Échec (${result.error || 'Erreur inconnue'})`);
    }
  });
  
  console.log(`\n🏁 ${successCount}/${results.length} tests réussis`);
  
  // Sauvegarder les résultats dans un fichier
  const resultsFile = path.join(__dirname, 'api-test-results.json');
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
  console.log(`\n💾 Résultats sauvegardés dans: ${resultsFile}`);
}

// Exécuter le script
main().catch(console.error);
