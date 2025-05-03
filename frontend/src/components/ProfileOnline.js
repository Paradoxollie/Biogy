import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

// Clé pour le stockage local du profil (fallback)
const PROFILE_STORAGE_KEY = 'biogy_profile_data';

function ProfileOnline() {
  const { userId } = useParams();
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingFallback, setUsingFallback] = useState(false);

  // Déterminer si c'est le profil de l'utilisateur connecté
  const isOwnProfile = !userId || (userInfo && userId === userInfo._id);

  // Charger le profil
  useEffect(() => {
    const fetchProfile = async () => {
      if (!userInfo) {
        navigate('/login', { state: { from: '/profile-online' } });
        return;
      }

      try {
        setLoading(true);
        console.log('Chargement du profil utilisateur en ligne...');

        // Utiliser la fonction Netlify pour récupérer le profil
        const endpoint = isOwnProfile ? '' : `/${userId}`;

        // Essayer d'abord avec la fonction Netlify améliorée
        try {
          console.log('Tentative avec la fonction profile-online...');
          const response = await axios({
            method: 'GET',
            url: `/.netlify/functions/profile-online${endpoint}`,
            headers: {
              'Authorization': `Bearer ${userInfo.token}`
            },
            timeout: 15000
          });

          console.log('Données du profil reçues via profile-online:', response.data);
          setProfile(response.data);
          setUsingFallback(false);
          return;
        } catch (netlifyError) {
          console.error('Erreur avec la fonction profile-online:', netlifyError);

          // Essayer avec la fonction de diagnostic CORS
          try {
            console.log('Tentative avec la fonction cors-diagnostic...');
            const corsResponse = await axios({
              method: 'GET',
              url: '/.netlify/functions/cors-diagnostic',
              params: {
                endpoint: `social/profile${endpoint}`,
                method: 'GET',
                useToken: 'true'
              },
              headers: {
                'Authorization': `Bearer ${userInfo.token}`
              },
              timeout: 15000
            });

            if (corsResponse.data && corsResponse.data.actual && corsResponse.data.actual.data) {
              console.log('Données du profil reçues via cors-diagnostic:', corsResponse.data.actual.data);
              setProfile(corsResponse.data.actual.data);
              setUsingFallback(false);
              return;
            } else {
              throw new Error('Données de profil non trouvées dans la réponse du diagnostic');
            }
          } catch (corsError) {
            console.error('Erreur avec la fonction cors-diagnostic:', corsError);
            throw corsError; // Passer à la gestion de fallback
          }
        }
      } catch (error) {
        console.error('Toutes les tentatives de récupération en ligne ont échoué:', error);

        // Essayer de récupérer le profil local comme fallback
        try {
          const storedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);

          if (storedProfile) {
            const profileData = JSON.parse(storedProfile);
            console.log('Utilisation du profil local comme fallback:', profileData);
            setProfile(profileData);
            setUsingFallback(true);
            setError('Impossible de charger le profil en ligne. Affichage du profil local.');
          } else {
            // Créer un profil simulé en dernier recours
            const simulatedProfile = createSimulatedProfile(userInfo);
            setProfile(simulatedProfile);
            setUsingFallback(true);
            setError('Impossible de charger le profil. Affichage d\'un profil simulé.');
          }
        } catch (fallbackError) {
          console.error('Erreur avec le profil de secours:', fallbackError);
          const simulatedProfile = createSimulatedProfile(userInfo);
          setProfile(simulatedProfile);
          setUsingFallback(true);
          setError('Impossible de charger le profil. Affichage d\'un profil simulé.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId, userInfo, isOwnProfile, navigate]);

  // Fonction pour créer un profil simulé
  const createSimulatedProfile = (userInfo) => {
    // Avatars disponibles
    const avatars = [
      { id: 'avatar1', url: '/images/avatars/avatar1.png', name: 'ADN' },
      { id: 'avatar2', url: '/images/avatars/avatar2.png', name: 'Microscope' },
      { id: 'avatar3', url: '/images/avatars/avatar3.png', name: 'Atome' },
      { id: 'avatar4', url: '/images/avatars/avatar4.png', name: 'Éprouvette' },
      { id: 'avatar5', url: '/images/avatars/avatar5.png', name: 'Neurone' },
      { id: 'avatar6', url: '/images/avatars/avatar6.png', name: 'Bactérie' },
    ];

    // Sélectionner un avatar aléatoire
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

    // Créer un nouveau profil
    return {
      _id: userInfo._id,
      user: {
        _id: userInfo._id,
        username: userInfo.username,
        role: userInfo.role
      },
      displayName: userInfo.username,
      bio: 'Bienvenue sur mon profil! Cliquez sur "Modifier le profil" pour personnaliser votre page.',
      avatar: {
        id: randomAvatar.id,
        url: randomAvatar.url,
        name: randomAvatar.name
      },
      specialization: 'Non spécifié',
      institution: 'Non spécifié',
      level: 'autre',
      interests: ['biologie', 'sciences'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      simulated: true
    };
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-600">Chargement du profil...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-yellow-50 p-6 rounded-lg text-center">
          <p className="text-yellow-600 mb-4">Profil non trouvé</p>
          <Link
            to="/"
            className="px-4 py-2 bg-lab-purple text-white rounded-lg"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {error && (
        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <p className="text-yellow-600">{error}</p>
        </div>
      )}

      {usingFallback && (
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="text-blue-600">
            <strong>Mode hors ligne:</strong> Vous consultez une version locale du profil.
            Les modifications ne seront pas synchronisées avec le serveur.
          </p>
        </div>
      )}

      {/* En-tête du profil */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden sketch-container mb-6">
        <div className="bg-gradient-to-r from-lab-blue to-lab-purple h-32 relative">
          {/* Avatar */}
          <div className="absolute -bottom-16 left-8">
            <div className="w-32 h-32 rounded-full bg-white p-1 shadow-lg">
              {profile.avatar && profile.avatar.url ? (
                <img
                  src={profile.avatar.url}
                  alt={profile.user?.username || 'Utilisateur'}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Bouton d'édition */}
          <div className="absolute bottom-4 right-4">
            {isOwnProfile ? (
              <Link
                to="/profile/edit-online"
                className="px-4 py-2 bg-white text-lab-purple border border-lab-purple rounded-lg hover:bg-lab-purple/5 transition-all duration-300"
              >
                Modifier le profil
              </Link>
            ) : (
              <Link
                to="/forum"
                className="px-4 py-2 bg-lab-purple text-white rounded-lg hover:bg-lab-purple/90 transition-all duration-300"
              >
                Voir dans le forum
              </Link>
            )}
          </div>
        </div>

        {/* Informations du profil */}
        <div className="pt-20 px-8 pb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            {profile.displayName || profile.user?.username || 'Utilisateur'}
          </h1>

          <div className="text-sm text-gray-500 mb-4">
            @{profile.user?.username}
            {profile.simulated && (
              <span className="ml-2 text-amber-500">(Profil simulé)</span>
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">À propos</h2>
            <p className="text-gray-600">
              {profile.bio || "Aucune biographie renseignée."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Informations</h2>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="text-gray-500 w-32">Spécialisation:</span>
                  <span className="text-gray-700">{profile.specialization || "Non spécifié"}</span>
                </li>
                <li className="flex">
                  <span className="text-gray-500 w-32">Institution:</span>
                  <span className="text-gray-700">{profile.institution || "Non spécifié"}</span>
                </li>
                <li className="flex">
                  <span className="text-gray-500 w-32">Niveau:</span>
                  <span className="text-gray-700">
                    {profile.level === 'lycee' && "Lycée"}
                    {profile.level === 'bts' && "BTS"}
                    {profile.level === 'dut' && "DUT/BUT"}
                    {profile.level === 'licence' && "Licence"}
                    {profile.level === 'master' && "Master"}
                    {profile.level === 'doctorat' && "Doctorat"}
                    {profile.level === 'professionnel' && "Professionnel"}
                    {profile.level === 'autre' && "Autre"}
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Centres d'intérêt</h2>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(profile.interests) && profile.interests.length > 0 ? (
                  profile.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="bg-lab-blue/10 text-lab-blue px-3 py-1 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500">Aucun centre d'intérêt spécifié</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles spécifiques pour l'effet crayon/schéma */}
      <style jsx="true">{`
        .sketch-container {
          position: relative;
          box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
        }

        .sketch-container:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid #333;
          border-radius: 0.5rem;
          opacity: 0.08;
          pointer-events: none;
          transform: translate(2px, 2px);
        }
      `}</style>
    </div>
  );
}

export default ProfileOnline;
