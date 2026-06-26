"use client";

import { useState } from "react";
import { 
  Workflow, 
  Truck, 
  Database, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Zap,
  ShieldCheck,
  Network
} from "lucide-react";

// Steps comparing physical logistics flow with digital data flow
const COMPARISON_STEPS = [
  {
    number: "01",
    title: "Ingestion / Réception",
    logistics: {
      label: "Flux Physique",
      desc: "Pilotage des arrivages, coordination des quais et réception des flux de marchandises (exigence HACCP/qualité).",
      metric: "Milliers de palettes / jour"
    },
    data: {
      label: "Flux Numérique",
      desc: "Ingestion de données multi-sources, webhooks temps réel, ETL initiaux et connecteurs d'APIs résilients.",
      metric: "Ingestion de flux JSON / SQL"
    },
    color: "from-blue-500/20 to-cyan-500/5",
    accent: "text-blue-500"
  },
  {
    number: "02",
    title: "Tri & Validation",
    logistics: {
      label: "Flux Physique",
      desc: "Supervision du contrôle qualité, gestion des anomalies de livraison et pilotage du dispatching en zone d'aiguillage.",
      metric: "Inventaire et traçabilité"
    },
    data: {
      label: "Flux Numérique",
      desc: "Nettoyage des données, typage strict avec TypeScript, validation de schémas par Zod et gestion des cas d'erreur.",
      metric: "Zod Schema Validation"
    },
    color: "from-cyan-500/20 to-teal-500/5",
    accent: "text-cyan-600"
  },
  {
    number: "03",
    title: "Stockage Optimisé",
    logistics: {
      label: "Flux Physique",
      desc: "Cartographie et optimisation de l'espace de stockage, stratégie d'adressage des palettes pour un accès rapide.",
      metric: "Gestion de stocks massifs"
    },
    data: {
      label: "Flux Numérique",
      desc: "Indexation de bases de données (SQL/NoSQL), index vectoriels pour IA, et structuration de Data Warehouses.",
      metric: "Index PostgreSQL / Vector Store"
    },
    color: "from-teal-500/20 to-emerald-500/5",
    accent: "text-teal-600"
  },
  {
    number: "04",
    title: "Ordonnancement / Dispatch",
    logistics: {
      label: "Flux Physique",
      desc: "Ordonnancement des commandes clients, regroupement intelligent et priorisation des départs d'expéditions.",
      metric: "Planification sous contraintes"
    },
    data: {
      label: "Flux Numérique",
      desc: "Planification de pipelines de tâches, files d'attente (Queues) et orchestration de workflows d'agents IA.",
      metric: "LangGraph Agent Coordination"
    },
    color: "from-emerald-500/20 to-green-500/5",
    accent: "text-emerald-600"
  },
  {
    number: "05",
    title: "Livraison / Rendu",
    logistics: {
      label: "Flux Physique",
      desc: "Coordination des expéditions et supervision des départs vers les réseaux de distribution sans rupture de flux.",
      metric: "Zéro Rupture Opérationnelle"
    },
    data: {
      label: "Flux Numérique",
      desc: "Exposition des données via APIs hautement disponibles et rendu d'interfaces web ultra-performantes (Next.js).",
      metric: "Production APIs & Rendu UI"
    },
    color: "from-green-500/20 to-blue-500/5",
    accent: "text-green-600"
  }
];

