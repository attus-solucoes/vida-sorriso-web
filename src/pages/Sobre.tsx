import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Award, GraduationCap, Shield, Heart } from "lucide-react";
import clinicImage from "@/assets/clinic-interior.jpg";
import heroImage from "@/assets/hero-dental.jpg";
import { DecorativeBlob, DecorativeDots } from "@/components/SectionDivider";

const team = [
  { name: "Dr. Ricardo Mendes", role: "Implantodontista", crm: "CRO-SP 12345" },
  { name: "Dra. Camila Santos", role: "Ortodontista", crm: "CRO-SP 23456" },
  { name: "Dr. Felipe Oliveira", role: "Endodontista", crm: "CRO-SP 34567" },
  { name: "Dra. Juliana Costa", role: "Odontopediatra", crm: "CRO-SP 45678" },
];

const SobrePage = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós | Clínica Sorriso Perfeito</title>
        <meta name="description" content="Conheça a história, equipe e infraestrutura da Clínica Sorriso Perfeito. +18 anos de excelência em odontologia em São Paulo." />
      </Helmet>

      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24 relative overflow-hidden">
        <DecorativeBlob className="w-[500px] h-[500px] -top-40 -left-40" />
        <div className="container text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-5 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-semibold mb-4 shadow-card">Nossa História</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-4">
              Sobre a <span className="text-gradient">Sorriso Perfeito</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mais de 18 anos transformando sorrisos com excelência, tecnologia e carinho.
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
                <img src={heroImage} alt="Clínica Sorriso Perfeito" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-6">Nossa <span className="text-gradient">História</span></h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundada em 2005 pelo Dr. Ricardo Mendes, a Clínica Sorriso Perfeito nasceu com a missão de democratizar o acesso à odontologia de alta qualidade. O que começou como um pequeno consultório na Av. Paulista cresceu e se tornou referência em tratamentos odontológicos em São Paulo.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hoje, contamos com uma equipe multidisciplinar de especialistas e uma infraestrutura completa, equipada com o que há de mais moderno em tecnologia odontológica. Nossa filosofia permanece a mesma: tratar cada paciente como único, oferecendo o melhor cuidado possível.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, text: "ISO 9001 Certificada" },
                  { icon: Shield, text: "ANVISA Regulamentada" },
                  { icon: GraduationCap, text: "Equipe Especializada" },
                  { icon: Heart, text: "Atendimento Humanizado" },
                ].map((item, i) => (
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
                  <span className="inline-block px-3 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-semibold mb-2">{member.role}</span>
                  <p className="text-xs text-muted-foreground">{member.crm}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container relative">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-4">
              Nossa <span className="text-gradient">Infraestrutura</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[clinicImage, heroImage].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-elevated group"
              >
                <img src={img} alt="Infraestrutura da clínica" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SobrePage;
