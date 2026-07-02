# Deploy e Integracoes

## 1. Supabase

1. Rode a migration `supabase/migrations/001_initial.sql`.
2. Confirme que o bucket privado `courses` existe.
3. Suba o PDF correto do curso no caminho:

```txt
curso/ebook-entre-em-campo.pdf
```

4. O PDF de entrega deve ser somente o arquivo do Drive:

```txt
1ff6bdjOOroWn1xUpCWIbq-uA9795pyBx
```

## 2. Variaveis na Vercel

Cadastre as variaveis do `.env.example` no projeto da Vercel.

Atalho usado neste projeto:

```bash
VERCEL_SITE_URL=https://campo-para-vendedores.vercel.app npm run vercel:env
```

Por padrao o script grava apenas `production`. Para outros ambientes:

```bash
VERCEL_ENV_TARGETS=production,preview,development VERCEL_SITE_URL=https://campo-para-vendedores.vercel.app npm run vercel:env
```

Obrigatorias para vender:

```txt
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
SUPABASE_STORAGE_BUCKET
COURSE_FILE_PATH
PRODUCT_SLUG
PRODUCT_NAME
PRODUCT_PRICE_CENTS
ASAAS_ENV
ASAAS_API_KEY
ASAAS_WEBHOOK_TOKEN
ASAAS_WEBHOOK_EMAIL
```

Obrigatorias para envio real de e-mail:

```txt
RESEND_API_KEY
FROM_EMAIL
```

Sem Resend configurado, o webhook marca a compra como paga e cria o token, mas registra o e-mail como `skipped`.

## 3. Asaas

Endpoint do webhook:

```txt
https://seu-dominio.com/api/webhooks/asaas
```

Eventos usados:

```txt
PAYMENT_CONFIRMED
PAYMENT_RECEIVED
PAYMENT_REFUNDED
```

Depois do deploy e de `NEXT_PUBLIC_SITE_URL` apontando para a URL publica, rode:

```bash
npm run asaas:webhook
```

O Asaas exige um e-mail para alertas do webhook. Configure `ASAAS_WEBHOOK_EMAIL` antes de rodar esse comando.

## 4. Fluxo esperado

1. Cliente preenche nome e e-mail na LP.
2. `POST /api/checkout` cria pedido local.
3. Backend cria cliente e cobranca no Asaas.
4. Cliente paga no ambiente Asaas.
5. Asaas envia webhook para `/api/webhooks/asaas`.
6. Sistema confirma status na API do Asaas.
7. Pedido vira `paid`.
8. Sistema gera token de acesso.
9. Resend envia e-mail com `/acesso/[token]`.
10. Cliente baixa o PDF por signed URL temporaria do Supabase Storage.
