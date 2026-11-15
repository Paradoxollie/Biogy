import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Bookmark, RotateCcw } from 'lucide-react';
import useStudyProgress from '../hooks/useStudyProgress';

export default function StudyDashboard() {
  const { recent, bookmarks, completed, clear } = useStudyProgress();
  if (!recent.length && !bookmarks.length) return null;
  return (
    <section className="card overflow-hidden" aria-label="Mon espace de travail">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-surface-line px-5 py-3.5 sm:px-6">
        <p className="flex items-center gap-3">
          <span className="tag">Mon carnet</span>
          <span className="text-xs text-ink-500">
            Repères gardés sur cet appareil · {completed.length} cours revu{completed.length > 1 ? 's' : ''}
          </span>
        </p>
        <button
          type="button"
          className="btn-ghost min-h-9 px-3 py-1.5 text-xs"
          onClick={() => { if (window.confirm('Effacer l’historique de lecture, les favoris et les cours revus sur cet appareil ? Les réponses aux TP sont conservées.')) clear(); }}
        >
          <RotateCcw size={13} /> Effacer mes repères
        </button>
      </div>
      <div className="grid md:grid-cols-[1.4fr_1fr]">
        {recent[0] && (
          <Link to={recent[0].path} className="group flex items-center gap-5 bg-ink-900 px-6 py-5 text-paper transition-colors hover:bg-biogy-800">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper/55">Reprendre</span>
            <span className="min-w-0 flex-1 font-display text-xl leading-snug">{recent[0].title}</span>
            <ArrowUpRight size={18} className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        )}
        <Link to="/apprendre?favoris=1" className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-paper-50">
          <Bookmark size={20} strokeWidth={1.5} className="shrink-0 text-biogy-700" />
          <span className="flex-1">
            <span className="block font-semibold text-ink-900">Mes favoris</span>
            <span className="mt-0.5 block text-sm text-ink-500">
              {bookmarks.length ? `${bookmarks.length} ressource${bookmarks.length > 1 ? 's' : ''} à retrouver` : 'Garde tes cours à portée de main'}
            </span>
          </span>
          <ArrowUpRight size={18} className="shrink-0 text-ink-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
