
# Correcoes no Header e Hero Section

## 1. Header — Logo "Sorriso"

**Problema**: Na imagem, o header tem fundo `glass` (translucido branco quando scrollado), mas "Sorriso" fica em `text-white` sobre o hero, o que funciona. Porem, ao usar `glass` no scroll, o branco some. A logica `isTransparent` ja trata isso, mas o fundo glass pode nao ter opacidade suficiente para garantir contraste.

**Solucao**: Manter a logica atual (`text-white` no hero, `text-foreground` quando scrollado). O comportamento ja esta correto no codigo. O usuario confirmou que branco esta ok desde que visivel com fundo branco — e quando scrollado, `isTransparent` e `false`, entao ja mostra `text-foreground`. Nenhuma mudanca necessaria no header.

## 2. Cards flutuantes — Sobreposicao e tamanho

**Problema visivel na imagem**:
- O card "Milhares de sorrisos" esta esticado horizontalmente na parte inferior da imagem, parecendo um banner largo em vez de um card compacto
- O card "4.9/5 Estrelas" esta parcialmente escondido
- Ambos competem visualmente com o badge "Avaliacao Gratuita"

**Solucao**: Reposicionar os cards para cantos opostos da imagem com tamanho compacto e garantir que nao sobreponham:

- Card "4.9/5 Estrelas": posicionar no canto inferior-esquerdo (`-bottom-4 -left-4`)
- Card "Milhares de sorrisos": posicionar no canto superior-direito (`-top-4 -right-4`)
- Badge "Avaliacao Gratuita": manter no top-left mas ajustar posicao para `top-4 left-4` (dentro da imagem, nao no canto extremo)

Reduzir o badge de `w-20 h-20` para `w-16 h-16` para ser mais discreto.

## 3. Resultado esperado

Os 3 elementos flutuantes ficam em cantos diferentes sem sobreposicao:
- Top-left: Badge "Avaliacao Gratuita" (menor)
- Top-right: Card "Milhares de sorrisos"
- Bottom-left: Card "4.9/5 Estrelas"

## Arquivos modificados

| Arquivo | Mudanca |
|---------|---------|
| `src/components/HeroSection.tsx` | Reposicionar cards flutuantes, reduzir badge |

O header nao precisa de mudanca — a logica `isTransparent` ja funciona corretamente.
