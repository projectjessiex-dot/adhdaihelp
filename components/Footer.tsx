import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-lg text-indigo-600 mb-3">
              <span className="text-xl">🧠</span>
              <span>ADHD<span className="text-slate-700">Clarity</span></span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Free, research-based ADHD resources for adults, parents, and educators.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Tests</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/tests/adult-adhd-test/" className="hover:text-indigo-600 transition-colors">Adult ADHD Test</Link></li>
              <li><Link href="/tests/child-adhd-test/" className="hover:text-indigo-600 transition-colors">Child ADHD Test</Link></li>
              <li><Link href="/tests/adhd-type-quiz/" className="hover:text-indigo-600 transition-colors">ADHD Type Quiz</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Learn</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/learn/adhd-in-women/" className="hover:text-indigo-600 transition-colors">ADHD in Women</Link></li>
              <li><Link href="/learn/adhd-vs-anxiety/" className="hover:text-indigo-600 transition-colors">ADHD vs Anxiety</Link></li>
              <li><Link href="/learn/executive-dysfunction/" className="hover:text-indigo-600 transition-colors">Executive Dysfunction</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Tools</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/tools/brain-dump/" className="hover:text-indigo-600 transition-colors">Brain Dump</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} ADHDClarity. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 max-w-xl text-center md:text-right">
            <strong>Disclaimer:</strong> This website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional.
          </p>
        </div>
      </div>
    </footer>
  );
}
