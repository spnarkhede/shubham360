# Chapter 4 — State Management and API Design
## State Libraries, GraphQL, REST, tRPC, and Real-Time

> Stage 2–3 | Mastering the data layer

---

## Chapter Overview

Data is the lifeblood of a frontend application. This chapter covers where state lives, how it moves, how it is fetched, and how to design the API contracts that connect your UI to backend systems. Poor choices here create the most expensive technical debt — they are the hardest to refactor later.

```
Chapter 4 Map

  4.1 State management decision framework
   ├── Categorizing state by ownership
   ├── Tool selection matrix
   └── When NOT to add a state library

  4.2 TanStack Query (React Query)
   ├── Core concepts (queries, mutations, cache)
   ├── Optimistic updates
   └── Prefetching and background refresh

  4.3 Zustand
   ├── Store patterns
   ├── Slices for large stores
   └── Middleware (persist, devtools)

  4.4 API design and integration
   ├── REST with OpenAPI 3.1
   ├── GraphQL (Apollo, Federation)
   ├── tRPC for full-stack TypeScript
   └── When to use each

  4.5 Real-time patterns
   ├── WebSockets
   ├── Server-Sent Events (SSE)
   ├── WebRTC
   └── MQTT for IoT
```

---

## 4.1 State Management Decision Framework

### 4.1.1 Categorize State First

Before choosing a library, categorize every piece of state in your application:

```
State Categories:

  SERVER STATE                 CLIENT STATE
  (data from backend)          (UI-only, no persistence)
  ─────────────────            ────────────────────────
  User profiles                Modal open/closed
  Product listings             Active tab
  Order history                Sidebar collapsed
  Notifications                Form step
  Dashboard metrics            Drag position

  → TanStack Query             → useState (local)
  → SWR                        → Zustand (shared)
  → RTK Query                  → XState (complex flows)


  URL STATE                    FORM STATE
  (shareable, bookmarkable)    (input values + validation)
  ─────────────────────────    ───────────────────────────
  Search query                 Contact form fields
  Filters applied              Registration wizard
  Active page                  Settings panel
  Sort order                   

  → URL params (nuqs)          → React Hook Form
  → Router state               → Zod for validation


  GLOBAL CONSTANTS             REAL-TIME STATE
  (rarely changes)             (pushed from server)
  ───────────────────          ──────────────────
  Theme (light/dark)           Chat messages
  User locale                  Live prices
  Feature flags                Presence indicators
  Auth status                  Device sensor data

  → Context API                → TanStack Query (polling)
  → Jotai atoms                → Zustand + WebSocket
                               → useSyncExternalStore
```

### 4.1.2 Tool Selection Matrix 2026

| Tool | Use When | Avoid When |
|------|----------|-----------|
| **TanStack Query** | Any server state — it's almost always the answer | Purely client-side state with no server interaction |
| **Zustand** | Shared UI state across distant components; ~3KB | You need Redux-style strict immutability enforcement |
| **Redux Toolkit** | Large team needing strict conventions; existing Redux codebase | New projects — Zustand covers 90% of needs with less code |
| **Jotai** | Fine-grained derived state; atom-based composition | Simple use cases — overhead isn't justified |
| **Context API** | Low-frequency global values (theme, auth, locale) | High-frequency updates — will cause re-renders everywhere |
| **React Hook Form** | All form state — this is the default | Server Actions-only forms with no client validation |
| **URL state (nuqs)** | Shareable views, pagination, filters | Sensitive data that shouldn't be in the URL |
| **XState** | Complex state machines (multi-step flows, async sequences) | Simple boolean/enum state |

### 4.1.3 When NOT to Add a State Library

Before reaching for Zustand or Redux, check if you need them:

```typescript
// Bad: using global state for what is really local state
const useModalStore = create(() => ({ isOpen: false }));
function ProfileModal() {
  const { isOpen, open, close } = useModalStore();
  return isOpen ? <Modal onClose={close} /> : null;
}
function OpenButton() {
  const open = useModalStore(s => s.open);
  return <button onClick={open}>Open Profile</button>;
}

// Good: local state is sufficient — they are in the same subtree
function ProfileSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Profile</button>
      {isOpen && <ProfileModal onClose={() => setIsOpen(false)} />}
    </>
  );
}
```

