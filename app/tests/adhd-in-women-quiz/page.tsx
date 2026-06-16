"use client";

import { useState } from "react";
import Link from "next/link";

// ── 12 questions focused on how ADHD presents in women ────────────
const questions = [
  { id: 1,  text: "You often feel overwhelmed by everyday tasks that seem effortless for other people." },
  { id: 2,  text: "When someone criticizes you — even gently — the emotional sting feels disproportionately intense." },
  { id: 3,  text: "You've spent years being told you're \"too sensitive,\" \"scatterbrained,\" or \"not living up to your potential.\"" },
  { id: 4,  text: "You can spend hours absorbed in something you love — but switching to a boring routine task feels almost physically painful." },
  { id: 5,  text: "You work significantly harder than others just to appear as competent — and that effort exhausts you." },
  { id: 6,  text: "Your emotions shift quickly and intensely, then pass — leaving others confused about what just happened." },
  { id: 7,  text: "You replay conversations afterward, worrying about what you said or how you came across." },
  { id: 8,  text: "You rarely start tasks until there's a deadline, a crisis, or a sudden burst of motivation." },
  { id: 9,  text: "You're often late — even when you planned to leave early. Time just disappears on you." },
  { id: 10, text: "You do well in areas you're passionate about, but consistently fall apart in routine or repetitive tasks." },
  { id: 11, text: "Your inner world feels far busier and louder than what people can see on the outside." },
  { id: 12, text: "You've always suspected that something about how you function is different — but could never fully explain it." },
];

const options = [
  { label: "Never",      score: 0 },
  { label: "Rarely",     score: 1 },
  { label: "Sometimes",  score: 2 },
  { label: "Often",      score: 3 },
  { label: "Very Often", score: 4 },
];

// Max = 48
function getResult(answers: number[]) {
  const total = answers.reduce((s, v) => s + v, 0);

  if (total <= 14) {
    return {
      level: "low" as const,
      color: "var(--sage)",
      headline: "Few Patterns Consistent with Female ADHD",
      summary:
        "Your responses suggest few of the patterns commonly seen in women with ADHD. That said, ADHD in women is significantly underdiagnosed — if you still have concerns, a conversation with a clinician is worthwhile. Anxiety, depression, and burnout can also produce overlapping symptoms.",
      total,
      nextSteps: [
        "Read: ADHD in Women — understand how symptoms differ from the male presentation",
        "Consider taking the full Adult ADHD Test (ASRS v1.1) for a more clinical picture",
        "If symptoms are affecting your daily life, discuss them with your doctor",
      ],
    };
  }

  if (total <= 28) {
    return {
      level: "moderate" as const,
      color: "#C4923A",
      headline: "Some Patterns Consistent with Female ADHD",
      summary:
        "Your responses show a moderate number of patterns commonly found in women with undiagnosed ADHD — particularly around emotional sensitivity, masking, and task-switching difficulty. These patterns alone don't confirm ADHD, but they're worth exploring further with a clinician who understands how ADHD presents in women.",
      total,
      nextSteps: [
        "Take the full Adult ADHD Self-Test (ASRS v1.1) for clinical-level detail",
        "Read: ADHD in Women — many women aren't diagnosed until their 30s or 40s",
        "Talk to a psychiatrist or psychologist — and specifically mention ADHD",
        "Document specific examples of how these patterns affect your daily life",
      ],
    };
  }

  return {
    level: "high" as const,
    color: "#B05050",
    headline: "Significant Patterns Consistent with Female ADHD",
    summary:
        "Your responses strongly align with how ADHD commonly presents in women — inward, emotional, exhausting, and easy to miss. Many women with this profile spent years being told they were \"too much\" or \"not enough\" before finally getting answers. You are not broken. Your brain is wired differently, and with the right support, that difference becomes manageable.",
    total,
    nextSteps: [
      "Take the full Adult ADHD Self-Test (ASRS v1.1) for a clinical-level screener",
      "Request a formal ADHD evaluation — specifically mention how symptoms present in women",
      "Read: ADHD in Women — understand why this goes undiagnosed for decades",
      "Try the Brain Dump Tool to start managing cognitive overload right now",
      "If your first provider dismisses your concerns, seek a second opinion",
    ],
  };
}

