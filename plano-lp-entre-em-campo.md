# Blueprint da Landing Page - Entre em Campo

Data da analise: 2026-07-02

Materiais analisados:

- Curso/produto principal: `Ebook-EntreEmCampo.pdf`
- PDF secundario analisado apenas como referencia textual/visual, nao como curso final
- `Copy Landing Page.docx`
- Brief anexado sobre LP, checkout, automacao de pagamento e entrega automatica

Importante: a partir desta revisao, apenas o arquivo do Drive `1ff6bdjOOroWn1xUpCWIbq-uA9795pyBx` deve ser tratado como curso/produto entregue ao comprador.

Observacao visual: a extracao via Drive trouxe o conteudo textual dos PDFs e da copy, mas nao trouxe as imagens/paleta exata do layout. A direcao visual abaixo assume, de forma coerente com o produto, o universo de campo, jogo, rodada, placar, treino e vendedor em acao.

## 1. Diagnostico inicial

### Promessa central

O produto promete transformar procrastinacao comercial em acao diaria por meio de um desafio pratico de 21 dias. A promessa mais forte nao e "aprender vendas" de forma generica, mas criar disciplina de prospeccao e confianca para abordar clientes todos os dias.

Formula recomendada:

> Em 21 dias, construa uma rotina de prospeccao simples, pratica e constante para parar de adiar contatos e conquistar clientes com mais confianca.

### Publico-alvo mais provavel

- Vendedores iniciantes ou inseguros.
- Prestadores de servico, autônomos e pequenos empreendedores que precisam prospectar.
- Pessoas que sabem que precisam vender, mas travam na abordagem.
- Profissionais que consomem conteudo de vendas, mas aplicam pouco.
- Vendedores que perdem oportunidades por falta de follow-up.

### Dores, desejos e objecoes

Dores:

- Vergonha de abordar clientes.
- Falta de rotina comercial.
- Procrastinacao: "amanha eu comeco".
- Leads visualizados e sem resposta.
- Dificuldade de fazer follow-up sem parecer insistente.
- Medo de ouvir "nao" ou parecer inconveniente.

Desejos:

- Ter confianca para prospectar.
- Saber o que fazer todos os dias.
- Vender mais sem depender de motivacao.
- Ter mensagens, checklists e exercicios prontos.
- Sentir evolucao visivel em 21 dias.

Objecoes:

- "E so um PDF?"
- "Eu ja sei que preciso prospectar."
- "Nao tenho tempo."
- "Nao sou vendedor nato."
- "Sera que funciona para o meu tipo de negocio?"
- "Por que pagar R$47 por um manual?"

### Elementos visuais a preservar

- Linguagem de campo, jogo, rodada, apito, placar e treino.
- Iconografia funcional: missao, leitura de jogo, campo de treino, placar.
- Imagem/mockup grande do manual.
- Estrutura de 21 rodadas.
- Tom direto, provocativo e sem promessa milagrosa.

### Melhorias de copy para conversao

- Deixar claro no hero que o cliente compra um plano diario de acao, nao apenas um ebook.
- Antecipar a objecao "so um PDF" antes da oferta.
- Mostrar o conteudo em blocos tangiveis: 21 missoes, 30 abordagens, 15 objecoes, checklists, plano de 90 dias.
- Transformar o preco em comparacao de valor: um cliente novo tende a valer mais que R$47.
- Adicionar prova de mecanismo: rotina curta, missao diaria, checklist, acompanhamento.
- Adicionar FAQ para reduzir friccao de compra.

### Informacoes faltantes

- Nome e mini bio do autor Michel Bovo.
- Prazo real de garantia.
- Politica de reembolso.
- Depoimentos ou prints de alunos/clientes.
- Mockups/imagens finais do manual.
- Dados legais: CNPJ/CPF vendedor, termos, privacidade, suporte.
- Gateway escolhido e URL final do checkout.

## 2. Estrutura da landing page mobile first

### 1. Hero - "Voce foi convocado"

Objetivo: capturar atencao, posicionar o problema e prometer transformacao.

Texto sugerido:

