create extension if not exists pgcrypto;

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  price_cents integer not null check (price_cents > 0),
  file_path text not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id),
  customer_name text not null,
  customer_email text not null,
  customer_document text,
  status text not null default 'pending' check (status in ('pending', 'paid', 'refunded', 'canceled')),
  amount_cents integer not null check (amount_cents > 0),
  gateway text not null default 'asaas',
  gateway_customer_id text,
  gateway_payment_id text unique,
  checkout_url text,
  paid_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.access_tokens (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  token_hash text not null unique,
  expires_at timestamptz not null,
  revoked_at timestamptz,
  last_used_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.webhook_events (
  id uuid primary key default gen_random_uuid(),
  gateway text not null,
  event_id text not null unique,
  event_type text not null,
  payload jsonb not null,
  processed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.email_logs (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references public.orders(id) on delete set null,
  to_email text not null,
  template text not null,
  status text not null check (status in ('sent', 'skipped', 'failed')),
  provider_message_id text,
  sent_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists orders_customer_email_idx on public.orders(customer_email);
create index if not exists orders_status_idx on public.orders(status);
create index if not exists access_tokens_order_id_idx on public.access_tokens(order_id);
create index if not exists webhook_events_event_type_idx on public.webhook_events(event_type);

alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.access_tokens enable row level security;
alter table public.webhook_events enable row level security;
alter table public.email_logs enable row level security;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'courses',
  'courses',
  false,
  52428800,
  array['application/pdf']
)
on conflict (id) do update
set public = false,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;
