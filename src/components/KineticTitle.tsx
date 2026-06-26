"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface KineticTitleProps {
  title: string | ReactNode;
  subtitle?: string;
  id?: string;
  type?: "hero" | "section";
  className?: string;
}

/**
 * KineticTitle - Premium section header with flickering scanline effects.
 * Version 2.0: Phoenix Rebirth 2026 (Innovation Cyan Theme).
 */
export function KineticTitle({ 
  title, 
  subtitle, 
  id, 
  type = "section", 
  className = "" 
}: KineticTitleProps) {
  const isHero = type === "hero";

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {/* ── METADATA LINE (REBIRTH 2026) ── */}
      {(id || subtitle) && (
        <div className="flex items-center gap-6 group overflow-hidden">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="h-[2px] w-12 bg-innovation-cyan/40 origin-left" 
          />
          <div className="flex items-baseline gap-3">
            {id && (
              <span className="text-[10px] font-black text-innovation-cyan/80 uppercase tracking-[0.4em] font-mono">
                {id}
              </span>
            )}
            {subtitle && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[9px] font-black text-white/30 uppercase tracking-[1em] whitespace-nowrap"
              >
                {subtitle}
              </motion.span>
            )}
          </div>
        </div>
      )}

      {/* ── MAIN TITLE WITH SCANLINE EFFECT ── */}
      <div className="relative group/title">
        {/* Cinematic Scanline / Glitch layer */}
        <motion.div
          animate={{ 
            top: ["0%", "100%", "0%"],
            opacity: [0, 0.4, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute left-0 right-0 h-[2px] bg-innovation-cyan/30 z-20 pointer-events-none blur-[1px]"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className={cn(
            "relative",
            isHero ? "text-6xl md:text-[8rem] lg:text-[10rem]" : "text-5xl md:text-7xl lg:text-8xl",
            "font-black tracking-tighter leading-[0.8] uppercase italic"
          )}
        >
          {title}
          
          {/* Subtle Ghost Layer for Depth */}
          <span className="absolute left-0 top-0 text-innovation-cyan/5 -z-10 blur-[2px] select-none pointer-events-none translate-x-1 translate-y-1">
            {title}
          </span>
        </motion.div>
        
        {/* Underline Progress Accent */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "circOut", delay: 1 }}
          className="h-[1px] bg-gradient-to-r from-innovation-cyan/40 via-white/10 to-transparent mt-8"
        />
      </div>
    </div>
  );
}
