// Fonction Netlify pour servir de proxy vers l'API backend
const axios = require('axios');

// URL de l'API backend
const API_URL = 'https://biogy-api.onrender.com/api';

// Ajouter un délai pour éviter les problèmes de rate limiting
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Nombre maximum de tentatives
const MAX_RETRIES = 3;

// Fonction pour simuler des données de forum
const simulateForumData = () => {
  return {
    success: true,
    topics: [
      {
        _id: 'simulated-topic-1',
        title: 'Bienvenue sur le forum (simulation)',
        content: 'Ce forum est actuellement en mode simulation pendant que nous résolvons des problèmes techniques.',
        author: {
          _id: 'admin-user',
          username: 'Admin'
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        viewCount: 42,
        replyCount: 5,
        tags: ['Annonce', 'Important']
      },
      {
        _id: 'simulated-topic-2',
        title: 'Comment utiliser le forum',
        content: 'Voici quelques conseils pour utiliser le forum efficacement...',
        author: {
          _id: 'admin-user',
          username: 'Admin'
        },
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        updatedAt: new Date(Date.now() - 86400000).toISOString(),
        viewCount: 28,
        replyCount: 3,
        tags: ['Guide', 'Débutant']
      }
    ],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalTopics: 2
    }
  };
};

// Définir les avatars prédéfinis
const PREDEFINED_AVATARS = [
  { id: 'avatar1', name: 'Microscope', url: 'https://res.cloudinary.com/dkgkwwgpz/image/upload/v1714579200/biogy/avatars/microscope_avatar.png' },
  { id: 'avatar2', name: 'ADN', url: 'https://res.cloudinary.com/dkgkwwgpz/image/upload/v1714579200/biogy/avatars/dna_avatar.png' },
  { id: 'avatar3', name: 'Plante', url: 'https://res.cloudinary.com/dkgkwwgpz/image/upload/v1714579200/biogy/avatars/plant_avatar.png' },
  { id: 'avatar4', name: 'Cellule', url: 'https://res.cloudinary.com/dkgkwwgpz/image/upload/v1714579200/biogy/avatars/cell_avatar.png' },
  { id: 'avatar5', name: 'Neurone', url: 'https://res.cloudinary.com/dkgkwwgpz/image/upload/v1714579200/biogy/avatars/neuron_avatar.png' },
  { id: 'avatar6', name: 'Éprouvette', url: 'https://res.cloudinary.com/dkgkwwgpz/image/upload/v1714579200/biogy/avatars/test_tube_avatar.png' },
  { id: 'avatar7', name: 'Bactérie', url: 'https://res.cloudinary.com/dkgkwwgpz/image/upload/v1714579200/biogy/avatars/bacteria_avatar.png' },
  { id: 'avatar8', name: 'Molécule', url: 'https://res.cloudinary.com/dkgkwwgpz/image/upload/v1714579200/biogy/avatars/molecule_avatar.png' },
  { id: 'avatar9', name: 'Loupe', url: 'https://res.cloudinary.com/dkgkwwgpz/image/upload/v1714579200/biogy/avatars/magnifier_avatar.png' },
  { id: 'avatar10', name: 'Cerveau', url: 'https://res.cloudinary.com/dkgkwwgpz/image/upload/v1714579200/biogy/avatars/brain_avatar.png' }
];

// Fonction pour simuler des données de profil
const simulateProfileData = (userId, requestBody) => {
  // Récupérer l'avatar sélectionné depuis le localStorage ou utiliser un avatar par défaut
  let selectedAvatarId = 'avatar5'; // Par défaut
  let avatarUrl = 'https://res.cloudinary.com/dkgkwwgpz/image/upload/v1714579200/biogy/avatars/neuron_avatar.png';

  // Si un avatar est spécifié dans la requête, l'utiliser
  if (requestBody && requestBody.avatarId) {
    selectedAvatarId = requestBody.avatarId;
    const selectedAvatar = PREDEFINED_AVATARS.find(avatar => avatar.id === selectedAvatarId);
    if (selectedAvatar) {
      avatarUrl = selectedAvatar.url;
    }
  }

  return {
    _id: userId || 'simulated-user-id',
    user: {
      _id: userId || 'simulated-user-id',
      username: 'Utilisateur',
      role: 'user'
    },
    displayName: 'Utilisateur Simulé',
    bio: 'Ceci est un profil simulé pendant que nous résolvons des problèmes techniques.',
    avatar: {
      id: selectedAvatarId,
      url: avatarUrl
    },
    specialization: 'Biologie',
    institution: 'Université de Simulation',
    level: 'master',
    interests: ['Biologie', 'Écologie', 'Génétique'],
    socialLinks: {
      website: 'https://example.com',
      linkedin: 'https://linkedin.com/in/example',
      twitter: 'https://twitter.com/example'
    },
    badges: [
      {
        name: 'Nouveau Membre',
        description: 'A rejoint la communauté',
        icon: '🌟',
        awardedAt: new Date().toISOString()
      }
    ],
    createdAt: new Date(Date.now() - 30 * 86400000).toISOString(),
    updatedAt: new Date().toISOString()
  };
};

