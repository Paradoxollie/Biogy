import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen, RotateCcw, Shuffle } from 'lucide-react';
import { courseIndex } from '../data/courseIndex';
import { loadAllPremiereLessons } from '../data/premiere';
import PageHero from './ui/PageHero';
import { EASE, Pencil, Reveal } from './ui/motion';
import { PENCILS } from '../data/visuals';

const flat = (value) => (Array.isArray(value) ? value.join(' ') : value);
const vocabularyOf = (content) => content?.review?.vocabulary || content?.vocabulary || [];
const practiceOf = (content) => (content?.version === 2
  ? (content.review?.exercises || []).map((exercise) => ({ question: flat(exercise.statement), expected: flat(exercise.answer) }))
  : (content?.practice || []).filter((q) => q.expected));
// Les leçons au format 2 sont chargées à la demande : on récupère leur bilan ici.
const contentOf = (item, lessons) => (item.content?.lazy ? lessons[item.content.id] : item.content);
const coursesWithCards = (lessons) => courseIndex
  .map((item) => ({ item, content: contentOf(item, lessons) }))
  .filter(({ content }) => vocabularyOf(content).length || practiceOf(content).length);
const cardsFor = (entries) => entries.flatMap(({ item, content }) => [
  ...vocabularyOf(content).map((word, index) => ({ id: `${item.path}:v${index}`, question: word.term, answer: word.definition, type: 'Vocabulaire', course: item })),
  ...practiceOf(content).map((q, index) => ({ id: `${item.path}:q${index}`, question: q.question, answer: q.expected, type: 'Entraînement', course: item })),
]);

