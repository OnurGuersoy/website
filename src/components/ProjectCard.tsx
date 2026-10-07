import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  github?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title, description, problem, solution, techStack, github, liveUrl
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="relative flex flex-col h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 overflow-hidden group hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-colors"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <div className="flex gap-3">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow space-y-4 mb-6">
        <div>
          <h4 className="text-xs font-semibold text-cyan-500 uppercase tracking-wider mb-1">The Problem</h4>
          <p className="text-sm text-gray-300 leading-relaxed">{problem}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">The Solution</h4>
          <p className="text-sm text-gray-300 leading-relaxed">{solution}</p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-auto pt-4 border-t border-white/10">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs font-medium bg-cyan-950/40 text-cyan-200 border border-cyan-800/50 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