> Voce nao esta sem dinheiro. Esta sem prospeccao.
>
> Aceite o Desafio Entre em Campo e, em 21 dias, crie uma rotina comercial simples para parar de adiar contatos, abordar clientes com mais confianca e vender com mais constancia.

Elementos visuais: mockup grande do manual, selo "21 dias", preco R$47, faixa "Manual Oficial de Campo para Vendedores".

Componentes: `HeroSection`, `ProductMockup`, `PrimaryCta`, `TrustStrip`.

Mobile: headline curta, mockup logo abaixo, CTA fixo opcional no rodape apos scroll.

CTA: `QUERO ENTRAR EM CAMPO`

### 2. Problema - "Ninguem acorda gostando de prospectar"

Objetivo: gerar identificacao sem culpar o comprador.

Texto sugerido:

> Ninguem acorda animado para prospectar. Nem os melhores vendedores.
>
> A diferenca e que eles nao dependem de vontade. Eles seguem uma rotina.

Visual: bloco editorial com fundo escuro e destaque em amarelo para "rotina".

Componentes: `ProblemSection`, `QuoteHighlight`.

CTA: nenhum ou mini link para oferta.

### 3. Checklist de autoidentificacao

Objetivo: fazer o visitante admitir o comportamento que precisa mudar.

Texto sugerido:

> Responda com sinceridade:
>
> - Disse que ligaria amanha.
> - Deixou lead sem resposta.
> - Ficou estudando em vez de prospectar.
> - Sentiu vergonha de abordar.
> - Esperou o momento perfeito.
>
> Se marcou duas ou mais, talvez o problema nao seja tecnica. E comportamento.

Visual: checklist com estilo de prancheta/campo de treino.

Componentes: `SelfCheckSection`, `ChecklistItem`.

CTA: `COMEÇAR O DESAFIO`

### 4. Inimigo comum - "Amanha eu comeco"

Objetivo: intensificar urgencia.

Texto sugerido:

> O maior concorrente nao e outro vendedor. E a frase: "amanha eu comeco".
>
> Ela custa clientes, dinheiro e oportunidades.

Visual: frase grande em fundo de placar.

Componentes: `EnemySection`.

CTA: nenhum.

### 5. Apresentacao do produto

Objetivo: explicar o que e o manual.

Texto sugerido:

> O Entre em Campo e um manual pratico de 21 dias para vendedores que querem agir mais e enrolar menos.
>
> A cada dia voce recebe uma missao curta, um insight de mentalidade, um campo de treino e um placar para acompanhar sua evolucao.

Visual: 4 cards: Missao, Leitura de Jogo, Campo de Treino, Placar.

Componentes: `MethodSection`, `MethodCard`.

CTA: `VER O QUE TEM DENTRO`

### 6. Timeline dos 21 dias

Objetivo: dar previsibilidade e tangibilidade.

Texto sugerido:

> O jogo dura 21 rodadas. A cada rodada, uma acao concreta.

Itens:

- Dia 1: primeiro passo.
- Dia 3: escuta ativa.
- Dia 7: prospeccao ativa.
- Dia 10: revisao de campo.
- Dia 14: gestao do nao.
- Dia 17: networking ativo.
- Dia 21: plano de 90 dias.

Visual: timeline vertical no mobile, estilo campo com linhas.

Componentes: `TimelineSection`, `RoundStep`.

CTA: `QUERO AS 21 RODADAS`

### 7. "Nao e so um PDF"

Objetivo: combater a objecao principal.

Texto sugerido:

> Voce nao esta comprando um PDF. Voce esta comprando um treinador de bolso.
>
> Todos os dias ele responde a pergunta que trava muita gente: "o que eu faco hoje para vender mais?"

Visual: mockup do manual aberto ou telas/paginas internas.

Componentes: `ReframeSection`.

CTA: `COMEÇAR HOJE`

### 8. Conteudo do manual

Objetivo: mostrar volume e praticidade.

Texto sugerido:

