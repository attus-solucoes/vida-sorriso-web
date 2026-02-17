import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DecorativeDots } from "./SectionDivider";
import { faqs } from "@/config/siteConfig";

export function FAQSection() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden" id="faq">
      <DecorativeDots className="top-20 left-8 hidden lg:block" />
      <div className="container max-w-3xl relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-5 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-semibold mb-4 shadow-card">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <AccordionItem value={`faq-${i}`} className="card-premium px-6 !border-border/50">
                <AccordionTrigger className="font-heading font-bold text-foreground text-left hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
