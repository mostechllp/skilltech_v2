// AboutUs.jsx
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { PlayCircle, ChevronDown, Globe, Users, Award, Shield, CheckCircle } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { motion } from "framer-motion";
import about1 from "../assets/images/about_us/about1.webp";
import about2 from "../assets/images/about_us/about2.webp";
import about3 from "../assets/images/about_us/about3.webp";

export function AboutUs() {
  const { t } = useTranslation();

  // Feature highlights
  const features = [
    { 
      titleKey: "wideRangeOfSolutions", 
      descKey: "wideRangeOfSolutionsDesc",
      icon: CheckCircle
    },
    { 
      titleKey: "longLastingRelationships", 
      descKey: "longLastingRelationshipsDesc",
      icon: Users
    },
    { 
      titleKey: "expertTeam", 
      descKey: "expertTeamDesc",
      icon: Award
    },
    { 
      titleKey: "trustedPartner", 
      descKey: "trustedPartnerDesc",
      icon: Shield
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-lavender-light to-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Content - Fixed Alignment */}
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-10 lg:gap-16">
          {/* Left Side - Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {/* Top Left Image */}
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-48 sm:h-56 md:h-64">
                <img
                  src={about1}
                  alt={t('aboutUs')}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Top Right Image */}
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-48 sm:h-56 md:h-64">
                <img
                  src={about3}
                  alt={t('aboutUs')}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Bottom Full Width Image */}
              <div className="col-span-2 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-56 sm:h-64 md:h-72">
                <img
                  src={about2}
                  alt={t('aboutUs')}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-between h-full"
          >
            <div>
              <SectionHeading className="mb-3 md:mb-4 text-left">
                {t('aboutUs')}
              </SectionHeading>
              
              {/* Desktop: Full text */}
              <div className="hidden lg:block space-y-3 text-slate-600 text-sm md:text-base leading-relaxed">
                <p>
                  <strong className="text-navy">{t('welcomeToSkillMount')}</strong>
                  {t('aboutUsParagraph1')}
                </p>
                <p>
                  {t('aboutUsParagraph2')}
                </p>
                <p>
                  {t('aboutUsParagraph3')}
                </p>
              </div>

              {/* Mobile/Tablet: Full text without truncation */}
              <div className="lg:hidden space-y-3 text-slate-600 text-sm leading-relaxed text-left">
                <p>
                  <strong className="text-navy">{t('welcomeToSkillMount')}</strong>
                  {t('aboutUsParagraph1Mobile')}
                </p>
                <p>
                  {t('aboutUsParagraph2Mobile')}
                </p>
                <p>
                  {t('aboutUsParagraph3Mobile')}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="flex items-start gap-2 bg-white/60 rounded-lg p-2.5 hover:bg-white transition-colors"
                    >
                      <Icon className="w-4 h-4 text-pink-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-navy text-sm font-semibold">{t(feature.titleKey)}</h4>
                        <p className="text-slate-500 text-[10px] leading-tight">{t(feature.descKey)}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}