/** @type {import('tailwindcss').Config} */

// -----------------------------------------------------------------------------
// Biogy — charte « carnet de laboratoire »
// Papier chaud, encre vert-noir, vert gélose profond, ambre « flamme »,
// bleu de méthylène pour la Terminale. Les palettes Tailwind historiques
// (gray, blue, teal…) sont redirigées vers la charte pour que les écrans
// plus anciens (forum, profil, admin) restent cohérents sans réécriture.
// -----------------------------------------------------------------------------

const ink = {
  50: '#f3f5f3',
  100: '#e6eae7',
  200: '#cdd4cf',
  300: '#a9b3ad',
  400: '#7f8b85',
  500: '#5f6b66',
  600: '#47534e',
  700: '#34403b',
  800: '#222d29',
  900: '#121b18',
  950: '#0b1210',
};

const biogy = {
  50: '#eef6f1',
  100: '#d5eadd',
  200: '#acd4bd',
  300: '#7bb898',
  400: '#4c9a76',
  500: '#2c7f5c',
  600: '#1e6a4b',
  700: '#17573d',
  800: '#124631',
  900: '#0d3425',
  950: '#072117',
};

const accent = {
  50: '#fbf6ea',
  100: '#f5e8c8',
  200: '#ebd08f',
  300: '#e0b35a',
  400: '#d39837',
  500: '#bb7e20',
  600: '#9b6318',
  700: '#7b4c16',
  800: '#603b15',
  900: '#4d3013',
  950: '#2b1a09',
};

const cobalt = {
  50: '#eff3fa',
  100: '#dbe3f4',
  200: '#b8c7e8',
  300: '#8ca3d7',
  400: '#5f7cc2',
  500: '#4360ac',
  600: '#344c92',
  700: '#2b3e77',
  800: '#253462',
  900: '#1f2b50',
  950: '#141b33',
};

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink,
        biogy,
        accent,
        cobalt,
        paper: {
          DEFAULT: '#f4f2ec',
          50: '#fbfaf7',
          100: '#f4f2ec',
          200: '#ebe8df',
          300: '#dedad0',
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f4f2ec',
          subtle: '#ebe8df',
          line: '#dedad0',
        },
        biotech: {
          red: '#a3263a',
          green: '#2f7d3f',
          blue: '#344c92',
          yellow: '#a87a06',
          white: '#5f6b66',
        },
        // Redirection des palettes historiques vers la charte
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
        // Alias historiques
        'lab-blue': cobalt[600],
        'lab-purple': cobalt[700],
        'lab-teal': biogy[700],
        'lab-green': biogy[800],
        'lab-bg': '#f4f2ec',
        'lab-lines': '#dedad0',
      },
      fontFamily: {
        display: ['"Newsreader"', 'ui-serif', 'Georgia', 'serif'],
        serif: ['"Newsreader"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem, 6.4vw, 6.25rem)', { lineHeight: '0.98', letterSpacing: '-0.035em', fontWeight: '400' }],
        'display-xl': ['clamp(2.6rem, 5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '400' }],
        'display-lg': ['clamp(2.2rem, 3.8vw, 3.4rem)', { lineHeight: '1.06', letterSpacing: '-0.025em', fontWeight: '400' }],
        'display-md': ['clamp(1.85rem, 2.8vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '400' }],
      },
      borderRadius: {
        card: '6px',
        frame: '4px',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 1px 0 rgba(18, 27, 24, 0.04), 0 1px 3px rgba(18, 27, 24, 0.05)',
        elevated: '0 1px 0 rgba(18, 27, 24, 0.04), 0 18px 40px -18px rgba(18, 27, 24, 0.22)',
        lift: '0 30px 60px -30px rgba(18, 27, 24, 0.35)',
        focus: '0 0 0 3px rgba(44, 127, 92, 0.28)',
      },
      transitionTimingFunction: {
        lab: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 48s linear infinite',
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
