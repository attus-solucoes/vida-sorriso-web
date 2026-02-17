import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Clock, CheckCircle, Flame } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { DecorativeBlob } from "@/components/SectionDivider";
import { services, seo } from "@/config/siteConfig";

const ServicosPage = () => {
  return (
    <>
      <Helmet>
        <title>{seo.services.title}</title>
        <meta name="description" content={seo.services.description} />
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
              className="group card-premium p-6 md:p-8 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-center relative overflow-hidden hover:!border-l-4 hover:!border-l-primary transition-all duration-300"
            >
              {/* Popular badge */}
              {s.popular && (
                <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full gradient-accent text-accent-foreground text-xs font-bold shadow-card">
                  <Flame className="w-3 h-3" /> Mais Procurado
                </div>
              )}
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-card group-hover:rotate-[10deg] transition-transform duration-300">
                <s.icon className="w-8 h-8 text-primary-foreground" />
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
                  {s.price && (
                    <span className="font-heading font-bold text-primary">{s.price}</span>
                  )}
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
