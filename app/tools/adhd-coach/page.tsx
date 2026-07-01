import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ADHD Tools — ADHDClarity",
  description: "Free tools to help you start tasks, find focus, and manage your day.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "var(--warm-bg)" }}
    >
      <div className="max-w-md text-center">
        <span className="text-4xl mb-6 block">🛠️</span>
        <h1
          className="text-2xl font-bold mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          This tool is being updated
        </h1>
        <p
          className="text-sm leading-relaxed mb-8"
          style={{ color: "var(--text-secondary)" }}
        >
          We&apos;re working on a better version. In the meantime, try one of our
          other tools — they&apos;re ready right now.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/tools/focus-timer/"
            className="font-semibold px-6 py-3 rounded-lg text-white text-sm transition-opacity hover:opacity-90"
            style={{ background: "var(--sage)" }}
          >
            Try Focus Timer →
          </Link>
          <Link
            href="/tools/brain-dump/"
            className="font-semibold px-6 py-3 rounded-lg text-sm border transition-colors"
            style={{
              color: "var(--text-primary)",
              borderColor: "var(--warm-border)",
              background: "var(--warm-card)",
            }}
          >
            Brain Dump
          </Link>
        </div>
        <Link
          href="/"
          className="block mt-6 text-xs hover:underline"
          style={{ color: "var(--text-muted)" }}
        >
          ← Back to all tools
        </Link>
      </div>
    </div>
  );
}
