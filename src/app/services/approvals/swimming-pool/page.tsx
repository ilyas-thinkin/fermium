import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swimming Pool Approval Dubai | DM & Authority Permits | Fermium Designs",
  description:
    "Fermium Designs manages swimming pool construction and fit-out approvals in Dubai — Dubai Municipality permits, structural approvals, health and safety compliance for private and commercial pools.",
  keywords: [
    "swimming pool approval Dubai",
    "pool construction permit Dubai",
    "Dubai Municipality pool permit",
    "commercial pool approval UAE",
    "private pool permit Dubai",
    "hotel pool approval Dubai",
    "swimming pool structural approval Dubai 2026",
  ],
  alternates: { canonical: "https://www.fermiumdesigns.ae/services/approvals/swimming-pool" },
  openGraph: {
    title: "Swimming Pool Approval Dubai | Fermium Designs",
    description: "Expert swimming pool construction and compliance approvals in Dubai — DM, structural, and health authority permits for private and commercial pools.",
    url: "https://www.fermiumdesigns.ae/services/approvals/swimming-pool",
    siteName: "Fermium Designs",
    type: "website",
    locale: "en_AE",
  },
};

const data: ApprovalServiceData = {
  slug: "swimming-pool",
  title: "Swimming Pool Approval",
  authority: "DM / DHA / Developer",
  tagline: "Swimming pool construction permits, structural approvals, and health compliance for private villas, hotels, and commercial facilities in Dubai.",
  description:
    "Constructing or significantly modifying a swimming pool in Dubai requires approvals from Dubai Municipality (DM) for the structural and civil works, as well as compliance with health and safety regulations covering pool water quality, safety barriers, and lifeguard requirements for public or commercial pools. Private villa pools require DM building permits and master developer NOC. Hotel pools and commercial aquatic facilities additionally require DHA or relevant health authority clearance. Fermium Designs manages the full approval process from structural design to health compliance.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Residential Pool Projects",
      items: [
        "Private villa pools — new construction or replacement",
        "Apartment building shared pools — rooftop or podium level",
        "Townhouse and community pool additions",
        "Villa renovation involving pool modification or expansion",
      ],
    },
    {
      category: "Commercial Pool Projects",
      items: [
        "Hotel and resort swimming pools",
        "Health clubs, gyms, and wellness centers with pools",
        "School and educational facility pools",
        "Community and residential compound shared pools",
      ],
    },
    {
      category: "Project Scenarios",
      items: [
        "New pool construction in a villa or development",
        "Pool refurbishment — shell repair, tiling, coping",
        "Pool system upgrade — filtration, heating, automation",
        "Compliance rectification for an existing non-compliant pool",
      ],
    },
  ],
  steps: [
    { step: "01", title: "Scope & Authority Check", desc: "Confirm pool type, location, and required approvals: DM building permit, master developer NOC, and DHA health clearance (for commercial pools)." },
    { step: "02", title: "Site Survey & Soil Assessment", desc: "Survey the site, assess soil conditions, and confirm structural feasibility for the proposed pool type and dimensions." },
    { step: "03", title: "Structural & Civil Design", desc: "Prepare pool structural drawings: shell design, waterproofing, drainage, backfill, and retaining details." },
    { step: "04", title: "MEP Design", desc: "Design filtration, circulation, heating, chemical dosing, lighting, and electrical systems for the pool and plant room." },
    { step: "05", title: "Document Compilation", desc: "Compile structural calculations, drawings, NOC documents, and any developer-specific requirements." },
    { step: "06", title: "DM Building Permit Application", desc: "Submit the pool construction permit application to Dubai Municipality via Emarat portal with full drawing package." },
    { step: "07", title: "Developer NOC (if required)", desc: "Submit NOC application to the master developer (Emaar, Nakheel, DAMAC, etc.) if the pool is in a managed community." },
    { step: "08", title: "Comment Resolution", desc: "Address DM structural review comments or developer queries. Revise and resubmit as needed." },
    { step: "09", title: "Construction & Testing", desc: "Execute pool construction per approved drawings. Commission filtration and chemical systems with testing records." },
    { step: "10", title: "DM / DHA Inspection & Completion", desc: "DM inspects the completed pool structure. DHA inspects water quality and safety provisions for commercial pools. Completion certificate issued." },
  ],
  documents: [
    {
      category: "Ownership & Property Documents",
      items: [
        "Title deed / property ownership document",
        "Plot or building details (DM plot number)",
        "NOC from master developer (for community properties)",
        "Authorized signatory or owner ID",
      ],
    },
    {
      category: "Structural & Civil Drawings",
      items: [
        "Pool shell structural drawings and details",
        "Soil investigation / geotechnical report (for large pools)",
        "Structural calculations signed by licensed engineer",
        "Waterproofing and tanking specification",
      ],
    },
    {
      category: "MEP & Systems",
      items: [
        "Filtration, circulation, and chemical system design",
        "Electrical and lighting layout",
        "Pool plant room design drawings",
        "DEWA approval (for electrical connection to pump room)",
      ],
    },
    {
      category: "Health & Safety (Commercial Pools)",
      items: [
        "Water quality management plan",
        "Lifeguard and safety equipment provision",
        "Pool safety barrier and access control design",
        "DHA or health authority compliance documentation",
      ],
    },
  ],
  timeline:
    "DM building permit for a private villa pool typically takes 10–20 working days for a complete, well-prepared submission. Developer NOC (if required) adds 5–15 working days. Commercial pool approvals involving DHA health compliance take longer — typically 4–8 weeks total for all approvals. Pool construction itself takes 6–14 weeks depending on size and complexity. Planning all approvals in parallel with construction prep minimizes the overall project timeline.",
  rejections: [
    { reason: "Structural calculations insufficient for soil conditions", fix: "Commission a geotechnical investigation and ensure structural calculations account for actual soil bearing capacity and groundwater." },
    { reason: "Waterproofing specification not meeting DM standards", fix: "Specify a DM-accepted waterproofing system with full application methodology and product documentation." },
    { reason: "Pool setback distances not met", fix: "Ensure pool setbacks from property boundaries, structures, and utilities comply with DM plot regulations and community rules." },
    { reason: "Filtration and water quality system undersized", fix: "Size filtration turnover and chemical dosing systems per DM and WHO pool water quality standards for the pool volume and bather load." },
    { reason: "Missing safety barriers for residential pool", fix: "All private pools must have compliant safety fencing or barriers to prevent child access — include these in the drawing submission." },
    { reason: "DHA requirements not met for commercial pool", fix: "Commercial pools must demonstrate water testing protocols, lifeguard provision, and signage as required by DHA health authority." },
    { reason: "DEWA approval not obtained for pump room electrical", fix: "Pool pump room electrical supply requires DEWA approval — include this in the overall project submission." },
  ],
  faqs: [
    { q: "Is a DM permit required for a private villa pool?", a: "Yes. Any new pool construction in Dubai requires a DM building permit, even for private residential villas. Community NOC from the master developer is also required in managed communities." },
    { q: "Do hotel pools need DHA approval?", a: "Yes. Commercial swimming pools in hotels, health clubs, and facilities open to the public require health authority clearance — typically from DHA — for water quality and safety standards." },
    { q: "Can I add a pool to a rooftop terrace?", a: "Rooftop pools require additional structural analysis of the existing building slab, as well as DM approval and developer NOC where applicable." },
    { q: "What safety fencing is required for a private pool?", a: "Dubai Municipality requires all private pools to have compliant safety barriers (typically 1.2m minimum height) to restrict unsupervised child access." },
    { q: "Can Fermium Designs manage the full pool approval process?", a: "Yes. We prepare structural and MEP drawings, manage DM and developer submissions, coordinate DHA requirements for commercial pools, and handle the process through to completion certificate." },
    { q: "How long does it take to get DM approval for a villa pool?", a: "For a complete, well-prepared submission, DM structural review typically takes 10–20 working days. Developer NOC adds 5–15 working days." },
    { q: "What water quality standards apply to pools in Dubai?", a: "Dubai Municipality and DHA follow WHO and international standards for pool water chemistry including pH, chlorine, clarity, and microbiological quality." },
    { q: "Is a completion certificate required before using the pool?", a: "Yes. A DM completion inspection is required before the pool can be used, and for commercial pools, DHA health clearance is additionally required." },
  ],
};

export default function SwimmingPoolPage() {
  return <ApprovalServicePage data={data} />;
}
