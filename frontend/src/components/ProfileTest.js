import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import proxyService from '../services/proxyService';

function ProfileTest() {
  const { userInfo } = useAuth();
  const [testResults, setTestResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const runTest = async () => {
    setLoading(true);
    setError(null);
    setTestResults(null);

    try {
      // Test 1: Vérifier l'accessibilité de l'API
      const apiAccessible = await proxyService.checkApiAccessibility();
      
      // Test 2: Essayer de récupérer le profil via la fonction Netlify
      let profileResult = null;
      try {
        if (userInfo && userInfo.token) {
          const profileData = await proxyService.fetchProfile(userInfo.token);
          profileResult = {
            success: true,
            data: profileData
          };
        } else {
          profileResult = {
            success: false,
            error: 'Utilisateur non connecté'
          };
        }
      } catch (profileError) {
        profileResult = {
          success: false,
          error: profileError.message
        };
      }

      // Compiler les résultats
      setTestResults({
        timestamp: new Date().toISOString(),
        apiAccessible,
        profileTest: profileResult,
        userInfo: userInfo ? {
          id: userInfo._id,
          username: userInfo.username,
          role: userInfo.role,
          tokenPresent: !!userInfo.token
        } : null
      });
    } catch (error) {
      console.error('Erreur lors des tests:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Exécuter le test automatiquement au chargement
    runTest();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 sketch-container">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Test de la fonctionnalité Profil</h1>

        <div className="mb-4">
          <button
            onClick={runTest}
            disabled={loading}
            className="px-4 py-2 bg-lab-purple text-white rounded-md hover:bg-lab-purple/90 transition-colors duration-200 disabled:opacity-50"
          >
            {loading ? 'Test en cours...' : 'Exécuter le test'}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 p-4 rounded-lg mb-6">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {testResults && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Résultats des tests</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-medium">Timestamp: {new Date(testResults.timestamp).toLocaleString()}</p>
              <p className="mt-2">
                API accessible: 
                <span className={testResults.apiAccessible ? 'text-green-500 ml-2' : 'text-red-500 ml-2'}>
                  {testResults.apiAccessible ? 'Oui' : 'Non'}
                </span>
              </p>
              
              <div className="mt-4">
                <p className="font-medium">Test du profil:</p>
                {testResults.profileTest ? (
                  <div className="ml-4 mt-2">
                    <p>
                      Résultat: 
                      <span className={testResults.profileTest.success ? 'text-green-500 ml-2' : 'text-red-500 ml-2'}>
                        {testResults.profileTest.success ? 'Succès' : 'Échec'}
                      </span>
                    </p>
                    
                    {!testResults.profileTest.success && (
                      <p className="text-red-500 mt-1">Erreur: {testResults.profileTest.error}</p>
                    )}
                    
                    {testResults.profileTest.success && testResults.profileTest.data && (
                      <div className="mt-2">
                        <p>Données reçues:</p>
                        <pre className="bg-gray-100 p-2 rounded mt-1 text-xs overflow-auto max-h-60">
                          {JSON.stringify(testResults.profileTest.data, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-500 ml-4 mt-2">Test non exécuté</p>
                )}
              </div>
              
              <div className="mt-4">
                <p className="font-medium">Informations utilisateur:</p>
                {testResults.userInfo ? (
                  <pre className="bg-gray-100 p-2 rounded mt-1 text-xs overflow-auto">
                    {JSON.stringify(testResults.userInfo, null, 2)}
                  </pre>
                ) : (
                  <p className="text-gray-500 ml-4 mt-2">Utilisateur non connecté</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileTest;