> Dentro do manual voce encontra:
>
> - 21 rodadas de acao.
> - Missoes diarias.
> - Checklists de progresso.
> - Exercicios de prospeccao.
> - Abordagens e follow-ups.
> - Respostas para objecoes.
> - Placar da temporada.
> - Plano de campo de 90 dias.

Visual: grid de cards compactos.

Componentes: `InsideManualSection`, `FeatureGrid`.

CTA: `GARANTIR MEU MANUAL`

### 9. Para quem e / para quem nao e

Objetivo: qualificar comprador e aumentar confianca.

Texto sugerido:

> E para voce se precisa prospectar, mas trava na hora de agir; se quer uma rotina simples; se prefere missao pratica a aula longa.
>
> Nao e para voce se procura formula magica, promessa de dinheiro facil ou um curso teorico para assistir e nao aplicar.

Visual: dois blocos lado a lado no desktop, empilhados no mobile.

Componentes: `FitSection`.

CTA: nenhum.

### 10. Valor e ROI

Objetivo: justificar preco.

Texto sugerido:

> Quanto vale um cliente novo para voce?
>
> Se o Entre em Campo ajudar voce a conquistar apenas um cliente, os R$47 deixam de ser custo e viram investimento.

Visual: calculo simples "1 cliente novo > R$47".

Componentes: `ValueSection`, `MiniCalculator`.

CTA: `QUERO MEU ACESSO`

### 11. Oferta

Objetivo: venda direta.

Texto sugerido:

> Entre em Campo - Manual Oficial de Campo para Vendedores
>
> Desafio de 21 dias, mais de 50 paginas, missoes diarias, exercicios, checklists e plano de 90 dias.
>
> De R$97 por R$47.

Visual: card unico de oferta, sem poluicao.

Componentes: `OfferSection`, `OfferCard`, `PaymentBadges`.

Mobile: preco grande, CTA ocupando 100% da largura.

CTA: `QUERO COMEÇAR HOJE`

### 12. Garantia

Objetivo: reduzir risco percebido.

Texto sugerido:

> Leia, use e pratique. Se o material nao entregar valor para a sua realidade dentro do prazo de garantia informado no checkout, voce pode solicitar reembolso conforme a politica de compra.

Observacao: definir prazo real antes de publicar. Sugestao comercial: 7 dias.

Componentes: `GuaranteeSection`.

CTA: nenhum.

### 13. FAQ

Objetivo: remover ultimas objecoes.

Perguntas:

- O acesso e imediato?
- Recebo por e-mail?
- E um curso em video ou manual?
- Serve para quem nunca vendeu?
- Serve para autonomos?
- Posso imprimir?
- Tem garantia?
- Quais formas de pagamento?

Componentes: `FaqSection`, `Accordion`.

CTA: `ENTRAR EM CAMPO AGORA`

### 14. Rodape legal

Objetivo: credibilidade e conformidade.

Itens:

- Nome do produto.
- Autor/responsavel.
- E-mail de suporte.
- Termos de uso.
- Politica de privacidade.
- Politica de reembolso.
- Aviso: resultados dependem da aplicacao individual.

Componentes: `Footer`.

## 3. Copy final sugerida

### Hero

Voce nao esta sem dinheiro. Esta sem prospeccao.

Entre em campo pelos proximos 21 dias e crie uma rotina simples para abordar clientes, fazer follow-up e vender com mais confianca, mesmo que hoje voce trave na hora de comecar.

Manual pratico. Missoes diarias. Checklists. Plano de 90 dias.

CTA: Quero entrar em campo

### Dor

Ninguem acorda gostando de prospectar. Ninguem.

Nem os melhores vendedores dependem de motivacao. Eles seguem processo.

Enquanto alguns esperam vontade, outros fazem a proxima acao. E quem faz a proxima acao chega mais perto da venda.

### Virada

Se voce ja deixou um lead sem resposta, adiou uma ligacao, teve vergonha de abordar ou pensou "quando eu tiver mais confianca", este manual foi feito para voce.

O problema talvez nao seja falta de tecnica. E falta de comportamento treinado.

### Produto

O Desafio Entre em Campo e um manual de campo para vendedores que querem parar de assistir ao jogo e comecar a agir.

