## trips

### columns
- id uuid primary key default uuid_generate_v4(),
- customer_id uuid not null,
- vehicle_id uuid not null,
- start_date text not null,
- end_date text not null,
- location text not null,
- distance_km int not null,
- passengers int not null,
- tripCost numeric(10,2) not null,
- isCompleted boolean default false,
- created_at timestamp default now()