import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Education } from './components/Education';
import { Approach } from './components/Approach';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden bg-[#fafbfc] dark:bg-[#0c101d] text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
        <Navbar />
        
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Research />
          <Education />
          <Approach />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;
