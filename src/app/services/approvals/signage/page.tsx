import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signage Approval Dubai | RTA & DM Sign Permits | Fermium Designs",
  description:
    "Fermium Designs manages external and internal signage approvals in Dubai — RTA outdoor sign permits, Dubai Municipality fascia approvals, and developer NOC for storefronts and commercial spaces.",
  keywords: [
    "signage approval Dubai",
    "outdoor sign permit Dubai",
    "RTA signage NOC Dubai",
    "Dubai Municipality signage approval",
    "fascia sign permit Dubai",
    "billboard approval Dubai",
    "shop front signage permit Dubai",
    "commercial signage Dubai 2026",
  ],
  alternates: { canonical: "https://www.fermiumdesigns.ae/services/approvals/signage" },
  openGraph: {
    title: "Signage Approval Dubai | RTA & DM Sign Permits | Fermium Designs",
    description: "Expert signage permit management in Dubai — RTA outdoor sign NOC, DM fascia approvals, and developer sign permits for commercial spaces.",
    url: "https://www.fermiumdesigns.ae/services/approvals/signage",
    siteName: "Fermium Designs",
    type: "website",
    locale: "en_AE",
  },
};

const data: ApprovalServiceData = {
  slug: "signage",
  title: "Signage Approval",
  authority: "RTA / DM / Developer",
  tagline: "Outdoor sign permits, fascia approvals, and developer NOC for storefronts, billboards, and commercial signage across Dubai.",
  description:
    "Installing signage in Dubai — whether a simple fascia sign above a shopfront, a rooftop LED display, a directional billboard, or a pylon sign — requires formal approval from the relevant authority before installation. Signage approvals in Dubai involve RTA (for signs near or over public roads), Dubai Municipality (for fascia and building-mounted signs in non-free-zone areas), and master developer approval (for properties in managed communities such as Emaar, Nakheel, or DAMAC developments). Free zone properties require their own zone authority approval. Fermium Designs manages the full signage approval process.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Business Types",
      items: [
        "Retail shops and showrooms requiring fascia signage",
        "Restaurants and F&B outlets with external branding",
        "Office buildings with corporate identity signage",
        "Hotels and hospitality properties with rooftop or entrance signs",
      ],
    },
    {
      category: "Signage Types",
      items: [
        "Fascia signs — illuminated or non-illuminated shopfront signs",
        "Projecting and blade signs — perpendicular to building facade",
        "Rooftop and high-rise building signage",
        "Billboards, pylons, and freestanding outdoor signs",
      ],
    },
    {
      category: "Project Scenarios",
      items: [
        "New sign installation for a new business opening",
        "Sign replacement or rebranding of existing signage",
        "Adding illuminated or digital LED signs to existing facade",
        "Directional and wayfinding signage for a development",
      ],
    },
  ],
  steps: [
    { step: "01", title: "Sign Type & Authority Check", desc: "Identify the sign type and location to determine which authorities are required: RTA, DM, developer, or free zone authority." },
    { step: "02", title: "Site Survey", desc: "Survey the sign location, measure facade dimensions, and check any existing sign permissions or restrictions." },
    { step: "03", title: "Sign Design", desc: "Prepare sign artwork, dimensions, materials, and installation method drawings to the applicable authority's design guidelines." },
    { step: "04", title: "Structural Design (if required)", desc: "Prepare structural mounting calculations for large, projecting, or rooftop signs confirming safe installation to the structure." },
    { step: "05", title: "Document Compilation", desc: "Compile trade license, tenancy contract, sign drawings, structural calculations, and authority-specific application forms." },
    { step: "06", title: "Authority Application Submission", desc: "Submit to RTA via eNOC for road-adjacent signs, to DM via Emarat for building-mounted signs, and to developer for community properties." },
    { step: "07", title: "Technical Review", desc: "Authorities review sign dimensions, illumination, setbacks, and structural adequacy against their standards." },
    { step: "08", title: "Comment Resolution", desc: "Address reviewer comments on sign size, design, or mounting. Revise artwork or structural drawings and resubmit." },
    { step: "09", title: "Permit Issuance", desc: "Receive signage permit from all relevant authorities. Proceed with sign fabrication and installation." },
    { step: "10", title: "Installation & Close-Out", desc: "Install sign per approved drawings and conditions. Arrange any required post-installation inspection." },
  ],
  documents: [
    {
      category: "Business Documents",
      items: [
        "Trade license (business)",
        "Tenancy contract or title deed",
        "NOC from building owner or landlord",
        "Developer NOC (for community properties)",
      ],
    },
    {
      category: "Sign Design & Technical",
      items: [
        "Sign artwork with dimensions, colors (RAL/Pantone), and materials",
        "Sign elevation drawing showing position on facade",
        "Illumination details — LED type, luminance level, operating hours",
        "Structural mounting details and calculations (for large signs)",
      ],
    },
    {
      category: "Compliance Documents",
      items: [
        "Electrical installation drawings (for illuminated signs)",
        "Sign contractor trade license and credentials",
        "DEWA or electrical connection approval (for lit signs)",
        "Civil Defense clearance (for large electronic displays)",
      ],
    },
  ],
  timeline:
    "Signage approval timelines vary by sign type and the number of authorities involved. DM fascia sign approvals for complete, well-prepared submissions typically take 5–15 working days. RTA approvals for road-adjacent signs can take 7–15 working days. Developer NOC adds 5–10 working days. Coordinating parallel submissions to all required authorities is the most effective way to minimize total approval time.",
  rejections: [
    { reason: "Sign dimensions exceed authority size limits", fix: "Review DM, RTA, or developer signage guidelines for maximum permitted sign dimensions at the specific location before finalizing design." },
    { reason: "Illumination level not meeting luminance standards", fix: "Ensure illuminated sign luminance levels comply with DM's outdoor lighting standards to avoid light pollution non-compliance." },
    { reason: "Sign drawing not including all required details", fix: "Submit complete artwork including dimensions, colors, materials, fixing method, and position on facade elevation." },
    { reason: "Missing structural calculations for projecting sign", fix: "All signs projecting from the facade or installed at height require structural calculations confirming safe fixing to the building structure." },
    { reason: "Signage in community without developer NOC", fix: "In developer-managed communities (Emaar, Nakheel, DAMAC, etc.), developer NOC must be obtained before any other authority submission." },
    { reason: "Sign design not matching community branding guidelines", fix: "Review the developer's signage design manual for font, color, and design restrictions before preparing artwork." },
    { reason: "Electrical connection for illuminated sign not addressed", fix: "Include DEWA or building electrical approval for the illuminated sign power supply in the submission package." },
  ],
  faqs: [
    { q: "Do I need RTA approval for all outdoor signs in Dubai?", a: "RTA approval is required for signs visible from or adjacent to RTA-managed roads, including fascia signs on main road frontages, billboards, pylons, and directional signs." },
    { q: "Is DM approval different from RTA approval for signage?", a: "Yes. DM approval covers the building-mounted aspect of the sign (fascia, structure). RTA approval covers the road-facing and visibility aspects. Both may be required for the same sign." },
    { q: "Do free zone properties need DM signage approval?", a: "Free zone properties use their own zone authority for signage approval (e.g., JAFZA, TECOM, DIEZ). DM approval is not required in these zones." },
    { q: "Can I display a digital LED sign on my shopfront?", a: "Digital or LED animated signs require specific approval from DM and/or RTA for luminance levels and animation frequency. Not all locations permit animated displays." },
    { q: "Can Fermium Designs manage signage approvals?", a: "Yes. We prepare sign artwork to authority standards, compile documents, manage RTA, DM, and developer submissions, and handle comment resolution through to permit issuance." },
    { q: "How long is a signage permit valid?", a: "DM sign permits are typically valid for 1–3 years and must be renewed. RTA permits vary by sign type. Permits expire if the sign is removed or the business vacates." },
    { q: "What happens if I install signage without approval?", a: "Unapproved signage can be subject to removal orders, fines from DM or RTA, and reinstatement at the business owner's cost." },
    { q: "Do I need a separate permit for each sign?", a: "Generally yes — each sign type and location requires a separate approval. A single application may cover multiple signs on the same facade if submitted together." },
  ],
};

export default function SignagePage() {
  return <ApprovalServicePage data={data} />;
}
