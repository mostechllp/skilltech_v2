// Partners.jsx - Updated with map background
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PillBadge } from './ui/PillBadge';
import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';

import partner_al_futtaim from "../assets/images/partners/Al_Futtaim.webp";
import partner_aloft from "../assets/images/partners/Aloft.webp";
import partner_ansar_mall from "../assets/images/partners/Ansar_Mall.webp";
import partner_carillion from "../assets/images/partners/Carillion.webp";
import partner_carrefour from "../assets/images/partners/Carrefour.webp";
import partner_dp_world from "../assets/images/partners/DP_World.webp";
import partner_dubai_autodrome from "../assets/images/partners/Dubai_Autodrome.webp";
import partner_dubai_police from "../assets/images/partners/Dubai_Police.webp";
import partner_emax from "../assets/images/partners/Emax_kkfHNsD.webp";
import partner_eros from "../assets/images/partners/Eros_Digital_Home.webp";
import partner_harman from "../assets/images/partners/Harman_House.webp";
import partner_jumbo from "../assets/images/partners/Jumbo.webp";
import partner_lulu from "../assets/images/partners/lulu.webp";
import partner_movenpick from "../assets/images/partners/MovenPick.webp";
import partner_sharaf_dg from "../assets/images/partners/Sharaf_DG.webp";
import partner_trigon from "../assets/images/partners/Trigon.webp";

// Import map background
import mapBg from "../assets/images/map.jpeg";

const partners = [
  { nameKey: 'alFuttaim', logo: partner_al_futtaim },
  { nameKey: 'aloft', logo: partner_aloft },
  { nameKey: 'ansarMall', logo: partner_ansar_mall },
  { nameKey: 'carillion', logo: partner_carillion },
  { nameKey: 'carrefour', logo: partner_carrefour },
  { nameKey: 'dpWorld', logo: partner_dp_world },
  { nameKey: 'dubaiAutodrome', logo: partner_dubai_autodrome },
  { nameKey: 'dubaiPolice', logo: partner_dubai_police },
  { nameKey: 'emax', logo: partner_emax },
  { nameKey: 'erosDigitalHome', logo: partner_eros },
  { nameKey: 'harmanHouse', logo: partner_harman },
  { nameKey: 'jumbo', logo: partner_jumbo },
  { nameKey: 'lulu', logo: partner_lulu },
  { nameKey: 'movenpick', logo: partner_movenpick },
  { nameKey: 'sharafDg', logo: partner_sharaf_dg },
  { nameKey: 'trigon', logo: partner_trigon }
];

export function Partners() {
  const { t } = useTranslation();
 
  const duplicatedPartners = [...partners, ...partners, ...partners];
 
  return (
    <section className="relative py-14 md:py-16 pb-8 md:pb-10 bg-white border-t border-slate-100 overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Map Background with better visibility */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${mapBg})`,
          backgroundPosition: 'center 1%',
        }}
      />
      
      {/* Subtle gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70" />

      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center relative z-10">
        <PillBadge text={t('thoseWhoTrustOurExpertise')} className="mb-3" />
        <SectionHeading align="center" className="mb-2">
          {t('ourPartnersAndCollaborators')}
        </SectionHeading>
        <p className="text-xs md:text-sm text-slate-500 mb-8 md:mb-10 text-center max-w-md">
          {t('partnersAcrossRegions')}
        </p>
 
        <div className="w-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
 
          <div className="overflow-hidden">
            <div className="animate-infinite-scroll flex gap-6 md:gap-8">
              {duplicatedPartners.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex-none w-36 md:w-44 h-24 md:h-28 flex items-center justify-center bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(27,42,82,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-accent/30 hover:shadow-[0_8px_24px_rgba(236,72,153,0.12)]"
                >
                  <img
                    src={partner.logo}
                    alt={t(partner.nameKey)}
                    className="max-w-[70%] max-h-[60%] object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = document.createElement('span');
                      fallback.className = 'text-slate-400 font-semibold text-sm';
                      fallback.textContent = t(partner.nameKey);
                      e.target.parentElement.appendChild(fallback);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
 
      <style>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
 
        .animate-infinite-scroll {
          animation: infiniteScroll 80s linear infinite;
          width: fit-content;
        }
 
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
 
        @media (prefers-reduced-motion: reduce) {
          .animate-infinite-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}