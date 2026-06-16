import React from 'react';
import { useTranslation } from 'react-i18next';
import { PlayCircle, ArrowRight } from 'lucide-react';
import { PillBadge } from './ui/PillBadge';
import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';
import image1 from '../assets/images/product_thumbnail/image_1.webp';
import motorised from '../assets/images/product_thumbnail/Motorised_Wall_Mount.webp';
import floorStand from '../assets/images/product_thumbnail/image.webp';
import ergonomic from '../assets/images/product_thumbnail/Ergonomic_Mount.webp';

export function ExploreProducts() {
  const { t } = useTranslation();

  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-white to-slate-50/60">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header - Left Aligned */}
        <div className="flex flex-col items-start mb-6">
          <PillBadge 
            text={t('whatsNew')} 
            className="mb-2 bg-gradient-to-r from-pink-accent/10 to-pink-accent/5 text-pink-accent border-pink-accent/20"
          />
          <SectionHeading className="!text-2xl md:!text-3xl text-left">
            {t('exploreTheProducts')}
          </SectionHeading>
        </div>

        {/* Grid Layout - Tighter & More Refined */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          {/* Large Left Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 xl:col-span-5 relative rounded-2xl overflow-hidden group cursor-pointer"
          >
            <div className="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5] w-full bg-slate-100">
              <img
                src={image1}
                alt={t('tvWallMounts')}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            
            {/* Overlay - Cleaner Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 md:p-6">
              <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                {t('tvWallMounts')}
              </h3>
              <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3.5 py-1.5 rounded-full w-fit hover:bg-pink-accent hover:border-pink-accent transition-all duration-300 group/btn">
                <span className="text-xs font-medium">{t('explore')}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column Grid */}
          <div className="lg:col-span-6 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 auto-rows-fr">
            {/* Top Right - Motorised */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer bg-slate-100"
            >
              <div className="aspect-square w-full">
                <img
                  src={motorised}
                  alt={t('motorisedWallMounts')}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-base md:text-lg font-bold mb-1.5">
                  {t('motorisedWallMounts')}
                </h3>
                <button className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1 rounded-full w-fit hover:bg-pink-accent hover:border-pink-accent transition-all duration-300 group/btn">
                  <span className="text-[10px] font-medium">{t('explore')}</span>
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </motion.div>

            {/* Top Right - Floor Stands */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer bg-slate-100"
            >
              <div className="aspect-square w-full">
                <img
                  src={floorStand}
                  alt={t('floorStands')}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-base md:text-lg font-bold mb-1.5">
                  {t('floorStands')}
                </h3>
                <button className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1 rounded-full w-fit hover:bg-pink-accent hover:border-pink-accent transition-all duration-300 group/btn">
                  <span className="text-[10px] font-medium">{t('explore')}</span>
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </motion.div>

            {/* Bottom Wide - Ergonomic */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="sm:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer bg-slate-100"
            >
              <div className="aspect-[16/7] md:aspect-[16/6] w-full">
                <img
                  src={ergonomic}
                  alt={t('ergonomicMounts')}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 md:p-6">
                <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2">
                  {t('ergonomicMounts')}
                </h3>
                <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3.5 py-1.5 rounded-full w-fit hover:bg-pink-accent hover:border-pink-accent transition-all duration-300 group/btn">
                  <span className="text-xs font-medium">{t('explore')}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}