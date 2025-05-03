/**
 * Script de diagnostic CORS pour Biogy
 * Exécuter avec: node cors-diagnostic.js
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Configuration
const API_URL = 'https://biogy-api.onrender.com';
const ENDPOINTS = [
  '/api/health',
  '/api/forum/topics?page=1&limit=1',
  '/api/social/profile/public'
];

const ORIGINS = [
  'https://biogy.netlify.app',
  'http://localhost:3000'
];

// Fonction pour effectuer une requête HTTP/HTTPS avec en-têtes CORS
const makeRequest = (url, origin, method = 'GET') => {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    const options = {
      method: method,
      headers: {
        'Origin': origin,
        'User-Agent': 'CORS-Diagnostic-Tool/1.0'
      }
    };
    
    if (method === 'OPTIONS') {
      options.headers['Access-Control-Request-Method'] = 'GET';
      options.headers['Access-Control-Request-Headers'] = 'Content-Type, Authorization';
    }
    
    const req = client.request(url, options, (res) => {
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

// Fonction pour vérifier les en-têtes CORS
const checkCorsHeaders = (headers) => {
  const corsHeaders = {
    'access-control-allow-origin': headers['access-control-allow-origin'],
    'access-control-allow-methods': headers['access-control-allow-methods'],
    'access-control-allow-headers': headers['access-control-allow-headers'],
    'access-control-allow-credentials': headers['access-control-allow-credentials'],
    'access-control-max-age': headers['access-control-max-age']
  };
  
  const issues = [];
  
  if (!corsHeaders['access-control-allow-origin']) {
    issues.push('Missing Access-Control-Allow-Origin header');
  }
  
  if (!corsHeaders['access-control-allow-methods']) {
    issues.push('Missing Access-Control-Allow-Methods header');
  }
  
  if (!corsHeaders['access-control-allow-headers']) {
    issues.push('Missing Access-Control-Allow-Headers header');
  }
  
  return {
    headers: corsHeaders,
    issues: issues
  };
};

// Fonction principale
async function main() {
  console.log('🔍 Diagnostic CORS pour Biogy');
  console.log('============================');
  console.log(`API URL: ${API_URL}`);
  console.log('');
  
  const results = {
    timestamp: new Date().toISOString(),
    apiUrl: API_URL,
    tests: []
  };
  
  for (const origin of ORIGINS) {
    console.log(`\nTesting with Origin: ${origin}`);
    console.log('----------------------------');
    
    for (const endpoint of ENDPOINTS) {
      const url = `${API_URL}${endpoint}`;
      console.log(`\nEndpoint: ${endpoint}`);
      
      // Test OPTIONS (preflight)
      console.log('OPTIONS request (preflight):');
      try {
        const optionsResult = await makeRequest(url, origin, 'OPTIONS');
        const corsCheck = checkCorsHeaders(optionsResult.headers);
        
        console.log(`Status: ${optionsResult.status}`);
        console.log('CORS Headers:');
        Object.entries(corsCheck.headers).forEach(([key, value]) => {
          console.log(`  ${key}: ${value || 'Not set'}`);
        });
        
        if (corsCheck.issues.length > 0) {
          console.log('Issues:');
          corsCheck.issues.forEach(issue => console.log(`  - ${issue}`));
        } else {
          console.log('No CORS issues detected for OPTIONS');
        }
        
        results.tests.push({
          endpoint,
          origin,
          method: 'OPTIONS',
          status: optionsResult.status,
          corsHeaders: corsCheck.headers,
          issues: corsCheck.issues,
          success: optionsResult.status === 200 && corsCheck.issues.length === 0
        });
      } catch (error) {
        console.log(`Error: ${error.message}`);
        
        results.tests.push({
          endpoint,
          origin,
          method: 'OPTIONS',
          error: error.message,
          success: false
        });
      }
      
      // Test GET
      console.log('\nGET request:');
      try {
        const getResult = await makeRequest(url, origin, 'GET');
        const corsCheck = checkCorsHeaders(getResult.headers);
        
        console.log(`Status: ${getResult.status}`);
        console.log('CORS Headers:');
        Object.entries(corsCheck.headers).forEach(([key, value]) => {
          console.log(`  ${key}: ${value || 'Not set'}`);
        });
        
        if (corsCheck.issues.length > 0) {
          console.log('Issues:');
          corsCheck.issues.forEach(issue => console.log(`  - ${issue}`));
        } else {
          console.log('No CORS issues detected for GET');
        }
        
        results.tests.push({
          endpoint,
          origin,
          method: 'GET',
          status: getResult.status,
          corsHeaders: corsCheck.headers,
          issues: corsCheck.issues,
          success: getResult.status >= 200 && getResult.status < 300 && corsCheck.issues.length === 0
        });
      } catch (error) {
        console.log(`Error: ${error.message}`);
        
        results.tests.push({
          endpoint,
          origin,
          method: 'GET',
          error: error.message,
          success: false
        });
      }
    }
  }
  
  // Générer un rapport
  const successCount = results.tests.filter(test => test.success).length;
  const totalTests = results.tests.length;
  
  console.log('\n📊 Résumé du diagnostic:');
  console.log('------------------------');
  console.log(`Tests réussis: ${successCount}/${totalTests} (${Math.round(successCount/totalTests*100)}%)`);
  
  const commonIssues = results.tests
    .filter(test => test.issues && test.issues.length > 0)
    .flatMap(test => test.issues)
    .reduce((counts, issue) => {
      counts[issue] = (counts[issue] || 0) + 1;
      return counts;
    }, {});
  
  if (Object.keys(commonIssues).length > 0) {
    console.log('\nProblèmes courants:');
    Object.entries(commonIssues)
      .sort((a, b) => b[1] - a[1])
      .forEach(([issue, count]) => {
        console.log(`  - ${issue} (${count} occurrences)`);
      });
  }
  
  // Suggestions
  console.log('\n💡 Suggestions:');
  
  if (commonIssues['Missing Access-Control-Allow-Origin header']) {
    console.log('  - Configurez l\'en-tête Access-Control-Allow-Origin dans votre backend');
    console.log('    Exemple pour Express.js:');
    console.log('    app.use(cors({ origin: \'https://biogy.netlify.app\' }));');
  }
  
  if (commonIssues['Missing Access-Control-Allow-Methods header']) {
    console.log('  - Configurez l\'en-tête Access-Control-Allow-Methods dans votre backend');
    console.log('    Exemple pour Express.js:');
    console.log('    app.use(cors({ methods: [\'GET\', \'POST\', \'PUT\', \'DELETE\', \'OPTIONS\'] }));');
  }
  
  if (successCount === 0) {
    console.log('  - Vérifiez que votre API est bien en cours d\'exécution');
    console.log('  - Essayez d\'utiliser un proxy CORS comme corsproxy.io');
    console.log('  - Vérifiez les redirections dans votre fichier netlify.toml');
  }
  
  // Sauvegarder les résultats dans un fichier
  const reportPath = path.join(__dirname, 'cors-diagnostic-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\nRapport détaillé sauvegardé dans: ${reportPath}`);
}

// Exécuter le script
main().catch(error => {
  console.error('Script error:', error);
  process.exit(1);
});
