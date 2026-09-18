import React, { useState, useEffect } from 'react';
import { Building2, Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { FORMS_URL } from '../data/realEstateData';
import { trackLeadInterest } from '../utils/analytics';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Plantas', href: '#plantas' },
    { label: 'Lazer', href: '#lazer' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-900/95 backdrop-blur-md shadow-lg border-b border-stone-800/80 py-3'
          : 'bg-gradient-to-b from-stone-950/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group" id="brand-logo">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-stone-950 shadow-md group-hover:scale-105 transition-transform">
            <Building2 className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white block leading-tight font-serif">
              LUMINA
            </span>
            <span className="text-[10px] tracking-widest text-amber-400 font-semibold uppercase">
              Residencial & Club
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+5511999998888"
            className="flex items-center gap-2 text-xs font-semibold text-stone-300 hover:text-white px-3 py-2 rounded-lg transition-colors"
            title="Plantão de Vendas"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden xl:inline">Plantão: (11) 4002-8922</span>
          </a>

          {/* Primary Tenho Interesse CTA Button */}
          <a
            id="nav-cta-button"
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLeadInterest('navbar-desktop')}
            className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 text-sm font-bold tracking-wide shadow-md shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLeadInterest('navbar-mobile-header')}
            className="sm:hidden inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-amber-500 text-stone-950 text-xs font-bold tracking-tight shadow-sm"
          >
            Tenho Interesse
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-stone-950/98 border-b border-stone-800 px-6 py-6 transition-all"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-200 hover:text-amber-400 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-stone-800 flex flex-col gap-3">
              <a
                href={FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackLeadInterest('navbar-mobile-drawer');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-stone-950 font-bold text-sm shadow-md"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
              <p className="text-xs text-center text-stone-400 pt-1">
                Atendimento rápido via WhatsApp e ligação
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
