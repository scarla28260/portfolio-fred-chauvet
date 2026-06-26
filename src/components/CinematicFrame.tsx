"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CinematicFrameProps {
  src: string;
  alt: string;
  className?: string;
  intensity?: number;
}

export default function CinematicFrame({ src, alt, className, intensity = 1 }: CinematicFrameProps) {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const rotateX = useTransform(springY, [-500, 500], [5 * intensity, -5 * intensity]);
  const rotateY = useTransform(springX, [-500, 500], [-5 * intensity, 5 * intensity]);

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
    <div className={cn("relative overflow-hidden group rounded-[2.5rem] bg-black/20 border border-white/5 shadow-2xl", className)}>
      <motion.div
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="relative w-full h-full"
      >
        {/* The Base Image with Perpetual Breathing Zoom */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 0.5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full scale-110"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
          />
        </motion.div>

        {/* Video Overlays (Always Active) */}
        
        {/* 1. Grain/Noise */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay animate-noise bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* 2. Scanning Line */}
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[1px] z-10 opacity-30"
        />

        {/* 3. Lens Flare / Light Leak (Slow Pulse) */}
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1], x: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-radial-gradient from-white/10 to-transparent blur-[80px] pointer-events-none"
        />

        {/* 4. Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.6)] pointer-events-none" />

        {/* 5. Technical HUD Elements (Subtle) */}
        <div className="absolute top-6 left-6 flex flex-col gap-1 opacity-40">
           <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              <span className="text-[8px] font-black tracking-widest text-white uppercase">REC_SOURCE_LIVE</span>
           </div>
           <span className="text-[7px] font-mono text-white/50 uppercase tracking-[0.2em]">00:0{Math.floor(Math.random()*9)}:42:04</span>
        </div>

        <div className="absolute bottom-6 right-6 opacity-30">
           <span className="text-[8px] font-black text-white/50 tracking-widest uppercase border-[0.5px] border-white/20 px-2 py-0.5 rounded-sm">
             AQ_8K_HLV
           </span>
        </div>
      </motion.div>
    </div>
  );
}
