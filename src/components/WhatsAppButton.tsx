import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
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
  );
}
