import React from 'react';
import { FiBookOpen } from 'react-icons/fi';

export default function Resume() {
  const skills = [
    { name: 'JavaScript & TypeScript', pct: '90%' },
    { name: 'Python & Flask', pct: '90%' },
    { name: 'Java', pct: '90%' },
    { name: 'C / C++', pct: '85%' },
    { name: 'React & Node.js', pct: '85%' },
    { name: 'Git & GitHub', pct: '85%' }
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
          href="/Raj-CV.docx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-transparent border border-accent text-accent px-6 py-3 rounded-xl hover:bg-accent hover:text-background transition-all duration-300 shadow-md font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume (.docx)
        </a>
      </div>

      <section className="mb-12 relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="icon-box">
            <FiBookOpen />
          </div>
          <h3 className="text-2xl font-bold text-text-primary">Education & Experience</h3>
        </div>

        <ol className="ml-12 pl-4 border-l border-cardBorder space-y-8">
          <li className="relative timeline-item pl-2">
            <h4 className="text-lg font-bold text-text-primary mb-1">Full Stack Developer</h4>
            <span className="text-accent text-sm font-medium mb-2 block">2023 — Present</span>
            <p className="text-text-secondary text-sm leading-relaxed">
              Developing scalable web applications using Next.js, React, Node.js, and Python. Specialized in building user-friendly and robust systems.
            </p>
          </li>
          <li className="relative timeline-item pl-2">
            <h4 className="text-lg font-bold text-text-primary mb-1">Computer Science & Engineering</h4>
            <span className="text-accent text-sm font-medium mb-2 block">University</span>
            <p className="text-text-secondary text-sm leading-relaxed">
              Studied core concepts of software engineering, data structures, algorithms, and web development.
            </p>
          </li>
        </ol>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-text-primary mb-6">My Skills</h3>
        
        <div className="bg-[#2b2b2c]/40 border border-cardBorder rounded-xl p-6 shadow-sm">
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-text-primary text-sm">{skill.name}</h5>
                  <span className="text-text-secondary text-sm">{skill.pct}</span>
                </div>
                <div className="w-full h-2 bg-[#1c1c1d] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent rounded-full transition-all duration-1000"
                    style={{ width: skill.pct }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
