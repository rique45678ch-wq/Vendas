import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { FORMS_URL } from '../data/realEstateData';
import { trackLeadInterest } from '../utils/analytics';

export const FloatingCtaBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 250px
      setVisible(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Mobile Floating Bottom Bar */}
      <div 
        id="mobile-floating-bar"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-lg border-t border-stone-800 p-3 px-4 flex items-center justify-between gap-3 shadow-2xl transition-all duration-300"
      >
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
            Lançamento Exclusivo
          </span>
          <span className="text-xs font-semibold text-white">
            A partir de R$ 385.000
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:+551140028922"
            className="p-2.5 rounded-xl bg-stone-850 border border-stone-700 text-stone-300 hover:text-white"
            aria-label="Ligar para plantão"
          >
            <Phone className="w-4 h-4" />
          </a>

          <a
            id="floating-mobile-cta"
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLeadInterest('floating-mobile-bar')}
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs tracking-tight shadow-md"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>
      </div>

      {/* Desktop Floating Quick Action Pill */}
      <div 
        id="desktop-floating-pill"
        className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-3 bg-stone-950/90 backdrop-blur-md border border-stone-800 shadow-2xl p-2.5 pl-4 rounded-full"
      >
        <div className="flex flex-col text-left pr-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
            Tabela Promocional
          </span>
          <span className="text-xs font-semibold text-stone-200">
            Últimas unidades com ITBI grátis
          </span>
        </div>

        <a
          id="floating-desktop-cta"
          href={FORMS_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLeadInterest('floating-desktop-pill')}
          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs shadow-lg transition-transform hover:scale-105"
        >
          <span>Tenho Interesse</span>
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </a>
      </div>
    </>
  );
};
