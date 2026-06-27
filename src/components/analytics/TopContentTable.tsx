import React from 'react';
import { Activity } from 'lucide-react';

export function TopContentTable({ data }: { data: any[] }) {
  return (
    <div className="w-full overflow-x-auto custom-scrollbar">
      <table className="w-full text-left text-xs min-w-[500px]">
        <thead className="border-b border-white/10 text-white/50 uppercase tracking-widest">
          <tr>
            <th className="pb-3 font-normal">Content Title</th>
            <th className="pb-3 font-normal">Type</th>
            <th className="pb-3 font-normal">Platform</th>
            <th className="pb-3 font-normal text-right">Views</th>
            <th className="pb-3 font-normal text-right">Eng. Score</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-white/5 transition-colors group">
              <td className="py-3 pr-4 max-w-[200px] truncate text-white/90">
                <a href={row.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {row.title}
                </a>
              </td>
              <td className="py-3 pr-4 text-white/60">
                <span className="px-2 py-0.5 rounded-full border border-white/10 bg-black/50 text-[10px]">
                  {row.type}
                </span>
              </td>
              <td className="py-3 pr-4 text-primary font-bold tracking-wide">{row.platform_name}</td>
              <td className="py-3 text-right font-mono text-white/80 group-hover:text-white transition-colors">{row.total_views.toLocaleString()}</td>
              <td className="py-3 text-right font-mono">
                <div className="flex items-center justify-end gap-1.5 text-emerald-400">
                  <Activity className="w-3 h-3" />
                  {row.avg_engagement?.toFixed(1) || '0.0'}
                </div>
              </td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={5} className="py-6 text-center text-white/30 italic">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
