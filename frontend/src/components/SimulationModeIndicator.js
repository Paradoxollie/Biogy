import React, { useState, useEffect } from 'react';
import proxyService from '../services/proxyService';

/**
 * Composant qui affiche un indicateur lorsque l'application fonctionne en mode simulation
 */
function SimulationModeIndicator() {
  const [isSimulationMode, setIsSimulationMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Vérifier si le mode simulation est actif
  useEffect(() => {
    const checkSimulationMode = async () => {
      try {
        // Vérifier si l'API est accessible
        const apiAccessible = await proxyService.checkApiAccessibility();
        setIsSimulationMode(!apiAccessible);
      } catch (error) {
        console.error('Erreur lors de la vérification du mode simulation:', error);
        setIsSimulationMode(true); // En cas d'erreur, considérer que nous sommes en mode simulation
      }
    };

    // Vérifier immédiatement
    checkSimulationMode();

    // Vérifier toutes les 30 secondes
    const interval = setInterval(checkSimulationMode, 30000);

    return () => clearInterval(interval);
  }, []);

  // Si le mode simulation n'est pas actif, ne rien afficher
  if (!isSimulationMode) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded shadow-lg transition-all duration-300 ${
          isExpanded ? 'w-80' : 'w-auto cursor-pointer'
        }`}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        {isExpanded ? (
          <>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Mode Simulation Actif</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
                className="text-yellow-700 hover:text-yellow-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <p className="text-sm">
              L'application fonctionne actuellement en mode simulation car le serveur API n'est pas accessible.
              Les données affichées sont simulées et ne reflètent pas les données réelles.
            </p>
            <div className="mt-2 text-right">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  proxyService.checkApiAccessibility();
                }}
                className="text-xs bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded"
              >
                Réessayer la connexion
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="font-bold">Mode Simulation</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default SimulationModeIndicator;
