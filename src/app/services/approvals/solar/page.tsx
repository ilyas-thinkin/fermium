import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Panel Installation Approval Dubai | DEWA & Authority Permits | Fermium Designs",
  description:
    "Fermium Designs manages solar panel installation approvals in Dubai — DEWA net metering registration, DM structural clearance, and developer NOC for rooftop solar systems.",
  keywords: [
    "solar panel approval Dubai",
    "DEWA solar approval",
    "solar installation permit Dubai",
    "net metering Dubai",
    "rooftop solar Dubai permit",
    "DEWA Shams Dubai solar",
    "solar PV approval Dubai 2026",
    "solar panels villa Dubai",
  ],
  alternates: { canonical: "https://www.fermiumdesigns.ae/services/approvals/solar" },
  openGraph: {
    title: "Solar Panel Installation Approval Dubai | Fermium Designs",
    description: "Expert DEWA solar approval and net metering registration for rooftop solar installations on villas and commercial buildings in Dubai.",
    url: "https://www.fermiumdesigns.ae/services/approvals/solar",
    siteName: "Fermium Designs",
    type: "website",
    locale: "en_AE",
  },
};

const data: ApprovalServiceData = {
  slug: "solar",
  title: "Solar Panel Installation Approval",
  authority: "DEWA / DM / Developer",
  tagline: "DEWA net metering registration, rooftop solar approvals, and structural clearances for solar PV installations on villas and commercial buildings in Dubai.",
  description:
    "Installing solar photovoltaic (PV) panels in Dubai requires formal approval from DEWA (Dubai Electricity and Water Authority) under the Shams Dubai programme, which governs rooftop solar installations and net metering for residential and commercial properties. Beyond DEWA, structural approval from Dubai Municipality is required to confirm the existing roof can safely support the additional load, and a developer NOC is needed for properties in master-planned communities. Fermium Designs manages the complete solar approval process from structural assessment to DEWA commissioning.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Residential Applications",
      items: [
        "Private villa owners installing rooftop solar panels",
        "Apartment building owners adding communal solar systems",
        "Villa community developers integrating solar into new builds",
        "Homeowners seeking DEWA net metering and bill reduction",
      ],
    },
    {
      category: "Commercial Applications",
      items: [
        "Warehouses and industrial units with large rooftop areas",
        "Retail and commercial buildings seeking energy cost savings",
        "Hotels and hospitality properties targeting sustainability goals",
        "Schools, hospitals, and institutional facilities",
      ],
    },
    {
      category: "Project Types",
      items: [
        "New rooftop solar PV system installation",
        "Expansion of existing solar system capacity",
        "Solar carport or ground-mount installation",
        "Battery storage integration with existing solar system",
      ],
    },
  ],
  steps: [
    { step: "01", title: "Site Assessment & Feasibility", desc: "Assess rooftop area, solar irradiance, shading, and existing DEWA meter capacity to determine system size and feasibility." },
    { step: "02", title: "System Design", desc: "Design the solar PV system: panel layout, inverter sizing, cable routing, earthing, and connection to the existing DB." },
    { step: "03", title: "Structural Assessment", desc: "Assess rooftop structural capacity to confirm it can support the panel weight and mounting system loads." },
    { step: "04", title: "DEWA Shams Dubai Application", desc: "Submit the Shams Dubai application via DEWA's online portal with system design, single-line diagram, and required documents." },
    { step: "05", title: "DM Structural Clearance (if required)", desc: "Obtain Dubai Municipality structural clearance for the additional roof load for large or commercial installations." },
    { step: "06", title: "Developer NOC (if required)", desc: "Obtain developer NOC for the installation from the community master developer (Emaar, Nakheel, DAMAC, etc.)." },
    { step: "07", title: "DEWA Technical Review", desc: "DEWA reviews the electrical design, inverter specifications, grid connection point, and protection relay requirements." },
    { step: "08", title: "Comment Resolution", desc: "Address any DEWA technical or document queries. Revise system design or documentation as required." },
    { step: "09", title: "Installation", desc: "Install the solar PV system by a DEWA-approved solar contractor per the approved design and DEWA specifications." },
    { step: "10", title: "DEWA Inspection & Net Meter Activation", desc: "DEWA inspects the completed installation. Upon passing, the bi-directional net meter is installed and activated." },
  ],
  documents: [
    {
      category: "Ownership & Property Documents",
      items: [
        "Title deed or property ownership document",
        "Trade license (for commercial applications)",
        "Existing DEWA account details and meter information",
        "Developer NOC (for community properties)",
      ],
    },
    {
      category: "Technical Design Documents",
      items: [
        "Solar PV system single-line diagram (SLD)",
        "Panel layout and roof mounting plan",
        "Inverter specifications and data sheets",
        "System sizing calculations and yield report",
      ],
    },
    {
      category: "Structural & Compliance",
      items: [
        "Structural assessment report for roof loading",
        "Earthing and lightning protection design",
        "DEWA-approved contractor credentials",
        "Material submittals for panels, inverters, and mounting system",
      ],
    },
  ],
  timeline:
    "DEWA Shams Dubai approval timelines for residential villa installations typically take 3–6 weeks from application to net meter activation for complete, well-prepared submissions. Commercial installations with larger systems or requiring DM structural clearance can take 6–10 weeks. Installation itself typically takes 1–5 days depending on system size. DEWA net meter installation after approval takes 1–2 weeks. A complete, accurate first submission is the fastest route.",
  rejections: [
    { reason: "Single-line diagram does not meet DEWA requirements", fix: "Prepare the SLD per DEWA's Shams Dubai technical guidelines including all required protection devices, inverter specifications, and grid connection details." },
    { reason: "Inverter not on DEWA approved list", fix: "Only use inverters on DEWA's approved product list. Verify product approval before purchasing equipment." },
    { reason: "Rooftop structural capacity not confirmed", fix: "Provide a structural engineer's assessment confirming the roof can safely carry the panel and mounting system dead loads." },
    { reason: "Missing anti-islanding protection design", fix: "Include anti-islanding protection relay design in the SLD to prevent unsafe grid export when DEWA supply is interrupted." },
    { reason: "Contractor not DEWA-approved for solar works", fix: "Engage a DEWA-approved solar installation contractor — unlicensed contractors cannot complete the Shams Dubai installation process." },
    { reason: "System size exceeds DEWA net metering eligibility limits", fix: "Confirm DEWA's maximum eligible system capacity for the meter type and electricity tariff before finalizing system design." },
    { reason: "Developer NOC missing for community property", fix: "Obtain written developer NOC before DEWA submission for any property in a master-planned community." },
  ],
  faqs: [
    { q: "What is the Shams Dubai programme?", a: "Shams Dubai is DEWA's net metering initiative that allows property owners to install rooftop solar panels and export surplus electricity to the grid, receiving a credit against their consumption." },
    { q: "How much can I save with solar panels in Dubai?", a: "Savings depend on system size, consumption, and tariff. Residential systems typically generate returns over 5–8 years, with panels lasting 25+ years." },
    { q: "Do I need DM approval for solar panels on my villa?", a: "For most residential installations, DEWA Shams Dubai approval and a developer NOC (if in a community) are sufficient. Large commercial systems or those requiring structural modifications may need DM clearance." },
    { q: "Can I install solar without developer permission in a gated community?", a: "No. Installing solar panels on properties in developer-managed communities without an NOC is a community rules violation and can result in removal orders." },
    { q: "Can Fermium Designs manage the full DEWA solar approval process?", a: "Yes. We assess feasibility, design the system, prepare DEWA documentation, manage Shams Dubai submissions, obtain developer NOC, and coordinate installation and commissioning." },
    { q: "What happens after DEWA approves my solar system?", a: "DEWA schedules a site inspection. After passing, DEWA installs a bi-directional smart meter and activates net metering on your account." },
    { q: "Is battery storage included in the Shams Dubai programme?", a: "Battery storage can be added to solar systems, but DEWA has specific requirements for battery integration. Confirm current DEWA guidelines before specifying storage." },
    { q: "How long do solar panels last in Dubai's climate?", a: "Quality solar panels are rated for 25–30 years. Dubai's high irradiance provides excellent generation, though panel cleaning is more frequent due to dust." },
  ],
};

export default function SolarPage() {
  return <ApprovalServicePage data={data} />;
}
