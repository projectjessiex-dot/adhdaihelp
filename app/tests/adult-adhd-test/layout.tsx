import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Adult ADHD Test — Based on ASRS v1.1",
  description:
    "Take the free Adult ADHD Self-Report Scale (ASRS v1.1) online. 18 questions, instant results. For adults who wonder if they might have ADHD — no sign-up required.",
  openGraph: {
    title: "Free Adult ADHD Self-Test (ASRS v1.1)",
    description: "18 questions · Instant results · Based on the WHO-validated ASRS screener.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
