import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GripVertical } from "lucide-react";
import { transformations } from "@/config/siteConfig";

function BeforeAfterSlider({ item }: { item: typeof transformations[0] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden cursor-col-resize select-none touch-none group"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* After (full background) */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: item.afterImage ? undefined : item.afterColor }}
      >
        {item.afterImage ? (
          <img src={item.afterImage} alt="Depois" className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="text-center">
            <span className="text-4xl">😁</span>
            <p className="font-heading font-bold text-[hsl(var(--dark-text-muted))] mt-2">Depois</p>
          </div>
        )}
        <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-full bg-[hsl(0_0%_100%/0.15)] text-xs font-bold text-[hsl(var(--dark-text))]">Depois</span>
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: item.beforeImage ? undefined : item.beforeColor,
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        {item.beforeImage ? (
          <img src={item.beforeImage} alt="Antes" className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="text-center">
            <span className="text-4xl">😐</span>
            <p className="font-heading font-bold text-[hsl(var(--dark-text-muted))] mt-2">Antes</p>
          </div>
        )}
        <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-full bg-[hsl(0_0%_100%/0.15)] text-xs font-bold text-[hsl(var(--dark-text))]">Antes</span>
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 z-10"
        style={{ left: `${position}%`, background: 'linear-gradient(to bottom, hsl(199 89% 48%), hsl(38 92% 50%))' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 rounded-full bg-white shadow-[0_0_20px_hsl(199_89%_48%/0.4)] flex items-center justify-center">
          <GripVertical className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>
  );
}

export function TransformationsSection() {
  return (
    <section className="py-16 md:py-24 bg-dark-section noise-overlay relative overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute w-[400px] h-[400px] -bottom-40 -left-40 rounded-full bg-primary/8 blur-[100px]" />
      <div className="absolute w-[300px] h-[300px] top-20 -right-20 rounded-full bg-secondary/6 blur-[80px]" />

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-primary/15 border border-primary/20 text-primary text-sm font-semibold mb-4">
            Resultados
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-[hsl(var(--dark-text))] mb-4">
            Veja as <span className="text-gradient">Transformações</span>
          </h2>
          <p className="text-[hsl(var(--dark-text-muted))] text-lg">
            Resultados reais de pacientes que confiaram em nós
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-dark overflow-hidden group"
            >
              <BeforeAfterSlider item={item} />
              <div className="p-5">
                <h3 className="font-heading font-bold text-[hsl(var(--dark-text))] mb-1">
                  {item.treatment}
                </h3>
                <p className="text-sm text-[hsl(var(--dark-text-muted))]">
                  Tempo de tratamento: {item.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button asChild variant="outline" size="lg" className="font-heading font-semibold rounded-2xl border-[hsl(var(--dark-text-muted)/0.2)] text-[hsl(var(--dark-text))] hover:bg-[hsl(0_0%_100%/0.05)]">
            <Link to="/servicos">
              Ver Mais Resultados <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
