import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import SystemStatusBanner from './SystemStatusBanner';
import { EASE, Pencil } from './ui/motion';
import ThemeToggle from './ui/ThemeToggle';
import { PENCILS } from '../data/visuals';

const NAV_ITEMS = [
  { name: 'Apprendre', path: '/apprendre' },
  { name: 'Réviser', path: '/revisions' },
  { name: 'Laboratoire', path: '/laboratoire' },
  { name: 'Projets', path: '/projets' },
  { name: 'Actualités', path: '/actualites' },
  { name: 'Forum', path: '/forum' },
];

export function Wordmark({ light = false, className = '' }) {
  return (
    <span className={`group/mark inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 28 28" className={`h-7 w-7 shrink-0 transition-transform duration-700 ease-lab group-hover/mark:rotate-[100deg] ${light ? 'text-chalk' : 'text-ink-900'}`} aria-hidden="true">
        <circle cx="14" cy="14" r="12.25" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="14" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1.2 2.2" opacity="0.55" />
        <circle cx="11" cy="12.5" r="2.1" fill="#4c9a76" />
        <circle cx="17.2" cy="10.6" r="1.2" fill="#d39837" />
        <circle cx="16.1" cy="17.4" r="1.6" fill="currentColor" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.4rem] font-medium tracking-[-0.02em] ${light ? 'text-chalk' : 'text-ink-900'}`}>Biogy</span>
        <span className={`mt-1 font-mono text-[8.5px] uppercase tracking-[0.24em] ${light ? 'text-chalk/55' : 'text-ink-500'}`}>STL · Biotechnologies</span>
      </span>
    </span>
  );
}

function useHeaderState() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const last = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > 160 && y > last.current + 4);
      if (y < last.current - 4 || y <= 160) setHidden(false);
      last.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return { scrolled, hidden };
}

