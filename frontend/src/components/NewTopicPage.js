import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../config';

function NewTopicPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('general');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  
  // Catégories disponibles
  const categories = [
    { id: 'general', name: 'Général', color: 'lab-blue' },
    { id: 'question', name: 'Questions', color: 'lab-purple' },
    { id: 'projet', name: 'Projets', color: 'lab-teal' },
    { id: 'methode', name: 'Méthodes', color: 'lab-green' },
    { id: 'actualite', name: 'Actualités', color: 'amber-500' },
    { id: 'autre', name: 'Autre', color: 'gray-500' }
  ];
  
  // Vérifier si l'utilisateur est connecté
  if (!userInfo) {
    navigate('/login', { state: { from: '/forum/nouveau' } });
    return null;
  }
  
  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation de base
    if (!title.trim()) {
      setError('Le titre est requis');
      return;
    }
    
    if (!content.trim()) {
      setError('Le contenu est requis');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${API_URL}/api/forum/topics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`
        },
        body: JSON.stringify({
          title: title.trim(),
          content: content.trim(),
          category,
          tags: tags.trim()
        })
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Erreur lors de la création du sujet');
      }
      
      const data = await response.json();
      
      // Rediriger vers le nouveau sujet
      navigate(`/forum/${data._id}`);
    } catch (error) {
      console.error('Error creating topic:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* En-tête */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Link to="/forum" className="text-lab-purple hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Retour au forum
          </Link>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800">Créer un nouveau sujet</h1>
        <p className="text-gray-600 mt-1">
          Partagez vos idées, posez vos questions ou lancez une discussion
        </p>
      </div>
      
      {/* Formulaire */}
      <div className="bg-white rounded-lg shadow-md p-6 sketch-container">
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-md">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          {/* Titre */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Titre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
              placeholder="Titre de votre sujet"
              required
            />
          </div>
          
          {/* Catégorie */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
              Catégorie
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* Tags */}
          <div className="mb-4">
            <label htmlFor="tags" className="block text-gray-700 font-medium mb-2">
              Tags (séparés par des virgules)
            </label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
              placeholder="ex: biologie, adn, pcr"
            />
          </div>
          
          {/* Contenu */}
          <div className="mb-6">
            <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
              Contenu <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
              rows="10"
              placeholder="Détaillez votre sujet ici..."
              required
            ></textarea>
          </div>
          
          {/* Boutons */}
          <div className="flex justify-end space-x-4">
            <Link
              to="/forum"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              Annuler
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-gradient-to-r from-lab-blue to-lab-purple text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Création en cours...
                </span>
              ) : (
                'Créer le sujet'
              )}
            </button>
          </div>
        </form>
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

export default NewTopicPage;
