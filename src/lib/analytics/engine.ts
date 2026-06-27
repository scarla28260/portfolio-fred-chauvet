import db from './db';

// Interface pour les données brutes
export interface RawMetric {
  platform: string;
  url: string;
  title: string;
  type: string;
  publish_date: string; // YYYY-MM-DD
  views_count: number;
  watch_time?: number;
  engagement_score?: number;
}

// 1. Ingestion de données
export function ingestData(metrics: RawMetric[]) {
  const insertSource = db.prepare(`
    INSERT OR IGNORE INTO dim_source (platform_name, url) VALUES (?, ?)
  `);
  
  const getSourceId = db.prepare(`
    SELECT id FROM dim_source WHERE platform_name = ?
  `);

  const insertContent = db.prepare(`
    INSERT OR IGNORE INTO dim_content (title, type, publish_date, url) VALUES (?, ?, ?, ?)
  `);

  const getContentId = db.prepare(`
    SELECT id FROM dim_content WHERE url = ?
  `);

  const insertTime = db.prepare(`
    INSERT OR IGNORE INTO dim_time (id, date, hour, day_of_week, is_weekend) 
    VALUES (?, ?, ?, ?, ?)
  `);

  const insertFact = db.prepare(`
    INSERT INTO fact_metrics (source_id, content_id, time_id, views_count, watch_time, engagement_score)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const transaction = db.transaction((data: RawMetric[]) => {
    for (const item of data) {
      // Dimension: Source
      insertSource.run(item.platform, '');
      const sourceId = (getSourceId.get(item.platform) as any).id;

      // Dimension: Content
      insertContent.run(item.title, item.type, item.publish_date, item.url);
      const contentId = (getContentId.get(item.url) as any).id;

      // Dimension: Time (current time)
      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const hour = now.getHours();
      const timeId = `${dateStr}T${hour}`;
      const dayOfWeek = now.getDay();
      const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6) ? 1 : 0;

      insertTime.run(timeId, dateStr, hour, dayOfWeek, isWeekend);

      // Fact: Metrics
      insertFact.run(sourceId, contentId, timeId, item.views_count, item.watch_time || 0, item.engagement_score || 0);
    }
  });

  transaction(metrics);
}

// 2. Moteur Analytique Avancé

// A. Calcul de la vélocité globale (Vues par heure sur les 24 dernières heures)
export function getVelocity() {
  const query = `
    WITH hourly_views AS (
      SELECT 
        t.date,
        t.hour,
        SUM(f.views_count) as total_views
      FROM fact_metrics f
      JOIN dim_time t ON f.time_id = t.id
      GROUP BY t.date, t.hour
      ORDER BY t.date DESC, t.hour DESC
      LIMIT 24
    )
    SELECT 
      date, hour, total_views,
      LAG(total_views) OVER (ORDER BY date, hour) as prev_views,
      (total_views - LAG(total_views) OVER (ORDER BY date, hour)) as velocity
    FROM hourly_views
    ORDER BY date ASC, hour ASC
  `;
  return db.prepare(query).all();
}

// B. KPIs Globaux
export function getGlobalKPIs() {
  const query = `
    SELECT 
      SUM(views_count) as total_views,
      AVG(engagement_score) as avg_engagement,
      SUM(watch_time) as total_watch_time
    FROM fact_metrics
  `;
  return db.prepare(query).get();
}

// C. Heatmap: Jours vs Heures
export function getTimeHeatmap() {
  const query = `
    SELECT 
      t.day_of_week,
      t.hour,
      SUM(f.views_count) as view_intensity
    FROM fact_metrics f
    JOIN dim_time t ON f.time_id = t.id
    GROUP BY t.day_of_week, t.hour
    ORDER BY t.day_of_week, t.hour
  `;
  return db.prepare(query).all();
}

// D. Analyse de Cohortes (par semaine de publication)
export function getCohorts() {
  const query = `
    SELECT 
      strftime('%Y-%W', c.publish_date) as cohort_week,
      COUNT(DISTINCT c.id) as content_count,
      SUM(f.views_count) as total_views
    FROM fact_metrics f
    JOIN dim_content c ON f.content_id = c.id
    GROUP BY cohort_week
    ORDER BY cohort_week DESC
  `;
  return db.prepare(query).all();
}

// F. Répartition par plateforme
export function getPlatformBreakdown() {
  const query = `
    SELECT 
      s.platform_name,
      SUM(f.views_count) as total_views,
      AVG(f.engagement_score) as avg_engagement
    FROM fact_metrics f
    JOIN dim_source s ON f.source_id = s.id
    GROUP BY s.platform_name
    ORDER BY total_views DESC
  `;
  return db.prepare(query).all();
}

// G. Top Contenus
export function getTopContent(limit = 5) {
  const query = `
    SELECT 
      c.title,
      c.type,
      c.url,
      s.platform_name,
      SUM(f.views_count) as total_views,
      AVG(f.engagement_score) as avg_engagement,
      SUM(f.watch_time) as total_watch_time
    FROM fact_metrics f
    JOIN dim_content c ON f.content_id = c.id
    JOIN dim_source s ON f.source_id = s.id
    GROUP BY c.id
    ORDER BY total_views DESC, avg_engagement DESC
    LIMIT ?
  `;
  return db.prepare(query).all(limit);
}

// H. Performance par type de contenu
export function getContentTypePerformance() {
  const query = `
    SELECT 
      c.type,
      SUM(f.views_count) as total_views,
      AVG(f.engagement_score) as avg_engagement
    FROM fact_metrics f
    JOIN dim_content c ON f.content_id = c.id
    GROUP BY c.type
    ORDER BY total_views DESC
  `;
  return db.prepare(query).all();
}

// I. Activité Récente (dernières ingestions)
export function getRecentActivity(limit = 10) {
  const query = `
    SELECT 
      c.title,
      s.platform_name,
      f.views_count,
      f.timestamp as ingested_at
    FROM fact_metrics f
    JOIN dim_content c ON f.content_id = c.id
    JOIN dim_source s ON f.source_id = s.id
    ORDER BY f.timestamp DESC
    LIMIT ?
  `;
  return db.prepare(query).all(limit);
}

// E. Générer des données de test
export function generateMockData() {
  const platforms = ['LinkedIn', 'YouTube', 'GitHub'];
  const types = ['Post', 'Video', 'Article'];
  const mockData: RawMetric[] = [];
  
  for (let i = 0; i < 50; i++) {
    mockData.push({
      platform: platforms[Math.floor(Math.random() * platforms.length)],
      url: `https://example.com/item${i}`,
      title: `Contenu Analytique ${i}`,
      type: types[Math.floor(Math.random() * types.length)],
      publish_date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      views_count: Math.floor(Math.random() * 500) + 10,
      watch_time: Math.floor(Math.random() * 120),
      engagement_score: Math.random() * 10
    });
  }
  ingestData(mockData);
}
