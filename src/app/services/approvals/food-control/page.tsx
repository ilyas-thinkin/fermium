import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food Control Department (FCD) Approval Dubai | Fermium Designs",
  description:
    "Fermium Designs manages Food Control Department approvals for restaurants, cafés, cloud kitchens, and food outlets in Dubai — kitchen layout, ventilation, DM food license compliance.",
  keywords: [
    "Food Control Department approval Dubai",
    "FCD permit Dubai",
    "restaurant kitchen approval Dubai",
    "food establishment permit Dubai",
    "DM food license Dubai",
    "cloud kitchen approval Dubai",
    "café fit-out food approval",
    "food outlet permit Dubai 2026",
  ],
  alternates: { canonical: "https://www.fermiumdesigns.ae/services/approvals/food-control" },
  openGraph: {
    title: "Food Control Department (FCD) Approval Dubai | Fermium Designs",
    description: "Expert FCD approval management for restaurants, cafés, and food outlets in Dubai — kitchen design, ventilation, and municipality compliance.",
    url: "https://www.fermiumdesigns.ae/services/approvals/food-control",
    siteName: "Fermium Designs",
    type: "website",
    locale: "en_AE",
  },
};

const data: ApprovalServiceData = {
  slug: "food-control",
  title: "Food Control Department (FCD) Approval",
  authority: "Food Control Department",
  tagline: "Food establishment permits, kitchen layout approvals, and hygiene compliance for restaurants, cafés, and food outlets in Dubai.",
  description:
    "The Food Control Department (FCD) — operating under Dubai Municipality — is the regulatory body responsible for food safety, hygiene standards, and licensing of all food-handling establishments in Dubai. Any new restaurant, café, cloud kitchen, food court kiosk, catering facility, or food retail outlet must obtain FCD approval before commencing fit-out works and before applying for a trade license. FCD reviews kitchen layouts, food preparation zones, ventilation systems, waste management, and hygiene compliance as part of the approval process.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Food Establishment Types",
      items: [
        "Restaurants, cafés, and casual dining outlets",
        "Cloud kitchens and dark kitchens",
        "Food court kiosks and quick-service restaurants",
        "Catering companies and food production facilities",
      ],
    },
    {
      category: "Additional Food Businesses",
      items: [
        "Bakeries, pastry shops, and confectioneries",
        "Supermarket deli and food counters",
        "Food trucks and mobile food units",
        "Hospital, school, and institutional catering",
      ],
    },
    {
      category: "Project Scenarios",
      items: [
        "New food outlet fit-out in a leased unit",
        "Renovation or expansion of existing kitchen",
        "Change of concept or menu type requiring layout changes",
        "Compliance rectification for an existing food establishment",
      ],
    },
  ],
  steps: [
    { step: "01", title: "Concept & Pre-Check", desc: "Confirm the food establishment type, cuisine concept, and applicable FCD requirements for the specific activity and location." },
    { step: "02", title: "Site Survey", desc: "Survey the unit to assess the existing kitchen infrastructure, ventilation, drainage, and layout constraints." },
    { step: "03", title: "Kitchen Layout Design", desc: "Design the kitchen layout per FCD requirements — food flow separation, cold and dry storage zoning, prep areas, cooking line, and warewashing." },
    { step: "04", title: "MEP & Ventilation Design", desc: "Prepare HVAC/kitchen ventilation, drainage, and MEP drawings meeting FCD and Dubai Municipality standards." },
    { step: "05", title: "Document Compilation", desc: "Compile the application package: trade license, tenancy contract, layout drawings, equipment list, and food safety plan." },
    { step: "06", title: "FCD Application Submission", desc: "Submit via Dubai Municipality's Sanad portal with the complete drawings and document package." },
    { step: "07", title: "FCD Technical Review", desc: "FCD reviews the kitchen design, food handling zones, ventilation, and hygiene compliance." },
    { step: "08", title: "Comment Resolution", desc: "Address FCD reviewer comments, revise layouts, and resubmit as required." },
    { step: "09", title: "FCD Initial Approval", desc: "Receive FCD initial approval. Fit-out works can commence in accordance with approved drawings." },
    { step: "10", title: "FCD Inspection & License", desc: "FCD inspects the completed fit-out. Upon passing, the food establishment permit and DM food license are issued." },
  ],
  documents: [
    {
      category: "Business & Property Documents",
      items: [
        "Trade license (food sector activity or initial approval)",
        "Tenancy contract for the establishment",
        "NOC from landlord or building management",
        "Authorized signatory letter",
      ],
    },
    {
      category: "Technical Drawings",
      items: [
        "Kitchen layout plan — food flow, zones, equipment placement",
        "MEP drawings — ventilation, drainage, electrical",
        "Grease trap design and specifications",
        "Exhaust and fresh air ventilation drawings",
      ],
    },
    {
      category: "Compliance Documents",
      items: [
        "Equipment list with specifications",
        "Food safety management plan (HACCP outline)",
        "Civil Defense NOC (for fire system works)",
        "DM fit-out or building permit (where applicable)",
      ],
    },
  ],
  timeline:
    "FCD approval timelines typically range from 2–4 weeks for complete, well-prepared first submissions. Projects with complex kitchen designs, non-standard food activities, or missing documents can take 4–8 weeks. The FCD inspection after fit-out completion adds additional time. Ensuring the kitchen layout meets FCD food flow and hygiene standards from the outset is critical — redesigns are costly and time-consuming.",
  rejections: [
    { reason: "Kitchen layout does not achieve food flow separation", fix: "Design the kitchen with clear separation between raw, prep, cooking, and service zones per FCD food safety standards." },
    { reason: "Inadequate or non-compliant ventilation design", fix: "Ensure kitchen exhaust and fresh air systems meet FCD specifications for the cooking load, including grease trap and exhaust duct requirements." },
    { reason: "Insufficient storage — cold, dry, or waste", fix: "Provide adequate dedicated storage zones: refrigerated, dry goods, and separate waste holding areas per FCD requirements." },
    { reason: "Grease trap not included or undersized", fix: "Include a correctly sized grease trap in the drainage design connected to all kitchen drainage outlets." },
    { reason: "Equipment list incomplete or not meeting standards", fix: "Submit a full equipment list with specifications confirming all items meet applicable food safety and NSF/commercial grade standards." },
    { reason: "Missing Civil Defense NOC for hood suppression system", fix: "Kitchen hood fire suppression systems require DCD approval before FCD fit-out approval will be granted." },
    { reason: "Drawings not showing actual unit dimensions", fix: "Ensure all drawings are based on an accurate site survey with correct unit measurements and ceiling heights." },
  ],
  faqs: [
    { q: "Is FCD approval required before fitting out a restaurant?", a: "Yes. FCD approval must be obtained before commencing fit-out works and is required to obtain the food establishment permit and DM trade license." },
    { q: "What is the difference between FCD approval and a trade license?", a: "FCD approval is the technical clearance for the physical food establishment. The trade license is the business operating license issued by DED or the relevant authority after FCD clears the fit-out." },
    { q: "Do cloud kitchens need FCD approval?", a: "Yes. Cloud kitchens and dark kitchens are food preparation facilities and must comply with all FCD kitchen design and hygiene requirements." },
    { q: "Is a HACCP plan mandatory for FCD approval?", a: "A food safety management plan (HACCP-based) is required as part of the FCD application and must be implemented in the facility." },
    { q: "Can Fermium Designs prepare FCD-compliant kitchen layouts?", a: "Yes. We design kitchen layouts meeting FCD food flow, zoning, ventilation, and drainage requirements, and manage the full FCD approval process." },
    { q: "What happens if my kitchen fails FCD inspection?", a: "FCD will issue a list of deficiencies. All items must be rectified before a re-inspection is scheduled." },
    { q: "Does the concept or cuisine type affect FCD requirements?", a: "Yes. Different food activities (raw meat handling, live seafood, high-volume frying, etc.) have specific zoning and ventilation requirements." },
    { q: "Is FCD approval required for a café serving only beverages?", a: "Any establishment preparing or serving food or beverages to the public requires FCD clearance, including beverage-only cafés." },
  ],
};

export default function FoodControlPage() {
  return <ApprovalServicePage data={data} />;
}
