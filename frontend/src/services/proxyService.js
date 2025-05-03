import axios from 'axios';

// URL de l'API backend (pour les cas où la redirection Netlify ne fonctionne pas)
const API_FALLBACK_URL = 'https://biogy-api.onrender.com/api';
// URL des fonctions Netlify
const NETLIFY_FUNCTIONS_URL = '/.netlify/functions';

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

  // Vérifier si c'est une requête de profil pour utiliser la fonction Netlify dédiée
  const isProfileRequest = normalizedEndpoint.startsWith('social/profile');

  try {
    let url;

    if (isProfileRequest) {
      // Utiliser la fonction Netlify dédiée pour les profils
      console.log(`Appel API via fonction Netlify dédiée pour profil: ${normalizedEndpoint}`);
      url = `${NETLIFY_FUNCTIONS_URL}/profile-proxy`;

      // Si c'est un profil spécifique, ajouter l'ID à l'URL
      if (normalizedEndpoint !== 'social/profile') {
        const profileId = normalizedEndpoint.replace('social/profile/', '');
        url = `${url}/${profileId}`;
      }
    } else {
      // Utiliser la redirection Netlify standard
      console.log(`Appel API via proxy Netlify: ${normalizedEndpoint}`);
      url = `/api/${normalizedEndpoint}`;
    }

    const response = await axios({
      method,
      url,
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
  try {
    console.log('Récupération du profil utilisateur via fonction Netlify dédiée');

    // Utiliser directement la fonction Netlify dédiée
    const url = userId
      ? `${NETLIFY_FUNCTIONS_URL}/profile-proxy/${userId}`
      : `${NETLIFY_FUNCTIONS_URL}/profile-proxy`;

    const headers = token ? {
      'Authorization': `Bearer ${token}`
    } : {};

    const response = await axios({
      method: 'get',
      url,
      headers,
      timeout: 30000
    });

    if (!response.data) {
      throw new Error('Empty response received from server');
    }

    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération du profil:', error);
    throw new Error(`Erreur lors de la récupération du profil: ${error.message}`);
  }
};

/**
 * Met à jour le profil utilisateur
 */
export const updateProfile = async (token, profileData) => {
  if (!token) {
    throw new Error('Token d\'authentification requis');
  }

  try {
    console.log('Mise à jour du profil utilisateur via fonction Netlify dédiée');

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    const response = await axios({
      method: 'put',
      url: `${NETLIFY_FUNCTIONS_URL}/profile-proxy`,
      headers,
      data: profileData,
      timeout: 30000
    });

    if (!response.data) {
      throw new Error('Empty response received from server');
    }

    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil:', error);
    throw new Error(`Erreur lors de la mise à jour du profil: ${error.message}`);
  }
};

/**
 * Met à jour l'avatar de l'utilisateur
 */
export const updateAvatar = async (token, avatarId) => {
  if (!token) {
    throw new Error('Token d\'authentification requis');
  }

  try {
    console.log('Mise à jour de l\'avatar via fonction Netlify dédiée');

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    const response = await axios({
      method: 'post',
      url: `${NETLIFY_FUNCTIONS_URL}/profile-proxy/avatar/predefined`,
      headers,
      data: { avatarId },
      timeout: 30000
    });

    if (!response.data) {
      throw new Error('Empty response received from server');
    }

    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'avatar:', error);
    throw new Error(`Erreur lors de la mise à jour de l'avatar: ${error.message}`);
  }
};

/**
 * Récupère les sujets du forum
 */
export const fetchForumTopics = async (page = 1, limit = 10) => {
  return proxyRequest('get', `forum/topics`, { page, limit });
};

/**
 * Vérifie l'accessibilité de l'API
 */
export const checkApiAccessibility = async () => {
  try {
    console.log('Vérification de l\'accessibilité de l\'API...');

    // Essayer d'abord via la fonction Netlify dédiée
    const response = await axios({
      method: 'get',
      url: `${NETLIFY_FUNCTIONS_URL}/profile-proxy/test`,
      timeout: 5000
    });

    console.log('Résultat du test d\'accessibilité via fonction Netlify:', response.status);
    return true;
  } catch (error) {
    console.error('Erreur lors de la vérification de l\'accessibilité de l\'API:', error);

    try {
      // Essayer directement via l'API
      const directResponse = await axios({
        method: 'get',
        url: `${API_FALLBACK_URL}/health`,
        timeout: 5000
      });

      console.log('Résultat du test d\'accessibilité direct:', directResponse.status);
      return true;
    } catch (directError) {
      console.error('Erreur lors de la vérification directe de l\'API:', directError);
      return false;
    }
  }
};

export default {
  get: (endpoint, data = null, headers = {}) => proxyRequest('get', endpoint, data, headers),
  post: (endpoint, data, headers = {}) => proxyRequest('post', endpoint, data, headers),
  put: (endpoint, data, headers = {}) => proxyRequest('put', endpoint, data, headers),
  delete: (endpoint, data = null, headers = {}) => proxyRequest('delete', endpoint, data, headers),
  fetchProfile,
  updateProfile,
  updateAvatar,
  fetchForumTopics,
  checkApiAccessibility
};