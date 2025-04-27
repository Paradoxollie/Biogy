import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // On utilisera fetch pour l'instant, mais axios est une option

// Icône SVG pour l'upload (style crayonné)
const UploadIcon = () => (
  <svg className="mx-auto h-12 w-12 text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 2" />
  </svg>
);

// Icône SVG pour l'aperçu vidéo (style crayonné)
const VideoIcon = () => (
    <svg className="mx-auto h-12 w-12 text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M14.5 10.5L33.5 24.5L14.5 38.5V10.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 2" />
    </svg>
);

function ShareProjectPage() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false); // Pour le consentement RGPD

  // Gérer la sélection de fichier et l'aperçu
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setError(''); // Réinitialiser l'erreur lors de la sélection
    setSuccess(''); // Réinitialiser le succès

    if (selectedFile) {
      // Vérifier le type pour l'aperçu
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      } else if (selectedFile.type.startsWith('video/')) {
        setPreview('video'); // Indiquer qu'il s'agit d'une vidéo
      } else {
        setPreview(null); // Pas d'aperçu pour d'autres types
        setError('Type de fichier non supporté pour l\'aperçu.');
      }
    } else {
      setPreview(null);
    }
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!file) {
      setError('Veuillez sélectionner un fichier (image ou vidéo).');
      return;
    }
    
    if (!consent) {
        setError('Vous devez accepter les conditions pour partager votre projet.');
        return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('file', file); // 'file' doit correspondre au nom attendu par Multer
    formData.append('caption', caption);

    // Récupérer le token depuis le localStorage (ou contexte/état global)
    // !!! Assurez-vous que le token est bien stocké lors de la connexion !!!
    const userInfo = localStorage.getItem('userInfo') 
                    ? JSON.parse(localStorage.getItem('userInfo')) 
                    : null;
    const token = userInfo ? userInfo.token : null;

    if (!token) {
      setError('Vous devez être connecté pour partager un projet.');
      setLoading(false);
      // Rediriger vers la page de connexion ?
      return;
    }

    try {
      // Temporairement utiliser une URL codée en dur
      // const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'; 
      const postUrl = 'http://localhost:5000/api/posts'; // URL codée en dur
      
      const response = await fetch(postUrl, { 
        method: 'POST',
        headers: {
          // Pas besoin de 'Content-Type': 'multipart/form-data', fetch le gère avec FormData
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l\'upload');
      }

      setSuccess('Projet envoyé avec succès ! Il est en attente de modération.');
      setFile(null);
      setCaption('');
      setPreview(null);
      setConsent(false);
      // Réinitialiser le champ de fichier visuellement
      if(document.getElementById('file-input')) {
        document.getElementById('file-input').value = '';
      }

    } catch (err) {
      setError(err.message || 'Une erreur est survenue.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-3xl p-6 md:p-10 my-10 bg-gradient-to-br from-yellow-50/50 via-amber-50/50 to-orange-50/50 rounded-xl shadow-lg border-t-4 border-amber-600 relative overflow-hidden font-handwriting">
      {/* Fond texturé papier/carnet */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSIjZmVmMmU4IiBmaWxsLW9wYWNpdHk9IjAuMSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIi8+PHJlY3QgeD0iMTAiIHk9IjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIvPjxyZWN0IHg9IjMwIiB5PSIwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiLz48cmVjdCB4PSIwIiB5PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIi8+PHJlY3QgeD0iMjAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiLz48cmVjdCB4PSIwIiB5PSIyMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIi8+PHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiLz48cmVjdCB4PSIxMCIgeT0iMzAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIvPjxyZWN0IHg9IjMwIiB5PSIzMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIi8+PC9nPjwvc3ZnPg==')] opacity-30 -z-10"></div>
      <div className="absolute inset-0 border-l-4 border-red-300/50 -z-10 ml-10"></div>{/* Marge de cahier */}

      <h1 className="text-4xl font-bold text-center mb-10 text-amber-800/90 tracking-wide">
        Partager une Expérience
      </h1>
      
      {error && <p className="bg-red-200/50 border border-red-400 text-red-800 p-3 rounded mb-6 text-center text-lg">⚠️ {error}</p>}
      {success && <p className="bg-green-200/50 border border-green-400 text-green-800 p-3 rounded mb-6 text-center text-lg">✅ {success}</p>}

      <form onSubmit={handleSubmit} className="space-y-8 text-lg text-gray-700">
        {/* Input Fichier stylisé "schéma" */}
        <div>
          <label htmlFor="file-input" className="block font-medium text-amber-800/90 mb-2 ml-1">
            Pièce Jointe (Image/Vidéo):
          </label>
          <div className="mt-1 flex justify-center px-6 pt-8 pb-8 border-2 border-gray-400/50 border-dashed rounded-lg bg-white/30 backdrop-blur-sm">
            <div className="space-y-2 text-center">
              {preview === 'video' && <VideoIcon />}
              {preview && preview !== 'video' && (
                <img src={preview} alt="Aperçu" className="mx-auto h-32 w-auto object-contain mb-3 border border-gray-300 p-1 bg-white rounded shadow-sm" />
              )}
              {!preview && <UploadIcon />}
              
              <div className="flex justify-center text-base">
                <label htmlFor="file-input" className="relative cursor-pointer bg-amber-100/50 rounded-md py-1 px-3 font-medium text-amber-700 hover:text-amber-900 hover:bg-amber-100 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-amber-500 border border-amber-300 shadow-sm">
                  <span>Choisir un fichier...</span>
                  <input id="file-input" name="file" type="file" className="sr-only" onChange={handleFileChange} accept="image/*,video/*" />
                </label>
              </div>
              <p className="text-sm text-gray-500 pt-1">Max 50MB.</p>
              {file && <p className="text-sm text-gray-600 font-medium mt-2 pt-2 border-t border-gray-200">Fichier: {file.name}</p>} 
            </div>
          </div>
        </div>

        {/* Légende */}
        <div>
          <label htmlFor="caption" className="block font-medium text-amber-800/90 mb-1 ml-1">
            Description / Légende (optionnel):
          </label>
          <div className="mt-1">
            <textarea
              id="caption"
              name="caption"
              rows={4} 
              className="text-lg font-handwriting shadow-inner focus:ring-amber-500 focus:border-amber-500 block w-full border border-gray-300/80 rounded-md p-3 bg-white/50 backdrop-blur-sm placeholder:text-gray-400"
              placeholder="Racontez votre TP, décrivez l'image/vidéo..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              maxLength={500}
            ></textarea>
            <p className="text-sm text-gray-500 mt-1 text-right pr-1">{caption.length}/500</p>
          </div>
        </div>
        
        {/* Case à cocher RGPD stylisée */}
        <div className="relative flex items-start p-4 border border-dashed border-gray-400/60 rounded-md bg-amber-50/30">
            <div className="flex items-center h-5 mt-1">
                <input
                id="consent"
                aria-describedby="consent-description"
                name="consent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="focus:ring-amber-500 h-5 w-5 text-amber-600 border-gray-400 rounded cursor-pointer"
                />
            </div>
            <div className="ml-4 text-base">
                <label htmlFor="consent" className="font-medium text-amber-800/90 cursor-pointer">J'accepte les conditions</label>
                <p id="consent-description" className="text-gray-600/90 text-sm mt-1">
                    Je comprends que ma contribution sera vérifiée avant publication.
                    J'autorise Biogy à stocker et afficher ce contenu (voir politique de confidentialité).
                </p>
            </div>
        </div>

        {/* Bouton de soumission stylisé */}
        <div>
          <button
            type="submit"
            disabled={loading || !file || !consent}
            className={`w-full flex justify-center py-3 px-5 border border-transparent rounded-lg shadow-md text-xl font-bold text-white 
                       ${loading || !file || !consent
                         ? 'bg-gray-400/80 cursor-not-allowed' 
                         : 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform hover:scale-[1.02] transition-all duration-150 ease-in-out'}
                       `}
          >
            {loading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : 'Envoyer ma Contribution'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ShareProjectPage; 