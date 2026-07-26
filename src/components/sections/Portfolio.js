import React from 'react';
import Image from 'next/image';
import projectsData from '../../data/projects';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Portfolio() {
  return (
    <article className="animate-fade-in pb-24 xl:pb-0">
      <header className="mb-8">
        <h2
          className="relative inline-block pb-4"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '32px',
            fontWeight: 700,
            color: '#FAFAFA',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
          }}
        >
          Portfolio
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-accent rounded-full"></span>
        </h2>
      </header>

      <section>
        <ul className="flex flex-wrap gap-6 text-text-secondary mb-8">
          <li className="text-accent text-sm font-medium cursor-pointer">All</li>
          <li className="text-sm cursor-pointer hover:text-text-primary transition-colors">Web Design</li>
          <li className="text-sm cursor-pointer hover:text-text-primary transition-colors">Applications</li>
          <li className="text-sm cursor-pointer hover:text-text-primary transition-colors">Web Development</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="group"
            >
              <div className="relative rounded-xl overflow-hidden mb-5 bg-[#2b2b2c] border border-cardBorder aspect-[4/3] shadow-md">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                )}
                {/* Hover overlay with Github and Live links */}
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-[#1c1c1d] hover:bg-accent hover:text-background text-accent rounded-xl flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-all duration-300 delay-75"
                        title="GitHub Repository"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-[#1c1c1d] hover:bg-accent hover:text-background text-accent rounded-xl flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-all duration-300 delay-150"
                        title="Live Demo"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-accent text-sm font-medium mb-3">{project.tags?.join(' • ') || 'Web Development'}</p>
              <p className="text-text-muted text-sm leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
