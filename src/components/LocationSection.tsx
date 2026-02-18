import { motion } from "framer-motion";
import { MapPin, Clock, Car, Accessibility } from "lucide-react";
import { clinicInfo } from "@/config/siteConfig";

export function LocationSection() {
  const locationItems = [
    { icon: MapPin, title: "Endereço", text: clinicInfo.address.full },
    { icon: Clock, title: "Horários", text: `${clinicInfo.hours.weekdays}\n${clinicInfo.hours.saturday}` },
    { icon: Car, title: "Estacionamento", text: clinicInfo.parking },
    { icon: Accessibility, title: "Acessibilidade", text: clinicInfo.accessibility },
  ];

  return (
    <section className="py-16 md:py-20 bg-muted relative overflow-hidden" id="localizacao">
      <div className="container relative">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-5 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-semibold mb-4 shadow-card">Localização</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-4">
            Venha nos <span className="text-gradient">visitar</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="overflow-hidden shadow-elevated"
            style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src={clinicInfo.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localização da Clínica ${clinicInfo.name}`}
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center gap-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {locationItems.map((item, i) => (
              <div key={i} className="card-premium flex items-start gap-4 p-5">
                <div className="w-11 h-11 organic-blob gradient-primary flex items-center justify-center flex-shrink-0 shadow-card glow-halo">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-sm mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave to dark CTA section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
          <path d="M0,50 C200,10 500,70 800,30 C1000,10 1150,60 1200,30 L1200,80 L0,80 Z" fill="hsl(215, 35%, 11%)" />
        </svg>
      </div>
    </section>
  );
}
