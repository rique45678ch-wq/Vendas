import React, { useState } from 'react';
import { Image as ImageIcon, X, ArrowUpRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, FORMS_URL } from '../data/realEstateData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'todas' | 'fachada' | 'interiores' | 'lazer'>('todas');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'todas'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="galeria" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <ImageIcon className="w-3.5 h-3.5 text-amber-600" />
            <span>Galeria de Imagens</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight mb-4">
            Cada Ângulo Revela um Novo Motivo Para Amar
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Renders fiéis ao projeto arquitetônico e acabamentos de altíssimo padrão executivo.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'todas', label: 'Todas as Fotos' },
            { id: 'fachada', label: 'Fachada & Áreas Externas' },
            { id: 'interiores', label: 'Interiores & Decorado' },
            { id: 'lazer', label: 'Áreas de Lazer' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === tab.id
                  ? 'bg-stone-950 text-amber-400 font-bold shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-stone-900/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-amber-400" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  {item.category}
                </span>
                <h3 className="text-base font-bold font-serif leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-1 mt-1 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <span className="text-sm font-medium text-stone-600">
            Deseja visitar nosso apartamento decorado pessoalmente?
          </span>
          <a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-950/80 text-stone-300 hover:text-white border border-stone-700 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] bg-stone-950">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  {activeModalItem.category}
                </span>
                <h3 className="text-xl font-bold font-serif text-white mt-1">
                  {activeModalItem.title}
                </h3>
                <p className="text-sm text-stone-400 mt-1 max-w-xl">
                  {activeModalItem.description}
                </p>
              </div>

              <a
                href={FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-md transition-all"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
