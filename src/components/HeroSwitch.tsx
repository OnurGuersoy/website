import React from 'react';

export default function HeroSwitch() {
  const select = (side: 'music' | 'tech') => {
    localStorage.setItem('persona', side);
  };

  return (
    <div className="relative flex min-h-[600px] h-[100svh] flex-col bg-[#0c0c0c] md:flex-row">
      <a
        href="/website/music/"
        onClick={() => select('music')}
        className="group relative flex min-h-0 flex-1 items-center justify-center overflow-hidden border-b border-white/15 md:border-b-0 md:border-r focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-red-300"
        aria-label="Explore music and drumming"
      >
        <div className="absolute inset-0 bg-[#191414]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 grayscale transition-[opacity,filter,transform] duration-700 group-hover:scale-[1.03] group-hover:opacity-60 group-hover:grayscale-0 group-focus-visible:opacity-60"
          style={{ backgroundImage: 'url(/website/images/drumming-crowd-view.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/25" />
        <div className="relative z-10 w-full px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-red-200">On stage</span>
          <h1 className="mt-3 font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-none tracking-tight text-white">Drummer</h1>
          <p className="mt-4 text-sm tracking-wide text-white/75 md:text-base">Touring & session</p>
          <span className="mt-7 inline-block border-b border-red-300/60 pb-1 text-sm text-red-100">Explore music →</span>
        </div>
      </a>
      <a
        href="/website/tech/"
        onClick={() => select('tech')}
        className="group relative flex min-h-0 flex-1 items-center justify-center overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-cyan-300"
        aria-label="Explore AI engineering projects"
      >
        <div className="absolute inset-0 bg-[#101b27]" />
        <div className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-50" style={{ backgroundImage: 'linear-gradient(rgba(148, 179, 193, 0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 179, 193, 0.14) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
        <div className="relative z-10 w-full px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">At the desk</span>
          <h1 className="mt-3 text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-none tracking-tight text-white">AI Engineer</h1>
          <p className="mt-4 text-sm tracking-wide text-white/75 md:text-base">Machine learning & software</p>
          <span className="mt-7 inline-block border-b border-cyan-300/60 pb-1 text-sm text-cyan-100">Explore tech →</span>
        </div>
      </a>
    </div>
  );
}
