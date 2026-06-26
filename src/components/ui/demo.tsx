"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-950 flex flex-col items-center justify-center rounded-lg border border-white/5">
      <div className="absolute inset-0 w-full h-full bg-slate-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20 font-bold tracking-tight font-syne")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-muted-foreground relative z-20 font-mono text-sm uppercase tracking-wider">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
}
