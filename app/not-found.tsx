import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--warm-bg)" }}>
      <div className="max-w-md text-center">
        <span className="text-6xl mb-6 block">🌿</span>
        <h1 className="text-3xl font-extrabold mb-3" style={{ color: "var(--text-primary)" }}>
          Page Not Found
        </h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
          This page doesn&apos;t exist — but your questions about ADHD do.
          Let&apos;s get you somewhere helpful.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            { href: "/tests/adult-adhd-test/", label: "Adult ADHD Test" },
            { href: "/tests/adhd-in-women-quiz/", label: "ADHD in Women Quiz" },
            { href: "/learn/adhd-vs-anxiety/", label: "ADHD vs Anxiety" },
            { href: "/tools/brain-dump/", label: "Brain Dump Tool" },
          ].map(l => (
            <Link key={l.href} href={l.href}
              className="block p-4 rounded-2xl border text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)", color: "var(--sage-dark)" }}>
              {l.label}
            </Link>
          ))}
        </div>

        <Link href="/"
          className="inline-block font-bold px-7 py-3.5 rounded-full text-white transition-opacity hover:opacity-90"
          style={{ background: "var(--sage)" }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
