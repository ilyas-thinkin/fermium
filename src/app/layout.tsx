import type { Metadata } from "next";
import { playfair, inter, spaceGrotesk } from "./fonts";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SmoothScroll from "@/components/ui/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://fermium.vercel.app"),
  title: {
    default: "Fermium Designs | Premium Interior Fitout & Design | Dubai",
    template: "%s | Fermium Designs",
  },
  description:
    "Where Vision Meets Precision. Premium interior fitout and design agency in Dubai specializing in commercial and residential transformations.",
  keywords: [
    "interior design dubai",
    "fitout dubai",
    "commercial fitout",
    "residential design",
    "luxury interior",
    "dubai municipality approved",
  ],
  icons: {
    icon: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
  openGraph: {
    title: "Fermium Designs | Premium Interior Fitout & Design | Dubai",
    description:
      "Where Vision Meets Precision. Premium interior fitout and design agency in Dubai specializing in commercial and residential transformations.",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/logo/logo.png", width: 1200, height: 630, alt: "Fermium Designs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fermium Designs | Premium Interior Fitout & Design | Dubai",
    description:
      "Where Vision Meets Precision. Premium interior fitout and design agency in Dubai.",
    images: ["/logo/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        <SmoothScroll>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
