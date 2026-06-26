"use client";

import { motion, AnimatePresence, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import Navigation from "@/components/Navigation";
import CinematicBackground from "@/components/CinematicBackground";
import { useMousePosition } from "@/hooks/useMousePosition";
import { PhoenixProvider, usePhoenix } from "@/context/PhoenixContext";

function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { x, y } = useMousePosition();
  const { status } = usePhoenix();

  // Custom Cursor Spring
  const cursorX = useSpring(x, { stiffness: 100, damping: 20 });
  const cursorY = useSpring(y, { stiffness: 100, damping: 20 });

  return (
    <div className={status.isHackMode ? "hack-mode" : ""}>
      {/* Cinematic Background (Living atmosphere) */}
      <CinematicBackground />

      {/* Cinematic Custom Cursor (Macro Focus Point) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/20 z-[9999] pointer-events-none hidden md:flex items-center justify-center mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      >
         <div className="w-1 h-1 bg-white rounded-full opacity-40" />
      </motion.div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full min-h-screen">
        <Navigation />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Perspective Shimmer (Subtle scanline glow) */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-20 pointer-events-none">
         <div className="absolute inset-x-0 h-[30vh] bg-gradient-to-b from-white/[0.05] to-transparent top-0" />
         <div className="absolute inset-x-0 h-[30vh] bg-gradient-to-t from-white/[0.05] to-transparent bottom-0" />
      </div>
    </div>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PhoenixProvider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </PhoenixProvider>
  );
}
