

# Mobile Hero - Melhorias

## Problemas Atuais

1. **Imagem de fundo duplicada**: A mesma imagem do Unsplash aparece duas vezes no mobile -- uma como fundo (quase invisivel atras do overlay escuro de 78%) e outra como o cartao grande abaixo do texto. Isso e redundante e confuso.

2. **Hero muito longo no mobile**: O grid empilha texto + imagem (350px de altura), fazendo o hero ocupar quase 2 telas inteiras no celular. O usuario precisa rolar muito antes de ver qualquer conteudo.

3. **Sem video no mobile**: O video esta oculto com `hidden md:block`. Isso e correto (performance), mas o fallback atual (imagem quase invisivel) nao agrega valor visual.

## Solucao

Esconder o cartao de imagem no mobile e deixar a imagem de fundo mais visivel, criando um hero compacto e impactante.

### Mudancas no arquivo `src/components/HeroSection.tsx`

**1. Esconder o cartao de imagem no mobile**
- Adicionar `hidden lg:block` ao `motion.div` que envolve o cartao de imagem (linha 83)
- No mobile, o hero mostrara apenas o texto com botoes sobre a imagem de fundo
- No desktop (lg+), o cartao continua aparecendo ao lado do texto como antes

**2. Reduzir a opacidade do overlay no mobile**
- Mudar o overlay de 78% fixo para responsivo: 65% no mobile, 78% no desktop
- Isso deixa a imagem de fundo mais visivel no mobile, dando mais impacto visual
- Implementar com duas divs de overlay (uma `md:hidden` com 65%, outra `hidden md:block` com 78%)

**3. Ajustar padding vertical do hero no mobile**
- Reduzir `py-14` para `py-10` no mobile para um hero mais compacto
- Manter `md:py-20 lg:py-28` para telas maiores

### Resultado esperado

- Hero mobile: texto + botoes sobre imagem de fundo visivel, compacto (1 tela)
- Hero desktop: sem mudancas (texto a esquerda, cartao de imagem a direita, video de fundo)

