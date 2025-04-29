/**
 * Service de proxy CORS pour contourner les problèmes CORS
 * Utilise plusieurs services de proxy CORS publics avec fallback
 */

import { API_URL, CORS_PROXIES, TIMEOUTS, FEATURES } from '../config';

// Activer/désactiver les proxies selon la configuration
const USE_PROXIES = FEATURES.useProxies;

/**
 * Crée une URL avec proxy CORS
 * @param {string} url - URL à proxifier
 * @param {number} proxyIndex - Index du proxy à utiliser (0 par défaut)
 * @returns {string} URL avec proxy
 */
export const createProxyUrl = (url, proxyIndex = 0) => {
  // Si les proxies sont désactivés, retourner l'URL directe
  if (!USE_PROXIES) {
    return url.startsWith('http') ? url : `${API_URL}/api${url.startsWith('/') ? url : `/${url}`}`;
  }

  // S'assurer que l'index est valide
  const index = proxyIndex % CORS_PROXIES.length;

  // Si l'URL est déjà absolue, l'utiliser telle quelle
  const targetUrl = url.startsWith('http') ? url : `${API_URL}/api${url.startsWith('/') ? url : `/${url}`}`;

  // Encoder l'URL pour certains proxies qui le nécessitent
  const encodedUrl = CORS_PROXIES[index].includes('?url=')
    ? encodeURIComponent(targetUrl)
    : targetUrl;

  return `${CORS_PROXIES[index]}${encodedUrl}`;
};

/**
 * Effectue une requête via un proxy CORS avec fallback automatique
 * @param {string} url - URL à appeler
 * @param {Object} options - Options fetch
 * @param {number} attempt - Numéro de tentative (pour le fallback)
 * @returns {Promise<Response>} Réponse fetch
 */
export const fetchWithCorsProxy = async (url, options = {}, attempt = 0) => {
  // Si les proxies sont désactivés, faire une requête directe
  if (!USE_PROXIES) {
    const directUrl = url.startsWith('http') ? url : `${API_URL}/api${url.startsWith('/') ? url : `/${url}`}`;
    console.log(`Requête directe (sans proxy) vers: ${directUrl}`);

    return fetch(directUrl, {
      ...options,
      signal: options.signal || (AbortSignal.timeout ? AbortSignal.timeout(TIMEOUTS.apiRequest) : undefined)
    });
  }

  // Maximum 3 tentatives (un pour chaque proxy)
  if (attempt >= CORS_PROXIES.length) {
    throw new Error('Tous les proxies CORS ont échoué');
  }

  try {
    // Créer l'URL avec proxy
    const proxyUrl = createProxyUrl(url, attempt);
    console.log(`Tentative ${attempt + 1}/${CORS_PROXIES.length} via proxy CORS: ${proxyUrl}`);

    // Effectuer la requête
    const response = await fetch(proxyUrl, {
      ...options,
      // Ajouter mode: 'cors' pour s'assurer que les requêtes CORS sont autorisées
      mode: 'cors',
      // Augmenter le timeout pour les proxies publics qui peuvent être lents
      signal: options.signal || (AbortSignal.timeout ? AbortSignal.timeout(TIMEOUTS.proxyRequest) : undefined)
    });

    // Vérifier si la réponse est OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.warn(`Proxy CORS ${attempt + 1} a échoué:`, error);

    // Essayer le prochain proxy
    return fetchWithCorsProxy(url, options, attempt + 1);
  }
};

/**
 * Effectue une requête GET via un proxy CORS
 * @param {string} url - URL à appeler
 * @param {Object} options - Options fetch
 * @returns {Promise<any>} Données JSON
 */
export const getWithProxy = async (url, options = {}) => {
  const response = await fetchWithCorsProxy(url, {
    method: 'GET',
    ...options
  });
  return response.json();
};

/**
 * Effectue une requête POST via un proxy CORS
 * @param {string} url - URL à appeler
 * @param {Object} data - Données à envoyer
 * @param {Object} options - Options fetch
 * @returns {Promise<any>} Données JSON
 */
export const postWithProxy = async (url, data, options = {}) => {
  const response = await fetchWithCorsProxy(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    body: JSON.stringify(data),
    ...options
  });
  return response.json();
};

export default {
  get: getWithProxy,
  post: postWithProxy,
  fetchWithCorsProxy
};
