import React from 'react';

function Homepage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-lab-bg to-blue-100 p-8 animate-fade-in-up">
      
      {/* Lab-themed container */}
      <div className="bg-white p-10 rounded-lg shadow-xl max-w-2xl w-full border-t-4 border-lab-teal relative">
        
        {/* Decorative lines - pseudo-elements might be better, but this is simpler for now */}
        <div className="absolute top-0 left-0 w-full h-full border-2 border-dashed border-lab-lines rounded-lg opacity-30 pointer-events-none -z-10"></div>

        <h1 className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lab-blue via-lab-purple to-lab-teal">
          Biogy
        </h1>
        <p className="text-xl text-gray-600 text-center mb-6">
          Votre portail vers le monde fascinant de la biologie.
        </p>
        <p className="text-gray-500 text-center mb-8">
          Explorez nos ressources pour apprendre, découvrir les dernières recherches et vous tenir informé des actualités scientifiques.
        </p>

        {/* Simple border acting as a visual divider */}
        <hr className="my-8 border-lab-lines" />

        <nav className="flex justify-center space-x-6">
          <a href="#learning" className="text-lg font-semibold text-lab-blue hover:text-lab-purple transition duration-300 ease-in-out">
            Apprendre
          </a> 
          <span className="text-gray-300">|</span>
          <a href="#research" className="text-lg font-semibold text-lab-purple hover:text-lab-teal transition duration-300 ease-in-out">
            Recherche
          </a> 
          <span className="text-gray-300">|</span>
          <a href="#news" className="text-lg font-semibold text-lab-teal hover:text-lab-blue transition duration-300 ease-in-out">
            Actualités
          </a>
        </nav>
      </div>

    </div>
  );
}

export default Homepage; 