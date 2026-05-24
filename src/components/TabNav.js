import React from 'react';

export default function TabNav({ activeTab, setActiveTab }) {
  const tabs = ['About', 'Resume', 'Portfolio', 'Contact'];

  return (
    <nav className="xl:absolute xl:top-0 xl:right-0 z-10 w-full xl:w-auto mt-4 xl:mt-0 fixed bottom-0 left-0 right-0 bg-[#2b2b2c]/90 backdrop-blur-md xl:bg-[#2b2b2c] xl:backdrop-blur-none border-t xl:border-t-0 xl:border-l xl:border-b border-cardBorder xl:rounded-bl-[2rem] xl:rounded-none rounded-t-2xl px-4 xl:px-0">
      <ul className="flex justify-between xl:justify-end">
        {tabs.map((tab) => (
          <li key={tab} className="flex-1 xl:flex-none text-center">
            <button
              onClick={() => {
                setActiveTab(tab.toLowerCase());
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full px-2 xl:px-8 py-4 xl:py-5 text-sm font-medium transition-colors ${
                activeTab === tab.toLowerCase()
                  ? 'text-accent'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
