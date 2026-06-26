"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Multi-layer parallax background.
 * Each layer moves at a different speed, creating depth illusion.
 */
export default function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Layer velocities — deeper = slower
  const y0 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);  // nearest
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);  // mid
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);  // deep
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);  // furthest
  const opacity0 = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Layer 3 — Deepest: faint grid */}
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,107,0,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,107,0,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Layer 2 — Deep angular glows */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-phoenix-orange/[0.04] blur-[120px] rotate-45" />
        <div className="absolute bottom-[5%] right-[5%] w-[350px] h-[350px] bg-innovation-cyan/[0.03] blur-[100px] -rotate-12" />
      </motion.div>

      {/* Layer 1 — Mid: floating geometric shapes */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        {/* Diamond top-right */}
        <div
          className="absolute top-[8%] right-[12%] w-24 h-24 border border-white/[0.04] rotate-45"
        />
        {/* Small square bottom-left */}
        <div
          className="absolute bottom-[20%] left-[8%] w-10 h-10 border border-phoenix-orange/[0.08] rotate-12"
        />
        {/* Horizontal rule */}
        <div className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
      </motion.div>

      {/* Layer 0 — Nearest: large faint text watermark */}
      <motion.div
        style={{ y: y0, opacity: opacity0 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="text-[22vw] font-black italic tracking-tighter text-white/[0.015] uppercase leading-none"
        >
          DATA
        </span>
      </motion.div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,rgba(1,3,10,0.7)_100%)]" />
    </div>
  );
}
