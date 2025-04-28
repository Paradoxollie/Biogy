import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';
import api from '../services/api';

const DiscussionPage = () => {
  const { discussionId } = useParams();
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  const replyFormRef = useRef(null);
  
  const [discussion, setDiscussion] = useState(null);
  const [replies, setReplies] = useState([]);
  const [replyContent, setReplyContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [replyLoading, setReplyLoading] = useState(false);
  const [error, setError] = useState('');
  const [replyError, setReplyError] = useState('');
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [sortOrder, setSortOrder] = useState('newest');
  const [hasLiked, setHasLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  
  // Configuration de l'éditeur ReactQuill
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image'],
      ['clean']
    ],
  };
  
  const formats = [
    'header',
    'bold', 'italic', 'underline',
    'list', 'bullet',
    'link', 'image'
  ];
  
  // Récupérer les détails de la discussion et les réponses
  const fetchDiscussionDetails = async () => {
    setLoading(true);
    setError(null);
    
    try {
      console.log(`Tentative de récupération de la discussion ID:${discussionId}`);
      const discussionResponse = await api.get(`/discussions/${discussionId}`);
      console.log("Réponse discussion:", discussionResponse.data);
      setDiscussion(discussionResponse.data.discussion);
      
      if (userInfo) {
        try {
          console.log("Vérification du statut de like");
          const likeStatusResponse = await api.get(`/discussions/${discussionId}/like-status`, {
            headers: {
              Authorization: `Bearer ${userInfo.token}`
            }
          });
          console.log("Réponse like status:", likeStatusResponse.data);
          setHasLiked(likeStatusResponse.data.hasLiked);
        } catch (err) {
          console.error('Error checking like status:', err);
        }
      }
      
      console.log(`Récupération des réponses avec tri: ${sortOrder}`);
      const repliesResponse = await api.get(`/discussions/${discussionId}/replies?sort=${sortOrder}`);
      console.log("Réponse replies:", repliesResponse.data);
      setReplies(repliesResponse.data.replies);
    } catch (err) {
      console.error("Erreur détaillée:", err);
      setError(err.response?.data?.message || 'Une erreur est survenue lors de la récupération des données');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchDiscussionDetails();
  }, [discussionId, userInfo, sortOrder]);
  
  // Gérer le changement de l'ordre de tri des réponses
  const handleSortChange = (newSortOrder) => {
    if (newSortOrder !== sortOrder) {
      setSortOrder(newSortOrder);
    }
  };
  
  // Soumettre une nouvelle réponse
  const handleSubmitReply = async (e) => {
    e.preventDefault();
    
    if (!replyContent.trim()) {
      return;
    }
    
    setReplyLoading(true);
    setReplyError('');
    
    try {
      const response = await api.post(`/discussions/${discussionId}/replies`, {
        content: replyContent
      }, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      });
      
      setReplies([...replies, response.data.reply]);
      setReplyContent('');
      setLikesCount(likesCount + 1);
    } catch (err) {
      setReplyError(err.response?.data?.message || 'Une erreur est survenue lors de l\'envoi de votre réponse');
      console.error(err);
    } finally {
      setReplyLoading(false);
    }
  };
  
  // Gérer le like d'une discussion
  const handleLikeDiscussion = async () => {
    if (!userInfo) {
      navigate('/login');
      return;
    }
    
    try {
      const response = await api.post(`/discussions/${discussionId}/like`, {}, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      });
      
      setHasLiked(response.data.hasLiked);
      setLikesCount(response.data.likesCount);
    } catch (err) {
      console.error('Error toggling like:', err);
    }
  };
  
  // Naviguer vers le formulaire de réponse
  const scrollToReplyForm = () => {
    if (replyFormRef.current) {
      replyFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    
    // Vérifier si la date est valide
    if (isNaN(date.getTime())) {
      return 'Date inconnue';
    }
    
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  // Récupérer la couleur de la catégorie
  const getCategoryColor = (categoryName) => {
    const categories = {
      'general': 'bg-blue-100 text-blue-800',
      'question': 'bg-green-100 text-green-800',
      'ressource': 'bg-purple-100 text-purple-800',
      'evenement': 'bg-yellow-100 text-yellow-800',
      'annonce': 'bg-red-100 text-red-800'
    };
    
    return categories[categoryName] || 'bg-gray-100 text-gray-800';
  };
  
  // Récupérer le label de la catégorie
  const getCategoryLabel = (categoryName) => {
    const categories = {
      'general': 'Discussion générale',
      'question': 'Question',
      'ressource': 'Ressource',
      'evenement': 'Évènement',
      'annonce': 'Annonce'
    };
    
    return categories[categoryName] || 'Discussion générale';
  };
  
  // Afficher un message de chargement
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-center items-center py-20">
            <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-lab-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-lg font-medium text-gray-600">Chargement de la discussion...</span>
          </div>
        </div>
      </div>
    );
  }
  
  // Afficher un message d'erreur
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white shadow-sm rounded-lg p-6 border border-red-200">
            <div className="text-center py-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h2 className="mt-2 text-lg font-medium text-red-800">{error}</h2>
              <div className="mt-6">
                <Link
                  to="/forum"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-lab-purple hover:bg-lab-purple-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple"
                >
                  Retour au forum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Si la discussion n'est pas trouvée
  if (!discussion) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="text-center py-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="mt-2 text-lg font-medium text-gray-900">Discussion introuvable</h2>
              <p className="mt-1 text-gray-500">La discussion que vous recherchez n'existe pas ou a été supprimée.</p>
              <div className="mt-6">
                <Link
                  to="/forum"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-lab-purple hover:bg-lab-purple-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple"
                >
                  Retour au forum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Afficher la discussion et les réponses
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        {/* Fil d'Ariane */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-lab-purple">
                <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Accueil
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <Link to="/forum" className="ml-1 text-sm font-medium text-gray-700 hover:text-lab-purple md:ml-2">Forum</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 truncate max-w-xs">
                  {discussion.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        
        {/* Carte de la discussion principale */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 mb-6">
          <div className="p-6">
            <div className="flex flex-wrap items-center justify-between mb-4">
              <div className="flex items-center space-x-4 mb-2 md:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-lab-purple text-white flex items-center justify-center font-medium">
                    {discussion.author?.username ? discussion.author.username.charAt(0).toUpperCase() : '?'}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{discussion.author?.username || 'Utilisateur inconnu'}</p>
                  <p className="text-sm text-gray-500">{formatDate(discussion.createdAt)}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(discussion.category)}`}>
                  {getCategoryLabel(discussion.category)}
                </span>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{discussion.title}</h1>
            
            <div className="prose prose-lab max-w-none mb-6"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(discussion.content) }}
            />
            
            {discussion.tags && discussion.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {discussion.tags.map((tag, index) => (
                  <span key={index} className="px-2.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
              <div className="flex space-x-4">
                <button 
                  onClick={handleLikeDiscussion}
                  className={`flex items-center text-sm font-medium ${hasLiked ? 'text-lab-purple' : 'text-gray-500 hover:text-lab-purple'}`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 mr-1.5 ${hasLiked ? 'text-lab-purple fill-current' : 'text-gray-400'}`} 
                    viewBox="0 0 20 20" 
                    fill={hasLiked ? 'currentColor' : 'none'}
                    stroke="currentColor"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  {likesCount} j'aime{likesCount !== 1 ? 's' : ''}
                </button>
                
                <button 
                  onClick={scrollToReplyForm}
                  className="flex items-center text-sm font-medium text-gray-500 hover:text-lab-purple"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" />
                  </svg>
                  Répondre
                </button>
              </div>
              
              {userInfo && discussion.author?._id === userInfo._id && (
                <div className="flex space-x-2">
                  <Link
                    to={`/forum/edit/${discussionId}`}
                    className="inline-flex items-center text-xs font-medium text-gray-500 hover:text-lab-purple"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    Modifier
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Section des réponses */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              Réponses ({replies.length})
            </h2>
            
            <div className="relative">
              <select
                value={sortOrder}
                onChange={(e) => handleSortChange(e.target.value)}
                className="block pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-lab-purple focus:border-lab-purple rounded-md"
              >
                <option value="newest">Plus récentes</option>
                <option value="oldest">Plus anciennes</option>
              </select>
            </div>
          </div>
          
          {replies.length === 0 ? (
            <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">Aucune réponse pour le moment</h3>
              <p className="mt-1 text-gray-500">Soyez le premier à répondre à cette discussion !</p>
            </div>
          ) : (
            <div className="space-y-4">
              {replies.map((reply) => (
                <div key={reply._id} className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
                  <div className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-lab-purple text-white flex items-center justify-center font-medium">
                          {reply.author?.username ? reply.author.username.charAt(0).toUpperCase() : '?'}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-medium text-gray-900">{reply.author?.username || 'Utilisateur inconnu'}</p>
                          <p className="text-xs text-gray-500">{formatDate(reply.createdAt)}</p>
                        </div>
                        <div className="prose prose-lab max-w-none"
                          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(reply.content) }}
                        />
                      </div>
                    </div>
                    
                    {userInfo && reply.author?._id === userInfo._id && (
                      <div className="flex justify-end space-x-2 mt-4 border-t border-gray-100 pt-3">
                        <button 
                          className="inline-flex items-center text-xs font-medium text-gray-500 hover:text-lab-purple"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                          Modifier
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Formulaire de réponse */}
        <div ref={replyFormRef} className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 mb-6">
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Ajouter une réponse</h3>
            
            {!userInfo ? (
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-gray-700 mb-3">Vous devez être connecté pour répondre à cette discussion.</p>
                <Link
                  to="/login"
                  state={{ from: `/forum/discussion/${discussionId}` }}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lab-purple hover:bg-lab-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple"
                >
                  Se connecter
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmitReply}>
                {replyError && (
                  <div className="rounded-md bg-red-50 p-4 mb-4 border border-red-200">
                    <div className="flex">
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">{replyError}</h3>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mb-4">
                  <ReactQuill
                    theme="snow"
                    value={replyContent}
                    onChange={setReplyContent}
                    modules={modules}
                    formats={formats}
                    placeholder="Rédigez votre réponse ici..."
                    className="h-40"
                  />
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={replyLoading}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lab-purple hover:bg-lab-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {replyLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                        Publier la réponse
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionPage; 