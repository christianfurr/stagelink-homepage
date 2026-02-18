"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function CtaBlock() {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      {/* Overhead follow-spot (warm gold, low opacity on light) */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 w-[140%] max-w-[900px] h-[80vh] -translate-x-1/2 opacity-[0.08]"
        aria-hidden
      >
        <svg viewBox="0 0 400 320" className="w-full h-full" preserveAspectRatio="xMidYMin slice">
          <defs>
            <radialGradient id="followSpot" cx="50%" cy="0%" r="80%">
              <stop offset="0%" stopColor="#F5A623" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#B71C2E" stopOpacity="0.06" />
              <stop offset="50%" stopColor="#C9A227" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="200" cy="200" rx="220" ry="280" fill="url(#followSpot)" />
        </svg>
      </div>

      {/* Warm gold radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,162,39,0.3) 0%, rgba(245,166,35,0.1) 40%, transparent 70%)",
          filter: "blur(100px)",
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="font-display font-semibold text-3xl tracking-[-0.02em] text-foreground sm:text-5xl">
          Make your crew omniscient.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg text-muted-foreground">
          Get your entire crew on Stage Link and never miss a cue again.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="h-12 rounded-xl px-8 text-base font-semibold tracking-wide"
          >
            <Link href="#">Start Free Trial</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-xl border-crimson/40 px-8 text-base font-semibold tracking-wide hover:bg-crimson/10 hover:border-crimson/60 hover:text-crimson"
          >
            <Link href="#">Get Started Free</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
