import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { WaveDivider } from "./SectionDivider";
import { clinicInfo, quickLinks, convenios, getActiveSocials, getPhoneLink, getEmailLink } from "@/config/siteConfig";

export function Footer() {
  const activeSocials = getActiveSocials();
  
  return (
    <footer className="relative">
      <WaveDivider className="text-foreground -mb-px" />
      <div className="bg-foreground text-background">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-2xl gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-extrabold text-lg">{clinicInfo.shortName}</span>
                </div>
                <span className="font-heading font-extrabold text-lg">{clinicInfo.name}</span>
              </div>
              <p className="text-background/60 text-sm leading-relaxed mb-6">
                Clínica odontológica em {clinicInfo.address.city} transformando sorrisos com excelência desde {clinicInfo.foundedYear}.
              </p>
              <div className="flex gap-3 mb-4">
                {activeSocials.map(({ name, url, icon: Icon }) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-2xl bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300" aria-label={name}>
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <p className="text-xs text-background/40">ISO 9001 · ANVISA · CRO-SP</p>
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

            {/* Convênios */}
            <div>
              <h4 className="font-heading font-semibold text-base mb-4">Convênios</h4>
              <ul className="space-y-2.5">
                {convenios.map((convenio) => (
                  <li key={convenio} className="text-sm text-background/60">
                    {convenio}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Hours */}
            <div>
              <h4 className="font-heading font-semibold text-base mb-4">Contato</h4>
              <ul className="space-y-2.5 text-sm text-background/60">
                <li><a href={getPhoneLink()} className="flex items-center gap-2 hover:text-secondary transition-colors duration-300"><Phone className="w-4 h-4 text-secondary" /> {clinicInfo.phone}</a></li>
                <li><a href={getEmailLink()} className="flex items-center gap-2 hover:text-secondary transition-colors duration-300"><Mail className="w-4 h-4 text-secondary" /> {clinicInfo.email}</a></li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-secondary mt-0.5" /> {clinicInfo.address.street}<br />{clinicInfo.address.city} - {clinicInfo.address.state}</li>
              </ul>
              <h4 className="font-heading font-semibold text-base mb-3 mt-6">Horários</h4>
              <ul className="space-y-2 text-sm text-background/60">
                <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-secondary" /> {clinicInfo.hours.weekdays}</li>
                <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-secondary" /> {clinicInfo.hours.saturday}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10">
          <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/40">
            <p>© {new Date().getFullYear()} Clínica {clinicInfo.name}. Todos os direitos reservados.</p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex gap-4">
                <a href="#" className="hover:text-secondary transition-colors duration-300">Política de Privacidade</a>
                <a href="#" className="hover:text-secondary transition-colors duration-300">Termos de Uso</a>
              </div>
              <span className="text-background/40">
                Desenvolvido com 💙 por{" "}
                <a href="https://solviahub.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                  Solvia Hub
                </a>{" "}
                🦊
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