**Rule of thumb:** Start with `useState`. Lift state when siblings need it. Add a library only when the state genuinely needs to span unrelated parts of the component tree.

---

## 4.2 TanStack Query — Server State Management

### 4.2.1 Core Concepts

```typescript
import { QueryClient, QueryClientProvider, useQuery, useMutation } from '@tanstack/react-query';

// Setup: one QueryClient per application
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,       // data is fresh for 1 minute
      gcTime: 5 * 60 * 1000,      // keep in cache for 5 minutes (was cacheTime)
      retry: 3,                    // retry failed requests 3 times
      refetchOnWindowFocus: true,  // refetch when tab becomes active
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}
```

```typescript
// useQuery — fetch and cache data
function UserProfile({ userId }: { userId: string }) {
  const { data: user, isPending, isError, error } = useQuery({
    queryKey: ['user', userId],     // cache key — userId change = new request
    queryFn: () => fetchUser(userId),
    staleTime: 5 * 60 * 1000,      // override default for this query
    select: (data) => ({            // transform before returning to component
      name: data.name,
      initials: data.name.split(' ').map(n => n[0]).join(''),
    }),
  });

  if (isPending) return <UserSkeleton />;
  if (isError) return <ErrorMessage message={error.message} />;

  return <div>{user.name} ({user.initials})</div>;
}
```

### 4.2.2 Mutations and Cache Invalidation

```typescript
function AddProductForm() {
  const queryClient = useQueryClient();

  const createProduct = useMutation({
    mutationFn: (newProduct: NewProduct) => api.products.create(newProduct),

    // Invalidate affected queries after success — triggers background refetch
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },

    // Optimistic update with rollback
    onMutate: async (newProduct) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['products'] });

      // Snapshot the previous value
      const previousProducts = queryClient.getQueryData(['products']);

      // Optimistically update
      queryClient.setQueryData(['products'], (old: Product[]) => [
        ...old,
        { ...newProduct, id: 'temp-' + Date.now() },
      ]);

      return { previousProducts }; // context for onError rollback
    },

    onError: (err, newProduct, context) => {
      // Rollback on failure
      queryClient.setQueryData(['products'], context?.previousProducts);
    },

    onSettled: () => {
      // Always refetch to get server-confirmed data
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      createProduct.mutate(new FormData(e.currentTarget));
    }}>
      {/* form fields */}
      <button disabled={createProduct.isPending}>
        {createProduct.isPending ? 'Creating...' : 'Create Product'}
      </button>
    </form>
  );
}
```

### 4.2.3 Prefetching and Query Deduplication

```typescript
// Prefetch on hover — data ready before navigation
function ProductCard({ product }: { product: Product }) {
  const queryClient = useQueryClient();

  return (
    <article
      onMouseEnter={() => {
        queryClient.prefetchQuery({
          queryKey: ['product', product.id],
          queryFn: () => fetchProductDetails(product.id),
          staleTime: 10 * 1000,
        });
      }}
    >
      <Link to={`/products/${product.id}`}>{product.name}</Link>
    </article>
  );
}

// Parallel queries — no waterfall
function Dashboard() {
  const results = useQueries({
    queries: [
      { queryKey: ['stats', 'revenue'],   queryFn: fetchRevenue },
      { queryKey: ['stats', 'users'],     queryFn: fetchUserCount },
      { queryKey: ['stats', 'orders'],    queryFn: fetchOrderCount },
    ],
  });

  const [revenue, users, orders] = results;
  // All three queries start simultaneously
}
```

---

## 4.3 Zustand — Lightweight Global State

### 4.3.1 Basic Store

