import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, ArrowUpRight, Bookmark, Check } from 'lucide-react';
import { searchCourses } from '../data/courseIndex';
import useStudyProgress from '../hooks/useStudyProgress';

export default function CourseSearch() {
  const [params, setParams] = useSearchParams();
  const { bookmarks, completed } = useStudyProgress();
  const query = params.get('q') || '';
  const level = params.get('niveau') || '';
  const favorites = params.get('favoris') === '1';
  const available = params.get('disponibles') === '1';
  const searching = Boolean(query || level || favorites || available);
  const results = searching ? searchCourses(query, { level, available, bookmarks: favorites ? bookmarks : undefined }) : [];
  const change = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value); else next.delete(key);
    setParams(next, { replace: true });
  };
  return (
    <section className="mt-10" aria-label="Rechercher un cours">
      <div className="rounded-frame border border-ink-900/10 bg-white p-5 shadow-soft sm:p-7">
        <label htmlFor="course-search" className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">Quel sujet veux-tu travailler ?</label>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search size={20} strokeWidth={1.6} className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-ink-500" aria-hidden="true" />
            <input
              id="course-search"
              type="search"
              className="block min-h-14 w-full border-0 border-b border-ink-900/20 bg-transparent pl-9 font-display text-2xl text-ink-900 placeholder:text-ink-300 focus:border-biogy-600 focus:ring-0 sm:text-[1.75rem]"
              placeholder="Un chapitre, une notion, un code…"
              value={query}
              onChange={(e) => change('q', e.target.value)}
            />
          </div>
          <select aria-label="Niveau" className="input min-h-12 self-end sm:w-52" value={level} onChange={(e) => change('niveau', e.target.value)}>
            <option value="">Tous les niveaux</option>
            <option value="premiere">Première STL</option>
            <option value="terminale">Terminale STL</option>
          </select>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-600">
          <label className="flex min-h-8 cursor-pointer items-center gap-2"><input type="checkbox" className="h-4 w-4 accent-biogy-700" checked={available} onChange={(e) => change('disponibles', e.target.checked ? '1' : '')} />Contenus disponibles</label>
          <label className="flex min-h-8 cursor-pointer items-center gap-2"><input type="checkbox" className="h-4 w-4 accent-biogy-700" checked={favorites} onChange={(e) => change('favoris', e.target.checked ? '1' : '')} /><Bookmark size={14} />Mes favoris</label>
          {searching && <button type="button" className="link min-h-8 text-biogy-700 underline underline-offset-4" onClick={() => setParams({}, { replace: true })}>Réinitialiser</button>}
        </div>
      </div>
      {searching && (
        <div className="mt-6">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500" role="status">{results.length} résultat{results.length > 1 ? 's' : ''}</p>
          {results.length ? (
            <ul className="grid gap-3 md:grid-cols-2">
              {results.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="card card-hover group block h-full p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="tag">{item.levelTitle} · {item.code}</span>
                      {completed.includes(item.path) && <span className="inline-flex items-center gap-1 text-xs text-biogy-700"><Check size={14} />Revu</span>}
                    </div>
                    <h3 className="mt-3 font-display text-xl leading-snug text-ink-900">{item.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-600">{item.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink-900">
                      <span className="link-draw">{item.available ? 'Ouvrir le cours' : 'Voir le programme · contenu à venir'}</span><ArrowUpRight size={16} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="card-flat p-8 text-center">
              <Search className="mx-auto text-ink-400" size={28} />
              <h3 className="mt-3 font-display text-xl">Aucune ressource pour ces critères</h3>
              <p className="mt-2 text-sm text-ink-600">Essaie un mot plus court ou un autre niveau. Pour ajouter un favori, ouvre un cours et utilise le bouton « Garder en favori ».</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
