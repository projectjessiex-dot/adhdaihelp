"use client";
import { useState } from "react";
import Link from "next/link";

type Path = "adult" | "child" | null;

const adultTests = [
  {
    href: "/tests/adult-adhd-test/",
    label: "Most Taken",
    title: "Adult ADHD Self-Test",
    question: "Could I have ADHD?",
    desc: "Based on the clinically validated ASRS screener.",
    time: "3 min",
    primary: true,
  },
  {
    href: "/tests/adhd-in-women-quiz/",
    label: "For Women",
    title: "ADHD in Women Quiz",
    question: "Does ADHD look different in you?",
    desc: "Women are diagnosed late or never — find out if this fits.",
    time: "4 min",
    primary: false,
  },
  {
    href: "/tests/adhd-type-quiz/",
    label: "Know Your Type",
    title: "ADHD Type Quiz",
    question: "Inattentive, hyperactive, or combined?",
    desc: "Find out which ADHD profile fits you best.",
    time: "5 min",
    primary: false,
  },
];

const childTests = [
  {
    href: "/tests/child-adhd-test/",
    label: "For Parents",
    title: "Child ADHD Screener",
    question: "Is my child showing signs of ADHD?",
    desc: "Based on DSM-5 criteria — takes about 4 minutes.",
    time: "4 min",
    primary: true,
  },
  {
    href: "/tests/adhd-type-quiz/",
    label: "Know Their Type",
    title: "ADHD Type Quiz",
    question: "Inattentive, hyperactive, or combined?",
    desc: "Understand which ADHD profile fits your child.",
    time: "5 min",
    primary: false,
  },
];

export default function TestsSelector() {
  const [path, setPath] = useState<Path>(null);
  const tests = path === "adult" ? adultTests : childTests;

  return (
    <>
      {/* Step 1 — who are you looking for? */}
      {path === null ? (
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <button
            onClick={() => setPath("adult")}
            className="group rounded-2xl border p-8 text-left transition-all cursor-pointer"
            style={{
              background: "var(--warm-card)",
              borderColor: "var(--warm-border)",
            }}
          >
            <span className="text-4xl mb-4 block">🙋</span>
            <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>
              I think I might have ADHD
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
              A screener for yourself — adults or teens
            </p>
            <span
              className="text-sm font-bold inline-block group-hover:translate-x-1 transition-transform"
              style={{ color: "var(--sage-dark)" }}
            >
              Show my options →
            </span>
          </button>

          <button
            onClick={() => setPath("child")}
            className="group rounded-2xl border p-8 text-left transition-all cursor-pointer"
            style={{
              background: "var(--warm-card)",
              borderColor: "var(--warm-border)",
            }}
          >
            <span className="text-4xl mb-4 block">👨‍👧</span>
            <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>
              My child might have ADHD
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
              A screener designed for parents to assess their child
            </p>
            <span
              className="text-sm font-bold inline-block group-hover:translate-x-1 transition-transform"
              style={{ color: "var(--sage-dark)" }}
            >
              Show my options →
            </span>
          </button>
        </div>
      ) : (
        <>
          {/* Step 2 — relevant tests */}
          <div className="mb-8 text-center">
            <button
              onClick={() => setPath(null)}
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: "var(--text-muted)" }}
            >
              ← {path === "adult"
                ? "Looking for a child screener instead?"
                : "Looking for an adult screener instead?"}
            </button>
          </div>

          <div className={`grid gap-5 ${tests.length === 3 ? "md:grid-cols-3" : "sm:grid-cols-2 max-w-2xl mx-auto"}`}>
            {tests.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group card-hover rounded-2xl border transition-all overflow-hidden flex flex-col"
                style={{
                  background: t.primary ? "var(--sage)" : "var(--warm-card)",
                  borderColor: t.primary ? "var(--sage)" : "var(--warm-border)",
                }}
              >
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className="text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: t.primary ? "rgba(255,255,255,0.7)" : "var(--sage)" }}
                  >
                    {t.label}
                  </span>
                  <h3
                    className="text-lg font-bold mt-1 mb-1"
                    style={{ color: t.primary ? "#fff" : "var(--text-primary)" }}
                  >
                    {t.title}
                  </h3>
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: t.primary ? "rgba(255,255,255,0.85)" : "var(--text-secondary)" }}
                  >
                    {t.question}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-4 flex-1"
                    style={{ color: t.primary ? "rgba(255,255,255,0.7)" : "var(--text-muted)" }}
                  >
                    {t.desc}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span
                      className="text-xs"
                      style={{ color: t.primary ? "rgba(255,255,255,0.6)" : "var(--text-muted)" }}
                    >
                      {t.time}
                    </span>
                    <span
                      className="font-bold text-sm group-hover:translate-x-1 transition-transform inline-block"
                      style={{ color: t.primary ? "#fff" : "var(--sage-dark)" }}
                    >
                      Start →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}
