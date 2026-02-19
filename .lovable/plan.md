

# Corrigir emojis quebrados nas mensagens do WhatsApp

## Problema
Os emojis (🦷 👤 📧 📝 ✅ 😊) chegam como "�" no WhatsApp, mesmo usando Unicode escapes e `encodeURIComponent`. Tentativas anteriores com escapes Unicode nao resolveram.

## Solucao
Remover todos os emojis e substituir por formatacao com asteriscos (negrito do WhatsApp), que eh 100% compativel com todos os navegadores e versoes do WhatsApp. O resultado fica limpo e profissional.

## Mudancas

### 1. `src/config/siteConfig.ts`
Alterar `whatsappMessage` do botao flutuante:
- De: `Ol\u00E1! \u{1F60A} Vim pelo site...`  
- Para: `Olá! Vim pelo site da Sorriso Perfeito. Poderia me ajudar com uma informação?`

### 2. `src/pages/Contato.tsx`
Alterar a mensagem do formulario:
- De: emojis Unicode antes de cada campo
- Para: formatacao com asteriscos (negrito no WhatsApp)

Mensagem final:
```
*Nova solicitação pelo site — Sorriso Perfeito*

*Nome:* {nome}
*Email:* {email}
*Serviço de interesse:* {servico}
*Mensagem:* {mensagem ou (não informado)}

Pode me orientar sobre o próximo passo?
```

### O que NAO muda
- URL continua `https://wa.me/5535998795485?text=...`
- `encodeURIComponent` continua sendo aplicado
- Abertura via elemento `<a>` programatico no formulario
- Botao flutuante continua com `<a target="_blank">`
- Numero `phoneClean: "5535998795485"` inalterado

