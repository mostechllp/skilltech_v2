import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { PillBadge } from './ui/PillBadge';
import { SectionHeading } from './ui/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';

import product_sh_126p from "../assets/images/products/TV_wall_mount/SH-126P.webp";
import product_sh_360r from "../assets/images/products/TV_wall_mount/SH-360R.webp";
import product_sh_380p from "../assets/images/products/TV_wall_mount/SH-380P.webp";
import product_sh_1015p from "../assets/images/products/TV_wall_mount/SH-1015P.webp";
import product_pm_75fw from "../assets/images/products/TV_wall_mount/PM-75FW.webp";
import product_p6 from "../assets/images/products/TV_wall_mount/P6.webp";
import product_sh_34p from "../assets/images/products/TV_wall_mount/SH-34P.webp";
import product_sh_4280lf from "../assets/images/products/TV_wall_mount/SH-4280UF.webp";

// Import new product images (use placeholder if images don't exist yet)
import product_sh_105t from "../assets/images/products/TV_wall_mount/SH-105T.webp";
import product_sh_46ufr from "../assets/images/products/TV_wall_mount/SH-46UFR.webp";
import product_sh_990p from "../assets/images/products/TV_wall_mount/SH-990P.webp";
import product_sh_406p from "../assets/images/products/TV_wall_mount/SH-406P.webp";
import product_sh_32p from "../assets/images/products/TV_wall_mount/SH-32P.webp";
import product_sh_646p from "../assets/images/products/TV_wall_mount/SH-646P.webp";
import product_sh_65f from "../assets/images/products/TV_wall_mount/SH-65F.webp";
import product_sh_30p from "../assets/images/products/TV_wall_mount/SH-30P.webp";
import product_sh_2200f from "../assets/images/products/TV_wall_mount/SH-2200F.webp";
import product_sh_960p from "../assets/images/products/TV_wall_mount/SH-960P.webp";
import product_sh_460p from "../assets/images/products/TV_wall_mount/SH-460P.webp";
import product_sh_96t from "../assets/images/products/TV_wall_mount/SH-96T.webp";

const filters = [
  { key: 'tvWallMounts', value: 'TV Wall Mounts' },
  { key: 'monitorDesktopMounts', value: 'Monitor & Desktop Mounts' },
  { key: 'motorizedMountsAndStands', value: 'Motorised Mount and Stands' },
  { key: 'tvFloorStandsCart', value: 'TV Floor Stands & Cart' },
  { key: 'tvCeilingMounts', value: 'TV Ceiling Mounts' },
  { key: 'television', value: 'Television' },
  { key: 'kioskScreen', value: 'Kiosk Screen' },
  { key: 'ledDisplay', value: 'LED Display' },
  { key: 'acBrackets', value: 'AC Brackets' },
  { key: 'cctvCameraBrackets', value: 'CCTV Camera Brackets' },
  { key: 'dvdReceiverCpuMounts', value: 'DVD / Receiver & CPU Mounts' },
  { key: 'hdmiCables', value: 'HDMI Cables' },
  { key: 'videoWallMounts', value: 'Video Wall Mounts' },
  { key: 'posMounts', value: 'POS Mounts' },
  { key: 'gaming', value: 'Gaming' },
  { key: 'projectorMounts', value: 'Projector Mounts' },
  { key: 'projectorScreens', value: 'Projector Screens' }
];

