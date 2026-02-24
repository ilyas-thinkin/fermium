import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";

const data: ApprovalServiceData = {
  slug: "civil-defense",
  title: "Dubai Civil Defense (DCD) Approval",
  authority: "Civil Defense",
  tagline: "Fire & life safety clearance for fit-outs, renovations, and technical works across Dubai.",
  description:
    "Dubai Civil Defense (DCD) approval is the official fire and life safety clearance required before starting fit-out, renovation, or construction works in Dubai. It covers Fire & Life Safety design approval, installation compliance verification, inspections during and after work, and final clearance/NOC. Without DCD approval, you cannot legally operate a commercial space, obtain a trade license, or pass final handover inspections.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12L11 14L15 10" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Business Types",
      items: ["Offices and co-working spaces", "Retail shops and showrooms", "Restaurants, cafés, and F&B outlets", "Warehouses and logistics facilities"],
    },
    {
      category: "Sectors",
      items: ["Healthcare facilities and clinics", "Hospitality and hotels", "Educational institutions", "Industrial and manufacturing units"],
    },
    {
      category: "Project Types",
      items: ["New fit-out for leased units", "Renovation or reconfiguration", "MEP modifications affecting fire systems", "Change of use or occupancy"],
    },
  ],
  steps: [
    { step: "01", title: "Scope & Pre-Check", desc: "Define the works, confirm building type, occupancy classification, and applicable DCD requirements." },
    { step: "02", title: "Fire Safety Design", desc: "Prepare fire alarm, suppression, emergency lighting, exit, and ventilation drawings per DCD standards." },
    { step: "03", title: "Document Preparation", desc: "Compile drawings, specs, contractor approvals, and legal documents into a complete submission package." },
    { step: "04", title: "DCD Application Submission", desc: "Submit via Montaji or the relevant DCD portal with all required documents and fees." },
    { step: "05", title: "Design Review", desc: "DCD reviews fire & life safety drawings. Respond to any comments or revision requests promptly." },
    { step: "06", title: "Design Approval", desc: "Receive formal DCD design approval. Works can commence under approved plans." },
    { step: "07", title: "Installation & Site Works", desc: "Execute fire safety installations in compliance with approved drawings and DCD specifications." },
    { step: "08", title: "Testing & Commissioning", desc: "Conduct all required tests (fire alarm, suppression, emergency systems) and prepare commissioning reports." },
    { step: "09", title: "DCD Inspection", desc: "DCD inspector visits the site to verify installation compliance against approved drawings." },
    { step: "10", title: "Final Clearance / NOC", desc: "Receive the DCD final clearance certificate or NOC after passing inspection." },
  ],
  documents: [
    {
      category: "Project & Legal Documents",
      items: ["Trade license / company documents", "Tenancy contract / title deed", "Approved architectural drawings (if DM-approved)", "Letter of appointment / NOC from landlord"],
    },
    {
      category: "Technical Drawings",
      items: ["Fire alarm system layout drawings", "Fire suppression / sprinkler drawings", "Emergency lighting and exit sign layouts", "HVAC / smoke control drawings", "Means of escape / evacuation plan"],
    },
    {
      category: "Testing & Commissioning",
      items: ["Contractor approvals (DCD-registered)", "Material submittals / product approvals", "Testing and commissioning reports", "As-built drawings (for final clearance)"],
    },
  ],
  timeline:
    "DCD design approval typically takes 5–15 working days for straightforward fit-outs, depending on project complexity, submission completeness, and DCD workload. Projects with complex fire systems or larger footprints may take longer. Final inspection and clearance after works can add 3–10 additional working days. Incomplete submissions, design comments, or revisions can significantly extend the timeline.",
  rejections: [
    { reason: "Incomplete or missing fire safety drawings", fix: "Ensure fire alarm, suppression, and emergency layouts are all included in one complete package." },
    { reason: "Unregistered or unapproved contractor", fix: "Only use DCD-registered fire safety contractors for design and installation." },
    { reason: "Design doesn't meet occupancy load requirements", fix: "Verify exit widths, escape routes, and emergency lighting against the actual occupancy count." },
    { reason: "Non-compliant sprinkler coverage or spacing", fix: "Design sprinkler layouts strictly per NFPA 13 or applicable DCD-approved standard." },
    { reason: "Drawings not matching site conditions", fix: "Conduct a thorough site survey before preparing drawings to reflect actual conditions." },
    { reason: "Missing material approvals or submittals", fix: "Confirm all specified products are DCD-approved before submission." },
  ],
  faqs: [
    { q: "Is DCD approval mandatory for all commercial fit-outs in Dubai?", a: "Yes. DCD fire & life safety approval is mandatory for virtually all commercial fit-outs, renovations, and change-of-use projects in Dubai before work commences." },
    { q: "Can I start work before receiving DCD approval?", a: "No. Starting fire safety works without DCD design approval is a violation and can result in stop-work orders, fines, and forced removal of non-compliant installations." },
    { q: "Do I need DCD approval if I'm only doing minor partitioning works?", a: "If the works affect fire escape routes, fire compartmentation, or fire system layouts, DCD approval is required even for minor works." },
    { q: "Who submits the DCD application — the tenant or the contractor?", a: "The DCD-registered fire safety consultant or contractor typically submits on behalf of the tenant or client." },
    { q: "What happens after I get DCD design approval?", a: "You can commence fire safety installations per the approved drawings. After completion, testing, and commissioning, DCD will inspect and issue the final clearance or NOC." },
    { q: "How long is DCD approval valid?", a: "DCD design approval is typically project-specific. If significant changes are made mid-project, revised drawings may need to be resubmitted for approval." },
    { q: "Does Fermium Designs handle the DCD approval process?", a: "Yes. We prepare fire safety drawings, coordinate with DCD-registered contractors, manage submissions, handle comments, and coordinate inspections through to final clearance." },
    { q: "What is the difference between DCD NOC and DCD clearance?", a: "DCD NOC is usually issued at design stage confirming works can proceed. DCD final clearance or completion certificate is issued after successful inspection of completed works." },
  ],
};

export default function CivilDefensePage() {
  return <ApprovalServicePage data={data} />;
}
