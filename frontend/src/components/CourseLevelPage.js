import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  getCourseLevel,
  getCourseReferencesForLevel,
} from '../data/stlCurriculum';

function CourseLevelPage() {
  const { levelId } = useParams();
  const level = getCourseLevel(levelId);

  if (!level) {
    return <Navigate to="/apprendre" replace />;
  }

  const references = getCourseReferencesForLevel(level);

  return (
    <div className="page py-10 md:py-14">
      <nav className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500" aria-label="Fil d'ariane">
        <Link to="/apprendre" className="hover:text-ink-900">Apprendre</Link>
        <span className="mx-2 text-ink-300">/</span>
        <span className="text-ink-700">{level.title}</span>
      </nav>

      <header className="max-w-3xl">
        <span className="pill-biogy">{level.title}</span>
        <h1 className="mt-4 font-display text-3xl md:text-display-md text-ink-900">
          Sommaire du livre
        </h1>
        <p className="mt-4 text-ink-600 leading-relaxed">{level.intro}</p>
      </header>

      <div className="mt-10 space-y-10">
        {level.sections.map((section, sectionIdx) => (
          <section key={section.id} aria-labelledby={`section-${section.id}`}>
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-biogy-600">
                {String(sectionIdx + 1).padStart(2, '0')}
              </span>
              <h2 id={`section-${section.id}`} className="font-display text-xl md:text-2xl text-ink-900">
                {section.title}
              </h2>
            </div>
            <div className="mt-1 h-px bg-surface-line" aria-hidden="true" />

            <ul className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {section.chapters.map((chapter) => {
                const availableLessons = (chapter.lessons || []).filter((l) => l.content).length;
                const totalLessons = chapter.lessons?.length || 0;
                const hasContent = Boolean(chapter.content || availableLessons);

                return (
                  <li key={chapter.id}>
                    <Link
                      to={`/apprendre/${level.id}/${chapter.id}`}
                      className="group card p-4 block h-full transition-all hover:border-biogy-200 hover:shadow-soft"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-xs text-ink-500">{chapter.code}</span>
                        {hasContent ? (
                          <span className="pill-biogy">
                            {totalLessons ? `${availableLessons}/${totalLessons} cours` : 'Disponible'}
                          </span>
                        ) : (
                          <span className="pill-neutral">Bientôt</span>
                        )}
                      </div>
                      <h3 className="mt-3 text-[15px] font-semibold leading-snug text-ink-900 group-hover:text-biogy-700">
                        {chapter.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600 line-clamp-3">
                        {chapter.summary}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      {references?.length ? (
        <section className="mt-14 card p-6 md:p-8" aria-label="Références officielles">
          <p className="section-eyebrow">Références officielles</p>
          <h2 className="mt-3 font-display text-xl text-ink-900">
            Les textes et programmes de référence
          </h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {references.map((reference) => (
              <li key={reference.id}>
                <a
                  href={reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-flat flex items-center justify-between gap-3 p-4 transition-colors hover:border-biogy-200"
                >
                  <span className="text-sm text-ink-800">{reference.title}</span>
                  <span className="text-xs font-semibold text-biogy-700">Ouvrir ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

export default CourseLevelPage;
