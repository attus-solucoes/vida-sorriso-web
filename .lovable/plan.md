

# Corrigir Carregamento do Video de Fundo no Hero

## Problema

Quando o site abre, a imagem poster aparece primeiro e depois de alguns segundos o video "pula" para o lugar. Isso acontece porque:

1. O video leva tempo para baixar e ficar pronto para reproduzir
2. Nao ha transicao suave entre a imagem poster e o video -- ele simplesmente aparece de repente
3. O navegador nao recebe instrucao para priorizar o download do video

## Solucao

Duas mudancas simples que eliminam o "pulo" visual:

### 1. Preload do video no HTML (index.html)

Adicionar uma tag `link rel="preload"` no `head` do HTML para que o navegador comece a baixar o video ANTES mesmo do React inicializar:

```html
<link rel="preload" as="video" href="/videos/hero-bg.mp4" type="video/mp4" />
```

Isso adianta o download em varios segundos.

### 2. Transicao suave com fade-in (HeroSection.tsx)

Em vez do video aparecer de repente, ele comeca invisivel (opacity 0) e faz fade-in quando esta pronto para tocar:

- Adicionar um estado `videoReady` (useState, inicia false)
- No elemento `video`, escutar o evento `onCanPlayThrough` para setar `videoReady = true`
- Aplicar `opacity-0` por padrao e `opacity-100` quando pronto
- Usar `transition-opacity duration-1000` para a transicao ser suave (1 segundo)

Resultado: o visitante ve o fundo solido escuro (ou poster), e o video aparece gradualmente sem nenhum "pulo".

---

## Arquivos Modificados

| Arquivo | Mudanca |
|---------|---------|
| `index.html` | Adicionar `link preload` para o video |
| `src/components/HeroSection.tsx` | Adicionar estado `videoReady` + fade-in no video |

Nenhuma outra mudanca. Hero, blobs, cards, textos -- tudo permanece identico.

