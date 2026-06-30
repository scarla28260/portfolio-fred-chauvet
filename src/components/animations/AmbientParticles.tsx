"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function ParticleCloud({ color, radius, count, speed }: { color: string, radius: number, count: number, speed: number }) {
  const ref = useRef<any>();
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radius * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count, radius]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= (delta * speed) / 10;
      ref.current.rotation.y -= (delta * speed) / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color} 
          size={0.006}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function AmbientParticles() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-60 transition-opacity duration-1000 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
        <ParticleCloud color="#FCD34D" radius={1.5} count={1500} speed={1} />
        <ParticleCloud color="#06B6D4" radius={2.0} count={1500} speed={-0.5} />
      </Canvas>
    </div>
  );
}
