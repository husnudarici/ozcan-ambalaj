"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActiveLink = (path: string) => pathname === path;

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-5 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="size-10 rounded-lg bg-primary text-white flex items-center justify-center group-hover:bg-primary-dark transition-colors">
            <span className="material-symbols-outlined text-2xl">package_2</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-secondary leading-none">Özcan</span>
            <span className="text-sm font-medium text-gray-500 tracking-wider">AMBALAJ</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-semibold transition-colors ${
                isActiveLink(link.path) ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/iletisim"
            className="h-10 px-5 flex items-center justify-center rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-sm shadow-blue-500/20"
          >
            Teklif Al
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-base font-semibold py-2 px-2 rounded-md ${
                isActiveLink(link.path) ? 'bg-blue-50 text-primary' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/iletisim"
            className="w-full h-12 flex items-center justify-center rounded-lg bg-primary text-white font-bold"
          >
            Teklif Al
          </Link>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-white">
               <span className="material-symbols-outlined text-primary text-3xl">package_2</span>
               <span className="text-xl font-bold">Özcan Ambalaj</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Kaliteli ambalaj çözümleriyle ürünlerinizi koruyor, markanıza değer katıyoruz. 25 yılı aşkın tecrübe.
            </p>
            <div className="flex gap-4 mt-2">
              {['public', 'share', 'mail'].map((icon) => (
                <a key={icon} href="#" className="size-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                   <span className="material-symbols-outlined text-sm">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Hızlı Erişim</h4>
            <div className="flex flex-col gap-3 text-sm">
              {NAV_LINKS.map(link => (
                <Link key={link.path} href={link.path} className="hover:text-primary transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6">Hizmetler</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Özel Kesim Kutu</a>
              <a href="#" className="hover:text-primary transition-colors">Ofset Baskı</a>
              <a href="#" className="hover:text-primary transition-colors">Laminasyon</a>
              <a href="#" className="hover:text-primary transition-colors">Prototip Üretim</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">İletişim</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
                <span>A-1 Caddesi 2705 Sk. No:3 Habibler Sultangazi, İstanbul</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary shrink-0">call</span>
                <span>+90 546 975 48 99</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary shrink-0">mail</span>
                <span>info@ozcanambalaj.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Özcan Ambalaj San. Tic. Ltd. Şti. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;