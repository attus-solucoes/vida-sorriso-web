import { motion } from "framer-motion";
import clinicImage from "@/assets/clinic-interior.jpg";

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-background" id="sobre">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={clinicImage} alt="Estrutura moderna da Clínica Sorriso Perfeito" className="w-full h-[400px] object-cover" loading="lazy" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Sobre Nós</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-6">
              Mais de 18 anos cuidando do seu <span className="text-gradient">sorriso</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fundada em 2005, a Clínica Sorriso Perfeito nasceu do sonho de oferecer odontologia de excelência com um atendimento verdadeiramente humano. Localizada no coração de São Paulo, contamos com uma infraestrutura moderna e uma equipe de especialistas dedicados.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nossa missão é proporcionar a melhor experiência em saúde bucal, aliando tecnologia de ponta ao cuidado individualizado que cada paciente merece.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Missão", text: "Excelência em cada sorriso" },
                { label: "Visão", text: "Referência em odontologia" },
              ].map((v, i) => (
                <div key={i} className="bg-muted rounded-xl p-4">
                  <p className="font-heading font-semibold text-primary text-sm mb-1">{v.label}</p>
                  <p className="text-sm text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
