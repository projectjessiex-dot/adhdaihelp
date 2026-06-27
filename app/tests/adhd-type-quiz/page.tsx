"use client";

import React, { useState } from "react";
import Link from "next/link";

// ── 18 scenario-based questions ───────────────────────────────────
// I = Inattentive trait  |  H = Hyperactive/Impulsive trait
const questions = [
  { id: 1,  type: "I", text: "You sit down to start a task. Even though you know it's important, you spend 20+ minutes doing literally anything else first." },
  { id: 2,  type: "H", text: "In conversations, you often know what the other person is about to say — and you say it before they finish." },
  { id: 3,  type: "I", text: "You read a full page of text and then realize you absorbed absolutely nothing." },
  { id: 4,  type: "H", text: "Sitting still in a meeting or waiting room makes you feel physically uncomfortable — you need to tap, fidget, or move." },
  { id: 5,  type: "I", text: "You've lost the same type of item (keys, phone, wallet, charger) multiple times this month." },
  { id: 6,  type: "H", text: "You've bought something impulsively — online or in a store — and regretted it shortly after." },
  { id: 7,  type: "I", text: "You have several unfinished projects around you right now — books half-read, tasks half-done." },
  { id: 8,  type: "H", text: "Your thoughts move so fast that it's hard to follow one thread all the way through." },
  { id: 9,  type: "I", text: "You can hyperfocus intensely on something interesting for hours — but switching to a less exciting task feels almost impossible." },
  { id: 10, type: "H", text: "When you're supposed to wait your turn — in line, in a game, in a discussion — it requires real effort not to jump ahead." },
  { id: 11, type: "I", text: "You often realize you missed something important in a conversation because your mind drifted mid-sentence." },
  { id: 12, type: "H", text: "At the end of the day, you feel like you were 'on' constantly — restless, like a motor that won't turn off." },
  { id: 13, type: "I", text: "Time disappears on you — you think 20 minutes have passed and it's been 2 hours, or vice versa." },
  { id: 14, type: "H", text: "You've said something in a social situation that you immediately wished you could take back." },
  { id: 15, type: "I", text: "You frequently forget to reply to messages — not because you don't care, but because you got distracted and the memory vanished." },
  { id: 16, type: "H", text: "Relaxing feels unnatural. Even during 'rest', part of your brain is still running." },
  { id: 17, type: "I", text: "You need a deadline, a crisis, or a sudden burst of interest to finally get started on something." },
  { id: 18, type: "H", text: "You've interrupted someone mid-sentence — not to be rude, but because the thought felt urgent and might disappear." },
];

const options = [
  { label: "Never", score: 0 },
  { label: "Rarely", score: 1 },
  { label: "Sometimes", score: 2 },
  { label: "Often", score: 3 },
  { label: "Very Often", score: 4 },
];

