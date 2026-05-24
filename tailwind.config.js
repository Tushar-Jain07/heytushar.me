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
        'accent-hover': 'var(--accent-hover)',
        background: 'var(--background)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        cardBg: 'var(--card-bg)',
        cardBorder: 'var(--card-border)',
        ring: 'var(--ring)',
      }
    }
  },
  plugins: [],
}; 