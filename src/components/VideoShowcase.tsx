import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

interface Video {
  title: string;
  url: string;
  type?: 'youtube' | 'external';
}

interface Props {
  videos: Video[];
}

function getYoutubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

function VideoCard({ video }: { video: Video }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const isYoutube = video.type === 'youtube' || getYoutubeId(video.url) !== null;
  const ytId = isYoutube ? getYoutubeId(video.url) : null;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col group"
    >
      {isYoutube && ytId ? (
        <div
          className="relative aspect-video bg-black cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${ytId}?autoplay=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full absolute inset-0 border-0"
            />
          ) : (
            <>
              <img
                src={`https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 w-16 h-12 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-red-500 transition-colors">
                  <Play fill="white" className="w-6 h-6 text-white" />
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-video bg-gray-900 flex flex-col items-center justify-center hover:bg-gray-800 transition-colors"
        >
          <ExternalLink size={32} className="text-gray-400 mb-2" />
          <span className="text-sm text-gray-500">View External Link</span>
        </a>
      )}

      <div className="p-4">
        <h4 className="text-white font-medium line-clamp-2">{video.title}</h4>
      </div>
    </motion.div>
  );
}

export default function VideoShowcase({ videos }: Props) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {videos.map((video, idx) => (
        <VideoCard key={idx} video={video} />
      ))}
    </motion.div>
  );
}
