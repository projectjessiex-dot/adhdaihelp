import type { Metadata } from "next";
import Link from "next/link";
import { PersonIcon, ClockIcon, HeartIcon, SparkleIcon } from "@/components/Icons";
import BodyDoublingTimer from "./BodyDoublingTimer";

export const metadata: Metadata = {
  title: "Virtual Co-working Session — Work Alongside a Virtual Partner",
  description:
    "A free virtual co-working session. Name your task, set your time, and work alongside a virtual partner. Includes a mid-session check-in and a gentle reflection at the end.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is body doubling for ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Body doubling is a focus strategy where you work alongside another person — not for help, just for presence. The other person doesn't need to do the same task or even interact. Many people find that having someone nearby makes it easier to start and stay on a task.",
      },
    },
    {
      "@type": "Question",
      name: "Why does body doubling help ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many people find it easier to focus when someone else is present — even quietly. The awareness that another person is nearby can make it easier to stay on task. Virtual co-working sessions work on the same principle: the shared commitment to showing up creates a gentle external structure.",
      },
    },
    {
      "@type": "Question",
      name: "Can a timer replace body doubling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A timer can't replicate the social element of working with another person, but it adds useful structure: a visible countdown, a named task, and a clear end point. Many people find that combining a timer with a co-working session — virtual or in person — works better than either alone. If no one is available, a timer with a specific task name is a reasonable starting point.",
      },
    },
    {
      "@type": "Question",
      name: "How long should a body doubling session be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most body doubling sessions run 25–90 minutes, but for ADHD specifically, starting with a 10–15 minute anchor session is more effective than committing to a long block. The first few minutes are the hardest — once started, the session often extends naturally. Using a structured timer helps create clear start and end points, which reduces the cognitive overhead of managing an open-ended session.",
      },
    },
  ],
};

const reasons = [
  {
    icon: <PersonIcon size={22} color="var(--sage-dark)" />,
    title: "Adds external structure",
    desc: "Naming your task and committing to a time block gives you something concrete to return to when focus drifts.",
  },
  {
    icon: <ClockIcon size={22} color="var(--sage-dark)" />,
    title: "A visible countdown",
    desc: "A timer makes time concrete. It marks a clear start and end — reducing the open-ended feeling that makes starting hard.",
  },
  {
    icon: <HeartIcon size={22} color="var(--sage-dark)" />,
    title: "Built-in check-in",
    desc: "Halfway through, the session pauses for a quick check-in — helping you adjust if something isn't working.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen" style={{ background: "var(--warm-bg)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Timer — embedded directly */}
      <BodyDoublingTimer />

      {/* Brief intro */}
      <section className="px-4 py-10 text-center" style={{ background: "var(--sage-50)" }}>
        <div className="max-w-xl mx-auto">
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Body doubling — working alongside another person — is a strategy many people find helpful
            for getting started. This tool creates a virtual version: name your task, commit to a time,
            and work with a <strong style={{ color: "var(--text-primary)" }}>virtual presence</strong>{" "}
            holding the space with you.
          </p>
        </div>
      </section>

      {/* Why it works */}
      <section className="max-w-2xl mx-auto px-4 py-14">
        <h2
          className="text-xl font-extrabold mb-6 text-center"
          style={{ color: "var(--text-primary)" }}
        >
          How a timer supports body doubling
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
          Body doubling: why another person makes ADHD brains work
        </h2>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Body doubling has been used informally by people with ADHD for decades — sitting in a coffee
          shop, working alongside a friend, joining a virtual co-working session. What makes it work
          isn&apos;t collaboration or instruction. It&apos;s the low-level social pressure of being
          observed, which activates external motivation that ADHD brains cannot reliably generate alone.
        </p>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          When a body double isn&apos;t available, the next best option is to replicate the structure:
          name your task explicitly, set a defined time window, and make the countdown visible. This
          externalizes both the task commitment and the time pressure — the two elements that
          body doubling provides through social presence.
        </p>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          For best results, combine both: open a virtual co-working session (FocusMate, Study Hall on
          YouTube, or a simple video call with a friend) and run this timer alongside it. The overlap
          of social accountability and structured time is particularly effective for executive
          dysfunction and task initiation failure.
        </p>
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
