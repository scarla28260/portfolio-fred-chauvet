"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * QuantumPrism - The core "Aura Glass" identifier.
 * A rotating, translucent digital octahedron with data flows and orbiting beads.
 * High-end, premium aesthetic aligned with system branding.
 */
export default function QuantumCore() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const rotateX = useTransform(springY, [-500, 500], [45, -45]);
  const rotateY = useTransform(springX, [-500, 500], [-45, 45]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full flex items-center justify-center z-[5] pointer-events-none [perspective:2000px]">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-[500px] h-[500px] flex items-center justify-center"
      >
        {/* Core Glow (Ambience) */}
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-125 opacity-40 animate-pulse" />
        <div className="absolute inset-x-0 inset-y-1/2 h-[200px] bg-primary/10 blur-[150px] rounded-full scale-y-50 opacity-20" />
        
        {/* The Digital Prism (Main Object) */}
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-64 h-64"
        >
          {/* Top Half faces */}
          <PrismFace rotateX={35} rotateY={0} translateZ={54} />
          <PrismFace rotateX={35} rotateY={90} translateZ={54} />
          <PrismFace rotateX={35} rotateY={180} translateZ={54} />
          <PrismFace rotateX={35} rotateY={270} translateZ={54} />
          
          {/* Bottom Half faces */}
          <PrismFace rotateX={-35} rotateY={0} translateZ={54} isBottom />
          <PrismFace rotateX={-35} rotateY={90} translateZ={54} isBottom />
          <PrismFace rotateX={-35} rotateY={180} translateZ={54} isBottom />
          <PrismFace rotateX={-35} rotateY={270} translateZ={54} isBottom />

          {/* Inner Pulsing Node (The "Heart") */}
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-[0_0_50px_hsl(var(--primary))] filter blur-[2px]" 
          />
        </motion.div>

        {/* Orbiting Particle Field */}
        {[...Array(32)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-[2px] h-[2px] bg-primary rounded-full shadow-[0_0_8px_hsl(var(--primary))]"
            animate={{ 
              rotateZ: i * 11.25,
              rotateX: [0, 360],
              rotateY: [0, 360],
              opacity: [0.1, 0.9, 0.1]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity, 
              delay: i * 0.1,
              ease: "linear"
            }}
            style={{ 
              x: Math.cos(i) * 240,
              y: Math.sin(i) * 240,
              translateZ: Math.random() * 200 - 100
            }}
          />
        ))}

        {/* Scanning Broken Rings */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute border border-primary/10 rounded-full"
            animate={{ rotateX: 90, rotateZ: i === 0 ? 360 : -360, rotateY: i === 0 ? 15 : -15 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ width: 460 + i * 100, height: 460 + i * 100, borderStyle: "dashed", borderWidth: "1px" }}
          />
        ))}

        {/* Technical Data HUD */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 flex items-center gap-16 w-screen justify-center pointer-events-none font-sans">
          <div className="flex flex-col items-center">
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-2">ELITE_HEX_SYNC</span>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-black italic text-primary tracking-widest tabular-nums">0x0A // ALPHA</span>
              <motion.div animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary))]" />
            </div>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-[8px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-2">OPERATIONAL_VIBE</span>
             <span className="text-[11px] font-black italic text-primary/80 tracking-widest uppercase">High_Performance</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-2">LATENCY_CORE</span>
            <span className="text-[11px] font-black italic text-primary tracking-widest tabular-nums">0.003ms</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function PrismFace({ rotateX, rotateY, translateZ, isBottom = false }: { rotateX: number, rotateY: number, translateZ: number, isBottom?: boolean }) {
  return (
    <motion.div
      style={{
        transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(${translateZ}px)`,
        transformStyle: "preserve-3d",
      }}
      className="absolute top-0 left-0 w-64 h-64 flex items-center justify-center"
    >
      <div 
        className={`w-0 h-0 border-l-[64px] border-l-transparent border-r-[64px] border-r-transparent ${isBottom ? 'border-t-[110px]' : 'border-b-[110px]'} border-primary/10 transition-colors duration-1000`}
      >
        <div 
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1px] ${isBottom ? 'h-[110px]' : '-h-[110px]'} bg-primary/40 shadow-[0_0_20px_rgba(205,161,94,0.5)]`}
        />
        {/* Wireframe edges */}
        <div className={`absolute top-0 left-1/2 w-[125px] h-[1px] bg-primary/20 origin-left ${isBottom ? 'rotate-[120deg]' : '-rotate-[120deg]'}`} />
        <div className={`absolute top-0 left-1/2 w-[125px] h-[1px] bg-primary/20 origin-left ${isBottom ? 'rotate-[60deg]' : '-rotate-[60deg]'}`} />
      </div>
    </motion.div>
  );
}
