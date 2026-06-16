import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  PlayCircle,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';
import { PillBadge } from './ui/PillBadge';

export function PreFooter() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Column 1: Let's Connect */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-4">{t('letsConnect')}</h3>
            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              {t('partnershipOpportunities')}
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1">
                  <MapPin className="w-5 h-5 text-pink-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm">{t('ourHeadOffice')}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {t('officeAddress')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Mail className="w-5 h-5 text-pink-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm">{t('email')}</h4>
                  <a
                    href="mailto:info@skilltechonline.com"
                    className="text-xs text-slate-600 hover:text-pink-accent"
                  >
                    info@skilltechonline.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Phone className="w-5 h-5 text-pink-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm">{t('phone')}</h4>
                  <p className="text-xs text-slate-600">
                    <a href="tel:+971509637077" className="hover:text-pink-accent">
                      +971 50 963 7077
                    </a>{' '}
                    |{' '}
                    <a href="tel:+97142347770" className="hover:text-pink-accent">
                      +971 4 234 7770
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-8">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center hover:bg-pink-accent transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center hover:bg-pink-accent transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center hover:bg-pink-accent transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center hover:bg-pink-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center hover:bg-pink-accent transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Form */}
          <div>
            <div className="bg-white rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.05)] p-8 border border-slate-50">
              <div className="flex items-center justify-center mb-6">
              </div>
              <h3 className="text-xl font-bold text-navy mb-6 text-center">
                {t('sendUsMessage')}
              </h3>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={t('nameRequired')}
                    className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-sm outline-none focus:border-pink-accent transition-colors"
                  />
                  <input
                    type="text"
                    placeholder={t('company')}
                    className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-sm outline-none focus:border-pink-accent transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder={t('phoneRequired')}
                    className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-sm outline-none focus:border-pink-accent transition-colors"
                  />
                  <input
                    type="email"
                    placeholder={t('emailRequired')}
                    className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-sm outline-none focus:border-pink-accent transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder={t('subject')}
                  className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-sm outline-none focus:border-pink-accent transition-colors"
                />
                <textarea
                  placeholder={t('messageRequired')}
                  rows={3}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm outline-none focus:border-pink-accent transition-colors resize-none"
                />

                <div className="flex justify-center">
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-pink-accent text-white px-6 py-2.5 rounded-full hover:bg-pink-600 transition-colors shadow-md group"
                  >
                    <PlayCircle className="w-4 h-4 fill-white/20 group-hover:translate-x-1 transition-transform" />
                    <span className="font-medium text-sm">{t('submit')}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}