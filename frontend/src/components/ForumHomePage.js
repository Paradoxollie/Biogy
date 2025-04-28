import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DOMPurify from 'dompurify';

const ForumHomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userInfo } = useAuth();
  
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Catégories disponibles
  const categories = [
    { id: 'all', label: 'Toutes les discussions', color: 'bg-gray-100 text-gray-800' },
    { id: 'general', label: 'Discussion générale', color: 'bg-blue-100 text-blue-800' },
    { id: 'question', label: 'Question', color: 'bg-green-100 text-green-800' },
    { id: 'ressource', label: 'Ressource', color: 'bg-purple-100 text-purple-800' },
    { id: 'evenement', label: 'Évènement', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'annonce', label: 'Annonce', color: 'bg-red-100 text-red-800' }
  ];
  
  // Extraction des paramètres de l'URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category') || '';
    const searchParam = searchParams.get('search') || '';
    const pageParam = parseInt(searchParams.get('page') || '1', 10);
    
    setSelectedCategory(categoryParam);
    setSearchTerm(searchParam);
    setPage(pageParam);
  }, [location.search]);
  
  // Récupération des discussions
  useEffect(() => {
    const fetchDiscussions = async () => {
      setLoading(true);
      setError('');
      
      try {
        const queryParams = new URLSearchParams();
        queryParams.append('page', page);
        
        if (selectedCategory && selectedCategory !== 'all') {
          queryParams.append('category', selectedCategory);
        }
        
        if (searchTerm) {
          queryParams.append('search', searchTerm);
        }
        
        const response = await fetch(`/api/forum/discussions?${queryParams.toString()}`);
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des discussions');
        }
        
        const data = await response.json();
        setDiscussions(data.discussions);
        setTotalPages(data.totalPages);
      } catch (err) {
        console.error(err);
        setError('Une erreur est survenue lors du chargement des discussions.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchDiscussions();
  }, [page, selectedCategory, searchTerm]);
  
  // Mise à jour des paramètres d'URL
  const updateUrlParams = (params) => {
    const searchParams = new URLSearchParams(location.search);
    
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
    });
    
    // Toujours revenir à la page 1 lors d'un changement de filtre
    if ('category' in params || 'search' in params) {
      searchParams.set('page', '1');
    }
    
    navigate({
      pathname: location.pathname,
      search: searchParams.toString()
    });
  };
  
  // Formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    
    // Vérifier si la date est valide
    if (isNaN(date.getTime())) {
      return 'Date inconnue';
    }
    
    const now = new Date();
    const diff = now - date;
    
    // Moins d'une minute
    if (diff < 60 * 1000) {
      return 'À l\'instant';
    }
    
    // Moins d'une heure
    if (diff < 60 * 60 * 1000) {
      const minutes = Math.floor(diff / (60 * 1000));
      return `Il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
    }
    
    // Moins d'un jour
    if (diff < 24 * 60 * 60 * 1000) {
      const hours = Math.floor(diff / (60 * 60 * 1000));
      return `Il y a ${hours} heure${hours > 1 ? 's' : ''}`;
    }
    
    // Moins d'une semaine
    if (diff < 7 * 24 * 60 * 60 * 1000) {
      const days = Math.floor(diff / (24 * 60 * 60 * 1000));
      return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
    }
    
    // Format de date complet
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
  
  // Extraire un aperçu du contenu HTML
  const getContentPreview = (htmlContent, maxLength = 150) => {
    if (!htmlContent) return '';
    
    // Nettoyer le HTML
    const cleanHtml = DOMPurify.sanitize(htmlContent);
    
    // Créer un élément temporaire pour extraire le texte
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = cleanHtml;
    
    // Extraire le texte
    let textContent = tempDiv.textContent || tempDiv.innerText || '';
    
    // Tronquer si nécessaire
    if (textContent.length > maxLength) {
      textContent = textContent.substring(0, maxLength) + '...';
    }
    
    return textContent;
  };
  
  // Gestionnaire de recherche
  const handleSearch = (e) => {
    e.preventDefault();
    updateUrlParams({ search: searchTerm, page: '1' });
  };
  
  // Gestionnaire de changement de catégorie
  const handleCategoryChange = (category) => {
    updateUrlParams({ category: category === 'all' ? '' : category, page: '1' });
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        {/* En-tête du forum */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Forum de discussion</h1>
            <p className="text-gray-600">
              Partagez vos connaissances, posez des questions et connectez-vous avec d'autres passionnés de biologie
            </p>
          </div>
          
          {userInfo ? (
            <Link
              to="/forum/new"
              className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lab-purple hover:bg-lab-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Nouvelle discussion
            </Link>
          ) : (
            <Link
              to="/login"
              state={{ from: '/forum/new' }}
              className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Se connecter pour participer
            </Link>
          )}
        </div>
        
        {/* Filtres et recherche */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 mb-6">
          <div className="p-4 md:p-6 space-y-4">
            {/* Recherche */}
            <form onSubmit={handleSearch} className="relative">
              <div className="flex rounded-md shadow-sm">
                <input
                  type="text"
                  className="flex-1 block w-full rounded-l-md border-gray-300 focus:border-lab-purple focus:ring-lab-purple sm:text-sm"
                  placeholder="Rechercher une discussion..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-lab-purple hover:bg-lab-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
            
            {/* Catégories */}
            <div className="overflow-x-auto">
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium 
                      ${selectedCategory === (category.id === 'all' ? '' : category.id) 
                        ? category.color + ' border-2 border-' + category.color.replace('bg-', 'border-') 
                        : 'bg-gray-100 text-gray-800 border-2 border-transparent hover:bg-gray-200'
                      }
                    `}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Messages d'erreur ou de chargement */}
        {error && (
          <div className="rounded-md bg-red-50 p-4 mb-6 border border-red-200">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">{error}</h3>
              </div>
            </div>
          </div>
        )}
        
        {loading && (
          <div className="flex justify-center items-center p-12">
            <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-lab-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-lg font-medium text-gray-600">Chargement des discussions...</span>
          </div>
        )}
        
        {/* Liste des discussions */}
        {!loading && discussions.length === 0 && (
          <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 py-12 px-4">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">Aucune discussion trouvée</h3>
              <p className="mt-1 text-gray-500">
                {searchTerm || selectedCategory 
                  ? 'Aucune discussion ne correspond à votre recherche ou à la catégorie sélectionnée.' 
                  : 'Soyez le premier à démarrer une discussion !'
                }
              </p>
              {userInfo && (
                <div className="mt-6">
                  <Link
                    to="/forum/new"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lab-purple hover:bg-lab-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Nouvelle discussion
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
        
        {!loading && discussions.length > 0 && (
          <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 mb-6">
            <ul className="divide-y divide-gray-200">
              {discussions.map((discussion) => {
                // Trouver la catégorie correspondante
                const categoryObj = categories.find(
                  c => c.id === discussion.category && c.id !== 'all'
                ) || categories[1]; // Défaut : Discussion générale
                
                return (
                  <li key={discussion._id} className="hover:bg-gray-50">
                    <Link to={`/forum/discussion/${discussion._id}`} className="block">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center mb-1">
                          <span className={`px-2.5 py-0.5 rounded text-xs font-medium ${categoryObj.color}`}>
                            {categoryObj.label}
                          </span>
                          <span className="ml-2 text-xs text-gray-500">
                            {formatDate(discussion.createdAt)}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-medium text-gray-900 mb-1">{discussion.title}</h3>
                        
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {getContentPreview(discussion.content)}
                        </p>
                        
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="mr-6 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                            {discussion.replyCount || 0} réponse{discussion.replyCount !== 1 ? 's' : ''}
                          </div>
                          
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg>
                            {discussion.likes} j'aime{discussion.likes !== 1 ? 's' : ''}
                          </div>
                          
                          {discussion.tags && discussion.tags.length > 0 && (
                            <div className="flex-1 flex items-center justify-end space-x-2 max-w-md">
                              {discussion.tags.slice(0, 3).map((tag, index) => (
                                <span key={index} className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                  {tag}
                                </span>
                              ))}
                              {discussion.tags.length > 3 && (
                                <span className="text-xs text-gray-500">
                                  +{discussion.tags.length - 3}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        
        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => updateUrlParams({ page: String(page - 1) })}
              disabled={page === 1}
              className={`inline-flex items-center px-3 py-2 border rounded-md text-sm font-medium ${
                page === 1
                  ? 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'
                  : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Précédent
            </button>
            
            <span className="px-4 py-2 text-sm text-gray-700">
              Page {page} sur {totalPages}
            </span>
            
            <button
              onClick={() => updateUrlParams({ page: String(page + 1) })}
              disabled={page === totalPages}
              className={`inline-flex items-center px-3 py-2 border rounded-md text-sm font-medium ${
                page === totalPages
                  ? 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'
                  : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
              }`}
            >
              Suivant
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForumHomePage; 