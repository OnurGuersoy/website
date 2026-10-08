import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site.config';
import { navigateToPersona } from './PersonaTransition';

export default function HeroSwitch() {
  const { hero, base } = siteConfig;

  return (
    <section className="relative flex min-h-[620px] h-[100svh] flex-col bg-[#101114] md:flex-row" aria-label={siteConfig.title}>
      <a
        href={`${base}/music/`}
        onClick={(event) => { event.preventDefault(); navigateToPersona('music'); }}
        className="group relative flex min-h-0 flex-1 items-center justify-center overflow-hidden border-b border-white/15 md:border-b-0 md:border-r focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-amber-300"
      >
        <motion.div className="absolute inset-0 bg-[#1b1818]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45 grayscale transition-[opacity,filter,transform] duration-700 group-hover:scale-[1.03] group-hover:opacity-65 group-hover:grayscale-0 group-focus-visible:opacity-65"
          style={{ backgroundImage: `url(${hero.music.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
        <div className="relative z-10 w-full px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-200">{hero.music.eyebrow}</span>
          <h2 className="mt-3 text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.06em] text-white">{hero.music.label}</h2>
          <p className="mt-4 text-sm tracking-wide text-white/75 md:text-base">{hero.music.description}</p>
          <span className="mt-7 inline-block border-b border-rose-300/60 pb-1 text-sm text-rose-100">{hero.music.action} ↗</span>
        </div>
      </a>
      <a
        href={`${base}/tech/`}
        onClick={(event) => { event.preventDefault(); navigateToPersona('tech'); }}
        className="group relative flex min-h-0 flex-1 items-center justify-center overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-cyan-300"
      >
        <div className="absolute inset-0 bg-[#121b22]" />
        <div className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-50" style={{ backgroundImage: 'linear-gradient(rgba(148, 179, 193, 0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 179, 193, 0.14) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
        <div className="relative z-10 w-full px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">{hero.tech.eyebrow}</span>
          <h2 className="mt-3 text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.06em] text-white">{hero.tech.label}</h2>
          <p className="mt-4 text-sm tracking-wide text-white/75 md:text-base">{hero.tech.description}</p>
          <span className="mt-7 inline-block border-b border-cyan-300/60 pb-1 text-sm text-cyan-100">{hero.tech.action} ↗</span>
        </div>
      </a>
    </section>
  );
}
