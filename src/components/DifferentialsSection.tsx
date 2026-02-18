import { motion } from "framer-motion";
import { differentials } from "@/config/siteConfig";

export function DifferentialsSection() {
  return (
    <section className="py-16 md:py-24 bg-dark-deep noise-overlay relative overflow-hidden">
      {/* Organic glow orbs */}
      <div className="absolute w-[500px] h-[500px] top-0 right-0 organic-blob bg-primary/10 blur-[130px] animate-[float-slow_22s_ease-in-out_infinite]" />
      <div className="absolute w-[350px] h-[350px] bottom-0 left-0 organic-blob-2 bg-[hsl(260_60%_50%/0.08)] blur-[100px]" />

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-accent/15 border border-accent/20 text-accent text-sm font-semibold mb-4">Por que nos escolher</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-[hsl(var(--dark-text))] mb-4">
            Diferenciais que fazem a <span className="text-gradient">diferença</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentials.map((item, i) => (
            <motion.div
              key={i}
              className="text-center card-dark p-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-14 h-14 organic-blob gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow glow-halo transition-all duration-300 group-hover:animate-[pulse-glow_2s_ease-in-out_infinite]">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-[hsl(var(--dark-text))] mb-2 text-sm">{item.title}</h3>
              <p className="text-xs text-[hsl(var(--dark-text-muted))] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave to light section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
          <path d="M0,30 C200,70 450,10 700,50 C950,80 1100,20 1200,40 L1200,80 L0,80 Z" fill="hsl(210, 20%, 99%)" />
        </svg>
      </div>
    </section>
  );
}
