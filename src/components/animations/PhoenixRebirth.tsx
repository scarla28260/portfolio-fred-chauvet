"use client";

import { motion, useTransform, useSpring } from "framer-motion";

interface PhoenixRebirthProps {
  progress?: number;
  mode?: "loading" | "continuous";
}

/**
 * DigitalPhoenix - A high-tech, low-poly reimagining of the Phoenix.
 * Replaces organic curves with sharp, triangular geometry and digital pulses.
 */
export default function PhoenixRebirth({ progress = 0, mode = "loading" }: PhoenixRebirthProps) {
  const baseProgress = mode === "loading" ? progress / 100 : 1;
  const smoothProgress = useSpring(baseProgress, { stiffness: 50, damping: 20 });
  
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.9, 1], [0, 1, 1, mode === "loading" ? 0 : 1]);
  const scale = useTransform(smoothProgress, [0.2, 0.8, 1], [0.8, 1, mode === "loading" ? 1.5 : 1]);
  const yTranslate = useTransform(smoothProgress, [0.6, 1], [0, mode === "loading" ? -200 : 0]);
  const wingRotation = useTransform(smoothProgress, [0.4, 0.7, 0.9], [30, -5, 0]);

  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${mode === "loading" ? "z-0" : "z-[5]"}`}>
      <motion.div 
        style={{ opacity, scale, y: yTranslate }}
        animate={mode === "continuous" ? { y: [0, -10, 0] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-96 h-96 flex items-center justify-center"
      >
        {/* Diamond Core Glow */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-64 h-64 bg-phoenix-orange/10 border border-phoenix-orange/20 rotate-45 blur-[80px]"
        />

        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_20px_rgba(255,107,0,0.3)]">
          {/* Low-Poly Body */}
          <motion.path
            d="M100 40 L115 100 L100 160 L85 100 Z"
            fill="url(#techGradient)"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: progress > 10 ? 1 : 0 }}
            style={{ originY: "center" }}
          />

          {/* Left Wing - Geometric Shards */}
          <motion.g
            style={{ originX: "100px", originY: "80px", rotate: wingRotation }}
            animate={mode === "continuous" ? { rotate: [0, -10, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M100 80 L30 60 L60 120 Z" fill="url(#techGradient)" opacity="0.8" />
            <path d="M70 100 L20 120 L50 140 Z" fill="url(#techGradient)" opacity="0.4" />
          </motion.g>

          {/* Right Wing - Geometric Shards */}
          <motion.g
            style={{ originX: "100px", originY: "80px", rotate: useTransform(wingRotation, (v) => -v) }}
            animate={mode === "continuous" ? { rotate: [0, 10, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M100 80 L170 60 L140 120 Z" fill="url(#techGradient)" opacity="0.8" />
            <path d="M130 100 L180 120 L150 140 Z" fill="url(#techGradient)" opacity="0.4" />
          </motion.g>

          {/* Head Shard */}
          <motion.path
            d="M100 40 L110 50 L100 60 L90 50 Z"
            fill="#fff"
            animate={{ opacity: progress > 40 ? 0.9 : 0 }}
          />

          <defs>
            <linearGradient id="techGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-phoenix-orange)" />
              <stop offset="100%" stopColor="var(--color-innovation-cyan)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Digital Embers (Square particles) */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white"
              initial={{ x: 192, y: 192, opacity: 0 }}
              animate={{ 
                y: [192, Math.random() * 100],
                x: [192, 192 + (Math.random() - 0.5) * 200],
                opacity: [0, 1, 0],
                rotate: [0, 180]
              }}
              transition={{ 
                duration: 2 + Math.random() * 2, 
                repeat: Infinity,
                delay: i * 0.2 
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
