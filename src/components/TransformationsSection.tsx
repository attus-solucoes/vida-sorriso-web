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
      className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden cursor-col-resize select-none touch-none group bg-muted"
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
            <p className="font-heading font-bold text-muted-foreground mt-2">Depois</p>
          </div>
        )}
        <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-full bg-foreground/10 text-xs font-bold text-foreground">Depois</span>
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
            <p className="font-heading font-bold text-muted-foreground mt-2">Antes</p>
          </div>
        )}
        <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-full bg-foreground/10 text-xs font-bold text-foreground">Antes</span>
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 z-10"
        style={{ left: `${position}%`, background: 'linear-gradient(to bottom, hsl(168 76% 42%), hsl(38 92% 50%))' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 rounded-full bg-white shadow-[0_0_20px_hsl(168_76%_42%/0.4)] flex items-center justify-center">
          <GripVertical className="w-5 h-5 text-secondary" />
        </div>
      </div>
    </div>
  );
}

export function TransformationsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-5 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-semibold mb-4 shadow-card">
            Resultados
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-4">
            Veja as <span className="text-gradient">Transformações</span>
          </h2>
          <p className="text-muted-foreground text-lg">
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
              className="card-premium overflow-hidden group"
            >
              <BeforeAfterSlider item={item} />
              <div className="p-5">
                <h3 className="font-heading font-bold text-foreground mb-1">
                  <span className="text-gradient">{item.treatment}</span>
                </h3>
                <p className="text-sm text-muted-foreground">
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
          <Button asChild variant="outline" size="lg" className="font-heading font-semibold rounded-2xl">
            <Link to="/servicos">
              Ver Mais Resultados <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
