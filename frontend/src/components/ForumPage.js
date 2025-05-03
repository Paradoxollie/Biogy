import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import apiService from '../services/apiService';
import MaintenancePage from './MaintenancePage';

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
        let endpoint = `forum/topics?page=${pagination.page}&limit=${pagination.limit}`;

        if (category !== 'all') {
          endpoint += `&category=${category}`;
        }

        if (search) {
          endpoint += `&search=${encodeURIComponent(search)}`;
        }

        console.log('Chargement des sujets du forum:', endpoint);

        // Utiliser le service API pour récupérer les sujets
        const data = await apiService.get(endpoint);

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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 animate-fade-in-up">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 relative inline-block">
            Espace Collaboratif
          </h1>
          <p className="text-gray-700">
            Discutez, partagez et collaborez avec d'autres passionnés de biotechnologie
          </p>
        </div>

        <button
          onClick={handleNewTopic}
          className="mt-4 md:mt-0 px-4 py-2 bg-gradient-to-r from-lab-blue to-lab-purple text-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Nouveau Sujet
        </button>
      </div>

      {/* Filtres et recherche */}
      <div className="bg-white rounded-lg shadow-md p-5 mb-6 sketch-container animate-fade-in-up" style={{animationDelay: '0.1s'}}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Filtres par catégorie */}
          <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
            {categories.map((cat, index) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  category === cat.id
                    ? `bg-${cat.color} text-white shadow-md`
                    : `bg-gray-100 text-${cat.color} hover:bg-gray-200`
                }`}
                style={{animationDelay: `${0.1 + index * 0.05}s`}}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Recherche */}
          <form onSubmit={handleSearch} className="w-full md:w-auto">
            <div className="relative group">
              <input
                type="text"
                placeholder="Rechercher un sujet..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-64 pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-lab-purple transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <button
                type="submit"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-lab-purple hover:text-lab-blue transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Liste des sujets */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden sketch-container animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        {loading ? (
          <div className="p-12 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lab-purple mb-4">
              <div className="h-10 w-10 rounded-full bg-lab-purple/10"></div>
            </div>
            <p className="mt-2 text-gray-600 font-medium">Chargement des sujets...</p>
          </div>
        ) : error ? (
          // Vérifier si l'erreur est liée à l'indisponibilité du backend
          error.includes('serveur backend') || error.includes('Impossible de se connecter') ? (
            <MaintenancePage
              title="Forum temporairement indisponible"
              message="Notre espace collaboratif est actuellement en maintenance. Nous travaillons à le remettre en ligne le plus rapidement possible."
              returnPath="/"
            />
          ) : (
            <div className="p-12 text-center">
              <div className="mb-4 text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p className="text-red-500 font-medium mb-4">Erreur: {error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-gradient-to-r from-lab-purple to-lab-blue text-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Réessayer
              </button>
            </div>
          )
        ) : topics.length === 0 ? (
          <div className="p-12 text-center">
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-lab-purple/5 rounded-full animate-pulse-glow"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-lab-purple/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium mb-2 text-lg">Aucun sujet trouvé</p>
            <p className="text-gray-500 mb-6">Soyez le premier à créer un sujet de discussion !</p>
            <button
              onClick={handleNewTopic}
              className="px-6 py-3 bg-gradient-to-r from-lab-blue to-lab-purple text-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-medium"
            >
              Créer un sujet
            </button>
          </div>
        ) : (
          <>
            {/* En-tête du tableau */}
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 font-medium text-gray-700">
              <div className="col-span-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-lab-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Sujet
              </div>
              <div className="col-span-2 text-center flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-lab-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Catégorie
              </div>
              <div className="col-span-1 text-center flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-lab-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                Réponses
              </div>
              <div className="col-span-1 text-center flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-lab-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Vues
              </div>
              <div className="col-span-2 text-right flex items-center justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Dernière activité
              </div>
            </div>

            {/* Liste des sujets */}
            <div className="divide-y divide-gray-200">
              {topics.map((topic, index) => (
                <div
                  key={topic._id}
                  className={`p-5 hover:bg-gray-50 transition-all duration-300 ${topic.isSticky ? 'bg-lab-purple/5' : ''}`}
                  style={{animationDelay: `${0.3 + index * 0.05}s`}}
                >
                  <div className="md:grid md:grid-cols-12 md:gap-4 flex flex-col">
                    {/* Titre et auteur */}
                    <div className="col-span-6">
                      <Link to={`/forum/${topic._id}`} className="group block">
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-lab-purple transition-all duration-300 flex items-center">
                          {topic.isSticky && (
                            <span className="inline-flex mr-2 text-lab-purple bg-lab-purple/10 p-1 rounded-full">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )}
                          <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">{topic.title}</span>
                        </h3>
                      </Link>
                      <div className="mt-2 flex items-center text-sm text-gray-600">
                        <span className="flex items-center">
                          <span className="w-6 h-6 rounded-full bg-gradient-to-br from-lab-blue to-lab-purple text-white flex items-center justify-center font-bold text-xs mr-2 shadow-sm">
                            {topic.user?.username ? topic.user.username.charAt(0).toUpperCase() : '?'}
                          </span>
                          <span className="font-medium">{topic.user?.username || 'Utilisateur inconnu'}</span>
                        </span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-gray-500">{formatDate(topic.createdAt)}</span>
                      </div>
                    </div>

                    {/* Catégorie */}
                    <div className="col-span-2 flex md:justify-center items-center mt-3 md:mt-0">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-medium bg-${
                        categories.find(cat => cat.id === topic.category)?.color || 'gray-500'
                      }/10 text-${
                        categories.find(cat => cat.id === topic.category)?.color || 'gray-500'
                      } border border-${
                        categories.find(cat => cat.id === topic.category)?.color || 'gray-500'
                      }/20 shadow-sm`}>
                        {categories.find(cat => cat.id === topic.category)?.name || 'Autre'}
                      </span>
                    </div>

                    {/* Nombre de réponses */}
                    <div className="col-span-1 flex md:justify-center items-center mt-3 md:mt-0">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-lab-teal/10 text-lab-teal font-medium shadow-sm">
                        {topic.discussionCount || 0}
                      </span>
                    </div>

                    {/* Nombre de vues */}
                    <div className="col-span-1 flex md:justify-center items-center mt-3 md:mt-0">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-lab-green/10 text-lab-green font-medium shadow-sm">
                        {topic.views || 0}
                      </span>
                    </div>

                    {/* Dernière activité */}
                    <div className="col-span-2 flex md:justify-end items-center mt-3 md:mt-0">
                      <div className="text-right bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100 shadow-sm">
                        <div className="text-sm font-medium text-amber-700">{formatDate(topic.lastActivity)}</div>
                        {topic.lastDiscussion && (
                          <div className="text-xs text-amber-600 flex items-center justify-end mt-1">
                            <span className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-white flex items-center justify-center font-bold text-[10px] mr-1">
                              {topic.lastDiscussion.user?.username ? topic.lastDiscussion.user.username.charAt(0).toUpperCase() : '?'}
                            </span>
                            {topic.lastDiscussion.user?.username || 'Utilisateur inconnu'}
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
              <div className="p-6 flex justify-center border-t border-gray-200">
                <div className="flex space-x-2 shadow-sm rounded-lg overflow-hidden">
                  <button
                    onClick={() => handlePageChange(1)}
                    disabled={pagination.page === 1}
                    className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:text-lab-blue"
                    title="Première page"
                  >
                    «
                  </button>
                  <button
                    onClick={() => handlePageChange(pagination.page - 1)}
                    disabled={pagination.page === 1}
                    className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:text-lab-blue"
                    title="Page précédente"
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
                          className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                            pagination.page === page + 1
                              ? 'bg-gradient-to-r from-lab-blue to-lab-purple text-white shadow-md'
                              : 'text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-lab-purple'
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
                          className="px-3 py-2 text-gray-500 bg-gray-50 flex items-center"
                        >
                          •••
                        </span>
                      );
                    }
                    return null;
                  })}

                  <button
                    onClick={() => handlePageChange(pagination.page + 1)}
                    disabled={pagination.page === pagination.pages}
                    className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:text-lab-blue"
                    title="Page suivante"
                  >
                    ›
                  </button>
                  <button
                    onClick={() => handlePageChange(pagination.pages)}
                    disabled={pagination.page === pagination.pages}
                    className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:text-lab-blue"
                    title="Dernière page"
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
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .sketch-container:hover {
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
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
          opacity: 0.06;
          pointer-events: none;
          transform: translate(3px, 3px);
          transition: all 0.3s ease;
        }

        .sketch-container:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            linear-gradient(to right, rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
          background-size: 20px 20px;
          border-radius: 0.5rem;
          pointer-events: none;
        }

        .paper-lined-bg {
          background-image: linear-gradient(0deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px);
          background-size: 100% 24px;
          background-position: 0 0;
        }
      `}</style>
    </div>
  );
}

export default ForumPage;
