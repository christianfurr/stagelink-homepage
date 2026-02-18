"use client";

import { MonitorPlay, Share2, Radio } from "lucide-react";
import { motion } from "framer-motion";

const STEPS = [
  {
    number: 1,
    icon: MonitorPlay,
    title: "Create a show room",
    description: "Set up a room in seconds. Name it, pick your plan, and you're ready.",
    accent: "gold" as const,
  },
  {
    number: 2,
    icon: Share2,
    title: "Share with your crew",
    description: "Send one link. Everyone joins in the browser—no app installs.",
    accent: "crimson" as const,
  },
  {
    number: 3,
    icon: Radio,
    title: "Go live",
    description: "Start streaming from your director view. Crew sees the stage in real time.",
    accent: "gold" as const,
  },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-background py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Get started
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
            Three steps to get your crew on the same page.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8"
        >
          {STEPS.map(({ number, icon: Icon, title, description, accent }, index) => (
            <motion.div
              key={number}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center"
            >
              {index < STEPS.length - 1 && (
                <div
                  className={`absolute left-[60%] top-8 hidden h-0.5 w-[80%] border-t-2 border-dashed md:block ${index === 0 ? "border-gold/30" : "border-crimson/30"}`}
                  aria-hidden
                />
              )}
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 ${accent === "crimson" ? "border-crimson/40 bg-crimson/10 text-crimson" : "border-gold/30 bg-gold/10 text-gold"}`}
              >
                <Icon className="h-7 w-7" strokeWidth={1.8} />
              </div>
              <div
                className={`mt-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${accent === "crimson" ? "bg-crimson/20 text-crimson" : "bg-gold/20 text-gold"}`}
              >
                {number}
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
