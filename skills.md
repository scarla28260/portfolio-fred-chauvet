# Project Skills

This document integrates all the skills from `C:\CodeIA\.agent` and `C:\CodeIA\superpowers`.

## Skills from C:\CodeIA\.agent\skills

### automating-browser-sessions
- **Source**: `C:\CodeIA\.agent\skills\automating-browser-sessions\SKILL.md`
- **Description**: Automates browser tasks using the `browser-use` CLI. Use when the user requests persistent browser automation, data extraction from complex web apps, or AI agent browser tasks. Supports persistent sessions, Python execution, and AI mode.

### api-auditor
- **Source**: `C:\CodeIA\.agent\skills\basic-sample-api-auditor\SKILL.md`
- **Description**: Expertise in auditing and testing API endpoints. Use when the user asks to

### performing-fastmcp-development
- **Source**: `C:\CodeIA\.agent\skills\performing-fastmcp-development\SKILL.md`
- **Description**: Builds and manages MCP (Model Context Protocol) servers using FastMCP. Use when the user wants to create, debug, or deploy MCP tools, resources, or prompts as Python scripts.

### advanced-evaluation
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\advanced-evaluation\SKILL.md`
- **Description**: This skill should be used when the user asks to "implement LLM-as-judge", "compare model outputs", "create evaluation rubrics", "mitigate evaluation bias", or mentions direct scoring, pairwise comparison, position bias, evaluation pipelines, or automated quality assessment.

### algorithmic-art
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\algorithmic-art\SKILL.md`
- **Description**: Creating algorithmic art using p5.js with seeded randomness and interactive parameter exploration. Use this when users request creating art using code, generative art, algorithmic art, flow fields, or particle systems. Create original algorithmic art rather than copying existing artists' work to avoid copyright violations.

### bdi-mental-states
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\bdi-mental-states\SKILL.md`
- **Description**: This skill should be used when the user asks to "model agent mental states", "implement BDI architecture", "create belief-desire-intention models", "transform RDF to beliefs", "build cognitive agent", or mentions BDI ontology, mental state modeling, rational agency, or neuro-symbolic AI integration.

### brainstorming
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\brainstorming\SKILL.md`
- **Description**: You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation.

### brand-guidelines
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\brand-guidelines\SKILL.md`
- **Description**: Applies Anthropic's official brand colors and typography to any sort of artifact that may benefit from having Anthropic's look-and-feel. Use it when brand colors or style guidelines, visual formatting, or company design standards apply.

### canvas-design
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\canvas-design\SKILL.md`
- **Description**: Create beautiful visual art in .png and .pdf documents using design philosophy. You should use this skill when the user asks to create a poster, piece of art, design, or other static piece. Create original visual designs, never copying existing artists' work to avoid copyright violations.

### claude-api
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\claude-api\SKILL.md`
- **Description**: Build apps with the Claude API or Anthropic SDK. TRIGGER when: code imports `anthropic`/`@anthropic-ai/sdk`/`claude_agent_sdk`, or user asks to use Claude API, Anthropic SDKs, or Agent SDK. DO NOT TRIGGER when: code imports `openai`/other AI SDK, general programming, or ML/data-science tasks.

### vercel-composition-patterns
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\composition-patterns\SKILL.md`
- **Description**: React composition patterns that scale. Use when refactoring components with

### context-compression
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\context-compression\SKILL.md`
- **Description**: This skill should be used when the user asks to "compress context", "summarize conversation history", "implement compaction", "reduce token usage", or mentions context compression, structured summarization, tokens-per-task optimization, or long-running agent sessions exceeding context limits.

### context-degradation
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\context-degradation\SKILL.md`
- **Description**: This skill should be used when the user asks to "diagnose context problems", "fix lost-in-middle issues", "debug agent failures", "understand context poisoning", or mentions context degradation, attention patterns, context clash, context confusion, or agent performance degradation. Provides patterns for recognizing and mitigating context failures.

### context-fundamentals
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\context-fundamentals\SKILL.md`
- **Description**: This skill should be used when the user asks to "understand context", "explain context windows", "design agent architecture", "debug context issues", "optimize context usage", or discusses context components, attention mechanics, progressive disclosure, or context budgeting. Provides foundational understanding of context engineering for AI agent systems.

### context-optimization
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\context-optimization\SKILL.md`
- **Description**: This skill should be used when the user asks to "optimize context", "reduce token costs", "improve context efficiency", "implement KV-cache optimization", "partition context", or mentions context limits, observation masking, context budgeting, or extending effective context capacity.

### defuddle
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\defuddle\SKILL.md`
- **Description**: Extract clean markdown content from web pages using Defuddle CLI, removing clutter and navigation to save tokens. Use instead of WebFetch when the user provides a URL to read or analyze, for online documentation, articles, blog posts, or any standard web page.

### dispatching-parallel-agents
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\dispatching-parallel-agents\SKILL.md`
- **Description**: Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies

### doc-coauthoring
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\doc-coauthoring\SKILL.md`
- **Description**: Guide users through a structured workflow for co-authoring documentation. Use when user wants to write documentation, proposals, technical specs, decision docs, or similar structured content. This workflow helps users efficiently transfer context, refine content through iteration, and verify the doc works for readers. Trigger when user mentions writing docs, creating proposals, drafting specs, or similar documentation tasks.

### docx
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\docx\SKILL.md`
- **Description**: Use this skill whenever the user wants to create, read, edit, or manipulate Word documents (.docx files). Triggers include: any mention of 'Word doc', 'word document', '.docx', or requests to produce professional documents with formatting like tables of contents, headings, page numbers, or letterheads. Also use when extracting or reorganizing content from .docx files, inserting or replacing images in documents, performing find-and-replace in Word files, working with tracked changes or comments, or converting content into a polished Word document. If the user asks for a 'report', 'memo', 'letter', 'template', or similar deliverable as a Word or .docx file, use this skill. Do NOT use for PDFs, spreadsheets, Google Docs, or general coding tasks unrelated to document generation.

### evaluation
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\evaluation\SKILL.md`
- **Description**: This skill should be used when the user asks to "evaluate agent performance", "build test framework", "measure agent quality", "create evaluation rubrics", or mentions LLM-as-judge, multi-dimensional evaluation, agent testing, or quality gates for agent pipelines.

### executing-plans
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\executing-plans\SKILL.md`
- **Description**: Use when you have a written implementation plan to execute in a separate session with review checkpoints

### filesystem-context
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\filesystem-context\SKILL.md`
- **Description**: This skill should be used when the user asks to "offload context to files", "implement dynamic context discovery", "use filesystem for agent memory", "reduce context window bloat", or mentions file-based context management, tool output persistence, agent scratch pads, or just-in-time context loading.

### finishing-a-development-branch
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\finishing-a-development-branch\SKILL.md`
- **Description**: Use when implementation is complete, all tests pass, and you need to decide how to integrate the work - guides completion of development work by presenting structured options for merge, PR, or cleanup

### frontend-design
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\frontend-design\SKILL.md`
- **Description**: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.

### hosted-agents
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\hosted-agents\SKILL.md`
- **Description**: This skill should be used when the user asks to "build background agent", "create hosted coding agent", "set up sandboxed execution", "implement multiplayer agent", or mentions background agents, sandboxed VMs, agent infrastructure, Modal sandboxes, self-spawning agents, or remote coding environments.

### internal-comms
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\internal-comms\SKILL.md`
- **Description**: A set of resources to help me write all kinds of internal communications, using the formats that my company likes to use. Claude should use this skill whenever asked to write some sort of internal communications (status reports, leadership updates, 3P updates, company newsletters, FAQs, incident reports, project updates, etc.).

### json-canvas
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\json-canvas\SKILL.md`
- **Description**: Create and edit JSON Canvas files (.canvas) with nodes, edges, groups, and connections. Use when working with .canvas files, creating visual canvases, mind maps, flowcharts, or when the user mentions Canvas files in Obsidian.

### mcp-builder
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\mcp-builder\SKILL.md`
- **Description**: Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. Use when building MCP servers to integrate external APIs or services, whether in Python (FastMCP) or Node/TypeScript (MCP SDK).

### memory-systems
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\memory-systems\SKILL.md`
- **Description**: >

### multi-agent-patterns
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\multi-agent-patterns\SKILL.md`
- **Description**: This skill should be used when the user asks to "design multi-agent system", "implement supervisor pattern", "create swarm architecture", "coordinate multiple agents", or mentions multi-agent patterns, context isolation, agent handoffs, sub-agents, or parallel agent execution.

### notebooklm
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\notebooklm\SKILL.md`
- **Description**: Use this skill to query your Google NotebookLM notebooks directly from Claude Code for source-grounded, citation-backed answers from Gemini. Browser automation, library management, persistent auth. Drastically reduced hallucinations through document-only responses.

### obsidian-bases
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\obsidian-bases\SKILL.md`
- **Description**: Create and edit Obsidian Bases (.base files) with views, filters, formulas, and summaries. Use when working with .base files, creating database-like views of notes, or when the user mentions Bases, table views, card views, filters, or formulas in Obsidian.

### obsidian-cli
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\obsidian-cli\SKILL.md`
- **Description**: Interact with Obsidian vaults using the Obsidian CLI to read, create, search, and manage notes, tasks, properties, and more. Also supports plugin and theme development with commands to reload plugins, run JavaScript, capture errors, take screenshots, and inspect the DOM. Use when the user asks to interact with their Obsidian vault, manage notes, search vault content, perform vault operations from the command line, or develop and debug Obsidian plugins and themes.

