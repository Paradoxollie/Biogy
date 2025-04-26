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
        'lab-bg': '#f8fafc', // Light background
        'lab-lines': '#cbd5e1', // Subtle line color
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
} 