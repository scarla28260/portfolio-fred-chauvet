"use client";

import { Hero } from "@/components/sections/Hero";
import { SystemsApproach } from "@/components/sections/SystemsApproach";
import { AboutNarrative } from "@/components/sections/AboutNarrative";

export default function HomeContent() {
  return (
    <main className="relative bg-transparent text-foreground selection:bg-aura-gold/20 selection:text-aura-gold-light antialiased overflow-x-hidden">
      
      {/* ── HERO SECTION ── */}
      <Hero />

      {/* ── SELLING POINTS & ARGUMENTS ── */}
      <SystemsApproach />
      <AboutNarrative />

    </main>
  );
}
