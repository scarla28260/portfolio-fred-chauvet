"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";

/**
 * DataScatterPlot - A professional 3D scatter plot visualization.
 * Replaces the abstract sphere with a technical coordinate system.
 */
export default function DataScatterPlot({ count = 300 }) {
  const pointsRef = useRef<THREE.Points>(null);
  const axesRef = useRef<THREE.Group>(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    
    // Cluster 1 (Logic)
    for (let i = 0; i < 100; i++) {
      const idx = i * 3;
      pos[idx] = 1 + Math.random() * 2;
      pos[idx + 1] = 1 + Math.random() * 2;
      pos[idx + 2] = 1 + Math.random() * 2;
      cols[idx] = 0; cols[idx + 1] = 0.95; cols[idx + 2] = 1; // Cyan
    }

    // Cluster 2 (Intuition)
    for (let i = 100; i < 200; i++) {
        const idx = i * 3;
        pos[idx] = -1 - Math.random() * 2;
        pos[idx + 1] = 1 + Math.random() * 2;
        pos[idx + 2] = -1 - Math.random() * 2;
        cols[idx] = 1; cols[idx + 1] = 0.6; cols[idx + 2] = 0; // Amber
    }

    // Cluster 3 (Outliers)
    for (let i = 200; i < count; i++) {
        const idx = i * 3;
        pos[idx] = (Math.random() - 0.5) * 8;
        pos[idx + 1] = (Math.random() - 0.5) * 8;
        pos[idx + 2] = (Math.random() - 0.5) * 8;
        cols[idx] = 1; cols[idx + 1] = 1; cols[idx + 2] = 1; // White
    }

    return { positions: pos, colors: cols };
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    if (axesRef.current) {
      axesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group>
      {/* Axes System */}
      <group ref={axesRef}>
        <gridHelper args={[10, 10, "#ffffff20", "#ffffff05"]} rotation={[Math.PI / 2, 0, 0]} />
        <gridHelper args={[10, 10, "#ffffff20", "#ffffff05"]} />
        
        {/* Axis Labels */}
        <Html position={[5.5, 0, 0]} transform>
            <span className="text-[6px] text-white/20 font-mono uppercase">X_DIMENSION</span>
        </Html>
        <Html position={[0, 5.5, 0]} transform>
            <span className="text-[6px] text-white/20 font-mono rotate-90 uppercase">Y_METRIC</span>
        </Html>

        {/* Cluster Annotation */}
        <Html position={[2, 2, 2]} center>
          <div className="border border-innovation-cyan/30 px-2 py-1 bg-black/50 backdrop-blur-md">
            <p className="text-[8px] text-innovation-cyan font-mono whitespace-nowrap">CLUSTER_A: LOGICAL_CORE</p>
          </div>
        </Html>
      </group>

      {/* Data Points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
