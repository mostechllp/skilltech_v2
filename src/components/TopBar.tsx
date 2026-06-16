import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  ChevronDown,
  Globe,
  MessageCircle
} from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';

export function TopBar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
    { code: 'ar', name: 'العربية', flag: '🇦🇪', dir: 'rtl' },
    { code: 'pt', name: 'Português', flag: '🇵🇹', dir: 'ltr' },
    { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺', dir: 'ltr' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('preferred-language', langCode);
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = langCode;
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && savedLang !== i18n.language) {
      changeLanguage(savedLang);
    }
  }, []);

  return (
    <div className="bg-[#3351a3] text-white py-2 px-4 md:px-8 text-xs md:text-sm flex items-center justify-between gap-2 z-50 relative">
      {/* Social Icons - Left */}
      <div className="flex items-center gap-2">
        <a
          href="#"
          className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-accent transition-colors sm:flex"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-3.5 h-3.5" />
        </a>
        <a
          href="#"
          className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-accent transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="w-3.5 h-3.5" />
        </a>
        <a
          href="#"
          className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-accent transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-3.5 h-3.5" />
        </a>
        <a
          href="#"
          className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-accent transition-colors sm:flex"
          aria-label="YouTube"
        >
          <Youtube className="w-3.5 h-3.5" />
        </a>
        <a
          href="#"
          className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-accent transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="w-3.5 h-3.5" />
        </a>
        <a
          href="https://wa.me/971509637077"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-accent transition-colors"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Contact Info - Hidden on mobile, visible on desktop */}
      <div className="hidden md:flex flex-wrap items-center justify-center gap-4 md:gap-6">
        <a
          href="mailto:info@skilltechonline.com"
          className="flex items-center gap-1.5 hover:text-pink-accent transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span>info@skilltechonline.com</span>
        </a>
        <a
          href="tel:+971509637077"
          className="flex items-center gap-1.5 hover:text-pink-accent transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>+971 50 963 7077</span>
        </a>
        <a
          href="tel:+97142347770"
          className="flex items-center gap-1.5 hover:text-pink-accent transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>+971 4 234 7770</span>
        </a>
      </div>

      {/* Language Switcher Dropdown - Right */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
        >
          <Globe className="w-3.5 h-3.5" />
          <span className="text-sm">{currentLanguage.flag}</span>
          <span className="font-medium hidden sm:inline">{currentLanguage.name}</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-50 min-w-[160px] border border-gray-100">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full px-4 py-2 text-left text-sm flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                  i18n.language === lang.code ? 'bg-pink-accent/10 text-pink-accent' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
                {i18n.language === lang.code && (
                  <span className="ml-auto text-pink-accent">✓</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}