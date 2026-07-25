import React from 'react';

const skills = [
  { abbr: 'JS',  label: 'JavaScript',  icon: null,    color: '#f7df1e' },
  { abbr: 'TS',  label: 'TypeScript',  icon: null,    color: '#3178c6' },
  { abbr: 'PY',  label: 'Python',      icon: null,    color: '#f0c040' },
  { abbr: 'NX',  label: 'Next.js',     icon: null,    color: '#f0c040' },
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
  { abbr: 'NJ',  label: 'Node.js',     icon: null,    color: '#68a063' },
  { abbr: 'TW',  label: 'Tailwind CSS',icon: null,    color: '#f0c040' },
  { abbr: 'SQL', label: 'SQL',         icon: null,    color: '#f0c040' },
  { abbr: 'MDB', label: 'MongoDB',     icon: null,    color: '#f0c040' },
  { abbr: 'PG',  label: 'PostgreSQL',  icon: null,    color: '#f0c040' },
  { abbr: 'API', label: 'REST APIs',   icon: null,    color: '#f0c040' },
  { abbr: 'GIT', label: 'Git',         icon: null,    color: '#f05032' },
];

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Gujarat University',
    period: '2024 – Present',
    description: 'Currently pursuing BCA with focus on full-stack web development, data structures, and software engineering.',
  },
  {
    degree: 'Higher Secondary (12th – Science)',
    institution: 'Gujarat Board',
    period: '2022 – 2024',
    description: 'Completed with Computer Science & Mathematics, building a strong foundation in programming logic.',
  },
];

const experience = [
  {
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    period: '2023 – Present',
    description: 'Built and deployed multiple full-stack web applications for clients, covering React, Next.js, Node.js, and database integrations.',
  },
];

function TimelineItem({ title, subtitle, period, description, isLast }) {
  return (
    <div className="relative pl-8">
      {/* Vertical line */}
      {!isLast && (
        <span className="absolute left-[7px] top-5 bottom-0 w-[2px] bg-cardBorder" />
      )}
      {/* Dot */}
      <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-accent border-2 border-background shadow" />
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <h4 className="text-text-primary font-semibold text-base">{title}</h4>
        <span className="text-xs bg-accent/15 text-accent px-2 py-0.5 rounded-full font-medium">{period}</span>
      </div>
      <p className="text-accent text-sm font-medium mb-1">{subtitle}</p>
      <p className="text-text-secondary text-sm leading-relaxed pb-6">{description}</p>
    </div>
  );
}

export default function Resume() {
  return (
    <article className="animate-fade-in pb-24 xl:pb-0">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary relative inline-block pb-4">
          Resume
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-accent rounded-full" />
        </h2>
      </header>

      {/* Education & Experience side by side */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">

        {/* Education */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4-4h8" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary">Education</h3>
          </div>
          <div>
            {education.map((item, i) => (
              <TimelineItem
                key={i}
                title={item.degree}
                subtitle={item.institution}
                period={item.period}
                description={item.description}
                isLast={i === education.length - 1}
              />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary">Experience</h3>
          </div>
          <div>
            {experience.map((item, i) => (
              <TimelineItem
                key={i}
                title={item.role}
                subtitle={item.company}
                period={item.period}
                description={item.description}
                isLast={i === experience.length - 1}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Divider */}
      <div className="h-px bg-cardBorder mb-8" />

      {/* Skills */}
      <section>
        <h3 className="text-2xl font-bold text-text-primary mb-6">My Skills</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="group bg-[#2b2b2c]/60 border border-cardBorder rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-accent/40 hover:bg-[#2b2b2c] transition-all duration-300 cursor-default"
            >
              {/* Icon / Abbreviation box */}
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
              {/* Label */}
              <span className="text-text-secondary text-xs text-center leading-tight group-hover:text-text-primary transition-colors">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
