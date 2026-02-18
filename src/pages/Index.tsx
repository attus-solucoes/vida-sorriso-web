import { HeroSection, TrustBar } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TransformationsSection } from "@/components/TransformationsSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ConveniosSection } from "@/components/ConveniosSection";
import { FAQSection } from "@/components/FAQSection";
import { LocationSection } from "@/components/LocationSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { seo, clinicInfo, stats, services, getPhoneLink } from "@/config/siteConfig";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{seo.home.title}</title>
        <meta name="description" content={seo.home.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": `Clínica ${clinicInfo.name}`,
            "description": seo.home.description,
            "url": "https://vida-sorriso-web.lovable.app",
            "telephone": `+${clinicInfo.phoneClean}`,
            "email": clinicInfo.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": clinicInfo.address.street,
              "addressLocality": clinicInfo.address.city,
              "addressRegion": clinicInfo.address.state,
              "postalCode": clinicInfo.address.zipCode,
              "addressCountry": "BR"
            },
            "geo": { "@type": "GeoCoordinates", "latitude": -23.5631, "longitude": -46.6539 },
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "12:00" }
            ],
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": stats.googleRating, "reviewCount": stats.googleReviews, "bestRating": 5 },
            "priceRange": "$$",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Tratamentos Odontológicos",
              "itemListElement": services.slice(0, 6).map(s => ({ "@type": "Offer", "itemOffered": { "@type": "Service", "name": s.title, "description": s.shortDesc } }))
            }
          })}
        </script>
      </Helmet>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <TransformationsSection />
      <TestimonialsSection />
      <DifferentialsSection />
      <FAQSection />
      <AboutSection />
      <ConveniosSection />
      <LocationSection />

      {/* CTA Final - Dark premium */}
      <section className="py-16 md:py-24 bg-dark-section noise-overlay relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] top-0 right-0 rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute w-[400px] h-[400px] bottom-0 left-0 rounded-full bg-secondary/6 blur-[100px]" />
        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-primary/15 border border-primary/20 text-primary text-sm font-semibold mb-4">
              Avaliação gratuita e sem compromisso
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-[hsl(var(--dark-text))] mb-4">
              Pronto para transformar seu sorriso?
            </h2>
            <p className="text-[hsl(var(--dark-text-muted))] text-lg mb-8 max-w-xl mx-auto">
              Agende sua avaliação gratuita e descubra o tratamento ideal para você.
            </p>
            <Button asChild size="lg" className="btn-glow btn-shimmer border-0 text-primary-foreground font-heading font-bold text-lg shadow-elevated hover:scale-105 transition-all duration-300 rounded-2xl h-14 px-10">
              <Link to="/contato">
                Agende sua Consulta <CalendarCheck className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <p className="text-[hsl(var(--dark-text-muted))] text-xs mt-4">
              ⏰ Vagas limitadas para este mês
            </p>
            <p className="text-[hsl(var(--dark-text-muted)/0.6)] text-sm mt-2">
              ou ligue agora:{" "}
              <a href={getPhoneLink()} className="text-primary font-semibold hover:underline">
                {clinicInfo.phone}
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
