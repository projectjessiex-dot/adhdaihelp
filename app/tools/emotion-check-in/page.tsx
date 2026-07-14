import type { Metadata } from "next";
import EmotionCheckIn from "./EmotionCheckIn";
import ShareButton from "@/components/ShareButton";
import ToolIcon from "@/components/ToolIcon";

export const metadata: Metadata = {
  title: "Emotion Check-In — Track Your Mood and Get Grounded",
  description:
    "A free emotion tracking tool for ADHD. Check in with how you're feeling, get personalized suggestions, and build emotional awareness. No sign-up, nothing saved.",
  alternates: {
    canonical: "https://adhdaihelp.com/tools/emotion-check-in/",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Emotion Check-In",
  url: "https://adhdaihelp.com/tools/emotion-check-in/",
  description:
    "A free private emotion tracking tool for ADHD. Check in with your mood and get personalized suggestions.",
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
      name: "Why does emotion regulation feel harder with ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ADHD affects the prefrontal cortex, which is responsible for emotional regulation. This means emotions can feel more intense and harder to manage. Additionally, rejection sensitivity (RSD) is common in ADHD, making emotional ups and downs more pronounced. The good news: awareness is the first step, and simple tools like mood tracking can help build emotional regulation skills.",
      },
    },
    {
      "@type": "Question",
      name: "How does checking in with my emotions actually help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Naming your emotion activates the prefrontal cortex and reduces its intensity — this is called 'affect labeling.' When you check in and say 'I'm feeling anxious,' you're already starting to regulate that emotion. Over time, regular check-ins build emotional awareness, making it easier to spot triggers and patterns.",
      },
    },
    {
      "@type": "Question",
      name: "Is my emotion data saved anywhere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This tool runs entirely in your browser. Nothing you enter is sent to a server, saved to a database, or stored anywhere. When you close the tab, it's gone. This is intentional — the goal is a private space to check in without feeling judged or tracked.",
      },
    },
    {
      "@type": "Question",
      name: "What's the 1-10 scale for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 1-10 scale helps you quantify your intensity. 1-3 is low intensity (calm, content), 4-6 is moderate, and 7-10 is high intensity. You don't need to be precise — the goal is simply to notice and name. Sometimes realizing you're at a 7 instead of a 10 is enough to feel slightly more in control.",
      },
    },
  ],
};

const relatedTools = [
  {
    href: "/tools/focus-timer/",
    icon: "focus-timer" as const,
    title: "Focus Timer",
    desc: "When you're ready to focus, a timer can help you start.",
  },
  {
    href: "/tools/brain-dump/",
    icon: "brain-dump" as const,
    title: "Brain Dump",
    desc: "Get everything out of your head when thoughts are racing.",
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

      <EmotionCheckIn />

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

import Link from "next/link";
