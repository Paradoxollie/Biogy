import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Bookmark, RotateCcw } from 'lucide-react';
import useStudyProgress from '../hooks/useStudyProgress';

export default function StudyDashboard() {
  const { recent, bookmarks, completed, clear } = useStudyProgress();
  if (!recent.length && !bookmarks.length) return null;
  return (
    <section className="card p-5 sm:p-6" aria-label="Mon espace de travail">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><p className="section-eyebrow">Mon espace de travail</p><p className="mt-2 text-xs text-ink-500">Repères conservés sur cet appareil · {completed.length} cours marqué{completed.length > 1 ? 's' : ''} comme revu{completed.length > 1 ? 's' : ''}</p></div>
        <button type="button" className="btn-ghost text-xs" onClick={() => { if (window.confirm('Effacer l’historique de lecture, les favoris et les cours revus sur cet appareil ? Les réponses aux TP sont conservées.')) clear(); }}><RotateCcw size={14} /> Effacer mes repères</button>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {recent[0] && <Link to={recent[0].path} className="flex items-center gap-4 rounded-card bg-biogy-50 p-4 text-biogy-800"><BookOpen size={22} className="shrink-0" /><span className="min-w-0 flex-1"><span className="block text-xs font-medium">Reprendre ma lecture</span><span className="mt-1 block font-semibold">{recent[0].title}</span></span><ArrowUpRight size={18} className="shrink-0" /></Link>}
        <Link to="/apprendre?favoris=1" className="card-flat flex items-center gap-4 p-4"><Bookmark size={22} className="shrink-0 text-biogy-700" /><span className="flex-1"><span className="block font-semibold">Mes favoris</span><span className="mt-1 block text-sm text-ink-500">{bookmarks.length ? `${bookmarks.length} ressource${bookmarks.length > 1 ? 's' : ''} à retrouver` : 'Garde tes cours à portée de main'}</span></span><ArrowUpRight size={18} /></Link>
      </div>
    </section>
  );
}
