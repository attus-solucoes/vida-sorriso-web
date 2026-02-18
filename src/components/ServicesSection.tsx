import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/config/siteConfig";
import { Button } from "./ui/button";
import { slugify } from "@/lib/utils";

export function ServicesSection() {
  const displayedServices = services.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden" id="servicos">
      {/* Organic gradient bleed */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] organic-blob bg-primary/[0.04] blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] organic-blob-2 bg-secondary/[0.03] blur-[120px]" />
      <div className="absolute inset-0 dots-pattern opacity-20" />

      <div className="container relative">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-5 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-semibold mb-4 shadow-card">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-4">
            Tratamentos que <span className="text-gradient">transformam sorrisos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de tratamentos odontológicos com a mais alta qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/servicos#${slugify(s.title)}`}
                className={`group block card-premium p-6 h-full relative transition-all duration-300 hover:shadow-elevated hover:scale-[1.02] hover:border-primary/30 ${
                  s.popular
                    ? "border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5"
                    : ""
                }`}
              >
                {s.popular && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-semibold shadow-glow">
                    ⭐ Mais Procurado
                  </span>
                )}
                <div className="w-14 h-14 organic-blob bg-primary/10 group-hover:gradient-primary flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-glow group-hover:scale-110 glow-halo">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.shortDesc}</p>
                <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform duration-300">
                  Saiba mais <ArrowRight className="ml-1 w-3.5 h-3.5" />
                </span>
                {s.price && (
                  <p className="text-sm text-muted-foreground font-medium mt-1">{s.price}</p>
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button asChild variant="outline" size="lg" className="rounded-2xl font-heading font-semibold">
            <Link to="/servicos">
              Ver todos os {services.length} tratamentos <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Wave transition to dark section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
          <path d="M0,50 C300,10 600,70 900,30 C1050,10 1150,50 1200,30 L1200,80 L0,80 Z" fill="hsl(215, 32%, 13%)" />
        </svg>
      </div>
    </section>
  );
}
