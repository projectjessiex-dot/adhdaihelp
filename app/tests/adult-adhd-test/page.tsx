import type { Metadata } from "next";
import AdultAdhdTest from "./AdultAdhdTest";

export const metadata: Metadata = {
  title: "Free Adult ADHD Screening Test (ASRS v1.1)",
  description:
    "Take this free adult ADHD screening test based on the WHO ASRS v1.1 — 18 questions, instant results. Not a diagnosis, but a meaningful starting point.",
  alternates: {
    canonical: "https://adhdaihelp.com/tests/adult-adhd-test/",
  },
};

export default function Page() {
  return <AdultAdhdTest />;
}
