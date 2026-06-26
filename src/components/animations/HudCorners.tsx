"use client";

import { motion, type Variants } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface HudCornersProps {
  className?: string;
  /** Size of each corner bracket in px */
  size?: number;
  /** Stroke color */
  color?: string;
  /** Stroke width */
  strokeWidth?: number;
  /** Animation delay in seconds */
  delay?: number;
}

/**
 * Decorative HUD bracket corners rendered as SVG lines.
 * Place inside a `relative` container — corners are positioned absolutely.
 */
export default function HudCorners({
  className = "",
  size = 24,
  color = "rgba(212,175,55,0.5)",
  strokeWidth = 1.5,
  delay = 0,
}: HudCornersProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const drawVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 0.6, ease: [0.0, 0.0, 0.58, 1.0] as any, delay },
        opacity: { duration: 0.1, delay },
      },
    },
  };

  const corners = [
    // top-left
    { style: { top: 0, left: 0 }, d: `M0,${size} L0,0 L${size},0` },
    // top-right
    { style: { top: 0, right: 0 }, d: `M0,0 L${size},0 L${size},${size}` },
    // bottom-left
    { style: { bottom: 0, left: 0 }, d: `M0,0 L0,${size} L${size},${size}` },
    // bottom-right
    { style: { bottom: 0, right: 0 }, d: `M${size},0 L${size},${size} L0,${size}` },
  ];

  return (
    <div ref={ref} className={`absolute inset-0 pointer-events-none ${className}`}>
      {corners.map((corner, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
          className="absolute"
          style={corner.style as React.CSSProperties}
        >
          <motion.path
            d={corner.d}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="square"
            variants={drawVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        </svg>
      ))}
    </div>
  );
}
