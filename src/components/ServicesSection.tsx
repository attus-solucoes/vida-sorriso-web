import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Stethoscope, Smile, Sparkles, Palette, Heart, ShieldCheck, Baby, CircleDot,
} from "lucide-react";
import { DecorativeBlob } from "./SectionDivider";

const services = [
  { icon: CircleDot, title: "Implantes Dentários", desc: "Recupere dentes perdidos com implantes de última geração." },
  { icon: Smile, title: "Ortodontia / Invisalign", desc: "Alinhamento dental com aparelhos modernos e discretos." },
  { icon: Sparkles, title: "Clareamento Dental", desc: "Dentes mais brancos com procedimentos seguros e eficazes." },
  { icon: Palette, title: "Estética Dental", desc: "Lentes de contato, facetas e design do sorriso." },
  { icon: Heart, title: "Tratamento de Canal", desc: "Procedimentos indolores com tecnologia avançada." },
  { icon: ShieldCheck, title: "Limpeza e Prevenção", desc: "Mantenha sua saúde bucal sempre em dia." },
  { icon: Stethoscope, title: "Próteses Dentárias", desc: "Próteses fixas e removíveis com máximo conforto." },
  { icon: Baby, title: "Odontopediatria", desc: "Cuidado especial para os pequenos sorrisos." },
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden" id="servicos">
      <DecorativeBlob className="w-[600px] h-[600px] -top-60 -right-60" />
      <div className="container relative">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to="/servicos"
                className="group block card-premium p-6 h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:gradient-primary flex items-center justify-center mb-5 transition-all duration-300 group-hover:rotate-[10deg]">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
