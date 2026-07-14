import type { Metadata } from "next";
import Link from "next/link";
import BrainDump from "./BrainDump";
import ShareButton from "@/components/ShareButton";
import ToolIcon from "@/components/ToolIcon";

export const metadata: Metadata = {
  title: "Brain Dump — Clear Your Head and Find Your Next Step",
  description:
    "A free brain dump tool for when your head is too full to start. Type out everything swirling in your mind, then pick one thing. No sign-up, nothing saved.",
  alternates: {
    canonical: "https://adhdaihelp.com/tools/brain-dump/",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Brain Dump",
  url: "https://adhdaihelp.com/tools/brain-dump/",
  description:
    "A free private writing space to empty your mind when overwhelmed. Type everything out, then pick one next step.",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a brain dump and how does it help with ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A brain dump is the practice of writing down everything in your head — tasks, worries, half-formed ideas, things you're afraid you'll forget — without organizing or filtering. For people with ADHD, working memory is often unreliable, which means the brain keeps cycling through thoughts to avoid forgetting them. Getting those thoughts out of your head and onto a page (or screen) stops that cycle, reduces mental load, and makes it easier to focus on one thing at a time.",
      },
    },
    {
      "@type": "Question",
      name: "Why can't I just make a to-do list instead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A to-do list requires you to organize before you've unloaded, which adds friction when your head is already full. A brain dump comes first — it's unstructured on purpose. You write without judging, sorting, or prioritizing. Once everything is out, you can look at it and choose one next step. The brain dump removes the mental clutter that makes building a list feel impossible.",
      },
    },
    {
      "@type": "Question",
      name: "Is my brain dump saved anywhere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This tool runs entirely in your browser. Nothing you type is sent to a server, saved to a database, or stored anywhere. When you close the tab, it's gone. This is intentional — the goal is a private space to think out loud without consequence.",
      },
    },
    {
      "@type": "Question",
      name: "What do I do after a brain dump?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Read through what you wrote and pick just one thing — the smallest, most concrete next action. Not the most important, not the most urgent. Just one thing you can do right now. Then start a timer (10 minutes works well) and begin. The goal isn't to process your whole list — it's to get unstuck and moving.",
      },
    },
  ],
};

const relatedTools = [
  {
    href: "/tools/10-minute-adhd-timer/",
    icon: "ten-minute" as const,
    title: "10-Minute Timer",
    desc: "After your brain dump, pick one thing and start. 10 minutes is short enough to actually begin.",
  },
  {
    href: "/tools/adhd-coach/",
    icon: "focus-timer" as const,
    title: "ADHD Coach",
    desc: "Still stuck after the dump? The AI coach gives you one concrete first action, nothing more.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen" style={{ background: "var(--warm-bg)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Tool — embedded directly */}
      <BrainDump />

      {/* Brief intro */}
      <section className="px-4 py-10 text-center" style={{ background: "var(--sage-50)" }}>
        <div className="max-w-xl mx-auto space-y-4">
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            When your head is too full to start, trying to organize only makes it worse.
            Brain dumping — getting everything out first, structuring later — is a faster
            path to{" "}
            <strong style={{ color: "var(--text-primary)" }}>actually moving</strong>.
          </p>
          <ShareButton label="Share this tool" />
        </div>
      </section>

      {/* Why it works */}
      <section className="max-w-2xl mx-auto px-4 py-14 space-y-5">
        <h2
          className="text-xl font-extrabold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Why emptying your head helps you focus
        </h2>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Working memory — the mental space used to hold and manipulate information — is often
          unreliable when you have ADHD. To compensate, the brain keeps looping through thoughts
          to avoid losing them. This loop uses mental energy and makes it hard to focus on any
          single task, because the background process of &quot;don&apos;t forget this&quot; keeps
          interrupting.
        </p>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          A brain dump short-circuits that loop. Once something is written down, the brain no
          longer needs to hold it. The mental clutter clears, and choosing what to do next becomes
          much simpler — not because your task list got shorter, but because your head did.
        </p>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          The key difference from a to-do list: a brain dump is unstructured on purpose.
          You&apos;re not organizing, prioritizing, or planning. You&apos;re just emptying.
          Structure comes after — and only if you need it. Most of the time, the next step
          becomes obvious once the noise is gone.
        </p>

        {/* After your dump */}
        <div
          className="rounded-2xl p-6 border"
          style={{ background: "var(--sage-50)", borderColor: "var(--sage-100)" }}
        >
          <p className="font-semibold mb-1" style={{ color: "var(--sage-dark)" }}>
            After your brain dump
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Read through what you wrote. Pick the{" "}
            <strong>one smallest, most concrete thing</strong> you can do right now — not the
            most important, just the most startable. Then open the{" "}
            <Link href="/tools/10-minute-adhd-timer/" style={{ color: "var(--sage)", fontWeight: 600 }}>
              10-minute timer
            </Link>{" "}
            and begin.
          </p>
        </div>
      </section>

      {/* Related tools */}
      <section className="max-w-2xl mx-auto px-4 pb-14">
        <h2
          className="text-lg font-extrabold mb-5"
          style={{ color: "var(--text-primary)" }}
        >
          What to do after your brain dump
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {relatedTools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="flex items-start gap-4 rounded-2xl border p-5 card-hover"
              style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}
            >
              <ToolIcon name={t.icon} size={22} containerSize={44} />
              <div>
                <p className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                  {t.title}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {t.desc}
                </p>
              </div>
            </Link>
          ))}
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
