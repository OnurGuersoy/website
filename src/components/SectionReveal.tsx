import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export default function SectionReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 50, x: 0 };
      case 'left':
        return { x: 50, y: 0 };
      case 'right':
        return { x: -50, y: 0 };
      default:
        return { y: 50, x: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: delay,
        mass: 1,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
