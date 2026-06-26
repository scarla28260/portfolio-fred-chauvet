"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface SubSystem {
  name: string;
  count?: string;
  status: "nominal" | "active" | "standby";
}

interface TopologyNodeProps {
  id: string;
  name: string;
  tool: string;
  subSystems: SubSystem[];
  index: number;
}

export default function TopologyNode({ id, name, tool, subSystems, index }: TopologyNodeProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className={`relative group overflow-hidden border border-white/5 bg-background hover:border-innovation-cyan/30 transition-all duration-500 cursor-pointer`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Interactive Scanline Animation */}
      <motion.div
        animate={{ left: ["-100%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 w-32 h-full bg-gradient-to-r from-transparent via-innovation-cyan/10 to-transparent skew-x-12 pointer-events-none"
      />

      <div className="p-8 flex flex-col gap-4">
        <div className="flex justify-between items-start">
           <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-tighter">Layer_ID: {id}</span>
              <h3 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-3">
                 {name}
                 <ChevronRight 
                   className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} 
                   size={14} 
                 />
              </h3>
           </div>
           <div className="flex items-center gap-4">
              <span className="text-[9px] font-mono text-white/30 uppercase italic">{tool}</span>
              <div className="w-2 h-2 bg-innovation-emerald rounded-full animate-pulse shadow-[0_0_8px_#10B981]" />
           </div>
        </div>

        {/* Expanded View: Sub-Systems */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden pt-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/5 pt-6">
                {subSystems.map((sub, i) => (
                  <div key={i} className="flex flex-col gap-2 p-4 bg-white/[0.02] border border-white/5 hover:bg-innovation-cyan/5 transition-colors">
                     <div className="flex justify-between items-center">
                        <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">{sub.name}</span>
                        <div className={`w-1 h-1 rounded-full ${sub.status === 'nominal' ? 'bg-innovation-cyan' : 'bg-innovation-emerald'}`} />
                     </div>
                     <div className="flex justify-between text-[7px] font-mono text-white/20 uppercase">
                        <span>Metrics</span>
                        <span>{sub.count || '0.999'}</span>
                     </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Node Elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-innovation-cyan/5 to-transparent pointer-events-none" />
    </motion.div>
  );
}
