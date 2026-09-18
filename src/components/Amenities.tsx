import React, { useState } from 'react';
import { 
  Waves, 
  Dumbbell, 
  Utensils, 
  Laptop, 
  Smile, 
  ShieldCheck, 
  Bike, 
  Package, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { AMENITIES, FORMS_URL } from '../data/realEstateData';

const iconMap: Record<string, any> = {
  Waves,
  Dumbbell,
  Utensils,
  Laptop,
  Smile,
  ShieldCheck
};

export const Amenities: React.FC = () => {
  const [filter, setFilter] = useState<'todos' | 'lazer' | 'bem-estar' | 'praticidade' | 'seguranca'>('todos');

  const filteredAmenities = filter === 'todos' 
    ? AMENITIES 
    : AMENITIES.filter((a) => a.category === filter);

  const extraPerks = [
    { icon: Bike, title: 'Bicicletário c/ Oficina', desc: 'Espaço seguro com bancada de ferramentas e calibrador de pneus.' },
    { icon: Package, title: 'Delivery Box Inteligente', desc: 'Armários automatizados e refrigerados para receber suas encomendas.' },
    { icon: Sparkles, title: 'Pet Place com Agility', desc: 'Área gramada e cercada para o lazer e exercício do seu pet.' }
  ];

  return (
    <section id="lazer" className="py-24 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Waves className="w-3.5 h-3.5" />
            <span>Clube Privativo Exclusivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight mb-4">
            Mais de 15 Espaços de Lazer Equipados e Decorados
          </h2>
          <p className="text-base text-stone-400 leading-relaxed">
            Viva a experiência de resort todos os dias sem sair de casa. Áreas comuns entregues mobiliadas com alto padrão de design.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'todos', label: 'Todos os Espaços' },
            { id: 'lazer', label: 'Lazer & Festa' },
            { id: 'bem-estar', label: 'Saúde & Bem-Estar' },
            { id: 'praticidade', label: 'Trabalho & Praticidade' },
            { id: 'seguranca', label: 'Segurança' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                filter === tab.id
                  ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
                  : 'bg-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-700/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAmenities.map((item) => {
            const Icon = iconMap[item.iconName] || Sparkles;
            return (
              <div
                key={item.id}
                className="group bg-stone-800/80 rounded-2xl border border-stone-700/60 overflow-hidden shadow-lg hover:border-amber-500/50 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-stone-950/80 backdrop-blur-md border border-stone-700/60 text-amber-400 flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white font-serif mb-2 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Perks Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {extraPerks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div key={i} className="p-5 rounded-xl bg-stone-800/40 border border-stone-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-200">{perk.title}</h4>
                  <p className="text-xs text-stone-400 mt-1">{perk.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Amenity CTA Card */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-stone-800 to-stone-850 border border-amber-500/20 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold font-serif text-white mb-2">
            Gostaria de ver o tour virtual em 360° das áreas de lazer?
          </h3>
          <p className="text-sm text-stone-400 mb-6">
            Cadastre-se para receber o vídeo do projeto arquitetônico e o catálogo em alta resolução.
          </p>
          <a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-lg transition-all"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
};
