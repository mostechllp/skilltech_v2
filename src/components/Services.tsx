import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PlayCircle, ChevronDown, CheckCircle, Shield, Zap, Wrench } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';
import service1 from "../assets/images/services/service1.webp";
import service2 from "../assets/images/services/service2.webp";
import service3 from "../assets/images/services/service3.webp";

export function Services() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  // Feature data from the provided URL
  const features = [
    {
      icon: Shield,
      title: 'premiumMounting',
      description: 'premiumMountingDesc'
    },
    {
      icon: Wrench,
      title: 'professionalInstallation',
      description: 'professionalInstallationDesc'
    },
    {
      icon: Zap,
      title: 'secureDurableMounts',
      description: 'secureDurableMountsDesc'
    },
    {
      icon: CheckCircle,
      title: 'wireCableManagement',
      description: 'wireCableManagementDesc'
    }
  ];

  // Stats data
  const stats = [
    { value: '2K+', label: 'projects' },
    { value: '50+', label: 'expertStaffs' },
    { value: '1K+', label: 'satisfiedCustomer' },
    { value: '10+', label: 'yearOfExperience' },
    { value: '15+', label: 'countriesServed' },
    { value: '100+', label: 'qualityProducts' }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-lavender-light" id="services">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Service Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-20">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <SectionHeading className="mb-4 md:mb-6 text-center lg:text-left">
              {t('tvInstallationService')}
            </SectionHeading>
            
            {/* Desktop: Full text with enhanced content */}
            <div className="hidden lg:block space-y-3 md:space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>{t('servicesParagraph1')}</p>
              <p>
                {t('servicesParagraph2')}{" "}
                <strong className="text-navy">{t('tvTypes')}</strong>
                {t('servicesParagraph2Continued')}
              </p>
              <p>{t('servicesParagraph3')}</p>
              
              {/* Additional Service Details */}
              <div className="bg-white/50 rounded-xl p-4 md:p-6 mt-4 space-y-3">
                <h4 className="font-semibold text-navy text-sm md:text-base">
                  {t('whyChooseUs')}
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-pink-accent mt-0.5 flex-shrink-0" />
                    <span>{t('serviceFeature1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-pink-accent mt-0.5 flex-shrink-0" />
                    <span>{t('serviceFeature2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-pink-accent mt-0.5 flex-shrink-0" />
                    <span>{t('serviceFeature3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-pink-accent mt-0.5 flex-shrink-0" />
                    <span>{t('serviceFeature4')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile/Tablet: Truncated text with enhanced content */}
            <div className="lg:hidden">
              <div className="space-y-3 text-slate-600 text-sm leading-relaxed text-center">
                <p>
                  {t('servicesParagraph1').substring(0, 120)}
                  {!isExpanded && "..."}
                </p>
                
                {isExpanded && (
                  <>
                    <p>
                      {t('servicesParagraph2')}{" "}
                      <strong className="text-navy">{t('tvTypes')}</strong>
                      {t('servicesParagraph2Continued')}
                    </p>
                    <p>{t('servicesParagraph3')}</p>
                    
                    <div className="bg-white/50 rounded-xl p-4 mt-4 text-left">
                      <h4 className="font-semibold text-navy text-sm mb-2 text-center">
                        {t('whyChooseUs')}
                      </h4>
                      <ul className="space-y-2 text-xs">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-pink-accent mt-0.5 flex-shrink-0" />
                          <span>{t('serviceFeature1')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-pink-accent mt-0.5 flex-shrink-0" />
                          <span>{t('serviceFeature2')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-pink-accent mt-0.5 flex-shrink-0" />
                          <span>{t('serviceFeature3')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-pink-accent mt-0.5 flex-shrink-0" />
                          <span>{t('serviceFeature4')}</span>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>

              <div className="flex justify-center mt-3">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-1 text-pink-accent text-sm font-medium hover:text-pink-600 transition-colors"
                >
                  {isExpanded ? t('readLess') : t('readMore')}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <a
                href="#booking"
                className="mt-6 md:mt-8 flex items-center gap-2 bg-pink-accent text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-pink-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group text-sm md:text-base"
              >
                <PlayCircle className="w-4 h-4 md:w-5 md:h-5 fill-white/20 group-hover:translate-x-1 transition-transform" />
                <span className="font-medium">{t('bookNow')}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              <div className="rounded-[20px] md:rounded-[30px] overflow-hidden shadow-lg h-40 sm:h-48 md:h-56 lg:h-64">
                <img
                  src={service1}
                  alt={t('services')}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-[20px] md:rounded-[30px] overflow-hidden shadow-lg h-40 sm:h-48 md:h-56 lg:h-64">
                <img
                  src={service3}
                  alt={t('services')}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 rounded-[20px] md:rounded-[30px] overflow-hidden shadow-lg h-48 sm:h-56 md:h-64 lg:h-72">
                <img
                  src={service2}
                  alt={t('services')}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}