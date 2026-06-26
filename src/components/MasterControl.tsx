"use client";

import { useState, useEffect } from "react";
import { usePhoenix } from "@/context/PhoenixContext";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, X, Layout, Zap, Share2, ShieldCheck, Compass, Eye, Boxes } from "lucide-react";
import { cn } from "@/lib/utils";
import PhoenixRebirth from "./animations/PhoenixRebirth";
import Magnetic from "./animations/Magnetic";

const NAV_ITEMS = [
  { label: "Accueil", path: "/", id: "00", status: "ATRIUM", icon: Compass },
  { label: "Projets", path: "/realisations", id: "0B", status: "OUTPUT", icon: Boxes },
  { label: "Vision", path: "/vision", id: "01", status: "ROADMAP", icon: Eye },
];

export default function MasterControl() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    isBlueprint, 
    toggleBlueprint, 
    toggleBlueprintOverlay, 
    status,
    updateStatus
  } = usePhoenix();

  const syncRate = status.syncRate;
  const isRainbowMode = status.isRainbowMode;

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.5) * 5;
      const newRate = parseFloat(Math.max(120, Math.min(180, syncRate + delta)).toFixed(1));
      updateStatus({ syncRate: newRate });
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen, syncRate, updateStatus]);

  return (
    <div className="fixed top-10 right-10 z-[60]">
      <Magnetic>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "glass-gold p-4 border-border bg-muted/40 hover:bg-card/60 transition-all shadow-2xl group relative overflow-hidden rounded-2xl",
            isOpen && "border-primary/30"
          )}
        >
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          {isOpen ? (
            <X size={20} className="text-white" />
          ) : (
            <div className="relative">
              <Settings size={20} className="text-primary group-hover:text-white transition-colors animate-spin-slow" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>
          )}
        </motion.button>
      </Magnetic>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 20, scale: 0.95, filter: "blur(10px)" }}
            className="absolute top-20 right-0 w-[420px] glass p-10 bg-muted/95 backdrop-blur-3xl shadow-3xl rounded-[2.5rem] border-white/5"
          >
            {/* ── HEADER ── */}
            <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
               <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full" />
                    <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.6em] font-sans italic">Fred_Chauvet_Command</h3>
                 </div>
                 <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-[0.4em] font-sans">Build: 2026.04 // Status: Encrypted</p>
               </div>
               <div className="w-12 h-12 rounded-full border border-primary/10 p-2 opacity-60">
                  <PhoenixRebirth progress={100} mode="continuous" />
               </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              {/* LEFT COLUMN: NAVIGATION */}
              <div className="space-y-10">
                <div>
                   <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.5em] mb-6 flex items-center gap-4 font-sans">
                     Noyau_Nav 
                     <span className="h-px flex-1 bg-white/5" />
                   </h4>
                   <nav className="flex flex-col gap-3">
                      {NAV_ITEMS.map((item) => (
                        <Magnetic key={item.path} intensity={0.2}>
                          <a 
                            href={item.path}
                            className="group relative p-4 glass-hover border border-white/5 rounded-2xl transition-all flex flex-col gap-1 overflow-hidden"
                          >
                            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                              <item.icon size={12} className="text-primary" />
                            </div>
                            <span className="text-[7px] font-black text-primary/40 font-sans italic">[{item.id}]</span>
                            <span className="text-sm font-black uppercase text-muted-foreground group-hover:text-white group-hover:tracking-[0.1em] transition-all font-sans italic">
                              {item.label}
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary/0 group-hover:bg-primary/40 transition-all rounded-full" />
                          </a>
                        </Magnetic>
                      ))}
                   </nav>
                </div>
              </div>

              {/* RIGHT COLUMN: TELEMETRY & MODES */}
              <div className="space-y-10">
                {/* Telemetry Block */}
                <div>
                   <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.5em] mb-6 flex items-center gap-4 font-sans">
                     Telemetry
                     <span className="h-px flex-1 bg-white/5" />
                   </h4>
                   <div className="space-y-6">
                      <div className="p-5 glass rounded-2xl border-white/5 space-y-5 bg-muted/40">
                         <div className="flex justify-between items-end">
                            <div className="flex flex-col gap-1">
                               <span className="text-[7px] text-muted-foreground uppercase font-black font-sans tracking-widest">Expert_Sync</span>
                               <motion.span 
                                  animate={syncRate > 160 ? { x: [0, -2, 2, 0], opacity: [1, 0.7, 1] } : {}}
                                  transition={{ duration: 0.1, repeat: syncRate > 160 ? Infinity : 0 }}
                                  className={cn(
                                    "text-2xl font-black tabular-nums tracking-tighter italic transition-colors",
                                    syncRate > 160 ? "text-aura-ruby" : "text-white"
                                  )}
                                >
                                  {syncRate}
                                </motion.span>
                            </div>
                            <span className="text-[8px] text-primary/40 font-black italic uppercase font-sans">Hz</span>
                         </div>
                         <div className="h-4 flex items-end gap-[2px]">
                            {[...Array(20)].map((_, i) => (
                              <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${Math.random() * 100}%` }}
                                transition={{ repeat: Infinity, duration: 0.5 + Math.random(), delay: i * 0.05 }}
                                className="flex-1 bg-primary/20 rounded-t-full"
                              />
                            ))}
                         </div>
                      </div>

                      <div className="flex items-center justify-between px-2">
                         <div className="flex flex-col gap-1">
                            <span className="text-[6px] text-muted-foreground uppercase font-black font-sans tracking-[0.2em]">Oracle_Load</span>
                            <span className="text-[10px] font-black text-primary tabular-nums italic">14.2%</span>
                         </div>
                         <div className="flex flex-col items-end gap-1">
                            <span className="text-[6px] text-muted-foreground uppercase font-black font-sans tracking-[0.2em]">Stability</span>
                            <span className="text-[10px] font-black text-white/40 tabular-nums italic">0.9997</span>
                         </div>
                      </div>
                   </div>
                </div>

                {/* System Toggles */}
                <div className="space-y-4">
                   <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.5em] mb-6 flex items-center gap-4 font-sans">
                     Systèmes
                     <span className="h-px flex-1 bg-white/5" />
                   </h4>
                   
                   {/* Blueprint Toggle */}
                   <button 
                     onClick={() => { toggleBlueprint(); toggleBlueprintOverlay(); }}
                     className={cn(
                       "w-full p-5 glass border rounded-2xl flex items-center justify-between transition-all group",
                       isBlueprint ? "bg-primary/10 border-primary/40" : "bg-muted/40 border-white/5 opacity-60 hover:opacity-100"
                     )}
                   >
                     <div className="flex items-center gap-4">
                        <Layout size={16} className={isBlueprint ? "text-primary" : "text-muted-foreground"} />
                        <div className="flex flex-col items-start">
                           <span className="text-[10px] font-black text-white uppercase tracking-widest font-sans italic">Blueprint_v2</span>
                           <span className="text-[6px] font-bold text-muted-foreground uppercase tracking-tighter font-sans">Topology_Overlay</span>
                        </div>
                     </div>
                     <div className={cn("w-2 h-2 rounded-full", isBlueprint ? "bg-primary animate-pulse shadow-[0_0_10px_hsl(var(--primary))]" : "bg-white/10")} />
                   </button>

                   {/* Rainbow Toggle (Secret Shift) */}
                   <button 
                     onClick={() => updateStatus({ isRainbowMode: !isRainbowMode })}
                     className={cn(
                       "w-full p-5 border rounded-2xl flex items-center justify-between transition-all group",
                       isRainbowMode 
                         ? "bg-gradient-to-r from-red-500/10 via-blue-500/10 to-green-500/10 border-white/20" 
                         : "border-white/5 opacity-20 hover:opacity-100 bg-muted/40"
                     )}
                   >
                      <div className="flex items-center gap-4">
                         <Zap size={16} className={isRainbowMode ? "text-blue-400 animate-pulse" : "text-muted-foreground"} />
                         <span className={cn(
                           "text-[10px] font-black uppercase tracking-widest font-sans italic",
                           isRainbowMode ? "text-white" : "text-muted-foreground"
                         )}>Spectral_Shift</span>
                      </div>
                      <span className="text-[7px] font-black uppercase font-sans tracking-widest italic">
                        {isRainbowMode ? "UNLOCKED" : "Locked_0x"}
                      </span>
                   </button>
                </div>
              </div>
            </div>

            {/* FOOTER METRICS */}
            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between font-sans">
               <div className="flex items-center gap-8 text-[8px] font-black text-muted-foreground uppercase tracking-[0.2em] italic">
                  <span className="flex items-center gap-3"><ShieldCheck size={12} className="text-primary/40" />Security: 0B</span>
                  <span className="flex items-center gap-3"><Share2 size={12} className="text-primary/40" />Poles: 12</span>
               </div>
               <div className="flex items-center gap-3">
                  <span className="text-[8px] font-black text-primary/60 uppercase italic tracking-widest">Identity_Active</span>
                  <div className="w-2 h-2 rotate-45 bg-primary animate-pulse" />
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
