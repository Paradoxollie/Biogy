import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BROWSER_API_URL } from '../config';

function ProfileEditPage() {
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // État du formulaire
  const [formData, setFormData] = useState({
    displayName: '',
    bio: '',
    specialization: '',
    institution: '',
    level: 'autre',
    interests: '',
    avatar: {
      url: '',
      type: 'preset'
    },
    socialLinks: {
      website: '',
      linkedin: '',
      twitter: '',
      github: '',
      researchGate: ''
    },
    settings: {
      emailNotifications: true,
      privateProfile: false,
      showEmail: false
    }
  });

  // Liste des avatars prédéfinis
  const presetAvatars = [
    { id: 'default', url: '', label: 'Avatar par défaut' },
    { id: 'scientist1', url: 'https://cdn-icons-png.flaticon.com/512/3048/3048122.png', label: 'Scientifique 1' },
    { id: 'scientist2', url: 'https://cdn-icons-png.flaticon.com/512/4205/4205906.png', label: 'Scientifique 2' },
    { id: 'microscope', url: 'https://cdn-icons-png.flaticon.com/512/1048/1048317.png', label: 'Microscope' },
    { id: 'dna', url: 'https://cdn-icons-png.flaticon.com/512/2941/2941522.png', label: 'ADN' },
    { id: 'flask', url: 'https://cdn-icons-png.flaticon.com/512/1048/1048302.png', label: 'Fiole' },
    { id: 'atom', url: 'https://cdn-icons-png.flaticon.com/512/1048/1048305.png', label: 'Atome' },
    { id: 'plant', url: 'https://cdn-icons-png.flaticon.com/512/2971/2971246.png', label: 'Plante' }
  ];

  // Charger les données du profil
  useEffect(() => {
    const fetchProfile = async () => {
      if (!userInfo) {
        navigate('/login', { state: { from: '/profile/edit' } });
        return;
      }

      try {
        setLoading(true);

        const response = await fetch(`${BROWSER_API_URL}/social/profile`, {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          }
        });

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération du profil');
        }

        const data = await response.json();

        // Mettre à jour le formulaire avec les données du profil
        setFormData({
          displayName: data.displayName || '',
          bio: data.bio || '',
          specialization: data.specialization || '',
          institution: data.institution || '',
          level: data.level || 'autre',
          interests: data.interests ? data.interests.join(', ') : '',
          avatar: {
            url: data.avatar?.url || '',
            type: data.avatar?.type || 'preset'
          },
          socialLinks: {
            website: data.socialLinks?.website || '',
            linkedin: data.socialLinks?.linkedin || '',
            twitter: data.socialLinks?.twitter || '',
            github: data.socialLinks?.github || '',
            researchGate: data.socialLinks?.researchGate || ''
          },
          settings: {
            emailNotifications: data.settings?.emailNotifications ?? true,
            privateProfile: data.settings?.privateProfile ?? false,
            showEmail: data.settings?.showEmail ?? false
          }
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userInfo, navigate]);

  // Gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith('socialLinks.')) {
      const socialLinkKey = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [socialLinkKey]: value
        }
      }));
    } else if (name.startsWith('settings.')) {
      const settingKey = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        settings: {
          ...prev.settings,
          [settingKey]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Gérer la sélection d'un avatar
  const handleAvatarSelect = (avatarUrl) => {
    setFormData(prev => ({
      ...prev,
      avatar: {
        url: avatarUrl,
        type: 'preset'
      }
    }));
  };

  // Soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInfo) {
      navigate('/login', { state: { from: '/profile/edit' } });
      return;
    }

    try {
      setSubmitting(true);
      setError(null);
      setSuccess(null);

      // Préparer les données à envoyer - version avec avatar
      const dataToSend = {
        displayName: formData.displayName,
        bio: formData.bio,
        specialization: formData.specialization,
        institution: formData.institution,
        level: formData.level,
        // Traiter les intérêts comme une chaîne de caractères pour le serveur
        interests: formData.interests,
        socialLinks: formData.socialLinks,
        settings: formData.settings
      };

      // Ajouter l'avatar si une URL est sélectionnée
      if (formData.avatar && formData.avatar.url && formData.avatar.url.trim() !== '') {
        // Utiliser le format attendu par le backend
        dataToSend.avatar = {
          url: formData.avatar.url.trim()
        };
      }

      // Log pour déboguer
      console.log('Données envoyées au serveur:', dataToSend);
      console.log('Avatar envoyé:', dataToSend.avatar);

      // Requête simplifiée pour restaurer la fonctionnalité de base
      const response = await fetch(`${BROWSER_API_URL}/social/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        },
        body: JSON.stringify(dataToSend)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Erreur de réponse:', {
          status: response.status,
          statusText: response.statusText,
          responseText: errorText
        });

        throw new Error('Erreur lors de la mise à jour du profil');
      }

      const responseData = await response.json();
      console.log('Réponse du serveur après mise à jour:', responseData);
      console.log('Avatar dans la réponse:', responseData.avatar);

      // Vérifier si l'avatar a été correctement enregistré
      if (!responseData.avatar || !responseData.avatar.url) {
        console.warn('L\'avatar n\'a pas été correctement enregistré dans la réponse du serveur');

        // Stocker l'avatar sélectionné dans le localStorage comme solution de contournement
        if (formData.avatar && formData.avatar.url) {
          try {
            const storedAvatars = JSON.parse(localStorage.getItem('userAvatars') || '{}');
            storedAvatars[userInfo._id] = formData.avatar.url;
            localStorage.setItem('userAvatars', JSON.stringify(storedAvatars));
            console.log('Avatar stocké localement:', formData.avatar.url);
          } catch (e) {
            console.error('Erreur lors du stockage local de l\'avatar:', e);
          }
        }
      }

      setSuccess('Profil mis à jour avec succès');

      // Rediriger vers la page de profil après 2 secondes
      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-lab-purple"></div>
        <p className="mt-2 text-gray-600">Chargement du profil...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 sketch-container">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Modifier mon profil</h1>

        {error && (
          <div className="bg-red-50 p-4 rounded-lg mb-6">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {success && (
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <p className="text-green-600">{success}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Informations de base */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Informations de base</h2>

            {/* Sélection d'avatar */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-3">Avatar</label>
              <div className="grid grid-cols-4 gap-4">
                {presetAvatars.map((avatar) => (
                  <div
                    key={avatar.id}
                    onClick={() => handleAvatarSelect(avatar.url)}
                    className={`
                      cursor-pointer rounded-lg p-2 border-2 transition-all duration-200
                      ${formData.avatar.url === avatar.url
                        ? 'border-lab-purple bg-lab-purple/5 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }
                    `}
                  >
                    <div className="aspect-square rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-2">
                      {avatar.url ? (
                        <img
                          src={avatar.url}
                          alt={avatar.label}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-1/2 w-1/2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <p className="text-xs text-center text-gray-600">{avatar.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">Cliquez sur un avatar pour le sélectionner</p>
            </div>

            <div className="mb-4">
              <label htmlFor="displayName" className="block text-gray-700 mb-1">Nom d'affichage</label>
              <input
                type="text"
                id="displayName"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="bio" className="block text-gray-700 mb-1">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple"
                maxLength="500"
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">{formData.bio.length}/500 caractères</p>
            </div>
          </div>

          {/* Informations académiques */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Informations académiques</h2>

            <div className="mb-4">
              <label htmlFor="specialization" className="block text-gray-700 mb-1">Spécialisation</label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="institution" className="block text-gray-700 mb-1">Institution</label>
              <input
                type="text"
                id="institution"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="level" className="block text-gray-700 mb-1">Niveau</label>
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple"
              >
                <option value="lycee">Lycée</option>
                <option value="bts">BTS</option>
                <option value="dut">DUT / BUT</option>
                <option value="licence">Licence</option>
                <option value="master">Master</option>
                <option value="doctorat">Doctorat</option>
                <option value="professionnel">Professionnel</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="interests" className="block text-gray-700 mb-1">Centres d'intérêt</label>
              <input
                type="text"
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple"
                placeholder="Séparés par des virgules"
              />
              <p className="text-sm text-gray-500 mt-1">Ex: Biologie moléculaire, Génétique, Microbiologie</p>
            </div>
          </div>

          {/* Liens sociaux */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Liens sociaux</h2>

            <div className="mb-4">
              <label htmlFor="socialLinks.website" className="block text-gray-700 mb-1">Site web</label>
              <input
                type="url"
                id="socialLinks.website"
                name="socialLinks.website"
                value={formData.socialLinks.website}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple"
                placeholder="https://monsite.com"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="socialLinks.linkedin" className="block text-gray-700 mb-1">LinkedIn</label>
              <input
                type="url"
                id="socialLinks.linkedin"
                name="socialLinks.linkedin"
                value={formData.socialLinks.linkedin}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple"
                placeholder="https://linkedin.com/in/username"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="socialLinks.twitter" className="block text-gray-700 mb-1">Twitter</label>
              <input
                type="url"
                id="socialLinks.twitter"
                name="socialLinks.twitter"
                value={formData.socialLinks.twitter}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple"
                placeholder="https://twitter.com/username"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="socialLinks.github" className="block text-gray-700 mb-1">GitHub</label>
              <input
                type="url"
                id="socialLinks.github"
                name="socialLinks.github"
                value={formData.socialLinks.github}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple"
                placeholder="https://github.com/username"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="socialLinks.researchGate" className="block text-gray-700 mb-1">ResearchGate</label>
              <input
                type="url"
                id="socialLinks.researchGate"
                name="socialLinks.researchGate"
                value={formData.socialLinks.researchGate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple"
                placeholder="https://researchgate.net/profile/username"
              />
            </div>
          </div>

          {/* Paramètres */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Paramètres</h2>

            <div className="mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="settings.emailNotifications"
                  name="settings.emailNotifications"
                  checked={formData.settings.emailNotifications}
                  onChange={handleChange}
                  className="h-4 w-4 text-lab-purple focus:ring-lab-purple border-gray-300 rounded"
                />
                <label htmlFor="settings.emailNotifications" className="ml-2 block text-gray-700">
                  Recevoir des notifications par email
                </label>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="settings.privateProfile"
                  name="settings.privateProfile"
                  checked={formData.settings.privateProfile}
                  onChange={handleChange}
                  className="h-4 w-4 text-lab-purple focus:ring-lab-purple border-gray-300 rounded"
                />
                <label htmlFor="settings.privateProfile" className="ml-2 block text-gray-700">
                  Profil privé (visible uniquement par les utilisateurs connectés)
                </label>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="settings.showEmail"
                  name="settings.showEmail"
                  checked={formData.settings.showEmail}
                  onChange={handleChange}
                  className="h-4 w-4 text-lab-purple focus:ring-lab-purple border-gray-300 rounded"
                />
                <label htmlFor="settings.showEmail" className="ml-2 block text-gray-700">
                  Afficher mon email sur mon profil
                </label>
              </div>
            </div>
          </div>

          {/* Boutons */}
          <div className="flex justify-end space-x-4">
            <Link
              to="/profile"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              Annuler
            </Link>
            <button
              type="submit"
              disabled={submitting}
              className="px-4 py-2 bg-lab-purple text-white rounded-lg hover:bg-lab-purple/90 transition-all duration-300 disabled:opacity-50"
            >
              {submitting ? 'Enregistrement...' : 'Enregistrer'}
            </button>
          </div>
        </form>
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

export default ProfileEditPage;
