import type { Metadata } from "next";
import Link from "next/link";
import { FlameIcon, ClockIcon, ZapIcon } from "@/components/Icons";
import FocusTimer from "@/app/tools/focus-timer/FocusTimer";
import ShareButton from "@/components/ShareButton";
import ToolIcon from "@/components/ToolIcon";

export const metadata: Metadata = {
  title: "10 Minute ADHD Timer — The Easiest Way to Start Anything",
  description:
    "10 minutes is the sweet spot for getting started: short enough to actually commit, long enough to make real progress. Free timer, no sign-up, works instantly.",
  alternates: {
    canonical: "https://adhdaihelp.com/tools/10-minute-adhd-timer/",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "10 Minute ADHD Timer",
  url: "https://adhdaihelp.com/tools/10-minute-adhd-timer/",
  description:
    "A free 10-minute focus timer for ADHD. Name your task and start a countdown — no sign-up required.",
  applicationCategory: "ProductivityApplication",
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
      name: "Why is 10 minutes the right length for ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ten minutes hits a specific sweet spot. It's short enough that the psychological cost of committing feels manageable — 'I can do anything for 10 minutes' bypasses the resistance that blocks longer commitments. It's also long enough to produce real progress on most tasks. The size of the initial commitment is often the primary predictor of whether someone starts — not the total time they'll spend. Ten minutes makes the commitment small enough to act on immediately.",
      },
    },
    {
      "@type": "Question",
      name: "What can I actually accomplish in 10 minutes with ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "More than you'd expect. In 10 focused minutes: you can draft an email, clear a physical space, make a decision you've been avoiding, respond to messages, read and understand a key document, outline an article, or start a task that you've been putting off for days. The goal of a 10-minute session isn't to finish — it's to start and build momentum. Most people find that once started, they continue naturally beyond the 10 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Is 10 minutes of focus actually useful for ADHD productivity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and significantly more useful than no minutes, which is the realistic alternative when starting feels impossible. The 10-minute approach works because it reframes productivity away from 'hours of deep work' toward 'small consistent progress.' Daily 10-minute focused sessions can compound into meaningful output over time, and the approach avoids the boom-bust cycle of hyperfocus followed by exhaustion and avoidance.",
      },
    },
    {
      "@type": "Question",
      name: "What if 10 minutes isn't enough to finish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's fine — and often the point. Ten minutes is a launchpad, not a limit. Once you've started, you can extend naturally or run another session. The timer gives you permission to stop at 10 minutes without guilt, which paradoxically makes it easier to continue. Knowing you can stop reduces the resistance to starting. If you need more time, you can select 15 or 25 minutes from the timer options.",
      },
    },
  ],
};

const reasons = [
  {
    icon: <ZapIcon size={22} color="var(--sage-dark)" />,
    title: "Small enough to start now",
    desc: "\"Just 10 minutes\" removes the psychological cost that makes starting feel overwhelming.",
  },
  {
    icon: <FlameIcon size={22} color="var(--sage-dark)" />,
    title: "Builds momentum fast",
    desc: "Starting is the hardest part. After 10 minutes, most people naturally continue — the timer was just the launchpad.",
  },
  {
    icon: <ClockIcon size={22} color="var(--sage-dark)" />,
    title: "Fights time blindness",
    desc: "The countdown makes time visible and concrete — no more losing an hour without realizing it.",
  },
];

const relatedTools = [
  {
    href: "/tools/brain-dump/",
    icon: "brain-dump" as const,
    title: "Brain Dump",
    desc: "Clear the mental clutter before you start. Get everything out of your head and onto the page.",
  },
  {
    href: "/tools/body-doubling-timer/",
    icon: "body-doubling" as const,
    title: "Virtual Co-working Session",
    desc: "Work alongside a virtual partner. Commit to a task, check in at halfway, and reflect at the end.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen" style={{ background: "var(--warm-bg)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Timer — embedded directly */}
      <FocusTimer defaultMins={10} />

      {/* Brief intro */}
      <section className="px-4 py-10 text-center" style={{ background: "var(--sage-50)" }}>
        <div className="max-w-xl mx-auto space-y-4">
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            10 minutes is short enough that your brain will actually start —
            and long enough to make{" "}
            <strong style={{ color: "var(--text-primary)" }}>real progress</strong>.
            Name your task, press start, and let the countdown do the rest.
          </p>
          <ShareButton label="Share this timer" />
        </div>
      </section>

      {/* Why it works */}
      <section className="max-w-2xl mx-auto px-4 py-14">
        <h2
          className="text-xl font-extrabold mb-6 text-center"
          style={{ color: "var(--text-primary)" }}
        >
          Why 10 minutes works when nothing else does
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border p-5"
              style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}
            >
              <div className="mb-3">{r.icon}</div>
              <p className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                {r.title}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="max-w-2xl mx-auto px-4 pb-14 space-y-5">
        <h2
          className="text-xl font-extrabold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          The 10-minute rule: why a small commitment changes everything
        </h2>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Starting a task is often harder than doing it. The size of the commitment you make at the
          beginning is a bigger predictor of whether you begin than how difficult the task actually
          is. A 25-minute commitment has a high psychological cost — your brain weighs it, finds it
          overwhelming, and avoids it. A 10-minute commitment is low enough that avoidance loses.
        </p>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Once you&apos;ve started, something interesting happens: resistance drops. The same task
          that felt impossible to begin often feels natural to continue once you&apos;re in it. This
          is why the 10-minute timer functions as a launchpad, not a limit — you&apos;re using a
          small commitment to get past the hardest part: the first 60 seconds.
        </p>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          The timer also addresses time blindness directly. Without a visible countdown, an hour
          can disappear unnoticed. The 10-minute ring timer makes time concrete — when you can see
          it moving, you can work with it instead of losing it.
        </p>

        {/* What to do if stuck */}
        <div
          className="rounded-2xl p-6 border"
          style={{ background: "var(--sage-50)", borderColor: "var(--sage-100)" }}
        >
          <p className="font-semibold mb-1" style={{ color: "var(--sage-dark)" }}>
            Can&apos;t decide what to work on?
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Try a{" "}
            <Link
              href="/tools/brain-dump/"
              style={{ color: "var(--sage)", fontWeight: 600 }}
            >
              Brain Dump
            </Link>{" "}
            first. Get everything out of your head, pick one thing, and then come back to start
            your 10 minutes. Decision paralysis solved.
          </p>
        </div>
      </section>

      {/* Related tools */}
      <section className="max-w-2xl mx-auto px-4 pb-14">
        <h2
          className="text-lg font-extrabold mb-5"
          style={{ color: "var(--text-primary)" }}
        >
          Pair it with these tools
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {relatedTools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="flex items-start gap-4 rounded-2xl border p-5 card-hover"
              style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}
            >
              <ToolIcon name={t.icon} size={22} containerSize={44} />
              <div>
                <p className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                  {t.title}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {t.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 py-14">
        <h2
          className="text-xl font-extrabold mb-8"
          style={{ color: "var(--text-primary)" }}
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border p-6"
              style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}
            >
              <p className="font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                {item.name}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {item.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
