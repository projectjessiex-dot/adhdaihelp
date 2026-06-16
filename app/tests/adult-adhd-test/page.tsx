"use client";

import { useState } from "react";
import Link from "next/link";

// ── ASRS v1.1 (18 questions) ─────────────────────────────────────
// Part A: Q1-6 (core screener)  |  Part B: Q7-18 (additional detail)

const questions = [
  // Part A — Inattention
  { id: 1, text: "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?", part: "A" },
  { id: 2, text: "How often do you have difficulty getting things in order when you have to do a task that requires organization?", part: "A" },
  { id: 3, text: "How often do you have problems remembering appointments or obligations?", part: "A" },
  // Part A — Hyperactivity / Impulsivity
  { id: 4, text: "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?", part: "A" },
  { id: 5, text: "How often do you fidget or squirm with your hands or feet when you have to sit for a long time?", part: "A" },
  { id: 6, text: "How often do you feel overly active and compelled to do things, like you were driven by a motor?", part: "A" },
  // Part B — Inattention continued
  { id: 7, text: "How often do you make careless mistakes when you have to work on a boring or difficult project?", part: "B" },
  { id: 8, text: "How often do you have difficulty keeping your attention when doing boring or repetitive work?", part: "B" },
  { id: 9, text: "How often do you have difficulty concentrating on what people say to you, even when speaking directly?", part: "B" },
  { id: 10, text: "How often do you misplace or have difficulty finding things at home or at work?", part: "B" },
  { id: 11, text: "How often are you distracted by activity or noise around you?", part: "B" },
  { id: 12, text: "How often do you leave your seat in situations where you are expected to remain seated?", part: "B" },
  // Part B — Hyperactivity / Impulsivity continued
  { id: 13, text: "How often do you feel restless or fidgety?", part: "B" },
  { id: 14, text: "How often do you have difficulty unwinding and relaxing when you have time to yourself?", part: "B" },
  { id: 15, text: "How often do you find yourself talking too much in social situations?", part: "B" },
  { id: 16, text: "In a conversation, how often do you finish the sentences of the people you're talking to before they can finish them?", part: "B" },
  { id: 17, text: "How often do you have difficulty waiting your turn when turn-taking is required?", part: "B" },
  { id: 18, text: "How often do you interrupt others when they are busy?", part: "B" },
];

const options = [
  { label: "Never", score: 0 },
  { label: "Rarely", score: 1 },
  { label: "Sometimes", score: 2 },
  { label: "Often", score: 3 },
  { label: "Very Often", score: 4 },
];

// ── Scoring ───────────────────────────────────────────────────────
// Inattention: Q1, Q2, Q3, Q7, Q8, Q9, Q10, Q11 (indices 0,1,2,6,7,8,9,10)
// H/I: Q4, Q5, Q6, Q12, Q13, Q14, Q15, Q16, Q17, Q18 (indices 3,4,5,11,12,13,14,15,16,17)
const inattentionIdx = [0, 1, 2, 6, 7, 8, 9, 10];
const hyperactivityIdx = [3, 4, 5, 11, 12, 13, 14, 15, 16, 17];

// Part A ASRS screening: Q1-3 positive if ≥ 2 (Sometimes+), Q4-6 positive if ≥ 3 (Often+)
function calcPartAPositives(answers: number[]): number {
  let positives = 0;
  if (answers[0] >= 2) positives++;
  if (answers[1] >= 2) positives++;
  if (answers[2] >= 2) positives++;
  if (answers[3] >= 3) positives++;
  if (answers[4] >= 3) positives++;
  if (answers[5] >= 3) positives++;
  return positives;
}

