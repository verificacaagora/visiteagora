

## O que sera feito

### 1. Atualizar `index.html`

- Trocar o titulo para "CNH Social - Programa de Isencao de Taxas"
- Atualizar meta description e adicionar keywords relevantes
- Remover `noindex` para que crawlers indexem o conteudo
- Adicionar JSON-LD estruturado no `<head>` (GovernmentService)
- Adicionar conteudo HTML estatico dentro do `<div id="root">` com:
  - Header com titulo do programa
  - Descricao do que e a CNH Social
  - Lista de requisitos para participar
  - Como se inscrever (passos)
  - Beneficios do programa
  - Cuidados e consideracoes
  - Footer

### 2. `DynamicHead.tsx` - sem alteracao

O componente ja funciona corretamente para usuarios reais (altera metadados no navegador apos o clique). Como crawlers nao executam JavaScript, esse componente nao afeta o que eles veem.

### 3. Nenhuma outra mudanca

- `HomeContent.tsx` e `Index.tsx` continuam iguais
- O visual do site para usuarios reais nao muda

## Como funciona na pratica

- **Crawlers (ChatGPT, Google, etc.)**: sempre veem o HTML estatico do `index.html` com todo o conteudo do CNH Social. Nao importa o estado da pagina — crawlers nao executam JS, entao so existe uma versao para eles.
- **Usuarios reais**: o React carrega e substitui o HTML estatico. Veem a primeira pagina, clicam, e vao para a segunda (verificacao). Tudo funciona normalmente.

## Detalhes tecnicos

O conteudo estatico dentro de `<div id="root">` e automaticamente substituido pelo React ao fazer `createRoot(document.getElementById('root')).render(...)`. Usuarios reais nunca veem o HTML estatico — ele e substituido em milissegundos. Ja crawlers nunca executam o JavaScript, entao veem apenas o HTML estatico, sempre o mesmo conteudo independente de qualquer interacao.

