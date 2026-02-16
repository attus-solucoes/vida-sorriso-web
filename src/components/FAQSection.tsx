import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Quais convênios são aceitos?", a: "Trabalhamos com os principais convênios odontológicos do mercado, incluindo Amil Dental, Bradesco Dental, SulAmérica e MetLife. Consulte a disponibilidade para o seu plano." },
  { q: "Como funciona o agendamento?", a: "Você pode agendar sua consulta pelo WhatsApp, telefone ou pelo formulário em nosso site. Retornamos em até 2 horas durante o horário comercial." },
  { q: "O clareamento dental dói?", a: "Com a tecnologia que utilizamos, o desconforto é mínimo. Realizamos uma avaliação prévia para garantir que o procedimento seja o mais confortável possível para você." },
  { q: "Quanto tempo dura um implante dentário?", a: "Com os devidos cuidados e manutenção, um implante dentário pode durar a vida toda. Utilizamos materiais de alta qualidade e seguimos os mais rigorosos padrões internacionais." },
  { q: "Vocês atendem emergências?", a: "Sim! Temos horários reservados para atendimentos de urgência durante nosso horário de funcionamento. Entre em contato pelo WhatsApp para prioridade no atendimento." },
  { q: "Qual a forma de pagamento?", a: "Aceitamos cartões de crédito e débito, PIX, boleto e parcelamos em até 12x sem juros. Também trabalhamos com financiamento para tratamentos mais extensos." },
];

export function FAQSection() {
  return (
    <section className="py-20 md:py-28 bg-background" id="faq">
      <div className="container max-w-3xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <AccordionItem value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6 shadow-card">
                <AccordionTrigger className="font-heading font-semibold text-foreground text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
