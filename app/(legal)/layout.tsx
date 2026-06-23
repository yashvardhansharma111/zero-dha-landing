import Link from "next/link";
import type { ReactNode } from "react";

const LEGAL_LINKS: { href: string; label: string }[] = [
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-lg">
              N
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Zerodha
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-text-secondary transition hover:text-primary"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-14 lg:py-20">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-muted px-4 py-1.5 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Paper Trading App · Simulated Trades Only
          </div>
          {children}
        </div>
      </main>

      <footer className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-white">
                  N
                </div>
                <span className="text-sm font-semibold text-foreground">
                  Zerodha
                </span>
              </div>
              <p className="max-w-sm text-xs text-text-secondary">
                A paper trading (simulated) app for learning the markets. No
                real money is invested, deposited, or withdrawn through this
                application.
              </p>
              <p className="text-xs text-text-secondary">
                &copy; {new Date().getFullYear()} Zerodha. All rights
                reserved.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <p className="font-semibold text-foreground">Legal &amp; Help</p>
              {LEGAL_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-text-secondary transition hover:text-primary"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="mailto:support@zerodha-pulse.in"
                className="text-text-secondary transition hover:text-primary"
              >
                support@zerodha-pulse.in
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
