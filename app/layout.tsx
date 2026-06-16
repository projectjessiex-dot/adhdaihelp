import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

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
    <html lang="en" className={`${nunito.variable} h-full scroll-smooth`}>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JND90CW4SC" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JND90CW4SC');
            `,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{
          fontFamily: "var(--font-nunito), system-ui, sans-serif",
          background: "var(--warm-bg)",
          color: "var(--text-primary)",
        }}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
