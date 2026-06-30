"use client"

import { motion, useScroll } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Calendar, Briefcase, GraduationCap, Terminal, CheckCircle2, Activity, Database, GitMerge, TerminalSquare, BrainCircuit } from "lucide-react"
import { LiquidAura } from "@/components/ui/liquid-aura"

function HoverVideo({ src, isHovered }: { src: string; isHovered: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    
    // Jouer directement sans délai pour améliorer la fluidité immédiate
    if (isHovered) {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {})
      }
    } else {
      video.pause()
    }
  }, [isHovered])

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="auto"
      className="w-full h-full object-cover will-change-transform"
      style={{ transform: "translateZ(0)" }}
    />
  )
}

const experiences = [
  {
    id: 1,
    type: "job",
    period: "1992 — 2009",
    role: "Management & Restauration",
    company: "Hôtellerie & Restauration Collective",
    description: "18 ans de rigueur et d'excellence opérationnelle. Gestion complète de centres de profit, pilotage budgétaire, et optimisation stricte du coût matière. Une première expérience solide de la gestion d'équipes sous haute pression.",
    status: "completed",
    telemetry: "ARCHIVED_LOGS // MANAGEMENT_ROOTS",
    icon: Briefcase,
    bgIcon: Activity,
    color: "from-blue-500/20 to-cyan-500/5",
    videoUrl: "/assets/fred_en_cuisine.mp4",
  },
  {
    id: 2,
    type: "job",
    period: "2010 — 2024",
    role: "Logistique & Gestion de Flux",
    company: "Leader de la distribution",
    description: "15 ans d'exigence. Saisie, contrôle de conformité et audit quotidien de bases de données logistiques massives. Détection proactive des anomalies de flux et maintien d'une chaîne logistique zéro rupture.",
    status: "completed",
    telemetry: "ARCHIVED_LOGS // STACK_OPERATIONS",
    icon: Database,
    bgIcon: GitMerge,
    color: "from-emerald-500/20 to-teal-500/5",
    videoUrl: "/videos/fred_logistique.mp4",
  },
  {
    id: 3,
    type: "transition",
    period: "2024 — 2026",
    role: "Transition Logicielle & Conception",
    company: "Reconfiguration Autodidacte",
    description: "Défi transformé en pivot technologique. Apprentissage avancé de Python, JavaScript/TypeScript, SQL, Docker, et Git. Réalisation d'outils d'automatisation de scripts et d'intégration d'API. Application de la rigueur logistique à la logique logicielle.",
    status: "completed",
    telemetry: "SYSTEM_RECONFIGURATION // AUTO_LEARNING",
    icon: Terminal,
    bgIcon: TerminalSquare,
    color: "from-aura-gold/20 to-amber-500/5",
    videoUrl: "/videos/reorientation.mp4",
  },
  {
    id: 4,
    type: "formation",
    period: "12/10/2026 — 17/12/2026",
    role: "Développeur IA & Big Data",
    company: "Financement Acquis & Confirmé",
    description: "Cursus spécialisé axé sur les architectures de données massives (Big Data) et le développement de systèmes intelligents. Pipelines de données (ETL/ELT), architectures orientées agents, modèles de langage (LLM) et intégrations (MCP).",
    status: "acquired",
    telemetry: "SYSTEM_UPGRADE // DATA_IA_ACQUIRED",
    icon: GraduationCap,
    bgIcon: BrainCircuit,
    color: "from-teal-500/20 to-emerald-500/5",
    videoUrl: "/videos/reussite.mp4",
  }
]

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={containerRef} className="py-24 bg-background text-foreground relative min-h-screen" id="experience">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <LiquidAura className="opacity-40 mix-blend-multiply" />
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-aura-gold/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="container relative z-10 px-4 md:px-8 max-w-[1000px] mx-auto">
        
        {/* Title block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-6 mb-24 text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-muted border border-border/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary font-mono">
              REGISTRY_TELEMETRY // PARCOURS
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-foreground uppercase font-syne">
            L&apos;Évolution <br className="md:hidden" /><span className="italic font-black text-primary">Technique.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Une trajectoire de précision forgée par le terrain. De la gestion opérationnelle à l&apos;ingénierie logicielle et data.
          </p>
        </motion.div>

        {/* Vertical Timeline container */}
        <div className="relative space-y-12 md:space-y-16">
          {/* Animated Line */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-muted overflow-hidden rounded-full">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary/50 via-aura-gold to-primary/50"
              style={{
                height: "100%",
                scaleY: scrollYProgress,
                transformOrigin: "top"
              }}
            />
          </div>

          {experiences.map((exp, index) => {
            const BgIcon = exp.bgIcon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative flex flex-col md:flex-row items-center gap-8 group ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Center Node */}
                <div className="absolute left-[13px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-background bg-muted z-20 shadow-sm flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Content Card */}
                <div className="w-full pl-16 md:pl-0 md:w-1/2 flex relative z-10">
                  <div className={`w-full ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="relative overflow-hidden p-8 rounded-3xl border border-border/50 bg-background/50 backdrop-blur-xl group-hover:bg-muted/30 transition-colors duration-500 shadow-[0_4px_24px_rgba(15,23,42,0.05)] group-hover:shadow-[0_20px_48px_rgba(212,175,55,0.05)]">
                      
                      {/* Background decorative icon */}
                      <BgIcon className="absolute -bottom-6 -right-6 w-32 h-32 text-muted-foreground/5 -rotate-12 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700" />
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      {/* Header */}
                      <div className="flex flex-col gap-4 mb-6 relative z-10">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono font-bold">
                              {exp.period}
                            </span>
                          </div>
                          
                          {/* Status */}
                          <div className="flex items-center gap-2">
                            {exp.status === "acquired" && (
                              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono font-black text-emerald-500 uppercase tracking-wider">
                                <CheckCircle2 className="w-3 h-3" />
                                Acquis
                              </div>
                            )}
                            {exp.status === "completed" && (
                              <div className="px-3 py-1 rounded-full bg-muted border border-border text-[10px] font-mono font-black text-muted-foreground uppercase tracking-wider">
                                Archivé
                              </div>
                            )}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">{exp.company}</h4>
                          <h3 className="text-2xl font-light text-foreground font-syne group-hover:text-primary transition-colors flex items-center gap-2">
                            {exp.role}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed font-light text-sm md:text-base relative z-10">
                        {exp.description}
                      </p>

                      {/* Telemetry Tag */}
                      <div className="mt-6 pt-6 border-t border-border/50 flex items-center gap-2 relative z-10">
                        <Terminal className="w-3.5 h-3.5 text-muted-foreground/50" />
                        <span className="text-[9px] font-mono text-muted-foreground/60 font-bold uppercase tracking-widest">
                          {exp.telemetry}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opposite Side Video */}
                <div className={`hidden md:flex md:w-1/2 justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                  {exp.videoUrl && (
                    <div className="relative w-full max-w-[420px] aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-700 will-change-transform" style={{ transform: "translateZ(0)" }}>
                      <HoverVideo 
                        src={exp.videoUrl}
                        isHovered={hoveredId === exp.id}
                      />
                      {/* Subtly tint the video with primary color */}
                      <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                    </div>
                  )}
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
