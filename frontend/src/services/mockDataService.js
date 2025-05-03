// Service pour fournir des données simulées lorsque l'API n'est pas accessible

// Données de profil simulées
const mockProfile = {
  _id: 'simulated-user-id',
  user: {
    _id: 'simulated-user-id',
    username: 'Utilisateur',
    role: 'user'
  },
  displayName: 'Utilisateur Simulé',
  bio: 'Ceci est un profil simulé pendant que nous résolvons des problèmes techniques.',
  avatar: {
    id: 'avatar5',
    url: '/images/avatars/avatar5.png'
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

// Données de forum simulées
const mockForumTopics = {
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

// Fonction pour récupérer le profil simulé
export const getMockProfile = (userId = null) => {
  // Si un ID utilisateur est fourni, on peut personnaliser le profil
  if (userId) {
    return {
      ...mockProfile,
      _id: userId,
      user: {
        ...mockProfile.user,
        _id: userId
      }
    };
  }
  return mockProfile;
};

// Fonction pour mettre à jour le profil simulé
export const updateMockProfile = (profileData) => {
  console.log('Mise à jour du profil simulé:', profileData);
  // Simuler une mise à jour réussie
  return {
    ...mockProfile,
    ...profileData,
    updatedAt: new Date().toISOString()
  };
};

// Fonction pour mettre à jour l'avatar simulé
export const updateMockAvatar = (avatarId) => {
  console.log('Mise à jour de l\'avatar simulé:', avatarId);
  // Simuler une mise à jour réussie
  return {
    success: true,
    message: 'Avatar mis à jour avec succès',
    avatar: {
      id: avatarId,
      url: `/images/avatars/${avatarId}.png`
    }
  };
};

// Fonction pour récupérer les sujets du forum simulés
export const getMockForumTopics = (page = 1, limit = 10) => {
  return mockForumTopics;
};

// Fonction pour vérifier si l'API est accessible
export const isApiAccessible = async () => {
  try {
    const response = await fetch('https://biogy-api.onrender.com/api/health', {
      method: 'GET',
      mode: 'no-cors' // Contourner les restrictions CORS pour le check
    });
    
    // Si on arrive ici, l'API est probablement accessible
    return true;
  } catch (error) {
    console.error('API inaccessible:', error);
    return false;
  }
};

export default {
  getMockProfile,
  updateMockProfile,
  updateMockAvatar,
  getMockForumTopics,
  isApiAccessible
};
