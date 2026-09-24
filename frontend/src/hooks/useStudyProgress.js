import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { readStorage, writeStorage } from '../utils/storage';

const EMPTY = { recent: [], bookmarks: [], completed: [] };
function readProgress(key) {
  const saved = readStorage(key, EMPTY);
  return {
    recent: Array.isArray(saved?.recent) ? saved.recent.filter((item) => typeof item?.path === 'string' && item.path.startsWith('/apprendre/')).slice(0, 4) : [],
    bookmarks: Array.isArray(saved?.bookmarks) ? saved.bookmarks.filter((item) => typeof item === 'string') : [],
    completed: Array.isArray(saved?.completed) ? saved.completed.filter((item) => typeof item === 'string') : [],
  };
}

export default function useStudyProgress() {
  const { userInfo } = useAuth();
  const key = `biogy:study:${userInfo?._id || 'guest'}`;
  const [state, setState] = useState(() => ({ key, data: readProgress(key) }));
  const [storageAvailable, setStorageAvailable] = useState(true);
  const progress = state.key === key ? state.data : readProgress(key);
  useEffect(() => {
    const sync = () => setState({ key, data: readProgress(key) });
    sync();
    window.addEventListener('storage', sync);
    window.addEventListener('biogy:study', sync);
    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('biogy:study', sync);
    };
  }, [key]);
  const update = useCallback((transform) => {
    const next = transform(readProgress(key));
    const saved = writeStorage(key, next);
    setStorageAvailable(saved);
    if (saved) window.dispatchEvent(new Event('biogy:study'));
    setState({ key, data: next });
  }, [key]);
  const recordVisit = useCallback((item) => update((data) => ({ ...data, recent: [item, ...data.recent.filter((old) => old.path !== item.path)].slice(0, 4) })), [update]);
  const toggle = useCallback((type, path) => update((data) => ({ ...data, [type]: data[type].includes(path) ? data[type].filter((item) => item !== path) : [...data[type], path] })), [update]);
  const clear = useCallback(() => update(() => EMPTY), [update]);
  return { ...progress, recordVisit, toggle, clear, storageAvailable };
}
