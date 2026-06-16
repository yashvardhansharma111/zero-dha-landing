import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions · Nokia Securities",
  description:
    "Terms & Conditions for Nokia Securities — a paper trading (simulated) app.",
};

const LAST_UPDATED = "May 5, 2026";

export default function TermsPage() {
  return (
    <article>
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Terms &amp; Conditions
      </h1>
      <p className="mt-2 text-sm text-text-secondary">
        Last updated: {LAST_UPDATED}
      </p>

      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
        <strong>Important: </strong>Nokia Securities is a{" "}
        <strong>paper trading (simulated) application</strong>. It does not
        place real trades, hold real funds, or execute orders on any stock
        exchange. All money, prices, and orders inside the app are virtual and
        for educational purposes only.
      </div>

      <Section title="1. Acceptance of terms">
        <p>
          By downloading, installing, or using the Nokia Securities mobile
          application or the website at{" "}
          <a href="https://app.zero-dha1.in">https://app.zero-dha1.in</a>{" "}
          (the &ldquo;Service&rdquo;), you agree to be bound by these Terms
          &amp; Conditions. If you do not agree, do not use the Service.
        </p>
      </Section>

      <Section title="2. Nature of the Service">
        <ul>
          <li>
            The Service is a <strong>simulator</strong>. Any &ldquo;buy,&rdquo;
            &ldquo;sell,&rdquo; &ldquo;deposit,&rdquo; or
            &ldquo;withdrawal&rdquo; inside the app is a virtual transaction
            recorded against a virtual ledger.
          </li>
          <li>
            We are <strong>not a SEBI-registered broker</strong>, sub-broker,
            depository participant, investment adviser, or research analyst.
          </li>
          <li>
            Nothing in the Service constitutes investment advice, a
            recommendation, or a solicitation to buy or sell any real
            security.
          </li>
          <li>
            Market data shown in the app may be delayed, indicative, or
            illustrative and should not be relied on for real trading
            decisions.
          </li>
        </ul>
      </Section>

      <Section title="3. Eligibility">
        <p>
          You must be at least 18 years old to create an account. By creating
          an account you confirm that the information you provide is accurate
          and that you are using the Service for lawful, personal,
          educational use.
        </p>
      </Section>

      <Section title="4. Your account">
        <ul>
          <li>
            You are responsible for keeping your login credentials confidential
            and for all activity under your account.
          </li>
          <li>
            Notify us immediately at{" "}
            <a href="mailto:support@nokiasecurities.in">
              support@nokiasecurities.in
            </a>{" "}
            if you suspect unauthorised access.
          </li>
          <li>
            We may suspend or terminate accounts that violate these Terms or
            misuse the Service.
          </li>
        </ul>
      </Section>

      <Section title="5. Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>
            Use the Service to deceive any other person into believing real
            trades or real money are involved.
          </li>
          <li>Reverse engineer, scrape, or attempt to disrupt the Service.</li>
          <li>
            Upload content that is unlawful, infringing, or that contains
            malware.
          </li>
          <li>
            Attempt to extract market data from the Service for commercial
            redistribution.
          </li>
        </ul>
      </Section>

      <Section title="6. Intellectual property">
        <p>
          The Service, its branding, design, and software are owned by Nokia
          Securities or its licensors. You receive a limited, revocable,
          non-transferable licence to use the Service for personal,
          non-commercial purposes only.
        </p>
      </Section>

      <Section title="7. Disclaimers">
        <ul>
          <li>
            The Service is provided <strong>&ldquo;as is&rdquo;</strong>
            without warranties of any kind, express or implied.
          </li>
          <li>
            We do not guarantee uninterrupted availability, accuracy of market
            data, or that the simulated experience matches real markets.
          </li>
          <li>
            Past simulated performance is not indicative of any real future
            result.
          </li>
        </ul>
      </Section>

      <Section title="8. Limitation of liability">
        <p>
          To the maximum extent permitted by law, Nokia Securities and its
          team will not be liable for any indirect, incidental, special, or
          consequential damages arising from your use of the Service. Because
          the Service is a simulator, no real financial loss can occur within
          the app itself; you are solely responsible for any decisions you
          make outside the app based on what you learn inside it.
        </p>
      </Section>

      <Section title="9. Termination">
        <p>
          You may stop using the Service and request account deletion at any
          time by emailing{" "}
          <a href="mailto:support@nokiasecurities.in">
            support@nokiasecurities.in
          </a>
          . We may terminate or suspend your access if you violate these
          Terms.
        </p>
      </Section>

      <Section title="10. Changes">
        <p>
          We may update these Terms from time to time. Continued use of the
          Service after changes are posted constitutes your acceptance of the
          updated Terms.
        </p>
      </Section>

      <Section title="11. Governing law">
        <p>
          These Terms are governed by the laws of India. Any dispute will be
          subject to the exclusive jurisdiction of the courts in India.
        </p>
      </Section>

      <Section title="12. Contact">
        <p>
          Questions about these Terms? Email{" "}
          <a href="mailto:support@nokiasecurities.in">
            support@nokiasecurities.in
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
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-text-secondary [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-foreground [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
