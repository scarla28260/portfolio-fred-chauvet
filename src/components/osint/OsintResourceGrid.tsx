"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { OsintCategory } from '@/domain/entities/osint';
import { OsintResourceCard } from './OsintResourceCard';
import { Search } from 'lucide-react';

export function OsintResourceGrid({ category }: { category: OsintCategory }) {
  if (!category) return null;

  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
      <div className="mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
          <Search className="text-primary" size={24} />
        </div>
        <div>
          <h2 className="text-3xl font-luxury text-white tracking-wide">
            {category.title.replace(/🔍|✈️|🚢|🔗|📍/g, '').trim()}
          </h2>
          <p className="text-sm text-primary/80 font-mono mt-1 opacity-80">
            {category.sections.reduce((acc, sec) => acc + sec.resources.length, 0)} RESOURCES INDEXED
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {category.sections.map((section, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-syne text-foreground/80 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]"></span>
              {section.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {section.resources.map((resource, rIdx) => (
                <OsintResourceCard key={rIdx} resource={resource} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
