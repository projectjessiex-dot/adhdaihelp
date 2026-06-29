import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ADHD Clarity — Free ADHD Tests, Guides & Tools",
  description:
    "Do you think you might have ADHD? Take a free, research-based screener, read expert guides, and discover practical tools — for adults, parents, and educators.",
};

const tests = [
  {
    href: "/tests/adult-adhd-test/",
    label: "For Adults",
    title: "Adult ADHD Self-Test",
    question: "Could I have ADHD?",
    desc: "Based on the clinically validated ASRS screener.",
    time: "3 min",
  },
  {
    href: "/tests/child-adhd-test/",
    label: "For Parents",
    title: "Child ADHD Screener",
    question: "Is my child showing signs of ADHD?",
    desc: "Based on DSM-5 criteria.",
    time: "4 min",
  },
  {
    href: "/tests/adhd-type-quiz/",
    label: "For Everyone",
    title: "ADHD Type Quiz",
    question: "Inattentive, hyperactive, or combined?",
    desc: "Find out which ADHD profile fits you.",
    time: "5 min",
  },
];

const articles = [
  {
    href: "/learn/adhd-in-women/",
    tag: "Most Read",
    title: "ADHD in Women: Why It Goes Undiagnosed for Decades",
    desc: "Women with ADHD are often diagnosed late — or never. Learn how female ADHD looks different and what to do about it.",
  },
  {
    href: "/learn/adhd-vs-anxiety/",
    tag: "Popular",
    title: "ADHD vs Anxiety: How to Tell the Difference",
    desc: "The symptoms overlap — but the cause and treatment are different. Here's how to tell them apart.",
  },
  {
    href: "/learn/executive-dysfunction/",
    tag: "Must Read",
    title: "What Is Executive Dysfunction? The Core of ADHD",
    desc: "It's not laziness. Executive dysfunction explains why starting, prioritizing, and stopping tasks feels impossible.",
  },
];

const facts = [
  { stat: "1 in 9", label: "children in the US have ADHD" },
  { stat: "75%", label: "of adults with ADHD go undiagnosed" },
  { stat: "50–75%", label: "of ADHD in girls goes unrecognized" },
  { stat: "3×", label: "more likely to also have anxiety" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-4 pt-20 pb-24 text-center" style={{ background: "var(--warm-bg)" }}>
        <div className="max-w-2xl mx-auto">
          <span
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6"
            style={{ background: "var(--sage-100)", color: "var(--sage-dark)" }}
          >
            Free · Research-Based · No Sign-Up
          </span>

          <h1
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-5"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            You&apos;re Not Lazy.<br className="hidden md:block" /> You Might Have ADHD.
          </h1>

          <p
            className="text-lg leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Free ADHD screeners, symptom guides, and practical tools — for adults,
            parents, and anyone ready to{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              understand what&apos;s really going on.
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tests/adult-adhd-test/"
              className="font-bold px-7 py-4 rounded-full text-white text-base transition-opacity hover:opacity-90 shadow-sm"
              style={{ background: "var(--sage)" }}
            >
              Take the Adult ADHD Test →
            </Link>
            <Link
              href="/tests/child-adhd-test/"
              className="font-bold px-7 py-4 rounded-full text-base border-2 transition-colors"
              style={{
                color: "var(--sage-dark)",
                borderColor: "var(--sage-light)",
                background: "transparent",
              }}
            >
              Test for My Child
            </Link>
          </div>

          <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
            Not a diagnostic tool · Always consult a qualified healthcare professional
          </p>
        </div>
      </section>

      {/* Tests */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Free ADHD Screeners
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Research-based. Takes 3–5 minutes. No account required.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {tests.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group card-hover rounded-2xl border transition-all overflow-hidden flex flex-col"
              style={{
                background: "var(--warm-card)",
                borderColor: "var(--warm-border)",
              }}
            >
              <div style={{ background: "var(--sage)", height: "3px" }} />
              <div className="p-6 flex flex-col flex-1">
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "var(--sage)" }}
                >
                  {t.label}
                </span>
                <h3
                  className="text-lg font-bold mt-1 mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {t.title}
                </h3>
                <p
                  className="text-base font-semibold mb-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {t.question}
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                  {t.desc}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {t.time}
                  </span>
                  <span
                    className="font-bold text-sm group-hover:translate-x-1 transition-transform inline-block"
                    style={{ color: "var(--sage-dark)" }}
                  >
                    Start →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Facts */}
      <section className="py-14 px-4" style={{ background: "var(--sage)" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {facts.map((f) => (
            <div key={f.stat}>
              <div className="text-3xl font-extrabold text-white mb-1">{f.stat}</div>
              <div className="text-sm" style={{ color: "var(--sage-100)" }}>{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Learn */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Understand ADHD
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Research-backed guides written for real people, not clinicians.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {articles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group card-hover rounded-2xl border p-6 transition-all"
              style={{
                background: "var(--warm-card)",
                borderColor: "var(--warm-border)",
              }}
            >
              <span
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                style={{ background: "var(--sage-50)", color: "var(--sage-dark)" }}
              >
                {a.tag}
              </span>
              <h3
                className="text-base font-bold mb-2 leading-snug"
                style={{ color: "var(--text-primary)" }}
              >
                {a.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {a.desc}
              </p>
              <div
                className="mt-4 font-bold text-sm group-hover:translate-x-1 transition-transform inline-block"
                style={{ color: "var(--sage-dark)" }}
              >
                Read more →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brain Dump teaser */}
      <section className="py-16 px-4" style={{ background: "var(--sage-50)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-4xl mb-5 block">🌿</span>
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Too Many Things on Your Mind?
          </h2>
          <p className="leading-relaxed mb-7 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
            The ADHD brain doesn&apos;t do well with mental clutter.
            Try our free Brain Dump tool — clear your head in seconds.
            No judgment. No structure required.
          </p>
          <Link
            href="/tools/brain-dump/"
            className="inline-block font-bold px-7 py-4 rounded-full text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--sage-dark)" }}
          >
            Try Brain Dump — Free →
          </Link>
        </div>
      </section>

      {/* Newsletter + Lead Magnet */}
      <section className="max-w-xl mx-auto px-4 py-16 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
          style={{ background: "var(--sage-100)", color: "var(--sage-dark)" }}>
          Free Download
        </span>
        <h2
          className="text-2xl md:text-3xl font-extrabold mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Get the Free ADHD Daily Focus Checklist
        </h2>
        <p className="mb-5 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          16 research-backed habits for morning, focus time, and evening — each one with the <em>why</em> behind it.
          Built for how the ADHD brain actually works.
        </p>
        <Link
          href="/resources/adhd-focus-checklist/"
          className="inline-block font-bold px-7 py-4 rounded-full text-white mb-6 transition-opacity hover:opacity-90"
          style={{ background: "var(--sage)" }}
        >
          View the Free Checklist →
        </Link>
        <div className="border-t pt-6" style={{ borderColor: "var(--warm-border)" }}>
          <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
            Plus: get weekly ADHD tips and new tools delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 rounded-full px-5 py-3.5 text-sm outline-none border"
              style={{
                background: "var(--warm-card)",
                borderColor: "var(--warm-border)",
                color: "var(--text-primary)",
              }}
            />
            <button
              type="submit"
              className="font-bold px-6 py-3.5 rounded-full text-white whitespace-nowrap transition-opacity hover:opacity-90"
              style={{ background: "var(--sage-dark)" }}
            >
              Subscribe →
            </button>
          </form>
          <p className="text-xs mt-3" style={{ color: "var(--text-muted)" }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
}
