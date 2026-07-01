import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A Gentle Guide to Time Blindness",
  description:
    "When time feels slippery and deadlines sneak up on you — why it happens and practical things that can help.",
};

export default function TimeBlinднess() {
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
          Most read
        </span>

        <h1
          className="text-3xl md:text-4xl leading-tight mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          A Gentle Guide to Time Blindness
        </h1>

        <p className="text-base mb-12" style={{ color: "var(--text-muted)" }}>
          5 min read
        </p>

        <div
          className="prose-content space-y-6 text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          <p>
            You set an alarm for 2pm. You glance at the clock — it says 4:47. You genuinely have
            no idea where the afternoon went. This isn't carelessness. It's time blindness: a
            difficulty sensing time as it passes, rather than just forgetting to check the clock.
          </p>

          <h2
            className="text-xl mt-10 mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            What it actually feels like
          </h2>
          <p>
            For many people, time exists in two categories: <strong>now</strong> and{" "}
            <strong>not now</strong>. Something happening in ten minutes and something happening
            next week can feel equally abstract — equally "not yet." This makes planning hard,
            transitions hard, and deadlines feel like they appear out of nowhere.
          </p>
          <p>
            It's also why it's so easy to get absorbed in one thing and lose an entire hour.
            Not because you chose to ignore the time, but because the internal signal that says
            "time is moving" wasn't firing.
          </p>

          <h2
            className="text-xl mt-10 mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Why time can feel slippery
          </h2>
          <p>
            Some brains struggle with what's called "temporal awareness" — the background sense
            of time ticking by. When that sense is quieter than usual, time becomes invisible.
            You might know intellectually that an hour has passed, but you didn't{" "}
            <em>feel</em> it passing. Executive function — the part of the brain that manages
            planning and task-switching — can make this harder to compensate for.
          </p>
          <p>
            This isn't something you can just "try harder" at. But it is something you can
            work with.
          </p>

          <h2
            className="text-xl mt-10 mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Things that can actually help
          </h2>

          <div
            className="rounded-2xl p-5 space-y-4"
            style={{ background: "var(--warm-card)", border: "1px solid var(--warm-border)" }}
          >
            {[
              {
                title: "Make time visible",
                body: "A clock you have to look at isn't enough. An analog timer on your desk — something that shows time shrinking visually — turns an invisible concept into something your eyes can track.",
              },
              {
                title: "Use time anchors",
                body: "Pair tasks to events rather than times. \"I'll start after I finish my coffee\" often works better than \"I'll start at 10am\", because events are concrete and times are abstract.",
              },
              {
                title: "Give yourself a transition buffer",
                body: "If something starts at 3pm, put a reminder at 2:40 that says \"leave for the thing.\" Most time-related stress comes from the transitions, not the events themselves.",
              },
              {
                title: "Try a body doubling session",
                body: "Working near another person — even virtually — can create an external time structure your brain can borrow. Many people find their sense of time improves significantly when someone else is present.",
              },
              {
                title: "Use short timers as reality checks",
                body: "Set a 10-minute timer not to get something done, but just to see how 10 minutes actually feels. Calibrating your time sense takes practice — timers are the practice.",
              },
            ].map((item) => (
              <div key={item.title}>
                <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                  {item.title}
                </p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <h2
            className="text-xl mt-10 mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            One small thing to try right now
          </h2>
          <p>
            Set a timer for 10 minutes. Don't try to get anything done — just notice when it
            goes off. Was it shorter than you expected? Longer? That small check-in is the
            beginning of building a better relationship with time.
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
              Use our timers to start building a sense of how time actually moves.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/10-minute-adhd-timer/"
                className="text-sm font-semibold px-5 py-2.5 rounded-lg text-white transition-opacity hover:opacity-90"
                style={{ background: "var(--sage)" }}
              >
                10-Minute Timer →
              </Link>
              <Link
                href="/tools/body-doubling-timer/"
                className="text-sm font-semibold px-5 py-2.5 rounded-lg border transition-colors"
                style={{
                  color: "var(--on-dark)",
                  borderColor: "rgba(160,157,150,0.3)",
                  background: "var(--surface-dark-elevated)",
                }}
              >
                Body Doubling Timer
              </Link>
            </div>
          </div>

          <p className="text-xs mt-10" style={{ color: "var(--text-muted)" }}>
            This article is for general information only and is not medical advice.
            If time blindness is significantly affecting your daily life, speaking with
            a healthcare professional can help.
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