Durante 21 dias, voce recebe uma missao por dia. Cumpre, marca no placar, aprende, ajusta e avanca.

### Mecanismo

Cada rodada tem quatro partes:

- Missao: a acao do dia.
- Leitura de jogo: mentalidade comercial.
- Campo de treino: espaco para praticar.
- Placar: acompanhamento do progresso.

### Oferta

Entre em Campo - Manual Oficial de Campo para Vendedores.

De R$97 por R$47.

Inclui 21 rodadas, missoes diarias, checklists, exercicios de abordagem, objecoes, follow-up e plano de campo de 90 dias.

CTA: Quero comecar hoje

### Fechamento

Os proximos 21 dias vao passar de qualquer forma.

A pergunta e simples: voce vai terminar igual ou vai entrar em campo?

## 4. Direcao visual e design system

### Paleta sugerida

- Verde campo: `#14532D`
- Verde escuro: `#052E16`
- Amarelo placar: `#FACC15`
- Branco de fundo: `#F8FAF7`
- Grafite: `#111827`
- Cinza texto: `#4B5563`
- Vermelho alerta moderado: `#DC2626`

### Tipografia

- Headline: `Bebas Neue`, `Oswald` ou `Anton`, com uso controlado para dar clima esportivo.
- Corpo: `Inter`, `Manrope` ou `Sora`.
- Numeros/preco/placar: `Rajdhani` ou `Inter Tight`.

### UI

- Botoes: retangulares, 8px de raio, alto contraste, amarelo sobre verde escuro ou verde sobre branco.
- Cards: raio maximo 8px, borda sutil, sombra baixa, sem excesso de gradiente.
- Icones: usar lucide ou icones simples para alvo, checklist, relogio, trofeu, escudo, apito.
- Fundos: alternar branco, verde escuro e blocos de "placar". Evitar pagina inteira monocromatica.
- Mobile: secoes curtas, CTA 100% largura, preco visivel, timeline vertical, cards empilhados.

## 5. Checkout e meio de pagamento

Fontes tecnicas verificadas em 2026-07-02:

- Asaas: API de cobrancas, Asaas Checkout e Webhooks.
- Mercado Pago: Checkout Transparente, Checkout Pro/Bricks e Webhooks.
- Pagar.me: Orders, Checkout, Pix, boleto, cartao e Webhooks.
- Iugu: Faturas com `payable_with`, Pix/boleto/cartao e `notification_url`.
- Efi Bank: API Cobrancas, Pix, links de pagamento, checkout transparente e SDKs.

### Comparativo

| Gateway | Pix/cartao/boleto | Checkout proprio ou integrado | Webhooks | Prós | Contras | Melhor uso |
| --- | --- | --- | --- | --- | --- | --- |
| Asaas | Sim: Pix, boleto, cartao e tipo indefinido para escolha do pagador | Link, fatura, checkout hospedado e API | Sim, com token e idempotencia | Simples para MVP, bom para cobrancas, boa API, fluxo claro | Menos sofisticado que gateways enterprise para antifraude avancado | Melhor escolha para este projeto |
| Mercado Pago | Sim: cartao, Pix e boleto nas opcoes BR | Checkout Pro, Bricks e Transparente | Sim, com assinatura secreta | Marca conhecida, alta familiaridade do comprador | Integracao pode ficar mais verbosa; UX pode levar para ambiente Mercado Pago dependendo da opcao | Quando confianca de marca for prioridade |
| Pagar.me | Sim: pedidos com multiplos meios, Pix, boleto e cartao | Checkout hospedado customizavel e API | Sim, eventos como `order.paid` e `charge.paid` | Robusto, bom para escala, antifraude e operacao maior | Mais complexo para um infoproduto de R$47 | Quando virar operacao maior ou marketplace |
| Iugu | Sim via faturas com `credit_card`, `bank_slip`, `pix` | Fatura/pagina Iugu e API | Sim via webhook/notification_url | Bom para faturas, assinaturas e cobrancas recorrentes | Experiencia menos direta para LP low-ticket | Quando houver recorrencia ou financeiro mais complexo |
| Efi Bank | Pix forte, boletos/Bolix, cartao, links e checkout transparente | Links, API e checkout transparente | Sim nas APIs | Forte em APIs bancarias, Pix e boleto; aceita conta Pro sem CNPJ | Pode exigir mais configuracao bancaria/certificados dependendo da API | Quando Pix/boleto forem o centro da operacao |

