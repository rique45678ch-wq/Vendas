import React from 'react';
import { 
  Flame, 
  VolumeX, 
  Zap, 
  ShieldCheck, 
  Leaf, 
  Sparkles,
  Maximize2,
  Compass
} from 'lucide-react';
import { FORMS_URL } from '../data/realEstateData';

export const Highlights: React.FC = () => {
  const differentials = [
    {
      icon: Flame,
      title: 'Varanda Gourmet c/ Churrasqueira',
      description: 'Churrasqueira a carvão e bancada em granito integradas à sala e cozinha para momentos únicos em família.',
      tag: 'Convivência'
    },
    {
      icon: VolumeX,
      title: 'Atenuação Acústica Superior',
      description: 'Manta acústica atenuante de ruídos sob o contrapiso e esquadrias de alumínio com vedação reforçada.',
      tag: 'Conforto'
    },
    {
      icon: Zap,
      title: 'Ponto para Carro Elétrico',
      description: 'Infraestrutura com medição individual para carregamento de veículos elétricos e híbridos em cada vaga.',
      tag: 'Tecnologia'
    },
    {
      icon: ShieldCheck,
      title: 'Segurança Inteligente 24h',
      description: 'Acesso por reconhecimento facial, clausura para pedestres/veículos e monitoramento com câmeras HD.',
      tag: 'Tranquilidade'
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade & Economia',
      description: 'Energia solar fotovoltaica para áreas comuns e sistema de reuso de água pluvial para irrigação.',
      tag: 'Eco-Friendly'
    },
    {
      icon: Maximize2,
      title: 'Pé-Direito Elevado & Luz Natural',
      description: 'Vãos amplos de janelas que maximizam a iluminação natural, circulação de ar e amplitude visual.',
      tag: 'Bem-Estar'
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-stone-100/80 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300/60 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Padrão Construtivo Superior</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight mb-4">
            Diferenciais Que Elevam o Seu Estilo de Vida
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Cada detalhe do empreendimento foi planejado por especialistas para garantir o máximo em conforto térmico, acústico, segurança e valorização patrimonial.
          </p>
        </div>

        {/* Differential Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="group relative bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-bold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2 font-serif group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Conversion Banner inside Differentials */}
        <div className="bg-stone-900 text-stone-50 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-400">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-stone-100 font-serif">
                Quer conhecer o memorial descritivo completo?
              </h4>
              <p className="text-sm text-stone-400">
                Receba o catálogo técnico com marcas de revestimentos, louças e metais.
              </p>
            </div>
          </div>

          <a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-sm font-bold tracking-wide transition-all shadow-md"
          >
            <span>Tenho Interesse</span>
          </a>
        </div>

      </div>
    </section>
  );
};
