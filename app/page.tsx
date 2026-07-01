import type { Metadata } from "next";
import Link from "next/link";
import TestsSelector from "@/components/TestsSelector";

export const metadata: Metadata = {
  title: "ADHD Clarity — Free ADHD Tests, Guides & Tools",
  description:
    "Do you think you might have ADHD? Take a free, research-based screener, read expert guides, and discover practical tools — for adults, parents, and educators.",
};

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

const tools = [
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
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
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

      {/* ── Recognition — "Does this sound familiar?" ────────── */}
      <section className="px-4 py-20" style={{ background: "var(--surface-dark)" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4 text-center"
            style={{ color: "var(--sage)" }}
          >
            You&apos;re not alone
          </p>
          <h2
            className="text-3xl md:text-4xl text-center mb-12"
            style={{
              color: "var(--on-dark)",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Does any of this sound familiar?
          </h2>

          <div className="grid md:grid-cols-2 gap-3 mb-14">
            {[
              "You opened 8 tabs to get something done — and closed them all without finishing any.",
              "You told yourself you'd start at 2pm. Then 2:15. Then \"okay, 3 o'clock for real this time.\"",
              "You've read the same paragraph four times and still have no idea what it said.",
              "You work three times harder than everyone else, just to keep up.",
              "People call you lazy — but you know exactly how much effort every single day takes.",
              "You have a brilliant idea, dive in with full energy — then abandon it when the excitement fades.",
              "You're always running late, always forgetting something, always just barely holding it together.",
              "You feel like everyone else got a manual for life that you never received.",
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-xl"
                style={{ background: "var(--surface-dark-elevated)" }}
              >
                <span className="text-base mt-0.5 flex-shrink-0" style={{ color: "var(--sage)" }}>◦</span>
                <p className="text-sm leading-relaxed" style={{ color: "var(--on-dark-soft)" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p
              className="text-xl md:text-2xl mb-8 max-w-xl mx-auto leading-snug"
              style={{
                color: "var(--on-dark)",
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              If you nodded at any of these —<br />
              you&apos;re not broken. You&apos;re not lazy.<br />
              You might just have ADHD.
            </p>
            <Link
              href="/tests/adult-adhd-test/"
              className="inline-block font-semibold px-8 py-4 rounded-lg text-sm transition-opacity hover:opacity-90"
              style={{ background: "var(--sage)", color: "#fff" }}
            >
              Find out in 3 minutes →
            </Link>
            <p className="text-xs mt-3" style={{ color: "var(--on-dark-soft)" }}>
              Free · No account · Based on clinical research
            </p>
          </div>
        </div>
      </section>

      {/* ── Tests — two-step selector ─────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Which one sounds like you?
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Research-based. Takes 3–5 minutes. No account required.
          </p>
        </div>
        <TestsSelector />
      </section>

      {/* ── Facts — with emotional framing ───────────────────── */}
      <section className="py-16 px-4" style={{ background: "var(--surface-dark)" }}>
        <div className="max-w-4xl mx-auto">
          <p
            className="text-center text-base mb-12 max-w-xl mx-auto"
            style={{
              color: "var(--on-dark-soft)",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontStyle: "italic",
            }}
          >
            You may have spent years looking for answers. These numbers show why it takes so long — and why it matters.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
                <div className="text-sm leading-snug" style={{ color: "var(--on-dark-soft)" }}>
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Learn ─────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Finally, words that explain it
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

      {/* ── ADHD Coach spotlight ──────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <Link
          href="/tools/adhd-coach/"
          className="group flex flex-col md:flex-row items-center gap-8 rounded-2xl p-8 md:p-10 transition-opacity hover:opacity-95"
          style={{ background: "var(--surface-dark)" }}
        >
          <div className="flex-1 text-left">
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "var(--sage)" }}
            >
              Most popular tool
            </span>
            <h2
              className="text-2xl md:text-3xl mb-3"
              style={{
                color: "var(--on-dark)",
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 400,
                letterSpacing: "-0.02em",
              }}
            >
              Talk to an ADHD Coach — right now
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--on-dark-soft)" }}>
              Describe what you&apos;re struggling with today. Get a personalised response that
              actually understands how the ADHD brain works — not generic advice.
            </p>
            <span
              className="inline-block font-semibold px-6 py-3 rounded-lg text-sm transition-opacity group-hover:opacity-90"
              style={{ background: "var(--sage)", color: "#fff" }}
            >
              Start a conversation →
            </span>
          </div>
          <div
            className="hidden md:flex items-center justify-center rounded-xl w-28 h-28 text-5xl flex-shrink-0"
            style={{ background: "var(--surface-dark-elevated)" }}
          >
            💬
          </div>
        </Link>
      </section>

      {/* ── Tools ─────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Built for how your brain actually works
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            No login. No cost. Use them right now.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group card-hover rounded-2xl border p-5 flex flex-col transition-all"
              style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}
            >
              <span className="text-2xl mb-3 block">{tool.icon}</span>
              <h3 className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                {tool.title}
              </h3>
              <p className="text-xs leading-relaxed mb-3 flex-1" style={{ color: "var(--text-muted)" }}>
                {tool.desc}
              </p>
              <span
                className="text-xs font-bold group-hover:translate-x-1 transition-transform inline-block"
                style={{ color: "var(--sage-dark)" }}
              >
                {tool.cta} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Testimonial ───────────────────────────────────────── */}
      <section className="px-4 py-16" style={{ background: "var(--warm-card)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-10"
            style={{ color: "var(--sage)" }}
          >
            Real people, real answers
          </p>
          <blockquote>
            <p
              className="text-xl md:text-2xl leading-relaxed mb-6"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              &ldquo;I&apos;ve known something was different about me my whole life.
              Taking this test was the first time I felt like someone
              finally got it.&rdquo;
            </p>
            <footer className="text-sm" style={{ color: "var(--text-muted)" }}>
              — Sarah, 34 · Diagnosed at 32
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── CTA callout ───────────────────────────────────────── */}
      <section className="px-4 py-6">
        <div
          className="max-w-5xl mx-auto rounded-2xl px-8 py-14 text-center"
          style={{ background: "var(--sage)" }}
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}
          >
            Free Download
          </span>
          <h2
            className="text-3xl md:text-4xl mb-4 text-white"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
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
