import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpenIcon,
  FlaskIcon,
  ClockIcon,
  BrainIcon,
  LightbulbIcon,
  BarChartIcon,
  ZapIcon,
  TargetIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "ADHD and Time Blindness: Why ADHD Brains Can't Feel Time",
  description:
    "People with ADHD don't experience time the way others do. Time blindness is neurological — not laziness. Learn what it is, why it happens, and what actually helps.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is time blindness in ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Time blindness is the inability to feel time passing accurately. People with ADHD often experience time as only two states: 'now' and 'not now.' They can't intuitively sense whether 10 minutes or an hour have passed, and they consistently underestimate how long tasks will take. This is not a choice or a character flaw — it reflects genuine differences in how the ADHD brain processes temporal information.",
      },
    },
    {
      "@type": "Question",
      name: "Why do people with ADHD lose track of time so easily?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The brain's internal clock depends on dopamine signaling in the prefrontal cortex and basal ganglia — the same systems that are underactive in ADHD. Without reliable dopamine signals, the brain can't accurately track duration. Additionally, when a person with ADHD enters hyperfocus, their attention system disconnects almost entirely from time awareness, making hours feel like minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Is time blindness the same as being irresponsible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Time blindness is a neurological symptom of ADHD, not a personality trait. Someone who is consistently late despite wanting to be on time, who genuinely cannot feel how much time has passed, is not being disrespectful — their brain is not receiving accurate temporal feedback. Understanding this distinction is important both for self-compassion and for relationships with people with ADHD.",
      },
    },
    {
      "@type": "Question",
      name: "Can time blindness in ADHD be treated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Time blindness can be managed significantly with the right strategies. ADHD medication (stimulants in particular) improves prefrontal dopamine function and often makes time perception noticeably more accurate. External tools — visual timers, time-blocking, countdown apps — compensate for the internal clock that doesn't work reliably. The goal is to make time visible and external rather than relying on internal sensing.",
      },
    },
    {
      "@type": "Question",
      name: "What strategies help with ADHD time blindness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most effective strategies are those that externalize time: analog clocks with sweeping second hands, Time Timer visual countdown clocks, and phone alarms set 10–15 minutes before every transition. Time-blocking (scheduling specific tasks in specific time slots) helps prevent 'time collapse.' The Pomodoro method (25 minutes on, 5 minutes off) builds in mandatory time checkpoints. Pairing tasks with time estimates — and tracking the actual time taken — gradually improves self-awareness.",
      },
    },
  ],
};

const strategies = [
  {
    icon: <ClockIcon size={22} color="var(--sage)" />,
    title: "Visual timers",
    desc: "The Time Timer clock (or its app version) shows time disappearing as a shrinking red disk. Unlike digital countdowns, it makes duration physically visible. Many people with ADHD report this as transformative — for the first time, they can see time passing.",
  },
  {
    icon: <ZapIcon size={22} color="var(--sage)" />,
    title: "Transition alarms",
    desc: "Set alarms 10–15 minutes before every transition — not just appointments, but also 'it's time to start getting ready,' 'time to wrap up this task,' 'leave for school in 10 minutes.' Remove the need to track time internally by outsourcing it to your phone.",
  },
  {
    icon: <TargetIcon size={22} color="var(--sage)" />,
    title: "Time-blocking",
    desc: "Assign specific tasks to specific time slots in your calendar, not just to a to-do list. A to-do list lives outside of time — a calendar slot makes the task concrete and bounded. People with ADHD often find that unscheduled tasks simply don't happen.",
  },
  {
    icon: <BrainIcon size={22} color="var(--sage)" />,
    title: "The Pomodoro method",
    desc: "Work in 25-minute intervals with a 5-minute break. The timer provides mandatory checkpoints that interrupt hyperfocus before time disappears completely. Many people with ADHD use this structure to 'surface' from deep work at regular intervals.",
  },
  {
    icon: <LightbulbIcon size={22} color="var(--sage)" />,
    title: "Time estimation practice",
    desc: "Before starting a task, guess how long it will take. After finishing, check the actual time. Repeat daily. This builds metacognitive awareness over time — and the gap between your estimate and reality will shrink. Most people with ADHD are surprised by how consistently they underestimate.",
  },
  {
    icon: <TargetIcon size={22} color="var(--sage)" />,
    title: "Anchor routines",
    desc: "Build fixed 'anchor points' into your day — breakfast at the same time, a consistent morning routine, a fixed start-of-work ritual. Anchors give the brain repeated temporal landmarks. Over time, they help your internal sense of the day's structure become more reliable.",
  },
];

