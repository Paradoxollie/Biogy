import { useEffect } from 'react';
import { useAuth } from './AuthContext';

function AuthDebug() {
  const { userInfo, loadingAuth } = useAuth();

  useEffect(() => {
    console.log('État d\'authentification actuel:', { userInfo, loadingAuth });
    
    // Vérifier le localStorage
    const stored = localStorage.getItem('userInfo');
    console.log('userInfo dans localStorage:', stored);
    
    if (stored) {
      try {
        const parsedUserInfo = JSON.parse(stored);
        console.log('userInfo parsé depuis localStorage:', parsedUserInfo);
      } catch (error) {
        console.error('Erreur lors du parsing de userInfo:', error);
      }
    }
  }, [userInfo, loadingAuth]);

  return null; // Ce composant ne rend rien, il sert uniquement au débogage
}

export default AuthDebug; 