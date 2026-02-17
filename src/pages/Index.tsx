import { HeroSection, TrustBar } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TransformationsSection } from "@/components/TransformationsSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ConveniosSection } from "@/components/ConveniosSection";
import { FAQSection } from "@/components/FAQSection";
import { LocationSection } from "@/components/LocationSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { DecorativeBlob } from "@/components/SectionDivider";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Clínica Sorriso Perfeito | Odontologia de Excelência em São Paulo</title>
        <meta name="description" content="Clínica odontológica em São Paulo com +18 anos de experiência. Implantes, ortodontia, clareamento e mais. Agende sua consulta!" />
      </Helmet>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <TransformationsSection />
      <DifferentialsSection />
      <AboutSection />
      <TestimonialsSection />
      <ConveniosSection />
      <FAQSection />
      <LocationSection />
      {/* CTA Final */}
      <section className="py-20 md:py-28 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20" />
        <DecorativeBlob className="w-[400px] h-[400px] top-0 right-0 !opacity-[0.1]" />
        <div className="container text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
              Pronto para transformar seu sorriso?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Agende sua avaliação gratuita e descubra o tratamento ideal para você.
            </p>
            <Button asChild size="lg" className="gradient-accent border-0 text-accent-foreground font-heading font-bold text-base shadow-elevated hover:scale-105 transition-all duration-300 rounded-2xl h-12 px-8">
              <Link to="/contato">
                Agende sua Consulta <CalendarCheck className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
