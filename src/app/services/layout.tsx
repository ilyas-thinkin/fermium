import type { Metadata } from "next";
import { buildWebsiteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildWebsiteMetadata({
  title: "Fitout Services Dubai | Authority Approvals & Structural Engineering",
  description:
    "Explore fitout services in Dubai from Fermium Designs, including authority approvals, interior fitout delivery, and structural engineering support.",
  path: "/services",
  imageAlt: "Fitout services Dubai by Fermium Designs",
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
