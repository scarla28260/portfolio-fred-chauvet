"use client";


export default function StatusBadge() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 z-[100] flex items-center gap-6 glass px-6 py-3 border-white/5 bg-black/40 backdrop-blur-3xl rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all hover:bg-black/60 hover:border-innovation-cyan/30">
      <div className="flex flex-col items-end pointer-events-none">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-1">Freelance Status</span>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-innovation-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-innovation-emerald shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-innovation-emerald italic animate-pulse">Available Now</span>
        </div>
      </div>
      
      {/* Visual divider */}
      <div className="w-[1px] h-8 bg-white/10 hidden md:block" />
      
      {/* Contact Quick Link (Icon/Button) */}
      <a 
        href="mailto:contact@example.com" 
        className="hidden md:flex flex-col items-center justify-center w-12 h-12 rounded-full border border-border hover:border-phoenix-orange/40 bg-black/40 backdrop-blur-xl group transition-all"
        title="Contact direct"
      >
        <div className="text-[10px] font-black uppercase tracking-tighter text-white/40 group-hover:text-phoenix-orange group-hover:scale-110 transition-all">HI</div>
      </a>
    </div>
  );
}
