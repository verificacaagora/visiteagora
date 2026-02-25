

## Limpeza de Metadados e Cache

### O que sera feito

**1. Adicionar headers de controle de cache no `index.html`**
- Adicionar meta tags para forcar navegadores e crawlers a nao usar versoes em cache:
  - `Cache-Control: no-cache, no-store, must-revalidate`
  - `Pragma: no-cache`
  - `Expires: 0`

**2. Remover metadados antigos desnecessarios do `index.html`**
- Remover a tag `keywords` (Google ignora essa tag desde 2009, so ocupa espaco)
- Manter `title` e `description` pois sao uteis para SEO

**3. Atualizar `DynamicHead.tsx`**
- Remover a logica que injeta `keywords` (consistencia com o index.html)
- Manter todo o resto igual (noindex na segunda pagina, title, description)

### O que NAO sera alterado
- A tag `noindex` na segunda pagina (via DynamicHead)
- Nenhuma funcionalidade (clique, redirecionamento, verificacao)
- O conteudo estatico do HTML para crawlers

### Arquivos afetados
- `index.html` - adicionar meta tags de cache, remover keywords
- `src/components/DynamicHead.tsx` - remover keywords

