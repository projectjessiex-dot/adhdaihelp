"use client";
import { useState, useEffect, useRef } from "react";
import ToolIcon from "@/components/ToolIcon";
import { trackEvent } from "@/lib/analytics";

type Phase = "setup" | "running" | "paused" | "checkin" | "done";
type Mins = 10 | 25 | 45;

const DURATIONS: { mins: Mins; label: string; sub: string }[] = [
  { mins: 10, label: "Quick", sub: "10 min" },
  { mins: 25, label: "Standard", sub: "25 min" },
  { mins: 45, label: "Deep", sub: "45 min" },
];

const PRESENCE_LINES = [
  "Someone else is working right now too.",
  "You're not the only one showing up today.",
  "The session is holding space for you.",
  "Keep going. You're not alone in this.",
];

function pad(n: number) { return String(n).padStart(2, "0"); }
function fmt(s: number) { return `${pad(Math.floor(s / 60))}:${pad(s % 60)}`; }

const R = 80;
const CIRC = 2 * Math.PI * R;

function Ring({ timeLeft, total, paused }: { timeLeft: number; total: number; paused?: boolean }) {
  const progress = total > 0 ? timeLeft / total : 0;
  const offset = CIRC * (1 - progress);
  return (
    <div className="relative" style={{ width: 220, height: 220 }}>
      <div className="absolute inset-0 rounded-full" style={{
        background: "var(--surface-dark-elevated)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.22)",
      }} />
      <svg width="220" height="220" viewBox="0 0 220 220" className="absolute inset-0"
        style={{ transform: "rotate(-90deg)" }}>
        <circle cx="110" cy="110" r={R} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="7" />
        <circle cx="110" cy="110" r={R} fill="none"
          stroke={paused ? "rgba(82,101,122,0.45)" : "var(--sage)"}
          strokeWidth="7" strokeLinecap="round"
          strokeDasharray={CIRC} strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1s linear, stroke 0.4s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span style={{
          fontSize: "2.6rem", fontWeight: 800,
          color: "var(--on-dark)",
          letterSpacing: "-0.04em",
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
        }}>
          {fmt(timeLeft)}
        </span>
        <span className="text-xs font-semibold tracking-wider uppercase mt-2"
          style={{ color: "var(--on-dark-soft)" }}>
          {paused ? "paused" : "remaining"}
        </span>
      </div>
    </div>
  );
}

