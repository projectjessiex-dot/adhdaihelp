import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ADHD vs Anxiety: How to Tell the Difference",
  description:
    "ADHD and anxiety share many symptoms — but the causes and treatments are different. Learn how to distinguish them, why they so often co-occur, and what to do next.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you have both ADHD and anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and it's very common. Studies show that approximately 50% of adults with ADHD also meet criteria for an anxiety disorder. The two conditions frequently co-occur, and untreated ADHD often generates secondary anxiety as a person repeatedly fails to meet their own expectations, misses deadlines, and struggles in social and professional settings. Treating the underlying ADHD sometimes reduces anxiety significantly.",
      },
    },
    {
      "@type": "Question",
      name: "What is the key difference between ADHD and anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The core difference is the source of the distraction. In ADHD, the mind wanders because it's seeking stimulation — it drifts to anything more interesting or novel. In anxiety, the mind is hijacked by a specific worry — it returns obsessively to the same fear. People with ADHD are distracted by everything; people with anxiety are distracted by one thing. Another key difference: ADHD is present from childhood and is consistent across settings, while anxiety disorders can develop at any age and may be tied to specific triggers.",
      },
    },
    {
      "@type": "Question",
      name: "Can ADHD cause anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Unmanaged ADHD creates the conditions for anxiety: chronic disorganization, repeated missed deadlines, social mistakes, and the constant fear of what you'll forget next can generate an anxious state that looks like generalized anxiety disorder. For many people, anxiety is a consequence of undiagnosed ADHD rather than a separate primary condition. This is why correctly identifying which came first matters — treating anxiety without addressing ADHD often leads to only partial improvement.",
      },
    },
    {
      "@type": "Question",
      name: "Do ADHD and anxiety have the same symptoms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Several symptoms overlap: difficulty concentrating, restlessness, sleep problems, and irritability appear in both. However, the cause of each symptom differs. ADHD-related concentration problems come from difficulty sustaining attention. Anxiety-related concentration problems come from worries crowding out other thoughts. ADHD restlessness is physical and driven by the need for stimulation. Anxiety restlessness is driven by a sense of impending threat. The distinction matters for treatment.",
      },
    },
    {
      "@type": "Question",
      name: "How is ADHD with anxiety treated differently from anxiety alone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When ADHD and anxiety co-occur, treatment typically addresses both — but the order and approach matters. If ADHD is primary and anxiety is secondary, treating ADHD first (with medication and/or behavioral strategies) often reduces anxiety naturally. If anxiety is severe, it may need to be stabilized first, since stimulant medications can initially worsen anxiety. A psychiatrist who specializes in both conditions is ideal for developing a treatment plan.",
      },
    },
  ],
};

const comparisonRows = [
  { feature: "Source of distraction", adhd: "Mind seeks novelty and stimulation", anxiety: "Mind returns to a specific worry" },
  { feature: "Onset", adhd: "Childhood (even if diagnosed later)", anxiety: "Can develop at any age" },
  { feature: "Sleep problems", adhd: "Racing thoughts, can't wind down", anxiety: "Lying awake worrying about specific things" },
  { feature: "Concentration difficulty", adhd: "Bored or unstimulated tasks → mind wanders", anxiety: "Worry crowds out ability to focus" },
  { feature: "Restlessness", adhd: "Physical need to move; driven by a 'motor'", anxiety: "Tension, physical on-edge feeling" },
  { feature: "Irritability", adhd: "Frustration from overstimulation or task demands", anxiety: "Tension and hypervigilance" },
  { feature: "Memory issues", adhd: "Working memory deficits; forgets even when trying", anxiety: "Distraction from worry impairs encoding" },
  { feature: "Responds to stimulants?", adhd: "Usually yes — reduces symptoms", anxiety: "May worsen anxiety in some cases" },
];

