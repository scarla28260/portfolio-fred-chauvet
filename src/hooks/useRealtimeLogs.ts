"use client";

import { useState, useEffect } from "react";
import { insforge } from "@/infrastructure/api/insforge";

export interface SupplyLog {
  id: number;
  created_at: string;
  source: string;
  event: string;
  status: string;
}

const MOCK_EVENTS = [
  { source: "ETH_SCAN", event: "PARSING_AST_NODES", status: "PROCESSING" },
  { source: "PHO_CORE", event: "ENFORCING_THERMAL_GCM", status: "ENCRYPTED" },
  { source: "HYD_NET", event: "ESTABLISHING_TLS_1.3", status: "STABLE" },
  { source: "DATA_VIS", event: "MAPPING_CLUSTERS", status: "SYNCED" },
  { source: "ARCH_AUD", event: "VALIDATING_PHOENIX_VI", status: "VERIFIED" },
  { source: "PHX_FORGE", event: "IGNITING_THERMAL_FLOW", status: "ACTIVE" },
] as const;

const createMockLog = (index: number): SupplyLog => ({
  id: Date.now() - index * 1000,
  created_at: new Date().toISOString(),
  ...MOCK_EVENTS[index % MOCK_EVENTS.length]
});

export function useRealtimeLogs(limit = 10) {
  const [logs, setLogs] = useState<SupplyLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    let mockInterval: NodeJS.Timeout;

    async function fetchInitialLogs() {
      try {
        const { data } = await insforge.database
          .from("supply_chain_logs")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(limit);
          
        if (data && data.length > 0) {
          setLogs(data);
        } else {
          setLogs(Array.from({ length: 5 }, (_, i) => createMockLog(i)));
        }
      } catch {
        setLogs(Array.from({ length: 5 }, (_, i) => createMockLog(i)));
      } finally {
        setLoading(false);
      }
    }

    const onNewLog = (payload: any) => {
      setLogs((prev) => [payload, ...prev.slice(0, limit - 1)]);
    };

    const setupRealtime = async () => {
      try {
        await insforge.realtime.connect();
        await insforge.realtime.subscribe("supply_chain_logs");
        insforge.realtime.on("new_log", onNewLog);
        setIsConnected(true);
      } catch {
        setIsConnected(false);
        mockInterval = setInterval(() => {
          onNewLog(createMockLog(Math.floor(Math.random() * MOCK_EVENTS.length)));
        }, 4000);
      }
    };

    fetchInitialLogs();
    setupRealtime();

    return () => {
      if (mockInterval) clearInterval(mockInterval);
      try {
        insforge.realtime.unsubscribe("supply_chain_logs");
        insforge.realtime.off("new_log", onNewLog);
      } catch {}
    };
  }, [limit]);

  return { logs, loading, isConnected };
}
