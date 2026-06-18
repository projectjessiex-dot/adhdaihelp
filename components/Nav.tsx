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
          className="flex items-center gap-2 font-extrabold text-lg"
          style={{ color: "var(--sage-dark)" }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--sage-dark)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="11" y1="5" x2="11" y2="18.5" />
            <path d="M11 5C10.5 3.6 9.2 2.8 7.5 2.8C5.4 2.8 4 4.4 4 6.5C4 7.5 4.5 8.3 5.1 8.9C4.2 9.4 3.5 10.5 3.5 11.8C3.5 13.4 4.6 14.6 6.1 15C5.9 15.4 5.8 15.9 5.8 16.5C5.8 18 6.8 19 8.2 18.8" />
            <path d="M11 5C11.5 3.6 12.8 2.8 14.5 2.8C16.6 2.8 18 4.4 18 6.5C18 7.5 17.5 8.3 16.9 8.9C17.8 9.4 18.5 10.5 18.5 11.8C18.5 13.4 17.4 14.6 15.9 15C16.1 15.4 16.2 15.9 16.2 16.5C16.2 18 15.2 19 13.8 18.8" />
          </svg>
          <span>ADHD<span style={{ color: "var(--text-secondary)" }}>Clarity</span></span>
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
            className="text-sm font-bold px-5 py-2.5 rounded-full transition-colors text-white"
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
