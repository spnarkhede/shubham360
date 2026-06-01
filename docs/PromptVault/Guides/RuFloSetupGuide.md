# RuFlo Setup Guide — Run 100+ AI Agents Inside Claude Code

> *The complete walkthrough for orchestrating intelligent multi-agent swarms inside Claude Code.*

**GitHub:** [github.com/ruvnet/ruflo](https://github.com/ruvnet/ruflo) · ⭐ 37.1k stars · 🍴 4.3k forks · MIT License

---

## What Is RuFlo?

RuFlo (formerly Claude Flow) is the leading open-source agent orchestration platform for Claude. It plugs directly into Claude Code and gives it a nervous system — turning a single AI session into a coordinated swarm of 100+ specialized agents that plan, code, test, review, and ship, all in parallel, all sharing memory.

> **Named by rUv:** "Ru" is the Ruv. "Flo" is the flow. Underneath, WASM kernels written in Rust power the policy engine, embeddings, and proof system.

### Headline Numbers

| Metric | Value |
|--------|-------|
| Token usage reduction | Up to 50% via smart model routing |
| Claude Code capacity extension | Up to 250% |
| Memory | Self-learning — agents improve after every run |
| SWE-Bench score | 84.8% (industry benchmark for software engineering) |
| License | 100% free and open source (MIT) |

---

## How It Works

```
User --> RuFlo (CLI/MCP) --> Router --> Swarm --> Agents --> Memory --> LLM Providers
                           ^                          |
                           +---- Learning Loop <------+
```

Instead of one Claude doing everything sequentially, you get a coordinated swarm running in parallel:

- **Queen agents** — manage the team, assign tasks, coordinate output
- **Tactical agents** — do the actual work (research, code, test, review, document)
- **Shared memory layer** — every agent sees what every other agent learned
- **Smart model router** — simple tasks go to cheap models, hard tasks go to powerful ones

> **New to RuFlo?** You don't need to learn 314 MCP tools or 26 CLI commands. After `init`, just use Claude Code normally — the hooks system automatically routes tasks, learns from successful patterns, and coordinates agents in the background.

---

## Before You Start — Prerequisites

| Requirement | Details |
|-------------|---------|
| Node.js 18+ | Download from [nodejs.org](https://nodejs.org) |
| Claude Code | Anthropic's official CLI for Claude |
| Claude subscription | Pro plan or above recommended |
| Terminal access | Mac Terminal, Windows PowerShell, or Linux shell |

**Quick check — run both of these in your terminal:**

```bash
node --version
claude --version
```

If both return version numbers, you're ready. If not, install whichever is missing first.

---

## Installation

### Option A — Claude Code Plugin (Recommended)

Install RuFlo as a native Claude Code plugin. This adds skills, commands, agents, and MCP tools directly into your Claude Code environment.

```
/plugin marketplace add ruvnet/ruflo

/plugin install ruflo-core@ruflo
/plugin install ruflo-swarm@ruflo
/plugin install ruflo-autopilot@ruflo
/plugin install ruflo-federation@ruflo
```

### Option B — One-Line CLI Install

```bash
curl -fsSL https://cdn.jsdelivr.net/gh/ruvnet/ruflo@main/scripts/install.sh | bash
```

### Option C — npx (No Global Install)

```bash
npx ruflo@latest init --wizard
```

### Option D — Global npm Install

```bash
npm install -g ruflo@latest
```

### Option E — MCP Server

```bash
claude mcp add ruflo -- npx -y @claude-flow/cli@latest
```

---

## Setup Steps

### Step 1 — Initialize RuFlo in Your Project

`cd` into the project folder where you want to use RuFlo, then run:

```bash
npx claude-flow@latest init
```

This sets up a `.claude/` folder inside your project containing:

| File/Folder | Purpose |
|-------------|---------|
| `settings.json` | Hook configuration |
| `agents/` | The 100+ agent definitions |
| `commands/` | Slash commands usable inside Claude Code |
| `CLAUDE.md` | Project instructions Claude reads at startup |

One init. Your project now has a nervous system.

---

### Step 2 — Connect RuFlo to Claude Code (MCP Server)

Register RuFlo as an MCP (Model Context Protocol) server so the agents can coordinate:

```bash
claude mcp add claude-flow npx claude-flow@alpha mcp start
```

Close and reopen Claude Code. Then verify it worked:

```
/mcp
```

You should see `claude-flow` listed as an active MCP server.

---

### Step 3 — Spawn Your First Swarm

Inside Claude Code, give it a real task and tell it to use the swarm:

```
Use the claude-flow swarm to build a REST API for a todo app. 
Spawn a researcher, a coder, a tester, and a reviewer. 
Run them in parallel and use hierarchical topology.
```

**What happens behind the scenes:**

1. RuFlo initializes a swarm with hierarchical topology
2. A queen agent coordinates the workflow
3. Tactical agents spawn in parallel — researcher pulls patterns, coder writes endpoints, tester writes tests, reviewer audits
4. All agents share the memory layer — the tester knows what the coder built without re-asking
5. Results stream back to your Claude Code session

---

### Step 4 — Let It Self-Learn

Every time the swarm completes a task, it stores learnings in the persistent memory layer. On subsequent runs it will:

- Remember your coding style
- Reuse patterns that worked
- Avoid approaches that failed
- Get faster and more accurate over time

**Search the memory layer manually:**

```bash
npx claude-flow@latest memory search -q "authentication patterns"
```

This is what makes RuFlo different from every other agent framework — it's not stateless. It compounds.

---

### Step 5 — Optimize Token Spend

RuFlo's 3-tier router automatically picks the right model for each subtask. It's on by default. To verify it's saving tokens:

```bash
npx claude-flow@latest performance benchmark --suite all
```

This runs a benchmark and shows exact token usage and cost breakdown.

---

## Plugin Marketplace — All 32 Plugins

### Core & Orchestration

| Plugin | What It Does |
|--------|-------------|
| `ruflo-core` | Foundation — server, health checks, plugin discovery |
| `ruflo-swarm` | Coordinate multiple agents as a team |
| `ruflo-autopilot` | Let agents run autonomously in a loop |
| `ruflo-loop-workers` | Schedule background tasks on a timer |
| `ruflo-workflows` | Reusable multi-step task templates |
| `ruflo-federation` | Agents on different machines collaborate securely |

### Memory & Knowledge

| Plugin | What It Does |
|--------|-------------|
| `ruflo-agentdb` | Fast vector database for agent memory |
| `ruflo-rag-memory` | Smart retrieval — hybrid search, graph hops, diversity ranking |
| `ruflo-rvf` | Save and restore agent memory across sessions |
| `ruflo-ruvector` | GPU-accelerated search, Graph RAG, 103 tools |
| `ruflo-knowledge-graph` | Build and traverse entity relationship maps |

### Intelligence & Learning

| Plugin | What It Does |
|--------|-------------|
| `ruflo-intelligence` | Agents learn from past successes and get smarter |
| `ruflo-daa` | Dynamic agent behavior and cognitive patterns |
| `ruflo-ruvllm` | Run local LLMs (Ollama, etc.) with smart routing |
| `ruflo-goals` | Break big goals into plans and track progress |

### Code Quality & Testing

| Plugin | What It Does |
|--------|-------------|
| `ruflo-testgen` | Find missing tests and generate them automatically |
| `ruflo-browser` | Automate browser testing with Playwright |
| `ruflo-jujutsu` | Analyze git diffs, score risk, suggest reviewers |
| `ruflo-docs` | Generate and maintain documentation automatically |

### Security & Compliance

| Plugin | What It Does |
|--------|-------------|
| `ruflo-security-audit` | Scan for vulnerabilities and CVEs |
| `ruflo-aidefence` | Block prompt injection, detect PII, safety scanning |

### Architecture & Methodology

| Plugin | What It Does |
|--------|-------------|
| `ruflo-adr` | Track architecture decisions with a living record |
| `ruflo-ddd` | Scaffold domain-driven design — contexts, aggregates, events |
| `ruflo-sparc` | Guided 5-phase development methodology with quality gates |

### DevOps & Observability

| Plugin | What It Does |
|--------|-------------|
| `ruflo-migrations` | Manage database schema changes safely |
| `ruflo-observability` | Structured logs, traces, and metrics in one place |
| `ruflo-cost-tracker` | Track token usage, set budgets, get cost alerts |

### Extensibility

| Plugin | What It Does |
|--------|-------------|
| `ruflo-wasm` | Run sandboxed WebAssembly agents |
| `ruflo-plugin-creator` | Scaffold, validate, and publish your own plugins |

### Domain-Specific

| Plugin | What It Does |
|--------|-------------|
| `ruflo-iot-cognitum` | IoT device management — trust scoring, anomaly detection, fleets |
| `ruflo-neural-trader` | AI trading with 4 agents, backtesting, 112+ tools |
| `ruflo-market-data` | Ingest market data, vectorize OHLCV, detect patterns |

---

## Claude Code: With vs. Without RuFlo

| Capability | Claude Code Alone | + RuFlo |
|-----------|-------------------|---------|
| Agent collaboration | Isolated, no shared context | Swarms with shared memory and consensus |
| Coordination | Manual orchestration | Queen-led hierarchy (Raft, Byzantine, Gossip) |
| Memory | Session-only | HNSW vector memory with sub-ms retrieval |
| Learning | Static behavior | SONA self-learning with pattern matching |
| Task routing | You decide | Intelligent routing (89% accuracy) |
| Background workers | None | 12 auto-triggered workers |
| LLM providers | Anthropic only | 5 providers with failover |
| Security | Standard | CVE-hardened with AIDefence |

---

## Web UI (Beta) — flo.ruv.io

RuFlo ships a hosted multi-model AI chat UI with built-in MCP tool calling. No install or API key needed to try it.

**Live demo:** [flo.ruv.io](https://flo.ruv.io/)

| Feature | Details |
|---------|---------|
| Models | Qwen 3.6 Max (default), Claude Sonnet 4.6, Claude Haiku 4.5, Gemini 2.5 Pro/Flash, OpenAI — via OpenRouter |
| Tools | ~210 MCP tools across 5 server groups |
| Parallel execution | One model response can fire 4–6+ tools simultaneously |
| Memory | Persistent via AgentDB + HNSW vector search (≥150× faster than brute force) |
| Custom MCP servers | Paste any MCP endpoint — HTTP, SSE, or stdio |
| Self-hostable | Docker image with embedded MongoDB (`ruflo/src/ruvocal/Dockerfile`) |

---

## Goal Planner — goal.ruv.io

Turn high-level goals into executable agent plans using Goal-Oriented Action Planning (GOAP).

**Live:** [goal.ruv.io](https://goal.ruv.io/) · Live agents: [goal.ruv.io/agents](https://goal.ruv.io/agents)

Describe an outcome in plain English — RuFlo decomposes it into preconditions, actions, and an A\* path through state space, then dispatches work to live agents. The planner reruns A\* on failure instead of restarting, and every outcome is stored in AgentDB for future runs.

---

## Agent Federation

RuFlo enables secure agent collaboration across machines, organizations, and cloud regions — without leaking data.

```
Your Agent --> [ Strip PII ] --> [ Sign message ] --> [ Encrypted channel ]
                                                              |
                                                              v
Their Agent <-- [ Block attacks ] <-- [ Verify identity ] <--+
                                 Audit trail on both sides.
```

**Setup:**

```bash
# Initialize federation and generate keypair
npx claude-flow@latest federation init

# Join a remote federation endpoint
npx claude-flow@latest federation join wss://team-b.example.com:8443

# Send a task — PII is stripped automatically before it leaves
npx claude-flow@latest federation send --to team-b --type task-request \
  --message "Analyze transaction patterns for account anomalies"

# Check peer trust levels
npx claude-flow@latest federation status
```

**Trust model:** agents start untrusted. Identity is proven via mTLS + ed25519 challenge-response. Trust scores update continuously based on behavior (success rate, uptime, threat history, integrity). Upgrades require history; downgrades are instant.

---

## Commands Cheat Sheet

| Task | Command |
|------|---------|
| Initialize project | `npx claude-flow@latest init` |
| Add MCP server to Claude Code | `claude mcp add claude-flow npx claude-flow@alpha mcp start` |
| Spawn an agent | `npx claude-flow@latest agent spawn -t coder` |
| Initialize a swarm | `npx claude-flow@latest swarm init` |
| Search memory | `npx claude-flow@latest memory search -q "your query"` |
| Run diagnostics | `npx claude-flow@latest doctor --fix` |
| Performance benchmark | `npx claude-flow@latest performance benchmark` |

---

## Best Practices

**Use hierarchical topology for coding tasks.** Mesh and adaptive topologies are better for research and analysis. Hierarchical wins for engineering work.

**Batch your operations.** Instead of spawning agents one message at a time, batch them into a single message. RuFlo runs roughly 6× slower when coordination is split across multiple messages.

**Don't poll status constantly.** Spawn the swarm, then wait. Polling adds latency without adding value.

**Start small.** Begin with 3–4 agents on a single feature. Scale up to 60+ once you've seen it work end-to-end.

**Keep your CLAUDE.md sharp.** This is what every agent reads at session start. Include coding standards, project structure, and any context you want every agent to know automatically.

---

## Troubleshooting

**`claude-flow` command not recognized**
Use `npx claude-flow@latest [command]` instead of a global install.

**MCP server not showing up in Claude Code**
Fully quit and restart Claude Code. The MCP list only refreshes on launch.

**Swarm runs sequentially instead of in parallel**
You're likely batching incorrectly. Check the wiki: [github.com/ruvnet/ruflo/wiki/CLAUDE](https://github.com/ruvnet/ruflo/wiki/CLAUDE)

**Hitting rate limits**
The router handles this automatically, but if you're consistently hitting limits, drop `max-agents` from 8 to 4 and increase gradually.

---

## Setup Checklist

- [ ] Node.js 18+ installed (`node --version`)
- [ ] Claude Code installed and working (`claude --version`)
- [ ] RuFlo initialized in your project (`npx claude-flow@latest init`)
- [ ] MCP server connected (`claude mcp add claude-flow ...`)
- [ ] Claude Code restarted and `/mcp` shows `claude-flow`
- [ ] First swarm prompt tested and running
- [ ] Memory search working (`npx claude-flow@latest memory search`)
- [ ] CLAUDE.md populated with project context

---

## Resources

| Resource | Link |
|----------|------|
| GitHub Repository | [github.com/ruvnet/ruflo](https://github.com/ruvnet/ruflo) |
| Wiki & Full Docs | [github.com/ruvnet/ruflo/wiki](https://github.com/ruvnet/ruflo/wiki) |
| User Guide | [docs/USERGUIDE.md](https://github.com/ruvnet/ruflo/blob/main/docs/USERGUIDE.md) |
| CLAUDE.md Reference | [CLAUDE.md](https://github.com/ruvnet/ruflo/blob/main/CLAUDE.md) |
| Plugin Marketplace | [ruvnet.github.io/ruflo](https://ruvnet.github.io/ruflo) |
| Web UI (Beta) | [flo.ruv.io](https://flo.ruv.io/) |
| Goal Planner | [goal.ruv.io](https://goal.ruv.io/) |
| Community Discord | [Agentics Foundation](https://discord.com/invite/dfxmpwkG2D) |
| Enterprise | [ruv.io](https://ruv.io) |
| Issues & Bugs | [GitHub Issues](https://github.com/ruvnet/ruflo/issues) |

---

*Latest release: Ruflo v3.6.10 — 32 Plugins, Agent Federation, IoT Cognitum (April 30, 2026)*
*License: MIT · Powered by [Cognitum.one](https://cognitum.one)*http://localhost:3000/tech-enthusiast/tools-collection