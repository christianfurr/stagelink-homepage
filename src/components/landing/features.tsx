"use client";

import {
  Video,
  MessageCircle,
  Camera,
  BarChart3,
  Shield,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

import { CurtainDivider } from "@/components/landing/curtain-divider";

const features = [
  {
    icon: Video,
    title: "Live video streaming",
    description:
      "Real-time camera feed to all viewers. Up to 1080p at 30fps. P2P for small crews, Cloudflare SFU at scale.",
    accent: "#C9A227",
  },
  {
    icon: MessageCircle,
    title: "Built-in crew chat",
    description:
      "Real-time messaging for crew coordination during shows. No separate app needed.",
    accent: "#B71C2E",
  },
  {
    icon: Camera,
    title: "Camera switching",
    description:
      "Multiple camera angles with instant switching. Directors control, viewers follow.",
    accent: "#C9A227",
  },
  {
    icon: BarChart3,
    title: "Performance stats",
    description:
      "Live FPS, resolution, bitrate, latency, codec, and packet loss. Know exactly how your stream is performing.",
    accent: "#B71C2E",
  },
  {
    icon: Shield,
    title: "Secure access",
    description:
      "Role-based authentication. Hosts control the stream, viewers watch. Secure sign-in via Clerk.",
    accent: "#C9A227",
  },
  {
    icon: Globe,
    title: "Works anywhere",
    description:
      "Browser-based. Works behind firewalls and NATs via Cloudflare TURN. No app install required.",
    accent: "#B71C2E",
  },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function Features() {
  return (
    <section id="features" className="relative bg-background py-28">
      <CurtainDivider variant="dark-to-light" className="absolute inset-x-0 top-0" />

      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Platform
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Everything your crew needs
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
            Real-time stage monitoring, built for the way theater crews actually
            work.
          </p>
        </motion.div>

        {/* Soundboard fader decoration (watermark) */}
        <div
          className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 w-32 opacity-[0.04]"
          aria-hidden
        >
          <svg viewBox="0 0 120 200" className="w-full h-auto text-gold/20">
            {[0, 28, 56, 84, 112].map((x) => (
              <g key={x}>
                <rect x={x} y={20} width={18} height={140} rx={2} fill="currentColor" />
                <rect x={x + 4} y={50} width={10} height={80} rx={1} fill="var(--background)" />
                <circle cx={x + 9} cy={75} r={4} fill="currentColor" />
              </g>
            ))}
          </svg>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, description, accent }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className={`group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-2 hover:shadow-lg ${accent === "#B71C2E" ? "hover:border-crimson/30" : "hover:border-gold/30"}`}
            >
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${accent}12` }}
              >
                <Icon
                  className="h-5 w-5"
                  style={{ color: accent }}
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="mb-2 text-base font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
