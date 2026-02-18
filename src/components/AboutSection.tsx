import { motion } from "framer-motion";
import { DecorativeBlob, DecorativeDots } from "./SectionDivider";
import { images, stats, clinicInfo } from "@/config/siteConfig";

export function AboutSection() {
  return (
    <section className="py-14 md:py-20 bg-background relative overflow-hidden" id="sobre">
      <DecorativeBlob className="w-[500px] h-[500px] -bottom-60 -left-60" />
      <DecorativeDots className="top-20 right-16 hidden lg:block" />
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl overflow-hidden shadow-elevated">
              <img src={images.clinicInterior} alt={`Estrutura moderna da Clínica ${clinicInfo.name}`} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-5 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-semibold mb-4 shadow-card">Sobre Nós</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-6">
              Mais de {stats.yearsExperience} anos cuidando do seu <span className="text-gradient">sorriso</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fundada em {clinicInfo.foundedYear}, a Clínica {clinicInfo.name} nasceu do sonho de oferecer odontologia de excelência com um atendimento verdadeiramente humano. Localizada no coração de {clinicInfo.address.city}, contamos com uma infraestrutura moderna e uma equipe de especialistas dedicados.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nossa missão é proporcionar a melhor experiência em saúde bucal, aliando tecnologia de ponta ao cuidado individualizado que cada paciente merece.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Missão", text: "Excelência em cada sorriso" },
                { label: "Visão", text: "Referência em odontologia" },
              ].map((v, i) => (
                <div key={i} className="glass-card rounded-2xl p-4">
                  <p className="font-heading font-bold text-gradient text-sm mb-1">{v.label}</p>
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
