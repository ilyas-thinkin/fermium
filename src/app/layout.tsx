import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatWidgets from "@/components/layout/FloatWidgets";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Fermium Designs | Fitout Approvals and Project Management Services",
    template: "%s",
  },
  description:
    "Fitout approvals Dubai specialists for authority approvals, interior fitout coordination, and project management across Dubai.",
  metadataBase: new URL("https://fermiumdesigns.ae"),
  verification: {
    google: "CjE2ifSrrTmcV5jeXwIw4yj5KmkI2A-7c_on4agRtK0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Third-party connection warmup */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <FloatWidgets />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PERB1DFBPF" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PERB1DFBPF', { send_page_view: true });
        `}</Script>
      </body>
    </html>
  );
}
