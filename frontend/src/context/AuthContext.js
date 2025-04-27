import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Créer le contexte
const AuthContext = createContext(null);

// 2. Créer le fournisseur (Provider) de contexte
export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true); // Pour gérer le chargement initial depuis localStorage

  // Charger les informations utilisateur depuis localStorage au montage initial
  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      try {
        setUserInfo(JSON.parse(storedUserInfo));
      } catch (error) {
        console.error("Failed to parse userInfo from localStorage", error);
        localStorage.removeItem('userInfo'); // Supprimer si invalide
      }
    }
    setLoading(false); // Fin du chargement initial
  }, []);

  // Fonction pour gérer la connexion
  const login = (userData) => {
    localStorage.setItem('userInfo', JSON.stringify(userData));
    setUserInfo(userData);
    // La redirection se fera dans le composant LoginPage après appel de cette fonction
  };

  // Fonction pour gérer la déconnexion
  const logout = () => {
    localStorage.removeItem('userInfo');
    setUserInfo(null);
    // La redirection se fera dans le composant Layout après appel de cette fonction
  };

  // La valeur fournie par le contexte
  const value = {
    userInfo,
    loadingAuth: loading, // Renommer pour clarté
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Créer un hook personnalisé pour utiliser facilement le contexte
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 