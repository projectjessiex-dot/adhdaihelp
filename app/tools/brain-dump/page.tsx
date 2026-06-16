"use client";

import { useState, useRef } from "react";

export default function BrainDump() {
  const [text, setText]       = useState("");
  const [cleared, setCleared] = useState(false);
  const textareaRef           = useRef<HTMLTextAreaElement>(null);

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const handleClear = () => {
    setText("");
    setCleared(true);
    setTimeout(() => {
      setCleared(false);
      textareaRef.current?.focus();
    }, 2000);
  };

  return (
    <div className="min-h-screen px-4 py-14" style={{ background: "var(--warm-bg)" }}>
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-5xl mb-5 block">🌿</span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "var(--text-primary)" }}>
            Brain Dump
          </h1>
          <p className="text-lg leading-relaxed max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
            Get everything out of your head. No structure required.
            No judgment. Just type until it feels lighter.
          </p>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-3 gap-4 mb-8 text-center">
          {[
            { icon: "✍️", label: "Type everything", desc: "Tasks, worries, random thoughts — all of it" },
            { icon: "😮‍💨", label: "Feel the relief", desc: "Your brain stops holding on once it's on screen" },
            { icon: "🗑️", label: "Clear and go", desc: "Delete it all. Start fresh. Move forward." },
          ].map((step) => (
            <div key={step.label} className="rounded-2xl p-4 border"
              style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
              <div className="text-2xl mb-2">{step.icon}</div>
              <div className="text-xs font-bold mb-1" style={{ color: "var(--text-primary)" }}>{step.label}</div>
              <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{step.desc}</div>
            </div>
          ))}
        </div>

        {/* Textarea */}
        {cleared ? (
          <div
            className="w-full rounded-3xl border flex items-center justify-center"
            style={{
              minHeight: "320px",
              background: "var(--sage-50)",
              borderColor: "var(--sage-100)",
            }}
          >
            <div className="text-center">
              <span className="text-4xl block mb-3">✨</span>
              <p className="font-semibold" style={{ color: "var(--sage-dark)" }}>
                All cleared. Head feels lighter?
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                Ready for a fresh start...
              </p>
            </div>
          </div>
        ) : (
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's on your mind right now? Start anywhere. There's no wrong way to do this..."
            autoFocus
            className="w-full rounded-3xl border p-7 text-base leading-relaxed outline-none resize-none transition-all"
            style={{
              minHeight: "320px",
              background: "var(--warm-card)",
              borderColor: text ? "var(--sage-light)" : "var(--warm-border)",
              color: "var(--text-primary)",
              fontFamily: "inherit",
            }}
          />
        )}

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {wordCount > 0 ? `${wordCount} word${wordCount !== 1 ? "s" : ""}` : "Start typing — no rules here"}
          </span>
          {text.trim().length > 0 && (
            <button
              onClick={handleClear}
              className="text-sm font-bold px-5 py-2.5 rounded-full text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--sage)" }}
            >
              Clear & Reset 🗑️
            </button>
          )}
        </div>

        {/* Gentle prompt */}
        {wordCount > 30 && (
          <div className="mt-6 rounded-2xl p-5 border text-center"
            style={{ background: "var(--sage-50)", borderColor: "var(--sage-100)" }}>
            <p className="text-sm font-semibold mb-1" style={{ color: "var(--sage-dark)" }}>
              You&apos;ve written {wordCount} words. That&apos;s a lot to carry.
            </p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              When you&apos;re ready — pick just <strong>one thing</strong> from what you wrote.
              Just one. That&apos;s your next step.
            </p>
          </div>
        )}

        {/* Note about privacy */}
        <p className="text-center text-xs mt-8" style={{ color: "var(--text-muted)" }}>
          🔒 Nothing you type here is saved, sent, or stored anywhere. This tool is 100% private.
        </p>
      </div>
    </div>
  );
}
