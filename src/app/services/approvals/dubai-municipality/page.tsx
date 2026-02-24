import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";

const data: ApprovalServiceData = {
  slug: "dubai-municipality",
  title: "Dubai Municipality Approval",
  authority: "Dubai Municipality",
  tagline: "Building permits, fit-out approvals, and compliance clearances from Dubai's primary regulatory authority.",
  description:
    "Dubai Municipality (DM) approval is the formal clearance required for fit-outs, renovations, building modifications, and new construction across Dubai. DM oversees design review, compliance checks against UAE building codes, site inspections, and final approval or occupancy permit. It is the primary authority for most construction and fit-out works in non-free-zone areas of Dubai and coordinates closely with other authorities including DEWA and Civil Defense.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12H15V22" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Project Types",
      items: ["New commercial and residential fit-outs", "Renovation and reconfiguration works", "Structural modifications or additions", "Change of use / occupancy change applications"],
    },
    {
      category: "Who Applies",
      items: ["Tenants and business owners", "Property owners and developers", "Fit-out and general contractors", "Facility management companies"],
    },
    {
      category: "Works Covered",
      items: ["Architectural and interior layout changes", "MEP system modifications", "External façade or signage works", "Temporary structures and event permits"],
    },
  ],
  steps: [
    { step: "01", title: "Project Scope Definition", desc: "Confirm the type of DM permit required (fit-out, renovation, addition, or change of use)." },
    { step: "02", title: "Site Survey & Data Collection", desc: "Survey the site, collect existing approved drawings, and identify any compliance gaps." },
    { step: "03", title: "Architectural & MEP Design", desc: "Prepare full architectural and MEP drawing package in line with DM requirements and UAE building codes." },
    { step: "04", title: "Document Compilation", desc: "Assemble all required documents: legal, technical, and supporting approvals from other authorities." },
    { step: "05", title: "DM Application Submission", desc: "Submit via Emarat or Dubai REST portals with complete drawing package and application fees." },
    { step: "06", title: "DM Technical Review", desc: "DM engineers review drawings for compliance with UAE fire, structural, accessibility, and MEP codes." },
    { step: "07", title: "Comment Resolution", desc: "Address DM review comments, revise drawings as required, and resubmit for clearance." },
    { step: "08", title: "Permit Issuance", desc: "Receive DM building permit or fit-out permit. Works can legally commence." },
    { step: "09", title: "Site Inspections", desc: "DM may conduct interim inspections during construction. Ensure site compliance at all stages." },
    { step: "10", title: "Completion Certificate / Final Approval", desc: "After works complete, obtain DM completion or occupancy certificate." },
  ],
  documents: [
    {
      category: "Basic Documents",
      items: ["Trade license / company registration", "Tenancy contract / title deed", "NOC from building owner / master developer", "DM-registered engineer / consultant approval"],
    },
    {
      category: "Technical Drawings",
      items: ["Architectural floor plans (existing + proposed)", "Section and elevation drawings", "MEP drawings (electrical, plumbing, HVAC)", "Structural drawings (if modifications involved)", "Accessibility compliance layouts"],
    },
    {
      category: "Supporting Documents",
      items: ["Civil Defense NOC (if required)", "DEWA approval or NOC", "Material specifications / finishes schedule", "As-built drawings (for completion stage)"],
    },
  ],
  timeline:
    "DM approval timelines depend on project type, size, and submission completeness. Standard fit-out permits can take 10–20 working days for initial review. Projects requiring coordination with DCD, DEWA, or structural review take longer. Change-of-use applications may extend to 4–8 weeks. Comment revisions and resubmissions each add time. A complete, well-coordinated first submission significantly reduces overall duration.",
  rejections: [
    { reason: "Incomplete drawing package", fix: "Submit all required plan types (architectural, MEP, structural) together in one complete package." },
    { reason: "Drawings not compliant with UAE building codes", fix: "Ensure all designs comply with UAE Fire Code, DEWA regulations, and local accessibility standards." },
    { reason: "Missing authority NOCs", fix: "Obtain required pre-approvals from DCD, DEWA, or master developer before DM submission." },
    { reason: "Unregistered consultant or contractor", fix: "Only use DM-registered consultants for drawing preparation and submission." },
    { reason: "Drawings don't match actual site", fix: "Conduct a thorough site survey and ensure as-existing drawings accurately reflect current conditions." },
    { reason: "Incorrect or missing plot/building information", fix: "Verify all plot numbers, building details, and ownership documents are accurate and current." },
  ],
  faqs: [
    { q: "Does every fit-out in Dubai require DM approval?", a: "Most commercial fit-outs in non-free-zone areas of Dubai require DM approval. Certain minor cosmetic works may not, but structural, MEP, or layout changes generally do." },
    { q: "Can I apply for a DM fit-out permit without a registered consultant?", a: "No. DM requires submissions to be made by or through a DM-registered engineering consultant." },
    { q: "What is the difference between a DM fit-out permit and a building permit?", a: "A fit-out permit covers interior works within an existing shell. A building permit covers structural additions, new builds, or significant structural changes." },
    { q: "Does DM coordinate with other authorities?", a: "Yes. DM often requires prior approvals from DCD, DEWA, and sometimes the master developer before issuing its own permit." },
    { q: "Can I start works before receiving the DM permit?", a: "No. Starting construction without DM permit is a violation and can result in stop-work orders and fines." },
    { q: "How long is a DM permit valid?", a: "DM permits are typically valid for 6–12 months from issue date. Extensions may be requested if works are ongoing." },
    { q: "Does Fermium Designs manage DM submissions?", a: "Yes. We prepare full architectural and MEP drawing packages, compile documents, manage submission, handle comments, and coordinate inspections through to permit issuance." },
    { q: "Is a completion certificate always required?", a: "For commercial spaces requiring a trade license or occupancy, a DM completion certificate or final inspection sign-off is typically required." },
  ],
};

export default function DubaiMunicipalityPage() {
  return <ApprovalServicePage data={data} />;
}
