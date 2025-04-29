import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../config';

function ForumPage() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 1
  });
  
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  
  // Catégories disponibles
  const categories = [
    { id: 'all', name: 'Toutes les catégories', color: 'gray-600' },
    { id: 'general', name: 'Général', color: 'lab-blue' },
    { id: 'question', name: 'Questions', color: 'lab-purple' },
    { id: 'projet', name: 'Projets', color: 'lab-teal' },
    { id: 'methode', name: 'Méthodes', color: 'lab-green' },
    { id: 'actualite', name: 'Actualités', color: 'amber-500' },
    { id: 'autre', name: 'Autre', color: 'gray-500' }
  ];
  
  // Charger les sujets
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        setLoading(true);
        
        // Construire l'URL avec les paramètres
        let url = `${API_URL}/api/forum/topics?page=${pagination.page}&limit=${pagination.limit}`;
        
        if (category !== 'all') {
          url += `&category=${category}`;
        }
        
        if (search) {
          url += `&search=${encodeURIComponent(search)}`;
        }
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des sujets');
        }
        
        const data = await response.json();
        
        setTopics(data.topics);
        setPagination(data.pagination);
      } catch (error) {
        console.error('Error fetching topics:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTopics();
  }, [pagination.page, pagination.limit, category, search]);
  
  // Gérer le changement de page
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.pages) {
      setPagination({ ...pagination, page: newPage });
    }
  };
  
  // Gérer la recherche
  const handleSearch = (e) => {
    e.preventDefault();
    // Réinitialiser la page à 1 lors d'une nouvelle recherche
    setPagination({ ...pagination, page: 1 });
  };
  
  // Formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
  
  // Vérifier si l'utilisateur est connecté avant de créer un sujet
  const handleNewTopic = () => {
    if (!userInfo) {
      navigate('/login', { state: { from: '/forum' } });
    } else {
      navigate('/forum/nouveau');
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* En-tête avec titre et bouton de création */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Espace Collaboratif</h1>
          <p className="text-gray-600">
            Discutez, partagez et collaborez avec d'autres passionnés de biotechnologie
          </p>
        </div>
        
        <button
          onClick={handleNewTopic}
          className="mt-4 md:mt-0 px-4 py-2 bg-gradient-to-r from-lab-blue to-lab-purple text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Nouveau Sujet
        </button>
      </div>
      
      {/* Filtres et recherche */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6 sketch-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Filtres par catégorie */}
          <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                  category === cat.id
                    ? `bg-${cat.color} text-white`
                    : `bg-gray-100 text-${cat.color} hover:bg-gray-200`
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          
          {/* Recherche */}
          <form onSubmit={handleSearch} className="w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un sujet..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <button
                type="submit"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-lab-purple"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Liste des sujets */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden sketch-container">
        {loading ? (
          <div className="p-8 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-lab-purple"></div>
            <p className="mt-2 text-gray-600">Chargement des sujets...</p>
          </div>
        ) : error ? (
          <div className="p-8 text-center text-red-500">
            <p>Erreur: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-lab-purple text-white rounded-lg"
            >
              Réessayer
            </button>
          </div>
        ) : topics.length === 0 ? (
          <div className="p-8 text-center">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="text-gray-600 mb-2">Aucun sujet trouvé</p>
            <p className="text-gray-500 text-sm mb-4">Soyez le premier à créer un sujet de discussion !</p>
            <button
              onClick={handleNewTopic}
              className="px-4 py-2 bg-gradient-to-r from-lab-blue to-lab-purple text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Créer un sujet
            </button>
          </div>
        ) : (
          <>
            {/* En-tête du tableau */}
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200 font-medium text-gray-600">
              <div className="col-span-6">Sujet</div>
              <div className="col-span-2 text-center">Catégorie</div>
              <div className="col-span-1 text-center">Réponses</div>
              <div className="col-span-1 text-center">Vues</div>
              <div className="col-span-2 text-right">Dernière activité</div>
            </div>
            
            {/* Liste des sujets */}
            <div className="divide-y divide-gray-200">
              {topics.map((topic) => (
                <div key={topic._id} className="p-4 hover:bg-gray-50 transition-colors duration-200">
                  <div className="md:grid md:grid-cols-12 md:gap-4 flex flex-col">
                    {/* Titre et auteur */}
                    <div className="col-span-6">
                      <Link to={`/forum/${topic._id}`} className="block">
                        <h3 className="text-lg font-semibold text-gray-800 hover:text-lab-purple transition-colors duration-200">
                          {topic.isSticky && (
                            <span className="inline-block mr-2 text-lab-purple">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )}
                          {topic.title}
                        </h3>
                      </Link>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <span>Par {topic.user?.username || 'Utilisateur inconnu'}</span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(topic.createdAt)}</span>
                      </div>
                    </div>
                    
                    {/* Catégorie */}
                    <div className="col-span-2 flex md:justify-center items-center mt-2 md:mt-0">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${
                        categories.find(cat => cat.id === topic.category)?.color || 'gray-500'
                      }/10 text-${
                        categories.find(cat => cat.id === topic.category)?.color || 'gray-500'
                      }`}>
                        {categories.find(cat => cat.id === topic.category)?.name || 'Autre'}
                      </span>
                    </div>
                    
                    {/* Nombre de réponses */}
                    <div className="col-span-1 flex md:justify-center items-center mt-2 md:mt-0">
                      <span className="text-gray-600">{topic.discussionCount || 0}</span>
                    </div>
                    
                    {/* Nombre de vues */}
                    <div className="col-span-1 flex md:justify-center items-center mt-2 md:mt-0">
                      <span className="text-gray-600">{topic.views}</span>
                    </div>
                    
                    {/* Dernière activité */}
                    <div className="col-span-2 flex md:justify-end items-center mt-2 md:mt-0">
                      <div className="text-right">
                        <div className="text-sm text-gray-600">{formatDate(topic.lastActivity)}</div>
                        {topic.lastDiscussion && (
                          <div className="text-xs text-gray-500">
                            par {topic.lastDiscussion.user?.username || 'Utilisateur inconnu'}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            {pagination.pages > 1 && (
              <div className="p-4 flex justify-center">
                <div className="flex space-x-1">
                  <button
                    onClick={() => handlePageChange(1)}
                    disabled={pagination.page === 1}
                    className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    «
                  </button>
                  <button
                    onClick={() => handlePageChange(pagination.page - 1)}
                    disabled={pagination.page === 1}
                    className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ‹
                  </button>
                  
                  {[...Array(pagination.pages).keys()].map((page) => {
                    // Afficher seulement quelques pages autour de la page actuelle
                    if (
                      page + 1 === 1 ||
                      page + 1 === pagination.pages ||
                      (page + 1 >= pagination.page - 1 && page + 1 <= pagination.page + 1)
                    ) {
                      return (
                        <button
                          key={page + 1}
                          onClick={() => handlePageChange(page + 1)}
                          className={`px-3 py-1 rounded-md text-sm font-medium ${
                            pagination.page === page + 1
                              ? 'bg-lab-purple text-white'
                              : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                          }`}
                        >
                          {page + 1}
                        </button>
                      );
                    } else if (
                      (page + 1 === pagination.page - 2 && pagination.page > 3) ||
                      (page + 1 === pagination.page + 2 && pagination.page < pagination.pages - 2)
                    ) {
                      return (
                        <span
                          key={page + 1}
                          className="px-3 py-1 text-gray-500"
                        >
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                  
                  <button
                    onClick={() => handlePageChange(pagination.page + 1)}
                    disabled={pagination.page === pagination.pages}
                    className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ›
                  </button>
                  <button
                    onClick={() => handlePageChange(pagination.pages)}
                    disabled={pagination.page === pagination.pages}
                    className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    »
                  </button>
                </div>
              </div>
            )}
          </>
        )}
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

export default ForumPage;
