import React, { useEffect } from 'react';
import { Bookmark, Check, Printer } from 'lucide-react';
import useStudyProgress from '../hooks/useStudyProgress';

export default function StudyToolbar({ path, title, levelTitle }) {
  const { bookmarks, completed, toggle, recordVisit, storageAvailable } = useStudyProgress();
  useEffect(() => { recordVisit({ path, title, levelTitle }); }, [path, title, levelTitle, recordVisit]);
  const bookmarked = bookmarks.includes(path);
  const reviewed = completed.includes(path);
  return <div className="no-print mt-6"><div className="flex flex-wrap gap-2"><button type="button" aria-pressed={bookmarked} onClick={() => toggle('bookmarks', path)} className={bookmarked ? 'btn-primary' : 'btn-secondary'}><Bookmark size={16} fill={bookmarked ? 'currentColor' : 'none'} />{bookmarked ? 'Dans mes favoris' : 'Garder en favori'}</button><button type="button" aria-pressed={reviewed} onClick={() => toggle('completed', path)} className={reviewed ? 'btn-primary' : 'btn-secondary'}><Check size={16} />{reviewed ? 'Cours revu' : 'Marquer comme revu'}</button><button type="button" className="btn-ghost" onClick={() => window.print()}><Printer size={16} />Imprimer</button></div><p className="mt-2 text-xs text-ink-500" role="status">{storageAvailable ? 'Tes repères de lecture sont conservés sur cet appareil.' : 'Le navigateur ne permet pas la sauvegarde. Tes repères seront perdus à la fermeture.'}</p></div>;
}
