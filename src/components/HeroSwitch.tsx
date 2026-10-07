import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function HeroSwitch() {
  const [hoveredSide, setHoveredSide] = useState<'music' | 'tech' | null>(null);
  const [selectedSide, setSelectedSide] = useState<'music' | 'tech' | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const musicWidth = useSpring(useMotionValue(50), { stiffness: 300, damping: 30 });
  const techWidth = useSpring(useMotionValue(50), { stiffness: 300, damping: 30 });
  const musicHeight = useSpring(useMotionValue(50), { stiffness: 300, damping: 30 });
  const techHeight = useSpring(useMotionValue(50), { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (selectedSide === 'music') {
      musicWidth.set(100); techWidth.set(0);
      musicHeight.set(100); techHeight.set(0);
    } else if (selectedSide === 'tech') {
      musicWidth.set(0); techWidth.set(100);
      musicHeight.set(0); techHeight.set(100);
    } else {
      if (isMobile) {
        musicHeight.set(hoveredSide === 'music' ? 65 : hoveredSide === 'tech' ? 35 : 50);
        techHeight.set(hoveredSide === 'tech' ? 65 : hoveredSide === 'music' ? 35 : 50);
        musicWidth.set(100); techWidth.set(100);
      } else {
        musicWidth.set(hoveredSide === 'music' ? 65 : hoveredSide === 'tech' ? 35 : 50);
        techWidth.set(hoveredSide === 'tech' ? 65 : hoveredSide === 'music' ? 35 : 50);
        musicHeight.set(100); techHeight.set(100);
      }
    }
  }, [hoveredSide, selectedSide, isMobile, musicWidth, techWidth, musicHeight, techHeight]);

  const handleSelect = (side: 'music' | 'tech') => {
    setSelectedSide(side);
    localStorage.setItem('persona', side);
    document.documentElement.dataset.persona = side;
    
    setTimeout(() => {
      window.location.href = `/website/${side}/`;
    }, 600);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col md:flex-row">
      {/* Music Side */}
      <motion.div
        className="relative flex items-center justify-center cursor-pointer overflow-hidden group"
        style={{ 
          width: isMobile ? '100%' : musicWidth, 
          height: isMobile ? musicHeight : '100%',
          willChange: 'width, height, transform'
        }}
        onMouseEnter={() => !selectedSide && setHoveredSide('music')}
        onMouseLeave={() => !selectedSide && setHoveredSide(null)}
        onClick={() => handleSelect('music')}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#3a0a0a] to-black opacity-90 transition-opacity group-hover:opacity-100" />
        
        {/* Grain Overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
        
        {/* Image Background overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity scale-110 group-hover:scale-100 transition-transform duration-1000"
          style={{ backgroundImage: 'url(/website/images/drumming-crowd-view.jpg)' }}
        />

        {/* Audio Waveform SVG */}
        <div className="absolute bottom-10 left-0 right-0 h-24 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
          <svg width="200" height="60" viewBox="0 0 200 60" className="stroke-red-500 fill-none stroke-[2]">
            <motion.path 
              d="M0,30 Q10,10 20,30 T40,30 T60,30 T80,30 T100,30 T120,30 T140,30 T160,30 T180,30 T200,30"
              animate={{
                d: [
                  "M0,30 Q10,10 20,30 T40,30 T60,30 T80,30 T100,30 T120,30 T140,30 T160,30 T180,30 T200,30",
                  "M0,30 Q10,50 20,30 T40,30 T60,30 T80,30 T100,30 T120,30 T140,30 T160,30 T180,30 T200,30",
                  "M0,30 Q10,10 20,30 T40,30 T60,30 T80,30 T100,30 T120,30 T140,30 T160,30 T180,30 T200,30"
                ]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-300 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] font-serif tracking-tighter">
            DRUMMER
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-red-200/80 font-light tracking-widest uppercase">
            Touring & Session
          </p>
        </div>
      </motion.div>

      {/* Tech Side */}
      <motion.div
        className="relative flex items-center justify-center cursor-pointer overflow-hidden group"
        style={{ 
          width: isMobile ? '100%' : techWidth,
          height: isMobile ? techHeight : '100%',
          willChange: 'width, height, transform'
        }}
        onMouseEnter={() => !selectedSide && setHoveredSide('tech')}
        onMouseLeave={() => !selectedSide && setHoveredSide(null)}
        onClick={() => handleSelect('tech')}
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-black via-[#0a1128] to-black opacity-90 transition-opacity group-hover:opacity-100" />
        
        {/* CSS Grid Pattern */}
        <div className="absolute inset-0 opacity-20"
             style={{ backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] font-sans tracking-tight">
            AI ENGINEER
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-cyan-200/80 font-mono tracking-wider">
            Machine Learning & AI
          </p>
        </div>
      </motion.div>

      {/* Center Divider Line */}
      <AnimatePresence>
        {!selectedSide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute z-20 ${isMobile ? 'left-0 right-0 h-1 top-1/2 -translate-y-1/2' : 'top-0 bottom-0 w-1 left-1/2 -translate-x-1/2'}`}
            style={isMobile ? { top: musicHeight } : { left: musicWidth }}
          >
            <div className={`w-full h-full bg-white/50 backdrop-blur-md shadow-[0_0_20px_2px_rgba(255,255,255,0.3)] animate-pulse`} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
