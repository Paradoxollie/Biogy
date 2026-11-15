/** @type {import('tailwindcss').Config} */

// -----------------------------------------------------------------------------
// Biogy — charte « carnet de laboratoire », version jour et nuit.
// Les teintes sont des variables CSS (src/index.css) : :root pour le jour,
// .dark pour la nuit. Les palettes Tailwind historiques (gray, blue, teal…)
// pointent vers la charte pour que les écrans plus anciens suivent le thème.
// `night`, `chalk` et `mint` restent fixes : sections toujours sombres
// (pied de page, photos en fond).
// -----------------------------------------------------------------------------

const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;
const scale = (name) => Object.fromEntries(SHADES.map((shade) => [shade, v(`${name}-${shade}`)]));

const ink = scale('ink');
const biogy = scale('biogy');
const accent = scale('accent');
const cobalt = scale('cobalt');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink,
        biogy,
        accent,
        cobalt,
        paper: {
          DEFAULT: v('paper'),
          50: v('paper-50'),
          100: v('paper'),
          200: v('paper-200'),
          300: v('paper-300'),
        },
        surface: {
          DEFAULT: v('card'),
          muted: v('paper'),
          subtle: v('paper-200'),
          line: v('paper-300'),
        },
        night: { DEFAULT: '#0b1210', soft: '#141d1a' },
        chalk: '#f4f2ec',
        mint: '#7bb898',
        biotech: {
          red: '#a3263a',
          green: '#2f7d3f',
          blue: '#344c92',
          yellow: '#a87a06',
          white: '#5f6b66',
        },
        gray: ink,
        slate: ink,
        zinc: ink,
        neutral: ink,
        stone: ink,
        teal: biogy,
        emerald: biogy,
        green: biogy,
        blue: cobalt,
        indigo: cobalt,
        sky: cobalt,
        violet: cobalt,
        purple: cobalt,
        amber: accent,
        'lab-blue': '#344c92',
        'lab-purple': '#2b3e77',
        'lab-teal': '#17573d',
        'lab-green': '#124631',
        'lab-bg': v('paper'),
        'lab-lines': v('paper-300'),
      },
      // Les fonds « blancs » deviennent des cartes sombres la nuit ;
      // le texte blanc reste blanc (posé sur des fonds colorés).
      backgroundColor: {
        white: v('card'),
      },
      fontFamily: {
        display: ['"Newsreader"', 'ui-serif', 'Georgia', 'serif'],
        serif: ['"Newsreader"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem, 6.2vw, 6rem)', { lineHeight: '1.02', letterSpacing: '-0.032em', fontWeight: '450' }],
        'display-xl': ['clamp(2.6rem, 5vw, 4.4rem)', { lineHeight: '1.05', letterSpacing: '-0.028em', fontWeight: '450' }],
        'display-lg': ['clamp(2.2rem, 3.8vw, 3.35rem)', { lineHeight: '1.08', letterSpacing: '-0.022em', fontWeight: '450' }],
        'display-md': ['clamp(1.85rem, 2.8vw, 2.5rem)', { lineHeight: '1.12', letterSpacing: '-0.018em', fontWeight: '450' }],
      },
      borderRadius: {
        card: '6px',
        frame: '4px',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 1px 0 rgb(var(--shadow) / 0.05), 0 1px 3px rgb(var(--shadow) / 0.07)',
        elevated: '0 1px 0 rgb(var(--shadow) / 0.05), 0 18px 40px -18px rgb(var(--shadow) / 0.28)',
        lift: '0 30px 60px -30px rgb(var(--shadow) / 0.42)',
        focus: '0 0 0 3px rgb(var(--biogy-500) / 0.3)',
      },
      transitionTimingFunction: {
        lab: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 52s linear infinite',
        'pulse-dot': 'pulseDot 2.4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.8)' },
        },
      },
    },
  },
  safelist: [
    'text-biotech-red', 'text-biotech-green', 'text-biotech-blue', 'text-biotech-yellow', 'text-biotech-white',
    'bg-biotech-red', 'bg-biotech-green', 'bg-biotech-blue', 'bg-biotech-yellow', 'bg-biotech-white',
    'border-biotech-red', 'border-biotech-green', 'border-biotech-blue', 'border-biotech-yellow', 'border-biotech-white',
    'text-lab-blue', 'text-lab-teal', 'text-lab-purple', 'bg-lab-blue', 'bg-lab-teal', 'bg-lab-purple', 'bg-lab-green', 'text-lab-green', 'bg-amber-700', 'text-amber-700', 'bg-gray-600', 'text-gray-600',
  ],
  plugins: [],
};
