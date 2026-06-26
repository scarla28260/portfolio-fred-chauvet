"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * CinematicBackground - High-end DARK atmospheric effects.
 * Aura Glass v3 Elite Edition.
 */
export default function CinematicBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
      {/* 1. Primary Gold Glow (Top Left) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[5%] w-[80%] h-[80%] bg-primary/10 blur-[180px] rounded-full"
      />

      {/* 2. Secondary Slate Glow (Bottom Right) */}
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.03, 0.06, 0.03],
          x: [0, -40, 0],
          y: [0, -60, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-aura-slate/30 blur-[150px] rounded-full"
      />

      {/* 3. Ruby Accents (Faint pulses) */}
      <motion.div 
        animate={{ 
          opacity: [0, 0.02, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-aura-ruby/5 blur-[120px] rounded-full"
      />

      {/* 4. Fine Grain/Static Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} 
      />

      {/* 5. Vignette */}
      <div className="absolute inset-0 bg-gradient-to-at from-background via-transparent to-background opacity-60 pointer-events-none" />
    </div>
  );
}

