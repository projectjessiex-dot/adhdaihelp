"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    label: "Tests",
    href: "#",
    children: [
      { label: "Adult ADHD Test", href: "/tests/adult-adhd-test/" },
      { label: "Child ADHD Test", href: "/tests/child-adhd-test/" },
      { label: "ADHD Type Quiz", href: "/tests/adhd-type-quiz/" },
    ],
  },
  {
    label: "Learn",
    href: "#",
    children: [
      { label: "ADHD in Women", href: "/learn/adhd-in-women/" },
      { label: "ADHD vs Anxiety", href: "/learn/adhd-vs-anxiety/" },
      { label: "Executive Dysfunction", href: "/learn/executive-dysfunction/" },
    ],
  },
  { label: "Tools", href: "/tools/brain-dump/" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-indigo-600">
          <span className="text-2xl">🧠</span>
          <span>ADHD<span className="text-slate-700">Clarity</span></span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
                  {link.label}
                  <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 w-52">
                    <div className="bg-white rounded-xl shadow-lg border border-slate-100 py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
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
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/tests/adult-adhd-test/"
            className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors"
          >
            Take a Test →
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-slate-600"
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
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3">
          {links.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{link.label}</p>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-1.5 text-sm text-slate-600"
                    onClick={() => setOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="block py-1.5 text-sm text-slate-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/tests/adult-adhd-test/"
            className="block text-center bg-indigo-600 text-white text-sm font-semibold px-4 py-2.5 rounded-full mt-2"
            onClick={() => setOpen(false)}
          >
            Take a Test →
          </Link>
        </div>
      )}
    </nav>
  );
}
