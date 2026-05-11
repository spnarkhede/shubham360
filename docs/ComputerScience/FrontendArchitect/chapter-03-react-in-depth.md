# Chapter 3 — React In Depth
## Patterns, Hooks, the Compiler, and Server Components

> Stage 2–3 | The core of most enterprise frontend stacks

---

## Chapter Overview

React is the dominant choice in enterprise frontend, appearing in the majority of Frontend Architect roles. This chapter goes deep on the mental models, not just the API. You will understand why React makes the choices it does, which patterns work at scale, and how the React Compiler and Server Components change what good React code looks like in 2026.

```
Chapter 3 Map

  3.1 React mental model
   ├── The rendering model
   ├── Reconciliation and the fiber architecture
   └── Concurrent features

  3.2 Hooks — deep understanding
   ├── useState, useEffect, useReducer
   ├── useRef, useContext, useMemo, useCallback
   ├── Concurrent hooks (useTransition, useDeferredValue)
   ├── React 19 hooks (use, useOptimistic, useFormStatus)
   └── Custom hooks patterns

  3.3 Component patterns
   ├── Compound components
   ├── Render props and slot pattern
   ├── Higher-order components (when still relevant)
   └── Controlled vs uncontrolled

  3.4 React Compiler
   ├── What it does
   ├── What changes in how you write code
   └── Rules of React

  3.5 React Server Components
   ├── Mental model: server vs client
   ├── Data fetching patterns
   └── When to use 'use client'
```

---

## 3.1 React Mental Model

### 3.1.1 The Rendering Model

React re-renders a component when its state or props change. Re-rendering means calling the component function again and computing new JSX output — it does **not** immediately update the DOM.

```
Component function called
        ↓
Returns JSX (React elements — plain objects describing UI)
        ↓
React diffing algorithm (reconciliation)
        ↓
Computes minimal set of DOM mutations needed
        ↓
Applies mutations to actual DOM (commit phase)
```

**Key insight:** Rendering is cheap. DOM mutations are expensive. React batches and minimizes DOM work.

**State updates are asynchronous and batched:**

```typescript
function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1); // schedules update
    setCount(count + 1); // schedules update (same count snapshot!)
    setCount(count + 1); // still same count!
    // Result: count goes from 0 to 1, not 0 to 3
  }

  // Correct: use the updater function to always work with latest state
  function handleClickCorrect() {
    setCount(c => c + 1); // 0 → 1
    setCount(c => c + 1); // 1 → 2
    setCount(c => c + 1); // 2 → 3
    // Result: count goes from 0 to 3
  }
}
```

### 3.1.2 Reconciliation — How React Diffs

React uses a **heuristic O(n) algorithm** rather than a true diff (O(n³)):

1. **Same type → update in place.** If the element type is the same, React updates the existing DOM node.
2. **Different type → destroy and recreate.** `<div>` changing to `<span>` — React removes the div subtree and creates a new span subtree.
3. **Lists use keys.** Without keys, React matches by position. With keys, React matches by identity.

```typescript
// Bad: using index as key breaks reconciliation when list reorders
{items.map((item, index) => (
  <ListItem key={index} data={item} />
))}

// Good: use a stable, unique identifier
{items.map(item => (
  <ListItem key={item.id} data={item} />
))}
```

**Why this matters architecturally:** Incorrect keys cause:
- Form input values to swap between items during reorder
- Animation state to persist on the wrong element
- Focus to be lost unexpectedly

### 3.1.3 Concurrent Features

React 18+ introduced the **concurrent renderer** — React can now pause, resume, and abandon renders.

