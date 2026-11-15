import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { getCourseLevels } from '../data/stlCurriculum';
import CourseSearch from './CourseSearch';
import StudyDashboard from './StudyDashboard';
import PageHero from './ui/PageHero';
import { FocusImage, Reveal, Stagger, StaggerItem } from './ui/motion';
import { LEVEL_VISUALS, PENCILS } from '../data/visuals';

const LEVEL_COPY = {
  premiere: {
    book: 'Livre 01',
    text: 'Découvrir les biotechnologies, prévenir les risques, mesurer avec rigueur, cultiver et observer le vivant.',
  },
  terminale: {
    book: 'Livre 02',
    text: 'Approfondir les notions de Première, interpréter des résultats, conduire le projet technologique et préparer le bac.',
  },
};

const READING_STEPS = [
  ['Cours', 'L’essentiel à savoir : notions, définitions et schémas — ce que l’on recopie dans le cahier.'],
  ['Travail guidé', 'Les documents à analyser et les questions pour s’approprier le cours, pas à pas.'],
  ['Bilan', 'Points-clés, erreurs fréquentes, entraînement et pistes pour aller plus loin.'],
];

function ApprendrePage() {
  const levels = getCourseLevels();

  return (
    <>
      <PageHero
        eyebrow="Apprendre"
        title={[{ text: 'Un cours, une notion,' }, { text: 'un déclic.', className: 'italic text-biogy-700' }]}
        lead="Choisis ton niveau pour ouvrir le livre correspondant. Chaque livre est organisé en grands thèmes, puis en chapitres et en sous-parties — comme un manuel."
        pencil={PENCILS.cellule}
      />

      <div className="page">
        <CourseSearch />
        <div className="mt-6 empty:hidden"><StudyDashboard /></div>

        <section className="mt-16" aria-label="Niveaux">
          <Reveal className="flex items-end justify-between gap-4 border-b border-ink-900/10 pb-5">
            <h2 className="font-display text-display-md">Les livres</h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">{levels.length} niveaux</span>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {levels.map((level, index) => {
              const chapterCount = level.sections.reduce((total, section) => total + section.chapters.length, 0);
              const copy = LEVEL_COPY[level.id] || {};
              return (
                <Reveal key={level.id} delay={index * 0.1}>
                  <Link to={`/apprendre/${level.id}`} className="group block">
                    <FocusImage image={LEVEL_VISUALS[level.id]} className="aspect-[16/10] rounded-frame" zoomOnHover sizes="(min-width: 768px) 50vw, 100vw" />
                    <div className="mt-5 flex items-start justify-between gap-6">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
                          {copy.book} · {chapterCount} chapitres · {level.sections.length} thèmes
                        </p>
                        <h3 className="mt-2 font-display text-[2.2rem] leading-none tracking-tight text-ink-900">
                          <span className="link-draw">{level.title}</span>
                        </h3>
                        <p className="mt-3 max-w-md text-[15px] leading-7 text-ink-600">{copy.text || level.intro}</p>
                      </div>
                      <span className="mt-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink-900/15 transition-all duration-500 ease-lab group-hover:border-ink-900 group-hover:bg-ink-900 group-hover:text-paper">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="mt-20 grid gap-10 rounded-frame border border-surface-line bg-white p-7 md:p-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Comment lire un chapitre</p>
            <h2 className="mt-4 font-display text-[2rem] leading-tight tracking-tight">Trois onglets, toujours dans le même ordre.</h2>
          </Reveal>
          <Stagger as="ol" className="grid gap-px overflow-hidden rounded-card border border-surface-line bg-surface-line sm:grid-cols-3 lg:col-span-8">
            {READING_STEPS.map(([title, text], index) => (
              <StaggerItem as="li" key={title} className="bg-white p-6">
                <span className="font-mono text-[11px] tracking-[0.16em] text-biogy-700">0{index + 1}</span>
                <h3 className="mt-3 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-600">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      </div>
    </>
  );
}

export default ApprendrePage;