export default function AdhdVsAnxiety() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen" style={{ background: "var(--warm-bg)" }}>

        {/* Hero */}
        <div className="px-4 py-14 text-center" style={{ background: "var(--sage-50)" }}>
          <div className="max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
              style={{ background: "var(--sage-100)", color: "var(--sage-dark)" }}>Popular</span>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
              ADHD vs Anxiety: How to Tell the Difference
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              The symptoms overlap almost completely — but the causes and treatments are different. Here&apos;s how to tell them apart, and why it matters.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-xs" style={{ color: "var(--text-muted)" }}>
              <span>📖 7 min read</span><span>🔬 Research-based</span><span>Updated 2025</span>
            </div>
          </div>
        </div>

        <article className="max-w-2xl mx-auto px-4 py-12">

          <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            Can&apos;t concentrate. Restless. Can&apos;t sleep. Irritable. Forget things constantly. These symptoms describe both ADHD and anxiety — which is why so many people get one diagnosis when they actually have the other, or both at the same time.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            Getting the distinction right matters because the treatments are different. Stimulant medication is a first-line treatment for ADHD but can worsen anxiety in some people. Therapy for generalized anxiety uses different techniques than behavioral strategies for ADHD. Misdiagnosis means years of treatment that only partially works.
          </p>

          <h2 className="text-xl md:text-2xl font-extrabold mb-4 mt-10" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
            The Core Difference
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
            Here&apos;s the clearest way to think about it:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: "ADHD", color: "var(--sage)", icon: "🔀", text: "The mind wanders because it's seeking something more interesting. It drifts everywhere — it's not stuck on anything, it's just not staying put." },
              { label: "Anxiety", color: "#C4923A", icon: "🔁", text: "The mind returns obsessively to a specific worry. It's not distracted by everything — it's captured by one thing it can't let go of." },
            ].map(item => (
              <div key={item.label} className="rounded-2xl p-5 border" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-extrabold text-white text-sm px-3 py-1 rounded-full" style={{ background: item.color }}>{item.label}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.text}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl md:text-2xl font-extrabold mb-5 mt-10" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
            Symptom-by-Symptom Comparison
          </h2>
          <div className="rounded-2xl overflow-hidden border mb-8" style={{ borderColor: "var(--warm-border)" }}>
            <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-wider"
              style={{ background: "var(--sage)", color: "white" }}>
              <div className="p-4">Symptom</div>
              <div className="p-4">ADHD</div>
              <div className="p-4">Anxiety</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={row.feature} className="grid grid-cols-3 text-sm"
                style={{ background: i % 2 === 0 ? "var(--warm-card)" : "var(--sage-50)", borderTop: "1px solid var(--warm-border)" }}>
                <div className="p-4 font-semibold" style={{ color: "var(--text-primary)" }}>{row.feature}</div>
                <div className="p-4" style={{ color: "var(--text-secondary)" }}>{row.adhd}</div>
                <div className="p-4" style={{ color: "var(--text-secondary)" }}>{row.anxiety}</div>
              </div>
            ))}
          </div>

          <h2 className="text-xl md:text-2xl font-extrabold mb-4 mt-10" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
            Why They So Often Occur Together
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
            About <strong>50% of adults with ADHD</strong> also meet criteria for an anxiety disorder (Kessler et al., 2006). This is not a coincidence — there&apos;s a direct causal relationship:
          </p>
          <div className="space-y-3 mb-8">
            {[
              { title: "ADHD creates the conditions for anxiety", desc: "Chronic disorganization, forgotten commitments, social mistakes, and repeated underperformance generate a genuine, rational fear of what you'll mess up next. This is anxiety with a real cause." },
              { title: "Both affect the same brain circuits", desc: "ADHD and anxiety disorders both involve dysregulation of the prefrontal cortex and limbic system. Overlapping neurobiology means overlapping symptoms." },
              { title: "Anxiety can mask ADHD", desc: "Some people with ADHD develop anxiety-driven hypervigilance as a coping mechanism — triple-checking everything, arriving early, over-preparing. This can hide ADHD symptoms until a major life stressor breaks the coping strategy." },
            ].map(item => (
              <div key={item.title} className="rounded-2xl p-5 border" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
                <h3 className="font-bold mb-1 text-sm" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl md:text-2xl font-extrabold mb-4 mt-10" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
            Questions to Ask Your Doctor
          </h2>
          <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--sage-50)", border: "1.5px solid var(--sage-100)" }}>
            <ul className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
              {[
                "Were these symptoms present in childhood, before major stressors began? (ADHD) or Did they develop after a stressful event? (Anxiety)",
                "Does my concentration improve when I'm doing something I find genuinely interesting? (Points to ADHD)",
                "Do I worry about specific things, or does my mind just drift generally? (Specific worry = anxiety; general drift = ADHD)",
                "Would you consider screening me for both ADHD and an anxiety disorder?",
                "If I do have both, which should we treat first?",
              ].map((q, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5"
                    style={{ background: "var(--sage)" }}>{i + 1}</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="rounded-2xl p-7 mb-10 text-center" style={{ background: "var(--sage)" }}>
            <h3 className="text-lg font-extrabold text-white mb-2">Not sure which applies to you?</h3>
            <p className="text-sm mb-5" style={{ color: "var(--sage-100)" }}>Start with the free Adult ADHD screener — results in under 5 minutes.</p>
            <Link href="/tests/adult-adhd-test/"
              className="inline-block font-bold px-6 py-3 rounded-full text-sm"
              style={{ background: "white", color: "var(--sage-dark)" }}>
              Take the Free ADHD Test →
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
            <p>Kessler, R.C. et al. (2006). The prevalence and correlates of adult ADHD in the United States. <em>American Journal of Psychiatry, 163</em>(4), 716–723.</p>
            <p>Schatz, D.B. & Rostain, A.L. (2006). ADHD with comorbid anxiety: A review of the current literature. <em>Journal of Attention Disorders, 10</em>(2), 141–149.</p>
            <p>Tannock, R. (2009). ADHD with anxiety disorders. In T.E. Brown (Ed.), <em>ADHD Comorbidities.</em> American Psychiatric Publishing.</p>
          </div>

          <div className="mt-10 pt-8" style={{ borderTop: "1px solid var(--warm-border)" }}>
            <p className="text-sm font-bold mb-4" style={{ color: "var(--text-muted)" }}>Related Articles</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/learn/adhd-in-women/", label: "ADHD in Women: Why It Goes Undiagnosed →" },
                { href: "/learn/executive-dysfunction/", label: "What Is Executive Dysfunction? →" },
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