function getResult(answers: number[]) {
  const inattention = inattentionIdx.reduce((s, i) => s + (answers[i] ?? 0), 0);
  const hyperactivity = hyperactivityIdx.reduce((s, i) => s + (answers[i] ?? 0), 0);
  const partAPositives = calcPartAPositives(answers);
  const total = inattention + hyperactivity;

  // ASRS threshold: 4+ Part A positives = screener positive
  const screenerPositive = partAPositives >= 4;

  if (!screenerPositive && total < 25) {
    return {
      level: "low" as const,
      headline: "Few ADHD Symptoms Detected",
      summary:
        "Your responses suggest that you are experiencing few symptoms consistent with ADHD at this time. This doesn't mean something isn't going on — stress, anxiety, and sleep problems can mimic ADHD symptoms. If you're still concerned, talking to a healthcare professional is always a good step.",
      inattention,
      hyperactivity,
      partAPositives,
      color: "var(--sage)",
      nextSteps: [
        "Read: ADHD vs. Anxiety — the symptoms often overlap",
        "Explore what executive dysfunction feels like",
        "Consider speaking to a doctor if you have ongoing concerns",
      ],
    };
  }

  if (total < 40) {
    const dominantType =
      inattention > hyperactivity ? "inattentive" : "hyperactive-impulsive";
    return {
      level: "moderate" as const,
      headline: "Some ADHD-Like Patterns Detected",
      summary:
        `Your responses suggest some symptoms consistent with ADHD — particularly in the ${dominantType} dimension. These results alone cannot diagnose ADHD, but they do indicate that a conversation with a clinician could be worthwhile. Many adults with ADHD go undiagnosed for decades.`,
      inattention,
      hyperactivity,
      partAPositives,
      color: "#C4923A",
      nextSteps: [
        "Share these results with your doctor or a psychiatrist",
        "Read: What is Executive Dysfunction?",
        "Track how these patterns affect your daily life",
      ],
    };
  }

  const bothHigh = inattention >= 20 && hyperactivity >= 20;
  const type = bothHigh
    ? "combined type"
    : inattention >= 20
    ? "inattentive type"
    : "hyperactive-impulsive type";

  return {
    level: "high" as const,
    headline: "Symptoms Consistent with ADHD",
    summary:
      `Your responses suggest a significant number of ADHD symptoms, consistent with ${type}. This screener is not a diagnosis — only a qualified clinician can diagnose ADHD — but your results are a strong signal worth following up on. You are not broken. ADHD is a difference in brain wiring, not a character flaw.`,
    inattention,
    hyperactivity,
    partAPositives,
    color: "#B05050",
    nextSteps: [
      "Bring these results to a psychiatrist, psychologist, or your primary care doctor",
      "Ask specifically about ADHD evaluation — many clinicians won't screen unless asked",
      "Read: ADHD in Women (if applicable) — symptoms present differently",
      "Explore our Brain Dump tool to start managing cognitive overload today",
    ],
  };
}

