import React from 'react';
import { FaJava, FaPython, FaJs, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si';

export default function Resume() {
  const skills = [
    { name: 'Java', icon: <FaJava className="w-10 h-10 text-accent" /> },
    { name: 'C', icon: <SiC className="w-10 h-10 text-accent" /> },
    { name: 'Python & Flask', icon: <FaPython className="w-10 h-10 text-accent" /> },
    { name: 'C++', icon: <SiCplusplus className="w-10 h-10 text-accent" /> },
    { name: 'JS & TS', icon: <FaJs className="w-10 h-10 text-accent" /> },
    { name: 'Git & GitHub', icon: <FaGithub className="w-10 h-10 text-accent" /> }
  ];

  return (
    <article className="animate-fade-in pb-24 xl:pb-0">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary relative inline-block pb-4">
          Resume
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-accent rounded-full"></span>
        </h2>
      </header>

      {/* Download Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <a
          href="/Complete_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-transparent border border-accent text-accent px-6 py-3 rounded-xl hover:bg-accent hover:text-background transition-all duration-300 shadow-md font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          Download Resume (.pdf)
        </a>
      </div>

      <section>
        <h3 className="text-2xl font-bold text-text-primary mb-6">My Skills</h3>
        
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 bg-[#2b2b2c]/20 p-6 rounded-2xl border border-cardBorder shadow-sm">
          {skills.map((skill, index) => (
            <li key={index} className="bg-[#2b2b2c]/60 border border-cardBorder rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-accent/50 transition-colors shadow-sm group">
              <div className="flex items-center justify-center drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-text-primary text-sm font-medium text-center">{skill.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
