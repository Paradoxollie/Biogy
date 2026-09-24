import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiRequest } from '../services/request';

export default function SystemStatusBanner() {
  const [message, setMessage] = useState('');
  const [checking, setChecking] = useState(false);
  const active = useRef(false);
  const check = useCallback(async () => {
    if (active.current || document.hidden) return;
    active.current = true;
    setChecking(true);
    try {
      const data = await apiRequest('/health', { timeout: 10000 });
      setMessage(data.database === 'connected' ? '' : 'Les services de compte et de remise de copies sont momentanément indisponibles. Les cours et les révisions restent accessibles.');
    } catch {
      setMessage(navigator.onLine ? 'Le serveur met du temps à répondre. Tu peux continuer à consulter les cours et à réviser.' : 'Tu es hors connexion. Garde cette page ouverte et conserve ton travail avant de la quitter.');
    } finally { active.current = false; setChecking(false); }
  }, []);
  useEffect(() => {
    check();
    const interval = setInterval(check, 60000);
    window.addEventListener('online', check);
    window.addEventListener('offline', check);
    return () => { clearInterval(interval); window.removeEventListener('online', check); window.removeEventListener('offline', check); };
  }, [check]);
  if (!message) return null;
  return <div className="no-print border-b border-accent-200 bg-accent-50"><div className="page flex flex-wrap items-center gap-x-4 gap-y-1 py-2.5"><p className="flex-1 text-xs leading-5 text-accent-800" role="status">{message}</p><button type="button" className="min-h-9 text-xs font-semibold text-accent-800 underline underline-offset-4" disabled={checking} onClick={check}>{checking ? 'Vérification…' : 'Réessayer'}</button><Link to="/aide" className="min-h-9 content-center text-xs font-semibold text-accent-800 underline underline-offset-4">Aide</Link></div></div>;
}
