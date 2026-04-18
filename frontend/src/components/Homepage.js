import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Homepage — STL biotechnologie
 * Design goals:
 *  - clean, printable, classroom-friendly (30 students loading at once must be fast)
 *  - unified with the rest of the site via the design tokens in tailwind.config.js
 *  - no rainbow gradients, no endless animations, no canvas background
 *  - editorial lab-schema feel (microscope / petri / erlenmeyer / molecule) via
 *    static SVG illustrations — not orbiting atoms or handwritten scribbles.
 */

// -----------------------------------------------------------------------------
// Illustrations — editorial SVG schematics in biogy/ink tones
// -----------------------------------------------------------------------------

/**
 * LabScene — large composed scene for the hero.
 * Shows a microscope, a Petri dish with colonies, an Erlenmeyer with a growth
 * curve and a small molecule, all connected by light guide lines with tiny
 * labels. Rendered on the dark ink-900 hero background.
 */
function LabScene() {
  return (
    <svg
      viewBox="0 0 520 420"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration : microscope, boîte de Petri, erlenmeyer et molécule"
    >
      <defs>
        <pattern id="hero-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="520" height="420" fill="url(#hero-grid)" />

      {/* ----- Petri dish (center piece) ----- */}
      <g transform="translate(260,230)">
        <circle r="112" fill="rgba(20,166,118,0.08)" stroke="rgba(107,218,180,0.5)" strokeWidth="1.5" />
        <circle r="96"  fill="rgba(20,166,118,0.12)" stroke="rgba(107,218,180,0.7)" strokeWidth="1.5" />
        {/* colonies */}
        <circle cx="-34" cy="-18" r="14" fill="#14a676" opacity="0.85" />
        <circle cx="-10" cy="-50" r="8"  fill="#14a676" opacity="0.70" />
        <circle cx="28"  cy="-12" r="10" fill="#14a676" opacity="0.80" />
        <circle cx="-48" cy="34"  r="6"  fill="#14a676" opacity="0.60" />
        <circle cx="4"   cy="30"  r="16" fill="#14a676" opacity="0.90" />
        <circle cx="42"  cy="42"  r="7"  fill="#14a676" opacity="0.65" />
        <circle cx="-24" cy="64"  r="5"  fill="#14a676" opacity="0.55" />
        {/* faint dashed growth ring */}
        <circle r="72" fill="none" stroke="rgba(107,218,180,0.35)" strokeWidth="1" strokeDasharray="3 5" />
      </g>

      {/* label for petri */}
      <g fontSize="10" fill="rgba(159,177,198,0.85)" fontFamily="monospace">
        <line x1="360" y1="190" x2="420" y2="140" stroke="rgba(159,177,198,0.35)" strokeWidth="1" strokeDasharray="2 3" />
        <text x="424" y="140">PETRI · COLONIES</text>
        <line x1="220" y1="300" x2="150" y2="340" stroke="rgba(159,177,198,0.35)" strokeWidth="1" strokeDasharray="2 3" />
        <text x="40" y="346">FRONT DE CROISSANCE</text>
      </g>

      {/* ----- Microscope (top-left) ----- */}
      <g transform="translate(56,60)" stroke="rgba(107,218,180,0.85)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="0"  y="84"  width="86" height="10" rx="3" fill="rgba(20,166,118,0.12)" />
        <rect x="30" y="32"  width="18" height="52" fill="rgba(20,166,118,0.08)" />
        <path d="M48 20 C68 20 78 32 78 48 L78 66" />
        <rect x="70" y="8"   width="18" height="14" rx="3" fill="rgba(20,166,118,0.15)" />
        <rect x="74" y="22"  width="10" height="12" rx="2" fill="rgba(20,166,118,0.25)" />
        <line x1="14" y1="56" x2="30" y2="56" />
        <line x1="18" y1="74" x2="30" y2="74" />
        <rect x="22" y="94"  width="44" height="4"  rx="1.5" fill="rgba(107,218,180,0.45)" stroke="none" />
      </g>
      <g fontSize="10" fill="rgba(159,177,198,0.75)" fontFamily="monospace">
        <text x="28" y="180">MICROSCOPE · 40X</text>
      </g>

      {/* ----- Erlenmeyer (top-right) ----- */}
      <g transform="translate(380,60)" stroke="rgba(107,218,180,0.85)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8 L58 8 L58 36 L86 96 C88 106 82 114 72 114 L8 114 C-2 114 -8 106 -6 96 L22 36 Z" fill="rgba(20,166,118,0.08)" />
        <line x1="22" y1="8" x2="58" y2="8" strokeWidth="2" />
        <line x1="0"  y1="96" x2="80" y2="96" stroke="rgba(107,218,180,0.5)" strokeWidth="1" />
        <path d="M2 96 L80 96 L80 108 L2 108 Z" fill="rgba(20,166,118,0.22)" stroke="none" />
      </g>
      <g fontSize="10" fill="rgba(159,177,198,0.75)" fontFamily="monospace">
        <text x="394" y="196">ERLENMEYER · CULTURE</text>
      </g>

      {/* ----- Growth curve (bottom-right) ----- */}
      <g transform="translate(376,294)">
        <rect x="0" y="0" width="122" height="84" rx="6" fill="rgba(16,26,41,0.6)" stroke="rgba(159,177,198,0.25)" />
        <line x1="12" y1="72" x2="114" y2="72" stroke="rgba(159,177,198,0.5)" strokeWidth="1" />
        <line x1="12" y1="12" x2="12"  y2="72" stroke="rgba(159,177,198,0.5)" strokeWidth="1" />
        <polyline points="14,66 30,62 46,54 62,40 80,26 98,20 114,18" fill="none" stroke="#6bdab4" strokeWidth="1.8" />
        <circle cx="62" cy="40" r="2.2" fill="#14a676" />
        <text x="16" y="90" fontSize="9" fontFamily="monospace" fill="rgba(159,177,198,0.8)">CROISSANCE · t</text>
      </g>

      {/* ----- Molecule (bottom-left) ----- */}
      <g transform="translate(48,280)" stroke="rgba(107,218,180,0.85)" strokeWidth="1.5" fill="none">
        <polygon points="40,10 72,28 72,62 40,80 8,62 8,28" fill="rgba(20,166,118,0.08)" />
        <circle cx="40" cy="10" r="4" fill="#6bdab4" stroke="none" />
        <circle cx="72" cy="28" r="4" fill="#6bdab4" stroke="none" />
        <circle cx="72" cy="62" r="4" fill="#6bdab4" stroke="none" />
        <circle cx="40" cy="80" r="4" fill="#6bdab4" stroke="none" />
        <circle cx="8"  cy="62" r="4" fill="#6bdab4" stroke="none" />
        <circle cx="8"  cy="28" r="4" fill="#6bdab4" stroke="none" />
        <line x1="40" y1="10" x2="96" y2="-8" />
        <circle cx="98" cy="-10" r="3" fill="#6bdab4" stroke="none" />
        <line x1="72" y1="62" x2="108" y2="78" />
        <circle cx="110" cy="80" r="3" fill="#6bdab4" stroke="none" />
      </g>
      <g fontSize="10" fill="rgba(159,177,198,0.75)" fontFamily="monospace">
        <text x="44" y="388">MOLÉCULE · C₆H₁₂O₆</text>
      </g>
    </svg>
  );
}

/** Small static schematic illustrations for the "Sur la paillasse" strip */
function IconMicroscope() {
  return (
    <svg viewBox="0 0 100 100" className="h-16 w-16" role="img" aria-label="Microscope" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="22" y="76" width="56" height="8" rx="2" />
      <rect x="40" y="34" width="14" height="42" />
      <path d="M54 22 C70 22 78 34 78 48 L78 60" />
      <rect x="70" y="8" width="16" height="14" rx="3" />
      <rect x="74" y="22" width="8" height="10" rx="2" fill="currentColor" opacity="0.15" />
      <line x1="28" y1="52" x2="40" y2="52" />
      <line x1="30" y1="66" x2="40" y2="66" />
      <rect x="34" y="84" width="32" height="4" rx="1.5" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

function IconPetri() {
  return (
    <svg viewBox="0 0 100 100" className="h-16 w-16" role="img" aria-label="Boîte de Petri" fill="none" stroke="currentColor" strokeWidth="1.8">
      <ellipse cx="50" cy="58" rx="38" ry="10" />
      <ellipse cx="50" cy="52" rx="38" ry="10" fill="currentColor" opacity="0.08" />
      <circle cx="42" cy="48" r="5"  fill="currentColor" opacity="0.6" stroke="none" />
      <circle cx="56" cy="54" r="3"  fill="currentColor" opacity="0.5" stroke="none" />
      <circle cx="62" cy="46" r="4"  fill="currentColor" opacity="0.55" stroke="none" />
      <circle cx="36" cy="56" r="2"  fill="currentColor" opacity="0.45" stroke="none" />
      <circle cx="50" cy="44" r="2.5" fill="currentColor" opacity="0.5"  stroke="none" />
    </svg>
  );
}

function IconErlenmeyer() {
  return (
    <svg viewBox="0 0 100 100" className="h-16 w-16" role="img" aria-label="Erlenmeyer" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M36 12 H64" strokeWidth="2.4" />
      <path d="M40 12 V38 L18 76 C16 84 22 90 30 90 H70 C78 90 84 84 82 76 L60 38 V12 Z" />
      <path d="M20 70 H80" stroke="currentColor" opacity="0.4" />
      <path d="M22 72 L78 72 L80 82 L20 82 Z" fill="currentColor" opacity="0.18" stroke="none" />
      <circle cx="44" cy="76" r="1.5" fill="currentColor" opacity="0.5" stroke="none" />
      <circle cx="56" cy="80" r="1.5" fill="currentColor" opacity="0.5" stroke="none" />
      <circle cx="64" cy="72" r="1.5" fill="currentColor" opacity="0.5" stroke="none" />
    </svg>
  );
}

function IconMolecule() {
  return (
    <svg viewBox="0 0 100 100" className="h-16 w-16" role="img" aria-label="Molécule" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polygon points="50,18 78,34 78,66 50,82 22,66 22,34" fill="currentColor" opacity="0.08" />
      <circle cx="50" cy="18" r="4.5" fill="currentColor" stroke="none" />
      <circle cx="78" cy="34" r="4.5" fill="currentColor" stroke="none" />
      <circle cx="78" cy="66" r="4.5" fill="currentColor" stroke="none" />
      <circle cx="50" cy="82" r="4.5" fill="currentColor" stroke="none" />
      <circle cx="22" cy="66" r="4.5" fill="currentColor" stroke="none" />
      <circle cx="22" cy="34" r="4.5" fill="currentColor" stroke="none" />
      <line x1="50" y1="18" x2="90" y2="8" />
      <circle cx="92" cy="6"  r="3" fill="currentColor" stroke="none" />
      <line x1="78" y1="66" x2="94" y2="78" />
      <circle cx="96" cy="80" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

// -----------------------------------------------------------------------------
// Content data
// -----------------------------------------------------------------------------

const PARCOURS = [
  {
    eyebrow: 'Apprendre',
    title: 'Cours de Première et de Terminale',
    description:
      "Les chapitres du programme STL Biotechnologie, organisés en livres. Objectifs, notions-clés, schémas et activités guidées pour travailler en autonomie ou en classe.",
    href: '/apprendre',
    cta: 'Ouvrir les cours',
    accent: 'biogy',
    Icon: () => (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 10h14c2 0 4 1 4 4v26c0-2-2-4-4-4H8V10z" />
        <path d="M40 10H26c-2 0-4 1-4 4v26c0-2 2-4 4-4h14V10z" />
      </svg>
    ),
  },
  {
    eyebrow: 'Laboratoire',
    title: 'Séances de travaux pratiques',
    description:
      "Les séances prêtes pour la paillasse : protocoles, consignes de sécurité, documents élèves, et remise de compte-rendu en ligne.",
    href: '/laboratoire',
    cta: 'Entrer au laboratoire',
    accent: 'ink',
    Icon: () => (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 6h12" />
        <path d="M20 6v12L10 36c-1.5 3 .5 6 4 6h20c3.5 0 5.5-3 4-6L28 18V6" />
        <path d="M14 30h20" />
      </svg>
    ),
  },
  {
    eyebrow: 'Veille',
    title: 'Actualités scientifiques',
    description:
      "Les publications francophones sur les biotechnologies (santé, agro, marine, environnement, industrie) rassemblées et filtrées pour la classe.",
    href: '/actualites',
    cta: 'Voir la veille',
    accent: 'accent',
    Icon: () => (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="24" cy="24" r="3" fill="currentColor" />
        <path d="M16 16a11.3 11.3 0 000 16M32 16a11.3 11.3 0 010 16" />
        <path d="M10 10a20 20 0 000 28M38 10a20 20 0 010 28" />
      </svg>
    ),
  },
];

const KPIS = [
  { value: '2',   label: 'Niveaux — Première & Terminale' },
  { value: '5',   label: 'Familles de biotechnologies' },
  { value: '30+', label: 'Chapitres couverts' },
  { value: 'TP',  label: 'Protocoles prêts pour la paillasse' },
];

const LAB_TOOLS = [
  {
    Icon: IconMicroscope,
    title: 'Observer',
    text: 'Microscope, loupe binoculaire, coloration : tout ce qu\'il faut pour décrire une cellule ou une colonie.',
  },
  {
    Icon: IconPetri,
    title: 'Cultiver',
    text: 'Ensemencement, gélose, incubation : isoler une souche et la faire pousser en milieu contrôlé.',
  },
  {
    Icon: IconErlenmeyer,
    title: 'Doser',
    text: 'Pesée, dilution, dosage : préparer une solution et suivre une grandeur tout au long d\'une expérience.',
  },
  {
    Icon: IconMolecule,
    title: 'Comprendre',
    text: 'Structures, voies métaboliques, enzymes : relier la manipulation aux mécanismes moléculaires.',
  },
];

const accentMap = {
  biogy: { pill: 'pill-biogy',   border: 'border-biogy-200',   iconBg: 'bg-biogy-50 text-biogy-700',   cta: 'text-biogy-700 hover:text-biogy-800' },
  ink:   { pill: 'pill-ink',     border: 'border-surface-line', iconBg: 'bg-ink-50 text-ink-700',       cta: 'text-ink-700 hover:text-ink-900'   },
  accent:{ pill: 'pill-accent',  border: 'border-accent-200',  iconBg: 'bg-accent-50 text-accent-700', cta: 'text-accent-700 hover:text-accent-800' },
};

// -----------------------------------------------------------------------------
// Sections
// -----------------------------------------------------------------------------

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      <div className="absolute inset-0 paper-grid opacity-[0.06]" aria-hidden="true" />
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-biogy-600/15 blur-3xl" aria-hidden="true" />
      <div className="page relative py-16 md:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_520px] lg:items-center">
          <div>
            <p className="section-eyebrow text-biogy-300">STL Biotechnologie</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-display-xl md:leading-[1.05]">
              La ressource de la classe : <span className="text-biogy-300">cours, paillasse et veille scientifique</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200">
              Un espace pensé pour les élèves de Première et Terminale STL et pour leurs enseignants —
              clair, rapide à ouvrir, utilisable en classe entière.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/apprendre"
                className="inline-flex items-center gap-2 rounded-card bg-biogy-500 px-5 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-biogy-600"
              >
                Commencer avec les cours
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M7.3 4.3l5.4 5.7-5.4 5.7-1.3-1.2 4.1-4.5L6 5.5z" />
                </svg>
              </Link>
              <Link
                to="/laboratoire"
                className="inline-flex items-center gap-2 rounded-card border border-white/25 bg-white/0 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Ouvrir le laboratoire
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block" aria-hidden="true">
            <div className="absolute -inset-4 rounded-card bg-gradient-to-br from-biogy-500/10 via-transparent to-biogy-500/5 blur-2xl" />
            <div className="relative rounded-card border border-white/10 bg-ink-800/40 p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-ink-300">
                <span>Planche d'observation</span>
                <span>Biogy · 01</span>
              </div>
              <div className="mt-3">
                <LabScene />
              </div>
            </div>
          </div>

          {/* Mobile/tablet: a compact version shown below the CTA */}
          <div className="relative lg:hidden" aria-hidden="true">
            <div className="rounded-card border border-white/10 bg-ink-800/40 p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-ink-300">
                <span>Planche d'observation</span>
                <span>Biogy · 01</span>
              </div>
              <div className="mt-3 max-w-md">
                <LabScene />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Kpis() {
  return (
    <section className="-mt-10 md:-mt-14 relative z-10">
      <div className="page">
        <dl className="card grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-surface-line overflow-hidden">
          {KPIS.map((k) => (
            <div key={k.label} className="p-5">
              <dt className="text-xs uppercase tracking-[0.16em] text-ink-500">{k.label.split(' — ')[0]}</dt>
              <dd className="mt-1 font-display text-3xl text-ink-900">{k.value}</dd>
              <p className="mt-1 text-xs text-ink-500">{k.label.includes(' — ') ? k.label.split(' — ')[1] : ''}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Parcours() {
  return (
    <section className="py-16 md:py-20">
      <div className="page">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Trois espaces pour travailler</p>
          <h2 className="mt-3 section-title font-display text-display-md">
            Cours, laboratoire, veille : chacun a sa place.
          </h2>
          <p className="mt-3 text-ink-600">
            Pas de mélange, pas de gadget : chaque élève sait où ouvrir le cours, où
            rendre un TP et où trouver une actualité pour illustrer un exposé.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PARCOURS.map((p) => {
            const a = accentMap[p.accent];
            return (
              <Link
                key={p.href}
                to={p.href}
                className={`group card p-6 transition-colors hover:border-biogy-200 hover:shadow-elevated ${a.border}`}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-card ${a.iconBg}`}>
                  <p.Icon />
                </div>
                <p className={`mt-5 ${a.pill}`}>{p.eyebrow}</p>
                <h3 className="mt-3 font-display text-xl leading-snug text-ink-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{p.description}</p>
                <span className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${a.cta}`}>
                  {p.cta}
                  <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="currentColor" aria-hidden="true">
                    <path d="M7.3 4.3l5.4 5.7-5.4 5.7-1.3-1.2 4.1-4.5L6 5.5z" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** New section — labeled lab-tool schematics reinforce the "laboratoire" identity. */
function LabTools() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="page">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Sur la paillasse</p>
          <h2 className="mt-3 section-title font-display text-display-md">
            Observer, cultiver, doser, comprendre.
          </h2>
          <p className="mt-3 text-ink-600">
            Quatre gestes structurent l'année. Chaque chapitre du cours revient à l'un d'eux
            et chaque TP en combine plusieurs.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LAB_TOOLS.map((tool) => (
            <li key={tool.title} className="card p-6 flex flex-col">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-card bg-biogy-50 text-biogy-700">
                <tool.Icon />
              </div>
              <h3 className="mt-5 font-display text-lg text-ink-900">{tool.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{tool.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Biotechs() {
  const families = [
    { key: 'red',    name: 'Rouges',   subtitle: 'Santé & médecine',     color: 'bg-biotech-red' },
    { key: 'green',  name: 'Vertes',   subtitle: 'Agronomie & végétal',  color: 'bg-biotech-green' },
    { key: 'blue',   name: 'Bleues',   subtitle: 'Milieu marin',         color: 'bg-biotech-blue' },
    { key: 'yellow', name: 'Jaunes',   subtitle: 'Environnement & eau',  color: 'bg-biotech-yellow' },
    { key: 'white',  name: 'Blanches', subtitle: 'Industrie & procédés', color: 'bg-biotech-white' },
  ];

  return (
    <section className="pb-16 md:pb-20">
      <div className="page">
        <div className="card p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Les cinq familles</p>
              <h2 className="mt-3 section-title font-display text-display-md">
                Un code couleur officiel, pas décoratif.
              </h2>
              <p className="mt-3 text-ink-600">
                Les biotechnologies sont traditionnellement classées en cinq couleurs. Sur le site,
                ce code sert uniquement à signaler l'univers d'un article ou d'un TP — il n'est jamais utilisé
                comme décoration visuelle.
              </p>
            </div>
            <Link to="/actualites" className="btn-secondary self-start md:self-auto">
              Voir les actualités
            </Link>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {families.map((f) => (
              <li key={f.key} className="card-flat flex items-center gap-3 p-4">
                <span className={`h-9 w-9 shrink-0 rounded-full ${f.color}`} aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink-900">{f.name}</p>
                  <p className="text-xs text-ink-500">{f.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ForTeachers() {
  return (
    <section className="pb-20">
      <div className="page">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card p-6 md:p-8">
            <p className="section-eyebrow text-biogy-700">Pour la classe</p>
            <h2 className="mt-3 font-display text-2xl text-ink-900">
              Un site pensé pour 30 élèves connectés en même temps
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              Pages légères, chargement progressif, pas d'animation permanente :
              Biogy est utilisable sur les ordinateurs scolaires et en wifi de lycée.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-700">
              <li className="flex gap-2">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-biogy-600" fill="currentColor"><path d="M8.5 13.3L5.2 10l-1.4 1.4L8.5 16l8-8-1.4-1.4z" /></svg>
                Accès aux cours sans compte
              </li>
              <li className="flex gap-2">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-biogy-600" fill="currentColor"><path d="M8.5 13.3L5.2 10l-1.4 1.4L8.5 16l8-8-1.4-1.4z" /></svg>
                Remise de TP en ligne et correction par le professeur
              </li>
              <li className="flex gap-2">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-biogy-600" fill="currentColor"><path d="M8.5 13.3L5.2 10l-1.4 1.4L8.5 16l8-8-1.4-1.4z" /></svg>
                Mode responsive, utilisable sur smartphone en laboratoire
              </li>
            </ul>
          </div>

          <div className="card p-6 md:p-8 bg-ink-900 text-white border-ink-900">
            <p className="section-eyebrow text-biogy-300">Projets des élèves</p>
            <h2 className="mt-3 font-display text-2xl">Partagez le travail de la classe</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              Les élèves peuvent publier leurs comptes-rendus, expositions ou expériences
              dans la galerie pour valoriser le travail fait ensemble.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/projets" className="inline-flex items-center gap-2 rounded-card bg-white px-4 py-2.5 text-sm font-semibold text-ink-900 hover:bg-ink-100">
                Voir la galerie
              </Link>
              <Link to="/partager-projet" className="inline-flex items-center gap-2 rounded-card border border-white/25 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                Partager un projet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Homepage() {
  return (
    <>
      <Hero />
      <Kpis />
      <Parcours />
      <LabTools />
      <Biotechs />
      <ForTeachers />
    </>
  );
}
