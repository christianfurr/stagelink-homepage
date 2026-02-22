"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { SIGN_UP_URL, SIGN_IN_URL } from "@/data/links";

const SECTIONS = [
  { id: "how-it-works", label: "How it works" },
  { id: "features", label: "Features" },
  { id: "demos", label: "Demos" },
  { id: "pricing", label: "Pricing" },
] as const;

function useActiveSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveId(id);
              return;
            }
          }
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    });
    return () => observers.forEach((o) => o?.());
  }, []);

  return activeId;
}

interface NavProps {
  /** When true, nav is shifted down to sit below the announcement bar */
  hasAnnouncement?: boolean;
}

export function Nav({ hasAnnouncement = false }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed z-50 w-full border-b border-gold/20 bg-background/90 backdrop-blur-xl ${hasAnnouncement ? "top-10" : "top-0"}`}
      >
        <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-lg font-semibold tracking-[-0.02em] text-foreground transition-opacity hover:opacity-80"
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-gold animate-live-pulse"
              aria-hidden
            />
            Stage Link
          </Link>

          <div className="hidden items-center gap-8 sm:flex">
            {SECTIONS.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                className={`text-sm transition-colors hover:text-gold ${
                  activeSection === id ? "text-gold" : "text-muted-foreground"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href={SIGN_IN_URL}
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              Sign in
            </Link>
            <Button
              asChild
              variant="secondary"
              className="h-10 rounded-xl px-5 text-sm font-semibold tracking-wide"
            >
              <Link href={SIGN_UP_URL}>Get Started</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground hover:bg-gold/10 hover:text-gold sm:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="right"
          className="border-gold/20 bg-background"
          showCloseButton={true}
        >
          <SheetHeader>
            <SheetTitle className="font-display text-foreground">
              Menu
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-1 pt-4">
            {SECTIONS.map(({ id, label }) => (
              <SheetClose asChild key={id}>
                <Link
                  href={`#${id}`}
                  className="block rounded-lg px-4 py-3 text-base text-foreground transition-colors hover:bg-gold/10 hover:text-gold"
                >
                  {label}
                </Link>
              </SheetClose>
            ))}
            <div className="mt-4 border-t border-border pt-4">
              <SheetClose asChild>
                <Link
                  href={SIGN_IN_URL}
                  className="block rounded-lg px-4 py-3 text-base text-foreground transition-colors hover:bg-gold/10 hover:text-gold"
                >
                  Sign in
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="secondary" className="h-12 w-full rounded-xl">
                  <Link href={SIGN_UP_URL}>Get Started</Link>
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
