"use client";

import { useState, useEffect, useRef } from "react";
import { usePhoenix } from "@/context/PhoenixContext";
import { useRealtimeLogs } from "@/hooks/useRealtimeLogs";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Terminal, ShieldCheck } from "lucide-react";
interface ExpertTerminalProps {
  inline?: boolean;
}

export default function ExpertTerminal({ inline = false }: ExpertTerminalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { currentZone, status, updateStatus } = usePhoenix();
  const isRainbowMode = status.isRainbowMode;
  const { logs } = useRealtimeLogs(24);
  const data = currentZone.terminalData;
  const [resilience, setResilience] = useState(1.0);
  const logEndRef = useRef<HTMLDivElement>(null);
  const [, setKonami] = useState<string[]>([]);

  // If inline, it's effectively always "open"
  const active = inline || isOpen;

  useEffect(() => {
    if (active) {
      logEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs, active]);

  useEffect(() => {
    const interval = setInterval(() => {
      setResilience((prev) => {
        const delta = (Math.random() - 0.5) * 0.015;
        return Math.max(0.98, Math.min(1.02, prev + delta));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const KONAMI_CODE = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", 
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", 
      "b", "a"
    ];
    const HACK_CODE = ["h", "a", "c", "k"];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (inline) return; // Disable shortcuts if inline

      if (e.key.toLowerCase() === "t") {
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }

      setKonami((prev) => {
        const next = [...prev, e.key];
        
        // Check for Hack code
        const hackCheck = next.slice(-4).map(k => k.toLowerCase());
        if (hackCheck.join(",") === HACK_CODE.join(",")) {
          updateStatus({ isHackMode: !status.isHackMode });
          setIsOpen(true); // Open terminal on hack mode
          return [];
        }

        // Check for Konami code
        const konamiCheck = next.slice(-10);
        if (konamiCheck.join(",") === KONAMI_CODE.join(",")) {
          updateStatus({ isRainbowMode: !isRainbowMode });
          return [];
        }

        // Keep maximum 10 elements
        return next.slice(-10);
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isRainbowMode, status.isHackMode, updateStatus, inline]);

  const TerminalContent = () => (
    <div className={cn(
      "flex flex-col flex-1 relative z-[102] min-h-0",
      inline ? "p-0 h-full" : "p-8 md:p-16 lg:p-24 max-w-[1700px] w-full mx-auto"
    )}>
      {!inline && (
        <header className="flex items-end justify-between border-b border-primary/20 pb-12 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <Activity size={12} className="text-primary animate-pulse" />
              <p className="text-primary/80 text-[10px] font-black tracking-[0.6em] uppercase font-sans">
                {isRainbowMode ? "NEURAL_REBIRTH_INITIATED // RAINBOW_PROTOCOL" : "SYSTEM_CORE / REGISTRY_v5.0"}
              </p>
            </div>
            <h2 id="terminal-title" className="text-white text-5xl md:text-8xl font-black italic tracking-tighter leading-none uppercase">
              Terminal <span className="text-primary not-italic">Expert.</span>
            </h2>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-5 text-muted-foreground hover:text-white transition-all mb-2"
            aria-label="Fermer le terminal"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] glass p-6 rounded-2xl group-hover:border-primary/50 font-sans">
              Terminate [esc]
            </span>
          </button>
        </header>
      )}

      <div className={cn(
        "grid grid-cols-1 lg:grid-cols-12 gap-16 flex-1 min-h-0",
        inline && "p-12 overflow-hidden"
      )}>
        <div className="lg:col-span-5 flex flex-col gap-12 overflow-y-auto pr-4 custom-scrollbar">
          <section>
              Registre_Evidence : {data.title}
            <ul className="space-y-6">
              {data.items.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-5 text-muted-foreground font-medium text-sm group"
                >
                  <span className="text-primary mt-1.5 w-1 h-3 bg-primary/20 rounded-full" />
                  <span className="group-hover:text-white transition-colors uppercase tracking-tight font-sans italic opacity-80 group-hover:opacity-100">{item}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-primary/40 text-[10px] font-black uppercase tracking-[0.4em] mb-10 flex items-center gap-4 font-sans">
              <span className="w-8 h-[1px] bg-primary/30" />
              Unité_Travail_RNCP
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {data.rncpBlocks.map((block: string, i: number) => (
                <div key={i} className="glass p-6 rounded-2xl border-white/5 flex items-center justify-between group hover:bg-primary/5 transition-all bg-white/[0.01]">
                  <span className="text-[10px] uppercase font-black text-white tracking-[0.2em] font-sans italic">{block}</span>
                  <span className="text-primary/40 text-[9px] font-bold font-sans">Ref_{i+100}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-auto pt-10">
            <div className="p-8 glass rounded-[2rem] border-white/5 font-sans text-[11px] text-muted-foreground leading-relaxed uppercase tracking-wider bg-white/[0.01]">
              <p className="text-primary mb-4 font-black flex items-center gap-2">
                <ShieldCheck size={14} />
                Manifeste_Ingénierie:
              </p>
              <p className="italic">
                L&apos;architecture **souveraine** ne se contente pas de répondre aux besoins, 
                elle anticipe les ruptures. Chaque ligne de code est une brique de votre 
                future souveraineté numérique.
              </p>
            </div>
          </section>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-8 min-h-0">
          <div className="glass p-10 rounded-[3rem] bg-muted/40 flex-1 overflow-hidden flex flex-col relative border-white/5">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />
            
            <div className="flex items-center justify-between mb-10 relative z-10">
              <div className="flex flex-col gap-2">
                <h3 className="text-primary/40 text-[10px] font-black uppercase tracking-[0.6em] font-sans">Live Telemetry Stream</h3>
                <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-[0.2em] font-sans">Lat: 12ms // Stability: 99.9%</span>
              </div>
              <div className="flex items-center gap-6">
                 <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full animate-ping bg-primary absolute" />
                   <div className="w-2 h-2 rounded-full bg-primary relative shadow-[0_0_10px_hsl(var(--primary))]" />
                   <span className="text-white/40 text-[9px] font-bold tracking-tighter font-sans uppercase">WS_Active</span>
                 </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto pr-6 font-sans text-[12px] space-y-6 scrollbar-hide relative z-10">
              <AnimatePresence initial={false}>
                {logs.map((log) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-6 group py-2 border-b border-white/[0.03]"
                  >
                    <span className="w-16 text-primary/40 font-black text-[10px] italic">[{log.source}]</span>
                    <span className="text-foreground/80 uppercase group-hover:text-white transition-colors font-bold tracking-wide">{log.event}</span>
                    <span className="ml-auto text-[9px] text-muted-foreground italic font-medium">{log.status}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={logEndRef} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="p-10 glass rounded-[2.5rem] bg-muted/40 flex flex-col justify-between group border-white/5">
              <span className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.4em] font-sans">Resilience_Core</span>
              <div className="mt-6 flex items-baseline gap-4">
                <span className="text-4xl font-black text-white tabular-nums tracking-tighter">
                  {resilience.toFixed(4)}
                </span>
                <span className="text-primary text-[10px] font-black uppercase font-sans">P-Index</span>
              </div>
              <div className="mt-6 h-[2px] bg-white/5 w-full rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary shadow-[0_0_15px_hsl(var(--primary))]" 
                  animate={{ width: `${(resilience - 0.98) * 2500}%` }}
                />
              </div>
            </div>
            <div className="p-10 glass rounded-[2.5rem] bg-muted/40 flex flex-col justify-between border-white/5">
              <div className="flex justify-between items-start mb-6">
                <span className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.4em] font-sans">Heartbeat</span>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary/20">
                  <motion.path 
                    d="M3 12h3l3-9 4 18 3-9h5" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    animate={{ pathLength: [0, 1], pathOffset: [0, 1] }} 
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  />
                </svg>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-black text-white tracking-tighter italic uppercase">64.0</span>
                <span className="text-primary/40 text-[10px] font-black animate-pulse uppercase tracking-widest font-sans">Sync</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (inline) {
    return (
      <div className={cn(
        "w-full h-full relative overflow-hidden backdrop-blur-3xl",
        isRainbowMode && "rainbow-rebirth"
      )}>
        <TerminalContent />
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              "fixed inset-0 z-[100] bg-background/98 backdrop-blur-3xl overflow-hidden flex flex-col",
              isRainbowMode && "rainbow-rebirth"
            )}
            role="dialog"
            aria-modal="true"
            aria-labelledby="terminal-title"
          >
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
               <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 blur-[120px]" />
               <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-slate-500/5 blur-[100px]" />
            </div>
            <TerminalContent />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 z-[60] glass-gold p-4 px-10 text-[11px] font-black uppercase tracking-[0.4em] text-primary hover:text-white transition-all shadow-2xl group flex items-center gap-5 rounded-2xl"
      >
        <Terminal size={18} />
        Expert_Terminal.EXE [T]
      </motion.button>
    </>
  );
}