export default function RevisionPage() {
  const [level, setLevel] = useState('premiere');
  const [chapter, setChapter] = useState('');
  const [position, setPosition] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [order, setOrder] = useState(null);
  const [known, setKnown] = useState([]);
  const [direction, setDirection] = useState(1);
  const [lessons, setLessons] = useState(null);
  useEffect(() => {
    let active = true;
    loadAllPremiereLessons().then((loaded) => { if (active) setLessons(loaded); }).catch(() => { if (active) setLessons({}); });
    return () => { active = false; };
  }, []);
  const revisionEntries = useMemo(() => coursesWithCards(lessons || {}), [lessons]);
  const courses = revisionEntries.filter(({ item }) => item.levelId === level).map(({ item }) => item);
  const cards = useMemo(() => cardsFor(revisionEntries.filter(({ item }) => item.levelId === level && (!chapter || item.path === chapter))), [revisionEntries, level, chapter]);
  const deck = order ? order.map((i) => cards[i]) : cards;
  const card = deck[position];
  const reset = () => { setPosition(0); setRevealed(false); setOrder(null); setKnown([]); };
  const move = (step) => { setDirection(step); setPosition((current) => (current + step + deck.length) % deck.length); setRevealed(false); };
  const shuffle = () => {
    const indices = cards.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i -= 1) { const j = Math.floor(Math.random() * (i + 1)); [indices[i], indices[j]] = [indices[j], indices[i]]; }
    setOrder(indices); setPosition(0); setRevealed(false);
  };
  const progress = cards.length ? Math.round((known.length / cards.length) * 100) : 0;

  return (
    <>
      <PageHero
        eyebrow="Révisions"
        title={[{ text: 'Un peu chaque jour,' }, { text: 'des notions qui restent.', className: 'accent-italic' }]}
        lead="Lis la question, formule ta réponse, puis retourne la carte. Le vocabulaire et les réponses proviennent directement des cours de Biogy."
        pencil={PENCILS.microbes}
      />

      <div className="page mt-12 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <Reveal as="aside" className="h-fit rounded-frame border border-surface-line bg-white p-6 lg:sticky lg:top-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">Ma séance</p>
          <label className="mt-5 block text-sm font-medium" htmlFor="revision-level">Niveau</label>
          <select id="revision-level" className="input mt-2" value={level} onChange={(e) => { setLevel(e.target.value); setChapter(''); reset(); }}>
            <option value="premiere">Première STL</option>
            <option value="terminale">Terminale STL</option>
          </select>
          <label className="mt-5 block text-sm font-medium" htmlFor="revision-chapter">Cours</label>
          <select id="revision-chapter" className="input mt-2" value={chapter} onChange={(e) => { setChapter(e.target.value); reset(); }}>
            <option value="">Tous les cours disponibles</option>
            {courses.map((item) => <option key={item.path} value={item.path}>{item.code} · {item.title}</option>)}
          </select>
          <div className="mt-7 border-t border-surface-line pt-6">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-4xl leading-none tracking-tight">{known.length}<span className="text-ink-300">/{cards.length}</span></span>
              <span className="font-mono text-[11px] text-ink-500">{progress} %</span>
            </div>
            <p className="mt-2 text-sm text-ink-600" role="status">cartes comprises dans cette séance</p>
            <div className="mt-4 h-1 overflow-hidden rounded-full bg-ink-900/10" role="progressbar" aria-label="Cartes comprises" aria-valuemin={0} aria-valuemax={cards.length || 1} aria-valuenow={known.length}>
              <motion.div className="h-full rounded-full bg-biogy-600" animate={{ width: `${progress}%` }} transition={{ duration: 0.8, ease: EASE }} />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-ink-500">Ce repère est une autoévaluation, pas une note. La séance se réinitialise en quittant la page.</p>
          </div>
          <button type="button" className="btn-ghost mt-4 w-full" onClick={reset}><RotateCcw size={15} />Recommencer</button>
        </Reveal>

        {!lessons ? (
          <section className="card flex min-h-[340px] items-center justify-center p-10" role="status" aria-live="polite">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">Préparation des cartes…</p>
          </section>
        ) : card ? (
          <section className="min-w-0" aria-label="Cartes de révision">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">Carte {position + 1} / {deck.length}</span>
              <button type="button" onClick={shuffle} className="btn-ghost min-h-9 py-1.5"><Shuffle size={15} />Mélanger</button>
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={card.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40, rotate: direction * 1.5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: direction * -40, rotate: direction * -1.5 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="flip-scene"
              >
                <div className={`flip-card grid ${revealed ? 'is-flipped' : ''}`}>
                  <article
                    className="flip-face card relative flex min-h-[340px] flex-col overflow-hidden [grid-area:1/1]"
                    aria-hidden={revealed}
                  >
                    <div className="flex items-center justify-between border-b border-surface-line px-6 py-4 sm:px-8">
                      <span className="tag">{card.type}</span>
                      <span className="font-mono text-[11px] text-ink-500">{card.course.code}</span>
                    </div>
                    <div className="paper-grid flex flex-1 flex-col items-center justify-center px-6 py-12 text-center sm:px-12">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">Question</p>
                      <h2 className="mt-4 font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-tight tracking-tight">{card.question}</h2>
                      <p className="mt-6 text-sm text-ink-500">Prends le temps de répondre avant de retourner la carte.</p>
                    </div>
                  </article>
                  <article
                    className="flip-face flip-back relative flex min-h-[340px] flex-col overflow-hidden rounded-card bg-ink-900 text-paper shadow-elevated [grid-area:1/1]"
                    aria-hidden={!revealed}
                    role={revealed ? 'status' : undefined}
                  >
                    <div className="flex items-center justify-between border-b border-paper/15 px-6 py-4 sm:px-8">
                      <span className="tag-dark">Réponse du cours</span>
                      <span className="font-mono text-[11px] text-paper/50">{card.course.code}</span>
                    </div>
                    <div className="flex flex-1 flex-col justify-center px-6 py-10 sm:px-12">
                      <p className="font-display text-xl italic text-biogy-300">{card.question}</p>
                      <p className="mt-4 text-[17px] leading-8 text-paper/85">{card.answer}</p>
                    </div>
                  </article>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {revealed ? (
                <>
                  <button type="button" className="btn-secondary px-6" onClick={() => { setKnown((items) => items.filter((id) => id !== card.id)); move(1); }}>À revoir</button>
                  <button type="button" className="btn-green px-6" onClick={() => { setKnown((items) => [...new Set([...items, card.id])]); move(1); }}>J’ai compris <ArrowRight size={16} className="btn-arrow" /></button>
                </>
              ) : (
                <button type="button" className="btn-primary px-7" onClick={() => setRevealed(true)}>Retourner la carte</button>
              )}
            </div>

            <div className="mt-8 flex items-center justify-between gap-3 border-t border-ink-900/10 pt-5">
              <button type="button" className="btn-secondary h-11 w-11 p-0" onClick={() => move(-1)} aria-label="Carte précédente"><ArrowLeft size={18} /></button>
              <Link to={`${card.course.path}?onglet=bilan`} className="inline-flex items-center gap-2 text-center text-sm font-medium text-ink-800">
                <BookOpen size={16} className="shrink-0 text-biogy-700" /><span className="link-draw">Revoir le cours</span>
              </Link>
              <button type="button" className="btn-secondary h-11 w-11 p-0" onClick={() => move(1)} aria-label="Carte suivante"><ArrowRight size={18} /></button>
            </div>
            {known.length === cards.length && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                className="mt-6 rounded-frame border border-biogy-200 bg-biogy-50 p-5 text-center text-biogy-900"
              >
                Toutes les cartes de cette sélection sont marquées comme comprises. Reviens les revoir plus tard pour consolider tes acquis.
              </motion.p>
            )}
          </section>
        ) : (
          <section className="card flex flex-col items-center p-10 text-center">
            <Pencil drawing={PENCILS.petri} className="w-40" />
            <h2 className="mt-6 font-display text-3xl">Les cartes arrivent avec les cours</h2>
            <p className="mt-3 max-w-md text-ink-600">Aucun contenu de révision n’est encore disponible pour ce niveau. Tu peux consulter son programme ou réviser les bases de Première.</p>
            <Link to={`/apprendre/${level}`} className="btn-primary mt-6">Voir le programme</Link>
          </section>
        )}
      </div>
    </>
  );
}
