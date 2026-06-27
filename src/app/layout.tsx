import type { Metadata, Viewport } from "next"
import { Jost, Syne, Bodoni_Moda } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"

const jost = Jost({ subsets: ["latin", "latin-ext"], variable: "--font-jost" })
const syne = Syne({ subsets: ["latin", "latin-ext"], variable: "--font-syne" })
const bodoni = Bodoni_Moda({ 
  subsets: ["latin", "latin-ext"], 
  variable: "--font-luxury",
  style: ["normal", "italic"],
  weight: ["400", "500", "700"],
  display: "swap"
})

export const viewport: Viewport = {
  themeColor: "#f4f9ff", // Aligné avec le nouveau background clair
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Fred Chauvet | Ingénieur Logiciel & Data",
  description: "Portfolio de Fred Chauvet, Ingénieur Logiciel, IA & Data. 18 ans en cuisine et 15 ans en logistique transmutés à l'analyse de données et au développement d'agents IA. Conception d'écosystèmes d'agents et solutions résilientes.",
  keywords: ["Fred Chauvet", "développeur web", "data engineer", "IA", "Next.js", "ingénieur logiciel", "React", "systémique"],
  authors: [{ name: "Fred Chauvet" }],
  openGraph: {
    title: "Fred Chauvet | Ingénieur Logiciel & Data",
    description: "Portfolio de Fred Chauvet, Ingénieur Logiciel, IA & Data. 18 ans en cuisine et 15 ans en logistique transmutés à l'analyse de données et au développement d'agents IA.",
    url: "https://station-os.vercel.app",
    siteName: "La Station du Code",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fred Chauvet | Ingénieur Logiciel & Data",
    description: "18 ans en cuisine et 15 ans en logistique transmutés à l'analyse de données et au développement d'agents IA.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Fred Chauvet",
      jobTitle: "Ingénieur Logiciel & Data",
      url: "https://station-os.vercel.app",
      sameAs: [
        "https://www.linkedin.com/in/fredchauvet",
        "https://github.com/Frederic28260"
      ],
      knowsAbout: ["Software Engineering", "Data Engineering", "Artificial Intelligence", "Next.js", "React", "System Architecture"]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "La Station du Code",
      url: "https://station-os.vercel.app"
    }
  ];

  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`bg-background text-foreground antialiased min-h-screen ${jost.variable} ${syne.variable} ${bodoni.variable} font-jost`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
