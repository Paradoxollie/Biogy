import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }

    setLoading(true);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), 
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Erreur HTTP: ${response.status}`); 
      }

      console.log('Inscription réussie:', data);
      setSuccess('Inscription réussie ! Vous allez être redirigé vers la page de connexion.');

      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err) {
      console.error('Erreur d\'inscription:', err);
      setError(err.message || 'Une erreur est survenue lors de l\'inscription.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-md p-6 md:p-10 my-10 bg-gradient-to-br from-teal-50/50 via-cyan-50/50 to-sky-50/50 rounded-xl shadow-lg border-t-4 border-cyan-600">
      <h1 className="text-3xl font-bold text-center mb-8 text-cyan-800/90">Inscription</h1>
      
      {error && <p className="bg-red-200/50 border border-red-400 text-red-800 p-3 rounded mb-6 text-center text-lg">⚠️ {error}</p>}
      {success && <p className="bg-green-200/50 border border-green-400 text-green-800 p-3 rounded mb-6 text-center text-lg">✅ {success}</p>}

      <form onSubmit={handleSubmit} className="space-y-6 text-lg text-gray-700">
        <div>
          <label htmlFor="username" className="block font-medium text-cyan-800/90 mb-1 ml-1">
            Nom d'utilisateur:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="text-lg shadow-inner focus:ring-cyan-500 focus:border-cyan-500 block w-full border border-gray-300/80 rounded-md p-3 bg-white/50 backdrop-blur-sm placeholder:text-gray-400"
            placeholder="Choisissez un nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password" className="block font-medium text-cyan-800/90 mb-1 ml-1">
            Mot de passe:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            minLength="6"
            className="text-lg shadow-inner focus:ring-cyan-500 focus:border-cyan-500 block w-full border border-gray-300/80 rounded-md p-3 bg-white/50 backdrop-blur-sm placeholder:text-gray-400"
            placeholder="Minimum 6 caractères"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block font-medium text-cyan-800/90 mb-1 ml-1">
            Confirmer le mot de passe:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            minLength="6"
            className="text-lg shadow-inner focus:ring-cyan-500 focus:border-cyan-500 block w-full border border-gray-300/80 rounded-md p-3 bg-white/50 backdrop-blur-sm placeholder:text-gray-400"
            placeholder="Retapez votre mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-3 px-5 border border-transparent rounded-lg shadow-md text-xl font-bold text-white 
                       ${loading 
                         ? 'bg-gray-400/80 cursor-not-allowed' 
                         : 'bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transform hover:scale-[1.02] transition-all duration-150 ease-in-out'}
                       `}
          >
            {loading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : 'S\'inscrire'}
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-base text-gray-600">
            Déjà un compte?{' '}
            <Link to="/login" className="font-medium text-cyan-600 hover:text-cyan-800">
              Connectez-vous ici
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage; 