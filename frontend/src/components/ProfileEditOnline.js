import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

// Avatars prédéfinis
const PREDEFINED_AVATARS = [
  { id: 'avatar1', url: '/images/avatars/avatar1.png', name: 'ADN' },
  { id: 'avatar2', url: '/images/avatars/avatar2.png', name: 'Microscope' },
  { id: 'avatar3', url: '/images/avatars/avatar3.png', name: 'Atome' },
  { id: 'avatar4', url: '/images/avatars/avatar4.png', name: 'Éprouvette' },
  { id: 'avatar5', url: '/images/avatars/avatar5.png', name: 'Neurone' },
  { id: 'avatar6', url: '/images/avatars/avatar6.png', name: 'Bactérie' },
  { id: 'avatar7', url: '/images/avatars/avatar7.png', name: 'Molécule' },
  { id: 'avatar8', url: '/images/avatars/avatar8.png', name: 'Cellule' },
  { id: 'avatar9', url: '/images/avatars/avatar9.png', name: 'Plante' },
  { id: 'avatar10', url: '/images/avatars/avatar10.png', name: 'Cerveau' },
];

// Clé pour le stockage local du profil (fallback)
const PROFILE_STORAGE_KEY = 'biogy_profile_data';

function ProfileEditOnline() {
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);

  // État du formulaire
  const [formData, setFormData] = useState({
    displayName: '',
    bio: '',
    specialization: '',
    institution: '',
    level: 'autre',
    interests: '',
  });

  // État pour l'avatar sélectionné
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  // Charger les données du profil
  useEffect(() => {
    const fetchProfile = async () => {
      if (!userInfo || !userInfo.token) {
        navigate('/login', { state: { from: '/profile/edit-online' } });
        return;
      }

      try {
        setLoading(true);
        console.log('Chargement du profil en ligne...');

        // Requête via la fonction Netlify
        const response = await axios({
          method: 'GET',
          url: '/.netlify/functions/profile-online',
          headers: {
            'Authorization': `Bearer ${userInfo.token}`
          },
          timeout: 10000
        });

        const profileData = response.data;
        console.log('Données du profil reçues:', profileData);

        // Mettre à jour le formulaire avec les données du profil
        setFormData({
          displayName: profileData.displayName || '',
          bio: profileData.bio || '',
          specialization: profileData.specialization || '',
          institution: profileData.institution || '',
          level: profileData.level || 'autre',
          interests: Array.isArray(profileData.interests) 
            ? profileData.interests.join(', ') 
            : profileData.interests || '',
        });

        // Définir l'avatar sélectionné
        if (profileData.avatar && profileData.avatar.url) {
          const avatarId = profileData.avatar.predefinedId || 
            PREDEFINED_AVATARS.find(a => a.url === profileData.avatar.url)?.id;
          
          setSelectedAvatar(avatarId || null);
        }
        
        setUsingFallback(false);
      } catch (error) {
        console.error('Erreur lors du chargement du profil en ligne:', error);
        
        // Essayer de récupérer le profil local comme fallback
        try {
          const storedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
          
          if (storedProfile) {
            const profileData = JSON.parse(storedProfile);
            console.log('Utilisation du profil local comme fallback:', profileData);
            
            setFormData({
              displayName: profileData.displayName || userInfo.username || '',
              bio: profileData.bio || '',
              specialization: profileData.specialization || '',
              institution: profileData.institution || '',
              level: profileData.level || 'autre',
              interests: Array.isArray(profileData.interests) 
                ? profileData.interests.join(', ') 
                : profileData.interests || '',
            });
            
            if (profileData.avatar && profileData.avatar.id) {
              setSelectedAvatar(profileData.avatar.id);
            }
            
            setUsingFallback(true);
            setError('Impossible de charger le profil en ligne. Utilisation du profil local.');
          } else {
            // Initialiser avec des valeurs par défaut
            setFormData({
              displayName: userInfo.username || '',
              bio: '',
              specialization: '',
              institution: '',
              level: 'autre',
              interests: '',
            });
            setSelectedAvatar('avatar1');
            setUsingFallback(true);
            setError('Impossible de charger le profil. Utilisation des valeurs par défaut.');
          }
        } catch (fallbackError) {
          console.error('Erreur avec le profil de secours:', fallbackError);
          // Initialiser avec des valeurs par défaut
          setFormData({
            displayName: userInfo.username || '',
            bio: '',
            specialization: '',
            institution: '',
            level: 'autre',
            interests: '',
          });
          setSelectedAvatar('avatar1');
          setUsingFallback(true);
          setError('Impossible de charger le profil. Utilisation des valeurs par défaut.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userInfo, navigate]);

  // Gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Gérer la sélection d'un avatar
  const handleAvatarSelect = (avatarId) => {
    setSelectedAvatar(avatarId);
  };

  // Soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!userInfo || !userInfo.token) {
      navigate('/login');
      return;
    }

    try {
      setSaving(true);
      setError(null);
      setSuccess(false);

      // Préparer les données à envoyer
      const interests = formData.interests
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '');
      
      const profileData = {
        ...formData,
        interests
      };

      console.log('Envoi des données du profil:', profileData);

      if (!usingFallback) {
        // Mettre à jour le profil en ligne
        await axios({
          method: 'PUT',
          url: '/.netlify/functions/profile-online',
          headers: {
            'Authorization': `Bearer ${userInfo.token}`,
            'Content-Type': 'application/json'
          },
          data: profileData,
          timeout: 10000
        });

        // Si un avatar a été sélectionné, le définir
        if (selectedAvatar) {
          await axios({
            method: 'POST',
            url: '/.netlify/functions/profile-online/avatar/predefined',
            headers: {
              'Authorization': `Bearer ${userInfo.token}`,
              'Content-Type': 'application/json'
            },
            data: { avatarId: selectedAvatar },
            timeout: 10000
          });
        }
      }
      
      // Sauvegarder également dans le localStorage comme fallback
      try {
        // Trouver l'URL de l'avatar sélectionné
        const selectedAvatarObj = PREDEFINED_AVATARS.find(a => a.id === selectedAvatar);
        
        // Créer l'objet profil complet
        const localProfileData = {
          _id: userInfo._id,
          user: {
            _id: userInfo._id,
            username: userInfo.username,
            role: userInfo.role
          },
          displayName: formData.displayName,
          bio: formData.bio,
          specialization: formData.specialization,
          institution: formData.institution,
          level: formData.level,
          interests: interests,
          avatar: {
            id: selectedAvatar,
            url: selectedAvatarObj ? selectedAvatarObj.url : '/images/avatars/avatar1.png',
            name: selectedAvatarObj ? selectedAvatarObj.name : 'ADN'
          },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };

        console.log('Sauvegarde des données du profil dans localStorage:', localProfileData);
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(localProfileData));
      } catch (localError) {
        console.error('Erreur lors de la sauvegarde locale:', localError);
      }

      setSuccess(true);
      
      // Rediriger vers la page de profil après un court délai
      setTimeout(() => {
        navigate('/profile-online');
      }, 1500);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil:', error);
      
      if (usingFallback) {
        setError('Mode hors ligne: Les modifications ont été sauvegardées localement mais ne seront pas synchronisées avec le serveur.');
        setSuccess(true);
        setTimeout(() => {
          navigate('/profile-online');
        }, 1500);
      } else {
        setError('Impossible de mettre à jour le profil en ligne. Veuillez réessayer plus tard.');
      }
    } finally {
      setSaving(false);
    }
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden sketch-container">
        <div className="bg-gradient-to-r from-lab-blue to-lab-purple p-6">
          <h1 className="text-2xl font-bold text-white">Modifier mon profil</h1>
          {usingFallback && (
            <p className="text-white text-sm mt-2">Mode hors ligne: Les modifications seront sauvegardées localement</p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 text-green-600 p-4 rounded-lg mb-6">
              Profil mis à jour avec succès!
            </div>
          )}

          {/* Informations de base */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Informations de base</h2>
            
            <div className="mb-4">
              <label htmlFor="displayName" className="block text-gray-700 mb-2">Nom d'affichage</label>
              <input
                type="text"
                id="displayName"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lab-purple focus:border-lab-purple"
                placeholder="Votre nom d'affichage"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="bio" className="block text-gray-700 mb-2">Biographie</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lab-purple focus:border-lab-purple"
                placeholder="Parlez-nous de vous..."
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">Maximum 500 caractères</p>
            </div>
          </div>

          {/* Informations académiques */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Informations académiques</h2>
            
            <div className="mb-4">
              <label htmlFor="specialization" className="block text-gray-700 mb-2">Spécialisation</label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lab-purple focus:border-lab-purple"
                placeholder="Ex: Biologie moléculaire, Écologie..."
              />
            </div>

            <div className="mb-4">
              <label htmlFor="institution" className="block text-gray-700 mb-2">Institution</label>
              <input
                type="text"
                id="institution"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lab-purple focus:border-lab-purple"
                placeholder="Ex: Université de Paris, Lycée..."
              />
            </div>

            <div className="mb-4">
              <label htmlFor="level" className="block text-gray-700 mb-2">Niveau</label>
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lab-purple focus:border-lab-purple"
              >
                <option value="lycee">Lycée</option>
                <option value="bts">BTS</option>
                <option value="dut">DUT/BUT</option>
                <option value="licence">Licence</option>
                <option value="master">Master</option>
                <option value="doctorat">Doctorat</option>
                <option value="professionnel">Professionnel</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="interests" className="block text-gray-700 mb-2">Centres d'intérêt</label>
              <input
                type="text"
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lab-purple focus:border-lab-purple"
                placeholder="Ex: biologie, génétique, écologie (séparés par des virgules)"
              />
            </div>
          </div>

          {/* Sélection d'avatar */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Avatar</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {PREDEFINED_AVATARS.map((avatar) => (
                <div 
                  key={avatar.id}
                  onClick={() => handleAvatarSelect(avatar.id)}
                  className={`cursor-pointer rounded-lg p-2 border-2 transition-all ${
                    selectedAvatar === avatar.id 
                      ? 'border-lab-purple bg-lab-purple/10' 
                      : 'border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className="aspect-square rounded-full overflow-hidden mb-2">
                    <img 
                      src={avatar.url} 
                      alt={avatar.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-700">{avatar.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex justify-end space-x-4">
            <Link
              to="/profile-online"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Annuler
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2 bg-lab-purple text-white rounded-lg hover:bg-lab-purple/90 disabled:opacity-50"
            >
              {saving ? 'Enregistrement...' : 'Enregistrer'}
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

export default ProfileEditOnline;
