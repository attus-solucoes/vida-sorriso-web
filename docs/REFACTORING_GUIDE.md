# 🔧 GUIA DE REFATORAÇÃO - Usando siteConfig.ts

Este guia mostra como atualizar cada componente para usar o arquivo de configuração centralizado.

---

## 📁 Estrutura Final

```
src/
├── config/
│   └── siteConfig.ts    ← NOVO: Todas as configurações
├── components/
│   ├── Header.tsx       ← Atualizar
│   ├── Footer.tsx       ← Atualizar
│   ├── HeroSection.tsx  ← Atualizar
│   └── ...
└── pages/
    └── ...
```

---

## 🔄 REFATORAÇÕES NECESSÁRIAS

### 1. Header.tsx

```tsx
// ANTES (hardcoded)
<span className="font-heading">Sorriso Perfeito</span>
<a href="tel:...">(11) 99999-9999</a>

// DEPOIS (usando config)
import { clinicInfo } from "@/config/siteConfig";

<span className="font-heading">{clinicInfo.name}</span>
<a href={`tel:+${clinicInfo.phoneClean}`}>{clinicInfo.phone}</a>
```

---

### 2. Footer.tsx

```tsx
// DEPOIS
import { clinicInfo, quickLinks, getActiveSocials, getPhoneLink, getEmailLink } from "@/config/siteConfig";

// Nome e descrição
<span className="font-heading">{clinicInfo.name}</span>
<p>{clinicInfo.slogan}</p>

// Redes sociais dinâmicas
{getActiveSocials().map(({ name, url, icon: Icon }) => (
  <a key={name} href={url}><Icon /></a>
))}

// Contato
<a href={getPhoneLink()}>{clinicInfo.phone}</a>
<a href={getEmailLink()}>{clinicInfo.email}</a>
<span>{clinicInfo.address.street}<br/>{clinicInfo.address.city} - {clinicInfo.address.state}</span>

// Horários
<li>{clinicInfo.hours.weekdays}</li>
<li>{clinicInfo.hours.saturday}</li>
<li>{clinicInfo.hours.sunday}</li>
```

---

### 3. HeroSection.tsx

```tsx
import { clinicInfo, stats } from "@/config/siteConfig";

// Estatísticas
<StatItem target={stats.yearsExperience} label="Anos de Experiência" />
<StatItem target={stats.patientsServed} label="Pacientes Atendidos" />
<StatItem target={stats.googleRating} label="Avaliação Google" />
<StatItem target={stats.procedures} label="Procedimentos" />

// Texto
<p>Na Clínica {clinicInfo.name}, combinamos tecnologia...</p>

// Badge de avaliação
<p>{stats.googleRating}/5 Estrelas</p>
<p>+{stats.googleReviews} avaliações</p>
```

---

### 4. ServicesSection.tsx

```tsx
import { services } from "@/config/siteConfig";

// Usa diretamente
{services.map((s, i) => (
  <div key={i}>
    <s.icon />
    <h3>{s.title}</h3>
    <p>{s.shortDesc}</p>
    {s.popular && <span>⭐ Mais Procurado</span>}
  </div>
))}
```

---

### 5. TestimonialsSection.tsx

```tsx
import { testimonials } from "@/config/siteConfig";

// Usa diretamente (mesma estrutura)
```

---

### 6. FAQSection.tsx

```tsx
import { faqs } from "@/config/siteConfig";

{faqs.map((faq, i) => (
  <AccordionItem key={i}>
    <AccordionTrigger>{faq.question}</AccordionTrigger>
    <AccordionContent>{faq.answer}</AccordionContent>
  </AccordionItem>
))}
```

---

### 7. ConveniosSection.tsx

```tsx
import { convenios } from "@/config/siteConfig";

{convenios.map((name, i) => (
  <div key={i}>{name}</div>
))}
```

---

### 8. DifferentialsSection.tsx

```tsx
import { differentials } from "@/config/siteConfig";

{differentials.map((d, i) => (
  <div key={i}>
    <d.icon />
    <h3>{d.title}</h3>
    <p>{d.description}</p>
  </div>
))}
```

---

### 9. LocationSection.tsx

