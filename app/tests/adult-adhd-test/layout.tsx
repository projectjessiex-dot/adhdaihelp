import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Adult ADHD Test – Based on the ASRS Screener",
  description:
    "Take the free Adult ADHD Self-Report Scale (ASRS v1.1) — 18 questions, results in under 5 minutes. Science-backed screening used by clinicians worldwide.",
  openGraph: {
    title: "Free Adult ADHD Test – Based on the ASRS Screener",
    description: "18 questions · Instant results · Based on the WHO-validated ASRS v1.1 screener.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
