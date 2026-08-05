# Hi, I'm Shrinish Vhanbatte 👋

**Backend + AI systems engineer** — Member of Technical Staff at [TestMu AI (formerly LambdaTest)](https://www.testmuai.com/), building high-throughput microservices and AI-powered testing infrastructure. Dual Degree (B.Tech + M.Tech), IIT Kharagpur.

I like problems where distributed systems and LLMs meet: agents that call real tools, eval pipelines that keep them honest, and the queues, caches, and databases underneath.

## 🔭 What I'm building

- **[Capia](https://github.com/shrinish123/capia)** ([live](https://capia-ai.netlify.app) · [demo](https://www.youtube.com/watch?v=b5rb05fCCHs)) — autonomous agentic commerce. Describe a purchase in your own words; it compiles into a typed rule, watches live merchant catalogues over Shopify UCP, and buys when your conditions fire — inside a spend cap enforced by the Visa network via passkey-approved mandates, not by an `if` statement. The agent deliberately has no tool to raise a limit or approve spend. Four surfaces: web chat, voice, WhatsApp, and an MCP server over streamable HTTP. FastAPI + Postgres + Next.js, 286 passing tests.
- **[AgentCI](https://github.com/shrinish123/agentci)** — CI/CD & eval platform for AI agents. Eval suites fan out across a model × parameter matrix, get scored by a two-stage LLM-as-judge, and produce baseline diffs, flakiness scores, and a pass/warn/fail CI gate. FastAPI control plane (REST + WebSocket + MCP server), Kafka workers, Postgres + ClickHouse.
- **[Fivo](https://github.com/shrinish123/fivo)** ([live](https://fivoai.netlify.app)) — voice-first personal-finance agent. Tool-calling agent that manages accounts, transactions, and budgets from speech, backed by a RAG pipeline on pgvector with Voyage AI embeddings. Async FastAPI, SQLAlchemy 2, Redis, Celery.

## 💼 What I do at work

- Engineered a high-performance **Visual Engine** (C++/Python, AWS Lambda, Docker) powering smart image comparisons — boosted product revenue by 20%
- Built Go microservices with **Kafka-driven** event flows: scheduler service, CRUD APIs, multi-baseline screenshot comparison with Redis-coordinated goroutine fan-out
- Added **network-log capture to KaneAI** real-device sessions via a MITM proxy in the HyperExecute VM flow, powering AI test authoring

## 🛠 Toolbox

`Go` `Python` `C++` `TypeScript` `SQL`
`FastAPI` `gRPC` `Kafka` `Redis` `MySQL` `PostgreSQL/pgvector` `ClickHouse` `AWS` `Docker` `Kubernetes`
`LLM agents & tool calling` `RAG` `LLM-as-judge evals` `MCP servers` `agent authority scoping` `LangChain` `Datadog`

## 🏆 Elsewhere

- **LeetCode 2140** (top 1.46%) · Codeforces 1529 · CodeChef 1812 — handle: `bhatte`
- Global rank **865** in Google Kick Start Round H 2022 · rank 1531 in Meta Hacker Cup Round 2
- 🥇 **Gold**, Inter-IIT Tech Meet 10.0 — large-scale system design (Mercari)
- Mentored 10+ students via KOSS · contributor to Rocket.Chat

## 📫 Reach me

[LinkedIn](https://www.linkedin.com/in/shrinish-vhanbatte-972b11193/) · [shrinishiitkgp2001@gmail.com](mailto:shrinishiitkgp2001@gmail.com)
