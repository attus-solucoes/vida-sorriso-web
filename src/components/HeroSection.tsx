import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Users, Award, CalendarCheck } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { clinicInfo, stats, images } from "@/config/siteConfig";

export function HeroSection() {
  const [videoReady, setVideoReady] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[hsl(215_35%_10%)]">
      {/* Video Background - Desktop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={images.hero}
        onCanPlayThrough={() => setVideoReady(true)}
        className={`absolute inset-0 w-full h-full object-cover z-0 hidden md:block transition-opacity duration-1000 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src={images.heroVideo} type="video/mp4" />
      </video>

      {/* Fallback imagem - Mobile */}
      <img
        src={images.hero}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
      />

      {/* Overlay escuro para legibilidade do texto */}
      <div className="absolute inset-0 bg-[hsl(215_35%_10%/0.78)] z-[1]" />

      {/* Subtle static gradient overlays - no blur animations for GPU performance */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute w-[600px] h-[600px] -top-48 -left-48 rounded-full bg-primary/10 opacity-60" />
        <div className="absolute w-[400px] h-[400px] -bottom-32 -right-32 rounded-full bg-secondary/8 opacity-50" />
      </div>

      <div className="container py-14 md:py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-primary/15 border border-primary/20 text-primary text-sm font-semibold mb-6">
              ✨ Excelência em Odontologia
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold leading-[1.05] text-[hsl(var(--dark-text))] mb-6">
              Seu sorriso merece{" "}
              <span className="relative inline-block">
                <span className="text-gradient">cuidado de excelência</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60" />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--dark-text-muted))] leading-relaxed mb-8 max-w-lg font-light">
              Com mais de {stats.yearsExperience} anos de experiência, a Clínica {clinicInfo.name} combina tecnologia de ponta com atendimento humanizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-glow btn-shimmer border-0 text-primary-foreground font-heading font-semibold text-base rounded-2xl h-14 px-10">
                <Link to="/contato">
                  Agende sua Consulta <CalendarCheck className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-heading font-semibold text-base border-primary/40 text-primary hover:bg-primary/10 rounded-2xl h-14 px-8">
                <Link to="/servicos">
                  Nossos Tratamentos <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            {/* Selo de confiança */}
            <div className="flex items-center gap-2 mt-8 text-sm text-[hsl(var(--dark-text-muted))]">
              <Award className="w-4 h-4 text-primary" />
              <span>Tecnologia de ponta e atendimento humanizado</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
            style={{ y: imageY }}
          >
            {/* Organic decorative shape behind image */}
            <div className="absolute -inset-4 organic-blob bg-gradient-to-br from-primary/20 to-secondary/10 blur-sm" />
            <div className="relative organic-image overflow-hidden border-gradient shadow-elevated">
              <img
                src={images.hero}
                alt={`Interior moderno da Clínica ${clinicInfo.name} — consultório odontológico com equipamentos de última geração`}
                className="w-full h-[350px] md:h-[480px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215_35%_12%/0.4)] to-transparent" />
            </div>

            {/* Card flutuante - Avaliação Google */}
            <motion.div
              className="absolute bottom-6 left-6 glass-dark rounded-lg px-3 py-1.5 shadow-elevated flex items-center gap-1.5 border-gradient max-w-fit z-10"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
              <p className="font-heading font-bold text-[11px] text-[hsl(var(--dark-text))] whitespace-nowrap">4.9/5</p>
            </motion.div>

            {/* Card flutuante - Pacientes */}
            <motion.div
              className="absolute bottom-6 right-6 glass-dark rounded-lg px-3 py-1.5 shadow-elevated flex items-center gap-1.5 border-gradient max-w-fit z-10"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <Users className="w-3.5 h-3.5 text-primary shrink-0" />
              <p className="font-heading font-bold text-[11px] text-[hsl(var(--dark-text))] whitespace-nowrap">+15 mil sorrisos</p>
            </motion.div>

            {/* Badge selo with wavy border */}
            <motion.div
              className="absolute top-4 left-4 w-16 h-16 flex items-center justify-center shadow-elevated z-10"
              style={{ borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%' }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full gradient-accent flex items-center justify-center" style={{ borderRadius: 'inherit' }}>
                <div className="text-center">
                  <p className="text-[10px] font-heading font-extrabold text-accent-foreground leading-tight">Avaliação</p>
                  <p className="text-[10px] font-heading font-bold text-accent-foreground leading-tight">Gratuita</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave transition to light section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
          <path d="M0,40 C300,80 600,0 900,50 C1050,70 1150,30 1200,40 L1200,80 L0,80 Z" fill="hsl(210, 20%, 99%)" />
        </svg>
      </div>
    </section>
  );
}

function StatItem({ icon: Icon, target, prefix = "", suffix = "", label, decimal }: { icon: any; target: number; prefix?: string; suffix?: string; label: string; decimal?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(target, 2000, ref);
  const displayValue = decimal ? (count / 10).toFixed(1) : count.toLocaleString("pt-BR");
  return (
    <motion.div
      ref={ref}
      className="text-center relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Icon className="w-7 h-7 text-primary mx-auto mb-2" />
      <p className="text-3xl md:text-5xl font-heading font-extrabold text-foreground">
        {prefix}{displayValue}{suffix}
      </p>
      <div className="w-10 h-0.5 mx-auto mt-2 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60" />
      <p className="text-sm text-muted-foreground mt-2">{label}</p>
    </motion.div>
  );
}

export function TrustBar() {
  return (
    <section className="bg-background py-14 relative overflow-hidden border-b border-border/50">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem icon={Award} target={stats.yearsExperience} prefix="+" label="Anos de Experiência" />
          <StatItem icon={Users} target={stats.patientsServed} prefix="+" label="Pacientes Atendidos" />
          <StatItem icon={Star} target={49} prefix="" suffix="/5" label="Avaliação Google" decimal />
          <StatItem icon={CalendarCheck} target={stats.procedures} prefix="+" label="Procedimentos" />
        </div>
        {/* Vertical dividers on desktop */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-4 bottom-4 w-px bg-border" />
          <div className="absolute left-1/2 top-4 bottom-4 w-px bg-border" />
          <div className="absolute left-3/4 top-4 bottom-4 w-px bg-border" />
        </div>
      </div>
    </section>
  );
}
