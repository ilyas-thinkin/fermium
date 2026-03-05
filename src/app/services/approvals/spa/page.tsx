import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spa & Wellness Center Approval Dubai | Fermium Designs",
  description:
    "Fermium Designs handles spa licensing and fit-out approvals for wellness centers, beauty salons, and spa facilities in Dubai — DHA, DCD, DM, and municipality compliance.",
  keywords: [
    "spa approval Dubai",
    "wellness center license Dubai",
    "beauty salon fit-out approval Dubai",
    "spa licensing Dubai",
    "DHA spa permit Dubai",
    "massage center approval Dubai",
    "spa fit-out Dubai Municipality",
    "wellness fit-out permit Dubai 2026",
  ],
  alternates: { canonical: "https://www.fermiumdesigns.ae/services/approvals/spa" },
  openGraph: {
    title: "Spa & Wellness Center Approval Dubai | Fermium Designs",
    description: "Expert spa fit-out approval and licensing management in Dubai — DHA, DCD, DM, and municipality compliance for wellness and beauty businesses.",
    url: "https://www.fermiumdesigns.ae/services/approvals/spa",
    siteName: "Fermium Designs",
    type: "website",
    locale: "en_AE",
  },
};

const data: ApprovalServiceData = {
  slug: "spa",
  title: "Spa & Wellness Center Approval",
  authority: "DED / DHA / DM",
  tagline: "Full spa licensing and fit-out approvals for wellness centers, beauty salons, and massage facilities in Dubai.",
  description:
    "Opening a spa, wellness center, or beauty salon in Dubai requires approvals from multiple authorities depending on the services offered and location. Day spas and wellness centers require DED licensing, Dubai Municipality fit-out approval, and Civil Defense clearance. Facilities offering any form of clinical or physiotherapy services additionally require Dubai Health Authority (DHA) licensing. The fit-out design must comply with hygiene, ventilation, plumbing, and safety standards specific to the wellness and beauty sector.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Spa & Wellness Facility Types",
      items: [
        "Day spas and hotel spas",
        "Beauty salons and nail studios",
        "Massage and body treatment centers",
        "Hammam and traditional wellness facilities",
      ],
    },
    {
      category: "Health & Aesthetics",
      items: [
        "Aesthetic clinics offering non-clinical treatments",
        "Physiotherapy and rehabilitation centers (DHA licensed)",
        "Floatation therapy and holistic wellness centers",
        "Fitness centers with spa or wellness components",
      ],
    },
    {
      category: "Project Scenarios",
      items: [
        "New spa or wellness center fit-out",
        "Renovation or expansion of existing facility",
        "Change of use from other retail or office use",
        "Adding spa services to an existing hotel or gym",
      ],
    },
  ],
  steps: [
    { step: "01", title: "Concept & Licensing Pre-Check", desc: "Confirm the services offered and determine which authorities are required: DED, DM, DHA, and DCD." },
    { step: "02", title: "Site Survey", desc: "Survey the unit to assess plumbing, drainage, ventilation, and layout suitability for spa operations." },
    { step: "03", title: "Facility Layout Design", desc: "Design treatment rooms, reception, changing areas, wet areas, storage, and staff zones to authority requirements." },
    { step: "04", title: "MEP Design", desc: "Prepare plumbing, drainage, HVAC, and electrical drawings for wet areas, steam rooms, Jacuzzis, and treatment equipment." },
    { step: "05", title: "Document Compilation", desc: "Compile trade license, tenancy contract, layout drawings, and any DHA or DED application documents." },
    { step: "06", title: "DM Application Submission", desc: "Submit fit-out permit application to Dubai Municipality via the Emarat portal with complete drawings and documents." },
    { step: "07", title: "DCD Application", desc: "Submit Civil Defense fire safety drawings for review and approval." },
    { step: "08", title: "DHA Application (if clinical)", desc: "Submit DHA facility license application via the Sheryan portal for facilities offering clinical treatments." },
    { step: "09", title: "Comment Resolution", desc: "Address comments from DM, DCD, and DHA; revise and resubmit as required." },
    { step: "10", title: "Inspections & License Issuance", desc: "Arrange DM, DCD, and DHA inspections. Receive all approvals and final facility permit upon successful completion." },
  ],
  documents: [
    {
      category: "Business & Property Documents",
      items: [
        "DED trade license (wellness or beauty sector activity)",
        "Tenancy contract for the facility space",
        "NOC from building owner or management",
        "Authorized signatory letter",
      ],
    },
    {
      category: "Technical Drawings",
      items: [
        "Architectural floor plan with all room types labeled",
        "Wet area plumbing and drainage layout",
        "HVAC and ventilation drawings",
        "Electrical layout for treatment equipment",
      ],
    },
    {
      category: "Compliance Documents",
      items: [
        "Civil Defense NOC (fire safety)",
        "DHA facility application (for clinical services)",
        "Equipment list and product specifications",
        "Infection control plan (for DHA-licensed facilities)",
      ],
    },
  ],
  timeline:
    "Spa and wellness fit-out approval timelines depend on the scope of services and which authorities are involved. DM fit-out permits for straightforward, complete submissions take 10–20 working days. DCD approvals run concurrently and typically take 5–15 working days. DHA licensing (for clinical facilities) adds 4–8 weeks to the overall timeline. A coordinated, parallel submission to all relevant authorities minimizes total project duration.",
  rejections: [
    { reason: "Wet areas not meeting drainage and waterproofing standards", fix: "Ensure all wet areas — showers, wet treatment rooms, steam rooms — have full tanking/waterproofing and floor drainage per DM standards." },
    { reason: "Inadequate ventilation for steam or humid areas", fix: "Provide dedicated HVAC/extraction for steam rooms, wet areas, and treatment rooms with appropriate air changes per hour." },
    { reason: "Treatment rooms lack sufficient plumbing provision", fix: "Each treatment room requiring water supply must have dedicated plumbing and drainage connections shown in drawings." },
    { reason: "Missing DCD fire safety approval for hood or sprinkler works", fix: "Obtain DCD approval for any fire system modifications before DM submission." },
    { reason: "DHA layout doesn't meet health facility guidelines", fix: "For clinical treatments, ensure clinical areas comply with DHA Health Facility Guidelines for space and infection control." },
    { reason: "Changing rooms and storage areas undersized", fix: "Allocate adequate changing, locker, and storage areas meeting DM and DHA minimum area requirements." },
    { reason: "Missing staff areas or service corridor separation", fix: "Provide clearly defined staff areas and service access routes separate from client-facing zones." },
  ],
  faqs: [
    { q: "Do all spas in Dubai need DHA approval?", a: "No. DHA approval is required only for spas offering clinical treatments such as physiotherapy or medical aesthetics. Day spas and beauty salons require DED, DM, and DCD approvals." },
    { q: "What type of DED license is required for a spa?", a: "A wellness center or beauty center license under the personal services sector is required from DED. The exact activity description affects which sub-approvals are needed." },
    { q: "Can I add a steam room or Jacuzzi to an existing spa?", a: "Yes, but modifications to MEP systems and wet areas require a new DM fit-out permit and potentially DCD and DEWA approvals." },
    { q: "Is Civil Defense approval mandatory for a spa?", a: "Yes. All commercial fit-outs including spas require DCD fire safety approval before opening." },
    { q: "Can Fermium Designs manage the full spa approval process?", a: "Yes. We prepare all technical drawings, manage DM, DCD, and DHA submissions, handle comment resolution, and coordinate inspections through to final approval." },
    { q: "How long does full spa licensing take from start to finish?", a: "For a non-clinical spa, typically 6–10 weeks from design to approval. For DHA-licensed clinical facilities, add 4–8 weeks for the healthcare licensing process." },
    { q: "Do hotel spas have different approval requirements?", a: "Hotel spas follow the same DM, DCD, and DHA requirements, but may also need hotel operator approvals and DET (Department of Economy and Tourism) clearances." },
    { q: "What happens if a spa opens without proper approvals?", a: "Operating without required approvals can result in immediate closure, fines, and difficulty obtaining a trade license renewal." },
  ],
};

export default function SpaPage() {
  return <ApprovalServicePage data={data} />;
}
