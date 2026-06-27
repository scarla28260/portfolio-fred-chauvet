import React from 'react';

export function PlatformDistribution({ data }: { data: any[] }) {
  const totalViews = data.reduce((sum, item) => sum + item.total_views, 0);

  return (
    <div className="space-y-5">
      {data.map((item, idx) => {
        const percentage = totalViews > 0 ? (item.total_views / totalViews) * 100 : 0;
        return (
          <div key={idx} className="space-y-1.5">
            <div className="flex justify-between text-xs text-white/70">
              <span className="uppercase font-bold tracking-widest text-primary">{item.platform_name}</span>
              <span className="font-mono">{item.total_views.toLocaleString()} views ({percentage.toFixed(1)}%)</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-primary h-full rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className="text-[10px] text-white/40 text-right font-mono">
              Avg. Eng: {item.avg_engagement?.toFixed(2) || '0.00'}
            </div>
          </div>
        );
      })}
      {data.length === 0 && (
        <div className="text-white/30 text-xs italic">No platforms tracked yet.</div>
      )}
    </div>
  );
}
