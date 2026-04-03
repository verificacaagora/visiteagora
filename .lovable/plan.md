

## Plano: Passar UTMs para o link de redirecionamento

### O que será feito
Capturar os parâmetros UTM da URL atual (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`) e repassá-los ao redirecionar para `brasilsocial.shop`.

### Alteração

**`src/pages/Index.tsx`** (linha 44):
- Substituir o redirecionamento fixo por uma função que lê `window.location.search`, extrai os parâmetros UTM e os anexa à URL de destino.

```ts
// Antes
onClick={() => window.location.href = "https://brasilsocial.shop/"}

// Depois
onClick={() => {
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  const utmParams = new URLSearchParams();
  utmKeys.forEach(key => {
    const val = params.get(key);
    if (val) utmParams.set(key, val);
  });
  const qs = utmParams.toString();
  window.location.href = `https://brasilsocial.shop/${qs ? '?' + qs : ''}`;
}}
```

Nenhum outro arquivo precisa ser alterado.