// ── Component ─────────────────────────────────────────────────────
export default function AdultAdhdTest() {
  const [started, setStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [finalAnswers, setFinalAnswers] = useState<number[]>([]);

  const total = questions.length;
  const progress = ((currentIdx) / total) * 100;

  const handleSelect = (score: number) => {
    setSelectedScore(score);
  };

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
    if (selectedScore !== null) {
      setAnswers((a) => ({ ...a, [currentIdx]: selectedScore! }));
    }
    setCurrentIdx((i) => i - 1);
    setSelectedScore(answers[currentIdx - 1] ?? null);
  };

  const reset = () => {
    setStarted(false);
    setCurrentIdx(0);
    setAnswers({});
    setSelectedScore(null);
    setFinished(false);
    setFinalAnswers([]);
  };

  // ── Result Page ──────────────────────────────────────────────────
  if (finished) {
    const result = getResult(finalAnswers);
    const inMax = inattentionIdx.length * 4;
    const hyMax = hyperactivityIdx.length * 4;
    const inPct = Math.round((result.inattention / inMax) * 100);
    const hyPct = Math.round((result.hyperactivity / hyMax) * 100);

    return (
      <div className="min-h-screen px-4 py-12" style={{ background: "var(--warm-bg)" }}>
        <div className="max-w-xl mx-auto">

          {/* Level badge */}
          <div className="text-center mb-8">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full text-white mb-4"
              style={{ background: result.color }}
            >
              {result.level === "low" ? "Low Likelihood" : result.level === "moderate" ? "Moderate Likelihood" : "High Likelihood"}
            </span>
            <h1
              className="text-2xl md:text-3xl font-extrabold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              {result.headline}
            </h1>
            <p
              className="text-base leading-relaxed max-w-lg mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              {result.summary}
            </p>
          </div>

          {/* Score breakdown */}
          <div
            className="rounded-2xl p-6 mb-6 border"
            style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}
          >
            <h2 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: "var(--text-muted)" }}>
              Your Score Breakdown
            </h2>

            <div className="mb-5">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold" style={{ color: "var(--text-primary)" }}>Inattention</span>
                <span style={{ color: "var(--text-muted)" }}>{result.inattention} / {inMax}</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--warm-border)" }}>
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${inPct}%`, background: result.color }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold" style={{ color: "var(--text-primary)" }}>Hyperactivity / Impulsivity</span>
                <span style={{ color: "var(--text-muted)" }}>{result.hyperactivity} / {hyMax}</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--warm-border)" }}>
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${hyPct}%`, background: result.color }}
                />
              </div>
            </div>

            <p className="text-xs mt-5" style={{ color: "var(--text-muted)" }}>
              Part A screening: <strong>{result.partAPositives} / 6</strong> positive responses
              {result.partAPositives >= 4
                ? " — meets ASRS screening threshold"
                : " — below ASRS screening threshold"}
            </p>
          </div>

          {/* Next steps */}
          <div
            className="rounded-2xl p-6 mb-6 border"
            style={{ background: "var(--sage-50)", borderColor: "var(--sage-100)" }}
          >
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
          <div
            className="rounded-2xl p-4 mb-6 text-center text-xs border"
            style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--text-muted)" }}
          >
            {/* AdSense unit will go here */}
            <span className="opacity-40">[ Advertisement ]</span>
          </div>

          {/* Disclaimer */}
          <div
            className="rounded-2xl p-5 mb-8 text-xs leading-relaxed border"
            style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--text-muted)" }}
          >
            <strong>Important:</strong> This screener is based on the WHO Adult ADHD Self-Report Scale (ASRS v1.1) and is for informational purposes only. It is <em>not</em> a medical diagnosis. Only a qualified healthcare professional — such as a psychiatrist, psychologist, or physician — can diagnose ADHD. If you have concerns about your mental health, please consult a professional.
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={reset}
              className="flex-1 py-3.5 rounded-full font-bold text-sm border-2 transition-colors"
              style={{ borderColor: "var(--sage-light)", color: "var(--sage-dark)" }}
            >
              Retake Test
            </button>
            <Link
              href="/learn/executive-dysfunction/"
              className="flex-1 py-3.5 rounded-full font-bold text-sm text-white text-center transition-opacity hover:opacity-90"
              style={{ background: "var(--sage)" }}
            >
              Learn About Executive Dysfunction →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Intro Page ───────────────────────────────────────────────────
  if (!started) {
    return (
      <div className="min-h-screen px-4 py-16" style={{ background: "var(--warm-bg)" }}>
        <div className="max-w-lg mx-auto text-center">
          <span className="text-5xl mb-6 block">🧠</span>
          <h1
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Adult ADHD Self-Test
          </h1>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Based on the <strong>WHO Adult ADHD Self-Report Scale (ASRS v1.1)</strong> — one of the most widely used clinical screeners for adult ADHD.
          </p>

          <div
            className="rounded-2xl p-6 mb-8 text-left border"
            style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}
          >
            <div className="grid grid-cols-3 gap-4 text-center mb-6">
              {[
                { icon: "📋", label: "18 questions" },
                { icon: "⏱", label: "3–5 minutes" },
                { icon: "🔒", label: "Private & free" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              For each question, choose the option that best describes how you have felt and conducted yourself over the <strong>past 6 months</strong>. There are no right or wrong answers.
            </p>
          </div>

          <div
            className="rounded-xl p-4 mb-8 text-sm text-left border"
            style={{ background: "var(--sage-50)", borderColor: "var(--sage-100)", color: "var(--text-secondary)" }}
          >
            ⚠️ <strong>Heads up:</strong> This is a screening tool, not a diagnostic test. Results are meant to help you understand your symptoms and decide whether to seek a professional evaluation.
          </div>

          <button
            onClick={() => setStarted(true)}
            className="w-full py-4 rounded-full font-bold text-white text-lg transition-opacity hover:opacity-90"
            style={{ background: "var(--sage)" }}
          >
            Start the Test →
          </button>

          <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
            No account needed · Results shown instantly · Not stored anywhere
          </p>
        </div>
      </div>
    );
  }

  // ── Quiz Page ─────────────────────────────────────────────────────
  const question = questions[currentIdx];
  const isPart = currentIdx < 6 ? "A" : "B";
  const canGoNext = selectedScore !== null;
  const isLast = currentIdx === total - 1;

  return (
    <div className="min-h-screen px-4 py-10" style={{ background: "var(--warm-bg)" }}>
      <div
        className="max-w-xl mx-auto rounded-3xl border p-8 md:p-10"
        style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}
      >
        {/* Progress bar */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1">
            <div className="flex justify-between text-xs mb-2" style={{ color: "var(--text-muted)" }}>
              <span>Question {currentIdx + 1} of {total}</span>
              <span>Part {isPart}</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--warm-border)" }}>
              <div
                className="h-full rounded-full transition-all duration-400"
                style={{ width: `${progress}%`, background: "var(--sage)" }}
              />
            </div>
          </div>
          <button
            onClick={reset}
            className="text-xs px-3 py-1.5 rounded-full border transition-colors flex-shrink-0"
            style={{ borderColor: "var(--warm-border)", color: "var(--text-muted)" }}
          >
            Exit
          </button>
        </div>

        {/* Question */}
        <p
          className="text-lg md:text-xl font-semibold leading-relaxed mb-8"
          style={{ color: "var(--text-primary)" }}
        >
          {question.text}
        </p>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {options.map((opt) => {
            const isSelected = selectedScore === opt.score;
            return (
              <button
                key={opt.score}
                onClick={() => handleSelect(opt.score)}
                className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl border-2 text-left transition-all"
                style={{
                  borderColor: isSelected ? "var(--sage)" : "var(--warm-border)",
                  background: isSelected ? "var(--sage-50)" : "var(--warm-card)",
                  transform: isSelected ? "translateX(4px)" : "translateX(0)",
                }}
              >
                {/* Radio dot */}
                <div
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center transition-all"
                  style={{
                    border: isSelected ? "none" : "2px solid var(--warm-border)",
                    background: isSelected ? "var(--sage)" : "transparent",
                  }}
                >
                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>

                <span
                  className="font-semibold text-sm flex-1"
                  style={{ color: isSelected ? "var(--sage-dark)" : "var(--text-primary)" }}
                >
                  {opt.label}
                </span>

                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {["0×", "1–2×/month", "1×/week", "2–3×/week", "Daily"][opt.score]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentIdx === 0}
            className="px-5 py-3 rounded-full border text-sm font-semibold transition-all"
            style={{
              borderColor: "var(--warm-border)",
              color: currentIdx === 0 ? "var(--text-muted)" : "var(--text-secondary)",
              opacity: currentIdx === 0 ? 0.4 : 1,
            }}
          >
            ← Back
          </button>

          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className="px-6 py-3 rounded-full text-sm font-bold text-white transition-all"
            style={{
              background: canGoNext ? "var(--sage)" : "var(--warm-border)",
              color: canGoNext ? "white" : "var(--text-muted)",
              cursor: canGoNext ? "pointer" : "not-allowed",
            }}
          >
            {isLast ? "See Results →" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}
