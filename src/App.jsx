import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import Hero from './components/Hero';
import Qualifications from './components/Qualifications';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Competencies from './components/Competencies';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-white dark:bg-corporate-950 text-corporate-900 dark:text-corporate-100 font-sans selection:bg-accent-gold selection:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-corporate-950/80 backdrop-blur-md border-b border-corporate-200 dark:border-corporate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-serif font-bold tracking-tight text-accent-navy dark:text-corporate-100">
                M. AL-DHUBAIBI <span className="text-accent-gold">YCPA</span>
              </span>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-xs font-bold uppercase tracking-widest hover:text-accent-gold transition-colors">About</a>
              <a href="#experience" className="text-xs font-bold uppercase tracking-widest hover:text-accent-gold transition-colors">Experience</a>
              <a href="#portfolio" className="text-xs font-bold uppercase tracking-widest hover:text-accent-gold transition-colors">Portfolio</a>
              <a href="#competencies" className="text-xs font-bold uppercase tracking-widest hover:text-accent-gold transition-colors">Expertise</a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-corporate-100 dark:hover:bg-corporate-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a href="mailto:mhdhubaibi@gmail.com" className="btn-primary py-2 px-6 text-xs uppercase tracking-widest">
                Contact
              </a>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-corporate-950 border-b border-corporate-200 dark:border-corporate-800 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-xs font-bold uppercase tracking-widest border-b border-corporate-100 dark:border-corporate-900">About</a>
                <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-xs font-bold uppercase tracking-widest border-b border-corporate-100 dark:border-corporate-900">Experience</a>
                <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-xs font-bold uppercase tracking-widest border-b border-corporate-100 dark:border-corporate-900">Portfolio</a>
                <a href="#competencies" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-xs font-bold uppercase tracking-widest">Expertise</a>
                <div className="pt-4">
                  <a href="mailto:mhdhubaibi@gmail.com" className="w-full btn-primary justify-center text-xs uppercase tracking-widest">
                    Contact Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        <Hero />
        <Qualifications />
        <Experience />
        <Portfolio />
        <Competencies />
      </main>

      <Footer />
    </div>
  );
}

export default App;
