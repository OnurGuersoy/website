import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Drum, Cpu, Music, Calendar, FolderGit2, Mail, Menu, X } from 'lucide-react';
import { siteConfig } from '../config/site.config';
import { navigateToPersona } from './PersonaTransition';

type Persona = 'music' | 'tech';

export default function Nav() {
  const [persona, setPersona] = useState<Persona>('music');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { base, name, navigation } = siteConfig;

  useEffect(() => {
    const current = window.location.pathname.startsWith(`${base}/tech/`) ? 'tech'
      : window.location.pathname.startsWith(`${base}/music/`) ? 'music'
      : localStorage.getItem('persona') === 'tech' ? 'tech' : 'music';
    setPersona(current);
    document.documentElement.dataset.persona = current;
  }, [base]);

  const links = persona === 'music'
    ? [{ name: navigation.music, href: `${base}/music/`, icon: Music }, { name: navigation.tour, href: `${base}/music/tour-dates/`, icon: Calendar }]
    : [{ name: navigation.tech, href: `${base}/tech/`, icon: FolderGit2 }];
  const allLinks = [...links, { name: navigation.contact, href: '#contact', icon: Mail }];

  const switcher = (mobile: boolean) => (
    <div className="relative flex items-center rounded-full border border-white/15 bg-black/40 p-1">
      {(['music', 'tech'] as const).map((side) => {
        const Icon = side === 'music' ? Drum : Cpu;
        return (
          <button
            key={side}
            type="button"
            aria-pressed={persona === side}
            onClick={() => navigateToPersona(side)}
            className={`relative z-10 flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition-colors sm:px-4 ${persona === side ? 'text-[#151515]' : 'text-white/65 hover:text-white'}`}
          >
            {persona === side && (
              <motion.span
                layoutId={mobile ? 'mobile-persona' : 'desktop-persona'}
                className={`absolute inset-0 -z-10 rounded-full ${side === 'music' ? 'bg-[#df8c83]' : 'bg-[#82bcc9]'}`}
                transition={{ type: 'spring', stiffness: 340, damping: 32 }}
              />
            )}
            <Icon size={15} aria-hidden="true" />
            {side === 'music' ? navigation.musicPersona : navigation.techPersona}
          </button>
        );
      })}
    </div>
  );

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0c0d0f]/90 backdrop-blur-lg" aria-label="Primary navigation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href={`${base}/`} className="shrink-0 text-base font-semibold uppercase tracking-[0.14em] text-white hover:text-white/75 sm:text-lg">{name}</a>
          <div className="hidden flex-1 justify-center lg:flex">{switcher(false)}</div>
          <div className="hidden items-center gap-5 lg:gap-7 lg:flex">
            {allLinks.map((link) => {
              const Icon = link.icon;
              return <a key={link.name} href={link.href} className="flex items-center gap-1.5 whitespace-nowrap text-xs font-medium text-white/65 transition-colors hover:text-white lg:text-sm"><Icon size={15} aria-hidden="true" />{link.name}</a>;
            })}
          </div>
          <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} className="p-2 text-white/70 hover:text-white lg:hidden">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 bg-[#0c0d0f] lg:hidden">
            <div className="flex flex-col gap-4 px-5 py-6">
              <div className="flex justify-center">{switcher(true)}</div>
              {allLinks.map((link) => {
                const Icon = link.icon;
                return <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/75 hover:bg-white/5 hover:text-white"><Icon size={17} aria-hidden="true" />{link.name}</a>;
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
