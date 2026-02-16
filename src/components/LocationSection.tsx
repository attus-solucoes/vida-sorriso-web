import { motion } from "framer-motion";
import { MapPin, Clock, Car, Accessibility } from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-20 md:py-28 bg-muted" id="localizacao">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Localização</span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
            Venha nos <span className="text-gradient">visitar</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-elevated bg-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976519367564!2d-46.65390268502165!3d-23.56310278468091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x63b9f0a763d3f4b9!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica Sorriso Perfeito"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: MapPin, title: "Endereço", text: "Av. Paulista, 1000, Bela Vista\nSão Paulo - SP, 01310-100" },
              { icon: Clock, title: "Horários", text: "Seg - Sex: 8h às 18h\nSábado: 8h às 12h" },
              { icon: Car, title: "Estacionamento", text: "Estacionamento conveniado no subsolo do edifício com tarifa especial para pacientes." },
              { icon: Accessibility, title: "Acessibilidade", text: "Clínica totalmente acessível com rampas, elevador e banheiros adaptados." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
