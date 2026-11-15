import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check, CheckCircle2, RotateCcw, X, XCircle } from 'lucide-react';
import RichText, { Paragraphs } from './RichText';
import { readStorage, writeStorage } from '../../utils/storage';
import { EASE } from '../ui/motion';

export function SectionTitle({ id, eyebrow, title }) {
  return (
    <header id={id} className="scroll-mt-28">
      {eyebrow ? <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-biogy-700">{eyebrow}</p> : null}
      <h3 className="mt-2 font-display text-[1.9rem] font-[450] leading-tight tracking-tight text-ink-900">{title}</h3>
    </header>
  );
}

/* ---------------------------------------------------------------- Quiz --- */
function Quiz({ items, lessonId }) {
  const [answers, setAnswers] = useState({});
  const [round, setRound] = useState(0);
  const answered = Object.keys(answers).length;
  const score = items.reduce((total, item, index) => total + (answers[index] === item.answer ? 1 : 0), 0);
  const done = answered === items.length;

  const choose = (index, choice) => {
    if (answers[index] !== undefined) return;
    const next = { ...answers, [index]: choice };
    setAnswers(next);
    if (Object.keys(next).length === items.length) {
      const total = items.reduce((sum, item, i) => sum + (next[i] === item.answer ? 1 : 0), 0);
      const best = readStorage(`biogy:quiz:${lessonId}`, 0);
      if (total > best) writeStorage(`biogy:quiz:${lessonId}`, total);
    }
  };

  return (
    <div key={round}>
      <ol className="space-y-5">
        {items.map((item, index) => {
          const picked = answers[index];
          const isAnswered = picked !== undefined;
          return (
            <li key={index} className="rounded-frame border border-ink-900/10 bg-white p-5 sm:p-6">
              <p className="flex gap-3 text-[16.5px] leading-7 text-ink-900">
                <span className="shrink-0 font-mono text-[13px] text-ink-500">{String(index + 1).padStart(2, '0')}</span>
                <span><RichText text={item.question} /></span>
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {item.choices.map((choice, choiceIndex) => {
                  const isRight = choiceIndex === item.answer;
                  const isPicked = choiceIndex === picked;
                  let style = 'border-ink-900/15 bg-paper-50 hover:border-ink-900/50 text-ink-800';
                  if (isAnswered && isRight) style = 'border-biogy-600 bg-biogy-50 text-biogy-900';
                  else if (isAnswered && isPicked) style = 'border-[#a3263a] bg-[#a3263a]/10 text-ink-900';
                  else if (isAnswered) style = 'border-ink-900/10 bg-paper-50 text-ink-500';
                  return (
                    <button
                      key={choiceIndex}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => choose(index, choiceIndex)}
                      className={`flex min-h-12 items-center gap-3 rounded-frame border px-4 py-2.5 text-left text-[15px] leading-6 transition-colors duration-200 disabled:cursor-default ${style}`}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current font-mono text-[11px]">
                        {isAnswered && isRight ? <Check size={13} /> : isAnswered && isPicked ? <X size={13} /> : String.fromCharCode(65 + choiceIndex)}
                      </span>
                      <span><RichText text={choice} /></span>
                    </button>
                  );
                })}
              </div>
              <AnimatePresence>
                {isAnswered && item.explanation ? (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="mt-4 flex gap-2 text-[14.5px] leading-6 text-ink-700"
                  >
                    {picked === item.answer
                      ? <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-biogy-600" />
                      : <XCircle size={18} className="mt-0.5 shrink-0 text-[#a3263a]" />}
                    <span><RichText text={item.explanation} /></span>
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-frame bg-ink-900 px-5 py-4 text-paper" role="status">
        <p className="font-display text-xl">
          {done ? <>Score : {score} / {items.length}{score === items.length ? ' — parfait !' : score >= items.length / 2 ? ' — bien joué, revois les erreurs.' : ' — relis le cours puis recommence.'}</> : <>{answered} / {items.length} questions répondues</>}
        </p>
        {answered > 0 && (
          <button type="button" onClick={() => { setAnswers({}); setRound((value) => value + 1); }} className="btn-light min-h-9 py-1.5">
            <RotateCcw size={14} /> Recommencer
          </button>
        )}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- Exercices --- */
function Exercise({ exercise, number }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="rounded-frame border border-ink-900/10 bg-white p-5 sm:p-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">Exercice {number}{exercise.title ? ` · ${exercise.title}` : ''}</p>
      <Paragraphs text={exercise.statement} className="mt-3 text-[16px] leading-7 text-ink-900" />
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} className="no-print mt-4 inline-flex min-h-9 items-center gap-1.5 rounded-pill border border-ink-900/15 px-3 text-[13px] font-medium text-ink-700 hover:border-biogy-600">
        <CheckCircle2 size={14} /> {open ? 'Masquer la correction' : 'Voir la correction'}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden">
            <div className="mt-3 rounded-frame border-l-[3px] border-biogy-600 bg-biogy-50/70 px-4 py-3 text-[15px] leading-7 text-ink-800">
              <Paragraphs text={exercise.answer} className="[&+p]:mt-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

/* ------------------------------------------------------- Autoévaluation --- */
function SelfCheck({ items, lessonId }) {
  const key = `biogy:autoeval:${lessonId}`;
  const [checked, setChecked] = useState(() => readStorage(key, []));
  const toggle = (index) => {
    const next = checked.includes(index) ? checked.filter((value) => value !== index) : [...checked, index];
    setChecked(next);
    writeStorage(key, next);
  };
  return (
    <div>
      <ul className="space-y-2">
        {items.map((item, index) => {
          const on = checked.includes(index);
          return (
            <li key={index}>
              <button type="button" role="checkbox" aria-checked={on} onClick={() => toggle(index)} className={`flex w-full items-start gap-3 rounded-frame border px-4 py-3 text-left text-[15.5px] leading-6 transition-colors ${on ? 'border-biogy-600 bg-biogy-50 text-ink-900' : 'border-ink-900/10 bg-white text-ink-800 hover:border-ink-900/30'}`}>
                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border transition-colors ${on ? 'border-biogy-600 bg-biogy-600 text-white' : 'border-ink-900/30'}`}>
                  {on ? <Check size={13} strokeWidth={3} /> : null}
                </span>
                <RichText text={item} />
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-sm text-ink-600" role="status">
        {checked.length === items.length ? 'Tout est validé : tu peux passer aux cartes de révision pour consolider.' : `${checked.length} / ${items.length} compétences validées — gardé sur cet appareil.`}
      </p>
    </div>
  );
}

/* ----------------------------------------------------------------- Bilan --- */
export function reviewSections(review) {
  return [
    review.keyPoints?.length && { id: 'essentiel', title: 'L’essentiel' },
    review.method && { id: 'methode', title: 'Méthode' },
    review.vocabulary?.length && { id: 'vocabulaire', title: 'Vocabulaire' },
    review.mistakes?.length && { id: 'erreurs', title: 'Erreurs fréquentes' },
    review.quiz?.length && { id: 'qcm', title: 'QCM' },
    review.exercises?.length && { id: 'exercices', title: 'Exercices' },
    review.selfCheck?.length && { id: 'autoevaluation', title: 'Je vérifie' },
    review.sources?.length && { id: 'sources', title: 'Sources' },
  ].filter(Boolean);
}

export default function Review({ review, lessonId }) {
  return (
    <div className="space-y-16">
      {review.keyPoints?.length ? (
        <section>
          <SectionTitle id="essentiel" eyebrow="Bilan" title="L’essentiel à retenir" />
          <ol className="mt-6 space-y-0 rounded-frame border border-ink-900/80 bg-white shadow-[5px_5px_0_0_rgb(var(--ink-900)/0.85)]">
            {review.keyPoints.map((point, index) => (
              <li key={index} className="flex gap-5 border-b border-ink-900/10 px-5 py-4 last:border-0 sm:px-6">
                <span className="font-display text-3xl font-light leading-none text-biogy-600">{index + 1}</span>
                <p className="pt-1 text-[16.5px] leading-7 text-ink-900"><RichText text={point} /></p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {review.method ? (
        <section>
          <SectionTitle id="methode" eyebrow="Méthode" title={review.method.title} />
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {review.method.steps.map((step, index) => (
              <li key={index} className="flex gap-4 rounded-frame border border-ink-900/10 bg-white p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-900 font-mono text-[12px] text-paper">{index + 1}</span>
                <p className="pt-1 text-[15px] leading-6 text-ink-800"><RichText text={step} /></p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {review.vocabulary?.length ? (
        <section>
          <SectionTitle id="vocabulaire" eyebrow="Mots-clés" title="Vocabulaire" />
          <dl className="mt-6 grid gap-px overflow-hidden rounded-frame border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2">
            {review.vocabulary.map((word) => (
              <div key={word.term} className="bg-white p-5">
                <dt className="font-display text-lg font-medium text-ink-900">{word.term}</dt>
                <dd className="mt-1 text-[15px] leading-6 text-ink-700"><RichText text={word.definition} /></dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {review.mistakes?.length ? (
        <section>
          <SectionTitle id="erreurs" eyebrow="Pièges" title="Erreurs fréquentes" />
          <ul className="mt-6 space-y-3">
            {review.mistakes.map((mistake, index) => (
              <li key={index} className="grid overflow-hidden rounded-frame border border-ink-900/10 bg-white md:grid-cols-2">
                <p className="flex gap-3 border-b border-ink-900/10 px-5 py-4 text-[15px] leading-6 text-ink-800 md:border-b-0 md:border-r">
                  <XCircle size={18} className="mt-0.5 shrink-0 text-[#a3263a]" /><span><RichText text={mistake.wrong} /></span>
                </p>
                <p className="flex gap-3 px-5 py-4 text-[15px] leading-6 text-ink-900">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-biogy-600" /><span><RichText text={mistake.right} /></span>
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {review.quiz?.length ? (
        <section>
          <SectionTitle id="qcm" eyebrow="Je m’entraîne" title="QCM autocorrigé" />
          <p className="mt-3 text-[15px] text-ink-600">Clique sur une réponse : la correction s’affiche aussitôt.</p>
          <div className="mt-6"><Quiz items={review.quiz} lessonId={lessonId} /></div>
        </section>
      ) : null}

      {review.exercises?.length ? (
        <section>
          <SectionTitle id="exercices" eyebrow="Je m’entraîne" title="Exercices corrigés" />
          <ol className="mt-6 space-y-4">
            {review.exercises.map((exercise, index) => <Exercise key={index} exercise={exercise} number={index + 1} />)}
          </ol>
        </section>
      ) : null}

      {review.selfCheck?.length ? (
        <section>
          <SectionTitle id="autoevaluation" eyebrow="Autoévaluation" title="Je vérifie que je sais…" />
          <div className="mt-6"><SelfCheck items={review.selfCheck} lessonId={lessonId} /></div>
        </section>
      ) : null}

      {review.sources?.length ? (
        <section>
          <SectionTitle id="sources" eyebrow="Pour aller plus loin" title="Sources et ressources" />
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {review.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 rounded-frame border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-800 transition-colors hover:border-ink-900/30">
                  <span>{source.title}</span>
                  <ArrowUpRight size={15} className="shrink-0 text-ink-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="flex items-center gap-2 text-sm text-ink-600">
        <ArrowRight size={15} /> Pour réviser ce chapitre plus tard, utilise les cartes de la page Réviser.
      </p>
    </div>
  );
}
