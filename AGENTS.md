# LA STATION DU CODE (Portfolio)

Interactive 3D WebGL (React Three Fiber) portfolio with Next.js App Router.

## Tech Stack

- **Language:** TypeScript / Node.js
- **Framework:** Next.js (App Router), React
- **Styling:** Custom CSS with Variables (`globals.css`), Tailwind utilities
- **Animations:** Framer Motion, React Three Fiber (WebGL)

## Code Quality Standards

- Maintain immersive performance: Optimize Three.js elements and Framer Motion animations to prevent layout shifts or frame drops.
- Clean Architecture & SOLID Principles: Adhere to strict component separation as required by RNCP Level 7 validation.
- Persistence and Data: Data is currently handled via PostreSQL (InsForge integration) or static JSON files (skills).

## Project Structure

```
├── src/
│   ├── app/ (Next.js pages & layouts)
│   ├── components/ (UI & 3D Components)
│   └── data/ (Static content)
├── .agents/ (Codified Context & Custom Skills)
└── public/ (Assets)
```

## Build & Run

- Install dependencies: `npm install`
- Run dev server: `npm run dev`
- Production build: `npm run build`
- Start production: `npm run start`

## Architecture Overview

### Layout & Navigation
Pages are wrapped in `layout.tsx` and transitions are managed by `template.tsx` with Framer Motion `AnimatePresence`. Global navigation features animated dots and underlines.

### Theming & Styling
`globals.css` is the single source of truth for design tokens (e.g., `--background`, `--color-aura-gold`) and utility classes (e.g., `.glass`, `.hud-border`). Do not alter `--background` without verifying compatibility with the video assets (e.g., `voila.mp4`).

### Home Animations (Atrium Central)
The root page `/` (`HomeContent.tsx`) is heavily animated, featuring `TextReveal`, `StaggerReveal`, `Magnetic` effects, and interactive background boxes. It integrates an `ExpertVault` interactive code demo.

## Key Conventions

### File Organization
- Next.js App Router conventions: `page.tsx` for route entry, `layout.tsx` for shared UI.
- Sections and animations are isolated into their respective subdirectories (`sections/`, `animations/`).

### Styling Rules
- Use CSS variables defined in `globals.css` for all colors and glows.
- Use `cn` from `@/lib/utils` for conditional class merging.

## Custom Agents (Skills)

Specialized agents in `.agents/skills/`. **Invoke these proactively.**

### Quick Reference

| Skill | Focus |
|-------|---------------|
| `google-maps-scraper` | Scrape business data from Google Maps |
| `google-maps-leads` | Generate qualified leads with scoring |
| `local-business-finder` | Find businesses by category and location |
| `business-email-extractor` | Extract verified business emails |
| `google-maps-export` | Export to CSV/JSON/HubSpot/Pipedrive |
| `cold-email-local-business` | Write personalized outreach from CSV |
| `competitor-analysis-local` | Analyze competitors from CSV data |
| `google-maps-reviews-scraper` | Analyze reviews and reputation |

## Context Retrieval MCP Server

Use context-retrieval MCP tools FIRST when exploring unfamiliar code - faster than manual searching.

**IMPORTANT:** Always call `list_subsystems()` or `find_relevant_context()` before searching the codebase. The MCP server knows the project architecture.

| Tool | Use For |
|------|---------|
| `mcp__context_retrieval__list_subsystems` | See all architectural subsystems |
| `mcp__context_retrieval__find_relevant_context` | Find files matching a task description |
| `mcp__context_retrieval__search_context_documents` | Search architecture docs |

## Key Files Reference

| Area | Files |
|------|-------|
| Root Layout | `src/app/layout.tsx`, `src/app/template.tsx` |
| Global Styles | `src/app/globals.css` |
| Home Page | `src/app/HomeContent.tsx` |
| Skills Data | `src/data/skills.json` |
