import type { Metadata, Viewport } from "next"
import { Jost, Syne, Bodoni_Moda } from "next/font/google"
import dynamic from 'next/dynamic';
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'));
import Navigation from "@/components/Navigation"
import "./globals.css"

const AmbientParticles = dynamic(() => import('@/components/animations/AmbientParticles'));

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
  metadataBase: new URL("https://station-os.vercel.app"),
  title: "Fred Chauvet | Ingénieur Logiciel & Data",
  description: "Portfolio de Fred Chauvet, Ingénieur Logiciel, IA & Data. 18 ans en cuisine et 15 ans en logistique transmutés à l'analyse de données et au développement d'agents IA. Conception d'écosystèmes d'agents et solutions résilientes.",
  keywords: ["Fred Chauvet", "développeur web", "data engineer", "IA", "Next.js", "ingénieur logiciel", "React", "systémique"],
  authors: [{ name: "Fred Chauvet" }],
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
    },
  },
  openGraph: {
    title: "Fred Chauvet | Ingénieur Logiciel & Data",
    description: "Portfolio de Fred Chauvet, Ingénieur Logiciel, IA & Data. 18 ans en cuisine et 15 ans en logistique transmutés à l'analyse de données et au développement d'agents IA.",
    url: "https://station-os.vercel.app",
    siteName: "Portfolio de Fred",
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
        "https://github.com/scarla28260"
      ],
      knowsAbout: ["Software Engineering", "Data Engineering", "Artificial Intelligence", "Next.js", "React", "System Architecture"]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Portfolio de Fred",
      url: "https://station-os.vercel.app"
    }
  ];

  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`bg-background text-foreground antialiased min-h-screen ${jost.variable} ${syne.variable} ${bodoni.variable} font-jost`}>
        <CustomCursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* ── AMBIENT 3D BACKGROUND (GLOBAL) ── */}
        <AmbientParticles />
        <div className="fixed top-1/4 left-1/4 w-[50%] h-[50%] bg-aura-navy/10 blur-[150px] pointer-events-none z-0 mix-blend-screen" />
        <div className="fixed bottom-1/4 right-1/4 w-[40%] h-[40%] bg-aura-gold/5 blur-[120px] pointer-events-none z-0 mix-blend-screen" />

        <Navigation />
        {children}
      </body>
    </html>
  )
}
