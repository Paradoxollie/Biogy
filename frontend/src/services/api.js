/**
 * Service API centralisé pour toutes les communications avec le backend
 * Gère automatiquement les problèmes CORS et les erreurs
 */

import { API_URL } from '../config';

// Constantes
const DIRECT_API = `${API_URL}/api`;
const NETLIFY_PROXY = '/api';
const SIMPLE_PROXY = '/.netlify/functions/simple-proxy';

/**
 * Effectue une requête API avec gestion des erreurs et CORS
 * Essaie plusieurs méthodes en cas d'échec
 *
 * @param {string} endpoint - Endpoint API (sans le préfixe /api)
 * @param {Object} options - Options fetch
 * @returns {Promise<any>} - Données de la réponse
 */
export const apiRequest = async (endpoint, options = {}) => {
  // S'assurer que l'endpoint commence par /
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

  // Préparer les options par défaut
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  // Fusionner les options
  const requestOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  // Log pour le débogage
  console.log(`API Request: ${path}`, requestOptions);

  // Tableau des stratégies à essayer dans l'ordre
  const strategies = [
    { name: 'Simple Proxy', url: `${SIMPLE_PROXY}${path}` },
    { name: 'Netlify Proxy', url: `${NETLIFY_PROXY}${path}` },
    { name: 'Direct API', url: `${DIRECT_API}${path}` },
  ];

  let lastError = null;

  // Essayer chaque stratégie jusqu'à ce qu'une réussisse
  for (const strategy of strategies) {
    try {
      console.log(`Trying ${strategy.name}: ${strategy.url}`);

      const response = await fetch(strategy.url, requestOptions);

      // Si la réponse n'est pas OK, lancer une erreur
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: `HTTP error! status: ${response.status}` }));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      // Convertir la réponse en JSON
      const data = await response.json();
      console.log(`${strategy.name} succeeded:`, data);
      return data;
    } catch (error) {
      console.warn(`${strategy.name} failed:`, error);
      lastError = error;
      // Continuer avec la stratégie suivante
    }
  }

  // Si toutes les stratégies ont échoué, lancer la dernière erreur
  throw lastError || new Error('Failed to fetch data from API');
};

/**
 * Effectue une requête GET
 * @param {string} endpoint - Endpoint API (sans le préfixe /api)
 * @param {Object} options - Options fetch
 * @returns {Promise<any>} - Données de la réponse
 */
export const get = (endpoint, options = {}) => {
  return apiRequest(endpoint, {
    method: 'GET',
    ...options,
  });
};

/**
 * Effectue une requête POST
 * @param {string} endpoint - Endpoint API (sans le préfixe /api)
 * @param {Object} data - Données à envoyer
 * @param {Object} options - Options fetch
 * @returns {Promise<any>} - Données de la réponse
 */
export const post = (endpoint, data, options = {}) => {
  return apiRequest(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options,
  });
};

/**
 * Effectue une requête PUT
 * @param {string} endpoint - Endpoint API (sans le préfixe /api)
 * @param {Object} data - Données à envoyer
 * @param {Object} options - Options fetch
 * @returns {Promise<any>} - Données de la réponse
 */
export const put = (endpoint, data, options = {}) => {
  return apiRequest(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
    ...options,
  });
};

/**
 * Effectue une requête DELETE
 * @param {string} endpoint - Endpoint API (sans le préfixe /api)
 * @param {Object} options - Options fetch
 * @returns {Promise<any>} - Données de la réponse
 */
export const del = (endpoint, options = {}) => {
  return apiRequest(endpoint, {
    method: 'DELETE',
    ...options,
  });
};

/**
 * Ajoute le token d'authentification aux options
 * @param {Object} options - Options fetch
 * @param {string} token - Token d'authentification
 * @returns {Object} - Options avec token
 */
export const withAuth = (options = {}, token) => {
  if (!token) {
    // Essayer de récupérer le token du localStorage
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      token = userInfo?.token;
    } catch (error) {
      console.error('Error getting token from localStorage:', error);
    }
  }

  if (!token) {
    return options;
  }

  return {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  };
};

// Exporter les fonctions
export default {
  get,
  post,
  put,
  delete: del,
  withAuth,
  apiRequest,
};
