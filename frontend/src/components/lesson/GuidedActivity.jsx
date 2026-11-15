import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Lightbulb, PenLine } from 'lucide-react';
import RichText, { Paragraphs } from './RichText';
import { Block, LessonFigure } from './blocks';
import { readStorage, writeStorage } from '../../utils/storage';
import { EASE } from '../ui/motion';

const reveal = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 },
  transition: { duration: 0.35, ease: EASE },
};

function useDraft(storageKey) {
  const [value, setValue] = useState(() => readStorage(storageKey, ''));
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const update = (next) => {
    setValue(next);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => writeStorage(storageKey, next || null), 400);
  };
  return [value, update];
}

function Question({ question, number, storageKey }) {
  const [open, setOpen] = useState(null);
  const [draft, setDraft] = useDraft(storageKey);
  const [writing, setWriting] = useState(Boolean(draft));
  const toggle = (panel) => setOpen((current) => (current === panel ? null : panel));
  return (
    <li className="border-t border-ink-900/10 py-5 first:border-t-0">
      <div className="flex gap-4">
        <span className="mt-0.5 shrink-0 font-mono text-[13px] font-medium text-biogy-700">Q{number}</span>
        <div className="min-w-0 flex-1">
          <p className="text-[16.5px] leading-7 text-ink-900"><RichText text={question.text} /></p>
          <div className="no-print mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setWriting((value) => !value)}
              aria-expanded={writing}
              className={`inline-flex min-h-9 items-center gap-1.5 rounded-pill border px-3 text-[13px] font-medium transition-colors ${writing ? 'border-ink-900 bg-ink-900 text-paper' : 'border-ink-900/15 text-ink-700 hover:border-ink-900/40'}`}
            >
              <PenLine size={14} /> {draft ? 'Ma réponse' : 'Répondre ici'}
            </button>
            {question.hint ? (
              <button
                type="button"
                onClick={() => toggle('hint')}
                aria-expanded={open === 'hint'}
                className={`inline-flex min-h-9 items-center gap-1.5 rounded-pill border px-3 text-[13px] font-medium transition-colors ${open === 'hint' ? 'border-accent-500 bg-accent-50 text-accent-800' : 'border-ink-900/15 text-ink-700 hover:border-accent-500'}`}
              >
                <Lightbulb size={14} /> Coup de pouce
              </button>
            ) : null}
            {question.answer ? (
              <button
                type="button"
                onClick={() => toggle('answer')}
                aria-expanded={open === 'answer'}
                className={`inline-flex min-h-9 items-center gap-1.5 rounded-pill border px-3 text-[13px] font-medium transition-colors ${open === 'answer' ? 'border-biogy-600 bg-biogy-50 text-biogy-800' : 'border-ink-900/15 text-ink-700 hover:border-biogy-600'}`}
              >
                <CheckCircle2 size={14} /> Correction
              </button>
            ) : null}
          </div>
          <AnimatePresence initial={false}>
            {writing && (
              <motion.div key="draft" {...reveal} className="overflow-hidden">
                <label className="sr-only" htmlFor={storageKey}>Ma réponse à la question {number}</label>
                <textarea
                  id={storageKey}
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  rows={3}
                  placeholder="Écris ta réponse : elle reste enregistrée sur cet appareil."
                  className="paper-lined-bg mt-3 block w-full resize-y rounded-frame border border-ink-900/15 bg-white px-4 py-3 text-[15px] leading-6 text-ink-900 placeholder:text-ink-400 focus:border-biogy-600"
                />
              </motion.div>
            )}
            {open === 'hint' && (
              <motion.div key="hint" {...reveal} className="overflow-hidden">
                <p className="mt-3 rounded-frame border-l-[3px] border-accent-500 bg-accent-50/70 px-4 py-3 text-[15px] leading-7 text-ink-800">
                  <RichText text={question.hint} />
                </p>
              </motion.div>
            )}
            {open === 'answer' && (
              <motion.div key="answer" {...reveal} className="overflow-hidden">
                <div className="mt-3 rounded-frame border-l-[3px] border-biogy-600 bg-biogy-50/70 px-4 py-3 text-[15px] leading-7 text-ink-800">
                  <p className="mb-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-biogy-800">Proposition de correction</p>
                  <Paragraphs text={question.answer} className="[&+p]:mt-2" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </li>
  );
}

function LessonDocument({ document, figureNumber, onOpenImage }) {
  return (
    <article className="rounded-frame border border-ink-900/10 bg-white shadow-soft">
      <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink-900/10 px-5 py-3">
        <p className="flex items-baseline gap-3">
          <span className="tag">{document.label || 'Document'}</span>
          {document.title ? <span className="font-display text-lg text-ink-900"><RichText text={document.title} /></span> : null}
        </p>
        {document.source ? <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-500">{document.source}</span> : null}
      </header>
      <div className="px-5 pb-5 pt-2">
        {document.text ? <Paragraphs text={document.text} className="mt-3 text-[15.5px] leading-7 text-ink-800" /> : null}
        {document.blocks?.map((block, index) => <Block key={index} block={block} onOpenImage={onOpenImage} />)}
        {document.image ? (
          <LessonFigure figure={{ image: document.image, caption: document.caption, credit: document.credit, size: document.size || 'wide' }} number={figureNumber} onOpenImage={onOpenImage} />
        ) : null}
        {document.link ? (
          <a href={document.link.url} target="_blank" rel="noopener noreferrer" className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900">
            <span className="link-draw">{document.link.label}</span><ArrowUpRight size={15} />
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function GuidedActivity({ activity, index, lessonId, figureStart, questionStart = 1, onOpenImage }) {
  let figure = figureStart;
  return (
    <section id={`activite-${index + 1}`} className="scroll-mt-28">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-biogy-700">Activité {index + 1}{activity.duration ? ` · ${activity.duration}` : ''}</p>
          <h3 className="mt-2 font-display text-[1.9rem] font-[450] leading-tight tracking-tight text-ink-900"><RichText text={activity.title} /></h3>
        </div>
        {activity.skills?.length ? (
          <ul className="flex flex-wrap gap-1.5">
            {activity.skills.map((skill) => <li key={skill} className="pill-neutral">{skill}</li>)}
          </ul>
        ) : null}
      </header>
      {activity.context ? (
        <div className="mt-4 max-w-3xl"><Paragraphs text={activity.context} className="mt-2 text-[16.5px] leading-[1.75] text-ink-700" /></div>
      ) : null}

      {activity.documents?.length ? (
        <div className={`mt-6 grid gap-4 ${activity.documents.length > 1 && !activity.documents.some((doc) => doc.image) ? 'md:grid-cols-2' : ''}`}>
          {activity.documents.map((document, docIndex) => {
            const number = document.image ? figure++ : null;
            return <LessonDocument key={docIndex} document={document} figureNumber={number} onOpenImage={onOpenImage} />;
          })}
        </div>
      ) : null}

      {activity.questions?.length ? (
        <div className="mt-6 rounded-frame border border-ink-900/10 bg-paper-50 px-5 sm:px-6">
          <p className="border-b border-ink-900/10 py-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-600">
            {activity.instruction ? <RichText text={activity.instruction} /> : 'Questions'}
          </p>
          <ol>
            {activity.questions.map((question, qIndex) => (
              <Question
                key={qIndex}
                question={typeof question === 'string' ? { text: question } : question}
                number={questionStart + qIndex}
                storageKey={`biogy:reponse:${lessonId}:a${index + 1}q${qIndex + 1}`}
              />
            ))}
          </ol>
        </div>
      ) : null}
    </section>
  );
}

export function countActivityFigures(activity) {
  return (activity.documents || []).filter((doc) => doc.image).length;
}
