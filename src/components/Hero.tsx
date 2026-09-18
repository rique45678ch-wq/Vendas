import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, Shield, MapPin, Eye } from 'lucide-react';
import { FORMS_URL } from '../data/realEstateData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'living' | 'fachada' | 'suite' | 'rooftop'>('living');

  const heroImages = {
    living: {
      url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      caption: 'Living integrado com varanda gourmet e acabamentos nobres'
    },
    fachada: {
      url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
      caption: 'Arquitetura contemporânea de torre única com paisagismo exuberante'
    },
    suite: {
      url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85',
      caption: 'Suíte master espaçosa com persiana blackout automatizada'
    },
    rooftop: {
      url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85',
      caption: 'Piscina com borda infinita e vista espetacular para o horizonte'
    }
  };

  return (
    <section id="hero-section" className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 bg-stone-950 text-white overflow-hidden flex items-center">
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.3),transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_bottom_left,rgba(217,119,6,0.2),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Conversions */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6 w-fit shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Lançamento Exclusivo • Condições Especiais</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif font-bold tracking-tight text-stone-50 leading-[1.15] mb-6">
              O Apartamento Perfeito Para a Sua Vida Acontecer.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-2xl mb-8">
              Plantas inteligentes de <strong className="text-amber-400 font-semibold">62m² a 186m²</strong>, com 2 a 4 dormitórios e varanda gourmet. 
              Localização privilegiada a passos de parques, gastronomia e com lazer completo estilo resort.
            </p>

            {/* Value Props Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9 text-sm text-stone-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Entrada facilitada em até 36x</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Utilize seu FGTS na compra</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Varanda com churrasqueira a carvão</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Vagas cobertas e ponto p/ carro elétrico</span>
              </div>
            </div>

            {/* Primary Action Button ("Tenho Interesse") */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                id="hero-cta-button"
                href={FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-[length:200%_auto] text-stone-950 text-base font-bold tracking-wide shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#plantas"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-800 hover:border-stone-700 text-sm font-semibold transition-all"
              >
                <Eye className="w-4 h-4 text-amber-400" />
                <span>Ver Plantas e Valores</span>
              </a>
            </div>

            {/* Reassurance Microcopy */}
            <div className="flex items-center gap-3 text-xs text-stone-400">
              <Shield className="w-4 h-4 text-amber-500/80 shrink-0" />
              <span>Garantia de entrega no prazo, patrimônio de afetação e atendimento personalizado sem compromisso.</span>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Interactive Preview */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 shadow-2xl">
              {/* Image Window */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-stone-950">
                <img
                  src={heroImages[activeTab].url}
                  alt={heroImages[activeTab].caption}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                
                {/* Floating Location Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-950/80 backdrop-blur-md border border-stone-700/60 text-xs font-medium text-stone-200">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Vila Jardins • Região Nobre</span>
                </div>

                {/* Floating Starting Price Badge */}
                <div className="absolute top-4 right-4 inline-flex flex-col items-end px-3.5 py-1.5 rounded-lg bg-amber-500/90 backdrop-blur-md text-stone-950 shadow-md">
                  <span className="text-[10px] font-extrabold uppercase tracking-tight">A partir de</span>
                  <span className="text-sm font-black leading-none">R$ 385.000</span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-xs text-stone-200 font-medium line-clamp-1">
                    {heroImages[activeTab].caption}
                  </p>
                </div>
              </div>

              {/* Perspective Selector Tabs */}
              <div className="p-3 bg-stone-900/90 border-t border-stone-800 grid grid-cols-4 gap-2">
                {[
                  { id: 'living', label: 'Living' },
                  { id: 'fachada', label: 'Fachada' },
                  { id: 'suite', label: 'Suíte' },
                  { id: 'rooftop', label: 'Rooftop' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`py-2 px-1 text-center rounded-lg text-xs font-semibold transition-all ${
                      activeTab === item.id
                        ? 'bg-amber-500 text-stone-950 shadow-sm'
                        : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Metrics Bar below preview */}
            <div className="grid grid-cols-4 gap-2 mt-4 text-center">
              <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800/80">
                <span className="block text-lg font-bold text-amber-400 font-serif">62 a 186</span>
                <span className="text-[11px] text-stone-400 uppercase tracking-wider font-medium">m² Privativos</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800/80">
                <span className="block text-lg font-bold text-amber-400 font-serif">1 a 4</span>
                <span className="text-[11px] text-stone-400 uppercase tracking-wider font-medium">Dormitórios</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800/80">
                <span className="block text-lg font-bold text-amber-400 font-serif">1 a 3</span>
                <span className="text-[11px] text-stone-400 uppercase tracking-wider font-medium">Vagas Cobertas</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800/80">
                <span className="block text-lg font-bold text-amber-400 font-serif">+15</span>
                <span className="text-[11px] text-stone-400 uppercase tracking-wider font-medium">Itens de Lazer</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
