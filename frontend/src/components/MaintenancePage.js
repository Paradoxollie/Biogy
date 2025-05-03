import React from 'react';
import { Link } from 'react-router-dom';

function MaintenancePage({ title, message, returnPath = '/' }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 sketch-container">
        <div className="text-center">
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-amber-100 rounded-full animate-pulse-slow"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{title || 'Maintenance en cours'}</h1>
          
          <p className="text-lg text-gray-600 mb-6">
            {message || 'Cette section est temporairement indisponible pendant que nous effectuons des améliorations. Merci de votre patience !'}
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to={returnPath}
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-medium"
            >
              Retour à l'accueil
            </Link>
            
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-medium"
            >
              Réessayer
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Si le problème persiste, veuillez contacter l'administrateur ou réessayer plus tard.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MaintenancePage;
