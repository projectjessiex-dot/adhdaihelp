import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Child ADHD Screener for Parents — Based on SNAP-IV",
  description:
    "Is your child showing signs of ADHD? Take this free 18-question screener based on the SNAP-IV scale (DSM-5 criteria). For parents of children aged 5–17. Instant results, no sign-up.",
  openGraph: {
    title: "Free Child ADHD Screener for Parents (SNAP-IV)",
    description: "18 questions · Instant results · Based on DSM-5 criteria for childhood ADHD.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
