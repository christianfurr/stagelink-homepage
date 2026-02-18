"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { CurtainDivider } from "@/components/landing/curtain-divider";

const DEMO_CHAT = [
  { name: "Emma", role: "SM", msg: "Standby LX Q12", color: "#C9A227" },
  { name: "Ryan", role: "Audio", msg: "Mic 3 live", color: "#B71C2E" },
  { name: "Host", msg: "Switching to Balcony Cam", color: "#B71C2E" },
  { name: "Olivia", msg: "Fly rail ready", color: "#C9A227" },
  { name: "Alex", role: "LX", msg: "House at 80%", color: "#C9A227" },
];

function CrewChatDemo() {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setVisible((v) => (v + 1) % (DEMO_CHAT.length + 1));
    }, 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="rounded-2xl border-2 border-white/10 bg-black p-4 shadow-xl">
      <h3 className="mb-3 font-display text-sm font-semibold text-white">
        Crew Chat
      </h3>
      <div className="min-h-[120px] space-y-1.5">
        {DEMO_CHAT.slice(0, visible).map((m, i) => (
          <motion.p
            key={`${m.name}-${i}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs"
          >
            <span className="font-medium" style={{ color: m.color }}>
              {m.name}
              {m.role && (
                <span className="font-normal text-white/50">
                  {" "}
                  ({m.role})
                </span>
              )}
            </span>
            <span className="text-white/60">: {m.msg}</span>
          </motion.p>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] text-white/40">
        Type message…
      </div>
      <p className="mt-1.5 text-[9px] text-white/40">
        12 crew online
      </p>
    </div>
  );
}

function StatsDemo() {
  const [ping, setPing] = useState(28);
  useEffect(() => {
    const t = setInterval(() => {
      setPing((p) => Math.max(24, Math.min(32, p + (Math.random() > 0.5 ? 1 : -1))));
    }, 1500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="rounded-2xl border-2 border-white/10 bg-black p-4 shadow-xl">
      <h3 className="mb-3 font-display text-sm font-semibold text-white">
        Performance
      </h3>
      <div className="space-y-1.5 text-[11px]">
        <div className="flex justify-between">
          <span className="text-white/60">FPS</span>
          <span className="font-medium text-white">30</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/60">Bitrate</span>
          <span className="font-medium text-white">2.6 Mbps</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/60">Ping</span>
          <motion.span
            key={ping}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-medium text-gold"
          >
            {ping}ms
          </motion.span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/60">Codec</span>
          <span className="font-medium text-white">VP9</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/60">Connection</span>
          <span className="font-medium text-white">Cloudflare SFU</span>
        </div>
      </div>
      <svg className="mt-3 w-full" viewBox="0 0 200 24" fill="none">
        <path
          d="M0,18 Q20,12 40,14 T80,10 T120,16 T160,8 T200,12"
          stroke="#C9A227"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="animate-graph-line"
        />
      </svg>
    </div>
  );
}

const CAMERAS = ["Main Stage", "Balcony Cam", "Director"];

function CameraSwitcherDemo() {
  const [active, setActive] = useState(0);
  return (
    <div className="rounded-2xl border-2 border-white/10 bg-black overflow-hidden shadow-xl">
      <div className="aspect-video bg-black flex items-center justify-center relative border-b border-white/10">
        <span className="font-display text-sm font-semibold text-white/80">
          {CAMERAS[active]}
        </span>
      </div>
      <div className="p-3 border-t border-white/10 flex items-center justify-between bg-black">
        <span className="text-xs text-white/60">
          Camera: {CAMERAS[active]}
        </span>
        <button
          type="button"
          onClick={() => setActive((a) => (a + 1) % CAMERAS.length)}
          className="text-[10px] font-medium text-gold border border-gold/40 px-2 py-1 rounded-md hover:bg-gold/10"
        >
          Switch Camera
        </button>
      </div>
    </div>
  );
}

function LiveIndicatorDemo() {
  const [viewers, setViewers] = useState(12);
  useEffect(() => {
    const t = setInterval(() => {
      setViewers((v) => Math.max(10, Math.min(15, v + (Math.random() > 0.5 ? 1 : -1))));
    }, 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="rounded-2xl border-2 border-white/10 bg-black p-4 shadow-xl">
      <h3 className="mb-3 font-display text-sm font-semibold text-white">
        Live stream
      </h3>
      <div className="flex flex-wrap items-center gap-2">
        <span className="animate-live-pulse inline-flex items-center gap-1 text-[10px] font-semibold text-white bg-crimson px-2 py-1 rounded">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          LIVE
        </span>
        <span className="text-[10px] text-white/60 bg-white/10 px-1.5 py-0.5 rounded">
          1080p
        </span>
        <span className="text-[10px] text-white/60 bg-white/10 px-1.5 py-0.5 rounded">
          30fps
        </span>
        <motion.span
          key={viewers}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] text-white font-medium"
        >
          {viewers} watching
        </motion.span>
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function FeatureDemos() {
  return (
    <section id="demos" className="relative bg-background py-28">
      <CurtainDivider variant="dark-to-light" className="absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            See it in action
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Feature demos
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
            Simulated previews of crew chat, stats, camera switching, and live
            indicators.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={itemVariants}>
            <CrewChatDemo />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatsDemo />
          </motion.div>
          <motion.div variants={itemVariants}>
            <CameraSwitcherDemo />
          </motion.div>
          <motion.div variants={itemVariants}>
            <LiveIndicatorDemo />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
