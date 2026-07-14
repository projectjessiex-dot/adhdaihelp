import type { Metadata } from "next";
import Link from "next/link";
import RoutineBuilder from "./RoutineBuilder";
import ShareButton from "@/components/ShareButton";
import ToolIcon from "@/components/ToolIcon";

export const metadata: Metadata = {
  title: "Routine Builder — Build Daily Habits That Actually Stick",
  description:
    "A free routine builder for ADHD. Create morning, focus, and evening routines that work with your brain. No sign-up, nothing saved.",
  alternates: {
    canonical: "https://adhdaihelp.com/tools/routine-builder/",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Routine Builder",
  url: "https://adhdaihelp.com/tools/routine-builder/",
  description:
    "A free tool to build ADHD-friendly daily routines. Create morning, focus, and evening rituals that work with your brain.",
  applicationCategory: "HealthApplication",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do routines feel harder with ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ADHD brains struggle with habit formation because the prefrontal cortex — responsible for planning and automation — works differently. What works for neurotypical brains often fails for ADHD. The key: keep routines simple, visual, and flexible. Small, consistent actions beat complex systems every time.",
      },
    },
    {
      "@type": "Question",
      name: "How many items should be in a routine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with 3-5 items maximum. ADHD brains get overwhelmed easily. A morning routine of 3 items you actually do is better than 10 items you abandon. You can always add more later.",
      },
    },
    {
      "@type": "Question",
      name: "Should I do my routine at the same time every day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Time-based triggers work for some, but event-based triggers work better for ADHD. Instead of 'at 7am,' try 'after I brush my teeth.' Events are more reliable than time for ADHD brains.",
      },
    },
    {
      "@type": "Question",
      name: "What if I miss a day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's normal. Don't try to 'make it up' — that leads to shame and abandonment. Just start again tomorrow. The goal is consistency over time, not perfection. Even 3 days a week is progress.",
      },
    },
  ],
};

const relatedTools = [
  {
    href: "/tools/10-minute-adhd-timer/",
    icon: "ten-minute" as const,
    title: "10-Minute Timer",
    desc: "Use timers to build routine consistency.",
  },
  {
    href: "/tools/focus-timer/",
    icon: "focus-timer" as const,
    title: "Focus Timer",
    desc: "Structure your focus time with built-in breaks.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen" style={{ background: "var(--warm-bg)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <div className="border-b" style={{ borderColor: "var(--warm-border)" }}>
        <div className="max-w-3xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: "var(--text-secondary)" }}
          >
            ← Back to all tools
          </Link>
        </div>
      </div>

      <RoutineBuilder />

      {/* Related Tools */}
      <section className="px-4 py-16" style={{ background: "var(--surface-dark)" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: "var(--on-dark-soft)" }}
          >
            Related Tools
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-2xl border p-5 flex flex-col transition-all"
                style={{
                  background: "var(--surface-dark-elevated)",
                  borderColor: "rgba(160,157,150,0.15)",
                }}
              >
                <div className="mb-3">
                  <ToolIcon name={tool.icon} theme="focus" />
                </div>
                <h3
                  className="text-sm font-bold mb-1"
                  style={{ color: "var(--on-dark)" }}
                >
                  {tool.title}
                </h3>
                <p
                  className="text-xs leading-relaxed flex-1"
                  style={{ color: "var(--on-dark-soft)" }}
                >
                  {tool.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2
          className="text-2xl font-bold mb-8"
          style={{ color: "var(--text-primary)" }}
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <div key={i} className="border-b pb-6" style={{ borderColor: "var(--warm-border)" }}>
              <h3
                className="text-base font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {faq.name}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {faq.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ShareButton label="Share this tool" />
    </main>
  );
}
