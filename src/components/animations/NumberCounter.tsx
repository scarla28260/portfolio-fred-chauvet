"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface NumberCounterProps {
  /** Target value to count up to */
  target: number;
  /** Suffix appended after the number (e.g. "%", "+", "k") */
  suffix?: string;
  /** Prefix before the number (e.g. "+") */
  prefix?: string;
  /** Duration of the count animation in ms */
  duration?: number;
  /** Number of decimal places */
  decimals?: number;
  className?: string;
}

export default function NumberCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 1800,
  decimals = 0,
  className = "",
}: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isInView || hasStarted) return;
    setHasStarted(true);

    const startTime = performance.now();
    const startValue = 0;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);
      const current = startValue + (target - startValue) * eased;

      setCount(parseFloat(current.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration, decimals, hasStarted]);

  const display = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString("fr-FR");

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
