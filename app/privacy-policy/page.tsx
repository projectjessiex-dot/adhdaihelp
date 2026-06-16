import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for ADHDClarity — how we collect, use, and protect your information.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ background: "var(--warm-bg)" }}>
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-extrabold mb-2" style={{ color: "var(--text-primary)" }}>
          Privacy Policy
        </h1>
        <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
          Last updated: June 2026
        </p>

        {[
          {
            title: "Overview",
            body: "ADHDClarity (\"we\", \"us\", or \"our\") operates the website adhdaihelp.com. This privacy policy explains how we collect, use, and protect information when you visit our site. We are committed to protecting your privacy and handling your data with transparency.",
          },
          {
            title: "Information We Collect",
            body: `We do not collect personally identifiable information directly. Our website uses Google Analytics to collect anonymous usage data, including:

• Pages visited and time spent on each page
• Browser type and device type
• General geographic location (country/city level)
• How you arrived at our site (search engine, direct, etc.)

All quiz and test responses are processed entirely in your browser. We do not store, transmit, or have access to your test answers or results. No data from our interactive tools is ever sent to our servers.`,
          },
          {
            title: "Cookies",
            body: "We use cookies through Google Analytics to understand how visitors use our site. These cookies collect anonymous, aggregated data only. You can disable cookies in your browser settings at any time. Our interactive tools (tests, quizzes, Brain Dump) do not use cookies.",
          },
          {
            title: "Google Analytics",
            body: "We use Google Analytics (GA4) to understand site traffic and improve our content. Google Analytics collects anonymous usage data and may use cookies. Google's privacy policy applies to data processed by Google Analytics. You can opt out of Google Analytics tracking using the Google Analytics Opt-out Browser Add-on.",
          },
          {
            title: "Advertising",
            body: "We may display advertisements through Google AdSense. Google AdSense uses cookies to serve ads based on prior visits to our website and other sites on the Internet. You may opt out of personalized advertising by visiting Google's Ads Settings.",
          },
          {
            title: "Third-Party Links",
            body: "Our site contains links to third-party websites (such as healthcare provider directories or research publications). We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policy of every website you visit.",
          },
          {
            title: "Medical Disclaimer",
            body: "ADHDClarity provides general health information for educational purposes only. Nothing on this site constitutes medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before making health decisions. Our tests and quizzes are screening tools only — they are not diagnostic instruments.",
          },
          {
            title: "Children's Privacy",
            body: "Our site is intended for adults and parents. We do not knowingly collect personal information from children under 13. The Child ADHD Screener is designed to be completed by a parent or guardian, not by the child.",
          },
          {
            title: "Your Rights",
            body: "Depending on your location, you may have rights under applicable privacy laws (such as GDPR or CCPA), including the right to access, correct, or delete personal data we hold about you. Since we collect only anonymous analytics data, we typically hold no personal data about individual visitors.",
          },
          {
            title: "Changes to This Policy",
            body: "We may update this privacy policy from time to time. Changes will be reflected by updating the \"Last updated\" date at the top of this page. We encourage you to review this policy periodically.",
          },
          {
            title: "Contact",
            body: "If you have questions about this privacy policy, please contact us at: contact@adhdaihelp.com",
          },
        ].map((section) => (
          <div key={section.title} className="mb-8">
            <h2 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)", borderLeft: "3px solid var(--sage)", paddingLeft: "0.75rem" }}>
              {section.title}
            </h2>
            <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--text-secondary)" }}>
              {section.body}
            </p>
          </div>
        ))}

        <div className="mt-12 pt-6 border-t" style={{ borderColor: "var(--warm-border)" }}>
          <Link href="/" className="text-sm font-semibold hover:underline" style={{ color: "var(--sage-dark)" }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
