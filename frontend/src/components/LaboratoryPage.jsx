import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock3, FlaskConical, Save, Send, ShieldCheck } from 'lucide-react';
import { getLaboratoryActivities } from '../data/laboratoryActivities';

export default function LaboratoryPage() {
  const activities = getLaboratoryActivities();
  return <div className="page py-10 md:py-14"><header className="max-w-2xl"><p className="section-eyebrow">Laboratoire</p><h1 className="mt-3 font-display text-3xl md:text-display-lg">De la paillasse<br /><span className="text-biogy-700">au compte rendu.</span></h1><p className="mt-4 leading-relaxed text-ink-600">Prépare tes manipulations, consigne tes observations et construis ta conclusion. Retrouve ici les séances à réaliser avec ton enseignante.</p></header>
    <div className="mt-8 grid gap-3 sm:grid-cols-3">{[
      [Save, 'Un brouillon sur cet appareil', 'Tes réponses sont sauvegardées dans ce navigateur. Pense aussi à les exporter.'],
      [Send, 'Une copie à remettre', 'Travaille sans compte, puis connecte-toi pour envoyer ton travail.'],
      [ShieldCheck, 'Des corrections réservées', 'Le compte professeur permet d’accéder aux aides et aux corrections.'],
    ].map(([Icon, title, text]) => <div key={title} className="flex gap-3 rounded-card border border-surface-line bg-surface p-4"><Icon size={19} className="mt-0.5 shrink-0 text-biogy-700" /><div><h2 className="text-sm font-semibold">{title}</h2><p className="mt-1.5 text-xs leading-5 text-ink-600">{text}</p></div></div>)}</div>
    <div className="mb-5 mt-10 flex items-center justify-between"><h2 className="font-display text-2xl">Les séances disponibles</h2><span className="pill-neutral">{activities.length} séance{activities.length > 1 ? 's' : ''}</span></div>
    <div className="grid gap-5">{activities.map((activity) => <article key={activity.id} className="card grid overflow-hidden md:grid-cols-[220px_minmax(0,1fr)]"><div className="paper-grid flex flex-col justify-between gap-6 border-b border-surface-line bg-biogy-50 p-7 md:border-b-0 md:border-r"><span className="font-mono text-sm text-biogy-700">{activity.code}</span><FlaskConical size={64} strokeWidth={1} className="text-biogy-700" /><p className="font-display text-xl text-biogy-900">Observer.<br />Mesurer.<br />Conclure.</p></div><div className="p-6 sm:p-8"><div className="flex flex-wrap gap-3"><span className="pill-biogy">Première STL</span><span className="inline-flex items-center gap-1.5 text-xs text-ink-500"><Clock3 size={14} />{activity.duration}</span></div><h3 className="mt-4 font-display text-2xl">{activity.title}</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-ink-600">{activity.summary}</p><div className="mt-6 flex flex-wrap gap-3"><a href={activity.launchPath} className="btn-primary">Ouvrir la séance <ArrowRight size={17} /></a><Link to={`/laboratoire/${activity.id}`} className="btn-secondary">Objectifs & préparation</Link></div></div></article>)}</div><p className="mt-6 text-sm leading-6 text-ink-500">Au laboratoire, suis toujours les consignes de sécurité et les indications de ton enseignante.</p>
  </div>;
}
