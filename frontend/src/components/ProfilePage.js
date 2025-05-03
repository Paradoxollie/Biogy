import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../config';

function ProfilePage() {
  const { userId } = useParams();
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // État supplémentaire pour les fonctionnalités améliorées
  const [showBadges, setShowBadges] = useState(false);

  // Déterminer si c'est le profil de l'utilisateur connecté
  const isOwnProfile = !userId || (userInfo && userId === userInfo._id);

  // Charger le profil
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);

        // URL de l'API en fonction de si c'est le profil de l'utilisateur connecté ou non
        const url = isOwnProfile
          ? `/.netlify/functions/api-proxy/social/profile`
          : `/.netlify/functions/api-proxy/social/profile/${userId}`;

        // Headers avec token si nécessaire
        const headers = userInfo
          ? { Authorization: `Bearer ${userInfo.token}` }
          : {};

        console.log('Chargement du profil depuis:', url);
        const response = await fetch(url, { headers });

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Profil non trouvé');
          } else if (response.status === 403) {
            throw new Error('Ce profil est privé');
          } else {
            throw new Error('Erreur lors de la récupération du profil');
          }
        }

        const data = await response.json();
        console.log('Données du profil reçues:', data);
        setProfile(data);

      } catch (error) {
        console.error('Error fetching profile:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId, userInfo, isOwnProfile]);

  // Gérer l'affichage des badges
  const toggleBadges = () => {
    setShowBadges(!showBadges);
  };

  // Formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-lab-purple"></div>
        <p className="mt-2 text-gray-600">Chargement du profil...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 p-6 rounded-lg text-center">
          <p className="text-red-500 mb-4">{error}</p>
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

        <div className="pt-20 pb-6 px-8">
          <h1 className="text-2xl font-bold text-gray-800">
            {profile.displayName || profile.user?.username || 'Utilisateur'}
          </h1>

          <div className="flex items-center text-gray-500 mt-1">
            <span>@{profile.user?.username}</span>
            {profile.user?.role === 'admin' && (
              <span className="ml-2 px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                Admin
              </span>
            )}
            <span className="mx-2">•</span>
            <span>Membre depuis {formatDate(profile.createdAt)}</span>
          </div>

          <div className="flex items-center mt-4 space-x-4 text-sm">
            <button
              onClick={toggleBadges}
              className="px-3 py-1 bg-lab-purple/10 text-lab-purple rounded-full hover:bg-lab-purple/20 transition-all duration-200"
            >
              {showBadges ? 'Masquer les badges' : 'Voir les badges'}
            </button>
          </div>

          {profile.bio && (
            <div className="mt-6">
              <h3 className="text-gray-700 font-medium mb-2">Bio</h3>
              <p className="text-gray-600">{profile.bio}</p>
            </div>
          )}

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.specialization && (
              <div>
                <h3 className="text-gray-700 font-medium mb-1">Spécialisation</h3>
                <p className="text-gray-600">{profile.specialization}</p>
              </div>
            )}

            {profile.institution && (
              <div>
                <h3 className="text-gray-700 font-medium mb-1">Institution</h3>
                <p className="text-gray-600">{profile.institution}</p>
              </div>
            )}

            {profile.level && (
              <div>
                <h3 className="text-gray-700 font-medium mb-1">Niveau</h3>
                <p className="text-gray-600">
                  {profile.level === 'lycee' && 'Lycée'}
                  {profile.level === 'bts' && 'BTS'}
                  {profile.level === 'dut' && 'DUT / BUT'}
                  {profile.level === 'licence' && 'Licence'}
                  {profile.level === 'master' && 'Master'}
                  {profile.level === 'doctorat' && 'Doctorat'}
                  {profile.level === 'professionnel' && 'Professionnel'}
                  {profile.level === 'autre' && 'Autre'}
                </p>
              </div>
            )}
          </div>

          {profile.interests && profile.interests.length > 0 && (
            <div className="mt-6">
              <h3 className="text-gray-700 font-medium mb-2">Centres d'intérêt</h3>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

          {profile.socialLinks && Object.values(profile.socialLinks).some(link => link) && (
            <div className="mt-6">
              <h3 className="text-gray-700 font-medium mb-2">Liens</h3>
              <div className="flex flex-wrap gap-3">
                {profile.socialLinks.website && (
                  <a
                    href={profile.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lab-blue hover:underline"
                  >
                    Site web
                  </a>
                )}
                {profile.socialLinks.linkedin && (
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lab-blue hover:underline"
                  >
                    LinkedIn
                  </a>
                )}
                {profile.socialLinks.twitter && (
                  <a
                    href={profile.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lab-blue hover:underline"
                  >
                    Twitter
                  </a>
                )}
                {profile.socialLinks.github && (
                  <a
                    href={profile.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lab-blue hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {profile.socialLinks.researchGate && (
                  <a
                    href={profile.socialLinks.researchGate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lab-blue hover:underline"
                  >
                    ResearchGate
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Section des badges */}
      {showBadges && (
        <div className="bg-white rounded-lg shadow-md p-6 sketch-container mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Badges et réalisations</h2>

          {profile.badges && profile.badges.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {profile.badges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-lab-purple/10 rounded-full mb-2">
                    <span className="text-2xl">{badge.icon || '🏆'}</span>
                  </div>
                  <h3 className="font-medium text-gray-800">{badge.name}</h3>
                  <p className="text-xs text-gray-500 text-center mt-1">{badge.description}</p>
                  <span className="text-xs text-gray-400 mt-2">
                    {new Date(badge.awardedAt).toLocaleDateString('fr-FR')}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Aucun badge pour le moment</p>
              <p className="text-sm text-gray-400">
                Participez activement à la communauté pour gagner des badges!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Section des statistiques */}
      <div className="bg-white rounded-lg shadow-md p-6 sketch-container">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Statistiques</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-lab-blue/5 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-lab-blue mb-1">0</div>
            <div className="text-sm text-gray-600">Publications</div>
          </div>

          <div className="bg-lab-purple/5 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-lab-purple mb-1">0</div>
            <div className="text-sm text-gray-600">Discussions</div>
          </div>

          <div className="bg-lab-green/5 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-lab-green mb-1">0</div>
            <div className="text-sm text-gray-600">Commentaires</div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-amber-600 mb-1">0</div>
            <div className="text-sm text-gray-600">Likes reçus</div>
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

export default ProfilePage;
