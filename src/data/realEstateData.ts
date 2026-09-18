import { ApartmentUnit, Amenity, GalleryItem, FaqItem, NearbyLocation } from '../types';

export const FORMS_URL = 'https://forms.gle/cQwYvepigNhwLoHP8';

export const APARTMENTS: ApartmentUnit[] = [
  {
    id: 'studio-plus',
    name: 'Compact Studio & 1 Suíte',
    badge: 'Excelente para Investimento',
    area: 45,
    bedrooms: 1,
    suites: 1,
    bathrooms: 1,
    parkingSpots: 1,
    startingPrice: 'R$ 385.000',
    description: 'Conceito aberto e inteligente com aproveitamento máximo de espaço. Varanda integrada, fechadura digital e acabamentos de alto padrão.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Varanda com fechamento em vidro',
      'Infraestrutura para ar-condicionado',
      'Ponto USB e fechadura eletrônica',
      'Alto potencial de rentabilidade por locação'
    ]
  },
  {
    id: 'conforto-2-dorms',
    name: 'Apartamento Conforto 2 Dorms',
    badge: 'Mais Procurado',
    area: 68,
    bedrooms: 2,
    suites: 1,
    bathrooms: 2,
    parkingSpots: 1,
    startingPrice: 'R$ 498.000',
    description: 'Perfeito para jovens casais e pequenas famílias. Ampla varanda gourmet com churrasqueira integrada ao living e cozinha americana.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Churrasqueira a carvão na varanda',
      'Suíte master com espaço para closet',
      'Persianas integradas nos dormitórios',
      'Piso em porcelanato retificado no living'
    ]
  },
  {
    id: 'elegance-3-dorms',
    name: 'Apartamento Elegance 3 Dorms',
    badge: 'Espaço & Requinte',
    area: 104,
    bedrooms: 3,
    suites: 2,
    bathrooms: 3,
    parkingSpots: 2,
    startingPrice: 'R$ 840.000',
    description: 'Sofisticação em cada detalhe. Living em 2 ambientes, 2 suítes privativas, varanda panorâmica e 2 vagas de garagem demarcadas.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      '2 Suítes com ventilação natural',
      'Lavabo social e área de serviço separada',
      '2 Vagas de garagem cobertas e demarcadas',
      'Atenuação acústica entre pavimentos'
    ]
  },
  {
    id: 'penthouse-duplex',
    name: 'Cobertura Duplex Penthouse',
    badge: 'Exclusividade Máxima',
    area: 186,
    bedrooms: 4,
    suites: 3,
    bathrooms: 4,
    parkingSpots: 3,
    startingPrice: 'R$ 1.590.000',
    description: 'O topo da elegância. Terraço privativo com piscina privativa, deck solarium, espaço gourmet e vista de 360° para a cidade.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Piscina e deck solarium privativos',
      '3 Vagas de garagem + depósito privativo no subsolo',
      'Suíte master com hidromassagem e closet duplo',
      'Vista panorâmica definitiva da cidade'
    ]
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'piscina',
    title: 'Piscina com Borda Infinita',
    category: 'lazer',
    description: 'Piscina adulta climatizada com raia de 25m, deck molhado, solarium e piscina infantil independente.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    iconName: 'Waves'
  },
  {
    id: 'academia',
    title: 'Fitness Center & Pilates',
    category: 'bem-estar',
    description: 'Academia completa com equipamentos de última geração, área de musculação, esteiras e espaço para yoga.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    iconName: 'Dumbbell'
  },
  {
    id: 'gourmet',
    title: 'Espaço Gourmet & Grill',
    category: 'lazer',
    description: 'Salão gourmet totalmente equipado com eletrodomésticos premium, forno de pizza e churrasqueira para seus eventos.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    iconName: 'Utensils'
  },
  {
    id: 'coworking',
    title: 'Coworking & Salas de Reunião',
    category: 'praticidade',
    description: 'Ambiente climatizado e silencioso para home office com internet de ultravelocidade e salas para videochamadas.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    iconName: 'Laptop'
  },
  {
    id: 'brinquedoteca',
    title: 'Brinquedoteca & Playground',
    category: 'lazer',
    description: 'Espaço lúdico, seguro e monitorado para crianças de todas as idades se divertirem com tranquilidade.',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
    iconName: 'Smile'
  },
  {
    id: 'seguranca',
    title: 'Segurança & Portaria Blindada 24h',
    category: 'seguranca',
    description: 'Controle de acesso por reconhecimento facial, clausura de veículos e pedestres e monitoramento por câmeras HD.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    iconName: 'ShieldCheck'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Fachada Moderna e Imponente',
    category: 'fachada',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    description: 'Design contemporâneo com brises amadeirados e iluminação paisagística projetada por escritório premiado.'
  },
  {
    id: 'g2',
    title: 'Living Integrado à Varanda',
    category: 'interiores',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    description: 'Sensação de amplitude contínua com piso nivelado entre a sala de estar e a varanda gourmet.'
  },
  {
    id: 'g3',
    title: 'Suíte Master Aconchegante',
    category: 'interiores',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    description: 'Ambiente projetado para o seu descanso absoluto com janelas acústicas e espaço para closet amplo.'
  },
  {
    id: 'g4',
    title: 'Piscina no Rooftop',
    category: 'lazer',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    description: 'Momentos inesquecíveis com vista panorâmica para o pôr do sol da cidade.'
  },
  {
    id: 'g5',
    title: 'Varanda Gourmet com Churrasqueira',
    category: 'interiores',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: 'Espaço para receber amigos e familiares com churrasqueira a carvão e bancada em granito.'
  },
  {
    id: 'g6',
    title: 'Hall de Entrada com Pé Direito Duplo',
    category: 'fachada',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Recepção suntuosa decorada com obras de arte e mobiliário de designers consagrados.'
  }
];

