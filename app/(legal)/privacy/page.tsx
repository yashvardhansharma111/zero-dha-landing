import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy · Zerodha",
  description:
    "Privacy Policy for Zerodha — a paper trading (simulated) app.",
};

const LAST_UPDATED = "May 5, 2026";

export default function PrivacyPage() {
  return (
    <article className="prose-legal">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-text-secondary">
        Last updated: {LAST_UPDATED}
      </p>

      <Section title="1. Introduction">
        <p>
          Zerodha (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
          &ldquo;us&rdquo;) operates the Zerodha mobile application
          and the website at{" "}
          <a href="https://app.zerodha-pulse.in">https://app.zerodha-pulse.in</a>{" "}
          (collectively, the &ldquo;Service&rdquo;). The Service is a{" "}
          <strong>paper trading (simulated) application</strong> intended for
          education and practice. No real money is invested, deposited,
          withdrawn, or transferred through the Service.
        </p>
        <p>
          This Privacy Policy explains what information we collect, how we use
          it, and the choices you have. By using the Service you agree to the
          practices described here.
        </p>
      </Section>

      <Section title="2. Information we collect">
        <ul>
          <li>
            <strong>Account information:</strong> full name, email address,
            phone number, and a password you set during registration.
          </li>
          <li>
            <strong>KYC-style documents (optional):</strong> any signature or
            identity image you choose to upload during onboarding. These are
            used solely to confirm an account inside the simulator and are
            never shared with any real-world broker, exchange, or custodian.
          </li>
          <li>
            <strong>Simulated activity:</strong> orders, positions, watchlists,
            and the virtual ledger inside the app. All of this is simulated.
          </li>
          <li>
            <strong>Device &amp; usage data:</strong> basic technical
            information such as app version, OS version, and crash logs needed
            to keep the app working.
          </li>
        </ul>
      </Section>

      <Section title="3. What we do NOT collect">
        <ul>
          <li>
            We do <strong>not</strong> collect or store real bank account
            numbers, real card numbers, demat account numbers, or PAN beyond
            what you optionally type into the simulator&rsquo;s profile.
          </li>
          <li>
            We do <strong>not</strong> place real trades on any stock exchange.
          </li>
          <li>
            We do <strong>not</strong> sell your personal information to third
            parties.
          </li>
        </ul>
      </Section>

      <Section title="4. How we use your information">
        <ul>
          <li>To create, secure, and maintain your simulator account.</li>
          <li>
            To send you account-related emails (e.g., your simulator login
            credentials).
          </li>
          <li>
            To respond to your support requests sent to{" "}
            <a href="mailto:support@zerodha-pulse.in">
              support@zerodha-pulse.in
            </a>
            .
          </li>
          <li>
            To improve the app&rsquo;s reliability and detect abuse of the
            Service.
          </li>
        </ul>
      </Section>

      <Section title="5. How we store and protect your information">
        <p>
          Account data is stored in a managed database (MongoDB Atlas) with
          access restricted to authorised administrators. Passwords are hashed
          before being stored. We rely on industry-standard transport
          encryption (HTTPS) for data in transit. No method of transmission or
          storage is 100% secure, but we apply reasonable safeguards to
          protect your data.
        </p>
      </Section>

      <Section title="6. Third-party services">
        <p>
          We use the following third parties to operate the Service:
        </p>
        <ul>
          <li>
            <strong>MongoDB Atlas</strong> — managed database hosting.
          </li>
          <li>
            <strong>Gmail / SMTP</strong> — to send account credentials and
            support emails.
          </li>
          <li>
            <strong>UploadThing</strong> — to store optional document/image
            uploads from the simulator.
          </li>
          <li>
            <strong>Expo Application Services (EAS)</strong> — to build and
            distribute the Android APK.
          </li>
        </ul>
        <p>
          Each provider has its own privacy policy. We share only the minimum
          information required for the Service to function.
        </p>
      </Section>

      <Section title="7. Your rights">
        <p>You may request, at any time, that we:</p>
        <ul>
          <li>Provide a copy of the personal data we hold about you.</li>
          <li>Correct inaccurate personal data.</li>
          <li>Delete your account and associated data.</li>
        </ul>
        <p>
          To exercise any of these rights, email{" "}
          <a href="mailto:support@zerodha-pulse.in">
            support@zerodha-pulse.in
          </a>
          . We will respond within 30 days.
        </p>
      </Section>

      <Section title="8. Children">
        <p>
          The Service is not directed to children under 13. We do not
          knowingly collect personal data from children under 13. If you
          believe a child has provided us personal data, contact us so we can
          delete it.
        </p>
      </Section>

      <Section title="9. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. The
          &ldquo;Last updated&rdquo; date at the top of this page reflects the
          latest revision. Material changes will be highlighted in the app or
          on our website.
        </p>
      </Section>

      <Section title="10. Contact us">
        <p>
          For any privacy-related questions, contact us at{" "}
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
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-text-secondary [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-foreground [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
