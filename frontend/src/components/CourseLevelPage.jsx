import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import {
  getCourseLevel,
  getCourseReferencesForLevel,
} from '../data/stlCurriculum';
import PageHero from './ui/PageHero';
import { Reveal, Stagger, StaggerItem } from './ui/motion';
import { LEVEL_VISUALS } from '../data/visuals';

const LEVEL_LEAD = {
  premiere: 'Les cours sont rangés par modules : biotechnologies, biochimie-biologie et repères transversaux à mobiliser dans les deux spécialités.',
  terminale: 'Les cours approfondissent les notions de Première et les relient au projet technologique, à l’interprétation des résultats et à la préparation du baccalauréat.',
};

function CourseLevelPage() {
  const { levelId } = useParams();
  const level = getCourseLevel(levelId);

  if (!level) {
    return <Navigate to="/apprendre" replace />;
  }

  const references = getCourseReferencesForLevel(level);
  const chapterCount = level.sections.reduce((total, section) => total + section.chapters.length, 0);
  const availableCount = level.sections.reduce((total, section) => total + section.chapters.filter(
    (chapter) => chapter.content || (chapter.lessons || []).some((lesson) => lesson.content),
  ).length, 0);

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Apprendre', to: '/apprendre' }, { label: level.title }]}
        eyebrow={`Sommaire · ${level.title}`}
        title={[{ text: level.shortTitle, className: 'italic text-biogy-700' }, { text: 'STL' }]}
        lead={LEVEL_LEAD[level.id] || level.intro}
        image={LEVEL_VISUALS[level.id]}
        figureNumber={level.id === 'premiere' ? 2 : 3}
        meta={(
          <dl className="flex flex-wrap gap-x-10 gap-y-4 border-t border-ink-900/15 pt-5">
            {[[level.sections.length, 'thèmes'], [chapterCount, 'chapitres'], [availableCount, 'chapitres disponibles']].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-4xl leading-none tracking-tight">{value}</dd>
                <dd aria-hidden="true" className="mt-1.5 text-[12.5px] text-ink-500">{label}</dd>
              </div>
            ))}
          </dl>
        )}
      />

      <div className="page mt-14 space-y-16">
        {level.sections.map((section, sectionIdx) => (
          <section key={section.id} aria-labelledby={`section-${section.id}`} className="grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span className="font-display text-[4.5rem] font-light leading-none tracking-tight text-ink-200">
                  {String(sectionIdx + 1).padStart(2, '0')}
                </span>
                <h2 id={`section-${section.id}`} className="mt-3 font-display text-[1.9rem] leading-tight tracking-tight text-ink-900">
                  {section.title}
                </h2>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                  {section.chapters.length} chapitre{section.chapters.length > 1 ? 's' : ''}
                </p>
              </div>
            </Reveal>

            <Stagger as="ul" className="border-t border-ink-900/15 lg:col-span-8" stagger={0.05}>
              {section.chapters.map((chapter) => {
                const availableLessons = (chapter.lessons || []).filter((l) => l.content).length;
                const totalLessons = chapter.lessons?.length || 0;
                const hasContent = Boolean(chapter.content || availableLessons);

                return (
                  <StaggerItem as="li" key={chapter.id} className="border-b border-ink-900/10">
                    <Link
                      to={`/apprendre/${level.id}/${chapter.id}`}
                      className="group grid grid-cols-[4.5rem_1fr_auto] items-start gap-4 py-5 transition-colors duration-300 hover:bg-white/70 sm:grid-cols-[6rem_1fr_auto] sm:px-3"
                    >
                      <span className="pt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">{chapter.code}</span>
                      <span className="min-w-0">
                        <span className="block font-display text-[1.35rem] leading-snug text-ink-900 transition-colors group-hover:text-biogy-700">
                          {chapter.title}
                        </span>
                        {chapter.summary ? (
                          <span className="mt-1.5 block text-sm leading-6 text-ink-600 line-clamp-2">{chapter.summary}</span>
                        ) : null}
                        <span className="mt-3 inline-flex">
                          {hasContent ? (
                            <span className="pill-biogy">{totalLessons ? `${availableLessons}/${totalLessons} cours rédigés` : 'Disponible'}</span>
                          ) : (
                            <span className="pill-neutral">En préparation</span>
                          )}
                        </span>
                      </span>
                      <ArrowUpRight size={18} className="mt-1 text-ink-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-900" />
                    </Link>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </section>
        ))}

        {references?.length ? (
          <section className="rounded-frame border border-surface-line bg-white p-7 md:p-10" aria-label="Références officielles">
            <p className="eyebrow">Références officielles</p>
            <h2 className="mt-4 font-display text-[2rem] leading-tight">Les textes et programmes de référence</h2>
            <ul className="mt-7 grid gap-3 md:grid-cols-2">
              {references.map((reference) => (
                <li key={reference.id}>
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-card border border-surface-line bg-paper-50 p-4 transition-colors hover:border-ink-300"
                  >
                    <span className="text-sm text-ink-800">{reference.title}</span>
                    <ArrowUpRight size={16} className="shrink-0 text-ink-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </>
  );
}

export default CourseLevelPage;
