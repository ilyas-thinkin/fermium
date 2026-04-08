import type { Metadata } from "next";
import ApprovalsClient from "@/components/approvals/ApprovalsClient";
import { buildWebsiteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildWebsiteMetadata({
  title: "Authority Approvals Dubai | DEWA, DM, DCD & DDA Support",
  description:
    "Authority approvals Dubai specialists handling DEWA, Dubai Municipality, DCD, DDA, and other permit workflows for fitout and construction projects.",
  path: "/approvals",
  imageAlt: "Authority approvals Dubai by Fermium Designs",
});

export default function ApprovalsPage() {
  return <ApprovalsClient />;
}
