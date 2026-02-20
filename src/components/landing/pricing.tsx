"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { pricingTiers } from "@/data/pricing";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section
      id="pricing"
      className="relative bg-background py-28"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L4 4 M36 0 L40 4 M0 36 L4 40 M36 36 L40 40 M20 0 L24 4 M20 36 L24 40 M0 20 L4 24 M36 20 L40 24' stroke='%23C9A227' stroke-width='0.5' opacity='0.06' fill='none'/%3E%3C/svg%3E")`,
      }}
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
            Pricing
          </p>
          <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
            Try free for 14 days. Scale when you need more viewers and features.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center rounded-xl border border-gold/30 bg-surface-1 p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                billing === "monthly"
                  ? "bg-gold/15 text-gold shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                billing === "annual"
                  ? "bg-gold/15 text-gold shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="ml-1.5 text-[10px] text-crimson font-semibold">
                Save 15%
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {pricingTiers.map((tier) => {
            const price =
              billing === "annual" ? tier.annualPrice : tier.monthlyPrice;
            const isPopular = tier.popular === true;

            return (
              <motion.div
                key={tier.name}
                variants={cardVariants}
                className={`relative flex flex-col rounded-2xl border-2 p-8 transition-colors ${
                  isPopular
                    ? "scale-[1.02] border-gold bg-card shadow-[0_0_40px_rgba(201,162,39,0.15)] lg:scale-105"
                    : "border-border bg-card hover:border-gold/40"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="rounded-full bg-gold/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    {price === null ? (
                      <span className="text-4xl font-bold tracking-tight text-foreground">
                        Free
                      </span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold tracking-tight text-foreground">
                          ${price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          /mo
                        </span>
                        {billing === "annual" && (
                          <span className="ml-2 text-xs text-muted-foreground">
                            billed annually
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: isPopular ? "#C9A227" : "var(--muted-foreground)" }}
                        strokeWidth={2}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`h-12 w-full rounded-xl text-sm font-semibold tracking-wide ${
                    isPopular
                      ? ""
                      : "border border-gold/40 text-foreground hover:bg-gold/10"
                  }`}
                  variant={isPopular ? "default" : "ghost"}
                >
                  <Link href="#">{tier.cta}</Link>
                </Button>
                {tier.ctaHint && (
                  <p className="mt-2.5 text-center text-[11px] text-muted-foreground/50">
                    {tier.ctaHint}
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
