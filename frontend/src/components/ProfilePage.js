import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { userId } = useParams();
  const { userInfo } = useAuth();
  
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('activité');
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  
  useEffect(() => {
    fetchProfile();
  }, [userId]);
  
  const fetchProfile = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/social/profile/${userId}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la récupération du profil');
      }
      
      setProfile(data.profile);
      
      if (data.profile.followers && Array.isArray(data.profile.followers)) {
        setFollowersCount(data.profile.followers.length);
        setIsFollowing(
          userInfo && 
          data.profile.followers.some(
            follower => follower._id === userInfo.id
          )
        );
      }
      
      if (data.profile.following && Array.isArray(data.profile.following)) {
        setFollowingCount(data.profile.following.length);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const handleFollow = async () => {
    if (!userInfo) {
      // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
      return;
    }
    
    try {
      const response = await fetch(`/api/social/follow/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`
        }
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l\'action follow/unfollow');
      }
      
      setIsFollowing(data.isFollowing);
      setFollowersCount(data.followersCount);
    } catch (err) {
      console.error('Erreur:', err.message);
    }
  };
  
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-lab-bg via-white to-blue-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lab-purple"></div>
          <p className="mt-4 text-gray-600">Chargement du profil...</p>
        </div>
      </div>
    );
  }
  
  if (error || !profile) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-lab-bg via-white to-blue-50">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="mt-4 text-2xl font-bold text-gray-800">Profil non trouvé</h2>
            <p className="mt-2 text-gray-600">{error || "Ce profil n'existe pas ou a été supprimé."}</p>
            <Link to="/" className="mt-4 inline-block px-4 py-2 bg-lab-purple text-white rounded-md hover:bg-lab-purple/90">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-lab-bg via-white to-blue-50 py-12">
      <div className="container mx-auto px-4">
        {/* En-tête du profil */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-lab-lines">
          {/* Image de couverture */}
          <div className="h-48 bg-gradient-to-r from-lab-blue/40 via-lab-purple/40 to-lab-teal/40 relative overflow-hidden">
            {profile.coverImage && (
              <img 
                src={profile.coverImage} 
                alt="Couverture" 
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-grid-lab opacity-20"></div>
          </div>
          
          {/* Informations de base */}
          <div className="relative px-6 sm:px-8 -mt-16">
            <div className="flex flex-col sm:flex-row sm:items-end">
              {/* Avatar */}
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white shadow-lg">
                {profile.profileImage ? (
                  <img 
                    src={profile.profileImage} 
                    alt={profile.username} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-700 text-4xl font-semibold">
                    {profile.username.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              
              {/* Nom et actions */}
              <div className="mt-4 sm:mt-0 sm:ml-6 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{profile.username}</h1>
                    <p className="text-gray-600 mt-1">
                      {profile.bio || "Aucune biographie"}
                    </p>
                    <div className="flex items-center mt-2 text-sm">
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Membre depuis {formatDate(profile.createdAt || '')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Boutons d'action */}
                  <div className="mt-4 sm:mt-0 flex space-x-2">
                    {userInfo && userInfo.id !== userId && (
                      <button
                        onClick={handleFollow}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          isFollowing
                            ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            : 'bg-lab-purple text-white hover:bg-lab-purple/90'
                        }`}
                      >
                        {isFollowing ? 'Ne plus suivre' : 'Suivre'}
                      </button>
                    )}
                    {userInfo && userInfo.id === userId && (
                      <Link 
                        to="/profile/edit" 
                        className="px-4 py-2 bg-lab-blue text-white rounded-md text-sm font-medium hover:bg-lab-blue/90 transition-colors"
                      >
                        Modifier le profil
                      </Link>
                    )}
                  </div>
                </div>
                
                {/* Statistiques */}
                <div className="flex mt-4 divide-x divide-gray-300 text-center">
                  <div className="pr-4">
                    <span className="block text-2xl font-bold text-gray-700">{followersCount}</span>
                    <span className="text-sm text-gray-500">Abonnés</span>
                  </div>
                  <div className="px-4">
                    <span className="block text-2xl font-bold text-gray-700">{followingCount}</span>
                    <span className="text-sm text-gray-500">Abonnements</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="mt-6 border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {['activité', 'à propos', 'discussions'].map((tab) => (
                  <button
                    key={tab}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab
                        ? 'border-lab-purple text-lab-purple'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Contenu de l'onglet */}
          <div className="p-6 sm:p-8">
            {activeTab === 'activité' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Activité récente</h2>
                <div className="bg-gray-50 rounded-lg p-8 text-center border border-dashed border-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <p className="mt-2 text-gray-500">L'activité de cet utilisateur apparaîtra ici</p>
                </div>
              </div>
            )}
            
            {activeTab === 'à propos' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">À propos</h2>
                
                {profile.specialties && profile.specialties.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-md font-medium text-gray-700 mb-2">Spécialités</h3>
                    <div className="flex flex-wrap gap-2">
                      {profile.specialties.map((specialty, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-lab-blue/10 text-lab-blue"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Afficher d'autres informations du profil selon les données disponibles */}
                <div className="bg-gray-50 rounded-lg p-8 text-center border border-dashed border-gray-300">
                  <p className="text-gray-500">
                    {profile.bio ? profile.bio : "Cet utilisateur n'a pas ajouté d'informations à son profil"}
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'discussions' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Discussions</h2>
                <div className="bg-gray-50 rounded-lg p-8 text-center border border-dashed border-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <p className="mt-2 text-gray-500">Les discussions créées par cet utilisateur apparaîtront ici</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 