```typescript
// useTransition — mark state updates as non-urgent
function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handleSearch(newQuery: string) {
    setQuery(newQuery); // urgent: update input immediately

    startTransition(() => {
      // non-urgent: can be interrupted if user types again
      setResults(searchProducts(newQuery));
    });
  }

  return (
    <>
      <SearchInput value={query} onChange={handleSearch} />
      {isPending && <Spinner />}
      <SearchResults items={results} />
    </>
  );
}

// useDeferredValue — defer a value until the browser is idle
function ProductList({ searchQuery }: { searchQuery: string }) {
  const deferredQuery = useDeferredValue(searchQuery);
  // deferredQuery lags behind searchQuery — list re-renders during idle time
  const results = expensiveFilter(products, deferredQuery);
  return <List items={results} />;
}
```

---

## 3.2 Hooks — Deep Understanding

### 3.2.1 useState — When and How

```typescript
// Simple: scalar values
const [isOpen, setIsOpen] = useState(false);
const [count, setCount] = useState(0);

// Object state: always spread to avoid overwriting
const [user, setUser] = useState<User>({ name: '', email: '' });

// Wrong: partial update loses other fields
const updateName = (name: string) => setUser({ name }); // loses email!

// Correct: spread existing state
const updateName = (name: string) => setUser(prev => ({ ...prev, name }));

// Lazy initialization: expensive initial value computed once
const [data] = useState(() => expensiveInitialComputation());

// When NOT to use useState:
// - Value derived from props → compute during render (no state)
// - Value that doesn't trigger re-renders → useRef
// - Related values that change together → useReducer
```

### 3.2.2 useEffect — The Most Misunderstood Hook

`useEffect` is for **synchronizing with external systems** — not for "run code after render."

```typescript
// Good uses of useEffect:
// 1. WebSocket connection
useEffect(() => {
  const ws = new WebSocket(url);
  ws.onmessage = (event) => setData(JSON.parse(event.data));

  return () => ws.close(); // cleanup is critical
}, [url]);

// 2. Browser APIs (document title, event listeners)
useEffect(() => {
  document.title = `${unreadCount} unread messages`;
}, [unreadCount]);

// 3. Subscribing to external store
useEffect(() => {
  const unsubscribe = store.subscribe(setSnapshot);
  return unsubscribe;
}, [store]);

// Bad uses — these should be removed:
// 1. Derived state
useEffect(() => {
  setFullName(`${firstName} ${lastName}`); // Don't! Just compute during render:
}, [firstName, lastName]);
// Correct: const fullName = `${firstName} ${lastName}`;

// 2. Resetting state when props change
useEffect(() => {
  setPage(0); // Don't! Use key prop instead:
}, [userId]);
// Correct: <UserPosts key={userId} userId={userId} />

// 3. Fetching data (in non-framework code)
// Use React Query or SWR — they handle caching, dedup, stale data
```

### 3.2.3 useReducer — Managing Complex State

When state has multiple sub-values that change together, or when next state depends on previous state in non-trivial ways:

```typescript
type CartState = {
  items: CartItem[];
  total: number;
  isLoading: boolean;
  error: string | null;
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'LOAD_START' }
  | { type: 'LOAD_SUCCESS'; payload: CartItem[] }
  | { type: 'LOAD_ERROR'; payload: string };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const items = [...state.items, action.payload];
      return { ...state, items, total: calculateTotal(items) };
    }
    case 'REMOVE_ITEM': {
      const items = state.items.filter(i => i.id !== action.payload);
      return { ...state, items, total: calculateTotal(items) };
    }
    case 'LOAD_START':
      return { ...state, isLoading: true, error: null };
    case 'LOAD_SUCCESS':
      return { ...state, isLoading: false, items: action.payload };
    case 'LOAD_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

function Cart() {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    isLoading: false,
    error: null,
  });
  // ...
}
```

### 3.2.4 useRef — Persistent Mutable Values

```typescript
// 1. DOM reference — does not cause re-renders
function TextInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return <input ref={inputRef} />;
}

// 2. Storing mutable value across renders without re-render
function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef(callback);

  // Keep ref current without restarting the interval
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

// 3. Previous value pattern
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>(undefined);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

### 3.2.5 Custom Hooks — Extracting Logic

```typescript
// Custom hook: data fetching with loading/error states
function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetchUser(userId)
      .then(data => { if (!cancelled) setUser(data); })
      .catch(err => { if (!cancelled) setError(err); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; }; // cleanup prevents state updates on unmounted component
  }, [userId]);

  return { user, loading, error };
}

