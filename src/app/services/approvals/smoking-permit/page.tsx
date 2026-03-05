import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designated Smoking Area Approval Dubai | Fermium Designs",
  description:
    "Fermium Designs handles designated smoking area (DSA) approvals and smoking permits for hotels, restaurants, and hospitality venues in Dubai — DM compliance and fit-out.",
  keywords: [
    "designated smoking area Dubai",
    "smoking permit Dubai",
    "DSA approval Dubai Municipality",
    "smoking room approval Dubai",
    "hotel smoking area permit Dubai",
    "smoking area fit-out Dubai",
    "ventilation smoking area Dubai 2026",
  ],
  alternates: { canonical: "https://www.fermiumdesigns.ae/services/approvals/smoking-permit" },
  openGraph: {
    title: "Designated Smoking Area Approval Dubai | Fermium Designs",
    description: "Expert designated smoking area (DSA) approvals and fit-out management for hospitality and commercial venues in Dubai.",
    url: "https://www.fermiumdesigns.ae/services/approvals/smoking-permit",
    siteName: "Fermium Designs",
    type: "website",
    locale: "en_AE",
  },
};

const data: ApprovalServiceData = {
  slug: "smoking-permit",
  title: "Designated Smoking Area (DSA) Approval",
  authority: "Dubai Municipality",
  tagline: "Designated smoking area permits, ventilation compliance, and smoking room approvals for hotels, restaurants, and commercial venues in Dubai.",
  description:
    "Dubai prohibits smoking in all enclosed public spaces and workplaces under Federal Law No. 15 of 2009 and Dubai Municipality regulations. However, hospitality venues, hotels, and certain establishments may apply to Dubai Municipality for a Designated Smoking Area (DSA) permit — a formally approved, enclosed, separately ventilated space within the establishment where smoking is permitted. The DSA must meet strict physical separation, ventilation, signage, and access control requirements before a permit is granted.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Hospitality & F&B",
      items: [
        "Hotels and hotel apartments with designated smoking floors or rooms",
        "Restaurants with enclosed smoking sections or terraces",
        "Bars, lounges, and nightclubs with smoking areas",
        "Airport lounges and transit facilities",
      ],
    },
    {
      category: "Commercial & Office",
      items: [
        "Corporate offices with dedicated smoking rooms",
        "Industrial facilities with designated outdoor smoking zones",
        "Retail malls with approved smoking areas",
        "Mixed-use developments requiring tenant smoking compliance",
      ],
    },
    {
      category: "Project Scenarios",
      items: [
        "New DSA fit-out in an existing venue",
        "Upgrading an existing unapproved smoking room to DM standards",
        "Adding a smoking room during a full venue fit-out",
        "Annual DSA permit renewal and compliance update",
      ],
    },
  ],
  steps: [
    { step: "01", title: "Eligibility & Pre-Check", desc: "Confirm eligibility for a DSA permit based on establishment type, location, and Dubai Municipality regulations." },
    { step: "02", title: "Site Survey", desc: "Survey the proposed smoking area location to assess structural feasibility, HVAC capacity, and proximity to non-smoking areas." },
    { step: "03", title: "DSA Layout Design", desc: "Design the smoking room with required physical enclosure, negative pressure system, access control, and signage provisions." },
    { step: "04", title: "Ventilation Engineering", desc: "Engineer a dedicated ventilation system providing negative air pressure within the DSA with external exhaust discharge per DM standards." },
    { step: "05", title: "Document Compilation", desc: "Compile trade license, tenancy contract, DSA layout drawings, ventilation design, and DM application forms." },
    { step: "06", title: "DM Application Submission", desc: "Submit the DSA permit application to Dubai Municipality's Public Health and Safety Department with complete documentation." },
    { step: "07", title: "Technical Review", desc: "DM reviews the DSA design, ventilation specifications, and compliance with UAE Federal Law and DM smoking regulations." },
    { step: "08", title: "Comment Resolution", desc: "Address DM reviewer comments on ventilation, enclosure, or signage. Revise and resubmit as required." },
    { step: "09", title: "Fit-Out Execution", desc: "Complete DSA construction and ventilation installation in accordance with approved DM drawings." },
    { step: "10", title: "DM Inspection & Permit", desc: "DM inspects the completed DSA. DSA permit issued upon successful inspection confirming compliance." },
  ],
  documents: [
    {
      category: "Business Documents",
      items: [
        "Trade license (establishment)",
        "Tenancy contract or title deed",
        "Authorized signatory letter",
        "DM food establishment permit (for F&B venues)",
      ],
    },
    {
      category: "Technical Drawings",
      items: [
        "DSA floor plan showing enclosure, access, and dimensions",
        "Ventilation system design — negative pressure, exhaust rates",
        "MEP drawings for DSA ventilation installation",
        "Signage layout and design details",
      ],
    },
    {
      category: "Compliance Documents",
      items: [
        "Civil Defense NOC (fire safety for enclosed room)",
        "Ventilation contractor credentials",
        "Air quality/ventilation performance statement",
        "Proof of non-smoking signage in non-DSA areas",
      ],
    },
  ],
  timeline:
    "DSA permit processing typically takes 3–6 weeks from a complete submission to DM. The ventilation installation is usually the critical path — design, procurement, and installation of a dedicated DSA ventilation system can take 2–4 weeks. DM inspection and permit issuance typically take 1–2 weeks after installation is complete. Annual DSA permit renewals must be submitted before expiry to avoid an operating gap.",
  rejections: [
    { reason: "DSA not fully enclosed", fix: "The smoking area must be a fully enclosed, sealed room with no open connections to non-smoking areas — no open windows or gaps in walls." },
    { reason: "Ventilation not achieving negative pressure", fix: "The DSA ventilation system must extract more air than is supplied, creating negative pressure so smoke cannot escape to adjacent areas." },
    { reason: "Exhaust air not discharging externally", fix: "All extracted air from the DSA must be discharged directly to the exterior — recirculation is not permitted." },
    { reason: "DSA accessible to minors", fix: "Access to the DSA must be physically controlled and restricted to adults. Age verification signage and access measures are required." },
    { reason: "Missing smoking and no-entry signage", fix: "Both the DSA entrance and all non-smoking areas must have clearly visible and correctly worded signage per DM standards." },
    { reason: "DSA area exceeds maximum proportion of establishment", fix: "DM limits the maximum floor area that can be designated as smoking. Confirm permitted DSA area ratio before design." },
    { reason: "Civil Defense approval not obtained for enclosed room", fix: "Enclosed rooms require DCD fire safety clearance — sprinkler coverage, fire alarm, and emergency lighting must be verified." },
  ],
  faqs: [
    { q: "Is smoking allowed in any indoor spaces in Dubai?", a: "Smoking is prohibited in all enclosed public places. Approved Designated Smoking Areas (DSA) are the only exception — these require a formal DM permit." },
    { q: "Can any business get a DSA permit?", a: "Not all establishments are eligible. Hotels, certain hospitality venues, and specific facility types can apply. Eligibility depends on establishment type and DM criteria." },
    { q: "What is negative pressure ventilation and why is it required?", a: "Negative pressure means more air is extracted than supplied, preventing any smoke from leaking out of the DSA into surrounding non-smoking areas. It is a mandatory DM requirement." },
    { q: "How large can a DSA be?", a: "DM limits the DSA to a maximum percentage of the total establishment floor area. Your Fermium consultant can advise on the applicable limit for your establishment type." },
    { q: "Can Fermium Designs handle DSA permit applications?", a: "Yes. We design DSA layouts and ventilation systems, prepare all required drawings, manage the DM submission, and handle the inspection process through to permit issuance." },
    { q: "How often does the DSA permit need to be renewed?", a: "DSA permits are typically renewed annually. DM may inspect during renewal to confirm continued compliance." },
    { q: "What happens if smoking occurs outside the approved DSA?", a: "DM and public health inspectors can issue on-the-spot fines to the establishment and individuals for smoking outside the approved DSA." },
    { q: "Is a shisha permit the same as a DSA permit?", a: "No. Shisha permits and DSA permits are separate authorisations. A shisha permit specifically covers hookah/shisha service; a DSA permit covers cigarette smoking areas. Separate applications are required for each." },
  ],
};

export default function SmokingPermitPage() {
  return <ApprovalServicePage data={data} />;
}
