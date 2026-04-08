import type { Metadata } from "next";
import { buildWebsiteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildWebsiteMetadata({
  title: "About Fermium Designs | Fitout Approvals, Engineering & Project Delivery",
  description:
    "Learn about Fermium Designs, a Dubai team specializing in fitout approvals, authority approvals, interior fitout coordination, and structural project support.",
  path: "/about",
  imageAlt: "About Fermium Designs in Dubai",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
