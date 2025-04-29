// Utilitaire de diagnostic CORS pour Biogy
// Ce fichier est utilisé pour tester et diagnostiquer les problèmes CORS

import axios from 'axios';

// Récupérer l'URL de l'API depuis les variables d'environnement
const API_URL = process.env.REACT_APP_API_URL || 'https://biogy-api.onrender.com';

/**
 * Test complet de la configuration CORS
 * @returns {Promise<Object>} Résultats des tests CORS
 */
export const testCorsConfig = async () => {
  const startTime = performance.now();
  const results = {
    environment: {
      apiUrl: API_URL,
      browserInfo: navigator.userAgent,
      timestamp: new Date().toISOString(),
    },
    tests: [],
    issues: [],
    suggestions: [],
    rawData: {},
  };

  try {
    // Test 1: Simple GET request
    const getResult = await testGetRequest(`${API_URL}/api/health`);
    results.tests.push(getResult);
    
    // Test 2: OPTIONS preflight request
    const optionsResult = await testOptionsRequest(`${API_URL}/api/posts`);
    results.tests.push(optionsResult);
    
    // Test 3: POST request
    const postResult = await testPostRequest(`${API_URL}/api/auth/check`);
    results.tests.push(postResult);

    // Detect issues based on test results
    results.issues = detectIssues(results.tests);
    
    // Generate suggestions based on issues
    results.suggestions = generateSuggestions(results.issues);
    
    // Calculate total time
    const endTime = performance.now();
    results.totalTime = endTime - startTime;
    
    return results;
  } catch (error) {
    console.error('Error during CORS testing:', error);
    results.issues.push({
      severity: 'critical',
      message: `Test failed with unexpected error: ${error.message}`,
    });
    return results;
  }
};

/**
 * Test a GET request to the specified endpoint
 */
const testGetRequest = async (url) => {
  const result = {
    type: 'GET',
    url,
    success: false,
    statusCode: null,
    duration: null,
    corsHeaders: {},
    error: null
  };
  
  const startTime = performance.now();
  
  try {
    const response = await axios.get(url, {
      timeout: 5000,
    });
    
    result.success = true;
    result.statusCode = response.status;
    result.responseHeaders = response.headers;
    result.corsHeaders = extractCorsHeaders(response.headers);
    result.data = response.data;
  } catch (error) {
    result.success = false;
    result.error = {
      message: error.message,
      type: error.name,
      isCorsError: isCorsError(error)
    };
    
    if (error.response) {
      result.statusCode = error.response.status;
      result.responseHeaders = error.response.headers;
      result.corsHeaders = extractCorsHeaders(error.response.headers);
    }
  } finally {
    const endTime = performance.now();
    result.duration = endTime - startTime;
  }
  
  return result;
};

/**
 * Test an OPTIONS preflight request
 */
const testOptionsRequest = async (url) => {
  const result = {
    type: 'OPTIONS',
    url,
    success: false,
    statusCode: null,
    duration: null,
    corsHeaders: {},
    error: null
  };
  
  const startTime = performance.now();
  
  try {
    const response = await axios({
      method: 'OPTIONS',
      url,
      headers: {
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type, Authorization',
        'Origin': window.location.origin
      },
      timeout: 5000,
    });
    
    result.success = true;
    result.statusCode = response.status;
    result.responseHeaders = response.headers;
    result.corsHeaders = extractCorsHeaders(response.headers);
  } catch (error) {
    result.success = false;
    result.error = {
      message: error.message,
      type: error.name,
      isCorsError: isCorsError(error)
    };
    
    if (error.response) {
      result.statusCode = error.response.status;
      result.responseHeaders = error.response.headers;
      result.corsHeaders = extractCorsHeaders(error.response.headers);
    }
  } finally {
    const endTime = performance.now();
    result.duration = endTime - startTime;
  }
  
  return result;
};

/**
 * Test a POST request
 */
