import React, { useState } from 'react';
import { 
  Maximize, 
  BedDouble, 
  Bath, 
  Car, 
  ArrowUpRight, 
  CheckCircle2, 
  FileText
} from 'lucide-react';
import { APARTMENTS, FORMS_URL } from '../data/realEstateData';
import { ApartmentUnit } from '../types';
import { trackLeadInterest } from '../utils/analytics';

export const FloorPlans: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<ApartmentUnit>(APARTMENTS[1]); // Default to 2 dorms

  return (
    <section id="plantas" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300/60 text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5 text-amber-600" />
            <span>Plantas & Tipologias Inteligentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight mb-4">
            Escolha a Configuração Que Mais Combina com Você
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Projetadas para valorizar cada centímetro com ventilação cruzada, iluminação natural e ambientes integrados.
          </p>
        </div>

        {/* Typology Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {APARTMENTS.map((apt) => {
            const isSelected = selectedUnit.id === apt.id;
            return (
              <button
                key={apt.id}
                onClick={() => setSelectedUnit(apt)}
                className={`px-5 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-stone-950 text-amber-400 shadow-md scale-105 border border-amber-500/30'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80 border border-stone-200'
                }`}
              >
                <span>{apt.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                  isSelected ? 'bg-amber-500/20 text-amber-300' : 'bg-stone-200 text-stone-600'
                }`}>
                  {apt.area} m²
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Unit Card Display */}
        <div className="bg-stone-50 rounded-3xl border border-stone-200/90 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 mb-12">
          
          {/* Visual Column */}
          <div className="lg:col-span-6 relative bg-stone-900 min-h-[360px] flex items-center justify-center p-6 sm:p-8">
            <img
              src={selectedUnit.image}
              alt={selectedUnit.name}
              className="w-full h-full max-h-[460px] object-cover rounded-2xl shadow-xl transition-all duration-500"
            />
            {/* Badge overlay */}
            <div className="absolute top-8 left-8 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-stone-950/80 backdrop-blur-md text-amber-400 text-xs font-bold tracking-wide border border-amber-500/30 shadow-md">
              <span>{selectedUnit.badge}</span>
            </div>
            {/* Area floating badge */}
            <div className="absolute bottom-8 right-8 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-black text-sm shadow-lg">
              <span>{selectedUnit.area} m² privativos</span>
            </div>
          </div>

          {/* Details & Specs Column */}
          <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Tipologia Selecionada
                </span>
                <span className="text-xs text-stone-400">
                  Código: {selectedUnit.id.toUpperCase()}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-3">
                {selectedUnit.name}
              </h3>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
                {selectedUnit.description}
              </p>

              {/* Numerical Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white border border-stone-200/80 mb-6">
                <div className="flex flex-col items-center justify-center p-2 text-center">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-1">
                    <Maximize className="w-4 h-4" />
                  </div>
                  <span className="text-base font-bold text-stone-900">{selectedUnit.area} m²</span>
                  <span className="text-[11px] text-stone-500">Área Privativa</span>
                </div>

                <div className="flex flex-col items-center justify-center p-2 text-center">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-1">
                    <BedDouble className="w-4 h-4" />
                  </div>
                  <span className="text-base font-bold text-stone-900">{selectedUnit.bedrooms} Dorms</span>
                  <span className="text-[11px] text-stone-500">({selectedUnit.suites} Suíte{selectedUnit.suites > 1 ? 's' : ''})</span>
                </div>

                <div className="flex flex-col items-center justify-center p-2 text-center">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-1">
                    <Bath className="w-4 h-4" />
                  </div>
                  <span className="text-base font-bold text-stone-900">{selectedUnit.bathrooms}</span>
                  <span className="text-[11px] text-stone-500">Banheiros</span>
                </div>

                <div className="flex flex-col items-center justify-center p-2 text-center">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-1">
                    <Car className="w-4 h-4" />
                  </div>
                  <span className="text-base font-bold text-stone-900">{selectedUnit.parkingSpots} Vaga{selectedUnit.parkingSpots > 1 ? 's' : ''}</span>
                  <span className="text-[11px] text-stone-500">Cobertas</span>
                </div>
              </div>

              {/* Highlights Checklist */}
              <div className="space-y-2.5 mb-8">
                {selectedUnit.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Price & Call To Action Button */}
            <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-stone-500 block uppercase font-medium">
                  Valor Promocional
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-stone-500 font-semibold">a partir de</span>
                  <span className="text-2xl font-black text-amber-600 font-serif">
                    {selectedUnit.startingPrice}
                  </span>
                </div>
                <span className="text-[11px] text-stone-400">
                  Condições de lançamento válidas para este mês
                </span>
              </div>

              {/* Primary "Tenho Interesse" Button specifically for this floorplan */}
              <a
                id={`floorplan-cta-${selectedUnit.id}`}
                href={FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLeadInterest(`planta-${selectedUnit.name}`)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-stone-950 hover:bg-stone-900 text-amber-400 hover:text-amber-300 font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
