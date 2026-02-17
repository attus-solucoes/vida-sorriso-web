import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";

export function EmergencyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("emergency-bar-closed") !== "1") {
      setVisible(true);
    }
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem("emergency-bar-closed", "1");
  };

  if (!visible) return null;

  return (
    <div className="bg-destructive text-destructive-foreground text-center text-sm py-2.5 px-4 relative z-[60]">
      <div className="container flex items-center justify-center gap-2 flex-wrap">
        <Phone className="w-4 h-4 animate-pulse" />
        <span className="font-medium">
          🚨 Emergências Odontológicas 24h:{" "}
          <a href="tel:+5511999999999" className="underline font-bold hover:opacity-80 transition-opacity">
            (11) 99999-9999
          </a>
        </span>
        <button
          onClick={close}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/20 transition-colors"
          aria-label="Fechar barra de emergência"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
