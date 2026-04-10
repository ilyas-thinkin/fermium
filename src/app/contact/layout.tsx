import type { Metadata } from "next";
import { buildWebsiteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildWebsiteMetadata({
  title: "Contact | Fitout Approvals & Project Management Dubai",
  description:
    "Contact Fermium Designs for fitout approvals, authority approvals, interior fitout, and structural engineering support in Dubai.",
  path: "/contact",
  imageAlt: "Contact Fermium Designs for Dubai approvals and fitout support",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
