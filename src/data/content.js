// Single source of truth for everything on the site.
// Mirrors the resume so copy only has to change in one place.

export const profile = {
  name: "Shrinish Vhanbatte",
  handle: "bhatte",
  role: "Backend & Agentic AI Engineer",
  tagline:
    "I build the distributed guts behind AI products — event-driven services in Go and Python, tool-calling agents, and the eval harnesses that keep them honest.",
  location: "Noida, UP, India",
  email: "shrinishiitkgp2001@gmail.com",
  phone: "+91 7350032932",
  resumeUrl: "/Shrinish_Vhanbatte.pdf",
  socials: {
    github: "https://github.com/shrinish123",
    linkedin: "https://www.linkedin.com/in/bhatte/",
    twitter: "https://twitter.com/bhattetweets",
    leetcode: "https://leetcode.com/bhatte/",
  },
  roles: [
    "Member of Technical Staff @ TestMu AI",
    "Distributed Systems Engineer",
    "Agentic AI / LLM Infrastructure",
    "Go · C++ · Python",
  ],
};

export const stats = [
  { value: "2+", label: "yrs shipping production backends" },
  { value: "2140", label: "LeetCode peak · top 1.46%" },
  { value: "40%", label: "query latency cut in Go services" },
  { value: "20%", label: "revenue lift from Visual Engine" },
];

// Fake-but-plausible agent trace rendered in the hero terminal.
export const trace = [
  { t: "boot", text: "agent.runtime init — model=claude-opus, tools=14", tone: "muted" },
  { t: "plan", text: "plan: fan out eval suite across model × param matrix", tone: "violet" },
  { t: "tool", text: "kafka.publish(topic=eval.runs, partitions=12) → ok", tone: "mint" },
  { t: "tool", text: "pgvector.search(k=8, ns=transactions) → 8 hits in 11ms", tone: "mint" },
  { t: "judge", text: "llm_judge.batch(n=64) → pass=61 warn=2 fail=1", tone: "amber" },
  { t: "diff", text: "baseline diff: +0.4% accuracy, flakiness 0.02", tone: "violet" },
  { t: "gate", text: "ci.gate → PASS · cost $0.83 / budget $5.00", tone: "mint" },
  { t: "done", text: "run complete in 42.7s — artifacts → clickhouse", tone: "muted" },
];

export const experience = [
  {
    company: "TestMu AI (formerly LambdaTest)",
    role: "Member of Technical Staff",
    period: "Apr 2024 — Present",
    stack: ["C++", "Go", "Python", "Kafka", "AWS Lambda", "Redis", "MySQL", "Docker"],
    points: [
      "Engineered a high-performance Visual Engine in C++ (with Python + AWS Lambda + Docker) running smart image-comparison algorithms at scale — lifted product revenue by 20%.",
      "Built a layout-comparison algorithm that renders visual diffs, and wired it across Go, JS and Python microservices over Kafka and Lambda.",
      "Designed a scheduler microservice that manages cron-driven web scans, backed by MySQL with Kafka for event-driven fan-out.",
      "Shipped CRUD APIs in Go, killed race conditions, and optimized SQL queries for a 40% performance improvement.",
      "Built a multi-baseline screenshot comparison subsystem: variation schema, Redis-coordinated parallel fan-out over goroutines, deterministic best-match resolution — exposed through dashboard and public APIs.",
      "Added network-log capture to KaneAI real-device sessions by embedding a MITM proxy into the HyperExecute VM flow, feeding full HTTP traffic into AI-driven test authoring.",
    ],
  },
  {
    company: "TCG Digital",
    role: "SDE Intern",
    period: "May 2023 — Jul 2023",
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    points: [
      "Built a web app that generates source code and Dockerfiles for full CRUD applications from user-supplied specs.",
      "Added CSV-driven seeding so generated apps boot pre-populated with real data.",
    ],
  },
];

