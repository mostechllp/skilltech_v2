// Partners.jsx - Updated with reduced bottom padding
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
 
  // Hub points on the watermark map — representing partner regions
  // (positioned as % of a 1000x500 world-map viewBox)
  const hubs = [
    { x: 565, y: 235, delay: '0s' },    // Gulf / UAE
    { x: 480, y: 150, delay: '0.6s' },  // Europe
    { x: 720, y: 195, delay: '1.2s' },  // South/East Asia
    { x: 230, y: 175, delay: '1.8s' },  // North America
  ];
 
  return (
    <section className="relative py-14 md:py-16 pb-8 md:pb-10 bg-white border-t border-slate-100 overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* World map watermark signature */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <svg
          viewBox="0 0 1000 500"
          className="w-[140%] md:w-[110%] max-w-none opacity-[0.05]"
          aria-hidden="true"
        >
          <g fill="#1B2A52">
            {/* Simplified dot-grid continents */}
            {Array.from({ length: 50 }).map((_, row) =>
              Array.from({ length: 100 }).map((_, col) => {
                const x = col * 10;
                const y = row * 10;
                // crude landmass mask using a few rectangular bands to suggest continents
                const inLand =
                  (x > 150 && x < 300 && y > 120 && y < 260) || // N. America
                  (x > 260 && x < 340 && y > 280 && y < 420) || // S. America
                  (x > 440 && x < 560 && y > 100 && y < 220) || // Europe
                  (x > 440 && x < 620 && y > 220 && y < 400) || // Africa
                  (x > 560 && x < 820 && y > 130 && y < 320) || // Asia
                  (x > 800 && x < 900 && y > 350 && y < 420);   // Australia
                if (!inLand || Math.random() > 0.55) return null;
                return <circle key={`${row}-${col}`} cx={x} cy={y} r="2.2" />;
              })
            )}
          </g>
          {/* Pulsing hub markers */}
          {hubs.map((hub, i) => (
            <g key={i}>
              <circle cx={hub.x} cy={hub.y} r="5" fill="#EC4899" opacity="0.9" />
              <circle
                cx={hub.x}
                cy={hub.y}
                r="5"
                fill="#EC4899"
                opacity="0.5"
                style={{
                  transformOrigin: `${hub.x}px ${hub.y}px`,
                  animation: `partnerPulse 2.4s ease-out infinite`,
                  animationDelay: hub.delay,
                }}
              />
            </g>
          ))}
        </svg>
      </div>
 
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
                  className="flex-none w-36 md:w-44 h-24 md:h-28 flex items-center justify-center bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgba(27,42,82,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-accent/30 hover:shadow-[0_8px_24px_rgba(236,72,153,0.12)]"
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
 
        @keyframes partnerPulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(3.2); opacity: 0; }
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