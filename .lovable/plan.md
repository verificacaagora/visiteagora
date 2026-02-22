

## Objetivo

Fazer com que crawlers (ChatGPT, Google, etc.) consigam ler o conteudo da **primeira pagina** (antes do clique), mas **nao vejam nada** da segunda pagina (apos o clique). Atualmente, crawlers nao veem nem a primeira pagina porque o site e um SPA (Single Page Application) e o `index.html` esta vazio.

## O que sera feito

### 1. Atualizar `index.html`

- Trocar o titulo para "CNH Social - Programa de Isencao de Taxas"
- Atualizar meta description e adicionar keywords
- Remover `noindex` do estado inicial (para crawlers indexarem a primeira pagina)
- Adicionar JSON-LD estruturado no `<head>`
- Adicionar conteudo HTML estatico dentro do `<div id="root">` com um resumo do programa (titulo, descricao, requisitos, beneficios)
- Esse conteudo estatico sera substituido automaticamente pelo React quando o JavaScript carregar, entao usuarios reais nunca o verao

### 2. Manter `DynamicHead.tsx` como esta

- Ja funciona corretamente: apos o clique, aplica `noindex`, remove JSON-LD e limpa metadados
- Crawlers nunca chegam ao estado pos-clique porque nao executam JavaScript

### O que NAO muda

- `HomeContent.tsx` continua igual
- `Index.tsx` continua igual
- O visual do site para usuarios reais nao muda em nada
- A logica de esconder tudo apos o clique continua funcionando

## Resultado esperado

- Crawlers veem o conteudo da primeira pagina (HTML estatico)
- Crawlers **nao** veem nada da segunda pagina (nunca executam JS, e mesmo que executassem, teria `noindex`)
- Usuarios reais veem o site normalmente sem diferenca

