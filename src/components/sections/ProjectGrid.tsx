"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Database, Code, BrainCircuit, ShieldCheck, BarChart3, Workflow, ArrowUpRight } from "lucide-react"
import { AreaChart, Area, ResponsiveContainer } from "recharts"

const mockData = [
  { name: 'Jan', value: 400 },
  { name: 'Fév', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Avr', value: 800 },
  { name: 'Mai', value: 500 },
  { name: 'Juin', value: 900 },
]

type Category = "all" | "web" | "data" | "ai" | "security" | "automation"

const projects = [
  {
    id: 1,
    title: "Infra_Secure_Core",
    description: "Système DevSecOps autonome avec agents PowerShell pour la conformité ISO 27001 de parcs hétérogènes. Pattern Pull-State via agents autonomes pour une remédiation d'état constante.",
    category: "security",
    tags: ["PowerShell 7", "ISO 27001", "DevSecOps", "Hardened OS"],
    icon: ShieldCheck,
    kpi: "98% conformité ISO 27001 maintenue",
    // red-team-tactics: métriques sécurité
    perf: { label: "OWASP Couverture", value: "A+" },
    status: "PRODUCTION"
  },
  {
    id: 2,
    title: "Phoenix_Sync_Engine",
    description: "Dashboard temps réel à 144 FPS via External-Store pattern. Résout la congestion de l'Event Loop lors de synchronisation à haute fréquence (160Hz) sur 12 flux concurrents.",
    category: "web",
    tags: ["Next.js", "Framer Motion", "Custom Hooks", "TypeScript"],
    icon: Code,
    kpi: "144 FPS stables — 85% moins de re-renders",
    hasChart: true,
    // performance-profiling: Core Web Vitals
    perf: { label: "LCP", value: "<1.2s" },
    status: "LIVE"
  },
  {
    id: 3,
    title: "DocuMind_Agent",
    description: "Agent IA d'extraction de données structurées depuis rapports non-structurés. Pipeline RAG avec VectorDB pour une récupération sémantique à haute précision.",
    category: "ai",
    tags: ["LangChain", "OpenAI", "FastAPI", "VectorDB"],
    icon: BrainCircuit,
    kpi: "92% précision d'extraction — 3x plus rapide",
    perf: { label: "Précision RAG", value: "92%" },
    status: "BETA"
  },
  {
    id: 4,
    title: "KPI_Restauration_Hub",
    description: "Pipelines ETL et tableaux de bord interactifs pour la visualisation des marges et volumes. Analyse prédictive des tendances de commandes.",
    category: "data",
    tags: ["Python", "Pandas", "React", "Recharts"],
    icon: BarChart3,
    kpi: "12 flux de données unifiés — latence <50ms",
    hasChart: true,
    perf: { label: "Latence ETL", value: "<50ms" },
    status: "PRODUCTION"
  },
  {
    id: 5,
    title: "AutoSkills_Indexer",
    description: "Système d'auto-indexation de compétences agents. Crawler asynchrone qui maintient un registre structuré de 1000+ skills IA disponibles pour orchestration.",
    category: "automation",
    tags: ["Python", "AsyncIO", "Redis", "CrewAI"],
    icon: Workflow,
    kpi: "1000+ skills indexés — 99.9% uptime",
    perf: { label: "Uptime", value: "99.9%" },
    status: "LIVE"
  },
  {
    id: 6,
    title: "SaaS_Logistique_Core",
    description: "Gestion de flux physiques en temps réel avec modélisation complexe de bases de données, interface réactive et système d'alertes intégré.",
    category: "web",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    icon: Database,
    kpi: "40% réduction des erreurs de stock",
    perf: { label: "CLS", value: "0.02" },
    status: "PRODUCTION"
  }
]

const STATUS_COLORS: Record<string, string> = {
  PRODUCTION: "text-emerald-500 border-emerald-500/30 bg-emerald-500/5",
  LIVE: "text-primary border-primary/30 bg-primary/5",
  BETA: "text-orange-600 border-orange-600/30 bg-orange-600/5",
}

const FILTERS = [
  { id: "all", label: "Tous", count: projects.length },
  { id: "web", label: "Web Dev", count: projects.filter(p => p.category === "web").length },
  { id: "data", label: "Data", count: projects.filter(p => p.category === "data").length },
  { id: "ai", label: "IA", count: projects.filter(p => p.category === "ai").length },
  { id: "security", label: "Security", count: projects.filter(p => p.category === "security").length },
  { id: "automation", label: "Automation", count: projects.filter(p => p.category === "automation").length },
]

const getGradient = (category: string) => {
  switch (category) {
    case 'security': return 'from-emerald-500/10 to-teal-500/10';
    case 'web': return 'from-blue-500/10 to-cyan-500/10';
    case 'ai': return 'from-cyan-500/10 to-teal-500/10';
    case 'data': return 'from-orange-500/10 to-red-500/10';
    case 'automation': return 'from-primary/20 to-yellow-500/10';
    default: return 'from-muted-foreground/10 to-muted-foreground/10';
  }
}

export function ProjectGrid() {
  const [filter, setFilter] = useState<Category>("all")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const filteredProjects = projects.filter(p => filter === "all" || p.category === filter)

  return (
    <section className="py-40 relative overflow-hidden bg-background" id="projects">
      {/* Layered background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(56,189,248,0.04)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container px-6 md:px-12 relative z-10">

        {/* Editorial Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="w-12 h-px bg-primary/40" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary/60">03 — Projets</span>
          </motion.div>

          <h2 className="font-luxury text-[clamp(3rem,9vw,8rem)] font-normal leading-[0.88] tracking-tight text-foreground mb-8">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              className="block"
            >
              Productions.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="block italic font-light text-primary"
            >
              Réelles.
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground text-base max-w-xl font-light"
          >
            Pipelines de données, agents IA et applications. Chaque projet résout un problème mesurable.
          </motion.p>

          {/* Stats Row — performance-profiling skill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-6 pt-12 border-t border-aura-gold/20 mt-12"
          >
            {[
              { label: "En production", val: "4", suffix: "" },
              { label: "Technologies", val: "20", suffix: "+" },
              { label: "Conformité ISO 27001", val: "98", suffix: "%" },
              { label: "Re-renders réduits", val: "85", suffix: "%" },
              { label: "LCP moyen", val: "1.2", suffix: "s" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="flex flex-col gap-1 flex-1 min-w-[140px] group cursor-default"
              >
                <div className="flex items-baseline gap-1">
                  <span className="font-luxury text-4xl md:text-5xl font-normal text-primary group-hover:text-foreground transition-colors duration-500">{stat.val}</span>
                  {stat.suffix && <span className="text-xl font-light text-primary/60">{stat.suffix}</span>}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-wrap gap-1.5 mb-16 p-1 bg-primary/[0.02] rounded-xl border border-aura-gold/20 backdrop-blur w-fit shadow-sm"
        >
          {FILTERS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as Category)}
              className={`px-4 py-2 rounded-lg text-[9px] uppercase tracking-widest font-mono transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                filter === cat.id
                  ? "bg-primary/10 text-primary border border-aura-gold/40 font-bold"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/5 border border-transparent"
              }`}
            >
              {cat.label}
              <span className="text-[8px] opacity-60">{cat.count}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.4, 0, 0.2, 1] }}
                className="group relative bg-white/50 backdrop-blur-md border border-aura-gold/20 hover:border-aura-gold/60 hover:shadow-[0_20px_50px_-12px_rgba(212,175,55,0.25),0_0_20px_-5px_rgba(212,175,55,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden rounded-3xl cursor-pointer"
              >
                {/* Gold top accent line — shimmer on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-aura-gold/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {/* Subtle ambient glow behind card on hover */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-aura-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Project illustration */}
                <div className="relative h-48 w-full overflow-hidden border-b border-aura-gold/20 group-hover:border-aura-gold/40 transition-colors duration-500 flex items-center justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(project.category)} opacity-60 group-hover:opacity-90 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  {/* Centre icon — glow on hover */}
                  <div className="relative z-0 group-hover:drop-shadow-[0_0_20px_rgba(2,132,199,0.4)] transition-all duration-700">
                    <project.icon className="w-20 h-20 text-muted-foreground/25 group-hover:text-primary/70 group-hover:scale-110 transition-all duration-700" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 p-2.5 bg-background/80 backdrop-blur rounded-lg text-primary border border-aura-gold/25 z-10 group-hover:border-aura-gold/65 group-hover:shadow-[0_4px_12px_rgba(212,175,55,0.15)] transition-all duration-400">
                    <project.icon className="w-4 h-4" />
                  </div>
                  {/* Status badge */}
                  <div className={`absolute top-4 right-4 px-2.5 py-1 bg-background/80 backdrop-blur rounded-full text-[8px] font-mono uppercase tracking-wider border z-10 ${STATUS_COLORS[project.status]}`}>
                    {project.status}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-base font-syne font-bold text-foreground group-hover:text-primary transition-colors duration-400 leading-snug">
                      {project.title}
                    </h3>
                    <div className="flex gap-1 shrink-0">
                      <Button size="icon" variant="ghost" className="h-7 w-7 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all">
                        <Github className="w-3 h-3" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-7 w-7 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-muted-foreground font-light leading-relaxed text-sm flex-1">
                    {project.description}
                  </p>

                  {/* Micro chart */}
                  {isMounted && project.hasChart && (
                    <div className="h-16 w-full rounded-lg overflow-hidden opacity-40 group-hover:opacity-70 transition-opacity">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={mockData}>
                          <defs>
                            <linearGradient id={`grad-${project.id}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="currentColor" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="currentColor" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <Area className="text-primary" type="monotone" dataKey="value" stroke="currentColor" strokeWidth={1} fillOpacity={1} fill={`url(#grad-${project.id})`} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  )}

                  {/* KPI */}
                  <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-primary/5 to-aura-gold/5 border border-aura-gold/20 group-hover:border-aura-gold/55 group-hover:shadow-[0_4px_16px_rgba(212,175,55,0.1)] transition-all duration-400">
                    <div className="flex items-center gap-2">
                      <ArrowUpRight size={11} className="text-aura-gold shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span className="text-xs font-light text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">{project.kpi}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-aura-gold/20">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-mono uppercase tracking-wider text-muted-foreground bg-primary/5 px-2.5 py-1 rounded border border-aura-gold/15 hover:border-aura-gold/40 hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