### obsidian-markdown
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\obsidian-markdown\SKILL.md`
- **Description**: Create and edit Obsidian Flavored Markdown with wikilinks, embeds, callouts, properties, and other Obsidian-specific syntax. Use when working with .md files in Obsidian, or when the user mentions wikilinks, callouts, frontmatter, tags, embeds, or Obsidian notes.

### pdf
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\pdf\SKILL.md`
- **Description**: Use this skill whenever the user wants to do anything with PDF files. This includes reading or extracting text/tables from PDFs, combining or merging multiple PDFs into one, splitting PDFs apart, rotating pages, adding watermarks, creating new PDFs, filling PDF forms, encrypting/decrypting PDFs, extracting images, and OCR on scanned PDFs to make them searchable. If the user mentions a .pdf file or asks to produce one, use this skill.

### planning-with-files
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\planning-with-files\SKILL.md`
- **Description**: Implements Manus-style file-based planning to organize and track progress on complex tasks. Creates task_plan.md, findings.md, and progress.md. Use when asked to plan out, break down, or organize a multi-step project, research task, or any work requiring >5 tool calls. Supports automatic session recovery after /clear.

### pptx
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\pptx\SKILL.md`
- **Description**: Use this skill any time a .pptx file is involved in any way — as input, output, or both. This includes: creating slide decks, pitch decks, or presentations; reading, parsing, or extracting text from any .pptx file (even if the extracted content will be used elsewhere, like in an email or summary); editing, modifying, or updating existing presentations; combining or splitting slide files; working with templates, layouts, speaker notes, or comments. Trigger whenever the user mentions \"deck,\" \"slides,\" \"presentation,\" or references a .pptx filename, regardless of what they plan to do with the content afterward. If a .pptx file needs to be opened, created, or touched, use this skill.

### project-development
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\project-development\SKILL.md`
- **Description**: This skill should be used when the user asks to "start an LLM project", "design batch pipeline", "evaluate task-model fit", "structure agent project", or mentions pipeline architecture, agent-assisted development, cost estimation, or choosing between LLM and traditional approaches.

### vercel-react-best-practices
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\react-best-practices\SKILL.md`
- **Description**: React and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refactoring React/Next.js code to ensure optimal performance patterns. Triggers on tasks involving React components, Next.js pages, data fetching, bundle optimization, or performance improvements.

### vercel-react-native-skills
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\react-native-skills\SKILL.md`
- **Description**: React Native and Expo best practices for building performant mobile apps. Use

### receiving-code-review
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\receiving-code-review\SKILL.md`
- **Description**: Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation

### remotion-best-practices
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\remotion\SKILL.md`
- **Description**: Best practices for Remotion - Video creation in React

### requesting-code-review
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\requesting-code-review\SKILL.md`
- **Description**: Use when completing tasks, implementing major features, or before merging to verify work meets requirements

### skill-creator
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\skill-creator\SKILL.md`
- **Description**: Create new skills, modify and improve existing skills, and measure skill performance. Use when users want to create a skill from scratch, edit, or optimize an existing skill, run evals to test a skill, benchmark skill performance with variance analysis, or optimize a skill's description for better triggering accuracy.

### slack-gif-creator
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\slack-gif-creator\SKILL.md`
- **Description**: Knowledge and utilities for creating animated GIFs optimized for Slack. Provides constraints, validation tools, and animation concepts. Use when users request animated GIFs for Slack like "make me a GIF of X doing Y for Slack.

### subagent-driven-development
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\subagent-driven-development\SKILL.md`
- **Description**: Use when executing implementation plans with independent tasks in the current session

### supabase-postgres-best-practices
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\supabase-postgres-best-practices\SKILL.md`
- **Description**: Postgres performance optimization and best practices from Supabase. Use this skill when writing, reviewing, or optimizing Postgres queries, schema designs, or database configurations.

### systematic-debugging
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\systematic-debugging\SKILL.md`
- **Description**: Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes

### test-driven-development
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\test-driven-development\SKILL.md`
- **Description**: Use when implementing any feature or bugfix, before writing implementation code

### theme-factory
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\theme-factory\SKILL.md`
- **Description**: Toolkit for styling artifacts with a theme. These artifacts can be slides, docs, reportings, HTML landing pages, etc. There are 10 pre-set themes with colors/fonts that you can apply to any artifact that has been creating, or can generate a new theme on-the-fly.

### tool-design
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\tool-design\SKILL.md`
- **Description**: This skill should be used when the user asks to "design agent tools", "create tool descriptions", "reduce tool complexity", "implement MCP tools", or mentions tool consolidation, architectural reduction, tool naming conventions, or agent-tool interfaces.

### ui-ux-pro-max
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\ui-ux-pro-max\SKILL.md`
- **Description**: UI/UX design intelligence. 50 styles, 21 palettes, 50 font pairings, 20 charts, 8 stacks (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind). Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, check UI/UX code. Projects: website, landing page, dashboard, admin panel, e-commerce, SaaS, portfolio, blog, mobile app, .html, .tsx, .vue, .svelte. Elements: button, modal, navbar, sidebar, card, table, form, chart. Styles: glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, responsive, skeuomorphism, flat design. Topics: color palette, accessibility, animation, layout, typography, font pairing, spacing, hover, shadow, gradient.

### using-git-worktrees
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\using-git-worktrees\SKILL.md`
- **Description**: Use when starting feature work that needs isolation from current workspace or before executing implementation plans - creates isolated git worktrees with smart directory selection and safety verification

### using-superpowers
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\using-superpowers\SKILL.md`
- **Description**: Use when starting any conversation - establishes how to find and use skills, requiring Skill tool invocation before ANY response including clarifying questions

### verification-before-completion
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\verification-before-completion\SKILL.md`
- **Description**: Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always

### web-artifacts-builder
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\web-artifacts-builder\SKILL.md`
- **Description**: Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui). Use for complex artifacts requiring state management, routing, or shadcn/ui components - not for simple single-file HTML/JSX artifacts.

### web-design-guidelines
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\web-design-guidelines\SKILL.md`
- **Description**: Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".

### webapp-testing
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\webapp-testing\SKILL.md`
- **Description**: Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing browser screenshots, and viewing browser logs.

### writing-plans
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\writing-plans\SKILL.md`
- **Description**: Use when you have a spec or requirements for a multi-step task, before touching code

