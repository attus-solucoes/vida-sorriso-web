import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { WaveDivider } from "./SectionDivider";

const quickLinks = [
  { label: "Implantes Dentários", path: "/servicos" },
  { label: "Ortodontia", path: "/servicos" },
  { label: "Clareamento", path: "/servicos" },
  { label: "Estética Dental", path: "/servicos" },
];

export function Footer() {
  return (
    <footer className="relative">
      <WaveDivider className="text-foreground -mb-px" />
      <div className="bg-foreground text-background">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-2xl gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-extrabold text-lg">S</span>
                </div>
                <span className="font-heading font-extrabold text-lg">Sorriso Perfeito</span>
              </div>
              <p className="text-background/60 text-sm leading-relaxed mb-6">
                Transformando sorrisos e mudando vidas com excelência em odontologia desde 2005.
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-2xl bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300" aria-label="Social media">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-heading font-semibold text-base mb-4">Tratamentos</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-sm text-background/60 hover:text-secondary transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-heading font-semibold text-base mb-4">Horários</h4>
              <ul className="space-y-2.5 text-sm text-background/60">
                <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-secondary" /> Seg - Sex: 8h às 18h</li>
                <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-secondary" /> Sábado: 8h às 12h</li>
                <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-secondary" /> Domingo: Fechado</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-base mb-4">Contato</h4>
              <ul className="space-y-2.5 text-sm text-background/60">
                <li><a href="tel:+5511999999999" className="flex items-center gap-2 hover:text-secondary transition-colors duration-300"><Phone className="w-4 h-4 text-secondary" /> (11) 99999-9999</a></li>
                <li><a href="mailto:contato@sorrisoperfeito.com.br" className="flex items-center gap-2 hover:text-secondary transition-colors duration-300"><Mail className="w-4 h-4 text-secondary" /> contato@sorrisoperfeito.com.br</a></li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-secondary mt-0.5" /> Av. Paulista, 1000<br />São Paulo - SP</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10">
          <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/40">
            <p>© {new Date().getFullYear()} Clínica Sorriso Perfeito. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors duration-300">Política de Privacidade</a>
              <a href="#" className="hover:text-secondary transition-colors duration-300">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
