import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppLink } from "@/config/siteConfig";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="glass-card rounded-2xl px-4 py-2 shadow-elevated text-sm font-medium text-foreground whitespace-nowrap"
          >
            Fale conosco 💬
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
        style={{
          background: "hsl(142, 70%, 45%)",
          color: "hsl(0, 0%, 100%)",
          boxShadow: "0 4px 20px hsl(142 70% 45% / 0.35)",
          animation: "pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </div>
  );
}
