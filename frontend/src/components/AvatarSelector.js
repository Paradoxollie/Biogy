import React, { useState } from 'react';

// Liste des avatars prédéfinis avec des URLs externes
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

function AvatarSelector({ onAvatarSelect, currentAvatarUrl }) {
  const [selectedAvatar, setSelectedAvatar] = useState(currentAvatarUrl || '');

  // Gérer la sélection d'un avatar
  const handleAvatarSelect = (avatarUrl) => {
    setSelectedAvatar(avatarUrl);
    if (onAvatarSelect) {
      onAvatarSelect(avatarUrl);
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-gray-700 mb-3">Avatar</label>

      <div className="grid grid-cols-4 gap-4">
        {presetAvatars.map((avatar) => (
          <div
            key={avatar.id}
            onClick={() => handleAvatarSelect(avatar.url)}
            className={`
              cursor-pointer rounded-lg p-2 border-2 transition-all duration-200
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
        Cliquez sur un avatar pour le sélectionner
      </p>
    </div>
  );
}

export default AvatarSelector;
