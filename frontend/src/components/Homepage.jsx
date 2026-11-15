import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import StudyDashboard from './StudyDashboard';
import {
  Counter,
  DrawPath,
  EASE,
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

const TECHNIQUES = [
  'Pipetage de précision',
  'Isolement en quadrants',
  'Coloration de Gram',
  'Dénombrement en cellule de Malassez',
  'Spectrophotométrie',
  'Électrophorèse sur gel',
  'Chromatographie',
  'Dosage par titrage',
  'Dilutions en série',
  'Observation microscopique',
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
    text: 'Une séance guidée, des réponses gardées sur l’appareil et une copie à remettre à ton enseignante.',
    label: 'Ouvrir le laboratoire',
    to: '/laboratoire',
    drawing: PENCILS.pipette,
  },
];

const LEVELS = [
  {
    id: 'premiere',
    book: 'Livre 01',
    title: 'Première STL',
    text: 'Découvrir les biotechnologies, prévenir les risques, mesurer avec rigueur, cultiver et observer le vivant.',
    image: PHOTOS.premiere,
  },
  {
    id: 'terminale',
    book: 'Livre 02',
    title: 'Terminale STL',
    text: 'Approfondir les notions, interpréter des résultats, conduire le projet technologique et préparer le baccalauréat.',
    image: PHOTOS.terminale,
  },
];

const LAB_STEPS = [
  ['Préparer', 'Régler la pipette P1000, vérifier la balance et noter la température de l’eau.'],
  ['Mesurer', 'Réaliser une série de prises d’eau distillée et relever chaque masse.'],
  ['Exploiter', 'Calculer volumes, moyenne, écart-type : discuter justesse et fidélité.'],
  ['Conclure', 'Comparer aux tolérances et rédiger une conclusion sur la conformité.'],
];

function useCourseStats() {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    let active = true;
    import('../data/courseIndex').then(({ courseIndex }) => {
      if (!active) return;
      const chapters = new Set(courseIndex.map((item) => item.path.split('/').slice(0, 4).join('/')));
      const written = courseIndex.filter((item) => item.content).length;
      const documents = courseIndex.reduce((total, item) => total
        + (item.content?.diagrams?.length || 0)
        + (item.content?.questionSets || []).reduce((sum, set) => sum + (set.supports?.length || 0), 0), 0);
      setStats({ chapters: chapters.size, written, documents });
    }).catch(() => {});
    return () => { active = false; };
  }, []);
  return stats;
}

