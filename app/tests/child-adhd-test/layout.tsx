import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child ADHD Test for Parents – Free SNAP-IV Screener",
  description:
    "Free child ADHD screener based on the SNAP-IV Rating Scale and DSM-5 criteria. For parents of children aged 5–17. 18 questions, instant results, no sign-up needed.",
  openGraph: {
    title: "Child ADHD Test for Parents – Free SNAP-IV Screener",
    description: "18 questions · Instant results · DSM-5 criteria · For parents of children aged 5–17.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
