

# Plano de Melhorias - Site Sorriso Perfeito

---

## CORRECOES URGENTES (Bugs e Inconsistencias)

### 1. Avaliacao Google na TrustBar exibe "49" em vez de "4.9"
- **Componente:** `HeroSection.tsx` (linha 144)
- **Problema:** O codigo usa `Math.round(stats.googleRating * 10)` que transforma 4.9 em 49. O `useCountUp` anima esse numero inteiro, exibindo "49" sem decimal.
- **Solucao:** Remover a multiplicacao e exibir o valor `stats.googleRating` diretamente (4.9), ou formatar o resultado dividindo por 10 apos a animacao. Adicionar sufixo "/5" para clareza.
- **Impacto:** Alto | **Complexidade:** Simples

### 2. Dados numericos inconsistentes em todo o site
- **Componente:** `siteConfig.ts` (linha 70)
- **Problema:** `stats.yearsExperience = 18` mas `clinicInfo.foundedYear = 2005`. Em 2026, sao +20 anos. O hero diz "+18 anos", a TrustBar mostra "+18", e a pagina Sobre repete isso. Tudo inconsistente com a data de fundacao.
- **Solucao:** Calcular dinamicamente: `yearsExperience: new Date().getFullYear() - clinicInfo.foundedYear` (resultado: 21). Isso garante que o valor se atualiza automaticamente todo ano.
- **Impacto:** Alto | **Complexidade:** Simples

### 3. AboutSection importa imagem local que pode nao existir
- **Componente:** `AboutSection.tsx` (linha 2)
- **Problema:** Importa `clinic-interior.jpg` do diretorio local, enquanto o resto do site ja usa URLs do Unsplash via `siteConfig.ts`. Alem disso, o texto "Mais de 18 anos" esta hardcoded em vez de usar `stats.yearsExperience`.
- **Solucao:** Substituir import local por `images.clinicInterior` do siteConfig. Substituir textos hardcoded por variaveis dinamicas do config.
- **Impacto:** Alto | **Complexidade:** Simples

### 4. Header com telefone hardcoded
- **Componente:** `Header.tsx` (linha 51)
- **Problema:** O link de telefone usa `tel:+5511999999999` e texto `(11) 99999-9999` hardcoded em vez de usar `clinicInfo.phone` e `getPhoneLink()` do siteConfig.
- **Solucao:** Importar e usar `clinicInfo` e `getPhoneLink` do siteConfig.
- **Impacto:** Medio | **Complexidade:** Simples

---

## MELHORIAS DE UX/CONVERSAO (Impacto direto em agendamentos)

### 5. Cards de servico na Home sem CTA individual
- **Componente:** `ServicesSection.tsx`
- **Problema:** Os cards de servico linkam para `/servicos#slug` no card inteiro, mas nao ha um botao "Saiba mais" visivel. O usuario pode nao perceber que o card e clicavel.
- **Solucao:** Adicionar um texto/botao "Saiba mais" visivel dentro de cada card, alem de manter o card inteiro clicavel. Isso aumenta a clareza da acao esperada.
- **Impacto:** Alto | **Complexidade:** Simples

### 6. Secao de Transformacoes usa placeholders em vez de imagens reais
- **Componente:** `TransformationsSection.tsx` e `siteConfig.ts`
- **Problema:** Os cards de antes/depois usam cores solidas com emojis em vez de fotos reais. Isso reduz drasticamente a credibilidade da secao, que deveria ser a prova visual mais forte do site.
- **Solucao:** Adicionar campos `beforeImage` e `afterImage` ao array `transformations` no siteConfig com URLs de imagens do Unsplash de sorrisos/tratamentos. Atualizar o componente `BeforeAfterSlider` para usar as imagens quando disponiveis.
- **Impacto:** Alto | **Complexidade:** Media

### 7. Formulario de contato nao envia dados para lugar nenhum
- **Componente:** `Contato.tsx` (linha 53)
- **Problema:** O formulario apenas seta `submitted = true` e mostra um toast, mas nao envia os dados para nenhum backend, email ou WhatsApp. O visitante preenche tudo e os dados se perdem.
- **Solucao:** Como opcao imediata (sem backend), redirecionar para WhatsApp com os dados preenchidos formatados na mensagem. Alternativamente, integrar com um servico como Formspree ou uma Edge Function do Supabase.
- **Impacto:** Alto | **Complexidade:** Media

### 8. Adicionar schema markup JSON-LD para SEO local
- **Componente:** `Index.tsx` (dentro do Helmet)
- **Problema:** Nao ha dados estruturados para o Google. Isso prejudica o posicionamento em buscas locais como "dentista em Sao Paulo" ou "clinica odontologica Bela Vista".
- **Solucao:** Adicionar script JSON-LD do tipo `LocalBusiness` / `Dentist` com nome, endereco, telefone, horarios, avaliacao e servicos. Todos os dados ja existem no siteConfig.
- **Impacto:** Alto | **Complexidade:** Simples

