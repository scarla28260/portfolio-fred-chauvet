import type { Metadata } from "next"
import { SystemsApproach } from "@/components/sections/SystemsApproach"

// SEO: Metadata page compétences avec focus E-E-A-T Expertise
export const metadata: Metadata = {
  title: "Approche & Compétences — Systémique",
  description: "Compétences de Fred Chauvet : Next.js, TypeScript, Python, agents LLM, DevSecOps, Big Data, MCP. Philosophie systémique qui lie restauration, logistique physique et pipelines de données.",
  keywords: ["Fred Chauvet compétences", "Next.js expert", "Python data", "LLM agents", "DevSecOps", "MCP architect", "TypeScript", "systémique logistique"],
  openGraph: {
    title: "Approche & Compétences — Systémique | Fred Chauvet",
    description: "La métaphore systémique : même rigueur pour les flux physiques et les pipelines de données.",
    type: "website",
  },
}

export default function CompetencesPage() {
  // GEO: FAQPage schema — maximise les citations AI sur les questions fréquentes
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quelles sont les compétences techniques de Fred Chauvet ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fred Chauvet maîtrise Next.js, TypeScript, Python, FastAPI, agents LLM (LangChain, CrewAI), DevSecOps (ISO 27001, PowerShell), Big Data (ETL, pipelines), PostgreSQL, Docker et MCP (Model Context Protocol)."
        }
      },
      {
        "@type": "Question",
        name: "Quelle est l'approche de Fred Chauvet en ingénierie logicielle ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fred Chauvet applique une philosophie systémique héritée de ses 18 ans en restauration et 15 ans en logistique : chaque composant logiciel est traité comme un nœud dans un flux optimisé, avec une attention particulière à la résilience, la traçabilité et l'automatisation."
        }
      },
      {
        "@type": "Question",
        name: "Fred Chauvet est-il disponible pour des missions ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fred Chauvet est disponible pour des missions en développement IA, Data Engineering, et DevSecOps. Contactez via le portfolio sur station-os.vercel.app."
        }
      }
    ]
  }

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 pt-20 noise-panel">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SystemsApproach />
    </main>
  )
}
