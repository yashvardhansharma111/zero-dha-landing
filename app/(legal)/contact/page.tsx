import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact · Nokia Securities",
  description:
    "Get in touch with the Nokia Securities team — a paper trading (simulated) app.",
};

export default function ContactPage() {
  return (
    <article>
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Contact us
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
        We&rsquo;re a small team building a <strong>paper trading</strong>{" "}
        (simulated) app to help people learn the markets without risking real
        money. The fastest way to reach us is by email.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-white p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-muted text-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            General &amp; support
          </p>
          <a
            href="mailto:support@nokiasecurities.in"
            className="mt-1 block break-all text-lg font-bold text-foreground hover:text-primary"
          >
            support@nokiasecurities.in
          </a>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            For account help, password resets, bug reports, and any general
            questions about the app.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-white p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-muted text-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Website
          </p>
          <a
            href="https://app.zero-dha1.in"
            className="mt-1 block break-all text-lg font-bold text-foreground hover:text-primary"
          >
            nokiasecurities.in
          </a>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            Visit our website for the latest version of the app, FAQs, and
            policies.
          </p>
        </div>
      </div>

      <section className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-relaxed text-amber-900">
        <p>
          <strong>Please note:</strong> Nokia Securities is a paper trading
          (simulated) app. We are <strong>not</strong> a SEBI-registered
          broker, sub-broker, or investment adviser. We cannot place real
          trades, hold real funds, or give investment advice. For grievances
          related to a real broker or stock exchange, please contact that
          entity directly or SEBI&rsquo;s SCORES portal.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          When you write to us, please include:
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-text-secondary">
          <li>The email address you registered with</li>
          <li>Your client ID (if you have one)</li>
          <li>Your device model and Android version (for bug reports)</li>
          <li>The app version you&rsquo;re running</li>
          <li>A short description of the issue or question</li>
        </ul>
      </section>

      <section className="mt-12 rounded-2xl border border-border bg-card/50 p-6">
        <h2 className="text-xl font-bold text-foreground">Looking for help?</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
          Visit the{" "}
          <Link
            href="/support"
            className="text-primary underline underline-offset-4"
          >
            Support page
          </Link>{" "}
          for FAQs and common fixes. You can also read our{" "}
          <Link
            href="/disclaimer"
            className="text-primary underline underline-offset-4"
          >
            disclaimer
          </Link>
          ,{" "}
          <Link
            href="/privacy"
            className="text-primary underline underline-offset-4"
          >
            privacy policy
          </Link>
          , and{" "}
          <Link
            href="/terms"
            className="text-primary underline underline-offset-4"
          >
            terms &amp; conditions
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
