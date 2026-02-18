// =====================================================
// 🦷 SITE CONFIG - CONFIGURAÇÃO CENTRALIZADA
// =====================================================
// Este arquivo contém TODOS os dados do site.
// Para personalizar para um novo cliente, edite apenas este arquivo.
// =====================================================

import {
  Stethoscope, Smile, Sparkles, Palette, Heart, ShieldCheck, Baby, CircleDot,
  Facebook, Instagram, Youtube, Linkedin, Twitter,
  Award, GraduationCap, Shield, Clock, Monitor, Users, Home, CreditCard,
  type LucideIcon
} from "lucide-react";

// =====================================================
// 🏢 DADOS DA CLÍNICA
// =====================================================
export const clinicInfo = {
  // Informações básicas
  name: "Sorriso Perfeito",
  shortName: "S", // Letra para o logo
  slogan: "Transformando sorrisos e mudando vidas",
  get description() { return `Clínica odontológica em São Paulo com +${new Date().getFullYear() - this.foundedYear} anos de experiência. Implantes, ortodontia, clareamento e mais.`; },
  foundedYear: 2005,
  
  // Contato
  phone: "(11) 99999-9999",
  phoneClean: "5511999999999", // Sem formatação para links
  email: "contato@sorrisoperfeito.com.br",
  whatsappMessage: "Olá! Gostaria de agendar uma consulta.",
  
  // Endereço
  address: {
    street: "Av. Paulista, 1000",
    neighborhood: "Bela Vista",
    city: "São Paulo",
    state: "SP",
    zipCode: "01310-100",
    full: "Av. Paulista, 1000, Bela Vista\nSão Paulo - SP, 01310-100",
  },
  
  // Google Maps embed URL
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976519367564!2d-46.65390268502165!3d-23.56310278468091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x63b9f0a763d3f4b9!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
  
  // Horários
  hours: {
    weekdays: "Seg - Sex: 8h às 18h",
    saturday: "Sábado: 8h às 12h",
    sunday: "Domingo: Fechado",
  },
  
  // Facilidades
  parking: "Estacionamento conveniado no subsolo do edifício com tarifa especial para pacientes.",
  accessibility: "Clínica totalmente acessível com rampas, elevador e banheiros adaptados.",
  
  // Redes sociais (deixe vazio "" se não tiver)
  social: {
    facebook: "https://facebook.com/sorrisoperfeito",
    instagram: "https://instagram.com/sorrisoperfeito",
    youtube: "https://youtube.com/sorrisoperfeito",
    linkedin: "",
    twitter: "",
  },
};

// =====================================================
// 📊 ESTATÍSTICAS / NÚMEROS
// =====================================================
export const stats = {
  yearsExperience: new Date().getFullYear() - clinicInfo.foundedYear,
  patientsServed: 15000,
  googleRating: 4.9,
  procedures: 30000,
  googleReviews: 500,
};

// =====================================================
// 👨‍⚕️ EQUIPE
// =====================================================
export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  crm: string;
  image?: string; // Caminho da imagem (opcional)
}

