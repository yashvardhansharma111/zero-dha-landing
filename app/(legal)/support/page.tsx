import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support · Nokia Securities",
  description:
    "Get help with the Nokia Securities paper trading app — account, login, simulator usage, and bug reports.",
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "Is Nokia Securities a real broker?",
    a: "No. Nokia Securities is a paper trading (simulated) app. We are not a SEBI-registered broker. All money, orders, and balances inside the app are virtual and exist for educational practice only.",
  },
  {
    q: "Can I lose real money using the app?",
    a: "No. Because the app does not connect to any stock exchange and does not move real funds, you cannot lose real money inside the simulator. Any losses or gains shown are virtual.",
  },
  {
    q: "I haven’t received my login credentials.",
    a: "Credentials are emailed after an admin reviews your registration. Please check your spam folder. If it has been more than 24 hours, email support@nokiasecurities.in with your registered email address.",
  },
  {
    q: "I forgot my password.",
    a: "Email support@nokiasecurities.in from the email address you registered with and we will help you reset access.",
  },
  {
    q: "How do I delete my account?",
    a: "Send a deletion request from your registered email address to support@nokiasecurities.in. We will remove your account and associated simulator data within 30 days.",
  },
  {
    q: "The app is showing an error or behaving unexpectedly.",
    a: "Try closing and reopening the app first. If the problem persists, email us with your device model, Android version, app version, and a short description of the steps that triggered the issue.",
  },
];

export default function SupportPage() {
  return (
    <article>
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Support
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
        Need help with the Nokia Securities <strong>paper trading</strong>{" "}
        app? You&rsquo;re in the right place. Most questions can be answered
        below — for anything else, email us and we&rsquo;ll get back to you.
      </p>

      <div className="mt-8 rounded-2xl border border-primary/20 bg-primary-muted p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          Email support
        </p>
        <a
          href="mailto:support@nokiasecurities.in"
          className="mt-2 inline-block text-2xl font-bold text-foreground hover:text-primary"
        >
          support@nokiasecurities.in
        </a>
        <p className="mt-3 text-sm text-text-secondary">
          We typically reply within 1–2 business days. Please email us from the
          address you registered with so we can verify your account.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Frequently asked questions
        </h2>
        <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-white">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground">
                {f.q}
                <span className="text-text-secondary transition group-open:rotate-180">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-border bg-card/50 p-6">
        <h2 className="text-xl font-bold text-foreground">
          Still need help?
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
          Read our{" "}
          <Link
            href="/disclaimer"
            className="text-primary underline underline-offset-4"
          >
            paper-trading disclaimer
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
          , or email{" "}
          <a
            href="mailto:support@nokiasecurities.in"
            className="text-primary underline underline-offset-4"
          >
            support@nokiasecurities.in
          </a>
          .
        </p>
      </section>
    </article>
  );
}
