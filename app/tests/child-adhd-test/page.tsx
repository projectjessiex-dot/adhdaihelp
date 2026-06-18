"use client";

import React, { useState } from "react";
import Link from "next/link";

// ── SNAP-IV-26 (18 ADHD items) — English, DSM-5 criteria ─────────
// Inattention: Q1–9  |  Hyperactivity/Impulsivity: Q10–18

const questions = [
  // Inattention
  { id: 1,  text: "Fails to give close attention to details, or makes careless mistakes in schoolwork or other activities." },
  { id: 2,  text: "Has difficulty sustaining attention in tasks or play activities." },
  { id: 3,  text: "Does not seem to listen when spoken to directly." },
  { id: 4,  text: "Does not follow through on instructions and fails to finish schoolwork or chores (not due to defiance or failure to understand)." },
  { id: 5,  text: "Has difficulty organizing tasks and activities." },
  { id: 6,  text: "Avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort." },
  { id: 7,  text: "Loses things necessary for tasks or activities (e.g., toys, school assignments, pencils, books)." },
  { id: 8,  text: "Is easily distracted by extraneous stimuli." },
  { id: 9,  text: "Is forgetful in daily activities." },
  // Hyperactivity / Impulsivity
  { id: 10, text: "Fidgets with hands or feet, or squirms in seat." },
  { id: 11, text: "Leaves seat in classroom or in other situations where remaining seated is expected." },
  { id: 12, text: "Runs about or climbs excessively in situations where it is inappropriate." },
  { id: 13, text: "Has difficulty playing or engaging in leisure activities quietly." },
  { id: 14, text: "Is 'on the go' or often acts as if 'driven by a motor'." },
  { id: 15, text: "Talks excessively." },
  { id: 16, text: "Blurts out answers before questions have been completed." },
  { id: 17, text: "Has difficulty awaiting turn." },
  { id: 18, text: "Interrupts or intrudes on others (e.g., butts into conversations or games)." },
];

const options = [
  { label: "Not at all",   score: 0 },
  { label: "Just a little", score: 1 },
  { label: "Pretty much",  score: 2 },
  { label: "Very much",    score: 3 },
];

// ── Scoring ───────────────────────────────────────────────────────
// Inattention subscale: Q1–9 (indices 0–8), max 27
// H/I subscale: Q10–18 (indices 9–17), max 27
// Clinical threshold: avg score ≥ 2.0 per subscale = clinically significant

function getResult(answers: number[]) {
  const inattention   = answers.slice(0, 9).reduce((s, v) => s + v, 0);
  const hyperactivity = answers.slice(9, 18).reduce((s, v) => s + v, 0);
  const inAvg  = inattention / 9;
  const hyAvg  = hyperactivity / 9;
  const bothClinical = inAvg >= 2.0 && hyAvg >= 2.0;
  const eitherHigh   = inAvg >= 2.0 || hyAvg >= 2.0;
  const dominant =
    inAvg > hyAvg ? "Inattentive" : hyAvg > inAvg ? "Hyperactive-Impulsive" : "Combined";

  if (bothClinical) {
    return {
      level: "high" as const,
      color: "#B05050",
      headline: "Significant ADHD Symptoms Reported",
      type: "Combined Type",
      summary:
        "Your responses indicate a high level of symptoms in both inattention and hyperactivity/impulsivity — consistent with ADHD Combined Type. This doesn't mean your child is \"bad\" or that you're doing anything wrong. ADHD is a neurodevelopmental difference, not a discipline failure. A professional evaluation is strongly recommended.",
      nextSteps: [
        "Request a formal ADHD evaluation from your child's pediatrician or a child psychiatrist",
        "Bring a printed copy of these results to the appointment",
        "Ask your child's school about an educational support plan (IEP or 504 plan)",
        "Read: What is Executive Dysfunction? — to understand what your child is experiencing",
        "Remember: early support leads to significantly better outcomes",
      ],
    };
  }

  if (inAvg >= 2.0) {
    return {
      level: "high" as const,
      color: "#B05050",
      headline: "Significant Inattention Symptoms Reported",
      type: "Inattentive Type",
      summary:
        "Your responses suggest significant inattention symptoms that may be consistent with ADHD Inattentive Type. Children with this profile often go undiagnosed longer because they aren't disruptive — they're quietly struggling. A professional evaluation can provide clarity and open the door to support.",
      nextSteps: [
        "Request a formal ADHD evaluation — mention inattention specifically",
        "Girls with ADHD are often inattentive type and particularly underdiagnosed",
        "Ask the school if they've noticed attention difficulties in class",
        "Read: ADHD in Women — inattentive ADHD is often first seen in childhood",
      ],
    };
  }

  if (hyAvg >= 2.0) {
    return {
      level: "high" as const,
      color: "#B05050",
      headline: "Significant Hyperactivity Symptoms Reported",
      type: "Hyperactive-Impulsive Type",
      summary:
        "Your responses suggest significant hyperactivity and impulsivity that may be consistent with ADHD Hyperactive-Impulsive Type. This is the most visible form of ADHD — and also one of the most frequently misunderstood as 'bad behavior.' A professional evaluation will help you understand what's really going on.",
      nextSteps: [
        "Request a formal ADHD evaluation from a pediatric specialist",
        "Ask the school for a behavioral observation report",
        "Explore sensory-friendly environments and movement breaks",
        "Avoid framing symptoms as defiance — this child's brain needs movement",
      ],
    };
  }

  if (inAvg >= 1.5 || hyAvg >= 1.5) {
    return {
      level: "moderate" as const,
      color: "#C4923A",
      headline: "Some ADHD-Like Symptoms Detected",
      type: `Possible ${dominant} Tendencies`,
      summary:
        "Your responses suggest some symptoms in line with ADHD, but below the clinical threshold. This could reflect a milder presentation, situational stress, anxiety, or an early stage of symptoms. It may be worth monitoring closely and discussing with your child's doctor.",
      nextSteps: [
        "Share these results with your child's pediatrician at the next visit",
        "Track symptoms over the next 4–6 weeks to see if they persist",
        "Check in with the school — teachers often notice patterns parents don't see at home",
        "Read: ADHD vs. Anxiety — symptoms can look identical",
      ],
    };
  }

  return {
    level: "low" as const,
    color: "var(--sage)",
    headline: "Few ADHD Symptoms Reported",
    type: "Low Likelihood",
    summary:
      "Your responses suggest that your child is not currently showing a significant pattern of ADHD symptoms. That said, ADHD can present differently across settings — if you still have concerns, a conversation with your child's doctor or teacher is always worthwhile.",
    nextSteps: [
      "Consider whether symptoms appear more in specific settings (school vs. home)",
      "Read: ADHD vs. Anxiety — some anxiety disorders mimic ADHD symptoms",
      "Trust your instincts — you know your child best",
    ],
  };
}

