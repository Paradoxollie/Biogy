/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lab-blue': '#3b82f6', // Example Blue
        'lab-purple': '#8b5cf6', // Example Purple
        'lab-teal': '#14b8a6', // Example Teal
        'lab-green': '#22c55e', // Added Green
        'lab-bg': '#f8fafc', // Light background
        'lab-lines': '#cbd5e1', // Subtle line color
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'handwriting': ['Caveat', 'cursive'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'bubble1': 'bubble 3s ease-in-out infinite 0.2s',
        'bubble2': 'bubble 2.5s ease-in-out infinite 0.7s',
        'float': 'float 6s ease-in-out infinite',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'microscope-scan': 'microscopeScan 15s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'dna-rotate': 'dnaRotate 12s linear infinite',
        'dna-pulse': 'dnaPulse 4s ease-in-out infinite',
        'orbit-1': 'orbit 12s linear infinite',
        'orbit-2': 'orbit 15s linear infinite reverse',
        'orbit-3': 'orbit 10s linear infinite',
        'orbit-4': 'orbit 18s linear infinite',
        'orbit-5': 'orbit 20s linear infinite reverse',
        'spin': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%': { filter: 'drop-shadow(0 0 0 rgba(139, 92, 246, 0))' },
          '50%': { filter: 'drop-shadow(0 0 3px rgba(139, 92, 246, 0.5))' },
          '100%': { filter: 'drop-shadow(0 0 0 rgba(139, 92, 246, 0))' },
        },
        bubble: {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '20%': { opacity: '0.8', transform: 'translateY(-8px) scale(1.1)' },
          '40%': { opacity: '0.4', transform: 'translateY(-14px) scale(1)' },
          '80%': { opacity: '0', transform: 'translateY(-24px) scale(0.8)' },
          '100%': { opacity: '0', transform: 'translateY(-30px) scale(0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-3px) rotate(0.5deg)' },
          '50%': { transform: 'translateY(-5px) rotate(-0.5deg)' },
          '75%': { transform: 'translateY(-2px) rotate(0.25deg)' },
        },
        microscopeScan: {
          '0%': { transform: 'translateX(0%) translateY(0%)' },
          '25%': { transform: 'translateX(15%) translateY(10%)' },
          '50%': { transform: 'translateX(5%) translateY(25%)' },
          '75%': { transform: 'translateX(-10%) translateY(5%)' },
          '100%': { transform: 'translateX(0%) translateY(0%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        dnaRotate: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        dnaPulse: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(60px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(60px) rotate(-360deg)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'glow': '0 0 8px 2px rgba(255, 255, 255, 0.3)',
      },
    },
  },
  safelist: [
    'text-lab-blue', 'text-lab-purple', 'text-lab-teal', 'text-lab-green',
    'bg-lab-blue', 'bg-lab-purple', 'bg-lab-teal', 'bg-lab-green',
    'hover:text-lab-blue', 'hover:text-lab-purple', 'hover:text-lab-teal', 'hover:text-lab-green',
    'animate-orbit-1', 'animate-orbit-2', 'animate-orbit-3', 'animate-orbit-4', 'animate-orbit-5', 'shadow-glow',
    'bg-amber-400', 'bg-green-400', 'bg-red-400', 'bg-yellow-300', 'bg-indigo-300'
  ],
  plugins: [],
}