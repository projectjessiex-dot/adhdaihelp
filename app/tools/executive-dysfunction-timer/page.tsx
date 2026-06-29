import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpCircleIcon, ClockIcon, LightbulbIcon, SparkleIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Executive Dysfunction Timer — Break Task Paralysis in 10 Minutes",
  description:
    "Can't start tasks no matter how hard you try? Executive dysfunction makes starting neurologically difficult. This timer is designed to lower the barrier. Free, no sign-up.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is executive dysfunction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Executive dysfunction refers to difficulty with the brain's self-management system — specifically task initiation, planning, prioritization, working memory, and impulse control. In ADHD, these functions are impaired at a neurological level, not a motivational one. This is why people with ADHD can want to start a task intensely but still be unable to begin. It's not laziness — it's a failure of the brain's initiation circuitry.",
      },
    },
    {
      "@type": "Question",
      name: "How does a timer help with executive dysfunction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Task initiation failure in ADHD is driven by a dopamine deficit — the brain doesn't produce the signal to begin unless there's sufficient urgency or novelty. A countdown timer creates artificial urgency: you can see time moving, which activates the brain's threat-response system and produces the push needed to start. A short, visible deadline (10 minutes) is more effective than an open-ended block of time, which creates no urgency and thus no initiation signal.",
      },
    },
    {
      "@type": "Question",
      name: "Why can I sometimes focus for hours but can't start simple tasks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is one of the most confusing and painful aspects of ADHD executive dysfunction. When a task is novel, urgent, interesting, or emotionally charged, the ADHD brain produces enough dopamine to engage fully — sometimes for hours (hyperfocus). But routine, low-interest tasks don't trigger that dopamine surge, even when they're important. The result: capable people paralyzed by simple tasks, performing brilliantly on complex ones under pressure. This inconsistency is neurological, not a character flaw.",
      },
    },
    {
      "@type": "Question",
      name: "What is the smallest step to break executive dysfunction paralysis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The smallest effective step is usually a micro-commitment: 'I will work on this for just 2 minutes' or 'I will open the document.' Starting disrupts the neural inertia that executive dysfunction creates. Once begun, the brain's dopamine system often kicks in, making continuation easier than initiation. Tools that help you name one tiny task and start a short timer are specifically designed for this — lowering the activation energy required to begin.",
      },
    },
  ],
};

const reasons = [
  {
    icon: <ArrowUpCircleIcon size={22} color="var(--sage-dark)" />,
    title: "Defeats initiation paralysis",
    desc: "Naming one small task and pressing start bypasses the planning loop that keeps ADHD brains stuck for hours.",
  },
  {
    icon: <ClockIcon size={22} color="var(--sage-dark)" />,
    title: "Creates urgency from nothing",
    desc: "A visible countdown produces the time pressure ADHD brains need to fire the \"start\" signal — no deadline required.",
  },
  {
    icon: <LightbulbIcon size={22} color="var(--sage-dark)" />,
    title: "Shrinks the task to fit",
    desc: "\"10 minutes on this\" replaces the overwhelming original task. Small enough to start, long enough to matter.",
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
            Free Tool · No Sign-Up
          </span>
          <h1
            className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            Executive Dysfunction Timer
          </h1>
          <p
            className="text-lg leading-relaxed mb-8 max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            You&apos;re not lazy. Executive dysfunction makes starting{" "}
            <strong style={{ color: "var(--text-primary)" }}>neurologically difficult</strong>,
            not a character flaw. This timer is built to lower the barrier — one tiny task, 10 minutes.
          </p>
          <Link
            href="/tools/focus-timer/"
            className="inline-block font-bold px-8 py-4 rounded-full text-white text-base transition-opacity hover:opacity-90"
            style={{ background: "var(--sage)" }}
          >
            Break the Paralysis →
          </Link>
        </div>
      </section>

      {/* Why it works */}
      <section className="max-w-2xl mx-auto px-4 py-14">
        <h2
          className="text-xl font-extrabold mb-6 text-center"
          style={{ color: "var(--text-primary)" }}
        >
          Designed for the hardest part: starting
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
          Why executive dysfunction isn&apos;t a motivation problem
        </h2>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Executive dysfunction — particularly task initiation failure — is the core experience of ADHD
          that most people can&apos;t understand from the outside. Someone with ADHD can be fully aware
          of what they need to do, care deeply about doing it, and still spend hours unable to begin.
          This isn&apos;t avoidance. It&apos;s a neurological failure of the brain&apos;s starting circuit.
        </p>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          The ADHD brain relies heavily on dopamine to activate for non-urgent, non-novel tasks.
          Without sufficient dopamine, the prefrontal cortex can&apos;t generate the signal to initiate.
          External tools — visible timers, deadlines, accountability — create the artificial urgency that
          compensates for this deficit. A countdown timer is one of the simplest and most effective
          external activators available.
        </p>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          This timer also includes a feature specifically for executive dysfunction: if you can&apos;t
          identify which task to start, you can dump your overwhelming thoughts and let AI find
          your one smallest next step. No planning required — just start.
        </p>

        {/* Inline callout */}
        <div
          className="rounded-2xl p-6 border"
          style={{ background: "var(--sage-50)", borderColor: "var(--sage-100)" }}
        >
          <p className="font-semibold mb-1" style={{ color: "var(--sage-dark)" }}>
            The two-minute start rule
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Tell yourself you only have to work for two minutes. That&apos;s all.
            Once you&apos;ve started, the brain&apos;s resistance usually drops — and the 10-minute
            timer carries you the rest of the way. The hardest part is the first 30 seconds.
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
            You don&apos;t have to figure it all out first.
          </h2>
          <p className="mb-7" style={{ color: "var(--text-secondary)" }}>
            Pick one thing — or let AI pick it for you. Then start 10 minutes.
          </p>
          <Link
            href="/tools/focus-timer/"
            className="inline-block font-bold px-8 py-4 rounded-full text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--sage-dark)" }}
          >
            Open the Timer — Free →
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
