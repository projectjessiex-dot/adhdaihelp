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
  {
    href: "/tests/adhd-in-women-quiz/",
    label: "For Women",
    title: "ADHD in Women Quiz",
    question: "Does ADHD look different in you?",
    desc: "Women are diagnosed late or never — find out if this fits.",
    time: "4 min",
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
            className="text-4xl md:text-6xl leading-tight mb-5"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 400,
              letterSpacing: "-0.03em",
            }}
          >
            You&apos;re Not Lazy.<br className="hidden md:block" /> You Might Have ADHD.
          </h1>

          <p
            className="text-lg leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            You&apos;ve spent years wondering why your brain works differently.
            Start here — free screeners, honest guides, and practical tools
            built for the way{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              your mind actually works.
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tests/adult-adhd-test/"
              className="font-semibold px-7 py-3.5 rounded-lg text-white text-sm transition-opacity hover:opacity-90"
              style={{ background: "var(--sage)" }}
            >
              Take the Adult ADHD Test →
            </Link>
            <Link
              href="/tests/child-adhd-test/"
              className="font-semibold px-7 py-3.5 rounded-lg text-sm border transition-colors"
              style={{
                color: "var(--text-primary)",
                borderColor: "var(--warm-border)",
                background: "var(--warm-card)",
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
            className="text-3xl md:text-4xl mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Free ADHD Screeners
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Research-based. Takes 3–5 minutes. No account required.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
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

      {/* Facts — dark navy surface per Claude rhythm */}
      <section className="py-16 px-4" style={{ background: "var(--surface-dark)" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {facts.map((f) => (
            <div key={f.stat}>
              <div
                className="text-4xl mb-2"
                style={{
                  color: "var(--sage)",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontWeight: 400,
                }}
              >
                {f.stat}
              </div>
              <div className="text-sm leading-snug" style={{ color: "var(--on-dark-soft)" }}>{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Learn */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl mb-2"
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

      {/* Tools */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Free ADHD Tools
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Built for the ADHD brain. No login. No cost.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            {
              href: "/tools/adhd-coach/",
              icon: "🤖",
              title: "ADHD Coach",
              desc: "Get personalised strategies from an AI coach that understands ADHD.",
              cta: "Chat now",
            },
            {
              href: "/tools/brain-dump/",
              icon: "🌿",
              title: "Brain Dump",
              desc: "Clear mental clutter in seconds. No structure required.",
              cta: "Try it",
            },
            {
              href: "/tools/focus-timer/",
              icon: "⏱️",
              title: "Focus Timer",
              desc: "A distraction-free timer designed around how ADHD brains work.",
              cta: "Start focusing",
            },
            {
              href: "/tools/adhd-pomodoro-timer/",
              icon: "🍅",
              title: "Pomodoro Timer",
              desc: "Work in short bursts with built-in breaks — the ADHD-friendly way.",
              cta: "Start timer",
            },
            {
              href: "/tools/body-doubling-timer/",
              icon: "👥",
              title: "Body Doubling Timer",
              desc: "Work alongside a virtual partner to stay on task.",
              cta: "Get started",
            },
            {
              href: "/tools/10-minute-adhd-timer/",
              icon: "🔟",
              title: "10-Minute Timer",
              desc: "Just 10 minutes. Start anything — even when motivation is zero.",
              cta: "Go",
            },
          ].map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group card-hover rounded-2xl border p-6 flex flex-col transition-all"
              style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}
            >
              <span className="text-3xl mb-3 block">{tool.icon}</span>
              <h3
                className="text-base font-bold mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {tool.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-muted)" }}>
                {tool.desc}
              </p>
              <span
                className="text-sm font-bold group-hover:translate-x-1 transition-transform inline-block"
                style={{ color: "var(--sage-dark)" }}
              >
                {tool.cta} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA callout — coral full-bleed per Claude callout-card-coral */}
      <section className="px-4 py-6">
        <div
          className="max-w-5xl mx-auto rounded-2xl px-8 py-14 text-center"
          style={{ background: "var(--sage)" }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}>
            Free Download
          </span>
          <h2
            className="text-3xl md:text-4xl mb-4 text-white"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 400, letterSpacing: "-0.02em" }}
          >
            Get the Free ADHD Daily Focus Checklist
          </h2>
          <p className="mb-8 leading-relaxed max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
            16 research-backed habits for morning, focus time, and evening — each one with the <em>why</em> behind it.
          </p>
          <Link
            href="/resources/adhd-focus-checklist/"
            className="inline-block font-semibold px-7 py-3.5 rounded-lg text-sm mb-10 transition-opacity hover:opacity-90"
            style={{ background: "var(--warm-bg)", color: "var(--sage-dark)" }}
          >
            View the Free Checklist →
          </Link>
          <div className="border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.25)" }}>
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
              Plus: get weekly ADHD tips and new tools delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 rounded-lg px-5 py-3 text-sm outline-none border"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#fff",
                }}
              />
              <button
                type="submit"
                className="font-semibold px-6 py-3 rounded-lg text-sm whitespace-nowrap transition-opacity hover:opacity-90"
                style={{ background: "var(--sage-dark)", color: "#fff" }}
              >
                Subscribe →
              </button>
            </form>
            <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.55)" }}>
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
