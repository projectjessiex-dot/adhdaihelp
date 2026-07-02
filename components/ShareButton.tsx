"use client";
import { useState } from "react";

export default function ShareButton({ label = "Copy link" }: { label?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: do nothing
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border transition-all"
      style={{
        background: copied ? "var(--sage-100)" : "var(--warm-card)",
        borderColor: copied ? "var(--sage-light)" : "var(--warm-border)",
        color: copied ? "var(--sage-dark)" : "var(--text-secondary)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={15}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {copied ? (
          <path d="M20 6 9 17l-5-5" />
        ) : (
          <>
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </>
        )}
      </svg>
      {copied ? "Copied!" : label}
    </button>
  );
}
