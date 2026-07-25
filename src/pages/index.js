import React, { useState } from 'react';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import TabNav from '../components/TabNav';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <>
      <Head>
        <title>Tushar Jain | Portfolio</title>
      </Head>
      <div className="min-h-screen bg-background text-text-primary font-sans flex items-center justify-center p-4 md:p-8 xl:p-12 relative">
        <main className="max-w-[1200px] w-full flex flex-col xl:flex-row gap-6 mx-auto relative z-10">
          
          <Sidebar />

          <div className="flex-1 min-w-0 xl:w-[75%] relative flex flex-col">
            {/* Mobile/Tablet TabNav (Separate Card) */}
            <div className="xl:hidden glass-card py-4 px-6 mb-6">
              <TabNav activeTab={activeTab} setActiveTab={setActiveTab} isMobile={true} />
            </div>

            <div className="glass-card p-6 md:p-8 lg:p-10 xl:min-h-[800px] bg-cardBg border-cardBorder relative">
              {/* Desktop TabNav (Absolute inside main card) */}
              <div className="hidden xl:block">
                <TabNav activeTab={activeTab} setActiveTab={setActiveTab} isMobile={false} />
              </div>
              
              {activeTab === 'about' && <About />}
              {activeTab === 'portfolio' && <Portfolio />}
              {activeTab === 'contact' && <Contact />}
            </div>
          </div>

        </main>
      </div>
    </>
  );
}
