import React from 'react';
import Image from 'next/image';
import projectsData from '../../data/projects';
import { FiEye } from 'react-icons/fi';

export default function Portfolio() {
  return (
    <article className="animate-fade-in pb-24 xl:pb-0">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary relative inline-block pb-4">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              onClick={() => window.open(project.url, '_blank')}
            >
              <div className="relative rounded-xl overflow-hidden mb-4 bg-[#2b2b2c] border border-cardBorder aspect-[4/3]">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                )}
                {/* Hover overlay with eye icon */}
                <div className="absolute inset-0 bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-[#2b2b2c] rounded-xl flex items-center justify-center text-accent shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <FiEye className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-text-secondary text-sm font-medium">{project.tags?.[0] || 'Web Development'}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
