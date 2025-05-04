import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { BROWSER_API_URL } from '../config';

// Liste des avatars prédéfinis hébergés sur Cloudinary
const presetAvatars = [
  { id: 'default', url: '', label: 'Avatar par défaut' },
  { id: 'scientist1', url: 'https://res.cloudinary.com/biogy/image/upload/v1/avatars/scientist1_3048122_rvbpzl', label: 'Scientifique 1' },
  { id: 'scientist2', url: 'https://res.cloudinary.com/biogy/image/upload/v1/avatars/scientist2_4205906_ixvpqm', label: 'Scientifique 2' },
  { id: 'microscope', url: 'https://res.cloudinary.com/biogy/image/upload/v1/avatars/microscope_1048317_zcxbvn', label: 'Microscope' },
  { id: 'dna', url: 'https://res.cloudinary.com/biogy/image/upload/v1/avatars/dna_2941522_qwerty', label: 'ADN' },
  { id: 'flask', url: 'https://res.cloudinary.com/biogy/image/upload/v1/avatars/flask_1048302_asdfgh', label: 'Fiole' },
  { id: 'atom', url: 'https://res.cloudinary.com/biogy/image/upload/v1/avatars/atom_1048305_zxcvbn', label: 'Atome' },
  { id: 'plant', url: 'https://res.cloudinary.com/biogy/image/upload/v1/avatars/plant_2971246_poiuyt', label: 'Plante' }
];

function AvatarUploader({ onAvatarChange, currentAvatarUrl }) {
  const { userInfo } = useAuth();
  const [selectedAvatar, setSelectedAvatar] = useState(currentAvatarUrl || '');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  // Gérer la sélection d'un avatar prédéfini
  const handleAvatarSelect = async (avatarUrl) => {
    setSelectedAvatar(avatarUrl);
    
    if (!userInfo) {
      setError('Vous devez être connecté pour changer votre avatar');
      return;
    }

    try {
      setUploading(true);
      setError(null);
      
      // Créer un objet FormData pour l'envoi
      const formData = new FormData();
      
      // Ajouter l'URL de l'avatar prédéfini
      formData.append('avatarUrl', avatarUrl);
      
      // Envoyer la requête au serveur
      const response = await fetch(`${BROWSER_API_URL}/social/profile/avatar/preset`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${userInfo.token}`
        },
        body: formData
      });
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error('Erreur lors de la mise à jour de l\'avatar:', errorData);
        throw new Error('Erreur lors de la mise à jour de l\'avatar');
      }
      
      const data = await response.json();
      console.log('Avatar mis à jour avec succès:', data);
      
      // Notifier le composant parent du changement d'avatar
      if (onAvatarChange && data.avatar) {
        onAvatarChange(data.avatar);
      }
    } catch (error) {
      console.error('Erreur:', error);
      setError(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-gray-700 mb-3">Avatar</label>
      
      {error && (
        <div className="bg-red-50 p-3 rounded-lg mb-4">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}
      
      <div className="grid grid-cols-4 gap-4">
        {presetAvatars.map((avatar) => (
          <div 
            key={avatar.id}
            onClick={() => !uploading && handleAvatarSelect(avatar.url)}
            className={`
              cursor-pointer rounded-lg p-2 border-2 transition-all duration-200
              ${uploading ? 'opacity-50 cursor-not-allowed' : ''}
              ${selectedAvatar === avatar.url 
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
      
      <p className="text-xs text-gray-500 mt-2">
        {uploading ? 'Mise à jour de l\'avatar en cours...' : 'Cliquez sur un avatar pour le sélectionner'}
      </p>
    </div>
  );
}

export default AvatarUploader;
