import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProjectsGallery() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [commenting, setCommenting] = useState(null); // ID du projet actuellement commenté
  const [comment, setComment] = useState('');
  const [commentLoading, setCommentLoading] = useState(false);
  const [likeLoading, setLikeLoading] = useState(null); // ID du projet en cours de like
  const { userInfo } = useAuth();

  // Update the API URL to point to the production backend if not in development
  const apiUrl = process.env.REACT_APP_API_URL || 'https://biogy.onrender.com';

  // Utiliser useCallback pour éviter les boucles infinies avec useEffect
  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${apiUrl}/api/posts`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la récupération des projets');
      }

      setProjects(data);
    } catch (err) {
      console.error('Erreur:', err);
      setError(err.message || 'Une erreur est survenue lors de la récupération des projets');
    } finally {
      setLoading(false);
    }
  }, [apiUrl]); // Dépendance apiUrl pour useCallback

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]); // Ajout de fetchProjects comme dépendance

  // Format date function
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  // Gérer les likes (requête API réelle)
  const handleLike = async (projectId) => {
    if (!userInfo) return; // Requiert connexion

    try {
      setLikeLoading(projectId);
      const response = await fetch(`${apiUrl}/api/posts/${projectId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      // Mettre à jour le projet dans l'état
      setProjects(projects.map(project => {
        if (project._id === projectId) {
          return {
            ...project,
            likes: data.likes
          };
        }
        return project;
      }));
    } catch (error) {
      console.error('Erreur like:', error);
      // Optionnel: Afficher un message d'erreur
    } finally {
      setLikeLoading(null);
    }
  };

  // Gérer l'ajout de commentaire (requête API réelle)
  const handleAddComment = async (projectId) => {
    if (!userInfo || !comment.trim()) return;

    try {
      setCommentLoading(true);
      const response = await fetch(`${apiUrl}/api/posts/${projectId}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`
        },
        body: JSON.stringify({ text: comment.trim() })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      // Mettre à jour le projet avec le nouveau commentaire
      setProjects(projects.map(project => {
        if (project._id === projectId) {
          const updatedComments = [...project.comments, data.comment];
          return {
            ...project,
            comments: updatedComments
          };
        }
        return project;
      }));

      setComment('');
      setCommenting(null);
    } catch (error) {
      console.error('Erreur commentaire:', error);
      // Optionnel: Afficher un message d'erreur
    } finally {
      setCommentLoading(false);
    }
  };

  // Ajouter une nouvelle fonction pour supprimer un post
  const handleDeletePost = async (projectId) => {
    if (!userInfo || userInfo.role !== 'admin') return;
    
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) return;
    
    try {
      const response = await fetch(`${apiUrl}/api/posts/${projectId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`
        }
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Erreur lors de la suppression du post');
      }
      
      // Mettre à jour l'état en retirant le post supprimé
      setProjects(projects.filter(project => project._id !== projectId));
      
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      alert(`Erreur: ${error.message}`);
    }
  };

  // Ajouter une fonction pour supprimer un commentaire
  const handleDeleteComment = async (projectId, commentId) => {
    if (!userInfo || userInfo.role !== 'admin') return;
    
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer ce commentaire ?')) return;
    
    try {
      console.log('Tentative de suppression du commentaire:', { projectId, commentId });
      console.log('URL:', `${apiUrl}/api/posts/${projectId}/comments/${commentId}`);
      console.log('Token:', userInfo.token.substring(0, 10) + '...');
      
      const response = await fetch(`${apiUrl}/api/posts/${projectId}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`
        }
      });
      
      const data = await response.json();
      console.log('Réponse du serveur:', data);
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la suppression du commentaire');
      }
      
      // Mettre à jour l'état en retirant le commentaire supprimé
      setProjects(projects.map(project => {
        if (project._id === projectId) {
          return {
            ...project,
            comments: project.comments.filter(comment => comment._id !== commentId)
          };
        }
        return project;
      }));
      
    } catch (error) {
      console.error('Erreur complète lors de la suppression du commentaire:', error);
      alert(`Erreur: ${error.message}`);
    }
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      {/* En-tête avec style laboratoire avancé */}
      <div className="mb-20 relative">
        {/* Fond spécial avec effet "laboratoire" */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-lab-blue/5 via-transparent to-lab-purple/5"></div>
          
          {/* Grille de laboratoire */}
          <div className="absolute inset-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={`grid-h-${i}`} className="absolute left-0 right-0" style={{ top: `${i * 10}%`, height: '1px', background: 'rgba(0,0,0,0.03)' }}></div>
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={`grid-v-${i}`} className="absolute top-0 bottom-0" style={{ left: `${i * 10}%`, width: '1px', background: 'rgba(0,0,0,0.03)' }}></div>
            ))}
          </div>
        </div>
        
        {/* Éléments décoratifs scientifiques */}
        <div className="absolute -top-10 -left-10 w-40 h-40 opacity-10 -z-5">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 20V40M70 20V40M25 50H75M30 70H70M40 90H60" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            <path d="M20 40H80L70 80C68 85 60 90 50 90C40 90 32 85 30 80L20 40Z" stroke="#000" strokeWidth="4" fill="none" />
          </svg>
        </div>
        <div className="absolute -bottom-10 -right-10 w-36 h-36 opacity-10 rotate-45 -z-5">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="20" width="40" height="60" rx="5" stroke="#000" strokeWidth="4" />
            <path d="M45 10L45 20M55 10L55 20" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            <path d="M35 40H65M35 50H65M35 60H65M35 70H65" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        
        {/* ADN décoratif à gauche */}
        <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 opacity-20">
          <svg viewBox="0 0 40 200" xmlns="http://www.w3.org/2000/svg" stroke="#3b82f6" fill="none">
            <path d="M10,10 Q20,30 10,50 Q0,70 10,90 Q20,110 10,130 Q0,150 10,170 Q20,190 10,210" strokeWidth="1" />
            <path d="M30,10 Q20,30 30,50 Q40,70 30,90 Q20,110 30,130 Q40,150 30,170 Q20,190 30,210" strokeWidth="1" />
            <path d="M10,20 L30,20" strokeWidth="0.7" />
            <path d="M10,40 L30,40" strokeWidth="0.7" />
            <path d="M10,60 L30,60" strokeWidth="0.7" />
            <path d="M10,80 L30,80" strokeWidth="0.7" />
            <path d="M10,100 L30,100" strokeWidth="0.7" />
            <path d="M10,120 L30,120" strokeWidth="0.7" />
            <path d="M10,140 L30,140" strokeWidth="0.7" />
            <path d="M10,160 L30,160" strokeWidth="0.7" />
            <path d="M10,180 L30,180" strokeWidth="0.7" />
            <path d="M10,200 L30,200" strokeWidth="0.7" />
          </svg>
        </div>
        
        {/* Molécule décorative à droite */}
        <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 opacity-20">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="30" r="8" fill="rgba(139, 92, 246, 0.7)" />
            <circle cx="30" cy="50" r="8" fill="rgba(20, 184, 166, 0.7)" />
            <circle cx="70" cy="50" r="8" fill="rgba(59, 130, 246, 0.7)" />
            <circle cx="50" cy="70" r="8" fill="rgba(16, 185, 129, 0.7)" />
            <line x1="50" y1="38" x2="50" y2="62" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
            <line x1="38" y1="50" x2="62" y2="50" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
            <line x1="36.5" y1="43.5" x2="43.5" y2="36.5" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
            <line x1="56.5" y1="36.5" x2="63.5" y2="43.5" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
            <line x1="36.5" y1="56.5" x2="43.5" y2="63.5" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
            <line x1="56.5" y1="63.5" x2="63.5" y2="56.5" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Contenu de l'en-tête */}
        <div className="pt-12 pb-8 px-8 text-center relative z-0 border border-gray-200/30 rounded-2xl bg-white/40 backdrop-blur-sm shadow-lg">
          {/* Lignes décoratives sur le dessus */}
          <div className="absolute top-3 left-6 right-6 flex justify-between">
            <div className="w-24 h-1 bg-lab-blue/20 rounded"></div>
            <div className="w-36 h-1 bg-lab-purple/20 rounded"></div>
            <div className="w-24 h-1 bg-lab-teal/20 rounded"></div>
          </div>
          
          {/* Titre principal avec style avancé */}
          <div className="relative inline-block mb-6">
            <h1 className="font-bold relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-lab-blue via-lab-purple to-lab-teal font-display text-6xl tracking-tight">
              Galerie de Projets
            </h1>
            
            {/* Couche d'effet en dessous */}
            <div className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-lab-purple/40 rounded-full transform skew-x-3 blur-sm"></div>
            <div className="absolute -bottom-3 left-1 w-4/5 h-1 bg-lab-blue/30 rounded-full transform -skew-x-2"></div>
            <div className="absolute bottom-3 right-1 w-1/4 h-0.5 bg-lab-teal/20 rounded-full"></div>
            
            {/* Effets scientifiques */}
            <div className="absolute -top-2 right-0 flex space-x-1">
              <div className="w-1 h-3 bg-lab-blue/20 rounded-full"></div>
              <div className="w-1 h-5 bg-lab-purple/20 rounded-full"></div>
              <div className="w-1 h-4 bg-lab-teal/20 rounded-full"></div>
            </div>
          </div>
          
          {/* Sous-titre avec design amélioré */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-0 -top-2 w-3 h-3 border-t border-l border-lab-blue/20 -z-0"></div>
            <div className="absolute right-0 -top-2 w-3 h-3 border-t border-r border-lab-purple/20 -z-0"></div>
            <div className="absolute left-0 -bottom-2 w-3 h-3 border-b border-l border-lab-teal/20 -z-0"></div>
            <div className="absolute right-0 -bottom-2 w-3 h-3 border-b border-r border-lab-purple/20 -z-0"></div>
            
            <p className="text-gray-700 font-scientific text-lg max-w-2xl mx-auto px-2 leading-relaxed">
              Découvrez les expériences et projets partagés par notre communauté de biologistes et biotechnologistes.
            </p>
            
            {/* Petites icônes scientifiques sous le texte */}
            <div className="flex justify-center mt-6 space-x-6">
              <div className="text-lab-blue/60 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-scientific">Observations</span>
              </div>
              <div className="text-lab-purple/60 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
                <span className="text-xs font-scientific">Expériences</span>
              </div>
              <div className="text-lab-teal/60 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-scientific">Découvertes</span>
              </div>
            </div>
          </div>
          
          {/* Ligne de séparation du bas avec style laboratoire */}
          <div className="absolute bottom-3 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent"></div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-lab-blue"></div>
            <div className="absolute top-1 left-1 animate-spin rounded-full h-14 w-14 border-t-4 border-lab-purple opacity-70" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          </div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-800 p-6 rounded-lg text-center relative sketch-border">
          <p>{error}</p>
          <button 
            onClick={() => fetchProjects()} 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors sketch-button"
          >
            Réessayer
          </button>
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg sketch-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-2 left-4 h-0.5 w-16 bg-gray-300 rotate-2"></div>
            <div className="absolute top-6 right-10 h-0.5 w-20 bg-gray-300 -rotate-1"></div>
            <div className="absolute bottom-5 left-8 h-0.5 w-24 bg-gray-300 rotate-1"></div>
            <div className="absolute bottom-10 right-6 h-0.5 w-16 bg-gray-300 -rotate-2"></div>
          </div>
          
          <svg className="mx-auto h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7}>
            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h2 className="mt-6 text-xl font-semibold text-gray-600 font-scientific">Aucun projet disponible pour le moment</h2>
          <p className="mt-2 text-gray-500 font-scientific">Soyez le premier à partager votre expérience!</p>
          <Link to="/partager-projet" className="mt-8 inline-block px-5 py-3 bg-lab-teal text-white rounded-lg hover:bg-lab-teal/90 transition-colors sketch-button">
            Partager un Projet
          </Link>
        </div>
      ) : (
        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project._id} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 sketch-container relative">
              {/* Éléments décoratifs */}
              <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-lab-blue/20"></div>
              <div className="absolute top-2 right-3 w-1 h-1 rounded-full bg-lab-purple/30"></div>
              <div className="absolute bottom-1 left-2 w-2 h-2 rounded-full bg-lab-teal/20"></div>
              
              {/* Header du post avec style scientifique */}
              <div className="p-4 flex items-center justify-between border-b border-gray-200 sketch-border-bottom">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full sketch-avatar overflow-hidden flex items-center justify-center text-white font-bold relative">
                    <div className="w-full h-full bg-gradient-to-br from-lab-blue via-lab-purple to-lab-teal flex items-center justify-center">
                      {project.user.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="absolute inset-0 sketch-overlay"></div>
                  </div>
                  <span className="font-medium font-scientific">{project.user.username}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-400 font-scientific">{formatDate(project.createdAt)}</span>
                  <div className="text-xs text-gray-300 sketch-linestyle mt-1">Projet N°{project._id.substring(project._id.length - 4)}</div>
                  
                  {/* Bouton Admin pour supprimer le post - visible uniquement pour les admins */}
                  {userInfo && userInfo.role === 'admin' && (
                    <button 
                      onClick={() => handleDeletePost(project._id)}
                      className="mt-2 text-xs px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                      title="Supprimer ce projet (Admin uniquement)"
                    >
                      Supprimer
                    </button>
                  )}
                </div>
              </div>
              
              {/* Image/Vidéo avec cadre style scientifique */}
              <div className="relative overflow-hidden bg-black flex justify-center sketch-media-container">
                <div className="absolute top-1 left-1 h-4 w-4 border-t border-l border-lab-purple/30 -z-0"></div>
                <div className="absolute bottom-1 right-1 h-4 w-4 border-b border-r border-lab-blue/30 -z-0"></div>
                
                {project.fileType === 'image' ? (
                  <div className="sketch-media">
                    <img 
                      src={project.fileUrl} 
                      alt={project.caption || 'Image de projet'} 
                      className="object-contain max-h-[500px] w-auto"
                    />
                  </div>
                ) : (
                  <div className="sketch-media">
                    <video 
                      src={project.fileUrl} 
                      className="w-full max-h-[500px] object-contain" 
                      controls
                    >
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  </div>
                )}
                
                {/* Marques d'échelle */}
                <div className="absolute top-2 right-2 flex space-x-1">
                  <div className="w-1 h-4 bg-lab-blue/20"></div>
                  <div className="w-1 h-6 bg-lab-blue/20"></div>
                  <div className="w-1 h-8 bg-lab-blue/20"></div>
                </div>
              </div>
              
              {/* Actions (likes, commentaires) */}
              <div className="p-5 sketch-content">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-6">
                    {/* Bouton "Like" */}
                    <button 
                      onClick={() => userInfo && handleLike(project._id)}
                      className={`flex items-center space-x-2 sketch-button-outline ${
                        userInfo && project.likes && project.likes.some(id => id === userInfo._id)
                          ? 'text-red-500' 
                          : 'text-gray-600 hover:text-gray-700'
                      }`}
                      disabled={!userInfo || likeLoading === project._id}
                    >
                      {likeLoading === project._id ? (
                        <div className="h-5 w-5 border-t-2 border-red-500 rounded-full animate-spin"></div>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sketch-icon" 
                          fill={userInfo && project.likes && project.likes.some(id => id === userInfo._id) ? "currentColor" : "none"} 
                          viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      )}
                      <span className="font-scientific">{project.likes ? project.likes.length : 0}</span>
                    </button>
                    
                    {/* Bouton "Commenter" */}
                    <button 
                      onClick={() => userInfo && setCommenting(commenting === project._id ? null : project._id)}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 sketch-button-outline"
                      disabled={!userInfo}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sketch-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="font-scientific">{project.comments ? project.comments.length : 0}</span>
                    </button>
                  </div>
                  
                  {/* Étiquette décorative */}
                  <div className="sketch-tag bg-lab-blue/10 px-2 py-1 text-xs text-lab-blue font-scientific">
                    {project.fileType === 'image' ? 'OBSERVATION' : 'EXPÉRIENCE'}
                  </div>
                </div>
                
                {/* Légende avec style cahier de laboratoire */}
                {project.caption && (
                  <div className="mb-4 p-3 bg-yellow-50/30 sketch-note relative">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-amber-100"></div>
                    <span className="font-medium mr-2 text-lab-purple">{project.user.username}:</span>
                    <span className="text-gray-700 whitespace-pre-wrap break-words font-scientific">
                      {project.caption}
                    </span>
                  </div>
                )}
                
                {/* Affichage des commentaires avec style labo */}
                {project.comments && project.comments.length > 0 && (
                  <div className="mt-4 space-y-2 sketch-comments">
                    <h4 className="text-sm font-medium text-gray-500 font-scientific pb-1 border-b border-dashed border-gray-200">
                      {project.comments.length === 1 ? '1 commentaire' : `${project.comments.length} commentaires`}
                    </h4>
                    <div className="max-h-60 overflow-y-auto pr-2 styled-scrollbar">
                      {project.comments.map(comment => (
                        <div key={comment._id} className="flex justify-between items-start py-1.5 sketch-comment group">
                          <div className="flex space-x-2">
                            <span className="font-medium text-lab-blue">{comment.user.username}</span>
                            <span className="text-gray-700 font-scientific">{comment.text}</span>
                          </div>
                          
                          {/* Bouton Admin pour supprimer un commentaire - visible uniquement pour les admins */}
                          {userInfo && userInfo.role === 'admin' && (
                            <button
                              onClick={() => handleDeleteComment(project._id, comment._id)}
                              className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity text-xs ml-2"
                              title="Supprimer ce commentaire (Admin uniquement)"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Zone de commentaire avec style scientifique */}
                {commenting === project._id && (
                  <div className="mt-4 flex space-x-2 sketch-comment-form">
                    <input
                      type="text"
                      placeholder="Ajouter un commentaire..."
                      value={comment}
                      onChange={e => setComment(e.target.value)}
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lab-purple font-scientific sketch-input"
                      disabled={commentLoading}
                    />
                    <button
                      onClick={() => handleAddComment(project._id)}
                      disabled={!comment.trim() || commentLoading}
                      className="bg-lab-purple text-white px-4 py-2 rounded-lg disabled:opacity-50 hover:bg-lab-purple/90 flex items-center sketch-button"
                    >
                      {commentLoading ? (
                        <div className="h-4 w-4 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                      ) : null}
                      <span className="font-scientific">Publier</span>
                    </button>
                  </div>
                )}
                
                {/* Message d'invitation à la connexion */}
                {!userInfo && (
                  <div className="mt-4 text-center text-gray-500 text-sm italic sketch-login-prompt py-2 border-t border-dashed border-gray-200">
                    <Link to="/login" className="text-lab-blue hover:underline font-scientific">Connectez-vous</Link> 
                    <span className="font-scientific"> pour aimer ou commenter ce projet</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-16">
        <Link to="/partager-projet" className="px-8 py-4 bg-gradient-to-r from-lab-blue to-lab-purple text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sketch-cta">
          <span className="font-scientific">Partager votre projet</span>
        </Link>
      </div>
      
      {/* Styles spécifiques pour l'effet crayon/schéma */}
      <style jsx="true">{`
        .font-scientific {
          font-family: "Courier New", monospace;
        }
        
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
        
        .sketch-border {
          position: relative;
          border-style: solid;
          border-width: 2px;
          border-color: rgba(0,0,0,0.1);
        }
        
        .sketch-border:before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 1px solid #333;
          border-radius: 0.5rem;
          opacity: 0.07;
          pointer-events: none;
          transform: translate(3px, 3px);
        }
        
        .sketch-border-bottom {
          position: relative;
        }
        
        .sketch-border-bottom:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 5%;
          width: 90%;
          height: 1px;
          background: repeating-linear-gradient(
            90deg, 
            rgba(0,0,0,0.1), 
            rgba(0,0,0,0.1) 5px, 
            transparent 5px, 
            transparent 7px
          );
        }
        
        .sketch-media-container {
          position: relative;
          padding: 0.5rem;
          background-color: rgba(245, 245, 245, 0.5);
        }
        
        .sketch-media {
          position: relative;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.08);
        }
        
        .sketch-media:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 1px solid rgba(0,0,0,0.1);
          pointer-events: none;
        }
        
        .sketch-button, .sketch-button-outline {
          position: relative;
          transition: all 0.2s;
          transform: scale(1);
        }
        
        .sketch-button:hover, .sketch-button-outline:hover {
          transform: scale(1.05);
        }
        
        .sketch-button:before {
          content: "";
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 0.5rem;
          opacity: 0.5;
          pointer-events: none;
          transform: translate(1px, 1px);
        }
        
        .sketch-button-outline {
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          background: rgba(255,255,255,0.5);
          box-shadow: 1px 1px 3px rgba(0,0,0,0.05);
        }
        
        .sketch-avatar {
          position: relative;
          filter: saturate(0.9);
        }
        
        .sketch-avatar:before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 1px dashed rgba(0,0,0,0.2);
          border-radius: 50%;
          pointer-events: none;
        }
        
        .sketch-note {
          border-radius: 0.25rem;
          box-shadow: 1px 1px 3px rgba(0,0,0,0.05);
        }
        
        .sketch-linestyle {
          font-style: italic;
          letter-spacing: 1px;
        }
        
        .sketch-tag {
          border-radius: 0.25rem;
          border: 1px dashed rgba(59, 130, 246, 0.3);
        }
        
        .sketch-comments {
          position: relative;
        }
        
        .sketch-comment {
          position: relative;
          padding-left: 0.5rem;
        }
        
        .sketch-comment:before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background-color: rgba(139, 92, 246, 0.5);
          transform: translateY(-50%);
        }
        
        .sketch-comment-form {
          position: relative;
        }
        
        .sketch-input {
          background-color: rgba(255, 255, 255, 0.8);
        }
        
        .sketch-cta {
          position: relative;
          z-index: 1;
        }
        
        .sketch-cta:before {
          content: "";
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border: 1px dashed rgba(255,255,255,0.4);
          border-radius: 0.5rem;
          opacity: 0.8;
          pointer-events: none;
          z-index: -1;
        }
        
        .styled-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .styled-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.03);
          border-radius: 10px;
        }
        
        .styled-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

export default ProjectsGallery; 