// Custom hook: form field with validation
function useField(initialValue: string, validate: (v: string) => string | null) {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  const error = validate(value);

  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    onBlur: () => setTouched(true),
    error: touched ? error : null,
    isValid: error === null,
  };
}

// Custom hook: media query
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
```

---

## 3.3 Component Patterns

### 3.3.1 Compound Components

Compound components share state implicitly through context, allowing flexible composition without prop drilling:

```typescript
// Implementation
const TabsContext = createContext<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
} | null>(null);

function Tabs({ children, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }: { children: React.ReactNode }) {
  return <div role="tablist">{children}</div>;
}

function Tab({ id, children }: TabProps) {
  const ctx = useContext(TabsContext)!;
  return (
    <button
      role="tab"
      aria-selected={ctx.activeTab === id}
      onClick={() => ctx.setActiveTab(id)}
    >
      {children}
    </button>
  );
}

function TabPanel({ id, children }: TabPanelProps) {
  const ctx = useContext(TabsContext)!;
  if (ctx.activeTab !== id) return null;
  return <div role="tabpanel">{children}</div>;
}

Tabs.List  = TabList;
Tabs.Tab   = Tab;
Tabs.Panel = TabPanel;

// Usage — flexible, no prop threading
<Tabs defaultTab="general">
  <Tabs.List>
    <Tabs.Tab id="general">General</Tabs.Tab>
    <Tabs.Tab id="security">Security</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel id="general"><GeneralSettings /></Tabs.Panel>
  <Tabs.Panel id="security"><SecuritySettings /></Tabs.Panel>
</Tabs>
```

### 3.3.2 The Slot Pattern (Radix "asChild")

```typescript
// Slot: render the child element with merged props
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'primary' | 'ghost';
}

function Button({ asChild, variant = 'primary', className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={`btn btn-${variant} ${className}`} {...props} />;
}

// Usage: render as <a> tag without losing Button styling
<Button asChild variant="primary">
  <a href="/dashboard">Go to dashboard</a>
</Button>
// Renders: <a class="btn btn-primary" href="/dashboard">Go to dashboard</a>
```

### 3.3.3 Controlled vs Uncontrolled Components

```typescript
// Controlled: React owns the value — necessary for validation, derived state
function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}

// Uncontrolled: DOM owns the value — simpler, better for large forms
function UncontrolledForm() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    submitForm(Object.fromEntries(data));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" defaultValue="user@example.com" />
      <input name="password" type="password" />
      <button type="submit">Submit</button>
    </form>
  );
}

// React 19 + Server Actions: uncontrolled with progressive enhancement
async function updateProfile(formData: FormData) {
  'use server';
  await db.users.update(formData);
}

