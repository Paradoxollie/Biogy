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

    const response = await axios({
      method,
      url: `/api${normalizedEndpoint}`,
      data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': headers.Authorization || '',
        ...headers
      },
      withCredentials: false // Changed to false to avoid CORS issues
    });

    return response.data;
  } catch (error) {
    console.warn(`Échec de l'appel via proxy Netlify: ${error.message}`);

    // Si l'erreur est 404, c'est probablement que les redirections ne fonctionnent pas
    // Tenter un fallback vers l'API directement (avec risque CORS)
    if (error.response && error.response.status === 404) {
      try {
        console.log(`Tentative de fallback direct vers l'API: ${endpoint}`);

        // Préparer URL complète pour l'API
        const normalizedEndpoint = endpoint.startsWith('/api/')
          ? endpoint.substring(5)
          : endpoint.startsWith('/')
            ? endpoint.substring(1)
            : endpoint;

        const directUrl = `${API_FALLBACK_URL}/${normalizedEndpoint}`;

        // Tenter d'appeler directement l'API (risque d'erreur CORS)
        const directResponse = await axios({
          method,
          url: directUrl,
          data,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': headers.Authorization || '',
            ...headers
          },
          withCredentials: false // Change to false to avoid CORS issues
        });

        return directResponse.data;
      } catch (directError) {
        console.warn(`Échec de l'appel direct: ${directError.message}`);

        // Si l'erreur est liée à CORS, tenter via proxy CORS public
        if (method.toLowerCase() === 'get') {
          try {
            console.log(`Tentative via proxy CORS public: ${endpoint}`);

            // Pour GET uniquement, essayer via un proxy CORS public
            const encodedUrl = encodeURIComponent(`${API_FALLBACK_URL}/${normalizedEndpoint}`);
            const proxyResponse = await axios.get(`${CORS_PROXY_URL}${encodedUrl}`);

            // Les réponses via ce proxy sont encapsulées dans un objet contents
            return JSON.parse(proxyResponse.data.contents);
          } catch (proxyError) {
            console.error(`Toutes les tentatives ont échoué: ${proxyError.message}`);
            throw proxyError;
          }
        } else {
          // Pour les autres méthodes, on ne peut pas utiliser le proxy CORS public
          console.error(`Impossible d'utiliser le proxy CORS pour ${method}`);
          throw directError;
        }
      }
    }

    // Si l'erreur n'est pas 404, propager l'erreur
    throw error;
  }
};

export default {
  get: (endpoint, data = null, headers = {}) => proxyRequest('get', endpoint, data, headers),
  post: (endpoint, data, headers = {}) => proxyRequest('post', endpoint, data, headers),
  put: (endpoint, data, headers = {}) => proxyRequest('put', endpoint, data, headers),
  delete: (endpoint, data = null, headers = {}) => proxyRequest('delete', endpoint, data, headers)
};