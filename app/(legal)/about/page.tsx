import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About · Nokia Securities",
  description:
    "About Nokia Securities — a paper trading (simulated) app for learning the markets risk-free.",
};

export default function AboutPage() {
  return (
    <article>
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        About Nokia Securities
      </h1>
      <p className="mt-4 text-[17px] leading-relaxed text-text-secondary">
        Nokia Securities is a <strong>paper trading (simulated) app</strong>{" "}
        that helps people learn how the stock market works &mdash; without
        risking a single rupee of real money. Place virtual orders, manage a
        virtual portfolio, and watch your simulated P&amp;L respond to live
        market movements, all in a clean, modern Android app.
      </p>

      <section className="mt-10 grid gap-5 sm:grid-cols-2">
        <Card
          title="What it is"
          body="A safe sandbox to practise trading. Every order, every deposit, every position is simulated and lives only inside the app."
        />
        <Card
          title="What it isn't"
          body="A real broker. We are not SEBI-registered, do not route orders to any exchange, and do not hold or move real funds."
        />
        <Card
          title="Who it's for"
          body="Students, first-time investors, and anyone who wants to understand candlesticks, order types, and portfolio risk before putting real money on the line."
        />
        <Card
          title="What you'll learn"
          body="How to read indices, place buy/sell orders, manage positions, watch funds and ledgers, and follow the rhythm of live markets."
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Our mission
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
          Investing literacy in India is growing fast, but most people still
          take their first &ldquo;trade&rdquo; with real money. We think
          that&rsquo;s backwards. Nokia Securities exists to give every
          beginner a free, risk-free place to make their first hundred
          mistakes &mdash; so when they do open a real broking account, they
          already know how an order ticket works, what a stop-loss feels like,
          and why position sizing matters.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          What&rsquo;s inside the app
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-text-secondary">
          <li>Live indices &amp; equity tracker for major Indian markets</li>
          <li>Simulated buy/sell order tickets with quantity presets</li>
          <li>Interactive candlestick &amp; line charts</li>
          <li>Virtual funds, positions, orders, and downloadable ledger</li>
          <li>Watchlist and per-instrument detail screens</li>
          <li>
            Profile, KYC-style document upload, and admin-approved access
            (still all inside the simulator)
          </li>
        </ul>
      </section>

      <section className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-relaxed text-amber-900">
        <strong className="block text-base">A clear reminder</strong>
        <p className="mt-2">
          Anything you see in the app &mdash; balances, profits, losses,
          quotes, and &ldquo;recommendations&rdquo; &mdash; is part of a
          simulation for learning. None of it is investment advice. Read our{" "}
          <Link href="/disclaimer" className="underline underline-offset-4">
            disclaimer
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="underline underline-offset-4">
            terms
          </Link>{" "}
          for the full picture.
        </p>
      </section>

      <section className="mt-12 rounded-2xl border border-border bg-card/50 p-6">
        <h2 className="text-xl font-bold text-foreground">Get in touch</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
          Questions, feedback, or partnership ideas? Email{" "}
          <a
            href="mailto:support@nokiasecurities.in"
            className="text-primary underline underline-offset-4"
          >
            support@nokiasecurities.in
          </a>
          {" "}or visit our{" "}
          <Link
            href="/contact"
            className="text-primary underline underline-offset-4"
          >
            contact page
          </Link>
          .
        </p>
      </section>
    </article>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {body}
      </p>
    </div>
  );
}