const allProducts = [
  // Original products
  {
    id: 'SH 126P',
    nameKey: 'heavyDutyFullMotion',
    img: product_sh_126p
  },
  {
    id: 'SH 360R',
    nameKey: 'rotateWallMount',
    img: product_sh_360r
  },
  {
    id: 'SH 380P',
    nameKey: 'premiumHeavyDuty',
    img: product_sh_380p
  },
  {
    id: 'SH 1015P',
    nameKey: 'extraLongSingleArm',
    img: product_sh_1015p
  },
  {
    id: 'PM 75FW',
    nameKey: 'fixedTVWallMount',
    img: product_pm_75fw,
    badge: 'economicSeries'
  },
  {
    id: 'P6',
    nameKey: 'ultraSlimDoubleArm',
    img: product_p6
  },
  {
    id: 'SH 34P',
    nameKey: 'superEconomyFullMotion',
    img: product_sh_34p
  },
  {
    id: 'SH 4280LF',
    nameKey: 'ultraThinFixed',
    img: product_sh_4280lf
  },
  // New products
  {
    id: 'SH 105T',
    nameKey: 'heavyDutyExtendOutTilt',
    img: product_sh_105t
  },
  {
    id: 'SH 46UFR',
    nameKey: 'landscapePortraitWallMount',
    img: product_sh_46ufr
  },
  {
    id: 'SH 990P',
    nameKey: 'heavyDutyFullMotionTV',
    img: product_sh_990p
  },
  {
    id: 'SH 406P',
    nameKey: 'classicPremiumSingleArm',
    img: product_sh_406p
  },
  {
    id: 'SH 32P',
    nameKey: 'superEconomyFullMotion2',
    img: product_sh_32p
  },
  {
    id: 'SH 646P',
    nameKey: 'steelFullMotion',
    img: product_sh_646p
  },
  {
    id: 'SH 65F',
    nameKey: 'heavyDutyFixed80Inch',
    img: product_sh_65f
  },
  {
    id: 'SH 30P',
    nameKey: 'superEconomyFullMotion3',
    img: product_sh_30p
  },
  {
    id: 'SH 2200F',
    nameKey: 'xxLargeHeavyDutyFixed',
    img: product_sh_2200f
  },
  {
    id: 'SH 960P',
    nameKey: 'xLargeHeavyDutyFullMotion',
    img: product_sh_960p
  },
  {
    id: 'SH 460P',
    nameKey: 'aluminiumSlimSliding',
    img: product_sh_460p
  },
  {
    id: 'SH 96T',
    nameKey: 'heavyDutyTilting',
    img: product_sh_96t
  }
];

