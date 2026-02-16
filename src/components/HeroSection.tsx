import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Award, CalendarCheck } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";
import { DecorativeBlob } from "./SectionDivider";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <DecorativeBlob className="w-[500px] h-[500px] -top-40 -right-40" />
      <DecorativeBlob className="w-[400px] h-[400px] bottom-0 -left-40" />
      <div className="container py-16 md:py-24 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-5 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-semibold mb-6 shadow-card">
              ✨ Excelência em Odontologia
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-extrabold leading-[1.1] text-foreground mb-6">
              Seu sorriso merece o{" "}
              <span className="text-gradient">melhor cuidado</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Na Clínica Sorriso Perfeito, combinamos tecnologia de ponta com um atendimento humanizado para transformar o seu sorriso com conforto e segurança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-glow border-0 text-primary-foreground font-heading font-semibold text-base rounded-2xl h-12 px-8">
                <Link to="/contato">
                  Agende sua Consulta <CalendarCheck className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-heading font-semibold text-base border-primary/20 hover:bg-primary/5 rounded-2xl h-12 px-8">
                <Link to="/servicos">
                  Nossos Tratamentos <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Interior moderno da Clínica Sorriso Perfeito"
                className="w-full h-[350px] md:h-[450px] object-cover"
                loading="eager"
              />
            </div>
            {/* Floating card */}
            <motion.div
              className="absolute -bottom-4 -left-4 md:-left-8 glass-card rounded-2xl p-4 shadow-elevated flex items-center gap-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-11 h-11 rounded-2xl gradient-accent flex items-center justify-center">
                <Star className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm text-foreground">4.9/5 Estrelas</p>
                <p className="text-xs text-muted-foreground">+500 avaliações</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { icon: Award, value: "+18", label: "Anos de Experiência" },
  { icon: Users, value: "+15.000", label: "Pacientes Atendidos" },
  { icon: Star, value: "4.9", label: "Avaliação Google" },
  { icon: CalendarCheck, value: "+30.000", label: "Procedimentos" },
];

export function TrustBar() {
  return (
    <section className="gradient-primary py-10 relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern opacity-30" />
      <div className="container relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <s.icon className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground">{s.value}</p>
              <p className="text-sm text-primary-foreground/70 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
