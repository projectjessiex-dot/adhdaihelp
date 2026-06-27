import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenIcon, FlaskIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "ADHD FAQ: Answers to the Most Common Questions About ADHD",
  description:
    "What is ADHD? Can you develop it as an adult? Is it genetic? Can it be treated without medication? Expert-backed answers to the most frequently asked questions about ADHD.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ADHD (Attention Deficit Hyperactivity Disorder) is a neurodevelopmental disorder characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with daily functioning. It is one of the most common mental health conditions, affecting approximately 5–7% of adults and 5–10% of children worldwide. ADHD is not a choice, a personality trait, or a result of poor parenting — it reflects genuine differences in brain structure, function, and chemistry, particularly in the prefrontal cortex and dopamine signaling systems.",
      },
    },
    {
      "@type": "Question",
      name: "What are the three types of ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DSM-5 recognizes three ADHD presentations: Predominantly Inattentive (difficulty sustaining attention, frequent distractibility, disorganization, forgetfulness — previously called ADD), Predominantly Hyperactive-Impulsive (restlessness, difficulty sitting still, impulsivity, interrupting others), and Combined Type (significant symptoms in both categories). Most adults with ADHD have the Combined or Inattentive presentation. The hyperactive component often becomes less visible with age, while attentional difficulties typically persist.",
      },
    },
    {
      "@type": "Question",
      name: "Can you develop ADHD as an adult?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ADHD is present from early childhood in most cases — it is a developmental disorder, not something that typically emerges for the first time in adulthood. However, many adults are not diagnosed until later in life, sometimes not until their 30s, 40s, or 50s. This happens most often in people with the inattentive presentation, especially women, whose symptoms were overlooked or misdiagnosed in childhood. A small subset of adults may appear to develop ADHD-like symptoms following brain injury or in association with other conditions, but this is distinct from classic developmental ADHD.",
      },
    },
    {
      "@type": "Question",
      name: "Is ADHD genetic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — ADHD has strong hereditary components. Studies of twins and families consistently show high heritability estimates of 70–80%. Having a first-degree relative (parent or sibling) with ADHD significantly increases your risk. Several genes related to dopamine transmission (particularly DRD4 and DAT1) have been associated with ADHD risk, though no single gene determines whether someone develops it. Genetics interact with environmental factors — prenatal stress, low birth weight, and early childhood adversity can increase severity in genetically predisposed individuals.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if ADHD goes untreated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untreated ADHD is associated with significantly higher rates of secondary problems across many life domains: lower academic and occupational achievement, higher rates of unemployment and job turnover, increased risk of substance abuse, more car accidents and traffic violations, financial instability, higher divorce rates, and co-occurring mental health conditions including anxiety, depression, and substance use disorders. Effective treatment — whether medication, behavioral strategies, or both — meaningfully reduces these risks. Getting diagnosed and treated, even in adulthood, can be life-changing.",
      },
    },
    {
      "@type": "Question",
      name: "Can ADHD be treated without medication?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — non-medication treatments can be effective, especially for mild to moderate ADHD. These include cognitive behavioral therapy adapted for ADHD (CBT-A), behavioral coaching, organizational skills training, mindfulness practices, regular physical exercise, and dietary adjustments. Environmental modifications — reducing distractions, using timers and visual schedules, breaking tasks into small steps — help many people manage symptoms. However, for moderate to severe ADHD, medication is typically the most powerful and evidence-backed intervention. Many people benefit from combining medication with behavioral strategies. There is no evidence that ADHD can be 'cured' without treatment.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between ADHD and autism?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ADHD and autism (ASD) are distinct neurodevelopmental conditions that frequently co-occur. ADHD is characterized primarily by difficulties with attention regulation, impulsivity, and, in some presentations, hyperactivity. Autism is characterized by differences in social communication and restricted or repetitive behaviors and interests. Both affect executive function, and both are associated with sensory sensitivities. Clinically, the key distinction is that autism involves fundamental differences in social communication and behavioral flexibility, while ADHD involves primarily attentional and impulse-control differences. Approximately 50–70% of autistic individuals also meet criteria for ADHD, and the two conditions require different support approaches.",
      },
    },
    {
      "@type": "Question",
      name: "Does sugar cause ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — there is no credible scientific evidence that sugar causes ADHD. This is one of the most persistent myths about the condition. Sugar does not cross the blood-brain barrier in amounts sufficient to affect neurotransmitter systems implicated in ADHD. What can happen is that sugar spikes and crashes in blood glucose produce symptoms (restlessness, difficulty concentrating, irritability) that look similar to ADHD, particularly in children. Additionally, children in exciting environments after consuming sugar may appear hyperactive due to environmental stimulation, not the sugar itself. The misconception likely persists because ADHD symptoms often become more visible during unstructured or boring situations, such as after a sugar treat at a party.",
      },
    },
    {
      "@type": "Question",
      name: "How is ADHD diagnosed in adults?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adult ADHD diagnosis is typically made by a psychiatrist, psychologist, or specially trained primary care physician. The process involves: a clinical interview covering childhood history (symptoms must be present before age 12 for a valid adult diagnosis), current symptom inventory (using standardized tools like the ASRS or CAADID), ruling out other conditions that could explain symptoms (anxiety, depression, sleep disorders, thyroid problems, substance use), and gathering collateral information when possible (old records, informant reports). There is no single test — diagnosis is a clinical judgment based on the pattern of evidence. A thorough evaluation takes 1–3 sessions.",
      },
    },
    {
      "@type": "Question",
      name: "Do people with ADHD have higher intelligence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ADHD is not associated with overall intelligence — it cuts across all intelligence levels equally. However, people with ADHD often have uneven cognitive profiles: they may score very high in creative thinking and fluid intelligence while scoring lower in sustained attention and working memory tasks. Many individuals with ADHD describe feeling that their brains work differently rather than simply 'less' — the same brain that struggles to focus on boring tasks can hyperfocus intensely on tasks of high interest. Some researchers argue this pattern reflects a different cognitive architecture, not a deficiency.",
      },
    },
    {
      "@type": "Question",
      name: "Can someone with ADHD live a normal life?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. With appropriate diagnosis, treatment, and support, people with ADHD lead full, successful lives. Many of the world's most accomplished entrepreneurs, artists, athletes, doctors, and academics have ADHD — and credit aspects of their ADHD thinking style (creativity, ability to hyperfocus, high energy) as part of their success. The key variables are: early and accurate diagnosis, access to effective treatment (medication and/or behavioral strategies), understanding and support from family and employers, and environmental adaptations that work with the ADHD brain rather than against it. Untreated or misdiagnosed ADHD is what creates struggle — not the condition itself.",
      },
    },
    {
      "@type": "Question",
      name: "What is Rejection Sensitive Dysphoria (RSD)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rejection Sensitive Dysphoria (RSD) is an intense emotional reaction to perceived rejection, criticism, or failure that is particularly common in people with ADHD — though it is not yet a formal diagnostic category. It involves experiencing emotional pain that feels disproportionate to the triggering event, often described as almost physically painful. People with RSD may go to great lengths to avoid situations where they might fail or be rejected, which can mimic anxiety or avoidance personality patterns. Emotional dysregulation more broadly — the tendency for emotions to arrive at full intensity without the usual regulatory brake — is a core feature of ADHD that is underrecognized and undertreated.",
      },
    },
  ],
};

