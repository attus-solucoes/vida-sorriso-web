import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Clock, CheckCircle, Flame } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { services, seo } from "@/config/siteConfig";
import { slugify } from "@/lib/utils";

const ServicosPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
      }
    }
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>{seo.services.title}</title>
        <meta name="description" content={seo.services.description} />
      </Helmet>

      {/* Hero - Dark mesh */}
      <section className="bg-dark-section noise-overlay py-12 md:py-16 relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-40 -right-40 rounded-full bg-primary/10 blur-[100px]" />
        <div className="container text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-5 py-2 rounded-full bg-primary/15 border border-primary/20 text-primary text-sm font-semibold mb-4">Tratamentos</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[hsl(var(--dark-text))] mb-4">
              Nossos <span className="text-gradient">Serviços</span>
            </h1>
            <p className="text-lg text-[hsl(var(--dark-text-muted))] max-w-2xl mx-auto">
              Oferecemos tratamentos completos de odontologia com tecnologia avançada e profissionais altamente qualificados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-14 bg-background">
        <div className="container space-y-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              id={slugify(s.title)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group card-premium p-6 md:p-8 grid grid-cols-1 md:grid-cols-[280px_1fr_auto] gap-6 items-center relative overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Number decoration */}
              <span className="absolute top-4 left-6 text-7xl font-heading font-extrabold text-primary/[0.04] select-none pointer-events-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              {s.popular && (
                <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full gradient-accent text-accent-foreground text-xs font-bold shadow-card">
                  <Flame className="w-3 h-3" /> Mais Procurado
                </div>
              )}

              <div className="w-full h-48 md:h-full rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                  <s.icon className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-foreground mb-2">{s.title}</h2>
                <p className="text-muted-foreground mb-3">{s.fullDesc || s.shortDesc}</p>
                <div className="flex flex-wrap gap-3">
                  {s.benefits?.map((b, j) => (
                    <span key={j} className="flex items-center gap-1.5 text-sm text-secondary font-medium">
                      <CheckCircle className="w-4 h-4" /> {b}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                  {s.duration && (
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Duração: {s.duration}
                    </span>
                  )}
                </div>
                {s.price && (
                  <div className="mt-3">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-bold text-sm">
                      {s.price}
                    </span>
                  </div>
                )}
              </div>
              <Button asChild className="btn-glow btn-shimmer border-0 text-primary-foreground font-heading font-semibold self-center rounded-2xl">
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
