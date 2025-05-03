import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

function ProfileOnline() {
  const { userId } = useParams();
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Déterminer si c'est le profil de l'utilisateur connecté
  const isOwnProfile = !userId || (userInfo && userId === userInfo._id);

  // Charger le profil
  useEffect(() => {
    const fetchProfile = async () => {
      if (!userInfo) {
        navigate('/login', { state: { from: '/profile' } });
        return;
      }

      try {
        setLoading(true);
        console.log('Chargement du profil utilisateur...');

        // Utiliser directement l'API via la redirection Netlify
        const endpoint = isOwnProfile ? '' : `/${userId}`;

        console.log('Accès à l\'API via redirection...');
        const response = await axios({
          method: 'GET',
          url: `/api/social/profile${endpoint}`,
          headers: {
            'Authorization': `Bearer ${userInfo.token}`
          },
          timeout: 10000
        });

        console.log('Données du profil reçues:', response.data);
        setProfile(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération du profil:', error);
        setError('Impossible de charger le profil. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId, userInfo, isOwnProfile, navigate]);

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
                to="/profile/edit"
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
