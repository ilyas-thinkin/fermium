import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";

const data: ApprovalServiceData = {
  slug: "diez",
  title: "DIEZ Approval",
  authority: "DIEZ",
  tagline: "Dubai Integrated Economic Zones approvals for fit-outs in DSO, DAFZ, and Dubai CommerCity.",
  description:
    "DIEZ (Dubai Integrated Economic Zones Authority) is the unified regulatory body overseeing Dubai Silicon Oasis (DSO), Dubai Airport Free Zone (DAFZ), and Dubai CommerCity (DCC). Any fit-out, renovation, MEP modification, signage, or significant maintenance works within these zones requires DIEZ approval before commencement. DIEZ acts as the single authority replacing separate zone approvals for these three economic zones.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21H16M12 17V21" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Zone Coverage",
      items: ["Dubai Silicon Oasis (DSO) — tech parks and offices", "Dubai Airport Free Zone (DAFZ) — logistics and trade", "Dubai CommerCity (DCC) — e-commerce and distribution"],
    },
    {
      category: "Business Types",
      items: ["Technology and IT companies", "Logistics and trading businesses", "E-commerce and distribution operators", "Office and commercial tenants"],
    },
    {
      category: "Project Types",
      items: ["New fit-out for leased units", "Renovation or space reconfiguration", "MEP modifications and upgrades", "Signage installation or modification"],
    },
  ],
  steps: [
    { step: "01", title: "Scope & Pre-Check", desc: "Define the works and confirm applicable DIEZ zone requirements for DSO, DAFZ, or DCC." },
    { step: "02", title: "Site Survey", desc: "Survey the unit, review existing MEP capacity, and identify compliance considerations." },
    { step: "03", title: "Drawing Preparation", desc: "Prepare architectural and MEP drawings per DIEZ technical standards." },
    { step: "04", title: "Document Compilation", desc: "Compile company, unit, contractor, and technical documents for submission." },
    { step: "05", title: "DIEZ Application Submission", desc: "Submit the complete application via DIEZ's online portal or zone customer service." },
    { step: "06", title: "DIEZ Review", desc: "DIEZ authority reviews the technical package and supporting documents." },
    { step: "07", title: "Comment Resolution", desc: "Address any DIEZ queries or revision requests and resubmit as needed." },
    { step: "08", title: "Approval / NOC Issuance", desc: "Receive DIEZ approval or NOC. Works can commence under stated conditions." },
    { step: "09", title: "Works Execution", desc: "Execute works per approved drawings by approved contractors." },
    { step: "10", title: "Close-Out & Inspection", desc: "Arrange close-out inspection if required and submit as-built drawings for final sign-off." },
  ],
  documents: [
    {
      category: "Company & Unit Documents",
      items: ["DIEZ / DSO / DAFZ / DCC trade license", "Tenancy contract or lease agreement", "Authorized signatory letter", "Landlord or building management NOC"],
    },
    {
      category: "Contractor Documents",
      items: ["Contractor trade license", "Contractor liability insurance", "Engineer credentials", "Method statement for works"],
    },
    {
      category: "Technical Drawings",
      items: ["Architectural floor plan (existing + proposed)", "MEP drawings for modifications", "Structural drawings (if applicable)", "Signage artwork or design drawings"],
    },
  ],
  timeline:
    "DIEZ approval timelines depend on the zone, project scope, and completeness of submission. Standard NOCs for complete submissions are typically reviewed within 5–15 working days. Works involving fire systems, structural changes, or multiple authority coordination may take 3–5 weeks. As with all authority approvals, a complete, accurate first submission is the fastest route to approval.",
  rejections: [
    { reason: "Works affecting life safety systems without DCD pre-approval", fix: "Obtain Civil Defense approval for any works impacting fire alarm, suppression, or emergency systems." },
    { reason: "Missing or expired company documents", fix: "Ensure trade license, tenancy contract, and authorization letters are current before submission." },
    { reason: "Contractor not registered or insured", fix: "Verify contractor holds valid UAE/DIEZ trade license and appropriate liability insurance." },
    { reason: "Drawings not reflecting actual unit conditions", fix: "Conduct a site survey and ensure drawings match the actual unit layout." },
    { reason: "Signage exceeding zone guidelines", fix: "Check DIEZ signage rules for dimensions, materials, and mounting before designing." },
    { reason: "Incomplete MEP technical package", fix: "Include load calculations and full MEP drawing set for any electrical or mechanical modifications." },
    { reason: "Structural changes without engineer approval", fix: "Provide structural engineer certification for any load-bearing or structural modifications." },
  ],
  faqs: [
    { q: "What zones does DIEZ cover?", a: "DIEZ is the unified authority for Dubai Silicon Oasis (DSO), Dubai Airport Free Zone (DAFZ), and Dubai CommerCity (DCC)." },
    { q: "Do I still deal with DSO or DAFZ directly?", a: "DIEZ has unified the regulatory function. You apply through DIEZ for approvals, though zone-specific requirements still apply." },
    { q: "Is Civil Defense approval required separately?", a: "Yes. For works affecting fire safety systems, DCD approval is required and is often a prerequisite for DIEZ." },
    { q: "Can Fermium Designs handle DIEZ approvals?", a: "Yes. We prepare drawings, compile documents, submit applications, and manage the process to approval for DSO, DAFZ, and DCC projects." },
    { q: "Does the process differ between DSO, DAFZ, and DCC?", a: "The submission portal is unified under DIEZ, but each zone may have specific technical guidelines. Our team verifies the applicable requirements per project." },
    { q: "What happens if works start without DIEZ approval?", a: "Unauthorized works in DIEZ zones can result in stop-work orders, fines, and forced reinstatement." },
    { q: "How long is a DIEZ NOC valid?", a: "Typically 3–6 months from issue. Extensions can be requested if works are ongoing." },
    { q: "Is DIEZ NOC sufficient or do I also need DM approval?", a: "Works in DIEZ-governed zones typically use DIEZ as the primary authority, replacing DM. However, DEWA and DCD approvals may still be required." },
  ],
};

export default function DiezPage() {
  return <ApprovalServicePage data={data} />;
}
