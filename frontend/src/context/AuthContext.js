import React, { createContext, useState, useContext, useEffect } from 'react';

// Création du contexte
const AuthContext = createContext();

// Hook personnalisé pour accéder facilement au contexte
export const useAuth = () => useContext(AuthContext);

// Composant Provider qui va envelopper l'application
export const AuthProvider = ({ children }) => {
  // État pour stocker les informations de l'utilisateur
  const [userInfo, setUserInfo] = useState(null);
  // État pour suivre si les données sont en cours de chargement
  const [loadingAuth, setLoadingAuth] = useState(true);

  // Fonction pour connecter l'utilisateur
  const login = (data) => {
    console.log('Login appelé avec les données:', data);
    
    // S'assurer que data contient toutes les informations nécessaires
    if (!data || !data.token) {
      console.error('Données de connexion incomplètes:', data);
      return;
    }
    
    try {
      // Stocker les données utilisateur dans localStorage
      localStorage.setItem('userInfo', JSON.stringify(data));
      // Mettre à jour l'état
      setUserInfo(data);
      console.log('Utilisateur connecté:', data);
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
    }
  };

  // Fonction pour déconnecter l'utilisateur
  const logout = () => {
    console.log('Déconnexion appelée');
    try {
      // Supprimer les données du localStorage
      localStorage.removeItem('userInfo');
      // Réinitialiser l'état
      setUserInfo(null);
      console.log('Utilisateur déconnecté');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  // Charger les données utilisateur depuis localStorage au démarrage
  useEffect(() => {
    console.log('useEffect de AuthContext exécuté');
    setLoadingAuth(true);
    
    try {
      // Récupérer les données utilisateur du localStorage
      const storedUserInfo = localStorage.getItem('userInfo');
      console.log('Données utilisateur récupérées du localStorage:', storedUserInfo);
      
      if (storedUserInfo) {
        // Parser les données JSON
        const parsedInfo = JSON.parse(storedUserInfo);
        console.log('Données utilisateur parsées:', parsedInfo);
        
        // Vérifier que les données contiennent un token
        if (parsedInfo && parsedInfo.token) {
          console.log('Token trouvé, définition de userInfo');
          setUserInfo(parsedInfo);
        } else {
          console.log('Aucun token trouvé, réinitialisation de userInfo');
          localStorage.removeItem('userInfo'); // Supprimer les données invalides
          setUserInfo(null);
        }
      }
    } catch (error) {
      console.error('Erreur lors du chargement des données utilisateur:', error);
      localStorage.removeItem('userInfo'); // Supprimer les données invalides
      setUserInfo(null);
    } finally {
      setLoadingAuth(false);
    }
  }, []);

  // Valeurs exposées par le contexte
  const value = {
    userInfo,
    loadingAuth,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext; 