```typescript
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ThemeStore {
  mode: 'light' | 'dark';
  toggle: () => void;
  setMode: (mode: 'light' | 'dark') => void;
}

const useThemeStore = create<ThemeStore>()(
  devtools(
    persist(
      (set) => ({
        mode: 'light',
        toggle: () => set(state => ({ mode: state.mode === 'light' ? 'dark' : 'light' })),
        setMode: (mode) => set({ mode }),
      }),
      { name: 'theme-storage' } // persists to localStorage
    ),
    { name: 'ThemeStore' } // devtools name
  )
);

// Usage — only re-renders when `mode` changes
function ThemeToggle() {
  const { mode, toggle } = useThemeStore(state => ({
    mode: state.mode,
    toggle: state.toggle,
  }));
  return <button onClick={toggle}>{mode === 'light' ? '🌙' : '☀️'}</button>;
}
```

### 4.3.2 Slices Pattern for Large Stores

```typescript
// Split large stores into slices
type CartSlice = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

type NotificationSlice = {
  notifications: Notification[];
  addNotification: (n: Notification) => void;
  dismissNotification: (id: string) => void;
};

type AppStore = CartSlice & NotificationSlice;

const createCartSlice = (set: SetState<AppStore>): CartSlice => ({
  items: [],
  addItem: (item) => set(state => ({ items: [...state.items, item] })),
  removeItem: (id) => set(state => ({ items: state.items.filter(i => i.id !== id) })),
  clearCart: () => set({ items: [] }),
});

const createNotificationSlice = (set: SetState<AppStore>): NotificationSlice => ({
  notifications: [],
  addNotification: (n) => set(state => ({ notifications: [...state.notifications, n] })),
  dismissNotification: (id) => set(state => ({
    notifications: state.notifications.filter(n => n.id !== id)
  })),
});

const useAppStore = create<AppStore>()((...args) => ({
  ...createCartSlice(...args),
  ...createNotificationSlice(...args),
}));
```

---

## 4.4 API Design and Integration

### 4.4.1 REST with OpenAPI 3.1

REST remains the dominant API style (~70% of full-stack JS job requirements). OpenAPI 3.1 aligns with JSON Schema, enabling type generation:

```yaml
# openapi.yaml — define your contract first
openapi: "3.1.0"
info:
  title: Product API
  version: "1.0.0"
paths:
  /products:
    get:
      operationId: listProducts
      parameters:
        - name: category
          in: query
          schema: { type: string }
        - name: page
          in: query
          schema: { type: integer, default: 1 }
      responses:
        "200":
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items: { $ref: "#/components/schemas/Product" }
                  meta:
                    $ref: "#/components/schemas/PaginationMeta"
```

```typescript
// Generate types from OpenAPI spec
// npx openapi-typescript openapi.yaml -o src/types/api.ts

import type { paths } from './types/api';
import createClient from 'openapi-fetch';

const client = createClient<paths>({ baseUrl: '/api' });

// Type-safe API calls — parameters and responses are inferred
const { data, error } = await client.GET('/products', {
  params: { query: { category: 'electronics', page: 2 } },
});
// data.data is Product[] — TypeScript knows this
```

### 4.4.2 GraphQL — When to Use It

GraphQL is in ~25% of full-stack listings, declining for new projects but entrenched at scale.

```typescript
// Apollo Client setup
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Product: {
        keyFields: ['id'],
        fields: {
          reviews: {
            // Paginated field: merge instead of replace
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

// Query with type generation (codegen)
const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      price
      inStock
      category {
        id
        name
      }
    }
  }
`;

function ProductDetail({ id }: { id: string }) {
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { id },
  });
  // ...
}
```

**When GraphQL is NOT the right choice:**

1. Simple CRUD app with a small team — REST + OpenAPI is faster to ship and easier to cache.
2. Public APIs — REST is universally understood; GraphQL requires clients to learn your schema.
3. The backend team cannot maintain a schema — without backend buy-in, the schema becomes a bottleneck.
4. Real-time dominant use cases — GraphQL subscriptions add complexity; WebSockets/SSE are more straightforward.
5. High cacheability needs — HTTP-level caching is trivial with REST, complex with GraphQL POST requests.

**When GraphQL is the right choice:**
- Complex, nested data with multiple optional fields where over-fetching is a real cost
- Multiple clients (mobile + web + partner) with different field needs
- Apollo Federation for multiple backend teams owning different graph sections

### 4.4.3 tRPC — Full-Stack TypeScript Type Safety

tRPC generates TypeScript types from server-side procedure definitions — no schema, no codegen:

```typescript
// Server: define procedures (Next.js/Hono/Express)
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

