"use client";

import React, { useMemo, useCallback, useState } from "react";
import { Terminal, ShieldCheck, Cpu, Code2 } from "lucide-react";

/**
 * ExpertVault - A demonstration of strict typing, error resilience
 * and performance optimization in React.
 */

interface DataNode {
  id: string;
  value: number;
  status: "active" | "idle" | "error";
  metadata?: Record<string, unknown>;
}

interface VaultProps<T extends DataNode> {
  nodes: T[];
  onProcess?: (node: T) => void;
  threshold?: number;
}

const ExpertVault = <T extends DataNode>({ nodes, onProcess, threshold = 0.8 }: VaultProps<T>) => {
  const [internalState, setInternalState] = useState<{ error: string | null }>({ error: null });

  // 1. PERFORMANCE: Memoized Filtering and Computation
  // Prevents heavy re-computations on unrelated parent re-renders.
  const processedNodes = useMemo(() => {
    try {
      return nodes
        .filter((node) => node.status !== "error")
        .map((node) => ({
          ...node,
          integrity: Math.min(1, node.value / 100 + (node.id.length % 10) / 100),
        }))
        .sort((a, b) => b.integrity - a.integrity);
    } catch (e) {
      console.error("Vault processing failure:", e);
      return [];
    }
  }, [nodes]);

  // 2. STABILITY: Stable Event Handler
  // Ensures sub-components don't re-render due to function reference changes.
  const handleInteraction = useCallback((node: T) => {
    if (onProcess) {
      try {
        onProcess(node);
      } catch (err) {
        setInternalState({ error: (err as Error).message });
      }
    }
  }, [onProcess]);

  // 3. UI: Minimalist Data Representation
  return (
    <div className="glass p-8 rounded-[2.5rem] border-white/5 bg-muted/40 relative overflow-hidden group">
      {/* Absolute Telemetry Markers */}
      <div className="absolute top-6 left-8 flex items-center gap-2 opacity-30">
        <Cpu size={12} className="text-primary" />
        <span className="text-[9px] font-black uppercase tracking-[0.2em] font-mono">Expert_Engine_v1.2</span>
      </div>

      <div className="mt-12 space-y-8">
        <header className="flex justify-between items-end border-b border-white/5 pb-6">
          <div className="space-y-2">
            <h4 className="text-white text-2xl font-black uppercase italic tracking-tighter">The_Code_Vault</h4>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.3em]">Operational_Schema // Integrity_Score: 0.99</p>
          </div>
          <Code2 size={24} className="text-primary/40" />
        </header>

        {internalState.error && (
          <div className="p-4 bg-aura-ruby/10 border border-aura-ruby/20 rounded-xl flex items-center gap-4">
            <ShieldCheck size={16} className="text-aura-ruby" />
            <span className="text-[10px] font-bold text-aura-ruby uppercase">{internalState.error}</span>
          </div>
        )}

        <div className="grid grid-cols-1 gap-3">
          {processedNodes.map((node) => (
            <div 
              key={node.id} 
              onClick={() => handleInteraction(node as T)}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all cursor-crosshair group/item"
            >
              <div className="flex items-center gap-4">
                <div className={`w-1.5 h-1.5 rounded-full ${node.integrity > threshold ? 'bg-primary' : 'bg-muted/80'}`} />
                <span className="text-[11px] font-mono text-muted-foreground group-hover/item:text-white transition-colors">{node.id}</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                   <div 
                    className="h-full bg-primary/40 transition-all duration-1000" 
                    style={{ width: `${node.integrity * 100}%` }} 
                   />
                </div>
                <span className="text-[10px] font-bold text-primary/60 font-mono">{(node.integrity * 100).toFixed(1)}%</span>
              </div>
            </div>
          ))}
        </div>

        <footer className="pt-6 flex justify-between items-center opacity-20 group-hover:opacity-40 transition-opacity">
           <div className="flex items-center gap-2">
              <Terminal size={12} />
              <span className="text-[8px] font-black uppercase tracking-widest leading-none">Status: Read_Only // Direct_Access</span>
           </div>
           <span className="text-[8px] font-mono">0x00FF_E4</span>
        </footer>
      </div>
    </div>
  );
};

export default ExpertVault;
