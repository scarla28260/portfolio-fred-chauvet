"use client"

import { motion } from "framer-motion"

const steps = [
  {
    num: "01",
    title: "Le Terrain",
    body: "De l'hôtellerie de luxe à la restauration collective, puis à la logistique, j'ai forgé une résilience à toute épreuve. J'ai passé deux décennies à gérer des équipes, piloter des budgets, créer des tableaux de bord et optimiser des ratios de performance.",
    accent: "#38BDF8",
  },
  {
    num: "02",
    title: "Le Déclic",
    body: "Suite à une maladie professionnelle entraînant une invalidité pour la manutention, j'ai transformé cet obstacle en opportunité. Mon habitude de manipuler des indicateurs (KPI) et d'analyser des stocks s'est naturellement orientée vers la programmation et la Data.",
    accent: "#C9A84C",
  },
  {
    num: "03",
    title: "L'Expertise",
    body: "Aujourd'hui, mon profil est hybride. Je combine ma connaissance pointue de la \"vraie vie\" des entreprises avec la technique (Next.js, TypeScript, IA) pour concevoir des architectures qui résolvent les vrais blocages du quotidien.",
    accent: "#C9A84C",
  },
]

export function AboutNarrative() {
  return (
    <section className="relative py-40 bg-background text-foreground overflow-hidden border-t border-aura-gold/15" id="about">

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aura-gold/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aura-gold/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_60%,rgba(56,189,248,0.04)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_40%,rgba(212,175,55,0.04)_0%,transparent_70%)]" />
        {/* Left accent line */}
        <div className="absolute top-0 bottom-0 left-24 w-px bg-gradient-to-b from-transparent via-aura-gold/15 to-transparent hidden lg:block" />
      </div>

      <div className="container px-6 md:px-12 max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="w-12 h-px bg-[#C9A84C]/40" />
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C9A84C]/60">02 — Mon Histoire</span>
        </motion.div>

        {/* Giant editorial headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="mb-24"
        >
          <h2 className="font-luxury text-[clamp(3rem,8vw,7rem)] font-normal leading-[0.92] tracking-tight text-foreground">
            Pas un<br/>
            <span className="italic font-light text-muted-foreground">développeur</span><br/>
            classique.
          </h2>
        </motion.div>

        {/* Three-column narrative */}
        <div className="grid md:grid-cols-3 gap-0 md:divide-x md:divide-aura-gold/15">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col space-y-6 px-0 md:px-10 first:pl-0 last:pr-0 pt-10 md:pt-0 border-t border-aura-gold/15 md:border-t-0 first:border-t-0 group"
            >
              {/* Number — bold accent */}
              <div className="flex items-center gap-3">
                <span
                  className="text-[10px] font-mono uppercase tracking-[0.4em]"
                  style={{ color: step.accent + "99" }}
                >
                  {step.num}
                </span>
                <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${step.accent}30, transparent)` }} />
              </div>

              <h3 className="text-xl md:text-2xl font-luxury font-normal text-foreground group-hover:text-aura-gold transition-colors duration-500">
                {step.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed font-light text-sm md:text-base">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 pt-10 border-t border-aura-gold/20 grid grid-cols-3 gap-4"
        >
          {[
            { label: "Années terrain", value: "20+" },
            { label: "Reconversion", value: "2024" },
            { label: "Stacks maîtrisées", value: "8+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group cursor-default">
              <div className="font-luxury text-3xl md:text-5xl font-normal text-aura-gold group-hover:text-primary transition-colors duration-500 mb-2">{stat.value}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
