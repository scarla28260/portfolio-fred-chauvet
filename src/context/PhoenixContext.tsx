"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PHOENIX_CONFIG, ZoneConfig } from "@/domain/config/phoenix";

export type ExpertPole = "0x00" | "0x01" | "0x02" | "0x03" | "0x04" | "0x05" | "0x06" | "0x07" | "0x08" | "0x09" | "0x0A" | "0x0B";

interface SystemStatus {
  isLoaded: boolean;
  isLowPerformance: boolean;
  isRainbowMode: boolean;
  isHackMode: boolean;
  syncRate: number;
  indexedSkills: number;
  isSyncing: boolean;
}

interface PhoenixContextType {
  isBlueprint: boolean;
  toggleBlueprint: () => void;
  isBlueprintOverlayActive: boolean;
  toggleBlueprintOverlay: () => void;
  currentZone: ZoneConfig;
  currentPole: ExpertPole;
  progress: number;
  setProgress: (p: number) => void;
  scrollProgress: number;
  setScrollProgress: (p: number) => void;
  status: SystemStatus;
  updateStatus: (update: Partial<SystemStatus>) => void;
  allSkills: string[];
}

const PhoenixContext = createContext<PhoenixContextType | undefined>(undefined);

// Generate mock skills for the 10k requirement
const MOCK_SKILLS = Array.from({ length: 10000 }, (_, i) => `SKILL_0x${i.toString(16).padStart(4, '0')}`);

export function PhoenixProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isBlueprint, setIsBlueprint] = useState(false);
  const [isBlueprintOverlayActive, setIsBlueprintOverlayActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [status, setStatus] = useState<SystemStatus>({
    isLoaded: false,
    isLowPerformance: false,
    isRainbowMode: false,
    isHackMode: false,
    syncRate: 128.4,
    indexedSkills: 0,
    isSyncing: true
  });

  // Skills Sync Engine Simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (status.isSyncing && status.indexedSkills < 10000) {
      interval = setInterval(() => {
        setStatus(prev => {
          const nextCount = Math.min(prev.indexedSkills + Math.floor(Math.random() * 50) + 10, 10000);
          return {
            ...prev,
            indexedSkills: nextCount,
            isSyncing: nextCount < 10000
          };
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [status.isSyncing, status.indexedSkills]);

  // Derive current zone from pathname
  const getZoneFromPath = (path: string): ZoneConfig => {
    if (path === "/") return PHOENIX_CONFIG.atrium;
    const zoneKey = path.split("/")[1] as ZoneId;
    return PHOENIX_CONFIG[zoneKey] || PHOENIX_CONFIG.atrium;
  };

  const [currentZone, setCurrentZone] = useState<ZoneConfig>(getZoneFromPath(pathname));
  const [currentPole, setCurrentPole] = useState<ExpertPole>("0x00");

  useEffect(() => {
    const zone = getZoneFromPath(pathname);
    setCurrentZone(zone);
    
    const poleMap: Record<string, ExpertPole> = {
      "/": "0x00",
      "/vision": "0x01",
      "/realisations": "0x0B"
    };
    setCurrentPole(poleMap[pathname] || "0x00");
  }, [pathname]);

  const updateStatus = (update: Partial<SystemStatus>) => {
    setStatus(prev => ({ ...prev, ...update }));
  };

  const toggleBlueprint = () => setIsBlueprint((prev) => !prev);
  const toggleBlueprintOverlay = () => setIsBlueprintOverlayActive((prev) => !prev);

  return (
    <PhoenixContext.Provider value={{ 
      isBlueprint, 
      toggleBlueprint, 
      isBlueprintOverlayActive,
      toggleBlueprintOverlay,
      currentZone, 
      currentPole,
      progress, 
      setProgress, 
      scrollProgress,
      setScrollProgress,
      status,
      updateStatus,
      allSkills: MOCK_SKILLS
    }}>
      {children}
    </PhoenixContext.Provider>
  );
}

export function usePhoenix() {
  const context = useContext(PhoenixContext);
  if (context === undefined) {
    throw new Error("usePhoenix must be used within a PhoenixProvider");
  }
  return context;
}

// Helper for type safety if needed in derived zones
type ZoneId = keyof typeof PHOENIX_CONFIG;
