import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  getCourseLevel,
  getCourseReferencesForLevel,
} from '../data/stlCurriculum';

const LEVEL_STYLES = {
  premiere: {
    badge: 'bg-lab-blue/10 text-lab-blue',
    line: 'bg-lab-blue',
    glow: 'from-lab-blue/15 via-white to-lab-purple/10',
    link: 'text-lab-blue',
  },
  terminale: {
    badge: 'bg-lab-teal/10 text-lab-teal',
    line: 'bg-lab-teal',
    glow: 'from-lab-teal/15 via-white to-lab-green/10',
    link: 'text-lab-teal',
  },
};

function CourseLevelPage() {
  const { levelId } = useParams();
  const level = getCourseLevel(levelId);

  if (!level) {
    return <Navigate to="/apprendre" replace />;
  }

  const style = LEVEL_STYLES[level.id] || LEVEL_STYLES.premiere;
  const references = getCourseReferencesForLevel(level);

  return (
    <div className="container mx-auto max-w-6xl px-4 pb-16 pt-8">
      <nav className="mb-6 text-sm text-gray-500">
        <Link to="/apprendre" className="hover:underline">
          Apprendre
        </Link>
        <span className="px-2">/</span>
        <span className="font-semibold text-gray-700">{level.title}</span>
      </nav>

      <section className={`rounded-3xl border border-gray-200 bg-gradient-to-br ${style.glow} px-6 py-8 shadow-xl lg:px-10`}>
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}>
          {level.title}
        </span>
        <h1 className="mt-4 text-3xl font-bold text-gray-800 lg:text-4xl">{level.title}</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-gray-600">{level.intro}</p>
      </section>

      <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">Sommaire</h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Choisis un module, un theme ou un chapitre pour ouvrir sa page. Certains chapitres regroupent plusieurs
          sous-parties de cours.
        </p>

        <div className="mt-6 space-y-6">
          {level.sections.map((section) => (
            <section key={section.id} className="rounded-2xl border border-gray-200 bg-lab-bg/60 p-5">
              <div className={`mb-4 h-1.5 w-14 rounded-full ${style.line}`} />
              <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>

              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {section.chapters.map((chapter) => {
                  const availableLessons = (chapter.lessons || []).filter((lesson) => lesson.content).length;
                  const totalLessons = chapter.lessons?.length || 0;
                  const hasContent = Boolean(chapter.content || availableLessons);
                  const statusLabel = totalLessons
                    ? availableLessons
                      ? `${availableLessons}/${totalLessons} cours`
                      : `${totalLessons} sous-parties`
                    : hasContent
                      ? 'Cours disponible'
                      : 'Structure';

                  return (
                    <Link
                      key={chapter.id}
                      to={`/apprendre/${level.id}/${chapter.id}`}
                      className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700">
                          {chapter.code}
                        </span>
                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          hasContent
                            ? 'border border-lab-teal/20 bg-lab-teal/10 text-lab-teal'
                            : 'border border-gray-200 bg-gray-50 text-gray-700'
                        }`}>
                          {statusLabel}
                        </span>
                      </div>

                      <h4 className="mt-3 text-base font-semibold leading-6 text-gray-800">{chapter.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-gray-600">{chapter.summary}</p>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">References officielles</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {references.map((reference) => (
            <a
              key={reference.id}
              href={reference.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span>{reference.title}</span>
              <span className={`font-semibold ${style.link}`}>Ouvrir</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CourseLevelPage;
