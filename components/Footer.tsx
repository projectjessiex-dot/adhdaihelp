import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t" style={{ background: "var(--warm-bg)", borderColor: "var(--warm-border)" }}>
      <div className="max-w-5xl mx-auto px-5 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-extrabold text-lg mb-3" style={{ color: "var(--sage-dark)" }}>
              <span className="text-xl">🌿</span>
              <span>ADHD<span style={{ color: "var(--text-secondary)" }}>Clarity</span></span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Free, research-based ADHD resources for adults, parents, and educators.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>Tests</h4>
            <ul className="space-y-2">
              {[
                { label: "Adult ADHD Test", href: "/tests/adult-adhd-test/" },
                { label: "Child ADHD Test", href: "/tests/child-adhd-test/" },
                { label: "ADHD Type Quiz", href: "/tests/adhd-type-quiz/" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors hover:underline" style={{ color: "var(--text-muted)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>Learn</h4>
            <ul className="space-y-2">
              {[
                { label: "ADHD in Women", href: "/learn/adhd-in-women/" },
                { label: "ADHD vs Anxiety", href: "/learn/adhd-vs-anxiety/" },
                { label: "Executive Dysfunction", href: "/learn/executive-dysfunction/" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors hover:underline" style={{ color: "var(--text-muted)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>Tools</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/brain-dump/" className="text-sm transition-colors hover:underline" style={{ color: "var(--text-muted)" }}>
                  Brain Dump
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: "var(--warm-border)" }}>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} ADHDClarity. All rights reserved.
          </p>
          <p className="text-xs max-w-md text-center md:text-right" style={{ color: "var(--text-muted)" }}>
            <strong>Disclaimer:</strong> For informational purposes only. Not medical advice, diagnosis, or treatment.
            Always consult a qualified healthcare professional.
          </p>
        </div>
      </div>
    </footer>
  );
}