const appRouter = t.router({
  users: t.router({
    getById: t.procedure
      .input(z.object({ id: z.string() }))
      .query(async ({ input }) => {
        return db.users.findById(input.id);
      }),

    update: t.procedure
      .input(z.object({
        id: z.string(),
        name: z.string().min(1).max(100),
      }))
      .mutation(async ({ input }) => {
        return db.users.update(input.id, { name: input.name });
      }),
  }),
});

export type AppRouter = typeof appRouter;

// Client: fully typed — same as importing from server
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../server/router';

const trpc = createTRPCReact<AppRouter>();

function UserProfile({ id }: { id: string }) {
  const user = trpc.users.getById.useQuery({ id });
  const updateUser = trpc.users.update.useMutation();

  // user.data is fully typed — no casting, no codegen step
  return (
    <div>
      <h1>{user.data?.name}</h1>
      <button onClick={() => updateUser.mutate({ id, name: 'New Name' })}>
        Update
      </button>
    </div>
  );
}
```

### 4.4.4 API Comparison for 2026 Architecture Decisions

```
API Style Decision Tree:

Q1: Is this a full-stack TypeScript monorepo (Next.js, Nuxt)?
  Yes → tRPC is the strongest choice for internal APIs
  No  → Q2

Q2: Do multiple different clients (mobile, web, partners) need different fields?
  Yes → GraphQL (especially with Federation for microservices)
  No  → Q3

Q3: Is the team and backend already using OpenAPI/Swagger?
  Yes → REST + openapi-typescript
  No  → REST is still the safe default

Q4: Is the API public (consumed by third parties)?
  Yes → REST with OpenAPI 3.1 documentation
  No  → tRPC or GraphQL for internal use

Summary by team size:
  1-5 developers  → tRPC (type-safe, zero friction)
  5-20 developers → REST + OpenAPI or tRPC
  20+ developers  → GraphQL Federation or REST with strict contracts
  Mixed clients   → GraphQL
```

---

## 4.5 Real-Time Patterns

### 4.5.1 WebSockets — Bidirectional Communication

```typescript
// Custom hook: reconnecting WebSocket
function useWebSocket<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<'connecting' | 'open' | 'closed'>('connecting');
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeout = useRef<NodeJS.Timeout>();

  const connect = useCallback(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => setStatus('open');

    ws.onmessage = (event) => {
      try {
        setData(JSON.parse(event.data));
      } catch (e) {
        console.error('WS message parse error', e);
      }
    };

    ws.onclose = () => {
      setStatus('closed');
      // Exponential backoff reconnect
      reconnectTimeout.current = setTimeout(connect, 2000);
    };

    ws.onerror = () => ws.close();
  }, [url]);

  useEffect(() => {
    connect();
    return () => {
      clearTimeout(reconnectTimeout.current);
      wsRef.current?.close();
    };
  }, [connect]);

  const send = useCallback((message: unknown) => {
    wsRef.current?.send(JSON.stringify(message));
  }, []);

  return { data, status, send };
}
```

### 4.5.2 Server-Sent Events (SSE) — One-Way Streaming

SSE is now the preferred pattern for AI token streaming (ChatGPT-style) and unidirectional server push:

```typescript
// Server (Next.js route handler)
export async function GET(request: Request) {
  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();

      // Send events in SSE format
      function send(data: string) {
        controller.enqueue(encoder.encode(`data: ${data}\n\n`));
      }

      // Example: stream AI response tokens
      for await (const token of aiModel.stream(prompt)) {
        send(JSON.stringify({ token }));
      }

      // Signal completion
      send(JSON.stringify({ done: true }));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}

