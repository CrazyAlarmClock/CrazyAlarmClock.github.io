import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Hackathons } from './components/Hackathons';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Background } from './components/ui/Background';
import { CursorGlow } from './components/ui/CursorGlow';

const App: React.FC = () => {
  return (
    <main className="text-[#E2E2E6] font-sans selection:bg-md-sys-primaryContainer selection:text-md-sys-onPrimaryContainer relative min-h-screen">
      <Background />
      <CursorGlow />
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Hackathons />
        <Skills />
        <Contact />
      </div>
    </main>
  );
};

export default App;