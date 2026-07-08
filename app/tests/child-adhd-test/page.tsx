import type { Metadata } from "next";
import ChildAdhdTest from "./ChildAdhdTest";

export const metadata: Metadata = {
  title: "Free Child ADHD Screener (SNAP-IV)",
  description:
    "An 18-question ADHD screener for children based on the SNAP-IV and DSM-5 criteria. Completed by parents or caregivers. Free, instant results.",
  alternates: {
    canonical: "https://adhdaihelp.com/tests/child-adhd-test/",
  },
};

export default function Page() {
  return <ChildAdhdTest />;
}
