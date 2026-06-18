import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenIcon, FlaskIcon, BarChartIcon, WaveIcon, ClockIcon, HeartIcon, LayersIcon, FlameIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "ADHD in Women: Why It Goes Undiagnosed for Decades",
  description:
    "ADHD in women looks different — and is diagnosed far less often. Learn how female ADHD symptoms present, why they're missed, and what to do if you recognize yourself here.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is ADHD in women so often missed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ADHD research was conducted almost exclusively on hyperactive boys until the 1990s. Diagnostic criteria were built around that population. Women with ADHD more often present with inattentive symptoms — daydreaming, forgetfulness, disorganization — rather than visible hyperactivity. They also tend to 'mask' their symptoms through intense social effort, making them appear to function normally even when struggling significantly.",
      },
    },
    {
      "@type": "Question",
      name: "What does ADHD look like in adult women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In adult women, ADHD commonly presents as: chronic disorganization, difficulty starting or finishing tasks, emotional sensitivity and dysregulation, overwhelm in social situations, difficulty with time management, hyperfocus on areas of intense interest, anxiety and depression (often secondary to unmanaged ADHD), and a persistent feeling of 'not living up to potential.' Women often describe it as feeling like everyone else got an instruction manual they never received.",
      },
    },
    {
      "@type": "Question",
      name: "Can women develop ADHD in adulthood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ADHD is a neurodevelopmental condition — you're born with it, not diagnosed with it later in life. However, symptoms often go unnoticed or undiagnosed until adulthood, when the demands of managing a career, household, and relationships finally overwhelm a woman's coping strategies. Hormonal changes during perimenopause can also make previously manageable symptoms significantly worse, leading to diagnosis in a woman's 40s or 50s.",
      },
    },
    {
      "@type": "Question",
      name: "How does ADHD differ in girls vs boys?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Boys with ADHD are more likely to show externalizing behaviors — running around, interrupting, acting out — which are hard to ignore in a classroom. Girls are more likely to internalize their struggles: they daydream quietly, lose things constantly, feel chronically disorganized, and develop anxiety or low self-esteem as secondary effects. A quiet girl sitting at the back of the classroom, staring out the window, rarely gets referred for ADHD evaluation.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if I think I have ADHD as a woman?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start by taking a validated screener (like the ASRS v1.1) and documenting specific examples of how symptoms affect your daily life. Then request a formal evaluation from a psychiatrist, psychologist, or your primary care physician — and specifically mention ADHD. Many clinicians don't screen for it unless asked. Bring a list of examples. If the first provider dismisses your concerns, seek a second opinion. Late diagnosis is life-changing for many women.",
      },
    },
  ],
};

