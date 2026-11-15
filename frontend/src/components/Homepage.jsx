import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import StudyDashboard from './StudyDashboard';
import {
  Counter,
  DrawPath,
  FocusImage,
  Figure,
  Marquee,
  Pencil,
  Reveal,
  SplitWords,
  Stagger,
  StaggerItem,
} from './ui/motion';
import { PENCILS, PHOTOS } from '../data/visuals';

// Chaque technique du bandeau ouvre la leçon de Première qui la traite.
const TECHNIQUES = [
  { label: 'Observation microscopique', to: '/apprendre/premiere/module-1-diversite' },
  { label: 'Coloration de Gram', to: '/apprendre/premiere/module-1-diversite' },
  { label: 'Travail en milieu aseptique', to: '/apprendre/premiere/module-2-culture' },
  { label: 'Isolement en quadrants', to: '/apprendre/premiere/module-2-culture' },
  { label: 'Identification bactérienne', to: '/apprendre/premiere/module-3-identification' },
  { label: 'Dilutions en série', to: '/apprendre/premiere/module-4-denombrement' },
  { label: 'Dénombrement en cellule de Malassez', to: '/apprendre/premiere/module-4-denombrement' },
  { label: 'Préparation de solutions', to: '/apprendre/premiere/module-5-solutions' },
  { label: 'Chromatographie', to: '/apprendre/premiere/module-7-separation' },
  { label: 'Dosage par titrage', to: '/apprendre/premiere/module-8-concentration/c8-dosage-volumetrique' },
  { label: 'Pipetage de précision', to: '/laboratoire/at5-metrologie-pipettes' },
];

const QUICK_LINKS = [
  { label: 'Première STL', to: '/apprendre/premiere' },
  { label: 'Terminale STL', to: '/apprendre/terminale' },
  { label: 'Séances de labo', to: '/laboratoire' },
];

const PATHS = [
  {
    number: '01',
    title: 'Comprendre le cours',
    text: 'Les notions, les schémas et le travail guidé, rangés par niveau et par chapitre — comme un manuel que l’on feuillette.',
    label: 'Explorer les cours',
    to: '/apprendre',
    drawing: PENCILS.cellule,
  },
  {
    number: '02',
    title: 'Réviser à mon rythme',
    text: 'Des cartes à retourner pour retrouver le vocabulaire et vérifier ce que tu as vraiment compris.',
    label: 'Commencer à réviser',
    to: '/revisions',
    drawing: PENCILS.microbes,
  },
  {
    number: '03',
    title: 'Travailler au labo',
    text: 'Des séances guidées, des réponses gardées sur l’appareil et une copie à remettre à ton enseignante.',
    label: 'Ouvrir le laboratoire',
    to: '/laboratoire',
    drawing: PENCILS.pipette,
  },
];

const BEYOND = [
  {
    to: '/actualites',
    eyebrow: 'Veille scientifique',
    title: 'Le vivant fait l’actualité',
    text: 'Des articles pour relier le cours au monde réel et nourrir tes exposés.',
    image: PHOTOS.veille,
  },
  {
    to: '/projets',
    eyebrow: 'Projets',
    title: 'Montrer sa démarche',
    text: 'Affiches, protocoles, résultats : les projets de la classe.',
    image: PHOTOS.projets,
  },
  {
    to: '/forum',
    eyebrow: 'Forum',
    title: 'Une question ? On en parle.',
    text: 'Échanger avec la classe sur un point de cours ou une manipulation.',
    image: PHOTOS.forum,
  },
];

function useCourseStats() {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    let active = true;
    import('../data/courseIndex').then(({ courseIndex }) => {
      if (!active) return;
      const chapters = new Set(courseIndex.map((item) => item.path.split('/').slice(0, 4).join('/')));
      const written = courseIndex.filter((item) => item.content).length;
      const quizzes = courseIndex.filter((item) => item.content?.version === 2).length;
      setStats({ chapters: chapters.size, written, quizzes });
    }).catch(() => {});
    return () => { active = false; };
  }, []);
  return stats;
}

