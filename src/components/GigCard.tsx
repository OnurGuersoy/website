import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Play } from 'lucide-react';

interface GigCardProps {
  title: string;
  band: string;
  role: string;
  date: string;
  venue: string;
  city: string;
  description: string;
  videoUrl?: string;
  image?: string;
  isUpcoming: boolean;
  isFeatured: boolean;
}

export default function GigCard({
  title, band, role, date, venue, city, description, videoUrl, image, isUpcoming, isFeatured
}: GigCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border ${
        isFeatured ? 'border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-white/10'
      } p-6 flex flex-col group transition-colors`}
    >
      {/* Background Image optional */}
      {image && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={16} className={isFeatured ? "text-red-400" : "text-gray-400"} />
              <span className="text-sm font-medium text-gray-300">{date}</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
            <div className="text-lg font-semibold text-red-400 mt-1">{band}</div>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            {isUpcoming && (
              <span className="px-3 py-1 text-xs font-bold bg-red-500/20 text-red-400 rounded-full border border-red-500/30 animate-pulse">
                UPCOMING
              </span>
            )}
            <span className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-200 rounded-full">
              {role}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
          <MapPin size={16} />
          <span>{venue}, {city}</span>
        </div>

        <p className="text-gray-400 text-sm flex-grow mb-6">
          {description}
        </p>

        {videoUrl && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors w-max"
          >
            <Play size={16} />
            Watch Video
          </a>
        )}
      </div>
    </motion.div>
  );
}
