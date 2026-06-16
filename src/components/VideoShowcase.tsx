import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, X, ChevronLeft, ChevronRight, Youtube, 
  PauseCircle, PlayCircle, Sparkles, MonitorPlay 
} from 'lucide-react';
import { PillBadge } from './ui/PillBadge';
import { useTranslation, Trans } from 'react-i18next';

// Add your YouTube video links here
const videos = [
  {
    id: 'video1',
    videoId: '8U5l0u4QZPk', 
    titleKey: 'video1Title',
    thumbnail: 'https://img.youtube.com/vi/8U5l0u4QZPk/maxresdefault.jpg',
    descriptionKey: 'video1Desc',
    tags: ['Presentation', 'Workstation']
  },
  {
    id: 'video2',
    videoId: '_NK4GSZseck',
    titleKey: 'video2Title',
    thumbnail: 'https://img.youtube.com/vi/_NK4GSZseck/maxresdefault.jpg',
    descriptionKey: 'video2Desc',
    tags: ['Installation', 'Animation']
  },
  {
    id: 'video3',
    videoId: 'kJce5c7EGW0',
    titleKey: 'video3Title',
    thumbnail: 'https://img.youtube.com/vi/kJce5c7EGW0/maxresdefault.jpg',
    descriptionKey: 'video3Desc',
    tags: ['Wall Mount', 'Retail']
  },
  {
    id: 'video4',
    videoId: '_5M8EwKIKWg',
    titleKey: 'video4Title',
    thumbnail: 'https://img.youtube.com/vi/_5M8EwKIKWg/maxresdefault.jpg',
    descriptionKey: 'video4Desc',
    tags: ['Gaming', 'Monitor Arm']
  },
  {
    id: 'video5',
    videoId: '_5felLTeZEU',
    titleKey: 'video5Title',
    thumbnail: 'https://img.youtube.com/vi/_5felLTeZEU/maxresdefault.jpg',
    descriptionKey: 'video5Desc',
    tags: ['Tablet', 'Adjustable']
  },
  {
    id: 'video6',
    videoId: 'CjBvXoujH4s',
    titleKey: 'video6Title',
    thumbnail: 'https://img.youtube.com/vi/CjBvXoujH4s/maxresdefault.jpg',
    descriptionKey: 'video6Desc',
    tags: ['Video Wall', 'Pop-Out']
  }
];

// Duplicate for infinite scroll
const duplicatedVideos = [...videos, ...videos, ...videos];

