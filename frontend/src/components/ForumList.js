import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DOMPurify from 'dompurify';

const ForumList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userInfo } = useAuth();
  
  // État pour les discussions et les filtres
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterTag, setFilterTag] = useState('');
  const [popularTags, setPopularTags] = useState([]);
  
  // Liste des catégories disponibles
  const categories = [
    { id: 'all', label: 'Toutes les catégories' },
    { id: 'general', label: 'Discussion générale', color: 'bg-blue-100 text-blue-800' },
    { id: 'question', label: 'Question', color: 'bg-green-100 text-green-800' },
    { id: 'ressource', label: 'Ressource', color: 'bg-purple-100 text-purple-800' },
    { id: 'evenement', label: 'Évènement', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'annonce', label: 'Annonce', color: 'bg-red-100 text-red-800' }
  ];
  
  // Options de tri
  const sortOptions = [
    { value: 'newest', label: 'Plus récentes' },
    { value: 'oldest', label: 'Plus anciennes' },
    { value: 'most_commented', label: 'Plus commentées' },
    { value: 'most_liked', label: 'Plus aimées' }
  ];
  
  // Mettre à jour les paramètres d'URL lorsque les filtres changent
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (searchTerm) params.set('q', searchTerm);
    if (currentPage > 1) params.set('page', currentPage);
    if (sortBy !== 'newest') params.set('sort', sortBy);
    if (filterCategory !== 'all') params.set('category', filterCategory);
    if (filterTag) params.set('tag', filterTag);
    
    const newUrl = `${location.pathname}?${params.toString()}`;
    
    // Mettre à jour l'URL sans recharger la page
    window.history.replaceState({}, '', newUrl);
    
    // Charger les discussions avec les nouveaux filtres
    fetchDiscussions();
  }, [searchTerm, currentPage, sortBy, filterCategory, filterTag]);
  
  // Charger les tags populaires au chargement initial
  useEffect(() => {
    fetchPopularTags();
    
    // Récupérer les paramètres d'URL initiaux
    const params = new URLSearchParams(location.search);
    if (params.has('q')) setSearchTerm(params.get('q'));
    if (params.has('page')) setCurrentPage(parseInt(params.get('page')));
    if (params.has('sort')) setSortBy(params.get('sort'));
    if (params.has('category')) setFilterCategory(params.get('category'));
    if (params.has('tag')) setFilterTag(params.get('tag'));
  }, [location.search]);
  
  // Fonction pour récupérer les discussions
  const fetchDiscussions = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Construire l'URL avec les paramètres de filtrage
      let url = `/api/discussions?page=${currentPage}`;
      
      if (searchTerm) url += `&search=${encodeURIComponent(searchTerm)}`;
      if (sortBy) url += `&sort=${sortBy}`;
      if (filterCategory !== 'all') url += `&category=${filterCategory}`;
      if (filterTag) url += `&tag=${encodeURIComponent(filterTag)}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Une erreur est survenue lors de la récupération des discussions');
      }
      
      setDiscussions(data.discussions);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error('Erreur lors du chargement des discussions:', err);
      setError('Impossible de charger les discussions. Veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };
  
  // Fonction pour récupérer les tags populaires
  const fetchPopularTags = async () => {
    try {
      const response = await fetch('/api/tags/popular');
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Une erreur est survenue lors de la récupération des tags populaires');
      }
      
      setPopularTags(data.tags || []);
    } catch (err) {
      console.error('Erreur lors du chargement des tags populaires:', err);
    }
  };
  
  // Gérer la recherche
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Réinitialiser la pagination lors d'une nouvelle recherche
  };
  
  // Fonction pour formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 1) {
      // Moins de 24 heures
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
      if (diffHours < 1) {
        // Moins d'une heure
        const diffMinutes = Math.floor(diffTime / (1000 * 60));
        return `il y a ${diffMinutes} minute${diffMinutes > 1 ? 's' : ''}`;
      }
      return `il y a ${diffHours} heure${diffHours > 1 ? 's' : ''}`;
    } else if (diffDays < 7) {
      // Moins d'une semaine
      return `il y a ${diffDays} jour${diffDays > 1 ? 's' : ''}`;
    } else if (diffDays < 30) {
      // Moins d'un mois
      const diffWeeks = Math.floor(diffDays / 7);
      return `il y a ${diffWeeks} semaine${diffWeeks > 1 ? 's' : ''}`;
    } else {
      // Plus d'un mois, afficher la date complète
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    }
  };
  
  // Fonction pour obtenir le style d'une catégorie
  const getCategoryStyle = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'bg-gray-100 text-gray-800';
  };
  
  // Fonction pour obtenir le label d'une catégorie
  const getCategoryLabel = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.label : categoryId;
  };
  
  // Créer un extrait du contenu HTML en texte brut
  const createExcerpt = (htmlContent, maxLength = 150) => {
    if (!htmlContent) return '';
    
    // Convertir le HTML en texte brut
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = DOMPurify.sanitize(htmlContent);
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    
    // Tronquer le texte à la longueur maximale
    if (textContent.length <= maxLength) return textContent;
    return textContent.substring(0, maxLength) + '...';
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* En-tête avec barre de recherche et bouton de création */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Forum de discussion</h1>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <form onSubmit={handleSearch} className="relative flex-grow">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher des discussions..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </form>
            
            <button
              onClick={() => navigate('/new-discussion')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-lab-purple hover:bg-lab-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple"
            >
              <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Nouvelle discussion
            </button>
          </div>
        </div>
        
        {/* Filtres */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Filtre par catégorie */}
            <div className="w-full md:w-auto">
              <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie
              </label>
              <select
                id="category-filter"
                value={filterCategory}
                onChange={(e) => {
                  setFilterCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-lab-purple focus:border-lab-purple sm:text-sm rounded-md"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Tri */}
            <div className="w-full md:w-auto">
              <label htmlFor="sort-order" className="block text-sm font-medium text-gray-700 mb-1">
                Trier par
              </label>
              <select
                id="sort-order"
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-lab-purple focus:border-lab-purple sm:text-sm rounded-md"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Tags populaires */}
            <div className="w-full">
              <p className="text-sm font-medium text-gray-700 mb-1">Tags populaires</p>
              <div className="flex flex-wrap gap-2">
                {popularTags.length > 0 ? (
                  popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setFilterTag(tag === filterTag ? '' : tag);
                        setCurrentPage(1);
                      }}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        tag === filterTag
                          ? 'bg-lab-purple/10 text-lab-purple'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                      {tag === filterTag && (
                        <svg className="ml-1.5 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))
                ) : (
                  <span className="text-sm text-gray-500">Aucun tag populaire pour le moment</span>
                )}
              </div>
            </div>
          </div>
          
          {/* Afficher les filtres actifs */}
          {(searchTerm || filterCategory !== 'all' || filterTag) && (
            <div className="mt-4 flex items-center">
              <span className="text-sm text-gray-500 mr-2">Filtres actifs:</span>
              <div className="flex flex-wrap gap-2">
                {searchTerm && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Recherche: "{searchTerm}"
                    <button
                      type="button"
                      onClick={() => setSearchTerm('')}
                      className="ml-1.5 inline-flex flex-shrink-0 rounded-full p-0.5 text-gray-400 hover:text-gray-500"
                    >
                      <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </span>
                )}
                
                {filterCategory !== 'all' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Catégorie: {getCategoryLabel(filterCategory)}
                    <button
                      type="button"
                      onClick={() => setFilterCategory('all')}
                      className="ml-1.5 inline-flex flex-shrink-0 rounded-full p-0.5 text-gray-400 hover:text-gray-500"
                    >
                      <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </span>
                )}
                
                {filterTag && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Tag: {filterTag}
                    <button
                      type="button"
                      onClick={() => setFilterTag('')}
                      className="ml-1.5 inline-flex flex-shrink-0 rounded-full p-0.5 text-gray-400 hover:text-gray-500"
                    >
                      <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </span>
                )}
                
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setFilterCategory('all');
                    setFilterTag('');
                    setSortBy('newest');
                    setCurrentPage(1);
                  }}
                  className="text-xs text-lab-purple hover:text-lab-purple/80 font-medium"
                >
                  Effacer tous les filtres
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Liste des discussions */}
        {loading ? (
          <div className="text-center py-12">
            <svg className="animate-spin mx-auto h-8 w-8 text-lab-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="mt-3 text-gray-500">Chargement des discussions...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
            <p>{error}</p>
          </div>
        ) : discussions.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">Aucune discussion trouvée</h3>
            <p className="mt-1 text-gray-500">
              Essayez de modifier vos critères de recherche ou créez une nouvelle discussion.
            </p>
            <div className="mt-6">
              <button
                onClick={() => navigate('/new-discussion')}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-lab-purple hover:bg-lab-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple"
              >
                <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Créer une discussion
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {discussions.map((discussion) => (
              <div key={discussion._id} className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 hover:border-lab-purple transition-colors">
                <Link to={`/discussion/${discussion._id}`} className="block p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryStyle(discussion.category)}`}>
                          {getCategoryLabel(discussion.category)}
                        </span>
                        {discussion.isResolved && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                              <circle cx="4" cy="4" r="3" />
                            </svg>
                            Résolu
                          </span>
                        )}
                      </div>
                      
                      <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                        {discussion.title}
                      </h2>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {createExcerpt(discussion.content)}
                      </p>
                      
                      {discussion.tags && discussion.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {discussion.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex items-center text-xs text-gray-500">
                        <div className="flex items-center mr-4">
                          <svg className="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {discussion.replyCount || 0} {discussion.replyCount === 1 ? 'réponse' : 'réponses'}
                        </div>
                        
                        <div className="flex items-center mr-4">
                          <svg className="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                          </svg>
                          {discussion.likes || 0} {discussion.likes === 1 ? 'like' : 'likes'}
                        </div>
                        
                        <div className="flex items-center">
                          <svg className="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          {formatDate(discussion.createdAt)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Avatar et nom d'utilisateur */}
                    <div className="ml-4 flex flex-col items-center">
                      <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                        {discussion.author.avatar ? (
                          <img src={discussion.author.avatar} alt={discussion.author.username} className="h-full w-full object-cover" />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center bg-lab-purple text-white font-medium text-lg">
                            {discussion.author.username ? discussion.author.username.charAt(0).toUpperCase() : '?'}
                          </div>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-gray-500 text-center">
                        {discussion.author.username || 'Utilisateur'}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center py-4">
                <nav className="flex items-center space-x-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Précédent</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    // Afficher seulement un sous-ensemble de pages pour éviter trop de boutons
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => setCurrentPage(pageNumber)}
                          className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                            currentPage === pageNumber
                              ? 'z-10 bg-lab-purple text-white'
                              : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    } else if (
                      pageNumber === currentPage - 2 ||
                      pageNumber === currentPage + 2
                    ) {
                      return (
                        <span
                          key={pageNumber}
                          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700"
                        >
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                  
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Suivant</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </nav>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForumList; 