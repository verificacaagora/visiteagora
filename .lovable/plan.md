

## Plano: Tornar a pulsacao do botao MUITO mais lenta

O problema atual: mesmo com 40 segundos de duracao, a animacao ainda parece rapida demais. Isso acontece porque o ciclo completo (crescer e voltar) ocorre em 40 segundos, mas visualmente ainda e perceptivel.

### Mudancas

**Arquivo: `tailwind.config.ts`**

1. Aumentar a escala de volta para `1.05` (como voce pediu, um pouco maior)
2. Aumentar a duracao para **120 segundos** (2 minutos por ciclo) - isso vai fazer a pulsacao ser quase imperceptivel no dia a dia, apenas um movimento muito suave e lento

```
"btn-pulse": {
  "0%, 100%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.05)" },
},
```

```
"btn-pulse": "btn-pulse 120s ease-in-out infinite",
```

Resultado: o botao vai crescer 5% ao longo de 60 segundos, e depois voltar ao tamanho normal em mais 60 segundos. Movimento super lento e suave, sem incomodar os olhos.