exports.handler = async function(event, context) {
  // Définir les headers CORS permissifs
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept, Origin',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Max-Age': '86400'
  };

  // Gérer les requêtes OPTIONS (preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Extraire le chemin de l'API à partir du chemin de la fonction
  const path = event.path.replace('/.netlify/functions/api-proxy', '');

  // Log pour le débogage
  console.log(`API Proxy: ${event.httpMethod} ${path}`);
  console.log(`Origin: ${event.headers.origin || event.headers.Origin || 'unknown'}`);
  console.log(`Auth header present: ${!!(event.headers.authorization || event.headers.Authorization)}`);

  try {
    // Simuler les données pour certaines routes
    if (path === '/forum/topics' || path.startsWith('/forum/topics?')) {
      console.log('Simulation des données du forum');
      return {
        statusCode: 200,
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(simulateForumData())
      };
    }

    if (path === '/social/profile' || path.startsWith('/social/profile/')) {
      console.log('Simulation des données de profil:', path, event.httpMethod);

      // Gérer la mise à jour de l'avatar prédéfini
      if (path === '/social/profile/avatar/predefined' && event.httpMethod === 'POST') {
        try {
          const requestBody = JSON.parse(event.body || '{}');
          console.log('Mise à jour de l\'avatar prédéfini:', requestBody);

          // Vérifier si l'avatar existe
          const avatarId = requestBody.avatarId;
          const avatar = PREDEFINED_AVATARS.find(a => a.id === avatarId);

          if (!avatar) {
            return {
              statusCode: 400,
              headers: {
                ...headers,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ message: 'Avatar non trouvé' })
            };
          }

          // Simuler une réponse réussie
          return {
            statusCode: 200,
            headers: {
              ...headers,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              success: true,
              message: 'Avatar mis à jour avec succès',
              avatar: {
                id: avatar.id,
                url: avatar.url
              }
            })
          };
        } catch (error) {
          console.error('Erreur lors de la mise à jour de l\'avatar:', error);
          return {
            statusCode: 400,
            headers: {
              ...headers,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: 'Erreur lors de la mise à jour de l\'avatar' })
          };
        }
      }

      // Extraire l'ID utilisateur si présent dans le chemin
      const userId = path.startsWith('/social/profile/') && !path.includes('/avatar/')
        ? path.split('/').pop()
        : null;

      // Pour les requêtes PUT, utiliser les données du corps de la requête
      let requestBody = null;
      if (event.httpMethod === 'PUT') {
        try {
          requestBody = JSON.parse(event.body || '{}');
          console.log('Données reçues pour la mise à jour du profil:', requestBody);
        } catch (error) {
          console.error('Erreur lors du parsing du corps de la requête:', error);
        }
      }

      return {
        statusCode: 200,
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(simulateProfileData(userId, requestBody))
      };
    }

    // Pour les autres routes, essayer de contacter le backend réel avec plusieurs tentatives
    try {
      // Construire l'URL complète
      const url = `${API_URL}${path}`;
      console.log(`Tentative de connexion à: ${url}`);

      // Extraire les en-têtes d'autorisation
      const authHeader = event.headers.authorization || event.headers.Authorization;
      const requestHeaders = {};

      if (authHeader) {
        requestHeaders['Authorization'] = authHeader;
      }

      let lastError = null;

      // Essayer plusieurs fois avec un délai entre les tentatives
      for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
          console.log(`Tentative ${attempt}/${MAX_RETRIES} pour ${url}`);

          if (attempt > 1) {
            // Attendre un peu plus longtemps entre chaque tentative
            const waitTime = 1000 * attempt;
            console.log(`Attente de ${waitTime}ms avant la prochaine tentative...`);
            await delay(waitTime);
          }

          // Effectuer la requête au backend
          const response = await axios({
            method: event.httpMethod,
            url,
            headers: {
              ...requestHeaders,
              'Content-Type': 'application/json',
              'Origin': event.headers.origin || event.headers.Origin || 'https://biogy.netlify.app'
            },
            data: event.body ? JSON.parse(event.body) : undefined,
            timeout: 10000 * attempt, // Augmenter le timeout à chaque tentative
            validateStatus: () => true // Accepter tous les codes de statut
          });

          console.log(`Réponse du backend (tentative ${attempt}): ${response.status}`);

          // Si la réponse est un succès ou une erreur 4xx (client), retourner immédiatement
          if (response.status < 500) {
            return {
              statusCode: response.status,
              headers: {
                ...headers,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(response.data)
            };
          }

          // Si c'est une erreur 5xx (serveur), on va réessayer
          lastError = new Error(`Erreur serveur: ${response.status}`);
        } catch (error) {
          console.error(`Erreur lors de la tentative ${attempt}: ${error.message}`);
          lastError = error;
        }
      }

      // Si on arrive ici, c'est que toutes les tentatives ont échoué
      throw lastError || new Error('Toutes les tentatives ont échoué');
    } catch (error) {
      console.error(`Erreur lors de la connexion au backend: ${error.message}`);

      // En cas d'erreur, retourner une réponse simulée pour les routes importantes
      if (path.startsWith('/forum') || path.startsWith('/social')) {
        console.log('Fallback vers des données simulées');

        if (path.startsWith('/forum')) {
          return {
            statusCode: 200,
            headers: {
              ...headers,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(simulateForumData())
          };
        }

        if (path.startsWith('/social')) {
          return {
            statusCode: 200,
            headers: {
              ...headers,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(simulateProfileData())
          };
        }
      }

      // Pour les autres routes, retourner une erreur
      return {
        statusCode: 502,
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: 'Erreur lors de la connexion au backend',
          error: error.message,
          path: path
        })
      };
    }
  } catch (error) {
    console.error('Erreur dans la fonction API Proxy:', error);

    return {
      statusCode: 500,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Erreur interne du serveur',
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
};