function getResult(answers: number[]) {
  const iScore = questions.filter(q => q.type === "I").map((q, i) => answers[questions.indexOf(q)] ?? 0).reduce((a, b) => a + b, 0);
  const hScore = questions.filter(q => q.type === "H").map((q, i) => answers[questions.indexOf(q)] ?? 0).reduce((a, b) => a + b, 0);

  // Max per subscale: 9 questions × 4 = 36
  const iHigh = iScore >= 22;
  const hHigh = hScore >= 22;
  const iMid  = iScore >= 14;
  const hMid  = hScore >= 14;

  if (iHigh && hHigh) return {
    type: "Combined Type",
    emoji: "🔀",
    color: "#7B5EA7",
    tagline: "You experience both worlds — and that's the most common ADHD profile.",
    body: "Combined Type ADHD means you have significant symptoms of both inattention and hyperactivity/impulsivity. This doesn't mean you're 'more severe' — it means your brain is wired to be both easily distracted and constantly activated. The good news: understanding your profile is the first step to building systems that actually work for your brain.",
    iScore, hScore,
    tips: [
      "Task initiation is often your biggest barrier — try 'body doubling' (working alongside someone else)",
      "Movement breaks aren't optional — they're neurologically necessary for you",
      "Short, structured sprints (25 min on / 5 min off) work better than long open blocks",
      "Your hyperfocus is a superpower — channel it intentionally",
    ],
  };

  if (iHigh || (iMid && !hMid)) return {
    type: "Inattentive Type",
    emoji: "🌊",
    color: "var(--sage-dark)",
    tagline: "Your ADHD is quiet on the outside — but loud on the inside.",
    body: "Inattentive Type ADHD (previously called ADD) is marked by difficulty sustaining attention, frequent mind-wandering, losing things, forgetting, and 'time blindness'. It's often missed — especially in women and girls — because it doesn't look like the hyperactive stereotype. You're not lazy or spacey. Your brain is wired differently.",
    iScore, hScore,
    tips: [
      "Externalize everything — your memory is not reliable storage, use lists and reminders",
      "Set timers before tasks, not just deadlines — 'time blindness' responds to visual cues",
      "Body doubling and background noise (lo-fi, white noise) can anchor your attention",
      "If you were diagnosed late, know that many adults with this profile spent years thinking they were 'failures'",
    ],
  };

  if (hHigh || (hMid && !iMid)) return {
    type: "Hyperactive-Impulsive Type",
    emoji: "⚡",
    color: "#C4923A",
    tagline: "Your brain is always on. The hard part is finding the off switch.",
    body: "Hyperactive-Impulsive Type ADHD is what most people picture when they hear 'ADHD' — but it's actually the least common type in adults. For you, the challenge isn't focus as much as it is restlessness, impulsivity, interrupting, and the constant sense of inner motion. Your energy can be magnetic. It can also exhaust you.",
    iScore, hScore,
    tips: [
      "Physical exercise is one of the most evidence-backed tools for managing hyperactivity — daily, not optional",
      "Build in 'legal' movement throughout your day: standing desk, walking meetings, fidget tools",
      "For impulsivity: create a 24-hour rule before purchases or big decisions",
      "Your intensity is not a defect — it's raw capacity that needs a container",
    ],
  };

  return {
    type: "Subclinical / Traits Only",
    emoji: "🌤️",
    color: "var(--sage)",
    tagline: "You show some ADHD traits, but below a clinical threshold.",
    body: "Your responses suggest some ADHD-like patterns, but not enough to indicate a strong clinical profile for either type. This could mean your ADHD is mild, that you've developed strong coping strategies over time, or that something else (like anxiety or burnout) is creating these patterns. Consider taking our Adult ADHD screener for a more clinical picture.",
    iScore, hScore,
    tips: [
      "Take our Adult ADHD Self-Test (ASRS v1.1) for a more clinical screening",
      "Read: ADHD vs Anxiety — symptoms overlap significantly",
      "Keep a symptom journal for 2 weeks to spot patterns",
    ],
  };
}

