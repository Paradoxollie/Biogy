import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../config';

// Liste des avatars prédéfinis
const PREDEFINED_AVATARS = [
  { id: 'avatar1', url: '/images/avatars/avatar1.png', name: 'Scientifique' },
  { id: 'avatar2', url: '/images/avatars/avatar2.png', name: 'Scientifique femme' },
  { id: 'avatar3', url: '/images/avatars/avatar3.png', name: 'Microscope' },
  { id: 'avatar4', url: '/images/avatars/avatar4.png', name: 'ADN' },
  { id: 'avatar5', url: '/images/avatars/avatar5.png', name: 'Atome' },
  { id: 'avatar6', url: '/images/avatars/avatar6.png', name: 'Éprouvette' },
  { id: 'avatar7', url: '/images/avatars/avatar7.png', name: 'Molécule' },
  { id: 'avatar8', url: '/images/avatars/avatar8.png', name: 'Cellule' },
  { id: 'avatar9', url: '/images/avatars/avatar9.png', name: 'Plante' },
  { id: 'avatar10', url: '/images/avatars/avatar10.png', name: 'Cerveau' },
];

function ProfileEditPage() {
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // État du formulaire
  const [formData, setFormData] = useState({
    displayName: '',
    bio: '',
    specialization: '',
    institution: '',
    level: 'autre',
    interests: '',
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

  // État pour l'avatar sélectionné
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  // Charger les données du profil
  useEffect(() => {
    const fetchProfile = async () => {
      if (!userInfo || !userInfo.token) {
        navigate('/login', { state: { from: '/profile/edit' } });
        return;
      }

      try {
        setLoading(true);

        const response = await fetch(`${API_URL}/api/social/profile`, {
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

        // Vérifier si l'avatar actuel correspond à un avatar prédéfini
        if (data.avatar && data.avatar.url) {
          const matchedAvatar = PREDEFINED_AVATARS.find(avatar =>
            data.avatar.url.includes(avatar.id)
          );

          if (matchedAvatar) {
            setSelectedAvatar(matchedAvatar.id);
          }
        }
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
  const handleAvatarSelect = (avatarId) => {
    setSelectedAvatar(avatarId);
  };

  // Soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInfo || !userInfo.token) {
      navigate('/login', { state: { from: '/profile/edit' } });
      return;
    }

    try {
      setSaving(true);
      setError(null);

      // Préparer les données à envoyer
      const dataToSend = {
        ...formData,
        interests: formData.interests
          .split(',')
          .map(item => item.trim())
          .filter(item => item)
      };

      // Mettre à jour le profil
      const profileResponse = await fetch(`${API_URL}/api/social/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        },
        body: JSON.stringify(dataToSend)
      });

      if (!profileResponse.ok) {
        throw new Error('Erreur lors de la mise à jour du profil');
      }

      // Si un avatar est sélectionné, mettre à jour l'avatar
      if (selectedAvatar) {
        const avatarResponse = await fetch(`${API_URL}/api/social/profile/avatar/predefined`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
          },
          body: JSON.stringify({ avatarId: selectedAvatar })
        });

        if (!avatarResponse.ok) {
          throw new Error('Erreur lors de la mise à jour de l\'avatar');
        }
      }

      setSuccess(true);

      // Rediriger vers la page de profil après un court délai
      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(error.message);
    } finally {
      setSaving(false);
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
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 sketch-container mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Modifier votre profil</h1>

          {error && (
            <div className="bg-red-50 p-4 rounded-lg mb-6">
              <p className="text-red-500">{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <p className="text-green-500">Profil mis à jour avec succès!</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Section Avatar */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Choisissez votre avatar</h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {PREDEFINED_AVATARS.map((avatar) => (
                  <div
                    key={avatar.id}
                    onClick={() => handleAvatarSelect(avatar.id)}
                    className={`cursor-pointer rounded-lg p-2 transition-all duration-200 ${
                      selectedAvatar === avatar.id
                        ? 'bg-lab-purple/10 ring-2 ring-lab-purple'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="aspect-square rounded-full overflow-hidden mb-2">
                      <img
                        src={avatar.url}
                        alt={avatar.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-center text-sm text-gray-600">{avatar.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Informations de base */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Informations de base</h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="displayName" className="block text-gray-700 font-medium mb-1">
                    Nom d'affichage
                  </label>
                  <input
                    type="text"
                    id="displayName"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
                    placeholder="Comment souhaitez-vous être appelé?"
                  />
                </div>

                <div>
                  <label htmlFor="bio" className="block text-gray-700 font-medium mb-1">
                    Bio <span className="text-gray-400 text-sm">(500 caractères max)</span>
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="4"
                    maxLength="500"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
                    placeholder="Parlez-nous un peu de vous..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Informations académiques */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Informations académiques</h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="specialization" className="block text-gray-700 font-medium mb-1">
                    Spécialisation
                  </label>
                  <input
                    type="text"
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
                    placeholder="Ex: Biologie moléculaire, Écologie, etc."
                  />
                </div>

                <div>
                  <label htmlFor="institution" className="block text-gray-700 font-medium mb-1">
                    Institution
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
                    placeholder="Ex: Université, Lycée, Entreprise, etc."
                  />
                </div>

                <div>
                  <label htmlFor="level" className="block text-gray-700 font-medium mb-1">
                    Niveau
                  </label>
                  <select
                    id="level"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
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

                <div>
                  <label htmlFor="interests" className="block text-gray-700 font-medium mb-1">
                    Centres d'intérêt <span className="text-gray-400 text-sm">(séparés par des virgules)</span>
                  </label>
                  <input
                    type="text"
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
                    placeholder="Ex: Génétique, Botanique, Microbiologie, etc."
                  />
                </div>
              </div>
            </div>

            {/* Liens sociaux */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Liens sociaux</h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="socialLinks.website" className="block text-gray-700 font-medium mb-1">
                    Site web
                  </label>
                  <input
                    type="url"
                    id="socialLinks.website"
                    name="socialLinks.website"
                    value={formData.socialLinks.website}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
                    placeholder="https://monsite.com"
                  />
                </div>

                <div>
                  <label htmlFor="socialLinks.linkedin" className="block text-gray-700 font-medium mb-1">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    id="socialLinks.linkedin"
                    name="socialLinks.linkedin"
                    value={formData.socialLinks.linkedin}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>

                <div>
                  <label htmlFor="socialLinks.twitter" className="block text-gray-700 font-medium mb-1">
                    Twitter
                  </label>
                  <input
                    type="url"
                    id="socialLinks.twitter"
                    name="socialLinks.twitter"
                    value={formData.socialLinks.twitter}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
                    placeholder="https://twitter.com/username"
                  />
                </div>

                <div>
                  <label htmlFor="socialLinks.github" className="block text-gray-700 font-medium mb-1">
                    GitHub
                  </label>
                  <input
                    type="url"
                    id="socialLinks.github"
                    name="socialLinks.github"
                    value={formData.socialLinks.github}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
                    placeholder="https://github.com/username"
                  />
                </div>

                <div>
                  <label htmlFor="socialLinks.researchGate" className="block text-gray-700 font-medium mb-1">
                    ResearchGate
                  </label>
                  <input
                    type="url"
                    id="socialLinks.researchGate"
                    name="socialLinks.researchGate"
                    value={formData.socialLinks.researchGate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
                    placeholder="https://researchgate.net/profile/username"
                  />
                </div>
              </div>
            </div>

            {/* Paramètres */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Paramètres</h2>

              <div className="space-y-4">
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
                    Profil privé (visible uniquement par vous)
                  </label>
                </div>

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

            {/* Boutons d'action */}
            <div className="flex justify-end space-x-4">
              <Link
                to="/profile"
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Annuler
              </Link>

              <button
                type="submit"
                disabled={saving}
                className="px-4 py-2 bg-lab-purple text-white rounded-md hover:bg-lab-purple/90 transition-colors duration-200 disabled:opacity-50"
              >
                {saving ? 'Enregistrement...' : 'Enregistrer les modifications'}
              </button>
            </div>
          </form>
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

export default ProfileEditPage;
