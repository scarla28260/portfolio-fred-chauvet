import type { Metadata } from "next"
import { ProjectGrid } from "@/components/sections/ProjectGrid"

export const metadata: Metadata = {
  title: "Projets — Réalisations Techniques",
  description: "Projets techniques de Fred Chauvet : système DevSecOps ISO 27001 à 98%, dashboard 144 FPS, agent IA RAG 92% précision, pipelines ETL, automatisation CrewAI. Web, Data, IA, Sécurité.",
  keywords: ["Fred Chauvet projets", "DevSecOps ISO 27001", "Next.js dashboard", "LangChain agent", "pipeline ETL Python", "automatisation IA", "TypeScript", "PostgreSQL"],
  openGraph: {
    title: "Projets — Réalisations Techniques | Fred Chauvet",
    description: "6 projets en production : DevSecOps à 98% conformité, dashboard 144 FPS, agent IA, pipelines Big Data.",
    type: "website",
  },
}

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <ProjectGrid />
    </main>
  )
}
