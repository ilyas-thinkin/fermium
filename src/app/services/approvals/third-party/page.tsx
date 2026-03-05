import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Third Party Consultant Approvals Dubai | Peer Review & NOC | Fermium Designs",
  description:
    "Fermium Designs coordinates third party consultant approvals in Dubai — structural peer review, fire safety consultant NOC, MEP review, and technical sign-offs required by authorities.",
  keywords: [
    "third party consultant approval Dubai",
    "structural peer review Dubai",
    "fire safety consultant NOC Dubai",
    "third party inspection Dubai",
    "independent engineer review Dubai",
    "technical sign-off Dubai",
    "approved consultant NOC Dubai 2026",
  ],
  alternates: { canonical: "https://www.fermiumdesigns.ae/services/approvals/third-party" },
  openGraph: {
    title: "Third Party Consultant Approvals Dubai | Fermium Designs",
    description: "Expert coordination of third party consultant approvals — structural peer review, fire safety NOC, and technical sign-offs for Dubai authority submissions.",
    url: "https://www.fermiumdesigns.ae/services/approvals/third-party",
    siteName: "Fermium Designs",
    type: "website",
    locale: "en_AE",
  },
};

const data: ApprovalServiceData = {
  slug: "third-party",
  title: "Third Party Consultant Approvals",
  authority: "DM / DCD / Authorities",
  tagline: "Structural peer review, fire safety consultant NOC, MEP technical sign-offs, and independent inspections required for Dubai authority submissions.",
  description:
    "Many authority approvals in Dubai require review, certification, or sign-off from an approved third party consultant — an independent licensed engineer or specialist approved by the relevant authority. This includes structural peer review for high-rise or complex structures, fire safety consultant sign-off for DCD submissions, MEP coordination reports, geotechnical peer review, and façade engineering sign-off. Dubai Municipality, Civil Defense, and other authorities mandate third party review to provide an additional layer of technical verification before granting permits. Fermium Designs coordinates all required third party reviews as part of the overall approval process.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Structural Projects",
      items: [
        "High-rise buildings requiring DM structural peer review",
        "Complex structures with non-standard structural systems",
        "Basement and deep foundation projects requiring geotechnical peer review",
        "Façade engineering requiring independent specialist sign-off",
      ],
    },
    {
      category: "Fire Safety Projects",
      items: [
        "Large commercial developments requiring DCD fire safety consultant review",
        "High-rise buildings needing fire engineering reports",
        "Healthcare facilities requiring fire safety peer review",
        "Performance-based fire safety designs requiring independent validation",
      ],
    },
    {
      category: "MEP & Specialist Reviews",
      items: [
        "MEP coordination certification for complex multi-discipline projects",
        "Acoustic and vibration assessments required by authorities",
        "Environmental and sustainability certifications (Estidama, LEED)",
        "Energy compliance reports and modelling reviews",
      ],
    },
  ],
  steps: [
    { step: "01", title: "Identify Required Reviews", desc: "Determine which third party reviews are required by the relevant authority for the specific project type, size, and location." },
    { step: "02", title: "Select Approved Consultants", desc: "Identify and appoint DM, DCD, or authority-approved third party consultants registered for the required review discipline." },
    { step: "03", title: "Prepare Review Package", desc: "Compile the technical document package for submission to the third party reviewer: drawings, calculations, specifications, and reports." },
    { step: "04", title: "Third Party Submission", desc: "Submit the technical package to the third party consultant for independent review and assessment." },
    { step: "05", title: "Third Party Review Process", desc: "The approved consultant reviews the technical package against applicable codes, standards, and authority requirements." },
    { step: "06", title: "Comment Resolution", desc: "Address reviewer comments, queries, or required design changes. Revise technical documents and resubmit to reviewer as required." },
    { step: "07", title: "Third Party Sign-Off", desc: "Receive the third party consultant's review certificate, letter of no objection, or technical endorsement." },
    { step: "08", title: "Authority Submission", desc: "Include the third party sign-off documents in the main authority submission package (DM, DCD, etc.)." },
    { step: "09", title: "Authority Review", desc: "The authority reviews the submission including the third party certificates. Third party endorsement significantly improves approval prospects." },
    { step: "10", title: "Permit Issuance", desc: "Receive the authority permit or NOC, with third party review certificates forming part of the approved project file." },
  ],
  documents: [
    {
      category: "Third Party Review Documents",
      items: [
        "Third party structural peer review certificate",
        "Fire safety consultant review letter or endorsement",
        "MEP coordination review certificate",
        "Geotechnical peer review report",
      ],
    },
    {
      category: "Technical Package for Review",
      items: [
        "Structural drawings and calculations",
        "Fire safety system design drawings and fire engineering report",
        "MEP drawings and coordination reports",
        "Façade engineering calculations (for complex facades)",
      ],
    },
    {
      category: "Compliance Certifications",
      items: [
        "Energy compliance modelling report",
        "Acoustic assessment report",
        "Environmental impact assessment (where required)",
        "Sustainability certification documentation (LEED, Estidama)",
      ],
    },
  ],
  timeline:
    "Third party review timelines depend on the complexity of the technical package and the reviewer's availability. Structural peer reviews for complex projects typically take 2–4 weeks. Fire safety consultant reviews can take 1–3 weeks. MEP coordination reviews vary by project scope. Building in third party review time early in the project programme is essential — these reviews are often on the critical path to authority submission. Fermium Designs coordinates all reviews to run in parallel where possible.",
  rejections: [
    { reason: "Third party consultant not on the authority's approved list", fix: "Verify that the appointed reviewer is registered with DM, DCD, or the relevant authority for the required review discipline before engaging them." },
    { reason: "Technical package submitted for review is incomplete", fix: "Ensure all required drawings, calculations, and specifications are included in the review package before submission to the third party consultant." },
    { reason: "Design does not comply with applicable codes", fix: "Resolve all code non-compliance issues before submitting for third party review — reviewers cannot endorse designs with clear code violations." },
    { reason: "Third party certificate not recognised by authority", fix: "Use the authority's standard endorsement format and letter template. Some authorities have specific certificate formats that must be used." },
    { reason: "Review comments not fully addressed before authority submission", fix: "All third party review comments must be resolved and confirmed by the reviewer before the endorsed certificate is used in the authority submission." },
    { reason: "Multiple review cycles causing project delays", fix: "Submit a complete, well-coordinated package at first submission to minimize review cycles. Pre-coordination meetings with reviewers can help identify issues early." },
  ],
  faqs: [
    { q: "What is a third party consultant approval?", a: "A third party consultant approval is a review and sign-off by an independent licensed specialist (approved by DM, DCD, or other authority) confirming that a technical design meets applicable codes and standards." },
    { q: "Is third party peer review mandatory for all projects in Dubai?", a: "Not all projects require it. DM mandates structural peer review for high-rise buildings and complex structures. DCD may require fire engineering peer review for large or performance-based designs." },
    { q: "Who are the approved third party structural reviewers for DM?", a: "DM maintains a list of approved structural peer review consultants. Fermium Designs works with registered reviewers and can advise on appropriate selection for your project." },
    { q: "Can the design consultant also be the third party reviewer?", a: "No. Third party review must be conducted by an independent consultant with no involvement in the original design to maintain objectivity." },
    { q: "Does third party sign-off guarantee authority approval?", a: "Third party endorsement significantly improves the approval prospect and is required by the authority, but the authority conducts its own technical review independently." },
    { q: "Can Fermium Designs coordinate third party reviews?", a: "Yes. We identify required reviews, prepare the technical package, manage the submission to approved reviewers, resolve comments, and incorporate sign-off certificates into authority submissions." },
    { q: "How does third party review affect the project timeline?", a: "Third party review adds 2–4 weeks to the approval timeline for complex reviews. Planning for this in the programme from the outset avoids surprises and delays." },
    { q: "Is a fire engineering report the same as a third party review?", a: "A fire engineering report is a technical document produced as part of the design. Third party review is the independent assessment of that report. Both may be required by DCD for complex projects." },
  ],
};

export default function ThirdPartyPage() {
  return <ApprovalServicePage data={data} />;
}
