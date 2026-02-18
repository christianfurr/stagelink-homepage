"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "500+", label: "Shows Streamed", accent: "gold" as const },
  { value: "50+", label: "Venues", accent: "crimson" as const },
  { value: "99.9%", label: "Uptime", accent: "gold" as const },
  { value: "< 30ms", label: "Avg Latency", accent: "crimson" as const },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function SocialProof() {
  return (
    <section className="relative border-y border-gold/20 border-t-crimson/20 bg-surface-1 py-12">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {STATS.map(({ value, label, accent }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="text-center"
            >
              <div
                className={`font-display text-2xl font-semibold tracking-tight sm:text-3xl ${accent === "crimson" ? "text-crimson" : "text-gold"}`}
              >
                {value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
