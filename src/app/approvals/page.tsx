import type { Metadata } from "next";
import ApprovalsClient from "@/components/approvals/ApprovalsClient";

export const metadata: Metadata = {
  title: "Authority Approvals in Dubai | Fermium Designs",
  description:
    "Get expert authority approvals in Dubai with Fermium Designs. We support property owners, contractors, and fitout teams with reliable Dubai approvals and project management services.",
  alternates: {
    canonical: "https://www.fermiumdesigns.ae/approvals",
  },
  openGraph: {
    title: "Authority Approvals in Dubai | Fermium Designs",
    description:
      "Get expert authority approvals in Dubai with Fermium Designs. We support property owners, contractors, and fitout teams with reliable Dubai approvals and project management services.",
    url: "https://www.fermiumdesigns.ae/approvals",
    siteName: "Fermium Designs",
    locale: "en_AE",
    type: "website",
    images: [{ url: "https://www.fermiumdesigns.ae/Images/hero/corporate.webp", width: 1200, height: 630, alt: "Authority Approvals Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Authority Approvals in Dubai | Fermium Designs",
    description: "Expert authority approvals in Dubai — DCD, DEWA, DM, DDA & more. Fast permits for fitout and construction projects.",
    images: ["https://www.fermiumdesigns.ae/Images/hero/corporate.webp"],
  },
};

export default function ApprovalsPage() {
  return <ApprovalsClient />;
}