### Recomendacao

Recomendo Asaas para o MVP.

Motivos:

- O produto e low-ticket, entao simplicidade e manutencao importam mais que arquitetura enterprise.
- Permite criar cobranca avulsa com Pix, boleto ou cartao.
- Da para comecar com checkout hospedado/link e evoluir para experiencia mais propria.
- Webhook permite liberar acesso automaticamente apos confirmacao.
- A API se encaixa bem em Next.js + Supabase + Resend.

Fluxo recomendado no MVP:

1. LP coleta nome e e-mail.
2. Backend cria cliente e cobranca no Asaas.
3. Usuario paga por Pix, cartao ou boleto.
4. Asaas envia webhook.
5. Sistema valida assinatura/token, busca cobranca e marca pedido como pago.
6. Sistema cria token de acesso.
7. Sistema envia e-mail com link privado.

## 6. Estrategia de entrega automatica

### Opcoes

- Enviar arquivo por e-mail: simples, mas ruim para seguranca, tamanho e pirataria.
- Link publico de download: facil, mas compartilhabilidade alta.
- Link privado temporario: melhor MVP.
- Pagina protegida por token: melhor equilibrio para MVP.
- Login e senha: melhor versao profissional, mas aumenta complexidade.
- Area de membros propria: ideal na fase 2.

### MVP recomendado

Pagina protegida por token + storage privado.

Fluxo:

1. PDF fica em bucket privado no Supabase Storage.
2. Apos pagamento aprovado, o sistema gera um `access_token` unico.
3. Cliente recebe e-mail com `/acesso/[token]`.
4. A pagina valida token, pedido pago e expiracao.
5. O backend gera signed URL temporaria para download.
6. Cada acesso fica registrado.

### Versao profissional

Area de membros com Supabase Auth Magic Link.

Recursos:

- Login por e-mail sem senha.
- Biblioteca de produtos comprados.
- Downloads com links temporarios.
- Reenvio de acesso.
- Painel administrativo de pedidos.
- Controle de reembolso e revogacao.

## 7. Arquitetura tecnica para Codex

### Stack recomendada

- Frontend/backend: Next.js App Router + TypeScript.
- UI: Tailwind CSS + shadcn/ui + lucide-react.
- Banco: Supabase Postgres.
- ORM: Prisma ou Drizzle. Para rapidez, Drizzle.
- Storage: Supabase Storage privado.
- E-mail: Resend.
- Pagamento: Asaas.
- Deploy: Vercel.
- Monitoramento inicial: logs da Vercel + tabela `webhook_events`.

### Estrutura de pastas

```txt
app/
  page.tsx
  checkout/page.tsx
  obrigado/page.tsx
  acesso/[token]/page.tsx
  admin/pedidos/page.tsx
  api/checkout/route.ts
  api/webhooks/asaas/route.ts
  api/access/[token]/route.ts
components/
  landing/
  checkout/
  shared/
lib/
  asaas.ts
  email.ts
  storage.ts
  db.ts
  security.ts
db/
  schema.ts
  migrations/
emails/
  purchase-approved.tsx
```

### Tabelas

`products`

- `id`
- `slug`
- `name`
- `price_cents`
- `file_path`
- `active`

`orders`

- `id`
- `product_id`
- `customer_name`
- `customer_email`
- `customer_document`
- `status`: `pending`, `paid`, `refunded`, `canceled`
- `amount_cents`
- `gateway`
- `gateway_payment_id`
- `checkout_url`
- `paid_at`

`access_tokens`

- `id`
- `order_id`
- `token_hash`
- `expires_at`
- `revoked_at`
- `last_used_at`

`webhook_events`

