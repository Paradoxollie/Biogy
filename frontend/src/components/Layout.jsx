import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SystemStatusBanner from './SystemStatusBanner';

const NAV_ITEMS = [
  { name: 'Apprendre',   path: '/apprendre'   },
  { name: 'Réviser',     path: '/revisions'   },
  { name: 'Laboratoire', path: '/laboratoire' },
  { name: 'Projets',     path: '/projets'     },
  { name: 'Actualités',  path: '/actualites'  },
  { name: 'Forum',       path: '/forum'       },
];

function Wordmark({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-ink-900">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <circle cx="12" cy="12" r="8" fill="none" stroke="#14a676" strokeWidth="1.75" />
          <circle cx="10" cy="11"   r="1.4" fill="#14a676" />
          <circle cx="14" cy="10"   r="0.9" fill="#14a676" />
          <circle cx="13.5" cy="14" r="1.1" fill="#14a676" />
          <circle cx="9"  cy="14"   r="0.7" fill="#14a676" />
        </svg>
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-ink-900">
        Biogy
      </span>
    </span>
  );
}

function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { userInfo, logout, loadingAuth } = useAuth();
  const navigate = useNavigate();
  const menuButton = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' });
    const main = document.getElementById('main-content');
    main?.focus({ preventScroll: true });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const close = (event) => { if (event.key === 'Escape') { setMobileOpen(false); menuButton.current?.focus(); } };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [mobileOpen]);

  useEffect(() => {
    const updateTitle = () => {
      const title = document.querySelector('main h1')?.innerText.replace(/\s+/g, ' ').trim();
      document.title = title ? `${title} · Biogy` : 'Biogy · STL Biotechnologies';
    };
    updateTitle();
    const observer = new MutationObserver(updateTitle);
    const main = document.getElementById('main-content');
    if (main) observer.observe(main, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-muted text-ink-900">
      <a href="#main-content" className="skip-link">Aller au contenu</a>
      <header
        className={`sticky top-0 z-40 w-full border-b transition-colors duration-200 ${
          scrolled
            ? 'bg-surface/90 backdrop-blur border-surface-line'
            : 'bg-surface border-transparent'
        }`}
      >
        <div className="page flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" aria-label="Accueil Biogy">
              <Wordmark />
            </Link>
            <span className="hidden xl:inline-block h-5 w-px bg-surface-line" aria-hidden="true" />
            <span className="hidden xl:inline-block text-[10px] font-medium uppercase tracking-[0.14em] text-ink-500">
              STL · Biotechnologies
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navigation principale">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-card text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-biogy-700 bg-biogy-50'
                      : 'text-ink-700 hover:text-ink-900 hover:bg-surface-subtle'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-1" aria-busy={loadingAuth}>
            {userInfo ? (
              <>
                <Link
                  to="/mes-copies"
                  className="max-w-28 truncate text-sm font-medium text-ink-700 hover:text-ink-900 px-2.5 py-2 rounded-card hover:bg-surface-subtle"
                >
                  {userInfo.username}
                </Link>
                {userInfo.role === 'admin' && (
                  <Link to="/admin" className="btn-secondary">Admin</Link>
                )}
                <button onClick={handleLogout} className="btn-ghost" aria-label="Se déconnecter">Quitter</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-primary">Mon espace</Link>
              </>
            )}
          </div>

          <button
            ref={menuButton}
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-card text-ink-700 hover:bg-surface-subtle"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <nav id="mobile-navigation" aria-label="Navigation mobile" className="lg:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-surface-line bg-surface">
            <div className="page py-3 space-y-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-card text-sm font-medium ${
                      isActive
                        ? 'bg-biogy-50 text-biogy-700'
                        : 'text-ink-700 hover:bg-surface-subtle'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-3 mt-2 border-t border-surface-line space-y-1">
                {userInfo ? (
                  <>
                    <Link to="/profile" className="block px-3 py-2.5 rounded-card text-sm text-ink-700">Mon profil</Link>
                    <Link to="/mes-copies" className="block px-3 py-2.5 rounded-card text-sm text-ink-700 hover:bg-surface-subtle">
                      Mes copies — {userInfo.username}
                    </Link>
                    {userInfo.role === 'admin' && (
                      <Link to="/admin" className="block px-3 py-2.5 rounded-card text-sm font-medium bg-ink-900 text-white">
                        Panneau admin
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2.5 rounded-card text-sm text-biotech-red hover:bg-surface-subtle"
                    >
                      Se déconnecter
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login"    className="block px-3 py-2.5 rounded-card text-sm text-ink-700 hover:bg-surface-subtle">Se connecter</Link>
                    <Link to="/register" className="block px-3 py-2.5 rounded-card text-sm font-semibold bg-biogy-600 text-white">S'inscrire</Link>
                  </>
                )}
              </div>
            </div>
          </nav>
        )}
      </header>

      <SystemStatusBanner />
      {userInfo?.mustChangePassword && location.pathname !== '/change-password' && <div className="no-print page pt-4"><p className="notice">Ton mot de passe a été réinitialisé. <Link className="font-semibold underline" to="/change-password">Choisir mon nouveau mot de passe</Link></p></div>}
      <main id="main-content" tabIndex={-1} className="min-w-0 flex-grow outline-none">{children}</main>

      <footer className="mt-20 border-t border-surface-line bg-surface">
        <div className="page py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Wordmark />
            <p className="mt-4 max-w-md text-sm leading-6 text-ink-600">
              Plateforme de cours, de travaux pratiques et de veille scientifique pour les élèves
              de Sciences et Technologies de Laboratoire, spécialité biotechnologie.
            </p>
          </div>

          <div>
            <h3 className="section-eyebrow mb-3">Parcours</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/apprendre"   className="text-ink-700 hover:text-biogy-700">Apprendre</Link></li>
              <li><Link to="/revisions" className="text-ink-700 hover:text-biogy-700">Réviser</Link></li>
              <li><Link to="/laboratoire" className="text-ink-700 hover:text-biogy-700">Laboratoire</Link></li>
              <li><Link to="/actualites"  className="text-ink-700 hover:text-biogy-700">Veille scientifique</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="section-eyebrow mb-3">Communauté</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/projets"         className="text-ink-700 hover:text-biogy-700">Galerie de projets</Link></li>
              <li><Link to="/partager-projet" className="text-ink-700 hover:text-biogy-700">Partager un projet</Link></li>
              <li><Link to="/forum"           className="text-ink-700 hover:text-biogy-700">Forum</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-line">
          <div className="page py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-500">
            <p>© {new Date().getFullYear()} Biogy — Ressource pédagogique STL Biotechnologie.</p>
            <Link to="/aide" className="text-ink-600 hover:text-biogy-700">Aide & utilisation</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
