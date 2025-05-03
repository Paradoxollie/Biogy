import axios from 'axios';

// URL de l'API backend (pour les cas où la redirection Netlify ne fonctionne pas)
const API_FALLBACK_URL = 'https://biogy-api.onrender.com/api';

/**
 * Service de proxy pour envoyer des requêtes via un proxy CORS si les
 * redirections Netlify échouent
 */
/**
 * Service de proxy pour envoyer des requêtes via les redirections Netlify
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

  try {
    console.log(`Appel API via proxy Netlify: ${normalizedEndpoint}`);

    // Utiliser la redirection Netlify configurée dans _redirects
    const response = await axios({
      method,
      url: `/api/${normalizedEndpoint}`,
      data,
      headers: requestHeaders,
      withCredentials: false,
      timeout: 30000 // 30 second timeout
    });

    if (!response.data) {
      throw new Error('Empty response received from server');
    }

    return response.data;
  } catch (error) {
    console.error(`Erreur lors de l'appel API:`, error);

    // Renvoyer une erreur claire
    throw new Error(`Erreur lors de la communication avec le serveur: ${error.message}`);
  }
};

/**
 * Récupère le profil utilisateur
 */
export const fetchProfile = async (token, userId = null) => {
  const endpoint = userId ? `social/profile/${userId}` : 'social/profile';

  const headers = token ? {
    'Authorization': `Bearer ${token}`
  } : {};

  return proxyRequest('get', endpoint, null, headers);
};

/**
 * Met à jour le profil utilisateur
 */
export const updateProfile = async (token, profileData) => {
  if (!token) {
    throw new Error('Token d\'authentification requis');
  }

  const headers = {
    'Authorization': `Bearer ${token}`
  };

  return proxyRequest('put', 'social/profile', profileData, headers);
};

/**
 * Met à jour l'avatar de l'utilisateur
 */
export const updateAvatar = async (token, avatarId) => {
  if (!token) {
    throw new Error('Token d\'authentification requis');
  }

  const headers = {
    'Authorization': `Bearer ${token}`
  };

  return proxyRequest('post', 'social/profile/avatar/predefined', { avatarId }, headers);
};

/**
 * Récupère les sujets du forum
 */
export const fetchForumTopics = async (page = 1, limit = 10) => {
  return proxyRequest('get', `forum/topics`, { page, limit });
};

export default {
  get: (endpoint, data = null, headers = {}) => proxyRequest('get', endpoint, data, headers),
  post: (endpoint, data, headers = {}) => proxyRequest('post', endpoint, data, headers),
  put: (endpoint, data, headers = {}) => proxyRequest('put', endpoint, data, headers),
  delete: (endpoint, data = null, headers = {}) => proxyRequest('delete', endpoint, data, headers),
  fetchProfile,
  updateProfile,
  updateAvatar,
  fetchForumTopics
};