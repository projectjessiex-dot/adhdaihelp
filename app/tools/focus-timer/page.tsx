import type { Metadata } from "next";
import FocusTimer from "./FocusTimer";

export const metadata: Metadata = {
  title: "ADHD Focus Timer | Free Pomodoro Timer for ADHD Brains",
  description:
    "Can't start? This ADHD focus timer is built for task initiation, not just tracking time. Default 10 minutes, AI-powered first step, and gentle encouragement. Free, no sign-up.",
  alternates: {
    canonical: "https://adhdaihelp.com/tools/focus-timer/",
  },
};

export default function Page() {
  return <FocusTimer />;
}
