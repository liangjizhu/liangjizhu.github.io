/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0a1623',
          soft: '#0f2133',
          card: '#132a3e',
          line: '#1f3a54',
        },
        ocean: {
          DEFAULT: '#00a8e8',
          deep: '#007ea7',
          dark: '#003459',
        },
        seafoam: '#7ec8d9',
        amber: {
          DEFAULT: '#f4b860',
          deep: '#e09f3e',
        },
        ivory: '#f2efe9',
        slate: {
          muted: '#a6b7c3',
          deep: '#64798a',
        },
      },
      opacity: {
        15: '0.15',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        85: '0.85',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'blink': 'blink 1.2s step-end infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(ellipse at top, rgba(0,168,232,0.15), transparent 60%), radial-gradient(ellipse at bottom, rgba(244,184,96,0.08), transparent 60%)',
      },
    },
  },
  plugins: [],
};