export default function AdhdTypeQuiz() {
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
    const iMax = 36, hMax = 36;
    const iPct = Math.round((result.iScore / iMax) * 100);
    const hPct = Math.round((result.hScore / hMax) * 100);

    return (
      <div className="min-h-screen px-4 py-12" style={{ background: "var(--warm-bg)" }}>
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-5xl block mb-4">{result.emoji}</span>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full text-white mb-4"
              style={{ background: result.color }}>
              {result.type}
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: "var(--text-primary)" }}>
              {result.tagline}
            </h1>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {result.body}
            </p>
          </div>

          {/* Score bars */}
          <div className="rounded-2xl p-6 mb-6 border" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: "var(--text-muted)" }}>Your Profile</h2>
            {[
              { label: "Inattentive", score: result.iScore, max: iMax, pct: iPct },
              { label: "Hyperactive / Impulsive", score: result.hScore, max: hMax, pct: hPct },
            ].map(d => (
              <div key={d.label} className="mb-5 last:mb-0">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold" style={{ color: "var(--text-primary)" }}>{d.label}</span>
                  <span style={{ color: "var(--text-muted)" }}>{d.score} / {d.max}</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--warm-border)" }}>
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${d.pct}%`, background: result.color }} />
                </div>
              </div>
            ))}
            <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
              Threshold for a dominant type: ≥ 22 / 36 per subscale
            </p>
          </div>

          {/* Tips */}
          <div className="rounded-2xl p-6 mb-6 border" style={{ background: "var(--sage-50)", borderColor: "var(--sage-100)" }}>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "var(--sage-dark)" }}>
              What Works for Your Type
            </h2>
            <ul className="space-y-3">
              {result.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: "var(--sage)" }}>{i + 1}</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Ad placeholder */}
          <div className="rounded-2xl p-4 mb-6 text-center text-xs border"
            style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--text-muted)" }}>
            <span className="opacity-40">[ Advertisement ]</span>
          </div>

          <div className="rounded-2xl p-5 mb-8 text-xs leading-relaxed border"
            style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--text-muted)" }}>
            <strong>Disclaimer:</strong> This quiz is a self-reflection tool, not a clinical diagnostic instrument. ADHD type can only be formally determined by a qualified clinician. Results are for educational purposes only.
          </div>

          {/* FAQ mini-section */}
          <div className="rounded-2xl p-5 mb-6 border" style={{ background: "var(--sage-50)", borderColor: "var(--sage-100)" }}>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "var(--sage-dark)" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What are the three ADHD types?",
                  a: "The DSM-5 recognizes three ADHD presentations: Predominantly Inattentive (formerly called ADD), Predominantly Hyperactive-Impulsive, and Combined Type (symptoms in both categories). Most adults with ADHD have Combined or Inattentive.",
                },
                {
                  q: "Can ADHD type change over time?",
                  a: "Yes — especially with age. Hyperactivity often decreases in adulthood while inattentive symptoms tend to persist. Someone diagnosed as Hyperactive-Impulsive as a child may present more as Combined or Inattentive in adulthood.",
                },
                {
                  q: "Is one ADHD type more severe than others?",
                  a: "No — severity depends on how much symptoms interfere with daily life, not which type you have. Each type comes with real challenges. Inattentive Type is often underestimated because it doesn't match the stereotypical 'hyperactive' image.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{item.q}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.a}</p>
                </div>
              ))}
              <Link href="/learn/adhd-faq/"
                className="inline-block mt-3 text-xs font-bold hover:underline"
                style={{ color: "var(--sage-dark)" }}>
                See all ADHD FAQs →
              </Link>
            </div>
          </div>

          {/* Internal links */}
          <div className="rounded-2xl p-5 mb-6 border" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>Explore Next</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { href: "/tests/adult-adhd-test/", label: "Take the Full ASRS Test →" },
                { href: "/tests/adhd-in-women-quiz/", label: "ADHD in Women Quiz →" },
                { href: "/learn/executive-dysfunction/", label: "Executive Dysfunction Guide →" },
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

          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={reset}
              className="flex-1 py-3.5 rounded-full font-bold text-sm border-2"
              style={{ borderColor: "var(--sage-light)", color: "var(--sage-dark)" }}>
              Retake Quiz
            </button>
            <Link href="/tests/adult-adhd-test/"
              className="flex-1 py-3.5 rounded-full font-bold text-sm text-white text-center hover:opacity-90"
              style={{ background: "var(--sage)" }}>
              Take the Full ASRS Test →
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
          <div className="flex justify-center mb-6">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="var(--sage)" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <circle cx="23" cy="23" r="15"/>
              <line x1="34" y1="34" x2="49" y2="49"/>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
            ADHD Type Quiz
          </h1>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Inattentive? Hyperactive? Combined? This quiz uses <strong>real-life scenarios</strong> to help you understand which ADHD profile fits you best.
          </p>
          <div className="rounded-2xl p-6 mb-6 text-left border" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
            <div className="grid grid-cols-3 gap-4 text-center mb-6">
              {([
                { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--sage-dark)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 3H19C20.1 3 21 3.9 21 5V14C21 15.1 20.1 16 19 16H11L7 20V16H3C1.9 16 1 15.1 1 14V5C1 3.9 1.9 3 3 3Z"/></svg>, label: "18 scenarios" },
                { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--sage-dark)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="11" y1="7" x2="11" y2="11"/><line x1="11" y1="11" x2="14.5" y2="13"/></svg>, label: "4–5 minutes" },
                { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--sage-dark)" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><circle cx="9" cy="9" r="7"/><line x1="14" y1="14" x2="20" y2="20"/></svg>, label: "3 possible types" },
              ] as { icon: React.ReactNode; label: string }[]).map(item => (
                <div key={item.label}>
                  <div className="flex justify-center mb-2">{item.icon}</div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Rate how often each scenario describes your experience. Think about the <strong>past 6 months</strong> across work, home, and social situations.
            </p>
          </div>
          <div className="rounded-xl p-5 mb-6 text-sm text-left border-2"
            style={{ background: "var(--sage-50)", borderColor: "var(--sage)", color: "var(--text-secondary)" }}>
            <p className="font-bold mb-1" style={{ color: "var(--sage-dark)" }}>Important — please read before starting:</p>
            <p>This is <strong>not a diagnostic tool</strong>. Results are for educational purposes only. ADHD type can only be formally determined by a qualified clinician. Consult a healthcare professional for any diagnosis.</p>
          </div>

          <button onClick={() => setStarted(true)}
            className="w-full py-4 rounded-full font-bold text-white text-lg hover:opacity-90"
            style={{ background: "var(--sage)" }}>
            Start the Quiz →
          </button>
          <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
            Not a diagnosis · For adults aged 18+ · No account needed
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
              <span>{q.type === "I" ? "Inattention" : "Hyperactivity / Impulsivity"}</span>
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
          How often does this sound like you?
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
