import { motion } from 'framer-motion';

interface TechStackBadgeProps {
  name: string;
  color?: string;
}

export default function TechStackBadge({ name, color }: TechStackBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-white/5 border border-white/15 text-white/85 cursor-default"
      style={color ? { textShadow: `0 0 8px ${color}` } : {}}
    >
      {name}
    </motion.span>
  );
}
