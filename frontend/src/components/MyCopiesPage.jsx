import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { apiRequest } from '../services/request';

const statusLabels = { submitted: 'À corriger', reviewed: 'Corrigée', 'follow-up': 'À reprendre' };
export default function MyCopiesPage() {
  const { userInfo, loadingAuth } = useAuth();
  const [copies, setCopies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    if (!userInfo?.token) return undefined;
    let active = true;
    setLoading(true); setError('');
    apiRequest('/lab/submissions/mine', { headers: { Authorization: `Bearer ${userInfo.token}` } })
      .then((data) => { if (active) setCopies(data); })
      .catch((err) => { if (active) setError(err.message); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [userInfo?.token, retry]);
  if (!loadingAuth && !userInfo) return <Navigate to="/login?redirect=%2Fmes-copies" replace />;
  return <div className="page max-w-4xl py-10 md:py-14">
    <div className="flex items-center justify-between gap-3"><p className="section-eyebrow">Mon espace</p><Link className="btn-ghost" to="/profile">Mon profil</Link></div><h1 className="mt-3 font-display text-3xl md:text-display-lg">Mes copies de laboratoire</h1>
    <p className="mt-4 max-w-2xl leading-relaxed text-ink-600">Retrouve les envois confirmés et le retour de ton enseignante. Les brouillons conservés uniquement sur ton appareil n’apparaissent pas ici.</p>
    <div className="mt-8 space-y-5">
      {error ? <div role="alert" className="notice"><p>{error}</p><button type="button" className="btn-secondary mt-3" onClick={() => setRetry((value) => value + 1)}>Réessayer</button></div>
        : loading ? <p role="status">Chargement de tes copies…</p>
          : copies.length === 0 ? <div className="card p-7"><h2 className="font-display text-2xl">Ton premier envoi apparaîtra ici</h2><p className="mt-3 text-ink-600">Ouvre une séance, complète ton travail et utilise « Envoyer ma copie ».</p><Link className="btn-primary mt-5" to="/laboratoire">Voir les séances</Link></div>
            : copies.map((copy) => <article key={copy._id} className="card p-5 sm:p-7"><div className="flex flex-wrap items-center justify-between gap-3"><span className="pill-biogy">{statusLabels[copy.review?.status] || 'À corriger'}</span><span className="text-xs text-ink-500">Version {copy.version}</span></div><h2 className="mt-4 font-display text-2xl">{copy.activityTitle}</h2><p className="mt-2 text-sm text-ink-600">Envoi confirmé le {new Date(copy.lastSubmittedAt).toLocaleString('fr-FR')} · {copy.answerCount}/{copy.fieldCount} champs renseignés</p>{copy.review?.feedback && <div className="mt-5 rounded-card bg-biogy-50 p-5"><h3 className="font-semibold text-biogy-800">Retour de l’enseignante</h3><p className="mt-2 whitespace-pre-wrap break-words leading-relaxed">{copy.review.feedback}</p></div>}<Link to={`/laboratoire/${encodeURIComponent(copy.activityId)}`} className="btn-secondary mt-5">Revoir la séance</Link><p className="mt-3 text-xs leading-relaxed text-ink-500">Un nouvel envoi remplace la copie active et la remet dans les travaux à corriger.</p></article>)}
    </div>
  </div>;
}