/* Animated companion dots — two pulsing circles suggesting co-presence */
function CompanionPresence({ active }: { active: boolean }) {
  return (
    <div className="flex items-end justify-center gap-5 mb-8">
      {/* You */}
      <div className="flex flex-col items-center gap-1.5">
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "var(--sage)",
          opacity: active ? 1 : 0.4,
          transition: "opacity 0.4s",
          boxShadow: active ? "0 0 0 6px rgba(82,101,122,0.18)" : "none",
        }} />
        <span className="text-xs" style={{ color: "var(--on-dark-soft)" }}>You</span>
      </div>

      {/* Working together line */}
      <div style={{
        width: 40, height: 1,
        background: active ? "rgba(82,101,122,0.4)" : "rgba(255,255,255,0.08)",
        marginBottom: 18,
        transition: "background 0.4s",
      }} />

      {/* Virtual partner */}
      <div className="flex flex-col items-center gap-1.5">
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "var(--surface-dark-elevated)",
          border: `2px solid ${active ? "var(--sage)" : "rgba(255,255,255,0.1)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "border-color 0.4s",
        }}>
          {/* person silhouette */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke={active ? "var(--sage)" : "rgba(255,255,255,0.25)"}
            strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
            style={{ transition: "stroke 0.4s" }}>
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 20c0-4 3.1-7 7-7s7 3 7 7" />
          </svg>
        </div>
        <span className="text-xs" style={{ color: "var(--on-dark-soft)" }}>
          {active ? "Partner" : "Waiting"}
        </span>
      </div>
    </div>
  );
}

export default function BodyDoublingTimer() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [task, setTask] = useState("");
  const [mins, setMins] = useState<Mins>(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [totalSecs, setTotalSecs] = useState(25 * 60);
  const [lineIdx, setLineIdx] = useState(0);
  const [checkinAnswer, setCheckinAnswer] = useState<"yes" | "no" | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer tick
  useEffect(() => {
    if (phase === "running") {
      intervalRef.current = setInterval(() => setTimeLeft((p) => Math.max(0, p - 1)), 1000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [phase]);

  // Transitions
  useEffect(() => {
    if (phase !== "running" || timeLeft === 0) return;
    // Mid-session check-in at 50%
    if (timeLeft === Math.floor(totalSecs / 2)) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setPhase("checkin");
    }
  }, [timeLeft, phase, totalSecs]);

  useEffect(() => {
    if (timeLeft === 0 && phase === "running") setPhase("done");
  }, [timeLeft, phase]);

  // Fire tool_complete when session finishes
  useEffect(() => {
    if (phase === "done") {
      trackEvent("tool_complete", { tool_name: "body_doubling", tool_duration: mins });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // Rotate presence lines
  useEffect(() => {
    if (phase !== "running") return;
    const id = setInterval(() => setLineIdx((i) => (i + 1) % PRESENCE_LINES.length), 30_000);
    return () => clearInterval(id);
  }, [phase]);

  function start() {
    const label = task.trim() || "My work session";
    setTask(label);
    const secs = mins * 60;
    setTimeLeft(secs);
    setTotalSecs(secs);
    setLineIdx(0);
    setCheckinAnswer(null);
    setPhase("running");
    trackEvent("tool_start", { tool_name: "body_doubling", tool_duration: mins });
  }

  function resumeAfterCheckin() {
    setPhase("running");
    // re-start interval
  }

  function reset() {
    setPhase("setup");
    setTask("");
    setMins(25);
    setTimeLeft(25 * 60);
    setTotalSecs(25 * 60);
    setCheckinAnswer(null);
  }

  // ── SETUP ────────────────────────────────────────────────────────────
  if (phase === "setup") {
    return (
      <div className="min-h-[72vh] flex items-center justify-center px-4 py-16"
        style={{ background: "var(--warm-bg)" }}>
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-5">
              <ToolIcon name="body-doubling" theme="focus" size={28} containerSize={56} />
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              Virtual Co-working Session
            </h1>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Work alongside a virtual partner. Name your task, set your time,
              and show up together.
            </p>
          </div>

          {/* Task commitment */}
          <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: "var(--text-muted)" }}>
            Today I&apos;m going to work on...
          </label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && start()}
            placeholder="e.g. Reply to emails, write one paragraph..."
            autoFocus
            className="w-full rounded-2xl border px-5 py-4 text-base outline-none mb-5"
            style={{
              background: "var(--warm-card)",
              borderColor: task ? "var(--sage-light)" : "var(--warm-border)",
              color: "var(--text-primary)",
              fontFamily: "inherit",
              transition: "border-color 0.2s",
            }}
          />

          {/* Duration */}
          <div className="flex gap-2 mb-6">
            {DURATIONS.map((d) => (
              <button key={d.mins}
                onClick={() => { setMins(d.mins); setTimeLeft(d.mins * 60); setTotalSecs(d.mins * 60); }}
                className="flex-1 py-3 rounded-full text-xs font-bold border transition-all"
                style={{
                  background: mins === d.mins ? "var(--sage)" : "var(--warm-card)",
                  borderColor: mins === d.mins ? "var(--sage)" : "var(--warm-border)",
                  color: mins === d.mins ? "white" : "var(--text-secondary)",
                }}>
                {d.label}<br />
                <span className="font-normal opacity-80">{d.sub}</span>
              </button>
            ))}
          </div>

          <button onClick={start}
            className="w-full py-4 rounded-2xl font-extrabold text-base text-white"
            style={{ background: "var(--sage)", letterSpacing: "-0.01em" }}>
            Join Session →
          </button>
          <p className="text-center text-xs mt-3" style={{ color: "var(--text-muted)" }}>
            Free · No sign-up · Includes a mid-session check-in
          </p>
        </div>
      </div>
    );
  }

  // ── RUNNING / PAUSED ────────────────────────────────────────────────
  if (phase === "running" || phase === "paused") {
    const isPaused = phase === "paused";
    return (
      <div className="min-h-[72vh] flex flex-col items-center justify-center px-4 py-12"
        style={{ background: "var(--surface-dark)" }}>
        <div className="w-full max-w-sm text-center">

          <CompanionPresence active={!isPaused} />

          {/* Task */}
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold"
              style={{ background: "var(--surface-dark-elevated)", color: "var(--on-dark)" }}>
              {task}
            </span>
          </div>

          {/* Ring */}
          <div className="flex justify-center mb-6">
            <Ring timeLeft={timeLeft} total={totalSecs} paused={isPaused} />
          </div>

          <p className="text-sm mb-8" style={{ color: "var(--on-dark-soft)", minHeight: "1.25rem" }}>
            {isPaused ? "Paused. Resume when you're ready." : PRESENCE_LINES[lineIdx]}
          </p>

          <div className="flex gap-3 justify-center">
            <button onClick={() => setPhase(isPaused ? "running" : "paused")}
              className="px-7 py-3 rounded-full font-bold text-sm transition-all"
              style={isPaused
                ? { background: "var(--sage)", color: "white" }
                : { background: "var(--surface-dark-elevated)", color: "var(--on-dark)", border: "1px solid rgba(255,255,255,0.1)" }}>
              {isPaused ? "Resume" : "Pause"}
            </button>
            <button onClick={reset}
              className="px-7 py-3 rounded-full font-bold text-sm"
              style={{ background: "var(--surface-dark-elevated)", color: "var(--on-dark-soft)", border: "1px solid rgba(255,255,255,0.08)" }}>
              End
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── MID-SESSION CHECK-IN ─────────────────────────────────────────────
  if (phase === "checkin") {
    const halfMins = Math.round(totalSecs / 60 / 2);
    return (
      <div className="min-h-[72vh] flex flex-col items-center justify-center px-4 py-12"
        style={{ background: "var(--surface-dark)" }}>
        <div className="w-full max-w-sm text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: "var(--sage)" }}>
            Halfway check-in · {halfMins} min done
          </p>
          <h2 className="text-xl font-extrabold mb-3"
            style={{ color: "var(--on-dark)", letterSpacing: "-0.02em" }}>
            How&apos;s it going?
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--on-dark-soft)" }}>
            Working on: <span style={{ color: "var(--on-dark)" }}>{task}</span>
          </p>

          <div className="flex flex-col gap-3 mb-8">
            {[
              { key: "yes" as const, label: "Making progress — keep going" },
              { key: "no" as const, label: "Feeling stuck — need to adjust" },
            ].map((opt) => (
              <button key={opt.key}
                onClick={() => setCheckinAnswer(opt.key)}
                className="px-6 py-3.5 rounded-2xl text-sm font-semibold border transition-all"
                style={{
                  background: checkinAnswer === opt.key ? "var(--sage)" : "var(--surface-dark-elevated)",
                  borderColor: checkinAnswer === opt.key ? "var(--sage)" : "rgba(255,255,255,0.1)",
                  color: checkinAnswer === opt.key ? "white" : "var(--on-dark)",
                }}>
                {opt.label}
              </button>
            ))}
          </div>

          {checkinAnswer && (
            <div>
              <p className="text-sm mb-5" style={{ color: "var(--on-dark-soft)" }}>
                {checkinAnswer === "yes"
                  ? "Great. Keep the same task going for the next half."
                  : "That's okay. Adjust the task if needed — even a smaller step counts."}
              </p>
              <button onClick={resumeAfterCheckin}
                className="px-8 py-3.5 rounded-2xl font-bold text-white text-sm"
                style={{ background: "var(--sage)" }}>
                Continue session →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── DONE ────────────────────────────────────────────────────────────
  return (
    <div className="min-h-[72vh] flex flex-col items-center justify-center px-4"
      style={{ background: "var(--surface-dark)" }}>
      <div className="w-full max-w-sm text-center">
        <div className="flex justify-center mb-6">
          <ToolIcon name="body-doubling" theme="focus" size={28} containerSize={56} />
        </div>
        <h2 className="text-2xl font-extrabold mb-2"
          style={{ color: "var(--on-dark)", letterSpacing: "-0.02em" }}>
          Session complete.
        </h2>
        <p className="text-sm mb-6" style={{ color: "var(--on-dark-soft)" }}>
          You showed up. Working on:{" "}
          <span style={{ color: "var(--on-dark)" }}>{task}</span>
        </p>

        <div className="rounded-2xl p-5 mb-8 text-left"
          style={{ background: "var(--surface-dark-elevated)" }}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-3"
            style={{ color: "var(--sage)" }}>
            Quick reflection
          </p>
          <p className="text-sm mb-3" style={{ color: "var(--on-dark-soft)" }}>
            Did you finish what you set out to do?
          </p>
          <div className="flex gap-2">
            {["Yes, done ✓", "Partially", "Not yet"].map((opt) => (
              <button key={opt}
                className="flex-1 py-2 rounded-full text-xs font-semibold border transition-all"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "var(--on-dark-soft)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--sage)";
                  e.currentTarget.style.color = "var(--on-dark)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.color = "var(--on-dark-soft)";
                }}>
                {opt}
              </button>
            ))}
          </div>
          <p className="text-xs mt-4" style={{ color: "var(--on-dark-soft)" }}>
            What&apos;s the next small step?
          </p>
          <input type="text" placeholder="Type anything..."
            className="w-full mt-2 rounded-xl border px-3 py-2 text-sm outline-none"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderColor: "rgba(255,255,255,0.1)",
              color: "var(--on-dark)",
              fontFamily: "inherit",
            }} />
        </div>

        <button onClick={reset}
          className="px-8 py-3.5 rounded-2xl font-bold text-white text-sm"
          style={{ background: "var(--sage)" }}>
          Start another session →
        </button>
      </div>
    </div>
  );
}
