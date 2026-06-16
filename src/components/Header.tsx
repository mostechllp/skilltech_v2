import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, ChevronDown, Menu, X, ChevronRight } from 'lucide-react';
import logo from '../assets/images/logo/logo.svg';

export function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const navLinks = [
    { name: t('home'), key: 'home', active: true },
    { name: t('aboutUs'), key: 'aboutUs' },
    { name: t('products'), key: 'products', hasDropdown: true, megaMenu: true },
    { name: t('services'), key: 'services' },
    { name: t('support'), key: 'support' },
    { name: t('news'), key: 'news' },
    { name: t('career'), key: 'career' },
    { name: t('blog'), key: 'blog' },
    { name: t('contactUs'), key: 'contactUs' }
  ];

  // Mega menu categories
  const megaMenuCategories = [
    {
      title: 'MOUNTING SOLUTIONS',
      items: [
        'TV Wall Mounts',
        'Monitor & Desktop Mounts',
        'TV Ceiling Mounts',
        'Motorized Mounts and Stands',
        'TV Floor Stands & Cart',
        'Projector Mounts',
        'Projector Screens',
        'Laptop & Tablet Stands',
        'POS Mounts',
        'Video Wall Mounts',
        'AC Brackets',
        'DVD / Receiver & CPU Mounts'
      ]
    },
    {
      title: 'DISPLAYS',
      items: [
        'Television',
        'Kiosk Screen',
        'Podium Screen',
        'LED Display'
      ]
    },
    {
      title: 'CABLES & WIRES',
      items: [
        'HDMI Cables',
        'CAT6+ Patch Cable',
        'DP Cables'
      ]
    },
    {
      title: 'GAMING',
      items: [
        'Gaming Desk',
        'Gaming Chair'
      ]
    }
  ];

  return (
    <>
      
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-lavender-light py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <div key={link.key} className="relative">
                  {link.hasDropdown ? (
                    <>
                      <button
                        ref={buttonRef}
                        onClick={() => toggleDropdown(link.key)}
                        className={`text-sm font-medium flex items-center gap-1 transition-colors hover:text-pink-accent ${
                          link.active 
                            ? 'text-navy font-bold border-b-2 border-navy pb-1' 
                            : 'text-slate-700'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === link.key ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Mega Menu Dropdown - Full width */}
                      {openDropdown === link.key && (
                        <div 
                          className="fixed top-[calc(44px+70px)] left-0 right-0 z-50"
                          ref={dropdownRef}
                        >
                          <div className="bg-white/95 backdrop-blur-sm shadow-2xl border-y border-slate-100">
                            <div className="container mx-auto px-4 md:px-8 py-8">
                              <div className="grid grid-cols-4 gap-8">
                                {megaMenuCategories.map((category, idx) => (
                                  <div key={idx}>
                                    <h3 className="text-pink-accent font-bold text-sm mb-4 pb-2 border-b border-pink-accent/20">
                                      {category.title}
                                    </h3>
                                    <ul className="space-y-2">
                                      {category.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                          <a
                                            href="#"
                                            className="text-sm text-slate-600 hover:text-pink-accent hover:translate-x-1 transition-all duration-200 flex items-center gap-1 group"
                                          >
                                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                                            <span className="group-hover:ml-1 transition-all">{item}</span>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Bottom banner */}
                              <div className="mt-6 pt-4 border-t border-slate-100">
                                <a href="#" className="text-sm text-navy hover:text-pink-accent font-medium flex items-center gap-2">
                                  View All Products
                                  <ChevronRight className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href="#"
                      className={`text-sm font-medium flex items-center gap-1 transition-colors hover:text-pink-accent ${
                        link.active 
                          ? 'text-navy font-bold border-b-2 border-navy pb-1' 
                          : 'text-slate-700'
                      }`}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center bg-white rounded-full border border-slate-200 overflow-hidden shadow-sm">
                <input
                  type="text"
                  placeholder={t('search')}
                  className="px-4 py-1.5 text-sm outline-none w-48"
                />
                <button className="p-2 text-slate-400 hover:text-pink-accent transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>

              <button
                className="lg:hidden text-navy p-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 py-4 px-4 max-h-[calc(100vh-120px)] overflow-y-auto z-50">
            {/* Menu Section */}
            <div className="mb-6">
              <h3 className="text-pink-accent font-bold text-sm mb-3 pb-2 border-b border-pink-accent/20">MENU</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.key}>
                    {link.hasDropdown ? (
                      <div>
                        <button
                          className="w-full text-base font-medium flex items-center justify-between py-2 text-slate-700"
                          onClick={() => {
                            const mobileDropdown = document.getElementById(`mobile-dropdown-${link.key}`);
                            if (mobileDropdown) {
                              mobileDropdown.classList.toggle('hidden');
                            }
                          }}
                        >
                          {link.name}
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        <div id={`mobile-dropdown-${link.key}`} className="hidden pl-4 py-2 space-y-4">
                          {megaMenuCategories.map((category, idx) => (
                            <div key={idx}>
                              <h4 className="text-pink-accent font-semibold text-xs mb-2">{category.title}</h4>
                              <ul className="space-y-1">
                                {category.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <a href="#" className="text-sm text-slate-600 hover:text-pink-accent block py-1">
                                      {item}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a href="#" className="text-base text-slate-700 hover:text-pink-accent block py-2">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Search Section */}
            <div className="mb-6">
              <h3 className="text-pink-accent font-bold text-sm mb-3 pb-2 border-b border-pink-accent/20">SEARCH</h3>
              <div className="flex items-center bg-slate-50 rounded-full border border-slate-200 overflow-hidden">
                <input
                  type="text"
                  placeholder={t('search')}
                  className="px-4 py-2 text-sm outline-none w-full bg-transparent"
                />
                <button className="p-2 text-slate-400">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Display Categories */}
            <div className="mb-6">
              <h3 className="text-pink-accent font-bold text-sm mb-3 pb-2 border-b border-pink-accent/20">DISPLAYS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-slate-600 hover:text-pink-accent block">Television</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-pink-accent block">Kiosk Screen</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-pink-accent block">Podium Screen</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-pink-accent block">LED Display</a></li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-pink-accent font-bold text-sm mb-3 pb-2 border-b border-pink-accent/20">CABLES & WIRES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-slate-600 hover:text-pink-accent block">HDMI Cables</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-pink-accent block">CAT6+ Patch Cable</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-pink-accent block">DP Cables</a></li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-pink-accent font-bold text-sm mb-3 pb-2 border-b border-pink-accent/20">GAMING</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-slate-600 hover:text-pink-accent block">Gaming Desk</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-pink-accent block">Gaming Chair</a></li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
}