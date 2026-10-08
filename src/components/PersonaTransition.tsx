import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { siteConfig } from '../config/site.config';

type Persona = 'music' | 'tech';
type Transition = { to: Persona; url: string };

export function navigateToPersona(to: Persona) {
  const url = `${siteConfig.base}/${to}/`;
  localStorage.setItem('persona', to);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.location.assign(url);
    return;
  }
  window.dispatchEvent(new CustomEvent<Transition>('personaChange', { detail: { to, url } }));
}

export default function PersonaTransition() {
  const [transition, setTransition] = useState<Transition | null>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<Transition>).detail;
      setTransition(detail);
      clearTimeout(timeout);
      timeout = setTimeout(() => window.location.assign(detail.url), 560);
    };
    window.addEventListener('personaChange', onChange);
    return () => { window.removeEventListener('personaChange', onChange); clearTimeout(timeout); };
  }, []);

  return (
    <AnimatePresence>
      {transition && (
        <motion.div
          role="presentation"
          aria-hidden="true"
          className={`fixed inset-0 z-[100] pointer-events-none ${transition.to === 'tech' ? 'bg-[#15242d]' : 'bg-[#2b1c1c]'}`}
          initial={{ clipPath: transition.to === 'tech' ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)' }}
          animate={{ clipPath: 'inset(0 0 0 0)' }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
    </AnimatePresence>
  );
}
