import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tent & Temporary Structure Approval Dubai | DM & DCD Permits | Fermium Designs",
  description:
    "Fermium Designs manages temporary structure and event tent approvals in Dubai — Dubai Municipality permits, Civil Defense fire safety NOC, and developer approvals for events and Ramadan tents.",
  keywords: [
    "tent approval Dubai",
    "temporary structure permit Dubai",
    "Ramadan tent approval Dubai",
    "event tent permit Dubai Municipality",
    "Dubai Civil Defense tent NOC",
    "temporary pavilion approval Dubai",
    "outdoor structure permit Dubai 2026",
  ],
  alternates: { canonical: "https://www.fermiumdesigns.ae/services/approvals/tent" },
  openGraph: {
    title: "Tent & Temporary Structure Approval Dubai | Fermium Designs",
    description: "Expert tent and temporary structure permit management in Dubai — DM, DCD, and developer approvals for event tents, Ramadan tents, and outdoor structures.",
    url: "https://www.fermiumdesigns.ae/services/approvals/tent",
    siteName: "Fermium Designs",
    type: "website",
    locale: "en_AE",
  },
};

const data: ApprovalServiceData = {
  slug: "tent",
  title: "Tent & Temporary Structure Approval",
  authority: "DM / DCD / Developer",
  tagline: "Temporary structure and event tent permits from Dubai Municipality and Civil Defense for Ramadan tents, event pavilions, and outdoor commercial structures.",
  description:
    "Erecting a temporary structure — whether a Ramadan tent, outdoor event pavilion, promotional kiosk, or seasonal commercial tent — in Dubai requires formal approval from Dubai Municipality and Dubai Civil Defense before installation. DM regulates temporary structures on both private land and public areas for safety, structural adequacy, and compliance with zoning rules. DCD ensures fire safety requirements are met including egress, fire suppression, and emergency lighting. Developer NOC is required for temporary structures within managed communities.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Event & Hospitality",
      items: [
        "Ramadan tents for hotels, restaurants, and private events",
        "Corporate event pavilions and exhibition structures",
        "Outdoor wedding and banquet tents",
        "Pop-up dining and F&B outdoor structures",
      ],
    },
    {
      category: "Commercial Structures",
      items: [
        "Seasonal retail kiosks and promotional tents",
        "Outdoor market and festival structures",
        "Construction site welfare facilities (canteens, offices)",
        "Temporary showrooms and product display tents",
      ],
    },
    {
      category: "Project Scenarios",
      items: [
        "Annual Ramadan tent installation at hotel or restaurant",
        "One-off event structure for a corporate or private event",
        "Seasonal outdoor commercial structure (winter/summer)",
        "Construction site temporary structures and facilities",
      ],
    },
  ],
  steps: [
    { step: "01", title: "Scope & Location Pre-Check", desc: "Confirm the tent type, location (private land, public area, or managed community), and applicable authority approvals required." },
    { step: "02", title: "Site Survey", desc: "Survey the installation site, assess ground conditions, access routes, and any existing utility or obstruction constraints." },
    { step: "03", title: "Structural Design", desc: "Prepare structural design for the tent or temporary structure: frame, anchoring, wind load calculations, and foundation method." },
    { step: "04", title: "Fire Safety Design", desc: "Prepare Civil Defense fire safety drawings: means of escape, emergency lighting, fire extinguisher locations, and suppression (if required)." },
    { step: "05", title: "Document Compilation", desc: "Compile trade license, tenancy or land use permission, structural drawings, DCD fire safety package, and application forms." },
    { step: "06", title: "DM Application Submission", desc: "Submit the temporary structure permit application to Dubai Municipality via Emarat portal with complete drawings and supporting documents." },
    { step: "07", title: "DCD Application Submission", desc: "Submit Civil Defense fire safety drawings for the temporary structure for simultaneous review." },
    { step: "08", title: "Developer NOC (if applicable)", desc: "Obtain developer NOC for temporary structures within Emaar, Nakheel, DAMAC, or other managed community properties." },
    { step: "09", title: "Comment Resolution", desc: "Address DM or DCD queries on structural or fire safety design. Revise and resubmit as required." },
    { step: "10", title: "Permit Issuance & Installation", desc: "Receive DM and DCD permits. Install the structure per approved drawings within the approved validity period." },
  ],
  documents: [
    {
      category: "Business & Land Documents",
      items: [
        "Trade license (event organiser or business)",
        "Land use permission or tenancy contract",
        "NOC from property owner (for private land installations)",
        "Developer NOC (for managed community locations)",
      ],
    },
    {
      category: "Structural Documents",
      items: [
        "Tent or structure general arrangement drawings",
        "Structural frame and anchoring calculations",
        "Wind load analysis for the structure and location",
        "Manufacturer structural certification (for proprietary tent systems)",
      ],
    },
    {
      category: "Fire Safety Documents",
      items: [
        "Floor plan with means of escape and exit widths",
        "Emergency lighting layout",
        "Fire extinguisher and first aid locations",
        "Fire suppression system design (for large or enclosed structures)",
      ],
    },
  ],
  timeline:
    "DM temporary structure permit timelines for complete submissions are typically 5–15 working days. DCD review runs concurrently and takes 5–10 working days. Developer NOC, where required, adds 5–10 working days. Seasonal structures such as Ramadan tents are high-demand approval items — submissions should be made 4–6 weeks before the planned installation date to avoid delays. Fermium Designs can expedite the process with a well-prepared, complete first submission.",
  rejections: [
    { reason: "Structural calculations not provided or insufficient", fix: "All temporary structures require structural engineer calculations confirming the frame, anchoring, and wind load resistance for the site conditions." },
    { reason: "Insufficient means of escape for occupant load", fix: "Ensure the tent has adequate exit widths and number of exits for the maximum occupancy. DCD requires minimum exit provision per fire code." },
    { reason: "No emergency lighting plan included", fix: "Emergency lighting must be provided at all exits and in the main tent space. Include layout in the DCD submission." },
    { reason: "Fire extinguishers and first aid not addressed", fix: "Specify fire extinguisher types and locations, and a first aid point, in the DCD fire safety drawing." },
    { reason: "Land or location not approved for temporary structure", fix: "Confirm the site is approved by DM or the relevant authority for temporary structure use before submission." },
    { reason: "Missing food establishment permit for F&B tents", fix: "Tents serving food and beverages require FCD approval alongside the DM and DCD temporary structure permits." },
    { reason: "Tent installation starting before permit received", fix: "Works may not commence until both DM and DCD permits are issued. Starting early can result in immediate removal orders." },
  ],
  faqs: [
    { q: "Is a DM permit required for a small event tent?", a: "Yes. Any temporary structure erected for commercial use or public assembly in Dubai requires a DM temporary structure permit, regardless of size." },
    { q: "How far in advance should I apply for a Ramadan tent permit?", a: "Apply at least 4–6 weeks before the planned installation date. Ramadan tent permits are in high demand and review queues can be longer during the pre-Ramadan period." },
    { q: "Does a temporary tent also need Civil Defense approval?", a: "Yes. Any enclosed or semi-enclosed temporary structure with occupancy requires DCD fire safety approval for means of escape, emergency lighting, and fire extinguisher provision." },
    { q: "Can food be served in a permitted tent?", a: "Yes, but a separate Food Control Department (FCD) permit for the food establishment activity must be obtained alongside the DM and DCD approvals." },
    { q: "Can Fermium Designs handle the full tent permit process?", a: "Yes. We prepare structural and fire safety drawings, manage DM and DCD applications simultaneously, obtain developer NOC where required, and handle the process through to permit issuance." },
    { q: "How long is a temporary structure permit valid?", a: "DM temporary structure permits are valid for the approved event or seasonal period — typically 1–6 months. Annual renewals are required for recurring seasonal structures." },
    { q: "What happens if a tent is installed without DM and DCD approval?", a: "Unapproved temporary structures are subject to immediate removal orders and fines from DM and DCD." },
    { q: "Can I re-use the same permit for the same tent next year?", a: "No. A new permit application must be submitted each season or event, as DM and DCD verify current compliance and site conditions annually." },
  ],
};

export default function TentPage() {
  return <ApprovalServicePage data={data} />;
}