export function ProductGrid() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('TV Wall Mounts');
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const updateProductsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) return 2; // Mobile
      if (width < 768) return 4; // Tablet small
      if (width < 1024) return 6; // Tablet
      if (width < 1280) return 8; // Desktop small
      return 10; // Desktop large (5 columns x 2 rows)
    };

    const updatePerPage = () => {
      setProductsPerPage(updateProductsPerPage());
    };

    updatePerPage();
    window.addEventListener('resize', updatePerPage);
    return () => window.removeEventListener('resize', updatePerPage);
  }, []);

  // Get current page products
  const getCurrentProducts = () => {
    const start = currentPage * productsPerPage;
    const end = start + productsPerPage;
    return allProducts.slice(start, end);
  };

  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    const gridElement = document.getElementById('product-grid');
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const displayedFilters = isMobile 
    ? (showAllFilters ? filters : filters.slice(0, 6))
    : filters;

  const currentProducts = getCurrentProducts();

  return (
    <section className="py-8 md:py-16 bg-white container mx-auto px-4 md:px-8" id="product-grid">
      <div className="mb-6 md:mb-10">
        <PillBadge text={t('ourProducts')} className="mb-3" />
        <SectionHeading className="text-center md:text-left">{t('exploreOurProducts')}</SectionHeading>
      </div>

      {/* Filters */}
      <div className="relative mb-8 md:mb-12">
        <div 
          ref={scrollContainerRef}
          className={`flex ${isMobile ? 'overflow-x-auto' : 'flex-wrap'} gap-2 pb-4 hide-scrollbar`}
        >
          {displayedFilters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 md:px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${isMobile ? 'whitespace-nowrap' : 'whitespace-normal'} ${
                activeFilter === filter.value 
                  ? 'bg-navy text-white border-navy shadow-md' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-pink-accent hover:text-pink-accent hover:shadow-sm'
              }`}
            >
              {t(filter.key)}
            </motion.button>
          ))}
        </div>
        
        {isMobile && !showAllFilters && filters.length > 6 && (
          <button
            onClick={() => setShowAllFilters(true)}
            className="text-pink-accent text-xs font-medium mt-2 block hover:underline transition-all"
          >
            +{filters.length - 6} more categories
          </button>
        )}
        {isMobile && showAllFilters && (
          <button
            onClick={() => setShowAllFilters(false)}
            className="text-pink-accent text-xs font-medium mt-2 block hover:underline transition-all"
          >
            Show less
          </button>
        )}
      </div>

      {/* Grid Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        {!isMobile && totalPages > 1 && (
          <>
            <button 
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`absolute -left-4 xl:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-lg items-center justify-center transition-all duration-300 z-10 ${
                currentPage === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-pink-accent text-white hover:scale-110 hover:shadow-xl'
              } hidden lg:flex`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className={`absolute -right-4 xl:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-lg items-center justify-center transition-all duration-300 z-10 ${
                currentPage === totalPages - 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-pink-accent text-white hover:scale-110 hover:shadow-xl'
              } hidden lg:flex`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4"
          >
            {currentProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                whileHover={{ 
                  y: -6,
                  transition: { duration: 0.3 }
                }}
                className="bg-white border border-slate-100 rounded-xl p-3 md:p-4 flex flex-col items-center text-center hover:shadow-xl hover:border-pink-accent/20 transition-all duration-400 relative group cursor-pointer"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-accent/0 via-pink-accent/0 to-pink-accent/0 group-hover:from-pink-accent/5 group-hover:via-pink-accent/5 group-hover:to-pink-accent/10 transition-all duration-500 pointer-events-none" />

                {/* Badge with animation */}
                {product.badge && (
                  <motion.div 
                    className="absolute top-0 left-0 z-10"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="relative">
                      <div className="bg-[#cc2165] text-white text-[7px] md:text-[9px] font-bold px-2.5 md:px-3 py-0.5 md:py-1 shadow-md z-20 relative"
                           style={{
                             clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'
                           }}>
                        {t(product.badge)}
                      </div>
                      <div className="absolute -bottom-1 left-0 w-1.5 h-1.5 bg-amber-700"
                           style={{
                             clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%)'
                           }} />
                    </div>
                  </motion.div>
                )}

                {/* Image container with zoom on hover */}
                <motion.div 
                  className="h-28 sm:h-32 md:h-36 w-full mb-3 md:mb-4 flex items-center justify-center p-2 md:p-3 mt-2 md:mt-3 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                >
                  <img
                    src={product.img}
                    alt={t(product.nameKey)}
                    className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>

                <h4 className="text-pink-accent font-bold text-[10px] md:text-xs mb-0.5">
                  {product.id}
                </h4>
                <p className="text-slate-600 text-[10px] md:text-[11px] mb-3 md:mb-4 flex-grow line-clamp-2 leading-tight">
                  {t(product.nameKey)}
                </p>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 md:gap-1.5 border border-pink-accent/30 text-slate-700 px-2.5 md:px-3 py-1 rounded-full text-[9px] md:text-[10px] font-medium hover:bg-pink-accent hover:text-white hover:border-pink-accent transition-all duration-300 group/btn relative overflow-hidden w-full justify-center"
                >
                  <span className="absolute inset-0 bg-pink-accent transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
                  <PlayCircle className="w-2.5 h-2.5 md:w-3 md:h-3 text-pink-accent group-hover/btn:text-white transition-colors duration-300 relative z-10" />
                  <span className="relative z-10 text-[9px] md:text-[10px]">{t('viewDetails')}</span>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 md:mt-10 flex flex-col items-center gap-4">
          {/* Page dots */}
          <div className="flex gap-2 items-center">
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i;
              } else if (currentPage < 3) {
                pageNum = i;
              } else if (currentPage > totalPages - 3) {
                pageNum = totalPages - 5 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              return (
                <motion.button
                  key={i}
                  onClick={() => {
                    setCurrentPage(pageNum);
                    scrollToTop();
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`transition-all duration-300 rounded-full ${
                    currentPage === pageNum
                      ? 'w-6 h-1.5 bg-pink-accent'
                      : 'w-1.5 h-1.5 bg-slate-200 hover:bg-pink-accent/50'
                  }`}
                />
              );
            })}
          </div>

          {/* Mobile navigation buttons */}
          {isMobile && (
            <div className="flex gap-4">
              <motion.button
                onClick={prevPage}
                disabled={currentPage === 0}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  currentPage === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-pink-accent text-white hover:shadow-lg'
                }`}
              >
                Previous
              </motion.button>
              <span className="text-xs text-slate-500 flex items-center">
                {currentPage + 1} / {totalPages}
              </span>
              <motion.button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  currentPage === totalPages - 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-pink-accent text-white hover:shadow-lg'
                }`}
              >
                Next
              </motion.button>
            </div>
          )}

          {/* Page indicator for desktop */}
          {!isMobile && (
            <div className="text-xs text-slate-400">
              Page {currentPage + 1} of {totalPages}
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .duration-400 {
          transition-duration: 400ms;
        }
      `}</style>
    </section>
  );
}