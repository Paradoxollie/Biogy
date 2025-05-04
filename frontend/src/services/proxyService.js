import axios from 'axios';

// URLs de backup pour le cas où les redirections Netlify échouent
const CORS_PROXY_URL = 'https://api.allorigins.win/get?url=';
const API_FALLBACK_URL = 'https://biogy-api.onrender.com/api';

/**
 * Service de proxy pour envoyer des requêtes via un proxy CORS si les
 * redirections Netlify échouent
 */
export const proxyRequest = async (method, endpoint, data = null, headers = {}) => {
  // D'abord essayer l'API via le proxy Netlify (configuré dans _redirects)
  try {
    // Normaliser le endpoint (retirer /api/ s'il est présent en début)
    const normalizedEndpoint = endpoint.startsWith('/api/')
      ? endpoint.substring(5)
      : endpoint.startsWith('/')
        ? endpoint
        : `/${endpoint}`;

    console.log(`Tentative d'appel API via proxy Netlify: ${normalizedEndpoint}`);

    // Make sure we have the right content type for POST/PUT requests
    const requestHeaders = {
      ...headers
    };

    if ((method === 'post' || method === 'put') && !requestHeaders['Content-Type']) {
      requestHeaders['Content-Type'] = 'application/json';
    }

    const response = await axios({
      method,
      url: `/api${normalizedEndpoint}`,
      data,
      headers: requestHeaders,
      withCredentials: false, // Changed to false to avoid CORS issues
      timeout: 15000 // 15 second timeout
    });

    if (!response.data) {
      throw new Error('Empty response received from server');
    }

    return response.data;
  } catch (error) {
    console.warn(`Échec de l'appel via proxy Netlify:`, error);

    // Si l'erreur est 404 ou une erreur réseau, tenter un fallback direct
    if ((error.response && error.response.status === 404) ||
        error.message.includes('Network Error') ||
        error.code === 'ECONNABORTED') {
      try {
        console.log(`Tentative de fallback direct vers l'API: ${endpoint}`);

        // Préparer URL complète pour l'API
        const normalizedEndpoint = endpoint.startsWith('/api/')
          ? endpoint.substring(5)
          : endpoint.startsWith('/')
            ? endpoint.substring(1)
            : endpoint;

        const directUrl = `${API_FALLBACK_URL}/${normalizedEndpoint}`;
        console.log(`Direct API URL: ${directUrl}`);

        // Make sure we have the right content type for POST/PUT requests
        const requestHeaders = {
          ...headers
        };

        if ((method === 'post' || method === 'put') && !requestHeaders['Content-Type']) {
          requestHeaders['Content-Type'] = 'application/json';
        }

        // Tenter d'appeler directement l'API (risque d'erreur CORS)
        const directResponse = await axios({
          method,
          url: directUrl,
          data,
          headers: requestHeaders,
          withCredentials: false, // Change to false to avoid CORS issues
          timeout: 15000 // 15 second timeout
        });

        if (!directResponse.data) {
          throw new Error('Empty response received from direct API call');
        }

        return directResponse.data;
      } catch (directError) {
        console.warn(`Échec de l'appel direct:`, directError);

        // Si l'erreur est liée à CORS et c'est une requête GET, tenter via proxy CORS public
        if (method.toLowerCase() === 'get') {
          try {
            console.log(`Tentative via proxy CORS public: ${endpoint}`);

            // Pour GET uniquement, essayer via un proxy CORS public
            const encodedUrl = encodeURIComponent(`${API_FALLBACK_URL}/${normalizedEndpoint}`);
            const proxyResponse = await axios.get(`${CORS_PROXY_URL}${encodedUrl}`, {
              timeout: 15000 // 15 second timeout
            });

            // Les réponses via ce proxy sont encapsulées dans un objet contents
            if (!proxyResponse.data || !proxyResponse.data.contents) {
              throw new Error('Invalid response from CORS proxy');
            }

            return JSON.parse(proxyResponse.data.contents);
          } catch (proxyError) {
            console.error(`Toutes les tentatives ont échoué:`, proxyError);
            throw new Error(`Impossible de communiquer avec le serveur: ${proxyError.message}`);
          }
        } else {
          // Pour les autres méthodes, on ne peut pas utiliser le proxy CORS public
          console.error(`Impossible d'utiliser le proxy CORS pour ${method}`);
          throw new Error(`Impossible d'envoyer la requête ${method}: ${directError.message}`);
        }
      }
    }

    // Si l'erreur n'est pas 404, propager l'erreur avec un message plus clair
    throw new Error(`Erreur de communication avec le serveur: ${error.message}`);
  }
};

export default {
  get: (endpoint, data = null, headers = {}) => proxyRequest('get', endpoint, data, headers),
  post: (endpoint, data, headers = {}) => proxyRequest('post', endpoint, data, headers),
  put: (endpoint, data, headers = {}) => proxyRequest('put', endpoint, data, headers),
  delete: (endpoint, data = null, headers = {}) => proxyRequest('delete', endpoint, data, headers)
};