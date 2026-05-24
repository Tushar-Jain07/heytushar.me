import React from 'react';

export default function About() {
  const services = [
    {
      title: 'Web Design',
      description: 'The most modern and high-quality design made at a professional level.',
      icon: (
        <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: 'Web Development',
      description: 'High-quality development of sites at the professional level using modern frameworks and technologies.',
      icon: (
        <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    }
  ];

  return (
    <article className="animate-fade-in pb-24 xl:pb-0">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary relative inline-block pb-4">
          About Me
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-accent rounded-full"></span>
        </h2>
      </header>

      <section className="text-text-secondary text-sm md:text-base leading-relaxed mb-10 space-y-4">
        <p>
          As a passionate Full Stack Developer, I thrive on building impactful digital experiences. My expertise spans modern web technologies, where I focus on crafting robust, scalable, and intuitive applications. I am driven by a desire to combine innovative solutions with clean code, delivering projects that are both highly functional and a joy to use.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-bold text-text-primary mb-6">Personal Info</h3>
        <ul className="grid md:grid-cols-2 gap-4 text-sm md:text-base text-text-secondary">
          <li><span className="font-semibold text-text-primary">Name:</span> Tushar Jain</li>
          <li><span className="font-semibold text-text-primary">Email:</span> tusharjain1911@gmail.com</li>
          <li><span className="font-semibold text-text-primary">Address:</span> Ahmedabad, India</li>
          <li><span className="font-semibold text-text-primary">Role:</span> Full Stack Developer</li>
          <li><span className="font-semibold text-text-primary">Freelance:</span> Available</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-text-primary mb-6">What I'm Doing</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-[#2b2b2c]/40 border border-cardBorder rounded-xl p-6 flex gap-4 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="mt-1 flex-shrink-0 z-10">
                {service.icon}
              </div>
              <div className="z-10">
                <h4 className="text-lg font-bold text-text-primary mb-2">{service.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
