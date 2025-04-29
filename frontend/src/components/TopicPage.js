import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../config';

function TopicPage() {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [replyContent, setReplyContent] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [editingDiscussion, setEditingDiscussion] = useState(null);
  const [editContent, setEditContent] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const fileInputRef = useRef(null);
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  // Catégories disponibles
  const categories = {
    general: { name: 'Général', color: 'lab-blue' },
    question: { name: 'Questions', color: 'lab-purple' },
    projet: { name: 'Projets', color: 'lab-teal' },
    methode: { name: 'Méthodes', color: 'lab-green' },
    actualite: { name: 'Actualités', color: 'amber-500' },
    autre: { name: 'Autre', color: 'gray-500' }
  };

  // Charger le sujet et les discussions
  useEffect(() => {
    const fetchTopicAndDiscussions = async () => {
      try {
        setLoading(true);

        // Récupérer le sujet
        const topicResponse = await fetch(`${API_URL}/api/forum/topics/${id}`);

        if (!topicResponse.ok) {
          throw new Error('Erreur lors de la récupération du sujet');
        }

        const topicData = await topicResponse.json();
        setTopic(topicData);

        // Récupérer les discussions
        const discussionsResponse = await fetch(`${API_URL}/api/forum/topics/${id}/discussions`);

        if (!discussionsResponse.ok) {
          throw new Error('Erreur lors de la récupération des discussions');
        }

        const discussionsData = await discussionsResponse.json();
        setDiscussions(discussionsData.discussions);
      } catch (error) {
        console.error('Error fetching topic and discussions:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopicAndDiscussions();
  }, [id]);

  // Formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Gérer la sélection d'images
  const handleImageSelect = (e) => {
    const files = Array.from(e.target.files);

    // Limiter à 5 images maximum
    if (selectedImages.length + files.length > 5) {
      alert('Vous ne pouvez pas télécharger plus de 5 images');
      return;
    }

    // Vérifier les types de fichiers (uniquement des images)
    const validFiles = files.filter(file => file.type.startsWith('image/'));
    if (validFiles.length !== files.length) {
      alert('Seules les images sont acceptées');
    }

    // Ajouter les fichiers valides à la liste
    setSelectedImages(prev => [...prev, ...validFiles]);

    // Créer des aperçus pour les images
    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(prev => [...prev, { file: file.name, url: reader.result }]);
      };
      reader.readAsDataURL(file);
    });
  };

  // Supprimer une image de la sélection
  const removeImage = (index) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
    setImagePreview(prev => prev.filter((_, i) => i !== index));
  };

  // Soumettre une réponse
  const handleSubmitReply = async (e) => {
    e.preventDefault();

    if (!replyContent.trim()) {
      alert('Le contenu de la réponse est requis');
      return;
    }

    try {
      setSubmitting(true);

      // Créer un FormData pour envoyer le contenu et les images
      const formData = new FormData();
      formData.append('content', replyContent);

      // Ajouter les images sélectionnées
      selectedImages.forEach(file => {
        formData.append('images', file);
      });

      const response = await fetch(`${API_URL}/api/forum/topics/${id}/discussions`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi de la réponse');
      }

      // Réinitialiser le formulaire
      setReplyContent('');
      setSelectedImages([]);
      setImagePreview([]);

      // Recharger les discussions
      const discussionsResponse = await fetch(`${API_URL}/api/forum/topics/${id}/discussions`);
      const discussionsData = await discussionsResponse.json();
      setDiscussions(discussionsData.discussions);

    } catch (error) {
      console.error('Error submitting reply:', error);
      alert('Erreur lors de l\'envoi de la réponse: ' + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Commencer l'édition d'une discussion
  const startEditing = (discussion) => {
    setEditingDiscussion(discussion._id);
    setEditContent(discussion.content);
  };

  // Annuler l'édition
  const cancelEditing = () => {
    setEditingDiscussion(null);
    setEditContent('');
  };

  // Sauvegarder les modifications d'une discussion
  const saveEdit = async (discussionId) => {
    if (!editContent.trim()) {
      alert('Le contenu ne peut pas être vide');
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch(`${API_URL}/api/forum/discussions/${discussionId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        },
        body: JSON.stringify({ content: editContent })
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour de la discussion');
      }

      // Mettre à jour la discussion dans l'état local
      setDiscussions(prevDiscussions =>
        prevDiscussions.map(discussion => {
          if (discussion._id === discussionId) {
            return {
              ...discussion,
              content: editContent,
              isEdited: true,
              editedAt: new Date().toISOString()
            };
          }
          return discussion;
        })
      );

      // Réinitialiser l'état d'édition
      setEditingDiscussion(null);
      setEditContent('');

    } catch (error) {
      console.error('Error updating discussion:', error);
      alert('Erreur lors de la mise à jour: ' + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Confirmer la suppression d'une discussion
  const confirmDelete = (discussionId) => {
    setDeleteConfirm(discussionId);
  };

  // Annuler la suppression
  const cancelDelete = () => {
    setDeleteConfirm(null);
  };

  // Supprimer une discussion
  const deleteDiscussion = async (discussionId) => {
    try {
      setSubmitting(true);

      const response = await fetch(`${API_URL}/api/forum/discussions/${discussionId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la suppression de la discussion');
      }

      // Mettre à jour l'état local
      // Si c'est une discussion principale, elle sera marquée comme supprimée mais toujours visible
      // Si c'est une réponse sans réponses, elle sera complètement supprimée
      const updatedDiscussions = discussions.map(discussion => {
        if (discussion._id === discussionId) {
          // Discussion principale ou avec des réponses
          return {
            ...discussion,
            content: '[Ce message a été supprimé]',
            isDeleted: true
          };
        }
        return discussion;
      }).filter(discussion => {
        // Filtrer les discussions qui ont été complètement supprimées
        // (celles qui ne sont pas des discussions principales et n'ont pas de réponses)
        return discussion._id !== discussionId || discussion.isDeleted;
      });

      setDiscussions(updatedDiscussions);
      setDeleteConfirm(null);

    } catch (error) {
      console.error('Error deleting discussion:', error);
      alert('Erreur lors de la suppression: ' + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-lab-purple"></div>
        <p className="mt-2 text-gray-600">Chargement du sujet...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-red-500">Erreur: {error}</p>
          <button
            onClick={() => navigate('/forum')}
            className="mt-4 px-4 py-2 bg-lab-purple text-white rounded-lg"
          >
            Retour au forum
          </button>
        </div>
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-yellow-600">Sujet non trouvé</p>
          <button
            onClick={() => navigate('/forum')}
            className="mt-4 px-4 py-2 bg-lab-purple text-white rounded-lg"
          >
            Retour au forum
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* En-tête du sujet */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Link to="/forum" className="text-lab-purple hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Retour au forum
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 sketch-container">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold text-gray-800">{topic.title}</h1>
            <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${
              categories[topic.category]?.color || 'gray-500'
            }/10 text-${
              categories[topic.category]?.color || 'gray-500'
            }`}>
              {categories[topic.category]?.name || 'Autre'}
            </span>
          </div>

          <div className="mt-2 text-sm text-gray-500">
            <span>Créé par {topic.user?.username || 'Utilisateur inconnu'}</span>
            <span className="mx-2">•</span>
            <span>{formatDate(topic.createdAt)}</span>
            <span className="mx-2">•</span>
            <span>{topic.views} vues</span>
          </div>
        </div>
      </div>

      {/* Liste des discussions */}
      <div className="space-y-6 mb-6">
        {discussions.map((discussion, index) => (
          <div key={discussion._id} className="bg-white rounded-lg shadow-md overflow-hidden sketch-container transform transition-all duration-300 hover:shadow-lg">
            {/* En-tête de la discussion */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lab-blue to-lab-purple text-white flex items-center justify-center font-bold mr-2 shadow-sm">
                  {discussion.user?.username ? discussion.user.username.charAt(0).toUpperCase() : '?'}
                </div>
                <div>
                  <div className="font-medium text-gray-700">{discussion.user?.username || 'Utilisateur inconnu'}</div>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>{formatDate(discussion.createdAt)}</span>
                    {discussion.isEdited && (
                      <>
                        <span className="mx-1 text-gray-400">•</span>
                        <span className="italic">Modifié le {formatDate(discussion.editedAt)}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {userInfo && (userInfo._id === discussion.user?._id || userInfo.role === 'admin') && (
                  <>
                    {!discussion.isDeleted && (
                      <>
                        <button
                          onClick={() => startEditing(discussion)}
                          className="text-gray-500 hover:text-lab-blue transition-colors duration-200"
                          title="Modifier"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>

                        <button
                          onClick={() => confirmDelete(discussion._id)}
                          className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                          title="Supprimer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Contenu de la discussion */}
            <div className="p-6 relative">
              {/* Effet de papier ligné */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="h-full w-full paper-lined-bg"></div>
              </div>

              {editingDiscussion === discussion._id ? (
                <div className="mb-4 relative">
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent bg-white"
                    rows="5"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    required
                  ></textarea>

                  <div className="flex justify-end mt-3 space-x-2">
                    <button
                      onClick={cancelEditing}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={() => saveEdit(discussion._id)}
                      disabled={submitting || !editContent.trim()}
                      className="px-3 py-1 bg-gradient-to-r from-lab-blue to-lab-purple text-white rounded hover:opacity-90 transition-all duration-200 disabled:opacity-50"
                    >
                      {submitting ? 'Enregistrement...' : 'Enregistrer'}
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {deleteConfirm === discussion._id ? (
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100 relative">
                      <p className="text-red-600 mb-3 font-medium">Êtes-vous sûr de vouloir supprimer ce message ?</p>
                      <p className="text-red-500 text-sm mb-3">Cette action ne peut pas être annulée.</p>
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={cancelDelete}
                          className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200"
                        >
                          Annuler
                        </button>
                        <button
                          onClick={() => deleteDiscussion(discussion._id)}
                          disabled={submitting}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200 disabled:opacity-50 flex items-center"
                        >
                          {submitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Suppression...
                            </>
                          ) : (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              Confirmer
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className={`prose max-w-none relative ${discussion.isDeleted ? 'text-gray-400 italic' : ''}`} dangerouslySetInnerHTML={{ __html: discussion.content }}></div>
                  )}
                </>
              )}

              {/* Pièces jointes si présentes */}
              {!discussion.isDeleted && discussion.attachments && discussion.attachments.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Pièces jointes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {discussion.attachments.map((attachment, index) => (
                      <a
                        key={index}
                        href={attachment.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200"
                      >
                        {attachment.type === 'image' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                          </svg>
                        )}
                        {attachment.name || 'Fichier'}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pied de la discussion avec actions */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 border-t border-gray-200 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <button
                  className={`flex items-center px-3 py-1.5 rounded-full transition-all duration-200 ${
                    discussion.likes?.includes(userInfo?._id)
                      ? 'bg-lab-purple/10 text-lab-purple'
                      : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  <span className="font-medium">{discussion.likes?.length || 0}</span>
                </button>

                <button
                  className="flex items-center px-3 py-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-all duration-200"
                  onClick={() => {
                    // Faire défiler jusqu'au formulaire de réponse
                    document.getElementById('reply-form')?.scrollIntoView({ behavior: 'smooth' });
                    // Mettre le focus sur le textarea
                    setTimeout(() => {
                      document.getElementById('reply-textarea')?.focus();
                    }, 500);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                  </svg>
                  <span>Répondre</span>
                </button>
              </div>

              <div className="flex items-center">
                <div className="text-xs font-medium px-2 py-1 bg-gray-200 rounded-full text-gray-700">
                  #{discussions.indexOf(discussion) + 1}
                </div>
              </div>
            </div>

            {/* Réponses à cette discussion si présentes */}
            {discussion.replies && discussion.replies.length > 0 && (
              <div className="border-t border-gray-200 pl-8">
                {discussion.replies.map((reply) => (
                  <div key={reply._id} className="p-4 border-b border-gray-100 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center mb-2">
                        <div className="font-medium text-gray-700">{reply.user?.username || 'Utilisateur inconnu'}</div>
                        <span className="mx-2 text-gray-400">•</span>
                        <div className="text-sm text-gray-500">{formatDate(reply.createdAt)}</div>
                        {reply.isEdited && (
                          <>
                            <span className="mx-2 text-gray-400">•</span>
                            <div className="text-xs text-gray-500 italic">Modifié le {formatDate(reply.editedAt)}</div>
                          </>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        {userInfo && (userInfo._id === reply.user?._id || userInfo.role === 'admin') && (
                          <>
                            {!reply.isDeleted && (
                              <>
                                <button
                                  onClick={() => startEditing(reply)}
                                  className="text-gray-500 hover:text-lab-blue transition-colors duration-200"
                                  title="Modifier"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                  </svg>
                                </button>

                                <button
                                  onClick={() => confirmDelete(reply._id)}
                                  className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                                  title="Supprimer"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                  </svg>
                                </button>
                              </>
                            )}
                          </>
                        )}
                      </div>
                    </div>

                    {editingDiscussion === reply._id ? (
                      <div className="mb-4">
                        <textarea
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
                          rows="3"
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                          required
                        ></textarea>

                        <div className="flex justify-end mt-3 space-x-2">
                          <button
                            onClick={cancelEditing}
                            className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200"
                          >
                            Annuler
                          </button>
                          <button
                            onClick={() => saveEdit(reply._id)}
                            disabled={submitting || !editContent.trim()}
                            className="px-3 py-1 bg-lab-blue text-white rounded hover:bg-lab-blue/90 transition-colors duration-200 disabled:opacity-50"
                          >
                            {submitting ? 'Enregistrement...' : 'Enregistrer'}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        {deleteConfirm === reply._id ? (
                          <div className="bg-red-50 p-3 rounded-lg">
                            <p className="text-red-600 mb-2 text-sm">Êtes-vous sûr de vouloir supprimer ce message ?</p>
                            <div className="flex justify-end space-x-2">
                              <button
                                onClick={cancelDelete}
                                className="px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200"
                              >
                                Annuler
                              </button>
                              <button
                                onClick={() => deleteDiscussion(reply._id)}
                                disabled={submitting}
                                className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200 disabled:opacity-50"
                              >
                                {submitting ? 'Suppression...' : 'Confirmer'}
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className={`prose max-w-none text-sm ${reply.isDeleted ? 'text-gray-400 italic' : ''}`} dangerouslySetInnerHTML={{ __html: reply.content }}></div>
                        )}
                      </>
                    )}

                    {/* Pièces jointes de la réponse si présentes */}
                    {!reply.isDeleted && reply.attachments && reply.attachments.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-gray-100">
                        <div className="flex flex-wrap gap-2">
                          {reply.attachments.map((attachment, index) => (
                            <a
                              key={index}
                              href={attachment.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700 hover:bg-gray-200"
                            >
                              {attachment.type === 'image' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                                </svg>
                              )}
                              {attachment.name || 'Fichier'}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Formulaire de réponse */}
      {userInfo ? (
        <div id="reply-form" className="bg-white rounded-lg shadow-md p-6 sketch-container transform transition-all duration-300 hover:shadow-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-lab-purple" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
            </svg>
            Répondre à ce sujet
          </h3>

          <form onSubmit={handleSubmitReply}>
            <div className="mb-4 relative">
              {/* Effet de papier ligné */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-lg">
                <div className="h-full w-full paper-lined-bg"></div>
              </div>

              <textarea
                id="reply-textarea"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent bg-white relative"
                rows="5"
                placeholder="Votre réponse..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Upload d'images */}
            <div className="mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 flex items-center shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-lab-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  Ajouter des images
                </button>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {selectedImages.length > 0 ? (
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-lab-green" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {selectedImages.length} image{selectedImages.length > 1 ? 's' : ''} sélectionnée{selectedImages.length > 1 ? 's' : ''}
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                      </svg>
                      Max 5 images
                    </span>
                  )}
                </span>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageSelect}
                multiple
                accept="image/*"
                className="hidden"
              />
            </div>

            {/* Aperçu des images */}
            {imagePreview.length > 0 && (
              <div className="mb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {imagePreview.map((image, index) => (
                  <div key={index} className="relative group transform transition-transform duration-200 hover:scale-105">
                    <img
                      src={image.url}
                      alt={`Aperçu ${index + 1}`}
                      className="h-24 w-full object-cover rounded-lg border border-gray-200 shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs truncate px-1 py-0.5 rounded-b-lg">
                      {image.file}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting || !replyContent.trim()}
                className="px-4 py-2 bg-gradient-to-r from-lab-blue to-lab-purple text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
              >
                {submitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    Répondre
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-6 text-center sketch-container">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className="text-gray-600 mb-4">Vous devez être connecté pour participer à cette discussion.</p>
          <Link
            to="/login"
            className="px-4 py-2 bg-gradient-to-r from-lab-blue to-lab-purple text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Se connecter
          </Link>
        </div>
      )}

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

export default TopicPage;
