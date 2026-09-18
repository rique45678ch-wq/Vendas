import React from 'react';
import { Star, Quote, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/realEstateData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Credibilidade & Satisfação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight mb-4">
            Quem Já Escolheu o Lumina Recomenda
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Veja a experiência de quem já realizou o sonho da casa própria ou expandiu sua carteira de investimentos imobiliários.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-stone-50 p-8 rounded-2xl border border-stone-200 flex flex-col justify-between hover:border-amber-400/60 transition-all duration-300 shadow-sm"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-stone-300 mb-2" />

                <p className="text-sm text-stone-700 leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-amber-400"
                />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">{t.name}</h4>
                  <span className="text-xs text-stone-500 block">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