export function SystemsApproach() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-24 relative z-10" id="systems-approach">
      
      {/* â”€â”€ HEADER â”€â”€ */}
      <div className="space-y-6 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest font-mono">
          <Workflow size={12} className="animate-pulse" />
          Logique des Flux & Systèmes
        </div>
        <h1 className="text-4xl md:text-6xl font-light text-foreground uppercase tracking-tight font-syne">
          <span className="text-foreground [-webkit-text-stroke:2px_theme(colors.slate.900)]">Approche &</span> <span className="text-primary font-black italic">Systèmes</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-sans font-medium">
          Je n&apos;envisage pas le code comme une suite de fonctions, mais comme un système de flux. 
          Mes 15 années à optimiser des flux logistiques physiques se traduisent directement aujourd&apos;hui dans ma rigueur pour concevoir et orchestrer des architectures de données numériques.
        </p>
      </div>

      {/* â”€â”€ THE METAPHOR INTERACTIVE DASHBOARD â”€â”€ */}
      <div className="space-y-10">
        <div className="text-center md:text-left space-y-2 pl-2">
          <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest font-mono">
            {"// Étude de Correspondance : Physique vs. Numérique"}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-tight font-syne">
            La Métaphore Systémique
          </h2>
        </div>

        {/* Step Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {COMPARISON_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden cursor-pointer ${
                  isActive 
                    ? 'border-primary bg-background shadow-lg' 
                    : 'border-border bg-muted/50 hover:bg-muted hover:border-border/80'
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                    {step.number}
                  </span>
                  {isActive && <Zap size={10} className="text-primary animate-bounce" />}
                </div>
                <h3 className={`text-xs md:text-sm font-black uppercase tracking-tight ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {step.title.split(' / ')[0]}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Detail Panel */}
        <div className="p-8 md:p-12 border-border bg-background/90 backdrop-blur-sm relative overflow-hidden rounded-[2.5rem] hud-border shadow-[0_8px_32px_rgba(15,23,42,0.06),0_0_60px_rgba(212,175,55,0.03)]">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[80px] pointer-events-none" />

          {/* Steps Detail Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch relative z-10">
            
            {/* Column A: Physical Logistics */}
            <div className="space-y-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-aura-gold/20 pb-8 md:pb-0 md:pr-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-muted border border-border text-muted-foreground">
                    <Truck size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest font-bold block">
                      Opérations de Terrain (1992 - 2024)
                    </span>
                    <h4 className="text-lg font-bold text-foreground uppercase tracking-tight">
                      {COMPARISON_STEPS[activeStep].logistics.label}
                    </h4>
                  </div>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-medium">
                  {COMPARISON_STEPS[activeStep].logistics.desc}
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2">
                <CheckCircle2 size={12} className="text-muted-foreground" />
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider font-bold">
                  Contrainte : {COMPARISON_STEPS[activeStep].logistics.metric}
                </span>
              </div>
            </div>

            {/* Column B: Digital Data */}
            <div className="space-y-6 flex flex-col justify-between md:pl-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <Database size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-primary uppercase tracking-widest font-bold block">
                      Ingénierie Logicielle & IA (2024 - Présent)
                    </span>
                    <h4 className="text-lg font-bold text-primary uppercase tracking-tight">
                      {COMPARISON_STEPS[activeStep].data.label}
                    </h4>
                  </div>
                </div>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-medium">
                  {COMPARISON_STEPS[activeStep].data.desc}
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2">
                <Zap size={12} className="text-primary" />
                <span className="text-[10px] font-mono text-primary uppercase tracking-wider font-bold">
                  Implémentation : {COMPARISON_STEPS[activeStep].data.metric}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* â”€â”€ THREE ENGINEERING PILLARS â”€â”€ */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] font-mono">
            {"// Piliers d'Expertise"}
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-foreground uppercase tracking-tight font-syne">
            Ce que je <span className="text-primary font-black italic">construis</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Data Engineering */}
          <div className="p-8 rounded-[2.5rem] border border-aura-gold/20 bg-background/90 backdrop-blur-sm hover:border-aura-gold/45 hover:shadow-[0_16px_40px_rgba(212,175,55,0.08),0_4px_16px_rgba(15,23,42,0.06)] transition-all duration-500 flex flex-col justify-between space-y-6 relative overflow-hidden group hud-border">
            <div className="space-y-4">
              <div className="p-3 bg-muted border border-border rounded-xl text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-colors w-fit">
                <Database size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight group-hover:text-primary transition-colors font-syne">
                Data Engineering
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans font-medium">
                Modélisation et mise en place de structures de données fiables. Conception de pipelines de données (ETL/ELT), gestion et optimisation de bases de données relationnelles et vectorielles, et orchestration de flux massifs pour assurer une donnée propre et prête pour l&apos;analyse.
              </p>
            </div>
            <div className="pt-4 border-t border-border flex flex-wrap gap-2">
              {["Python", "SQL", "Databases", "Pipelines"].map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded bg-muted border border-border text-[9px] font-bold text-muted-foreground uppercase tracking-widest font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Pilier 2: AI Agents & Automation — mcp-builder skill */}
          <div className="p-8 rounded-[2.5rem] border border-aura-gold/20 bg-background/90 backdrop-blur-sm hover:border-aura-gold/45 hover:shadow-[0_16px_40px_rgba(212,175,55,0.08),0_4px_16px_rgba(15,23,42,0.06)] transition-all duration-500 flex flex-col justify-between space-y-6 relative overflow-hidden group hud-border">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-muted border border-border rounded-xl text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-colors">
                  <Cpu size={24} />
                </div>
                {/* mcp-builder: badge MCP visible */}
                <span className="px-2.5 py-1 rounded-full bg-aura-gold/10 border border-aura-gold/30 text-[8px] font-black text-aura-gold uppercase tracking-widest font-mono flex items-center gap-1">
                  <Network size={8} />
                  MCP Architect
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight group-hover:text-primary transition-colors font-syne">
                Systèmes d&apos;Agents IA
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans font-medium">
                Création et orchestration d&apos;architectures d&apos;agents intelligents autonomes. Utilisation du protocole <strong className="text-foreground">MCP (Model Context Protocol)</strong> pour connecter les modèles de langage à vos outils et bases de données. Serveurs MCP personnalisés, workflows LangGraph et automatisation de processus métiers complexes.
              </p>
            </div>
            <div className="pt-4 border-t border-border flex flex-wrap gap-2">
              {["MCP Server", "LangGraph", "CrewAI", "LangChain", "LLMs"].map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded bg-muted border border-border text-[9px] font-bold text-muted-foreground uppercase tracking-widest font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Pilier 3: Next.js & Frontend precision */}
          <div className="p-8 rounded-[2.5rem] border border-aura-gold/20 bg-background/90 backdrop-blur-sm hover:border-aura-gold/45 hover:shadow-[0_16px_40px_rgba(212,175,55,0.08),0_4px_16px_rgba(15,23,42,0.06)] transition-all duration-500 flex flex-col justify-between space-y-6 relative overflow-hidden group hud-border">
            <div className="space-y-4">
              <div className="p-3 bg-muted border border-border rounded-xl text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-colors w-fit">
                <Layers size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight group-hover:text-primary transition-colors font-syne">
                Rendu Web de Précision
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans font-medium">
                Développement d&apos;applications web modernes, rapides et hautement interactives avec le framework Next.js. Intégration de designs fluides sous Tailwind CSS avec une logique métier type-safe (TypeScript) et des animations millimétrées (Framer Motion). Core Web Vitals optimisés (LCP &lt;1.2s, CLS &lt;0.05).
              </p>
            </div>
            <div className="pt-4 border-t border-border flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded bg-muted border border-border text-[9px] font-bold text-muted-foreground uppercase tracking-widest font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Pilier 4: DevSecOps — red-team-tactics + vulnerability-scanner skills */}
          <div className="p-8 rounded-[2.5rem] border border-aura-gold/20 bg-background/90 backdrop-blur-sm hover:border-emerald-500/20 hover:shadow-[0_16px_40px_rgba(16,185,129,0.06)] transition-all duration-500 flex flex-col justify-between space-y-6 relative overflow-hidden group hud-border">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-muted border border-border rounded-xl text-muted-foreground group-hover:text-emerald-500 group-hover:border-emerald-500/20 transition-colors">
                  <ShieldCheck size={24} />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[8px] font-black text-emerald-500 uppercase tracking-widest font-mono">
                  ISO 27001 — 98%
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight group-hover:text-emerald-500 transition-colors font-syne">
                DevSecOps
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans font-medium">
                Conception et maintien de systèmes sécurisés par défaut. Agents PowerShell autonomes pour la conformité <strong className="text-foreground">ISO 27001</strong>, audit OWASP, hardening OS hétérogènes et pattern Pull-State pour remédiation continue. Sécurité intégrée dès la conception.
              </p>
            </div>
            <div className="pt-4 border-t border-border flex flex-wrap gap-2">
              {["PowerShell 7", "ISO 27001", "OWASP", "Hardening", "DevSecOps"].map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded bg-muted border border-border text-[9px] font-bold text-muted-foreground uppercase tracking-widest font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── CORE PHILOSOPHY ── */}
      <div className="p-10 rounded-[3rem] border border-aura-gold/25 bg-gradient-to-br from-background to-primary/[0.02] text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden shadow-[0_8px_32px_rgba(15,23,42,0.06),0_0_80px_rgba(212,175,55,0.04)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/10 blur-[60px] pointer-events-none" />
        <h3 className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
          {"// Ma philosophie d'ingénierie"}
        </h3>
        <p className="text-xl md:text-2xl text-foreground font-bold leading-relaxed font-syne">
          « Optimiser un pipeline de données suit les mêmes règles logiques que de piloter une chaîne d&apos;approvisionnement physique : élimination des goulots d&apos;étranglement, validation de la qualité à chaque étape et tolérance zéro pour la perte de flux. »
        </p>
      </div>

    </section>
  );
}

