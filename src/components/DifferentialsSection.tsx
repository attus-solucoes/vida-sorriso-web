import { motion } from "framer-motion";
import { Monitor, HeartHandshake, Home, GraduationCap, CreditCard } from "lucide-react";

const items = [
  { icon: Monitor, title: "Tecnologia de Ponta", desc: "Equipamentos digitais de última geração para diagnósticos precisos." },
  { icon: HeartHandshake, title: "Atendimento Humanizado", desc: "Cada paciente é único. Ouvimos, cuidamos e acolhemos." },
  { icon: Home, title: "Ambiente Acolhedor", desc: "Clínica moderna e confortável para sua tranquilidade." },
  { icon: GraduationCap, title: "Profissionais Especializados", desc: "Equipe com formação contínua e certificações reconhecidas." },
  { icon: CreditCard, title: "Facilidade de Pagamento", desc: "Parcelamento em até 12x e convênios aceitos." },
];

export function DifferentialsSection() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">Por que nos escolher</span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
            Diferenciais que fazem a <span className="text-gradient">diferença</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
