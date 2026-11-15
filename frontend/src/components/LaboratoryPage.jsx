import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Clock3 } from 'lucide-react';
import { getLaboratoryActivities } from '../data/laboratoryActivities';
import PageHero from './ui/PageHero';
import { Pencil, Reveal, Stagger, StaggerItem } from './ui/motion';
import { PENCILS, PHOTOS } from '../data/visuals';

const PRINCIPLES = [
  ['Un brouillon sur cet appareil', 'Tes réponses sont sauvegardées dans ce navigateur. Pense aussi à exporter ton travail.'],
  ['Une copie à remettre', 'Travaille sans compte, puis connecte-toi au moment d’envoyer ta copie.'],
  ['Des corrections réservées', 'Les aides et corrections sont accessibles uniquement avec le compte professeur.'],
];

export default function LaboratoryPage() {
  const activities = getLaboratoryActivities();
  return (
    <>
      <PageHero
        eyebrow="Laboratoire"
        title={[{ text: 'De la paillasse' }, { text: 'au compte rendu.', className: 'italic text-biogy-700' }]}
        lead="Prépare tes manipulations, consigne tes observations et construis ta conclusion. Retrouve ici les séances à réaliser avec ton enseignante."
        image={PHOTOS.metrologie}
        figureNumber={4}
        frameClassName="aspect-[4/3]"
      />

      <div className="page">
        <Stagger className="mt-12 grid gap-px overflow-hidden rounded-frame border border-surface-line bg-surface-line md:grid-cols-3">
          {PRINCIPLES.map(([title, text], index) => (
            <StaggerItem key={title} className="bg-paper-50 p-6">
              <span className="font-mono text-[11px] tracking-[0.16em] text-biogy-700">0{index + 1}</span>
              <h2 className="mt-3 font-display text-xl text-ink-900">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-600">{text}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-20 flex items-end justify-between gap-4 border-b border-ink-900/10 pb-5">
          <h2 className="font-display text-display-md">Les séances disponibles</h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
            {activities.length} séance{activities.length > 1 ? 's' : ''}
          </span>
        </Reveal>

        <div className="mt-8 grid gap-6">
          {activities.map((activity) => (
            <Reveal key={activity.id}>
              <article className="card grid overflow-hidden md:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
                <div className="paper-grid relative flex flex-col justify-between gap-6 border-b border-surface-line bg-paper-50 p-7 md:border-b-0 md:border-r">
                  <span className="tag w-fit">{activity.code} · Première</span>
                  <Pencil drawing={PENCILS.pipette} className="mx-auto w-[46%] md:w-[58%]" />
                  <p className="font-display text-xl italic leading-snug text-ink-700">Observer.<br />Mesurer.<br />Conclure.</p>
                </div>
                <div className="flex flex-col p-7 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="pill-biogy">{activity.level}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-ink-500"><Clock3 size={14} />{activity.duration}</span>
                  </div>
                  <h3 className="mt-5 font-display text-[2.4rem] leading-[1.05] tracking-tight">{activity.title}</h3>
                  <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-600">{activity.summary}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {activity.objectives.slice(0, 4).map((objective, index) => (
                      <li key={objective} className="flex gap-3 border-t border-ink-900/10 pt-3 text-sm leading-6 text-ink-700">
                        <span className="font-mono text-[11px] text-ink-400">0{index + 1}</span>{objective}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={activity.launchPath} className="btn-primary px-6">Ouvrir la séance <ArrowRight size={16} className="btn-arrow" /></a>
                    <Link to={`/laboratoire/${activity.id}`} className="btn-secondary px-6">Objectifs & préparation <ArrowUpRight size={15} /></Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
          <span className="h-px w-8 bg-current" />Au laboratoire, suis toujours les consignes de sécurité de ton enseignante.
        </p>
      </div>
    </>
  );
}
