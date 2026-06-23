import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer · Zerodha",
  description:
    "Important disclaimer — Zerodha is a paper trading (simulated) app, not a real broker.",
};

const LAST_UPDATED = "May 5, 2026";

export default function DisclaimerPage() {
  return (
    <article>
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Disclaimer
      </h1>
      <p className="mt-2 text-sm text-text-secondary">
        Last updated: {LAST_UPDATED}
      </p>

      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
        <strong className="block text-base">
          Zerodha is a paper trading (simulated) application.
        </strong>
        <p className="mt-2">
          It is intended for education and practice only. The app does{" "}
          <strong>not</strong> place real orders on any stock exchange, does{" "}
          <strong>not</strong> hold real funds, and does <strong>not</strong>{" "}
          provide investment advice.
        </p>
      </div>

      <Section title="1. What &ldquo;paper trading&rdquo; means">
        <p>
          Paper trading is a risk-free way to practise buying and selling
          financial instruments using <em>virtual</em> money. Inside Nokia
          Securities:
        </p>
        <ul>
          <li>
            All cash balances, deposits, withdrawals, and P&amp;L are{" "}
            <strong>simulated</strong>.
          </li>
          <li>
            All orders, positions, and holdings exist only inside the app
            &mdash; nothing is routed to a stock exchange or broker.
          </li>
          <li>
            Market data may be delayed, indicative, or illustrative. It is
            shown to make the simulator feel realistic; it is not a real-time
            quote feed for real trading.
          </li>
        </ul>
      </Section>

      <Section title="2. Not a broker, not investment advice">
        <ul>
          <li>
            Zerodha is <strong>not</strong> a SEBI-registered broker,
            sub-broker, depository participant, mutual-fund distributor,
            investment adviser, or research analyst.
          </li>
          <li>
            Nothing shown inside the app &mdash; including index values,
            sample portfolios, &ldquo;featured&rdquo; stocks, suggested
            quantities, or simulated returns &mdash; is a recommendation to
            buy, sell, or hold any real security.
          </li>
          <li>
            Any decision you make in the real markets based on what you learn
            in the simulator is your own. Always consult a SEBI-registered
            adviser before investing real money.
          </li>
        </ul>
      </Section>

      <Section title="3. No guarantee of accuracy">
        <p>
          We make reasonable efforts to keep the simulator working, but we do
          not guarantee that:
        </p>
        <ul>
          <li>
            Market prices in the app match real-world prices at any moment.
          </li>
          <li>The app will be available without interruption.</li>
          <li>Simulated results would be achievable in real markets.</li>
        </ul>
      </Section>

      <Section title="4. Past performance is not future returns">
        <p>
          Even when shown in real instruments, historical and simulated
          performance does not predict future returns. Real markets are
          volatile and you can lose real money if you trade them with real
          funds.
        </p>
      </Section>

      <Section title="5. Risks of misuse">
        <p>
          Do not use the Zerodha simulator to mislead anyone into
          believing real trades or real money are involved. Doing so violates
          our{" "}
          <a href="/terms">Terms &amp; Conditions</a> and may also violate
          local laws.
        </p>
      </Section>

      <Section title="6. Contact">
        <p>
          If anything in the app is unclear, or you suspect content is being
          misrepresented as real trading, write to{" "}
          <a href="mailto:support@zerodha-pulse.in">
            support@zerodha-pulse.in
          </a>
          .
        </p>
      </Section>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-text-secondary [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_em]:italic [&_strong]:text-foreground [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
