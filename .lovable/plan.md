
# Revisao Mobile - Ajustes de Experiencia

## Problemas Identificados

### 1. Botao flutuante do WhatsApp sobrepoe conteudo no rodape
O botao verde do WhatsApp (canto inferior direito) cobre o texto "Termos de Uso" e o link "Solvia Hub" no rodape em telas pequenas. O tooltip "Fale conosco" tambem pode ficar atras de outros elementos.

### 2. Barra de emergencia ocupa muito espaco no mobile
O texto "Emergencias Odontologicas 24h: (35) 99879-5485" quebra em 2 linhas no mobile, ocupando ~70px de altura vertical que comprime o conteudo.

### 3. Formulario de contato - botao "Enviar Mensagem"
O botao ja tem `w-full sm:w-auto`, porem o `sm:w-auto` pode deixar o botao estreito em telas entre 640px-767px. Nao e critico, mas pode melhorar.

### 4. Mapa com formato organico na pagina de contato
O iframe do mapa usa `borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'` que corta muito conteudo do mapa em telas pequenas, dificultando a visualizacao.

### 5. Footer - links cortados pelo botao WhatsApp
Os links "Politica de Privacidade" e "Termos de Uso" ficam parcialmente escondidos pelo botao flutuante do WhatsApp no mobile.

---

## Solucao Proposta

### Arquivo: `src/components/Footer.tsx`
- Adicionar `pb-20` (padding-bottom) na secao inferior do footer para que os links de "Politica de Privacidade" e "Termos de Uso" nao fiquem escondidos pelo botao flutuante do WhatsApp

### Arquivo: `src/components/WhatsAppButton.tsx`
- Reduzir o tamanho do botao levemente no mobile (de `w-14 h-14` para `w-12 h-12` em telas pequenas)
- Ajustar posicao `bottom-20` no mobile para ficar acima da area do footer quando o usuario rola ate o final

### Arquivo: `src/pages/Contato.tsx`
- No mapa embutido: usar `borderRadius` mais suave no mobile (ex: `rounded-2xl` em vez do formato organico extremo) para que o mapa fique mais legivel em telas pequenas

### Arquivo: `src/components/EmergencyBar.tsx`
- Compactar o texto no mobile: usar fonte menor (`text-xs`) e abreviar para "Emergencia 24h" no mobile, mantendo o texto completo no desktop

---

## Detalhes Tecnicos

### Footer (`src/components/Footer.tsx`)
- Linha 81: Adicionar `pb-20 md:pb-0` na div inferior para dar espaco ao botao flutuante

### WhatsAppButton (`src/components/WhatsAppButton.tsx`)
- Alterar classe do botao de `w-14 h-14` para `w-12 h-12 md:w-14 md:h-14`
- Ajustar icone de `w-7 h-7` para `w-6 h-6 md:w-7 md:h-7`

### Contato (`src/pages/Contato.tsx`)
- Linha 223: Trocar o `style={{ borderRadius: '30% 70%...' }}` por `className="rounded-2xl md:rounded-none md:overflow-hidden"` e manter o estilo organico apenas no desktop com media query

### EmergencyBar (`src/components/EmergencyBar.tsx`)
- Reduzir padding e tamanho de fonte no mobile: `text-xs md:text-sm py-2 md:py-2.5`
- Texto mobile: "Emergencia 24h:" em vez de "Emergencias Odontologicas 24h:"
