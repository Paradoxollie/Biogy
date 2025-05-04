import React, { useState } from 'react';

// Liste des avatars prédéfinis avec des URLs externes - collection variée et adaptée au contexte éducatif
const presetAvatars = [
  { id: 'default', url: '', label: 'Avatar par défaut' },

  // Avatars personnalisés
  { id: 'custom_avatar1', url: 'https://asset.cloudinary.com/dzf1anevr/0909532752405e56fbcf50f84bea066e', label: 'Avatar Personnalisé 1' },
  { id: 'custom_avatar2', url: 'https://asset.cloudinary.com/dzf1anevr/e4e870ed9de4e26816d8763c55bed870', label: 'Avatar Personnalisé 2' },
  { id: 'custom_avatar3', url: 'https://asset.cloudinary.com/dzf1anevr/a79dcb87285fbfde7f92740e95f90435', label: 'Avatar Personnalisé 3' },

  // Avatars féminins
  { id: 'girl_scientist1', url: 'https://cdn-icons-png.flaticon.com/512/4205/4205813.png', label: 'Scientifique F 1' },
  { id: 'girl_scientist2', url: 'https://cdn-icons-png.flaticon.com/512/2810/2810731.png', label: 'Scientifique F 2' },
  { id: 'girl_student1', url: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png', label: 'Étudiante 1' },
  { id: 'girl_student2', url: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png', label: 'Étudiante 2' },

  // Avatars masculins
  { id: 'boy_scientist1', url: 'https://cdn-icons-png.flaticon.com/512/3048/3048122.png', label: 'Scientifique M 1' },
  { id: 'boy_scientist2', url: 'https://cdn-icons-png.flaticon.com/512/4205/4205906.png', label: 'Scientifique M 2' },
  { id: 'boy_student1', url: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', label: 'Étudiant 1' },
  { id: 'boy_student2', url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png', label: 'Étudiant 2' },

  // Avatars neutres/amusants
  { id: 'microscope', url: 'https://cdn-icons-png.flaticon.com/512/1048/1048317.png', label: 'Microscope' },
  { id: 'dna', url: 'https://cdn-icons-png.flaticon.com/512/2941/2941522.png', label: 'ADN' },
  { id: 'flask', url: 'https://cdn-icons-png.flaticon.com/512/1048/1048302.png', label: 'Fiole' },
  { id: 'atom', url: 'https://cdn-icons-png.flaticon.com/512/1048/1048305.png', label: 'Atome' },
  { id: 'plant', url: 'https://cdn-icons-png.flaticon.com/512/2971/2971246.png', label: 'Plante' },
  { id: 'cat_scientist', url: 'https://cdn-icons-png.flaticon.com/512/2362/2362420.png', label: 'Chat Scientifique' },
  { id: 'owl_teacher', url: 'https://cdn-icons-png.flaticon.com/512/1864/1864593.png', label: 'Hibou Professeur' }
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

  // Filtrer les avatars par catégorie
  const customAvatars = presetAvatars.filter(avatar => avatar.id.startsWith('custom_'));
  const femaleAvatars = presetAvatars.filter(avatar => avatar.id.startsWith('girl_') || avatar.id === 'default');
  const maleAvatars = presetAvatars.filter(avatar => avatar.id.startsWith('boy_') || avatar.id === 'default');
  const funAvatars = presetAvatars.filter(avatar =>
    !avatar.id.startsWith('girl_') &&
    !avatar.id.startsWith('boy_') &&
    !avatar.id.startsWith('custom_') ||
    avatar.id === 'default'
  );

  return (
    <div className="mb-6">
      <label className="block text-gray-700 mb-3 text-lg font-semibold">Choisissez votre avatar</label>

      {/* Section Avatars Personnalisés */}
      <div className="mb-6">
        <h3 className="text-md font-medium text-amber-600 mb-2">Avatars Personnalisés</h3>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
          {customAvatars.map((avatar) => (
            <div
              key={avatar.id}
              onClick={() => handleAvatarSelect(avatar.url)}
              className={`
                cursor-pointer rounded-lg p-2 border-2 transition-all duration-200
                ${selectedAvatar === avatar.url
                  ? 'border-amber-500 bg-amber-50 shadow-md'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }
              `}
            >
              <div className="aspect-square rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-2">
                <img
                  src={avatar.url}
                  alt={avatar.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-center text-gray-600">{avatar.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Avatars Féminins */}
      <div className="mb-6">
        <h3 className="text-md font-medium text-lab-purple mb-2">Avatars Féminins</h3>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
          {femaleAvatars.filter(a => a.id !== 'default').map((avatar) => (
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
                <img
                  src={avatar.url}
                  alt={avatar.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-center text-gray-600">{avatar.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Avatars Masculins */}
      <div className="mb-6">
        <h3 className="text-md font-medium text-lab-blue mb-2">Avatars Masculins</h3>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
          {maleAvatars.filter(a => a.id !== 'default').map((avatar) => (
            <div
              key={avatar.id}
              onClick={() => handleAvatarSelect(avatar.url)}
              className={`
                cursor-pointer rounded-lg p-2 border-2 transition-all duration-200
                ${selectedAvatar === avatar.url
                  ? 'border-lab-blue bg-lab-blue/5 shadow-md'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }
              `}
            >
              <div className="aspect-square rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-2">
                <img
                  src={avatar.url}
                  alt={avatar.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-center text-gray-600">{avatar.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Avatars Amusants */}
      <div className="mb-4">
        <h3 className="text-md font-medium text-green-600 mb-2">Avatars Thématiques</h3>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
          {funAvatars.filter(a => a.id !== 'default').map((avatar) => (
            <div
              key={avatar.id}
              onClick={() => handleAvatarSelect(avatar.url)}
              className={`
                cursor-pointer rounded-lg p-2 border-2 transition-all duration-200
                ${selectedAvatar === avatar.url
                  ? 'border-green-500 bg-green-50 shadow-md'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }
              `}
            >
              <div className="aspect-square rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-2">
                <img
                  src={avatar.url}
                  alt={avatar.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-center text-gray-600">{avatar.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Option par défaut */}
      <div className="mt-4">
        <h3 className="text-md font-medium text-gray-500 mb-2">Sans avatar</h3>
        <div
          onClick={() => handleAvatarSelect('')}
          className={`
            cursor-pointer rounded-lg p-2 border-2 transition-all duration-200 inline-block
            ${selectedAvatar === ''
              ? 'border-gray-500 bg-gray-50 shadow-md'
              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }
          `}
        >
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-1/2 w-1/2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-xs text-center text-gray-600">Avatar par défaut</p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Cliquez sur un avatar pour le sélectionner
      </p>
    </div>
  );
}

export default AvatarSelector;
