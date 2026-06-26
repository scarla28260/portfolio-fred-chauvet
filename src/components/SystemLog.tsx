"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

/**
 * SystemLog - A technical status terminal.
 * Simulates real-time system logs for the Blueprint page.
 */
export default function SystemLog() {
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM] Phoenix v2026 Core Baseline: NOMINAL",
    "[STATUS] Initializing Neural Topology Scan...",
    "[NETWORK] Scanning Edge Nodes 0x01...0x0F"
  ]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const LOG_POOL = [
       "GET /api/v1/neural-bus - 200 OK",
       "STREAMING /vectors/0x45f8b2 - High_Priority",
       "PUSH /worker/edge-01 - 12ms Latency",
       "INTEGRITY: Verify Node Status: VERIFIED",
       "SYNC /context/memory-shard-4 - Success",
       "EVENT /ui-orchestration/update - Triggered",
       "SECURITY: Monitoring Token Flow... [SAFE]"
    ];

    const interval = setInterval(() => {
      const newLine = `[${new Date().toLocaleTimeString()}] ${LOG_POOL[Math.floor(Math.random() * LOG_POOL.length)]}`;
      setLogs((prev) => [...prev.slice(-14), newLine]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="glass p-12 border-white/5 space-y-10 noise-panel flex flex-col h-full bg-black/40 backdrop-blur-3xl">
       <div className="flex items-center justify-between">
          <h4 className="text-[10px] font-black text-innovation-cyan uppercase tracking-[0.4em]">SYSTEM_LOG_FEED</h4>
          <div className="flex gap-1">
             <div className="w-1 h-1 bg-innovation-cyan rounded-full animate-ping" />
             <div className="w-1 h-1 bg-innovation-cyan rounded-full" />
          </div>
       </div>

       <div 
         ref={containerRef}
         className="flex-1 font-mono text-[8.5px] leading-relaxed text-white/30 space-y-2 overflow-y-auto scrollbar-hide select-none"
       >
          <AnimatePresence mode="popLayout">
             {logs.map((log, i) => (
               <motion.div
                 key={log + i}
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 className="flex gap-4 border-l border-white/5 pl-4 py-1 hover:text-innovation-cyan/60 transition-colors"
               >
                  <span className="text-innovation-cyan/40 shrink-0 font-bold tracking-widest">{">"}</span>
                  <span className="whitespace-pre-wrap">{log}</span>
               </motion.div>
             ))}
          </AnimatePresence>
       </div>

       <div className="pt-8 border-t border-white/5 space-y-2">
          <div className="flex justify-between text-[7px] font-mono text-white/20 uppercase tracking-widest">
             <span>Protocol_ID</span>
             <span>PHOENIX_REBIRTH_0x4</span>
          </div>
          <div className="h-0.5 bg-innovation-cyan/10 overflow-hidden">
             <motion.div
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               className="h-full w-1/4 bg-innovation-cyan/40 shadow-[0_0_15px_#00F2FF]"
             />
          </div>
       </div>
    </div>
  );
}