### 9. Links de tratamentos no Footer nao usam deep linking
- **Componente:** `Footer.tsx` e `siteConfig.ts` (quickLinks)
- **Problema:** Os links de tratamentos no footer apontam todos para `/servicos` generico, sem anchor para o servico especifico.
- **Solucao:** Atualizar `quickLinks` no siteConfig para incluir o hash do servico (ex: `/servicos#implantes-dentarios`).
- **Impacto:** Medio | **Complexidade:** Simples

---

## MELHORIAS DE DESIGN E POLISH (Refinamento visual)

### 10. Reducao de espacamentos verticais excessivos
- **Componentes:** Multiplos (`TransformationsSection`, `TestimonialsSection`, `DifferentialsSection`, `FAQSection`, `AboutSection`, `ConveniosSection`, `LocationSection`)
- **Problema:** Quase todas as secoes usam `py-20 md:py-28` e `mb-16` nos titulos, criando gaps visuais muito grandes que dispersam a atencao e fazem o site parecer "vazio".
- **Solucao:** Padronizar para `py-14 md:py-20` nas secoes e `mb-10` nos headers de secao. Manter proporcao visual sem perder respiro.
- **Impacto:** Medio | **Complexidade:** Simples

### 11. Depoimentos sem fotos dos pacientes
- **Componente:** `TestimonialsSection.tsx`
- **Problema:** Os depoimentos usam apenas iniciais em um circulo colorido. Fotos (mesmo genericas) aumentam significativamente a credibilidade dos depoimentos.
- **Solucao:** Adicionar campo `image` opcional ao tipo `Testimonial` no siteConfig com URLs de fotos do Unsplash de pessoas sorridentes. Atualizar o componente Avatar para mostrar a foto quando disponivel.
- **Impacto:** Medio | **Complexidade:** Simples

### 12. Pagina Sobre repete imagem do Hero
- **Componente:** `Sobre.tsx` (linha 41)
- **Problema:** A secao "Nossa Historia" usa `images.hero` (mesma foto do consultorio do hero da Home), criando repeticao visual.
- **Solucao:** Adicionar uma imagem diferente ao siteConfig (ex: foto da equipe ou da recepcao) e usar na pagina Sobre.
- **Impacto:** Baixo | **Complexidade:** Simples

### 13. Convênios exibidos apenas como texto
- **Componente:** `ConveniosSection.tsx`
- **Problema:** Os convenios sao mostrados apenas como nomes em texto dentro de cards. Logos dos convenios transmitiriam mais profissionalismo e reconhecimento visual instantaneo.
- **Solucao:** Adicionar campo `logo` opcional ao array de convenios no siteConfig. Por ora, manter o texto mas melhorar o layout visual com icones representativos.
- **Impacto:** Baixo | **Complexidade:** Media

---

## Ordem de Execucao Recomendada

A execucao esta organizada por impacto no negocio e dependencias tecnicas:

**Fase 1 - Correcoes criticas (fazer primeiro)**
1. Corrigir dados numericos no siteConfig (item 2) - base para tudo
2. Corrigir exibicao "49" na TrustBar (item 1)
3. Corrigir AboutSection com imports e textos hardcoded (item 3)
4. Corrigir telefone hardcoded no Header (item 4)

**Fase 2 - Conversao (maior retorno)**
5. Adicionar CTA "Saiba mais" nos cards de servico (item 5)
6. Deep linking nos tratamentos do Footer (item 9)
7. Adicionar schema JSON-LD para SEO (item 8)
8. Redirecionar formulario para WhatsApp (item 7)

**Fase 3 - Polish visual**
9. Reduzir espacamentos excessivos (item 10)
10. Melhorar secao de transformacoes com imagens (item 6)
11. Adicionar fotos aos depoimentos (item 11)
12. Imagem diferenciada na pagina Sobre (item 12)
13. Melhorar visual dos convenios (item 13)

---

## Resumo de Impacto

| Categoria | Itens | Tempo estimado |
|-----------|-------|----------------|
| Correcoes Urgentes | 4 itens | Rapido (1 rodada) |
| UX/Conversao | 5 itens | Medio (2-3 rodadas) |
| Design/Polish | 4 itens | Medio (2 rodadas) |

As correcoes da Fase 1 sao fundamentais pois dados incorretos prejudicam a credibilidade -- exatamente o oposto do objetivo do site. A Fase 2 ataca diretamente o funil de conversao. A Fase 3 refina a experiencia geral.

