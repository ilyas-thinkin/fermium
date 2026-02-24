import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";

const data: ApprovalServiceData = {
  slug: "jafza",
  title: "JAFZA NOC",
  authority: "JAFZA",
  tagline: "Jebel Ali Free Zone Authority approvals for warehouses, offices, MEP works, and fit-outs.",
  description:
    "JAFZA NOC is the formal approval issued by the Jebel Ali Free Zone Authority for fit-out, renovation, MEP modifications, signage, and construction works within JAFZA. Any tenant, property owner, or contractor performing works within JAFZA's warehouses, offices, or commercial units must obtain this NOC before commencing work. It confirms that proposed works comply with JAFZA's technical, safety, and community requirements.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9H21M9 21V9" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Business Types",
      items: ["Logistics and freight forwarding companies", "Manufacturing and industrial operators", "Warehousing and storage businesses", "Automotive and chemicals businesses"],
    },
    {
      category: "Project Types",
      items: ["New office or warehouse fit-out", "Racking and mezzanine installation", "MEP modifications and upgrades", "Fire safety system installation or modification"],
    },
    {
      category: "Who Applies",
      items: ["JAFZA license holders", "Fit-out and MEP contractors", "Facility management companies", "Consultants and project managers"],
    },
  ],
  steps: [
    { step: "01", title: "Scope & Pre-Check", desc: "Confirm the works scope, identify applicable JAFZA requirements, and check unit-specific conditions." },
    { step: "02", title: "Site Survey", desc: "Survey the unit, collect as-built drawings (if available), and assess existing MEP infrastructure." },
    { step: "03", title: "Drawing & Document Preparation", desc: "Prepare technical drawings (architectural, MEP, structural if needed) per JAFZA standards." },
    { step: "04", title: "Company Document Compilation", desc: "Assemble JAFZA license, tenancy contract, contractor documents, and engineer credentials." },
    { step: "05", title: "JAFZA Application Submission", desc: "Submit via JAFZA's online portal or customer service with complete documentation package." },
    { step: "06", title: "JAFZA Technical Review", desc: "JAFZA engineers review the application for technical compliance and safety requirements." },
    { step: "07", title: "Comment Resolution", desc: "Respond to JAFZA queries or revise drawings as required and resubmit." },
    { step: "08", title: "NOC Issuance", desc: "Receive JAFZA NOC. Works can commence as per the approved scope." },
    { step: "09", title: "Works Execution", desc: "Execute works strictly per approved drawings and JAFZA conditions." },
    { step: "10", title: "Close-Out & Final Inspection", desc: "Arrange close-out inspection if required by JAFZA and submit as-built drawings." },
  ],
  documents: [
    {
      category: "Company Documents",
      items: ["JAFZA trade license", "Tenancy contract / lease agreement", "Authorized signatory letter", "Landlord/JAFZA owner NOC (if required)"],
    },
    {
      category: "Technical Documents",
      items: ["Architectural floor plans (existing + proposed)", "MEP drawings (electrical, plumbing, HVAC)", "Structural drawings (for racking/mezzanine)", "Fire safety layout / Civil Defense design (if applicable)"],
    },
    {
      category: "Contractor Documents",
      items: ["Contractor trade license", "Contractor liability insurance", "Engineer credentials / DM or JAFZA registration", "Material submittals (for major equipment)"],
    },
  ],
  timeline:
    "JAFZA NOC timelines vary by scope and submission completeness. Standard fit-out NOCs for complete submissions are typically reviewed within 5–15 working days. Projects involving structural changes, fire systems, or large MEP modifications may take 3–6 weeks. Incomplete submissions or queries requiring clarification can significantly extend timelines. Fermium Designs prepares complete, well-coordinated packages to minimize back-and-forth with JAFZA.",
  rejections: [
    { reason: "Works scope not clearly defined in drawings", fix: "Ensure drawings clearly show existing and proposed layouts with all changes explicitly marked." },
    { reason: "Missing fire safety or Civil Defense pre-approval", fix: "For works affecting fire systems, obtain DCD approval before JAFZA submission." },
    { reason: "Unapproved or unregistered contractor", fix: "Verify your contractor is acceptable to JAFZA for the type of works proposed." },
    { reason: "Structural changes without engineer certification", fix: "Include a licensed structural engineer's report and calculations for any structural modifications." },
    { reason: "Racking or mezzanine without detailed structural drawings", fix: "Prepare a full structural drawing package for all elevated platforms and industrial racking systems." },
    { reason: "Insufficient insurance coverage", fix: "Ensure contractor insurance meets JAFZA's minimum requirements for the scope of works." },
    { reason: "Drawings not matching unit dimensions", fix: "Verify all drawings against actual unit measurements before submission." },
    { reason: "Missing utility-related approvals", fix: "Coordinate DEWA or relevant utility approvals for any electrical or water system modifications." },
  ],
  faqs: [
    { q: "Is JAFZA NOC required for all works in JAFZA?", a: "Yes. Any works beyond routine maintenance within JAFZA — including fit-out, MEP modifications, signage, and structural changes — require a JAFZA NOC." },
    { q: "Can a contractor apply for JAFZA NOC directly?", a: "Contractors can assist with the application, but the JAFZA licensee (the business) typically needs to be the primary applicant." },
    { q: "How long is a JAFZA NOC valid?", a: "JAFZA NOCs are typically valid for 3–6 months from issue date. Extensions may be available for ongoing projects." },
    { q: "Is Civil Defense approval separate from JAFZA NOC?", a: "Yes. For works affecting fire safety systems, DCD approval is required separately and is often a prerequisite for the JAFZA NOC." },
    { q: "Can I install industrial racking without a JAFZA NOC?", a: "No. Industrial racking and mezzanine installations require structural calculations and JAFZA approval before installation." },
    { q: "Does Fermium Designs manage JAFZA NOC applications?", a: "Yes. We prepare technical drawings, compile documents, submit applications, and manage the NOC process through to approval." },
    { q: "What happens if we start works without JAFZA NOC?", a: "Unauthorized works in JAFZA can result in immediate stop-work orders, fines, and forced removal of non-compliant installations." },
    { q: "Do we need a JAFZA NOC for IT infrastructure or cabling works?", a: "Minor cabling works may not require a NOC, but any significant MEP or infrastructure changes typically do. Confirm with JAFZA's customer service before starting." },
  ],
};

export default function JafzaPage() {
  return <ApprovalServicePage data={data} />;
}
