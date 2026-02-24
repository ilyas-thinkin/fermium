import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";

const data: ApprovalServiceData = {
  slug: "dewa",
  title: "DEWA Approval",
  authority: "DEWA",
  tagline: "Electrical and water authority approvals, meter activations, and load upgrades for Dubai projects.",
  description:
    "DEWA (Dubai Electricity and Water Authority) approval covers the formal process of getting your electrical, water, and MEP connections approved by the authority. This includes design approvals for electrical distribution, NOCs for load upgrades, meter activation, and final testing and inspection sign-offs. DEWA approval is essential for new fit-outs, renovations, power upgrades, and any works affecting electrical or water systems in Dubai.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Project Types",
      items: ["New commercial fit-outs requiring power connections", "Load upgrades for additional equipment", "MEP refurbishment affecting electrical distribution", "Generator or solar installation requiring DEWA tie-in"],
    },
    {
      category: "Business Types",
      items: ["Offices, retail, and showrooms", "Restaurants, cafés, and food outlets", "Industrial units and warehouses", "Healthcare and data center facilities"],
    },
    {
      category: "Works Covered",
      items: ["New electrical meter applications", "Load increase / upgrade requests", "Temporary supply for construction", "Water connection and plumbing modifications"],
    },
  ],
  steps: [
    { step: "01", title: "Scope & Feasibility Check", desc: "Confirm the type of DEWA approval needed — new connection, load upgrade, or modification." },
    { step: "02", title: "Electrical / MEP Design", desc: "Prepare electrical single-line diagrams, load schedules, and MEP drawings per DEWA standards." },
    { step: "03", title: "Document Preparation", desc: "Compile technical drawings, company documents, tenancy contract, and DEWA-specific forms." },
    { step: "04", title: "DEWA Application Submission", desc: "Submit via DEWA's online portal (Rammas or similar) with complete documents and application fees." },
    { step: "05", title: "Technical Review", desc: "DEWA engineers review the submitted electrical design and load calculations." },
    { step: "06", title: "Comment Resolution", desc: "Address any DEWA comments or revision requests on drawings or load schedules." },
    { step: "07", title: "Design Approval", desc: "Receive formal DEWA design approval. Proceed with electrical installation per approved drawings." },
    { step: "08", title: "Site Installation", desc: "Complete electrical and MEP works by DEWA-approved contractors in line with approved designs." },
    { step: "09", title: "Testing & Inspection Request", desc: "Request DEWA inspection after completing works and obtaining testing sign-offs from the contractor." },
    { step: "10", title: "Meter Activation / Final NOC", desc: "DEWA activates the meter or issues final NOC after passing the site inspection." },
  ],
  documents: [
    {
      category: "General Documents",
      items: ["Trade license / company registration", "Tenancy contract / lease agreement", "NOC from building owner / landlord", "Completed DEWA application form"],
    },
    {
      category: "Technical Drawings",
      items: ["Electrical single-line diagram (SLD)", "Load schedule and load calculations", "MEP drawing set (electrical, plumbing)", "Distribution board (DB) schedules", "Earthing and bonding layout"],
    },
    {
      category: "Contractor & Compliance",
      items: ["DEWA-approved contractor approval letter", "Material submittals for major equipment", "Testing and commissioning certificates", "As-built drawings (for final NOC)"],
    },
  ],
  timeline:
    "DEWA approval timelines vary significantly by project type. Simple load upgrades or minor modifications may be approved within 5–10 working days. New connections or complex electrical designs can take 3–6 weeks or more. Incomplete submissions, comment revisions, or scheduling DEWA inspections can add additional time. Having a complete, well-coordinated submission from the start is the best way to minimize delays.",
  rejections: [
    { reason: "Incorrect or missing load calculations", fix: "Prepare a detailed load schedule matching all equipment and the proposed electrical infrastructure." },
    { reason: "SLD doesn't match proposed installation", fix: "Ensure the single-line diagram accurately reflects the DB layout and actual site configuration." },
    { reason: "Unapproved electrical contractor", fix: "Only engage DEWA-approved electrical contractors for installation and submission." },
    { reason: "Undersized cables or switchgear", fix: "Size all cables, breakers, and switchgear per DEWA technical standards and load requirements." },
    { reason: "Missing NOC from building owner", fix: "Obtain written landlord or building management NOC before submitting to DEWA." },
    { reason: "Drawings not to DEWA formatting standards", fix: "Ensure drawings include all required title blocks, revision numbers, and meet DEWA's submission format." },
  ],
  faqs: [
    { q: "What is DEWA approval required for?", a: "DEWA approval is required for any works affecting electrical supply, load capacity, water connections, or MEP systems that interface with DEWA infrastructure." },
    { q: "Can we start electrical works before DEWA approval?", a: "No. Electrical works that require DEWA sign-off must not commence before design approval is received." },
    { q: "Who can submit DEWA applications?", a: "DEWA applications must be submitted by or through a DEWA-approved contractor or consultant registered on the DEWA portal." },
    { q: "How do I know if my project needs a load upgrade?", a: "If your intended use requires more electrical capacity than the existing supply allows, a load upgrade application to DEWA is required." },
    { q: "What is the difference between DEWA NOC and DEWA connection?", a: "DEWA NOC confirms approval for works affecting DEWA systems. A DEWA connection or meter activation is the physical supply activation after works pass inspection." },
    { q: "Can Fermium Designs handle DEWA submissions?", a: "Yes. We prepare electrical drawings, load schedules, manage the submission process, respond to DEWA comments, and coordinate inspections through to meter activation." },
    { q: "What happens if DEWA inspection fails?", a: "DEWA will issue a snag list. Works must be rectified and re-inspected before approval or meter activation is granted." },
    { q: "Is DEWA approval required for tenant fit-outs in existing buildings?", a: "If the fit-out involves modifications to electrical distribution, load additions, or plumbing changes, yes — DEWA approval for those specific works is required." },
  ],
};

export default function DewaPage() {
  return <ApprovalServicePage data={data} />;
}