function Layout({ children }) {
  const { scrolled, hidden } = useHeaderState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const location = useLocation();
  const { userInfo, logout, loadingAuth } = useAuth();
  const navigate = useNavigate();
  const menuButton = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' });
    const main = document.getElementById('main-content');
    main?.focus({ preventScroll: true });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    document.body.style.overflow = 'hidden';
    const close = (event) => { if (event.key === 'Escape') { setMobileOpen(false); menuButton.current?.focus(); } };
    window.addEventListener('keydown', close);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', close); };
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

  const section = `/${location.pathname.split('/')[1] || ''}`;

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-paper text-ink-900">
        <a href="#main-content" className="skip-link">Aller au contenu</a>

        <header
          className={`site-header sticky top-0 z-50 w-full transition-[transform,background-color,border-color,box-shadow] duration-500 ease-lab ${
            hidden && !mobileOpen ? '-translate-y-full' : ''
          } ${mobileOpen ? 'border-b border-ink-900/10 bg-paper' : scrolled ? 'border-b border-ink-900/10 bg-paper/85 backdrop-blur-md backdrop-saturate-150' : 'border-b border-transparent bg-paper'}`}
        >
          <div className="page flex h-[72px] items-center justify-between gap-6">
            <Link to="/" aria-label="Accueil Biogy" className="shrink-0">
              <Wordmark />
            </Link>

            <nav className="hidden items-center lg:flex" aria-label="Navigation principale" onMouseLeave={() => setHovered(null)}>
              {NAV_ITEMS.map((item) => {
                const active = section === item.path;
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onMouseEnter={() => setHovered(item.path)}
                    onFocus={() => setHovered(item.path)}
                    onBlur={() => setHovered(null)}
                    className={`relative rounded-pill px-3.5 py-2 text-[14px] font-medium transition-colors duration-300 ${active || hovered === item.path ? 'text-ink-900' : 'text-ink-600'}`}
                  >
                    {hovered === item.path && (
                      <motion.span
                        layoutId="nav-hover"
                        className="absolute inset-0 rounded-pill bg-ink-900/[0.07]"
                        transition={{ type: 'spring', stiffness: 520, damping: 40 }}
                      />
                    )}
                    <span className="relative">{item.name}</span>
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-biogy-600"
                        transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                      />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            <div className="hidden items-center gap-1.5 lg:flex" aria-busy={loadingAuth}>
              <ThemeToggle className="mr-1" />
              {userInfo ? (
                <>
                  <Link
                    to="/mes-copies"
                    className="flex max-w-40 items-center gap-2 truncate rounded-pill px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-900/[0.05] hover:text-ink-900"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-biogy-600 font-mono text-[10px] uppercase text-white">
                      {userInfo.username?.slice(0, 1)}
                    </span>
                    <span className="truncate">{userInfo.username}</span>
                  </Link>
                  {userInfo.role === 'admin' && (
                    <Link to="/admin" className="btn-secondary min-h-9 px-4 py-1.5">Admin</Link>
                  )}
                  <button onClick={handleLogout} className="btn-ghost min-h-9 px-3 py-1.5" aria-label="Se déconnecter">Quitter</button>
                </>
              ) : (
                <Link to="/login" className="btn-primary min-h-10 py-2">
                  Mon espace <ArrowRight size={15} className="btn-arrow" />
                </Link>
              )}
            </div>

            <ThemeToggle className="ml-auto lg:hidden" />
            <button
              ref={menuButton}
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-900 transition-colors hover:bg-ink-900/[0.06] lg:hidden"
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <span className={`absolute h-px w-5 bg-current transition-transform duration-500 ease-lab ${mobileOpen ? 'rotate-45' : '-translate-y-[4px]'}`} />
              <span className={`absolute h-px w-5 bg-current transition-transform duration-500 ease-lab ${mobileOpen ? '-rotate-45' : 'translate-y-[4px]'}`} />
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navigation mobile"
                className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-paper lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <div className="page flex min-h-full flex-col pb-10 pt-6">
                  <ul className="border-t border-ink-900/10">
                    {NAV_ITEMS.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.05 + index * 0.05, ease: EASE }}
                        className="border-b border-ink-900/10"
                      >
                        <NavLink to={item.path} className="flex items-baseline justify-between py-4">
                          <span className={`font-display text-[2rem] leading-none tracking-tight ${section === item.path ? 'italic text-biogy-700' : 'text-ink-900'}`}>{item.name}</span>
                          <span className="font-mono text-[11px] text-ink-400">{String(index + 1).padStart(2, '0')}</span>
                        </NavLink>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    className="mt-8 grid gap-2"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                  >
                    {userInfo ? (
                      <>
                        <Link to="/mes-copies" className="btn-secondary w-full justify-between">Mes copies — {userInfo.username}<ArrowUpRight size={16} /></Link>
                        <Link to="/profile" className="btn-ghost w-full justify-between">Mon profil<ArrowUpRight size={16} /></Link>
                        {userInfo.role === 'admin' && <Link to="/admin" className="btn-primary w-full">Panneau admin</Link>}
                        <button onClick={handleLogout} className="btn-ghost w-full text-biotech-red">Se déconnecter</button>
                      </>
                    ) : (
                      <>
                        <Link to="/login" className="btn-primary w-full">Se connecter</Link>
                        <Link to="/register" className="btn-secondary w-full">Créer mon compte</Link>
                      </>
                    )}
                  </motion.div>
                  <div className="mt-auto pt-10">
                    <Pencil drawing={PENCILS.microbes} className="mx-auto w-40 opacity-70" />
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        <SystemStatusBanner />
        {userInfo?.mustChangePassword && location.pathname !== '/change-password' && (
          <div className="no-print page pt-4">
            <p className="notice">Ton mot de passe a été réinitialisé. <Link className="font-semibold underline" to="/change-password">Choisir mon nouveau mot de passe</Link></p>
          </div>
        )}

        <main id="main-content" tabIndex={-1} className="min-w-0 flex-grow outline-none">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {children}
          </motion.div>
        </main>

        <footer className="relative mt-24 overflow-hidden bg-night text-chalk">
          <div className="pointer-events-none absolute -right-16 top-10 hidden w-[360px] opacity-40 md:block lg:right-10" aria-hidden="true">
            <Pencil drawing={PENCILS.microscope} light />
          </div>
          <div className="page relative pb-10 pt-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-chalk/50">Biogy · Lycée · STL Biotechnologies</p>
            <p className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] tracking-[-0.03em]">
              Observer, mesurer, <em className="font-[520] text-mint">comprendre</em> le vivant.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/apprendre" className="btn-chalk">Ouvrir les cours <ArrowRight size={16} className="btn-arrow" /></Link>
              <Link to="/laboratoire" className="btn-outline-chalk">Le laboratoire</Link>
            </div>

            <div className="mt-20 grid gap-10 border-t border-chalk/15 pt-10 sm:grid-cols-2 md:grid-cols-4">
              <div className="md:col-span-2">
                <Wordmark light />
                <p className="mt-5 max-w-sm text-sm leading-7 text-chalk/60">
                  Cours, travaux pratiques, révisions et veille scientifique pour les élèves de Sciences et
                  Technologies de Laboratoire, spécialité biotechnologies.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-chalk/45">Parcours</h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  <li><Link to="/apprendre" className="link-draw text-chalk/80 hover:text-chalk">Apprendre</Link></li>
                  <li><Link to="/revisions" className="link-draw text-chalk/80 hover:text-chalk">Réviser</Link></li>
                  <li><Link to="/laboratoire" className="link-draw text-chalk/80 hover:text-chalk">Laboratoire</Link></li>
                  <li><Link to="/actualites" className="link-draw text-chalk/80 hover:text-chalk">Veille scientifique</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-chalk/45">Communauté</h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  <li><Link to="/projets" className="link-draw text-chalk/80 hover:text-chalk">Galerie de projets</Link></li>
                  <li><Link to="/partager-projet" className="link-draw text-chalk/80 hover:text-chalk">Partager un projet</Link></li>
                  <li><Link to="/forum" className="link-draw text-chalk/80 hover:text-chalk">Forum</Link></li>
                  <li><Link to="/aide" className="link-draw text-chalk/80 hover:text-chalk">Aide & utilisation</Link></li>
                </ul>
              </div>
            </div>

            <div className="mt-14 flex flex-col gap-3 border-t border-chalk/15 pt-6 text-xs text-chalk/45 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Biogy — Ressource pédagogique STL Biotechnologies.</p>
              <p className="font-mono uppercase tracking-[0.16em]">Au laboratoire, la sécurité d’abord.</p>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}

export default Layout;
