import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free ADHD Daily Focus Checklist",
  description:
    "A practical ADHD morning routine and daily focus checklist — designed for how the ADHD brain actually works. Free to use and print.",
};

const morning = [
  { item: "Set a timer before you start anything", why: "ADHD brains need external time anchors — the timer creates urgency without panic." },
  { item: "Write down your 3 Most Important Tasks (MITs) for the day", why: "More than 3 tasks overwhelms the ADHD working memory. Pick 3 and protect them." },
  { item: "Identify your ONE non-negotiable task", why: "If everything else falls apart, this one thing gets done. Make it specific and small." },
  { item: "Remove visible distractions before starting work", why: "ADHD attention is captured by novelty. Out of sight = out of working memory." },
  { item: "Drink a glass of water before coffee or medication", why: "Dehydration worsens executive function — especially for ADHD brains." },
  { item: "Decide when you'll take a movement break", why: "Schedule it in advance, not when you 'feel like it' — that moment never comes." },
];

const focus = [
  { item: "Use the 2-minute rule: if it takes under 2 minutes, do it now", why: "Small undone tasks pile up in your mental RAM and drain focus capacity." },
  { item: "Work in 25-minute sprints with 5-minute breaks (Pomodoro)", why: "Short, bounded windows reduce task initiation resistance significantly." },
  { item: "Keep a 'parking lot' notepad for intrusive thoughts", why: "Write the thought down, then return to work. Clears working memory without losing the idea." },
  { item: "Turn off all non-essential notifications during work blocks", why: "Every notification costs ~23 minutes of refocus time for ADHD brains." },
  { item: "Use body doubling when possible (work near another person)", why: "External presence activates focus circuits that ADHD brains struggle to self-activate." },
  { item: "If stuck, lower the bar: do 5 minutes of the task, then stop", why: "Task initiation is the hardest part. Starting almost always leads to continuing." },
];

const evening = [
  { item: "Write a 'Done List' of what you actually accomplished", why: "ADHD brains discount accomplishments and catastrophize undone tasks. Make it visible." },
  { item: "Set out your top MIT for tomorrow before you sleep", why: "Reduces morning decision fatigue — the hardest time for ADHD executive function." },
  { item: "Do a 2-minute tidy of your workspace", why: "Visual clutter is cognitive load. A clear space tomorrow = easier start." },
  { item: "Acknowledge one thing you did well today", why: "ADHD brains run on negative feedback loops. Actively interrupt them." },
];

export default function AdhdFocusChecklist() {
  return (
    <div className="min-h-screen" style={{ background: "var(--warm-bg)" }}>

      {/* Hero */}
      <div className="px-4 py-14 text-center" style={{ background: "var(--sage-50)" }}>
        <div className="max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            style={{ background: "var(--sage-100)", color: "var(--sage-dark)" }}>
            Free Resource
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
            ADHD Daily Focus Checklist
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Built for how the ADHD brain actually works — not how it&apos;s supposed to work.
            Each item includes the <em>why</em>, so you can adapt it to your life.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-xs" style={{ color: "var(--text-muted)" }}>
            <span>🖨️ Print-friendly</span>
            <span>🔒 No sign-up needed</span>
            <span>🧠 ADHD-specific</span>
          </div>
        </div>
      </div>

      <article className="max-w-2xl mx-auto px-4 py-12">

        {/* Morning */}
        <h2 className="text-xl md:text-2xl font-extrabold mb-2 mt-4" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
          Morning Routine
        </h2>
        <p className="text-sm mb-6 ml-4" style={{ color: "var(--text-muted)" }}>
          Do these before you open email, social media, or start any task.
        </p>
        <div className="space-y-3 mb-12">
          {morning.map((r, i) => (
            <div key={i} className="rounded-2xl p-5 border" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                  style={{ background: "var(--sage)" }}>{i + 1}</span>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{r.item}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    <strong>Why:</strong> {r.why}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Focus */}
        <h2 className="text-xl md:text-2xl font-extrabold mb-2" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
          During Work / Focus Time
        </h2>
        <p className="text-sm mb-6 ml-4" style={{ color: "var(--text-muted)" }}>
          Use these when you hit a wall or feel focus slipping.
        </p>
        <div className="space-y-3 mb-12">
          {focus.map((r, i) => (
            <div key={i} className="rounded-2xl p-5 border" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                  style={{ background: "var(--sage)" }}>{i + 1}</span>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{r.item}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    <strong>Why:</strong> {r.why}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Evening */}
        <h2 className="text-xl md:text-2xl font-extrabold mb-2" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
          Evening Wind-Down
        </h2>
        <p className="text-sm mb-6 ml-4" style={{ color: "var(--text-muted)" }}>
          5 minutes at the end of your day prevents tomorrow&apos;s morning chaos.
        </p>
        <div className="space-y-3 mb-12">
          {evening.map((r, i) => (
            <div key={i} className="rounded-2xl p-5 border" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                  style={{ background: "var(--sage)" }}>{i + 1}</span>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{r.item}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    <strong>Why:</strong> {r.why}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-7 mb-10 text-center" style={{ background: "var(--sage)" }}>
          <h3 className="text-lg font-extrabold text-white mb-2">Not sure if you have ADHD?</h3>
          <p className="text-sm mb-5" style={{ color: "var(--sage-100)" }}>
            Take our free Adult ADHD Screener — based on the clinically validated ASRS v1.1.
          </p>
          <Link href="/tests/adult-adhd-test/"
            className="inline-block font-bold px-6 py-3 rounded-full text-sm"
            style={{ background: "white", color: "var(--sage-dark)" }}>
            Take the Free ADHD Test →
          </Link>
        </div>

        {/* Related */}
        <div className="mt-10 pt-8" style={{ borderTop: "1px solid var(--warm-border)" }}>
          <p className="text-sm font-bold mb-4" style={{ color: "var(--text-muted)" }}>Related Articles</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/learn/executive-dysfunction/", label: "What Is Executive Dysfunction? →" },
              { href: "/tools/brain-dump/", label: "Try the Brain Dump Tool →" },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="block p-4 rounded-xl border text-sm font-semibold hover:opacity-80"
                style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--sage-dark)" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
