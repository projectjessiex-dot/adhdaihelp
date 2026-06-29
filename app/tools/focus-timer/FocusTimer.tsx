"use client";
import { useState, useEffect, useRef } from "react";
import { SparkleIcon } from "@/components/Icons";

type Phase = "setup" | "running" | "paused" | "break" | "done";
type Mins = 10 | 15 | 25;

const DURATIONS: Mins[] = [10, 15, 25];
const BREAK_SECS = 5 * 60;

// Ring geometry
const R = 90;
const CIRC = 2 * Math.PI * R; // ≈ 565.5

const NUDGES = [
  "You started. That's the hardest part.",
  "Stay with it. One minute at a time.",
  "Progress, not perfection.",
  "You're doing it.",
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}
function fmt(s: number) {
  return `${pad(Math.floor(s / 60))}:${pad(s % 60)}`;
}

function Ring({
  timeLeft,
  total,
  paused,
  isBreak,
}: {
  timeLeft: number;
  total: number;
  paused?: boolean;
  isBreak?: boolean;
}) {
  const progress = total > 0 ? timeLeft / total : 0;
  const offset = CIRC * (1 - progress);
  const color =
    paused || isBreak ? "var(--sage-light)" : "var(--sage)";

  return (
    <div className="relative" style={{ width: 240, height: 240 }}>
      <svg
        width="240"
        height="240"
        viewBox="0 0 240 240"
        style={{ transform: "rotate(-90deg)", display: "block" }}
      >
        {/* Track */}
        <circle
          cx="120"
          cy="120"
          r={R}
          fill="none"
          stroke="var(--sage-100)"
          strokeWidth="10"
        />
        {/* Progress arc */}
        <circle
          cx="120"
          cy="120"
          r={R}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 1s linear, stroke 0.4s ease",
          }}
        />
      </svg>

      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span
          style={{
            fontSize: "3rem",
            fontWeight: 800,
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
            fontVariantNumeric: "tabular-nums",
            lineHeight: 1,
          }}
        >
          {fmt(timeLeft)}
        </span>
        <span
          className="text-xs font-medium mt-2"
          style={{ color: "var(--text-muted)" }}
        >
          {isBreak ? "break" : paused ? "paused" : "remaining"}
        </span>
      </div>
    </div>
  );
}

