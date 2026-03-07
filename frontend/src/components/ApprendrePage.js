import React from 'react';
import { Link } from 'react-router-dom';
import { getCourseLevels } from '../data/stlCurriculum';

const LEVEL_STYLES = {
  premiere: {
    badge: 'bg-lab-blue/10 text-lab-blue',
    button: 'bg-lab-blue text-white hover:bg-lab-blue/90',
    glow: 'from-lab-blue/15 via-white to-lab-purple/10',
  },
  terminale: {
    badge: 'bg-lab-teal/10 text-lab-teal',
    button: 'bg-lab-teal text-white hover:bg-lab-teal/90',
    glow: 'from-lab-teal/15 via-white to-lab-green/10',
  },
};

function ApprendrePage() {
  const levels = getCourseLevels();

  return (
    <div className="container mx-auto max-w-5xl px-4 pb-16 pt-8">
      <section className="rounded-3xl border border-gray-200 bg-white px-6 py-8 shadow-xl lg:px-10">
        <p className="inline-flex rounded-full border border-lab-blue/20 bg-lab-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-lab-blue">
          Cours STL
        </p>
        <h1 className="mt-5 text-3xl font-bold text-gray-800 lg:text-4xl">
          Choisis ton niveau
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600">
          Les cours sont maintenant ranges par niveau, puis par chapitre. Tu peux entrer dans le livre de premiere
          ou dans le livre de terminale, puis ouvrir directement le chapitre qui t interesse.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        {levels.map((level) => {
          const style = LEVEL_STYLES[level.id] || LEVEL_STYLES.premiere;
          const chapterCount = level.sections.reduce((total, section) => total + section.chapters.length, 0);

          return (
            <article
              key={level.id}
              className={`rounded-3xl border border-gray-200 bg-gradient-to-br ${style.glow} p-6 shadow-lg`}
            >
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}>
                {level.title}
              </span>
              <h2 className="mt-4 text-2xl font-bold text-gray-800">{level.title}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">{level.intro}</p>
              <p className="mt-4 text-sm font-semibold text-gray-500">
                {chapterCount} chapitres ou modules
              </p>

              <Link
                to={`/apprendre/${level.id}`}
                className={`mt-6 inline-flex rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${style.button}`}
              >
                Ouvrir {level.shortTitle}
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default ApprendrePage;
