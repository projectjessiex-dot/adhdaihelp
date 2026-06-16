import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADHD Type Quiz – Inattentive, Hyperactive, or Combined?",
  description:
    "Find out which ADHD type fits you best. 18 real-life scenarios reveal whether you lean Inattentive, Hyperactive-Impulsive, or Combined Type. Free, instant results.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