- `id`
- `gateway`
- `event_id`
- `event_type`
- `payload`
- `processed_at`

`email_logs`

- `id`
- `order_id`
- `to`
- `template`
- `provider_message_id`
- `sent_at`

### API routes

- `POST /api/checkout`: cria pedido local, cliente/cobranca no Asaas e retorna checkout/payment URL.
- `POST /api/webhooks/asaas`: valida token, garante idempotencia, atualiza pedido, cria acesso, envia e-mail.
- `GET /api/access/[token]`: valida token e retorna signed URL temporaria.
- `GET /admin/pedidos`: painel simples protegido por senha/admin auth.

### Variaveis de ambiente

```txt
NEXT_PUBLIC_SITE_URL=
DATABASE_URL=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_STORAGE_BUCKET=
ASAAS_API_KEY=
ASAAS_ENV=sandbox
ASAAS_WEBHOOK_TOKEN=
RESEND_API_KEY=
FROM_EMAIL=
ADMIN_PASSWORD_HASH=
```

### Seguranca

- Nunca expor `ASAAS_API_KEY` no frontend.
- Validar webhook por token/header e idempotencia.
- Buscar status do pagamento na API do gateway antes de liberar acesso, quando possivel.
- Armazenar hash do token, nao token puro.
- Signed URLs curtas: 5 a 15 minutos.
- Rate limit no endpoint de acesso.
- Revogar acesso em caso de reembolso.
- Termos, privacidade e reembolso visiveis no rodape.

## 8. Plano de implementacao em fases

### Fase 1 - Estrutura visual da LP

Pedido ao Codex:

> Crie um projeto Next.js com TypeScript, Tailwind e App Router para a landing page mobile first do produto Entre em Campo, usando a paleta verde campo, amarelo placar, branco e grafite. A primeira tela deve ser a experiencia real de venda, nao uma pagina institucional.

### Fase 2 - Componentes e responsividade

Pedido ao Codex:

> Crie componentes reutilizaveis para Hero, CTA, Timeline de 21 dias, Cards de conteudo, Oferta, Garantia, FAQ e Rodape. Garanta layout mobile first, sem texto estourando e com CTA claro.

### Fase 3 - Checkout

Pedido ao Codex:

> Implemente `/api/checkout` integrado ao Asaas em sandbox. O endpoint deve receber nome, e-mail, documento opcional e produto, criar pedido local e criar cobranca no Asaas, retornando a URL de pagamento.

### Fase 4 - Webhook

Pedido ao Codex:

> Crie `/api/webhooks/asaas` com validacao por token, idempotencia por ID de evento, atualizacao segura do pedido e logs em `webhook_events`.

### Fase 5 - E-mail automatico

Pedido ao Codex:

> Integre Resend para enviar e-mail de compra aprovada com link privado `/acesso/[token]`, registrando envio em `email_logs`.

### Fase 6 - Acesso ao curso

Pedido ao Codex:

> Crie pagina `/acesso/[token]` que valida token, pedido pago e expiracao; se valido, gera signed URL temporaria do arquivo no Supabase Storage privado.

### Fase 7 - Testes

Pedido ao Codex:

> Adicione testes para criacao de checkout, processamento idempotente de webhook, geracao de token de acesso e bloqueio de pedido nao pago.

### Fase 8 - Publicacao

Pedido ao Codex:

> Prepare o deploy na Vercel com checklist de variaveis de ambiente, dominio, URLs de webhook no Asaas, politicas legais e testes em sandbox antes de producao.

## 9. Prompts curtos para usar no Codex

1. Criar projeto:

> Crie a base de um app Next.js App Router com TypeScript, Tailwind, shadcn/ui e lucide-react para vender o produto digital Entre em Campo.

2. Design system:

> Configure tokens de cor, tipografia, botoes e cards para uma identidade de campo/placar: verde escuro, verde campo, amarelo, branco e grafite.

3. Landing page:

> Implemente a landing page mobile first com Hero, problema, checklist de dor, apresentacao do manual, timeline de 21 dias, conteudo, oferta, garantia, FAQ e rodape legal.

