import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
// import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../pages/_app';
import Image from 'next/image';

// Dynamically import components with no SSR
// const ThreeScene = dynamic(() => import('../components/ThreeScene'), {
//   ssr: false,
//   loading: () => <div className="w-full h-full bg-gray-900" />
// });

// const ParticleText = dynamic(() => import('../components/ParticleText'), {
//   ssr: false,
//   loading: () => <div className="w-full h-full flex items-center justify-center">
//     <div className="loading-spinner"></div>
//   </div>
// });

// const AnimatedCursor = dynamic(() => import('../components/AnimatedCursor'), {
//   ssr: false
// });

// const SkillsGrid = dynamic(() => import('../components/SkillsGrid'), {
//   ssr: false,
//   loading: () => <div className="w-full h-[500px] bg-gray-900 rounded-lg animate-pulse" />
// });

// const ParallaxSection = dynamic(() => import('../components/ParallaxSection'), {
//   ssr: false
// });

// const ProjectGrid = dynamic(() => import('../components/ProjectGrid'), {
//   ssr: false,
//   loading: () => <div className="w-full h-[600px] bg-gray-900 rounded-lg animate-pulse" />
// });

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const ResumeTabs = dynamic(() => import('../components/ResumeTabs'), { ssr: false });

// const ThemeToggle = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
//       {theme === 'dark' ? '💡' : '🌙'}
//     </div>
//   );
// };

// Temporary comment to force Vercel re-build

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
    <div
      className={`scroll-to-top ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} transition-all duration-300`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ⬆️
    </div>
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  // const [showParticleText, setShowParticleText] = useState(true);
  // const { theme, toggleTheme } = useTheme();

  // Embedded gradient placeholder for images (SVG as data URL)
  const placeholder = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1e3a8a"/>
          <stop offset="50%" stop-color="#3b82f6"/>
          <stop offset="100%" stop-color="#7c3aed"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
    </svg>
  `);

  useEffect(() => {
    setMounted(true);
    
    // Switch between 3D scene and particle text every 10 seconds
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
      title: '3D E-Commerce Platform',
      description: 'An immersive shopping experience with 3D product visualization. Users can interact with products in a virtual environment before making purchase decisions.',
      url: 'https://github.com/Tushar-Jain07',
      image: placeholder
    },
    {
      title: 'AI-Powered Dashboard',
      description: 'Real-time analytics dashboard with machine learning insights. Provides predictive analytics and data visualization for business intelligence.',
      url: 'https://github.com/Tushar-Jain07/ai-powered-dashboard',
      image: placeholder
    },
    {
      title: 'Virtual Art Gallery',
      description: 'Interactive 3D gallery showcasing digital artwork. Visitors can explore exhibitions in a virtual space with immersive audio-visual experiences.',
      url: 'https://github.com/Tushar-Jain07',
      image: placeholder
    },
    {
      title: 'Blockchain Voting App',
      description: 'Secure and transparent voting application built on blockchain technology. Ensures tamper-proof elections with real-time results.',
      url: 'https://github.com/Tushar-Jain07',
      image: placeholder
    }
  ];

  const skills = [
    'React', 'JavaScript', 'TypeScript',
    'Node.js', 'Python',
    'TailwindCSS', 'GraphQL',
    'MongoDB',
  ];

  return (
    <div className="min-h-screen hero-gradient text-white">
      {/* {mounted && <AnimatedCursor />} */}
      <Navbar />
      {/* <ThemeToggle /> */}
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* {mounted && (
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
        )} */}

        <div className="relative z-10 text-center">
          <p
            className="text-sm uppercase tracking-widest text-gray-300 mb-2"
          >
            Hey! I am
          </p>
          <h1
            className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Tushar Jain
          </h1>
          <p
            className="text-2xl text-gray-200"
          >
            I'm a Full Stack Developer
          </p>
          <div
            className="mt-8"
          >
            <a 
              href="#projects" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-900">
        <h2
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </h2>
        <p
          className="text-lg text-gray-300 max-w-3xl mx-auto text-center"
        >
            As a passionate Full Stack Developer, I thrive on building impactful digital experiences.
            My expertise spans modern web technologies, where I focus on crafting robust, scalable, and intuitive applications.
            I am driven by a desire to combine innovative solutions with clean code, delivering projects that are both highly functional and a joy to use.
          </p>
          <div className="max-w-3xl mx-auto mt-10 text-gray-300">
            <p><span className="text-white font-semibold">Name:</span> Tushar Jain</p>
            <p><span className="text-white font-semibold">Email:</span> tusharjain1911@gmail.com</p>
            <p><span className="text-white font-semibold">Address:</span> Ahmedabad, India</p>
            <p><span className="text-white font-semibold">Role:</span> Full Stack Developer</p>
            <p><span className="text-white font-semibold">Freelance:</span> Available</p>
          </div>
          <div className="text-center mt-8">
            <a href="/Tushar_Jain_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">Download Resume</a>
          </div>
      </section>

      {/* Freelancing CTA */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-3">I'm Available for freelancing</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">I take on selected freelance projects where I can deliver high impact with modern web technologies.</p>
          <a href="#contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">Hire me</a>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 bg-gray-900 relative">
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2
            className="text-4xl font-bold mb-8 text-center"
          >
            Resume
          </h2>
          {mounted && <ResumeTabs />}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2
            className="text-4xl font-bold mb-16 text-center"
          >
            My Skills
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700 text-white px-4 py-2 rounded-full text-lg"
              >
                {skill}
              </span>
            ))}
          </div>
          
          {/* <p
            className="text-lg text-gray-300 max-w-3xl mx-auto mt-16 text-center"
          >
            These are the core technologies I work with. I&apos;m constantly learning and adding new skills to my toolkit.
          </p> */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-black/70 to-purple-900/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2
            className="text-4xl font-bold mb-16 text-center"
          >
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* <p
            className="text-lg text-gray-300 max-w-3xl mx-auto mt-16 text-center"
          >
            These projects showcase my skills and experience in building modern web applications.
          </p> */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900">
        <h2
          className="text-4xl font-bold mb-8 text-center"
        >
          Get in Touch
        </h2>
        <div
          className="max-w-2xl mx-auto text-center"
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
              href="https://github.com/Tushar-Jain07"
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
        </div>
      </section>

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

      {/* Education Section */}
      <section id="education" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Education</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">BTech CSE from SVGU Ahmedabad</h3>
            </div>
          </div>
        </div>
      </section>
