import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";

const data: ApprovalServiceData = {
  slug: "concordia",
  title: "Concordia Approval",
  authority: "Concordia",
  tagline: "Master developer approval for fit-outs and modifications in Concordia-managed buildings across Dubai.",
  description:
    "Concordia approval is a formal clearance required for fit-out, renovation, MEP changes, and related works in buildings managed under Concordia's community management. It confirms that your drawings and scope meet building rules, safety standards, and community requirements—so you can proceed with works without delays, penalties, or rework. This approval ensures MEP systems, fire safety interfaces, and structural integrity are maintained.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Business Types",
      items: ["Retail shops and showrooms", "Offices and co-working spaces", "F&B outlets and restaurants", "Clinics, gyms, and wellness centers"],
    },
    {
      category: "Additional Uses",
      items: ["Warehouses and storage units", "Residential fit-out and renovation", "Mixed-use community tenants", "Facility management operators"],
    },
    {
      category: "Project Types",
      items: ["New fit-out for leased units", "Renovation or reconfiguration of existing space", "MEP modifications affecting building systems", "Signage and branding works"],
    },
  ],
  steps: [
    { step: "01", title: "Scope Check & Feasibility", desc: "Define what is changing, confirm building requirements, and identify Concordia-specific expectations early." },
    { step: "02", title: "Site Survey & Data Collection", desc: "Collect as-built drawings (if available), take measurements, and check existing MEP capacity." },
    { step: "03", title: "Drawings & Method Statement", desc: "Prepare required architectural and MEP drawings matching site conditions and intended operation." },
    { step: "04", title: "Document Compilation", desc: "Gather business, ownership, contractor, and technical documents into a complete package." },
    { step: "05", title: "Concordia Application Submission", desc: "Submit the complete application package to Concordia's community management or facility office." },
    { step: "06", title: "Concordia Review", desc: "Concordia reviews the application against building rules and community requirements." },
    { step: "07", title: "Comment Resolution", desc: "Address any comments or conditions raised by Concordia and revise as required." },
    { step: "08", title: "Approval Issuance", desc: "Receive Concordia approval. Works can commence under stated conditions." },
    { step: "09", title: "Execution & Supervision", desc: "Execute works per approved drawings with appropriate site supervision." },
    { step: "10", title: "As-Built Close-Out", desc: "Submit as-built drawings and arrange final inspection or close-out sign-off as required." },
  ],
  documents: [
    {
      category: "Business Documents",
      items: ["Trade license / company registration", "Tenancy contract or title deed", "Authorized signatory letter", "Landlord NOC or community management consent"],
    },
    {
      category: "Technical Documents",
      items: ["Architectural floor plans (existing + proposed)", "MEP drawings for proposed changes", "Signage design and specifications", "Method statement for works execution"],
    },
    {
      category: "Site & Safety Documents",
      items: ["Contractor trade license and insurance", "Civil Defense NOC (for fire system works)", "Material specifications and product submittals", "As-built drawings (for close-out stage)"],
    },
  ],
  timeline:
    "Concordia approval timelines depend on submission completeness and scope complexity. Straightforward fit-out approvals for complete submissions are typically reviewed within 5–15 working days. Projects involving multiple authority approvals, significant MEP changes, or structural modifications may take longer. Providing a complete, well-coordinated first submission minimizes review cycles and overall project delay.",
  rejections: [
    { reason: "Drawings not showing existing and proposed layouts clearly", fix: "Provide clearly marked 'as existing' and 'as proposed' drawings with all changes annotated." },
    { reason: "MEP changes without load verification", fix: "Include load calculations confirming existing infrastructure can support proposed additions." },
    { reason: "Missing Civil Defense pre-approval for fire system works", fix: "Obtain DCD approval for any works affecting fire alarm, suppression, or emergency systems." },
    { reason: "Unapproved or uninsured contractor", fix: "Ensure contractors hold valid trade license and appropriate insurance before commencing any works." },
    { reason: "Structural changes without engineer sign-off", fix: "Provide a structural engineer's calculations and approval for any structural modifications." },
    { reason: "Signage not meeting building guidelines", fix: "Review Concordia's signage guidelines before finalizing artwork and dimensions." },
    { reason: "Incomplete documentation package", fix: "Submit all required business, contractor, and technical documents in the first submission." },
  ],
  faqs: [
    { q: "Is Concordia approval required for all works in Concordia-managed buildings?", a: "Yes. Any fit-out, renovation, MEP change, or signage modification within Concordia-managed buildings requires approval before works commence." },
    { q: "Can a tenant apply for Concordia approval directly?", a: "Yes, tenants can apply with the landlord's written authorization included in the application package." },
    { q: "Does Concordia work with other authorities like DM or DCD?", a: "Concordia approval is the developer/community level clearance. You may also need DCD and DEWA approvals depending on your scope." },
    { q: "What happens if works start without Concordia approval?", a: "Unauthorized works can result in stop-work orders, community fines, and mandatory reinstatement of changes at the tenant's cost." },
    { q: "How long does Concordia approval take?", a: "For complete, well-prepared submissions, straightforward approvals can be processed within 5–10 working days." },
    { q: "Can Fermium Designs handle Concordia approval applications?", a: "Yes. We prepare drawings, compile documents, manage submissions, and handle comment resolution through to final approval." },
    { q: "Do cosmetic works need Concordia approval?", a: "Purely cosmetic works (paint, non-structural fixtures) typically don't require approval. Any MEP, structural, or layout change does." },
    { q: "Is there an inspection at the end of works?", a: "Concordia may require a close-out inspection after works are completed. As-built drawings are typically required for final sign-off." },
  ],
};

export default function ConcordiaPage() {
  return <ApprovalServicePage data={data} />;
}
