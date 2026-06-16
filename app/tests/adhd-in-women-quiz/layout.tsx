import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADHD in Women Quiz | Female ADHD Symptoms Test",
  description:
    "ADHD in women looks different — and is missed far more often. Take this free 12-question quiz to see if your symptoms match how ADHD commonly presents in women and girls.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