function Hero() {
  const stats = useCourseStats();
  return (
    <section className="relative overflow-hidden">
      <div className="page grid gap-12 pb-16 pt-8 md:pt-12 lg:grid-cols-12 lg:gap-12 lg:pb-24">
        <div className="flex flex-col justify-center lg:col-span-7 lg:pr-6">
          <Reveal y={10} blur={false}>
            <p className="eyebrow">Première & Terminale · STL Biotechnologies</p>
          </Reveal>
          <h1 className="mt-7 font-display text-display-2xl text-ink-900">
            <SplitWords
              delay={0.15}
              parts={[
                { text: 'Comprendre le vivant,' },
                { br: true, className: 'hidden sm:block' },
                { text: 'geste après geste.', className: 'accent-italic', wrap: 'mark-pencil' },
              ]}
            />
          </h1>
          <Reveal delay={0.55} className="mt-8 max-w-xl text-lg leading-8 text-ink-700">
            Ton espace de biotechnologies, du cours à la paillasse. Retrouve une notion, prépare une séance
            de laboratoire ou prends dix minutes pour réviser.
          </Reveal>
          <Reveal delay={0.65} className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/apprendre" className="btn-primary px-6">
              Trouver mon cours <ArrowRight size={16} className="btn-arrow" />
            </Link>
            <Link to="/revisions" className="btn-secondary px-6">Je veux réviser</Link>
          </Reveal>
          <Reveal delay={0.75} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">Accès direct</span>
            {QUICK_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="group inline-flex items-center gap-1.5 font-medium text-ink-900">
                <span className="link-draw">{link.label}</span>
                <ArrowUpRight size={14} className="text-ink-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-900" />
              </Link>
            ))}
          </Reveal>

          <Reveal delay={0.85} className="mt-12 max-w-xl">
            <dl className="grid grid-cols-3 border-t border-ink-900/15">
              {[
                ['chapters', 'chapitres au programme'],
                ['written', 'cours et parties rédigés'],
                ['quizzes', 'QCM autocorrigés'],
              ].map(([key, label], index) => (
                <div key={key} className={`pt-5 ${index ? 'border-l border-ink-900/10 pl-5' : 'pr-5'}`}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display text-4xl font-[450] leading-none tracking-tight text-ink-900 sm:text-5xl">
                    {stats ? <Counter value={stats[key]} /> : <span className="text-ink-300">—</span>}
                  </dd>
                  <dd aria-hidden="true" className="mt-2 text-[12.5px] leading-snug text-ink-600">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="relative lg:col-span-5">
          <div className="ruler-v absolute -left-7 top-6 hidden h-[70%] text-ink-900 lg:block" aria-hidden="true" />
          <Figure image={PHOTOS.hero} number={1} frameClassName="aspect-[4/5] shadow-lift" priority sizes="(min-width: 1024px) 40vw, 100vw" />
        </div>
      </div>
    </section>
  );
}

function TechniquesBand() {
  return (
    <section aria-label="Techniques abordées en Première — chaque technique ouvre son cours" className="border-y border-ink-900/10 bg-paper-50/70 py-4">
      <Marquee items={TECHNIQUES} itemClassName="font-display text-[1.6rem] font-[450] italic tracking-tight text-ink-800" />
    </section>
  );
}

function Paths() {
  return (
    <section className="relative overflow-hidden bg-night text-chalk">
      <div className="page relative py-20 md:py-24">
        <div className="grid gap-6 pb-10 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-8">
            <p className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-chalk/55">
              <span className="h-px w-6 bg-current" />Mode d’emploi
            </p>
            <h2 className="mt-4 font-display text-display-lg">
              Aujourd’hui, je veux<span className="font-[520] italic text-mint">…</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="text-[15px] leading-7 text-chalk/70 md:col-span-4">
            En classe comme à la maison : trois portes d’entrée, selon ce dont tu as besoin maintenant.
          </Reveal>
        </div>
        <Stagger className="grid gap-5 md:grid-cols-3">
          {PATHS.map((path) => (
            <StaggerItem key={path.to}>
              <Link to={path.to} className="group flex h-full flex-col overflow-hidden rounded-frame border border-chalk/10 bg-night-soft transition-[border-color,transform] duration-500 ease-lab hover:-translate-y-1 hover:border-chalk/30">
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-chalk/10">
                  <span className="absolute left-4 top-4 font-mono text-[11px] tracking-[0.16em] text-chalk/45">{path.number}</span>
                  <Pencil
                    drawing={path.drawing}
                    light
                    className="w-[60%] opacity-90 transition-transform duration-[1.2s] ease-lab group-hover:-rotate-1 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[1.75rem] font-[450] leading-tight tracking-tight">{path.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-7 text-chalk/70">{path.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mint">
                    <span className="link-draw">{path.label}</span>
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function GrowthCurve() {
  return (
    <svg viewBox="0 0 320 140" className="h-auto w-full text-ink-900" aria-hidden="true">
      <g stroke="currentColor" strokeOpacity="0.16" strokeWidth="0.75">
        {[20, 50, 80, 110].map((y) => <line key={y} x1="24" x2="312" y1={y} y2={y} />)}
      </g>
      <line x1="24" y1="8" x2="24" y2="124" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1" />
      <line x1="24" y1="124" x2="314" y2="124" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1" />
      <DrawPath
        d="M26 116 C 70 115, 92 112, 118 100 S 160 50, 196 32 S 260 22, 310 21"
        fill="none"
        className="stroke-biogy-600"
        strokeWidth="2"
        strokeLinecap="round"
        duration={2.4}
      />
      {[[60, 114], [104, 106], [140, 82], [172, 50], [214, 29], [262, 22], [300, 21]].map(([x, y], index) => (
        <motion.circle
          key={x}
          cx={x}
          cy={y}
          r="2.6"
          className="fill-paper stroke-biogy-600"
          strokeWidth="1.4"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.22, duration: 0.4 }}
        />
      ))}
      <text x="30" y="16" className="fill-current font-mono" fontSize="7" letterSpacing="1" opacity="0.7">LOG N</text>
      <text x="270" y="136" className="fill-current font-mono" fontSize="7" letterSpacing="1" opacity="0.7">TEMPS</text>
    </svg>
  );
}

function Beyond() {
  return (
    <section className="page py-20 md:py-24">
      <div className="grid gap-8 border-b border-ink-900/15 pb-10 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-7">
          <p className="eyebrow">Au-delà du cours</p>
          <h2 className="mt-4 font-display text-display-lg text-ink-900">
            La science <span className="accent-italic">en mouvement.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
          <GrowthCurve />
          <span className="mt-2 block font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-500">Courbe de croissance bactérienne</span>
        </Reveal>
      </div>
      <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
        {BEYOND.map((card) => (
          <StaggerItem key={card.to}>
            <Link to={card.to} className="card card-hover group block overflow-hidden">
              <FocusImage image={card.image} className="aspect-[16/11]" zoomOnHover parallax={0} sizes="(min-width: 768px) 33vw, 100vw" />
              <div className="p-6">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">{card.eyebrow}</span>
                <h3 className="mt-3 font-display text-[1.6rem] font-[450] leading-tight tracking-tight text-ink-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-700">{card.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                  <span className="link-draw">Ouvrir</span>
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

export default function Homepage() {
  return (
    <>
      <Hero />
      <TechniquesBand />
      <div className="page pt-10 empty:hidden"><StudyDashboard /></div>
      <Paths />
      <Beyond />
    </>
  );
}
