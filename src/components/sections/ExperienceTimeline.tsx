"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Calendar, Briefcase, GraduationCap, Terminal, CheckCircle2, ChevronRight } from "lucide-react"
import { LiquidAura } from "@/components/ui/liquid-aura"

const experiences = [
  {
    id: 1,
    type: "job",
    period: "1992 — 2009",
    role: "Management & Restauration",
    company: "Cuisinier jusqu'à chef gérant",
    description: "18 ans de rigueur et d'excellence opérationnelle en cuisine et restauration, d'abord en hôtellerie de luxe, puis en tant que Chef Gérant en restauration collective. Au cœur de mes responsabilités : gestion complète de centres de profit, pilotage budgétaire, reporting comptable régulier, gestion d'inventaires et optimisation stricte du coût matière. Une première expérience solide de la gestion de flux de denrées et d'équipes opérationnelles sous haute pression.",
    status: "completed",
    telemetry: "ARCHIVED_LOGS // MANAGEMENT_ROOTS",
    icon: Briefcase,
  },
  {
    id: 2,
    type: "job",
    period: "2010 — 2024",
    role: "Logistique & Gestion de Flux",
    company: "Leader de la distribution",
    description: "15 ans d'exigence au cœur du plus grand distributeur de livres francophones. Saisie, contrôle de conformité et audit quotidien de bases de données logistiques massives (milliers de références). Pilotage opérationnel, détection proactive des anomalies de flux, réconciliation d'inventaires physiques complexes et maintien d'une chaîne logistique zéro rupture. Une expertise solide dans la rigueur des flux, la précision des données et la résolution de pannes opérationnelles.",
    status: "completed",
    telemetry: "ARCHIVED_LOGS // STACK_OPERATIONS",
    icon: Briefcase,
  },
  {
    id: 3,
    type: "transition",
    period: "2024 — 2026",
    role: "Transition Logicielle & Conception Autodidacte",
    company: "Reconfiguration & Apprentissage Autonome",
    description: "Défi d'une invalidité à la manutention transformé en pivot technologique d'excellence. Reconfiguration complète des compétences vers le développement et l'ingénierie. Immersion autodidacte intensive : apprentissage avancé de Python, JavaScript/TypeScript, SQL, Docker, et Git. Réalisation d'outils d'automatisation de scripts et d'intégration d'API. Application de la rigueur logistique à la logique logicielle.",
    status: "completed",
    telemetry: "SYSTEM_RECONFIGURATION // AUTO_LEARNING",
    icon: Terminal,
  },
  {
    id: 4,
    type: "formation",
    period: "12/10/2026 — 17/12/2026",
    role: "Formation : Développeur IA & Big Data",
    company: "Financement Acquis & Confirmé",
    description: "Cursus spécialisé et intensif axé sur les architectures de données massives (Big Data) et le développement de systèmes intelligents. Perfectionnement en pipelines de données (ETL/ELT), architectures orientées agents, modèles de langage (LLM) et intégrations via Model Context Protocol (MCP). Consolidations théorique et pratique des compétences pour concevoir des solutions technologiques hautement résilientes.",
    status: "acquired",
    telemetry: "SYSTEM_UPGRADE // DATA_IA_ACQUIRED",
    icon: GraduationCap,
  }
]

// Dynamic media mapping for step telemetry
const getMediaForExperience = (id: number | null) => {
  switch (id) {
    case 1:
      return { type: "video" as const, src: "/assets/fred_en_cuisine.mp4", css: "" };
    case 2:
      return { type: "video" as const, src: "/videos/fred_logistique.mp4", css: "" };
    case 3:
      return { type: "video" as const, src: "/videos/reorientation_v2.mp4", css: "" };
    case 4:
      return { type: "video" as const, src: "/videos/reussite.mp4", css: "" };
    default:
      return { type: "image" as const, src: "/assets/timeline_evolution_1782347670425.png", css: "" };
  }
};

interface ExperienceVideoProps {
  src: string;
  isActive: boolean;
}

function ExperienceVideo({ src, isActive }: ExperienceVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      preload="auto"
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
      }`}
    />
  );
}

interface ExperienceImageProps {
  src: string;
  isActive: boolean;
}

function ExperienceImage({ src, isActive }: ExperienceImageProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
      }`}
    >
      <Image
        src={src}
        fill
        className="object-cover"
        alt="Aperçu Étape"
        sizes="30vw"
        priority={isActive}
      />
    </div>
  );
}

