import React from 'react';
import { Link } from 'react-router-dom';
import { Pencil, Reveal, SplitWords } from './ui/motion';
import { PENCILS } from '../data/visuals';

export default function NotFoundPage() {
  return (
    <div className="page grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2">
      <div>
        <Reveal y={8} blur={false}><p className="eyebrow">Erreur 404 · Champ vide</p></Reveal>
        <h1 className="mt-6 font-display text-display-xl">
          <SplitWords parts={[{ text: 'Rien à observer' }, { text: 'sur cette lame.', className: 'italic text-biogy-700' }]} />
        </h1>
        <Reveal delay={0.3} className="mt-6 max-w-md text-[17px] leading-8 text-ink-600">
          Le lien a peut-être changé. Retrouve ton chapitre dans les cours ou repars de l’accueil.
        </Reveal>
        <Reveal delay={0.4} className="mt-8 flex flex-wrap gap-3">
          <Link to="/apprendre" className="btn-primary">Rechercher un cours</Link>
          <Link to="/" className="btn-secondary">Retour à l’accueil</Link>
        </Reveal>
      </div>
      <Pencil drawing={PENCILS.microbes} className="mx-auto w-full max-w-md opacity-80" />
    </div>
  );
}
