'use client';

import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

export function VelocityChart({ data }: { data: any[] }) {
  if (!data || data.length === 0) {
    return <div className="flex h-full items-center justify-center text-white/30 text-xs">NO DATA</div>;
  }

  // Format data for chart
  const chartData = data.map(d => ({
    time: `${d.hour}h`,
    velocity: d.velocity || 0,
    views: d.total_views || 0,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
        <XAxis 
          dataKey="time" 
          stroke="#ffffff30" 
          fontSize={10} 
          tickLine={false} 
          axisLine={false}
        />
        <YAxis 
          stroke="#ffffff30" 
          fontSize={10} 
          tickLine={false} 
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#000000', borderColor: '#ffffff20', fontSize: '12px' }}
          itemStyle={{ color: '#ffffff' }}
        />
        <ReferenceLine y={0} stroke="#ffffff20" />
        <Line 
          type="monotone" 
          dataKey="velocity" 
          stroke="#10b981" 
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: '#10b981', stroke: '#000' }}
          name="Velocity (Δ)"
        />
        <Line 
          type="monotone" 
          dataKey="views" 
          stroke="#3b82f6" 
          strokeWidth={1}
          strokeDasharray="4 4"
          dot={false}
          name="Total Views"
          opacity={0.5}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