export function ExperienceTimeline() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background text-foreground relative" id="experience">
      
      {/* Background Glow Decors */}
      <LiquidAura className="opacity-70 mix-blend-multiply" />

      <div className="container relative z-10 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Title & Timeline scrolling */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Title block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-4"
            >
              <div className="flex items-center justify-start gap-3">
                <span className="h-[1px] w-8 bg-primary/50" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary font-mono">
                  REGISTRY_TELEMETRY // PARCOURS
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-foreground uppercase font-syne">
                <span className="text-foreground">L&apos;Évolution</span> <br/><span className="italic font-black text-primary">Chronologique.</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
                Une trajectoire de précision forgée par le terrain. De la gestion opérationnelle à la transition logicielle, chaque étape enrichit mon expertise en ingénierie.
              </p>
            </motion.div>

            {/* Timeline container */}
            <div className="relative space-y-12">
              {/* Vertical central connector line */}
              <div className="absolute left-[29px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-aura-gold/20 via-primary/30 to-aura-gold/10 z-0 hidden md:block" />

              {experiences.map((exp, index) => {
                const Icon = exp.icon
                const mediaInfo = getMediaForExperience(exp.id);
                
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
                    onMouseEnter={() => setHoveredId(exp.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="relative grid grid-cols-1 md:grid-cols-[60px_1fr] gap-6 items-start z-10 group"
                  >
                    {/* Timeline Icon Block */}
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl border border-border bg-muted shadow-sm text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-all duration-500 z-10 hidden md:flex shrink-0">
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>

                    {/* Cyber Card */}
                    <div className="p-8 md:p-10 rounded-[2.5rem] hud-border w-full shadow-[0_4px_24px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_48px_rgba(212,175,55,0.10),0_8px_24px_rgba(15,23,42,0.08)] transition-all duration-500 relative">
                      
                      {/* Top Header details */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        
                        {/* Period & Org */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono font-bold">
                              {exp.period}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-foreground uppercase tracking-tight">{exp.company}</h4>
                        </div>

                        {/* Status Indicator Badge */}
                        <div className="flex items-center gap-4">
                          {/* Telemetry log tag */}
                          <span className="text-[9px] font-mono text-muted-foreground/60 font-bold uppercase tracking-widest hidden lg:inline">
                            {exp.telemetry}
                          </span>
                          
                          {exp.status === "acquired" && (
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-black text-emerald-600 uppercase tracking-wider animate-pulse">
                              <CheckCircle2 className="w-3 h-3" />
                              Acquis
                            </div>
                          )}
                          {exp.status === "active" && (
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-[10px] font-mono font-black text-primary uppercase tracking-wider">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                              En cours
                            </div>
                          )}
                          {exp.status === "completed" && (
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-[10px] font-mono font-black text-muted-foreground uppercase tracking-wider">
                              Archivé
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Role and description */}
                      <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-light text-foreground font-syne group-hover:text-primary transition-colors flex items-center gap-3">
                          {exp.role}
                          <ChevronRight className="w-4 h-4 text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </h3>
                        <p className="text-muted-foreground leading-relaxed font-light text-base md:text-lg max-w-3xl">
                          {exp.description}
                        </p>
                      </div>

                      {/* Inline Mobile illustration (visible only on mobile/tablet) */}
                      <div className="mt-6 lg:hidden w-full aspect-video rounded-2xl overflow-hidden relative border border-border bg-muted">
                        <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent z-10 pointer-events-none" />
                        {mediaInfo.type === "video" ? (
                          <video
                            src={mediaInfo.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-cover w-full h-full opacity-90"
                          />
                        ) : (
                          <Image
                            src={mediaInfo.src}
                            fill
                            className="object-cover opacity-90"
                            alt="Mobile Preview"
                            sizes="(max-width: 1024px) 100vw, 30vw"
                          />
                        )}
                      </div>

                    </div>
                  </motion.div>
                )
              })}
            </div>

          </div>

          {/* Right Column: Sticky Dynamic Illustration (visible only on large screens) */}
          <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-32 space-y-6 pt-24">
            <span className="text-[9px] font-mono text-muted-foreground/60 uppercase tracking-widest font-black block text-center">
              {"// TELEMETRY_APERCU"}
            </span>
            <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden border border-aura-gold/25 bg-muted shadow-[0_16px_48px_rgba(15,23,42,0.10),0_0_40px_rgba(212,175,55,0.05)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent z-15 pointer-events-none" />
              
              <ExperienceImage
                src="/assets/timeline_evolution_1782347670425.png"
                isActive={hoveredId === null}
              />
              <ExperienceVideo
                src="/assets/fred_en_cuisine.mp4"
                isActive={hoveredId === 1}
              />
              <ExperienceVideo
                src="/videos/fred_logistique.mp4"
                isActive={hoveredId === 2}
              />
              <ExperienceVideo
                src="/videos/reorientation_v2.mp4"
                isActive={hoveredId === 3}
              />
              <ExperienceVideo
                src="/videos/reussite.mp4"
                isActive={hoveredId === 4}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

