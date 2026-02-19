import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { clinicInfo } from "@/config/siteConfig";

const STORAGE_KEY = "emergency-bar-closed-at";
const EXPIRY_MS = 24 * 60 * 60 * 1000; // 24h

export function EmergencyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const closedAt = localStorage.getItem(STORAGE_KEY);
    if (!closedAt || Date.now() - Number(closedAt) > EXPIRY_MS) {
      setVisible(true);
    }
  }, []);

  const close = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  };

  if (!visible) return null;

  return (
    <div className="sticky top-0 z-[60] bg-destructive text-destructive-foreground text-center text-xs md:text-sm py-2 md:py-2.5 px-4">
      <div className="container flex items-center justify-center gap-2 flex-wrap">
        <Phone className="w-4 h-4 animate-pulse" />
        <span className="font-medium">
          🚨 <span className="hidden md:inline">Emergências Odontológicas 24h:</span><span className="inline md:hidden">Emergência 24h:</span>{" "}
          <a href={`tel:+${clinicInfo.phoneClean}`} className="underline font-bold hover:opacity-80 transition-opacity">
            {clinicInfo.phone}
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
