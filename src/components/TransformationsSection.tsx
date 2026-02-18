import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GripVertical } from "lucide-react";
import { DecorativeBlob } from "./SectionDivider";
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
        style={{ background: item.afterColor }}
      >
        <div className="text-center">
          <span className="text-4xl">😁</span>
          <p className="font-heading font-bold text-foreground/60 mt-2">Depois</p>
        </div>
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: item.beforeColor,
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <div className="text-center">
          <span className="text-4xl">😐</span>
          <p className="font-heading font-bold text-foreground/60 mt-2">Antes</p>
        </div>
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 rounded-full bg-white shadow-elevated flex items-center justify-center">
          <GripVertical className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>
  );
}

export function TransformationsSection() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <DecorativeBlob className="w-[500px] h-[500px] -bottom-40 -left-40" />
      <div className="container relative">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
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
              className="card-premium overflow-hidden"
            >
              <BeforeAfterSlider item={item} />
              <div className="p-5">
                <h3 className="font-heading font-bold text-foreground mb-1">
                  {item.treatment}
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
          <Button asChild variant="outline" size="lg" className="font-heading font-semibold rounded-2xl border-primary/20 hover:bg-primary/5">
            <Link to="/servicos">
              Ver Mais Resultados <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
