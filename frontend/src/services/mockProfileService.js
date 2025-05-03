/**
 * Service pour fournir des données simulées de profil
 * Utilisé lorsque l'API n'est pas accessible
 */

// Avatars disponibles
const AVATARS = [
  { id: 'avatar1', url: '/images/avatars/avatar1.png' },
  { id: 'avatar2', url: '/images/avatars/avatar2.png' },
  { id: 'avatar3', url: '/images/avatars/avatar3.png' },
  { id: 'avatar4', url: '/images/avatars/avatar4.png' },
  { id: 'avatar5', url: '/images/avatars/avatar5.png' },
  { id: 'avatar6', url: '/images/avatars/avatar6.png' },
];

// Niveaux disponibles
const LEVELS = ['lycée', 'licence', 'master', 'doctorat', 'enseignant', 'chercheur', 'autre'];

// Intérêts disponibles
const INTERESTS = [
  'Biologie cellulaire',
  'Biologie moléculaire',
  'Génétique',
  'Écologie',
  'Microbiologie',
  'Biochimie',
  'Biotechnologie',
  'Biologie marine',
  'Neurobiologie',
  'Immunologie',
  'Botanique',
  'Zoologie',
];

/**
 * Génère un profil simulé pour un utilisateur
 * @param {Object} userInfo - Informations de l'utilisateur (id, username, role, token)
 * @returns {Object} Profil simulé
 */
export const generateMockProfile = (userInfo) => {
  if (!userInfo) {
    return null;
  }

  // Sélectionner un avatar aléatoire
  const randomAvatar = AVATARS[Math.floor(Math.random() * AVATARS.length)];
  
  // Sélectionner un niveau aléatoire
  const randomLevel = LEVELS[Math.floor(Math.random() * LEVELS.length)];
  
  // Sélectionner 1 à 3 intérêts aléatoires
  const randomInterests = [];
  const numInterests = Math.floor(Math.random() * 3) + 1;
  for (let i = 0; i < numInterests; i++) {
    const interest = INTERESTS[Math.floor(Math.random() * INTERESTS.length)];
    if (!randomInterests.includes(interest)) {
      randomInterests.push(interest);
    }
  }

  // Créer un profil simulé
  return {
    _id: userInfo._id,
    user: {
      _id: userInfo._id,
      username: userInfo.username,
      role: userInfo.role
    },
    displayName: userInfo.username,
    bio: 'Ceci est un profil simulé généré localement car l\'API n\'est pas accessible.',
    avatar: {
      id: randomAvatar.id,
      url: randomAvatar.url
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    specialization: 'Non spécifié',
    institution: 'Non spécifié',
    level: randomLevel,
    interests: randomInterests,
    badges: [],
    socialLinks: {},
    settings: {
      emailNotifications: true,
      privateProfile: false,
      showEmail: false
    },
    simulated: true
  };
};

/**
 * Récupère un profil simulé
 * @param {string} token - Token d'authentification
 * @param {string} userId - ID de l'utilisateur (optionnel)
 * @returns {Promise<Object>} Profil simulé
 */
export const fetchMockProfile = async (token, userId = null) => {
  // Récupérer les informations de l'utilisateur depuis le localStorage
  const userInfoStr = localStorage.getItem('userInfo');
  if (!userInfoStr) {
    throw new Error('Utilisateur non connecté');
  }

  try {
    const userInfo = JSON.parse(userInfoStr);
    
    // Si un userId est spécifié et qu'il est différent de l'utilisateur connecté,
    // générer un profil simulé pour cet utilisateur
    if (userId && userId !== userInfo._id) {
      return {
        _id: userId,
        user: {
          _id: userId,
          username: `Utilisateur ${userId.substring(0, 5)}`,
          role: 'user'
        },
        displayName: `Utilisateur ${userId.substring(0, 5)}`,
        bio: 'Ceci est un profil simulé pour un autre utilisateur.',
        avatar: {
          id: 'avatar3',
          url: '/images/avatars/avatar3.png'
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
    
    // Sinon, générer un profil simulé pour l'utilisateur connecté
    return generateMockProfile(userInfo);
  } catch (error) {
    console.error('Erreur lors de la génération du profil simulé:', error);
    throw new Error('Erreur lors de la génération du profil simulé');
  }
};

/**
 * Met à jour un profil simulé
 * @param {string} token - Token d'authentification
 * @param {Object} profileData - Données du profil à mettre à jour
 * @returns {Promise<Object>} Profil simulé mis à jour
 */
export const updateMockProfile = async (token, profileData) => {
  // Récupérer les informations de l'utilisateur depuis le localStorage
  const userInfoStr = localStorage.getItem('userInfo');
  if (!userInfoStr) {
    throw new Error('Utilisateur non connecté');
  }

  try {
    const userInfo = JSON.parse(userInfoStr);
    
    // Récupérer le profil actuel
    const currentProfile = await fetchMockProfile(token);
    
    // Mettre à jour le profil avec les nouvelles données
    const updatedProfile = {
      ...currentProfile,
      ...profileData,
      updatedAt: new Date().toISOString(),
      simulated: true
    };
    
    // Sauvegarder le profil mis à jour dans le localStorage
    localStorage.setItem('mockProfile', JSON.stringify(updatedProfile));
    
    return updatedProfile;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil simulé:', error);
    throw new Error('Erreur lors de la mise à jour du profil simulé');
  }
};

/**
 * Met à jour l'avatar d'un profil simulé
 * @param {string} token - Token d'authentification
 * @param {string} avatarId - ID de l'avatar
 * @returns {Promise<Object>} Profil simulé mis à jour
 */
export const updateMockAvatar = async (token, avatarId) => {
  // Récupérer les informations de l'utilisateur depuis le localStorage
  const userInfoStr = localStorage.getItem('userInfo');
  if (!userInfoStr) {
    throw new Error('Utilisateur non connecté');
  }

  try {
    const userInfo = JSON.parse(userInfoStr);
    
    // Récupérer le profil actuel
    const currentProfile = await fetchMockProfile(token);
    
    // Trouver l'avatar correspondant à l'ID
    const avatar = AVATARS.find(a => a.id === avatarId) || AVATARS[0];
    
    // Mettre à jour le profil avec le nouvel avatar
    const updatedProfile = {
      ...currentProfile,
      avatar: {
        id: avatar.id,
        url: avatar.url
      },
      updatedAt: new Date().toISOString(),
      simulated: true
    };
    
    // Sauvegarder le profil mis à jour dans le localStorage
    localStorage.setItem('mockProfile', JSON.stringify(updatedProfile));
    
    return updatedProfile;
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'avatar simulé:', error);
    throw new Error('Erreur lors de la mise à jour de l\'avatar simulé');
  }
};

export default {
  fetchMockProfile,
  updateMockProfile,
  updateMockAvatar,
  generateMockProfile
};
