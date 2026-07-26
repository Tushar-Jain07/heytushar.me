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
      <header className="mb-6">
        <h2 className="text-3xl font-bold text-text-primary relative inline-block pb-4">
          My Skills
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-accent rounded-full" />
        </h2>
      </header>

      {/* Resume Download Button — above skills */}
      <div className="mb-8 flex justify-center">
        <a
          href="/Tushar_Jain_Resume.pdf"
          download
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 28px',
            borderRadius: '999px',
            background: 'rgba(30,30,32,0.85)',
            border: '1.5px solid rgba(240,192,64,0.35)',
            boxShadow: '0 0 18px 0 rgba(240,192,64,0.10)',
            color: '#f0c040',
            fontWeight: 600,
            fontSize: '0.95rem',
            textDecoration: 'none',
            letterSpacing: '0.01em',
            transition: 'border-color 0.25s, box-shadow 0.25s, background 0.25s',
            cursor: 'pointer',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(240,192,64,0.75)';
            e.currentTarget.style.boxShadow = '0 0 28px 2px rgba(240,192,64,0.22)';
            e.currentTarget.style.background = 'rgba(240,192,64,0.08)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(240,192,64,0.35)';
            e.currentTarget.style.boxShadow = '0 0 18px 0 rgba(240,192,64,0.10)';
            e.currentTarget.style.background = 'rgba(30,30,32,0.85)';
          }}
        >
          {/* Download tray icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
            <polyline points="8 12 12 16 16 12" />
            <line x1="12" y1="16" x2="12" y2="3" />
          </svg>
          Get My Resume
        </a>
      </div>

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

      {/* Education Section */}
      <section className="mt-10">
        {/* Section heading */}
        <div className="flex items-center gap-3 mb-6">
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(240,192,64,0.12)',
              border: '1px solid rgba(240,192,64,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {/* Book / graduation icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f0c040"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-text-primary">Education</h3>
        </div>

        {/* Education entry */}
        <div className="flex gap-4">
          {/* Golden dot */}
          <div className="flex flex-col items-center pt-1">
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#f0c040',
                flexShrink: 0,
                marginTop: '4px',
              }}
            />
          </div>

          <div>
            <p className="text-text-primary font-bold text-base leading-snug">
              Sardar Vallabhbhai Global University
            </p>
            <p
              style={{ color: '#f0c040', fontSize: '0.875rem', margin: '4px 0 8px' }}
            >
              Aug 2024 — June 2028
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              Bachelor of Technology in Computer Science with a strong focus on full
              stack development, algorithms, and software engineering principles.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
