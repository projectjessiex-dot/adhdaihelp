import type { Metadata } from "next";
import ADHDCoach from "./Coach";

export const metadata: Metadata = {
  title: "ADHD Coach — Talk Through What's Blocking You",
  description:
    "Stuck, overwhelmed, or can't start? Talk to a free AI ADHD coach. No judgment. One step at a time. You don't have to figure this out alone.",
};

export default function Page() {
  return <ADHDCoach />;
}
