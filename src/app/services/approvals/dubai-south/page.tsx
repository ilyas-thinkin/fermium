import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dubai South Approval | Fit-Out & Construction Permits | Fermium Designs",
  description:
    "Fermium Designs handles Dubai South (Expo City) fit-out approvals, construction permits, and NOC applications for residential, commercial, and logistics developments in Dubai South.",
  keywords: [
    "Dubai South approval",
    "Dubai South fit-out permit",
    "Expo City Dubai NOC",
    "Dubai South construction permit",
    "Dubai South free zone approval",
    "Residential City Dubai South NOC",
    "Dubai South logistics fit-out",
    "fit-out approval Dubai South 2026",
  ],
  alternates: { canonical: "https://www.fermiumdesigns.ae/services/approvals/dubai-south" },
  openGraph: {
    title: "Dubai South Fit-Out Approval & NOC | Fermium Designs",
    description:
      "Expert Dubai South fit-out approvals and NOC management for Expo City, Residential City, and logistics zones in Dubai South.",
    url: "https://www.fermiumdesigns.ae/services/approvals/dubai-south",
    siteName: "Fermium Designs",
    type: "website",
    locale: "en_AE",
  },
};

const data: ApprovalServiceData = {
  slug: "dubai-south",
  title: "Dubai South Approval",
  authority: "Dubai South",
  tagline: "Fit-out permits, NOCs, and construction approvals for Expo City, Residential City, and logistics zones in Dubai South.",
  description:
    "Dubai South is a 145 square kilometre master-planned city built around Al Maktoum International Airport and the legacy of Expo 2020. The development includes Expo City Dubai, the Residential City, the Logistics District, the Aviation District, and the Business Park. Any fit-out, renovation, MEP modification, signage installation, or construction work within Dubai South's various districts requires a formal Dubai South approval or NOC before works commence. Dubai South operates its own regulatory authority with distinct approval requirements from Dubai Municipality.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7L12 12L22 7L12 2Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 17L12 22L22 17" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12L12 17L22 12" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Dubai South Districts",
      items: [
        "Expo City Dubai — pavilions, offices, retail, and F&B",
        "Residential City — villas, apartments, and townhouses",
        "Logistics District — warehouses and distribution centers",
        "Business Park and Aviation District — offices and commercial units",
      ],
    },
    {
      category: "Business & Property Types",
      items: [
        "Commercial tenants and business license holders",
        "Residential property owners and tenants",
        "Logistics and warehousing operators",
        "Hospitality, retail, and F&B businesses",
      ],
    },
    {
      category: "Project Types",
      items: [
        "New fit-out for leased or owned units",
        "Renovation, reconfiguration, or refurbishment works",
        "MEP modifications — electrical, HVAC, and plumbing changes",
        "Signage, branding, and external facade works",
      ],
    },
  ],
  steps: [
    { step: "01", title: "Scope Definition & Pre-Check", desc: "Identify the Dubai South district and confirm applicable authority requirements. Dubai South, DCD, and DEWA requirements vary by zone and project type." },
    { step: "02", title: "Site Survey", desc: "Survey the unit, collect as-built drawings where available, and check existing MEP conditions." },
    { step: "03", title: "Drawing Preparation", desc: "Prepare architectural and MEP drawings per Dubai South technical standards and submission format requirements." },
    { step: "04", title: "Document Compilation", desc: "Assemble all required documents: Dubai South license, tenancy contract, contractor credentials, and supporting approvals." },
    { step: "05", title: "Dubai South Application Submission", desc: "Submit the complete application to Dubai South's regulatory or community management office with all supporting documents." },
    { step: "06", title: "Technical Review", desc: "Dubai South reviews the application for compliance with zone requirements, building standards, and technical guidelines." },
    { step: "07", title: "Comment Resolution", desc: "Address queries or revision requests from Dubai South. Revise and resubmit as needed." },
    { step: "08", title: "NOC / Permit Issuance", desc: "Receive Dubai South NOC or works permit. Works can proceed within the stated conditions and validity period." },
    { step: "09", title: "Works Execution", desc: "Execute works strictly per approved drawings and NOC conditions by approved contractors." },
    { step: "10", title: "Close-Out Inspection", desc: "Submit as-built drawings and arrange close-out inspection with Dubai South if required for final sign-off." },
  ],
  documents: [
    {
      category: "Company & Property Documents",
      items: [
        "Dubai South or free zone trade license",
        "Tenancy contract or title deed",
        "Authorized signatory letter",
        "Landlord or building management NOC",
      ],
    },
    {
      category: "Technical Drawings",
      items: [
        "Architectural floor plans — existing and proposed",
        "MEP drawings — electrical, HVAC, plumbing modifications",
        "Signage artwork and specifications (if applicable)",
        "Structural drawings (for structural modifications)",
      ],
    },
    {
      category: "Contractor & Compliance",
      items: [
        "Contractor valid trade license",
        "Contractor public liability insurance",
        "Engineer or consultant credentials",
        "Method statement for proposed works",
      ],
    },
    {
      category: "Supporting Authority Approvals",
      items: [
        "Dubai Civil Defense (DCD) NOC — for fire safety system works",
        "DEWA approval — for electrical load or MEP modifications",
        "DM permit — where applicable depending on project type",
        "Aviation authority clearance — for works near airside areas (if applicable)",
      ],
    },
  ],
  timeline:
    "Dubai South approval timelines depend on the district, project scope, and submission completeness. Standard NOCs from complete submissions are typically reviewed within 5–15 working days. Commercial fit-outs in Expo City or large-scale logistics installations may take 3–5 weeks, particularly where DCD or DEWA coordination is required. Residential renovation NOCs for straightforward scopes can be processed faster. A complete, well-coordinated first submission is the most effective way to minimize delays.",
  rejections: [
    { reason: "Works scope not clearly defined in drawings", fix: "Ensure drawings clearly show existing and proposed conditions with all changes annotated and a written scope of works included." },
    { reason: "Contractor not meeting Dubai South requirements", fix: "Verify contractor holds a valid UAE trade license, adequate liability insurance, and is acceptable to Dubai South for the proposed works type." },
    { reason: "Missing Civil Defense pre-approval for fire systems", fix: "Obtain DCD approval for any works affecting fire alarm, suppression, or life safety systems before the Dubai South submission." },
    { reason: "Drawings not complying with Dubai South formatting standards", fix: "Ensure all drawings include required title blocks, correct scale, and meet Dubai South's submission format requirements." },
    { reason: "Incomplete or expired company documents", fix: "Verify all licenses, tenancy agreements, and authorization letters are current and correctly reflect the applicant entity." },
    { reason: "Signage not meeting Dubai South or Expo City design guidelines", fix: "Review the applicable signage manual for the district before finalizing artwork, dimensions, and materials." },
    { reason: "MEP changes without load or capacity verification", fix: "Include electrical load calculations and HVAC assessment confirming existing systems can support proposed modifications." },
    { reason: "Missing utility approvals for MEP modifications", fix: "Coordinate DEWA or relevant utility approvals alongside the Dubai South application for electrical or water system changes." },
  ],
  faqs: [
    { q: "Is Dubai South a free zone?", a: "Parts of Dubai South operate as a free zone (the Business Park, Logistics District, and Aviation District), while the Residential City is a non-free-zone area. Approval requirements differ depending on the district your property is in." },
    { q: "Is Dubai South approval separate from Dubai Municipality?", a: "Yes. Dubai South operates its own regulatory authority for approvals within its districts. DM approval is generally not required for works inside Dubai South — however, DCD and DEWA approvals may still be needed." },
    { q: "Do I need a separate Civil Defense approval?", a: "Yes. Dubai Civil Defense approval for fire and life safety works is required separately and is typically a prerequisite for the Dubai South submission." },
    { q: "What is Expo City Dubai — does it have separate approval requirements?", a: "Expo City Dubai (formerly Expo 2020 site) is within Dubai South and follows Dubai South's regulatory process. Specific design guidelines apply given the character and heritage of the Expo site." },
    { q: "Can Fermium Designs manage Dubai South approvals?", a: "Yes. We prepare all required technical drawings, compile documents, submit applications, handle comment resolution, and manage the process through to NOC or permit issuance." },
    { q: "How long is a Dubai South NOC valid?", a: "Typically 3–6 months from date of issue. Extensions can be requested if works are ongoing." },
    { q: "What happens if works start without Dubai South approval?", a: "Unauthorized works can result in stop-work orders, fines, and mandatory reinstatement of all unauthorized changes at the tenant or owner's cost." },
    { q: "Do residential owners in Residential City also need approval?", a: "Yes. Fit-out and renovation works in Residential City units also require Dubai South approval before works commence." },
  ],
};

export default function DubaiSouthPage() {
  return <ApprovalServicePage data={data} />;
}
