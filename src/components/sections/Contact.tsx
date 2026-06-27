"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, ArrowUpRight, Terminal, Activity, Send } from "lucide-react"

export function Contact() {
  return (
    <section className="py-32 bg-background text-foreground relative" id="contact">
      
      {/* Background Decor Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute top-[10%] left-[20%] w-[30rem] h-[30rem] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[20%] w-[25rem] h-[25rem] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="container relative z-10 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="flex items-center justify-start gap-3 mb-4">
              <span className="h-[1px] w-8 bg-primary/50" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary font-mono">
                SECURE_COMMUNICATION // FORGE
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-luxury font-normal tracking-tight text-foreground mb-6 leading-tight">
              <span className="block font-light italic text-muted-foreground">Prêt à</span>
              <span className="block text-primary">Collaborer ?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
              Que ce soit pour structurer une architecture web, développer des dashboards de haute performance ou automatiser vos processus métiers complexes, entrons en contact.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[300px] w-full hidden md:flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />
            <div className="relative w-72 h-72 border-[2px] border-primary/20 rounded-full flex items-center justify-center shadow-[0_0_50px_-10px_rgba(201,168,76,0.3)]">
              {/* Radar sweep */}
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(201,168,76,0.15)_360deg)] animate-[spin_4s_linear_infinite]" />
              {/* Concentric circles */}
              <div className="absolute w-56 h-56 border-[1px] border-primary/30 rounded-full animate-[spin_20s_linear_infinite] border-dashed opacity-70" />
              <div className="absolute w-40 h-40 border-[1px] border-primary/50 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dotted opacity-80" />
              <div className="absolute w-24 h-24 border-[1px] border-primary/40 rounded-full opacity-50" />
              {/* Blinking target dots */}
              <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-primary rounded-full animate-ping" />
              <div className="absolute bottom-[30%] right-[20%] w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <div className="absolute top-[40%] right-[30%] w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              {/* Center icon */}
              <Terminal className="absolute w-10 h-10 text-primary" />
            </div>
          </motion.div>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Terminal Simulator Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-7 p-8 md:p-10 rounded-2xl border border-aura-gold/20 bg-card shadow-[0_4px_24px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_40px_rgba(212,175,55,0.08)] hover:border-aura-gold/40 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-6">
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <Terminal className="w-4 h-4 text-primary/80" />
                  <span className="text-[10px] font-mono text-muted-foreground font-bold uppercase tracking-wider">
                    FRED_CHAUVET // COM_SESSION
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500/60" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <span className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
              </div>

              {/* Monospace telemetry */}
              <div className="font-mono text-xs md:text-sm text-muted-foreground space-y-4 leading-relaxed">
                <motion.p 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "100%" }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 1.5, ease: "linear" }} 
                  className="text-primary font-bold overflow-hidden whitespace-nowrap border-r-2 border-primary pr-1 animate-[pulse_0.5s_step-end_infinite]"
                >
                  $ initialize communication_protocol --auth=guest
                </motion.p>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }}>
                  &gt; [STATUS] System operational. Ready to accept payload logs.
                </motion.p>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2 }}>
                  &gt; [TELEMETRY] Location: France. Timezone: UTC+2. Reconversion: Engineering, Next.js, Data Pipelines.
                </motion.p>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 2.5 }} className="p-4 bg-muted border border-border rounded-xl font-sans text-sm md:text-base text-foreground font-light flex items-center gap-4">
                  <Activity size={18} className="text-primary animate-pulse shrink-0" />
                  <span>
                    "Chaque ligne de code est pensée pour être performante, résiliente et sécurisée."
                  </span>
                </motion.div>
              </div>
            </div>

            {/* CTA action */}
            <div className="mt-10 pt-4 border-t border-aura-gold/20 flex items-center justify-between text-xs font-mono text-muted-foreground">
              <span>PORTAL_ACTIVE_0x99A</span>
              <a
                href="mailto:frederic.chauvet78@orange.fr"
                className="flex items-center gap-2 text-primary hover:text-amber-500 transition-colors font-bold uppercase tracking-widest"
              >
                <Send className="w-3.5 h-3.5" />
                Démarrer la session
              </a>
            </div>
          </motion.div>

          {/* Links block (Right side) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {[
              {
                label: "Téléphone",
                href: "tel:+33647945600",
                val: "06.47.94.56.00",
                icon: Phone,
                color: "group-hover:text-blue-500",
                border: "group-hover:border-blue-400/30",
              },
              {
                label: "Email direct",
                href: "mailto:frederic.chauvet78@orange.fr",
                val: "frederic.chauvet78@orange.fr",
                icon: Mail,
                color: "group-hover:text-amber-500",
                border: "group-hover:border-amber-400/30",
              },
              {
                label: "LinkedIn Professional",
                href: "https://www.linkedin.com/in/frederic-chauvet-developpeur-web-data",
                val: "linkedin.com/in/fredchauvet",
                icon: Linkedin,
                color: "group-hover:text-cyan-500",
                border: "group-hover:border-cyan-400/30",
              },
              {
                label: "GitHub Source Registry",
                href: "https://github.com/Frederic28260",
                val: "github.com/Frederic28260",
                icon: Github,
                color: "group-hover:text-emerald-500",
                border: "group-hover:border-emerald-400/30",
              },
            ].map((link, i) => {
              const Icon = link.icon
              
              return (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between p-6 rounded-2xl border border-aura-gold/20 bg-card hover:bg-muted hover:border-aura-gold/50 hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(212,175,55,0.10),0_4px_16px_rgba(15,23,42,0.06)] transition-all duration-400 relative overflow-hidden"
                >
                  {/* Subtle top indicator line */}
                  <div className="absolute top-0 left-0 w-[4px] h-0 bg-primary group-hover:h-full transition-all duration-500" />
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                      <Icon className={`w-5 h-5 ${link.color}`} />
                      <span className="text-xs uppercase tracking-widest font-mono font-bold">
                        {link.label}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  
                  <span className="text-lg md:text-xl font-light text-foreground/80 font-syne truncate group-hover:text-foreground transition-colors">
                    {link.val}
                  </span>
                </a>
              )
            })}
          </motion.div>
        </div>

        {/* Footer info */}
        <div className="mt-24 pt-8 border-t border-aura-gold/20 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm font-light">
          <p>© {new Date().getFullYear()} Ingénieur. Tous droits réservés.</p>
          <p className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-primary" />
            Elite Twelve Registry v5.0
          </p>
        </div>

      </div>
    </section>
  )
}
