import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

// Exemple de composant pour l'upload d'avatar
function AvatarUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const { userInfo, dispatch } = useAuth();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setError(null);
  };

  const uploadAvatar = async () => {
    if (!selectedFile) {
      console.warn('Aucun fichier sélectionné');
      setError('Veuillez sélectionner un fichier');
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const data = new FormData();
      data.append('avatar', selectedFile);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/profile/avatar`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      const url = res.data.url;
      if (url) {
        dispatch({ type: 'SET_AVATAR', payload: url });
        localStorage.setItem('avatar', url);
        console.log('Avatar mis à jour avec succès:', url);
      } else {
        throw new Error('URL d\'avatar non reçue du serveur');
      }

      setUploading(false);
      setSelectedFile(null);
    } catch (err) {
      console.error('Erreur lors de l\'upload:', err);
      setError('Erreur lors de l\'upload de l\'avatar: ' + (err.response?.data?.message || err.message));
      setUploading(false);
    }
  };

  return (
    <div className="avatar-upload">
      <h3>Changer d'avatar</h3>

      <div className="file-input">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
        />
      </div>

      {selectedFile && (
        <div className="preview">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Aperçu"
            style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }}
          />
        </div>
      )}

      <button
        onClick={uploadAvatar}
        disabled={!selectedFile || uploading}
        className="upload-button"
      >
        {uploading ? 'Envoi en cours...' : 'Envoyer'}
      </button>

      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default AvatarUpload;
