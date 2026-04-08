import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Fermium Designs | Fitout Approvals & Project Management Services Dubai",
  description:
    "Learn about Fermium Designs, a Dubai-based specialist in Fitout Approvals, Dubai approvals, and Project Management Services for smooth, compliant, and efficient project delivery.",
  alternates: {
    canonical: "https://fermiumdesigns.ae/about",
  },
  openGraph: {
    title: "About Fermium Designs | Fitout Approvals & Project Management Services Dubai",
    description: "Learn about Fermium Designs, a Dubai-based specialist in Fitout Approvals, Dubai approvals, and Project Management Services for smooth, compliant, and efficient project delivery.",
    url: "https://fermiumdesigns.ae/about",
    siteName: "Fermium Designs",
    locale: "en_AE",
    type: "website",
    images: [{ url: "https://fermiumdesigns.ae/Images/hero/corporate.webp", width: 1200, height: 630, alt: "About Fermium Designs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Fermium Designs | Fitout Approvals & Project Management Services Dubai",
    description: "Learn about Fermium Designs, a Dubai-based specialist in Fitout Approvals and Project Management Services.",
    images: ["https://fermiumdesigns.ae/Images/hero/corporate.webp"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
