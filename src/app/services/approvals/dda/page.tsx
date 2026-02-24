import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";

const data: ApprovalServiceData = {
  slug: "dda",
  title: "Dubai Development Authority (DDA) Approval",
  authority: "DDA",
  tagline: "NOC and permit services for businesses and fit-outs in Dubai Design District, media cities, and DDA-regulated zones.",
  description:
    "Dubai Development Authority (DDA) oversees regulatory approvals for creative economy zones, business districts, and design hubs including Dubai Design District (d3), parts of Jumeirah and other DDA-regulated communities. Any fit-out, renovation, MEP modification, or signage works within DDA-regulated areas requires formal DDA NOC or approval before works can commence.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 2v6h6M12 18v-6M9 15l3-3 3 3" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Business Types",
      items: ["Offices and creative studios in d3", "Retail and showroom spaces", "F&B outlets and hospitality businesses", "Clinics, warehouses, and service providers"],
    },
    {
      category: "Project Types",
      items: ["New fit-out for leased units", "Renovation or reconfiguration", "MEP modifications and upgrades", "Signage and branding works"],
    },
    {
      category: "Who Applies",
      items: ["Tenants and business owners", "Fit-out and MEP contractors", "Consultants and project managers", "Facility management teams"],
    },
  ],
  steps: [
    { step: "01", title: "Scope & Pre-Check", desc: "Confirm DDA zone requirements and applicable submission criteria for the specific property." },
    { step: "02", title: "Site Survey", desc: "Survey the unit and identify existing MEP conditions and layout." },
    { step: "03", title: "Drawing Preparation", desc: "Prepare architectural and MEP drawings per DDA standards." },
    { step: "04", title: "Document Compilation", desc: "Assemble general, technical, and completion documents for the DDA application." },
    { step: "05", title: "DDA Application Submission", desc: "Submit application with complete documentation to DDA's regulatory office." },
    { step: "06", title: "DDA Technical Review", desc: "DDA reviews drawings for compliance with zone and building requirements." },
    { step: "07", title: "Comment Resolution", desc: "Address DDA comments and revise submissions as required." },
    { step: "08", title: "NOC / Approval Issuance", desc: "Receive DDA NOC or approval letter. Works can commence." },
    { step: "09", title: "Works Execution", desc: "Execute works per approved drawings and DDA conditions." },
    { step: "10", title: "Completion & Sign-Off", desc: "Submit as-built drawings and arrange final inspection if required by DDA." },
  ],
  documents: [
    {
      category: "General Documents",
      items: ["DDA/TECOM/d3 trade license", "Tenancy contract or title deed", "Authorized signatory documentation", "NOC from building owner or management"],
    },
    {
      category: "Technical Drawings",
      items: ["Architectural floor plans (existing + proposed)", "MEP drawings for modifications", "Signage design / artwork (if applicable)", "Structural drawings (if structural changes involved)"],
    },
    {
      category: "Completion Documents",
      items: ["Contractor trade license and insurance", "As-built drawings (for final sign-off)", "Testing and commissioning certificates", "Civil Defense NOC (for fire system works)"],
    },
  ],
  timeline:
    "DDA approval timelines depend on submission completeness and project scope. Straightforward NOCs for complete submissions can be processed within 5–15 working days. Projects involving multiple authority approvals or complex MEP/structural works may take 3–5 weeks. Ensuring a complete, well-organized first submission is the most effective way to achieve timely approval.",
  rejections: [
    { reason: "Drawings not meeting DDA formatting standards", fix: "Ensure all drawings include required title blocks, revision tracking, and meet DDA submission format." },
    { reason: "Missing Civil Defense pre-approval", fix: "For works involving fire safety systems, obtain DCD approval before DDA submission." },
    { reason: "Unapproved contractor", fix: "Confirm your contractor is acceptable to DDA for the scope of works proposed." },
    { reason: "Signage not meeting zone branding guidelines", fix: "Review DDA's signage and branding standards before finalizing signage artwork." },
    { reason: "Incomplete document package", fix: "Submit all required general, technical, and contractor documents together in the first submission." },
    { reason: "Works scope affecting common areas", fix: "Common area modifications require additional DDA or building management clearance." },
    { reason: "Drawings don't reflect actual site conditions", fix: "Conduct a proper site survey before preparing drawings." },
  ],
  faqs: [
    { q: "What areas does DDA regulate?", a: "DDA regulates creative and business districts including Dubai Design District (d3), certain Jumeirah areas, and other DDA-designated communities." },
    { q: "Is DDA the same as TECOM?", a: "No. DDA and TECOM are separate authorities managing different zones. DDA oversees d3 and design-focused communities; TECOM manages technology and media zones." },
    { q: "Do I need DM approval separately from DDA?", a: "In DDA-regulated zones, DDA typically acts as the primary authority. However, DCD and DEWA approvals may still be required depending on works scope." },
    { q: "Can Fermium Designs manage DDA applications?", a: "Yes. We prepare drawings, compile documents, submit applications, and manage comment resolution through to DDA NOC issuance." },
    { q: "How long is a DDA NOC valid?", a: "Typically 3–6 months from issue date. Extensions can be requested for ongoing projects." },
    { q: "What if my works are in d3 — do different rules apply?", a: "Dubai Design District is under DDA but may have specific design guidelines reflecting the creative character of the zone. We verify applicable requirements for each project." },
    { q: "Is DDA approval required for signage changes only?", a: "Yes — even signage changes within DDA zones require a formal NOC before installation." },
    { q: "What happens if works proceed without DDA approval?", a: "Unauthorized works can result in stop-work orders, fines, and mandatory reinstatement at the operator's expense." },
  ],
};

export default function DdaPage() {
  return <ApprovalServicePage data={data} />;
}
