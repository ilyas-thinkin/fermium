import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";

const data: ApprovalServiceData = {
  slug: "trakhees",
  title: "Trakhees Approval",
  authority: "Trakhees",
  tagline: "PCFC regulatory approvals for fit-out and construction in Jebel Ali, Port Zone, and free zone areas.",
  description:
    "Trakhees is the regulatory arm of PCFC (Ports, Customs and Free Zone Corporation), overseeing regulatory approvals for construction, fit-out, and modifications in areas including Economic Zones World (EZW), Dubai Maritime City, and certain Nakheel zones. Any fit-out, renovation, structural modification, or MEP works within Trakhees-regulated areas requires official Trakhees authorization before works commence.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 16V8a1 1 0 00-.5-.87l-7-4a1 1 0 00-1 0l-7 4A1 1 0 003 8v8a1 1 0 00.5.87l7 4a1 1 0 001 0l7-4A1 1 0 0021 16z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.27 6.96L12 12.01L20.73 6.96M12 22.08V12" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Business Types",
      items: ["Real estate and property owners in PCFC zones", "Industrial and logistics operators", "Retail, F&B, and hospitality businesses", "Warehousing and maritime-related businesses"],
    },
    {
      category: "Project Types",
      items: ["New fit-out for leased or owned units", "Renovation and reconfiguration works", "MEP system modifications", "Structural changes and extensions"],
    },
    {
      category: "Who Applies",
      items: ["Fit-out and MEP contractors", "Project managers and consultants", "Facility management teams", "Business owners and tenants"],
    },
  ],
  steps: [
    { step: "01", title: "Scope & Pre-Check", desc: "Define the scope of works and confirm applicable Trakhees requirements for the zone and building type." },
    { step: "02", title: "Site Survey", desc: "Survey the unit, collect existing drawings if available, and assess MEP infrastructure." },
    { step: "03", title: "Drawing Preparation", desc: "Prepare architectural, MEP, and structural drawings to Trakhees standards." },
    { step: "04", title: "Document Compilation", desc: "Compile company, property, contractor, and technical documents into a complete package." },
    { step: "05", title: "Trakhees Application Submission", desc: "Submit the application via Trakhees online portal or customer service with all required documents." },
    { step: "06", title: "Trakhees Technical Review", desc: "Trakhees engineers review the submission for technical compliance." },
    { step: "07", title: "Comment Resolution", desc: "Address Trakhees comments or revision requests and resubmit as needed." },
    { step: "08", title: "Permit / NOC Issuance", desc: "Receive Trakhees permit or NOC. Works can commence under approved conditions." },
    { step: "09", title: "Execution & Inspections", desc: "Execute works per approved drawings. Arrange any required mid-works inspections." },
    { step: "10", title: "Final Approval & Close-Out", desc: "Request final Trakhees inspection and obtain completion sign-off or NOC." },
  ],
  documents: [
    {
      category: "Company & Project Basics",
      items: ["Trade license (Trakhees or PCFC zone)", "Tenancy contract / title deed", "Authorized signatory documents", "NOC from building owner or PCFC"],
    },
    {
      category: "Technical Submission Pack",
      items: ["Architectural floor plans (existing + proposed)", "MEP drawings (electrical, HVAC, plumbing)", "Structural drawings (for structural works)", "Civil Defense fire safety design (as required)"],
    },
    {
      category: "Contractor & Compliance",
      items: ["Contractor trade license and registration", "Contractor liability insurance", "Engineer credentials / qualifications", "Material submittals for major components"],
    },
  ],
  timeline:
    "Trakhees approval timelines vary by zone, project type, and submission completeness. Standard NOCs for straightforward fit-outs from complete submissions are typically reviewed within 5–15 working days. Larger projects, structural works, or those requiring Civil Defense pre-approval may take 3–6 weeks or more. Preparation of a complete, well-coordinated first submission minimizes delays and revision cycles.",
  rejections: [
    { reason: "Drawings don't meet Trakhees technical standards", fix: "Ensure all drawings comply with Trakhees formatting and technical requirements." },
    { reason: "Missing Civil Defense pre-approval", fix: "For works affecting fire systems, obtain DCD approval before Trakhees submission." },
    { reason: "Unapproved or unlicensed contractor", fix: "Ensure contractors are registered and acceptable to Trakhees for the proposed works." },
    { reason: "Incomplete company or property documents", fix: "Verify all trade licenses, ownership documents, and authorization letters are current." },
    { reason: "Structural changes without engineer certification", fix: "Include a structural engineer's report and calculations for all structural modifications." },
    { reason: "Works scope not clearly described", fix: "Provide a detailed method statement and scope narrative alongside technical drawings." },
  ],
  faqs: [
    { q: "What areas does Trakhees regulate?", a: "Trakhees regulates construction and fit-out approvals in PCFC-governed areas including Economic Zones World, Dubai Maritime City, and certain Nakheel-adjacent zones." },
    { q: "Is Trakhees approval the same as JAFZA NOC?", a: "No. They are related but separate authorities. JAFZA handles its own internal approvals, while Trakhees is the broader PCFC regulatory body." },
    { q: "Do I need Civil Defense approval separately from Trakhees?", a: "Yes. For works affecting fire safety systems, DCD approval is required separately. It is often a prerequisite for the Trakhees submission." },
    { q: "Can Fermium Designs handle Trakhees submissions?", a: "Yes. We prepare technical drawings, compile required documents, manage submissions, and handle comment resolution through to final approval." },
    { q: "How long is a Trakhees permit valid?", a: "Typically 3–6 months from issue, depending on project type. Extensions can be requested if works are ongoing." },
    { q: "What happens if works start without Trakhees approval?", a: "Unauthorized works can result in stop-work orders, fines, and mandatory removal of non-compliant installations." },
  ],
};

export default function TrakheesPage() {
  return <ApprovalServicePage data={data} />;
}
