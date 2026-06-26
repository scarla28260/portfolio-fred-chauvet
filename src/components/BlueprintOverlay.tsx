"use client";

import { usePhoenix } from "@/context/PhoenixContext";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * BlueprintOverlay - A global technical "schematic" layer.
 * Activated by MasterControl. Transforms UI into an engineering draft.
 */
export default function BlueprintOverlay() {
  const { isBlueprint } = usePhoenix();
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isBlueprint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
        >
          {/* Engineering Grid (Cyan) */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              backgroundImage: `linear-gradient(to right, var(--color-innovation-cyan) 1px, transparent 1px), linear-gradient(to bottom, var(--color-innovation-cyan) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
          
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{ 
              backgroundImage: `linear-gradient(to right, var(--color-innovation-cyan) 1px, transparent 1px), linear-gradient(to bottom, var(--color-innovation-cyan) 1px, transparent 1px)`,
              backgroundSize: '200px 200px'
            }}
          />

          {/* Dynamic Technical Annotations */}
          <div className="absolute inset-0 p-12">
             <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1 border-l border-t border-innovation-cyan/40 p-4">
                   <span className="text-[9px] font-mono text-innovation-cyan font-bold tracking-widest uppercase">X_COORD: 0.245</span>
                   <span className="text-[9px] font-mono text-innovation-cyan font-bold tracking-widest uppercase">Y_COORD: 0.782</span>
                   <span className="text-[9px] font-mono text-white/20 uppercase mt-2">ACTIVE_NODE: {pathname.toUpperCase()}</span>
                </div>
                <div className="flex flex-col items-end gap-1 border-r border-t border-innovation-cyan/40 p-4">
                   <span className="text-[9px] font-mono text-innovation-cyan font-bold tracking-widest uppercase">SCALE: 1:1024</span>
                   <span className="text-[9px] font-mono text-innovation-cyan font-bold tracking-widest uppercase">RENDER: TOPOLOGY_v2</span>
                </div>
             </div>

             {/* Center Crosshair Overlay */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-innovation-cyan/5 rounded-full"
                />
                <div className="absolute top-1/2 left-0 w-full h-px bg-innovation-cyan/10" />
                <div className="absolute left-1/2 top-0 w-px h-full bg-innovation-cyan/10" />
             </div>

             {/* Corner Data Feed (Simulation) */}
             <div className="absolute bottom-12 left-12 max-w-xs space-y-2 opacity-40">
                <div className="h-px w-32 bg-innovation-cyan/40" />
                <div className="text-[7px] font-mono text-innovation-cyan uppercase leading-loose">
                   {">"} Initializing Topology Scan...<br/>
                   {">"} Sector {pathname} Identified.<br/>
                   {">"} Loading Neural Architect Layer...<br/>
                   {">"} Integrity: NOMINAL [99.8%]<br/>
                   {">"} System: Phoenix_Rebirth_2026
                </div>
             </div>
          </div>

          {/* Cinematic Bloom / Glitch effect on perimeter */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-innovation-cyan/5 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-innovation-cyan/5 to-transparent pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
