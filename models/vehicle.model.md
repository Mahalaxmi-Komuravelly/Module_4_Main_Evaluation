## Vehicles

### Columns 

  - id uuid primary key default uuid_generate_v4(),
  - name text not null,
  -  registration_number text not null unique,
  - allowed_passengers int not null,
  - isAvailable boolean default true,
  - driver_id uuid,
  - rate_per_km int not null,
  - owner_id uuid not null,
  - created_at timestamp default now()