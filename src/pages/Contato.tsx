import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { clinicInfo, services, seo, getPhoneLink, getEmailLink } from "@/config/siteConfig";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().trim().max(255).optional().or(z.literal("")),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().trim().max(1000).optional(),
  privacy: z.literal(true, { errorMap: () => ({ message: "Aceite a política de privacidade" }) }),
});

const serviceOptions = [...services.map(s => s.title), "Outro"];

const ContatoPage = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "", email: "", service: "", message: "", privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const mensagem = [
      `🦷 Nova solicitação pelo site — ${clinicInfo.name}`,
      ``,
      `👤 Nome: ${form.name}`,
      form.email ? `📧 Email: ${form.email}` : '',
      `🦷 Serviço de interesse: ${form.service}`,
      `📝 Mensagem: ${form.message?.trim() || '(não informado)'}`,
      ``,
      `✅ Pode me orientar sobre o próximo passo?`,
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${clinicInfo.phoneClean}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    toast({ title: "Abrindo WhatsApp...", description: "Complete o envio na nova aba." });
  };

  const update = (field: string, value: string | boolean) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  };

  const contactItems = [
    { icon: Phone, title: "Telefone", text: clinicInfo.phone, href: getPhoneLink() },
    { icon: Mail, title: "Email", text: clinicInfo.email, href: getEmailLink() },
    { icon: MapPin, title: "Endereço", text: `${clinicInfo.address.street}\n${clinicInfo.address.neighborhood}, ${clinicInfo.address.city} - ${clinicInfo.address.state}` },
    { icon: Clock, title: "Horários", text: `${clinicInfo.hours.weekdays}\n${clinicInfo.hours.saturday}` },
  ];

  return (
    <>
      <Helmet>
        <title>{seo.contact.title}</title>
        <meta name="description" content={seo.contact.description} />
      </Helmet>

      {/* Hero - Dark mesh hero */}
      <section className="bg-dark-hero noise-overlay py-16 md:py-24 relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] -top-40 -right-40 organic-blob bg-primary/12 blur-[120px]" />
        <div className="container text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-5 py-2 rounded-full bg-primary/15 border border-primary/20 text-primary text-sm font-semibold mb-4">Contato</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[hsl(var(--dark-text))] mb-4">
              Fale <span className="text-gradient">Conosco</span>
            </h1>
            <p className="text-lg text-[hsl(var(--dark-text-muted))] max-w-2xl mx-auto">
              Estamos prontos para atender você. Agende sua consulta ou tire suas dúvidas.
            </p>
          </motion.div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,40 C250,80 450,10 700,50 C900,80 1100,20 1200,40 L1200,80 L0,80 Z" fill="hsl(210, 20%, 99%)" />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form - glass card with gradient border */}
            <motion.div
              className="lg:col-span-2 glass-card rounded-3xl p-8 border-gradient shadow-elevated"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 organic-blob gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <CheckCircle className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Mensagem Enviada!</h3>
                  <p className="text-muted-foreground">Retornaremos em até 2 horas durante o horário comercial.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-heading font-bold text-2xl text-foreground mb-2">Agende sua <span className="text-gradient">Consulta</span></h2>
                  <p className="text-muted-foreground text-sm mb-6">Preencha o formulário abaixo e entraremos em contato.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">Nome completo *</label>
                      <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Seu nome" className="rounded-xl focus:ring-primary focus:border-primary focus:shadow-[0_0_0_3px_hsl(199_89%_48%/0.1)]" />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                      <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="seu@email.com" className="rounded-xl focus:ring-primary focus:border-primary focus:shadow-[0_0_0_3px_hsl(199_89%_48%/0.1)]" />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="text-sm font-medium text-foreground mb-1.5 block">Serviço de interesse *</label>
                    <Select onValueChange={(v) => update("service", v)}>
                      <SelectTrigger id="service" className="rounded-xl">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent className="bg-card z-50 rounded-xl">
                        {serviceOptions.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Mensagem (opcional)</label>
                    <Textarea id="message" value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Conte-nos mais sobre sua necessidade..." rows={4} className="rounded-xl focus:ring-primary focus:border-primary focus:shadow-[0_0_0_3px_hsl(199_89%_48%/0.1)]" />
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="privacy"
                      checked={form.privacy}
                      onCheckedChange={(v) => update("privacy", v as boolean)}
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground leading-tight cursor-pointer">
                      Li e aceito a <a href="#" className="text-primary hover:underline">Política de Privacidade</a> *
                    </label>
                  </div>
                  {errors.privacy && <p className="text-destructive text-xs">{errors.privacy}</p>}

                  <div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto rounded-2xl font-heading font-semibold border-0 text-white bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] shadow-[0_4px_20px_hsl(142_70%_45%/0.35)]"
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Enviar Mensagem
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">Abrirá o WhatsApp em uma nova aba</p>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Info - Dark side */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {contactItems.map((item, i) => (
                <div key={i} className="bg-dark-section noise-overlay rounded-3xl p-5 flex items-start gap-4 relative z-0">
                  <div className="w-11 h-11 organic-blob gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow glow-halo relative z-10">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-heading font-bold text-[hsl(var(--dark-text))] text-sm mb-1">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-[hsl(var(--dark-text-muted))] hover:text-primary transition-colors duration-300 whitespace-pre-line">{item.text}</a>
                    ) : (
                      <p className="text-sm text-[hsl(var(--dark-text-muted))] whitespace-pre-line">{item.text}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="overflow-hidden shadow-elevated" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}>
                <iframe
                  src={clinicInfo.mapEmbedUrl}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Localização"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContatoPage;