// Client
function AIResponse({ prompt }: { prompt: string }) {
  const [tokens, setTokens] = useState<string[]>([]);

  useEffect(() => {
    const eventSource = new EventSource(`/api/stream?prompt=${encodeURIComponent(prompt)}`);

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.done) {
        eventSource.close();
        return;
      }
      setTokens(prev => [...prev, data.token]);
    };

    return () => eventSource.close();
  }, [prompt]);

  return <p>{tokens.join('')}</p>;
}
```

### 4.5.3 MQTT for IoT Frontends

MQTT over WebSocket is the standard for IoT device communication — used at Bosch, Kärcher, STIHL:

```typescript
import mqtt from 'mqtt';

function useDeviceData(deviceId: string) {
  const [sensorData, setSensorData] = useState<SensorReading | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const client = mqtt.connect('wss://broker.example.com:8884', {
      username: process.env.MQTT_USERNAME,
      password: process.env.MQTT_PASSWORD,
      clientId: `dashboard-${Math.random().toString(16).slice(2)}`,
    });

    client.on('connect', () => {
      setConnected(true);
      // Subscribe to device topics
      client.subscribe([
        `devices/${deviceId}/temperature`,
        `devices/${deviceId}/humidity`,
        `devices/${deviceId}/status`,
      ]);
    });

    client.on('message', (topic, payload) => {
      const data = JSON.parse(payload.toString());
      setSensorData(prev => ({ ...prev, ...data, timestamp: Date.now() }));
    });

    client.on('disconnect', () => setConnected(false));

    return () => {
      client.end();
    };
  }, [deviceId]);

  return { sensorData, connected };
}
```

---

## Chapter 4 — Interview Questions

### Q5: What is the difference between monolithic and modular front-end architecture?

**Answer:**
A **monolithic frontend** bundles the entire application into a single deployable unit. All teams work in the same codebase, share the same build pipeline, and release together. This is simple to start and works well for small teams. It becomes problematic when the team grows — a change in one feature can break another, build times increase, and every team must coordinate releases.

A **modular frontend** divides the application into independently deployable and maintainable modules with clear boundaries and explicit interfaces. Modules can be:
- **Npm packages** in a monorepo (shared component library, utility functions)
- **Micro-frontends** (separately deployed, independently built applications composed at runtime)
- **Feature modules** (code-organized but still deployed together)

**The trade-off:**
- Monolithic: simpler tooling, one build, shared dependencies — right for most teams under 15–20 engineers
- Modular: independent deployments, team autonomy — justified at 50+ frontend engineers with distinct team ownership

The decision is not binary. Most large applications land on "modular monolith" — organized by module boundaries in the codebase but deployed together, with clear interfaces between modules that could become hard boundaries later.

---

## Chapter 4 Summary

```
What you should now know:

State Categories
  ✓ Server state → TanStack Query
  ✓ Client UI state → useState / Zustand
  ✓ Form state → React Hook Form
  ✓ URL state → nuqs / router params
  ✓ Global constants → Context API

TanStack Query
  ✓ queryKey design (cache invalidation depends on it)
  ✓ Optimistic updates with rollback pattern
  ✓ Parallel queries with useQueries
  ✓ Prefetching on hover/intersection

Zustand
  ✓ devtools + persist middleware
  ✓ Slice pattern for large stores
  ✓ Granular selectors to minimize re-renders

API Integration
  ✓ REST + openapi-typescript for type safety
  ✓ GraphQL: when to use and when NOT to
  ✓ tRPC: full-stack type safety without codegen
  ✓ Decision matrix by team size and use case

Real-Time
  ✓ WebSockets: bidirectional, with reconnect logic
  ✓ SSE: one-way streaming, AI token streaming
  ✓ MQTT over WebSocket for IoT
```

**Next:** Chapter 5 — Performance, Security, and Accessibility at Scale
