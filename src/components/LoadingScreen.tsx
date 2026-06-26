"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, ShieldCheck } from "lucide-react";
import QuantumCore from "./animations/QuantumCore";
import { usePhoenix } from "@/context/PhoenixContext";

const LOADING_STEPS = [
  "INITIALIZING_SYSTEM_CORE_v5.0",
  "DECRYPTING_OPERATIONAL_MANIFESTO",
  "SYNCHRONIZING_EXPERT_VECTORS_0x00_0x0B",
  "ESTABLISHING_ORACLE_LINK",
  "CALIBRATING_RNCP_LEVEL_7_TOPOLOGY",
  "SYSTEM_INTELLIGENCE: CONNECTED"
];

function TechnicalHexagon() {
  return (
    <div className="relative w-64 h-64 mb-20 flex items-center justify-center">
      {/* Triple Rotating Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border border-primary/10 rounded-[3rem]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6 border border-primary/5 border-dashed rounded-[2.5rem]"
      />
      
      <motion.svg 
        viewBox="0 0 100 100" 
        className="absolute inset-0 w-full h-full text-primary/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <rect 
          x="2" y="2" width="96" height="96" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.1" 
          strokeDasharray="1 4" 
          rx="20"
        />
      </motion.svg>

      {/* Central Core */}
      <div className="relative z-10">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [45, 135, 225, 315, 405],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 border border-primary/40 glass bg-primary/5 flex items-center justify-center rounded-3xl"
        >
          <div className="w-14 h-14 border border-primary/20 flex items-center justify-center rounded-2xl">
             <motion.div 
               animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-5 h-5 bg-primary shadow-[0_0_20px_hsl(var(--primary))]" 
             />
          </div>
        </motion.div>
      </div>

      {/* Orbital Data Points */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
          style={{
            transform: `rotate(${angle}deg) translateY(-120px)`,
          }}
        />
      ))}
    </div>
  );
}

export default function LoadingScreen() {
  const { setProgress, updateStatus } = usePhoenix();
  const [stepIndex, setStepIndex] = useState(0);
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (stepIndex < LOADING_STEPS.length - 1) {
      const timer = setTimeout(() => {
        setStepIndex(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        updateStatus({ isLoaded: true });
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [stepIndex, updateStatus]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(p => {
        if (p >= 100) return 100;
        const jump = Math.random() * 8;
        return Math.min(100, p + jump);
      });
    }, 80);

    // CRITICAL SAFETY NET: Hard limit of 5 seconds to ensure the site always opens
    const safetyNet = setTimeout(() => {
      setIsVisible(false);
      updateStatus({ isLoaded: true });
      setProgress(100);
      console.warn("[Phoenix] Loading safety net triggered after 5s.");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyNet);
    };
  }, [updateStatus, setProgress]);

  // Synchronize progress with context to avoid rendering conflicts
  useEffect(() => {
    setProgress(percent);
  }, [percent, setProgress]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.02,
            filter: "blur(20px)",
          }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(hsl(var(--primary))_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-80" />
          
          <motion.div
            animate={{ 
              opacity: percent > 90 ? 0 : 1,
              scale: percent > 90 ? 0.95 : 1,
            }}
            transition={{ duration: 1 }}
          >
            <TechnicalHexagon />
          </motion.div>

          <div className="flex flex-col items-center max-w-[500px] w-full relative z-20 px-10">
            <div className="flex justify-between w-full mb-8 items-end font-sans">
              <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-3">
                    <Activity size={10} className="text-primary animate-pulse" />
                    <span className="text-[8px] font-black text-muted-foreground uppercase tracking-[0.4em]">Sub_System_Monitor</span>
                 </div>
                 <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] italic">
                    {percent < 30 ? "Initializing..." : percent < 70 ? "Processing Vitals..." : "Finalizing Matrix..."}
                 </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-3xl font-black text-primary tracking-tighter tabular-nums italic">
                  {Math.floor(percent)}%
                </span>
              </div>
            </div>
            
            <div className="relative w-full mb-10 scale-[0.65] opacity-80">
               <QuantumCore />
               <motion.div 
                 className="absolute -bottom-4 left-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                 initial={{ width: 0, left: "50%" }}
                 animate={{ width: "100%", left: 0 }}
                 transition={{ duration: 2 }}
               />
            </div>

            <div className="h-6 overflow-hidden text-center w-full relative z-10 font-sans">
              <AnimatePresence mode="wait">
                <motion.p
                  key={stepIndex}
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                  className="text-[10px] font-black tracking-[0.6em] text-muted-foreground uppercase italic"
                >
                  {LOADING_STEPS[stepIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute bottom-16 left-12 right-12 flex items-center justify-between border-t border-white/5 pt-10 font-sans">
            <div className="flex items-center gap-4">
              <ShieldCheck size={14} className="text-primary/40" />
              <span className="text-[9px] font-black tracking-[0.4em] text-muted-foreground uppercase italic">
                RNCP_LEVEL_7 / COMPLIANCE_v5.0
              </span>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col items-end gap-1">
                 <span className="text-[7px] font-black text-muted-foreground uppercase tracking-widest">Node_Status</span>
                 <span className="text-[9px] font-black text-primary/60 uppercase italic">Active_Sync</span>
              </div>
              <div className="w-2 h-2 bg-primary animate-pulse rounded-full shadow-[0_0_10px_hsl(var(--primary))]" />
            </div>
          </div>

          {/* Cinematic Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.02)_50%)] bg-[length:100%_4px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
