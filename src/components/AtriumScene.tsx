"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { usePhoenix } from "@/context/PhoenixContext";
import DataScatterPlot from "./DataScatterPlot";

function Projector() {
    const { isBlueprint } = usePhoenix();
    return (
        <group position={[0, 0, -5]}>
            <DataScatterPlot count={isBlueprint ? 200 : 400} />
            {/* Focal Point Light for technical atmosphere */}
            <pointLight position={[5, 2, 5]} intensity={10} color="#00F2FF" />
        </group>
    );
}


function AdaptivePerformance() {
  const { updateStatus } = usePhoenix();
  const frameTimes = useRef<number[]>([]);
  
  useFrame((state, delta) => {
    // Monitor FPS (delta is time between frames in seconds)
    frameTimes.current.push(delta);
    if (frameTimes.current.length > 60) {
      const avgDelta = frameTimes.current.reduce((a, b) => a + b) / 60;
      const fps = 1 / avgDelta;
      
      if (fps < 55) {
        updateStatus({ isLowPerformance: true });
      } else if (fps > 58) {
        updateStatus({ isLowPerformance: false });
      }
      frameTimes.current = [];
    }
  });

  return null;
}


function SceneContent() {
  const { progress, status } = usePhoenix();
  const { isRainbowMode } = status;
  const { camera } = useThree();
  const flashRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (progress >= 100) {
      // Camera shake at takeoff
      const shake = Math.sin(state.clock.elapsedTime * 30) * 0.05;
      camera.position.x += shake;
      camera.position.y += shake;
      
      // Flash decay
      if (flashRef.current) {
        flashRef.current.scale.setScalar(Math.max(0, flashRef.current.scale.x - 0.02));
        (flashRef.current.material as THREE.MeshBasicMaterial).opacity = flashRef.current.scale.x;
      }
    } else if (progress > 99 && flashRef.current) {
      flashRef.current.scale.setScalar(20);
      (flashRef.current.material as THREE.MeshBasicMaterial).opacity = 1;
    }
  });

  return (
    <>
      <color attach="background" args={[isRainbowMode ? "#1a0033" : "#010411"]} />
      <ambientLight intensity={isRainbowMode ? 1.5 : 0.5} />
      <pointLight position={[10, 10, 10]} intensity={isRainbowMode ? 5 : 1.5} color={isRainbowMode ? "#ff00ff" : "#FF6B00"} />
      <pointLight position={[-10, -10, -10]} intensity={isRainbowMode ? 5 : 0.5} color={isRainbowMode ? "#00ffff" : "#00F2FF"} />
      
      <AdaptivePerformance />
      <Projector />
      
      {/* Ignition Flash */}
      <mesh ref={flashRef} scale={0} position={[0, 0, 2]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="white" transparent opacity={0} blending={THREE.AdditiveBlending} />
      </mesh>
    </>
  );
}

export default function AtriumScene() {
  const { isBlueprint, currentZone } = usePhoenix();

  return (
    <div className="absolute inset-0 z-0 transition-all duration-1000 bg-[#010411]">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }} 
        dpr={[1, 2]} 
        gl={{ 
          antialias: true, 
          powerPreference: "default",
          alpha: true,
          stencil: false,
          depth: true
        }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', (event) => {
            event.preventDefault();
            console.warn('WebGL Context Lost. Attempting recovery...');
          }, false);
        }}
      >
        <SceneContent />
        <OrbitControls enableZoom={false} enablePan={false} />
        
        {/* Subtle Grid - Professional Grounding */}
        <gridHelper 
          args={[60, 40, "#ffffff05", "#ffffff02"]} 
          position={[0, -3, 0]} 
          rotation={[0, 0, 0]}
        />

        {isBlueprint && (
          <gridHelper 
            args={[30, 30, currentZone.themeColor, "#ffffff0a"]} 
            position={[0, -2.5, 0]} 
          />
        )}
        {!isBlueprint ? (
          <>
            <Environment preset="city" />
            <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
          </>
        ) : null}
      </Canvas>
    </div>
  );
}
