import React from 'react';
import { Building2, Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { FORMS_URL } from '../data/realEstateData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800/80 pt-16 pb-24 lg:pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-stone-950 font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block leading-tight font-serif">
                  LUMINA
                </span>
                <span className="text-[10px] tracking-widest text-amber-400 font-semibold uppercase">
                  Residencial & Club
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              O mais moderno e completo lançamento imobiliário da região. Apartamentos de 2 a 4 dormitórios projetados para o seu melhor estilo de vida.
            </p>

            <div className="pt-2 text-xs text-stone-500">
              <p>CRECI Jurídico: J-34892</p>
              <p>Incorporação registrada sob R.3 na matrícula nº 142.980.</p>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold font-serif text-base mb-4">
              Plantão de Vendas
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Rua das Acácias Nobres, 850 • Bairro Jardins Central</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>(11) 4002-8922 / (11) 98765-4321</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>contato@residenciallumina.com.br</span>
              </li>
            </ul>
            <p className="text-[11px] text-amber-400/80 mt-3 font-medium">
              Atendimento diário das 09h às 19h (inclusive sábados e domingos)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold font-serif text-base mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero-section" className="hover:text-amber-400 transition-colors">Início</a></li>
              <li><a href="#diferenciais" className="hover:text-amber-400 transition-colors">Diferenciais Construtivos</a></li>
              <li><a href="#plantas" className="hover:text-amber-400 transition-colors">Plantas e Metragens</a></li>
              <li><a href="#lazer" className="hover:text-amber-400 transition-colors">Áreas de Lazer</a></li>
              <li><a href="#simulador" className="hover:text-amber-400 transition-colors">Simulador de Parcelas</a></li>
              <li><a href="#localizacao" className="hover:text-amber-400 transition-colors">Localização e Bairro</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Conversion Col */}
          <div>
            <h4 className="text-white font-bold font-serif text-base mb-4">
              Receber Apresentação
            </h4>
            <p className="text-xs text-stone-400 mb-4">
              Cadastre-se para receber o book digital completo com fotos em alta resolução e condições de financiamento.
            </p>
            <a
              id="footer-cta-button"
              href={FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all"
            >
              <span>Tenho Interesse</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 border-t border-stone-800/80 text-[11px] text-stone-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Residencial Lumina. Todos os direitos reservados. Imagens meramente ilustrativas. Acabamentos conforme memorial descritivo.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-stone-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              Patrimônio de Afetação Garantido
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
