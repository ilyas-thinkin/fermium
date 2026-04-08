import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Fitout, Authority Approvals & Structural Solutions Dubai",
  description:
    "Explore Fermium Designs services in Dubai including interior fitout, authority approvals, and structural engineering support for compliant, fast-moving projects.",
  alternates: {
    canonical: "https://fermiumdesigns.ae/services",
    languages: {
      en: "https://fermiumdesigns.ae/services",
      "en-AE": "https://fermiumdesigns.ae/services",
      "x-default": "https://fermiumdesigns.ae/services",
    },
  },
  openGraph: {
    title: "Our Services | Fitout, Authority Approvals & Structural Solutions Dubai",
    description:
      "Explore Fermium Designs services in Dubai including interior fitout, authority approvals, and structural engineering support for compliant, fast-moving projects.",
    url: "https://fermiumdesigns.ae/services",
    siteName: "Fermium Designs",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://fermiumdesigns.ae/Images/hero/corporate.webp",
        width: 1200,
        height: 630,
        alt: "Fermium Designs services in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Fitout, Authority Approvals & Structural Solutions Dubai",
    description:
      "Explore Fermium Designs services in Dubai including interior fitout, authority approvals, and structural engineering support.",
    images: ["https://fermiumdesigns.ae/Images/hero/corporate.webp"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
