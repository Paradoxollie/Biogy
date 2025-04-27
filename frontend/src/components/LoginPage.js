import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importer useNavigate

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialiser useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Définir l'URL de l'API (remplacer par une variable d'environnement si possible)
      const apiUrl = 'http://localhost:5000/api/auth/login'; 
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Utiliser le message d'erreur du backend si disponible
        throw new Error(data.message || `Erreur HTTP: ${response.status}`); 
      }

      // Connexion réussie
      console.log('Connexion réussie:', data); 
      // Stocker les informations utilisateur dans localStorage
      localStorage.setItem('userInfo', JSON.stringify(data)); 
      
      // Rediriger l'utilisateur vers la page d'accueil (ou une autre page)
      navigate('/'); 
      // Optionnel: Forcer un rechargement pour que le Layout/Header se mette à jour si nécessaire
      // window.location.reload(); 

    } catch (err) {
      console.error('Erreur de connexion:', err);
      // Afficher l'erreur à l'utilisateur
      setError(err.message || 'Une erreur est survenue lors de la connexion.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-md p-6 md:p-10 my-10 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50 rounded-xl shadow-lg border-t-4 border-indigo-600">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-800/90">Connexion</h1>
      
      {error && <p className="bg-red-200/50 border border-red-400 text-red-800 p-3 rounded mb-6 text-center text-lg">⚠️ {error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6 text-lg text-gray-700">
        {/* Nom d'utilisateur */}
        <div>
          <label htmlFor="username" className="block font-medium text-indigo-800/90 mb-1 ml-1">
            Nom d'utilisateur:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="text-lg shadow-inner focus:ring-indigo-500 focus:border-indigo-500 block w-full border border-gray-300/80 rounded-md p-3 bg-white/50 backdrop-blur-sm placeholder:text-gray-400"
            placeholder="Votre nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Mot de passe */}
        <div>
          <label htmlFor="password" className="block font-medium text-indigo-800/90 mb-1 ml-1">
            Mot de passe:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="text-lg shadow-inner focus:ring-indigo-500 focus:border-indigo-500 block w-full border border-gray-300/80 rounded-md p-3 bg-white/50 backdrop-blur-sm placeholder:text-gray-400"
            placeholder="Votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Bouton de soumission */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-3 px-5 border border-transparent rounded-lg shadow-md text-xl font-bold text-white 
                       ${loading 
                         ? 'bg-gray-400/80 cursor-not-allowed' 
                         : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-[1.02] transition-all duration-150 ease-in-out'}
                       `}
          >
            {loading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : 'Se Connecter'}
          </button>
        </div>

        {/* Lien vers l'inscription */}
        <div className="text-center mt-4">
          <p className="text-base text-gray-600">
            Pas encore de compte?{' '}
            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-800">
              Inscrivez-vous ici
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginPage; 