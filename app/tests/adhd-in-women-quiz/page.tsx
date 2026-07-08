import type { Metadata } from "next";
import AdhdInWomenQuiz from "./AdhdInWomenQuiz";

export const metadata: Metadata = {
  title: "ADHD in Women Quiz — Do These Patterns Sound Like You?",
  description:
    "ADHD in women looks different. This 12-question quiz reflects how ADHD actually shows up in women — emotional sensitivity, masking, task paralysis. Free, instant results.",
  alternates: {
    canonical: "https://adhdaihelp.com/tests/adhd-in-women-quiz/",
  },
};

export default function Page() {
  return <AdhdInWomenQuiz />;
}
