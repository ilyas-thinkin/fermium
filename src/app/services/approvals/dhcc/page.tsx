import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";

const data: ApprovalServiceData = {
  slug: "dhcc",
  title: "DHCC Approval",
  authority: "DHCC",
  tagline: "Dubai Health Care City authority approvals for clinics, medical facilities, F&B, retail, and fit-out works.",
  description:
    "DHCC (Dubai Health Care City) operates as an independent free zone and healthcare hub with its own regulatory authority. Any fit-out, renovation, MEP modification, signage installation, or partitioning work within DHCC buildings requires DHCC approval. This covers clinical facilities, wellness centers, F&B outlets, retail, and all other businesses operating within the DHCC zone.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Healthcare Facilities",
      items: ["Clinics, medical centers, and dental clinics", "Diagnostic labs and imaging centers", "Physiotherapy and rehabilitation centers", "Pharmacies and wellness/aesthetics clinics"],
    },
    {
      category: "Non-Healthcare Businesses",
      items: ["F&B outlets and restaurants within DHCC", "Retail stores and service providers", "Medical offices and consultancies", "Training and education centers"],
    },
    {
      category: "Project Types",
      items: ["New fit-out for a leased unit", "Renovation or reconfiguration", "MEP modifications (HVAC, electrical, plumbing)", "Signage/branding installation"],
    },
  ],
  steps: [
    { step: "01", title: "Scope & Pre-Check", desc: "Define what is being changed. Confirm DHCC building requirements and any unit-specific restrictions." },
    { step: "02", title: "Site Survey & Data Collection", desc: "Survey the unit, collect as-built drawings if available, and check existing MEP capacity." },
    { step: "03", title: "Drawings & Method Statements", desc: "Create the required technical package: architectural and MEP drawings matching site conditions and intended use." },
    { step: "04", title: "Document Compilation", desc: "Assemble administrative documents: DHCC license, tenancy contract, contractor credentials, and insurance." },
    { step: "05", title: "DHCC Application Submission", desc: "Submit the complete application package to DHCC's regulatory or facilities management office." },
    { step: "06", title: "DHCC Technical Review", desc: "DHCC reviews drawings and documents for compliance with zone standards and building requirements." },
    { step: "07", title: "Comment Resolution", desc: "Address any DHCC comments or revision requests and resubmit if needed." },
    { step: "08", title: "NOC / Permit Issuance", desc: "Receive DHCC NOC or permit. Works can proceed under approved conditions." },
    { step: "09", title: "Works Execution", desc: "Execute works strictly per approved drawings by approved contractors." },
    { step: "10", title: "Close-Out Inspection", desc: "DHCC may conduct a close-out inspection. Submit as-built drawings and obtain final sign-off." },
  ],
  documents: [
    {
      category: "Administrative Documents",
      items: ["DHCC trade/facility license", "Tenancy contract / leased unit agreement", "Authorized signatory letter / company stamp", "Landlord or building management NOC"],
    },
    {
      category: "Technical Submission",
      items: ["Architectural floor plans (existing + proposed)", "MEP drawings (electrical, HVAC, plumbing)", "Signage design (if applicable)", "Method statement for works"],
    },
    {
      category: "Close-Out Documents",
      items: ["Contractor trade license and insurance", "Testing and commissioning certificates", "As-built drawings (for final sign-off)", "Civil Defense NOC (for fire system works)"],
    },
  ],
  timeline:
    "DHCC approval timelines depend on the scope and completeness of the submission. Standard fit-out NOCs for well-prepared packages are typically reviewed within 5–15 working days. Projects involving clinical facility changes, MEP systems, or larger spaces may take 3–5 weeks. Submissions with missing documents or requiring multiple revisions can extend significantly beyond this. A complete, first-time submission is always the fastest path.",
  rejections: [
    { reason: "Drawings not reflecting actual unit conditions", fix: "Conduct a thorough site survey and ensure drawings match actual dimensions, MEP routing, and layout." },
    { reason: "MEP changes without load/capacity verification", fix: "Include load calculations and confirm existing infrastructure can support proposed changes." },
    { reason: "Signage not meeting DHCC branding guidelines", fix: "Review DHCC's signage design standards before preparing and submitting signage artwork." },
    { reason: "Unregistered or uninsured contractor", fix: "Ensure contractors hold valid DHCC or UAE trade licenses and carry required insurance." },
    { reason: "Missing Civil Defense pre-approval for fire systems", fix: "For works affecting fire alarm or suppression systems, obtain DCD approval before DHCC submission." },
    { reason: "Clinical areas don't meet healthcare design standards", fix: "Ensure clinical spaces comply with applicable infection control and healthcare facility design requirements." },
    { reason: "Incomplete administrative documents", fix: "Verify all DHCC license details, tenancy documents, and authorization letters are current and complete." },
  ],
  faqs: [
    { q: "Is DHCC separate from DHA?", a: "Yes. DHCC is an independent free zone with its own authority. DHA regulates healthcare facilities in the rest of Dubai. Businesses in DHCC are regulated by DHCC, not DHA." },
    { q: "Do I need DM approval for works inside DHCC?", a: "Generally no. DHCC acts as its own authority for works within the zone. However, some submissions may involve coordination with DCD or DEWA." },
    { q: "Can non-medical businesses apply for DHCC approval?", a: "Yes. F&B, retail, and other permitted businesses within DHCC must also obtain DHCC approval for fit-out and modification works." },
    { q: "How do I know which DHCC building rules apply to my unit?", a: "DHCC has building-specific fit-out guidelines. Your landlord or DHCC facilities management can provide the relevant specifications." },
    { q: "Is Civil Defense approval required for DHCC works?", a: "For works affecting fire safety systems, Civil Defense approval is required separately and must typically be obtained before or alongside DHCC submission." },
    { q: "Can Fermium Designs handle DHCC submissions?", a: "Yes. We prepare technical drawings, compile required documents, manage the DHCC submission process, and handle comment resolution." },
    { q: "Do I need a DHCC NOC for every minor change in my unit?", a: "Cosmetic changes (paint, furniture) generally don't require NOC. Any structural, MEP, or significant layout change does." },
    { q: "What happens if works are done without DHCC approval?", a: "DHCC can issue stop-work notices, fines, and require reinstatement of unauthorized changes at the tenant's cost." },
  ],
};

export default function DhccPage() {
  return <ApprovalServicePage data={data} />;
}
