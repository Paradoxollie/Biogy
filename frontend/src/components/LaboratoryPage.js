import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, LockKeyhole, Save, Send } from 'lucide-react';
import { getLaboratoryActivities } from '../data/laboratoryActivities';

const FEATURE_ITEMS = [
  {
    icon: Save,
    title: 'Travail continu',
    description: 'Les réponses sont sauvegardées dans le navigateur pendant toute la séance.',
  },
  {
    icon: LockKeyhole,
    title: 'Mode professeur protégé',
    description: 'Les corrections restent masquées tant que le mot de passe professeur n a pas été validé.',
  },
  {
    icon: Send,
    title: 'Remise encadrée',
    description: 'La connexion n est demandée qu au moment d envoyer la copie pour garantir l identité de l élève.',
  },
];

function LaboratoryPage() {
  const activities = getLaboratoryActivities();

  return (
    <div className="container mx-auto max-w-6xl px-4 pb-16 pt-8">
      <section className="overflow-hidden rounded-[2rem] border border-gray-200 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.14),_transparent_45%),linear-gradient(135deg,_#ffffff,_#f8fafc)] px-6 py-8 shadow-xl lg:px-10 lg:py-10">
        <p className="inline-flex rounded-full border border-lab-teal/20 bg-lab-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-lab-teal">
          Laboratoire
        </p>
        <h1 className="mt-5 max-w-3xl text-3xl font-bold text-gray-900 lg:text-4xl">
          Séances guidées pour le labo Biotechnologies
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-gray-600">
          Cette section rassemble les activités complètes à faire en classe. Les élèves peuvent remplir la séance
          directement sur le site, revenir sur leurs réponses, puis envoyer leur copie une fois connectés.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {FEATURE_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lab-teal/10 text-lab-teal">
                  <Icon size={20} />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-gray-600">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-8 grid gap-6">
        {activities.map((activity) => (
          <article
            key={activity.id}
            className="grid gap-6 rounded-[2rem] border border-gray-200 bg-white p-6 shadow-lg lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:p-8"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-lab-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-lab-blue">
                  {activity.code}
                </span>
                <span className="rounded-full bg-lab-teal/10 px-3 py-1 text-xs font-semibold text-lab-teal">
                  {activity.level}
                </span>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  {activity.duration}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-gray-900">{activity.title}</h2>
              <p className="mt-4 text-base leading-8 text-gray-600">{activity.summary}</p>
              <p className="mt-4 text-sm leading-7 text-gray-500">{activity.hook}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to={`/laboratoire/${activity.id}`}
                  className="inline-flex items-center rounded-xl bg-lab-teal px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-lab-teal/90 hover:shadow-md"
                >
                  Voir la fiche
                </Link>
                <a
                  href={activity.launchPath}
                  className="inline-flex items-center rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:-translate-y-0.5 hover:border-lab-teal/40 hover:text-lab-teal hover:shadow-sm"
                >
                  Ouvrir la séance
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-gray-200 bg-gray-50/80 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                <FlaskConical size={16} />
                Points clés
              </div>

              <ul className="mt-5 space-y-3">
                {activity.highlights.map((item) => (
                  <li key={item} className="rounded-2xl bg-white px-4 py-3 text-sm leading-7 text-gray-700 shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default LaboratoryPage;
