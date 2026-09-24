import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) { console.error('Biogy page error:', error, info); }
  render() {
    if (!this.state.error) return this.props.children;
    return <main className="page-narrow py-20 text-center"><p className="section-eyebrow">Un petit contretemps</p><h1 className="mt-4 font-display text-3xl">La page n’a pas pu s’afficher</h1><p className="mt-4 text-ink-600">La connexion a peut-être été interrompue ou une nouvelle version est disponible. Tes brouillons enregistrés sur cet appareil sont conservés.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><button type="button" className="btn-primary" onClick={() => window.location.reload()}>Recharger la page</button><a className="btn-secondary" href="/">Retour à l’accueil</a></div></main>;
  }
}
