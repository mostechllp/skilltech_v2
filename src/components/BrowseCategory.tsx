import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Grid3x3, Sparkles } from 'lucide-react';
import { PillBadge } from './ui/PillBadge';
import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';
import tv_mount from "../assets/images/categories/Icon_TV_Wall_Mount.webp"
import monitor_mount from "../assets/images/categories/Icon_Desktop_Mount.webp"
import monitorized_mount from "../assets/images/categories/Icon_Motorized_Mount.webp"
import tv_floor from "../assets/images/categories/Icon_Floor_Stand.webp"
import tv_ceiling from "../assets/images/categories/Icon_TV_Ceiling_Mount.webp"
import tv from "../assets/images/categories/Icon_Television.webp"
import kiosk from "../assets/images/categories/Icon_Kiosk_Stand.webp"
import led from "../assets/images/categories/Icon_LED_Display.webp"
import proj_screen from "../assets/images/categories/Icon_Projector_Screen.webp"
import proj_mount from "../assets/images/categories/Icon_Projector_Mount.webp"
import gaming from "../assets/images/categories/Icon_Gaming_Chair.webp"
import pos from "../assets/images/categories/Icon_POS_Stand.webp"
import video from "../assets/images/categories/Icon_Video_Wall_Mount.webp"
import hdmi from "../assets/images/categories/Icon_HDMI_Cables.webp"
import dvd from "../assets/images/categories/Icon_DVD_-_Recevier_Mount.webp"
import cctv from "../assets/images/categories/Icon_CCTV_Brackets.webp"
import ac from "../assets/images/categories/Icon_AC_Brackets.webp"
import other from "../assets/images/categories/Icon_Other_TV_Wall_Mount.webp"
import podium from "../assets/images/categories/ChatGPT_Image_Apr_15_2026_03_19_02_PM_copy.webp"
import laptop from "../assets/images/categories/Icon_Laptop__Tablet_Mount.webp"

const categories = [
  { nameKey: 'tvWallMounts', img: tv_mount, active: true },
  { nameKey: 'monitorDesktopMounts', img: monitor_mount },
  { nameKey: 'motorizedMountsAndStands', img: monitorized_mount },
  { nameKey: 'tvFloorStandsCart', img: tv_floor },
  { nameKey: 'tvCeilingMounts', img: tv_ceiling },
  { nameKey: 'television', img: tv },
  { nameKey: 'kioskScreen', img: kiosk },
  { nameKey: 'ledDisplay', img: led },
  { nameKey: 'projectorScreens', img: proj_screen },
  { nameKey: 'projectorMounts', img: proj_mount },
  { nameKey: 'gaming', img: gaming },
  { nameKey: 'posMounts', img: pos },
  { nameKey: 'videoWallMounts', img: video },
  { nameKey: 'hdmiCables', img: hdmi },
  { nameKey: 'dvdReceiverCpuMounts', img: dvd },
  { nameKey: 'cctvCameraBrackets', img: cctv },
  { nameKey: 'acBrackets', img: ac },
  { nameKey: 'otherMountsAccessories', img: other },
  { nameKey: 'podiumScreens', img: podium },
  { nameKey: 'laptopTabletStands', img: laptop }
];

