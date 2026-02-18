import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { clinicInfo, getPhoneLink } from "@/config/siteConfig";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Serviços", path: "/servicos" },
  { label: "Sobre", path: "/sobre" },
  { label: "Contato", path: "/contato" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/30">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl btn-glow flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-extrabold text-lg">S</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-heading font-extrabold text-lg text-foreground">Sorriso</span>
            <span className="font-heading font-extrabold text-lg text-gradient"> Perfeito</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors hover:text-primary py-1 ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full after:origin-left after:transition-transform after:duration-300 ${
                location.pathname === link.path ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href={getPhoneLink()} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            {clinicInfo.phone}
          </a>
          <Button asChild className="btn-glow border-0 text-primary-foreground font-heading font-semibold rounded-2xl px-6">
            <Link to="/contato">Agende sua Consulta</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass border-b border-border/30"
          >
            <nav className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 text-base font-medium transition-colors ${
                    location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="btn-glow border-0 text-primary-foreground font-heading font-semibold rounded-2xl mt-2">
                <Link to="/contato" onClick={() => setMobileOpen(false)}>Agende sua Consulta</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