export default function AdhdTimeBlinndness() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen" style={{ background: "var(--warm-bg)" }}>
        {/* Hero */}
        <div className="px-4 py-14 text-center" style={{ background: "var(--sage-50)" }}>
          <div className="max-w-2xl mx-auto">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
              style={{ background: "var(--sage-100)", color: "var(--sage-dark)" }}
            >
              Understanding ADHD
            </span>
            <h1
              className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              ADHD and Time Blindness: Why ADHD Brains Can&apos;t Feel Time
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              It&apos;s not laziness. It&apos;s not disrespect. For people with ADHD, time doesn&apos;t feel
              the way it does for everyone else — and there&apos;s a neurological reason why.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-xs" style={{ color: "var(--text-muted)" }}>
              <span className="inline-flex items-center gap-1"><BookOpenIcon size={13} /> 7 min read</span>
              <span className="inline-flex items-center gap-1"><FlaskIcon size={13} /> Research-based</span>
              <span>Updated 2025</span>
            </div>
          </div>
        </div>

        <article className="max-w-2xl mx-auto px-4 py-12">

          {/* Intro */}
          <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            You told yourself you had plenty of time. Then suddenly you were late — again. You
            sat down to work for what felt like twenty minutes. Two hours had passed.
            You promised yourself you&apos;d leave at 3:00. It&apos;s 3:47 and you&apos;re still not ready.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            For people with ADHD, this isn&apos;t forgetfulness or poor planning. It&apos;s a specific,
            documented neurological symptom called <strong>time blindness</strong> — and understanding
            it changes everything about how you approach your day.
          </p>

          {/* Section 1 */}
          <h2
            className="text-xl md:text-2xl font-extrabold mb-4 mt-10"
            style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}
          >
            What Is Time Blindness?
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
            Dr. Russell Barkley, one of the world&apos;s leading ADHD researchers, describes ADHD as
            fundamentally a disorder of self-regulation across time. People with ADHD, he argues,
            don&apos;t have a problem with attention so much as a problem with <em>time</em> —
            specifically, with experiencing time the way neurotypical brains do.
          </p>
          <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            The core of time blindness is this: <strong>the ADHD brain experiences time in only
            two states — now and not now.</strong>
          </p>

          <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--sage-50)", border: "1.5px solid var(--sage-100)" }}>
            <p className="font-bold mb-3" style={{ color: "var(--sage-dark)" }}>Now vs. Not Now</p>
            <div className="grid grid-cols-2 gap-4 text-sm" style={{ color: "var(--text-secondary)" }}>
              <div>
                <p className="font-bold mb-2" style={{ color: "var(--text-primary)" }}>Neurotypical brain</p>
                <ul className="space-y-1">
                  <li>• Can feel time passing</li>
                  <li>• Accurately estimates duration</li>
                  <li>• Future events feel real and motivating</li>
                  <li>• Naturally adjusts pace to deadlines</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2" style={{ color: "var(--text-primary)" }}>ADHD brain</p>
                <ul className="space-y-1">
                  <li>• Time passes invisibly</li>
                  <li>• Consistently underestimates duration</li>
                  <li>• Future events don&apos;t feel real until imminent</li>
                  <li>• Urgency only activates at the last moment</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            This is why a deadline due in two weeks feels abstract and unreal — until it&apos;s due
            tomorrow, when it suddenly becomes viscerally urgent. The ADHD nervous system responds
            to <em>immediacy</em>, not to future consequence.
          </p>

          {/* Section 2 */}
          <h2
            className="text-xl md:text-2xl font-extrabold mb-4 mt-10"
            style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}
          >
            The Neuroscience Behind It
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
            The brain&apos;s sense of time depends heavily on <strong>dopamine</strong> — the same
            neurotransmitter that&apos;s dysregulated in ADHD. The prefrontal cortex and basal ganglia,
            which work together to track duration and regulate planning, both rely on dopamine
            signaling to function accurately.
          </p>
          <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
            When dopamine transmission is unreliable — as it is in ADHD brains — the brain&apos;s
            internal clock runs inconsistently. Time feels compressed or expanded depending on
            engagement level, not on actual duration.
          </p>

          <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--sage-50)", border: "1.5px solid var(--sage-100)" }}>
            <p className="font-bold mb-2 flex items-center gap-1.5" style={{ color: "var(--sage-dark)" }}>
              <BarChartIcon size={15} /> What the research shows
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>• People with ADHD underestimate elapsed time by an average of <strong>25–40%</strong> in controlled studies</li>
              <li>• fMRI studies show reduced activation in time-processing regions of the brain during duration estimation tasks in ADHD participants</li>
              <li>• ADHD stimulant medication significantly improves time perception accuracy in most patients</li>
              <li>• Children with ADHD show measurable deficits in time reproduction tasks as early as age 7</li>
            </ul>
          </div>

          {/* Section 3 */}
          <h2
            className="text-xl md:text-2xl font-extrabold mb-4 mt-10"
            style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}
          >
            How Time Blindness Looks in Daily Life
          </h2>
          <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            Time blindness is not just about being late. It shows up across every area of life:
          </p>

          <div className="space-y-3 mb-8">
            {[
              { label: "Chronic lateness", desc: "Despite leaving \"enough time,\" you arrive late because your estimate of how long getting ready takes is consistently wrong." },
              { label: "Hyperfocus time loss", desc: "You sit down to work on something interesting. When you look up, hours have passed. You missed a meeting, forgot lunch, didn't pick up the kids." },
              { label: "Last-minute scrambling", desc: "You know a deadline is coming. It doesn't feel real until it's tomorrow — then suddenly it's a crisis, even though you had three weeks." },
              { label: "Underestimating task length", desc: "\"This will take 20 minutes.\" It takes two hours. Every time. The gap between estimate and reality stays large even with experience." },
              { label: "Difficulty transitioning", desc: "Stopping a current task to start something else requires overcoming the friction of shifting time-states. Transitions are disproportionately hard." },
              { label: "No sense of urgency until too late", desc: "Bills, appointments, responses to messages — all feel abstract until the moment they become urgent. By then, damage may already be done." },
            ].map(item => (
              <div
                key={item.label}
                className="rounded-xl p-4 border"
                style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}
              >
                <p className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                  {item.label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Section 4 */}
          <h2
            className="text-xl md:text-2xl font-extrabold mb-4 mt-10"
            style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}
          >
            The Emotional Cost
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
            Time blindness carries a heavy secondary burden: the social and emotional fallout of
            a world that doesn&apos;t accommodate it.
          </p>
          <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
            Being chronically late is interpreted as disrespect. Missing deadlines is read as
            irresponsibility. Forgetting appointments signals that the other person doesn&apos;t matter.
            None of these interpretations are correct — but they&apos;re also difficult to argue against,
            because the behavior pattern looks identical to genuine disregard.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            Over years, this accumulates. Many adults with undiagnosed ADHD carry deep shame
            around time — a chronic sense of being unreliable, undependable, and fundamentally
            incapable of managing something that &quot;everyone else&quot; handles without effort.
            The shame itself is often more disabling than the symptom.
          </p>

          <div className="rounded-2xl p-6 mb-10" style={{ background: "var(--sage-50)", border: "1.5px solid var(--sage-100)" }}>
            <p className="leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--sage-dark)" }}>Important:</strong> Time blindness is a
              symptom of ADHD — a neurodevelopmental condition, not a character defect. Blaming
              yourself for neurological differences you were born with is not useful. The goal is
              not to feel worse about time; it&apos;s to build external systems that compensate for
              an internal clock that doesn&apos;t run reliably.
            </p>
          </div>

          {/* Section 5 */}
          <h2
            className="text-xl md:text-2xl font-extrabold mb-4 mt-10"
            style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}
          >
            What Actually Helps
          </h2>
          <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            The most effective approach to time blindness is to <strong>externalize time</strong> —
            to stop relying on an internal sense that doesn&apos;t work reliably, and instead build
            an environment where time is visible, audible, and unavoidable.
          </p>

          <div className="space-y-4 mb-10">
            {strategies.map(s => (
              <div
                key={s.title}
                className="rounded-2xl p-5 border"
                style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5">{s.icon}</span>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-bold text-lg mb-3" style={{ color: "var(--text-primary)" }}>
            What about medication?
          </h3>
          <p className="leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
            Stimulant medication (methylphenidate, amphetamines) improves dopamine availability
            in the prefrontal cortex — which directly improves time perception for many people
            with ADHD. Many patients report that, for the first time on medication, they can
            actually <em>feel</em> time passing. This doesn&apos;t make external strategies unnecessary,
            but it can make them significantly easier to use consistently.
          </p>

          {/* CTA */}
          <div
            className="rounded-2xl p-7 mb-10 text-center"
            style={{ background: "var(--sage)" }}
          >
            <h3 className="text-lg font-extrabold text-white mb-2">
              Could ADHD explain your relationship with time?
            </h3>
            <p className="text-sm mb-5" style={{ color: "var(--sage-100)" }}>
              Take the free Adult ADHD Self-Test — based on the clinically validated ASRS v1.1 screener.
            </p>
            <Link
              href="/tests/adult-adhd-test/"
              className="inline-block font-bold px-6 py-3 rounded-full text-sm"
              style={{ background: "white", color: "var(--sage-dark)" }}
            >
              Take the Free Test →
            </Link>
          </div>

          {/* Ad placeholder */}
          <div
            className="rounded-2xl p-4 mb-8 text-center text-xs border"
            style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--text-muted)" }}
          >
            <span className="opacity-40">[ Advertisement ]</span>
          </div>

          {/* FAQ */}
          <h2
            className="text-xl md:text-2xl font-extrabold mb-6 mt-10"
            style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map(item => (
              <div
                key={item.name}
                className="rounded-2xl border overflow-hidden"
                style={{ borderColor: "var(--warm-border)" }}
              >
                <div className="p-5" style={{ background: "var(--sage-50)" }}>
                  <h3 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                    {item.name}
                  </h3>
                </div>
                <div
                  className="p-5 text-sm leading-relaxed"
                  style={{ background: "var(--warm-card)", color: "var(--text-secondary)" }}
                >
                  {item.acceptedAnswer.text}
                </div>
              </div>
            ))}
          </div>

          {/* Sources */}
          <div
            className="mt-12 pt-6 text-xs leading-relaxed space-y-2"
            style={{ borderTop: "1px solid var(--warm-border)", color: "var(--text-muted)" }}
          >
            <p className="font-bold" style={{ color: "var(--text-secondary)" }}>Sources</p>
            <p>Barkley, R.A. (2015). <em>Executive Functions: What They Are, How They Work, and Why They Evolved.</em> Guilford Press.</p>
            <p>Barkley, R.A. (2011). Barkley Deficits in Executive Functioning Scale. <em>Guilford Press.</em></p>
            <p>Noreika, V., Falter, C.M., & Rubia, K. (2013). Timing deficits in attention-deficit/hyperactivity disorder (ADHD). <em>Neuropsychologia, 51</em>(2), 235–266.</p>
            <p>Toplak, M.E., Dockstader, C., & Tannock, R. (2006). Temporal information processing in ADHD. <em>Journal of Neuroscience Methods, 151</em>(1), 15–29.</p>
            <p>Ptacek, R. et al. (2019). Clinical implications of the perception of time in attention deficit hyperactivity disorder. <em>Medical Science Monitor, 25</em>, 3918–3924.</p>
          </div>

          {/* Internal links */}
          <div className="mt-10 pt-8" style={{ borderTop: "1px solid var(--warm-border)" }}>
            <p className="text-sm font-bold mb-4" style={{ color: "var(--text-muted)" }}>
              Related Articles
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/learn/executive-dysfunction/", label: "What Is Executive Dysfunction? →" },
                { href: "/learn/adhd-vs-anxiety/", label: "ADHD vs Anxiety: How to Tell the Difference →" },
                { href: "/learn/adhd-in-women/", label: "ADHD in Women: Why It Goes Undiagnosed →" },
              ].map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block p-4 rounded-xl border text-sm font-semibold hover:opacity-80 transition-opacity"
                  style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--sage-dark)" }}
                >
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
