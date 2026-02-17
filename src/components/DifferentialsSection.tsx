import { motion } from "framer-motion";
import { WaveDivider, DecorativeDots } from "./SectionDivider";
import { differentials } from "@/config/siteConfig";

export function DifferentialsSection() {
  return (
    <>
      <WaveDivider className="text-muted -mb-px" />
      <section className="py-20 md:py-28 bg-muted relative overflow-hidden">
        <DecorativeDots className="top-12 right-12 hidden lg:block" />
        <DecorativeDots className="bottom-12 left-12 hidden lg:block" />
        <div className="container relative">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-5 py-2 rounded-full gradient-accent text-accent-foreground text-sm font-semibold mb-4 shadow-card">Por que nos escolher</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-4">
              Diferenciais que fazem a <span className="text-gradient">diferença</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {differentials.map((item, i) => (
              <motion.div
                key={i}
                className="text-center card-premium bg-card p-6 hover:!-translate-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-card">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider flip className="text-muted -mt-px" />
    </>
  );
}
