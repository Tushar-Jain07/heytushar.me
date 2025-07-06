/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        text: 'var(--text)',
        cardBg: 'var(--card-bg)',
        cardBorder: 'var(--card-border)',
        ring: 'var(--ring)',
      }
    }
  },
  plugins: [],
}; 