"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  /** "word" reveals word by word, "char" reveals character by character */
  mode?: "word" | "char";
  delay?: number;
  duration?: number;
  /** Stagger delay between each unit */
  stagger?: number;
}

export default function TextReveal({
  children,
  className = "",
  mode = "word",
  delay = 0,
  duration = 0.7,
  stagger = 0.06,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const units = mode === "char"
    ? children.split("")
    : children.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const unitVariants: Variants = {
    hidden: {
      y: "110%",
      opacity: 0,
      rotateX: -30,
    },
    visible: {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`overflow-hidden inline-flex flex-wrap ${mode === "word" ? "gap-x-[0.25em]" : "gap-x-[0.02em]"}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {units.map((unit, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className={`inline-block ${className}`}
            variants={unitVariants}
          >
            {mode === "word" ? unit : unit === " " ? "\u00A0" : unit}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
