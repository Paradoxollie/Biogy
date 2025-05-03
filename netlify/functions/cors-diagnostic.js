// Fonction Netlify pour diagnostiquer les problèmes CORS
const axios = require('axios');

// URL de l'API backend
const API_URL = 'https://biogy-api.onrender.com/api';

exports.handler = async function(event, context) {
  // Définir les headers CORS permissifs
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept, Origin',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Max-Age': '86400',
    'Content-Type': 'application/json'
  };

  // Gérer les requêtes OPTIONS (preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Extraire les paramètres de la requête
    const params = event.queryStringParameters || {};
    const endpoint = params.endpoint || 'health';
    const method = (params.method || 'GET').toLowerCase();
    const useToken = params.useToken === 'true';
    
    // Extraire le token d'authentification si présent
    const authHeader = event.headers.authorization || event.headers.Authorization;
    const token = authHeader ? authHeader.replace('Bearer ', '') : null;
    
    // Construire l'URL complète
    const url = `${API_URL}/${endpoint}`;
    
    console.log(`Test CORS: ${method.toUpperCase()} ${url} (useToken: ${useToken})`);

    // Préparer les headers pour la requête au backend
    const requestHeaders = {};
    if (useToken && token) {
      requestHeaders['Authorization'] = `Bearer ${token}`;
    }
    
    // Ajouter l'origine pour tester le CORS
    requestHeaders['Origin'] = 'https://biogy.netlify.app';
    
    if (method === 'post' || method === 'put') {
      requestHeaders['Content-Type'] = 'application/json';
    }

    // Effectuer une requête OPTIONS d'abord pour tester le preflight
    let preflightResult = null;
    try {
      const preflightResponse = await axios({
        method: 'OPTIONS',
        url,
        headers: {
          ...requestHeaders,
          'Access-Control-Request-Method': method.toUpperCase(),
          'Access-Control-Request-Headers': 'Content-Type, Authorization'
        },
        validateStatus: () => true
      });
      
      preflightResult = {
        status: preflightResponse.status,
        headers: preflightResponse.headers,
        success: preflightResponse.status === 200 || preflightResponse.status === 204,
        corsHeaders: {
          allowOrigin: preflightResponse.headers['access-control-allow-origin'],
          allowMethods: preflightResponse.headers['access-control-allow-methods'],
          allowHeaders: preflightResponse.headers['access-control-allow-headers']
        }
      };
    } catch (error) {
      preflightResult = {
        status: error.response?.status || 0,
        success: false,
        error: error.message
      };
    }

    // Effectuer la requête réelle
    let actualResult = null;
    try {
      const response = await axios({
        method,
        url,
        headers: requestHeaders,
        data: method === 'post' || method === 'put' ? {} : undefined,
        validateStatus: () => true,
        timeout: 10000
      });
      
      actualResult = {
        status: response.status,
        headers: response.headers,
        success: response.status >= 200 && response.status < 300,
        corsHeaders: {
          allowOrigin: response.headers['access-control-allow-origin'],
          allowMethods: response.headers['access-control-allow-methods'],
          allowHeaders: response.headers['access-control-allow-headers']
        },
        data: response.data
      };
    } catch (error) {
      actualResult = {
        status: error.response?.status || 0,
        success: false,
        error: error.message
      };
    }

    // Analyser les résultats
    const analysis = {
      endpoint,
      method: method.toUpperCase(),
      preflightSuccess: preflightResult.success,
      actualSuccess: actualResult.success,
      corsIssues: [],
      recommendations: []
    };
    
    // Vérifier les problèmes CORS courants
    if (!preflightResult.success) {
      analysis.corsIssues.push('Le serveur ne répond pas correctement aux requêtes OPTIONS (preflight)');
      analysis.recommendations.push('Configurer le serveur pour accepter les requêtes OPTIONS');
    }
    
    if (preflightResult.success && !preflightResult.corsHeaders.allowOrigin) {
      analysis.corsIssues.push('Le header Access-Control-Allow-Origin est manquant dans la réponse preflight');
      analysis.recommendations.push('Ajouter Access-Control-Allow-Origin: * ou https://biogy.netlify.app');
    }
    
    if (actualResult.success && !actualResult.corsHeaders.allowOrigin) {
      analysis.corsIssues.push('Le header Access-Control-Allow-Origin est manquant dans la réponse');
      analysis.recommendations.push('Ajouter Access-Control-Allow-Origin: * ou https://biogy.netlify.app');
    }
    
    if (analysis.corsIssues.length === 0) {
      analysis.corsIssues.push('Aucun problème CORS détecté');
      
      if (!actualResult.success) {
        analysis.recommendations.push(`La requête a échoué pour une raison non liée au CORS (statut: ${actualResult.status})`);
      }
    }

    // Retourner les résultats
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        url,
        preflight: preflightResult,
        actual: actualResult,
        analysis
      }, null, 2)
    };
  } catch (error) {
    console.error('Erreur dans cors-diagnostic:', error);
    
    // Retourner une réponse d'erreur
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: 'Erreur lors du diagnostic CORS',
        error: error.message
      })
    };
  }
};
