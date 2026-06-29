import type { Metadata } from "next";
import FocusTimer from "./FocusTimer";

export const metadata: Metadata = {
  title: "ADHD Focus Timer – Start in 10 Minutes | ADHDClarity",
  description:
    "A distraction-free focus timer built for ADHD brains. Pick one tiny task, start for just 10 minutes. No sign-up required.",
};

export default function Page() {
  return <FocusTimer />;
}
