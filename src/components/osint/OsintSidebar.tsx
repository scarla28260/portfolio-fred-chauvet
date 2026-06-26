"use client";

import React from 'react';
import { OsintCategory } from '@/domain/entities/osint';
import { ChevronRight, Database } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  categories: OsintCategory[];
  activeCategoryId: string | null;
  onSelect: (id: string) => void;
}

export function OsintSidebar({ categories, activeCategoryId, onSelect }: Props) {
  return (
    <div className="w-full md:w-72 flex-shrink-0 flex flex-col gap-2 bg-card/60 backdrop-blur-md rounded-2xl border border-white/5 p-4 h-[calc(100vh-200px)] sticky top-24 overflow-hidden shadow-elevation-2">
      <div className="flex items-center gap-3 mb-6 px-2">
        <div className="relative">
          <Database className="text-primary" size={20} />
          <div className="absolute inset-0 bg-primary blur-md opacity-40"></div>
        </div>
        <h3 className="font-luxury text-foreground tracking-widest text-lg">OSINT INDEX</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 flex flex-col gap-1">
        {categories.map((category) => {
          const isActive = category.id === activeCategoryId;
          return (
            <button
              key={category.id}
              onClick={() => onSelect(category.id)}
              className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl transition-all duration-300 group focus-ring
                ${isActive 
                  ? 'bg-primary/10 border border-primary/30 shadow-[inset_0_0_20px_var(--primary)]' 
                  : 'bg-transparent border border-transparent hover:bg-white/5 hover:border-white/10'
                }`}
            >
              <span className={`text-sm truncate pr-2 font-jost ${isActive ? 'text-foreground font-medium' : 'text-muted-foreground group-hover:text-foreground'}`}>
                {category.title.replace(/🔍|✈️|🚢|🔗|📍|👤/g, '').trim()}
              </span>
              
              {isActive && (
                <motion.div layoutId="active-indicator">
                  <ChevronRight size={16} className="text-primary" />
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
