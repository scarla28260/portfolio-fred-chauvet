"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface CinematicVideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  intensity?: number;
}

export default function CinematicVideoPlayer({ src, poster, className, intensity = 0.5 }: CinematicVideoPlayerProps) {
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const rotateX = useTransform(springY, [-500, 500], [5 * intensity, -5 * intensity]);
  const rotateY = useTransform(springX, [-500, 500], [-5 * intensity, 5 * intensity]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!mounted) return null;

  return (
    <div className={cn("relative overflow-hidden group rounded-[2.5rem] bg-black/40 border border-border shadow-2xl", className)}>
      <motion.div
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="relative w-full h-full aspect-video"
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          loop
          muted={isMuted}
          className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-1000"
          onClick={togglePlay}
        />

        {/* Video Controls Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex flex-col justify-end p-8">
          <div className="flex items-center gap-4 pointer-events-auto">
            <button 
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all"
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
            </button>
            <button 
              onClick={toggleMute}
              className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-border flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>
        </div>

        {/* 1. Grain/Noise */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay animate-noise bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* 2. Scanning Line */}
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[1px] z-10 opacity-30 pointer-events-none"
        />

        {/* 3. Lens Flare / Light Leak (Slow Pulse) */}
        <motion.div
          animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.1, 1], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-radial-gradient from-primary/10 to-transparent blur-[80px] pointer-events-none"
        />

        {/* 4. Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.8)] pointer-events-none" />

        {/* 5. Technical HUD Elements */}
        <div className="absolute top-6 left-6 flex flex-col gap-1 opacity-50 pointer-events-none">
           <div className="flex items-center gap-2">
              <div className={cn("w-1.5 h-1.5 rounded-full", isPlaying ? "bg-red-500 animate-pulse" : "bg-white/50")} />
              <span className="text-[10px] font-black tracking-widest text-white uppercase font-mono">
                {isPlaying ? "REC_ACTIVE" : "STANDBY"}
              </span>
           </div>
           <span className="text-[8px] font-mono text-white/50 uppercase tracking-[0.2em]">INTEL_VEO_3</span>
        </div>

        <div className="absolute top-6 right-6 opacity-40 pointer-events-none">
           <span className="text-[8px] font-black text-white/50 tracking-widest uppercase border-[0.5px] border-white/20 px-2 py-0.5 rounded-sm font-mono">
             HD_1080P
           </span>
        </div>
      </motion.div>
    </div>
  );
}
