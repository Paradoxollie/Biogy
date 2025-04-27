import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Composant pour afficher un post en attente de modération
const PendingPostCard = ({ post, onApprove, onReject, onDelete }) => {
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Formater la date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-4">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-lg text-gray-800">
            Post par <span className="text-blue-600">{post.user.username}</span>
          </h3>
          <span className="text-sm text-gray-500">{formatDate(post.createdAt)}</span>
        </div>
        
        {/* Contenu du fichier */}
        <div className="my-3">
          {post.fileType === 'image' ? (
            <img 
              src={post.fileUrl} 
              alt={post.caption || 'Image à modérer'} 
              className="w-full max-h-96 object-contain rounded-md"
            />
          ) : (
            <video 
              src={post.fileUrl} 
              controls 
              className="w-full max-h-96 object-contain rounded-md"
            >
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          )}
        </div>
        
        {/* Description/Légende */}
        {post.caption && (
          <div className="bg-gray-50 p-3 rounded-md mb-3">
            <p className="text-gray-700 whitespace-pre-wrap">
              {expanded || post.caption.length < 100 
                ? post.caption 
                : `${post.caption.substring(0, 100)}...`}
            </p>
            {post.caption.length > 100 && (
              <button 
                onClick={() => setExpanded(!expanded)}
                className="text-blue-500 text-sm mt-1 hover:underline"
              >
                {expanded ? 'Voir moins' : 'Voir plus'}
              </button>
            )}
          </div>
        )}
        
        {/* Actions */}
        <div className="flex justify-end gap-2 mt-3">
          <button
            onClick={() => {
              setLoading(true);
              onDelete(post._id)
                .finally(() => setLoading(false));
            }}
            disabled={loading}
            className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors disabled:opacity-50"
          >
            Supprimer
          </button>
          <button
            onClick={() => {
              setLoading(true);
              onReject(post._id)
                .finally(() => setLoading(false));
            }}
            disabled={loading}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors disabled:opacity-50"
          >
            Rejeter
          </button>
          <button
            onClick={() => {
              setLoading(true);
              onApprove(post._id)
                .finally(() => setLoading(false));
            }}
            disabled={loading}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors disabled:opacity-50"
          >
            Approuver
          </button>
        </div>
      </div>
    </div>
  );
};

function AdminPage() {
  const [pendingPosts, setPendingPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  // Récupérer les posts en attente
  const fetchPendingPosts = async () => {
    setLoading(true);
    setError('');
    
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/admin/posts/pending`, {
        headers: {
          'Authorization': `Bearer ${userInfo.token}`
        }
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la récupération des posts en attente');
      }
      
      setPendingPosts(data);
    } catch (err) {
      console.error('Erreur:', err);
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  // Approuver un post
  const approvePost = async (postId) => {
    setError('');
    setSuccess('');
    
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/admin/posts/${postId}/approve`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${userInfo.token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l\'approbation du post');
      }
      
      setSuccess(`Post approuvé avec succès`);
      // Mettre à jour la liste des posts en attente
      setPendingPosts(pendingPosts.filter(post => post._id !== postId));
    } catch (err) {
      console.error('Erreur:', err);
      setError(err.message || 'Une erreur est survenue');
      return Promise.reject(err);
    }
  };

  // Rejeter un post
  const rejectPost = async (postId) => {
    setError('');
    setSuccess('');
    
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/admin/posts/${postId}/reject`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${userInfo.token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors du rejet du post');
      }
      
      setSuccess(`Post rejeté avec succès`);
      // Mettre à jour la liste des posts en attente
      setPendingPosts(pendingPosts.filter(post => post._id !== postId));
    } catch (err) {
      console.error('Erreur:', err);
      setError(err.message || 'Une erreur est survenue');
      return Promise.reject(err);
    }
  };

  // Supprimer un post
  const deletePost = async (postId) => {
    setError('');
    setSuccess('');
    
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/admin/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${userInfo.token}`
        }
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la suppression du post');
      }
      
      setSuccess(`Post supprimé avec succès`);
      // Mettre à jour la liste des posts en attente
      setPendingPosts(pendingPosts.filter(post => post._id !== postId));
    } catch (err) {
      console.error('Erreur:', err);
      setError(err.message || 'Une erreur est survenue');
      return Promise.reject(err);
    }
  };

  // Vérifier si l'utilisateur est admin au chargement
  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
      return;
    }
    
    if (userInfo.role !== 'admin') {
      navigate('/');
      return;
    }
    
    fetchPendingPosts();
  }, [userInfo, navigate, fetchPendingPosts]);

  // Rafraîchir le statut des messages après quelques secondes
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="container mx-auto max-w-5xl p-6 my-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Panneau d'Administration</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 mb-6">
        <div className="p-4 bg-gray-50 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Posts en attente de modération</h2>
        </div>
        
        <div className="p-4">
          {loading ? (
            <div className="text-center py-10">
              <svg className="animate-spin h-10 w-10 text-gray-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="mt-3 text-gray-600">Chargement...</p>
            </div>
          ) : pendingPosts.length === 0 ? (
            <div className="text-center py-10">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="mt-3 text-gray-600">Aucun post en attente de modération</p>
              <button 
                onClick={fetchPendingPosts}
                className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Rafraîchir
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">
                  {pendingPosts.length} {pendingPosts.length > 1 ? 'posts en attente' : 'post en attente'}
                </p>
                <button 
                  onClick={fetchPendingPosts}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Rafraîchir
                </button>
              </div>
              
              {pendingPosts.map(post => (
                <PendingPostCard
                  key={post._id}
                  post={post}
                  onApprove={approvePost}
                  onReject={rejectPost}
                  onDelete={deletePost}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPage; 