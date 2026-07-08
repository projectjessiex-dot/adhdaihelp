import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What to Do When Your Mind Feels Too Full",
  description:
    "Racing thoughts, too many open loops. A short, practical guide to getting unstuck when everything feels overwhelming.",
  alternates: {
    canonical: "https://adhdaihelp.com/learn/mind-feels-too-full/",
  },
};

export default function MindFeelsTooFull() {
  return (
    <div className="min-h-screen" style={{ background: "var(--warm-bg)" }}>
      <div className="max-w-2xl mx-auto px-4 py-16">

        <Link
          href="/learn/"
          className="text-xs font-semibold uppercase tracking-wider mb-8 inline-block hover:underline"
          style={{ color: "var(--sage)" }}
        >
          ← Learn
        </Link>

        <span
          className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-5"
          style={{ background: "var(--sage-50)", color: "var(--sage-dark)" }}
        >
          Practical
        </span>

        <h1
          className="text-3xl md:text-4xl leading-tight mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          What to Do When Your Mind Feels Too Full
        </h1>

        <p className="text-base mb-12" style={{ color: "var(--text-muted)" }}>
          4 min read
        </p>

        <div
          className="space-y-6 text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          <p>
            You sit down to work. You know there are things you need to do. But when you try to
            start, everything rushes in at once — the email you forgot to reply to, the thing
            you promised someone, the deadline you haven't thought through yet, the task you
            don't know how to begin. And suddenly, none of it moves.
          </p>
          <p>
            This is what it's like when your mental RAM is full. It's not a lack of effort.
            It's overload.
          </p>

          <h2
            className="text-xl mt-10 mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Why this happens
          </h2>
          <p>
            Working memory — the short-term mental workspace where you hold and juggle
            information — can fill up fast. When there are too many open loops (things
            you're tracking but haven't acted on), your brain keeps interrupting itself
            to remind you about them. The more loops, the harder it is to focus on any one
            thing. And the harder it is to focus, the more anxious the loops feel.
          </p>
          <p>
            The good news: you don't have to solve everything. You just have to get it out
            of your head.
          </p>

          <h2
            className="text-xl mt-10 mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            The brain dump: the fastest way to feel lighter
          </h2>
          <p>
            A brain dump means writing down everything that's taking up space in your head —
            tasks, worries, ideas, things you don't want to forget, things you feel bad about
            not doing. No structure. No priority. Just get it out.
          </p>
          <p>
            This works because your brain treats an unwritten thought like an open tab.
            Writing it down tells your brain it doesn't need to hold onto it anymore.
            It's been captured. You can breathe.
          </p>

          <div
            className="rounded-2xl p-5"
            style={{ background: "var(--warm-card)", border: "1px solid var(--warm-border)" }}
          >
            <p className="font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
              How to do it in 5 minutes
            </p>
            <ol className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>1. Open a blank page — or our Brain Dump tool below.</li>
              <li>2. Set a 5-minute timer.</li>
              <li>3. Write everything in your head. Nothing is too small or too silly.</li>
              <li>4. Don't organize. Don't prioritize. Just keep writing until the timer goes off.</li>
              <li>5. Read it back. Pick <em>one</em> thing to do next.</li>
            </ol>
          </div>

          <h2
            className="text-xl mt-10 mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            After the brain dump: choosing one thing
          </h2>
          <p>
            The goal isn't to work through the entire list. It's to get your brain to stop
            cycling through everything at once. Once the list is written, the pressure drops
            enough to pick one thing — usually the smallest, most obvious next action.
          </p>
          <p>
            If you're still stuck after the dump, try asking: <em>What's the one thing I'd
            feel slightly better about if I did it today?</em> Not the most important thing.
            Just one thing that would move.
          </p>

          <h2
            className="text-xl mt-10 mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            When overwhelm keeps coming back
          </h2>
          <p>
            For some people, mental overload is a daily experience rather than an occasional one.
            If that resonates, it might be worth exploring whether there's an underlying
            pattern — like carrying more tasks in your head than most people do, or struggling
            to let go of unfinished loops. Speaking with a therapist or coach familiar with
            executive function can help you find approaches that fit how your mind works.
          </p>

          <div
            className="rounded-2xl p-6 mt-10"
            style={{ background: "var(--surface-dark)" }}
          >
            <p
              className="text-sm font-semibold mb-1"
              style={{ color: "var(--sage)" }}
            >
              Try it now
            </p>
            <p className="text-sm mb-4" style={{ color: "var(--on-dark-soft)" }}>
              Get everything out of your head — no structure required.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/brain-dump/"
                className="text-sm font-semibold px-5 py-2.5 rounded-lg text-white transition-opacity hover:opacity-90"
                style={{ background: "var(--sage)" }}
              >
                Open Brain Dump →
              </Link>
              <Link
                href="/tools/focus-timer/"
                className="text-sm font-semibold px-5 py-2.5 rounded-lg border transition-colors"
                style={{
                  color: "var(--on-dark)",
                  borderColor: "rgba(160,157,150,0.3)",
                  background: "var(--surface-dark-elevated)",
                }}
              >
                Start a Focus Timer
              </Link>
            </div>
          </div>

          <p className="text-xs mt-10" style={{ color: "var(--text-muted)" }}>
            This article is for general information only and is not medical advice.
            If feelings of overwhelm are persistent or affecting your wellbeing,
            please reach out to a healthcare professional.
          </p>
        </div>

        <div className="mt-12 pt-6 border-t" style={{ borderColor: "var(--warm-border)" }}>
          <Link href="/" className="text-sm font-semibold hover:underline" style={{ color: "var(--sage-dark)" }}>
            ← Back to tools
          </Link>
        </div>
      </div>
    </div>
  );
}
