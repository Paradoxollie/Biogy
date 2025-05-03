import axios from 'axios';

// URLs des proxies CORS fiables
const CORS_PROXIES = [
  'https://corsproxy.io/?',
  'https://cors-anywhere.herokuapp.com/',
  'https://api.allorigins.win/get?url=',
  'https://cors-proxy.htmldriven.com/?url='
];

const API_FALLBACK_URL = 'https://biogy-api.onrender.com/api';

/**
 * Service de proxy pour envoyer des requêtes via un proxy CORS si les
 * redirections Netlify échouent
 */
export const proxyRequest = async (method, endpoint, data = null, headers = {}) => {
  // Préparation des headers standard
  const requestHeaders = {
    ...headers
  };

  if ((method === 'post' || method === 'put') && !requestHeaders['Content-Type']) {
    requestHeaders['Content-Type'] = 'application/json';
  }

  // Normaliser le endpoint (retirer /api/ s'il est présent en début)
  const normalizedEndpoint = endpoint.startsWith('/api/')
    ? endpoint.substring(5)
    : endpoint.startsWith('/')
      ? endpoint.substring(1)
      : endpoint;

  // D'abord essayer l'API via le proxy Netlify (configuré dans _redirects)
  try {
    console.log(`Tentative d'appel API via proxy Netlify: ${normalizedEndpoint}`);

    const response = await axios({
      method,
      url: `/api/${normalizedEndpoint}`,
      data,
      headers: requestHeaders,
      withCredentials: false,
      timeout: 15000 // 15 second timeout
    });

    if (!response.data) {
      throw new Error('Empty response received from server');
    }

    return response.data;
  } catch (error) {
    console.warn(`Échec de l'appel via proxy Netlify:`, error);

    // Tentative d'appel direct à l'API
    try {
      console.log(`Tentative de fallback direct vers l'API: ${normalizedEndpoint}`);
      const directUrl = `${API_FALLBACK_URL}/${normalizedEndpoint}`;
      console.log(`Direct API URL: ${directUrl}`);

      const directResponse = await axios({
        method,
        url: directUrl,
        data,
        headers: {
          ...requestHeaders,
          'Origin': window.location.origin
        },
        withCredentials: false,
        timeout: 15000
      });

      if (!directResponse.data) {
        throw new Error('Empty response received from direct API call');
      }

      return directResponse.data;
    } catch (directError) {
      console.warn(`Échec de l'appel direct:`, directError);

      // Si méthode GET, essayer successivement tous les proxies CORS disponibles
      if (method.toLowerCase() === 'get') {
        let lastError = directError;

        // Essayer chaque proxy CORS dans l'ordre
        for (const proxy of CORS_PROXIES) {
          try {
            console.log(`Tentative via proxy CORS: ${proxy}`);
            let proxyUrl;
            let responseHandler;

            // Gérer différemment selon le type de proxy
            if (proxy === 'https://api.allorigins.win/get?url=') {
              proxyUrl = `${proxy}${encodeURIComponent(`${API_FALLBACK_URL}/${normalizedEndpoint}`)}`;
              responseHandler = (res) => {
                if (!res.data || !res.data.contents) {
                  throw new Error('Invalid response from CORS proxy');
                }
                return JSON.parse(res.data.contents);
              };
            } else {
              proxyUrl = `${proxy}${encodeURIComponent(`${API_FALLBACK_URL}/${normalizedEndpoint}`)}`;
              responseHandler = (res) => res.data;
            }

            const proxyResponse = await axios.get(proxyUrl, {
              timeout: 15000
            });

            return responseHandler(proxyResponse);
          } catch (proxyError) {
            console.warn(`Échec avec proxy ${proxy}:`, proxyError);
            lastError = proxyError;
            // Continuer à la prochaine itération pour essayer un autre proxy
          }
        }

        // Si on arrive ici, tous les proxies ont échoué
        console.error(`Tous les proxies CORS ont échoué:`, lastError);
        throw new Error(`Impossible de communiquer avec le serveur après plusieurs tentatives: ${lastError.message}`);
      } else {
        // Pour les autres méthodes, on ne peut pas utiliser les proxies CORS
        console.error(`Impossible d'utiliser le proxy CORS pour ${method}`);
        throw new Error(`Impossible d'envoyer la requête ${method}: ${directError.message}`);
      }
    }
  }
};

export default {
  get: (endpoint, data = null, headers = {}) => proxyRequest('get', endpoint, data, headers),
  post: (endpoint, data, headers = {}) => proxyRequest('post', endpoint, data, headers),
  put: (endpoint, data, headers = {}) => proxyRequest('put', endpoint, data, headers),
  delete: (endpoint, data = null, headers = {}) => proxyRequest('delete', endpoint, data, headers)
};