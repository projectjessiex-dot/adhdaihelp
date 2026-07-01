import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "ADHDClarity — Free Tools for ADHD Brains",
    template: "%s | ADHDClarity",
  },
  description:
    "Free, simple tools to help you start tasks, find focus, and clear your head. Built for the way ADHD brains actually work.",
  metadataBase: new URL("https://adhdaihelp.com"),
  openGraph: {
    siteName: "ADHDClarity",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
  other: {
    "google-adsense-account": "ca-pub-5751907687369207",
  },
};

const isProd = process.env.NODE_ENV === "production";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full scroll-smooth`}>
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

        {/* Analytics & Ads — production only, afterInteractive to avoid hydration mismatch */}
        {isProd && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-JND90CW4SC"
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-JND90CW4SC');
              `}
            </Script>
            <Script
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5751907687369207"
              strategy="afterInteractive"
              crossOrigin="anonymous"
            />
          </>
        )}
      </body>
    </html>
  );
}
