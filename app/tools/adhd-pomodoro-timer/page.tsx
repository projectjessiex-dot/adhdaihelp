import type { Metadata } from "next";
import Link from "next/link";
import { ClockIcon, BrainIcon, FlameIcon, ZapIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "ADHD Pomodoro Timer — Why 25 Minutes Doesn't Work (And What Does)",
  description:
    "The traditional Pomodoro technique uses 25-minute sessions — too long for most ADHD brains. Try this ADHD-adapted version with 10-minute focus blocks. Free, no sign-up.",
  alternates: {
    canonical: "https://adhdaihelp.com/tools/adhd-pomodoro-timer/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Pomodoro technique for ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Pomodoro technique is a time-management method that breaks work into focused intervals separated by short breaks. The original format uses 25-minute work sessions followed by 5-minute breaks. For ADHD brains, 25 minutes is often too long — attention fragments before the session ends. An ADHD-adapted version uses 10-minute focus blocks, which lowers the activation threshold and makes it easier to start.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the 25-minute Pomodoro too long for ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ADHD affects the brain's ability to sustain voluntary attention over time. While hyperfocus is possible, it happens on the brain's terms — not on a 25-minute schedule. For many people with ADHD, committing to 25 uninterrupted minutes feels overwhelming enough to prevent starting at all. Research on ADHD and time perception shows that ADHD brains experience time differently (time blindness), making 25 minutes feel like an eternity mid-task. Shorter sessions of 10–15 minutes create a more manageable psychological commitment.",
      },
    },
    {
      "@type": "Question",
      name: "How many Pomodoros can someone with ADHD do in a day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This varies widely depending on medication, sleep, stress levels, and task type. For most adults with ADHD, 4–8 focused sessions per day (at 10–15 minutes each) is realistic. Quality matters more than quantity — one genuinely focused session is worth more than three sessions spent fighting distraction. The goal is consistent small progress, not marathon productivity.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Pomodoro technique actually help ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with modifications. Externalized time pressure — knowing the timer is counting down — helps ADHD brains activate in a way that 'just focus' cannot. The technique works because it creates artificial urgency, removes the need to track time internally, and makes 'done' feel achievable. The key modification for ADHD is reducing session length from 25 to 10 minutes, and removing the strict 4-session-before-long-break rule.",
      },
    },
  ],
};

const reasons = [
  {
    icon: <ZapIcon size={22} color="var(--sage-dark)" />,
    title: "Lowers the activation barrier",
    desc: "\"Just 10 minutes\" is psychologically easier to start than 25. ADHD brains need a smaller commitment to overcome task paralysis.",
  },
  {
    icon: <ClockIcon size={22} color="var(--sage-dark)" />,
    title: "Fights time blindness",
    desc: "A visible, ticking countdown creates external time pressure that ADHD brains can't generate internally. You stop losing hours to distraction.",
  },
  {
    icon: <BrainIcon size={22} color="var(--sage-dark)" />,
    title: "Matches attention span reality",
    desc: "Voluntary sustained attention in ADHD peaks early and drops fast. 10-minute blocks work with the brain's rhythm, not against it.",
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
            ADHD Pomodoro Timer
          </h1>
          <p
            className="text-lg leading-relaxed mb-8 max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            The classic Pomodoro uses 25-minute sessions. For ADHD brains, that&apos;s
            often too long to even start. This version defaults to{" "}
            <strong style={{ color: "var(--text-primary)" }}>10 minutes</strong> — low enough to overcome the paralysis.
          </p>
          <Link
            href="/tools/focus-timer/"
            className="inline-block font-bold px-8 py-4 rounded-full text-white text-base transition-opacity hover:opacity-90"
            style={{ background: "var(--sage)" }}
          >
            Open ADHD Pomodoro Timer →
          </Link>
        </div>
      </section>

      {/* Why it works */}
      <section className="max-w-2xl mx-auto px-4 py-14">
        <h2
          className="text-xl font-extrabold mb-6 text-center"
          style={{ color: "var(--text-primary)" }}
        >
          Why shorter sessions work better for ADHD
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border p-5"
              style={{
                background: "var(--warm-card)",
                borderColor: "var(--warm-border)",
              }}
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
          The problem with the traditional Pomodoro for ADHD
        </h2>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Francesco Cirillo&apos;s original Pomodoro Technique, developed in the late 1980s, prescribes
          25-minute work intervals. For neurotypical users, this creates a useful rhythm. For ADHD brains,
          the 25-minute commitment is often the exact barrier that prevents starting. The cognitive cost
          of committing to 25 minutes of focused work can feel insurmountable during a low-dopamine state.
        </p>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          The fix isn&apos;t willpower — it&apos;s redesigning the system. When the default is 10 minutes,
          the mental calculation changes: <em>&quot;I can do anything for 10 minutes.&quot;</em> Once
          started, ADHD brains often enter a flow state and extend naturally. The timer becomes a launchpad,
          not a cage.
        </p>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          This ADHD Pomodoro Timer also includes an &quot;I don&apos;t know where to start&quot; button
          — because task initiation failure, not lack of effort, is the most common ADHD barrier. Dump
          your overwhelmed thoughts, and AI helps you find one concrete next step.
        </p>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 text-center" style={{ background: "var(--sage-50)" }}>
        <div className="max-w-xl mx-auto">
          <FlameIcon size={36} color="var(--sage)" className="mx-auto mb-4" />
          <h2
            className="text-2xl font-extrabold mb-3"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
          >
            Ready to try 10 minutes?
          </h2>
          <p className="mb-7" style={{ color: "var(--text-secondary)" }}>
            Name one task. Pick your time. Start. That&apos;s it.
          </p>
          <Link
            href="/tools/focus-timer/"
            className="inline-block font-bold px-8 py-4 rounded-full text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--sage-dark)" }}
          >
            Start the Timer — Free →
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
              style={{
                background: "var(--warm-card)",
                borderColor: "var(--warm-border)",
              }}
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