export function VideoShowcase() {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  // Scroll to specific index
  const scrollToIndex = (index, behavior = 'smooth') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.offsetWidth || 320;
      const gap = 24;
      const scrollPosition = index * (cardWidth + gap);
      container.scrollTo({
        left: scrollPosition,
        behavior
      });
    }
  };

  const nextVideo = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= videos.length * 2) {
        const resetIndex = videos.length;
        setTimeout(() => {
          scrollToIndex(resetIndex, 'auto');
        }, 10);
        return resetIndex + 1;
      }
      return newIndex;
    });
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex < videos.length) {
        const resetIndex = videos.length * 2 - 1;
        setTimeout(() => {
          scrollToIndex(resetIndex, 'auto');
        }, 10);
        return resetIndex - 1;
      }
      return newIndex;
    });
  };

  // Auto-scroll
  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollIntervalRef.current = setInterval(nextVideo, 4500);
    }
    return () => {
      if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current);
    };
  }, [isAutoScrolling]);

  // Update scroll position when index changes
  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  const toggleAutoScroll = () => setIsAutoScrolling(!isAutoScrolling);

  const openVideo = (videoId) => {
    setIsAutoScrolling(false);
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setIsAutoScrolling(true);
  };

  // Mouse drag for horizontal scroll
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const currentVideo = duplicatedVideos[currentIndex] || videos[0];

  return (
    <section className="py-16 md:py-24 bg-[#3351a3] relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          aria-hidden
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-pink-accent/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <PillBadge text={t('watchOurWork')} className="mb-3" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            <Trans i18nKey="seeSkillTechInAction">
              See <span className="text-pink-accent">Skill Tech</span> in Action
            </Trans>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 max-w-2xl text-gray-300 text-sm md:text-base"
          >
            {t('videoShowcaseDescription')}
          </motion.p>
        </div>

        {/* Main Carousel - Full Width with side visibility */}
        <div className="relative max-w-7xl mx-auto">
          {/* Gradient overlays for left/right edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0a1628] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0a1628] to-transparent z-20 pointer-events-none" />

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {duplicatedVideos.map((video, idx) => {
              const isActive = (currentIndex % videos.length) === (idx % videos.length);
              const isHovered = hoveredIndex === idx;
              const isNearActive = Math.abs(idx - currentIndex) <= 1;

              return (
                <motion.div
                  key={`${video.id}-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: isNearActive ? 1 : 0.4,
                    scale: isActive ? 1.05 : 0.95,
                    y: isActive ? 0 : 8,
                  }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={`relative flex-shrink-0 w-[280px] md:w-[340px] cursor-pointer group transition-all duration-300 ${
                    isActive ? 'z-10' : 'z-0'
                  }`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => openVideo(video.videoId)}
                >
                  <div className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
                    isActive ? 'ring-2 ring-pink-accent shadow-pink-accent/20' : 'ring-1 ring-white/5'
                  }`}>
                    {/* Thumbnail */}
                    <img
                      src={video.thumbnail}
                      alt={t(video.titleKey)}
                      className="w-full h-[200px] md:h-[240px] object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 bg-pink-accent rounded-full flex items-center justify-center shadow-2xl shadow-pink-accent/30"
                      >
                        <Play className="w-7 h-7 text-white fill-white ml-1" />
                      </motion.div>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute top-3 left-3 bg-pink-accent text-white text-xs px-3 py-1 rounded-full flex items-center gap-1"
                      >
                        <Sparkles className="w-3 h-3" />
                        {t('nowPlaying')}
                      </motion.div>
                    )}

                    {/* YouTube Badge */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-xs text-white flex items-center gap-1">
                      <Youtube className="w-3 h-3 text-red-500" />
                      {t('youTube')}
                    </div>

                    {/* Content at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-semibold text-sm line-clamp-2">
                        {t(video.titleKey)}
                      </h4>
                      <p className="text-gray-300 text-xs mt-1 line-clamp-1">
                        {t(video.descriptionKey)}
                      </p>
                      {/* Tags */}
                      <div className="flex gap-1 mt-2">
                        {video.tags?.slice(0, 2).map((tag, i) => (
                          <span key={i} className="text-[10px] bg-white/10 text-gray-300 px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Progress bar for active video */}
                  {isActive && isAutoScrolling && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-accent rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4.5, ease: 'linear' }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => { prevVideo(); setIsAutoScrolling(false); setTimeout(() => setIsAutoScrolling(true), 6000); }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-pink-accent transition-all duration-300 z-30 shadow-xl hover:shadow-pink-accent/20"
            aria-label={t('previousVideo')}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => { nextVideo(); setIsAutoScrolling(false); setTimeout(() => setIsAutoScrolling(true), 6000); }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-pink-accent transition-all duration-300 z-30 shadow-xl hover:shadow-pink-accent/20"
            aria-label={t('nextVideo')}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Controls & Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 max-w-3xl mx-auto">
          {/* Auto-scroll Toggle */}
          <button
            onClick={toggleAutoScroll}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm bg-white/5 backdrop-blur px-4 py-2 rounded-full"
          >
            {isAutoScrolling ? (
              <><PauseCircle className="w-5 h-5" /> {t('pauseAutoplay')}</>
            ) : (
              <><PlayCircle className="w-5 h-5" /> {t('resumeAutoplay')}</>
            )}
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2">
            {videos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx + videos.length);
                  setIsAutoScrolling(false);
                  setTimeout(() => setIsAutoScrolling(true), 6000);
                }}
                className={`transition-all duration-300 ${
                  (currentIndex % videos.length) === idx 
                    ? 'w-10 h-2.5 bg-pink-accent rounded-full' 
                    : 'w-2.5 h-2.5 bg-white/30 rounded-full hover:bg-white/50'
                }`}
                aria-label={`${t('goToVideo')} ${idx + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-white/40 text-sm">
            {(currentIndex % videos.length) + 1} / {videos.length}
          </div>
        </div>

        {/* View All Videos Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.youtube.com/@skilltech710/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#e6007e] text-white px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-accent/30 group"
          >
            <Youtube className="w-5 h-5" />
            <span>{t('viewAllVideosOnYouTube')}</span>
            <motion.span 
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-pink-accent transition-all duration-300 z-20 backdrop-blur"
              onClick={closeVideo}
              aria-label={t('closeVideo')}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrollbar Hide Styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}