import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BookOpen, FlaskConical, Layers3, Newspaper, MessageCircle, Clock3 } from 'lucide-react';
import StudyDashboard from './StudyDashboard';

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


const paths = [
  { number: '01', icon: BookOpen, title: 'Comprendre le cours', text: 'Les notions, les schémas et le travail guidé, organisés par niveau et par chapitre.', label: 'Explorer les cours', to: '/apprendre', tint: 'bg-biogy-50 text-biogy-700' },
  { number: '02', icon: Layers3, title: 'Réviser à mon rythme', text: 'Des cartes pour retrouver le vocabulaire et vérifier ce que tu as compris.', label: 'Commencer à réviser', to: '/revisions', tint: 'bg-accent-50 text-accent-700' },
  { number: '03', icon: FlaskConical, title: 'Travailler au labo', text: 'Une séance guidée, des réponses sauvegardées sur cet appareil et une copie à remettre.', label: 'Ouvrir le laboratoire', to: '/laboratoire', tint: 'bg-ink-50 text-ink-700' },
];

export default function Homepage() {
  return <>
    <section className="relative overflow-hidden bg-ink-900 text-white">
      <div className="page relative grid items-center gap-8 py-12 md:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-biogy-300"><span className="h-1.5 w-1.5 rounded-full bg-biogy-300" />Première & Terminale STL</p>
          <h1 className="mt-6 font-display text-[2.65rem] leading-[1.08] tracking-tight sm:text-display-xl">Comprendre le vivant.<br /><span className="text-biogy-300">Apprendre en pratiquant.</span></h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-ink-200">Ton espace de biotechnologies, du cours à la paillasse. Retrouve une notion, prépare une séance ou prends un moment pour réviser.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link to="/apprendre" className="btn bg-biogy-300 text-ink-900 hover:bg-biogy-200">Trouver mon cours <ArrowRight size={17} /></Link><Link to="/revisions" className="btn border border-white/25 text-white hover:bg-white/10">Je veux réviser</Link></div>
          <p className="mt-5 text-xs text-ink-300">Cours et révisions accessibles sans compte.</p>
        </div>
        <div className="relative hidden sm:block">
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.025] p-5"><div className="flex justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-ink-300"><span>Carnet d’observation</span><span>Biogy · STL</span></div><LabScene /><div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs text-ink-300"><span>Observer · Expérimenter · Comprendre</span><span className="h-1.5 w-1.5 rounded-full bg-biogy-300" /></div></div>
        </div>
      </div>
    </section>
    <div className="border-b border-surface-line bg-surface"><div className="page flex flex-wrap items-center gap-x-6 gap-y-3 py-4 text-sm"><span className="text-ink-500">Accès direct</span><Link className="inline-flex items-center gap-2 font-medium hover:text-biogy-700" to="/apprendre/premiere">Première STL <ArrowUpRight size={14} /></Link><Link className="inline-flex items-center gap-2 font-medium hover:text-biogy-700" to="/apprendre/terminale">Terminale STL <ArrowUpRight size={14} /></Link><Link className="inline-flex items-center gap-2 font-medium hover:text-biogy-700" to="/laboratoire">Séances de laboratoire <ArrowUpRight size={14} /></Link></div></div>
    <div className="page pt-8"><StudyDashboard /></div>
    <section className="page py-10 md:py-14">
      <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="section-eyebrow">À chaque moment, le bon outil</p><h2 className="section-title mt-3">Aujourd’hui, je veux…</h2></div><span className="text-sm text-ink-500">En classe comme à la maison</span></div>
      <div className="mt-7 grid gap-4 md:grid-cols-3">{paths.map(({ icon: Icon, ...item }) => <Link key={item.to} to={item.to} className="card group flex flex-col p-6 transition-colors hover:border-biogy-300"><div className="flex items-center justify-between"><span className={`inline-flex h-12 w-12 items-center justify-center rounded-card ${item.tint}`}><Icon size={23} strokeWidth={1.6} /></span><span className="font-mono text-xs text-ink-500">{item.number}</span></div><h3 className="mt-6 font-display text-2xl">{item.title}</h3><p className="mb-6 mt-3 flex-1 text-sm leading-6 text-ink-600">{item.text}</p><span className="inline-flex items-center gap-2 text-sm font-semibold text-biogy-700">{item.label}<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span></Link>)}</div>
    </section>
    <section className="page pb-14"><div className="grid overflow-hidden rounded-2xl border border-surface-line bg-surface md:grid-cols-[1fr_1.5fr]"><div className="paper-grid border-b border-surface-line bg-biogy-50 p-7 md:border-b-0 md:border-r md:p-9"><FlaskConical size={34} strokeWidth={1.4} className="text-biogy-700" /><p className="section-eyebrow mt-6 text-biogy-700">À la paillasse</p><h2 className="mt-3 font-display text-2xl">Un geste précis.<br />Un résultat fiable.</h2></div><div className="p-7 md:p-9"><div className="flex flex-wrap gap-2"><span className="pill-neutral">AT5 · Première STL</span><span className="inline-flex items-center gap-1.5 text-xs text-ink-500"><Clock3 size={14} />Une séance</span></div><h3 className="mt-4 font-display text-2xl">Métrologie des pipettes</h3><p className="mt-3 max-w-xl text-sm leading-6 text-ink-600">Contrôler une pipette P1000, exploiter les mesures et distinguer justesse et fidélité. Prépare la séance ou retrouve ton brouillon.</p><Link to="/laboratoire/at5-metrologie-pipettes" className="btn-primary mt-6">Préparer ma séance <ArrowRight size={16} /></Link></div></div></section>
    <section className="page pb-6"><div className="grid gap-6 md:grid-cols-2"><Link to="/actualites" className="card group flex items-start gap-4 p-6"><Newspaper size={25} className="mt-1 shrink-0 text-biogy-700" /><div><p className="section-eyebrow">La science en mouvement</p><h2 className="mt-2 font-display text-xl">Faire le lien avec l’actualité</h2><p className="mt-2 text-sm leading-6 text-ink-600">Santé, environnement, industrie… Des articles pour nourrir ta curiosité et tes exposés.</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-biogy-700">Explorer la veille <ArrowUpRight size={16} /></span></div></Link><Link to="/forum" className="card group flex items-start gap-4 p-6"><MessageCircle size={25} className="mt-1 shrink-0 text-biogy-700" /><div><p className="section-eyebrow">Apprendre ensemble</p><h2 className="mt-2 font-display text-xl">Une question, une idée à partager ?</h2><p className="mt-2 text-sm leading-6 text-ink-600">Échange avec la classe, pose une question sur le cours et partage tes méthodes.</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-biogy-700">Rejoindre le forum <ArrowUpRight size={16} /></span></div></Link></div></section>
  </>;
}
