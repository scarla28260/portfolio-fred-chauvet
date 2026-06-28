"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function generateSpherePoints(count: number, radius: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = Math.cbrt(Math.random()) * radius;
    
    const sinPhi = Math.sin(phi);
    points[i * 3] = r * sinPhi * Math.cos(theta);
    points[i * 3 + 1] = r * sinPhi * Math.sin(theta);
    points[i * 3 + 2] = r * Math.cos(phi);
  }
  return points;
}

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  
  // Generate 2500 points inside a sphere of radius 15
  const sphere = useMemo(() => generateSpherePoints(2500, 15), []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Slow rotation over time
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 30;
      
      // Gentle parallax effect on mouse move
      ref.current.position.x += (mouse.x * 1.5 - ref.current.position.x) * 0.02;
      ref.current.position.y += (mouse.y * 1.5 - ref.current.position.y) * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#D4AF37"
          size={0.035}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

export default function AmbientParticles() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-70">
      <Canvas camera={{ position: [0, 0, 12] }} dpr={[1, 2]}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
