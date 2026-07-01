import Link from "next/link";

/* Dark navy footer — {colors.surface-dark} per Claude design system */
export default function Footer() {
  return (
    <footer style={{ background: "var(--surface-dark)", marginTop: "0" }}>
      <div className="max-w-5xl mx-auto px-5 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-semibold text-lg mb-3" style={{ color: "var(--on-dark)" }}>
              <span className="text-xl">🌿</span>
              <span>ADHD<span style={{ color: "var(--brand-green)" }}>Clarity</span></span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--on-dark-soft)" }}>
              Simple, supportive tools for starting tasks, finding focus, and clearing your head.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--on-dark-soft)" }}>Tools</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Focus Timer", href: "/tools/focus-timer/" },
                { label: "Brain Dump", href: "/tools/brain-dump/" },
                { label: "Pomodoro Timer", href: "/tools/adhd-pomodoro-timer/" },
                { label: "Body Doubling Timer", href: "/tools/body-doubling-timer/" },
                { label: "10-Minute Timer", href: "/tools/10-minute-adhd-timer/" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-opacity hover:opacity-100 opacity-70" style={{ color: "var(--on-dark)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--on-dark-soft)" }}>Learn</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Why Starting Feels Hard", href: "/learn/executive-dysfunction/" },
                { label: "A Guide to Time Blindness", href: "/learn/time-blindness/" },
                { label: "When Your Mind Feels Full", href: "/learn/mind-feels-too-full/" },
                { label: "ADHD Focus Checklist", href: "/resources/adhd-focus-checklist/" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-opacity hover:opacity-100 opacity-70" style={{ color: "var(--on-dark)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--on-dark-soft)" }}>More</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Adult ADHD Screener", href: "/tests/adult-adhd-test/" },
                { label: "ADHD in Women Quiz", href: "/tests/adhd-in-women-quiz/" },
                { label: "Privacy Policy", href: "/privacy-policy/" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-opacity hover:opacity-100 opacity-70" style={{ color: "var(--on-dark)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(160,157,150,0.2)" }}>
          <p className="text-xs" style={{ color: "var(--on-dark-soft)" }}>
            © {new Date().getFullYear()} ADHDClarity. All rights reserved.
          </p>
          <p className="text-xs max-w-md text-center md:text-right" style={{ color: "var(--on-dark-soft)" }}>
            <strong style={{ color: "var(--on-dark)" }}>Disclaimer:</strong> For informational purposes only. Not medical advice, diagnosis, or treatment.
            Always consult a qualified healthcare professional.
          </p>
        </div>
      </div>
    </footer>
  );
}
