import React from 'react';

function Homepage() {
  return (
    <div>
      <h1>Biogy</h1>
      <p>Votre portail vers le monde fascinant de la biologie.</p>
      <p>Explorez nos ressources pour apprendre, découvrir les dernières recherches et vous tenir informé des actualités scientifiques.</p>
      <nav>
        {/* Placeholder for links to key sections */}
        <a href="#learning">Apprendre</a> | 
        <a href="#research">Recherche</a> | 
        <a href="#news">Actualités</a>
      </nav>
    </div>
  );
}

export default Homepage; 