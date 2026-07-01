import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for ADHDClarity — how we collect, use, and protect your information.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "Overview",
    body: `ADHDClarity ("we", "us", or "our") operates adhdaihelp.com. This policy explains what data we collect, who we share it with, and your rights.

We do not sell your personal data. We do not use your information for advertising targeting beyond what Google AdSense does on its own behalf (described below).`,
  },
  {
    title: "What We Collect and Why",
    body: `We collect data in three ways:

1. Automatically via analytics tools
We use Google Analytics 4 (GA4), Google AdSense, and Cloudflare Analytics. These tools collect:
• Pages visited, time on page, scroll depth, and click events
• Browser type, operating system, and device type
• IP-derived location (country and city level)
• Referral source (search engine, direct, social, etc.)
• Persistent identifiers via cookies and device fingerprints

This data helps us understand how people use the site and improve our content. Google Analytics and Cloudflare process this data on their own infrastructure under their respective privacy policies.

2. Via our email newsletter (if you subscribe)
If you enter your email address in our newsletter form, we collect your email address and send it to our email service provider (e.g., Mailchimp or similar). We use this solely to send you ADHD-related updates. You can unsubscribe at any time via the link in any email.

3. Via the ADHD Coach (if you use it)
The ADHD Coach is an AI-powered chat tool. Any message you type is transmitted over the internet to a third-party AI provider (currently DeepSeek) to generate a response. Your conversation is not permanently stored on our servers and is not used to train AI models. However, the AI provider may temporarily process and log requests in accordance with their own privacy policy.

⚠️ Please do not enter your real name, medical records, medication details, or any other sensitive personal or health information in the ADHD Coach. It is a support tool, not a medical service, and your messages leave your device.

Our self-assessment tests and quizzes are processed entirely in your browser. Your answers are never transmitted to our servers or any third party.`,
  },
  {
    title: "Cookies",
    body: `We use cookies for the following purposes:

• Google Analytics: Behavior tracking (pages visited, session duration, returning vs. new visitor). These cookies persist for up to 2 years.
• Google AdSense: Personalized or contextual advertising. Google may use your browsing history across other sites to serve relevant ads.
• Cloudflare: Network-level request logging for performance and security.

Our self-assessment tools and the Brain Dump tool do not use cookies. Data entered in those tools stays in your browser session only.

You can disable or delete cookies in your browser settings at any time. You can also opt out of Google's advertising cookies at adssettings.google.com.`,
  },
  {
    title: "Google Analytics",
    body: `We use Google Analytics 4 (GA4) to understand how visitors navigate our site. GA4 collects usage data including device identifiers and behavioral signals. While we configure GA4 with IP anonymization enabled, Google's own systems process this data under Google's Privacy Policy (policies.google.com/privacy).

"Anonymous" in this context means we cannot personally identify you — but Google processes the underlying data per their terms.

You can opt out of GA4 tracking globally using the Google Analytics Opt-out Browser Add-on (tools.google.com/dlpage/gaoptout).`,
  },
  {
    title: "Google AdSense",
    body: `We display advertisements served by Google AdSense. Google uses cookies and browsing history to serve ads that may be personalized based on your interests and prior website visits.

We do not control which ads are shown or the data Google collects for this purpose. Google's advertising data practices are governed by Google's Privacy Policy.

You can opt out of personalized ads at adssettings.google.com, or use the NAI opt-out tool at optout.networkadvertising.org.`,
  },
  {
    title: "ADHD Coach — AI Tool Disclosure",
    body: `The ADHD Coach sends each message you type to a third-party AI API (currently DeepSeek, based in China) to generate a response. This means:

• Your message text leaves your device and travels over the internet
• The AI provider processes your input on their servers
• We do not store conversation history after your session ends
• Your conversations are not used to train our models
• The AI provider's own privacy policy applies to how they handle requests

This tool is intended for general ADHD support and reflection — not for sharing sensitive personal, medical, or identifying information.`,
  },
  {
    title: "Third-Party Services Summary",
    body: `Service | Purpose | Data Shared
──────────────────────────────────────────
Google Analytics 4 | Site analytics | Usage behavior, device info
Google AdSense | Advertising | Browsing behavior, device info
Cloudflare Analytics | Performance & security | IP address, request logs
DeepSeek AI | ADHD Coach responses | Text messages you send
Email provider | Newsletter delivery | Email address (if subscribed)

Each third-party service operates under its own privacy policy. We encourage you to review them if you have concerns.`,
  },
  {
    title: "Data Retention",
    body: `• Google Analytics: Retention is set to 14 months in our GA4 configuration.
• Cloudflare logs: Retained per Cloudflare's standard policy (typically 30 days for free plans).
• Email address (newsletter): Retained until you unsubscribe.
• ADHD Coach conversations: Not stored on our end beyond the active session.
• Quiz and test answers: Never stored — processed locally in your browser only.`,
  },
  {
    title: "Children's Privacy",
    body: `Our site is designed for adults and parents of children with ADHD. We do not knowingly collect personal information from children under 13. The Child ADHD Screener is intended to be completed by a parent or guardian on behalf of their child — not by the child directly.

If you believe we have inadvertently collected information from a child under 13, please contact us so we can delete it.`,
  },
  {
    title: "Medical Disclaimer",
    body: `ADHDClarity provides general information for educational purposes only. Nothing on this site constitutes medical advice, diagnosis, or treatment. Our tests and quizzes are screening tools — they are not diagnostic instruments and cannot replace evaluation by a qualified healthcare professional. Always consult a licensed clinician before making decisions about your health or your child's health.`,
  },
  {
    title: "Your Rights",
    body: `Depending on your location, you may have rights under applicable privacy laws including GDPR (EU), CCPA (California), and others:

• Right to access: Know what personal data we hold about you
• Right to deletion: Request that we delete your data
• Right to correction: Request corrections to inaccurate data
• Right to opt out: Opt out of certain data processing (e.g., analytics, advertising)
• Right to portability: Receive your data in a portable format

To exercise these rights, email us at contact@adhdaihelp.com. For data held by third-party services (Google, Cloudflare, etc.), you will need to contact those services directly.

Note: Since our tests and quizzes process data only in your browser, we hold no personal data from those interactions.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this policy from time to time. Material changes will be reflected by updating the "Last updated" date below. We encourage you to review this page periodically.`,
  },
  {
    title: "Contact",
    body: `Questions about this privacy policy or your data?\n\nEmail: contact@adhdaihelp.com\n\nWe aim to respond within 5 business days.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ background: "var(--warm-bg)" }}>
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1
          className="text-3xl font-extrabold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
          Last updated: June 2026
        </p>

        {sections.map((section) => (
          <div key={section.title} className="mb-8">
            <h2
              className="text-lg font-bold mb-3"
              style={{
                color: "var(--text-primary)",
                borderLeft: "3px solid var(--sage)",
                paddingLeft: "0.75rem",
              }}
            >
              {section.title}
            </h2>
            <p
              className="text-sm leading-relaxed whitespace-pre-line"
              style={{ color: "var(--text-secondary)" }}
            >
              {section.body}
            </p>
          </div>
        ))}

        <div
          className="mt-12 pt-6 border-t"
          style={{ borderColor: "var(--warm-border)" }}
        >
          <Link
            href="/"
            className="text-sm font-semibold hover:underline"
            style={{ color: "var(--sage-dark)" }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
