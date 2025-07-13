import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../pages/_app';
import Image from 'next/image';

// Dynamically import components with no SSR
const ThreeScene = dynamic(() => import('../components/ThreeScene'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-900" />
});

const ParticleText = dynamic(() => import('../components/ParticleText'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">
    <div className="loading-spinner"></div>
  </div>
});

const AnimatedCursor = dynamic(() => import('../components/AnimatedCursor'), {
  ssr: false
});

const SkillsGrid = dynamic(() => import('../components/SkillsGrid'), {
  ssr: false,
  loading: () => <div className="w-full h-[500px] bg-gray-900 rounded-lg animate-pulse" />
});

const ParallaxSection = dynamic(() => import('../components/ParallaxSection'), {
  ssr: false
});

const ProjectGrid = dynamic(() => import('../components/ProjectGrid'), {
  ssr: false,
  loading: () => <div className="w-full h-[600px] bg-gray-900 rounded-lg animate-pulse" />
});

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? '💡' : '🌙'}
    </div>
  );
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <motion.div
      className="scroll-to-top"
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.3 }}
      aria-label="Scroll to top"
    >
      ⬆️
    </motion.div>
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showParticleText, setShowParticleText] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    
    // Always show ParticleText for debugging
    setShowParticleText(true);
    // Clear the interval to prevent switching
    // const interval = setInterval(() => {
    //   setShowParticleText(prev => !prev);
    // }, 10000);
    
    // return () => clearInterval(interval);
  }, []);

  // Implement intersection observer for lazy loading
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const lazyElements = document.querySelectorAll('.lazy-load');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('lazy-load');
            entry.target.classList.remove('lazy-placeholder');
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '200px', // Load when within 200px of viewport
        threshold: 0.1
      });
      
      lazyElements.forEach(element => {
        observer.observe(element);
      });
      
      return () => {
        lazyElements.forEach(element => {
          observer.unobserve(element);
        });
      };
    }
  }, [mounted]);

  const projects = [
    {
      title: 'AI-Powered Dashboard',
      description: 'Real-time analytics dashboard with machine learning insights. Provides predictive analytics and data visualization for business intelligence.',
      url: 'https://github.com/Tushar-Jain07/ai-powered-dashboard',
      image: '/images/image_2.jpg'
    },
    {
      title: 'Blockchain Voting App',
      description: 'Secure and transparent voting application built on blockchain technology. Ensures tamper-proof elections with real-time results.',
      url: 'https://github.com/Tushar-Jain07',
      image: '/images/image_4.jpg'
    }
  ];

  const skills = [
    'React', 'JavaScript', 'TypeScript', 
    'Node.js', 'Python',
    'TailwindCSS', 'GraphQL',
    'MongoDB', 'PostgreSQL',
    'Docker',
    'Framer Motion'
  ];

  return (
    <div className="min-h-screen hero-gradient text-white">
      {mounted && <AnimatedCursor />}
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {mounted && (
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              {showParticleText ? (
                <motion.div
                  key="particleText"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full"
                >
                  <ParticleText text="TUSHAR JAIN" />
                </motion.div>
              ) : (
                <motion.div
                  key="threeScene"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full"
                >
                  <ThreeScene />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Tushar Jain
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Full Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <a 
              href="#projects" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section with Parallax */}
      <ParallaxSection 
        backgroundImage="/images/image_6.jpg"
        height="auto"
        className="py-24"
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 max-w-3xl mx-auto text-center"
        >
            As a passionate Full Stack Developer, I thrive on building impactful digital experiences.
            My expertise spans modern web technologies, where I focus on crafting robust, scalable, and intuitive applications.
            I am driven by a desire to combine innovative solutions with clean code, delivering projects that are both highly functional and a joy to use.
          </motion.p>
      </ParallaxSection>

      {/* Skills Section with Grid */}
      <section className="py-24 bg-[url('/images/image_3.jpg')] bg-cover bg-center bg-fixed relative">
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center"
          >
            My Skills
          </motion.h2>
          
          {mounted && <SkillsGrid skills={skills} />}
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-3xl mx-auto mt-16 text-center"
          >
            These are the core technologies I work with. I&apos;m constantly learning and adding new skills to my toolkit.
          </motion.p>
        </div>
      </section>

      {/* Projects Section with Grid */}
      <section id="projects" className="py-24 bg-[url('/images/image_7.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-85"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center"
          >
            Featured Projects
          </motion.h2>
          
          {mounted && <ProjectGrid projects={projects} />}
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-3xl mx-auto mt-16 text-center"
          >
            These projects showcase my skills and experience in building modern web applications.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <ParallaxSection 
        backgroundImage="/images/image_2.jpg"
        height="auto"
        className="py-24"
        speed={0.3}
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card max-w-2xl mx-auto"
        >
          <p className="text-lg mb-4 text-center">
            I&apos;m always open to new opportunities and collaborations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:tusharjain1911@gmail.com"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://github.com/raj-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tushar-jain-a5b54131b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </ParallaxSection>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tushar Jain. All rights reserved.</p>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
} 