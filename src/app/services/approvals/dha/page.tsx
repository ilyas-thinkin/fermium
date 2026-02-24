import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";

const data: ApprovalServiceData = {
  slug: "dha",
  title: "Dubai Health Authority (DHA) Approval",
  authority: "DHA",
  tagline: "Facility licensing and fit-out approvals for clinics, medical centers, labs, and healthcare facilities in Dubai.",
  description:
    "DHA (Dubai Health Authority) approval is required for all healthcare facilities operating in Dubai outside of Dubai Health Care City (DHCC). This includes obtaining a New Facility License or Activate Facility License via the Sheryan portal, and ensuring the physical space meets DHA Health Facility Guidelines. For fit-out and renovation projects, DHA reviews the facility layout, clinical workflow, MEP compliance, and infection control requirements before granting licensing approval.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 12H18L15 21L9 3L6 12H2" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Healthcare Facility Types",
      items: ["General practice and specialist clinics", "Dental clinics and polyclinics", "Diagnostic laboratories and imaging centers", "Physiotherapy and rehabilitation centers"],
    },
    {
      category: "Additional Facilities",
      items: ["Pharmacies and dispensaries", "Home healthcare service providers", "Aesthetic and dermatology clinics", "Optometry and ophthalmology centers"],
    },
    {
      category: "Project Scenarios",
      items: ["New healthcare facility setup", "Relocation of existing facility", "Expansion or reconfiguration of licensed space", "Renovation works in operational clinic"],
    },
  ],
  steps: [
    { step: "01", title: "Pre-Check & Facility Planning", desc: "Confirm facility type, DHA licensing category, and applicable Health Facility Guidelines for your specific healthcare activity." },
    { step: "02", title: "Site Assessment", desc: "Assess the proposed space against DHA minimum area, room requirements, and clinical workflow standards." },
    { step: "03", title: "Architectural & MEP Design", desc: "Prepare facility layout drawings meeting DHA requirements: clinical areas, infection control zoning, MEP specifications." },
    { step: "04", title: "Sheryan Portal Application", desc: "Submit the New Facility License application via DHA's Sheryan portal with all required documents." },
    { step: "05", title: "DHA Document Review", desc: "DHA reviews the application, facility drawings, and supporting documents for completeness." },
    { step: "06", title: "Initial Approval", desc: "Receive initial approval to proceed with fit-out based on submitted plans." },
    { step: "07", title: "Fit-Out Execution", desc: "Complete the fit-out in accordance with DHA-approved drawings and Health Facility Guidelines." },
    { step: "08", title: "DHA Site Inspection", desc: "DHA inspector visits the completed facility to verify compliance with approved layout and guidelines." },
    { step: "09", title: "Facility License Issuance", desc: "Receive DHA facility license upon passing inspection. Professional licenses for clinical staff can then be activated." },
  ],
  documents: [
    {
      category: "Core Documents",
      items: ["Trade license (health sector activity)", "Tenancy contract for the facility space", "Medical director / owner Emirates ID and qualifications", "Ownership / partner documents"],
    },
    {
      category: "Technical & Facility Documents",
      items: ["Architectural floor plans per DHA requirements", "MEP drawings (electrical, plumbing, HVAC)", "Infection control zoning layout", "Medical gas system design (if applicable)"],
    },
    {
      category: "Compliance Documents",
      items: ["Civil Defense NOC (fire safety)", "DM building or fit-out permit (if required)", "Equipment list and specifications", "Waste management plan"],
    },
  ],
  timeline:
    "DHA facility licensing timelines depend on facility type, completeness of submission, and the DHA review queue. Initial Sheryan application review typically takes 2–4 weeks. If additional information or design revisions are requested, timelines extend accordingly. The fit-out execution period and scheduling of the DHA inspection add further time. Complete, well-coordinated first submissions minimize total project duration.",
  rejections: [
    { reason: "Facility space doesn't meet DHA minimum area requirements", fix: "Review DHA Health Facility Guidelines for minimum room sizes and total area requirements before signing a lease." },
    { reason: "Clinical workflow doesn't meet infection control standards", fix: "Design clean/dirty zoning, patient flow, and decontamination areas per DHA infection control requirements." },
    { reason: "Missing MEP specifications for clinical systems", fix: "Include medical gas, specialized HVAC, and clinical-grade MEP specifications in the submission." },
    { reason: "Incomplete or incorrect Sheryan application", fix: "Carefully complete all Sheryan portal fields and attach all required supporting documents." },
    { reason: "Unqualified medical director or ownership structure issues", fix: "Confirm all clinical and ownership qualifications meet DHA licensing requirements before applying." },
    { reason: "Site doesn't pass DHA inspection due to deviation from approved plans", fix: "Ensure fit-out execution strictly follows DHA-approved drawings. Any changes must be pre-approved." },
  ],
  faqs: [
    { q: "Is DHA approval different from DHCC approval?", a: "Yes. DHA regulates healthcare facilities across Dubai (outside DHCC). DHCC (Dubai Health Care City) is a separate authority with its own approval process for facilities within its zone." },
    { q: "Can I apply for a DHA license before the fit-out is complete?", a: "The initial application can be submitted during the design phase, but the final facility license is only issued after DHA inspects and approves the completed fit-out." },
    { q: "What is the Sheryan portal?", a: "Sheryan is DHA's online platform for healthcare facility licensing, professional registration, and related applications." },
    { q: "Do I need Civil Defense approval separately?", a: "Yes. DCD fire safety approval is required for healthcare facilities and is typically needed before or alongside the DHA process." },
    { q: "Can Fermium Designs prepare DHA-compliant facility drawings?", a: "Yes. We prepare facility layouts meeting DHA Health Facility Guidelines and coordinate with the DHA application process." },
    { q: "What happens if my facility fails DHA inspection?", a: "DHA will provide a snag list of items requiring correction. Once addressed, a re-inspection is scheduled. Works must be rectified before the license is issued." },
    { q: "How long does DHA licensing take from start to finish?", a: "Including design, application, fit-out, and inspection, the full DHA licensing process typically takes 2–5 months depending on complexity and responsiveness." },
    { q: "Is DHA approval required for clinic expansion within an already licensed facility?", a: "Any changes to the licensed facility layout or scope typically require DHA approval before works commence." },
  ],
};

export default function DhaPage() {
  return <ApprovalServicePage data={data} />;
}
