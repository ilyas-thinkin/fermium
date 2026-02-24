import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";

const data: ApprovalServiceData = {
  slug: "tecom",
  title: "TECOM NOC",
  authority: "TECOM",
  tagline: "Community NOC for fit-out, maintenance, signage, and MEP works in TECOM-managed business districts.",
  description:
    "TECOM Group manages a portfolio of business districts in Dubai including Dubai Internet City (DIC), Dubai Media City (DMC), Dubai Knowledge Park (DKP), Dubai Studio City, and others. Any fit-out, renovation, signage, MEP modification, or maintenance works within TECOM-managed communities requires a TECOM NOC before works can begin. This confirms your proposed works comply with TECOM community guidelines and technical standards.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "TECOM Communities",
      items: ["Dubai Internet City (DIC)", "Dubai Media City (DMC)", "Dubai Knowledge Park (DKP)", "Dubai Studio City and other TECOM zones"],
    },
    {
      category: "Business Types",
      items: ["Technology and IT companies", "Media production and broadcasting", "Education and training providers", "Offices, clinics, and retail within TECOM"],
    },
    {
      category: "Project Types",
      items: ["New fit-out for leased unit", "Renovation or space reconfiguration", "MEP modifications and upgrades", "Signage and branding installation"],
    },
  ],
  steps: [
    { step: "01", title: "Scope & Pre-Check", desc: "Confirm the works scope and applicable TECOM community-specific requirements." },
    { step: "02", title: "Site Survey", desc: "Survey the unit and identify existing MEP conditions and layout." },
    { step: "03", title: "Drawing Preparation", desc: "Prepare architectural, MEP, and signage drawings per TECOM community guidelines." },
    { step: "04", title: "Document Compilation", desc: "Compile tenant, contractor, technical, and supporting documents." },
    { step: "05", title: "TECOM Application Submission", desc: "Submit the application package via TECOM's community management or online platform." },
    { step: "06", title: "TECOM Review", desc: "TECOM reviews the application against community standards and building requirements." },
    { step: "07", title: "Comment Resolution", desc: "Address TECOM queries or revision requests and resubmit as needed." },
    { step: "08", title: "NOC Issuance", desc: "Receive TECOM NOC. Works can commence under the approved scope and conditions." },
    { step: "09", title: "Works Execution", desc: "Execute works strictly per TECOM approval and approved drawings." },
    { step: "10", title: "Close-Out", desc: "Notify TECOM on completion and arrange any required close-out inspection." },
  ],
  documents: [
    {
      category: "Tenant Documents",
      items: ["TECOM trade license", "Tenancy / lease agreement", "Authorized signatory letter", "NOC from building owner or landlord"],
    },
    {
      category: "Contractor Documents",
      items: ["Contractor trade license", "Contractor liability insurance", "Engineer credentials", "TECOM contractor registration (if required)"],
    },
    {
      category: "Technical & Supporting",
      items: ["Architectural floor plans (existing + proposed)", "MEP drawings for modifications", "Signage artwork and specifications", "Method statement for works"],
    },
    {
      category: "Additional",
      items: ["Civil Defense NOC (for fire system works)", "DEWA approval (for electrical load changes)", "Material submittals (for major items)", "As-built drawings (for close-out)"],
    },
  ],
  timeline:
    "TECOM NOC processing timelines depend on community, scope, and submission completeness. Simple NOCs for complete submissions can be processed within 3–10 working days. Complex projects or those requiring third-party authority approvals can take 2–4 weeks. TECOM community management is generally responsive to complete, well-prepared applications.",
  rejections: [
    { reason: "Drawings not meeting TECOM community standards", fix: "Review TECOM's fit-out guidelines for the specific community before preparing drawings." },
    { reason: "Missing Civil Defense pre-approval", fix: "Obtain DCD NOC for any works involving fire safety systems before TECOM submission." },
    { reason: "Unauthorized contractor", fix: "Confirm the contractor is acceptable to TECOM and holds valid UAE trade license and insurance." },
    { reason: "Signage not meeting TECOM brand guidelines", fix: "Review TECOM's signage standards for dimensions, materials, and approved locations." },
    { reason: "Incomplete tenant or company documents", fix: "Verify all TECOM trade licenses and authorization letters are current before submission." },
    { reason: "Works scope exceeding permitted unit modifications", fix: "Check TECOM's lease conditions and community fit-out guide for permitted modification scope." },
    { reason: "Missing utility approvals for MEP changes", fix: "Obtain DEWA approval for electrical load increases alongside or before TECOM submission." },
  ],
  faqs: [
    { q: "Does every TECOM community have different rules?", a: "TECOM communities share a common NOC process but may have community-specific signage and fit-out guidelines. We verify the applicable requirements for each project." },
    { q: "Is TECOM NOC the same as DDA approval?", a: "No. TECOM and DDA are separate entities managing different business zones in Dubai." },
    { q: "Do I need DM approval in addition to TECOM NOC?", a: "In TECOM-managed zones, TECOM typically acts as the primary authority. However, DCD and DEWA approvals may still be required." },
    { q: "Can Fermium Designs handle TECOM NOC applications?", a: "Yes. We prepare drawings, compile documents, submit applications, and manage the process for all TECOM communities." },
    { q: "How long is a TECOM NOC valid?", a: "Typically 3–6 months from issue date. Extensions can be requested for ongoing projects." },
    { q: "What happens if works start without TECOM NOC?", a: "Unauthorized works can result in stop-work orders, community fines, and forced reinstatement of changes." },
    { q: "Is TECOM NOC required for minor maintenance works?", a: "Routine maintenance that doesn't affect MEP systems, structure, or appearance typically doesn't require a NOC. Any visible or MEP-affecting change does." },
    { q: "Can a contractor apply for TECOM NOC on behalf of the tenant?", a: "Contractors can assist with the application, but the TECOM licensee (the business) is typically the formal applicant." },
  ],
};

export default function TecomPage() {
  return <ApprovalServicePage data={data} />;
}
