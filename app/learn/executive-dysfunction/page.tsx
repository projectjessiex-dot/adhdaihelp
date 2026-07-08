import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Executive Dysfunction? The Core of ADHD Explained",
  description:
    "Executive dysfunction is why ADHD feels like more than just 'getting distracted.' Learn what the 6 executive functions are, how they break down in ADHD, and what actually helps.",
  alternates: {
    canonical: "https://adhdaihelp.com/learn/executive-dysfunction/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is executive dysfunction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Executive dysfunction refers to difficulties with a set of mental skills called executive functions — the brain's management system. These include task initiation, planning, prioritization, working memory, impulse control, emotional regulation, and cognitive flexibility. When these functions are impaired, everyday tasks that others manage automatically become disproportionately difficult. Executive dysfunction is the primary mechanism behind most ADHD symptoms.",
      },
    },
    {
      "@type": "Question",
      name: "Is executive dysfunction the same as ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — executive dysfunction is a symptom pattern, not a diagnosis. ADHD is the most common cause of executive dysfunction, but it also occurs in autism spectrum disorder, traumatic brain injury, depression, anxiety, and other conditions. That said, executive dysfunction is so central to ADHD that many researchers describe ADHD as fundamentally a disorder of executive function (Barkley, 2012).",
      },
    },
    {
      "@type": "Question",
      name: "Why can't I start tasks even when I want to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Task initiation failure is one of the most disabling aspects of executive dysfunction. The problem is neurological, not motivational — the ADHD brain doesn't produce the right neurochemical signal to begin an action unless there's urgency, novelty, or intense interest. This is why ADHD often looks like procrastination or laziness from the outside, while internally the person is frustrated and wants to start but genuinely cannot. Strategies that create artificial urgency (timers, accountability partners, body doubling) can help bypass this failure mode.",
      },
    },
    {
      "@type": "Question",
      name: "What is 'time blindness' in ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Time blindness is the inability to feel time passing — a core feature of ADHD executive dysfunction. People with ADHD don't have an accurate internal clock. They underestimate how long tasks take, lose hours without noticing, and struggle to plan around future deadlines because the future doesn't feel real or immediate. This isn't carelessness — it's a failure of the brain's time-tracking system. External tools (visible timers, alarms, time-blocking) are more effective than trying to 'remember' to track time internally.",
      },
    },
    {
      "@type": "Question",
      name: "How do you treat executive dysfunction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Treatment depends on the underlying cause. For ADHD-related executive dysfunction, stimulant medications (Adderall, Ritalin, Vyvanse) are the most evidence-supported intervention — they increase dopamine availability in the prefrontal cortex, directly improving executive function. Non-stimulants (Strattera, Wellbutrin) are an alternative. Behavioral strategies — externalizing memory (lists, apps), breaking tasks into micro-steps, using timers, body doubling — are effective both with and without medication. Cognitive behavioral therapy adapted for ADHD (CBT-A) specifically targets executive dysfunction patterns.",
      },
    },
  ],
};

import { ArrowUpCircleIcon, GridIcon, ClipboardIcon, TargetIcon, ZapIcon, WaveIcon, LightbulbIcon, BrainIcon, BookOpenIcon, FlaskIcon } from "@/components/Icons";

const functions = [
  {
    name: "Task Initiation",
    icon: <ArrowUpCircleIcon size={22} color="var(--sage-dark)" />,
    normal: "Starting a task when you decide to start it",
    adhd: "Knowing you need to start but being neurologically unable to begin — for hours",
    tip: "Use a 2-minute rule: commit to just 2 minutes. Starting is the hardest part.",
  },
  {
    name: "Working Memory",
    icon: <GridIcon size={22} color="var(--sage-dark)" />,
    normal: "Holding information in mind while using it",
    adhd: "Forgetting what you were doing mid-task, losing your train of thought mid-sentence",
    tip: "Externalize everything. If it matters, write it down immediately.",
  },
  {
    name: "Planning & Organization",
    icon: <ClipboardIcon size={22} color="var(--sage-dark)" />,
    normal: "Sequencing steps toward a goal; organizing space and time",
    adhd: "Projects start in the middle, important steps get missed, spaces become chaotic",
    tip: "Break tasks into the smallest possible steps. 'Clean room' is not a step.",
  },
  {
    name: "Prioritization",
    icon: <TargetIcon size={22} color="var(--sage-dark)" />,
    normal: "Identifying what matters most and doing it first",
    adhd: "Everything feels equally urgent — or the wrong thing feels urgent (interesting ≠ important)",
    tip: "Choose one 'Top 1' task each morning. Everything else is secondary.",
  },
  {
    name: "Impulse Control",
    icon: <ZapIcon size={22} color="var(--sage-dark)" />,
    normal: "Pausing before acting; regulating urges",
    adhd: "Speaking before thinking, impulsive purchases, difficulty waiting, interrupting",
    tip: "Build in a 24-hour rule for decisions. The urge will pass; the wisdom won't.",
  },
  {
    name: "Emotional Regulation",
    icon: <WaveIcon size={22} color="var(--sage-dark)" />,
    normal: "Managing emotional intensity; recovering from frustration",
    adhd: "Emotions arrive at full intensity immediately; rejection feels catastrophic (RSD)",
    tip: "Name the emotion. 'I am frustrated' creates distance. 'This is catastrophic' does not.",
  },
];

