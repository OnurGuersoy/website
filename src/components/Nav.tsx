import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Drum, Cpu, Music, Calendar, FolderGit2, Mail, Menu, X } from 'lucide-react';

type Persona = 'music' | 'tech';

export default function Nav() {
  const [persona, setPersona] = useState<Persona>('music');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('persona') as Persona;
    if (stored === 'music' || stored === 'tech') {
      setPersona(stored);
      document.documentElement.dataset.persona = stored;
    } else {
      document.documentElement.dataset.persona = 'music';
    }
  }, []);

  const handleToggle = (newPersona: Persona) => {
    if (newPersona === persona) return;
    
    // Dispatch custom event for transition component
    const event = new CustomEvent('personaChange', { detail: { from: persona, to: newPersona } });
    window.dispatchEvent(event);

    setPersona(newPersona);
    localStorage.setItem('persona', newPersona);
    document.documentElement.dataset.persona = newPersona;
  };

  const navLinks = persona === 'music' 
    ? [
        { name: 'Music', href: '/website/music/', icon: Music },
        { name: 'Tour Dates', href: '/website/music/tour-dates/', icon: Calendar },
      ]
    : [
        { name: 'Projects', href: '/website/tech/', icon: FolderGit2 },
      ];

  const commonLinks = [
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  const allLinks = [...navLinks, ...commonLinks];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/website/" className="text-white font-bold text-xl tracking-widest hover:text-gray-300 transition-colors">
              ONUR GÜRSOY
            </a>
          </div>

          {/* Center Toggle */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative flex items-center p-1 bg-black/50 rounded-full border border-white/10 overflow-hidden cursor-pointer shadow-inner">
              <button
                onClick={() => handleToggle('music')}
                className={`relative z-10 flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${persona === 'music' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
              >
                <Drum size={16} />
                <span>DRUMMER</span>
              </button>
              <button
                onClick={() => handleToggle('tech')}
                className={`relative z-10 flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${persona === 'tech' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
              >
                <Cpu size={16} />
                <span>AI ENGINEER</span>
              </button>

              <motion.div
                className={`absolute inset-y-1 rounded-full ${persona === 'music' ? 'bg-gradient-to-r from-red-500 to-amber-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'}`}
                layoutId="nav-toggle-bg"
                initial={false}
                animate={{
                  left: persona === 'music' ? '0.25rem' : '50%',
                  right: persona === 'music' ? '50%' : '0.25rem'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {allLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  <Icon size={16} />
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-6">
              {/* Mobile Toggle */}
              <div className="flex justify-center pt-4">
                <div className="relative flex items-center p-1 bg-white/5 rounded-full border border-white/10">
                  <button
                    onClick={() => handleToggle('music')}
                    className={`relative z-10 flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${persona === 'music' ? 'text-black' : 'text-gray-400'}`}
                  >
                    <Drum size={16} />
                    DRUMMER
                  </button>
                  <button
                    onClick={() => handleToggle('tech')}
                    className={`relative z-10 flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${persona === 'tech' ? 'text-black' : 'text-gray-400'}`}
                  >
                    <Cpu size={16} />
                    AI ENGINEER
                  </button>
                  <motion.div
                    className={`absolute inset-y-1 rounded-full ${persona === 'music' ? 'bg-gradient-to-r from-red-500 to-amber-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'}`}
                    layoutId="mobile-nav-toggle-bg"
                    initial={false}
                    animate={{
                      left: persona === 'music' ? '0.25rem' : '50%',
                      right: persona === 'music' ? '50%' : '0.25rem'
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                </div>
              </div>

              {/* Mobile Links */}
              <div className="space-y-1">
                {allLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon size={20} className={persona === 'music' ? 'text-red-400' : 'text-cyan-400'} />
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
