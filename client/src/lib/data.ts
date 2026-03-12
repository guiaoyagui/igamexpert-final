/**
 * Dados estruturados para a Landing Page iGamexpert
 * Facilita manutenção e atualização de conteúdo
 */

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  type: "conference" | "summit" | "workshop" | "networking";
  image?: string;
  actions: {
    label: string;
    type: "primary" | "secondary";
  }[];
}

export interface Job {
  id: string;
  title: string;
  location: string;
  type: "full-time" | "part-time" | "contract";
  remote: boolean;
  department: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: "orange" | "green" | "yellow" | "blue" | "red";
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image?: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
}

// EVENTOS
export const events: Event[] = [
  {
    id: "sbc-rio-2026",
    name: "SBC - RIO",
    date: "5-7 Mar, 2026",
    location: "Rio de Janeiro - Brasil",
    type: "summit",
    actions: [
      { label: "MARQUE UMA REUNIÃO", type: "primary" },
      { label: "PATROCINE ESTE EVENTO", type: "secondary" },
    ],
  },
  {
    id: "sbc-rio-2026-2",
    name: "SBC - RIO",
    date: "5-7 Mar, 2026",
    location: "Rio de Janeiro - Brasil",
    type: "summit",
    actions: [
      { label: "MARQUE UMA REUNIÃO", type: "primary" },
      { label: "PATROCINE ESTE EVENTO", type: "secondary" },
    ],
  },
  {
    id: "sbc-rio-2026-3",
    name: "SBC - RIO",
    date: "5-7 Mar, 2026",
    location: "Rio de Janeiro - Brasil",
    type: "summit",
    actions: [
      { label: "MARQUE UMA REUNIÃO", type: "primary" },
      { label: "PATROCINE ESTE EVENTO", type: "secondary" },
    ],
  },
];

// VAGAS
export const jobs: Job[] = [
  {
    id: "job-1",
    title: "Country Manager",
    location: "São Paulo",
    type: "full-time",
    remote: false,
    department: "Sales",
  },
  {
    id: "job-2",
    title: "Senior Marketing Manager",
    location: "São Paulo",
    type: "full-time",
    remote: true,
    department: "Marketing",
  },
  {
    id: "job-3",
    title: "Business Development Executive",
    location: "Rio de Janeiro",
    type: "full-time",
    remote: false,
    department: "Business",
  },
  {
    id: "job-4",
    title: "Compliance Specialist",
    location: "Brasília",
    type: "full-time",
    remote: true,
    department: "Compliance",
  },
];

// SERVIÇOS
export const services: Service[] = [
  {
    id: "consultoria",
    name: "Consultoria",
    description:
      "Bem-vindo a iGamexpert, ajudamos empresas a entender e ganhar no mercado Brasileiro de apostas",
    icon: "briefcase",
    color: "orange",
  },
  {
    id: "contabilidade",
    name: "Contabilidade",
    description:
      "Bem-vindo a iGamexpert, ajudamos empresas a entender e ganhar no mercado Brasileiro de apostas",
    icon: "calculator",
    color: "green",
  },
  {
    id: "parcerias",
    name: "Parcerias",
    description:
      "Bem-vindo a iGamexpert, ajudamos empresas a entender e ganhar no mercado Brasileiro de apostas",
    icon: "handshake",
    color: "yellow",
  },
  {
    id: "recursos-humanos",
    name: "Recursos Humanos",
    description:
      "Bem-vindo a iGamexpert, ajudamos empresas a entender e ganhar no mercado Brasileiro de apostas",
    icon: "users",
    color: "blue",
  },
  {
    id: "marketing",
    name: "Marketing",
    description:
      "Bem-vindo a iGamexpert, ajudamos empresas a entender e ganhar no mercado Brasileiro de apostas",
    icon: "megaphone",
    color: "red",
  },
  {
    id: "negocios",
    name: "Negócios",
    description:
      "Bem-vindo a iGamexpert, ajudamos empresas a entender e ganhar no mercado Brasileiro de apostas",
    icon: "trending-up",
    color: "orange",
  },
];

// EQUIPE
export const teamMembers: TeamMember[] = [
  {
    id: "gustavo-1",
    name: "Gustavo Hiroshi",
    position: "Head of Sales",
  },
  {
    id: "gustavo-2",
    name: "Gustavo Hiroshi",
    position: "Head of Sales",
  },
  {
    id: "gustavo-3",
    name: "Gustavo Hiroshi",
    position: "Head of Sales",
  },
  {
    id: "gustavo-4",
    name: "Gustavo Hiroshi",
    position: "Head of Sales",
  },
];

// TIMELINE
export const timeline: TimelineEvent[] = [
  {
    id: "2007",
    year: 2007,
    title: "COMECEI COMO AFILIADO DE POKER E APOSTA ESPORTIVA",
    description:
      "Começou de forma informal e como um hobbie que me deu habilidade para conseguir os primeiros contratos com a indústria de igaming",
  },
  {
    id: "2015",
    year: 2015,
    title: "Expansão no Mercado",
    description: "Consolidação da presença no mercado de iGaming brasileiro",
  },
  {
    id: "2020",
    year: 2020,
    title: "Inovação Digital",
    description: "Implementação de novas soluções tecnológicas",
  },
  {
    id: "2023",
    year: 2023,
    title: "Crescimento Estratégico",
    description: "Expansão de serviços e parcerias internacionais",
  },
  {
    id: "2026",
    year: 2026,
    title: "Liderança de Mercado",
    description: "Consolidação como referência em consultoria de iGaming",
  },
];
