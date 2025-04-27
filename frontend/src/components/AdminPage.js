import React, { useState, useEffect, useCallback } from 'react';
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

// Composant pour la gestion des utilisateurs
const UserManagement = ({ userInfo }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [newUsername, setNewUsername] = useState('');
  const [newRole, setNewRole] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
  
  // Récupérer la liste des utilisateurs
  const fetchUsers = useCallback(async () => {
    if (!userInfo || !userInfo.token) {
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${apiUrl}/api/admin/users`, {
        headers: {
          'Authorization': `Bearer ${userInfo.token}`
        }
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la récupération des utilisateurs');
      }
      
      setUsers(data);
    } catch (err) {
      console.error('Erreur:', err);
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  }, [userInfo, apiUrl]);
  
  // Charger les utilisateurs au chargement du composant
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  
  // Gérer la modification du rôle d'un utilisateur
  const handleRoleChange = async (userId, newRole) => {
    setError('');
    setSuccess('');
    
    try {
      const response = await fetch(`${apiUrl}/api/admin/users/${userId}/role`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${userInfo.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ role: newRole })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la modification du rôle');
      }
      
      setSuccess(data.message || 'Rôle mis à jour avec succès');
      
      // Mettre à jour la liste des utilisateurs
      setUsers(users.map(user => 
        user._id === userId ? { ...user, role: newRole } : user
      ));
      
      // Réinitialiser le formulaire d'édition
      setEditingUser(null);
      setNewRole('');
    } catch (err) {
      console.error('Erreur:', err);
      setError(err.message || 'Une erreur est survenue');
    }
  };
  
  // Gérer la modification du nom d'utilisateur
  const handleUsernameChange = async (userId) => {
    if (!newUsername.trim()) {
      setError('Le nom d\'utilisateur ne peut pas être vide');
      return;
    }
    
    setError('');
    setSuccess('');
    
    try {
      const response = await fetch(`${apiUrl}/api/admin/users/${userId}/username`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${userInfo.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: newUsername })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la modification du nom d\'utilisateur');
      }
      
      setSuccess(data.message || 'Nom d\'utilisateur mis à jour avec succès');
      
      // Mettre à jour la liste des utilisateurs
      setUsers(users.map(user => 
        user._id === userId ? { ...user, username: newUsername } : user
      ));
      
      // Réinitialiser le formulaire d'édition
      setEditingUser(null);
      setNewUsername('');
    } catch (err) {
      console.error('Erreur:', err);
      setError(err.message || 'Une erreur est survenue');
    }
  };
  
  // Gérer la suppression d'un utilisateur
  const handleDeleteUser = async (userId, username) => {
    // Demander confirmation
    if (!window.confirm(`Êtes-vous sûr de vouloir supprimer l'utilisateur ${username} ? Cette action est irréversible.`)) {
      return;
    }
    
    setError('');
    setSuccess('');
    
    try {
      const response = await fetch(`${apiUrl}/api/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${userInfo.token}`
        }
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la suppression de l\'utilisateur');
      }
      
      setSuccess(data.message || 'Utilisateur supprimé avec succès');
      
      // Mettre à jour la liste des utilisateurs
      setUsers(users.filter(user => user._id !== userId));
    } catch (err) {
      console.error('Erreur:', err);
      setError(err.message || 'Une erreur est survenue');
    }
  };
  
  // Filtrer les utilisateurs en fonction du terme de recherche
  const filteredUsers = users.filter(user => 
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Gestion des Utilisateurs</h2>
      
      {/* Messages de succès/erreur */}
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
          <p>{error}</p>
        </div>
      )}
      {success && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
          <p>{success}</p>
        </div>
      )}
      
      {/* Barre de recherche */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Rechercher un utilisateur..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      {/* Liste des utilisateurs */}
      {loading ? (
        <div className="text-center py-4">
          <p className="text-gray-600">Chargement des utilisateurs...</p>
        </div>
      ) : filteredUsers.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-gray-600">Aucun utilisateur trouvé</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nom d'utilisateur
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rôle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingUser === user._id ? (
                      <input
                        type="text"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded-md"
                        placeholder={user.username}
                      />
                    ) : (
                      <div className="text-sm font-medium text-gray-900">{user.username}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingUser === user._id ? (
                      <select
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded-md"
                      >
                        <option value="">Sélectionner un rôle</option>
                        <option value="student">Étudiant</option>
                        <option value="admin">Administrateur</option>
                      </select>
                    ) : (
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {user.role === 'admin' ? 'Administrateur' : 'Étudiant'}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    {editingUser === user._id ? (
                      <>
                        {newUsername && (
                          <button
                            onClick={() => handleUsernameChange(user._id)}
                            className="text-indigo-600 hover:text-indigo-900 mr-2"
                          >
                            Enregistrer nom
                          </button>
                        )}
                        {newRole && (
                          <button
                            onClick={() => handleRoleChange(user._id, newRole)}
                            className="text-indigo-600 hover:text-indigo-900 mr-2"
                          >
                            Enregistrer rôle
                          </button>
                        )}
                        <button
                          onClick={() => {
                            setEditingUser(null);
                            setNewUsername('');
                            setNewRole('');
                          }}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          Annuler
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            setEditingUser(user._id);
                            setNewUsername(user.username);
                            setNewRole(user.role);
                          }}
                          className="text-indigo-600 hover:text-indigo-900 mr-2"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user._id, user.username)}
                          className="text-red-600 hover:text-red-900"
                          disabled={user._id === userInfo._id} // Empêcher la suppression de son propre compte
                          title={user._id === userInfo._id ? "Vous ne pouvez pas supprimer votre propre compte" : ""}
                        >
                          Supprimer
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

function AdminPage() {
  const [pendingPosts, setPendingPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [activeTab, setActiveTab] = useState('posts'); // 'posts' ou 'users'
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  // Récupérer les posts en attente - mémorisé avec useCallback
  const fetchPendingPosts = useCallback(async () => {
    if (!userInfo || !userInfo.token) {
      return;
    }
    
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
  }, [userInfo]);

  // Approuver un post
  const approvePost = useCallback(async (postId) => {
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
  }, [userInfo, pendingPosts]);

  // Rejeter un post
  const rejectPost = useCallback(async (postId) => {
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
  }, [userInfo, pendingPosts]);

  // Supprimer un post
  const deletePost = useCallback(async (postId) => {
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
  }, [userInfo, pendingPosts]);

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Panneau d'administration</h1>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-4 font-medium text-sm focus:outline-none ${
            activeTab === 'posts'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('posts')}
        >
          Modération des Posts
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm focus:outline-none ${
            activeTab === 'users'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('users')}
        >
          Gestion des Utilisateurs
        </button>
      </div>
      
      {/* Afficher les messages */}
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
          <p>{error}</p>
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6">
          <p>{success}</p>
        </div>
      )}
      
      {/* Contenu des onglets */}
      {activeTab === 'posts' ? (
        // Contenu de l'onglet "Modération des Posts"
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Posts en attente de modération</h2>
          
          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-600">Chargement des posts en attente...</p>
            </div>
          ) : pendingPosts.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-gray-600">Aucun post en attente de modération.</p>
            </div>
          ) : (
            <div>
              {pendingPosts.map((post) => (
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
      ) : (
        // Contenu de l'onglet "Gestion des Utilisateurs"
        <UserManagement userInfo={userInfo} />
      )}
    </div>
  );
}

export default AdminPage; 