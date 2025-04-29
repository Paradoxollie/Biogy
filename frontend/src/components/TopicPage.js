import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../config';

function TopicPage() {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
        {discussions.map((discussion) => (
          <div key={discussion._id} className="bg-white rounded-lg shadow-md overflow-hidden sketch-container">
            {/* En-tête de la discussion */}
            <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center">
                <div className="font-medium text-gray-700">{discussion.user?.username || 'Utilisateur inconnu'}</div>
                <span className="mx-2 text-gray-400">•</span>
                <div className="text-sm text-gray-500">{formatDate(discussion.createdAt)}</div>
                {discussion.isEdited && (
                  <>
                    <span className="mx-2 text-gray-400">•</span>
                    <div className="text-xs text-gray-500 italic">Modifié le {formatDate(discussion.editedAt)}</div>
                  </>
                )}
              </div>

              <div className="flex items-center space-x-2">
                {userInfo && (userInfo._id === discussion.user?._id || userInfo.role === 'admin') && (
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Contenu de la discussion */}
            <div className="p-6">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: discussion.content }}></div>

              {/* Pièces jointes si présentes */}
              {discussion.attachments && discussion.attachments.length > 0 && (
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
            <div className="bg-gray-50 p-4 border-t border-gray-200 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-500 hover:text-lab-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  <span>{discussion.likes?.length || 0}</span>
                </button>

                <button className="flex items-center text-gray-500 hover:text-lab-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                  </svg>
                  <span>Répondre</span>
                </button>
              </div>

              <div className="text-xs text-gray-500">
                #{discussions.indexOf(discussion) + 1}
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
                      </div>

                      {userInfo && (userInfo._id === reply.user?._id || userInfo.role === 'admin') && (
                        <button className="text-gray-500 hover:text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                      )}
                    </div>

                    <div className="prose max-w-none text-sm" dangerouslySetInnerHTML={{ __html: reply.content }}></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Formulaire de réponse */}
      {userInfo ? (
        <div className="bg-white rounded-lg shadow-md p-6 sketch-container">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Répondre à ce sujet</h3>

          <div className="mb-4">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lab-purple focus:border-transparent"
              rows="5"
              placeholder="Votre réponse..."
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button className="px-4 py-2 bg-gradient-to-r from-lab-blue to-lab-purple text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Répondre
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-6 text-center sketch-container">
          <p className="text-gray-600 mb-4">Vous devez être connecté pour participer à cette discussion.</p>
          <Link
            to="/login"
            className="px-4 py-2 bg-gradient-to-r from-lab-blue to-lab-purple text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
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
