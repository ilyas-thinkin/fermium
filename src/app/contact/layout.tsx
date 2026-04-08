import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Fermium Designs | Fitout Approvals & Project Management Services Dubai",
  description:
    "Contact Fermium Designs for expert Fitout Approvals, Dubai approvals, and Project Management Services in Dubai. Get support for your project requirements today.",
  alternates: {
    canonical: "https://fermiumdesigns.ae/contact",
  },
  openGraph: {
    title: "Contact Fermium Designs | Fitout Approvals & Project Management Services Dubai",
    description: "Contact Fermium Designs for expert Fitout Approvals, Dubai approvals, and Project Management Services in Dubai. Get support for your project requirements today.",
    url: "https://fermiumdesigns.ae/contact",
    siteName: "Fermium Designs",
    locale: "en_AE",
    type: "website",
    images: [{ url: "https://fermiumdesigns.ae/Images/hero/corporate.webp", width: 1200, height: 630, alt: "Contact Fermium Designs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Fermium Designs | Fitout Approvals & Project Management Services Dubai",
    description: "Contact Fermium Designs for expert Fitout Approvals and Project Management Services in Dubai.",
    images: ["https://fermiumdesigns.ae/Images/hero/corporate.webp"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
