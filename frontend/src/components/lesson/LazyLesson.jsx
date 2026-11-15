import React, { useEffect, useState } from 'react';
import { loadPremiereLesson } from '../../data/premiere';
import LessonView from './LessonView';

// Télécharge la leçon à l'ouverture du cours, puis l'affiche.
export default function LazyLesson({ id, storageId, onOpenImage }) {
  const [state, setState] = useState({ lesson: null, error: false });

  useEffect(() => {
    let active = true;
    setState({ lesson: null, error: false });
    loadPremiereLesson(id)
      .then((lesson) => { if (active) setState({ lesson, error: !lesson }); })
      .catch(() => { if (active) setState({ lesson: null, error: true }); });
    return () => { active = false; };
  }, [id]);

  if (state.error) {
    return (
      <div role="alert" className="notice mt-10">
        La leçon n’a pas pu être chargée. Vérifie ta connexion puis recharge la page.
      </div>
    );
  }

  if (!state.lesson) {
    return (
      <div className="mt-10 space-y-4" role="status" aria-live="polite">
        <span className="sr-only">Chargement de la leçon…</span>
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="h-72 animate-pulse rounded-frame bg-ink-900/[0.06] lg:col-span-7" />
          <div className="h-72 animate-pulse rounded-frame bg-ink-900/[0.06] lg:col-span-5" />
        </div>
        <div className="h-12 w-80 animate-pulse rounded-pill bg-ink-900/[0.06]" />
      </div>
    );
  }

  return <LessonView lesson={state.lesson} storageId={storageId} onOpenImage={onOpenImage} />;
}
