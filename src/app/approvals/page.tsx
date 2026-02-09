import type { Metadata } from "next";
import ApprovalsHero from "@/components/approvals/ApprovalsHero";
import ApprovalTypes from "@/components/approvals/ApprovalTypes";
import ComplianceBadges from "@/components/approvals/ComplianceBadges";

export const metadata: Metadata = {
  title: "Approvals & Compliance",
  description:
    "Expert navigation of Dubai Municipality, Civil Defense, DEWA, and Trakhees approvals. 100% approval rate with 15+ years experience.",
};

export default function ApprovalsPage() {
  return (
    <>
      <ApprovalsHero />
      <ApprovalTypes />
      <ComplianceBadges />
    </>
  );
}