function ProfileForm({ user }: { user: User }) {
  return (
    <form action={updateProfile}>
      <input name="name" defaultValue={user.name} />
      <input name="bio" defaultValue={user.bio} />
      <SubmitButton /> {/* uses useFormStatus internally */}
    </form>
  );
}
```

---

## 3.4 React Compiler

### 3.4.1 What It Does

The React Compiler (formerly "Forget") is a **build-time optimization** that automatically memoizes components and hooks. It analyzes your code statically and inserts the equivalent of `memo`, `useMemo`, and `useCallback` everywhere they are needed — without you writing them.

**Before compiler (production code you write today):**
```typescript
const ProductList = memo(({ products, onAddToCart }: Props) => {
  const sortedProducts = useMemo(
    () => [...products].sort((a, b) => a.price - b.price),
    [products]
  );
  const handleAdd = useCallback(
    (id: string) => onAddToCart(id),
    [onAddToCart]
  );
  return <ul>{sortedProducts.map(p => <ProductItem key={p.id} onAdd={handleAdd} />)}</ul>;
});
```

**After compiler (what you write — compiler adds memoization):**
```typescript
function ProductList({ products, onAddToCart }: Props) {
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  return (
    <ul>
      {sortedProducts.map(p => (
        <ProductItem key={p.id} onAdd={() => onAddToCart(p.id)} />
      ))}
    </ul>
  );
}
```

**Result:** Less boilerplate, simpler code, no risk of incorrect dependency arrays.

### 3.4.2 Rules of React (Required for the Compiler)

The compiler enforces the Rules of React strictly. Violating them causes the compiler to skip optimization for that component:

1. **Components must be pure** — given the same props and state, always return the same JSX. No side effects during render.
2. **Hooks follow the Rules of Hooks** — called unconditionally, always in the same order, only at the top level of function components and custom hooks.
3. **Props and state are immutable** — never mutate them directly. Treat them as snapshots.
4. **Avoid writing to refs during render** — refs are for values that should not trigger re-renders.

---

## 3.5 React Server Components (RSC)

### 3.5.1 Mental Model: Server vs Client

```
Traditional SPA:
  Browser requests HTML → Gets near-empty HTML → Downloads JS bundle
  → JS executes → Fetches data → Renders UI

RSC (Next.js App Router):
  Browser requests → Server fetches data + renders HTML → Sends HTML
  → Browser displays → Minimal JS hydrates interactive parts

Result: Less JS on the client, faster FCP, data fetching on server
```

**The tree:**

```
app/page.tsx (Server Component — default)
  └── <ProductList /> (Server Component — fetches data from DB directly)
       ├── <ProductCard /> (Server Component)
       └── <AddToCartButton /> ('use client' — needs onClick handler)
            └── <Spinner /> (Server Component imported into client — valid!)
```

### 3.5.2 Data Fetching Patterns

```typescript
// Server Component: fetch data directly — no useEffect, no loading state
async function ProductPage({ params }: { params: { id: string } }) {
  // This runs on the server — can access database, filesystem, internal APIs
  const product = await db.products.findById(params.id);
  const relatedProducts = await db.products.findRelated(product.categoryId);

  return (
    <main>
      <ProductDetails product={product} />
      <RelatedProducts products={relatedProducts} />
      {/* Client component for interactivity */}
      <AddToCartButton productId={product.id} />
    </main>
  );
}

// Parallel fetching — avoids waterfalls
async function Dashboard() {
  // Both start simultaneously — no waterfall
  const [user, stats, notifications] = await Promise.all([
    fetchUser(),
    fetchStats(),
    fetchNotifications(),
  ]);

  return (
    <DashboardLayout user={user} stats={stats} notifications={notifications} />
  );
}

// Streaming with Suspense — show partial UI immediately
function ProductPage() {
  return (
    <main>
      <ProductHero /> {/* renders immediately */}
      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews /> {/* server component — streams in when ready */}
      </Suspense>
      <Suspense fallback={<RecommendationsSkeleton />}>
        <Recommendations /> {/* independent — doesn't block Reviews */}
      </Suspense>
    </main>
  );
}
```

### 3.5.3 When to Use 'use client'

```typescript
// Use 'use client' when you need:
// 1. Browser APIs (window, navigator, document)
// 2. Event handlers (onClick, onChange, onSubmit)
// 3. State (useState, useReducer)
// 4. Lifecycle (useEffect)
// 5. Context consumers (useContext)
// 6. Third-party libraries that use any of the above

'use client';
import { useState } from 'react';

