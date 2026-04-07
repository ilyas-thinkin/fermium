import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Structural Solutions in Dubai | Structural Design by Expert Engineers",
  description:
    "Professional structural solutions in Dubai for civil engineering companies and construction companies. Expert structural design and structural engineer support for safe, efficient, and compliant projects.",
  alternates: {
    canonical: "https://www.fermiumdesigns.ae/structural-solutions-dubai",
  },
  openGraph: {
    title: "Structural Solutions in Dubai | Structural Design by Expert Engineers",
    description:
      "Professional structural solutions in Dubai for civil engineering companies and construction companies. Expert structural design and structural engineer support for safe, efficient, and compliant projects.",
    url: "https://www.fermiumdesigns.ae/structural-solutions-dubai",
    siteName: "Fermium Designs",
    locale: "en_AE",
    type: "website",
    images: [{ url: "https://www.fermiumdesigns.ae/Images/Website/Warehouse interior fit out/Warehouse interior fit out 1.webp", width: 1200, height: 630, alt: "Structural Solutions Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Structural Solutions in Dubai | Structural Design by Expert Engineers",
    description: "Expert structural design, analysis, BIM modeling, and authority approvals in Dubai.",
    images: ["https://www.fermiumdesigns.ae/Images/Website/Warehouse interior fit out/Warehouse interior fit out 1.webp"],
  },
};

export default function StructuralSolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
