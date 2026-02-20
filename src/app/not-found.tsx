import Link from "next/link";

import { Footer } from "@/components/landing/footer";
import { Nav } from "@/components/landing/nav";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav hasAnnouncement={false} />
      <main className="mx-auto flex max-w-[1280px] flex-1 flex-col items-center justify-center px-6 py-24">
        <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-light tracking-tight text-foreground">
          404
        </h1>
        <p className="mt-3 text-muted-foreground">Page not found.</p>
        <Button asChild variant="default" size="lg" className="mt-8">
          <Link href="/">Back to home</Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
}
