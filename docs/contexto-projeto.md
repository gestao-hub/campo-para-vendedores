# Contexto do Projeto

Atualizado em: 2026-07-02

## Produto

- Produto vendido: `Entre em Campo - Manual Oficial de Campo para Vendedores`
- Curso/PDF entregue: arquivo do Drive `1ff6bdjOOroWn1xUpCWIbq-uA9795pyBx`
- Preco atual: `R$47`
- Promessa central: desafio pratico de 21 dias para criar rotina de prospeccao e vender com mais confianca.

## Decisoes tecnicas

- Stack: Next.js App Router, TypeScript, Tailwind, Supabase, Asaas e Resend.
- Gateway recomendado/integrado: Asaas.
- Estrategia MVP de entrega: pagina protegida por token + Supabase Storage privado + signed URL temporaria.
- Bucket previsto: `courses`
- Caminho previsto do arquivo no bucket: `curso/ebook-entre-em-campo.pdf`

## Supabase

- Project URL publica: `https://ddznfswqkyxbmiuhrpoq.supabase.co`
- Chaves ficam em `.env.local` e devem ser replicadas no ambiente da Vercel.
- Nunca expor `SUPABASE_SERVICE_ROLE_KEY` no frontend.

## Asaas

- API key fica em `.env.local` e na Vercel.
- Webhook local pronto para: `/api/webhooks/asaas`
- O cadastro real do webhook no Asaas deve usar uma URL publica, por exemplo:
  - `https://seu-dominio.com/api/webhooks/asaas`
- Token de autenticacao do webhook fica em `ASAAS_WEBHOOK_TOKEN`.
- O Asaas exige `ASAAS_WEBHOOK_EMAIL` para cadastrar o webhook. Esse e-mail e um contato operacional/alerta do webhook, usado pelo Asaas para notificacoes do proprio webhook. Pode ser o e-mail da conta Asaas, suporte ou contato do projeto.

## E-mail transacional

- `RESEND_API_KEY` configura a conta/API da Resend.
- `FROM_EMAIL` e o remetente que o cliente vera quando receber o acesso, por exemplo `Entre em Campo <acesso@seudominio.com>`.
- Para producao, o dominio/remetente precisa estar autorizado/verificado na Resend.

## Pendencias antes de producao

- Definir dominio final.
- Configurar `NEXT_PUBLIC_SITE_URL` na Vercel.
- Criar bucket privado `courses` e subir o PDF correto.
- Criar tabelas no Supabase.
- Configurar `FROM_EMAIL` com remetente verificado na Resend.
- Informar `ASAAS_WEBHOOK_EMAIL` e cadastrar webhook no Asaas apontando para a URL publica.
- Testar pagamento real com valor controlado antes de abrir trafego.
