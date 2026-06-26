export type ZoneId = "atrium" | "realisations" | "vision";

export interface ZoneConfig {
  id: ZoneId;
  title: string;
  subtitle: string;
  themeColor: string;
  accentColor: string;
  path: string;
  terminalData: {
    title: string;
    items: string[];
    rncpBlocks: string[];
  };
  blueprintData?: {
    layers: { title: string; tech: string; description: string }[];
  }
}

export const PHOENIX_CONFIG: Record<ZoneId, ZoneConfig> = {
  atrium: {
    id: "atrium",
    title: "Ingénieur Logiciel & Data",
    subtitle: "Architecture de Solutions IA & Data",
    themeColor: "hsl(var(--primary))",
    accentColor: "#F5E6D3",
    path: "/",
    terminalData: {
      title: "FRED_CHAUVET_CORE_v5.0",
      items: ["Next.js 15.2 (Canary)", "React 19 Fiber (WebGL)", "Agentic Workflows (CrewAI)", "Aura Glass v2 Design"],
      rncpBlocks: ["Expertise IA", "Architecture Flux"],
    }
  },
  realisations: {
    id: "realisations",
    title: "Portfolio",
    subtitle: "Maîtrise Opérationnelle & Études de Cas",
    themeColor: "hsl(var(--primary))",
    accentColor: "#F5E6D3",
    path: "/realisations",
    terminalData: {
      title: "EXPERT_REGISTRY_0x0B",
      items: ["Reddit Video Automation Bot (OS)", "Audit PowerShell 7 / Security Ops", "Agents Autonomes RAG (CrewAI)", "Pipelines ETL SQL/Pandas", "Interfaces 60fps / Aura Glass v2"],
      rncpBlocks: ["Ingénierie Logicielle", "Fullstack IA / Data Ops"],
    }
  },
  vision: {
    id: "vision",
    title: "Vision",
    subtitle: "Roadmap Stratégique 2026",
    themeColor: "hsl(var(--primary))",
    accentColor: "#F5E6D3",
    path: "/vision",
    terminalData: {
      title: "STRATEGIC_OS_v4.1",
      items: ["Master Control IA", "Dashboard Temps-Réel", "Optimisation Predictive", "Scalabilité Systémique"],
      rncpBlocks: ["Stratégie Data", "Gouvernance IT"],
    }
  }
};
