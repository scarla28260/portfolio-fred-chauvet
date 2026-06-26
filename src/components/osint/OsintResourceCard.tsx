"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { OsintResource } from '@/domain/entities/osint';
import { ExternalLink } from 'lucide-react';

export function OsintResourceCard({ resource }: { resource: OsintResource }) {
  return (
    <motion.a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="hud-border p-4 flex flex-col gap-2 group decoration-transparent focus-ring shadow-elevation-1 hover:shadow-elevation-3 transition-shadow duration-300"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-start">
        <h4 className="text-primary font-medium text-lg group-hover:text-primary/80 transition-colors line-clamp-1">
          {resource.name}
        </h4>
        <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
      </div>
      <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
        {resource.description}
      </p>
    </motion.a>
  );
}