export default function AdhdInWomen() {
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
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
              style={{ background: "var(--sage-100)", color: "var(--sage-dark)" }}>
              Most Read
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
              ADHD in Women: Why It Goes Undiagnosed for Decades
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              If you&apos;ve spent your life being told you&apos;re &quot;too sensitive,&quot; &quot;scatterbrained,&quot; or &quot;not living up to your potential&quot; — there may be a neurological reason nobody ever caught.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-xs" style={{ color: "var(--text-muted)" }}>
              <span className="inline-flex items-center gap-1"><BookOpenIcon size={13} /> 8 min read</span>
              <span className="inline-flex items-center gap-1"><FlaskIcon size={13} /> Research-based</span>
              <span>Updated 2025</span>
            </div>
          </div>
        </div>

        <article className="max-w-2xl mx-auto px-4 py-12">

          {/* Intro */}
          <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            The average woman with ADHD is diagnosed <strong>5–10 years later</strong> than a man with the same condition. Many aren&apos;t diagnosed until their 30s, 40s, or even 50s — often after their child receives an ADHD diagnosis and something clicks.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            This isn&apos;t a story about women being less affected by ADHD. It&apos;s a story about a condition that was defined by studying boys, diagnosed by criteria written for boys, and treated — for decades — as a boys&apos; problem.
          </p>

          {/* Section 1 */}
          <h2 className="text-xl md:text-2xl font-extrabold mb-4 mt-10" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
            Why the Research Left Women Behind
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
            ADHD wasn&apos;t always understood as a lifespan condition. Early research in the 1970s and 80s focused almost exclusively on hyperactive boys who were disruptive in classrooms. The resulting diagnostic criteria — now codified in the DSM-5 — were built around externally visible behaviors: running, climbing, blurting, interrupting.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            These behaviors are less common in girls and women with ADHD. A 2019 meta-analysis in <em>Neuroscience & Biobehavioral Reviews</em> confirmed that girls with ADHD show significantly fewer hyperactive-impulsive symptoms than boys, even when their inattentive symptoms are equally severe. The result: they don&apos;t trigger referrals. They don&apos;t get evaluated. They don&apos;t get diagnosed.
          </p>

          {/* Callout */}
          <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--sage-50)", border: "1.5px solid var(--sage-100)" }}>
            <p className="font-bold mb-2 flex items-center gap-1.5" style={{ color: "var(--sage-dark)" }}>
              <BarChartIcon size={15} /> By the numbers
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>• Women are <strong>50–75% less likely</strong> to be diagnosed with ADHD than men with identical symptoms</li>
              <li>• Girls with ADHD are referred for evaluation at less than <strong>half the rate</strong> of boys</li>
              <li>• The average age of diagnosis for women is <strong>36–38</strong>, versus mid-teens for men</li>
              <li>• An estimated <strong>75%</strong> of women with ADHD remain undiagnosed</li>
            </ul>
          </div>

          {/* Section 2 */}
          <h2 className="text-xl md:text-2xl font-extrabold mb-4 mt-10" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
            What ADHD Actually Looks Like in Women
          </h2>
          <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            Female ADHD tends to be quieter on the outside — and louder on the inside. Here&apos;s what it commonly looks like:
          </p>
          <div className="space-y-4 mb-8">
            {[
              { icon: <WaveIcon size={22} color="var(--sage)" />, title: "Chronic disorganization", desc: "Despite trying hard, you can't keep your space, schedule, or finances in order. You lose things constantly. You're often late. The chaos feels shameful because everyone else seems to manage fine." },
              { icon: <ClockIcon size={22} color="var(--sage)" />, title: "Time blindness", desc: "You genuinely can't feel time passing. An hour feels like 10 minutes. You're perpetually underestimating how long things take, which others experience as unreliability — but it's neurological, not intentional." },
              { icon: <HeartIcon size={22} color="var(--sage)" />, title: "Emotional dysregulation", desc: "Rejection Sensitive Dysphoria (RSD) is common in ADHD. Criticism — even mild, even imagined — can feel devastating. Emotions arrive fast and intensely, then pass. This gets misread as 'being dramatic.'" },
              { icon: <LayersIcon size={22} color="var(--sage)" />, title: "Masking", desc: "Many women with ADHD become expert social performers, working overtime to appear 'normal' — remembering to make eye contact, suppress fidgeting, laugh at the right moments. Masking is exhausting and leads to burnout." },
              { icon: <FlameIcon size={22} color="var(--sage)" />, title: "Hyperfocus", desc: "ADHD isn't about not being able to focus — it's about not being able to regulate focus. When something is interesting, women with ADHD can focus intensely for hours. This confuses clinicians who expect 'always distracted.'" },
            ].map(item => (
              <div key={item.title} className="rounded-2xl p-5 border" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section 3 */}
          <h2 className="text-xl md:text-2xl font-extrabold mb-4 mt-10" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
            The Hormonal Factor Nobody Talks About
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
            Estrogen has a direct effect on dopamine — the neurotransmitter that ADHD medication works on. This means women&apos;s ADHD symptoms fluctuate throughout the menstrual cycle, pregnancy, postpartum, and menopause.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            Many women report their ADHD becoming significantly harder to manage during perimenopause and menopause, when estrogen levels drop sharply. This often leads to a first ADHD diagnosis in a woman&apos;s 40s or 50s — not because she developed ADHD, but because her lifelong coping strategies finally collapsed under the hormonal shift.
          </p>

          {/* Section 4 */}
          <h2 className="text-xl md:text-2xl font-extrabold mb-4 mt-10" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
            The Comorbidity Problem
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
            Undiagnosed ADHD generates secondary conditions. Research consistently shows that women with ADHD have significantly higher rates of:
          </p>
          <ul className="space-y-2 mb-6 text-sm" style={{ color: "var(--text-secondary)" }}>
            {["Anxiety disorders (50–60%)", "Depression (53%)", "Sleep disorders", "Eating disorders (particularly binge eating)", "Substance use (often self-medication)", "Chronic stress and burnout"].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span style={{ color: "var(--sage)" }}>→</span> {item}
              </li>
            ))}
          </ul>
          <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            These comorbidities are often treated in isolation — the anxiety medicated, the depression managed — while the underlying ADHD that&apos;s generating them goes unaddressed for decades.
          </p>

          {/* CTA */}
          <div className="rounded-2xl p-7 mb-10 text-center" style={{ background: "var(--sage)", }}>
            <h3 className="text-lg font-extrabold text-white mb-2">Do you recognize yourself here?</h3>
            <p className="text-sm mb-5" style={{ color: "var(--sage-100)" }}>
              Take the free Adult ADHD Self-Test — based on the clinically validated ASRS v1.1 screener.
            </p>
            <Link href="/tests/adult-adhd-test/"
              className="inline-block font-bold px-6 py-3 rounded-full text-sm"
              style={{ background: "white", color: "var(--sage-dark)" }}>
              Take the Free Test →
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
            {faqSchema.mainEntity.map((item) => (
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

          {/* Sources */}
          <div className="mt-12 pt-6 text-xs leading-relaxed space-y-2" style={{ borderTop: "1px solid var(--warm-border)", color: "var(--text-muted)" }}>
            <p className="font-bold" style={{ color: "var(--text-secondary)" }}>Sources</p>
            <p>Hinshaw, S.P. & Ellison, K. (2015). <em>ADHD: What Everyone Needs to Know.</em> Oxford University Press.</p>
            <p>Quinn, P.O. & Madhoo, M. (2014). A review of attention-deficit/hyperactivity disorder in women and girls. <em>The Primary Care Companion for CNS Disorders, 16</em>(3).</p>
            <p>Nussbaum, N.L. (2012). ADHD and female specific concerns. <em>Journal of Attention Disorders, 16</em>(2), 87–100.</p>
            <p>Biederman, J. et al. (2010). Adult psychiatric outcomes of girls with attention deficit hyperactivity disorder. <em>Archives of General Psychiatry, 67</em>(4).</p>
          </div>

          {/* Internal links */}
          <div className="mt-10 pt-8" style={{ borderTop: "1px solid var(--warm-border)" }}>
            <p className="text-sm font-bold mb-4" style={{ color: "var(--text-muted)" }}>Related Articles</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/learn/adhd-vs-anxiety/", label: "ADHD vs Anxiety: How to Tell the Difference →" },
                { href: "/learn/executive-dysfunction/", label: "What Is Executive Dysfunction? →" },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="block p-4 rounded-xl border text-sm font-semibold hover:opacity-80 transition-opacity"
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
