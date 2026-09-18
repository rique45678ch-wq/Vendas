import React, { useState, useMemo } from 'react';
import { Calculator, ArrowUpRight, HelpCircle, Check, Landmark } from 'lucide-react';
import { FORMS_URL } from '../data/realEstateData';
import { trackLeadInterest } from '../utils/analytics';

export const Simulator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(498000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [termYears, setTermYears] = useState<number>(30); // 30 anos = 360 meses

  const calculation = useMemo(() => {
    const downPaymentValue = (propertyPrice * downPaymentPercent) / 100;
    const financedAmount = propertyPrice - downPaymentValue;
    const months = termYears * 12;
    // Approximate mortgage rate ~9.8% a.a. -> ~0.78% a.m.
    const monthlyInterestRate = 0.0078;
    // SAC / Price estimation
    const estimatedMonthlyPayment =
      (financedAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -months));

    // Entry installment during construction (e.g. 36x)
    const constructionEntryPerMonth = downPaymentValue / 36;

    return {
      downPaymentValue,
      financedAmount,
      months,
      estimatedMonthlyPayment,
      constructionEntryPerMonth
    };
  }, [propertyPrice, downPaymentPercent, termYears]);

  const formatBRL = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="simulador" className="py-24 bg-stone-100/90 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>Planejamento Financeiro Descomplicado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight mb-4">
            Simulador de Financiamento & Entrada Facilitada
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Descubra como fica a sua parcela estimada. Você pode parcelar a entrada em até 36 meses durante a obra ou usar seu FGTS.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Sliders */}
            <div className="lg:col-span-7 p-7 sm:p-10 border-b lg:border-b-0 lg:border-r border-stone-200">
              <h3 className="text-xl font-bold font-serif text-stone-900 mb-6">
                Ajuste os valores para sua simulação:
              </h3>

              {/* Slider 1: Property Price */}
              <div className="mb-7">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600">
                    Valor do Imóvel
                  </label>
                  <span className="text-lg font-black text-amber-600 font-serif">
                    {formatBRL(propertyPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min="380000"
                  max="1600000"
                  step="10000"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-stone-600 font-medium mt-1">
                  <span>R$ 380 mil</span>
                  <span>R$ 900 mil</span>
                  <span>R$ 1.6 mi</span>
                </div>
              </div>

              {/* Slider 2: Down Payment % */}
              <div className="mb-7">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600">
                    Entrada ({downPaymentPercent}%)
                  </label>
                  <span className="text-base font-bold text-stone-800">
                    {formatBRL(calculation.downPaymentValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="50"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-stone-600 font-medium mt-1">
                  <span>20% (Mínimo recomendado)</span>
                  <span>35%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Slider 3: Term in Years */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600">
                    Prazo do Financiamento
                  </label>
                  <span className="text-base font-bold text-stone-800">
                    {termYears} anos ({calculation.months} meses)
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="35"
                  step="5"
                  value={termYears}
                  onChange={(e) => setTermYears(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-stone-600 font-medium mt-1">
                  <span>10 anos</span>
                  <span>25 anos</span>
                  <span>35 anos</span>
                </div>
              </div>

              {/* Bank Partners Badges */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                <div className="flex items-center gap-1.5 font-medium">
                  <Landmark className="w-4 h-4 text-stone-500" />
                  <span>Aprovamos em Caixa, Itaú, Bradesco e Santander</span>
                </div>
              </div>
            </div>

            {/* Right Column: Result Summary & CTA */}
            <div className="lg:col-span-5 bg-stone-950 text-white p-7 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                  Resultado Estimado
                </span>
                <h4 className="text-xl font-serif font-bold text-white mb-6">
                  Resumo da sua proposta
                </h4>

                <div className="space-y-4 mb-6">
                  <div className="bg-stone-900/90 p-4 rounded-xl border border-stone-800">
                    <span className="text-xs text-stone-400 block mb-1">
                      Parcela Mensal Estimada
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-amber-400 font-serif">
                      {formatBRL(calculation.estimatedMonthlyPayment)}
                    </span>
                    <span className="text-[11px] text-stone-500 block mt-1">
                      *Cálculo referencial sujeito à análise de crédito
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-900/50 border border-stone-800/80 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-stone-400">Entrada sugerida:</span>
                      <span className="font-semibold text-stone-200">{formatBRL(calculation.downPaymentValue)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Entrada em até 36x obra:</span>
                      <span className="font-semibold text-amber-300">{formatBRL(calculation.constructionEntryPerMonth)}/mês</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Saldo financiado:</span>
                      <span className="font-semibold text-stone-200">{formatBRL(calculation.financedAmount)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-stone-400 mb-6">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Você pode compor renda com cônjuge, pais ou familiares para aprovação.</span>
                </div>
              </div>

              {/* Primary Tenho Interesse CTA Button */}
              <a
                id="simulator-cta-button"
                href={FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLeadInterest(`simulador-valor-${propertyPrice}`)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.01]"
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
