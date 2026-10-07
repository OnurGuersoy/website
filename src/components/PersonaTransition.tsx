import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TransitionData = {
  from: 'music' | 'tech';
  to: 'music' | 'tech';
} | null;

export default function PersonaTransition() {
  const [transitionData, setTransitionData] = useState<TransitionData>(null);

  useEffect(() => {
    const handleTransition = (e: Event) => {
      const customEvent = e as CustomEvent;
      setTransitionData(customEvent.detail);
      
      // Auto-hide after animation
      setTimeout(() => {
        setTransitionData(null);
      }, 800);
    };

    window.addEventListener('personaChange', handleTransition);
    return () => window.removeEventListener('personaChange', handleTransition);
  }, []);

  return (
    <AnimatePresence>
      {transitionData && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center"
          initial={{ clipPath: transitionData.to === 'tech' ? 'circle(0% at 0% 50%)' : 'circle(0% at 100% 50%)' }}
          animate={{ clipPath: 'circle(150% at 50% 50%)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          style={{
            background: transitionData.to === 'tech' 
              ? 'linear-gradient(to right, #0a1128, #06b6d4)' 
              : 'linear-gradient(to left, #3a0a0a, #ef4444)'
          }}
        >
          {/* Optional subtle overlay effects */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