export const projects = [
  {
    name: "Capia",
    blurb: "Autonomous agentic commerce",
    period: "Aug 2026",
    accent: "mint",
    status: "shipped",
    description:
      "Say what you want and what you'll pay, approve once with a passkey, and close the laptop. Capia compiles your words into a typed purchase rule, watches live merchant catalogues over Shopify's UCP, and buys the moment your conditions fire — inside a spend cap enforced by the Visa network rather than by application code.",
    highlights: [
      "Passkey-approved payment mandates: network-enforced caps, single-use Visa credentials, no reusable card number held",
      "Capability-scoped agent authority — the tools to raise a limit or approve spend simply do not exist",
      "Four surfaces on one core: web chat, voice, WhatsApp, and an MCP server over streamable HTTP",
      "FastAPI + Postgres + Next.js, 286 passing tests, one-command Docker bring-up",
    ],
    stack: ["Python", "FastAPI", "Postgres", "Next.js", "MCP", "WebAuthn"],
    links: {
      github: "https://github.com/shrinish123/capia",
      demo: "https://capia-ai.netlify.app",
    },
  },
  {
    name: "AgentCI",
    blurb: "CI/CD & evaluation platform for AI agents",
    period: "Jul 2026 — Present",
    accent: "mint",
    status: "building",
    description:
      "A regression-testing and eval pipeline for AI agents. Versioned eval suites fan out across a model × parameter matrix, get scored by a batched two-stage LLM-as-judge, and land as baseline diffs with flakiness scoring across repeated runs — behind a pass/warn/fail CI gate.",
    highlights: [
      "FastAPI control plane exposing REST, WebSocket and an MCP server",
      "Kafka runner/judge workers with a dead-letter queue",
      "Postgres for OLTP + ClickHouse for analytics",
      "Per-provider rate limiting and per-run cost budgets",
    ],
    stack: ["Python", "FastAPI", "Kafka", "ClickHouse", "Postgres", "MCP"],
    links: { github: "https://github.com/shrinish123/agentci" },
  },
  {
    name: "Fivo",
    blurb: "Voice-first personal finance agent",
    period: "May 2026 — Present",
    accent: "violet",
    status: "building",
    description:
      "Backend for a voice-first finance product: an async FastAPI + SQLAlchemy 2 layered architecture with JWT auth, Alembic migrations, Redis, Celery workers and MinIO/S3 — fully Dockerized.",
    highlights: [
      "Tool-calling voice agent with a typed tool registry and structured response envelope",
      "Executes account, transaction and budget operations straight from speech",
      "RAG pipeline with Voyage AI embeddings indexed and retrieved via pgvector",
    ],
    stack: ["Python", "FastAPI", "pgvector", "Redis", "Celery", "Docker"],
    links: { github: "https://github.com/shrinish123/fivo", demo: "https://fivoai.netlify.app" },
  },
  {
    name: "Resume Ranking with LLMs",
    blurb: "Relevance engine for hiring pipelines",
    period: "Dec 2023",
    accent: "amber",
    status: "shipped",
    description:
      "Full-stack app that ranks a pile of resumes against a job description using a LangChain + LlamaIndex relevance engine.",
    highlights: [
      "Django backend orchestrating the retrieval + scoring chain",
      "Next.js + Tailwind frontend for side-by-side ranked review",
    ],
    stack: ["Django", "LangChain", "LlamaIndex", "Next.js", "Tailwind"],
    links: { github: "https://github.com/shrinish123/resume_ranking_backend" },
  },
  {
    name: "letsUpsolve",
    blurb: "Upsolving & analytics for competitive programmers",
    period: "Open source",
    accent: "mint",
    status: "shipped",
    description:
      "A web app that helps you upsolve Codeforces contests and surfaces analytics on your rating trajectory and problem-solving gaps. Maintained with KOSS contributors.",
    highlights: [
      "Contest-wise upsolve tracking against the Codeforces API",
      "Performance insights and weak-topic analysis",
    ],
    stack: ["React", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/shrinish123/lets-Upsolve",
      demo: "https://letsupsolve.netlify.app/",
    },
  },
];

export const skills = [
  {
    title: "Agentic AI",
    key: "ai",
    icon: "◈",
    items: [
      "LLM agents & tool calling",
      "RAG pipelines",
      "LLM-as-judge evals",
      "MCP",
      "LangChain",
      "LlamaIndex",
      "OpenAI / Anthropic APIs",
      "pgvector",
    ],
  },
  {
    title: "Languages",
    key: "lang",
    icon: "⌘",
    items: ["Go", "C++", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Backend & Distributed",
    key: "backend",
    icon: "⣿",
    items: [
      "Microservices",
      "REST",
      "gRPC",
      "Kafka",
      "Redis",
      "Celery",
      "FastAPI",
      "Event-driven design",
    ],
  },
  {
    title: "Data & Infra",
    key: "infra",
    icon: "▤",
    items: [
      "PostgreSQL",
      "MySQL",
      "ClickHouse",
      "AWS (Lambda, S3)",
      "Docker",
      "Kubernetes",
      "MinIO",
    ],
  },
];

export const achievements = [
  {
    title: "LeetCode peak rating 2140",
    detail: "Top 1.46% globally. 1812 on CodeChef, 1529 on Codeforces (handle: bhatte).",
    tag: "Competitive",
    link: "https://leetcode.com/bhatte/",
  },
  {
    title: "Gold — Inter-IIT Tech Meet 10.0",
    detail:
      "Mercari large-scale system design hackathon: proposed a cloud-native microservices architecture for a healthcare management system.",
    tag: "Mar 2022",
  },
  {
    title: "Google Kick Start — global rank 865",
    detail: "Round H 2022, plus rank 1440 in Round B 2022.",
    tag: "2022",
  },
  {
    title: "Meta Hacker Cup — global rank 1531",
    detail: "Round 2. T-shirt awarded to the top 2000 participants.",
    tag: "2022",
  },
  {
    title: "Best Feature Prize — Website Hackathon, IIT KGP",
    detail: "Notifications system built with Node.js / Express, among 30+ teams.",
    tag: "Apr 2022",
  },
  {
    title: "Open source & mentorship",
    detail:
      "Contributed PRs to Rocket.Chat. Mentored 10+ KOSS students across 2021–22 on projects like Mumble and letsUpsolve.",
    tag: "KOSS",
  },
];

export const education = {
  school: "Indian Institute of Technology, Kharagpur",
  degree: "Dual Degree (B.Tech + M.Tech), Civil Engineering",
  period: "2019 — 2024",
  score: "8.16 / 10 CGPA",
};

// Scrolling marquee under the hero.
export const marquee = [
  "Go",
  "C++",
  "Python",
  "Kafka",
  "Redis",
  "PostgreSQL",
  "ClickHouse",
  "FastAPI",
  "gRPC",
  "Docker",
  "Kubernetes",
  "AWS Lambda",
  "pgvector",
  "MCP",
  "LangChain",
  "RAG",
  "LLM-as-judge",
  "Celery",
];
