import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import projectsData from '../data/projects';
import skillsData from '../data/skills';

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const ResumeTabs = dynamic(() => import('../components/ResumeTabs'), { ssr: false });
const ContactForm = dynamic(() => import('../components/ContactForm'), { ssr: false });


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
  const [visibleSections, setVisibleSections] = useState({});
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Implement intersection observer for animations
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const sections = document.querySelectorAll('.fade-in-section');
      let currentSectionId = 'home';

      const navOrder = [
        'home',
        'about',
        'resume',
        'skills',
        'projects',
        'contact',
      ];

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
            // track section order for scroll spy
            currentSectionId = entry.target.id;
            // logic: visible entries sorted by page order, not arbitrary entry order
            // Find top-most visible section by scroll order
            const visibleNow = entries.filter(e => e.isIntersecting).map(e => e.target.id);
            if (visibleNow.length > 0) {
              let topSection = navOrder.find(section => visibleNow.includes(section));
              if (topSection) setActiveSection(topSection);
            }
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      });

      sections.forEach(section => {
        observer.observe(section);
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [mounted]);

  return (
    <div className={`min-h-screen hero-gradient ${mounted ? '' : ''}`} style={{ color: 'var(--text-primary)' }}>
      <Navbar activeSection={activeSection} />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">

        <div className="relative z-10 text-center animate-fade-in">
          <p className="text-sm uppercase tracking-widest text-gray-300 mb-2">
            Hey! I am
          </p>
          <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Tushar Jain
          </h1>
          <p className="text-2xl text-gray-200">
            I'm a Full Stack Developer
          </p>
          <div className="mt-8">
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
      <section id="about" className="fade-in-section py-24" style={{
        opacity: visibleSections['about'] ? 1 : 0,
        transform: visibleSections['about'] ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        backgroundColor: 'var(--background)'
      }}>
        <h2
          className="text-4xl font-bold mb-8 text-center" style={{ color: 'var(--text-primary)' }}
        >
          About Me
        </h2>
        <p
          className="text-lg max-w-3xl mx-auto text-center" style={{ color: 'var(--text-secondary)' }}
        >
            As a passionate Full Stack Developer, I thrive on building impactful digital experiences.
            My expertise spans modern web technologies, where I focus on crafting robust, scalable, and intuitive applications.
            I am driven by a desire to combine innovative solutions with clean code, delivering projects that are both highly functional and a joy to use.
          </p>
          <div className="max-w-3xl mx-auto mt-10" style={{ color: 'var(--text-secondary)' }}>
            <p><span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Name:</span> Tushar Jain</p>
            <p><span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Email:</span> tusharjain1911@gmail.com</p>
            <p><span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Address:</span> Ahmedabad, India</p>
            <p><span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Role:</span> Full Stack Developer</p>
            <p><span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Freelance:</span> Available</p>
          </div>
      </section>

      {/* Freelancing CTA */}
      <section className="py-20" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>I'm Available for freelancing</h3>
          <p className="max-w-2xl mx-auto mb-6" style={{ color: 'var(--text-secondary)' }}>I take on selected freelance projects where I can deliver high impact with modern web technologies.</p>
          <a href="#contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">Hire me</a>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="fade-in-section py-24 relative" style={{
        opacity: visibleSections['resume'] ? 1 : 0,
        transform: visibleSections['resume'] ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        backgroundColor: 'var(--background)'
      }}>
        <div className="container mx-auto px-4 relative z-10">
          <h2
            className="text-4xl font-bold mb-8 text-center" style={{ color: 'var(--text-primary)' }}
          >
            Resume
          </h2>
          {mounted && <ResumeTabs />}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="fade-in-section relative py-24" style={{
        opacity: visibleSections['skills'] ? 1 : 0,
        transform: visibleSections['skills'] ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        backgroundColor: 'var(--card-bg)'
      }}>
        <div className="container mx-auto px-4 relative z-10">
          <h2
            className="text-4xl font-bold mb-16 text-center" style={{ color: 'var(--text-primary)' }}
          >
            My Skills
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-lg border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  color: 'var(--text-primary)',
                  borderColor: 'var(--card-border)',
                }}
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
      <section id="projects" className="fade-in-section py-24 relative" style={{
        opacity: visibleSections['projects'] ? 1 : 0,
        transform: visibleSections['projects'] ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-black/70 to-purple-900/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2
            className="text-4xl font-bold mb-16 text-center"
          >
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-600/40 to-purple-600/40 flex items-center justify-center overflow-hidden">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                  <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ backgroundColor: 'var(--card-border)', color: 'var(--text-muted)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-lg transition-colors text-white"
                    style={{ backgroundColor: 'var(--primary)' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--primary-hover)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--primary)'}
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
      <section id="contact" className="fade-in-section py-24" style={{
        opacity: visibleSections['contact'] ? 1 : 0,
        transform: visibleSections['contact'] ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        backgroundColor: 'var(--background)'
      }}>
        <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>
          Get in Touch
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8 text-center" style={{ color: 'var(--text-secondary)' }}>
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          {mounted && <ContactForm />}
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>Or connect with me on</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:tusharjain1911@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors text-white"
                style={{ backgroundColor: '#2563eb' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email
              </a>
              <a
                href="https://github.com/Tushar-Jain07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors text-white"
                style={{ backgroundColor: '#374151' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#4b5563'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tushar-jain-a5b54131b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors text-white"
                style={{ backgroundColor: '#1d4ed8' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1e40af'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#1d4ed8'}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="container mx-auto px-4 text-center" style={{ color: 'var(--text-muted)' }}>
          <p>&copy; {new Date().getFullYear()} Tushar Jain. All rights reserved.</p>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
}