export default function ExecutiveDysfunction() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen" style={{ background: "var(--warm-bg)" }}>

        {/* Hero */}
        <div className="px-4 py-14 text-center" style={{ background: "var(--sage-50)" }}>
          <div className="max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
              style={{ background: "var(--sage-100)", color: "var(--sage-dark)" }}>Must Read</span>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
              What Is Executive Dysfunction? The Core of ADHD
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              It&apos;s not laziness. It&apos;s not a lack of willpower. Executive dysfunction is why ADHD makes everyday tasks feel impossibly hard — even when you desperately want to do them.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-xs" style={{ color: "var(--text-muted)" }}>
              <span className="inline-flex items-center gap-1"><BookOpenIcon size={13} /> 9 min read</span>
              <span className="inline-flex items-center gap-1"><FlaskIcon size={13} /> Research-based</span><span>Updated 2025</span>
            </div>
          </div>
        </div>

        <article className="max-w-2xl mx-auto px-4 py-12">

          <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            People who don&apos;t understand ADHD see someone who could do the thing, but didn&apos;t. They see the pile of unfinished tasks, the missed deadlines, the forgotten appointments. They conclude: <em>lazy. Undisciplined. Doesn&apos;t care.</em>
          </p>
          <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            People with ADHD experience something different. They see the pile too. They care deeply. They intend to start. And something in the brain just... doesn&apos;t fire. That gap — between intention and action — is executive dysfunction.
          </p>

          <h2 className="text-xl md:text-2xl font-extrabold mb-4 mt-10" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
            What Are Executive Functions?
          </h2>
          <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            Executive functions are the brain&apos;s management system — a set of mental skills, primarily controlled by the prefrontal cortex, that allow us to regulate behavior, plan toward goals, and adapt to changing circumstances. They&apos;re the cognitive equivalent of an air traffic controller.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            Researcher Russell Barkley — one of the world&apos;s leading ADHD experts — describes ADHD as fundamentally a disorder of executive function rather than attention. The attention problems are real, but they&apos;re downstream of a deeper failure to manage the self across time.
          </p>

          <h2 className="text-xl md:text-2xl font-extrabold mb-6 mt-10" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
            The 6 Executive Functions — and How ADHD Disrupts Each
          </h2>
          <div className="space-y-4 mb-8">
            {functions.map(fn => (
              <div key={fn.name} className="rounded-2xl border overflow-hidden" style={{ borderColor: "var(--warm-border)" }}>
                <div className="p-4 flex items-center gap-3" style={{ background: "var(--sage-50)" }}>
                  <span className="flex-shrink-0">{fn.icon}</span>
                  <h3 className="font-extrabold" style={{ color: "var(--text-primary)" }}>{fn.name}</h3>
                </div>
                <div className="p-5 grid sm:grid-cols-2 gap-4" style={{ background: "var(--warm-card)" }}>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>Without ADHD</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{fn.normal}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#B05050" }}>With ADHD</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{fn.adhd}</p>
                  </div>
                  <div className="sm:col-span-2 pt-3 border-t" style={{ borderColor: "var(--warm-border)" }}>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1" style={{ color: "var(--sage-dark)" }}><LightbulbIcon size={12} /> What helps</p>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{fn.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl md:text-2xl font-extrabold mb-4 mt-10" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
            Time Blindness: The Most Misunderstood Symptom
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
            Barkley describes people with ADHD as living in a world with only two time zones: <strong>now</strong> and <strong>not now</strong>. Deadlines, appointments, and future consequences don&apos;t feel real until they&apos;re imminent.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            This is why ADHD &quot;procrastination&quot; looks different from ordinary procrastination. It&apos;s not strategic delay — it&apos;s a genuine failure of the brain&apos;s time-tracking system. The future simply doesn&apos;t activate behavior the way it does for neurotypical people. External, visible timers work better than trying to feel time internally.
          </p>

          <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--sage-50)", border: "1.5px solid var(--sage-100)" }}>
            <p className="font-bold mb-3 flex items-center gap-1.5" style={{ color: "var(--sage-dark)" }}><BrainIcon size={15} /> The neuroscience in plain language</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Executive function depends heavily on dopamine signaling in the prefrontal cortex. In ADHD brains, dopamine is either produced in lower quantities or cleared too quickly from synapses. The result: the &quot;fire&quot; signal that makes you start tasks, sustain attention, and inhibit impulses is weaker and less reliable than in neurotypical brains. This is why stimulant medications — which increase dopamine availability — are often dramatically effective.
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-extrabold mb-4 mt-10" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
            What Actually Helps Executive Dysfunction
          </h2>
          <div className="space-y-3 mb-8">
            {[
              { title: "Externalize your memory", desc: "Your working memory is not reliable storage. Use lists, alarms, and calendar blocking for everything — not as a crutch, but as a prosthetic for a brain function that works differently." },
              { title: "Make time visible", desc: "Time Timer clocks, time-blocking on a physical calendar, and countdown apps convert abstract time into visible, concrete information your brain can respond to." },
              { title: "Body doubling", desc: "Working in the presence of another person — even virtually — dramatically improves task initiation and focus for most people with ADHD. The social pressure activates the dopamine system." },
              { title: "Choose one Top 1", desc: "Each morning: one task. Not a list. One. The act of prioritizing a single thing bypasses the 'everything is equally urgent' paralysis." },
              { title: "Break tasks smaller than you think", desc: "'Write report' is not a task. 'Open document' is a task. Micro-steps lower the initiation barrier by reducing the perceived size of the action required." },
            ].map((item, i) => (
              <div key={item.title} className="flex gap-4 rounded-2xl p-5 border" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
                <span className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5"
                  style={{ background: "var(--sage)" }}>{i + 1}</span>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl p-7 mb-10 text-center" style={{ background: "var(--sage)" }}>
            <h3 className="text-lg font-extrabold text-white mb-2">Do these patterns feel familiar?</h3>
            <p className="text-sm mb-5" style={{ color: "var(--sage-100)" }}>Take the free ADHD screener and see if the symptoms align.</p>
            <Link href="/tests/adult-adhd-test/"
              className="inline-block font-bold px-6 py-3 rounded-full text-sm"
              style={{ background: "white", color: "var(--sage-dark)" }}>
              Take the Free Adult ADHD Test →
            </Link>
          </div>

          {/* Ad placeholder */}
          <div className="rounded-2xl p-4 mb-8 text-center text-xs border"
            style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--text-muted)" }}>
            <span className="opacity-40">[ Advertisement ]</span>
          </div>

          {/* FAQ */}
          <h2 className="text-xl md:text-2xl font-extrabold mb-6 mt-10" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map(item => (
              <div key={item.name} className="rounded-2xl border overflow-hidden" style={{ borderColor: "var(--warm-border)" }}>
                <div className="p-5" style={{ background: "var(--sage-50)" }}>
                  <h3 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>{item.name}</h3>
                </div>
                <div className="p-5 text-sm leading-relaxed" style={{ background: "var(--warm-card)", color: "var(--text-secondary)" }}>
                  {item.acceptedAnswer.text}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 text-xs leading-relaxed space-y-2" style={{ borderTop: "1px solid var(--warm-border)", color: "var(--text-muted)" }}>
            <p className="font-bold" style={{ color: "var(--text-secondary)" }}>Sources</p>
            <p>Barkley, R.A. (2012). <em>Executive Functions: What They Are, How They Work, and Why They Evolved.</em> Guilford Press.</p>
            <p>Diamond, A. (2013). Executive functions. <em>Annual Review of Psychology, 64</em>, 135–168.</p>
            <p>Willcutt, E.G. et al. (2005). Validity of the executive function theory of attention-deficit/hyperactivity disorder. <em>Biological Psychiatry, 57</em>(11), 1336–1346.</p>
          </div>

          <div className="mt-10 pt-8" style={{ borderTop: "1px solid var(--warm-border)" }}>
            <p className="text-sm font-bold mb-4" style={{ color: "var(--text-muted)" }}>Related Articles</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/learn/adhd-in-women/", label: "ADHD in Women: Why It Goes Undiagnosed →" },
                { href: "/learn/adhd-vs-anxiety/", label: "ADHD vs Anxiety: How to Tell the Difference →" },
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
    </>
  );
}
