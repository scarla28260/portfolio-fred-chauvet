import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// Configuration du chemin de la base de données
const dbDir = path.join(process.cwd(), '.data');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}
const dbPath = path.join(dbDir, 'analytics.sqlite');

const db = new Database(dbPath, { timeout: 10000 });
db.pragma('journal_mode = WAL');

// Initialisation du Star Schema
export function initDB() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS dim_source (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      platform_name TEXT UNIQUE NOT NULL,
      url TEXT
    );

    CREATE TABLE IF NOT EXISTS dim_content (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      type TEXT NOT NULL,
      publish_date TEXT NOT NULL,
      url TEXT UNIQUE
    );

    CREATE TABLE IF NOT EXISTS dim_time (
      id TEXT PRIMARY KEY, -- ex: '2026-06-27T12'
      date TEXT NOT NULL,
      hour INTEGER NOT NULL,
      day_of_week INTEGER NOT NULL,
      is_weekend INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS fact_metrics (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      source_id INTEGER NOT NULL,
      content_id INTEGER NOT NULL,
      time_id TEXT NOT NULL,
      views_count INTEGER NOT NULL,
      watch_time INTEGER,
      engagement_score REAL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(source_id) REFERENCES dim_source(id),
      FOREIGN KEY(content_id) REFERENCES dim_content(id),
      FOREIGN KEY(time_id) REFERENCES dim_time(id)
    );

    -- Index pour optimiser les requêtes analytiques
    CREATE INDEX IF NOT EXISTS idx_fact_time ON fact_metrics(time_id);
    CREATE INDEX IF NOT EXISTS idx_fact_content ON fact_metrics(content_id);
    CREATE INDEX IF NOT EXISTS idx_fact_source ON fact_metrics(source_id);
  `);
}

// Initialiser automatiquement au chargement
initDB();

export default db;
