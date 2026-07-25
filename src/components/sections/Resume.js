import React from 'react';

const skills = [
  { abbr: 'JS',  label: 'JavaScript',  icon: null, color: '#f7df1e' },
  { abbr: 'TS',  label: 'TypeScript',  icon: null, color: '#3178c6' },
  { abbr: 'PY',  label: 'Python',      icon: null, color: '#f0c040' },
  { abbr: 'NX',  label: 'Next.js',     icon: null, color: '#f0c040' },
  {
    abbr: null,
    label: 'React',
    color: '#61dafb',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M12 10.11A1.87 1.87 0 1 1 10.13 12 1.88 1.88 0 0 1 12 10.11zm0-8.6c3.1 0 5.67 4.84 5.67 10.49 0 5.65-2.57 10.49-5.67 10.49S6.33 17.65 6.33 12C6.33 6.35 8.9 1.51 12 1.51zM4.22 6.75A33.67 33.67 0 0 1 7.1 8.06 33.4 33.4 0 0 1 6.28 12a33.4 33.4 0 0 1 .82 3.94A33.67 33.67 0 0 1 4.22 17.25C2.12 15.71.75 13.93.75 12s1.37-3.71 3.47-5.25zm15.56 0C21.88 8.29 23.25 10.07 23.25 12s-1.37 3.71-3.47 5.25a33.67 33.67 0 0 1-2.88-1.31A33.4 33.4 0 0 1 17.72 12a33.4 33.4 0 0 1-.82-3.94 33.67 33.67 0 0 1 2.88-1.31z"/>
      </svg>
    )
  },
  { abbr: 'NJ',  label: 'Node.js',     icon: null, color: '#68a063' },
  { abbr: 'TW',  label: 'Tailwind CSS',icon: null, color: '#f0c040' },
  { abbr: 'SQL', label: 'SQL',         icon: null, color: '#f0c040' },
  { abbr: 'MDB', label: 'MongoDB',     icon: null, color: '#f0c040' },
  { abbr: 'PG',  label: 'PostgreSQL',  icon: null, color: '#f0c040' },
  { abbr: 'API', label: 'REST APIs',   icon: null, color: '#f0c040' },
  { abbr: 'GIT', label: 'Git',         icon: null, color: '#f05032' },
];

export default function Resume() {
  return (
    <article className="animate-fade-in pb-24 xl:pb-0">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary relative inline-block pb-4">
          My Skills
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-accent rounded-full" />
        </h2>
      </header>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="group bg-[#2b2b2c]/60 border border-cardBorder rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-accent/40 hover:bg-[#2b2b2c] transition-all duration-300 cursor-default"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold shadow-inner"
              style={{ background: 'rgba(255,255,255,0.05)', color: skill.color }}
            >
              {skill.icon ? (
                <span style={{ color: skill.color }}>{skill.icon}</span>
              ) : (
                <span className="tracking-wide text-xs md:text-sm">{skill.abbr}</span>
              )}
            </div>
            <span className="text-text-secondary text-xs text-center leading-tight group-hover:text-text-primary transition-colors">
              {skill.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="/Tushar_Jain_Resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-200 shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
          </svg>
          Download Resume
        </a>
      </div>
    </article>
  );
}
