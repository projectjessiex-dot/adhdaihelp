"use client";
import { useState, useRef, useEffect, KeyboardEvent } from "react";

type Message = { role: "user" | "assistant"; content: string };

const TRIGGERS = [
  { id: "cant-start", text: "I can't start something I need to do" },
  { id: "too-much", text: "There's too much to do and I can't prioritize" },
  { id: "avoiding", text: "I've been avoiding something and I feel bad about it" },
  { id: "exhausted", text: "I'm exhausted and falling further behind" },
  { id: "plan-day", text: "Help me figure out what to do today" },
  { id: "talk", text: "I just need to talk through something" },
];

function TypingDots() {
  return (
    <div className="flex gap-1.5 items-center px-4 py-3">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full animate-bounce"
          style={{
            background: "var(--sage-light)",
            animationDelay: `${i * 150}ms`,
            animationDuration: "1s",
          }}
        />
      ))}
    </div>
  );
}

function CoachMessage({ content }: { content: string }) {
  const lines = content.split("\n").filter((l) => l !== "");
  return (
    <div className="space-y-1.5">
      {lines.map((line, i) => {
        const isStep = line.startsWith("→");
        return (
          <p
            key={i}
            className={isStep ? "font-semibold mt-2" : ""}
            style={{
              color: isStep ? "var(--sage-dark)" : "var(--text-primary)",
              lineHeight: "1.6",
            }}
          >
            {line}
          </p>
        );
      })}
    </div>
  );
}

export default function ADHDCoach() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: Message = { role: "user", content: trimmed };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);
    setError(null);
    if (!started) setStarted(true);

    try {
      const res = await fetch("/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch {
      setError(
        "Something went wrong on my end — not yours.\nTry sending that again?"
      );
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  function reset() {
    setMessages([]);
    setStarted(false);
    setInput("");
    setError(null);
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--warm-bg)" }}>
      {/* Header */}
      <div
        className="sticky top-0 z-10 border-b"
        style={{ background: "var(--warm-bg)", borderColor: "var(--warm-border)" }}
      >
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <span
              className="text-sm font-bold"
              style={{ color: "var(--sage-dark)" }}
            >
              ADHD Coach
            </span>
            <span
              className="ml-2 text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: "var(--sage-100)", color: "var(--sage-dark)" }}
            >
              No Judgment
            </span>
          </div>
          {started && (
            <button
              onClick={reset}
              className="text-xs font-medium transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              Start over
            </button>
          )}
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-4">
        {!started ? (
          /* Landing */
          <div className="flex-1 flex flex-col justify-center py-12">
            <div className="mb-8">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
                style={{ background: "var(--sage-100)", color: "var(--sage-dark)" }}
              >
                Free · No Sign-Up · No Judgment
              </span>
              <h1
                className="text-2xl md:text-3xl font-extrabold mb-3 leading-snug"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
              >
                Hey. Whatever&apos;s on your mind —<br />
                let&apos;s figure it out together.
              </h1>
              <p style={{ color: "var(--text-secondary)" }}>
                The fact that you&apos;re here is already something.
              </p>
            </div>

            {/* Trigger buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {TRIGGERS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => send(t.text)}
                  className="text-left px-4 py-3.5 rounded-2xl border text-sm font-medium transition-all"
                  style={{
                    background: "var(--warm-card)",
                    borderColor: "var(--warm-border)",
                    color: "var(--text-secondary)",
                    boxShadow: "var(--card-shadow)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--sage-light)";
                    e.currentTarget.style.color = "var(--sage-dark)";
                    e.currentTarget.style.background = "var(--sage-50)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--warm-border)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.background = "var(--warm-card)";
                  }}
                >
                  {t.text}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px" style={{ background: "var(--warm-border)" }} />
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                or type what&apos;s on your mind
              </span>
              <div className="flex-1 h-px" style={{ background: "var(--warm-border)" }} />
            </div>

            <InputArea
              value={input}
              onChange={setInput}
              onSend={() => send(input)}
              onKey={handleKey}
              loading={loading}
              inputRef={inputRef}
            />
          </div>
        ) : (
          /* Chat */
          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 py-6 space-y-4 overflow-y-auto">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[85%] px-4 py-3 rounded-2xl text-sm"
                    style={
                      m.role === "user"
                        ? {
                            background: "var(--warm-card)",
                            border: "1px solid var(--warm-border)",
                            color: "var(--text-primary)",
                            borderRadius: "18px 18px 4px 18px",
                          }
                        : {
                            background: "var(--sage-50)",
                            color: "var(--text-primary)",
                            borderRadius: "4px 18px 18px 18px",
                          }
                    }
                  >
                    {m.role === "assistant" ? (
                      <CoachMessage content={m.content} />
                    ) : (
                      <p style={{ lineHeight: "1.6" }}>{m.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div
                    className="rounded-2xl"
                    style={{
                      background: "var(--sage-50)",
                      borderRadius: "4px 18px 18px 18px",
                    }}
                  >
                    <TypingDots />
                  </div>
                </div>
              )}

              {error && (
                <div className="flex justify-start">
                  <div
                    className="max-w-[85%] px-4 py-3 rounded-2xl text-sm"
                    style={{
                      background: "var(--sage-50)",
                      color: "var(--text-secondary)",
                      borderRadius: "4px 18px 18px 18px",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {error}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input pinned to bottom */}
            <div
              className="sticky bottom-0 py-4"
              style={{ background: "var(--warm-bg)" }}
            >
              <InputArea
                value={input}
                onChange={setInput}
                onSend={() => send(input)}
                onKey={handleKey}
                loading={loading}
                inputRef={inputRef}
              />
              <p className="text-center text-xs mt-3" style={{ color: "var(--text-muted)" }}>
                Not a diagnostic tool · For serious concerns, please consult a professional
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function InputArea({
  value,
  onChange,
  onSend,
  onKey,
  loading,
  inputRef,
}: {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  onKey: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  loading: boolean;
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
}) {
  return (
    <div
      className="flex gap-2 items-end rounded-2xl border px-4 py-3"
      style={{
        background: "var(--warm-card)",
        borderColor: "var(--warm-border)",
        boxShadow: "var(--card-shadow)",
      }}
    >
      <textarea
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKey}
        placeholder="What's on your mind?"
        rows={1}
        disabled={loading}
        className="flex-1 resize-none outline-none text-sm bg-transparent"
        style={{
          color: "var(--text-primary)",
          minHeight: "24px",
          maxHeight: "120px",
        }}
        onInput={(e) => {
          const el = e.currentTarget;
          el.style.height = "auto";
          el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
        }}
      />
      <button
        onClick={onSend}
        disabled={loading || !value.trim()}
        className="flex-shrink-0 font-bold text-sm px-4 py-2 rounded-full transition-opacity text-white"
        style={{
          background: "var(--sage)",
          opacity: loading || !value.trim() ? 0.4 : 1,
        }}
      >
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
}
