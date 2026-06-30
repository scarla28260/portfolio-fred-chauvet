"use client";

import { Hero } from "@/components/sections/Hero";

export default function HomeContent() {
  return (
    <main className="relative bg-transparent text-foreground selection:bg-aura-gold/20 selection:text-aura-gold-light antialiased overflow-x-hidden">
      
      {/* ── ONLY RENDER HERO, OTHER SECTIONS ARE ON SEPARATE PAGES ── */}
      <Hero />

    </main>
  );
}
