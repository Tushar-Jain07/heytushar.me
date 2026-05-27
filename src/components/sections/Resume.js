import React from 'react';
import { FaJava, FaPython, FaJs, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si';
import { FiDownload } from 'react-icons/fi';

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
          href="/Tushar_Jain_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#2b2b2c]/80 border border-cardBorder text-accent px-6 py-4 rounded-2xl hover:bg-[#2b2b2c] hover:border-accent/50 hover:shadow-[0_0_15px_rgba(255,219,112,0.1)] transition-all duration-300 font-semibold tracking-wide"
        >
          <FiDownload className="w-5 h-5 stroke-[2.5]" />
          Get My Resume
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