export default function AdhdFaq() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen" style={{ background: "var(--warm-bg)" }}>

        {/* Hero */}
        <div className="px-4 py-14 text-center" style={{ background: "var(--sage-50)" }}>
          <div className="max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
              style={{ background: "var(--sage-100)", color: "var(--sage-dark)" }}>FAQ</span>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
              ADHD FAQ: Answers to the Most Common Questions
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Evidence-based answers to the questions people ask most about ADHD — from symptoms and diagnosis to treatment and daily life.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-xs" style={{ color: "var(--text-muted)" }}>
              <span className="inline-flex items-center gap-1"><BookOpenIcon size={13} /> 6 min read</span>
              <span className="inline-flex items-center gap-1"><FlaskIcon size={13} /> Research-based</span>
            </div>
          </div>
        </div>

        <article className="max-w-2xl mx-auto px-4 py-12">

          <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            ADHD is one of the most researched — and most misunderstood — mental health conditions. Whether you&apos;re wondering if you might have ADHD, recently diagnosed, or supporting someone who does, these answers are grounded in current science and designed to be actually useful.
          </p>

          {/* CTA */}
          <div className="rounded-2xl p-7 mb-10 text-center" style={{ background: "var(--sage)" }}>
            <h3 className="text-lg font-extrabold text-white mb-2">Think you might have ADHD?</h3>
            <p className="text-sm mb-5" style={{ color: "var(--sage-100)" }}>Take our free, research-based screener — no sign-up required, results in 3 minutes.</p>
            <Link href="/tests/adult-adhd-test/"
              className="inline-block font-bold px-6 py-3 rounded-full text-sm"
              style={{ background: "white", color: "var(--sage-dark)" }}>
              Take the Free ADHD Test →
            </Link>
          </div>

          {/* FAQ */}
          <h2 className="text-xl md:text-2xl font-extrabold mb-6 mt-8" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item, index) => (
              <div key={item.name} className="rounded-2xl border overflow-hidden" style={{ borderColor: "var(--warm-border)" }}>
                <div className="p-5" style={{ background: "var(--sage-50)" }}>
                  <h3 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                    {index + 1}. {item.name}
                  </h3>
                </div>
                <div className="p-5 text-sm leading-relaxed" style={{ background: "var(--warm-card)", color: "var(--text-secondary)" }}>
                  {item.acceptedAnswer.text}
                </div>
              </div>
            ))}
          </div>

          {/* Ad placeholder */}
          <div className="rounded-2xl p-4 mt-10 mb-8 text-center text-xs border"
            style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--text-muted)" }}>
            <span className="opacity-40">[ Advertisement ]</span>
          </div>

          {/* Disclaimer */}
          <div className="rounded-2xl p-5 mb-8 text-xs leading-relaxed border"
            style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--text-muted)" }}>
            <strong>Disclaimer:</strong> This FAQ is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. ADHD is a clinical diagnosis that must be made by a qualified healthcare professional. If you have concerns about ADHD for yourself or your child, please consult a psychiatrist, psychologist, or your primary care physician.
          </div>

          {/* Related content */}
          <h2 className="text-xl md:text-2xl font-extrabold mb-5 mt-10" style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--sage)", paddingLeft: "1rem" }}>
            Explore ADHDClarity
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/learn/adhd-in-women/", label: "ADHD in Women: Why It Goes Undiagnosed" },
              { href: "/learn/executive-dysfunction/", label: "What Is Executive Dysfunction?" },
              { href: "/learn/adhd-vs-anxiety/", label: "ADHD vs Anxiety: How to Tell the Difference" },
              { href: "/learn/adhd-time-blindness/", label: "ADHD and Time Blindness" },
              { href: "/tests/adult-adhd-test/", label: "Free Adult ADHD Screener →" },
              { href: "/tests/adhd-type-quiz/", label: "Find Your ADHD Type Quiz →" },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="block p-4 rounded-xl border text-sm font-semibold hover:opacity-80"
                style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--sage-dark)" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
