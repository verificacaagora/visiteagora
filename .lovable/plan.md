

## Inverter a ordem das páginas

A mudança consiste em trocar a ordem de exibição:

1. **Página inicial (antes da verificação):** Será a página com todo o conteúdo informativo sobre a CNH Social (atualmente é a segunda página).
2. **Página após clicar "Verificar agora":** Será a página simples com o botão de verificação (atualmente é a primeira página).

### Alterações técnicas

**Arquivo: `src/pages/Index.tsx`**
- Inverter a lógica do estado `verified`:
  - Quando `verified = false`: mostrar o `HomeContentLazy` (conteúdo completo)
  - Quando `verified = true`: mostrar a tela simples com botão

**Arquivo: `src/components/HomeContent.tsx`**
- O botão "Verificar agora" nesta página precisará de uma forma de mudar o estado `verified` no componente pai. Será necessário passar uma prop `onVerify` para o `HomeContent` que ativa a troca de página.

**Arquivo: `src/components/DynamicHead.tsx`**
- Inverter a lógica do `verified` para manter a consistência dos metadados.

