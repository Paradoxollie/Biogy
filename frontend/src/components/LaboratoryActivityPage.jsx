import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ExternalLink, Lock, Send, UserRound } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getLaboratoryActivity } from '../data/laboratoryActivities';
import PageHero from './ui/PageHero';
import { Reveal, Stagger, StaggerItem } from './ui/motion';
import { PHOTOS } from '../data/visuals';

function LaboratoryActivityPage() {
  const { activityId } = useParams();
  const activity = getLaboratoryActivity(activityId);
  const { userInfo } = useAuth();

  if (!activity) {
    return <Navigate to="/laboratoire" replace />;
  }

  const facts = [
    [Lock, 'Mode professeur', 'Les aides pédagogiques et corrections sont réservées au compte professeur, après vérification de ses droits.'],
    [Send, 'Remise de copie', 'La séance est utilisable sans compte. La connexion est demandée au moment d’envoyer la copie.'],
    [UserRound, 'État de session', userInfo ? `Connecté en tant que ${userInfo.username}.` : 'Non connecté pour le moment.'],
  ];

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Laboratoire', to: '/laboratoire' }, { label: activity.code }]}
        eyebrow={`${activity.code} · ${activity.level}`}
        title={activity.title}
        lead={activity.summary}
        image={PHOTOS.metrologie}
        figureNumber={4}
        actions={(
          <>
            <a href={activity.launchPath} className="btn-primary px-6">Ouvrir la séance <ExternalLink size={15} /></a>
            {!userInfo && (
              <Link to={`/login?redirect=${encodeURIComponent(activity.launchPath)}`} className="btn-secondary px-6">
                Se connecter maintenant
              </Link>
            )}
          </>
        )}
      />

      <div className="page">
        <Stagger className="mt-12 grid gap-px overflow-hidden rounded-frame border border-surface-line bg-surface-line md:grid-cols-3">
          {facts.map(([Icon, title, text]) => (
            <StaggerItem key={title} className="bg-paper-50 p-6">
              <Icon size={18} strokeWidth={1.6} className="text-biogy-700" />
              <h2 className="mt-3 font-display text-xl text-ink-900">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-600">{text}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <section className="mt-16 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Objectifs</p>
            <h2 className="mt-4 font-display text-display-md">Ce que tu sauras faire à la fin de la séance.</h2>
          </Reveal>
          <Stagger as="ol" className="border-t border-ink-900/15 lg:col-span-8">
            {activity.objectives.map((objective, index) => (
              <StaggerItem as="li" key={objective} className="grid grid-cols-[3rem_1fr_auto] items-start gap-4 border-b border-ink-900/10 py-5">
                <span className="font-mono text-sm text-biogy-700">{String(index + 1).padStart(2, '0')}</span>
                <span className="font-display text-xl leading-snug text-ink-900">{objective}</span>
                <CheckCircle2 size={18} strokeWidth={1.5} className="mt-1 text-ink-300" />
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 rounded-frame bg-ink-900 p-8 text-paper md:flex-row md:items-center md:p-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/55">Prêt·e ?</p>
            <p className="mt-2 max-w-xl font-display text-[2rem] leading-tight">Ouvre la version interactive pour travailler en classe et envoyer ta copie à la fin.</p>
          </div>
          <a href={activity.launchPath} className="btn-light shrink-0 px-6">Lancer la séance <ArrowRight size={16} className="btn-arrow" /></a>
        </Reveal>
      </div>
    </>
  );
}

export default LaboratoryActivityPage;
