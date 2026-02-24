import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";

const data: ApprovalServiceData = {
  slug: "rta",
  title: "RTA Permit & Approval",
  authority: "RTA",
  tagline: "Roads and Transport Authority permits for ROW works, road access, traffic diversions, and signage in Dubai.",
  description:
    "RTA (Roads and Transport Authority) approval is required for any works that affect public roads, rights-of-way (ROW), traffic flow, road access, parking facilities, or signage near RTA-managed corridors in Dubai. This includes road cutting for utilities, temporary traffic diversions, new access point creation, external signage, and any civil works within or adjacent to Dubai's road network.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="1" y="3" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8H22L19 16H16V8Z" />
      <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Project Types",
      items: ["New building access point creation", "Road cutting for utility installations", "Temporary traffic diversion during construction", "Parking facility modifications"],
    },
    {
      category: "Signage & External Works",
      items: ["External signage near or over RTA roads", "Billboard or directional sign installation", "Sidewalk and pavement modification works", "Street furniture and outdoor works"],
    },
    {
      category: "Who Applies",
      items: ["Developers and property owners", "Civil and MEP contractors", "Consultants and project managers", "Facility management companies"],
    },
  ],
  steps: [
    { step: "01", title: "Scope & Pre-Check", desc: "Confirm the type of RTA permit required: ROW, traffic diversion, access/parking, or signage." },
    { step: "02", title: "Site Survey", desc: "Survey the site and adjacent road conditions. Collect existing road and utility drawings." },
    { step: "03", title: "Drawing Preparation", desc: "Prepare civil, traffic, or signage drawings per RTA technical standards." },
    { step: "04", title: "Document Compilation", desc: "Compile general, traffic, and ROW documents per the specific permit type." },
    { step: "05", title: "eNOC Portal Submission", desc: "Submit the application via RTA's eNOC portal with all required documents and correct file formats (PDF, DWG as applicable)." },
    { step: "06", title: "RTA Review", desc: "RTA engineers review the submission for road safety, traffic impact, and technical compliance." },
    { step: "07", title: "Comment Resolution", desc: "Address RTA queries and revise drawings as required. Some permits are approved within ~7 working days for complete submissions." },
    { step: "08", title: "Permit Issuance", desc: "Receive RTA permit. Works can proceed within the validity period and stated conditions." },
    { step: "09", title: "Works Execution", desc: "Execute works as per RTA permit conditions, including traffic management and safety requirements." },
    { step: "10", title: "Reinstatement & Close-Out", desc: "Reinstate road surfaces and arrange RTA close-out inspection where required." },
  ],
  documents: [
    {
      category: "General Documents",
      items: ["Trade license / company registration", "Authorized signatory documents", "Plot/building title deed or NOC from owner", "Relevant existing drawings (road, utility, site)"],
    },
    {
      category: "Traffic & Diversion",
      items: ["Traffic management plan (TMP)", "Traffic diversion layout drawings", "Site access and staging drawings", "Contractor safety and traffic control plan"],
    },
    {
      category: "ROW & Road Works",
      items: ["Civil / road cutting drawings", "Utility coordination drawings", "Reinstatement plan and materials specification", "Insurance certificates for road works"],
    },
  ],
  timeline:
    "RTA permit timelines vary by permit type. Traffic management and access permits for complete submissions can be processed within 5–10 working days. Road cutting or ROW permits with utility coordination may take 2–4 weeks. Submissions via eNOC must meet file size and format requirements — incorrect formats cause immediate rejection. Our team ensures submissions are eNOC-compliant from day one.",
  rejections: [
    { reason: "eNOC file format or size not meeting requirements", fix: "Ensure all drawings are submitted in the required DWG/PDF format within the specified file size limits." },
    { reason: "Traffic management plan not meeting RTA standards", fix: "Prepare TMP per RTA Traffic Engineering guidelines, showing diversions, signage, and pedestrian management." },
    { reason: "Missing utility coordination drawings", fix: "Include all existing utility locations and proposed routing to avoid conflicts in ROW works." },
    { reason: "Signage exceeding RTA size or location standards", fix: "Review RTA signage guidelines for dimensions, setbacks, and luminance before finalizing design." },
    { reason: "Insufficient road reinstatement details", fix: "Provide detailed reinstatement plan with materials specification matching the existing road surface." },
    { reason: "Missing insurance or bond", fix: "RTA road works often require a reinstatement bond or contractor insurance certificate — include these upfront." },
    { reason: "Works scope not matching the permit type", fix: "Ensure the permit type selected matches the actual scope of works being proposed." },
  ],
  faqs: [
    { q: "What is RTA eNOC?", a: "eNOC is RTA's online portal for submitting NOC and permit applications for works affecting roads, traffic, and ROW in Dubai." },
    { q: "Do I need RTA approval for a sign near a main road?", a: "Yes. External signage that is visible from or adjacent to RTA-managed roads requires an RTA NOC." },
    { q: "Is RTA approval required for all road cutting works?", a: "Yes. Any road or pavement cutting for utility installation or access works requires a formal RTA ROW permit." },
    { q: "Can Fermium Designs handle RTA submissions?", a: "Yes. We prepare traffic management plans, civil drawings, and all required documents, and manage the eNOC submission process." },
    { q: "What is a Traffic Management Plan (TMP)?", a: "A TMP is a formal document showing how traffic, pedestrians, and site operations will be safely managed during works affecting roads or public areas." },
    { q: "How long is an RTA permit valid?", a: "Permit validity depends on the type and scope. Most ROW permits are valid for the stated works duration, typically 1–6 months." },
    { q: "Do we need RTA approval if works are entirely on private property?", a: "If works don't affect any public road, ROW, or traffic flow, an RTA permit may not be required. Works near the property boundary that impact the road or pedestrian path do." },
    { q: "What happens if we start road works without RTA approval?", a: "Unauthorized road or ROW works can result in immediate stop-work orders, significant fines, and mandatory reinstatement at the contractor's cost." },
  ],
};

export default function RtaPage() {
  return <ApprovalServicePage data={data} />;
}