// ── Component ─────────────────────────────────────────────────────
export default function ChildAdhdTest() {
  const [started, setStarted]         = useState(false);
  const [currentIdx, setCurrentIdx]   = useState(0);
  const [answers, setAnswers]         = useState<Record<number, number>>({});
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [finished, setFinished]       = useState(false);
  const [finalAnswers, setFinalAnswers] = useState<number[]>([]);

  const total    = questions.length;
  const progress = (currentIdx / total) * 100;

  const handleNext = () => {
    if (selectedScore === null) return;
    const updated = { ...answers, [currentIdx]: selectedScore };
    setAnswers(updated);
    if (currentIdx < total - 1) {
      setCurrentIdx((i) => i + 1);
      setSelectedScore(updated[currentIdx + 1] ?? null);
    } else {
      const arr = Array.from({ length: total }, (_, i) => updated[i] ?? 0);
      setFinalAnswers(arr);
      setFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx === 0) return;
    if (selectedScore !== null) setAnswers((a) => ({ ...a, [currentIdx]: selectedScore! }));
    setCurrentIdx((i) => i - 1);
    setSelectedScore(answers[currentIdx - 1] ?? null);
  };

  const reset = () => {
    setStarted(false); setCurrentIdx(0); setAnswers({});
    setSelectedScore(null); setFinished(false); setFinalAnswers([]);
  };

  // ── Result ───────────────────────────────────────────────────────
  if (finished) {
    const result = getResult(finalAnswers);
    const inScore = finalAnswers.slice(0, 9).reduce((s, v) => s + v, 0);
    const hyScore = finalAnswers.slice(9).reduce((s, v) => s + v, 0);
    const inPct   = Math.round((inScore / 27) * 100);
    const hyPct   = Math.round((hyScore / 27) * 100);

    return (
      <div className="min-h-screen px-4 py-12" style={{ background: "var(--warm-bg)" }}>
        <div className="max-w-xl mx-auto">

          <div className="text-center mb-8">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full text-white mb-4"
              style={{ background: result.color }}
            >
              {result.type}
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
              {result.headline}
            </h1>
            <p className="text-base leading-relaxed max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
              {result.summary}
            </p>
          </div>

          {/* Score breakdown */}
          <div className="rounded-2xl p-6 mb-6 border" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: "var(--text-muted)" }}>
              Score Breakdown
            </h2>
            {[
              { label: "Inattention", score: inScore, max: 27, pct: inPct },
              { label: "Hyperactivity / Impulsivity", score: hyScore, max: 27, pct: hyPct },
            ].map((d) => (
              <div key={d.label} className="mb-5 last:mb-0">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold" style={{ color: "var(--text-primary)" }}>{d.label}</span>
                  <span style={{ color: "var(--text-muted)" }}>{d.score} / {d.max}</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--warm-border)" }}>
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${d.pct}%`, background: result.color }} />
                </div>
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  Average: {(d.score / 9).toFixed(1)} / 3.0
                  {d.score / 9 >= 2.0 && <span className="ml-2 font-bold" style={{ color: result.color }}>· Above clinical threshold</span>}
                </p>
              </div>
            ))}
            <p className="text-xs mt-4 pt-4 border-t" style={{ borderColor: "var(--warm-border)", color: "var(--text-muted)" }}>
              Clinical threshold: average ≥ 2.0 per subscale (SNAP-IV criteria)
            </p>
          </div>

          {/* Next steps */}
          <div className="rounded-2xl p-6 mb-6 border" style={{ background: "var(--sage-50)", borderColor: "var(--sage-100)" }}>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "var(--sage-dark)" }}>
              Suggested Next Steps
            </h2>
            <ul className="space-y-3">
              {result.nextSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: "var(--sage)" }}>
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* Ad placeholder */}
          <div className="rounded-2xl p-4 mb-6 text-center text-xs border"
            style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--text-muted)" }}>
            <span className="opacity-40">[ Advertisement ]</span>
          </div>

          {/* Disclaimer */}
          <div className="rounded-2xl p-5 mb-8 text-xs leading-relaxed border"
            style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--text-muted)" }}>
            <strong>Important:</strong> This screener is based on the SNAP-IV Rating Scale and DSM-5 criteria for childhood ADHD. It is completed by a parent or caregiver and is for informational purposes only — it is <em>not</em> a medical diagnosis. Only a qualified clinician (pediatrician, child psychiatrist, or psychologist) can diagnose ADHD in a child.
          </div>

          {/* Internal links */}
          <div className="rounded-2xl p-5 mb-6 border" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>Explore Next</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { href: "/learn/executive-dysfunction/", label: "What Is Executive Dysfunction? →" },
                { href: "/learn/adhd-vs-anxiety/", label: "ADHD vs Anxiety →" },
                { href: "/tests/adult-adhd-test/", label: "Adult ADHD Test (for parents) →" },
                { href: "/tools/brain-dump/", label: "Try the Brain Dump Tool →" },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="block p-3 rounded-xl border text-xs font-semibold hover:opacity-80"
                  style={{ background: "var(--sage-50)", borderColor: "var(--sage-100)", color: "var(--sage-dark)" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={reset}
              className="flex-1 py-3.5 rounded-full font-bold text-sm border-2 transition-colors"
              style={{ borderColor: "var(--sage-light)", color: "var(--sage-dark)" }}>
              Retake Test
            </button>
            <Link href="/learn/executive-dysfunction/"
              className="flex-1 py-3.5 rounded-full font-bold text-sm text-white text-center transition-opacity hover:opacity-90"
              style={{ background: "var(--sage)" }}>
              What Is Executive Dysfunction? →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Intro ────────────────────────────────────────────────────────
  if (!started) {
    return (
      <div className="min-h-screen px-4 py-16" style={{ background: "var(--warm-bg)" }}>
        <div className="max-w-lg mx-auto text-center">
          <div className="flex justify-center mb-6">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="var(--sage)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="13" cy="14" r="6"/>
              <path d="M4 46V35C4 31 8 29 13 29C18 29 22 31 22 35V46"/>
              <circle cx="28" cy="18" r="5"/>
              <path d="M20 46V37C20 34 23 32 28 32C33 32 36 34 36 37V46"/>
              <circle cx="43" cy="14" r="6"/>
              <path d="M34 46V35C34 31 38 29 43 29C48 29 52 31 52 35V46"/>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
            Child ADHD Screener
          </h1>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Based on the <strong>SNAP-IV Rating Scale</strong> and <strong>DSM-5 criteria</strong> — the standard clinical checklist used by pediatricians and child psychologists.
          </p>

          <div className="rounded-2xl p-6 mb-6 text-left border" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
            <div className="grid grid-cols-3 gap-4 text-center mb-6">
              {([
                { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--sage-dark)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="4" width="14" height="15" rx="2"/><path d="M8.5 4V3C8.5 2.4 9 2 9.5 2H12.5C13 2 13.5 2.4 13.5 3V4"/><line x1="7.5" y1="9" x2="14.5" y2="9"/><line x1="7.5" y1="12" x2="14.5" y2="12"/><line x1="7.5" y1="15" x2="12" y2="15"/></svg>, label: "18 questions" },
                { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--sage-dark)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="11" y1="7" x2="11" y2="11"/><line x1="11" y1="11" x2="14.5" y2="13"/></svg>, label: "4–5 minutes" },
                { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--sage-dark)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="7" r="4"/><path d="M3.5 20C3.5 16 6.5 13.5 11 13.5C15.5 13.5 18.5 16 18.5 20"/></svg>, label: "For parents" },
              ] as { icon: React.ReactNode; label: string }[]).map((item) => (
                <div key={item.label}>
                  <div className="flex justify-center mb-2">{item.icon}</div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Answer based on your child&apos;s behavior over the <strong>past 6 months</strong>, across different settings (home, school, social). Think of how your child compares to other children the same age.
            </p>
          </div>

          <div className="rounded-xl p-5 mb-8 text-sm text-left border-2"
            style={{ background: "var(--sage-50)", borderColor: "var(--sage)", color: "var(--text-secondary)" }}>
            <p className="font-bold mb-1" style={{ color: "var(--sage-dark)" }}>Important — please read before starting:</p>
            <p>This is <strong>not a diagnostic tool</strong>. Results are for informational purposes only and cannot replace a formal evaluation by a qualified clinician. Designed for children aged <strong>5–17</strong>; high activity in younger children may be developmentally normal.</p>
          </div>

          <button onClick={() => setStarted(true)}
            className="w-full py-4 rounded-full font-bold text-white text-lg transition-opacity hover:opacity-90"
            style={{ background: "var(--sage)" }}>
            Start the Screener →
          </button>
          <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
            No account needed · Results shown instantly · Not stored anywhere
          </p>
        </div>
      </div>
    );
  }

  // ── Quiz ─────────────────────────────────────────────────────────
  const question    = questions[currentIdx];
  const section     = currentIdx < 9 ? "Inattention" : "Hyperactivity / Impulsivity";
  const canGoNext   = selectedScore !== null;
  const isLast      = currentIdx === total - 1;

  return (
    <div className="min-h-screen px-4 py-10" style={{ background: "var(--warm-bg)" }}>
      <div className="max-w-xl mx-auto rounded-3xl border p-8 md:p-10"
        style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>

        {/* Progress */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1">
            <div className="flex justify-between text-xs mb-2" style={{ color: "var(--text-muted)" }}>
              <span>Question {currentIdx + 1} of {total}</span>
              <span>{section}</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--warm-border)" }}>
              <div className="h-full rounded-full transition-all duration-400"
                style={{ width: `${progress}%`, background: "var(--sage)" }} />
            </div>
          </div>
          <button onClick={reset}
            className="text-xs px-3 py-1.5 rounded-full border flex-shrink-0"
            style={{ borderColor: "var(--warm-border)", color: "var(--text-muted)" }}>
            Exit
          </button>
        </div>

        {/* Section label */}
        <div className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
          style={{ background: "var(--sage-50)", color: "var(--sage-dark)" }}>
          {section}
        </div>

        {/* Question — framed for parent perspective */}
        <p className="text-base md:text-lg font-semibold leading-relaxed mb-2"
          style={{ color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          My child...
        </p>
        <p className="text-lg md:text-xl font-semibold leading-relaxed mb-8"
          style={{ color: "var(--text-primary)" }}>
          {question.text}
        </p>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {options.map((opt) => {
            const isSelected = selectedScore === opt.score;
            return (
              <button key={opt.score} onClick={() => setSelectedScore(opt.score)}
                className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl border-2 text-left transition-all"
                style={{
                  borderColor: isSelected ? "var(--sage)" : "var(--warm-border)",
                  background: isSelected ? "var(--sage-50)" : "var(--warm-card)",
                  transform: isSelected ? "translateX(4px)" : "translateX(0)",
                }}>
                <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center transition-all"
                  style={{
                    border: isSelected ? "none" : "2px solid var(--warm-border)",
                    background: isSelected ? "var(--sage)" : "transparent",
                  }}>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <span className="font-semibold text-sm flex-1"
                  style={{ color: isSelected ? "var(--sage-dark)" : "var(--text-primary)" }}>
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between">
          <button onClick={handlePrev} disabled={currentIdx === 0}
            className="px-5 py-3 rounded-full border text-sm font-semibold transition-all"
            style={{
              borderColor: "var(--warm-border)",
              color: currentIdx === 0 ? "var(--text-muted)" : "var(--text-secondary)",
              opacity: currentIdx === 0 ? 0.4 : 1,
            }}>
            ← Back
          </button>
          <button onClick={handleNext} disabled={!canGoNext}
            className="px-6 py-3 rounded-full text-sm font-bold text-white transition-all"
            style={{
              background: canGoNext ? "var(--sage)" : "var(--warm-border)",
              color: canGoNext ? "white" : "var(--text-muted)",
              cursor: canGoNext ? "pointer" : "not-allowed",
            }}>
            {isLast ? "See Results →" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}
