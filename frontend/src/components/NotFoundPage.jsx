import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFoundPage() {
  return <div className="page-narrow py-20 text-center"><p className="font-mono text-sm text-biogy-700">ERREUR 404</p><h1 className="mt-4 font-display text-3xl">Cette page est introuvable</h1><p className="mt-4 text-ink-600">Le lien a peut-être changé. Retrouve ton chapitre dans les cours ou repars de l’accueil.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/apprendre" className="btn-primary">Rechercher un cours</Link><Link to="/" className="btn-secondary">Retour à l’accueil</Link></div></div>;
}
