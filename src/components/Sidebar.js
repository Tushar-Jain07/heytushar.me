import React, { useState } from 'react';
import { FiMail, FiPhone, FiCalendar, FiMapPin, FiChevronDown } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <aside className="glass-card p-6 md:p-8 md:sticky md:top-8 h-max w-full xl:w-[280px]">
      <div className="flex xl:flex-col items-center gap-6 xl:gap-4 relative">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden bg-[#2a2a2b] flex-shrink-0 flex items-center justify-center border-2 border-cardBorder shadow-lg">
          {/* Avatar Placeholder */}
          <img 
            src="https://ui-avatars.com/api/?name=Tushar+Jain&background=ffdb70&color=121212&size=200&font-size=0.4" 
            alt="Tushar Jain" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col xl:items-center text-left xl:text-center flex-1">
          <h1 className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight mb-2">Tushar Jain</h1>
          <div className="bg-[#2b2b2c] text-text-primary px-4 py-1.5 rounded-lg text-sm font-medium w-max mx-0 xl:mx-auto">
            Full Stack Developer
          </div>
        </div>

        <button 
          onClick={() => setShowContacts(!showContacts)}
          className="xl:hidden absolute top-0 right-0 p-2 text-accent border border-cardBorder rounded-lg bg-[linear-gradient(to_bottom_right,#2a2a2b_0%,#1c1c1d_100%)] shadow-md"
        >
          <FiChevronDown className={`w-5 h-5 transition-transform duration-300 ${showContacts ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className={`xl:block transition-all duration-500 overflow-hidden ${showContacts ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0 xl:max-h-[800px] xl:opacity-100 xl:mt-0'}`}>
        <div className="separator hidden xl:block"></div>

        <ul className="flex flex-col gap-6">
          <li className="flex items-center gap-4">
            <div className="icon-box">
              <FiMail />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Email</p>
              <a href="mailto:tusharjain1911@gmail.com" className="text-text-primary text-sm hover:text-accent transition-colors truncate block">
                tusharjain1911@gmail.com
              </a>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div className="icon-box">
              <FiPhone />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Phone</p>
              <a href="tel:+91" className="text-text-primary text-sm hover:text-accent transition-colors">
                Available on Request
              </a>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div className="icon-box">
              <FiCalendar />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Birthday</p>
              <time className="text-text-primary text-sm">November 19</time>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div className="icon-box">
              <FiMapPin />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Location</p>
              <address className="text-text-primary text-sm not-italic">
                Ahmedabad, India
              </address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="flex items-center justify-start xl:justify-center gap-4">
          <li>
            <a href="https://github.com/Tushar-Jain07" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tushar-jain-a5b54131b" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
