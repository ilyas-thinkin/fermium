import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";

const data: ApprovalServiceData = {
  slug: "damac",
  title: "DAMAC NOC",
  authority: "DAMAC",
  tagline: "Developer NOC for fit-out, renovation, signage, and MEP works in DAMAC-managed properties across Dubai.",
  description:
    "DAMAC NOC is the formal no-objection certificate required from DAMAC Properties before undertaking any fit-out, renovation, MEP modification, signage installation, or access-related works in DAMAC-managed residential and commercial developments. This NOC confirms your proposed works comply with DAMAC's community guidelines, building rules, and safety requirements before works commence.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Property Types",
      items: ["DAMAC Hills and DAMAC Hills 2 villas & apartments", "Business Bay commercial units", "DAMAC retail and showroom spaces", "DAMAC hospitality properties"],
    },
    {
      category: "Project Types",
      items: ["Residential fit-out and renovation", "Commercial interior works", "MEP modifications (HVAC, electrical, plumbing)", "Signage and branding installation"],
    },
    {
      category: "Who Applies",
      items: ["Property owners and residents", "Business tenants (with owner authorization)", "Fit-out and MEP contractors", "Facility management teams"],
    },
  ],
  steps: [
    { step: "01", title: "Pre-Check & Requirements", desc: "Confirm DAMAC-specific community rules for the property and identify any scope restrictions." },
    { step: "02", title: "Site Survey", desc: "Survey the unit and define the exact scope of proposed works." },
    { step: "03", title: "Drawing Preparation", desc: "Prepare required drawings: architectural layout, MEP changes, and signage designs as applicable." },
    { step: "04", title: "Document Compilation", desc: "Compile all required documents: basic, contractor, technical, and any additional approvals." },
    { step: "05", title: "DAMAC NOC Application", desc: "Submit the complete application to DAMAC's community management or customer service team." },
    { step: "06", title: "DAMAC Review", desc: "DAMAC reviews the proposed works against community guidelines and property-specific requirements." },
    { step: "07", title: "Comment Resolution", desc: "Address any DAMAC queries or conditions. Revise and resubmit if required." },
    { step: "08", title: "NOC Issuance", desc: "Receive DAMAC NOC. Works may proceed within the stated conditions and validity period." },
  ],
  documents: [
    {
      category: "Basic Documents",
      items: ["Title deed / ownership document", "Valid tenancy contract (for tenants)", "Owner authorization letter (for tenants)", "Emirates ID of applicant"],
    },
    {
      category: "Contractor Documents",
      items: ["Contractor trade license", "Contractor public liability insurance", "Copy of contractor's engineer credentials", "Material / product specifications"],
    },
    {
      category: "Technical Documents",
      items: ["Architectural floor plan (existing + proposed)", "MEP modification drawings (as applicable)", "Signage artwork / design drawings", "Structural drawings (for structural changes)"],
    },
    {
      category: "Additional Documents",
      items: ["Civil Defense NOC (for fire system works)", "DEWA approval (for load additions/electrical)", "DM permit (where required by project type)", "Method statement for works"],
    },
  ],
  timeline:
    "DAMAC NOC timelines vary by property type and scope. Straightforward residential renovation NOCs for complete submissions can be processed within 2–10 working days. Commercial projects or works involving multiple authority approvals can take 3–6 weeks or longer. Submissions with missing documents or requiring revisions will take longer. Fermium Designs prepares comprehensive submissions to minimize delays.",
  rejections: [
    { reason: "Incomplete document package", fix: "Ensure all required basic, contractor, technical, and supporting documents are included before submission." },
    { reason: "Unapproved contractor or missing insurance", fix: "Use contractors with valid licenses and liability insurance meeting DAMAC requirements." },
    { reason: "Works exceed DAMAC community guidelines", fix: "Review DAMAC's property-specific fit-out rules before designing the scope." },
    { reason: "Structural changes without engineer certification", fix: "Provide structural engineer calculations and drawings for any load-bearing or structural modifications." },
    { reason: "Signage not complying with DAMAC branding standards", fix: "Review DAMAC's signage guidelines before designing artwork — check dimensions, materials, and placement." },
    { reason: "Missing third-party authority NOCs", fix: "Obtain DCD, DEWA, or DM approvals as required before or alongside DAMAC NOC application." },
    { reason: "Changes to common areas without additional clearance", fix: "Common area modifications require separate building management or DAMAC clearance beyond the unit NOC." },
    { reason: "Expired or incorrect property documents", fix: "Ensure all title deeds, trade licenses, and tenancy agreements are current and valid." },
  ],
  faqs: [
    { q: "Does every modification in a DAMAC property need a NOC?", a: "Most structural, MEP, layout, and signage changes require a DAMAC NOC. Pure cosmetic works (paint, furniture) typically do not." },
    { q: "Can a tenant apply for DAMAC NOC without the owner?", a: "Tenants can apply but must provide the property owner's written authorization as part of the application." },
    { q: "How quickly can DAMAC issue a NOC?", a: "For complete, well-prepared submissions, simple NOCs can be issued within 2–5 working days. Complex projects take longer." },
    { q: "Is the DAMAC NOC the only approval I need?", a: "No. Depending on scope, you may also need DCD, DEWA, and DM approvals. The DAMAC NOC is the developer-level clearance." },
    { q: "What happens if I start works without a DAMAC NOC?", a: "Unauthorized works can result in stop-work orders, community fines, and mandatory reinstatement at the owner's expense." },
    { q: "Can Fermium Designs handle DAMAC NOC submissions?", a: "Yes. We prepare the required drawings, compile documents, submit the application, and manage the process to NOC issuance." },
    { q: "Do I need a DAMAC NOC for adding kitchen appliances or bathroom fixtures?", a: "If the works require plumbing or electrical changes that are non-cosmetic, a NOC is required. Confirm specifics with DAMAC's community management." },
    { q: "How long is the DAMAC NOC valid?", a: "Typically 3–6 months from issue date. If works are not completed within the validity period, a renewal or extension should be requested." },
  ],
};

export default function DamacPage() {
  return <ApprovalServicePage data={data} />;
}
