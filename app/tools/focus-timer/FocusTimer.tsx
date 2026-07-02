"use client";
import { useState, useEffect, useRef } from "react";
import { SparkleIcon } from "@/components/Icons";
import ToolIcon from "@/components/ToolIcon";
import { trackEvent } from "@/lib/analytics";

type Phase = "setup" | "running" | "paused" | "break" | "done";
type Mins = 10 | 25 | 45;

const DURATIONS: { mins: Mins; label: string; sub: string }[] = [
  { mins: 10, label: "Quick Start", sub: "10 min" },
  { mins: 25, label: "Standard",    sub: "25 min" },
  { mins: 45, label: "Deep Focus",  sub: "45 min" },
];
const BREAK_SECS = 5 * 60;

// Ring geometry
const R = 90;
const CIRC = 2 * Math.PI * R;

const NUDGES = [
  "You started. That's the hardest part.",
  "Stay with it. One minute at a time.",
  "Progress, not perfection.",
  "You're doing it.",
];

function pad(n: number) { return String(n).padStart(2, "0"); }
function fmt(s: number) { return `${pad(Math.floor(s / 60))}:${pad(s % 60)}`; }

function Ring({
  timeLeft, total, paused, isBreak,
}: {
  timeLeft: number; total: number; paused?: boolean; isBreak?: boolean;
}) {
  const progress = total > 0 ? timeLeft / total : 0;
  const offset = CIRC * (1 - progress);
  const arcColor = paused || isBreak ? "var(--sage-light)" : "var(--sage)";

  return (
    <div className="relative" style={{ width: 256, height: 256 }}>
      {/* Clock face: white disc with shadow */}
      <div className="absolute inset-0 rounded-full" style={{
        background: "var(--warm-card)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.07)",
      }} />

      {/* Ring SVG */}
      <svg width="256" height="256" viewBox="0 0 256 256"
        className="absolute inset-0"
        style={{ transform: "rotate(-90deg)" }}>
        {/* Track */}
        <circle cx="128" cy="128" r={R} fill="none"
          stroke="var(--sage-100)" strokeWidth="9" />
        {/* Progress arc */}
        <circle cx="128" cy="128" r={R} fill="none"
          stroke={arcColor} strokeWidth="9" strokeLinecap="round"
          strokeDasharray={CIRC} strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1s linear, stroke 0.4s ease" }}
        />
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span style={{
          fontSize: "3.25rem", fontWeight: 800,
          color: "var(--text-primary)",
          letterSpacing: "-0.04em",
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
        }}>
          {fmt(timeLeft)}
        </span>
        <span className="text-xs font-semibold tracking-wider uppercase mt-2"
          style={{ color: "var(--text-muted)", letterSpacing: "0.08em" }}>
          {isBreak ? "break" : paused ? "paused" : "remaining"}
        </span>
      </div>
    </div>
  );
}

