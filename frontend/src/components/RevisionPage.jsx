import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, RotateCcw, Shuffle } from 'lucide-react';
import { courseIndex } from '../data/courseIndex';

const revisionCourses = courseIndex.filter((item) => item.content?.vocabulary?.length || item.content?.practice?.some((q) => q.expected));
const cardsFor = (courses) => courses.flatMap((item) => [
  ...(item.content.vocabulary || []).map((word, index) => ({ id: `${item.path}:v${index}`, question: word.term, answer: word.definition, type: 'Vocabulaire', course: item })),
  ...(item.content.practice || []).filter((q) => q.expected).map((q, index) => ({ id: `${item.path}:q${index}`, question: q.question, answer: q.expected, type: 'Entraînement', course: item })),
]);

export default function RevisionPage() {
  const [level, setLevel] = useState('premiere');
  const [chapter, setChapter] = useState('');
  const [position, setPosition] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [order, setOrder] = useState(null);
  const [known, setKnown] = useState([]);
  const courses = revisionCourses.filter((item) => item.levelId === level);
  const cards = useMemo(() => cardsFor(revisionCourses.filter((item) => item.levelId === level && (!chapter || item.path === chapter))), [level, chapter]);
  const deck = order ? order.map((i) => cards[i]) : cards;
  const card = deck[position];
  const reset = () => { setPosition(0); setRevealed(false); setOrder(null); setKnown([]); };
  const move = (step) => { setPosition((current) => (current + step + deck.length) % deck.length); setRevealed(false); };
  const shuffle = () => {
    const indices = cards.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i -= 1) { const j = Math.floor(Math.random() * (i + 1)); [indices[i], indices[j]] = [indices[j], indices[i]]; }
    setOrder(indices); setPosition(0); setRevealed(false);
  };
  return (
    <div className="page py-10 md:py-14">
      <header className="max-w-2xl"><p className="section-eyebrow">Révisions</p><h1 className="mt-3 font-display text-3xl md:text-display-lg">Un peu chaque jour,<br /><span className="text-biogy-700">des notions qui restent.</span></h1><p className="mt-4 leading-relaxed text-ink-600">Lis la question, formule ta réponse, puis retourne la carte. Le vocabulaire et les réponses proviennent des cours de Biogy.</p></header>
      <div className="mt-8 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="card h-fit p-5"><h2 className="font-semibold">Ma séance de révision</h2><label className="mt-5 block text-sm font-medium" htmlFor="revision-level">Niveau</label><select id="revision-level" className="input mt-2" value={level} onChange={(e) => { setLevel(e.target.value); setChapter(''); reset(); }}><option value="premiere">Première STL</option><option value="terminale">Terminale STL</option></select><label className="mt-5 block text-sm font-medium" htmlFor="revision-chapter">Cours</label><select id="revision-chapter" className="input mt-2" value={chapter} onChange={(e) => { setChapter(e.target.value); reset(); }}><option value="">Tous les cours disponibles</option>{courses.map((item) => <option key={item.path} value={item.path}>{item.code} · {item.title}</option>)}</select><div className="mt-6 border-t border-surface-line pt-5"><p className="text-sm text-ink-600" role="status">{known.length} / {cards.length} cartes comprises dans cette séance</p><progress className="mt-3 h-1.5 w-full accent-biogy-700" value={known.length} max={cards.length || 1} aria-label="Cartes comprises" /><p className="mt-3 text-xs leading-relaxed text-ink-500">Ce repère est une autoévaluation, pas une note. La séance se réinitialise en quittant la page.</p></div><button type="button" className="btn-ghost mt-4 w-full" onClick={reset}><RotateCcw size={16} />Recommencer</button></aside>
        {card ? <section className="min-w-0" aria-label="Cartes de révision"><div className="mb-3 flex items-center justify-between text-sm text-ink-500"><span>Carte {position + 1} sur {deck.length}</span><button type="button" onClick={shuffle} className="btn-ghost"><Shuffle size={16} />Mélanger</button></div><article className="card overflow-hidden"><div className="border-b border-surface-line px-6 py-4 sm:px-8"><span className="pill-biogy">{card.type}</span><span className="ml-3 text-xs text-ink-500">{card.course.code}</span></div><div className="flex min-h-[280px] flex-col items-center justify-center px-6 py-10 text-center sm:px-10"><h2 className="font-display text-2xl leading-relaxed sm:text-3xl">{card.question}</h2>{revealed ? <div className="mt-7 w-full rounded-card bg-biogy-50 p-5 text-left" role="status"><p className="section-eyebrow text-biogy-700">Réponse du cours</p><p className="mt-3 leading-relaxed text-ink-800">{card.answer}</p></div> : <p className="mt-5 text-sm text-ink-500">Prends le temps de répondre avant de vérifier.</p>}</div><div className="flex flex-wrap items-center justify-center gap-3 border-t border-surface-line bg-surface-muted px-5 py-5">{revealed ? <><button type="button" className="btn-secondary" onClick={() => { setKnown((items) => items.filter((id) => id !== card.id)); move(1); }}>À revoir</button><button type="button" className="btn-primary" onClick={() => { setKnown((items) => [...new Set([...items, card.id])]); move(1); }}>J’ai compris <ArrowRight size={16} /></button></> : <button type="button" className="btn-primary" onClick={() => setRevealed(true)}>Afficher la réponse</button>}</div></article><div className="mt-4 flex items-center justify-between gap-3"><button type="button" className="btn-secondary" onClick={() => move(-1)} aria-label="Carte précédente"><ArrowLeft size={18} /></button><Link to={`${card.course.path}?onglet=bilan`} className="inline-flex items-center gap-2 text-center text-sm font-medium text-biogy-700"><BookOpen size={16} className="shrink-0" />Revoir le cours</Link><button type="button" className="btn-secondary" onClick={() => move(1)} aria-label="Carte suivante"><ArrowRight size={18} /></button></div>{known.length === cards.length && <p role="status" className="mt-5 rounded-card bg-biogy-50 p-4 text-center text-biogy-800">Toutes les cartes de cette sélection ont été marquées comme comprises. Reviens les revoir plus tard pour consolider tes acquis.</p>}</section> : <section className="card p-10 text-center"><BookOpen size={32} className="mx-auto text-biogy-700" /><h2 className="mt-4 font-display text-2xl">Les cartes arrivent avec les cours</h2><p className="mt-3 text-ink-600">Aucun contenu de révision n’est encore disponible pour ce niveau. Tu peux consulter son programme ou réviser les bases de Première.</p><Link to={`/apprendre/${level}`} className="btn-primary mt-6">Voir le programme</Link></section>}
      </div>
    </div>
  );
}
