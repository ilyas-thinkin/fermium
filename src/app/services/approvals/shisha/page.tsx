import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shisha Café License & Approval Dubai | Fermium Designs",
  description:
    "Fermium Designs handles shisha café licensing and fit-out approvals in Dubai — DM, DCD, ventilation compliance, and designated smoking area approvals for cafés and restaurants.",
  keywords: [
    "shisha café license Dubai",
    "shisha permit Dubai",
    "shisha café fit-out approval",
    "hookah lounge license Dubai",
    "Dubai Municipality shisha approval",
    "shisha ventilation compliance Dubai",
    "designated smoking area Dubai",
    "shisha café Dubai 2026",
  ],
  alternates: { canonical: "https://www.fermiumdesigns.ae/services/approvals/shisha" },
  openGraph: {
    title: "Shisha Café License & Approval Dubai | Fermium Designs",
    description: "Expert shisha café licensing and fit-out approvals in Dubai — ventilation compliance, DM, DCD, and designated smoking area permits.",
    url: "https://www.fermiumdesigns.ae/services/approvals/shisha",
    siteName: "Fermium Designs",
    type: "website",
    locale: "en_AE",
  },
};

const data: ApprovalServiceData = {
  slug: "shisha",
  title: "Shisha Café License & Approval",
  authority: "DM / DED / DCD",
  tagline: "End-to-end shisha café licensing, ventilation compliance, and designated smoking area approvals for cafés and restaurants in Dubai.",
  description:
    "Operating a shisha café or offering shisha services in Dubai requires a dedicated series of approvals beyond a standard food and beverage fit-out. Dubai Municipality regulates shisha service under strict ventilation, designated smoking area, and public health requirements. Operators must obtain a shisha permit from DM's Public Health and Safety Department, in addition to the standard food establishment permit, Civil Defense clearance, and DED trade license with the shisha activity added. The physical fit-out must meet specific ventilation, air quality, and designated area standards.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Business Types",
      items: [
        "Standalone shisha lounges and hookah cafés",
        "Restaurants adding shisha service to existing operations",
        "Hotel F&B outlets offering shisha on terraces or in lounges",
        "Rooftop venues with shisha as part of the concept",
      ],
    },
    {
      category: "Approval Scenarios",
      items: [
        "New shisha café fit-out in a fresh unit",
        "Adding shisha service to an existing licensed restaurant",
        "Renovation of existing shisha lounge to meet new DM standards",
        "Outdoor terrace or rooftop shisha area setup",
      ],
    },
    {
      category: "Key Requirements",
      items: [
        "Dedicated and physically separated shisha area",
        "High-capacity ventilation meeting DM air quality standards",
        "Shisha activity added to DED trade license",
        "Annual shisha permit renewal from Dubai Municipality",
      ],
    },
  ],
  steps: [
    { step: "01", title: "Pre-Check & Activity Confirmation", desc: "Confirm the shisha permit requirement, applicable DM regulations, and DED trade license activity additions needed." },
    { step: "02", title: "Site Survey", desc: "Survey the space to assess existing ventilation capacity, structural capability for exhaust systems, and designated area feasibility." },
    { step: "03", title: "Layout Design", desc: "Design the shisha area with required separation from non-smoking sections, ventilation zones, and access routes." },
    { step: "04", title: "Ventilation Engineering", desc: "Design and specify high-capacity exhaust and fresh air supply systems meeting DM's ventilation standards for shisha areas." },
    { step: "05", title: "Document Compilation", desc: "Compile DED license with shisha activity, tenancy contract, floor plan, ventilation drawings, and DM application forms." },
    { step: "06", title: "DM Public Health Application", desc: "Submit the shisha permit application to Dubai Municipality's Public Health and Safety Department with all required documents." },
    { step: "07", title: "FCD Application", desc: "Submit food establishment permit application alongside the shisha application if a new food outlet or if FCD approval is needed." },
    { step: "08", title: "DCD Application", desc: "Submit Civil Defense fire safety drawings for the space including the shisha area." },
    { step: "09", title: "Comment Resolution", desc: "Address DM, FCD, or DCD comments. Revise ventilation designs or layout if required and resubmit." },
    { step: "10", title: "Inspection & Permit Issuance", desc: "DM inspects ventilation performance and designated area compliance. Shisha permit issued upon passing inspection." },
  ],
  documents: [
    {
      category: "Business & Licensing Documents",
      items: [
        "DED trade license with shisha café activity",
        "Tenancy contract for the establishment",
        "Food establishment permit (FCD)",
        "Landlord NOC for shisha operations",
      ],
    },
    {
      category: "Technical Drawings",
      items: [
        "Floor plan showing designated shisha area and separation",
        "Ventilation design — exhaust rates, fresh air supply, duct routing",
        "MEP drawings for ventilation system installation",
        "Outdoor/terrace plan if shisha served outside",
      ],
    },
    {
      category: "Compliance Documents",
      items: [
        "Civil Defense NOC (fire safety)",
        "Ventilation contractor credentials and system specifications",
        "Air quality compliance statement",
        "DM shisha permit renewal (for annual renewal submissions)",
      ],
    },
  ],
  timeline:
    "Shisha café approval timelines vary depending on whether it is a new establishment or an add-on to an existing licensed restaurant. New establishments completing all approvals (DM, FCD, DCD, and DED) typically take 6–12 weeks from design to opening. Adding shisha to an existing licensed restaurant can take 3–6 weeks for DM shisha permit approval, provided the ventilation works can be completed quickly. Ventilation installation is often the critical path item.",
  rejections: [
    { reason: "Ventilation system not meeting DM air change requirements", fix: "Design and install a ventilation system that meets DM's minimum air changes per hour for shisha areas. Engage a qualified MEP engineer for system design." },
    { reason: "Shisha area not physically separated from non-smoking sections", fix: "Provide a fully enclosed, clearly demarcated shisha zone with no direct air connection to non-smoking dining areas." },
    { reason: "Missing shisha activity on DED trade license", fix: "Add the shisha café or hookah lounge activity to the DED trade license before applying for DM shisha permit." },
    { reason: "FCD food establishment permit not in place", fix: "Obtain or update the food establishment permit for F&B service before the DM shisha permit can be issued." },
    { reason: "Exhaust ducts not terminating at correct location", fix: "Shisha exhaust must discharge at DM-approved locations — typically exterior without affecting adjacent units or public areas." },
    { reason: "Civil Defense approval not obtained for fire systems in shisha area", fix: "Ensure DCD fire safety approval covers the shisha area, particularly for sprinkler and fire alarm provisions." },
    { reason: "Shisha area accessible to minors", fix: "Shisha areas must be strictly access-controlled to prevent minors from entering. Signage and physical barriers are required by DM regulations." },
  ],
  faqs: [
    { q: "Is a separate permit required to serve shisha in Dubai?", a: "Yes. A dedicated shisha permit from Dubai Municipality's Public Health and Safety Department is required in addition to the food establishment permit and trade license." },
    { q: "Can any restaurant add shisha service?", a: "Restaurants can add shisha service but must obtain a DM shisha permit, add the activity to their DED license, and meet ventilation and designated area requirements." },
    { q: "What ventilation standard does DM require for shisha areas?", a: "DM requires a minimum of 10–15 air changes per hour for enclosed shisha areas, with dedicated exhaust systems separate from general HVAC." },
    { q: "Is shisha permitted on outdoor terraces?", a: "Shisha can be served on outdoor terraces subject to DM approval. The terrace must meet proximity requirements from other establishments and public areas." },
    { q: "How often must the shisha permit be renewed?", a: "Dubai Municipality shisha permits require annual renewal, including verification of continued ventilation compliance." },
    { q: "Can Fermium Designs manage the full shisha licensing process?", a: "Yes. We coordinate the DED activity addition, design the ventilation system, prepare all drawings, and manage DM, FCD, and DCD submissions through to permit issuance." },
    { q: "Is shisha allowed in all areas of Dubai?", a: "Shisha service is regulated by DM in non-free-zone areas. Free zones may have their own rules. Some communities or building types may prohibit shisha operations entirely." },
    { q: "What are the penalties for serving shisha without a permit?", a: "Operating without a valid DM shisha permit can result in immediate closure, significant fines, and cancellation of the food establishment permit." },
  ],
};

export default function ShishaPage() {
  return <ApprovalServicePage data={data} />;
}
