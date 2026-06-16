import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ADHD Clarity — Free ADHD Tests, Guides & Tools",
    template: "%s | ADHD Clarity",
  },
  description:
    "Free, research-based ADHD screeners, symptom guides, and practical tools for adults, parents, and educators. Understand ADHD — then take the next step.",
  metadataBase: new URL("https://adhdaihelp.com"),
  openGraph: {
    siteName: "ADHD Clarity",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} min-h-full flex flex-col bg-white text-slate-800 antialiased`}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
