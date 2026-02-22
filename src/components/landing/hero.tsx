"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { FakeAppUI } from "@/components/landing/fake-app-ui";
import { SIGN_UP_URL } from "@/data/links";

export function Hero() {
  const [streamingMode, setStreamingMode] = useState<"sfu" | "p2p">("sfu");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-background pt-28 pb-20 lg:pt-36 lg:pb-28"
      onMouseMove={handleMouseMove}
    >
      {/* ── Spotlight cone left (warm amber) ── */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 w-[80vw] max-w-[600px] h-[70vh] opacity-[0.12]"
        aria-hidden
      >
        <svg viewBox="0 0 400 350" className="w-full h-full" preserveAspectRatio="xMinYMin slice">
          <defs>
            <linearGradient id="spotLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5A623" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#C9A227" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 0 L180 0 L400 350 L0 350 Z"
            fill="url(#spotLeft)"
          />
        </svg>
      </div>
      {/* ── Spotlight cone right ── */}
      <div
        className="pointer-events-none absolute -top-20 right-0 w-[80vw] max-w-[600px] h-[70vh] opacity-[0.12]"
        aria-hidden
      >
        <svg viewBox="0 0 400 350" className="w-full h-full" preserveAspectRatio="xMaxYMin slice">
          <defs>
            <linearGradient id="spotRight" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F5A623" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#C9A227" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M400 0 L220 0 L0 350 L400 350 Z"
            fill="url(#spotRight)"
          />
        </svg>
      </div>
      {/* ── Warm ambient glow (parallax) ── */}
      <div
        className="pointer-events-none absolute top-[40%] left-[55%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.14]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,166,35,0.4) 0%, rgba(201,162,39,0.15) 50%, transparent 70%)",
          filter: "blur(120px)",
          transform: `translate(calc(-50% + ${mousePos.x * 40}px), calc(-50% + ${mousePos.y * 40}px))`,
          transition: "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left: Copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground border-l-2 border-gold pl-3">
              Built for stage managers & crews
            </p>

            <h1 className="font-display-thin text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
              See the stage from anywhere — in real&nbsp;time.
            </h1>

            <p className="mt-6 max-w-[560px] text-lg leading-[1.6] text-muted-foreground">
              Near-zero latency stage streaming with live chat, camera
              switching, and real-time performance stats.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="h-12 rounded-xl px-8 text-base font-semibold tracking-wide"
              >
                <Link href={SIGN_UP_URL}>Start Free Trial</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-gold/30 px-8 text-base font-semibold tracking-wide hover:bg-gold/10 hover:border-gold/50"
              >
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>

            <p className="mt-5 text-[11px] tracking-wide text-muted-foreground/50">
              Browser-based&ensp;·&ensp;Works behind NAT/firewalls&ensp;·&ensp;Cloudflare
              TURN + SFU
            </p>

            {/* ── Streaming Mode Toggle ── */}
            <div className="mt-10">
              <div className="inline-flex rounded-xl border border-gold/30 bg-surface-1 p-1">
                <button
                  onClick={() => setStreamingMode("p2p")}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    streamingMode === "p2p"
                      ? "bg-crimson/15 text-crimson shadow-[0_0_12px_rgba(196,30,58,0.25)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  P2P Direct
                </button>
                <button
                  onClick={() => setStreamingMode("sfu")}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    streamingMode === "sfu"
                      ? "bg-gold/15 text-gold shadow-[0_0_12px_rgba(212,168,83,0.25)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  SFU Scalable
                </button>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Fake App UI ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.15,
            }}
            className="relative lg:scale-105 lg:origin-left"
          >
            {/* Glow behind the UI (warm amber/gold) */}
            <div
              className="pointer-events-none absolute -inset-20 rounded-full opacity-25"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(201,162,39,0.25) 0%, rgba(245,166,35,0.1) 50%, transparent 70%)",
                filter: "blur(60px)",
              }}
              aria-hidden
            />
            <div className="animate-float relative">
              <FakeAppUI mode={streamingMode} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
