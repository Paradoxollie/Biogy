import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const STORAGE_KEY = 'biogy-theme';
const META_COLORS = { light: '#f2efe7', dark: '#0e1412' };

const readSaved = () => {
  try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
};

const currentTheme = () => (
  typeof document !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light'
);

function applyTheme(theme, { animate = true } = {}) {
  const root = document.documentElement;
  if (animate) root.classList.add('theme-transition');
  root.classList.toggle('dark', theme === 'dark');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLORS[theme]);
  if (animate) window.setTimeout(() => root.classList.remove('theme-transition'), 650);
}

export function useTheme() {
  const [theme, setTheme] = useState(currentTheme);

  // Sans choix enregistré, on suit le réglage jour/nuit de l'appareil.
  useEffect(() => {
    const media = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!media) return undefined;
    const onChange = (event) => {
      if (readSaved()) return;
      const next = event.matches ? 'dark' : 'light';
      applyTheme(next);
      setTheme(next);
    };
    media.addEventListener?.('change', onChange);
    return () => media.removeEventListener?.('change', onChange);
  }, []);

  const toggle = useCallback(() => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* navigation privée */ }
    setTheme(next);
  }, []);

  return { theme, toggle };
}

export default function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme();
  const dark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Passer en mode jour' : 'Passer en mode nuit'}
      title={dark ? 'Mode jour' : 'Mode nuit'}
      className={`group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-ink-900/10 text-ink-800 transition-colors duration-300 hover:border-ink-900/30 hover:bg-ink-900/[0.05] ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {dark ? (
          <motion.svg
            key="sun"
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
            initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <circle cx="12" cy="12" r="4.2" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line key={angle} x1="12" y1="2.6" x2="12" y2="4.8" transform={`rotate(${angle} 12 12)`} />
            ))}
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            aria-hidden="true"
            initial={{ rotate: 90, scale: 0.4, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <path d="M19.5 14.6A7.8 7.8 0 0 1 9.4 4.5a7.8 7.8 0 1 0 10.1 10.1Z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}
