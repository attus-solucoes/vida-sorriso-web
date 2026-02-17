import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import clinicImage from "@/assets/clinic-interior.jpg";
import heroImage from "@/assets/hero-dental.jpg";
import { DecorativeBlob, DecorativeDots } from "@/components/SectionDivider";
import { clinicInfo, team, certifications, seo, stats } from "@/config/siteConfig";

// Galeria usa as imagens locais por enquanto
const galleryItems = [
  { src: clinicImage, label: "Recepção", span: "md:col-span-2" },
  { src: heroImage, label: "Consultório" },
  { src: clinicImage, label: "Equipamentos" },
  { src: heroImage, label: "Sala de Espera", span: "md:col-span-2" },
  { src: clinicImage, label: "Consultório 2" },
];

const SobrePage = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>{seo.about.title}</title>
        <meta name="description" content={seo.about.description} />
      </Helmet>

      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24 relative overflow-hidden">
        <DecorativeBlob className="w-[500px] h-[500px] -top-40 -left-40" />
        <div className="container text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-5 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-semibold mb-4 shadow-card">Nossa História</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-4">
              Sobre a <span className="text-gradient">{clinicInfo.name}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mais de {stats.yearsExperience} anos transformando sorrisos com excelência, tecnologia e carinho.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background relative overflow-hidden">
        <DecorativeDots className="top-20 right-16 hidden lg:block" />
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-3xl overflow-hidden shadow-elevated">
                <img src={heroImage} alt={`Clínica ${clinicInfo.name}`} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-6">Nossa <span className="text-gradient">História</span></h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundada em {clinicInfo.foundedYear} pelo {team[0]?.name || "nossos fundadores"}, a Clínica {clinicInfo.name} nasceu com a missão de democratizar o acesso à odontologia de alta qualidade. O que começou como um pequeno consultório na {clinicInfo.address.street} cresceu e se tornou referência em tratamentos odontológicos em {clinicInfo.address.city}.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hoje, contamos com uma equipe multidisciplinar de especialistas e uma infraestrutura completa, equipada com o que há de mais moderno em tecnologia odontológica. Nossa filosofia permanece a mesma: tratar cada paciente como único, oferecendo o melhor cuidado possível.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((item, i) => (
                  <div key={i} className="glass-card rounded-2xl flex items-center gap-3 p-3.5">
                    <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <DecorativeBlob className="w-[500px] h-[500px] -bottom-60 -right-60" />
        <div className="container relative">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-4">
              Nossa <span className="text-gradient">Equipe</span>
            </h2>
            <p className="text-muted-foreground text-lg">Profissionais dedicados ao seu sorriso.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group card-premium overflow-hidden"
              >
                <div className="h-56 gradient-primary flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl font-heading font-extrabold text-primary-foreground/20 group-hover:text-primary-foreground/30 transition-all duration-300 group-hover:scale-110">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-bold text-foreground mb-1">{member.name}</h3>
                  <span className="inline-block px-3 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-semibold mb-2">{member.specialty}</span>
                  <p className="text-xs text-muted-foreground">{member.crm}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Infrastructure */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container relative">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-4">
              Nossa <span className="text-gradient">Estrutura</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-2xl overflow-hidden shadow-elevated group relative cursor-pointer ${item.span || ""}`}
                onClick={() => setLightboxIndex(i)}
              >
                <img src={item.src} alt={item.label} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                  <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full glass text-xs font-heading font-bold text-foreground">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="Fechar">
              <X className="w-6 h-6" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((p) => (p! > 0 ? p! - 1 : galleryItems.length - 1)); }}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].label}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((p) => (p! < galleryItems.length - 1 ? p! + 1 : 0)); }}
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <p className="absolute bottom-6 text-white font-heading font-bold text-lg">
              {galleryItems[lightboxIndex].label}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SobrePage;
