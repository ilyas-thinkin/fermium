import type { Metadata } from "next";
import ApprovalsClient from "@/components/approvals/ApprovalsClient";

export const metadata: Metadata = {
  title: "Authority Approvals | Fermium Designs",
  description:
    "Fermium Designs handles all authority approvals across Dubai — Civil Defense, DEWA, DM, Emaar, Trakhees, and more. Fast, reliable, one-stop approval solutions.",
};

export default function ApprovalsPage() {
  return <ApprovalsClient />;
}
