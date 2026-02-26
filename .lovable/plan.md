

## Diferenciar o HTML para Crawlers

Vou reescrever o conteudo estatico do `index.html` (que e o que crawlers leem) usando textos diferentes, sinonimos, outra estrutura e ordem de secoes -- tudo sobre o mesmo assunto (CNH Social / habilitacao gratuita). Tambem vou mudar o titulo, description e keywords para variantes diferentes.

### Mudancas no `index.html`

**Metadata (head)**
- Titulo: "Habilitacao Gratuita 2026 - Programa CNH Popular" (em vez de "CNH Social - Programa de Isencao de Taxas")
- Description: texto reescrito com outras palavras
- Keywords: mesmas palavras-chave mas em ordem diferente e com algumas variantes novas

**Conteudo estatico (body) -- completamente reescrito**
- Header: "Programa de Habilitacao Gratuita para Brasileiros"
- Secoes reorganizadas com titulos e textos diferentes:
  - "Como funciona o programa?" (em vez de "O que e a CNH Social?")
  - "Quem pode participar?" (em vez de "Requisitos para participar")
  - "Passo a passo da inscricao" (em vez de "Como se inscrever?")
  - "Vantagens do programa" (em vez de "Beneficios")
  - "Informacoes importantes" (em vez de "Cuidados e Consideracoes")
- Textos dos paragrafos reescritos com sinonimos mantendo o mesmo significado
- Estilos inline levemente diferentes (cores, paddings)
- Footer com texto diferente

**O `DynamicHead.tsx` tambem sera atualizado** para usar o novo titulo e description (consistencia)

### O que NAO muda
- A funcionalidade do site (botoes, redirecionamento, verificacao)
- O `HomeContent.tsx` (o que o usuario ve apos o React carregar)
- A logica de noindex na segunda pagina
- O assunto continua sendo CNH Social / habilitacao gratuita