export function BrowseCategory() {
  const { t } = useTranslation();
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollIntervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsAutoScrolling(false);
      
      const container = scrollContainerRef.current;
      const firstItem = container.children[0];
      const itemWidth = firstItem ? firstItem.offsetWidth + 12 : 160;
      const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      timeoutRef.current = setTimeout(() => {
        setIsAutoScrolling(true);
      }, 5000);
    }
  };

  const updateActiveCategory = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollPosition = container.scrollLeft;
      const containerCenter = scrollPosition + container.clientWidth / 2;
      
      const items = container.children;
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemCenter = item.offsetLeft + item.clientWidth / 2;
        const distance = Math.abs(containerCenter - itemCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      }
      
      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    }
  }, [activeIndex]);

  useEffect(() => {
    if (isAutoScrolling && scrollContainerRef.current) {
      if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current);
      
      autoScrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const maxScroll = container.scrollWidth - container.clientWidth;
          const currentScroll = container.scrollLeft;
          
          const firstItem = container.children[0];
          const itemWidth = firstItem ? firstItem.offsetWidth + 12 : 0;
          
          if (currentScroll + itemWidth >= maxScroll) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: itemWidth, behavior: 'smooth' });
          }
        }
      }, 2500);
    }
    
    return () => {
      if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current);
    };
  }, [isAutoScrolling]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            updateActiveCategory();
            ticking = false;
          });
          ticking = true;
        }
      };
      
      container.addEventListener('scroll', handleScroll);
      updateActiveCategory();
      
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [updateActiveCategory]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section id="browse-category" className="py-12 bg-gradient-to-b from-white to-slate-50/80">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header - More Compact */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
          <div>
            <PillBadge 
              text={t('exploreOurRange')} 
              className="mb-2 bg-gradient-to-r from-pink-accent/10 to-pink-accent/5 text-pink-accent border-pink-accent/20"
            />
            <SectionHeading className="!text-2xl md:!text-3xl">
              {t('browseByCategory')}
            </SectionHeading>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-navy hover:bg-pink-accent hover:text-white hover:border-pink-accent transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-navy hover:bg-pink-accent hover:text-white hover:border-pink-accent transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel - More Packed */}
        <div 
          ref={scrollContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex overflow-x-auto pb-4 -mx-2 px-2 md:mx-0 md:px-0 gap-3 hide-scrollbar snap-x scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.02, duration: 0.3 }}
              onClick={() => {
                if (scrollContainerRef.current) {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  setIsAutoScrolling(false);
                  
                  const item = scrollContainerRef.current.children[idx];
                  item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                  
                  timeoutRef.current = setTimeout(() => {
                    setIsAutoScrolling(true);
                  }, 5000);
                }
              }}
              className={`flex-none w-28 md:w-32 lg:w-36 flex flex-col items-center p-3 rounded-xl border-2 bg-white cursor-pointer transition-all duration-300 snap-start group ${
                activeIndex === idx 
                  ? 'border-pink-accent shadow-lg shadow-pink-accent/10 scale-105' 
                  : 'border-slate-100 hover:border-pink-accent/30 hover:shadow-md'
              }`}
            >
              {/* Image Container - Smaller & Cleaner */}
              <div className={`h-16 w-full flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110 ${
                activeIndex === idx ? 'scale-110' : ''
              }`}>
                <img
                  src={cat.img}
                  alt={t(cat.nameKey)}
                  className="max-h-full max-w-full object-contain mix-blend-multiply" 
                  loading="lazy"
                />
              </div>
              
              {/* Title - More Compact */}
              <h3 className={`text-[10px] md:text-xs text-center font-medium leading-tight transition-colors duration-300 ${
                activeIndex === idx ? 'text-pink-accent' : 'text-navy/80 group-hover:text-navy'
              }`}>
                {t(cat.nameKey)}
              </h3>

              {/* Active Indicator Dot */}
              {activeIndex === idx && (
                <motion.div 
                  layoutId="categoryActiveDot"
                  className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-accent"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Auto-scroll Status Indicator */}
        <div className="flex justify-center items-center gap-3 mt-4">
          <div className={`h-0.5 rounded-full transition-all duration-500 ${
            isAutoScrolling ? 'w-12 bg-pink-accent/40' : 'w-6 bg-slate-200'
          }`} />
          <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase flex items-center gap-1.5">
            <Sparkles className={`w-3 h-3 transition-colors ${
              isAutoScrolling ? 'text-pink-accent' : 'text-slate-300'
            }`} />
            {isAutoScrolling ? 'Auto-scrolling' : 'Paused'}
          </span>
          <div className={`h-0.5 rounded-full transition-all duration-500 ${
            isAutoScrolling ? 'w-12 bg-pink-accent/40' : 'w-6 bg-slate-200'
          }`} />
        </div>
      </div>
    </section>
  );
}