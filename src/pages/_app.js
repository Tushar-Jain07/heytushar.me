import { useEffect, useState, createContext, useContext } from 'react';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

// Create a theme context with proper typing
export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  systemTheme: 'dark',
  setTheme: (theme) => {},
});

export const useTheme = () => useContext(ThemeContext);

function MyApp({ Component, pageProps, router }) {
  const [theme, setTheme] = useState('dark');
  const [systemTheme, setSystemTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      // Get saved theme from localStorage or use system preference
      const savedTheme = localStorage.getItem('theme');
      
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setSystemTheme(prefersDark ? 'dark' : 'light');
      
      // Set theme based on saved preference or system default
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        setTheme(prefersDark ? 'dark' : 'light');
      }
      
      setMounted(true);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, systemTheme, setTheme }}>
      <Head>
        <title>Tushar Jain | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Tushar Jain, a Full Stack Developer specializing in React, Next.js, Three.js, and modern web technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={theme === 'dark' ? '#111827' : '#ffffff'} />
        <meta property="og:title" content="Tushar Jain | Full Stack Developer" />
        <meta property="og:description" content="Portfolio of Tushar Jain, a Full Stack Developer specializing in React, Next.js, Three.js, and modern web technologies." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      {mounted && (
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      )}
    </ThemeContext.Provider>
  );
}

export default MyApp; 