import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { clinicInfo, quickLinks, convenios, getActiveSocials, getPhoneLink, getEmailLink } from "@/config/siteConfig";

export function Footer() {
  const activeSocials = getActiveSocials();
  
  return (
    <footer className="relative">
      {/* Wave divider on top */}
      <div className="absolute -top-[59px] left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0,40 C300,80 600,0 900,50 C1050,70 1150,30 1200,40 L1200,80 L0,80 Z" fill="hsl(215, 35%, 12%)" />
        </svg>
      </div>

      {/* Gradient separator line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="bg-dark-section noise-overlay">
        <div className="container py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-2xl gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-extrabold text-lg">{clinicInfo.shortName}</span>
                </div>
                <span className="font-heading font-extrabold text-lg text-[hsl(var(--dark-text))]">{clinicInfo.name}</span>
              </div>
              <p className="text-[hsl(var(--dark-text-muted))] text-sm leading-relaxed mb-6">
                Clínica odontológica em {clinicInfo.address.city} transformando sorrisos com excelência desde {clinicInfo.foundedYear}.
              </p>
              <div className="flex gap-3 mb-4">
                {activeSocials.map(({ name, url, icon: Icon }) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-2xl bg-[hsl(0_0%_100%/0.05)] border border-[hsl(0_0%_100%/0.08)] flex items-center justify-center text-[hsl(var(--dark-text-muted))] hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300" aria-label={name}>
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <p className="text-xs text-[hsl(var(--dark-text-muted)/0.5)]">ISO 9001 · ANVISA · CRO-SP</p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-heading font-semibold text-base text-[hsl(var(--dark-text))] mb-4">Tratamentos</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-sm text-[hsl(var(--dark-text-muted))] hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Convênios */}
            <div>
              <h4 className="font-heading font-semibold text-base text-[hsl(var(--dark-text))] mb-4">Convênios</h4>
              <ul className="space-y-2.5">
                {convenios.map((convenio) => (
                  <li key={convenio} className="text-sm text-[hsl(var(--dark-text-muted))]">
                    {convenio}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Hours */}
            <div>
              <h4 className="font-heading font-semibold text-base text-[hsl(var(--dark-text))] mb-4">Contato</h4>
              <ul className="space-y-2.5 text-sm text-[hsl(var(--dark-text-muted))]">
                <li><a href={getPhoneLink()} className="flex items-center gap-2 hover:text-primary transition-colors duration-300"><Phone className="w-4 h-4 text-primary" /> {clinicInfo.phone}</a></li>
                <li><a href={getEmailLink()} className="flex items-center gap-2 hover:text-primary transition-colors duration-300"><Mail className="w-4 h-4 text-primary" /> {clinicInfo.email}</a></li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5" /> {clinicInfo.address.street}<br />{clinicInfo.address.city} - {clinicInfo.address.state}</li>
              </ul>
              <h4 className="font-heading font-semibold text-base text-[hsl(var(--dark-text))] mb-3 mt-6">Horários</h4>
              <ul className="space-y-2 text-sm text-[hsl(var(--dark-text-muted))]">
                <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {clinicInfo.hours.weekdays}</li>
                <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {clinicInfo.hours.saturday}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[hsl(0_0%_100%/0.06)]">
          <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[hsl(var(--dark-text-muted)/0.5)] relative z-10">
            <p>© {new Date().getFullYear()} Clínica {clinicInfo.name}. Todos os direitos reservados.</p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors duration-300">Política de Privacidade</a>
                <a href="#" className="hover:text-primary transition-colors duration-300">Termos de Uso</a>
              </div>
              <span>
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
