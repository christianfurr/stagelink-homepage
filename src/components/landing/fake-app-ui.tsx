"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface FakeAppUIProps {
  mode: "p2p" | "sfu";
}

const chatMessages = [
  { name: "Emma", role: "SM", message: "Standby LX Q12", color: "#C9A227" },
  { name: "Ryan", role: "Audio", message: "Mic 3 live", color: "#B71C2E" },
  { name: "Host", role: "", message: "Switching to Balcony Cam", color: "#B71C2E" },
  { name: "Olivia", role: "", message: "Fly rail ready", color: "#C9A227" },
  { name: "Alex", role: "LX", message: "House at 80%", color: "#C9A227" },
  { name: "Jordan", role: "", message: "Standing by", color: "#B71C2E" },
];

export function FakeAppUI({ mode }: FakeAppUIProps) {
  const [viewers, setViewers] = useState(mode === "sfu" ? 42 : 5);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [visibleChatCount, setVisibleChatCount] = useState(4);
  const [displayPing, setDisplayPing] = useState(mode === "sfu" ? 28 : 8);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setViewers(mode === "sfu" ? 42 : 5);
    setDisplayPing(mode === "sfu" ? 28 : 8);
  }, [mode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((v) => {
        const base = mode === "sfu" ? 42 : 5;
        const delta = Math.floor(Math.random() * 3) - 1;
        return Math.max(base - 2, Math.min(base + 3, v + delta));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [mode]);

  useEffect(() => {
    const t = setTimeout(() => setVisibleChatCount(5), 5000);
    const t2 = setTimeout(() => setVisibleChatCount(6), 10000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    const base = mode === "sfu" ? 28 : 8;
    const interval = setInterval(() => {
      setDisplayPing((p) =>
        Math.max(base - 2, Math.min(base + 4, p + (Math.random() > 0.5 ? 1 : -1)))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [mode]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -4, y: x * 4 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const connectionLabel = mode === "sfu" ? "Cloudflare SFU" : "P2P Direct";
  const modeBadgeColor = mode === "sfu" ? "#C9A227" : "#B71C2E";
  const modeLabel = mode === "sfu" ? "SFU Scalable" : "P2P Direct";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="rounded-2xl border-2 border-gold/30 bg-black shadow-2xl shadow-black/50 overflow-hidden"
      >
        {/* ── Top App Bar ── */}
        <div className="flex items-center justify-between gap-4 px-4 py-2.5 border-b border-white/10 bg-black/90">
          <span className="text-sm font-semibold tracking-tight text-white shrink-0">
            Stage Link
          </span>

          <span className="hidden text-xs text-white/60 sm:block">
            Show:{" "}
            <span className="text-white font-medium">Romeo & Juliet</span>
          </span>

          <div className="flex items-center gap-2 shrink-0">
            <motion.span
              key={modeLabel}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-[10px] px-2 py-0.5 rounded-full font-medium"
              style={{
                backgroundColor: `${modeBadgeColor}18`,
                color: modeBadgeColor,
                boxShadow: `0 0 10px ${modeBadgeColor}30`,
              }}
            >
              {modeLabel}
            </motion.span>
            <motion.span
              key={`ping-${displayPing}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] text-gold bg-gold/10 px-1.5 py-0.5 rounded-full font-medium"
            >
              {displayPing}ms
            </motion.span>
            <span className="text-[10px] text-white/60">
              <motion.span
                key={viewers}
                initial={{ y: -4, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {viewers}
              </motion.span>{" "}
              watching
            </span>
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px]">
          {/* Video Area */}
          <div className="relative">
            <div className="aspect-video relative overflow-hidden bg-linear-to-br from-[#1a0808] via-[#200e0e] to-[#0f0505]">
              {/* Stage curtain + spotlight */}
              <div className="absolute inset-0 bg-linear-to-b from-[#4a1010]/30 via-[#2a0808]/20 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_20%,rgba(255,200,120,0.12),transparent_70%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_50%_at_35%_60%,rgba(255,180,80,0.06),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_50%_at_65%_60%,rgba(255,180,80,0.06),transparent_60%)]" />

              {/* Stage floor */}
              <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-linear-to-t from-[#0a0505]/80 to-transparent" />

              {/* Actor silhouettes */}
              <div className="absolute bottom-[15%] left-[28%] w-6 h-16 bg-black/60 rounded-t-full blur-[2px]" />
              <div className="absolute bottom-[15%] left-[48%] w-7 h-18 bg-black/50 rounded-t-full blur-[2px]" />
              <div className="absolute bottom-[15%] right-[28%] w-5 h-14 bg-black/55 rounded-t-full blur-[2px]" />

              {/* LIVE overlay */}
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                <span className="animate-live-pulse flex items-center gap-1 text-[10px] font-semibold text-white bg-live-red/80 px-2 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  LIVE
                </span>
                <span className="text-[10px] text-white/60 bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded">
                  1080p
                </span>
                <span className="text-[10px] text-white/60 bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded">
                  30fps
                </span>
              </div>

              {/* Director Cam label */}
              <div className="absolute bottom-2.5 right-2.5">
                <span className="text-[10px] text-white/50 bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded">
                  Director Cam
                </span>
              </div>
            </div>

            {/* Camera controls */}
            <div className="flex items-center justify-between px-3 py-2 border-t border-white/10 bg-black/80">
              <div className="flex items-center gap-1.5 text-xs text-white/60">
                Camera:{" "}
                <span className="text-white font-medium">Main Stage</span>
                <svg
                  className="w-3 h-3 opacity-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <span className="text-[10px] text-gold border border-gold/20 px-2 py-1 rounded-md cursor-default">
                Switch Camera
              </span>
            </div>
          </div>

          {/* ── Chat Panel ── */}
          <div className="hidden border-l border-white/10 sm:flex sm:flex-col bg-black/95">
            <div className="px-3 py-2 border-b border-white/10">
              <span className="text-xs font-semibold text-white">
                Crew Chat
              </span>
            </div>

            <div className="flex-1 px-3 py-2.5 space-y-2.5 overflow-hidden">
              {chatMessages.slice(0, visibleChatCount).map((msg, i) => (
                <motion.div
                  key={`${msg.name}-${msg.message}`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.4 + 0.8, duration: 0.3 }}
                  className="text-[11px] leading-relaxed"
                >
                  <span className="font-medium" style={{ color: msg.color }}>
                    {msg.name}
                    {msg.role && (
                      <span className="text-white/50 font-normal">
                        {" "}
                        ({msg.role})
                      </span>
                    )}
                  </span>
                  <span className="text-white/60">
                    : {msg.message}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="px-3 py-2 border-t border-white/10">
              <div className="bg-white/5 rounded-md px-2.5 py-1.5 text-[10px] text-white/40 border border-white/10">
                Type message…
              </div>
              <p className="mt-1.5 text-[9px] text-white/40">
                12 crew online
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Floating Stats Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -bottom-8 -left-4 z-10 rounded-xl border-2 border-gold/30 bg-black/95 backdrop-blur-xl p-3.5 shadow-2xl shadow-black/50 w-48"
      >
        <div className="text-[10px] font-semibold text-white mb-2.5">
          Performance
        </div>
        <div className="space-y-1.5 text-[10px]">
          <div className="flex justify-between">
            <span className="text-white/60">FPS</span>
            <span className="text-white font-medium">30</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">Bitrate</span>
            <span className="text-white font-medium">2.6 Mbps</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">Ping</span>
            <motion.span
              key={`stat-ping-${displayPing}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gold font-medium"
            >
              {displayPing}ms
            </motion.span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">Packet Loss</span>
            <span className="text-white font-medium">0.1%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">Codec</span>
            <span className="text-white font-medium">VP9</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">Connection</span>
            <motion.span
              key={connectionLabel}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white font-medium"
            >
              {connectionLabel}
            </motion.span>
          </div>
        </div>

        {/* Mini performance graph */}
        <svg className="w-full h-6 mt-2.5" viewBox="0 0 200 24" fill="none">
          <defs>
            <linearGradient id="graphFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C9A227" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,18 Q20,12 40,14 T80,10 T120,16 T160,8 T200,12"
            stroke="#C9A227"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-graph-line"
          />
          <path
            d="M0,18 Q20,12 40,14 T80,10 T120,16 T160,8 T200,12 V24 H0 Z"
            fill="url(#graphFill)"
            className="animate-graph-line"
          />
        </svg>
      </motion.div>
    </div>
  );
}