export default function AdhdInWomenQuiz() {
  const [started, setStarted]             = useState(false);
  const [currentIdx, setCurrentIdx]       = useState(0);
  const [answers, setAnswers]             = useState<Record<number, number>>({});
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [finished, setFinished]           = useState(false);
  const [finalAnswers, setFinalAnswers]   = useState<number[]>([]);

  const total    = questions.length;
  const progress = (currentIdx / total) * 100;

  const handleNext = () => {
    if (selectedScore === null) return;
    const updated = { ...answers, [currentIdx]: selectedScore };
    setAnswers(updated);
    if (currentIdx < total - 1) {
      setCurrentIdx(i => i + 1);
      setSelectedScore(updated[currentIdx + 1] ?? null);
    } else {
      const arr = Array.from({ length: total }, (_, i) => updated[i] ?? 0);
      setFinalAnswers(arr);
      setFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx === 0) return;
    if (selectedScore !== null) setAnswers(a => ({ ...a, [currentIdx]: selectedScore! }));
    setCurrentIdx(i => i - 1);
    setSelectedScore(answers[currentIdx - 1] ?? null);
  };

  const reset = () => {
    setStarted(false); setCurrentIdx(0); setAnswers({});
    setSelectedScore(null); setFinished(false); setFinalAnswers([]);
  };

  // ── Result ───────────────────────────────────────────────────────
  if (finished) {
    const result = getResult(finalAnswers);
    const pct = Math.round((result.total / 48) * 100);

    return (
      <div className="min-h-screen px-4 py-12" style={{ background: "var(--warm-bg)" }}>
        <div className="max-w-xl mx-auto">

          <div className="text-center mb-8">
            <span className="text-4xl block mb-4">🌸</span>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full text-white mb-4"
              style={{ background: result.color }}>
              {result.level === "low" ? "Low Likelihood" : result.level === "moderate" ? "Some Patterns Present" : "Significant Patterns Present"}
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
              {result.headline}
            </h1>
            <p className="text-base leading-relaxed max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
              {result.summary}
            </p>
          </div>

          {/* Score bar */}
          <div className="rounded-2xl p-6 mb-6 border" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Your Score</h2>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold" style={{ color: "var(--text-primary)" }}>Total score</span>
              <span style={{ color: "var(--text-muted)" }}>{result.total} / 48</span>
            </div>
            <div className="h-3 rounded-full overflow-hidden mb-3" style={{ background: "var(--warm-border)" }}>
              <div className="h-full rounded-full transition-all duration-700"
                style={{ width: `${pct}%`, background: result.color }} />
            </div>
            <div className="flex justify-between text-xs" style={{ color: "var(--text-muted)" }}>
              <span>0–14: Low</span>
              <span>15–28: Moderate</span>
              <span>29+: High</span>
            </div>
            <p className="text-xs mt-4 pt-4 border-t" style={{ borderColor: "var(--warm-border)", color: "var(--text-muted)" }}>
              This quiz reflects patterns specific to how ADHD commonly presents in women — including emotional sensitivity, masking, and internal hyperactivity.
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
                    style={{ background: "var(--sage)" }}>{i + 1}</span>
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
          <div className="rounded-2xl p-5 mb-6 text-xs leading-relaxed border"
            style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--text-muted)" }}>
            <strong>Important:</strong> This quiz is for informational purposes only and is <em>not</em> a medical diagnosis. Only a qualified healthcare professional — such as a psychiatrist or psychologist — can diagnose ADHD. If you have concerns, please consult a professional.
          </div>

          {/* Internal links */}
          <div className="rounded-2xl p-5 mb-6 border" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>Explore Next</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { href: "/learn/adhd-in-women/", label: "ADHD in Women: Full Guide →" },
                { href: "/tests/adult-adhd-test/", label: "Take the ASRS Screener →" },
                { href: "/learn/adhd-vs-anxiety/", label: "ADHD vs Anxiety →" },
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
              className="flex-1 py-3.5 rounded-full font-bold text-sm border-2"
              style={{ borderColor: "var(--sage-light)", color: "var(--sage-dark)" }}>
              Retake Quiz
            </button>
            <Link href="/learn/adhd-in-women/"
              className="flex-1 py-3.5 rounded-full font-bold text-sm text-white text-center hover:opacity-90"
              style={{ background: "var(--sage)" }}>
              Read the Full Guide →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Intro ─────────────────────────────────────────────────────────
  if (!started) {
    return (
      <div className="min-h-screen px-4 py-16" style={{ background: "var(--warm-bg)" }}>
        <div className="max-w-lg mx-auto text-center">
          <span className="text-5xl mb-6 block">🌸</span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "var(--text-primary)" }}>
            Always Felt Different, But Never Knew Why?
          </h1>
          <p className="text-lg mb-2 leading-relaxed font-semibold" style={{ color: "var(--sage-dark)" }}>
            ADHD in women is missed for decades. This quiz can help.
          </p>
          <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            ADHD looks different in women — it&apos;s quieter, more internal, and often mistaken for anxiety, sensitivity, or simply not trying hard enough. This 12-question quiz reflects those patterns specifically.
          </p>

          <div className="rounded-2xl p-6 mb-6 text-left border" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
            <div className="grid grid-cols-3 gap-4 text-center mb-6">
              {[
                { icon: "💬", label: "12 questions" },
                { icon: "⏱", label: "3–4 minutes" },
                { icon: "🔒", label: "Private & free" },
              ].map(item => (
                <div key={item.label}>
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Rate how often each statement applies to your life — <strong>across the past 6 months</strong>, in work, home, and social settings.
            </p>
          </div>

          <div className="rounded-xl p-5 mb-8 text-sm text-left border-2"
            style={{ background: "var(--sage-50)", borderColor: "var(--sage)", color: "var(--text-secondary)" }}>
            <p className="font-bold mb-1" style={{ color: "var(--sage-dark)" }}>Important — please read before starting:</p>
            <p>This is <strong>not a diagnostic tool</strong>. Results are for informational purposes only. Only a qualified healthcare professional can diagnose ADHD. Consult a professional before making any health decisions.</p>
          </div>

          <button onClick={() => setStarted(true)}
            className="w-full py-4 rounded-full font-bold text-white text-lg hover:opacity-90"
            style={{ background: "var(--sage)" }}>
            Start the Quiz →
          </button>
          <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
            No account needed · Results shown instantly · Not stored anywhere
          </p>
        </div>
      </div>
    );
  }

  // ── Quiz ─────────────────────────────────────────────────────────
  const q = questions[currentIdx];
  const canGoNext = selectedScore !== null;
  const isLast = currentIdx === total - 1;

  return (
    <div className="min-h-screen px-4 py-10" style={{ background: "var(--warm-bg)" }}>
      <div className="max-w-xl mx-auto rounded-3xl border p-8 md:p-10"
        style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1">
            <div className="flex justify-between text-xs mb-2" style={{ color: "var(--text-muted)" }}>
              <span>Question {currentIdx + 1} of {total}</span>
              <span>ADHD in Women</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--warm-border)" }}>
              <div className="h-full rounded-full transition-all duration-400"
                style={{ width: `${progress}%`, background: "var(--sage)" }} />
            </div>
          </div>
          <button onClick={reset} className="text-xs px-3 py-1.5 rounded-full border flex-shrink-0"
            style={{ borderColor: "var(--warm-border)", color: "var(--text-muted)" }}>Exit</button>
        </div>

        <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>
          How often is this true for you?
        </p>
        <p className="text-lg md:text-xl font-semibold leading-relaxed mb-8" style={{ color: "var(--text-primary)" }}>
          {q.text}
        </p>

        <div className="space-y-3 mb-8">
          {options.map(opt => {
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
                  style={{ border: isSelected ? "none" : "2px solid var(--warm-border)", background: isSelected ? "var(--sage)" : "transparent" }}>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <span className="font-semibold text-sm" style={{ color: isSelected ? "var(--sage-dark)" : "var(--text-primary)" }}>
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between">
          <button onClick={handlePrev} disabled={currentIdx === 0}
            className="px-5 py-3 rounded-full border text-sm font-semibold"
            style={{ borderColor: "var(--warm-border)", color: currentIdx === 0 ? "var(--text-muted)" : "var(--text-secondary)", opacity: currentIdx === 0 ? 0.4 : 1 }}>
            ← Back
          </button>
          <button onClick={handleNext} disabled={!canGoNext}
            className="px-6 py-3 rounded-full text-sm font-bold text-white"
            style={{ background: canGoNext ? "var(--sage)" : "var(--warm-border)", color: canGoNext ? "white" : "var(--text-muted)", cursor: canGoNext ? "pointer" : "not-allowed" }}>
            {isLast ? "See Results →" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}