const testPostRequest = async (url) => {
  const result = {
    type: 'POST',
    url,
    success: false,
    statusCode: null,
    duration: null,
    corsHeaders: {},
    error: null
  };
  
  const startTime = performance.now();
  
  try {
    const response = await axios.post(url, { test: 'data' }, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 5000,
    });
    
    result.success = true;
    result.statusCode = response.status;
    result.responseHeaders = response.headers;
    result.corsHeaders = extractCorsHeaders(response.headers);
    result.data = response.data;
  } catch (error) {
    result.success = false;
    result.error = {
      message: error.message,
      type: error.name,
      isCorsError: isCorsError(error)
    };
    
    if (error.response) {
      result.statusCode = error.response.status;
      result.responseHeaders = error.response.headers;
      result.corsHeaders = extractCorsHeaders(error.response.headers);
    }
  } finally {
    const endTime = performance.now();
    result.duration = endTime - startTime;
  }
  
  return result;
};

/**
 * Extract CORS-related headers from response headers
 */
const extractCorsHeaders = (headers) => {
  const corsHeaders = {};
  const corsHeaderPrefixes = [
    'access-control-',
    'origin',
    'vary',
  ];
  
  Object.keys(headers).forEach(header => {
    const headerLower = header.toLowerCase();
    if (corsHeaderPrefixes.some(prefix => headerLower.startsWith(prefix))) {
      corsHeaders[header] = headers[header];
    }
  });
  
  return corsHeaders;
};

/**
 * Detect if an error is a CORS error
 */
const isCorsError = (error) => {
  if (!error) return false;
  
  // Check typical CORS error signatures
  if (error.message && (
    error.message.includes('CORS') ||
    error.message.includes('cross-origin') ||
    error.message.includes('Access-Control-Allow-Origin')
  )) {
    return true;
  }
  
  // Network errors can also be CORS related
  if (error.name === 'NetworkError') return true;
  
  return false;
};

/**
 * Analyze test results to detect CORS issues
 */
const detectIssues = (tests) => {
  const issues = [];
  
  tests.forEach(test => {
    // Check if test failed due to CORS
    if (!test.success && test.error && test.error.isCorsError) {
      issues.push({
        severity: 'high',
        message: `CORS error on ${test.type} request to ${test.url}`,
        details: `Error: ${test.error.message}`
      });
    }
    
    // Check missing CORS headers
    if (test.corsHeaders) {
      if (!test.corsHeaders['access-control-allow-origin']) {
        issues.push({
          severity: 'high',
          message: `Missing 'Access-Control-Allow-Origin' header on ${test.type} request`,
          endpoint: test.url
        });
      }
      
      if (test.type === 'OPTIONS' && !test.corsHeaders['access-control-allow-methods']) {
        issues.push({
          severity: 'medium',
          message: `Missing 'Access-Control-Allow-Methods' header on preflight request`,
          endpoint: test.url
        });
      }
    }
  });
  
  return issues;
};

/**
 * Generate suggestions based on detected issues
 */
const generateSuggestions = (issues) => {
  const suggestions = [];
  
  if (issues.some(issue => issue.message.includes('Access-Control-Allow-Origin'))) {
    suggestions.push({
      priority: 'high',
      message: 'Configure Access-Control-Allow-Origin header on the server',
      code: `
// Node.js + Express example
app.use(cors({
  origin: '${window.location.origin}',
  credentials: true
}));`
    });
  }
  
  if (issues.some(issue => issue.message.includes('Access-Control-Allow-Methods'))) {
    suggestions.push({
      priority: 'medium',
      message: 'Configure Access-Control-Allow-Methods header on the server',
      code: `
// Node.js + Express example
app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));`
    });
  }
  
  if (issues.some(issue => issue.severity === 'high')) {
    suggestions.push({
      priority: 'high',
      message: 'Verify that CORS middleware is properly configured and applied',
    });
  }
  
  return suggestions;
};

export default testCorsConfig; 