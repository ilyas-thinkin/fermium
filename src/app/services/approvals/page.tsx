import type { Metadata } from "next";
import ApprovalsClient from "@/components/approvals/ApprovalsClient";

export const metadata: Metadata = {
  title: "Authority Approvals in Dubai | Fermium Designs",
  description:
    "Get expert authority approvals in Dubai with Fermium Designs. We support property owners, contractors, and fitout teams with reliable Dubai approvals and project management services.",
};

export default function ApprovalsPage() {
  return <ApprovalsClient />;
}
