import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Clock, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Stethoscope, Smile, Sparkles, Palette, Heart, ShieldCheck, Baby, CircleDot,
} from "lucide-react";
import { DecorativeBlob } from "@/components/SectionDivider";

const services = [
  {
    icon: CircleDot, title: "Implantes Dentários",
    desc: "Recupere dentes perdidos com implantes de titânio de última geração. Procedimento seguro com resultados naturais e duradouros.",
    benefits: ["Restaura a função mastigatória", "Resultado estético natural", "Durabilidade de longa vida"],
    duration: "1 a 3 sessões",
  },
  {
    icon: Smile, title: "Ortodontia / Invisalign",
    desc: "Corrija o alinhamento dos seus dentes com aparelhos tradicionais ou alinhadores transparentes Invisalign.",
    benefits: ["Sorriso harmonioso", "Melhora na mastigação", "Opções discretas disponíveis"],
    duration: "12 a 24 meses",
  },
  {
    icon: Sparkles, title: "Clareamento Dental",
    desc: "Dentes até 8 tons mais brancos com tecnologia LED e produtos de alta qualidade.",
    benefits: ["Resultado imediato", "Procedimento indolor", "Aumento da autoestima"],
    duration: "1 a 2 sessões",
  },
  {
    icon: Palette, title: "Estética Dental",
    desc: "Lentes de contato dental, facetas em porcelana e design do sorriso personalizado.",
    benefits: ["Sorriso dos sonhos", "Materiais premium", "Resultado natural"],
    duration: "2 a 4 sessões",
  },
  {
    icon: Heart, title: "Tratamento de Canal",
    desc: "Procedimentos endodônticos com tecnologia de ponta para preservar seu dente natural.",
    benefits: ["Elimina dor e infecção", "Preserva o dente", "Procedimento indolor"],
    duration: "1 a 2 sessões",
  },
  {
    icon: ShieldCheck, title: "Limpeza e Prevenção",
    desc: "Profilaxia dental completa, raspagem e orientação para manutenção da saúde bucal.",
    benefits: ["Previne cáries", "Remove tártaro", "Hálito fresco"],
    duration: "1 sessão",
  },
  {
    icon: Stethoscope, title: "Próteses Dentárias",
    desc: "Próteses fixas e removíveis de alta qualidade para restaurar seu sorriso completo.",
    benefits: ["Função mastigatória restaurada", "Estética natural", "Conforto no uso"],
    duration: "3 a 5 sessões",
  },
  {
    icon: Baby, title: "Odontopediatria",
    desc: "Atendimento especializado para crianças em ambiente lúdico e acolhedor.",
    benefits: ["Ambiente infantil", "Prevenção desde cedo", "Profissionais especializados"],
    duration: "Consulta regular",
  },
];

const ServicosPage = () => {
  return (
    <>
      <Helmet>
        <title>Serviços | Clínica Sorriso Perfeito</title>
        <meta name="description" content="Conheça todos os tratamentos odontológicos da Clínica Sorriso Perfeito: implantes, ortodontia, clareamento, estética dental e mais." />
      </Helmet>

      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24 relative overflow-hidden">
        <DecorativeBlob className="w-[500px] h-[500px] -top-40 -right-40" />
        <div className="container text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-5 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-semibold mb-4 shadow-card">Tratamentos</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-4">
              Nossos <span className="text-gradient">Serviços</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos tratamentos completos de odontologia com tecnologia avançada e profissionais altamente qualificados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container space-y-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-premium p-6 md:p-8 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-center"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-card">
                <s.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl text-foreground mb-2">{s.title}</h2>
                <p className="text-muted-foreground mb-3">{s.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {s.benefits.map((b, j) => (
                    <span key={j} className="flex items-center gap-1.5 text-sm text-secondary font-medium">
                      <CheckCircle className="w-4 h-4" /> {b}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" /> Duração: {s.duration}
                </div>
              </div>
              <Button asChild className="btn-glow border-0 text-primary-foreground font-heading font-semibold self-center rounded-2xl">
                <Link to="/contato">
                  Agendar <CalendarCheck className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicosPage;