export const team: TeamMember[] = [
  {
    name: "Dr. Ricardo Mendes",
    role: "Diretor Clínico",
    specialty: "Implantodontista",
    crm: "CRO-SP 12345",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
  {
    name: "Dra. Camila Santos",
    role: "Ortodontista",
    specialty: "Ortodontista",
    crm: "CRO-SP 23456",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
  {
    name: "Dr. Felipe Oliveira",
    role: "Endodontista",
    specialty: "Endodontista",
    crm: "CRO-SP 34567",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
  },
  {
    name: "Dra. Juliana Costa",
    role: "Odontopediatra",
    specialty: "Odontopediatra",
    crm: "CRO-SP 45678",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
  },
];

// =====================================================
// 🦷 SERVIÇOS
// =====================================================
export interface Service {
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  fullDesc?: string;
  duration?: string;
  benefits?: string[];
  popular?: boolean; // Destaque "Mais Procurado"
  price?: string; // Preço ou faixa de preço
}

export const services: Service[] = [
  {
    icon: CircleDot,
    title: "Implantes Dentários",
    shortDesc: "Recupere dentes perdidos com implantes de última geração.",
    fullDesc: "Recupere dentes perdidos com implantes de titânio de última geração. Procedimento seguro com resultados naturais e duradouros.",
    duration: "1 a 3 sessões",
    benefits: ["Restaura a função mastigatória", "Resultado estético natural", "Durabilidade de longa vida"],
    popular: true,
    price: "A partir de R$ 2.500",
  },
  {
    icon: Smile,
    title: "Ortodontia / Invisalign",
    shortDesc: "Alinhamento dental com aparelhos modernos e discretos.",
    fullDesc: "Corrija o alinhamento dos seus dentes com aparelhos tradicionais ou alinhadores transparentes Invisalign.",
    duration: "12 a 24 meses",
    benefits: ["Sorriso harmonioso", "Melhora na mastigação", "Opções discretas disponíveis"],
    price: "A partir de R$ 3.000",
  },
  {
    icon: Sparkles,
    title: "Clareamento Dental",
    shortDesc: "Dentes mais brancos com procedimentos seguros e eficazes.",
    fullDesc: "Dentes até 8 tons mais brancos com tecnologia LED e produtos de alta qualidade.",
    duration: "1 a 2 sessões",
    benefits: ["Resultado imediato", "Procedimento indolor", "Aumento da autoestima"],
    popular: true,
    price: "A partir de R$ 800",
  },
  {
    icon: Palette,
    title: "Estética Dental",
    shortDesc: "Lentes de contato, facetas e design do sorriso.",
    fullDesc: "Lentes de contato dental, facetas em porcelana e design do sorriso personalizado.",
    duration: "2 a 4 sessões",
    benefits: ["Sorriso dos sonhos", "Materiais premium", "Resultado natural"],
    price: "A partir de R$ 1.200",
  },
  {
    icon: Heart,
    title: "Tratamento de Canal",
    shortDesc: "Procedimentos indolores com tecnologia avançada.",
    fullDesc: "Procedimentos endodônticos com tecnologia de ponta para preservar seu dente natural.",
    duration: "1 a 2 sessões",
    benefits: ["Elimina dor e infecção", "Preserva o dente", "Procedimento indolor"],
    price: "A partir de R$ 600",
  },
  {
    icon: ShieldCheck,
    title: "Limpeza e Prevenção",
    shortDesc: "Mantenha sua saúde bucal sempre em dia.",
    fullDesc: "Profilaxia dental completa, raspagem e orientação para manutenção da saúde bucal.",
    duration: "1 sessão",
    benefits: ["Previne cáries", "Remove tártaro", "Hálito fresco"],
    price: "A partir de R$ 250",
  },
  {
    icon: Stethoscope,
    title: "Próteses Dentárias",
    shortDesc: "Próteses fixas e removíveis com máximo conforto.",
    fullDesc: "Próteses fixas e removíveis de alta qualidade para restaurar seu sorriso completo.",
    duration: "3 a 5 sessões",
    benefits: ["Função mastigatória restaurada", "Estética natural", "Conforto no uso"],
    price: "A partir de R$ 1.500",
  },
  {
    icon: Baby,
    title: "Odontopediatria",
    shortDesc: "Cuidado especial para os pequenos sorrisos.",
    fullDesc: "Atendimento especializado para crianças em ambiente lúdico e acolhedor.",
    duration: "Consulta regular",
    benefits: ["Ambiente infantil", "Prevenção desde cedo", "Profissionais especializados"],
    price: "A partir de R$ 200",
  },
];

// =====================================================
// ⭐ DIFERENCIAIS
// =====================================================
export interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const differentials: Differential[] = [
  {
    icon: Monitor,
    title: "Tecnologia de Ponta",
    description: "Equipamentos digitais de última geração para diagnósticos precisos.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cada paciente é único. Ouvimos, cuidamos e acolhemos.",
  },
  {
    icon: Home,
    title: "Ambiente Acolhedor",
    description: "Clínica moderna e confortável para sua tranquilidade.",
  },
  {
    icon: GraduationCap,
    title: "Profissionais Especializados",
    description: "Equipe com formação contínua e certificações reconhecidas.",
  },
  {
    icon: CreditCard,
    title: "Facilidade de Pagamento",
    description: "Parcelamento em até 12x e convênios aceitos.",
  },
];

// =====================================================
// 💬 DEPOIMENTOS
// =====================================================
export interface Testimonial {
  name: string;
  treatment: string;
  text: string;
  rating: number; // 1 a 5
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Maria S.",
    treatment: "Clareamento Dental",
    text: "Tratamento excelente! Equipe muito atenciosa e resultado incrível no meu clareamento. Saí de lá com o sorriso que sempre sonhei!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "João P.",
    treatment: "Tratamento de Canal",
    text: "Finalmente encontrei uma clínica que me fez perder o medo de dentista. Profissionais incríveis, ambiente acolhedor. Recomendo de olhos fechados!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Ana R.",
    treatment: "Implantes Dentários",
    text: "Os implantes ficaram perfeitos e naturais. Voltei a sorrir com confiança! O atendimento do início ao fim foi impecável.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Carlos M.",
    treatment: "Ortodontia",
    text: "Meu tratamento com Invisalign superou todas as expectativas. Equipe sempre disponível para tirar dúvidas. Resultado fantástico!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

// =====================================================
// ❓ FAQ - PERGUNTAS FREQUENTES
// =====================================================
export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Quais convênios são aceitos?",
    answer: "Trabalhamos com os principais convênios odontológicos do mercado, incluindo Amil Dental, Bradesco Dental, SulAmérica e MetLife. Consulte a disponibilidade para o seu plano.",
  },
  {
    question: "Como funciona o agendamento?",
    answer: "Você pode agendar sua consulta pelo WhatsApp, telefone ou pelo formulário em nosso site. Retornamos em até 2 horas durante o horário comercial.",
  },
  {
    question: "O clareamento dental dói?",
    answer: "Com a tecnologia que utilizamos, o desconforto é mínimo. Realizamos uma avaliação prévia para garantir que o procedimento seja o mais confortável possível para você.",
  },
  {
    question: "Quanto tempo dura um implante dentário?",
    answer: "Com os devidos cuidados e manutenção, um implante dentário pode durar a vida toda. Utilizamos materiais de alta qualidade e seguimos os mais rigorosos padrões internacionais.",
  },
  {
    question: "Vocês atendem emergências?",
    answer: "Sim! Temos horários reservados para atendimentos de urgência durante nosso horário de funcionamento. Entre em contato pelo WhatsApp para prioridade no atendimento.",
  },
  {
    question: "Qual a forma de pagamento?",
    answer: "Aceitamos cartões de crédito e débito, PIX, boleto e parcelamos em até 12x sem juros. Também trabalhamos com financiamento para tratamentos mais extensos.",
  },
];

// =====================================================
// 🏥 CONVÊNIOS
// =====================================================
export const convenios: string[] = [
  "Amil Dental",
  "Bradesco Dental",
  "SulAmérica",
  "MetLife",
  "OdontoPrev",
  "Porto Seguro",
];

// =====================================================
// 🔄 TRANSFORMAÇÕES (Antes/Depois)
// =====================================================
export interface Transformation {
  treatment: string;
  duration: string;
  beforeImage?: string;
  afterImage?: string;
  // Cores de placeholder (usado quando não tem imagem)
  beforeColor: string;
  afterColor: string;
}

export const transformations: Transformation[] = [
  {
    treatment: "Lentes de Contato",
    duration: "2 semanas",
    beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1581585742429-0e10e97ef15f?w=600&q=80",
    beforeColor: "hsl(38 30% 75%)",
    afterColor: "hsl(199 89% 92%)",
  },
  {
    treatment: "Clareamento Dental",
    duration: "1 sessão",
    beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    beforeColor: "hsl(38 40% 70%)",
    afterColor: "hsl(168 60% 90%)",
  },
  {
    treatment: "Implantes Dentários",
    duration: "3 meses",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80",
    beforeColor: "hsl(0 10% 78%)",
    afterColor: "hsl(199 70% 90%)",
  },
];

// =====================================================
// 🏆 CERTIFICAÇÕES
// =====================================================
export interface Certification {
  icon: LucideIcon;
  text: string;
}

export const certifications: Certification[] = [
  { icon: Award, text: "ISO 9001 Certificada" },
  { icon: Shield, text: "ANVISA Regulamentada" },
  { icon: GraduationCap, text: "Equipe Especializada" },
  { icon: Heart, text: "Atendimento Humanizado" },
];

// =====================================================
// 🖼️ GALERIA DE INFRAESTRUTURA
// =====================================================
export interface GalleryItem {
  src: string;
  label: string;
  span?: string; // Classes CSS para grid (ex: "md:col-span-2")
}

export const galleryItems: GalleryItem[] = [
  { src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1000&q=80", label: "Recepção", span: "md:col-span-2" },
  { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1000&q=80", label: "Consultório" },
  { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1000&q=80", label: "Equipamentos" },
  { src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1000&q=80", label: "Sala de Espera", span: "md:col-span-2" },
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&q=80", label: "Consultório 2" },
];

// =====================================================
// 🎨 IMAGENS DO SITE
// =====================================================
export const images = {
  hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
  clinicInterior: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1000&q=80",
  aboutTeam: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1000&q=80",
  logo: "",
};

// =====================================================
// 📱 REDES SOCIAIS (ícones disponíveis)
// =====================================================
export const socialIcons: Record<string, LucideIcon> = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
};

// =====================================================
// 🔗 LINKS RÁPIDOS DO FOOTER
// =====================================================
export const quickLinks = [
  { label: "Implantes Dentários", path: "/servicos#implantes-dentarios" },
  { label: "Ortodontia", path: "/servicos#ortodontia--invisalign" },
  { label: "Clareamento", path: "/servicos#clareamento-dental" },
  { label: "Estética Dental", path: "/servicos#estetica-dental" },
];

// =====================================================
// 📄 SEO - META TAGS
// =====================================================
export const seo = {
  home: {
    title: `${clinicInfo.name} | Odontologia de Excelência em ${clinicInfo.address.city}`,
    description: `Clínica odontológica em ${clinicInfo.address.city} com +${stats.yearsExperience} anos de experiência. Implantes, ortodontia, clareamento e mais. Agende sua consulta!`,
  },
  services: {
    title: `Nossos Serviços | ${clinicInfo.name}`,
    description: `Conheça todos os tratamentos odontológicos oferecidos pela ${clinicInfo.name}. Implantes, ortodontia, clareamento, estética dental e muito mais.`,
  },
  about: {
    title: `Sobre Nós | ${clinicInfo.name}`,
    description: `Conheça a história, equipe e infraestrutura da ${clinicInfo.name}. +${stats.yearsExperience} anos de excelência em odontologia em ${clinicInfo.address.city}.`,
  },
  contact: {
    title: `Contato | ${clinicInfo.name}`,
    description: `Entre em contato com a ${clinicInfo.name}. Agende sua consulta pelo WhatsApp, telefone ou formulário. Atendimento em ${clinicInfo.address.city}.`,
  },
};

// =====================================================
// 🛠️ HELPERS / FUNÇÕES ÚTEIS
// =====================================================

/**
 * Retorna o link do WhatsApp formatado
 */
export const getWhatsAppLink = (customMessage?: string) => {
  const message = encodeURIComponent(customMessage || clinicInfo.whatsappMessage);
  return `https://wa.me/${clinicInfo.phoneClean}?text=${message}`;
};

/**
 * Retorna o link de telefone
 */
export const getPhoneLink = () => `tel:+${clinicInfo.phoneClean}`;

/**
 * Retorna o link de email
 */
export const getEmailLink = () => `mailto:${clinicInfo.email}`;

/**
 * Retorna as redes sociais que estão preenchidas
 */
export const getActiveSocials = () => {
  return Object.entries(clinicInfo.social)
    .filter(([_, url]) => url && url.length > 0)
    .map(([key, url]) => ({
      name: key,
      url,
      icon: socialIcons[key],
    }));
};
