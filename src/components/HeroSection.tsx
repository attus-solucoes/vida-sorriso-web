import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Users, Award, CalendarCheck } from "lucide-react";
import { DecorativeBlob } from "./SectionDivider";
import { useCountUp } from "@/hooks/useCountUp";
import { clinicInfo, stats, images } from "@/config/siteConfig";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden gradient-hero">
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
              Seu sorriso merece{" "}
              <span className="text-gradient">cuidado de excelência</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Com mais de {stats.yearsExperience} anos de experiência, a Clínica {clinicInfo.name} combina tecnologia de ponta com atendimento humanizado para transformar seu sorriso com conforto e segurança.
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
            {/* Prova social inline */}
            <div className="flex flex-wrap items-center gap-3 mt-6 text-sm">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="font-bold text-foreground ml-1">{stats.googleRating}/5</span>
                <span className="text-muted-foreground">({stats.googleReviews}+ avaliações no Google)</span>
              </div>
              <div className="w-px h-5 bg-border hidden sm:block" />
              <span className="text-muted-foreground hidden sm:block">Google Verificado</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
            style={{ y: imageY }}
          >
            <div className="rounded-3xl overflow-hidden shadow-elevated relative">
              <img
                src={images.hero}
                alt={`Interior moderno da Clínica ${clinicInfo.name} em ${clinicInfo.address.city} — consultório odontológico com equipamentos de última geração`}
                className="w-full h-[350px] md:h-[450px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Card flutuante - Avaliação Google */}
            <motion.div
              className="absolute -bottom-4 -left-4 md:-left-8 glass-card rounded-2xl p-4 shadow-elevated flex items-center gap-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-11 h-11 rounded-2xl gradient-accent flex items-center justify-center">
                <Star className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm text-foreground">{stats.googleRating}/5 Estrelas</p>
                <p className="text-xs text-muted-foreground">+{stats.googleReviews} avaliações</p>
              </div>
            </motion.div>
            {/* Card flutuante - Anos de experiência */}
            <motion.div
              className="absolute -top-4 -right-4 md:-right-8 rounded-2xl p-4 shadow-elevated flex items-center gap-3 bg-foreground text-background"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <div className="w-11 h-11 rounded-2xl bg-background/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-background" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm">+{stats.yearsExperience} anos</p>
                <p className="text-xs text-background/70">de excelência</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ icon: Icon, target, prefix = "", suffix = "", label }: { icon: any; target: number; prefix?: string; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(target, 2000, ref);
  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Icon className="w-8 h-8 text-accent mx-auto mb-2" />
      <p className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground">
        {prefix}{count.toLocaleString("pt-BR")}{suffix}
      </p>
      <p className="text-sm text-primary-foreground/70 mt-1">{label}</p>
    </motion.div>
  );
}

export function TrustBar() {
  return (
    <section className="gradient-primary py-10 relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern opacity-30" />
      <div className="container relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem icon={Award} target={stats.yearsExperience} prefix="+" label="Anos de Experiência" />
          <StatItem icon={Users} target={stats.patientsServed} prefix="+" label="Pacientes Atendidos" />
          <StatItem icon={Star} target={Math.round(stats.googleRating * 10)} prefix="" suffix="" label="Avaliação Google" />
          <StatItem icon={CalendarCheck} target={stats.procedures} prefix="+" label="Procedimentos" />
        </div>
      </div>
    </section>
  );
}
