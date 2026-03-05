import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emaar NOC & Fit-Out Approval | Fermium Designs Dubai",
  description:
    "Fermium Designs manages Emaar NOC applications for fit-out, renovation, MEP works, and signage in Emaar properties across Dubai — Downtown, Dubai Hills, Dubai Creek Harbour, and more.",
  keywords: [
    "Emaar NOC Dubai",
    "Emaar fit-out approval",
    "Emaar property renovation permit",
    "Emaar community approval",
    "Dubai Hills fit-out NOC",
    "Downtown Dubai fit-out permit",
    "Emaar approval consultant Dubai",
  ],
  alternates: { canonical: "https://www.fermiumdesigns.ae/services/approvals/emaar" },
  openGraph: {
    title: "Emaar NOC & Fit-Out Approval | Fermium Designs",
    description:
      "Expert Emaar NOC management for fit-out and renovation works in Downtown Dubai, Dubai Hills, Dubai Creek Harbour, and all Emaar developments.",
    url: "https://www.fermiumdesigns.ae/services/approvals/emaar",
    siteName: "Fermium Designs",
    type: "website",
    locale: "en_AE",
  },
};

const data: ApprovalServiceData = {
  slug: "emaar",
  title: "Emaar NOC & Fit-Out Approval",
  authority: "Emaar",
  tagline: "Developer NOC and fit-out permits for properties in Downtown Dubai, Dubai Hills, Dubai Creek Harbour, and all Emaar communities.",
  description:
    "Emaar Properties is one of Dubai's largest master developers, with a portfolio spanning Downtown Dubai, Dubai Marina, Dubai Hills Estate, Dubai Creek Harbour, Arabian Ranches, and many other premium communities. Any fit-out, renovation, MEP modification, signage installation, or structural change in an Emaar-managed property requires a formal Emaar NOC (No Objection Certificate) before works can commence. This applies to both residential and commercial properties including offices, retail units, restaurants, and hospitality establishments.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Residential Properties",
      items: [
        "Apartments in Downtown Dubai, Dubai Marina, and Dubai Creek Harbour",
        "Villas in Dubai Hills Estate, Arabian Ranches, and The Meadows",
        "Townhouses in Emaar townhouse communities",
        "Serviced apartments and hotel apartments in Emaar properties",
      ],
    },
    {
      category: "Commercial Properties",
      items: [
        "Retail units in Dubai Mall and Emaar-managed malls",
        "Office spaces in Emaar Business Park and commercial towers",
        "Restaurants and F&B outlets in Emaar communities",
        "Hospitality and hotel properties under Emaar Hospitality",
      ],
    },
    {
      category: "Project Types",
      items: [
        "New fit-out for a leased or owned unit",
        "Renovation, reconfiguration, or refurbishment works",
        "MEP modifications — HVAC, electrical, plumbing changes",
        "Signage, branding, or external facade works",
      ],
    },
  ],
  steps: [
    { step: "01", title: "Scope Definition & Pre-Check", desc: "Confirm the exact nature of works and identify which Emaar community-specific guidelines apply to the property." },
    { step: "02", title: "Site Survey", desc: "Survey the unit, collect as-built drawings if available, and assess existing MEP capacity and layout conditions." },
    { step: "03", title: "Drawing Preparation", desc: "Prepare required technical drawings — architectural layout, MEP modifications, and signage artwork as applicable." },
    { step: "04", title: "Document Compilation", desc: "Compile all required documents: property ownership, tenancy contract, contractor credentials, and insurance." },
    { step: "05", title: "Emaar NOC Application", desc: "Submit the complete application to Emaar's community management or relevant Emaar property management portal." },
    { step: "06", title: "Emaar Technical Review", desc: "Emaar's team reviews the proposed works against community guidelines, building rules, and technical standards." },
    { step: "07", title: "Comment Resolution", desc: "Address any Emaar queries, conditions, or revision requests. Revise and resubmit documents as required." },
    { step: "08", title: "NOC Issuance", desc: "Receive the Emaar NOC. Works can proceed within the stated conditions and validity period." },
    { step: "09", title: "Works Execution", desc: "Execute works strictly per approved drawings and Emaar NOC conditions, using Emaar-accepted contractors." },
    { step: "10", title: "Close-Out & Handback", desc: "Notify Emaar upon completion. Arrange close-out inspection and submit as-built drawings if required." },
  ],
  documents: [
    {
      category: "Property & Identity Documents",
      items: [
        "Title deed / ownership document",
        "Valid tenancy contract (for tenants)",
        "Owner authorization letter (for tenant applications)",
        "Emirates ID of applicant / authorized signatory",
      ],
    },
    {
      category: "Contractor Documents",
      items: [
        "Contractor valid trade license",
        "Contractor public liability insurance",
        "Engineer or consultant credentials",
        "Method statement for the works",
      ],
    },
    {
      category: "Technical Drawings",
      items: [
        "Architectural floor plan — existing and proposed",
        "MEP modification drawings (electrical, HVAC, plumbing)",
        "Signage design or branding artwork (if applicable)",
        "Structural drawings (for structural changes)",
      ],
    },
    {
      category: "Supporting Authority Approvals",
      items: [
        "Dubai Civil Defense (DCD) NOC — for fire system works",
        "DEWA approval — for electrical load changes or modifications",
        "Dubai Municipality (DM) permit — where applicable by scope",
        "Any other NOC required by Emaar's community management",
      ],
    },
  ],
  timeline:
    "Emaar NOC processing times vary by community, property type, and submission completeness. Standard residential renovation NOCs from complete submissions are typically reviewed within 5–15 working days. Commercial fit-outs or projects involving multiple authority approvals can take 3–6 weeks. Submissions with missing documents, incomplete drawings, or scope that requires clarification will take longer. A complete, first-time submission is always the fastest path to NOC issuance.",
  rejections: [
    { reason: "Incomplete document package", fix: "Ensure all ownership/tenancy documents, contractor credentials, and technical drawings are included before submission." },
    { reason: "Drawings not matching actual unit conditions", fix: "Conduct a thorough site survey and ensure all drawings accurately reflect the current unit layout and MEP configuration." },
    { reason: "Contractor not meeting Emaar requirements", fix: "Verify the contractor holds a valid UAE trade license, carries adequate public liability insurance, and is accepted by Emaar's community management." },
    { reason: "Works scope exceeds Emaar community guidelines", fix: "Review Emaar's specific fit-out guide for the community before designing the scope. Structural changes and external modifications often have stricter restrictions." },
    { reason: "Signage not complying with Emaar branding standards", fix: "Obtain Emaar's signage design manual and ensure all artwork, dimensions, and placement conform before submission." },
    { reason: "Missing third-party authority NOCs", fix: "Obtain DCD, DEWA, or DM approvals required for the scope before or alongside the Emaar NOC application." },
    { reason: "Expired or incorrect property documents", fix: "Verify all title deeds, trade licenses, and tenancy agreements are current and match the applicant details." },
    { reason: "MEP changes without load or capacity verification", fix: "Include electrical load calculations and HVAC capacity analysis confirming existing infrastructure can support proposed changes." },
  ],
  faqs: [
    { q: "Does every renovation in an Emaar property require a NOC?", a: "Most structural, MEP, layout, and signage changes require an Emaar NOC. Purely cosmetic works such as painting and furniture replacement typically do not — but confirm with Emaar's community management for your specific property." },
    { q: "Can a tenant apply for an Emaar NOC without the owner?", a: "Yes, tenants can apply but must provide a written authorization letter from the property owner as part of the application package." },
    { q: "Which Emaar communities require a NOC for fit-out?", a: "All Emaar-managed developments require a NOC for fit-out and renovation works, including Downtown Dubai, Dubai Hills Estate, Dubai Creek Harbour, Arabian Ranches, The Meadows, Dubai Marina, and Emaar commercial properties." },
    { q: "Is the Emaar NOC the only approval I need?", a: "No. Depending on the scope of works, you may also need Dubai Civil Defense (DCD), DEWA, and Dubai Municipality (DM) approvals. The Emaar NOC is the developer-level clearance." },
    { q: "How long is an Emaar NOC valid?", a: "Emaar NOCs are typically valid for 3–6 months from date of issue. If works are not completed within the validity period, an extension or renewal must be requested." },
    { q: "What happens if I start works without an Emaar NOC?", a: "Unauthorized works in Emaar communities can result in immediate stop-work orders, community fines, and mandatory reinstatement of all unauthorized changes at the unit owner's cost." },
    { q: "Can Fermium Designs handle the Emaar NOC application?", a: "Yes. We prepare all required technical drawings, compile documents, submit the application to Emaar, handle comments, and manage the process through to NOC issuance." },
    { q: "Do I need a separate NOC for signage changes in an Emaar retail unit?", a: "Yes. Even signage-only changes require formal Emaar approval before installation. External signage may also require RTA or DM approval depending on location." },
  ],
};

export default function EmaarPage() {
  return <ApprovalServicePage data={data} />;
}