### writing-skills
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\writing-skills\SKILL.md`
- **Description**: Use when creating new skills, editing existing skills, or verifying skills work before deployment

### xlsx
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\skills\xlsx\SKILL.md`
- **Description**: Use this skill any time a spreadsheet file is the primary input or output. This means any task where the user wants to: open, read, edit, or fix an existing .xlsx, .xlsm, .csv, or .tsv file (e.g., adding columns, computing formulas, formatting, charting, cleaning messy data); create a new spreadsheet from scratch or from other data sources; or convert between tabular file formats. Trigger especially when the user references a spreadsheet file by name or path — even casually (like \"the xlsx in my downloads\") — and wants something done to it or produced from it. Also trigger for cleaning or restructuring messy tabular data files (malformed rows, misplaced headers, junk data) into proper spreadsheets. The deliverable must be a spreadsheet file. Do NOT trigger when the primary deliverable is a Word document, HTML report, standalone Python script, database pipeline, or Google Sheets API integration, even if tabular data is involved.

### template-skill
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\guanyang\template\SKILL.md`
- **Description**: Replace with description of the skill and when Claude should use it.

### backend-patterns
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\backend-patterns\SKILL.md`
- **Description**: Backend architecture patterns, API design, database optimization, and server-side best practices for Node.js, Express, and Next.js API routes.

### clickhouse-io
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\clickhouse-io\SKILL.md`
- **Description**: ClickHouse database patterns, query optimization, analytics, and data engineering best practices for high-performance analytical workloads.

### coding-standards
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\coding-standards\SKILL.md`
- **Description**: Universal coding standards, best practices, and patterns for TypeScript, JavaScript, React, and Node.js development.

### configure-ecc
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\configure-ecc\SKILL.md`
- **Description**: Interactive installer for Everything Claude Code  -  guides users through selecting and installing skills and rules to user-level or project-level directories, verifies paths, and optionally optimizes installed files.

### continuous-learning
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\continuous-learning\SKILL.md`
- **Description**: Automatically extract reusable patterns from Claude Code sessions and save them as learned skills for future use.

### continuous-learning-v2
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\continuous-learning-v2\SKILL.md`
- **Description**: Instinct-based learning system that observes sessions via hooks, creates atomic instincts with confidence scoring, and evolves them into skills/commands/agents.

### django-patterns
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\django-patterns\SKILL.md`
- **Description**: Django architecture patterns, REST API design with DRF, ORM best practices, caching, signals, middleware, and production-grade Django apps.

### django-security
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\django-security\SKILL.md`
- **Description**: Django security best practices, authentication, authorization, CSRF protection, SQL injection prevention, XSS prevention, and secure deployment configurations.

### django-tdd
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\django-tdd\SKILL.md`
- **Description**: Django testing strategies with pytest-django, TDD methodology, factory_boy, mocking, coverage, and testing Django REST Framework APIs.

### django-verification
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\django-verification\SKILL.md`
- **Description**: Verification loop for Django projects: migrations, linting, tests with coverage, security scans, and deployment readiness checks before release or PR.

### eval-harness
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\eval-harness\SKILL.md`
- **Description**: Formal evaluation framework for Claude Code sessions implementing eval-driven development (EDD) principles

### frontend-patterns
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\frontend-patterns\SKILL.md`
- **Description**: Frontend development patterns for React, Next.js, state management, performance optimization, and UI best practices.

### golang-patterns
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\golang-patterns\SKILL.md`
- **Description**: Idiomatic Go patterns, best practices, and conventions for building robust, efficient, and maintainable Go applications.

### golang-testing
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\golang-testing\SKILL.md`
- **Description**: Go testing patterns including table-driven tests, subtests, benchmarks, fuzzing, and test coverage. Follows TDD methodology with idiomatic Go practices.

### iterative-retrieval
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\iterative-retrieval\SKILL.md`
- **Description**: Pattern for progressively refining context retrieval to solve the subagent context problem

### java-coding-standards
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\java-coding-standards\SKILL.md`
- **Description**: Java coding standards for Spring Boot services: naming, immutability, Optional usage, streams, exceptions, generics, and project layout.

### jpa-patterns
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\jpa-patterns\SKILL.md`
- **Description**: JPA/Hibernate patterns for entity design, relationships, query optimization, transactions, auditing, indexing, pagination, and pooling in Spring Boot.

### nutrient-document-processing
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\nutrient-document-processing\SKILL.md`
- **Description**: Process, convert, OCR, extract, redact, sign, and fill documents using the Nutrient DWS API. Works with PDFs, DOCX, XLSX, PPTX, HTML, and images.

### postgres-patterns
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\postgres-patterns\SKILL.md`
- **Description**: PostgreSQL database patterns for query optimization, schema design, indexing, and security. Based on Supabase best practices.

### SKILL
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\project-guidelines-example\SKILL.md`

### python-patterns
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\python-patterns\SKILL.md`
- **Description**: Pythonic idioms, PEP 8 standards, type hints, and best practices for building robust, efficient, and maintainable Python applications.

### python-testing
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\python-testing\SKILL.md`
- **Description**: Python testing strategies using pytest, TDD methodology, fixtures, mocking, parametrization, and coverage requirements.

### security-review
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\security-review\SKILL.md`
- **Description**: Use this skill when adding authentication, handling user input, working with secrets, creating API endpoints, or implementing payment/sensitive features. Provides comprehensive security checklist and patterns.

### springboot-patterns
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\springboot-patterns\SKILL.md`
- **Description**: Spring Boot architecture patterns, REST API design, layered services, data access, caching, async processing, and logging. Use for Java Spring Boot backend work.

### springboot-security
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\springboot-security\SKILL.md`
- **Description**: Spring Security best practices for authn/authz, validation, CSRF, secrets, headers, rate limiting, and dependency security in Java Spring Boot services.

### springboot-tdd
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\springboot-tdd\SKILL.md`
- **Description**: Test-driven development for Spring Boot using JUnit 5, Mockito, MockMvc, Testcontainers, and JaCoCo. Use when adding features, fixing bugs, or refactoring.

### springboot-verification
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\springboot-verification\SKILL.md`
- **Description**: Verification loop for Spring Boot projects: build, static analysis, tests with coverage, security scans, and diff review before release or PR.

### strategic-compact
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\strategic-compact\SKILL.md`
- **Description**: Suggests manual context compaction at logical intervals to preserve context through task phases rather than arbitrary auto-compaction.

### tdd-workflow
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\krishnakanthb13\skills\tdd-workflow\SKILL.md`
- **Description**: Use this skill when writing new features, fixing bugs, or refactoring code. Enforces test-driven development with 80%+ coverage including unit, integration, and E2E tests.

### always-verify-gcp
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\rominirani\gemini-cli-skills\always-verify-gcp\SKILL.md`
- **Description**: A workflow skill for all Google Cloud resource management tasks (create, delete, modify). This skill ensures that the correct CLI tool (`gcloud`, `bq`, `gsutil`) is chosen and that its commands are verified against the latest official documentation before execution.

### adk-tool-scaffold
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\rominirani\skills_tutorial\adk-tool-scaffold\SKILL.md`
- **Description**: Scaffolds a new custom Tool class for the Agent Development Kit (ADK).

### database-schema-validator
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\rominirani\skills_tutorial\database-schema-validator\SKILL.md`
- **Description**: Validates SQL schema files for compliance with internal safety and naming policies.

### git-commit-formatter
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\rominirani\skills_tutorial\git-commit-formatter\SKILL.md`
- **Description**: Formats git commit messages according to Conventional Commits specification. Use this when the user asks to commit changes or write a commit message.

### json-to-pydantic
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\rominirani\skills_tutorial\json-to-pydantic\SKILL.md`
- **Description**: Converts JSON data snippets into Python Pydantic data models.

### license-header-adder
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\rominirani\skills_tutorial\license-header-adder\SKILL.md`
- **Description**: Adds the standard open-source license header to new source files. Use involves creating new code files that require copyright attribution.

### component-common-domain-detection
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(architecture)\component-common-domain-detection\SKILL.md`
- **Description**: Finds duplicate business logic spread across multiple components and suggests consolidation. Use when asking "where is this logic duplicated?", "find common code between services", "what can be consolidated?", "detect shared domain logic", or analyzing component overlap before refactoring. Do NOT use for code-level duplication detection (use linters) or dependency analysis (use coupling-analysis).

### component-flattening-analysis
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(architecture)\component-flattening-analysis\SKILL.md`
- **Description**: Detects misplaced classes and fixes component hierarchy problems — finds code that should belong inside a component but sits at the root level. Use when asking "clean up component structure", "find orphaned classes", "fix module hierarchy", "flatten nested components", or analyzing why namespaces have misplaced code. Do NOT use for dependency analysis (use coupling-analysis) or domain grouping (use domain-identification-grouping).

### component-identification-sizing
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(architecture)\component-identification-sizing\SKILL.md`
- **Description**: Maps architectural components in a codebase and measures their size to identify what should be extracted first. Use when asking "how big is each module?", "what components do I have?", "which service is too large?", "analyze codebase structure", "size my monolith", or planning where to start decomposing. Do NOT use for runtime performance sizing or infrastructure capacity planning.

### coupling-analysis
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(architecture)\coupling-analysis\SKILL.md`
- **Description**: Analyzes coupling between modules using the three-dimensional model (strength, distance, volatility) from "Balancing Coupling in Software Design". Use when asking "are these modules too coupled?", "show me dependencies", "analyze integration quality", "which modules should I decouple?", "coupling report", or evaluating architectural health. Do NOT use for domain boundary analysis (use domain-analysis) or component sizing (use component-identification-sizing).

### decomposition-planning-roadmap
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(architecture)\decomposition-planning-roadmap\SKILL.md`
- **Description**: Creates step-by-step decomposition plans and migration roadmaps for breaking apart monolithic applications. Use when asking "what order should I extract services?", "plan my migration", "create a decomposition roadmap", "prioritize what to split", "monolith to microservices strategy", or tracking decomposition progress. Do NOT use for domain analysis (use domain-analysis) or component sizing (use component-identification-sizing).

### domain-analysis
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(architecture)\domain-analysis\SKILL.md`
- **Description**: Maps business domains and suggests service boundaries in any codebase using DDD Strategic Design. Use when asking "what are the domains in this codebase?", "where should I draw service boundaries?", "identify bounded contexts", "classify subdomains", "DDD analysis", or analyzing domain cohesion. Do NOT use for grouping existing components into domains (use domain-identification-grouping) or dependency analysis (use coupling-analysis).

### domain-identification-grouping
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(architecture)\domain-identification-grouping\SKILL.md`
- **Description**: Groups existing components into logical business domains to plan service-based architecture. Use when asking "which components belong together?", "group these into services", "organize by domain", "component-to-domain mapping", or planning service extraction from an existing codebase. Do NOT use for identifying new domains from scratch (use domain-analysis) or analyzing coupling (use coupling-analysis).

### frontend-blueprint
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(architecture)\frontend-blueprint\SKILL.md`
- **Description**: AI frontend specialist and design consultant that guides users through a structured discovery process before generating any code. Collects visual references, design tokens, typography, icons, layout preferences, and brand guidelines to ensure the final output matches the user's vision with high fidelity. Use when the user asks to build, design, create, or improve any frontend interface — websites, landing pages, dashboards, components, apps, emails, forms, modals, or any UI element. Also triggers on "build me a UI", "design a page", "create a component", "improve this layout", "make this look better", "frontend", "interface", "redesign", or when the user provides mockups, screenshots, or design references. Do NOT use for backend logic, API design, database schemas, or non-visual code tasks.

### legacy-migration-planner
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(architecture)\legacy-migration-planner\SKILL.md`
- **Description**: Use when planning legacy system migrations, codebase modernization, monolith decomposition, microservices consolidation, cross-language rewrites, or framework upgrades. Invoke for strangler fig pattern, incremental migration strategy, or refactoring roadmaps. Do NOT use for domain analysis (use domain-analysis), component sizing (use component-identification-sizing), or step-by-step decomposition plans (use decomposition-planning-roadmap).

### react-composition-patterns
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(architecture)\react-composition-patterns\SKILL.md`
- **Description**: React composition patterns that scale. Use when refactoring components with boolean prop proliferation, building flexible component libraries, or designing reusable APIs. Triggers on tasks involving compound components, render props, context providers, or component architecture. Includes React 19 API changes. Do NOT use for React/Next.js performance optimization (use react-best-practices instead).

### aws-advisor
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(cloud)\aws-advisor\SKILL.md`
- **Description**: Expert AWS Cloud Advisor for architecture design, security review, and implementation guidance. Leverages AWS MCP tools for accurate, documentation-backed answers. Use when user asks about AWS architecture, security, service selection, migrations, troubleshooting, or learning AWS. Triggers on AWS, Lambda, S3, EC2, ECS, EKS, DynamoDB, RDS, CloudFormation, CDK, Terraform, Serverless, SAM, IAM, VPC, API Gateway, or any AWS service. Do NOT use for non-AWS cloud providers or general infrastructure without AWS context.

### cloudflare-deploy
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(cloud)\cloudflare-deploy\SKILL.md`
- **Description**: Deploy applications and infrastructure to Cloudflare using Workers, Pages, and related platform services. Use when the user asks to deploy, host, publish, or set up a project on Cloudflare. Do NOT use for deploying to Vercel, Netlify, or Render (use their respective skills).

### netlify-deploy
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(cloud)\netlify-deploy\SKILL.md`
- **Description**: Deploy web projects to Netlify using the Netlify CLI (`npx netlify`). Use when the user asks to deploy, host, publish, or link a site/repo on Netlify, including preview and production deploys. Do NOT use for deploying to Vercel, Cloudflare, or Render (use their respective skills).

### render-deploy
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(cloud)\render-deploy\SKILL.md`
- **Description**: Deploy applications to Render by analyzing codebases, generating render.yaml Blueprints, and providing Dashboard deeplinks. Use when the user wants to deploy, host, publish, or set up their application on Render's cloud platform. Do NOT use for deploying to Vercel, Netlify, or Cloudflare (use their respective skills).

### vercel-deploy
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(cloud)\vercel-deploy\SKILL.md`
- **Description**: Deploy applications and websites to Vercel. Use when the user requests deployment actions like "deploy my app", "deploy and give me the link", "push this live", or "create a preview deployment". Do NOT use for deploying to Netlify, Cloudflare, or Render (use their respective skills).

### create-adr
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(creation)\create-adr\SKILL.md`
- **Description**: Creates Architecture Decision Records (ADRs) to document significant architectural choices and their rationale for future team members. Use when the user says "write an ADR", "document this decision", "record why we chose X", "add an architecture decision record", "create an ADR for", or wants to capture the reasoning behind a technical choice so the team understands it later. Do NOT use when the decision hasn't been made yet (use create-rfc instead), for implementation planning (use technical-design-doc-creator), or for general documentation.

### create-rfc
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(creation)\create-rfc\SKILL.md`
- **Description**: Creates structured Request for Comments (RFC) documents for proposing and deciding on significant changes. Use when the user says "write an RFC", "create a proposal", "I need to propose a change", "draft an RFC", "document a decision", or needs stakeholder alignment before making a major technical or process decision. Do NOT use for TDDs/implementation docs (use technical-design-doc-creator instead), README files, or general documentation.

### technical-design-doc-creator
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(creation)\create-technical-design-doc\SKILL.md`
- **Description**: Creates comprehensive Technical Design Documents (TDD) with mandatory and optional sections through interactive discovery. Use when user asks to "write a design doc", "create a TDD", "technical spec", "architecture document", "RFC", "design proposal", or needs to document a technical decision before implementation. Do NOT use for README files, API docs, or general documentation (use docs-writer instead).

### cursor-subagent-creator
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(creation)\cursor-subagent-creator\SKILL.md`
- **Description**: Creates Cursor-specific AI subagents with isolated context for complex multi-step workflows. Use when creating subagents for Cursor editor specifically, following Cursor's patterns and directories (.cursor/agents/). Triggers on "cursor subagent", "cursor agent". Do NOT use for generic subagent creation outside Cursor (use subagent-creator instead).

### skill-architect
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(creation)\skill-architect\SKILL.md`
- **Description**: Expert guide for designing and building high-quality skills from scratch through structured conversation. Use when someone wants to create a new skill, build a skill, design a skill, or asks for help making Agents do something consistently. Also use when someone says "turn this into a skill", "I want to automate this workflow", "how do I teach my Agent to do X", or mentions creating SKILL.md files. Covers standalone skills and MCP-enhanced workflows. Do NOT use for creating subagents (use subagent-creator) or technical design documents (use create-technical-design-doc).

### subagent-creator
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(creation)\subagent-creator\SKILL.md`
- **Description**: Guide for creating AI subagents with isolated context for complex multi-step workflows. Use when users want to create a subagent, specialized agent, verifier, debugger, or orchestrator that requires isolated context and deep specialization. Works with any agent that supports subagent delegation. Triggers on "create subagent", "new agent", "specialized assistant", "create verifier". Do NOT use for Cursor-specific subagents (use cursor-subagent-creator instead).

### the-fool
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(decision-making)\the-fool\SKILL.md`
- **Description**: Use when challenging ideas, plans, decisions, or proposals. Invoke to play devil's advocate, run a pre-mortem, red team, stress test assumptions, audit evidence quality, or find blind spots before committing. Do NOT use for building plans, making decisions, or generating solutions — this skill only challenges and critiques.

### figma
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(design)\figma\SKILL.md`
- **Description**: Use the Figma MCP server to fetch design context, screenshots, variables, and assets from Figma, and to translate Figma nodes into production code. Use when a task involves Figma URLs, node IDs, design-to-code implementation, or Figma MCP setup and troubleshooting. Covers general Figma data fetching and exploration. Do NOT use when the goal is specifically pixel-perfect code implementation from a Figma design (use figma-implement-design instead).

### figma-implement-design
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(design)\figma-implement-design\SKILL.md`
- **Description**: Translate Figma nodes into production-ready code with 1:1 visual fidelity using the Figma MCP workflow (design context, screenshots, assets, and project-convention translation). Use when the user provides Figma URLs or node IDs and asks to implement designs or components that must match Figma specs. Requires a working Figma MCP server connection. Do NOT use for general Figma data fetching, variable exploration, or MCP troubleshooting (use figma instead).

### codenavi
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(development)\codenavi\SKILL.md`
- **Description**: Your pathfinder for navigating unknown codebases. Investigates with precision, implements surgically, and never assumes — if it doesn't know, it says so. Maintains a .notebook/ knowledge base that grows across sessions, turning every discovery into lasting intelligence. Summons available skills, MCPs, and docs when the mission demands. Use when fixing bugs, implementing features, refactoring, investigating flows, or any development task in unfamiliar territory. Triggers on "fix this", "implement this", "how does this work", "investigate this flow", "help me with this code". Do NOT use for greenfield scaffolding, CI/CD, or infrastructure provisioning.

### coding-guidelines
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(development)\coding-guidelines\SKILL.md`
- **Description**: Behavioral guidelines to reduce common LLM coding mistakes. Use when writing, modifying, or reviewing code — implementation tasks, code changes, refactoring, bug fixes, or feature development. Do NOT use for architecture design, documentation, or non-code tasks.

### confluence-assistant
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(development)\confluence-assistant\SKILL.md`
- **Description**: Expert in Confluence operations using Atlassian MCP. Use when the user says "search Confluence", "create a Confluence page", "update a page", "find documentation in Confluence", "list spaces", or "add a comment to a page". Do NOT use for Jira issues, general web search, or local file creation.

### docs-writer
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(development)\docs-writer\SKILL.md`
- **Description**: Write, review, and edit documentation files with consistent structure, tone, and technical accuracy. Use when creating docs, reviewing markdown files, writing READMEs, updating `/docs` directories, or when user says "write documentation", "review this doc", "improve this README", "create a guide", or "edit markdown". Do NOT use for code comments, inline JSDoc, or API reference generation.

### gh-address-comments
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(development)\gh-address-comments\SKILL.md`
- **Description**: Address review and issue comments on the open GitHub PR for the current branch using gh CLI. Use when user says "address PR comments", "fix review feedback", "respond to PR review", or "handle PR comments". Verifies gh auth first and prompts to authenticate if not logged in. Do NOT use for creating PRs, CI debugging (use gh-fix-ci), or general Git operations.

### jira-assistant
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(development)\jira-assistant\SKILL.md`
- **Description**: Manage Jira issues via Atlassian MCP — search, create, update, transition status, and handle sprint tasks. Auto-detects workspace configuration. Use when user says "create a Jira ticket", "update my sprint", "check Jira status", "transition this issue", "search Jira", or "move ticket to done". Do NOT use for Confluence pages (use confluence-assistant).

### nestjs-modular-monolith
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(development)\nestjs-modular-monolith\SKILL.md`
- **Description**: Specialist in designing and implementing scalable modular monolith architectures using NestJS with DDD, Clean Architecture, and CQRS patterns. Use when building modular monolith backends, designing bounded contexts, creating domain modules, implementing event-driven module communication, or when user mentions "modular monolith", "bounded contexts", "module boundaries", "DDD", "CQRS", "clean architecture NestJS", or "monolith to microservices". Do NOT use for simple CRUD APIs, frontend work, or general NestJS questions without architectural context.

### react-native-expert
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(development)\react-native-expert\SKILL.md`
- **Description**: Senior React Native and Expo engineer for building production-ready cross-platform mobile apps. Use when building React Native components, implementing navigation with Expo Router, optimizing list and scroll performance, working with animations via Reanimated, handling platform-specific code (iOS/Android), integrating native modules, or structuring Expo projects. Triggers on React Native, Expo, mobile app, iOS app, Android app, cross-platform, native module, FlatList, FlashList, LegendList, Reanimated, Expo Router, mobile performance, app store. Do NOT use for Flutter, web-only React, or backend Node.js tasks.

### shopify-developer
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(development)\shopify-developer\SKILL.md`
- **Description**: Complete Shopify development reference covering Liquid templating, OS 2.0 themes, GraphQL APIs, Hydrogen, Functions, and performance optimization (API v2026-01). Use when working with .liquid files, building Shopify themes or apps, writing GraphQL queries for Shopify, debugging Liquid errors, creating app extensions, migrating from Scripts to Functions, or building headless storefronts. Triggers on "Shopify", "Liquid template", "Hydrogen", "Storefront API", "theme development", "Shopify Functions", "Polaris". Do NOT use for non-Shopify e-commerce platforms.

### tlc-spec-driven
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(development)\tlc-spec-driven\SKILL.md`
- **Description**: Project and feature planning with 4 adaptive phases - Specify, Design, Tasks, Execute. Auto-sizes depth by complexity. Creates atomic tasks with verification criteria, atomic git commits, requirement traceability, and persistent memory across sessions. Stack-agnostic. Use when (1) Starting new projects (initialize vision, goals, roadmap), (2) Working with existing codebases (map stack, architecture, conventions), (3) Planning features (requirements, design, task breakdown), (4) Implementing with verification and atomic commits, (5) Quick ad-hoc tasks (bug fixes, config changes), (6) Tracking decisions/blockers/deferred ideas across sessions, (7) Pausing/resuming work. Triggers on "initialize project", "map codebase", "specify feature", "discuss feature", "design", "tasks", "implement", "validate", "verify work", "UAT", "quick fix", "quick task", "pause work", "resume work". Do NOT use for architecture decomposition analysis (use architecture skills) or technical design docs (use create-technical-design-doc).

### ai-cold-outreach
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\ai-cold-outreach\SKILL.md`
- **Description**: When the user wants to build an AI-powered outreach system, write cold emails, improve deliverability, or scale personalized outreach. Also use when the user mentions 'cold email,' 'cold outreach,' 'outreach automation,' 'Instantly,' 'Smartlead,' 'Clay,' 'email sequences,' 'deliverability,' 'personalization at scale,' 'reply rate,' or 'outreach stack.' This skill covers the complete AI cold outreach system from signal detection through conversion. Do NOT use for technical implementation, code review, or software architecture.

### ai-pricing
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\ai-pricing\SKILL.md`
- **Description**: When the user wants to price an AI product, choose a charge metric, design pricing tiers, or optimize margins. Also use when the user mentions 'AI pricing,' 'usage-based pricing,' 'consumption pricing,' 'outcome pricing,' 'BYOK,' 'bring your own key,' 'per-seat pricing,' 'pricing tiers,' 'AI margins,' 'cost per token,' or 'pricing model.' This skill covers pricing strategy, packaging, and margin management for AI-native products. Do NOT use for technical implementation, code review, or software architecture.

### ai-sdr
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\ai-sdr\SKILL.md`
- **Description**: When the user wants to deploy AI sales development reps, automate sales qualification, build signal-to-action routing, or design AI agent architecture for sales. Also use when the user mentions 'AI SDR,' 'AI sales agent,' 'automated qualification,' 'signal routing,' 'sales automation,' '11x,' 'Artisan,' 'AiSDR,' 'AI BDR,' or 'autonomous sales.' This skill covers AI SDR deployment, qualification automation, and agent architecture for sales development. Do NOT use for technical implementation, code review, or software architecture.

### ai-seo
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\ai-seo\SKILL.md`
- **Description**: When the user wants to build programmatic SEO with AI, create competitor alternative pages, optimize for AI Overviews, or scale content production. Also use when the user mentions 'SEO,' 'programmatic SEO,' 'AI content,' 'competitor alternative pages,' 'AI Overviews,' 'search optimization,' 'DataForSEO,' 'content at scale,' 'keyword strategy,' or 'organic traffic.' This skill covers AI-powered SEO strategy from keyword research through programmatic page generation. Do NOT use for technical implementation, code review, or software architecture.

### ai-ugc-ads
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\ai-ugc-ads\SKILL.md`
- **Description**: When the user wants to create UGC ad campaigns, recruit UGC creators, generate AI UGC content, or scale with user-generated content. Also use when the user mentions 'UGC,' 'user-generated content,' 'creator ads,' 'Spark Ads,' 'whitelisting,' 'AI UGC,' 'Arcads,' 'Creatify,' 'creator brief,' or 'UGC testing.' This skill covers the UGC growth framework from creator recruitment through AI-powered scaling. Do NOT use for technical implementation, code review, or software architecture.

### content-to-pipeline
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\content-to-pipeline\SKILL.md`
- **Description**: When the user wants to turn content into revenue, build a content-led GTM motion, reverse engineer distribution, or repurpose content across platforms. Also use when the user mentions 'content marketing,' 'content-led growth,' 'content to pipeline,' 'distribution,' 'content repurposing,' 'content strategy,' 'thought leadership,' 'newsletter,' 'content flywheel,' 'organic growth.' This skill covers content-to-revenue systems from creation through pipeline attribution. Do NOT use for technical implementation, code review, or software architecture.

### expansion-retention
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\expansion-retention\SKILL.md`
- **Description**: When the user wants to reduce churn, build expansion revenue, automate customer success, or optimize net revenue retention. Also use when the user mentions 'churn,' 'retention,' 'expansion revenue,' 'upsell,' 'NRR,' 'net revenue retention,' 'customer success,' 'land and expand,' 'closed-lost,' or 'renewal.' This skill covers expansion and retention systems from usage triggers through automated customer success. Do NOT use for technical implementation, code review, or software architecture.

### gtm-engineering
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\gtm-engineering\SKILL.md`
- **Description**: When the user wants to build GTM automation with code, design workflow architectures, use AI agents for GTM tasks, or implement the 'architecture over tools' principle. Also use when the user mentions 'GTM engineering,' 'GTM automation,' 'n8n,' 'Make,' 'Zapier,' 'workflow automation,' 'Clay API,' 'instruction stacks,' 'AI agents for GTM,' or 'revenue automation.' This skill covers technical GTM infrastructure from workflow design through agent orchestration. Do NOT use for technical implementation, code review, or software architecture.

### gtm-metrics
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\gtm-metrics\SKILL.md`
- **Description**: When the user wants to define GTM metrics, build a metrics dashboard, measure pipeline efficiency, or track AI product performance. Also use when the user mentions 'GTM metrics,' 'revenue latency,' 'pipeline metrics,' 'TTFV,' 'time-to-first-value,' 'data health,' 'attribution,' 'conversion rate,' 'CAC,' 'LTV,' 'NRR,' 'GTM dashboard,' 'magic number,' 'pipeline velocity,' or 'funnel metrics.' This skill covers GTM measurement from metric selection through dashboard design, including AI-specific cost metrics, attribution models, and weekly review cadences. Do NOT use for technical implementation, code review, or software architecture.

### lead-enrichment
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\lead-enrichment\SKILL.md`
- **Description**: When the user wants to build data enrichment workflows, score leads against ICP, set up Clay waterfalls, or improve contact data quality. Also use when the user mentions 'enrichment,' 'data enrichment,' 'Clay,' 'waterfall enrichment,' 'ICP scoring,' 'lead scoring,' 'intent data,' 'contact verification,' 'Apollo,' 'ZoomInfo,' or 'data quality.' This skill covers lead enrichment waterfalls, ICP scoring frameworks, and contact verification systems. Do NOT use for technical implementation, code review, or software architecture.

### multi-platform-launch
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\multi-platform-launch\SKILL.md`
- **Description**: When the user wants to launch a product across multiple platforms, plan a Product Hunt launch, build a waitlist, or execute a multi-channel launch strategy. Also use when the user mentions 'product launch,' 'Product Hunt,' 'launch strategy,' 'waitlist,' 'beta launch,' 'BetaList,' 'Hacker News,' 'launch day,' 'AppSumo,' 'multi-channel launch.' This skill covers multi-platform launch execution from pre-launch through post-launch optimization. Do NOT use for technical implementation, code review, or software architecture.

### paid-creative-ai
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\paid-creative-ai\SKILL.md`
- **Description**: When the user wants to create AI-generated ad creative, test performance creative, manage creative fatigue, or optimize paid media with AI tools. Also use when the user mentions 'ad creative,' 'performance creative,' 'creative testing,' 'creative fatigue,' 'Meta ads,' 'Google ads,' 'TikTok ads,' 'AI ads,' 'ad budget,' 'ROAS,' 'Advantage+,' or 'Performance Max.' This skill covers AI-powered paid creative from generation through performance optimization. Do NOT use for technical implementation, code review, or software architecture.

### partner-affiliate
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\partner-affiliate\SKILL.md`
- **Description**: When the user wants to build a partner program, launch an affiliate program, design integration partnerships, or create distribution partnerships. Also use when the user mentions 'partnerships,' 'affiliate program,' 'referral program,' 'partner ecosystem,' 'integration partner,' 'reseller,' 'co-marketing,' 'PartnerStack,' or 'revenue share.' This skill covers partner and affiliate program design from recruitment through performance optimization. Do NOT use for technical implementation, code review, or software architecture.

### positioning-icp
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\positioning-icp\SKILL.md`
- **Description**: When the user wants to define their ideal customer profile, position an AI product, build messaging architecture, or validate product-market fit. Also use when the user mentions 'ICP,' 'ideal customer profile,' 'positioning,' 'PMF,' 'product-market fit,' 'messaging,' 'buyer persona,' 'enrichment signals,' 'market positioning,' or 'competitive positioning.' This skill covers market positioning, ICP definition, messaging architecture, and PMF validation for AI-native products. Do NOT use for technical implementation, code review, or software architecture.

### sales-motion-design
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\sales-motion-design\SKILL.md`
- **Description**: When the user wants to choose between PLG and sales-led, design a sales motion, optimize time-to-first-value, or build a value-before-purchase experience. Also use when the user mentions 'PLG,' 'product-led growth,' 'sales-led,' 'sales motion,' 'free trial,' 'freemium,' 'self-serve,' 'demo-first,' 'time-to-first-value,' 'TTFV,' or 'agent-led sales.' This skill covers sales motion selection, value delivery design, and go-to-market motion architecture. Do NOT use for technical implementation, code review, or software architecture.

### social-selling
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\social-selling\SKILL.md`
- **Description**: When the user wants to sell through social media, optimize LinkedIn for sales, build DM sequences, or convert content engagement into pipeline. Also use when the user mentions 'social selling,' 'LinkedIn selling,' 'LinkedIn DMs,' 'social prospecting,' 'LinkedIn Sales Navigator,' 'DM sequences,' 'LinkedIn outreach,' 'social pipeline,' or 'LinkedIn optimization.' This skill covers social selling strategy from profile optimization through DM-to-deal conversion. Do NOT use for technical implementation, code review, or software architecture.

### solo-founder-gtm
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\solo-founder-gtm\SKILL.md`
- **Description**: When the user is a solo founder building their GTM motion, wants to scale without hiring, or needs to design an AI agent team for go-to-market. Also use when the user mentions 'solo founder,' 'one-person startup,' 'solopreneur,' 'bootstrapped,' 'no team,' 'AI agents as team,' 'scaling without hiring,' 'founder-led sales,' 'lean GTM,' 'one-person company,' or 'no employees.' This skill covers the complete solo founder GTM playbook from stack selection through agent team design, revenue-stage transitions, time allocation, and when to finally hire. Do NOT use for technical implementation, code review, or software architecture.

### video-outreach
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(gtm)\video-outreach\SKILL.md`
- **Description**: When the user wants to build video-first cold outreach, create personalized video at scale, implement async selling, or use AI demo generation for prospecting. Also use when the user mentions 'video outreach,' 'personalized video,' 'video prospecting,' 'Tavus,' 'Sendspark,' 'HeyGen,' 'video email,' 'async selling,' 'video demo,' or 'made this for you.' This skill covers video-first outreach systems from personalization through conversion optimization. Do NOT use for technical implementation, code review, or software architecture.

### learning-opportunities
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(learning)\learning-opportunities\SKILL.md`
- **Description**: Facilitates deliberate skill development during AI-assisted coding. Offers interactive learning exercises after architectural work (new files, schema changes, refactors). Use when completing features, making design decisions, or when user asks to understand code better. Triggers on "learning exercise", "help me understand", "teach me", "why does this work", or after creating new files/modules. Do NOT use for urgent debugging, quick fixes, or when user says "just ship it".

### sentry
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(monitoring)\sentry\SKILL.md`
- **Description**: Inspect Sentry issues, summarize production errors, and pull health data via the Sentry API (read-only). Use when user says "check Sentry", "what errors in production?", "summarize Sentry issues", "recent crashes", or "production error report". Requires SENTRY_AUTH_TOKEN. Do NOT use for setting up Sentry SDK, configuring alerts, or non-Sentry error monitoring.

### core-web-vitals
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(performance)\core-web-vitals\SKILL.md`
- **Description**: Optimize Core Web Vitals (LCP, INP, CLS) for better page experience and search ranking. Use when asked to "improve Core Web Vitals", "fix LCP", "reduce CLS", "optimize INP", "page experience optimization", or "fix layout shifts". Focuses specifically on the three Core Web Vitals metrics. Do NOT use for general web performance (use perf-web-optimization), Lighthouse audits (use perf-lighthouse), or Astro-specific optimization (use perf-astro).

### perf-astro
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(performance)\perf-astro\SKILL.md`
- **Description**: Astro-specific performance optimizations for 95+ Lighthouse scores. Covers critical CSS inlining, compression, font loading, and LCP optimization. Use when optimizing Astro site performance, improving Astro Lighthouse scores, or configuring astro-critters. Do NOT use for non-Astro sites (use perf-web-optimization or core-web-vitals) or running Lighthouse audits (use perf-lighthouse).

### perf-lighthouse
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(performance)\perf-lighthouse\SKILL.md`
- **Description**: Run Lighthouse audits locally via CLI or Node API, parse and interpret reports, and set performance budgets. Use when measuring site performance, understanding Lighthouse scores, setting up budgets, or integrating audits into CI. Triggers on: lighthouse, run lighthouse, lighthouse score, performance audit, performance budget. Do NOT use for fixing specific performance issues (use perf-web-optimization or core-web-vitals) or Astro-specific optimization (use perf-astro).

### perf-web-optimization
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(performance)\perf-web-optimization\SKILL.md`
- **Description**: Optimize web performance: bundle size, images, caching, lazy loading, and overall page speed. Use when site is slow, reducing bundle size, fixing layout shifts, improving Time to Interactive, or optimizing for Lighthouse scores. Triggers on: web performance, bundle size, page speed, slow site, lazy loading. Do NOT use for Core Web Vitals-specific fixes (use core-web-vitals), running Lighthouse audits (use perf-lighthouse), or Astro-specific optimization (use perf-astro).

### react-best-practices
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(quality)\react-best-practices\SKILL.md`
- **Description**: React and Next.js performance optimization guidelines from Vercel Engineering. Use when writing, reviewing, or refactoring React/Next.js code to ensure optimal performance patterns. Triggers on tasks involving React components, Next.js pages, data fetching, bundle optimization, or performance improvements. Do NOT use for component API architecture or composition patterns (use react-composition-patterns instead).

### seo
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(quality)\seo\SKILL.md`
- **Description**: Optimize for search engine visibility and ranking. Use when asked to "improve SEO", "optimize for search", "fix meta tags", "add structured data", "sitemap optimization", or "search engine optimization". Do NOT use for accessibility (use web-accessibility), performance (use core-web-vitals), or comprehensive site audits covering multiple areas (use web-quality-audit).

### accessibility
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(quality)\web-accessibility\SKILL.md`
- **Description**: Audit and improve web accessibility following WCAG 2.1 guidelines. Use when asked to "improve accessibility", "a11y audit", "WCAG compliance", "screen reader support", "keyboard navigation", or "make accessible". Do NOT use for SEO (use seo), performance (use core-web-vitals), or comprehensive site audits covering multiple areas (use web-quality-audit).

### best-practices
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(quality)\web-best-practices\SKILL.md`
- **Description**: Apply modern web development best practices for security, compatibility, and code quality. Use when asked to "apply best practices", "security audit", "modernize code", "code quality review", or "check for vulnerabilities". Do NOT use for accessibility (use web-accessibility), SEO (use seo), performance (use core-web-vitals), or comprehensive multi-area audits (use web-quality-audit).

### web-quality-audit
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(quality)\web-quality-audit\SKILL.md`
- **Description**: Comprehensive web quality audit covering performance, accessibility, SEO, and best practices in a single review. Use when asked to "audit my site", "review web quality", "run lighthouse audit", "check page quality", or "optimize my website" across multiple areas at once. Orchestrates specialized skills for depth. Do NOT use for single-area audits — prefer core-web-vitals, web-accessibility, seo, or web-best-practices for focused work.

### security-best-practices
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(security)\security-best-practices\SKILL.md`
- **Description**: Perform language and framework specific security best-practice reviews and suggest improvements. Use when the user explicitly requests security best practices guidance, a security review or report, or secure-by-default coding help. Supports Python, JavaScript/TypeScript, and Go. Do NOT use for general code review, debugging, threat modeling (use security-threat-model), or non-security tasks.

### security-ownership-map
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(security)\security-ownership-map\SKILL.md`
- **Description**: Analyze git repositories to build a security ownership topology (people-to-file), compute bus factor and sensitive-code ownership, and export CSV/JSON for graph databases and visualization. Use when the user explicitly wants a security-oriented ownership or bus-factor analysis grounded in git history (for example: orphaned sensitive code, security maintainers, CODEOWNERS reality checks for risk, sensitive hotspots, or ownership clusters). Do NOT use for general maintainer lists, non-security ownership questions, or threat modeling (use security-threat-model).

### security-threat-model
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(security)\security-threat-model\SKILL.md`
- **Description**: Repository-grounded threat modeling that enumerates trust boundaries, assets, attacker capabilities, abuse paths, and mitigations, and writes a concise Markdown threat model. Use when the user asks to threat model a codebase or path, enumerate threats or abuse paths, or perform AppSec threat modeling. Do NOT use for general architecture summaries, code review, security best practices (use security-best-practices), or non-security design work.

### chrome-devtools
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(tooling)\chrome-devtools\SKILL.md`
- **Description**: Browser debugging, performance profiling, and automation via Chrome DevTools MCP. Use when user says "debug this page", "take a screenshot", "check network requests", "profile performance", "inspect console errors", or "analyze page load". Do NOT use for full E2E test suites (use playwright-skill) or non-browser debugging.

### excalidraw-studio
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(tooling)\excalidraw-studio\SKILL.md`
- **Description**: Generate Excalidraw diagrams from natural language descriptions. Outputs .excalidraw JSON files openable in Excalidraw. Use when asked to "create a diagram", "make a flowchart", "visualize a process", "draw a system architecture", "create a mind map", "generate an Excalidraw file", "draw an ER diagram", "create a sequence diagram", or "make a class diagram". Supports flowcharts, relationship diagrams, mind maps, architecture, DFD, swimlane, class, sequence, and ER diagrams. Can use icon libraries (AWS, GCP, etc.) when set up. Do NOT use for code architecture analysis (use the architecture skills), Mermaid diagram rendering (use mermaid-studio), or non-visual documentation (use docs-writer).

### gh-fix-ci
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(tooling)\gh-fix-ci\SKILL.md`
- **Description**: Use when a user asks to debug or fix failing GitHub PR checks that run in GitHub Actions. Uses `gh` to inspect checks and logs, summarize failure context, draft a fix plan, and implement only after explicit approval. Treats external providers (for example Buildkite) as out of scope and reports only the details URL. Do NOT use for addressing PR review comments (use gh-address-comments) or general CI outside GitHub Actions.

### mermaid-studio
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(tooling)\mermaid-studio\SKILL.md`
- **Description**: Expert Mermaid diagram creation, validation, and rendering with dual-engine output (SVG/PNG/ASCII). Supports all 20+ diagram types including C4 architecture, AWS architecture-beta with service icons, flowcharts, sequence, ERD, state, class, mindmap, timeline, git graph, sankey, and more. Features code-to-diagram analysis, batch rendering, 15+ themes, and syntax validation. Use when users ask to create diagrams, visualize architecture, render mermaid files, generate ASCII diagrams, document system flows, model databases, draw AWS infrastructure, analyze code structure, or anything involving "mermaid", "diagram", "flowchart", "architecture diagram", "sequence diagram", "ERD", "C4", "ASCII diagram". Do NOT use for non-Mermaid image generation, data plotting with chart libraries, or general documentation writing.

### nx-ci-monitor
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(tooling)\nx-ci-monitor\SKILL.md`
- **Description**: Monitor Nx Cloud CI pipeline status and handle self-healing fixes automatically. Use when user says "watch CI", "monitor pipeline", "check CI status", "fix CI failures", or "self-heal CI". Requires Nx Cloud connection. Do NOT use for local task execution (use nx-run-tasks) or general CI debugging outside Nx Cloud.

### nx-generate
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(tooling)\nx-generate\SKILL.md`
- **Description**: Generate code using Nx generators — scaffold projects, libraries, features, or run workspace-specific generators with proper discovery, validation, and verification. Use when user says "create a new library", "scaffold a component", "generate code with Nx", "run a generator", "nx generate", or any code scaffolding task in a monorepo. Prefers local workspace-plugin generators over external plugins. Do NOT use for running build/test/lint tasks (use nx-run-tasks) or workspace configuration (use nx-workspace).

### nx-run-tasks
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(tooling)\nx-run-tasks\SKILL.md`
- **Description**: Execute build, test, lint, serve, and other tasks in an Nx workspace using single runs, run-many, and affected commands. Use when user says "run tests", "build my app", "lint affected", "serve the project", "run all tasks", or "nx affected". Do NOT use for code generation (use nx-generate) or workspace configuration (use nx-workspace).

### nx-workspace
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(tooling)\nx-workspace\SKILL.md`
- **Description**: Configure, explore, and optimize Nx monorepo workspaces. Use when setting up Nx, exploring workspace structure, configuring project boundaries, analyzing affected projects, optimizing build caching, or implementing CI/CD with affected commands. Keywords — nx, monorepo, workspace, projects, targets, affected. Do NOT use for running tasks (use nx-run-tasks) or code generation with generators (use nx-generate).

### playwright-skill
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\tech-leads-club\packages\skills-catalog\skills\(web-automation)\playwright-skill\SKILL.md`
- **Description**: Complete browser automation with Playwright. Auto-detects dev servers, writes clean test scripts to /tmp. Test pages, fill forms, take screenshots, check responsive design, validate UX, test login flows, check links, automate any browser task. Use when user wants to test websites, automate browser interactions, validate web functionality, or perform any browser-based testing. Do NOT use for quick page debugging or network inspection (use chrome-devtools instead).

### ckm:banner-design
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\ui-ux-pro-max\.claude\skills\banner-design\SKILL.md`
- **Description**: Design banners for social media, ads, website heroes, creative assets, and print. Multiple art direction options with AI-generated visuals. Actions: design, create, generate banner. Platforms: Facebook, Twitter/X, LinkedIn, YouTube, Instagram, Google Display, website hero, print. Styles: minimalist, gradient, bold typography, photo-based, illustrated, geometric, retro, glassmorphism, 3D, neon, duotone, editorial, collage. Uses ui-ux-pro-max, frontend-design, ai-artist, ai-multimodal skills.

### ckm:brand
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\ui-ux-pro-max\.claude\skills\brand\SKILL.md`
- **Description**: Brand voice, visual identity, messaging frameworks, asset management, brand consistency. Activate for branded content, tone of voice, marketing assets, brand compliance, style guides.

### ckm:design
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\ui-ux-pro-max\.claude\skills\design\SKILL.md`
- **Description**: Comprehensive design skill: brand identity, design tokens, UI styling, logo generation (55 styles, Gemini AI), corporate identity program (50 deliverables, CIP mockups), HTML presentations (Chart.js), banner design (22 styles, social/ads/web/print), icon design (15 styles, SVG, Gemini 3.1 Pro), social photos (HTML→screenshot, multi-platform). Actions: design logo, create CIP, generate mockups, build slides, design banner, generate icon, create social photos, social media images, brand identity, design system. Platforms: Facebook, Twitter, LinkedIn, YouTube, Instagram, Pinterest, TikTok, Threads, Google Ads.

### ckm:design-system
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\ui-ux-pro-max\.claude\skills\design-system\SKILL.md`
- **Description**: Token architecture, component specifications, and slide generation. Three-layer tokens (primitive→semantic→component), CSS variables, spacing/typography scales, component specs, strategic slide creation. Use for design tokens, systematic design, brand-compliant presentations.

### ckm:slides
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\ui-ux-pro-max\.claude\skills\slides\SKILL.md`
- **Description**: Create strategic HTML presentations with Chart.js, design tokens, responsive layouts, copywriting formulas, and contextual slide strategies.

### ckm:ui-styling
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch2\ui-ux-pro-max\.claude\skills\ui-styling\SKILL.md`
- **Description**: Create beautiful, accessible user interfaces with shadcn/ui components (built on Radix UI + Tailwind), Tailwind CSS utility-first styling, and canvas-based visual designs. Use when building user interfaces, implementing design systems, creating responsive layouts, adding accessible components (dialogs, dropdowns, forms, tables), customizing themes and colors, implementing dark mode, generating visual designs and posters, or establishing consistent styling patterns across applications.

### bridge
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\Antigravity-Architect\src\antigravity_architect\resources\templates\skills\bridge\SKILL.md`
- **Description**: Multi-repo context sharing and project handoff utilities.

### env_context
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\Antigravity-Architect\src\antigravity_architect\resources\templates\skills\env_context\SKILL.md`
- **Description**: Detects the current OS, python environment, and Docker status.

### git_automation
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\Antigravity-Architect\src\antigravity_architect\resources\templates\skills\git_automation\SKILL.md`
- **Description**: Safe git operations.

### secrets_manager
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\Antigravity-Architect\src\antigravity_architect\resources\templates\skills\secrets_manager\SKILL.md`
- **Description**: Handle API keys.

### backend-agent
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\AntiGravity-Launchpad\.agent\skills\backend-agent\SKILL.md`
- **Description**: Backend specialist for APIs, databases, authentication using FastAPI with clean architecture (Repository/Service/Router pattern)

### commit
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\AntiGravity-Launchpad\.agent\skills\commit\SKILL.md`
- **Description**: Create git commits following Conventional Commits specification with project-specific branch naming rules

### debug-agent
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\AntiGravity-Launchpad\.agent\skills\debug-agent\SKILL.md`
- **Description**: Bug diagnosis and fixing specialist - analyzes errors, identifies root causes, provides fixes, and writes regression tests

### frontend-agent
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\AntiGravity-Launchpad\.agent\skills\frontend-agent\SKILL.md`
- **Description**: Frontend specialist for React, Next.js, TypeScript with FSD-lite architecture, shadcn/ui, and design system alignment

### mobile-agent
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\AntiGravity-Launchpad\.agent\skills\mobile-agent\SKILL.md`
- **Description**: Mobile specialist for Flutter, React Native, and cross-platform mobile development

### orchestrator
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\AntiGravity-Launchpad\.agent\skills\orchestrator\SKILL.md`
- **Description**: Automated multi-agent orchestrator that spawns CLI subagents in parallel, coordinates via MCP Memory, and monitors progress

### pm-agent
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\AntiGravity-Launchpad\.agent\skills\pm-agent\SKILL.md`
- **Description**: Product manager that decomposes requirements into actionable tasks with priorities and dependencies

### qa-agent
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\AntiGravity-Launchpad\.agent\skills\qa-agent\SKILL.md`
- **Description**: Quality assurance specialist for security, performance, accessibility, and comprehensive testing

### multi-agent-workflow
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\AntiGravity-Launchpad\.agent\skills\workflow-guide\SKILL.md`
- **Description**: Guide for coordinating PM, Frontend, Backend, Mobile, and QA agents on complex projects via CLI

### design-system-architect
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills\.agents\skills\design-system-architect\SKILL.md`
- **Description**: Sets up and maintains a world-class Design System infrastructure using Storybook, focusing on documentation, token integration, and accessibility standards.

### ab-test-setup
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\ab-test-setup\SKILL.md`
- **Description**: Structured guide for setting up A/B tests with mandatory gates for hypothesis, metrics, and execution readiness.

### agent-tool-builder
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\agent-tool-builder\SKILL.md`
- **Description**: Tools are how AI agents interact with the world. A well-designed tool is the difference between an agent that works and one that hallucinates, fails silently, or costs 10x more tokens than necessary.  This skill covers tool design from schema to error handling. JSON Schema best practices, description writing that actually helps the LLM, validation, and the emerging MCP standard that's becoming the lingua franca for AI tools.  Key insight: Tool descriptions are more important than tool implementa

### analytics-tracking
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\analytics-tracking\SKILL.md`
- **Description**: >

### bash-linux
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\bash-linux\SKILL.md`
- **Description**: Bash/Linux terminal patterns. Critical commands, piping, error handling, scripting. Use when working on macOS or Linux systems.

### browser-automation
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\browser-automation\SKILL.md`
- **Description**: Browser automation powers web testing, scraping, and AI agent interactions. The difference between a flaky script and a reliable system comes down to understanding selectors, waiting strategies, and anti-detection patterns.  This skill covers Playwright (recommended) and Puppeteer, with patterns for testing, scraping, and agentic browser control. Key insight: Playwright won the framework war. Unless you need Puppeteer's stealth ecosystem or are Chrome-only, Playwright is the better choice in 202

### clean-code
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\clean-code\SKILL.md`
- **Description**: Pragmatic coding standards - concise, direct, no over-engineering, no unnecessary comments

### code-review-checklist
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\code-review-checklist\SKILL.md`
- **Description**: Comprehensive checklist for conducting thorough code reviews covering functionality, security, performance, and maintainability

### competitor-alternatives
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\competitor-alternatives\SKILL.md`
- **Description**: When the user wants to create competitor comparison or alternative pages for SEO and sales enablement. Also use when the user mentions 'alternative page,' 'vs page,' 'competitor comparison,' 'comparison page,' '[Product] vs [Product],' '[Product] alternative,' or 'competitive landing pages.' Covers four formats: singular alternative, plural alternatives, you vs competitor, and competitor vs competitor. Emphasizes deep research, modular content architecture, and varied section types beyond feature tables.

### concise-planning
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\concise-planning\SKILL.md`
- **Description**: Use when a user asks for a plan for a coding task, to generate a clear, actionable, and atomic checklist.

### content-creator
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\content-creator\SKILL.md`
- **Description**: Create SEO-optimized marketing content with consistent brand voice. Includes brand voice analyzer, SEO optimizer, content frameworks, and social media templates. Use when writing blog posts, creating social media content, analyzing brand voice, optimizing SEO, planning content calendars, or when user mentions content creation, brand voice, SEO optimization, social media marketing, or content strategy.

### copy-editing
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\copy-editing\SKILL.md`
- **Description**: When the user wants to edit, review, or improve existing marketing copy. Also use when the user mentions 'edit this copy,' 'review my copy,' 'copy feedback,' 'proofread,' 'polish this,' 'make this better,' or 'copy sweep.' This skill provides a systematic approach to editing marketing copy through multiple focused passes.

### copywriting
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\copywriting\SKILL.md`
- **Description**: >

### deployment-procedures
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\deployment-procedures\SKILL.md`
- **Description**: Production deployment principles and decision-making. Safe deployment workflows, rollback strategies, and verification. Teaches thinking, not scripts.

### design-document
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\design-document\SKILL.md`
- **Description**: Create comprehensive design documents that establish shared vision for eLearning projects. Use when moving from discovery to design, creating course architecture, defining instructional approach, or building detailed design specifications.

### discovery-workshop
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\discovery-workshop\SKILL.md`
- **Description**: Guide synthesis of Action Mapping workshop outputs into structured discovery documents. Use when processing workshop notes, creating needs analysis, building learner personas, summarizing discovery sessions, or preparing design briefs from stakeholder meetings.

### docker-expert
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\docker-expert\SKILL.md`
- **Description**: Docker containerization expert with deep knowledge of multi-stage builds, image optimization, container security, Docker Compose orchestration, and production deployment patterns. Use PROACTIVELY for Dockerfile optimization, container issues, image size problems, security hardening, networking, and orchestration challenges.

### documentation-templates
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\documentation-templates\SKILL.md`
- **Description**: Documentation templates and structure guidelines. README, API docs, code comments, and AI-friendly documentation.

### email-sequence
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\email-sequence\SKILL.md`
- **Description**: When the user wants to create or optimize an email sequence, drip campaign, automated email flow, or lifecycle email program. Also use when the user mentions "email sequence," "drip campaign," "nurture sequence," "onboarding emails," "welcome sequence," "re-engagement emails," "email automation," or "lifecycle emails." For in-app onboarding, see onboarding-cro.

### excalidraw
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\excalidraw\SKILL.md`
- **Description**: Use when working with *.excalidraw or *.excalidraw.json files, user mentions diagrams/flowcharts, or requests architecture visualization - delegates all Excalidraw operations to subagents to prevent context exhaustion from verbose JSON (single files: 4k-22k tokens, can exceed read limits)

### form-cro
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\form-cro\SKILL.md`
- **Description**: >

### game-changing-features
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\game-changing-features\SKILL.md`
- **Description**: Find 10x product opportunities and high-leverage improvements. Use when user wants strategic product thinking, mentions '10x', wants to find high-impact features, or says 'what would make this 10x better', 'product strategy', or 'what should we build next'.

### git-pushing
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\git-pushing\SKILL.md`
- **Description**: Stage, commit, and push git changes with conventional commit messages. Use when user wants to commit and push changes, mentions pushing to remote, or asks to save and push their work. Also activates when user says "push changes", "commit and push", "push this", "push to github", or similar git workflow requests.

### humanizer
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\humanizer\SKILL.md`
- **Description**: |

### i18n-localization
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\i18n-localization\SKILL.md`
- **Description**: Internationalization and localization patterns. Detecting hardcoded strings, managing translations, locale files, RTL support.

### kaizen
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\kaizen\SKILL.md`
- **Description**: Guide for continuous improvement, error proofing, and standardization. Use this skill when the user wants to improve code quality, refactor, or discuss process improvements.

### marp-slide
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\marp-slide\SKILL.md`
- **Description**: Create professional Marp presentation slides with 7 beautiful themes (default, minimal, colorful, dark, gradient, tech, business). Use when users request slide creation, presentations, or Marp documents. Supports custom themes, image layouts, and "make it look good" requests with automatic quality improvements.

### mermaid-diagrams
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\mermaid-diagrams\SKILL.md`
- **Description**: Comprehensive guide for creating software diagrams using Mermaid syntax. Use when users need to create, visualize, or document software through diagrams including class diagrams (domain modeling, object-oriented design), sequence diagrams (application flows, API interactions, code execution), flowcharts (processes, algorithms, user journeys), entity relationship diagrams (database schemas), C4 architecture diagrams (system context, containers, components), state diagrams, git graphs, pie charts, gantt charts, or any other diagram type. Triggers include requests to "diagram", "visualize", "model", "map out", "show the flow", or when explaining system architecture, database design, code structure, or user/application flows.

### moodle-external-api-development
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\moodle-external-api-development\SKILL.md`
- **Description**: Create custom external web service APIs for Moodle LMS. Use when implementing web services for course management, user tracking, quiz operations, or custom plugin functionality. Covers parameter validation, database operations, error handling, service registration, and Moodle coding standards.

### pricing-strategy
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\pricing-strategy\SKILL.md`
- **Description**: Design pricing, packaging, and monetization strategies based on value, customer willingness to pay, and growth objectives.

### prompt-engineering
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\prompt-engineering\SKILL.md`
- **Description**: Expert guide on prompt engineering patterns, best practices, and optimization techniques. Use when user wants to improve prompts, learn prompting strategies, or debug agent behavior.

### seo-audit
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\seo-audit\SKILL.md`
- **Description**: >

### seo-fundamentals
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\seo-fundamentals\SKILL.md`
- **Description**: >

### server-management
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\server-management\SKILL.md`
- **Description**: Server management principles and decision-making. Process management, monitoring strategy, and scaling decisions. Teaches thinking, not commands.

### session-handoff
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\session-handoff\SKILL.md`
- **Description**: Creates comprehensive handoff documents for seamless AI agent session transfers. Triggered when: (1) user requests handoff/memory/context save, (2) context window approaches capacity, (3) major task milestone completed, (4) work session ending, (5) user says 'save state', 'create handoff', 'I need to pause', 'context is getting full', (6) resuming work with 'load handoff', 'resume from', 'continue where we left off'. Proactively suggests handoffs after substantial work (multiple file edits, complex debugging, architecture decisions). Solves long-running agent context exhaustion by enabling fresh agents to continue with zero ambiguity.

### skill-judge
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\skill-judge\SKILL.md`
- **Description**: Evaluate Agent Skill design quality against official specifications and best practices. Use when reviewing, auditing, or improving SKILL.md files and skill packages. Provides multi-dimensional scoring and actionable improvement suggestions.

### storyboard-builder
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\storyboard-builder\SKILL.md`
- **Description**: Generate detailed storyboards for eLearning courses from design documents or content outlines. Use when creating storyboards for Articulate Rise, Articulate Storyline, screen-by-screen specifications, or preparing content for development.

### stripe-integration
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\stripe-integration\SKILL.md`
- **Description**: Get paid from day one. Payments, subscriptions, billing portal, webhooks, metered billing, Stripe Connect. The complete guide to implementing Stripe correctly, including all the edge cases that will bite you at 3am.  This isn't just API calls - it's the full payment system: handling failures, managing subscriptions, dealing with dunning, and keeping revenue flowing. Use when: stripe, payments, subscription, billing, checkout.

### web-performance-optimization
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\web-performance-optimization\SKILL.md`
- **Description**: Optimize website and web application performance including loading speed, Core Web Vitals, bundle size, caching strategies, and runtime performance

### WordPress Penetration Testing
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\wordpress-penetration-testing\SKILL.md`
- **Description**: This skill should be used when the user asks to "pentest WordPress sites", "scan WordPress for vulnerabilities", "enumerate WordPress users, themes, or plugins", "exploit WordPress vulnerabilities", or "use WPScan". It provides comprehensive WordPress security assessment methodologies.

### workflow-automation
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\workflow-automation\SKILL.md`
- **Description**: Workflow automation is the infrastructure that makes AI agents reliable. Without durable execution, a network hiccup during a 10-step payment flow means lost money and angry customers. With it, workflows resume exactly where they left off.  This skill covers the platforms (n8n, Temporal, Inngest) and patterns (sequential, parallel, orchestrator-worker) that turn brittle scripts into production-grade automation.  Key insight: The platforms make different tradeoffs. n8n optimizes for accessibility

### zapier-make-patterns
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\antigravity-skills-workflows\.agent\skills\zapier-make-patterns\SKILL.md`
- **Description**: No-code automation democratizes workflow building. Zapier and Make (formerly Integromat) let non-developers automate business processes without writing code. But no-code doesn't mean no-complexity - these platforms have their own patterns, pitfalls, and breaking points.  This skill covers when to use which platform, how to build reliable automations, and when to graduate to code-based solutions. Key insight: Zapier optimizes for simplicity and integrations (7000+ apps), Make optimizes for power 

### installing-brand-design-skills
- **Source**: `C:\CodeIA\.agent\skills\temp_skills_batch3\design-like\SKILL.md`
- **Description**: Helps Claude install and use brand-specific design skills for popular product brands (Apple, Linear, Stripe, Shopify, Notion, Figma, Spotify, Slack, Discord, IBM, Salesforce) by running the design-like CLI to generate Agent Skills and IDE configuration so code and UI match the chosen brand’s design language.

### vvveb-cms
- **Source**: `C:\CodeIA\.agent\skills\vvveb-cms\SKILL.md`
- **Description**: Expert en développement, déploiement et intégration du CMS Vvveb — un CMS PHP open-source avec page builder drag & drop, API GraphQL/REST, e-commerce natif et support headless. Utiliser quand l'agent doit créer, configurer, étendre ou connecter Vvveb à un frontend React/Vue.


