import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Homepage — STL biotechnologie
 * Design goals:
 *  - clean, printable, classroom-friendly (30 students loading at once must be fast)
 *  - unified with the rest of the site via the design tokens in tailwind.config.js
 *  - no rainbow gradients, no endless animations, no canvas background
 *  - real information hierarchy: hero → 3 parcours → semaine → repères
 */

const PARCOURS = [
  {
    eyebrow: 'Apprendre',
    title: 'Cours de Première et de Terminale',
    description:
      "Les chapitres du programme STL Biotechnologie, organisés en livres. Objectifs, notions-clés, schémas et activités guidées pour travailler en autonomie ou en classe.",
    href: '/apprendre',
    cta: 'Ouvrir les cours',
    accent: 'biogy',
    // iconography: a book
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
    // iconography: flask
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
    // iconography: signal / broadcast
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
  { value: '2',    label: 'Niveaux — Première & Terminale' },
  { value: '5',    label: 'Familles de biotechnologies' },
  { value: '30+',  label: 'Chapitres couverts' },
  { value: 'TP',   label: 'Protocoles prêts pour la paillasse' },
];

const accentMap = {
  biogy: {
    pill:    'pill-biogy',
    border:  'border-biogy-200',
    iconBg:  'bg-biogy-50 text-biogy-700',
    cta:     'text-biogy-700 hover:text-biogy-800',
  },
  ink: {
    pill:    'pill-ink',
    border:  'border-surface-line',
    iconBg:  'bg-ink-50 text-ink-700',
    cta:     'text-ink-700 hover:text-ink-900',
  },
  accent: {
    pill:    'pill-accent',
    border:  'border-accent-200',
    iconBg:  'bg-accent-50 text-accent-700',
    cta:     'text-accent-700 hover:text-accent-800',
  },
};

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      <div className="absolute inset-0 paper-grid opacity-[0.06]" aria-hidden="true" />
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-biogy-600/15 blur-3xl" aria-hidden="true" />
      <div className="page relative py-20 md:py-28">
        <p className="section-eyebrow text-biogy-300">STL Biotechnologie</p>
        <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-display-xl md:leading-[1.05] max-w-3xl">
          La ressource de la classe de biotechnologie : <span className="text-biogy-300">cours, paillasse et veille scientifique</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200">
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
                <h3 className="mt-3 font-display text-xl leading-snug text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {p.description}
                </p>
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

function Biotechs() {
  const families = [
    { key: 'red',    name: 'Rouges',  subtitle: 'Santé & médecine',     color: 'bg-biotech-red' },
    { key: 'green',  name: 'Vertes',  subtitle: 'Agronomie & végétal',  color: 'bg-biotech-green' },
    { key: 'blue',   name: 'Bleues',  subtitle: 'Milieu marin',         color: 'bg-biotech-blue' },
    { key: 'yellow', name: 'Jaunes',  subtitle: 'Environnement & eau',  color: 'bg-biotech-yellow' },
    { key: 'white',  name: 'Blanches',subtitle: 'Industrie & procédés', color: 'bg-biotech-white' },
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
            <h2 className="mt-3 font-display text-2xl">
              Partagez le travail de la classe
            </h2>
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
      <Biotechs />
      <ForTeachers />
    </>
  );
}
