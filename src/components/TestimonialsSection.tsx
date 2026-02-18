import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { DecorativeBlob } from "./SectionDivider";
import { testimonials } from "@/config/siteConfig";

function Avatar({ name, image }: { name: string; image?: string }) {
  const initials = name.split(" ").map(n => n[0]).join("");
  return (
    <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-card mx-auto mb-4 overflow-hidden">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
      ) : (
        <span className="font-heading font-bold text-primary-foreground text-lg">{initials}</span>
      )}
    </div>
  );
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-14 md:py-20 bg-muted relative overflow-hidden">
      <DecorativeBlob className="w-[500px] h-[500px] top-0 -left-60" />
      <div className="container relative">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10"
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
            className="glass-card rounded-3xl p-8 md:p-12 shadow-elevated text-center relative"
          >
            <Quote className="w-12 h-12 text-primary/15 mx-auto mb-4" />
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
    </section>
  );
}
