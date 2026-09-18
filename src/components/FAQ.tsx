import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ArrowUpRight, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, FORMS_URL } from '../data/realEstateData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre as condições de pagamento, financiamento bancário e processo de compra.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-14">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-stone-900 hover:text-amber-700 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-serif font-bold">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-amber-500 text-stone-950' : 'bg-stone-100 text-stone-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have More Questions Card */}
        <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-serif text-stone-900">
                Ficou com alguma dúvida específica?
              </h4>
              <p className="text-xs sm:text-sm text-stone-500">
                Nossos consultores estão online no formulário para responder prontamente.
              </p>
            </div>
          </div>

          <a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-md transition-all"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
