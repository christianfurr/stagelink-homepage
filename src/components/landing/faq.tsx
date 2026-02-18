"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "What browsers are supported?",
    answer:
      "Stage Link works in Chrome, Firefox, Safari, and Edge (latest versions). We use WebRTC and recommend Chrome or Edge for the best low-latency experience.",
  },
  {
    question: "How low is the latency?",
    answer:
      "Typically under 30ms end-to-end on a good connection. P2P mode can be even lower for small crews. We show live stats (ping, bitrate, FPS) so you always know how your stream is performing.",
  },
  {
    question: "Can I use Stage Link behind a firewall/NAT?",
    answer:
      "Yes. We use Cloudflare TURN and SFU so crews can connect from behind corporate firewalls and NATs. No special network setup is required.",
  },
  {
    question: "What happens after my free trial ends?",
    answer:
      "You can choose a plan (Crew, Production, or Showtime) or pause. We'll remind you before the trial ends. No credit card is required to start.",
  },
  {
    question: "How many cameras can I connect?",
    answer:
      "Crew plan supports one primary stream; Production and Showtime support multiple camera angles with instant switching. See the Pricing section for details per tier.",
  },
  {
    question: "Is my stream secure?",
    answer:
      "Yes. Streams are encrypted (DTLS-SRTP). Access is controlled with role-based auth via Clerk. Only people you invite can join a show room.",
  },
] as const;

export function FAQ() {
  return (
    <section id="faq" className="relative bg-background py-28">
      <div className="mx-auto max-w-[720px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Common questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 rounded-2xl border border-border bg-card"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map(({ question, answer }) => (
              <AccordionItem key={question} value={question} className="px-6">
                <AccordionTrigger className="text-left hover:no-underline data-[state=open]:text-gold data-[state=open]:shadow-[inset_3px_0_0_0_var(--crimson)]">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
