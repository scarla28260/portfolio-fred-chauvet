import { 
  getGlobalKPIs, 
  getVelocity, 
  getTimeHeatmap, 
  getCohorts,
  getPlatformBreakdown,
  getTopContent,
  getContentTypePerformance,
  getRecentActivity
} from '@/lib/analytics/engine';
import { VelocityChart } from '@/components/analytics/VelocityChart';
import { TimeHeatmap } from '@/components/analytics/TimeHeatmap';
import { CohortTable } from '@/components/analytics/CohortTable';
import { PlatformDistribution } from '@/components/analytics/PlatformDistribution';
import { TopContentTable } from '@/components/analytics/TopContentTable';
import { ActivityFeed } from '@/components/analytics/ActivityFeed';

// Force dynamic since it reads from local sqlite DB which can update anytime
export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const kpis: any = getGlobalKPIs() || { total_views: 0, avg_engagement: 0, total_watch_time: 0 };
  const velocityData: any[] = getVelocity() as any[];
  const heatmapData: any[] = getTimeHeatmap() as any[];
  const cohortsData: any[] = getCohorts() as any[];
  const platformData: any[] = getPlatformBreakdown() as any[];
  const topContentData: any[] = getTopContent(5) as any[];
  const typePerformanceData: any[] = getContentTypePerformance() as any[];
  const recentActivityData: any[] = getRecentActivity(10) as any[];

  return (
    <div className="min-h-screen bg-[#09090b] text-slate-200 p-4 sm:p-6 font-mono text-sm">
      
      {/* Header / KPIs */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-white mb-4 tracking-tight uppercase border-b border-white/10 pb-2">
          // Analytics Core
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-black/50 border border-white/10 p-4 rounded-md">
            <div className="text-white/50 text-xs mb-1 uppercase">Total Views</div>
            <div className="text-2xl font-bold text-white">
              {kpis.total_views?.toLocaleString() || 0}
            </div>
          </div>
          <div className="bg-black/50 border border-white/10 p-4 rounded-md">
            <div className="text-white/50 text-xs mb-1 uppercase">Avg Engagement</div>
            <div className="text-2xl font-bold text-emerald-400">
              {kpis.avg_engagement?.toFixed(2) || '0.00'}
            </div>
          </div>
          <div className="bg-black/50 border border-white/10 p-4 rounded-md">
            <div className="text-white/50 text-xs mb-1 uppercase">Total Watch Time</div>
            <div className="text-2xl font-bold text-blue-400">
              {kpis.total_watch_time?.toLocaleString() || 0} <span className="text-sm">min</span>
            </div>
          </div>
          <div className="bg-black/50 border border-white/10 p-4 rounded-md">
            <div className="text-white/50 text-xs mb-1 uppercase">Top Platform</div>
            <div className="text-2xl font-bold text-primary truncate">
              {platformData.length > 0 ? platformData[0].platform_name : 'N/A'}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Top Left: Velocity */}
        <div className="bg-black/50 border border-white/10 p-4 rounded-md lg:col-span-2">
          <h2 className="text-white/70 text-xs uppercase mb-4 border-b border-white/5 pb-2">
            24H View Velocity (Acceleration)
          </h2>
          <div className="h-64">
            <VelocityChart data={velocityData} />
          </div>
        </div>

        {/* Top Right: Traffic Sources */}
        <div className="bg-black/50 border border-white/10 p-4 rounded-md lg:col-span-1">
          <h2 className="text-white/70 text-xs uppercase mb-4 border-b border-white/5 pb-2">
            Traffic Sources Distribution
          </h2>
          <div className="h-64 overflow-y-auto custom-scrollbar pr-2">
            <PlatformDistribution data={platformData} />
          </div>
        </div>

        {/* Middle Full: Top Content Table */}
        <div className="bg-black/50 border border-white/10 p-4 rounded-md lg:col-span-3">
          <h2 className="text-white/70 text-xs uppercase mb-4 border-b border-white/5 pb-2">
            Top Performing Content
          </h2>
          <TopContentTable data={topContentData} />
        </div>

        {/* Bottom Left: Heatmap */}
        <div className="bg-black/50 border border-white/10 p-4 rounded-md lg:col-span-2">
          <h2 className="text-white/70 text-xs uppercase mb-4 border-b border-white/5 pb-2">
            Engagement Intensity (Day vs Hour)
          </h2>
          <div className="h-64">
            <TimeHeatmap data={heatmapData} />
          </div>
        </div>

        {/* Bottom Right: Recent Activity */}
        <div className="bg-black/50 border border-white/10 p-4 rounded-md lg:col-span-1">
          <h2 className="text-white/70 text-xs uppercase mb-4 border-b border-white/5 pb-2 flex items-center justify-between">
            <span>Recent Activity</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </h2>
          <ActivityFeed data={recentActivityData} />
        </div>

        {/* Bottom Full: Cohorts */}
        <div className="bg-black/50 border border-white/10 p-4 rounded-md lg:col-span-3">
          <h2 className="text-white/70 text-xs uppercase mb-4 border-b border-white/5 pb-2">
            Weekly Content Cohorts
          </h2>
          <CohortTable data={cohortsData} />
        </div>

      </div>

      {/* Tools */}
      <div className="mt-8 flex justify-end">
        <form action={async () => {
          'use server';
          // Action for manually triggering mock data (for testing)
          const { generateMockData } = await import('@/lib/analytics/engine');
          generateMockData();
        }}>
          <button type="submit" className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded transition-colors text-white/50 hover:text-white">
            [Inject Mock Data]
          </button>
        </form>
      </div>
    </div>
  );
}
