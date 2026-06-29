"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { 
  Database, Target, BrainCircuit, Calendar, CheckCircle2
} from "lucide-react";
import TextReveal from "@/components/animations/TextReveal";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import CinematicVideoPlayer from "@/components/CinematicVideoPlayer";
import AmbientParticles from "@/components/animations/AmbientParticles";
import MagneticButton from "@/components/animations/MagneticButton";

export default function HomeContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main ref={containerRef} className="relative bg-background noise-panel text-foreground selection:bg-aura-gold/20 selection:text-aura-gold-light antialiased overflow-x-hidden">
      
      {/* ── AMBIENT 3D BACKGROUND (Luxe/Tech) ── */}
      <AmbientParticles />
      <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] bg-video-navy/10 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] bg-aura-gold/5 blur-[120px] pointer-events-none z-0" />
      
      {/* ── HERO: WELCOMING EXPANSION ── */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/voila.mp4"
        useWebcamBackground={false}
        title="Solutions IA & Data."
        date="Je crée des architectures Big Data et des agents IA intelligents"
        scrollToExpand="Explorer le parcours"
        textBlend={false}
      >

      {/* ── THE STORY: LA TRANSMUTATION ── */}
      <section className="relative py-40 px-6 overflow-hidden">
         <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
         >
              <motion.div
                style={{ y: yParallaxSlow }}
                className="w-full h-full relative"
              >
                <Image src="/assets/vivid_origins.png" fill className="object-cover" alt="Origins Illustration" sizes="100vw" />
              </motion.div>
         </motion.div>

         <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center relative z-10">
            <div className="lg:col-span-12 space-y-8 mb-10 text-center">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] font-black uppercase tracking-[0.8em] text-aura-gold/60 font-mono block"
              >
                • Expertise Transversale
              </motion.span>
              <h2 className="text-5xl md:text-[7rem] text-foreground font-light leading-[0.85] tracking-tighter uppercase font-syne overflow-hidden">
                <div>
                  Du terrain <TextReveal mode="word" className="royal-text italic font-black font-syne" delay={0.1}>logistique</TextReveal>
                </div>
                <div>
                  aux <TextReveal mode="word" className="gold-text italic font-black font-syne" delay={0.4}>données.</TextReveal>
                </div>
              </h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-12 max-w-4xl mx-auto text-center p-12 rounded-[3.5rem] border border-border bg-card/40 backdrop-blur-3xl space-y-10 group relative overflow-hidden hud-border"
            >
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Database size={160} className="text-primary" />
               </div>
               
               <div className="flex flex-col items-center mb-8 relative z-10">
                 {/* Placeholder for Profile Picture to build trust (as discussed in the video) */}
                 <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/50 relative mb-4">
                   <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center text-[10px] leading-tight text-muted-foreground text-center p-2 font-mono uppercase tracking-widest">
                     <span>Votre</span>
                     <span>Photo</span>
                   </div>
                   {/* DÉCOMMENTEZ CE CODE UNE FOIS VOTRE PHOTO AJOUTÉE */}
                   {/* <Image src="/assets/profile.jpg" alt="Fred Chauvet" fill className="object-cover" /> */}
                 </div>
                 <p className="text-sm font-bold text-foreground font-mono uppercase tracking-widest">Fred Chauvet</p>
               </div>

               <p className="text-2xl md:text-4xl text-foreground font-light leading-relaxed cinematic-text relative z-10 font-syne">
                 18 ans de cuisine et 15 ans de logistique transmutés à <span className="text-primary font-black underline decoration-primary/30 underline-offset-8">l'analyse de données et au développement d'agents IA.</span>
               </p>
               <p className="text-lg text-muted-foreground leading-relaxed font-medium font-sans">
                 Je ne viens pas du monde du développement web classique. Mon parcours s&apos;est forgé sur le terrain : 18 années d&apos;expérience dans la cuisine/restauration et 15 années dans la logistique de distribution, l&apos;optimisation de flux et la gestion de crise. Aujourd&apos;hui, j&apos;allie cette compréhension intime des processus réels aux technologies de demain pour créer des solutions IA et Big Data résilientes.
               </p>
               <div className="pt-8 flex justify-center gap-4 relative z-10">
                  {['Restauration', 'Logistique', 'Data'].map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="px-4 py-2 rounded-xl bg-muted border border-border text-[10px] font-black text-primary uppercase tracking-widest font-mono"
                    >
                      {tag}
                    </motion.span>
                  ))}
                  </div>
               </motion.div>
            </div>
         </section>

      {/* Luxury Gold Divider */}
      <div className="max-w-[1200px] mx-auto h-[1.5px] bg-gradient-to-r from-transparent via-aura-gold/35 to-transparent my-6" />

      {/* ── INTRO: PRÉSENTATION VIDÉO ── */}
      <section className="relative py-32 px-6 overflow-hidden">
         <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-4 text-primary">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] font-mono">• Vision & Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-foreground uppercase tracking-tighter font-syne">
                Au cœur de la <span className="text-primary italic font-black">Data</span>.
              </h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full relative"
            >
              <CinematicVideoPlayer 
                src="/voila.mp4" 
                poster="/assets/vivid_origins.png"
                intensity={0.6}
              />
              <p className="mt-6 text-center text-xs text-muted-foreground font-mono tracking-widest uppercase">
                Vidéo d'introduction générée par IA (Veo 3)
              </p>
            </motion.div>
         </div>
      </section>

      {/* Luxury Gold Divider */}
      <div className="max-w-[1200px] mx-auto h-[1.5px] bg-gradient-to-r from-transparent via-aura-gold/35 to-transparent my-6" />

      {/* ── THE NEXT STEP: LA FORMATION ── */}
      <section className="relative py-40 px-6 overflow-hidden bg-video-navy-deep/40 backdrop-blur-sm border-t border-b border-aura-gold/25">
         <motion.div style={{ y: yParallaxSlow }} className="absolute left-0 top-0 w-1/2 h-full z-0 opacity-10 pointer-events-none mix-blend-screen">
            <Image src="/assets/ai_ml.png" fill className="object-contain object-left" alt="AI & ML Illustration" sizes="50vw" />
         </motion.div>
         <motion.div style={{ y: yParallax }} className="absolute right-0 top-0 w-1/2 h-full z-0 opacity-10 pointer-events-none mix-blend-screen">
            <Image src="/assets/data_analysis.png" fill className="object-contain object-right" alt="Data Illustration" sizes="50vw" />
         </motion.div>

         <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-primary">
                  <BrainCircuit size={24} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] font-mono">Prochaine_Étape</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-foreground italic uppercase tracking-tighter leading-[0.9] font-syne">
                <TextReveal mode="word">Formation</TextReveal>
                <TextReveal mode="word" delay={0.2} className="text-primary not-italic font-black">Intensive.</TextReveal>
              </h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground text-lg leading-relaxed font-sans"
              >
                Pour consolider et formaliser mes compétences, j&apos;intègre prochainement un cursus spécialisé et intensif. Un programme conçu pour maîtriser les architectures de données complexes et les algorithmes de machine learning.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="glass p-10 rounded-[2.5rem] border border-border bg-card/60 backdrop-blur-3xl space-y-8 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] pointer-events-none" />
               
               <div className="space-y-2 relative z-10">
                 <h3 className="text-2xl font-black text-foreground uppercase tracking-tight font-syne">Développeur IA & Big Data</h3>
                 <p className="text-sm font-mono text-primary uppercase tracking-widest flex items-center gap-2">
                   <CheckCircle2 size={16} />
                   Financement Validé
                 </p>
               </div>

               <div className="p-6 bg-muted border border-border rounded-2xl flex flex-col gap-4 relative z-10">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        <Calendar size={20} />
                     </div>
                     <div>
                        <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest block font-mono">Période</span>
                        <p className="text-sm text-foreground font-bold font-mono">12 Oct. 2026 — 17 Déc. 2026</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        <Target size={20} />
                     </div>
                     <div>
                        <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest block font-mono">Objectif</span>
                        <p className="text-sm text-foreground font-bold font-mono">Maîtrise Data Engineering & ML</p>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* ── GEO: FAQ SECTION — Optimisée pour citation AI ── */}
      <section className="relative py-24 px-6 border-t border-aura-gold/20" id="faq">
        <div className="max-w-4xl mx-auto">
          {/* Label HUD */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/60 font-mono block mb-8"
          >
            0x0F_Pourquoi_Travailler_Avec_Moi
          </motion.span>

          <div className="space-y-4">
            {[
              {
                q: "Quelles sont les compétences clés de Fred Chauvet ?",
                a: "Fred Chauvet maîtrise Next.js, TypeScript, Python, les agents LLM (LangChain, CrewAI), le DevSecOps (ISO 27001), les pipelines Big Data et le MCP (Model Context Protocol). Il apporte 18 ans d'expérience en restauration et 15 ans en logistique à l'ingénierie logicielle."
              },
              {
                q: "Quel est le parcours professionnel de Fred Chauvet ?",
                a: "Fred Chauvet a 18 ans d'expérience en cuisine/restauration et 15 ans en logistique de distribution, avant une reconversion en développement logiciel. Il se spécialise en IA, Data Engineering et DevSecOps."
              },
              {
                q: "Fred Chauvet est-il disponible pour des missions ?",
                a: "Oui, Fred Chauvet est disponible pour des missions en développement IA, Data Engineering et DevSecOps. Contactez via la section Contact du portfolio."
              }
            ].map((item, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group glass hover:border-aura-gold/50 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors font-sans">{item.q}</span>
                  <span className="text-primary/50 font-mono text-xs ml-4 shrink-0">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed font-sans border-t border-aura-gold/20 pt-4">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION : TUNNEL DE VENTE ── */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-12 md:p-20 rounded-[3rem] border border-primary/20 bg-primary/5 backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="space-y-6 relative z-10">
              <h2 className="text-4xl md:text-6xl font-light text-foreground uppercase tracking-tighter font-syne">
                Prêt à transformer vos <span className="text-primary font-black italic">données</span> en <span className="text-primary font-black italic">résultats</span> ?
              </h2>
              <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
                Discutons de vos enjeux métiers. Je vous aide à construire des architectures de données fiables et des systèmes d'agents IA pour automatiser ce qui doit l'être.
              </p>
              <div className="pt-8">
                <MagneticButton href="https://www.linkedin.com/in/fredchauvet" className="group/btn relative">
                  <span className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest font-mono text-sm hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                    Me contacter sur LinkedIn
                  </span>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 opacity-50 border-t border-aura-gold/25">
         <div className="flex gap-10">
            <a href="https://www.linkedin.com/in/fredchauvet" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.4em] hover:text-primary transition-colors font-mono">LinkedIn</a>
            <a href="https://github.com/scarla28260" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.4em] hover:text-primary transition-colors font-mono">GitHub</a>
         </div>
         <p className="text-xs font-bold text-slate-600 uppercase tracking-widest font-mono">© 2026 FRED CHAUVET / DÉVELOPPEUR IA & BIG DATA</p>
         <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[10px] font-black uppercase tracking-[0.4em] text-primary hover:text-primary transition-colors flex items-center gap-2 font-mono">
            Retour_Atrium ↑
         </button>
      </footer>
      </ScrollExpandMedia>
    </main>
  );
}
