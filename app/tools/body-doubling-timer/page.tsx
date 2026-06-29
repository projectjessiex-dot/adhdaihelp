import type { Metadata } from "next";
import Link from "next/link";
import { PersonIcon, ClockIcon, HeartIcon, SparkleIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Body Doubling Timer for ADHD — Focus With a Virtual Presence",
  description:
    "Body doubling is one of the most effective ADHD strategies. Use this free timer to simulate that accountability presence and finally start the tasks you've been avoiding.",
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
        text: "Body doubling is a productivity strategy where a person with ADHD works alongside another person — not for help, just for presence. The 'body double' doesn't need to do the same task or even interact. Simply having another person in the room (or on a video call) creates enough ambient accountability for the ADHD brain to stay on task. It's one of the most consistently reported strategies among adults with ADHD.",
      },
    },
    {
      "@type": "Question",
      name: "Why does body doubling help ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ADHD is partly a disorder of self-regulation — the brain struggles to generate internal motivation without external stimulation. Another person's presence activates the brain's social awareness systems, creating low-level accountability that provides the neurological push ADHD brains need. Some researchers link this to mirror neuron activation and the way social presence raises dopamine availability in the prefrontal cortex. It works even through screens, which explains the popularity of virtual co-working sessions.",
      },
    },
    {
      "@type": "Question",
      name: "Can a timer replace body doubling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A timer can't fully replicate the social element of body doubling, but it provides a complementary mechanism: external time structure. The countdown creates artificial urgency — the same neurological lever that body doubling pulls via social accountability. Many people with ADHD find that combining both strategies (using a timer during a virtual co-working session) produces better results than either alone. If a body double isn't available, a focused timer with a specific task name is the next best option.",
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
    title: "Simulates accountability",
    desc: "Naming your task and starting a timer creates a contract with yourself — the same mechanism that makes body doubling work.",
  },
  {
    icon: <ClockIcon size={22} color="var(--sage-dark)" />,
    title: "Creates external structure",
    desc: "ADHD brains can't self-generate time pressure. A visible countdown does it externally — no social anxiety required.",
  },
  {
    icon: <HeartIcon size={22} color="var(--sage-dark)" />,
    title: "Reduces isolation",
    desc: "Pair this timer with a virtual co-working session for the full body doubling effect — presence + structure combined.",
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
            Body Doubling Timer
          </h1>
          <p
            className="text-lg leading-relaxed mb-8 max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Body doubling is one of the most effective ADHD strategies — and you don&apos;t always need
            another person. A focused timer with a named task creates the same{" "}
            <strong style={{ color: "var(--text-primary)" }}>external accountability structure</strong>{" "}
            your brain needs to start.
          </p>
          <Link
            href="/tools/focus-timer/"
            className="inline-block font-bold px-8 py-4 rounded-full text-white text-base transition-opacity hover:opacity-90"
            style={{ background: "var(--sage)" }}
          >
            Start Body Doubling Session →
          </Link>
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

      {/* CTA */}
      <section className="py-14 px-4 text-center" style={{ background: "var(--sage-50)" }}>
        <div className="max-w-xl mx-auto">
          <SparkleIcon size={36} color="var(--sage)" className="mx-auto mb-4" />
          <h2
            className="text-2xl font-extrabold mb-3"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
          >
            You don&apos;t need to wait for a body double.
          </h2>
          <p className="mb-7" style={{ color: "var(--text-secondary)" }}>
            Name your task. Set 10 minutes. The timer holds the space for you.
          </p>
          <Link
            href="/tools/focus-timer/"
            className="inline-block font-bold px-8 py-4 rounded-full text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--sage-dark)" }}
          >
            Start Timer — Free →
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
