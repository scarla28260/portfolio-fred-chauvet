"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Search, Loader2, BrainCircuit, Sparkles, AlertCircle, ChevronRight, CheckCircle2 } from "lucide-react";


interface GraphState {
  status: string;
  iteration: number;
  results_count: number;
  summary: string | null;
}

export default function ResearchAgent() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [state, setState] = useState<GraphState | null>(null);
  const [error, setError] = useState<string | null>(null);

  const NODES = [
    { id: "RESEARCH_NODE", label: "NODE_01: RESEARCHER" },
    { id: "SYNTHESIS_NODE", label: "NODE_02: SYNTHESIZER" }
  ];

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setError(null);
    setState(null);
    setActiveNode("RESEARCH_NODE");

    try {
      const response = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      setActiveNode("RESEARCH_NODE");

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        
        // Split by double newline (SSE events)
        const events = buffer.split('\n\n');
        buffer = events.pop() || "";

        for (const event of events) {
           const lines = event.split('\n');
           const dataLine = lines.find(l => l.startsWith('data: '));
           
           if (dataLine) {
              try {
                const data = JSON.parse(dataLine.slice(6));
                
                // Active node mapping based on real graph status
                if (data.status?.includes("RESEARCH")) setActiveNode("RESEARCH_NODE");
                if (data.status?.includes("SYNTHESIS")) setActiveNode("SYNTHESIS_NODE");
                if (data.status === "SYNTHESIS_COMPLETE") setActiveNode(null);
                
                setState(data);
              } catch (e) {
                console.error("Parse Error", e);
              }
           }
        }
      }
    } catch (err: any) {
      setError(err.message || "AGENTIC_FAILURE");
    } finally {
      setIsSearching(false);
      setActiveNode(null);
    }
  };

  return (
    <div className="glass p-10 border-white/5 bg-black flex flex-col gap-8 h-full min-h-[600px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-6">
        <div className="flex items-center gap-4">
           <BrainCircuit className="text-innovation-cyan" size={20} />
           <h4 className="text-[11px] font-black text-white uppercase tracking-[0.4em]">RESEARCH_ORCHESTRATOR_0x8_LIVE</h4>
        </div>
        <div className="flex items-center gap-2">
           <div className={`w-1.5 h-1.5 rounded-full ${isSearching ? 'bg-innovation-cyan animate-ping' : 'bg-innovation-emerald'}`} />
           <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest">{isSearching ? 'ACTIVE_SCAN' : 'READY_STANDBY'}</span>
        </div>
      </div>

      {/* Input */}
      <form onSubmit={handleSearch} className="relative group">
        <input 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ENTER_QUERY_FOR_DEEP_RESEARCH..."
          className="w-full bg-white/[0.05] border border-white/20 p-6 pr-16 text-sm font-mono text-white placeholder:text-white/40 focus:outline-none focus:border-innovation-cyan transition-all rounded-sm uppercase tracking-wider"
          disabled={isSearching}
        />
        <button 
          type="submit" 
          disabled={isSearching}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-innovation-cyan transition-colors"
          aria-label="Lancer la recherche"
        >
          {isSearching ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
        </button>
      </form>

      {/* Graph Visualizer (Mini) */}
      {isSearching && (
        <div className="flex items-center gap-4 px-2">
           {NODES.map((node, i) => (
             <div key={node.id} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                   <div className={`w-2.5 h-2.5 rounded-full border border-white/30 ${activeNode === node.id ? 'bg-innovation-cyan shadow-[0_0_15px_var(--color-innovation-cyan)]' : (state?.summary && i === 1 ? 'bg-innovation-emerald' : ((state?.results_count ?? 0) > 0 && i === 0 ? 'bg-innovation-emerald' : ''))}`} />
                   <span className={`text-[9px] font-mono uppercase tracking-tighter ${activeNode === node.id ? 'text-white' : 'text-white/30'}`}>{node.label}</span>
                </div>
                {i < NODES.length - 1 && <ChevronRight size={14} className="text-white/20" />}
             </div>
           ))}
        </div>
      )}

      {/* Results / Progress Area */}
      <div className="flex-1 overflow-y-auto scrollbar-hide space-y-6">
        <AnimatePresence mode="wait">
          {isSearching && !state?.summary && (
            <motion.div 
              key="loader"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="flex flex-col items-center justify-center h-full gap-4 py-20"
            >
              <div className="relative">
                 <Loader2 className="animate-spin text-innovation-cyan/30" size={80} />
                 <Sparkles className="absolute inset-0 m-auto text-innovation-cyan animate-pulse" size={32} />
              </div>
              <p className="text-[10px] font-mono font-black text-innovation-cyan uppercase tracking-[0.8em] animate-pulse">
                {state?.status || "INITIALIZING_NODES"}
              </p>
            </motion.div>
          )}

          {error && (
            <motion.div 
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 border border-red-500/40 bg-red-500/10 flex items-center gap-4 text-red-400"
            >
              <AlertCircle size={20} />
              <div className="flex flex-col gap-1">
                 <span className="text-[11px] font-black uppercase tracking-widest">CRITICAL_EXCEPTION</span>
                 <span className="text-[9px] font-mono lowercase">{error}</span>
              </div>
            </motion.div>
          )}

          {state?.summary && (
            <motion.div 
              key="summary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
               <div className="p-10 border border-border bg-white/[0.02] backdrop-blur-3xl space-y-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                     <BrainCircuit size={120} />
                  </div>
                  
                  <div className="flex items-center gap-4 text-innovation-cyan">
                     <Sparkles size={18} />
                     <h5 className="text-[13px] font-black uppercase tracking-[0.5em] text-white">ORCHESTRATED_SYNOPSIS</h5>
                  </div>
                  
                  <p className="text-sm leading-relaxed text-white font-mono tracking-wide cinematic-text whitespace-pre-line">
                    {state.summary}
                  </p>
                  
                  <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <CheckCircle2 size={14} className="text-innovation-emerald" />
                        <span className="text-[9px] text-white/40 uppercase tracking-widest">KNOWLEDGE_DENSITY_MAX</span>
                     </div>
                     <span className="text-[10px] font-mono text-innovation-cyan font-black">X_RECALL: 0.992</span>
                  </div>
               </div>
            </motion.div>
          )}

          {!state?.summary && !isSearching && !error && (
            <div className="flex flex-col items-center justify-center h-full opacity-20 gap-6 py-20 grayscale">
               <div className="relative">
                 <BrainCircuit size={80} strokeWidth={0.5} className="text-white" />
                 <div className="absolute inset-0 bg-innovation-cyan/10 blur-3xl rounded-full" />
               </div>
               <p className="text-[10px] font-black uppercase tracking-[1.5em] text-white">IDLE_ENGINE_READY</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-border flex items-center justify-between opacity-60">
         <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 bg-innovation-cyan rounded-full shadow-[0_0_8px_var(--color-innovation-cyan)]" />
            <span className="text-[8px] font-mono text-white/80 uppercase tracking-widest">LANGGRAPH_INTERNAL_SYS_0.4</span>
         </div>
         <span className="text-[8px] font-mono text-black bg-innovation-cyan px-3 py-1 font-black uppercase tracking-widest">SYNC_ACTIVE</span>
      </div>
    </div>
  );
}
