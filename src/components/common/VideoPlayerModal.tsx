'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Volume2, ShieldAlert } from 'lucide-react';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
  category?: string;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  isOpen,
  onClose,
  videoUrl = '/sample.mp4',
  title = 'Featured Video',
  category = 'TLR Production'
}) => {
  if (!isOpen) return null;

  const isYouTube = videoUrl.includes('youtube') || videoUrl.includes('youtu.be');
  const isVimeo = videoUrl.includes('vimeo');

  const getYouTubeEmbed = (url: string) => {
    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
    } else if (url.includes('v=')) {
      videoId = url.split('v=')[1]?.split('&')[0] || '';
    } else if (url.includes('embed/')) {
      videoId = url.split('embed/')[1]?.split('?')[0] || '';
    }
    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  const getVimeoEmbed = (url: string) => {
    const videoId = url.split('vimeo.com/')[1]?.split('?')[0] || '';
    return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md">
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative w-full max-w-5xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl z-10"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/80">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400/80 px-2 py-0.5 rounded border border-amber-400/20 bg-amber-400/5">
                {category}
              </span>
              <h3 className="text-lg font-bold text-neutral-100 mt-1 font-serif">
                {title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center">
            {isYouTube ? (
              <iframe
                src={getYouTubeEmbed(videoUrl)}
                title={title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : isVimeo ? (
              <iframe
                src={getVimeoEmbed(videoUrl)}
                title={title}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            )}
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-neutral-950 border-t border-neutral-800/80 text-xs text-neutral-400">
            <span className="flex items-center gap-2">
              <Play className="w-3.5 h-3.5 text-amber-400" />
              TLR Cinema Player
            </span>
            <span className="font-mono text-[11px] text-neutral-500">
              JODHPUR STUDIO — WORLDWIDE DISTRIBUTION
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
