import type { Metadata } from "next";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";

export const metadata: Metadata = {
  title: "ADHDClarity — Free Tools for ADHD Brains",
  description:
    "Free, simple tools to help you start tasks, find focus, clear your head, and make today feel more manageable. Built for the way ADHD brains actually work.",
};

const focusTools = [
  {
    href: "/tools/focus-timer/",
    icon: "focus-timer" as const,
    title: "Focus Timer",
    desc: "Designed to reduce distractions and make starting easier — one block of time at a time.",
    cta: "Start focusing",
  },
  {
    href: "/tools/adhd-pomodoro-timer/",
    icon: "pomodoro" as const,
    title: "Pomodoro Timer",
    desc: "Work in short bursts with built-in breaks and room for variety.",
    cta: "Try Pomodoro",
  },
  {
    href: "/tools/10-minute-adhd-timer/",
    icon: "ten-minute" as const,
    title: "10-Minute Starter",
    desc: "Can't begin? Just 10 minutes. That's the whole deal.",
    cta: "Start 10 min",
  },
  {
    href: "/tools/body-doubling-timer/",
    icon: "body-doubling" as const,
    title: "Body Doubling",
    desc: "Work alongside a virtual presence. Sometimes that's all you need.",
    cta: "Work together",
  },
];

const organizeTools = [
  {
    href: "/tools/brain-dump/",
    icon: "brain-dump" as const,
    title: "Brain Dump",
    desc: "Get everything out of your head and onto the page. No structure needed.",
    cta: "Dump it out",
  },
];

const articles = [
  {
    href: "/learn/executive-dysfunction/",
    tag: "Start here",
    title: "Why Starting Tasks Can Feel So Hard",
    desc: "Executive dysfunction can make starting feel impossible — even for things you want to do. Here's what's going on and what actually helps.",
  },
  {
    href: "/learn/time-blindness/",
    tag: "Most read",
    title: "A Gentle Guide to Time Blindness",
    desc: "When time feels slippery — why it happens, and small things that can make the day feel more manageable.",
  },
  {
    href: "/learn/mind-feels-too-full/",
    tag: "Practical",
    title: "What to Do When Your Mind Feels Too Full",
    desc: "Racing thoughts, too many tabs open in your brain. A short guide to getting unstuck when everything feels overwhelming.",
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
            Free · No Sign-Up · Use It Right Now
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
            Your Brain Works Differently.{" "}
            <br className="hidden md:block" />
            Your Tools Should Too.
          </h1>

          <p
            className="text-lg leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Free, simple tools to help you start tasks, find focus, clear your head,
            and make today feel{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              a little more manageable.
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tools/focus-timer/"
              className="font-semibold px-7 py-3.5 rounded-lg text-white text-sm transition-opacity hover:opacity-90"
              style={{ background: "var(--sage)" }}
            >
              Try the Focus Timer →
            </Link>
            <Link
              href="/tools/brain-dump/"
              className="font-semibold px-7 py-3.5 rounded-lg text-sm border transition-colors"
              style={{
                color: "var(--text-primary)",
                borderColor: "var(--warm-border)",
                background: "var(--warm-card)",
              }}
            >
              Clear My Head First
            </Link>
          </div>
        </div>
      </section>

      {/* ── "Stuck right now?" strip ─────────────────────────── */}
      <section className="px-4 py-6" style={{ background: "var(--surface-dark)" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <p
            className="text-sm font-medium"
            style={{ color: "var(--on-dark)" }}
          >
            Stuck right now?
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: "Can't start", href: "/tools/10-minute-adhd-timer/" },
              { label: "Mind racing", href: "/tools/brain-dump/" },
              { label: "Need to focus", href: "/tools/focus-timer/" },
              { label: "Need structure", href: "/tools/adhd-pomodoro-timer/" },
              { label: "Need company", href: "/tools/body-doubling-timer/" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-semibold px-4 py-2 rounded-full border transition-opacity hover:opacity-80"
                style={{
                  borderColor: "rgba(160,157,150,0.3)",
                  color: "var(--on-dark)",
                  background: "var(--surface-dark-elevated)",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Focus Tools ───────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="mb-8">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-1"
            style={{ color: "var(--sage)" }}
          >
            Focus
          </p>
          <h2
            className="text-2xl md:text-3xl"
            style={{ color: "var(--text-primary)" }}
          >
            When you need to actually sit down and do the thing
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {focusTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group card-hover rounded-2xl border p-4 md:p-5 flex flex-col transition-all"
              style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}
            >
              <div className="mb-3">
                <ToolIcon name={tool.icon} theme="focus" />
              </div>
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

      {/* ── Organize Tools ────────────────────────────────────── */}
      <section className="px-4 pb-16" style={{ background: "var(--surface-dark)" }}>
        <div className="max-w-5xl mx-auto py-16">
          <div className="mb-8">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-1"
              style={{ color: "var(--sage)" }}
            >
              Organize
            </p>
            <h2
              className="text-2xl md:text-3xl"
              style={{ color: "var(--on-dark)" }}
            >
              When your head is too full to think straight
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {organizeTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group card-hover rounded-2xl border p-4 md:p-6 flex flex-col transition-all"
                style={{
                  background: "var(--surface-dark-elevated)",
                  borderColor: "rgba(160,157,150,0.15)",
                }}
              >
                <div className="mb-3">
                  <ToolIcon name={tool.icon} theme="organize" />
                </div>
                <h3 className="text-sm font-bold mb-1" style={{ color: "var(--on-dark)" }}>
                  {tool.title}
                </h3>
                <p className="text-xs leading-relaxed mb-3 flex-1" style={{ color: "var(--on-dark-soft)" }}>
                  {tool.desc}
                </p>
                <span
                  className="text-xs font-bold group-hover:translate-x-1 transition-transform inline-block"
                  style={{ color: "var(--sage)" }}
                >
                  {tool.cta} →
                </span>
              </Link>
            ))}

            {/* Coming soon */}
            <div
              className="rounded-2xl border p-4 md:p-6 flex flex-col"
              style={{
                background: "var(--surface-dark-elevated)",
                borderColor: "rgba(160,157,150,0.15)",
                opacity: 0.55,
              }}
            >
              <div className="mb-3">
                <ToolIcon name="task-splitter" theme="organize" />
              </div>
              <h3 className="text-sm font-bold mb-1" style={{ color: "var(--on-dark)" }}>
                Task Splitter
              </h3>
              <p className="text-xs leading-relaxed mb-3 flex-1" style={{ color: "var(--on-dark)" }}>
                Break any task into tiny, actually-doable steps.
              </p>
              <span className="text-xs font-semibold" style={{ color: "var(--on-dark-soft)" }}>
                Coming soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Learn ─────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-1"
            style={{ color: "var(--sage)" }}
          >
            Learn
          </p>
          <h2
            className="text-2xl md:text-3xl mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Short reads that actually explain things
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            No jargon. No judgment. Written for real people, not clinicians.
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
                Read →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="px-4 py-6">
        <div
          className="max-w-5xl mx-auto rounded-2xl px-8 py-14 text-center"
          style={{ background: "var(--sage)" }}
        >
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
            16 practical habits for morning, focus time, and evening — each one with the <em>why</em> behind it.
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
              Plus: get weekly tips and new tools delivered to your inbox.
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
