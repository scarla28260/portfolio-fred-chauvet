"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { usePhoenix } from "@/context/PhoenixContext";
import dynamic from "next/dynamic";

const AtriumScene = dynamic(() => import("./AtriumScene"), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-background" /> 
});

export default function DynamicAtrium() {
  const { setScrollProgress } = usePhoenix();
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <AtriumScene />
    </div>
  );
}
