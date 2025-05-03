import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

// Clé pour le stockage local du profil
const PROFILE_STORAGE_KEY = 'biogy_profile_data';

function ProfileDebug() {
  const { userInfo } = useAuth();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [storedProfile, setStoredProfile] = useState(null);

  // Charger le profil stocké au chargement du composant
  useEffect(() => {
    try {
      const profileData = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (profileData) {
        setStoredProfile(JSON.parse(profileData));
      }
    } catch (error) {
      console.error('Erreur lors de la lecture du profil:', error);
    }
  }, []);

  const runTests = () => {
    setLoading(true);
    setResults([]);

    try {
      // Test 1: Vérifier l'authentification
      addResult('Vérification de l\'authentification',
        userInfo ? 'Utilisateur connecté' : 'Utilisateur non connecté',
        userInfo ? 'success' : 'warning'
      );

      if (!userInfo) {
        addResult('Tests arrêtés', 'Veuillez vous connecter pour continuer les tests', 'error');
        setLoading(false);
        return;
      }

      // Test 2: Vérifier le profil stocké
      if (storedProfile) {
        addResult('Profil stocké localement',
          `Profil trouvé pour ${storedProfile.displayName || storedProfile.user?.username}`,
          'success'
        );
      } else {
        addResult('Profil stocké localement',
          'Aucun profil trouvé dans le localStorage',
          'warning'
        );
      }

      // Test 3: Vérifier les informations utilisateur
      addResult('Informations utilisateur',
        `Nom: ${userInfo.username}, Rôle: ${userInfo.role}, ID: ${userInfo._id}`,
        'success'
      );

      // Test 4: Informations sur le mode de fonctionnement
      addResult('Mode de fonctionnement',
        'La page profil fonctionne en mode local (données stockées dans le navigateur)',
        'info'
      );

      // Test 5: Conseils
      addResult('Conseils',
        'Pour utiliser pleinement la page profil, visitez la page d\'édition et personnalisez votre profil',
        'info'
      );

    } catch (error) {
      addResult('Erreur générale', error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  const addResult = (title, message, status) => {
    setResults(prev => [...prev, { title, message, status }]);
  };

  const resetProfile = () => {
    try {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      setStoredProfile(null);
      addResult('Réinitialisation du profil',
        'Profil supprimé du localStorage avec succès',
        'success'
      );
    } catch (error) {
      addResult('Réinitialisation du profil',
        `Erreur: ${error.message}`,
        'error'
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden sketch-container">
        <div className="bg-gradient-to-r from-lab-blue to-lab-purple p-6">
          <h1 className="text-2xl font-bold text-white">Diagnostic de la page profil</h1>
        </div>

        <div className="p-6">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={runTests}
              disabled={loading}
              className="px-6 py-2 bg-lab-purple text-white rounded-lg hover:bg-lab-purple/90 disabled:opacity-50"
            >
              {loading ? 'Tests en cours...' : 'Lancer les tests'}
            </button>

            <button
              onClick={resetProfile}
              className="px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50"
            >
              Réinitialiser le profil
            </button>
          </div>

          {storedProfile && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Profil stocké</h2>
              <div className="flex items-center mb-4">
                {storedProfile.avatar && storedProfile.avatar.url && (
                  <img
                    src={storedProfile.avatar.url}
                    alt="Avatar"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                )}
                <div>
                  <p className="font-semibold">{storedProfile.displayName || storedProfile.user?.username}</p>
                  <p className="text-sm text-gray-500">{storedProfile.specialization || 'Aucune spécialisation'}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <p><span className="text-gray-500">Bio:</span> {storedProfile.bio || 'Aucune bio'}</p>
                <p><span className="text-gray-500">Institution:</span> {storedProfile.institution || 'Non spécifiée'}</p>
                <p><span className="text-gray-500">Niveau:</span> {storedProfile.level || 'Non spécifié'}</p>
                <p>
                  <span className="text-gray-500">Centres d'intérêt:</span> {
                    Array.isArray(storedProfile.interests) && storedProfile.interests.length > 0
                      ? storedProfile.interests.join(', ')
                      : 'Aucun'
                  }
                </p>
              </div>

              <div className="mt-4 flex justify-end">
                <Link
                  to="/profile/edit"
                  className="text-lab-purple hover:underline"
                >
                  Modifier ce profil
                </Link>
              </div>
            </div>
          )}

          <div className="mb-6 p-4 bg-blue-50 rounded-lg text-blue-700">
            <h3 className="font-semibold">Mode de fonctionnement</h3>
            <p>Cette page profil fonctionne en mode local, sans connexion à l'API. Toutes les données sont stockées dans le navigateur.</p>
            <p className="mt-2">Cette solution a été mise en place pour contourner les problèmes de CORS et garantir un fonctionnement minimal.</p>
          </div>

          {results.length > 0 && (
            <div className="space-y-4">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    result.status === 'success' ? 'bg-green-50 text-green-700' :
                    result.status === 'warning' ? 'bg-yellow-50 text-yellow-700' :
                    result.status === 'info' ? 'bg-blue-50 text-blue-700' :
                    'bg-red-50 text-red-700'
                  }`}
                >
                  <h3 className="font-semibold">{result.title}</h3>
                  <p>{result.message}</p>
                </div>
              ))}
            </div>
          )}
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

export default ProfileDebug;
