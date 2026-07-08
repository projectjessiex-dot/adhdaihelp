import type { Metadata } from "next";
import AdhdTypeQuiz from "./AdhdTypeQuiz";

export const metadata: Metadata = {
  title: "What Type of ADHD Do You Have? Free Quiz",
  description:
    "Inattentive, Hyperactive-Impulsive, or Combined? This 18-question scenario quiz helps you identify your ADHD profile. Free, instant results.",
  alternates: {
    canonical: "https://adhdaihelp.com/tests/adhd-type-quiz/",
  },
};

export default function Page() {
  return <AdhdTypeQuiz />;
}
