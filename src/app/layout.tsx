import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
        {/* DNS prefetch + preconnect */}
        <link rel="preconnect" href="https://fermiumdesigns.ae" />
        <link rel="dns-prefetch" href="https://fermiumdesigns.ae" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Hreflang — English/UAE only site */}
        <link rel="alternate" hrefLang="en" href="https://www.fermiumdesigns.ae/" />
        <link rel="alternate" hrefLang="en-AE" href="https://www.fermiumdesigns.ae/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.fermiumdesigns.ae/" />
        {/* Preload LCP hero background — corporate.webp is the full-screen hero image */}
        <link
          rel="preload"
          as="image"
          href="/Images/hero/corporate.webp"
          fetchPriority="high"
        />
        {/* Preload right-side hero image on desktop */}
        <link
          rel="preload"
          as="image"
          href="/Images/hero/interior-fitout.webp"
          fetchPriority="high"
          media="(min-width: 1024px)"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
        <CallbackFloat />
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
