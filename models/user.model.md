## Users

### columns
- id uuid primary key default uuid_generate_v4()
- name text not null
- email text not null unique,
- password text not null
- role text not null
- created_at timestamp default now()
