"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, Layers, Zap, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: { github?: string; live?: string; caseStudy?: string };
  metrics: {
    complexity: string;
    performance: string;
    security: string;
  };
}

export default function ForgeProjectCard({ 
  title, 
  description, 
  tags, 
  image, 
  links, 
  metrics 
}: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative glass noise-panel border-white/5 bg-background/40 hover:border-phoenix-orange/20 transition-all duration-500 overflow-hidden rounded-sm"
    >
      {/* Visual Header */}
      <div className="relative h-64 w-full overflow-hidden border-b border-white/5">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        
        {/* Tech Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[7px] font-black uppercase tracking-widest bg-black/60 text-innovation-cyan px-3 py-1 border border-innovation-cyan/20 backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-8">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="text-2xl font-black italic tracking-tighter text-white uppercase group-hover:text-phoenix-orange transition-colors">
              {title}
            </h3>
            <div className="flex gap-4">
              {links.github && (
                <a href={links.github} target="_blank" className="text-white/20 hover:text-white transition-colors" title="View Source">
                  <Github size={18} />
                </a>
              )}
              {links.live && (
                <a href={links.live} target="_blank" className="text-white/20 hover:text-phoenix-orange transition-colors" title="View Project">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
            {links.caseStudy && (
              <Link 
                href={links.caseStudy}
                className="inline-flex items-center gap-2 group/link text-[9px] font-black uppercase tracking-widest text-phoenix-orange hover:text-white transition-colors"
                title="Read Case Study"
              >
                <span>Case Study</span>
                <ArrowRight size={10} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            )}
          </div>
          <p className="text-sm text-white/40 font-medium leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tactical Metrics */}
        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
           <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[8px] font-bold text-white/20 uppercase tracking-widest">
                <Layers size={10} className="text-phoenix-orange" /> Logic
              </div>
              <span className="text-xs font-mono font-black text-muted-foreground">{metrics.complexity}</span>
           </div>
           <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[8px] font-bold text-white/20 uppercase tracking-widest">
                <Zap size={10} className="text-innovation-cyan" /> Speed
              </div>
              <span className="text-xs font-mono font-black text-muted-foreground">{metrics.performance}</span>
           </div>
           <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[8px] font-bold text-white/20 uppercase tracking-widest">
                <Shield size={10} className="text-innovation-emerald" /> Audit
              </div>
              <span className="text-xs font-mono font-black text-muted-foreground">{metrics.security}</span>
           </div>
        </div>
      </div>

      {/* Industrial Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,107,0,0.06),rgba(255,176,0,0.03),rgba(255,107,0,0.06))] bg-[length:100%_2px,3px_100%]" />
    </motion.div>
  );
}
