// Footer.jsx - Updated with company name below logo
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
  Youtube,
  Send
} from 'lucide-react';
import logo from "../assets/images/logo/logo.svg";
import qr from "../assets/images/qr/qr2.webp";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative">
      {/* BLUE GRADIENT BACKGROUND - Starts behind the white section */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[2100px] md:h-[600px]"
        style={{
          background: 'linear-gradient(135deg, #28479D 0%, #3351A3 50%, #2D4B9F 100%)'
        }}
      />

      {/* SECTION 2: BLUE AREA - Starts from behind the white section */}
      <div className="relative z-0 pb-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 pt-0">
            {/* Column 1: Quick Links */}
            <div className="md:col-span-2 mt-4 md:mt-12">
              <img
                src={logo}
                alt="Skill Tech Logo"
                className="h-20 w-auto mb-2 mx-auto md:mx-0"
              />
              <p className="text-white text-sm font-medium mb-6 text-center md:text-left">
                Skill Tech Group of Companies
              </p>
              <h4 className="text-lg font-bold text-white mb-6">{t('quickLinks')}</h4>
              <ul className="space-y-2.5">
                {[
                  { key: 'home', text: t('home') },
                  { key: 'aboutUs', text: t('aboutUs') },
                  { key: 'installationServices', text: t('installationServices') },
                  { key: 'support', text: t('support') },
                  { key: 'news', text: t('news') },
                  { key: 'career', text: t('career') },
                  { key: 'blog', text: t('blog') },
                  { key: 'contactUs', text: t('contactUs') },
                  { key: 'privacy', text: t('privacy') },
                ].map((link) => (
                  <li key={link.key}>
                    <a
                      href="#"
                      className="text-sm text-white hover:text-pink-accent flex items-center gap-2 transition-colors group"
                    >
                      <PlayCircle className="w-3 h-3 text-pink-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Products Col 1 */}
            <div className="md:col-span-2 mt-12 pt-[10px] md:pt-[155px]">
              <h4 className="text-lg font-bold text-white mb-6">{t('products')}</h4>
              <ul className="space-y-2.5">
                {[
                  { key: 'tvWallMounts', text: t('tvWallMounts') },
                  { key: 'monitorDesktopMounts', text: t('monitorDesktopMounts') },
                  { key: 'tvCeilingMounts', text: t('tvCeilingMounts') },
                  { key: 'motorizedMountsAndStands', text: t('motorizedMountsAndStands') },
                  { key: 'tvFloorStandsCart', text: t('tvFloorStandsCart') },
                  { key: 'projectorMounts', text: t('projectorMounts') },
                  { key: 'projectorScreens', text: t('projectorScreens') },
                  { key: 'laptopTabletStands', text: t('laptopTabletStands') },
                ].map((product) => (
                  <li key={product.key}>
                    <a
                      href="#"
                      className="text-sm text-white hover:text-pink-accent flex items-center gap-2 transition-colors group"
                    >
                      <PlayCircle className="w-3 h-3 text-pink-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      {product.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Products Col 2 */}
            <div className="md:col-span-2 mt-12 pt-0 md:pt-[155px]">
              <h4 className="text-lg font-bold text-white mb-6 opacity-0 hidden md:block">
                {t('products')}
              </h4>
              <ul className="space-y-2.5">
                {[
                  { key: 'posMounts', text: t('posMounts') },
                  { key: 'videoWallMounts', text: t('videoWallMounts') },
                  { key: 'acBrackets', text: t('acBrackets') },
                  { key: 'dvdReceiver', text: t('dvdReceiver') },
                  { key: 'cctvCamera', text: t('cctvCamera') },
                  { key: 'otherMounts', text: t('otherMounts') },
                  { key: 'television', text: t('television') },
                ].map((product) => (
                  <li key={product.key}>
                    <a
                      href="#"
                      className="text-sm text-white hover:text-pink-accent flex items-center gap-2 transition-colors group"
                    >
                      <PlayCircle className="w-3 h-3 text-pink-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      {product.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: White Section Container - Now spans 6 columns */}
            <div className="md:col-span-6 mt-10">
              <div className="relative z-10 bg-white pt-8 pb-8 sm:px-6 md:px-8 lg:px-12 xl:px-6 rounded-[28px] shadow-lg">
                <div className="container mx-auto">
                  {/* Changed to grid with better column distribution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left side: Let's Connect */}
                    <div className="pl-5 md:pl-0">
                      <h3 className="text-2xl font-bold text-navy mb-3">{t('letsConnect')}</h3>
                      <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                        {t('partnershipOpportunities')}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex-shrink-0">
                            <MapPin className="w-5 h-5 text-pink-accent" />
                          </div>
                          <div>
                            <h4 className="font-bold text-navy text-sm">{t('ourHeadOffice')}</h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {t('officeAddress')}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex-shrink-0">
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

                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex-shrink-0">
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

                      <div className="flex gap-2 mt-6">
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center hover:bg-pink-accent transition-colors"
                          aria-label="Facebook"
                        >
                          <Facebook className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center hover:bg-pink-accent transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center hover:bg-pink-accent transition-colors"
                          aria-label="Twitter"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center hover:bg-pink-accent transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center hover:bg-pink-accent transition-colors"
                          aria-label="YouTube"
                        >
                          <Youtube className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center hover:bg-pink-accent transition-colors"
                          aria-label="WhatsApp"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Right side: Contact Form */}
                    <div>
                      <div className="bg-white rounded-[28px] shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-6 border border-slate-50">
                        <h3 className="text-xl font-bold text-navy mb-5 text-center">
                          {t('sendUsMessage')}
                        </h3>

                        <form className="space-y-3">
                          <div className="grid grid-cols-2 gap-3">
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
                          <div className="grid grid-cols-2 gap-3">
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
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-pink-accent transition-colors resize-none"
                          />

                          <div className="flex justify-center pt-1">
                            <button
                              type="button"
                              className="flex items-center gap-2 bg-pink-accent text-white px-8 py-2.5 rounded-full hover:bg-pink-600 transition-colors shadow-md group"
                            >
                              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              <span className="font-medium text-sm">{t('submit')}</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-10 pt-6 text-center">
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.75)' }}>
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}