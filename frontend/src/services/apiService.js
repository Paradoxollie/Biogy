/**
 * Service pour gérer les requêtes API avec gestion des erreurs et CORS
 */

import { API_URL, CORS_PROXIES, TIMEOUTS, FEATURES } from '../config';

// Fonction pour utiliser un proxy CORS si nécessaire
const withCorsProxy = (url) => {
  if (!FEATURES.useProxies) return url;

  // Si l'URL est déjà un proxy, la retourner telle quelle
  if (CORS_PROXIES.some(proxy => url.startsWith(proxy))) {
    return url;
  }

  // Utiliser le premier proxy disponible
  return `${CORS_PROXIES[0]}${encodeURIComponent(url)}`;
};

// Fonction pour vérifier si une URL est accessible directement
const isUrlAccessible = async (url) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const response = await fetch(url, {
      method: 'HEAD',
      mode: 'cors',
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    return response.ok;
  } catch (error) {
    console.log(`URL ${url} n'est pas accessible directement:`, error.message);
    return false;
  }
};

// Fonction pour effectuer une requête API avec gestion des erreurs et CORS
export const apiRequest = async (endpoint, options = {}) => {
  // Forcer l'utilisation de l'URL correcte
  const API_BASE_URL = 'https://biogy-api.onrender.com';

  // Construire l'URL complète
  const url = endpoint.startsWith('http')
    ? endpoint
    : `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;

  console.log('🔍 API_URL dans config:', API_URL);
  console.log('🔍 URL utilisée:', url);

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: TIMEOUTS.apiRequest
  };

  const requestOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers
    }
  };

  // Ajouter un timeout à la requête
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), requestOptions.timeout);
  requestOptions.signal = controller.signal;

  try {
    // Essayer d'abord sans proxy
    let response;
    let error;

    try {
      console.log(`🔄 Requête API directe vers: ${url}`);
      response = await fetch(url, requestOptions);
    } catch (err) {
      console.log(`❌ Échec de la requête directe:`, err.message);
      error = err;
    }

    // Si la requête directe échoue, essayer avec un proxy
    if (!response || !response.ok) {
      if (FEATURES.useProxies) {
        const proxyUrl = withCorsProxy(url);
        console.log(`🔄 Tentative avec proxy: ${proxyUrl}`);

        try {
          response = await fetch(proxyUrl, requestOptions);
        } catch (proxyError) {
          console.error(`❌ Échec de la requête avec proxy:`, proxyError.message);
          // Si le proxy échoue aussi, lancer l'erreur originale
          throw error || proxyError;
        }
      } else {
        // Si les proxies sont désactivés, lancer l'erreur originale
        throw error || new Error(`Erreur lors de la requête vers ${url}`);
      }
    }

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
    return data;
  } catch (error) {
    console.error(`❌ Erreur API:`, error);
    throw error;
  } finally {
    clearTimeout(timeoutId);
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