function Hero() {
  const stats = useCourseStats();
  return (
    <section className="relative overflow-hidden">
      <div className="page grid gap-12 pb-20 pt-8 md:pt-12 lg:grid-cols-12 lg:gap-12 lg:pb-28">
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
                { text: 'geste après geste.', className: 'italic text-biogy-700' },
              ]}
            />
          </h1>
          <Reveal delay={0.55} className="mt-8 max-w-xl text-lg leading-8 text-ink-600">
            Ton espace de biotechnologies, du cours à la paillasse. Retrouve une notion, prépare une séance
            de laboratoire ou prends dix minutes pour réviser.
          </Reveal>
          <Reveal delay={0.65} className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/apprendre" className="btn-primary px-6">
              Trouver mon cours <ArrowRight size={16} className="btn-arrow" />
            </Link>
            <Link to="/revisions" className="btn-secondary px-6">Je veux réviser</Link>
            <span className="ml-1 hidden text-xs text-ink-500 sm:inline">Cours et révisions ouverts sans compte.</span>
          </Reveal>

          <Reveal delay={0.8} className="mt-14 max-w-xl">
            <dl className="grid grid-cols-3 border-t border-ink-900/15">
              {[
                ['chapters', 'chapitres au programme'],
                ['written', 'cours et parties rédigés'],
                ['documents', 'documents et schémas'],
              ].map(([key, label], index) => (
                <div key={key} className={`pt-5 ${index ? 'border-l border-ink-900/10 pl-5' : 'pr-5'}`}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display text-4xl leading-none tracking-tight text-ink-900 sm:text-5xl">
                    {stats ? <Counter value={stats[key]} /> : <span className="text-ink-300">—</span>}
                  </dd>
                  <dd aria-hidden="true" className="mt-2 text-[12.5px] leading-snug text-ink-500">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="relative lg:col-span-5">
          <div className="ruler-v absolute -left-7 top-6 hidden h-[70%] text-ink-900 lg:block" aria-hidden="true" />
          <Figure image={PHOTOS.hero} number={1} frameClassName="aspect-[4/5] shadow-lift" priority sizes="(min-width: 1024px) 40vw, 100vw" />

          <motion.div
            initial={{ opacity: 0, y: 24, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: EASE }}
            className="absolute -left-4 bottom-28 hidden w-[270px] sm:block xl:-left-16"
          >
            <Link
              to="/laboratoire/at5-metrologie-pipettes"
              className="group block rounded-card border border-ink-900/10 bg-paper-50/95 p-4 shadow-lift backdrop-blur transition-transform duration-500 ease-lab hover:-translate-y-1"
            >
              <span className="flex items-center justify-between">
                <span className="tag">Séance · AT5</span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-biogy-700">
                  <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-biogy-500" /> Ouverte
                </span>
              </span>
              <span className="mt-3 block font-display text-xl leading-tight text-ink-900">Métrologie des pipettes</span>
              <span className="mt-1 flex items-center gap-1.5 text-[13px] text-ink-600">
                Préparer ma séance <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TechniquesBand() {
  return (
    <section aria-label="Techniques abordées" className="border-y border-ink-900/10 bg-paper-50/60 py-5">
      <Marquee
        items={TECHNIQUES}
        itemClassName="font-display text-[1.6rem] italic tracking-tight text-ink-700"
      />
    </section>
  );
}

function SectionHeader({ eyebrow, title, aside }) {
  return (
    <div className="grid gap-6 border-b border-ink-900/10 pb-8 md:grid-cols-12 md:items-end">
      <Reveal className="md:col-span-8">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 font-display text-display-lg text-ink-900">{title}</h2>
      </Reveal>
      {aside ? (
        <Reveal delay={0.1} className="text-[15px] leading-7 text-ink-600 md:col-span-4">{aside}</Reveal>
      ) : null}
    </div>
  );
}

function Paths() {
  return (
    <section className="page py-20 md:py-28">
      <SectionHeader
        eyebrow="Mode d’emploi"
        title={<>Aujourd’hui, je veux<span className="italic text-biogy-700">…</span></>}
        aside="En classe comme à la maison : trois portes d’entrée, selon ce dont tu as besoin maintenant."
      />
      <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
        {PATHS.map((path) => (
          <StaggerItem key={path.to}>
            <Link to={path.to} className="card card-hover group flex h-full flex-col overflow-hidden">
              <div className="paper-grid relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-surface-line bg-paper-50">
                <span className="absolute left-4 top-4 font-mono text-[11px] tracking-[0.16em] text-ink-400">{path.number}</span>
                <Pencil
                  drawing={path.drawing}
                  className="w-[62%] transition-transform duration-[1.2s] ease-lab group-hover:scale-[1.05] group-hover:-rotate-1"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-[1.7rem] leading-tight tracking-tight text-ink-900">{path.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-7 text-ink-600">{path.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900">
                  <span className="link-draw">{path.label}</span>
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function Levels() {
  return (
    <section className="page pb-20 md:pb-28">
      <SectionHeader
        eyebrow="Le programme"
        title={<>Deux années, <span className="italic">deux livres.</span></>}
        aside="Chaque livre est organisé en grands thèmes, puis en chapitres et en sous-parties. Les chapitres en préparation sont signalés."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {LEVELS.map((level, index) => (
          <Reveal key={level.id} delay={index * 0.12}>
            <Link to={`/apprendre/${level.id}`} className="group block">
              <FocusImage image={level.image} className="aspect-[16/10] rounded-frame" zoomOnHover sizes="(min-width: 768px) 50vw, 100vw" />
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">{level.book}</p>
                  <h3 className="mt-2 font-display text-[2.2rem] leading-none tracking-tight text-ink-900">
                    <span className="link-draw">{level.title}</span>
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-7 text-ink-600">{level.text}</p>
                </div>
                <span className="mt-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 transition-all duration-500 ease-lab group-hover:border-ink-900 group-hover:bg-ink-900 group-hover:text-paper">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <p className="figure-caption mt-4">Fig. {String(index + 2).padStart(2, '0')} — {level.image.caption}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function LabFeature() {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-paper">
      <div className="pointer-events-none absolute -right-24 -top-10 hidden w-[420px] opacity-60 lg:block" aria-hidden="true">
        <Pencil drawing={PENCILS.verrerie} light />
      </div>
      <div className="page relative grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <FocusImage image={PHOTOS.metrologie} className="aspect-[4/3] rounded-frame" sizes="(min-width: 1024px) 45vw, 100vw" />
          <p className="mt-3 flex gap-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-paper/50">
            <span className="shrink-0 whitespace-nowrap text-paper">Fig. 04</span> {PHOTOS.metrologie.caption}
          </p>
        </div>
        <div className="flex flex-col justify-center lg:col-span-6">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/55">
              <span className="h-px w-6 bg-current" />À la paillasse
            </p>
            <h2 className="mt-5 font-display text-display-lg">
              Un geste précis,<br /><span className="italic text-biogy-300">un résultat fiable.</span>
            </h2>
            <p className="mt-6 max-w-lg text-[16px] leading-8 text-paper/70">
              Séance AT5 de Première : contrôler une micropipette P1000 par pesée, exploiter les mesures et
              distinguer justesse et fidélité. Ton brouillon reste sur l’appareil, ta copie part chez ton enseignante.
            </p>
          </Reveal>
          <Stagger as="ol" className="mt-10 border-t border-paper/15">
            {LAB_STEPS.map(([title, text], index) => (
              <StaggerItem as="li" key={title} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-paper/15 py-5">
                <span className="font-mono text-sm text-biogy-300">{String(index + 1).padStart(2, '0')}</span>
                <span>
                  <span className="block font-display text-xl leading-tight">{title}</span>
                  <span className="mt-1 block text-sm leading-6 text-paper/60">{text}</span>
                </span>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
            <Link to="/laboratoire/at5-metrologie-pipettes" className="btn-light px-6">
              Préparer ma séance <ArrowRight size={16} className="btn-arrow" />
            </Link>
            <Link to="/laboratoire" className="btn-outline-light px-6">Toutes les séances</Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function GrowthCurve() {
  return (
    <svg viewBox="0 0 320 140" className="h-auto w-full text-ink-900" aria-hidden="true">
      <g stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.75">
        {[20, 50, 80, 110].map((y) => <line key={y} x1="24" x2="312" y1={y} y2={y} />)}
      </g>
      <line x1="24" y1="8" x2="24" y2="124" stroke="currentColor" strokeWidth="1" />
      <line x1="24" y1="124" x2="314" y2="124" stroke="currentColor" strokeWidth="1" />
      <DrawPath
        d="M26 116 C 70 115, 92 112, 118 100 S 160 50, 196 32 S 260 22, 310 21"
        fill="none"
        stroke="#17573d"
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
          fill="#f4f2ec"
          stroke="#17573d"
          strokeWidth="1.4"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.22, duration: 0.4 }}
        />
      ))}
      <text x="30" y="16" className="fill-current font-mono" fontSize="7" letterSpacing="1">LOG N</text>
      <text x="270" y="136" className="fill-current font-mono" fontSize="7" letterSpacing="1">TEMPS</text>
    </svg>
  );
}

function Community() {
  const cards = [
    {
      to: '/actualites',
      eyebrow: 'Veille scientifique',
      title: 'Le vivant fait l’actualité',
      text: 'Santé, environnement, industrie : des articles pour relier le cours au monde réel et nourrir tes exposés.',
      image: PHOTOS.veille,
    },
    {
      to: '/projets',
      eyebrow: 'Galerie de projets',
      title: 'Montrer sa démarche',
      text: 'Affiches, protocoles, résultats : découvre les projets de la classe et partage les tiens.',
      image: PHOTOS.projets,
    },
    {
      to: '/forum',
      eyebrow: 'Forum',
      title: 'Une question ? On en parle.',
      text: 'Échange avec la classe sur un point de cours, une méthode ou une manipulation.',
      image: PHOTOS.forum,
    },
  ];
  const [main, ...others] = cards;
  return (
    <section className="page py-20 md:py-28">
      <SectionHeader
        eyebrow="Au-delà du cours"
        title={<>La science <span className="italic">en mouvement.</span></>}
        aside={<span className="block max-w-xs"><GrowthCurve /><span className="mt-2 block font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-500">Courbe de croissance bactérienne</span></span>}
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <Link to={main.to} className="group relative block h-full overflow-hidden rounded-frame bg-ink-900 text-paper">
            <FocusImage image={main.image} className="absolute inset-0 h-full w-full" zoomOnHover parallax={0} sizes="(min-width: 1024px) 58vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/35 to-transparent" />
            <div className="relative flex min-h-[460px] flex-col justify-end p-7 md:p-10">
              <span className="tag-dark w-fit">{main.eyebrow}</span>
              <h3 className="mt-4 max-w-md font-display text-[2.4rem] leading-[1.02] tracking-tight">{main.title}</h3>
              <p className="mt-3 max-w-md text-[15px] leading-7 text-paper/75">{main.text}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                <span className="link-draw">Explorer la veille</span>
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>
        <div className="grid gap-6 lg:col-span-5">
          {others.map((card, index) => (
            <Reveal key={card.to} delay={0.1 + index * 0.1}>
              <Link to={card.to} className="card card-hover group grid h-full overflow-hidden sm:grid-cols-[44%_1fr]">
                <FocusImage image={card.image} className="aspect-[4/3] sm:aspect-auto sm:h-full" zoomOnHover parallax={0} sizes="(min-width: 1024px) 18vw, 100vw" />
                <div className="flex flex-col p-6">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">{card.eyebrow}</span>
                  <h3 className="mt-3 font-display text-[1.6rem] leading-tight tracking-tight text-ink-900">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-ink-600">{card.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                    <span className="link-draw">Ouvrir</span> <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
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
      <Levels />
      <LabFeature />
      <Community />
    </>
  );
}
