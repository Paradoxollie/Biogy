/**
 * Script pour vérifier la configuration de l'API
 * Exécuter avec: node verify-api-config.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const API_URL = 'https://biogy.onrender.com';
const FILES_TO_CHECK = [
  { path: 'frontend/src/config.js', pattern: /API_URL\s*=\s*['"]https:\/\/biogy\.onrender\.com['"]/ },
  { path: 'frontend/src/services/apiService.js', pattern: /\$\{API_URL\}/ },
  { path: 'netlify/functions/profile-api.js', pattern: /API_URL\s*=\s*['"]https:\/\/biogy\.onrender\.com\/api['"]/ },
  { path: 'netlify/functions/profile-avatar.js', pattern: /API_URL\s*=\s*['"]https:\/\/biogy\.onrender\.com\/api['"]/ },
  { path: 'frontend/public/_redirects', pattern: /\/api\/\*\s+https:\/\/biogy\.onrender\.com\/api\/:splat/ },
  { path: 'frontend/netlify.toml', pattern: /to\s*=\s*"https:\/\/biogy\.onrender\.com\/api\/:splat"/ }
];

// Fonction pour vérifier un fichier
function checkFile(filePath, pattern) {
  return new Promise((resolve) => {
    try {
      const fullPath = path.join(__dirname, '..', filePath);
      
      if (!fs.existsSync(fullPath)) {
        resolve({
          path: filePath,
          exists: false,
          matches: false,
          error: 'File does not exist'
        });
        return;
      }
      
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = pattern.test(content);
      
      resolve({
        path: filePath,
        exists: true,
        matches,
        error: null
      });
    } catch (error) {
      resolve({
        path: filePath,
        exists: false,
        matches: false,
        error: error.message
      });
    }
  });
}

// Fonction pour tester l'API
function testApi(url) {
  return new Promise((resolve) => {
    console.log(`Testing API: ${url}`);
    
    const req = https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          url,
          status: res.statusCode,
          headers: res.headers,
          data: data.substring(0, 100) + (data.length > 100 ? '...' : ''),
          success: res.statusCode >= 200 && res.statusCode < 300
        });
      });
    });
    
    req.on('error', (error) => {
      resolve({
        url,
        status: null,
        headers: null,
        data: null,
        success: false,
        error: error.message
      });
    });
    
    req.end();
  });
}

// Fonction principale
async function main() {
  console.log('🔍 Vérification de la configuration de l\'API');
  console.log('==========================================');
  
  // Vérifier les fichiers
  console.log('\n📁 Vérification des fichiers:');
  const fileResults = await Promise.all(
    FILES_TO_CHECK.map(file => checkFile(file.path, file.pattern))
  );
  
  let fileSuccess = true;
  
  fileResults.forEach(result => {
    if (result.exists && result.matches) {
      console.log(`✅ ${result.path}: OK`);
    } else {
      fileSuccess = false;
      if (!result.exists) {
        console.log(`❌ ${result.path}: File not found`);
      } else {
        console.log(`❌ ${result.path}: Pattern not found`);
      }
    }
  });
  
  // Tester l'API
  console.log('\n🌐 Test de l\'API:');
  const apiResults = await Promise.all([
    testApi(`${API_URL}/api/health`),
    testApi(`${API_URL}/api/social/profile`)
  ]);
  
  let apiSuccess = true;
  
  apiResults.forEach(result => {
    if (result.success) {
      console.log(`✅ ${result.url}: ${result.status} OK`);
      console.log(`   Headers: ${JSON.stringify(result.headers['access-control-allow-origin'] || {})}`);
      console.log(`   Data: ${result.data}`);
    } else {
      apiSuccess = false;
      console.log(`❌ ${result.url}: ${result.error || `Status ${result.status}`}`);
    }
  });
  
  // Résumé
  console.log('\n📊 Résumé:');
  console.log(`Files: ${fileSuccess ? '✅ All OK' : '❌ Some issues'}`);
  console.log(`API: ${apiSuccess ? '✅ All OK' : '❌ Some issues'}`);
  
  if (!fileSuccess || !apiSuccess) {
    console.log('\n⚠️ Des problèmes ont été détectés. Veuillez les corriger avant de déployer.');
  } else {
    console.log('\n🎉 Tout est OK! Vous pouvez déployer en toute confiance.');
  }
}

// Exécuter le script
main().catch(console.error);
