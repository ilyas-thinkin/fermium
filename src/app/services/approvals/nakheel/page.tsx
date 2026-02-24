import ApprovalServicePage from "@/components/approvals/ApprovalServicePage";
import type { ApprovalServiceData } from "@/components/approvals/ApprovalServicePage";

const data: ApprovalServiceData = {
  slug: "nakheel",
  title: "Nakheel NOC",
  authority: "Nakheel",
  tagline: "Community NOC for fit-outs, renovations, and modifications in Nakheel-managed properties across Dubai.",
  description:
    "Nakheel NOC is the developer/community approval required before starting any fit-out, renovation, or modification works in properties within Nakheel-managed communities. This includes Palm Jumeirah, Jumeirah Park, Al Furjan, International City, Ibn Battuta Mall, and other Nakheel developments. The NOC confirms your proposed works comply with Nakheel's community guidelines, building rules, and master developer requirements.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7L12 12L22 7L12 2Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 17L12 22L22 17" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12L12 17L22 12" />
    </svg>
  ),
  whoNeeds: [
    {
      category: "Property Types",
      items: ["Palm Jumeirah villas and apartments", "Jumeirah Park and Al Furjan residences", "International City commercial and residential units", "Ibn Battuta Mall and Discovery Gardens retail"],
    },
    {
      category: "Who Applies",
      items: ["Property owners and homeowners", "Tenants with landlord authorization", "Fit-out and MEP contractors", "Consultants and project managers"],
    },
    {
      category: "Project Types",
      items: ["Residential renovation and refurbishment", "Retail and commercial fit-out", "MEP modifications and upgrades", "Signage and branding installation"],
    },
  ],
  steps: [
    { step: "01", title: "Pre-Check & Community Requirements", desc: "Confirm Nakheel-specific community rules, approval thresholds, and any special requirements for your property type." },
    { step: "02", title: "Site Survey & Scope Definition", desc: "Survey the unit, define the exact scope of works, and collect existing drawings if available." },
    { step: "03", title: "Drawing Preparation", desc: "Prepare architectural and MEP drawings aligned with Nakheel community guidelines and standards." },
    { step: "04", title: "Document Compilation", desc: "Gather all required documents: property ownership, tenancy, contractor details, and technical package." },
    { step: "05", title: "Nakheel Application Submission", desc: "Submit via Nakheel's online portal or community management office with complete documentation." },
    { step: "06", title: "Nakheel Review", desc: "Nakheel reviews the proposed works against community rules. Typical review: 3–10 working days for complete submissions." },
    { step: "07", title: "Comment Resolution", desc: "Address any comments or conditions from Nakheel and resubmit if required." },
    { step: "08", title: "NOC Issuance", desc: "Receive the Nakheel NOC confirming works can proceed under stated conditions." },
    { step: "09", title: "Works Execution & Close-Out", desc: "Complete works as approved. Submit completion notice and arrange close-out inspection if required by Nakheel." },
  ],
  documents: [
    {
      category: "Property & Applicant Documents",
      items: ["Title deed / ownership proof", "Valid tenancy contract (for tenants)", "Landlord NOC / written authorization", "Owner / authorized signatory ID"],
    },
    {
      category: "Project & Technical Documents",
      items: ["Architectural drawings (existing + proposed layout)", "MEP drawings for relevant modifications", "Scope of works / method statement", "Material specifications (where required)"],
    },
    {
      category: "Company Documents",
      items: ["Fit-out contractor trade license", "Contractor liability insurance", "Engineer / consultant credentials", "Any additional authority approvals (DCD, DEWA)"],
    },
  ],
  timeline:
    "Nakheel NOC processing time varies by community and scope of works. Complete submissions for standard fit-outs are typically reviewed within 3–10 working days. Larger or more complex projects, especially those requiring structural changes, may take 2–4 weeks. Missing documents or scope that requires clarification will extend the timeline. Having a well-prepared, complete submission is the most effective way to achieve a fast NOC.",
  rejections: [
    { reason: "Incomplete documentation package", fix: "Ensure all ownership, contractor, and technical documents are included before submission." },
    { reason: "Works exceed community guidelines", fix: "Review Nakheel's community-specific fit-out or modification guidelines before designing." },
    { reason: "Unauthorized contractor", fix: "Check that your contractor is registered and accepted by Nakheel for the relevant community." },
    { reason: "Structural modifications without structural engineer sign-off", fix: "Include a structural engineer's report or calculations for any structural changes." },
    { reason: "Missing DCD or DEWA pre-approval", fix: "For works affecting fire safety or electrical systems, obtain these approvals before Nakheel submission." },
    { reason: "Drawings not matching actual unit layout", fix: "Conduct a site survey and ensure as-existing drawings reflect the current unit configuration." },
  ],
  faqs: [
    { q: "Does every renovation in a Nakheel property need a NOC?", a: "Most fit-out and renovation works within Nakheel communities require a NOC. Even minor modifications may need community approval — check with Nakheel's community management first." },
    { q: "Can a tenant apply for the Nakheel NOC?", a: "Yes, tenants can apply with the landlord's written authorization. The property owner must provide a consent letter." },
    { q: "How long does Nakheel NOC take for small residential works?", a: "For well-prepared, complete submissions, simple residential works can be approved within 3–5 working days." },
    { q: "Is the Nakheel NOC the only approval needed for my fit-out?", a: "Not necessarily. You may also need DCD, DEWA, and DM approvals depending on the scope. Nakheel NOC is typically the developer-level clearance." },
    { q: "What happens if I start works without Nakheel NOC?", a: "Unauthorized works in Nakheel communities can result in stop-work orders, fines, and forced restoration of the unit to its original condition." },
    { q: "Can Fermium Designs handle Nakheel NOC applications?", a: "Yes. We prepare drawings, compile documents, submit applications, and manage the NOC process for all Nakheel communities." },
    { q: "Do I need a Nakheel NOC for cosmetic changes like painting?", a: "Purely cosmetic works (paint, wallpaper) typically don't require a NOC. Any structural, MEP, or layout change does." },
    { q: "How do I know which Nakheel community rules apply to my property?", a: "Each Nakheel community has specific fit-out guidelines. Our team can confirm the applicable requirements for your specific property." },
  ],
};

export default function NakheelPage() {
  return <ApprovalServicePage data={data} />;
}
