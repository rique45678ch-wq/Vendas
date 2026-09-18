import React from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { FORMS_URL } from '../data/realEstateData';
import { trackLeadInterest } from '../utils/analytics';

export const CtaBanner: React.FC = () => {
  return (
    <section id="cta-final" className="py-24 bg-stone-950 text-white relative overflow-hidden">
      {/* Visual lighting background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Urgent Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
          <Clock className="w-3.5 h-3.5 animate-pulse" />
          <span>Últimas Unidades no Valor de Lançamento</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
          Pronto Para Conquistar o Apartamento que Sua Família Merece?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Cadastre-se agora mesmo para receber a <strong className="text-amber-400 font-semibold">Tabela de Preços Oficial</strong>, plantas em alta resolução e garantir condição especial com entrada parcelada.
        </p>

        {/* Big Master Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            id="final-cta-button"
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLeadInterest('cta-final-banner')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-stone-950 text-lg font-black tracking-wide shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-6 h-6 stroke-[3]" />
          </a>
        </div>

        {/* Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-stone-400 pt-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Formulário rápido de 1 minuto</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Atendimento via WhatsApp ou ligação</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Seus dados 100% seguros e protegidos</span>
          </div>
        </div>

      </div>
    </section>
  );
};
