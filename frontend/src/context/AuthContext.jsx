import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { apiRequest } from '../services/request';
import { readStorage, writeStorage } from '../utils/storage';

const AuthContext = createContext();
const STORAGE_KEY = 'userInfo';
const storedSession = () => {
  const value = readStorage(STORAGE_KEY);
  return value && typeof value.token === 'string' && value.token ? value : null;
};
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState(storedSession);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const revision = useRef(0);
  const login = useCallback((data) => {
    if (!data?.token) return;
    revision.current += 1;
    writeStorage(STORAGE_KEY, data);
    setUserInfo(data);
    setLoadingAuth(false);
  }, []);
  const logout = useCallback(() => {
    revision.current += 1;
    writeStorage(STORAGE_KEY, null);
    setUserInfo(null);
    setLoadingAuth(false);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const checkRevision = revision.current;
    const session = storedSession();
    const isCurrent = () => !cancelled && revision.current === checkRevision;
    if (!session) {
      setLoadingAuth(false);
      return undefined;
    }
    apiRequest('/auth/profile', { headers: { Authorization: `Bearer ${session.token}` }, timeout: 8000 })
      .then((profile) => {
        if (isCurrent()) {
          const next = { ...session, ...profile, token: session.token };
          writeStorage(STORAGE_KEY, next);
          setUserInfo(next);
        }
      })
      .catch((error) => { if (isCurrent() && error.status === 401) logout(); })
      .finally(() => { if (isCurrent()) setLoadingAuth(false); });
    return () => { cancelled = true; };
  }, [logout]);

  useEffect(() => {
    const sync = (event) => {
      if (event.key === STORAGE_KEY || event.key === null) {
        revision.current += 1;
        setUserInfo(storedSession());
        setLoadingAuth(false);
      }
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  return <AuthContext.Provider value={{ userInfo, loadingAuth, login, logout }}>{children}</AuthContext.Provider>;
}
export default AuthContext;
