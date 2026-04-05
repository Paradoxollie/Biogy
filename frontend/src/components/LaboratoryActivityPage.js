import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CheckCircle2, ExternalLink, Lock, Send } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getLaboratoryActivity } from '../data/laboratoryActivities';

function LaboratoryActivityPage() {
  const { activityId } = useParams();
  const activity = getLaboratoryActivity(activityId);
  const { userInfo } = useAuth();

  if (!activity) {
    return <Navigate to="/laboratoire" replace />;
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 pb-16 pt-8">
      <nav className="mb-6 text-sm text-gray-500">
        <Link to="/laboratoire" className="hover:underline">
          Laboratoire
        </Link>
        <span className="px-2">/</span>
        <span className="font-semibold text-gray-700">{activity.code}</span>
      </nav>

      <section className="rounded-[2rem] border border-gray-200 bg-white px-6 py-8 shadow-xl lg:px-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-lab-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-lab-teal">
            {activity.code}
          </span>
          <span className="rounded-full bg-lab-blue/10 px-3 py-1 text-xs font-semibold text-lab-blue">
            {activity.level}
          </span>
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
            {activity.format}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-bold text-gray-900 lg:text-4xl">{activity.title}</h1>
        <p className="mt-4 text-base leading-8 text-gray-600">{activity.summary}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-gray-200 bg-gray-50/70 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
              <Lock size={16} className="text-amber-600" />
              Mode professeur
            </div>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Les aides pédagogiques et corrections restent masquées tant que le mot de passe professeur n a pas été saisi.
            </p>
          </article>

          <article className="rounded-3xl border border-gray-200 bg-gray-50/70 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
              <Send size={16} className="text-lab-teal" />
              Remise de copie
            </div>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              La séance est utilisable sans compte. La connexion n est demandée qu au moment d envoyer la copie.
            </p>
          </article>

          <article className="rounded-3xl border border-gray-200 bg-gray-50/70 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
              <CheckCircle2 size={16} className="text-lab-blue" />
              État de session
            </div>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              {userInfo ? `Connecté en tant que ${userInfo.username}.` : 'Non connecté pour le moment.'}
            </p>
          </article>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">Objectifs de la séance</h2>
          <ul className="mt-5 space-y-3">
            {activity.objectives.map((objective) => (
              <li key={objective} className="flex gap-3 rounded-2xl border border-gray-100 bg-gray-50/70 px-4 py-3 text-sm leading-7 text-gray-700">
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-lab-teal" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </article>

        <aside className="rounded-[2rem] border border-gray-200 bg-[linear-gradient(180deg,_rgba(59,130,246,0.08),_rgba(20,184,166,0.06))] p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900">Lancer la séance</h2>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            Ouvre la version interactive complète pour travailler en classe, sauvegarder ta progression et envoyer la copie à la fin.
          </p>
          <a
            href={activity.launchPath}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-lab-teal px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-lab-teal/90"
          >
            Ouvrir la séance
            <ExternalLink size={16} />
          </a>
          <Link
            to={`/login?redirect=${encodeURIComponent(activity.launchPath)}`}
            className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-lab-blue/30 hover:text-lab-blue"
          >
            Se connecter maintenant
          </Link>
        </aside>
      </section>
    </div>
  );
}

export default LaboratoryActivityPage;
