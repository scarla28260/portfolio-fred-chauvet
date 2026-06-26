"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function SupplyChainText() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const chars = element.innerText.split("");
      element.innerHTML = chars
        .map((char) => `<span class="inline-block opacity-0 translate-y-8 select-none">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");

      gsap.to(element.children, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.5,
        stagger: {
          each: 0.05,
          from: "random"
        },
        ease: "expo.out",
        delay: 0.5,
      });

      gsap.to(element, {
        letterSpacing: "0.1em",
        duration: 2,
        ease: "power2.out"
      });
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="z-10 text-center max-w-5xl px-6">
      <h1 
        ref={textRef}
        className="font-outfit text-[clamp(2rem,6vw,5rem)] font-black tracking-tighter text-white mb-6 drop-shadow-[0_0_40px_rgba(248,250,252,0.2)] glitch-text cursor-default leading-tight"
      >
        ARCHITECTE D&apos;EXPÉRIENCES <br className="hidden md:block" />
        <span className="text-gradient-orange">DIGITALES IMMERSIVES</span>
      </h1>
      
      <div className="flex flex-col items-center gap-4 mb-16 sm:mb-20">
        <p className="font-outfit text-sm md:text-lg font-bold tracking-[0.4em] text-muted-foreground uppercase">
          CODE PHOENIX / <span className="text-phoenix-orange">L&apos;INGÉNIERIE DE DEMAIN</span>
        </p>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-phoenix-orange/50 to-transparent" />
        <p className="max-w-xl text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/30 leading-relaxed">
          Expertise Fullstack & 3D Temps Réel . Performance Web Avancée . <br className="hidden sm:block" />
          Conception Systèmes & Design d&apos;Avant-Garde
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
        <Link href="/forge" className="group relative">
          <div className="absolute -inset-0.5 bg-phoenix-orange opacity-20 blur group-hover:opacity-40 transition" />
          <button className="relative glass px-12 py-4 font-black uppercase tracking-[0.2em] transition-all hover:bg-white/5 active:scale-95 text-white shadow-xl text-[11px] rounded-none">
            L&apos;Ingénierie
          </button>
        </Link>
        <Link href="/coeur" className="group">
          <button className="glass border-phoenix-amber/20 px-12 py-4 font-black uppercase tracking-[0.2em] text-phoenix-amber transition-all hover:bg-phoenix-amber/10 active:scale-95 shadow-xl text-[11px] rounded-none">
            La Résilience
          </button>
        </Link>
      </div>
    </div>
  );
}
