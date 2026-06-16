import React from 'react'
import { PlayCircle, PhoneCall, ShieldCheck, Clock, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const trustPoints = [
  {
    icon: ShieldCheck,
    labelKey: 'certifiedTechnicians',
  },
  {
    icon: Clock,
    labelKey: 'sameDayInstallation',
  },
  {
    icon: Star,
    labelKey: 'satisfiedCustomers',
  },
]

export function CTASection() {
  const { t } = useTranslation()

  return (
    <section className="py-6 md:py-8 lg:py-10 pt-2 md:pt-4 bg-white" id="cta">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="relative overflow-hidden rounded-[24px] md:rounded-[36px] bg-white border border-slate-200 px-6 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 shadow-lg"
        >
          {/* Decorative accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-pink-accent/10 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-pink-accent/5 blur-2xl"
          />

          <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:text-left">
            {/* Copy */}
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-pink-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-pink-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-accent" />
                {t('readyWhenYouAre')}
              </span>

              <h2 className="mt-4 text-2xl font-bold leading-tight text-navy sm:text-3xl md:text-4xl">
                {/* Using dangerouslySetInnerHTML to render <br /> properly */}
                <span dangerouslySetInnerHTML={{ __html: t('getScreenMountedByExperts') }} />
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                {t('ctaDescription')}
              </p>

              {/* Trust points */}
              <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
                {trustPoints.map(({ icon: Icon, labelKey }) => (
                  <li
                    key={labelKey}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <Icon className="h-4 w-4 text-pink-accent" />
                    <span>{t(labelKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row lg:flex-col lg:items-stretch">
              <a
                href="#booking"
                className="group flex items-center justify-center gap-2 rounded-full bg-pink-accent px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg md:text-base"
              >
                <PlayCircle className="h-5 w-5 fill-white/20 transition-transform group-hover:translate-x-1" />
                {t('bookNow')}
              </a>
              <a
                href="tel:+97100000000"
                className="group flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-navy transition-all hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md md:text-base"
              >
                <PhoneCall className="h-5 w-5 text-pink-accent transition-transform group-hover:rotate-12" />
                {t('callAnExpert')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}