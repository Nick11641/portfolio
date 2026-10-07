-- ReBazos / Web2 — Supabase schéma
-- Spusti v Supabase Dashboard → SQL Editor → New query → Run

-- 1) Tabuľka inzerátov
create table if not exists ads (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  price numeric not null default 0,
  cat text default '',
  loc text default '',
  cond text default 'Použité',
  descr text default '',
  seller text default '',
  phone text default '',
  photo text default '',
  created_at timestamptz default now()
);

-- 2) Verejný prístup (bez prihlasovania — vhodné na začiatok)
alter table ads enable row level security;

drop policy if exists "public read ads" on ads;
create policy "public read ads" on ads for select using (true);

drop policy if exists "public insert ads" on ads;
create policy "public insert ads" on ads for insert with check (true);

drop policy if exists "public delete ads" on ads;
create policy "public delete ads" on ads for delete using (true);

-- 3) Bucket na fotky (verejný)
insert into storage.buckets (id, name, public)
values ('photos', 'photos', true)
on conflict (id) do update set public = true;

-- 4) Politiky pre fotky
drop policy if exists "public read photos" on storage.objects;
create policy "public read photos" on storage.objects
for select using (bucket_id = 'photos');

drop policy if exists "public upload photos" on storage.objects;
create policy "public upload photos" on storage.objects
for insert with check (bucket_id = 'photos');
