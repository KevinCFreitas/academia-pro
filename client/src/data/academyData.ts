export interface NavItem {
  label: string;
  id: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: "dumbbell" | "users" | "zap";
}

export interface Modality {
  name: string;
  description: string;
  focus: string;
  icon: "dumbbell" | "wind" | "flame" | "users";
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

export interface Trainer {
  name: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  name: string;
  transformation: string;
  text: string;
  image: string;
  rating: number;
}

export const WHATSAPP_NUMBER = "5511999999999";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const whatsappLink = (message: string): string =>
  `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;

export const navItems: NavItem[] = [
  { label: "Sobre", id: "sobre" },
  { label: "Modalidades", id: "modalidades" },
  { label: "Planos", id: "planos" },
  { label: "Equipe", id: "equipe" },
  { label: "Contato", id: "contato" },
];

export const heroMetrics: Metric[] = [
  { value: "500+", label: "Alunos Ativos" },
  { value: "98%", label: "Satisfação" },
  { value: "12+", label: "Anos de Experiência" },
];

export const aboutFeatures: Feature[] = [
  {
    icon: "dumbbell",
    title: "Equipamentos de Alta Performance",
    description:
      "Máquinas e pesos de última geração, com manutenção rigorosa para treinos seguros e eficientes.",
  },
  {
    icon: "users",
    title: "Treinadores Certificados",
    description:
      "Profissionais especializados que acompanham sua evolução com orientação técnica e personalizada.",
  },
  {
    icon: "zap",
    title: "Metodologia e Acompanhamento",
    description:
      "Planejamento estruturado, avaliações periódicas e ajustes constantes para você evoluir com consistência.",
  },
];

export const modalities: Modality[] = [
  {
    name: "Musculação",
    description:
      "Treinos estruturados para força, hipertrofia e composição corporal com acompanhamento técnico.",
    focus: "Força e Hipertrofia",
    icon: "dumbbell",
  },
  {
    name: "Treinamento Funcional",
    description:
      "Exercícios integrados que melhoram mobilidade, estabilidade e desempenho no dia a dia.",
    focus: "Condicionamento",
    icon: "wind",
  },
  {
    name: "CrossFit",
    description:
      "Sessões intensas e variadas para desenvolver resistência, potência e capacidade cardiorrespiratória.",
    focus: "Alta Intensidade",
    icon: "flame",
  },
  {
    name: "Aulas em Grupo",
    description:
      "Turmas dinâmicas de yoga, pilates e ritmos para manter a motivação e a consistência.",
    focus: "Mobilidade e Bem-estar",
    icon: "users",
  },
];

export const plans: Plan[] = [
  {
    id: "mensal",
    name: "Mensal",
    price: "R$ 99",
    period: "/mês",
    description: "Ideal para começar sua rotina",
    features: [
      "Acesso completo à academia",
      "Equipamentos de alta performance",
      "Aulas em grupo inclusas",
      "Suporte da equipe no salão",
    ],
    highlighted: false,
  },
  {
    id: "trimestral",
    name: "Trimestral",
    price: "R$ 249",
    period: "/3 meses",
    description: "O melhor equilíbrio entre custo e resultado",
    features: [
      "Tudo do plano Mensal",
      "1 sessão de consultoria com personal",
      "Avaliação física inicial",
      "Ajustes periódicos de treino",
      "Suporte prioritário",
    ],
    highlighted: true,
    badge: "Mais Escolhido",
  },
  {
    id: "anual",
    name: "Anual",
    price: "R$ 799",
    period: "/ano",
    description: "Máxima economia para quem foca no longo prazo",
    features: [
      "Tudo do plano Trimestral",
      "4 sessões com personal trainer",
      "Reavaliações físicas trimestrais",
      "Acompanhamento de evolução",
      "Condições especiais em eventos",
    ],
    highlighted: false,
  },
];

export const trainers: Trainer[] = [
  {
    name: "Carlos Santos",
    specialty: "Hipertrofia e Força",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=80",
    bio: "Especialista em ganho de massa muscular e periodização de treinos, com mais de 12 anos de experiência.",
  },
  {
    name: "Ana Silva",
    specialty: "Emagrecimento e Condicionamento",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=80",
    bio: "Focada em transformação física sustentável, combinando treino eficiente, hábitos e acompanhamento próximo.",
  },
  {
    name: "Marina Costa",
    specialty: "Mobilidade e Core",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
    bio: "Instrutora de mobilidade, pilates e fortalecimento funcional, com certificação internacional e abordagem preventiva.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Jéssica Oliveira",
    transformation: "Perdeu 12 kg em 4 meses",
    text: "Comecei sem muita confiança, mas o acompanhamento da equipe fez toda a diferença. Hoje tenho mais disposição, saúde e autoestima.",
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=900&q=80",
    rating: 5,
  },
  {
    name: "Rafael Gomes",
    transformation: "Ganhou 8 kg de massa magra",
    text: "Estrutura excelente e profissionais que realmente orientam. O plano de treino foi ajustado à minha rotina e os resultados vieram.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    rating: 5,
  },
  {
    name: "Marina Lopes",
    transformation: "Recuperou mobilidade e qualidade de vida",
    text: "Depois de uma lesão, encontrei um acompanhamento cuidadoso e progressivo. Voltei a treinar com segurança e confiança.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    rating: 5,
  },
];

export const contactInfo = {
  address: "Rua das Academias, 123 — São Paulo, SP",
  phone: "(11) 99999-9999",
  phoneHref: "tel:+5511999999999",
  email: "contato@academiapro.com.br",
  emailHref: "mailto:contato@academiapro.com.br",
  hours: [
    "Segunda a Sexta: 06:00 - 23:00",
    "Sábado: 08:00 - 20:00",
    "Domingo: 08:00 - 18:00",
  ],
};

export const heroImage =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80";
export const aboutImage =
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80";
