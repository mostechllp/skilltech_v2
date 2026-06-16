import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Users, Package, ThumbsUp, Clock, Globe } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    value: 50,
    suffix: 'K+',
    labelKey: 'projects'
  },
  {
    icon: Users,
    value: 200,
    suffix: '+',
    labelKey: 'expertStaffs'
  },
  {
    icon: Package,
    value: 1200,
    suffix: '+',
    labelKey: 'qualityProducts'
  },
  {
    icon: ThumbsUp,
    value: 50,
    suffix: 'K+',
    labelKey: 'satisfiedCustomer'
  },
  {
    icon: Clock,
    value: 15,
    suffix: '+',
    labelKey: 'yearsOfExperience'
  },
  {
    icon: Globe,
    value: 10,
    suffix: '+',
    labelKey: 'countriesServed'
  }
];

function CountUp({ end, suffix }: { end: number; suffix: string; }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [end, isInView]);
  
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsBand() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#3351a3] border-y border-white/50">
      <div className="container mx-auto px-4 md:px-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 relative">
                  <div className="absolute inset-1 bg-lavender-alt rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-pink-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-xs text-white font-medium">
                  {t(stat.labelKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}