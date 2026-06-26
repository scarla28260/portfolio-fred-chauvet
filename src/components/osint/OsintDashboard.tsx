"use client";

import React, { useEffect, useState } from 'react';
import { OsintCategory } from '@/domain/entities/osint';
import { OsintSidebar } from './OsintSidebar';
import { OsintResourceGrid } from './OsintResourceGrid';
import { Activity } from 'lucide-react';

export function OsintDashboard() {
  const [categories, setCategories] = useState<OsintCategory[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/data/osint.json');
        if (!res.ok) throw new Error('Failed to load OSINT data');
        const data: OsintCategory[] = await res.json();
        
        // Sort categories alphabetically
        data.sort((a, b) => a.title.localeCompare(b.title));
        
        setCategories(data);
        if (data.length > 0) {
          setActiveCategoryId(data[0].id);
        }
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching data.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 video-glow rounded-3xl bg-card">
        <div className="relative">
          <Activity className="text-primary animate-pulse" size={48} />
          <div className="absolute inset-0 bg-primary blur-xl opacity-50 animate-glow-pulse"></div>
        </div>
        <p className="font-mono text-primary/80 tracking-[0.2em] text-sm animate-pulse">
          INITIALIZING OSINT DATABASE...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center hud-border p-8 bg-destructive/10 border-destructive/30">
        <div className="text-center">
          <p className="text-destructive font-mono mb-2">SYSTEM ERROR</p>
          <p className="text-destructive-foreground">{error}</p>
        </div>
      </div>
    );
  }

  const activeCategory = categories.find(c => c.id === activeCategoryId) || null;

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      <OsintSidebar 
        categories={categories} 
        activeCategoryId={activeCategoryId} 
        onSelect={setActiveCategoryId} 
      />
      
      <div className="flex-1 bg-card/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 min-h-[calc(100vh-200px)] relative overflow-hidden shadow-elevation-2">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 blur-[120px] pointer-events-none rounded-full"></div>
        
        {activeCategory ? (
          <OsintResourceGrid category={activeCategory} />
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground font-mono">
            SELECT A CATEGORY TO VIEW RESOURCES
          </div>
        )}
      </div>
    </div>
  );
}
