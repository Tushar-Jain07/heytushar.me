import React from 'react';

export default function Resume() {
  const skills = [
    { name: 'Java', pct: '90%', category: 'Programming Language' },
    { name: 'C', pct: '85%', category: 'Programming Language' },
    { name: 'Python & Flask', pct: '90%', category: 'Backend & Data Science' },
    { name: 'C++', pct: '85%', category: 'Programming Language' },
    { name: 'JavaScript & TypeScript', pct: '90%', category: 'Programming Languages' },
    { name: 'Git & GitHub', pct: '85%', category: 'Version Control' }
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
        <a
          href="/Tushar_Jain_Resume.pdf"
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
        
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-[#2b2b2c]/40 border border-cardBorder rounded-xl p-6 shadow-sm hover:border-accent/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-medium text-text-primary text-sm">{skill.name}</h5>
                <span className="text-text-secondary text-sm">{skill.pct}</span>
              </div>
              <div className="w-full h-2 bg-[#1c1c1d] rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-accent rounded-full transition-all duration-1000"
                  style={{ width: skill.pct }}
                ></div>
              </div>
              <p className="text-xs text-text-muted">{skill.category}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
