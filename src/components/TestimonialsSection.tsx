import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/config/siteConfig";

function Avatar({ name, image }: { name: string; image?: string }) {
  const initials = name.split(" ").map(n => n[0]).join("");
  return (
    <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4 overflow-hidden border-gradient shadow-glow" style={{ borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%' }}>
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
      ) : (
        <div className="w-full h-full gradient-primary flex items-center justify-center">
          <span className="font-heading font-bold text-primary-foreground text-xl">{initials}</span>
        </div>
      )}
    </div>
  );
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-16 md:py-24 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern opacity-20" />
      {/* Organic background gradient */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] organic-blob bg-primary/[0.04] blur-[150px]" />

      <div className="container relative">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-5 py-2 rounded-full gradient-accent text-accent-foreground text-sm font-semibold mb-4 shadow-card">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-4">
            O que nossos <span className="text-gradient">pacientes dizem</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="glass-card rounded-3xl p-8 md:p-12 shadow-elevated text-center relative overflow-hidden border-l-[3px] border-l-primary"
          >
            {/* Giant decorative quotes with gradient */}
            <span className="absolute top-2 left-4 text-8xl font-heading font-extrabold text-gradient opacity-10 select-none leading-none">"</span>
            <span className="absolute bottom-0 right-6 text-8xl font-heading font-extrabold text-gradient opacity-10 select-none leading-none rotate-180">"</span>

            <div className="relative z-10">
              <Avatar name={testimonials[current].name} image={testimonials[current].image} />
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-heading font-bold text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-secondary font-medium">{testimonials[current].treatment}</p>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-11 h-11 rounded-2xl glass-card shadow-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="Anterior">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-8" : "bg-border"}`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-11 h-11 rounded-2xl glass-card shadow-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="Próximo">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Wave to dark section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
          <path d="M0,60 C300,20 500,70 800,30 C1000,10 1100,50 1200,30 L1200,80 L0,80 Z" fill="hsl(215, 40%, 9%)" />
        </svg>
      </div>
    </section>
  );
}
