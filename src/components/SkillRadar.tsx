"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const DOMAINS = [
  { id: "DA-7", name: "Analyse_Données", level: 95, color: "var(--color-phoenix-orange)" },
  { id: "DV-1", name: "Visualisation", level: 90, color: "var(--color-innovation-cyan)" },
  { id: "FW-3", name: "Next.js_React", level: 98, color: "var(--color-innovation-emerald)" },
  { id: "DB-4", name: "SQL_Logistique", level: 85, color: "var(--color-resilience-gold)" },
  { id: "UX-5", name: "Accessibilité", level: 92, color: "var(--color-phoenix-amber)" },
  { id: "ML-2", name: "Auto_IA_ML", level: 80, color: "var(--color-phoenix-red)" }
];

export default function SkillRadar() {
  const [mounted, setMounted] = useState(false);
  const size = 500;
  const center = size / 2;
  const radius = size * 0.35;

  useEffect(() => setMounted(true), []);

  const getCoordinates = (angle: number, value: number) => {
    const r = (radius * value) / 100;
    const x = center + r * Math.cos(angle - Math.PI / 2);
    const y = center + r * Math.sin(angle - Math.PI / 2);
    return { x, y };
  };

  const points = DOMAINS.map((domain, i) => {
    const angle = (i * 2 * Math.PI) / DOMAINS.length;
    return getCoordinates(angle, domain.level);
  });

  const pathData = `M ${points[0].x} ${points[0].y} ` + 
    points.slice(1).map(p => `L ${p.x} ${p.y}`).join(" ") + " Z";

  if (!mounted) return <div className="aspect-square w-full max-w-[500px]" />;

  return (
    <div className="relative flex items-center justify-center w-full aspect-square max-w-[600px] mx-auto select-none group">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-innovation-cyan/5 blur-[100px] rounded-full scale-150 animate-pulse pointer-events-none" />
      
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          <radialGradient id="radarGradient">
            <stop offset="0%" stopColor="var(--color-innovation-cyan)" stopOpacity="0.05" />
            <stop offset="60%" stopColor="var(--color-innovation-cyan)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--color-innovation-cyan)" stopOpacity="0.25" />
          </radialGradient>
        </defs>

        {/* Outer Diagnostic Ring - Static */}
        <circle cx={center} cy={center} r={radius * 1.3} fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" strokeDasharray="1 10" />
        
        {/* Rotating HUD Rings */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <circle cx={center} cy={center} r={radius * 1.25} fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="10 20" />
          {/* Compass Ticks */}
          {[...Array(72)].map((_, i) => (
             <line 
                key={i} 
                x1={center} y1={center - radius * 1.25} 
                x2={center} y2={center - radius * 1.3} 
                stroke="white" strokeWidth="0.5" strokeOpacity="0.2"
                transform={`rotate(${i * 5}, ${center}, ${center})`}
             />
          ))}
        </motion.g>

        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <circle cx={center} cy={center} r={radius * 1.15} fill="none" stroke="var(--color-phoenix-orange)" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="100 200" />
        </motion.g>

        {/* Scanline Sweep */}
        <motion.line
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          x1={center} y1={center} x2={center} y2={center - radius * 1.25}
          stroke="var(--color-innovation-cyan)" strokeWidth="1.5" strokeOpacity="0.7"
          className="origin-center"
          style={{ filter: "url(#glow)" }}
        />

        {/* Grid Concentric Hexagons */}
        {[25, 50, 75, 100].map((ringLevel) => {
          const r = (radius * ringLevel) / 100;
          const hexPoints = DOMAINS.map((_, i) => {
            const angle = (i * 2 * Math.PI) / DOMAINS.length;
            const x = center + r * Math.cos(angle - Math.PI / 2);
            const y = center + r * Math.sin(angle - Math.PI / 2);
            return `${x},${y}`;
          }).join(" ");
          
          return (
            <polygon
              key={ringLevel}
              points={hexPoints}
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              strokeOpacity={ringLevel === 100 ? "0.15" : "0.05"}
              strokeDasharray={ringLevel === 100 ? "none" : "4 4"}
            />
          );
        })}

        {/* Axis Ticks */}
        {DOMAINS.map((_, i) => {
          const angle = (i * 2 * Math.PI) / DOMAINS.length;
          const end = getCoordinates(angle, 100);
          return (
            <line
              key={i}
              x1={center} y1={center} x2={end.x} y2={end.y}
              stroke="white" strokeWidth="0.5" strokeOpacity="0.1"
            />
          );
        })}

        {/* Data Hull (Filled Area) */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          d={pathData}
          fill="url(#radarGradient)"
          stroke="var(--color-innovation-cyan)"
          strokeWidth="1.5"
          className="drop-shadow-[0_0_15px_rgba(0,242,255,0.2)]"
        />

        {/* Active Points with Glow (Square shards for tech feel) */}
        {points.map((p, i) => (
          <g key={i}>
            <motion.rect
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 45 }}
              transition={{ delay: 1 + i * 0.1, type: "spring" }}
              x={p.x - 3} y={p.y - 3} width="6" height="6"
              fill={DOMAINS[i].color}
              className="group-hover:w-[10px] group-hover:h-[10px] group-hover:x-[p.x-5] group-hover:y-[p.y-5] transition-all duration-300"
              style={{ filter: "drop-shadow(0 0 8px currentColor)" }}
            />
            <motion.rect
               initial={{ scale: 0, opacity: 0, rotate: 45 }}
               animate={{ scale: [1, 2], opacity: [0.5, 0], rotate: 45 }}
               transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
               x={p.x - 3} y={p.y - 3} width="6" height="6"
               fill={DOMAINS[i].color}
               className="pointer-events-none"
            />
          </g>
        ))}
      </svg>

      {/* HTML Labels (Technique Design) */}
      {DOMAINS.map((domain, i) => {
        const angle = (i * 2 * Math.PI) / DOMAINS.length;
        const pos = getCoordinates(angle, 125);
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 + i * 0.1 }}
            className="absolute flex flex-col font-mono"
            style={{
              left: `${(pos.x / size) * 100}%`,
              top: `${(pos.y / size) * 100}%`,
              transform: "translate(-50%, -50%)"
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[7px] text-white/30 border border-border px-1 py-0.5 rounded-sm">{domain.id}</span>
              <span className="text-[9px] font-black text-white uppercase tracking-tighter group-hover:text-innovation-cyan transition-colors">
                {domain.name}
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
               <div className="flex-1 h-[2px] bg-white/5 rounded-full overflow-hidden w-12">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: `${domain.level}%` }}
                    transition={{ duration: 2, delay: 2 }}
                    className="h-full" style={{ backgroundColor: domain.color }} 
                  />
               </div>
               <span className="text-[8px] font-bold text-white/50">{domain.level}%</span>
            </div>
          </motion.div>
        );
      })}

      {/* Center Origin Hub */}
      <div className="absolute inset-x-0 inset-y-0 m-auto w-10 h-10 flex items-center justify-center">
         <motion.div 
            animate={{ rotate: 45, scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute w-full h-full border border-border" 
         />
         <div className="absolute w-4 h-4 border border-innovation-cyan/40 rotate-45" />
         <div className="w-1.5 h-1.5 bg-white rotate-45 shadow-[0_0_10px_#fff]" />
      </div>
    </div>
  );
}