export default function FocusTimer() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [task, setTask] = useState("");
  const [mins, setMins] = useState<Mins>(10);
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const [totalSecs, setTotalSecs] = useState(10 * 60);
  const [showDump, setShowDump] = useState(false);
  const [dumpText, setDumpText] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [nudgeIdx, setNudgeIdx] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer tick — restarts whenever phase changes
  useEffect(() => {
    if (phase === "running" || phase === "break") {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
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

  // Rotate nudge message every 30 s during focus
  useEffect(() => {
    if (phase !== "running") return;
    const id = setInterval(
      () => setNudgeIdx((i) => (i + 1) % NUDGES.length),
      30_000
    );
    return () => clearInterval(id);
  }, [phase]);

  function start() {
    const secs = mins * 60;
    setTimeLeft(secs);
    setTotalSecs(secs);
    setNudgeIdx(0);
    setPhase("running");
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
    setMins(10);
    setTimeLeft(10 * 60);
    setTotalSecs(10 * 60);
  }

  async function getStep() {
    if (!dumpText.trim() || aiLoading) return;
    setAiLoading(true);
    try {
      const res = await fetch("/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: `I need to focus but I'm stuck and don't know where to begin. Here's what's swirling in my head: "${dumpText.trim()}"\n\nGive me just ONE tiny, concrete action I can start right now. Start with a verb. One sentence only — keep it small and doable.`,
            },
          ],
        }),
      });
      const data = await res.json();
      if (data.reply) {
        const first = data.reply
          .replace(/^→\s*/, "")
          .split("\n")[0]
          .trim();
        setTask(first);
        setShowDump(false);
        setDumpText("");
      }
    } catch {
      // fail silently — user still has their dump text
    } finally {
      setAiLoading(false);
    }
  }

  // ── SETUP ────────────────────────────────────────────────────────────
  if (phase === "setup") {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4 py-16"
        style={{ background: "var(--warm-bg)" }}
      >
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-5xl mb-5 block">🌿</span>
            <h1
              className="text-3xl md:text-4xl font-extrabold mb-2"
              style={{
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Pick one thing.
            </h1>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Start for just <strong>{mins} minutes</strong>. That&apos;s it.
            </p>
          </div>

          {/* Task input */}
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && task.trim() && start()}
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

          {/* "I don't know where to start" */}
          <div className="mt-3 mb-6 min-h-[2.5rem]">
            {!showDump ? (
              <button
                onClick={() => setShowDump(true)}
                className="text-sm transition-colors"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--sage-dark)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                I don&apos;t know where to start →
              </button>
            ) : (
              <div
                className="rounded-2xl border p-4"
                style={{
                  background: "var(--sage-50)",
                  borderColor: "var(--sage-100)",
                }}
              >
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "var(--sage-dark)" }}
                >
                  Dump it all out — AI will find your first step.
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
                      opacity:
                        !dumpText.trim() || aiLoading ? 0.5 : 1,
                    }}
                  >
                    {aiLoading ? "Thinking..." : "Find my one step →"}
                  </button>
                  <button
                    onClick={() => {
                      setShowDump(false);
                      setDumpText("");
                    }}
                    className="text-sm px-4 py-2 rounded-full"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Duration pills */}
          <div className="flex gap-2 mb-6">
            {DURATIONS.map((d) => (
              <button
                key={d}
                onClick={() => {
                  setMins(d);
                  setTimeLeft(d * 60);
                  setTotalSecs(d * 60);
                }}
                className="flex-1 py-3 rounded-full text-sm font-bold border transition-all"
                style={{
                  background:
                    mins === d ? "var(--sage)" : "var(--warm-card)",
                  borderColor:
                    mins === d ? "var(--sage)" : "var(--warm-border)",
                  color: mins === d ? "white" : "var(--text-secondary)",
                }}
              >
                {d} min
              </button>
            ))}
          </div>

          {/* Start button */}
          <button
            onClick={start}
            disabled={!task.trim()}
            className="w-full py-4 rounded-2xl font-extrabold text-lg text-white"
            style={{
              background: "var(--sage)",
              opacity: task.trim() ? 1 : 0.4,
              letterSpacing: "-0.01em",
              transition: "opacity 0.2s",
            }}
          >
            Start {mins} minutes
          </button>

          {!task.trim() && (
            <p
              className="text-center text-xs mt-3"
              style={{ color: "var(--text-muted)" }}
            >
              Name your task first — even one word works
            </p>
          )}
        </div>
      </div>
    );
  }

  // ── RUNNING / PAUSED ─────────────────────────────────────────────────
  if (phase === "running" || phase === "paused") {
    const isPaused = phase === "paused";
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-4"
        style={{ background: "var(--warm-bg)" }}
      >
        <div className="w-full max-w-sm text-center">
          {/* Task badge */}
          <div className="mb-8">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold max-w-xs truncate"
              style={{
                background: "var(--sage-100)",
                color: "var(--sage-dark)",
              }}
              title={task}
            >
              {task}
            </span>
          </div>

          {/* Ring timer */}
          <div className="flex justify-center mb-8">
            <Ring
              timeLeft={timeLeft}
              total={totalSecs}
              paused={isPaused}
            />
          </div>

          {/* Status message */}
          <p
            className="text-sm mb-10"
            style={{ color: "var(--text-muted)", minHeight: "1.25rem" }}
          >
            {isPaused
              ? "Timer paused. Ready when you are."
              : NUDGES[nudgeIdx]}
          </p>

          {/* Controls */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setPhase(isPaused ? "running" : "paused")}
              className="px-7 py-3 rounded-full font-bold text-sm border transition-all"
              style={
                isPaused
                  ? { background: "var(--sage)", color: "white", border: "none" }
                  : {
                      background: "var(--warm-card)",
                      borderColor: "var(--warm-border)",
                      color: "var(--text-secondary)",
                    }
              }
            >
              {isPaused ? "Resume" : "Pause"}
            </button>
            <button
              onClick={stop}
              className="px-7 py-3 rounded-full font-bold text-sm border"
              style={{
                background: "var(--warm-card)",
                borderColor: "var(--warm-border)",
                color: "var(--text-muted)",
              }}
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
      <div
        className="min-h-screen flex flex-col items-center justify-center px-4"
        style={{ background: "var(--warm-bg)" }}
      >
        <div className="w-full max-w-sm text-center">
          <span className="text-5xl mb-5 block">🌿</span>
          <h2
            className="text-2xl font-extrabold mb-2"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
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
            style={{
              background: "var(--warm-card)",
              borderColor: "var(--warm-border)",
              color: "var(--text-muted)",
            }}
          >
            Skip break
          </button>
        </div>
      </div>
    );
  }

  // ── DONE ──────────────────────────────────────────────────────────────
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: "var(--warm-bg)" }}
    >
      <div className="w-full max-w-sm text-center">
        <div className="flex justify-center mb-5">
          <SparkleIcon size={52} color="var(--sage)" />
        </div>
        <h2
          className="text-3xl font-extrabold mb-2"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          That&apos;s a win.
        </h2>
        <p className="mb-1" style={{ color: "var(--text-secondary)" }}>
          You focused on <strong>{task}</strong>.
        </p>
        <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
          Every focused minute counts.
        </p>
        <button
          onClick={reset}
          className="px-8 py-4 rounded-2xl font-extrabold text-lg text-white"
          style={{ background: "var(--sage)", letterSpacing: "-0.01em" }}
        >
          Start another
        </button>
      </div>
    </div>
  );
}