export default function FocusTimer({ defaultMins = 10 }: { defaultMins?: Mins }) {
  const [phase, setPhase]         = useState<Phase>("setup");
  const [task, setTask]           = useState("");
  const [mins, setMins]           = useState<Mins>(defaultMins);
  const [timeLeft, setTimeLeft]   = useState(defaultMins * 60);
  const [totalSecs, setTotalSecs] = useState(defaultMins * 60);
  const [showDump, setShowDump]   = useState(false);
  const [dumpText, setDumpText]   = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [nudgeIdx, setNudgeIdx]   = useState(0);
  // Countdown before auto-start after AI step is found
  const [autoStart, setAutoStart] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Timer tick ───────────────────────────────────────────────────────
  useEffect(() => {
    if (phase === "running" || phase === "break") {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [phase]);

  // Phase transition when time reaches zero
  useEffect(() => {
    if (timeLeft > 0) return;
    if (phase === "running") {
      setPhase("break");
      setTimeLeft(BREAK_SECS);
      setTotalSecs(BREAK_SECS);
    } else if (phase === "break") {
      setPhase("done");
    }
  }, [timeLeft, phase]);

  // Fire tool_complete when session finishes
  useEffect(() => {
    if (phase === "done") {
      trackEvent("tool_complete", { tool_name: "focus_timer", tool_duration: mins });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // Rotate nudge every 30 s during focus
  useEffect(() => {
    if (phase !== "running") return;
    const id = setInterval(() => setNudgeIdx((i) => (i + 1) % NUDGES.length), 30_000);
    return () => clearInterval(id);
  }, [phase]);

  // Auto-start countdown after AI finds step
  useEffect(() => {
    if (autoStart === null) return;
    if (autoStart === 0) {
      setAutoStart(null);
      const secs = mins * 60;
      setTimeLeft(secs);
      setTotalSecs(secs);
      setNudgeIdx(0);
      setPhase("running");
      return;
    }
    const t = setTimeout(() => setAutoStart((n) => (n !== null ? n - 1 : null)), 1000);
    return () => clearTimeout(t);
  }, [autoStart, mins]);

  // ── Actions ──────────────────────────────────────────────────────────
  function start() {
    if (!task.trim()) setTask("My focus session");
    const secs = mins * 60;
    setTimeLeft(secs);
    setTotalSecs(secs);
    setNudgeIdx(0);
    setPhase("running");
    trackEvent("tool_start", { tool_name: "focus_timer", tool_duration: mins });
  }

  function stop() {
    setPhase("setup");
    setTimeLeft(mins * 60);
    setTotalSecs(mins * 60);
  }

  function skipBreak() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setPhase("done");
  }

  function reset() {
    setPhase("setup");
    setTask("");
    setShowDump(false);
    setDumpText("");
    setAutoStart(null);
    setMins(defaultMins);
    setTimeLeft(defaultMins * 60);
    setTotalSecs(defaultMins * 60);
  }

  function quickStart10() {
    setMins(10);
    setTimeLeft(10 * 60);
    setTotalSecs(10 * 60);
    setNudgeIdx(0);
    setPhase("running");
    trackEvent("tool_start", { tool_name: "focus_timer", tool_duration: 10 });
  }

  async function getStep() {
    if (!dumpText.trim() || aiLoading) return;
    setAiLoading(true);
    try {
      const res = await fetch("/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: [{
            role: "user",
            content: `I need to focus but I'm stuck. Here's what's swirling in my head: "${dumpText.trim()}"\n\nGive me just ONE tiny, concrete action I can start right now. Start with a verb. One sentence only — keep it small and doable.`,
          }],
        }),
      });
      const data = await res.json();
      if (data.reply) {
        const first = data.reply.replace(/^→\s*/, "").split("\n")[0].trim();
        setTask(first);
        setShowDump(false);
        setDumpText("");
        setAutoStart(3); // auto-start in 3 s
      }
    } catch {
      // fail silently
    } finally {
      setAiLoading(false);
    }
  }

  // ── SETUP ────────────────────────────────────────────────────────────
  if (phase === "setup") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-16"
        style={{ background: "var(--warm-bg)" }}>
        <div className="w-full max-w-md">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-5">
              <ToolIcon name="focus-timer" theme="focus" size={28} containerSize={56} />
            </div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ background: "var(--sage-100)", color: "var(--sage-dark)" }}
            >
              ADHD Focus Timer
            </span>
            <h1
              className="text-3xl md:text-4xl font-extrabold mb-2 leading-tight"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
            >
              Start before you&apos;re ready.
            </h1>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
              When starting feels impossible —<br />
              one tiny task and <strong>{mins} minutes</strong> is enough.
            </p>
          </div>

          {/* Task input */}
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !autoStart && start()}
            placeholder="What are you working on?"
            autoFocus
            className="w-full rounded-2xl border px-5 py-4 text-base outline-none"
            style={{
              background: "var(--warm-card)",
              borderColor: task ? "var(--sage-light)" : "var(--warm-border)",
              color: "var(--text-primary)",
              fontFamily: "inherit",
              transition: "border-color 0.2s",
            }}
          />

          {/* Auto-start banner (shown after AI finds step) */}
          {autoStart !== null && (
            <div
              className="mt-3 rounded-2xl border px-4 py-3 flex items-center justify-between"
              style={{ background: "var(--sage-50)", borderColor: "var(--sage-100)" }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--sage-dark)" }}>
                Starting in {autoStart}…
              </p>
              <button
                onClick={() => { setAutoStart(null); }}
                className="text-xs font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                Cancel
              </button>
            </div>
          )}

          {/* "I don't know where to start" */}
          {autoStart === null && (
            <div className="mt-3 mb-6 min-h-[2.5rem]">
              {!showDump ? (
                <button
                  onClick={() => setShowDump(true)}
                  className="text-sm font-medium transition-colors"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--sage-dark)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  I don&apos;t know where to start →
                </button>
              ) : (
                <div className="rounded-2xl border p-4"
                  style={{ background: "var(--sage-50)", borderColor: "var(--sage-100)" }}>
                  <p className="text-sm font-semibold mb-3" style={{ color: "var(--sage-dark)" }}>
                    Dump it all out — AI finds your first step, then starts the timer.
                  </p>
                  <textarea
                    value={dumpText}
                    onChange={(e) => setDumpText(e.target.value)}
                    placeholder="Tasks, worries, things you've been avoiding... anything goes."
                    autoFocus
                    className="w-full rounded-xl border px-3 py-2.5 text-sm outline-none resize-none"
                    style={{
                      minHeight: "88px",
                      background: "var(--warm-card)",
                      borderColor: "var(--warm-border)",
                      color: "var(--text-primary)",
                      fontFamily: "inherit",
                    }}
                  />
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={getStep}
                      disabled={!dumpText.trim() || aiLoading}
                      className="text-sm font-bold px-4 py-2 rounded-full text-white transition-opacity"
                      style={{
                        background: "var(--sage)",
                        opacity: !dumpText.trim() || aiLoading ? 0.5 : 1,
                      }}
                    >
                      {aiLoading ? "Thinking..." : "Find my first step →"}
                    </button>
                    <button
                      onClick={() => { setShowDump(false); setDumpText(""); }}
                      className="text-sm px-4 py-2 rounded-full"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Duration pills */}
          {autoStart === null && (
            <div className="flex gap-2 mb-6">
              {DURATIONS.map((d) => (
                <button
                  key={d.mins}
                  onClick={() => {
                    setMins(d.mins);
                    setTimeLeft(d.mins * 60);
                    setTotalSecs(d.mins * 60);
                  }}
                  className="flex-1 py-3 rounded-full text-xs font-bold border transition-all"
                  style={{
                    background: mins === d.mins ? "var(--sage)" : "var(--warm-card)",
                    borderColor: mins === d.mins ? "var(--sage)" : "var(--warm-border)",
                    color: mins === d.mins ? "white" : "var(--text-secondary)",
                  }}
                >
                  {d.label} · {d.sub}
                </button>
              ))}
            </div>
          )}

          {/* Start button */}
          {autoStart === null && (
            <>
              <button
                onClick={start}
                className="w-full py-4 rounded-2xl font-extrabold text-lg text-white"
                style={{
                  background: "var(--sage)",
                  letterSpacing: "-0.01em",
                }}
              >
                Start {mins}-Min Focus
              </button>
              {!task.trim() && (
                <p className="text-center text-xs mt-3" style={{ color: "var(--text-muted)" }}>
                  Optional: name what you&apos;re working on
                </p>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  // ── RUNNING / PAUSED ─────────────────────────────────────────────────
  if (phase === "running" || phase === "paused") {
    const isPaused = phase === "paused";
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4"
        style={{ background: "var(--warm-bg)" }}>
        <div className="w-full max-w-sm text-center">

          {/* Task badge */}
          <div className="mb-8">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold max-w-xs truncate"
              style={{ background: "var(--sage-100)", color: "var(--sage-dark)" }}
              title={task}
            >
              {task}
            </span>
          </div>

          {/* Ring */}
          <div className="flex justify-center mb-8">
            <Ring timeLeft={timeLeft} total={totalSecs} paused={isPaused} />
          </div>

          {/* Status */}
          <p className="text-sm mb-10" style={{ color: "var(--text-muted)", minHeight: "1.25rem" }}>
            {isPaused ? "Timer paused. Ready when you are." : NUDGES[nudgeIdx]}
          </p>

          {/* Controls */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setPhase(isPaused ? "running" : "paused")}
              className="px-7 py-3 rounded-full font-bold text-sm border transition-all"
              style={
                isPaused
                  ? { background: "var(--sage)", color: "white", border: "none" }
                  : { background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--text-secondary)" }
              }
            >
              {isPaused ? "Resume" : "Pause"}
            </button>
            <button
              onClick={stop}
              className="px-7 py-3 rounded-full font-bold text-sm border"
              style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--text-muted)" }}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── BREAK ─────────────────────────────────────────────────────────────
  if (phase === "break") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4"
        style={{ background: "var(--warm-bg)" }}>
        <div className="w-full max-w-sm text-center">
          <div className="flex justify-center mb-5">
            <ToolIcon name="focus-timer" theme="focus" size={28} containerSize={56} />
          </div>
          <h2 className="text-2xl font-extrabold mb-2"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
            You did it.
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
            <strong>{task}</strong> — focused and done.
          </p>
          <div className="flex justify-center mb-6">
            <Ring timeLeft={timeLeft} total={BREAK_SECS} isBreak />
          </div>
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            Take a 5-minute break. Step away, breathe, move.
          </p>
          <button
            onClick={skipBreak}
            className="px-7 py-3 rounded-full font-bold text-sm border"
            style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--text-muted)" }}
          >
            Skip break
          </button>
        </div>
      </div>
    );
  }

  // ── DONE ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: "var(--warm-bg)" }}>
      <div className="w-full max-w-sm text-center">
        <div className="flex justify-center mb-5">
          <SparkleIcon size={52} color="var(--sage)" />
        </div>
        <h2 className="text-3xl font-extrabold mb-2"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
          You started.
        </h2>
        <p className="mb-1 font-medium" style={{ color: "var(--text-secondary)" }}>
          That&apos;s often the hardest part.
        </p>
        <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
          <strong>{task}</strong> — great job.
        </p>

        {/* Primary: quick another 10 min */}
        <button
          onClick={quickStart10}
          className="px-10 py-4 rounded-2xl font-extrabold text-lg text-white mb-4"
          style={{ background: "var(--sage)", letterSpacing: "-0.01em" }}
        >
          Another 10 minutes →
        </button>

        {/* Secondary: pick new task */}
        <div>
          <button
            onClick={reset}
            className="text-sm font-medium transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--sage-dark)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            Start a different task
          </button>
        </div>
      </div>
    </div>
  );
}
