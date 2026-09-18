import React from 'react';
import { MapPin, Navigation, Car, Footprints, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { NEARBY_LOCATIONS, FORMS_URL } from '../data/realEstateData';

export const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-stone-100/90 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Localização Nobre & Estratégica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight mb-4">
            O Bairro Mais Desejado a Poucos Passos de Tudo
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            More cercado por ruas arborizadas, gastronomia sofisticada, mobilidade urbana eficiente e as melhores instituições de ensino e saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Points of Interest Column */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold font-serif text-stone-900 mb-4">
              Facilidades e distâncias a partir do condomínio:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {NEARBY_LOCATIONS.map((loc, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-sm flex items-start gap-3 hover:border-amber-400/80 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    {loc.type === 'walk' ? (
                      <Footprints className="w-4 h-4" />
                    ) : (
                      <Car className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-stone-900">{loc.place}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                        {loc.time}
                      </span>
                      <span className="text-[11px] text-stone-400">
                        {loc.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-stone-800 flex items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-3">
                <Navigation className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">
                  Rua das Acácias Nobres, 850 • Bairro Jardins Central
                </span>
              </div>
              <a
                href={FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-bold text-amber-700 hover:text-amber-800 underline flex items-center gap-1"
              >
                <span>Agendar Rota</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Visual Map Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-900 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                alt="Mapa da Região"
                className="w-full h-full object-cover opacity-80 hover:opacity-95 transition-opacity"
              />
              <div className="absolute inset-0 bg-stone-950/40 pointer-events-none" />

              {/* Pin Overlay for Lumina */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-amber-500/30 animate-ping absolute inset-0" />
                  <div className="w-14 h-14 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shadow-2xl relative z-10 border-2 border-white">
                    <MapPin className="w-7 h-7 fill-stone-950" />
                  </div>
                </div>
                <div className="mt-2 px-3 py-1 rounded-lg bg-stone-950/90 text-amber-400 text-xs font-bold border border-amber-500/30 shadow-lg whitespace-nowrap">
                  LUMINA RESIDENCIAL
                </div>
              </div>

              {/* Card Footer inside map */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-stone-950/85 backdrop-blur-md border border-stone-800 flex items-center justify-between text-white">
                <div>
                  <span className="text-[11px] text-stone-400 block">Plantão com Maquete Física e Decorado</span>
                  <span className="text-sm font-bold text-amber-400">Aberto diariamente das 9h às 19h</span>
                </div>

                <a
                  href={FORMS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 text-stone-950 text-xs font-bold shadow hover:bg-amber-400 transition-colors"
                >
                  <span>Tenho Interesse</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
