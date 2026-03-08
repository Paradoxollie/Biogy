import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BROWSER_API_URL } from '../config';

function ChangePasswordPage() {
  const { userInfo, login, logout, loadingAuth } = useAuth();
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (loadingAuth) {
      return;
    }

    if (!userInfo) {
      navigate('/login', { replace: true });
      return;
    }
  }, [loadingAuth, navigate, userInfo]);

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('Tous les champs sont requis.');
      return;
    }

    if (newPassword.length < 8) {
      setError('Le nouveau mot de passe doit contenir au moins 8 caracteres.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Les deux nouveaux mots de passe doivent etre identiques.');
      return;
    }

    if (currentPassword === newPassword) {
      setError('Choisis un nouveau mot de passe different du mot de passe temporaire.');
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch(`${BROWSER_API_URL}/auth/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          logout();
          navigate('/login', { replace: true, state: { sessionExpired: true } });
          return;
        }

        throw new Error(data.message || 'Erreur lors du changement de mot de passe');
      }

      login(data.user);
      setSuccess('Mot de passe mis a jour avec succes. Redirection en cours...');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');

      setTimeout(() => {
        navigate('/', { replace: true });
      }, 800);
    } catch (requestError) {
      console.error('Erreur lors du changement de mot de passe:', requestError);
      setError(requestError.message || 'Erreur lors du changement de mot de passe');
    } finally {
      setSubmitting(false);
    }
  };

  if (loadingAuth) {
    return (
      <div className="container mx-auto max-w-xl px-4 py-10">
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <p className="text-gray-600">Chargement de la session...</p>
        </div>
      </div>
    );
  }

  if (!userInfo) {
    return null;
  }

  return (
    <div className="container mx-auto max-w-xl px-4 py-10">
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 bg-gradient-to-r from-amber-50 via-white to-rose-50 border-b border-gray-100">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Securite du compte</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Choisir un nouveau mot de passe</h1>
          <p className="mt-3 text-gray-600">
            {userInfo.mustChangePassword
              ? 'Ton mot de passe a ete reinitialise par le professeur ou l administrateur. Pour continuer a utiliser ton compte, choisis maintenant un nouveau mot de passe personnel.'
              : 'Tu peux mettre a jour ton mot de passe ici.'}
          </p>
        </div>

        <div className="px-6 py-6">
          {error ? (
            <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700">
              {error}
            </div>
          ) : null}

          {success ? (
            <div className="mb-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-700">
              {success}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe actuel ou temporaire
              </label>
              <input
                id="currentPassword"
                type="password"
                value={currentPassword}
                onChange={(event) => setCurrentPassword(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lab-purple"
                autoComplete="current-password"
                required
              />
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Nouveau mot de passe
              </label>
              <input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lab-purple"
                autoComplete="new-password"
                minLength="8"
                required
              />
              <p className="mt-1 text-sm text-gray-500">Utilise au moins 8 caracteres.</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirmer le nouveau mot de passe
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lab-purple"
                autoComplete="new-password"
                minLength="8"
                required
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-gradient-to-r from-lab-blue to-lab-purple px-5 py-3 font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? 'Enregistrement...' : 'Mettre a jour le mot de passe'}
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Se deconnecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordPage;
