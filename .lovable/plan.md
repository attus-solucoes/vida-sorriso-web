

# Otimizacao de Performance do Video no Hero

## Problema

O video de fundo compete por recursos da GPU com varios efeitos visuais pesados que ainda estao ativos na secao hero. Os principais viloes sao:

1. **`backdrop-filter: blur(20px)`** nos 2 cards flutuantes (`glass-dark`) -- backdrop-filter e um dos efeitos mais pesados para GPU
2. **Parallax scroll** (`useScroll` + `useTransform`) no container da imagem -- recalcula transform a cada frame de scroll
3. **3 animacoes infinitas do Framer Motion** -- 2 cards flutuando (`y: [0, -4, 0]`) + badge rotacionando (`rotate: [0, 5, -5, 0]`)
4. **`organic-blob` com `blur-sm`** atras da imagem (linha 97)
5. **`border-gradient::before`** -- pseudo-elementos com gradiente em 3 elementos

## Solucao

Remover ou simplificar cada item, priorizando fluidez do video:

### Mudancas em `src/components/HeroSection.tsx`

| Item | Antes | Depois |
|------|-------|--------|
| Parallax scroll | `useScroll` + `useTransform` + `style={{ y: imageY }}` | Remover completamente -- imagem fica estatica |
| Cards flutuantes | `animate={{ y: [0, -4, 0] }}` com `repeat: Infinity` | Remover animacao infinita -- cards ficam estaticos |
| Badge rotacao | `animate={{ rotate: [0, 5, -5, 0] }}` com `repeat: Infinity` | Remover animacao infinita -- badge fica estatico |
| Glass-dark nos cards | `glass-dark` (backdrop-filter: blur 20px) | Substituir por fundo solido semi-transparente (`bg-black/60 rounded-lg`) |
| Blob atras da imagem | `organic-blob bg-gradient-to-br ... blur-sm` | Remover completamente |
| Border-gradient nos cards | Pseudo-elemento com gradiente | Substituir por `border border-white/10` simples |

### Imports a limpar

Remover `useScroll` e `useTransform` do import do framer-motion (manter apenas `motion`).
Remover `useRef` se nao for mais usado apos remover `sectionRef`.

### Resultado esperado

- Video roda sem competir por GPU com blur, parallax e animacoes infinitas
- Cards e badge mantem visual premium com fundo solido em vez de glass blur
- Zero animacoes infinitas rodando em loop sobre o video
- Entrada inicial dos elementos (fade-in) mantida pois roda apenas uma vez

