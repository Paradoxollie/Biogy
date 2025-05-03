/**
 * Service pour gérer les requêtes API avec gestion des erreurs et CORS
 */

import { API_URL, CORS_PROXIES } from '../config';

// Proxy CORS principal à utiliser
const PRIMARY_PROXY = CORS_PROXIES[0]; // 'https://corsproxy.io/?'

/**
 * Fonction pour effectuer une requête API via un proxy CORS
 * Approche simplifiée et directe pour contourner les problèmes CORS
 */
export const apiRequest = async (endpoint, options = {}) => {
  // Construire l'URL complète de l'API
  const apiUrl = endpoint.startsWith('http')
    ? endpoint
    : `${API_URL}/api${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;

  // Construire l'URL avec le proxy CORS
  const proxyUrl = `${PRIMARY_PROXY}${encodeURIComponent(apiUrl)}`;

  console.log(`🔄 Requête API via proxy CORS: ${proxyUrl}`);

  // Options par défaut
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Fusionner les options
  const requestOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers
    }
  };

  try {
    // Effectuer la requête via le proxy CORS
    const response = await fetch(proxyUrl, requestOptions);

    // Vérifier si la réponse est OK
    if (!response.ok) {
      let errorMessage;

      try {
        // Essayer de parser le message d'erreur JSON
        const errorData = await response.json();
        errorMessage = errorData.message || `Erreur ${response.status}: ${response.statusText}`;
      } catch (e) {
        // Si ce n'est pas du JSON, utiliser le statut HTTP
        errorMessage = `Erreur ${response.status}: ${response.statusText}`;
      }

      throw new Error(errorMessage);
    }

    // Parser la réponse JSON
    const data = await response.json();
    console.log(`✅ Réponse API reçue:`, data);
    return data;
  } catch (error) {
    console.error(`❌ Erreur API:`, error);
    throw error;
  }
};

// Méthodes HTTP courantes
export const get = (endpoint, options = {}) => {
  return apiRequest(endpoint, { ...options, method: 'GET' });
};

export const post = (endpoint, data, options = {}) => {
  return apiRequest(endpoint, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data)
  });
};

export const put = (endpoint, data, options = {}) => {
  return apiRequest(endpoint, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data)
  });
};

export const del = (endpoint, options = {}) => {
  return apiRequest(endpoint, { ...options, method: 'DELETE' });
};

export default {
  get,
  post,
  put,
  delete: del
};
