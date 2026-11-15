import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { FocusImage } from './ui/motion';
import { PHOTOS } from '../data/visuals';
import { useAuth } from '../context/AuthContext';
import { apiRequest } from '../services/request';
import { isDocumentPath, safeRedirect } from '../utils/navigation';

export default function AuthForm({ register = false }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const target = safeRedirect(new URLSearchParams(location.search).get('redirect') || location.state?.from || '/');
  const alternate = `${register ? '/login' : '/register'}${target !== '/' ? `?redirect=${encodeURIComponent(target)}` : ''}`;
  const submit = async (event) => {
    event.preventDefault();
    if (loading) return;
    setError('');
    if (register && password !== confirm) { setError('Les deux mots de passe doivent être identiques.'); return; }
    setLoading(true);
    try {
      const data = await apiRequest(`/auth/${register ? 'register' : 'login'}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: username.trim(), password }) });
      if (!data.token) throw new Error('La connexion n’a pas pu être confirmée. Réessaie.');
      login(data);
      if (data.mustChangePassword) navigate('/change-password', { replace: true, state: { from: target } });
      else if (isDocumentPath(target)) window.location.assign(target);
      else navigate(target, { replace: true });
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  };
  return <div className="page py-8 md:py-14"><div className="grid overflow-hidden rounded-frame border border-ink-900/10 bg-white shadow-elevated lg:grid-cols-[1fr_1.05fr]">
    <aside className="relative flex min-h-[320px] flex-col justify-end overflow-hidden bg-ink-900 text-paper lg:min-h-[640px]">
      <FocusImage image={PHOTOS.microscope} className="absolute inset-0 h-full w-full" parallax={0} priority sizes="(min-width: 1024px) 45vw, 100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/55 to-ink-950/10" />
      <div className="relative flex flex-col justify-end p-7 sm:p-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60">Mon espace Biogy</p>
        <h2 className="mt-4 font-display text-[clamp(2rem,3.4vw,2.8rem)] leading-[1.04] tracking-tight">Le travail de la classe,<br /><span className="italic text-biogy-300">au même endroit.</span></h2>
        <p className="mt-4 max-w-sm text-sm leading-7 text-paper/75">Rends tes travaux pratiques, échange sur le forum et partage tes projets avec la classe.</p>
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-paper/15 pt-5 text-sm text-paper/75">
          <span className="flex items-center gap-2"><BookOpen size={16} />Les cours restent ouverts à tous.</span>
          <Link to="/apprendre" className="inline-flex min-h-11 items-center gap-2 font-semibold text-paper"><span className="link-draw">Accéder aux cours</span> <ArrowRight size={15} /></Link>
        </div>
      </div>
    </aside>
    <section className="flex flex-col justify-center p-6 sm:p-10 lg:p-14"><p className="eyebrow">{register ? 'Inscription' : 'Connexion'}</p><h1 className="mt-4 font-display text-display-md">{register ? 'Créer mon compte' : <>Heureux de te <span className="italic text-biogy-700">retrouver.</span></>}</h1><p className="mt-3 text-sm leading-6 text-ink-600">{register ? 'Choisis un identifiant que ton enseignante pourra reconnaître.' : 'Connecte-toi avec ton identifiant de classe.'}</p>
      {(error || location.state?.sessionExpired) && <p role="alert" className="mt-6 rounded-card border border-red-200 bg-red-50 p-4 text-sm text-red-800">{error || 'Ta session a expiré. Connecte-toi à nouveau.'}</p>}
      <form onSubmit={submit} className="mt-7 space-y-5" aria-busy={loading}>
        <div><label htmlFor="username" className="block text-sm font-semibold">Identifiant</label><input id="username" name="username" type="text" className="input mt-2" autoComplete="username" autoCapitalize="none" spellCheck={false} required minLength={register ? 3 : undefined} maxLength={60} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Ton identifiant de classe" /></div>
        <div><label htmlFor="password" className="block text-sm font-semibold">Mot de passe</label><div className="relative mt-2"><input id="password" name="password" type={visible ? 'text' : 'password'} className="input pr-12" autoComplete={register ? 'new-password' : 'current-password'} required minLength={register ? 8 : undefined} maxLength={128} value={password} onChange={(e) => setPassword(e.target.value)} aria-describedby={register ? 'password-help' : undefined} /><button type="button" className="absolute right-0 top-0 flex h-full w-11 items-center justify-center text-ink-500" aria-label={visible ? 'Masquer le mot de passe' : 'Afficher le mot de passe'} aria-pressed={visible} onClick={() => setVisible((value) => !value)}>{visible ? <EyeOff size={18} /> : <Eye size={18} />}</button></div>{register && <p id="password-help" className="mt-2 text-xs text-ink-500">Au moins 8 caractères. Choisis un mot de passe personnel.</p>}</div>
        {register && <div><label htmlFor="confirm-password" className="block text-sm font-semibold">Confirmer le mot de passe</label><input id="confirm-password" name="confirm-password" type={visible ? 'text' : 'password'} className="input mt-2" autoComplete="new-password" required minLength={8} maxLength={128} value={confirm} onChange={(e) => setConfirm(e.target.value)} /></div>}
        {!register && <p className="text-xs leading-5 text-ink-500">Mot de passe oublié ? Ton enseignante peut le réinitialiser.</p>}
        <button type="submit" disabled={loading} className="btn-primary w-full py-3">{loading ? 'Connexion au serveur…' : register ? 'Créer mon compte' : 'Me connecter'}{!loading && <ArrowRight size={17} />}</button>
      </form>
      <p className="mt-6 text-center text-sm text-ink-600">{register ? 'Déjà inscrit ?' : 'Première visite ?'} <Link to={alternate} className="font-semibold text-ink-900 underline decoration-biogy-500 underline-offset-4">{register ? 'Me connecter' : 'Créer mon compte'}</Link></p>
      <p className="mt-6 flex items-start gap-2 border-t border-surface-line pt-5 text-xs leading-5 text-ink-500"><ShieldCheck size={16} className="mt-0.5 shrink-0" />Sur un ordinateur partagé, pense à te déconnecter en fin de séance.</p>
    </section>
  </div></div>;
}
