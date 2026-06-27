'use client';

export function TimeHeatmap({ data }: { data: any[] }) {
  if (!data || data.length === 0) {
    return <div className="flex h-full items-center justify-center text-white/30 text-xs">NO DATA</div>;
  }

  // Jours: 0 = Dimanche, 1 = Lundi, etc.
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const hours = Array.from({ length: 24 }, (_, i) => i);

  // Map des données pour accès rapide
  const intensityMap: Record<string, number> = {};
  let maxIntensity = 0;

  data.forEach(d => {
    const key = `${d.day_of_week}-${d.hour}`;
    intensityMap[key] = d.view_intensity;
    if (d.view_intensity > maxIntensity) maxIntensity = d.view_intensity;
  });

  const getOpacity = (val: number) => {
    if (!val) return 0.05;
    return 0.1 + (val / maxIntensity) * 0.9;
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex w-full flex-1">
        {/* Labels Y (Jours) */}
        <div className="flex flex-col justify-around pr-2 text-[10px] text-white/40">
          {days.map(d => <div key={d}>{d}</div>)}
        </div>
        
        {/* Grille */}
        <div className="flex-1 flex flex-col justify-around gap-1">
          {days.map((day, dIdx) => (
            <div key={dIdx} className="flex flex-1 gap-1">
              {hours.map(h => {
                const val = intensityMap[`${dIdx}-${h}`] || 0;
                return (
                  <div 
                    key={h} 
                    className="flex-1 bg-emerald-500 rounded-sm relative group"
                    style={{ opacity: getOpacity(val) }}
                  >
                    {/* Tooltip simple CSS */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-black border border-white/20 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-10">
                      {day} {h}h: {val} views
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      
      {/* Labels X (Heures) */}
      <div className="flex pl-6 pt-2">
        <div className="flex-1 flex justify-between text-[9px] text-white/30">
          {hours.filter(h => h % 3 === 0).map(h => (
            <div key={h} className="text-center w-full">{h}h</div>
          ))}
        </div>
      </div>
    </div>
  );
}