export const NEARBY_LOCATIONS: NearbyLocation[] = [
  { place: 'Parque Ecológico Central', time: '3 min', type: 'walk', category: 'Lazer e Natureza' },
  { place: 'Estação de Metrô / VLT', time: '5 min', type: 'walk', category: 'Mobilidade' },
  { place: 'Shopping Boulevard', time: '4 min', type: 'car', category: 'Compras e Gastronomia' },
  { place: 'Colégio Internacional & Bilíngue', time: '6 min', type: 'car', category: 'Educação' },
  { place: 'Supermercado Gourmet 24h', time: '2 min', type: 'walk', category: 'Conveniência' },
  { place: 'Hospital & Pronto Atendimento de Referência', time: '7 min', type: 'car', category: 'Saúde' }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona o parcelamento da entrada durante a construção?',
    answer: 'A entrada pode ser facilitada e parcelada em até 36x direto com a construtora, sem juros abusivos, com correção monetária calculada pelo INCC até a entrega das chaves. Você também pode programar parcelas intermediárias e anuais de acordo com seu planejamento financeiro.'
  },
  {
    id: 'faq-2',
    question: 'Posso utilizar o saldo do meu FGTS para compra do apartamento?',
    answer: 'Sim! É possível utilizar o saldo do seu Fundo de Garantia por Tempo de Serviço (FGTS) para abater o valor da entrada, amortizar o saldo devedor ou compor o financiamento bancário na entrega da obra, de acordo com as regras vigentes do SFH.'
  },
  {
    id: 'faq-3',
    question: 'As vagas de garagem são demarcadas e livres?',
    answer: 'Sim, todas as unidades contam com vagas de garagem cobertas, livres e demarcadas em escritura, sem a necessidade de rodízio ou travamento de veículos. Há também preparação para carregadores de carros elétricos.'
  },
  {
    id: 'faq-4',
    question: 'Posso personalizar o layout da planta ou os acabamentos?',
    answer: 'Sim! Disponibilizamos o programa "Lumina Custom", que permite a você escolher opções de personalização de acabamentos (revestimentos, louças, metais) e layouts autorizados antes da fase de acabamento da obra.'
  },
  {
    id: 'faq-5',
    question: 'O que acontece após eu clicar no botão "Tenho Interesse"?',
    answer: 'Ao clicar no botão "Tenho Interesse", você será direcionado para o nosso formulário oficial rápido. Nossa equipe de consultores especializados entrará em contato via WhatsApp ou telefone em até 15 minutos para tirar suas dúvidas, enviar a tabela de preços oficial, plantas detalhadas e agendar uma visita exclusiva ao apartamento decorado.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Carolina & Marcelo Rossi',
    role: 'Compradores da Unidade 3 Dormitórios',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: 'A flexibilidade na entrada e a transparência da construtora foram decisivas. A planta de 104m² tem uma varanda gourmet incrível que mal podemos esperar para aproveitar com nossos amigos!'
  },
  {
    name: 'Dr. Roberto Silveira',
    role: 'Investidor Imobiliário',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: 'Adquiri dois Studios na planta para locação. A localização próxima ao metrô e ao polo corporativo garante uma taxa de retorno muito acima da média de mercado. Recomendo de olhos fechados.'
  },
  {
    name: 'Juliana Mendes',
    role: 'Proprietária da Penthouse',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    comment: 'A qualidade dos acabamentos e o conceito de clube privativo me conquistaram de primeira. O processo desde o primeiro contato até a assinatura foi impecável e rápido.'
  }
];
