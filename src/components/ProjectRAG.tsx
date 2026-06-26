"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Search, Loader2, Terminal, CheckCircle2, AlertCircle, RefreshCw, Layers } from "lucide-react";
import Image from "next/image";

export default function ProjectRAG() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [glitch, setGlitch] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [response]);

  useEffect(() => {
    if (isProcessing) {
      const interval = setInterval(() => setGlitch(prev => !prev), 2000);
      return () => clearInterval(interval);
    }
  }, [isProcessing]);

  const handleQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isProcessing) return;

    setIsProcessing(true);
    setError(null);
    setResponse("");
    setGlitch(true);
    setTimeout(() => setGlitch(false), 500);

    try {
      const res = await fetch("/api/rag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!res.body) throw new Error("ORACLE_STREAM_FAILURE_0x1");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        setResponse((prev) => prev + decoder.decode(value, { stream: true }));
      }
    } catch (err: any) {
      setError(err.message || "ARCHIVE_ORACLE_EXCEPTION_0x4");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="md:col-span-2 aspect-auto md:aspect-[21/9] glass flex flex-col md:flex-row rounded-[3rem] bg-muted/40 relative overflow-hidden group border-white/5 shadow-2xl">
       
       {/* Visual Panel (Left) */}
       <div className="relative w-full md:w-[50%] h-[300px] md:h-auto border-b md:border-b-0 md:border-r border-white/5 overflow-hidden bg-background/50 flex items-center justify-center">
          <AnimatePresence>
            <motion.div 
               key="visual-core"
               animate={{ 
                 scale: isProcessing ? [1, 1.05, 1] : [1, 1.02, 1],
                 opacity: glitch ? [1, 0.4, 0.8, 1] : 1,
                 x: glitch ? [-2, 2, -1, 0] : 0
               }}
               transition={{ duration: 4, repeat: Infinity }}
               className="relative w-full h-full flex items-center justify-center p-12"
            >
               <Image 
                 src="/assets/cinematic/oracle.png" 
                 alt="Oracle Core" 
                 fill
                 sizes="(max-width: 768px) 100vw, 50vw"
                 className="object-contain mix-blend-lighten opacity-60"
               />
               
               {/* HUD Elements */}
               <div className="absolute inset-0 p-10 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                     <div className="flex flex-col gap-2">
                        <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] font-sans">Subsystem_Active</span>
                        <div className="w-32 h-[2px] bg-white/5 overflow-hidden rounded-full">
                           <motion.div 
                             animate={{ x: ["-100%", "100%"] }}
                             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                             className="w-1/2 h-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
                           />
                        </div>
                     </div>
                     <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-loose text-right font-sans italic">Coordinate_Ref:<br/>48.8566° N, 2.3522° E</span>
                  </div>
                  
                  <div className="flex justify-between items-end">
                     <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] font-sans">Oracle_Recall_Index: 0.9992</span>
                     <div className="flex items-center gap-4">
                        <div className="h-8 w-px bg-white/5" />
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] font-sans italic">Unit_0x4_Live</span>
                     </div>
                  </div>
               </div>
               
               {/* Glow effect */}
               <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
            </motion.div>
          </AnimatePresence>
       </div>

       {/* Terminal Column (Right) */}
       <div className="flex-1 flex flex-col h-[500px] md:h-auto bg-muted/40 relative z-10 backdrop-blur-2xl">
          {/* Header */}
          <div className="p-8 border-b border-white/5 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <Terminal className="text-primary" size={18} />
                <h4 className="text-[10px] font-black text-white uppercase tracking-[0.6em] font-sans">Recall_Interface // Ingenierie</h4>
             </div>
             <div className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${isProcessing ? 'bg-primary animate-pulse' : 'bg-emerald-500 shadow-[0_0_10px_#10B981]'}`} />
                <span className="text-[8px] text-muted-foreground uppercase tracking-widest font-black font-sans">{isProcessing ? 'Synthesis' : 'Oracle_Ready'}</span>
             </div>
          </div>

          {/* Conversation Area */}
          <div className="flex-1 overflow-y-auto p-10 space-y-8 scrollbar-hide" ref={scrollRef}>
             <AnimatePresence mode="wait">
                {!response && !isProcessing && !error && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full flex flex-col items-start justify-center space-y-10 py-10"
                  >
                     <div className="p-6 rounded-3xl glass-gold">
                        <Layers size={32} strokeWidth={1.5} className="text-primary" />
                     </div>
                     <div className="space-y-6 max-w-sm">
                        <h5 className="text-2xl font-black text-white uppercase tracking-tighter italic">Accédez à l'Archive de Connaissance.</h5>
                        <p className="text-[11px] text-muted-foreground font-medium tracking-wide uppercase leading-relaxed font-sans">
                           Montez en abstraction. Posez une question technique sur mes déploiements, mon orchestration IA agence ou mon expertise en transmutation de données.
                        </p>
                     </div>
                  </motion.div>
                )}

                {error && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-10 rounded-3xl border border-aura-ruby/20 bg-aura-ruby/5 text-aura-ruby flex items-center gap-6"
                  >
                     <AlertCircle size={28} />
                     <div className="flex flex-col gap-2">
                        <span className="text-[11px] font-black uppercase tracking-[0.3em] font-sans">Exception: Critical_Access_Denied</span>
                        <span className="text-[10px] font-mono lowercase opacity-60 font-sans">{error}</span>
                     </div>
                  </motion.div>
                )}

                {response && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-10"
                  >
                     <p className="text-sm md:text-base leading-relaxed text-foreground font-medium tracking-wide cinematic-text whitespace-pre-wrap selection:bg-primary/20">
                       {response}
                       {isProcessing && <span className="inline-block w-2.5 h-5 bg-primary ml-2 animate-pulse shadow-[0_0_10px_hsl(var(--primary))]" />}
                     </p>
                     
                     {!isProcessing && (
                       <div className="pt-10 border-t border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                             <CheckCircle2 size={16} className="text-emerald-500" />
                             <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-black font-sans">Extraction_Complète // v5.0</span>
                          </div>
                          <button 
                            onClick={() => { setResponse(""); setQuery(""); }}
                            className="flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-[0.3em] font-sans hover:text-primary/80 transition-all"
                          >
                             <RefreshCw size={14} />
                             <span>Reset_System</span>
                          </button>
                       </div>
                     )}
                  </motion.div>
                )}
             </AnimatePresence>
          </div>

          {/* Input Area */}
          <div className="p-10 bg-background/80 backdrop-blur-3xl border-t border-white/5">
             <form onSubmit={handleQuery} className="relative">
                <input 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="IDENTIFIEZ_LA_RECHERCHE..."
                  className="w-full glass p-8 pr-20 text-[12px] font-bold text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all rounded-2xl uppercase tracking-[0.2em] font-sans"
                  disabled={isProcessing}
                />
                <button 
                  type="submit"
                  disabled={isProcessing}
                  aria-label="Lancer la recherche"
                  className="absolute right-8 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-all"
                >
                   {isProcessing ? <Loader2 className="animate-spin" size={24} /> : <Search size={24} />}
                </button>
             </form>
          </div>
       </div>
    </div>
  );
}