```tsx
import { clinicInfo } from "@/config/siteConfig";

// Mapa
<iframe src={clinicInfo.mapEmbedUrl} />

// Cards de info
{ icon: MapPin, title: "Endereço", text: clinicInfo.address.full },
{ icon: Clock, title: "Horários", text: `${clinicInfo.hours.weekdays}\n${clinicInfo.hours.saturday}` },
{ icon: Car, title: "Estacionamento", text: clinicInfo.parking },
{ icon: Accessibility, title: "Acessibilidade", text: clinicInfo.accessibility },
```

---

### 10. WhatsAppButton.tsx

```tsx
import { getWhatsAppLink } from "@/config/siteConfig";

<a href={getWhatsAppLink()}>...</a>

// Ou com mensagem customizada
<a href={getWhatsAppLink("Olá! Vi o site e quero saber mais.")}>...</a>
```

---

### 11. TransformationsSection.tsx

```tsx
import { transformations } from "@/config/siteConfig";

// Usa diretamente
```

---

### 12. Sobre.tsx (página)

```tsx
import { clinicInfo, team, certifications, galleryItems, seo } from "@/config/siteConfig";

// SEO
<Helmet>
  <title>{seo.about.title}</title>
  <meta name="description" content={seo.about.description} />
</Helmet>

// História
<p>Fundada em {clinicInfo.foundedYear} pelo {team[0].name}...</p>

// Equipe
{team.map((member, i) => (
  <div key={i}>
    {member.image ? (
      <img src={member.image} alt={member.name} />
    ) : (
      <span>{member.name.split(" ").map(n => n[0]).join("")}</span>
    )}
    <h3>{member.name}</h3>
    <span>{member.specialty}</span>
    <p>{member.crm}</p>
  </div>
))}

// Certificações
{certifications.map((cert, i) => (
  <div key={i}>
    <cert.icon />
    <span>{cert.text}</span>
  </div>
))}

// Galeria
{galleryItems.map((item, i) => (
  <img src={item.src} alt={item.label} className={item.span} />
))}
```

---

### 13. Index.tsx (Home)

```tsx
import { seo } from "@/config/siteConfig";

<Helmet>
  <title>{seo.home.title}</title>
  <meta name="description" content={seo.home.description} />
</Helmet>
```

---

### 14. Contato.tsx

```tsx
import { clinicInfo, seo, getWhatsAppLink, getPhoneLink, getEmailLink } from "@/config/siteConfig";

<Helmet>
  <title>{seo.contact.title}</title>
  <meta name="description" content={seo.contact.description} />
</Helmet>

// Info de contato
<a href={getPhoneLink()}>{clinicInfo.phone}</a>
<a href={getEmailLink()}>{clinicInfo.email}</a>
<a href={getWhatsAppLink()}>WhatsApp</a>
```

---

### 15. Servicos.tsx

```tsx
import { services, seo } from "@/config/siteConfig";

<Helmet>
  <title>{seo.services.title}</title>
  <meta name="description" content={seo.services.description} />
</Helmet>

{services.map((service, i) => (
  <div key={i}>
    <service.icon />
    <h2>{service.title}</h2>
    <p>{service.fullDesc}</p>
    <span>Duração: {service.duration}</span>
    {service.benefits?.map((b, j) => <li key={j}>{b}</li>)}
  </div>
))}
```

---

## ✅ CHECKLIST DE REFATORAÇÃO

- [ ] Criar pasta `src/config/`
- [ ] Adicionar `siteConfig.ts`
- [ ] Refatorar Header.tsx
- [ ] Refatorar Footer.tsx
- [ ] Refatorar HeroSection.tsx
- [ ] Refatorar ServicesSection.tsx
- [ ] Refatorar TestimonialsSection.tsx
- [ ] Refatorar FAQSection.tsx
- [ ] Refatorar ConveniosSection.tsx
- [ ] Refatorar DifferentialsSection.tsx
- [ ] Refatorar LocationSection.tsx
- [ ] Refatorar WhatsAppButton.tsx
- [ ] Refatorar TransformationsSection.tsx
- [ ] Refatorar páginas (Index, Sobre, Contato, Servicos)
- [ ] Testar tudo funciona
- [ ] Commit no GitHub

---

## 🎯 BENEFÍCIO FINAL

Depois dessa refatoração, para personalizar o site para um novo cliente, basta:

1. Abrir `src/config/siteConfig.ts`
2. Trocar os dados (nome, telefone, endereço, etc)
3. Trocar as imagens
4. Pronto! Site personalizado.

**Tempo estimado por cliente: 15-30 minutos**
