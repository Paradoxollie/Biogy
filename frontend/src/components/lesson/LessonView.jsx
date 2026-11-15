import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, ClipboardList, Clock3, GraduationCap, ListChecks, Target } from 'lucide-react';
import RichText, { Paragraphs } from './RichText';
import { Block, LessonFigure } from './blocks';
import GuidedActivity, { countActivityFigures } from './GuidedActivity';
import Review, { reviewSections } from './Review';
import { Reveal } from '../ui/motion';

/* -----------------------------------------------------------------------------
   Sommaire latéral : suit la section en cours de lecture
----------------------------------------------------------------------------- */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    setActive(ids[0]);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return undefined;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-25% 0px -65% 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids.join('|')]); // eslint-disable-line react-hooks/exhaustive-deps
  return active;
}

function Sommaire({ items, label }) {
  const active = useActiveSection(items.map((item) => item.id));
  const activeIndex = Math.max(0, items.findIndex((item) => item.id === active));
  return (
    <nav aria-label={label} className="no-print sticky top-24 hidden lg:block">
      <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-500">{label}</p>
      <div className="relative mt-4">
        <span className="absolute left-[7px] top-1 h-[calc(100%-8px)] w-px bg-ink-900/10" aria-hidden="true" />
        <motion.span
          className="absolute left-[7px] top-1 w-px bg-biogy-600"
          animate={{ height: `${((activeIndex + 1) / items.length) * 100}%` }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
        />
        <ol className="space-y-1">
          {items.map((item, index) => {
            const current = item.id === active;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(event) => { event.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                  className={`group flex gap-3 rounded-md py-1.5 pr-2 text-[13.5px] leading-snug transition-colors ${current ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'}`}
                  aria-current={current ? 'location' : undefined}
                >
                  <span className={`relative mt-[3px] flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full border transition-colors ${index <= activeIndex ? 'border-biogy-600 bg-biogy-600' : 'border-ink-900/25 bg-paper'}`}>
                    {current ? <span className="h-1.5 w-1.5 rounded-full bg-paper" /> : null}
                  </span>
                  <span className={current ? 'font-medium' : ''}>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

/* -----------------------------------------------------------------------------
   Introduction : accroche, objectifs, prérequis
----------------------------------------------------------------------------- */
function LessonIntro({ lesson, onOpenImage }) {
  const { hook, objectives, prerequisites, duration, program } = lesson;
  return (
    <section className="mt-10 grid gap-6 lg:grid-cols-12">
      {hook ? (
        <Reveal className="lg:col-span-7">
          <div className="relative h-full overflow-hidden rounded-frame border border-ink-900/10 bg-white">
            {hook.image ? (
              <button type="button" onClick={() => onOpenImage?.({ src: hook.image.src, alt: hook.image.alt, title: hook.caption })} className="block w-full" aria-label="Agrandir l’illustration d’accroche">
                <img src={hook.image.src} alt={hook.image.alt || ''} width={hook.image.width} height={hook.image.height} className="aspect-[16/8] w-full object-cover" />
              </button>
            ) : null}
            <div className="p-6 sm:p-7">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-biogy-700">Pour commencer</p>
              <p className="mt-3 font-display text-[1.65rem] font-[450] italic leading-snug text-ink-900"><RichText text={hook.question} /></p>
              {hook.text ? <Paragraphs text={hook.text} className="mt-3 text-[15.5px] leading-7 text-ink-700" /> : null}
            </div>
          </div>
        </Reveal>
      ) : null}
      <Reveal delay={0.08} className={hook ? 'lg:col-span-5' : 'lg:col-span-12'}>
        <div className="h-full rounded-frame border border-ink-900/10 bg-paper-50 p-6 sm:p-7">
          <p className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-600"><Target size={14} /> Objectifs — à la fin, je sais</p>
          <ul className="mt-4 space-y-3">
            {objectives?.map((objective, index) => (
              <li key={index} className="flex gap-3 text-[15.5px] leading-6 text-ink-900">
                <span className="mt-0.5 font-mono text-[12px] text-biogy-700">{String(index + 1).padStart(2, '0')}</span>
                <span><RichText text={objective} /></span>
              </li>
            ))}
          </ul>
          {prerequisites?.length ? (
            <div className="mt-6 border-t border-ink-900/10 pt-4">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-500">Je dois déjà savoir</p>
              <ul className="mt-2 space-y-1.5">
                {prerequisites.map((item, index) => <li key={index} className="text-sm leading-6 text-ink-700">— <RichText text={item} /></li>)}
              </ul>
            </div>
          ) : null}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink-900/10 pt-4 text-[13px] text-ink-600">
            {duration ? <span className="inline-flex items-center gap-1.5"><Clock3 size={14} /> {duration}</span> : null}
            {program?.length ? (
              <details className="group w-full">
                <summary className="cursor-pointer list-none font-medium text-ink-800 [&::-webkit-details-marker]:hidden">
                  <span className="link-draw">Ce que dit le programme officiel</span> <span className="text-ink-400 group-open:hidden">+</span>
                </summary>
                <ul className="mt-2 space-y-1">
                  {program.map((item, index) => <li key={index} className="leading-5">· <RichText text={item} /></li>)}
                </ul>
              </details>
            ) : null}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* -----------------------------------------------------------------------------
   Vue principale
----------------------------------------------------------------------------- */
export default function LessonView({ lesson, storageId, onOpenImage }) {
  const parts = lesson.course?.parts || [];
  const activities = lesson.guided?.activities || [];
  const review = lesson.review || {};
  const reviewItems = reviewSections(review);

  const tabs = [
    parts.length && { id: 'cours', label: 'Le cours', short: 'Cours', icon: GraduationCap },
    activities.length && { id: 'guide', label: 'Travail guidé', short: 'Guidé', icon: ClipboardList },
    reviewItems.length && { id: 'bilan', label: 'Bilan & entraînement', short: 'Bilan', icon: ListChecks },
  ].filter(Boolean);

  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get('onglet');
  const activeTab = tabs.some((tab) => tab.id === requested) ? requested : tabs[0]?.id;
  const tabsRef = useRef(null);

  const setTab = (id, scroll = false) => {
    const next = new URLSearchParams(searchParams);
    next.set('onglet', id);
    setSearchParams(next, { replace: true, preventScrollReset: true });
    if (scroll) requestAnimationFrame(() => tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  const onTabKey = (event, index) => {
    let target;
    if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') target = (index - 1 + tabs.length) % tabs.length;
    if (target === undefined) return;
    event.preventDefault();
    setTab(tabs[target].id);
    document.getElementById(`lesson-tab-${tabs[target].id}`)?.focus();
  };

  // Numérotation continue des figures (cours puis travail guidé) et des questions.
  const numbering = useMemo(() => {
    let figure = 1;
    const partFigures = parts.map((part) => {
      const starts = [];
      (part.blocks || []).forEach((block) => { starts.push(block.type === 'figure' ? figure++ : null); });
      return starts;
    });
    let question = 1;
    const activityStarts = activities.map((activity) => {
      const start = { figure, question };
      figure += countActivityFigures(activity);
      question += activity.questions?.length || 0;
      return start;
    });
    return { partFigures, activityStarts };
  }, [parts, activities]);

  const sommaire = {
    cours: parts.map((part, index) => ({ id: `partie-${index + 1}`, title: `${index + 1}. ${part.title}` })),
    guide: activities.map((activity, index) => ({ id: `activite-${index + 1}`, title: `Activité ${index + 1} · ${activity.title}` })),
    bilan: reviewItems,
  };

  const nextTab = tabs[tabs.findIndex((tab) => tab.id === activeTab) + 1];

  return (
    <div>
      <LessonIntro lesson={lesson} onOpenImage={onOpenImage} />

      <div ref={tabsRef} className="scroll-mt-4" />
      <div className="sticky top-3 z-20 mt-12 flex w-full flex-wrap gap-1 rounded-pill border border-ink-900/10 bg-paper/90 p-1 shadow-soft backdrop-blur-md sm:w-fit" role="tablist" aria-label="Parties de la leçon">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const selected = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              id={`lesson-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`lesson-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onKeyDown={(event) => onTabKey(event, index)}
              onClick={() => setTab(tab.id)}
              className={`relative inline-flex flex-1 items-center justify-center gap-1.5 rounded-pill px-3 py-2.5 text-sm font-semibold sm:gap-2 transition-colors duration-300 sm:flex-none sm:px-5 ${selected ? 'text-paper' : 'text-ink-600 hover:text-ink-900'}`}
            >
              {selected && <motion.span layoutId={`lesson-tab-${storageId}`} className="absolute inset-0 rounded-pill bg-ink-900" transition={{ type: 'spring', stiffness: 420, damping: 36 }} />}
              <Icon size={16} className="relative" />
              <span className="relative hidden sm:inline">{tab.label}</span>
              <span className="relative sm:hidden">{tab.short}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[230px_minmax(0,1fr)] xl:gap-14">
        <aside>
          <Sommaire key={activeTab} items={sommaire[activeTab] || []} label={activeTab === 'cours' ? 'Plan du cours' : activeTab === 'guide' ? 'Activités' : 'Bilan'} />
        </aside>

        <div className="min-w-0">
          {activeTab === 'cours' && (
            <div id="lesson-panel-cours" role="tabpanel" aria-labelledby="lesson-tab-cours" className="max-w-3xl space-y-16">
              {lesson.course.intro ? <Paragraphs text={lesson.course.intro} className="text-[17px] leading-[1.8] text-ink-700" /> : null}
              {parts.map((part, partIndex) => (
                <section key={partIndex} id={`partie-${partIndex + 1}`} className="scroll-mt-28">
                  <Reveal y={14} blur={false}>
                    <header className="border-b border-ink-900/15 pb-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-biogy-700">Partie {partIndex + 1}</p>
                      <h2 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.35rem)] font-[450] leading-[1.12] tracking-tight text-ink-900">
                        <span className="mark-pencil-static">{part.title}</span>
                      </h2>
                    </header>
                  </Reveal>
                  {part.intro ? <Paragraphs text={part.intro} className="mt-5 text-[17px] italic leading-[1.8] text-ink-700" /> : null}
                  {(part.blocks || []).map((block, blockIndex) => (
                    <Block key={blockIndex} block={block} figureNumber={numbering.partFigures[partIndex][blockIndex]} onOpenImage={onOpenImage} />
                  ))}
                </section>
              ))}
            </div>
          )}

          {activeTab === 'guide' && (
            <div id="lesson-panel-guide" role="tabpanel" aria-labelledby="lesson-tab-guide" className="space-y-16">
              {lesson.guided.intro ? (
                <div className="flex max-w-3xl gap-3 rounded-frame border border-ink-900/10 bg-paper-50 p-5">
                  <BookOpen size={20} className="mt-0.5 shrink-0 text-biogy-700" />
                  <Paragraphs text={lesson.guided.intro} className="text-[15.5px] leading-7 text-ink-700 [&+p]:mt-2" />
                </div>
              ) : null}
              {activities.map((activity, index) => (
                <GuidedActivity
                  key={index}
                  activity={activity}
                  index={index}
                  lessonId={storageId}
                  figureStart={numbering.activityStarts[index].figure}
                  questionStart={numbering.activityStarts[index].question}
                  onOpenImage={onOpenImage}
                />
              ))}
            </div>
          )}

          {activeTab === 'bilan' && (
            <div id="lesson-panel-bilan" role="tabpanel" aria-labelledby="lesson-tab-bilan" className="max-w-4xl">
              <Review review={review} lessonId={storageId} />
            </div>
          )}

          {nextTab ? (
            <div className="no-print mt-16 flex justify-end border-t border-ink-900/10 pt-6">
              <button type="button" onClick={() => setTab(nextTab.id, true)} className="btn-primary px-6">
                Continuer : {nextTab.label} <ArrowRight size={16} className="btn-arrow" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export { LessonFigure };
