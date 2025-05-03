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

  try {
    // Utiliser la redirection Netlify standard pour toutes les requêtes
    console.log(`Appel API via proxy Netlify: ${normalizedEndpoint}`);
    const url = `/api/${normalizedEndpoint}`;

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
    console.log('Récupération du profil utilisateur via redirection Netlify');

    // Utiliser la redirection Netlify configurée dans netlify.toml
    const endpoint = userId ? `social/profile/${userId}` : 'social/profile';

    const headers = token ? {
      'Authorization': `Bearer ${token}`
    } : {};

    console.log(`Envoi de la requête à /api/${endpoint}`);

    const response = await axios({
      method: 'get',
      url: `/api/${endpoint}`,
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
    console.log('Mise à jour du profil utilisateur via redirection Netlify');

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    console.log('Envoi de la requête à /api/social/profile');

    const response = await axios({
      method: 'put',
      url: '/api/social/profile',
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
    console.log('Mise à jour de l\'avatar via redirection Netlify');

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    console.log('Envoi de la requête à /api/social/profile/avatar/predefined');

    const response = await axios({
      method: 'post',
      url: '/api/social/profile/avatar/predefined',
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

    // Essayer d'abord via la fonction Netlify de test
    try {
      const response = await axios({
        method: 'get',
        url: `${NETLIFY_FUNCTIONS_URL}/api-test`,
        timeout: 5000
      });

      console.log('Résultat du test d\'accessibilité via fonction Netlify:', response.status);

      // Si la fonction de test est accessible, vérifier les fonctions disponibles
      if (response.data && response.data.availableFunctions) {
        console.log('Fonctions Netlify disponibles:', response.data.availableFunctions);
      }

      return true;
    } catch (netlifyError) {
      console.error('Erreur lors de la vérification via fonction Netlify:', netlifyError);

      // Essayer avec une autre fonction Netlify
      try {
        const simpleResponse = await axios({
          method: 'get',
          url: `${NETLIFY_FUNCTIONS_URL}/simple`,
          timeout: 5000
        });

        console.log('Résultat du test d\'accessibilité via fonction simple:', simpleResponse.status);
        return true;
      } catch (simpleError) {
        console.error('Erreur lors de la vérification via fonction simple:', simpleError);
      }
    }

    // Essayer directement via l'API
    try {
      const directResponse = await axios({
        method: 'get',
        url: `${API_FALLBACK_URL}/health`,
        timeout: 5000
      });

      console.log('Résultat du test d\'accessibilité direct:', directResponse.status);
      return true;
    } catch (directError) {
      console.error('Erreur lors de la vérification directe de l\'API:', directError);
    }

    // Si toutes les tentatives échouent, retourner false
    return false;
  } catch (error) {
    console.error('Erreur générale lors de la vérification de l\'accessibilité:', error);
    return false;
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