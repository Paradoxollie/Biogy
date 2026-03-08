import React, { createContext, useContext, useEffect, useState } from 'react';
import { BROWSER_API_URL } from '../config';

const AuthContext = createContext();

const STORAGE_KEY = 'userInfo';

export const useAuth = () => useContext(AuthContext);

const persistUserInfo = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const clearStoredUserInfo = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  const login = (data) => {
    if (!data?.token) {
      return;
    }

    try {
      persistUserInfo(data);
      setUserInfo(data);
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
    }
  };

  const logout = () => {
    try {
      clearStoredUserInfo();
      setUserInfo(null);
    } catch (error) {
      console.error('Erreur lors de la deconnexion:', error);
    }
  };

  useEffect(() => {
    let cancelled = false;

    const restoreAuth = async () => {
      setLoadingAuth(true);

      try {
        const storedUserInfo = localStorage.getItem(STORAGE_KEY);

        if (!storedUserInfo) {
          if (!cancelled) {
            setUserInfo(null);
          }
          return;
        }

        const parsedInfo = JSON.parse(storedUserInfo);

        if (!parsedInfo?.token) {
          clearStoredUserInfo();
          if (!cancelled) {
            setUserInfo(null);
          }
          return;
        }

        const response = await fetch(`${BROWSER_API_URL}/auth/profile`, {
          headers: {
            Authorization: `Bearer ${parsedInfo.token}`,
          },
        });

        if (response.ok) {
          const profile = await response.json();
          const nextUserInfo = {
            ...parsedInfo,
            _id: profile._id || parsedInfo._id,
            username: profile.username || parsedInfo.username,
            role: profile.role || parsedInfo.role,
          };

          persistUserInfo(nextUserInfo);

          if (!cancelled) {
            setUserInfo(nextUserInfo);
          }
          return;
        }

        if (response.status === 401) {
          clearStoredUserInfo();
          if (!cancelled) {
            setUserInfo(null);
          }
          return;
        }

        if (!cancelled) {
          setUserInfo(parsedInfo);
        }
      } catch (error) {
        console.error("Erreur lors du chargement de l'authentification:", error);

        try {
          const storedUserInfo = localStorage.getItem(STORAGE_KEY);
          if (!cancelled && storedUserInfo) {
            setUserInfo(JSON.parse(storedUserInfo));
          }
        } catch (storageError) {
          console.error('Erreur lors de la lecture du stockage local:', storageError);
          clearStoredUserInfo();
          if (!cancelled) {
            setUserInfo(null);
          }
        }
      } finally {
        if (!cancelled) {
          setLoadingAuth(false);
        }
      }
    };

    restoreAuth();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        loadingAuth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
