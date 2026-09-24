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
    <section className="mt-8" aria-label="Rechercher un cours">
      <div className="card p-5 sm:p-6">
        <label htmlFor="course-search" className="block text-sm font-semibold text-ink-800">Quel sujet veux-tu travailler ?</label>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1"><Search size={20} className="pointer-events-none absolute left-4 top-3.5 text-ink-500" aria-hidden="true" /><input id="course-search" type="search" className="input min-h-12 pl-12 text-base" placeholder="Un chapitre, une notion, un code…" value={query} onChange={(e) => change('q', e.target.value)} /></div>
          <select aria-label="Niveau" className="input min-h-12 sm:w-48" value={level} onChange={(e) => change('niveau', e.target.value)}><option value="">Tous les niveaux</option><option value="premiere">Première STL</option><option value="terminale">Terminale STL</option></select>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-ink-600">
          <label className="flex min-h-8 cursor-pointer items-center gap-2"><input type="checkbox" className="h-4 w-4 accent-biogy-700" checked={available} onChange={(e) => change('disponibles', e.target.checked ? '1' : '')} />Contenus disponibles</label>
          <label className="flex min-h-8 cursor-pointer items-center gap-2"><input type="checkbox" className="h-4 w-4 accent-biogy-700" checked={favorites} onChange={(e) => change('favoris', e.target.checked ? '1' : '')} /><Bookmark size={14} />Mes favoris</label>
          {searching && <button type="button" className="link min-h-8 text-biogy-700 underline underline-offset-4" onClick={() => setParams({}, { replace: true })}>Réinitialiser</button>}
        </div>
      </div>
      {searching && <div className="mt-5">
        <p className="mb-4 text-sm text-ink-500" role="status">{results.length} résultat{results.length > 1 ? 's' : ''}</p>
        {results.length ? <ul className="grid gap-3 md:grid-cols-2">{results.map((item) => <li key={item.path}><Link to={item.path} className="card group block h-full p-5 hover:border-biogy-300"><div className="flex items-center justify-between gap-2"><span className="pill-neutral">{item.levelTitle} · {item.code}</span>{completed.includes(item.path) && <span className="inline-flex items-center gap-1 text-xs text-biogy-700"><Check size={14} />Revu</span>}</div><h3 className="mt-3 font-semibold leading-relaxed group-hover:text-biogy-700">{item.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-600">{item.summary}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-biogy-700">{item.available ? 'Ouvrir le cours' : 'Voir le programme · contenu à venir'}<ArrowUpRight size={16} /></span></Link></li>)}</ul> : <div className="card-flat p-8 text-center"><Search className="mx-auto text-ink-400" size={28} /><h3 className="mt-3 font-semibold">Aucune ressource pour ces critères</h3><p className="mt-2 text-sm text-ink-600">Essaie un mot plus court ou un autre niveau. Pour ajouter un favori, ouvre un cours et utilise le bouton « Garder en favori ».</p></div>}
      </div>}
    </section>
  );
}
