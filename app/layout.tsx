import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/* Display serif — substitutes for Copernicus / Tiempos Headline */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
});

/* Body sans — Inter is the Claude DESIGN.md recommended open-source substitute */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
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
  other: {
    "google-adsense-account": "ca-pub-5751907687369207",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full scroll-smooth`}>
      <head>
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5751907687369207" crossOrigin="anonymous" />
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
          fontFamily: "var(--font-inter), system-ui, sans-serif",
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
