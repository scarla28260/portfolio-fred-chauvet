"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  limit?: number;
}

export default function Sparkline({ 
  data, 
  width = 200, 
  height = 40, 
  color = "#00F2FF",
  limit = 20 
}: SparklineProps) {
  const [points, setPoints] = useState<string>("");

  useEffect(() => {
    if (data.length < 2) return;

    const max = Math.max(...data, 1);
    const min = Math.min(...data, 0);
    const range = max - min || 1;

    const stepX = width / (limit - 1);
    const stepY = height / range;

    const pathData = data
      .slice(-limit)
      .map((val, i) => {
        const x = i * stepX;
        const y = height - (val - min) * stepY;
        return `${x},${y}`;
      })
      .join(" L ");

    setPoints(`M ${pathData}`);
  }, [data, width, height, limit]);

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id="sparkline-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Area Fill */}
      {points && (
        <motion.path
          d={`${points} L ${width},${height} L 0,${height} Z`}
          fill="url(#sparkline-gradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* Main Line */}
      <motion.path
        d={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      
      {/* End Point Glow */}
      {data.length > 0 && (
        <motion.circle
          cx={width}
          cy={height - (data[data.length - 1] - Math.min(...data)) * (height / (Math.max(...data) - Math.min(...data) || 1))}
          r="2"
          fill={color}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1] }}
          transition={{ duration: 0.3 }}
          style={{ filter: `drop-shadow(0 0 4px ${color})` }}
        />
      )}
    </svg>
  );
}