// Push 'use client' as far down the tree as possible
// Bad: wrapping a large subtree in 'use client' unnecessarily
// Good: only the small interactive leaf node is a client component
export function QuantitySelector({ onChange }: { onChange: (n: number) => void }) {
  const [qty, setQty] = useState(1);
  return (
    <div>
      <button onClick={() => { setQty(q => q - 1); onChange(qty - 1); }}>-</button>
      <span>{qty}</span>
      <button onClick={() => { setQty(q => q + 1); onChange(qty + 1); }}>+</button>
    </div>
  );
}
```

---

## Chapter 3 — Interview Questions

### Q8: How do you manage state in large front-end applications?

**Answer:**
State management at scale requires categorizing state by *who owns it* and *how often it changes*:

**Server state** (most state in business applications) belongs in **TanStack Query** or SWR. These libraries give you caching, background refetching, stale-while-revalidate semantics, and optimistic updates without you managing loading/error states manually. They replaced Redux for server state in most modern stacks.

**Client UI state** (modal open/closed, active tab, sidebar collapsed) belongs in **component-level useState** when it affects only that component, or in **Zustand** when it needs to be shared across a subtree without prop drilling. Zustand is lightweight (~3KB), has no Provider boilerplate, and works well for transient UI state.

**Form state** belongs in **React Hook Form** — it keeps form values uncontrolled and only re-renders on submit/validation, which is 10–100× more performant than controlled inputs for complex forms.

**URL state** (search filters, pagination, active view) belongs in the URL — use `useSearchParams` or a library like `nuqs`. URL state is free persistence and shareable links.

**Global constants** (theme, user locale, auth status) belong in **Context API** — these change infrequently so the re-render cost is acceptable.

The most common mistake is reaching for Redux for everything. Redux's overhead is justified when you have complex client-side state with time-travel debugging needs — rarely the case in most business apps.

### Q9: What is unidirectional data flow and why is it important?

**Answer:**
Unidirectional data flow means data moves in one direction through the component tree: from parent to child via props, and from child back to parent via callback props. State lives as high as necessary in the tree and flows down.

```
Parent (holds state)
  ↓ props
  Child (reads state, triggers callbacks)
  ↑ callback (onAction)
  Parent updates state → re-renders → new props flow down
```

**Why it matters:**

1. **Predictability** — at any point you can trace where state lives and how it changes. There is one source of truth.

2. **Debuggability** — when a UI shows wrong data, you follow the prop chain up to the state owner. Compare this to two-way binding where any component could have mutated shared state.

3. **Testability** — components are pure functions of their props. You can test them in isolation by providing different props.

4. **Tooling** — React DevTools, Redux DevTools, and time-travel debugging are only possible because state changes are explicit and traceable.

The alternative — two-way binding (AngularJS 1.x style) — creates cycles where component A updates component B updates component A, making bugs nearly impossible to trace in large trees. Unidirectional flow eliminates this class of bugs entirely.

---

## Chapter 3 Summary

```
What you should now know:

React Mental Model
  ✓ Rendering model (function call → JSX → diff → DOM mutation)
  ✓ State updates are asynchronous and batched
  ✓ Reconciliation heuristics and the importance of keys
  ✓ Concurrent renderer (useTransition, useDeferredValue)

Hooks
  ✓ useState: updater function pattern
  ✓ useEffect: synchronizing with external systems (not lifecycle)
  ✓ useReducer: complex multi-value state
  ✓ useRef: DOM refs and mutable values
  ✓ Custom hooks: extracting logic, cancellation patterns
  ✓ React 19: use(), useOptimistic, useFormStatus, useActionState

Component Patterns
  ✓ Compound components with Context
  ✓ Slot/asChild pattern (Radix-style)
  ✓ Controlled vs uncontrolled trade-offs

React Compiler
  ✓ Auto-memoizes — write simple code, compiler optimizes
  ✓ Rules of React (purity, hooks rules, immutability)

React Server Components
  ✓ Mental model: fetch on server, send HTML, minimal JS
  ✓ Parallel fetching with Promise.all
  ✓ Streaming with Suspense
  ✓ Push 'use client' as far down the tree as possible
```

**Next:** Chapter 4 — State Management and API Design
