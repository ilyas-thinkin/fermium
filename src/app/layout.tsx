import type { Metadata, Viewport } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import CallbackFloat from "@/components/layout/CallbackFloat";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Fermium | Dubai Fitout approvals project management services",
    template: "%s | Fermium Designs",
  },
  description:
    "Expert fitout approvals in Dubai for construction & renovation projects. Fast authority permits — DM, DCD, DDA, DEWA & more.",
  metadataBase: new URL("https://www.fermiumdesigns.ae"),
  verification: {
    google: "CjE2ifSrrTmcV5jeXwIw4yj5KmkI2A-7c_on4agRtK0",
  },
  alternates: {
    canonical: "https://www.fermiumdesigns.ae/",
    languages: {
      "en": "https://www.fermiumdesigns.ae/",
      "x-default": "https://www.fermiumdesigns.ae/",
    },
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
        {/* DNS prefetch + preconnect for own origin — reduces connection latency */}
        <link rel="preconnect" href="https://fermiumdesigns.ae" />
        <link rel="dns-prefetch" href="https://fermiumdesigns.ae" />
        {/* Preload logo — LCP element on mobile */}
        <link
          rel="preload"
          as="image"
          href="/logo/logo.webp"
          fetchPriority="high"
        />
        {/* Preload hero background images — LCP elements on desktop */}
        <link
          rel="preload"
          as="image"
          href="/Images/hero/interior-fitout.webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/Images/hero/corporate.webp"
          fetchPriority="low"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
        <CallbackFloat />
      </body>
    </html>
  );
}
