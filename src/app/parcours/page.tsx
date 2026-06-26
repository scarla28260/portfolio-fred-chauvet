import type { Metadata } from "next"
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline"

// SEO: Metadata page parcours avec E-E-A-T (18 ans de cuisine + 15 ans de logistique = Experience signal)
export const metadata: Metadata = {
  title: "Parcours — Expérience de Terrain",
  description: "Découvrez le parcours professionnel de Fred Chauvet : 18 ans en cuisine/restauration et 15 ans en logistique transmutés en excellence technique. Reconversion en développeur IA & Big Data.",
  keywords: ["Fred Chauvet parcours", "reconversion développeur", "cuisine vers data", "logistique vers data", "expérience professionnelle", "formation IA Big Data"],
  openGraph: {
    title: "Parcours — Expérience de Terrain | Fred Chauvet",
    description: "De la restauration à la logistique, de la logistique à l'ingénierie : le parcours de Fred Chauvet.",
    type: "profile",
  },
}

export default function ParcoursPage() {
  // GEO: Schema BreadcrumbList pour navigation AI
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://station-os.vercel.app" },
      { "@type": "ListItem", position: 2, name: "Parcours", item: "https://station-os.vercel.app/parcours" }
    ]
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 pt-20 noise-panel">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ExperienceTimeline />
    </main>
  )
}
