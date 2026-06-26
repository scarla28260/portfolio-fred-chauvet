"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { usePhoenix } from "@/context/PhoenixContext";

export default function Particles({ count = 1500 }) {
  const { currentZone, isBlueprint } = usePhoenix();
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color(currentZone.themeColor);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      // Add slight color variance
      const variance = Math.random() * 0.2;
      colors[i * 3] = Math.min(1, color.r + variance);
      colors[i * 3 + 1] = Math.min(1, color.g + variance);
      colors[i * 3 + 2] = Math.min(1, color.b + variance);
    }
    return { positions, colors };
  }, [count, currentZone.themeColor]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.01;
      // Drift effect
      mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        vertexColors
        transparent
        opacity={isBlueprint ? 0.2 : 0.6}
        sizeAttenuation
      />
    </points>
  );
}
