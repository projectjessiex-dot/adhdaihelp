import type { Metadata } from "next";
import Link from "next/link";
import { FlameIcon, ClockIcon, ZapIcon, SparkleIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "10 Minute ADHD Timer — The Easiest Way to Start Anything",
  description:
    "10 minutes is the sweet spot for ADHD brains: long enough to make real progress, short enough to actually start. Free timer, no sign-up, works instantly.",
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
        text: "Ten minutes hits a specific sweet spot for ADHD brains. It's short enough that the psychological cost of committing feels manageable — 'I can do anything for 10 minutes' bypasses the paralysis that blocks longer commitments. It's also long enough to produce real progress on most tasks. Research on activation energy and task initiation suggests that the size of the initial commitment is the primary predictor of whether someone starts — not the total time they'll spend. Ten minutes makes the commitment small enough to act on immediately.",
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
        text: "Yes — and significantly more useful than no minutes, which is the realistic alternative when task initiation fails. The 10-minute approach works because it reframes productivity away from 'hours of deep work' toward 'small consistent progress.' For ADHD brains, consistency of small sessions outperforms occasional marathon sessions because it avoids the boom-bust cycle of hyperfocus followed by exhaustion and avoidance. Daily 10-minute focused sessions compound into meaningful output over time.",
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
    desc: "\"Just 10 minutes\" removes the psychological cost that makes ADHD brains avoid starting altogether.",
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

export default function Page() {
  return (
    <div className="min-h-screen" style={{ background: "var(--warm-bg)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="px-4 pt-16 pb-14 text-center" style={{ background: "var(--sage-50)" }}>
        <div className="max-w-2xl mx-auto">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
            style={{ background: "var(--sage-100)", color: "var(--sage-dark)" }}
          >
            Free · No Sign-Up · Works Instantly
          </span>
          <h1
            className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            10 Minute ADHD Timer
          </h1>
          <p
            className="text-lg leading-relaxed mb-8 max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Ten minutes is short enough that your brain will actually start —
            and long enough to make{" "}
            <strong style={{ color: "var(--text-primary)" }}>real progress</strong>.
            No 25-minute commitments. No setup. Just one task and a countdown.
          </p>
          <Link
            href="/tools/focus-timer/"
            className="inline-block font-bold px-8 py-4 rounded-full text-white text-base transition-opacity hover:opacity-90"
            style={{ background: "var(--sage)" }}
          >
            Start 10-Minute Timer →
          </Link>
          <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
            Opens instantly · No account · Works on all devices
          </p>
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
          The science behind the 10-minute rule for ADHD
        </h2>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Task initiation in ADHD fails because the brain doesn&apos;t produce a strong enough
          activation signal for low-urgency tasks. The size of the commitment you make at the start
          is the biggest predictor of whether that signal fires. A 25-minute commitment has a high
          psychological cost — your brain weighs it, finds it overwhelming, and avoids it.
          A 10-minute commitment has a low enough cost that avoidance loses.
        </p>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Once you&apos;ve started, something interesting happens: the brain&apos;s resistance drops.
          The same task that felt impossible to begin often feels natural to continue once you&apos;re
          in it. This is why the 10-minute timer functions as a launchpad, not a limit. You&apos;re
          using a small commitment to get past the hardest part — the first 60 seconds.
        </p>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          The timer also addresses ADHD time blindness directly. Without a visible countdown,
          ADHD brains have no reliable internal sense of time passing. An hour disappears.
          The 10-minute ring timer makes time concrete and visible — when you can see it moving,
          you can work with it instead of losing it.
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
            The timer has a built-in &quot;I don&apos;t know where to start&quot; option.
            Type out everything swirling in your head — AI will extract one tiny, concrete next step.
            Then set 10 minutes and begin. Decision paralysis solved.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 text-center" style={{ background: "var(--sage-50)" }}>
        <div className="max-w-xl mx-auto">
          <SparkleIcon size={36} color="var(--sage)" className="mx-auto mb-4" />
          <h2
            className="text-2xl font-extrabold mb-3"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
          >
            Just 10 minutes. Right now.
          </h2>
          <p className="mb-7" style={{ color: "var(--text-secondary)" }}>
            You don&apos;t have to finish. You just have to start.
          </p>
          <Link
            href="/tools/focus-timer/"
            className="inline-block font-bold px-8 py-4 rounded-full text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--sage-dark)" }}
          >
            Start 10-Minute Timer — Free →
          </Link>
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
