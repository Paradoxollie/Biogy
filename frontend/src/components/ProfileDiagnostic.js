import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProfileDiagnostic() {
  const { userInfo } = useAuth();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [corsResults, setCorsResults] = useState(null);

  // Exécuter les tests de diagnostic
  const runTests = async () => {
    setLoading(true);
    setResults([]);

    try {
      // Test 1: Vérifier l'authentification
      addResult('Vérification de l\'authentification',
        userInfo ? 'Utilisateur connecté' : 'Utilisateur non connecté',
        userInfo ? 'success' : 'warning'
      );

      if (!userInfo) {
        addResult('Tests arrêtés', 'Veuillez vous connecter pour continuer les tests', 'error');
        setLoading(false);
        return;
      }

      // Test 2: Vérifier l'accès direct à l'API
      try {
        const directResponse = await axios({
          method: 'GET',
          url: 'https://biogy-api.onrender.com/api/health',
          timeout: 5000
        });

        addResult('Accès direct à l\'API (health)',
          `Succès - Statut: ${directResponse.status}`,
          'success'
        );
      } catch (error) {
        addResult('Accès direct à l\'API (health)',
          `Échec - ${error.message}`,
          'error'
        );
      }

      // Test 3: Vérifier l'accès via la redirection Netlify
      try {
        const apiResponse = await axios({
          method: 'GET',
          url: '/api/health',
          timeout: 5000
        });

        addResult('Accès à l\'API via redirection Netlify',
          `Succès - Statut: ${apiResponse.status}`,
          'success'
        );
      } catch (error) {
        addResult('Accès à l\'API via redirection Netlify',
          `Échec - ${error.message}`,
          'error'
        );
      }

      // Test 4: Vérifier l'accès au profil
      try {
        const profileResponse = await axios({
          method: 'GET',
          url: '/api/social/profile',
          headers: {
            'Authorization': `Bearer ${userInfo.token}`
          },
          timeout: 10000
        });

        addResult('Accès au profil',
          `Succès - Statut: ${profileResponse.status}`,
          'success'
        );
      } catch (error) {
        addResult('Accès au profil',
          `Échec - ${error.message}`,
          'error'
        );
      }

    } catch (error) {
      addResult('Erreur générale', error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  const addResult = (title, message, status) => {
    setResults(prev => [...prev, { title, message, status }]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden sketch-container">
        <div className="bg-gradient-to-r from-lab-blue to-lab-purple p-6">
          <h1 className="text-2xl font-bold text-white">Diagnostic de la page profil</h1>
        </div>

        <div className="p-6">
          <div className="mb-6 p-4 bg-blue-50 rounded-lg text-blue-700">
            <h3 className="font-semibold">Page profil</h3>
            <p>Votre page profil est synchronisée avec le serveur. Toutes les modifications sont enregistrées en ligne.</p>
            <p className="mt-2">
              <Link to="/profile" className="text-lab-purple hover:underline">Accéder à votre profil</Link>
            </p>
          </div>

          <div className="flex space-x-4 mb-6">
            <button
              onClick={runTests}
              disabled={loading}
              className="px-6 py-2 bg-lab-purple text-white rounded-lg hover:bg-lab-purple/90 disabled:opacity-50"
            >
              {loading ? 'Tests en cours...' : 'Lancer les tests de connectivité'}
            </button>
          </div>

          {results.length > 0 && (
            <div className="space-y-4 mb-6">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    result.status === 'success' ? 'bg-green-50 text-green-700' :
                    result.status === 'warning' ? 'bg-yellow-50 text-yellow-700' :
                    result.status === 'info' ? 'bg-blue-50 text-blue-700' :
                    'bg-red-50 text-red-700'
                  }`}
                >
                  <h3 className="font-semibold">{result.title}</h3>
                  <p>{result.message}</p>
                </div>
              ))}
            </div>
          )}
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

export default ProfileDiagnostic;