4. Oferta:

> Crie uma secao de oferta para o Manual Entre em Campo com preco de R$47, comparativo de valor, itens inclusos, formas de pagamento e CTA principal.

5. Checkout Asaas:

> Crie a integracao server-side com Asaas para gerar uma cobranca de pagamento unico e redirecionar o comprador para a URL de pagamento.

6. Banco:

> Adicione schema de banco para products, orders, access_tokens, webhook_events e email_logs usando Supabase Postgres e Drizzle.

7. Webhook:

> Implemente webhook do Asaas com validacao, idempotencia, atualizacao de status e liberacao automatica do acesso ao produto.

8. E-mail:

> Integre Resend e crie template de e-mail transacional para enviar o link privado de acesso apos pagamento confirmado.

9. Storage:

> Configure Supabase Storage privado para o PDF e gere signed URLs temporarias somente para pedidos pagos.

10. Admin:

> Crie painel simples `/admin/pedidos` para listar pedidos, status, e-mail do cliente, gateway ID, data de pagamento e reenvio de acesso.

11. Segurança:

> Revise a seguranca de webhooks, tokens de acesso, variaveis de ambiente, signed URLs, rate limit e dados sensiveis.

12. Deploy:

> Prepare deploy na Vercel, documente variaveis de ambiente, URL de webhook, testes sandbox e passos para producao.

## 10. Checklist antes de publicar

### Copy e oferta

- Hero comunica transformacao em ate 5 segundos.
- Preco R$47 esta claro.
- O visitante entende que e um desafio pratico de 21 dias.
- A objecao "e so PDF?" esta respondida.
- Garantia real definida.
- FAQ cobre acesso, formato, pagamento, garantia e suporte.

### Design

- Mockup real do manual no hero.
- Paleta consistente.
- CTA visivel no mobile.
- Textos sem estouro em telas pequenas.
- Timeline legivel no mobile.
- Oferta sem excesso de distracoes.

### Pagamento

- Asaas em sandbox testado.
- Pix, cartao e boleto configurados.
- URL de retorno configurada.
- Webhook em producao configurado.
- Idempotencia validada.

### Entrega

- PDF em storage privado.
- Token de acesso gerado apos pagamento.
- E-mail de acesso enviado.
- Signed URL temporaria funcionando.
- Reembolso revoga acesso.

### Legal e suporte

- Termos de uso.
- Politica de privacidade.
- Politica de reembolso.
- E-mail de suporte.
- Identificacao do vendedor/responsavel.
- Aviso de que resultados dependem da aplicacao individual.

## 11. Proxima decisao recomendada

Comecar pelo MVP com:

- LP em Next.js.
- Checkout hospedado do Asaas.
- Webhook Asaas.
- Entrega por pagina protegida por token.
- Supabase Storage privado.
- Resend para e-mail.

Essa combinacao entrega controle, evita dependencia de plataforma de infoproduto e mantem a complexidade baixa o suficiente para vender logo.

## 12. Fontes tecnicas consultadas

- Asaas - Criar nova cobranca: https://docs.asaas.com/reference/criar-nova-cobranca
- Asaas - Checkout: https://docs.asaas.com/docs/introdu%C3%A7%C3%A3o-1
- Asaas - Webhooks: https://docs.asaas.com/docs/sobre-os-webhooks
- Mercado Pago - Checkout Transparente: https://www.mercadopago.com.br/developers/pt/docs/checkout-api-orders/overview
- Mercado Pago - Webhooks: https://www.mercadopago.com.br/developers/pt/docs/your-integrations/notifications/webhooks
- Pagar.me - Pedido: https://docs.pagar.me/docs/overview-transacao
- Pagar.me - Checkout: https://docs.pagar.me/docs/checkout-about
- Pagar.me - Pix: https://docs.pagar.me/docs/pix-1
- Pagar.me - Webhooks: https://docs.pagar.me/docs/webhooks
- Iugu - Criar Fatura: https://dev.iugu.com/reference/criar-fatura
- Efi Bank - APIs para desenvolvedores: https://dev.efipay.com.br/
