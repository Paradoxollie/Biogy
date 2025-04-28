import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ForumPage = () => {
  const { userInfo } = useAuth();
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeFilter, setActiveFilter] = useState('recent');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Liste des catégories disponibles
  const categories = [
    { id: 'all', label: 'Toutes', color: 'bg-gray-100 text-gray-800' },
    { id: 'general', label: 'Discussion générale', color: 'bg-blue-100 text-blue-800' },
    { id: 'question', label: 'Question', color: 'bg-green-100 text-green-800' },
    { id: 'ressource', label: 'Ressource', color: 'bg-purple-100 text-purple-800' },
    { id: 'evenement', label: 'Évènement', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'annonce', label: 'Annonce', color: 'bg-red-100 text-red-800' }
  ];
  
  // Options de tri
  const filters = [
    { id: 'recent', label: 'Plus récentes' },
    { id: 'popular', label: 'Plus populaires' },
    { id: 'active', label: 'Plus actives' }
  ];
  
  const fetchDiscussions = async () => {
    setLoading(true);
    setError('');
    
    try {
      let url = `/api/forum/discussions?page=${currentPage}`;
      
      if (activeCategory !== 'all') {
        url += `&category=${activeCategory}`;
      }
      
      if (activeFilter === 'popular') {
        url += '&sort=likes';
      } else if (activeFilter === 'active') {
        url += '&sort=replies';
      } else {
        url += '&sort=createdAt';
      }
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Une erreur est survenue');
      }
      
      setDiscussions(data.discussions);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err.message || 'Une erreur est survenue. Veuillez réessayer.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchDiscussions();
  }, [currentPage, activeFilter, activeCategory]);
  
  // Formatage de la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return "Aujourd'hui";
    } else if (diffDays === 1) {
      return "Hier";
    } else if (diffDays < 7) {
      return `Il y a ${diffDays} jours`;
    } else {
      return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 mb-6">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Forum de discussion</h1>
              
              {userInfo && (
                <Link
                  to="/forum/new"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-lab-purple hover:bg-lab-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Nouvelle discussion
                </Link>
              )}
            </div>
            
            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {error}
              </div>
            )}
            
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="w-full md:w-3/4">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setCurrentPage(1);
                      }}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        activeCategory === category.id 
                          ? category.color + ' border border-current' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-1/4">
                <div className="flex justify-end gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => {
                        setActiveFilter(filter.id);
                        setCurrentPage(1);
                      }}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                        activeFilter === filter.id 
                          ? 'bg-lab-purple/10 text-lab-purple border border-lab-purple/30' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {loading ? (
              <div className="py-12 flex justify-center items-center">
                <svg className="animate-spin h-8 w-8 text-lab-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            ) : discussions.length === 0 ? (
              <div className="py-12 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Aucune discussion trouvée</h3>
                <p className="mt-1 text-gray-500">
                  {activeCategory !== 'all' 
                    ? "Il n'y a pas encore de discussions dans cette catégorie." 
                    : "Il n'y a pas encore de discussions dans le forum."}
                </p>
                {userInfo && (
                  <Link
                    to="/forum/new"
                    className="mt-6 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-lab-purple hover:bg-lab-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple"
                  >
                    Créer la première discussion
                  </Link>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {discussions.map((discussion) => {
                  const category = categories.find(c => c.id === discussion.category) || categories[0];
                  
                  return (
                    <div 
                      key={discussion._id} 
                      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <Link to={`/forum/discussion/${discussion._id}`} className="block p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${category.color}`}>
                              {category.label}
                            </span>
                            
                            <h3 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-1">
                              {discussion.title}
                            </h3>
                            
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                              <span className="truncate">
                                Par {discussion.author.name}
                              </span>
                              <span className="mx-1 text-gray-300">•</span>
                              <span>{formatDate(discussion.createdAt)}</span>
                              
                              {discussion.tags && discussion.tags.length > 0 && (
                                <>
                                  <span className="mx-1 text-gray-300">•</span>
                                  <div className="flex flex-wrap gap-1">
                                    {discussion.tags.slice(0, 3).map((tag, index) => (
                                      <span key={index} className="text-xs text-lab-purple">
                                        #{tag}
                                      </span>
                                    ))}
                                    {discussion.tags.length > 3 && (
                                      <span className="text-xs text-gray-500">
                                        +{discussion.tags.length - 3}
                                      </span>
                                    )}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                          
                          <div className="ml-4 flex flex-col items-end">
                            <div className="flex items-center text-gray-500 text-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                              </svg>
                              {discussion.replyCount} {discussion.replyCount > 1 ? 'réponses' : 'réponse'}
                            </div>
                            
                            <div className="mt-2 flex items-center text-gray-500 text-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                              </svg>
                              {discussion.likes} {discussion.likes > 1 ? 'j\'aime' : 'j\'aime'}
                            </div>
                          </div>
                        </div>
                        
                        {discussion.lastReply && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <div className="flex items-center text-sm">
                              <img 
                                src={discussion.lastReply.author.avatar || '/images/default-avatar.png'} 
                                alt={discussion.lastReply.author.name} 
                                className="h-6 w-6 rounded-full mr-2"
                              />
                              <p className="text-gray-500 truncate">
                                Dernière réponse par <span className="font-medium text-gray-900">{discussion.lastReply.author.name}</span>
                                <span className="mx-1 text-gray-300">•</span>
                                {formatDate(discussion.lastReply.createdAt)}
                              </p>
                            </div>
                          </div>
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
            
            {/* Pagination */}
            {!loading && totalPages > 1 && (
              <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
                <div className="flex w-0 flex-1">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Précédent
                  </button>
                </div>
                
                <div className="hidden md:flex">
                  {[...Array(totalPages).keys()].map((x) => (
                    <button
                      key={x + 1}
                      onClick={() => setCurrentPage(x + 1)}
                      className={`px-4 py-2 text-sm font-medium ${
                        currentPage === x + 1
                          ? 'text-lab-purple border-lab-purple z-10 border-2 rounded-md'
                          : 'text-gray-700 hover:bg-gray-50 border-gray-300 border rounded-md mx-1'
                      }`}
                    >
                      {x + 1}
                    </button>
                  ))}
                </div>
                
                <div className="flex md:hidden">
                  <span className="text-sm text-gray-700">
                    Page <span className="font-medium">{currentPage}</span> sur <span className="font-medium">{totalPages}</span>
                  </span>
                </div>
                
                <div className="flex w-0 flex-1 justify-end">
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Suivant
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPage; 