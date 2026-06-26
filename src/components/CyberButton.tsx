"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CyberButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "cyan" | "emerald" | "gold" | "thermal-orange" | "thermal-amber";
  label?: string;
}

export default function CyberButton({ children, onClick, className, variant = "cyan", label }: CyberButtonProps) {
  const colors = {
    cyan: "text-innovation-cyan border-innovation-cyan/40 bg-innovation-cyan/10 hover:shadow-[0_0_40px_rgba(0,242,255,0.25)]",
    emerald: "text-innovation-emerald border-innovation-emerald/40 bg-innovation-emerald/10 hover:shadow-[0_0_40px_rgba(0,255,133,0.25)]",
    gold: "text-resilience-gold border-resilience-gold/40 bg-resilience-gold/10 hover:shadow-[0_0_40px_rgba(255,215,0,0.25)]",
    "thermal-orange": "text-phoenix-orange border-phoenix-orange/40 bg-phoenix-orange/10 hover:shadow-[0_0_40px_rgba(255,107,0,0.25)]",
    "thermal-amber": "text-phoenix-amber border-phoenix-amber/40 bg-phoenix-amber/10 hover:shadow-[0_0_40px_rgba(255,176,0,0.25)]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "group relative flex items-center px-10 py-5 font-mono text-[11px] font-black uppercase tracking-[0.5em] transition-all duration-500 border glass-elite overflow-hidden focus-ring",
        "clip-path-skew",
        colors[variant],
        className
      )}
    >
      {/* Dynamic Noise Layer (Animated via CSS/Framer) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none mix-blend-overlay noise-panel" />
      
      {/* Decorative Corner Notch */}
      <div className="absolute top-0 right-0 w-3 h-3 bg-current opacity-30 transform translate-x-1.5 -translate-y-1.5 rotate-45" />
      
      {/* Hover Scanning Line - Laser Precision */}
      <motion.div 
        initial={{ left: "-150%" }}
        whileHover={{ left: "150%" }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], repeat: Infinity, repeatDelay: 0.5 }}
        className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-30 pointer-events-none blur-[2px]"
      />

      <div className="flex flex-col items-start gap-1.5 relative z-10 transition-transform duration-500 group-hover:translate-x-1">
        {label && (
          <span className="text-[8px] opacity-60 font-black mb-1.5 tracking-[0.3em] flex items-center gap-2">
            <span className="w-4 h-[1px] bg-current opacity-30" />
            {label}
          </span>
        )}
        <span className="flex items-center gap-4">
          <span className="w-2 h-2 rounded-sm bg-current animate-pulse shadow-[0_0_10px_currentColor]" />
          {children}
        </span>
      </div>

      {/* Decorative tech-bits on hover */}
      <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
        <div className="w-1.5 h-1.5 bg-current shadow-[0_0_8px_currentColor]" />
        <div className="w-1.5 h-1.5 bg-current opacity-40" />
      </div>
    </motion.button>
  );
}
