import { API_URL, CORS_PROXIES, FEATURES } from '../config';

/**
 * Fonction utilitaire pour effectuer des requêtes API avec gestion des erreurs CORS
 * @param {string} endpoint - Endpoint API (sans le préfixe API_URL)
 * @param {Object} options - Options fetch (method, headers, body, etc.)
 * @param {boolean} useProxy - Utiliser un proxy CORS si nécessaire
 * @returns {Promise<Object>} - Réponse de l'API
 */
export const fetchWithCorsHandling = async (endpoint, options = {}, useProxy = FEATURES.useProxies) => {
  // Assurez-vous que l'endpoint commence par /api/ si ce n'est pas déjà le cas
  const apiEndpoint = endpoint.startsWith('/api/') ? endpoint : `/api/${endpoint}`;

  // URL complète de l'API - Forcer l'utilisation de l'URL correcte
  const apiUrl = `https://biogy-api.onrender.com${apiEndpoint}`;

  console.log(`Tentative de requête à: ${apiUrl}`);

  try {
    // Première tentative: requête directe
    const response = await fetch(apiUrl, options);

    if (response.ok) {
      return await response.json();
    }

    // Si la requête échoue et que useProxy est activé, essayer avec des proxies CORS
    if (useProxy) {
      console.log('Tentative avec proxies CORS...');

      // Essayer chaque proxy CORS jusqu'à ce qu'un fonctionne
      for (const proxy of CORS_PROXIES) {
        try {
          const proxyUrl = `${proxy}${encodeURIComponent(apiUrl)}`;
          console.log(`Tentative avec proxy: ${proxyUrl}`);

          const proxyResponse = await fetch(proxyUrl, options);

          if (proxyResponse.ok) {
            return await proxyResponse.json();
          }
        } catch (proxyError) {
          console.error(`Erreur avec proxy ${proxy}:`, proxyError);
          // Continuer avec le prochain proxy
        }
      }
    }

    // Si toutes les tentatives échouent, lancer une erreur avec les détails
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      `Erreur API (${response.status}): ${errorData.message || 'Erreur inconnue'}`
    );
  } catch (error) {
    console.error('Erreur lors de la requête API:', error);
    throw error;
  }
};

/**
 * Fonction utilitaire pour effectuer des requêtes API avec authentification
 * @param {string} endpoint - Endpoint API (sans le préfixe API_URL)
 * @param {Object} options - Options fetch (method, headers, body, etc.)
 * @param {string} token - Token d'authentification
 * @param {boolean} useProxy - Utiliser un proxy CORS si nécessaire
 * @returns {Promise<Object>} - Réponse de l'API
 */
export const fetchWithAuth = async (endpoint, options = {}, token, useProxy = FEATURES.useProxies) => {
  // Ajouter le header d'authentification
  const authOptions = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`
    }
  };

  return fetchWithCorsHandling(endpoint, authOptions, useProxy);
};

export default {
  fetchWithCorsHandling,
  fetchWithAuth
};
