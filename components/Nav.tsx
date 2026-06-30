"use client";
import Link from "next/link";
import { useState } from "react";

type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; href?: never; children: { label: string; href: string }[] };

const links: NavItem[] = [
  {
    label: "Tests",
    children: [
      { label: "Adult ADHD Test", href: "/tests/adult-adhd-test/" },
      { label: "ADHD in Women Quiz", href: "/tests/adhd-in-women-quiz/" },
      { label: "Child ADHD Test", href: "/tests/child-adhd-test/" },
      { label: "ADHD Type Quiz", href: "/tests/adhd-type-quiz/" },
    ],
  },
  {
    label: "Learn",
    children: [
      { label: "ADHD in Women", href: "/learn/adhd-in-women/" },
      { label: "ADHD vs Anxiety", href: "/learn/adhd-vs-anxiety/" },
      { label: "Executive Dysfunction", href: "/learn/executive-dysfunction/" },
    ],
  },
  {
    label: "Tools",
    children: [
      { label: "ADHD Coach", href: "/tools/adhd-coach/" },
      { label: "Brain Dump", href: "/tools/brain-dump/" },
      { label: "Focus Timer", href: "/tools/focus-timer/" },
      { label: "Pomodoro Timer", href: "/tools/adhd-pomodoro-timer/" },
      { label: "Body Doubling Timer", href: "/tools/body-doubling-timer/" },
      { label: "10-Minute Timer", href: "/tools/10-minute-adhd-timer/" },
    ],
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: "var(--warm-bg)",
        borderColor: "var(--warm-border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg"
          style={{ color: "var(--text-primary)" }}
        >
          <span className="text-xl">🌿</span>
          <span>ADHD<span style={{ color: "var(--sage)" }}>Clarity</span></span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button
                  className="text-sm font-semibold flex items-center gap-1 transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                  <svg className="w-3 h-3 mt-0.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 w-52">
                    <div
                      className="rounded-2xl shadow-lg py-2 border"
                      style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-medium transition-colors"
                          style={{ color: "var(--text-secondary)" }}
                          onMouseEnter={(e) => {
                            (e.target as HTMLElement).style.color = "var(--sage-dark)";
                            (e.target as HTMLElement).style.background = "var(--sage-50)";
                          }}
                          onMouseLeave={(e) => {
                            (e.target as HTMLElement).style.color = "var(--text-secondary)";
                            (e.target as HTMLElement).style.background = "";
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                className="text-sm font-semibold transition-colors"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/tests/adult-adhd-test/"
            className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-opacity hover:opacity-90 text-white"
            style={{ background: "var(--sage)" }}
          >
            Take a Test →
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2"
          style={{ color: "var(--text-secondary)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-5 py-4 space-y-3"
          style={{ borderColor: "var(--warm-border)", background: "var(--warm-bg)" }}
        >
          {links.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  {link.label}
                </p>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-2 text-sm font-medium"
                    style={{ color: "var(--text-secondary)" }}
                    onClick={() => setOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                className="block py-2 text-sm font-medium"
                style={{ color: "var(--text-secondary)" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/tests/adult-adhd-test/"
            className="block text-center text-sm font-bold px-5 py-3 rounded-full text-white mt-2"
            style={{ background: "var(--sage)" }}
            onClick={() => setOpen(false)}
          >
            Take a Test →
          </Link>
        </div>
      )}
    </nav>
  );
}
