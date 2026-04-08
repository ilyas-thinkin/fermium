import type { Metadata } from "next";
import { buildWebsiteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildWebsiteMetadata({
  title: "Structural Engineering Dubai | Analysis, Design & BIM Services",
  description:
    "Structural engineering Dubai services including structural analysis, design drafting, BIM modelling, site supervision, and authority approval support.",
  path: "/structural",
  image: "/Images/Website/Warehouse interior fit out/Warehouse interior fit out 1.webp",
  imageAlt: "Structural engineering Dubai by Fermium Designs",
});

export default function StructuralSolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
