import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/20 border-t-crimson/25 bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-display text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
            >
              Stage Link
            </Link>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Real-time stage monitoring for theater crews. See the stage from anywhere.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Product
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="#features" className="text-sm text-foreground transition-colors hover:text-gold">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-foreground transition-colors hover:text-crimson">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-foreground transition-colors hover:text-gold">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Legal
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="#" className="text-sm text-foreground transition-colors hover:text-gold">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground transition-colors hover:text-crimson">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground transition-colors hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground/80">
            © {currentYear} Stage Link
          </p>
          <p className="text-xs text-muted-foreground/60 italic">
            Built for theater
          </p>
        </div>
      </div>
    </footer>
  );
}
