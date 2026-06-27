import React from 'react';
import { Terminal, Database } from 'lucide-react';

export function ActivityFeed({ data }: { data: any[] }) {
  return (
    <div className="font-mono text-xs space-y-3 h-64 overflow-y-auto pr-2 custom-scrollbar relative">
      {/* Decorative vertical line */}
      <div className="absolute left-[15px] top-4 bottom-4 w-px bg-white/10" />

      {data.map((item, idx) => {
        const date = new Date(item.ingested_at);
        const formattedTime = date.toLocaleTimeString('en-US', { hour12: false });
        const isLatest = idx === 0;

        return (
          <div key={idx} className="flex gap-4 items-start relative z-10 group">
            <div className={`mt-0.5 shrink-0 rounded-full p-1 bg-background border ${isLatest ? 'border-primary text-primary' : 'border-white/20 text-white/40 group-hover:border-white/50 group-hover:text-white/80 transition-colors'}`}>
              <Database className="w-3 h-3" />
            </div>
            
            <div className="flex-1 p-3 rounded bg-black/40 border border-white/5 group-hover:border-white/10 transition-colors">
              <div className="flex justify-between items-center mb-1.5">
                <div className="flex items-center gap-2 text-white/40">
                  <Terminal className="w-3 h-3" />
                  <span>[{formattedTime}]</span>
                </div>
                <span className="text-emerald-400 font-bold bg-emerald-400/10 px-1.5 py-0.5 rounded uppercase tracking-wider text-[10px]">
                  +{item.views_count} views
                </span>
              </div>
              <div className="text-white/80 leading-relaxed">
                <span className="text-primary font-bold tracking-widest uppercase mr-2">
                  [{item.platform_name}]
                </span> 
                {item.title}
              </div>
            </div>
          </div>
        );
      })}
      
      {data.length === 0 && (
        <div className="text-white/30 italic p-4 text-center border border-dashed border-white/10 rounded">
          [ Awaiting payload transmission... ]
        </div>
      )}
    </div>
  );
}
