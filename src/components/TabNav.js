import React from 'react';

export default function TabNav({ activeTab, setActiveTab, isMobile }) {
  const tabs = ['About', 'Resume', 'Portfolio', 'Contact'];

  // Mobile nav should be a transparent/glass-less container because it sits inside a glass-card wrapper on mobile now
  const desktopClasses = "absolute top-0 right-0 z-10 w-auto bg-[#2b2b2c] border-l border-b border-cardBorder rounded-bl-[2rem] px-0";
  const mobileClasses = "w-full";

  const ulDesktopClasses = "flex justify-end";
  const ulMobileClasses = "flex justify-center gap-4 flex-wrap";

  return (
    <nav className={isMobile ? mobileClasses : desktopClasses}>
      <ul className={isMobile ? ulMobileClasses : ulDesktopClasses}>
        {tabs.map((tab) => (
          <li key={tab} className={isMobile ? "" : "text-center"}>
            <button
              onClick={() => {
                setActiveTab(tab.toLowerCase());
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`
                transition-colors font-medium
                ${isMobile ? "text-sm md:text-base px-2 py-1" : "w-full px-8 py-5 text-sm"}
                ${activeTab === tab.toLowerCase() ? 'text-accent' : 'text-text-secondary hover:text-text-primary'}
              `}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
