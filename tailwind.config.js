/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        void: '#02060d',
        cosmos: '#050d1a',
        'panel-dark': 'rgba(7, 19, 38, 0.74)',
        'panel-elevated': 'rgba(11, 29, 56, 0.82)',
        'cyan-glow': '#00e5ff',
        'cyan-primary': '#18a0fb',
        'cyan-muted': '#3874a8',
        'blue-atmosphere': '#1d63b8',
        'status-nominal': '#10e87a',
        'status-nominal-bg': 'rgba(8, 46, 34, 0.85)',
        'biometric-cardiac': '#ff3b5c',
        'biometric-thermal': '#ffb020',
        'status-alert': '#ff3b3b',
        'status-warning': '#f59e0b',
        'text-primary': '#f4f8ff',
        'text-secondary': '#94b0d1',
        'text-muted': '#5b789c',
      },
    },
  },
  plugins: [],
};
