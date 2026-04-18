import React from 'react';
import { Link } from 'react-router-dom';
import { getCourseLevels } from '../data/stlCurriculum';

const LEVEL_ACCENT = {
  premiere:  { badge: 'pill-biogy' },
  terminale: { badge: 'pill-ink'   },
};

function ApprendrePage() {
  const levels = getCourseLevels();

  return (
    <div className="page py-10 md:py-14">
      <header className="max-w-3xl">
        <p className="section-eyebrow">Apprendre</p>
        <h1 className="mt-3 font-display text-3xl md:text-display-md text-ink-900">
          Les livres de cours de la spécialité
        </h1>
        <p className="mt-4 text-ink-600 leading-relaxed">
          Choisis ton niveau pour ouvrir le livre correspondant. Chaque livre est organisé
          en grands thèmes, puis en chapitres et en sous-parties — comme un manuel.
        </p>
      </header>

      <section className="mt-10 grid gap-5 md:grid-cols-2" aria-label="Niveaux">
        {levels.map((level) => {
          const style = LEVEL_ACCENT[level.id] || LEVEL_ACCENT.premiere;
          const chapterCount = level.sections.reduce(
            (total, section) => total + section.chapters.length,
            0,
          );

          return (
            <Link
              key={level.id}
              to={`/apprendre/${level.id}`}
              className="group card p-6 md:p-8 transition-all hover:border-biogy-200 hover:shadow-elevated"
            >
              <div className="flex items-center justify-between">
                <span className={style.badge}>{level.title}</span>
                <span className="text-xs font-medium text-ink-500">
                  {chapterCount} chapitres
                </span>
              </div>

              <h2 className="mt-5 font-display text-2xl text-ink-900">
                Ouvrir le livre de {level.shortTitle.toLowerCase()}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                {level.intro}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-biogy-700">
                Ouvrir
                <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="currentColor" aria-hidden="true">
                  <path d="M7.3 4.3l5.4 5.7-5.4 5.7-1.3-1.2 4.1-4.5L6 5.5z" />
                </svg>
              </div>
            </Link>
          );
        })}
      </section>

      <section className="mt-10 card p-6 md:p-8">
        <p className="section-eyebrow">Comment lire un chapitre</p>
        <h2 className="mt-3 font-display text-xl text-ink-900">
          Trois onglets, toujours dans le même ordre
        </h2>
        <ol className="mt-5 grid gap-3 md:grid-cols-3">
          <li className="card-flat p-4">
            <span className="pill-biogy">1 — Cours</span>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              L'essentiel à savoir, les notions et les schémas — ce qu'on recopie dans le cahier.
            </p>
          </li>
          <li className="card-flat p-4">
            <span className="pill-neutral">2 — Travail guidé</span>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              Les documents à analyser et les questions pour s'approprier le cours.
            </p>
          </li>
          <li className="card-flat p-4">
            <span className="pill-accent">3 — Bilan</span>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              Points-clés, erreurs fréquentes, entraînement et pistes pour aller plus loin.
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}

export default ApprendrePage;
