/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ---- Biogy design system (STL biotechnologie) ----
        // Hero accent: teal petri-dish / algae
        biogy: {
          50:  '#eefbf7',
          100: '#d4f5ea',
          200: '#a9ebd4',
          300: '#6bdab4',
          400: '#31c290',
          500: '#14a676', // primary
          600: '#0f8a62',
          700: '#0e6e50',
          800: '#0d5742',
          900: '#0c4737',
        },
        // Primary: deep ink for typography and serious accents
        ink: {
          50:  '#f3f6fa',
          100: '#e6edf5',
          200: '#c9d5e3',
          300: '#9fb1c6',
          400: '#6f87a3',
          500: '#4e6683',
          600: '#3b4f6a',
          700: '#2d3e55',
          800: '#1f2c3f',
          900: '#101a29',
        },
        // Accent: warm ochre / bunsen flame for highlights
        accent: {
          50:  '#fff8ec',
          100: '#feecc8',
          200: '#fbd78c',
          300: '#f7bc51',
          400: '#f3a12b',
          500: '#e7860f',
          600: '#c46b0a',
          700: '#9e530b',
          800: '#7f4211',
          900: '#683813',
        },
        // Subject colors for the 5 biotech families (used only contextually)
        biotech: {
          red:    '#b9153a',
          green:  '#2f8f3d',
          blue:   '#1e6eb6',
          yellow: '#c79200',
          white:  '#6b7280',
        },
        // Surface tokens
        surface: {
          DEFAULT: '#ffffff',
          muted:   '#f7f8fa',
          subtle:  '#eef1f5',
          line:    '#e2e6ec',
        },
        // Legacy aliases so existing components keep working during migration
        'lab-blue':   '#1e6eb6',
        'lab-purple': '#5b4a9d',
        'lab-teal':   '#14a676',
        'lab-green':  '#2f8f3d',
        'lab-bg':     '#f7f8fa',
        'lab-lines':  '#e2e6ec',
      },
      fontFamily: {
        'display': ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        'sans':    ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'mono':    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['3.5rem',  { lineHeight: '1.05', letterSpacing: '-0.02em',  fontWeight: '600' }],
        'display-lg': ['2.75rem', { lineHeight: '1.1',  letterSpacing: '-0.02em',  fontWeight: '600' }],
        'display-md': ['2.125rem',{ lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
      },
      borderRadius: {
        'card': '14px',
        'pill': '999px',
      },
      boxShadow: {
        'soft':     '0 1px 2px rgba(16, 26, 41, 0.04), 0 2px 6px rgba(16, 26, 41, 0.04)',
        'elevated': '0 2px 6px rgba(16, 26, 41, 0.05), 0 12px 28px rgba(16, 26, 41, 0.07)',
        'focus':    '0 0 0 3px rgba(20, 166, 118, 0.25)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  safelist: [
    'text-biotech-red', 'text-biotech-green', 'text-biotech-blue', 'text-biotech-yellow', 'text-biotech-white',
    'bg-biotech-red', 'bg-biotech-green', 'bg-biotech-blue', 'bg-biotech-yellow', 'bg-biotech-white',
    'border-biotech-red', 'border-biotech-green', 'border-biotech-blue', 'border-biotech-yellow', 'border-biotech-white',
    // Legacy aliases may still be produced at runtime
    'text-lab-blue', 'text-lab-teal', 'text-lab-purple', 'bg-lab-blue', 'bg-lab-teal', 'bg-lab-purple',
  ],
  plugins: [],
}
