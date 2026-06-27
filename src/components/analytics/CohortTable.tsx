'use client';

export function CohortTable({ data }: { data: any[] }) {
  if (!data || data.length === 0) {
    return <div className="text-white/30 text-xs">NO DATA</div>;
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left text-xs">
        <thead className="text-white/50 border-b border-white/10 uppercase">
          <tr>
            <th className="py-2 px-2 font-normal">Cohort (Week)</th>
            <th className="py-2 px-2 font-normal">Items Published</th>
            <th className="py-2 px-2 font-normal">Total Views</th>
            {/* Simulation de rétention à J+1, J+7, J+30 */}
            <th className="py-2 px-2 font-normal">Day 1 Ret.</th>
            <th className="py-2 px-2 font-normal">Day 7 Ret.</th>
            <th className="py-2 px-2 font-normal">Day 30 Ret.</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {data.map((row, i) => {
            // Faux calculs de rétention pour illustrer l'UI SaaS
            const d1 = Math.floor(Math.random() * 40) + 60;
            const d7 = Math.floor(Math.random() * 30) + 20;
            const d30 = Math.floor(Math.random() * 15) + 5;

            return (
              <tr key={i} className="hover:bg-white/5 transition-colors">
                <td className="py-2 px-2 font-mono text-white/80">{row.cohort_week}</td>
                <td className="py-2 px-2 text-white/60">{row.content_count}</td>
                <td className="py-2 px-2 text-blue-400 font-bold">{row.total_views.toLocaleString()}</td>
                
                <td className="py-2 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1.5 bg-white/10 rounded overflow-hidden">
                      <div className="h-full bg-emerald-500" style={{ width: `${d1}%` }}></div>
                    </div>
                    <span className="text-emerald-500">{d1}%</span>
                  </div>
                </td>

                <td className="py-2 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1.5 bg-white/10 rounded overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: `${d7}%` }}></div>
                    </div>
                    <span className="text-amber-500">{d7}%</span>
                  </div>
                </td>

                <td className="py-2 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1.5 bg-white/10 rounded overflow-hidden">
                      <div className="h-full bg-red-500" style={{ width: `${d30}%` }}></div>
                    </div>
                    <span className="text-red-500">{d30}%</span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
