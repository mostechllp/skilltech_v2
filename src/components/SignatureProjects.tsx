// SignatureProjects.jsx
import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { PillBadge } from './ui/PillBadge';
import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';
import project_abudhabi from "../assets/images/projects/Abu_Dhabi_Project_dd0AvS1.webp";
import project_dubai_police from "../assets/images/projects/Dubai_Police_Project_hm5wCoq.webp";
import project_kfc from "../assets/images/projects/KFC_Project.webp";
import project_marsa from "../assets/images/projects/Marsa_al_Arab_Project.webp";

const projects = [
  {
    titleKey: 'abudhabiAirport',
    categoryKey: 'tvInstallationService',
    img: project_abudhabi,
    location: 'Abu Dhabi, UAE'
  },
  {
    titleKey: 'dubaiPolice',
    categoryKey: 'tvInstallationService',
    img: project_dubai_police,
    location: 'Dubai, UAE'
  },
  {
    titleKey: 'kfc',
    categoryKey: 'tvInstallationService',
    img: project_kfc,
    location: 'Multiple Locations'
  },
  {
    titleKey: 'marsaAlArab',
    categoryKey: 'tvInstallationService',
    img: project_marsa,
    location: 'Dubai, UAE'
  }
];

export function SignatureProjects() {
  const { t } = useTranslation();
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      
      if (width < 640) setCardsPerView(1);
      else if (width < 768) setCardsPerView(1.5);
      else if (width < 1024) setCardsPerView(2.5);
      else if (width < 1280) setCardsPerView(3.5);
      else setCardsPerView(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.offsetWidth || 280;
      const gap = 24;
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });

      const newIndex = direction === 'left' 
        ? Math.max(0, currentIndex - 1)
        : Math.min(projects.length - Math.floor(cardsPerView), currentIndex + 1);
      setCurrentIndex(newIndex);
    }
  };

  const goToSlide = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.offsetWidth || 280;
      const gap = 24;
      const scrollAmount = index * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const totalSlides = Math.max(1, projects.length - Math.floor(cardsPerView) + 1);

  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-white to-lavender-light/30">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <div className="flex-1">
            <PillBadge text={t('turningVisionIntoReality')} className="mb-2" />
            <SectionHeading className="text-center md:text-left">
              {t('ourSignatureProjects')}
            </SectionHeading>
          </div>
          <div className="flex gap-2 justify-center md:justify-end flex-shrink-0">
            <button 
              onClick={() => scroll('left')}
              disabled={currentIndex === 0}
              className={`w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentIndex === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-navy shadow-md hover:bg-pink-accent hover:text-white hover:shadow-lg hover:scale-110'
              }`}
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={currentIndex >= totalSlides - 1}
              className={`w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentIndex >= totalSlides - 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-navy shadow-md hover:bg-pink-accent hover:text-white hover:shadow-lg hover:scale-110'
              }`}
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-4 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project, idx) => {
              let cardWidth = 'w-[85vw]';
              if (!isMobile) {
                if (cardsPerView >= 4) cardWidth = 'w-[22%]';
                else if (cardsPerView >= 3) cardWidth = 'w-[30%]';
                else if (cardsPerView >= 2) cardWidth = 'w-[45%]';
                else cardWidth = 'w-[85vw]';
              }
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`relative rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 flex-none ${cardWidth} snap-center`}
                >
                  <div className="relative h-56 sm:h-64 md:h-72">
                    <img
                      src={project.img}
                      alt={t(project.titleKey)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5">
                      <div className="flex justify-between items-start">
                        <div className="bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                          <span className="text-white/90 text-[10px] font-medium">
                            {t(project.categoryKey)}
                          </span>
                        </div>
                        <div className="w-2 h-2 bg-pink-accent rounded-full shadow-lg shadow-pink-accent/50" />
                      </div>

                      <div>
                        <h3 className="text-white text-base md:text-lg font-bold leading-tight mb-1">
                          {t(project.titleKey)}
                        </h3>
                        <div className="flex items-center gap-2 text-white/70 text-xs">
                          <span>{project.location}</span>
                          <span className="w-1 h-1 bg-white/30 rounded-full" />
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-accent/50 rounded-xl transition-all duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1.5">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    currentIndex === idx 
                      ? 'bg-pink-accent w-6' 
                      : 'bg-slate-300 w-4 hover:bg-pink-accent/50'
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] text-slate-400 font-medium ml-1">
              {currentIndex + 1}/{totalSlides}
            </span>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-[#e6007e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-pink-accent hover:text-white hover:border-pink-accent transition-all duration-300"
          >
            <span>{t('viewAllProjects')}</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-center {
          scroll-snap-align: center;
        }
      `}</style>
    </section>
  );
}