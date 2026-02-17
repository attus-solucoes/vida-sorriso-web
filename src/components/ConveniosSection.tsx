import { motion } from "framer-motion";
import { DecorativeDots } from "./SectionDivider";

const convenios = [
  "Amil Dental",
  "Bradesco Dental",
  "SulAmérica",
  "MetLife",
  "OdontoPrev",
  "Porto Seguro",
];

export function ConveniosSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50 relative overflow-hidden">
      <DecorativeDots className="top-16 right-12 hidden lg:block" />
      <div className="container relative">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-5 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-semibold mb-4 shadow-card">
            Parceiros
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-4">
            Convênios e <span className="text-gradient">Parceiros</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Trabalhamos com os principais planos odontológicos
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {convenios.map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group card-premium p-6 flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <span className="font-heading font-bold text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300 text-center leading-tight">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium">
            💡 Consulte disponibilidade para seu plano
          </span>
        </motion.p>
      </div>
    </section>
  );
}
