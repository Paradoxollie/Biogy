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

    // Essayer d'abord avec la fonction profile-proxy
    try {
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
        timeout: 10000
      });

      if (!response.data) {
        throw new Error('Empty response received from server');
      }

      return response.data;
    } catch (proxyError) {
      console.error('Erreur avec profile-proxy, tentative avec api-test:', proxyError);

      // Si la fonction profile-proxy n'est pas disponible, essayer avec api-test
      try {
        // Vérifier si la fonction api-test est disponible
        const testResponse = await axios({
          method: 'get',
          url: `${NETLIFY_FUNCTIONS_URL}/api-test`,
          timeout: 5000
        });

        console.log('Fonction api-test disponible, utilisation comme proxy');

        // Utiliser api-test comme proxy pour récupérer le profil
        const apiTestUrl = `${NETLIFY_FUNCTIONS_URL}/api-test`;
        const headers = token ? {
          'Authorization': `Bearer ${token}`
        } : {};

        const response = await axios({
          method: 'post',
          url: apiTestUrl,
          headers,
          data: {
            action: 'fetchProfile',
            userId: userId,
            token: token
          },
          timeout: 10000
        });

        if (!response.data) {
          throw new Error('Empty response received from api-test');
        }

        // Si nous avons une réponse de api-test, mais pas de données de profil réelles,
        // utiliser des données simulées pour le moment
        if (!response.data.profile) {
          console.log('Aucune donnée de profil réelle, utilisation de données simulées');

          // Créer un profil simulé basé sur les informations utilisateur
          return {
            _id: userId || (token ? 'user-profile' : 'guest-profile'),
            user: {
              _id: userId || (token ? 'user-id' : 'guest-id'),
              username: 'Utilisateur',
              role: 'user'
            },
            displayName: 'Utilisateur',
            bio: 'Profil simulé - La connexion au serveur n\'a pas pu être établie.',
            avatar: {
              url: '/images/avatars/avatar1.png'
            },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            specialization: 'Non spécifié',
            institution: 'Non spécifié',
            level: 'autre',
            interests: ['Biologie'],
            badges: [],
            socialLinks: {},
            settings: {
              emailNotifications: true,
              privateProfile: false,
              showEmail: false
            },
            simulated: true
          };
        }

        return response.data.profile;
      } catch (apiTestError) {
        console.error('Erreur avec api-test:', apiTestError);

        // Si toutes les tentatives échouent, essayer directement avec l'API
        try {
          console.log('Tentative directe avec l\'API');

          const endpoint = userId ? `social/profile/${userId}` : 'social/profile';
          const url = `${API_FALLBACK_URL}/${endpoint}`;

          const headers = token ? {
            'Authorization': `Bearer ${token}`
          } : {};

          const response = await axios({
            method: 'get',
            url,
            headers,
            timeout: 10000
          });

          if (!response.data) {
            throw new Error('Empty response received from direct API');
          }

          return response.data;
        } catch (directError) {
          console.error('Erreur avec l\'API directe:', directError);
          throw directError;
        }
      }
    }
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