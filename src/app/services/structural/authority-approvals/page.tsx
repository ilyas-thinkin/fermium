import StructuralServicePage from "@/components/structural/StructuralServicePage";
import type { StructuralServiceData } from "@/components/structural/StructuralServicePage";

const data: StructuralServiceData = {
  slug: "authority-approvals",
  title: "Authority Approvals",
  category: "Structural Solutions",
  tagline: "Navigating Dubai's approval landscape so your project progresses without delays or rejections.",
  description:
    "Authority approvals in Dubai are mandatory clearances from government entities, free zones, and master developers before you can start, modify, or complete construction, fit-out, MEP works, or certain technical changes. These approvals ensure your project meets safety standards, building codes, fire compliance, planning rules, and utility requirements — so your site progresses smoothly from design to handover. Whether you're developing a high-rise tower, upgrading a commercial complex, building a villa, or operating an industrial or educational facility, getting the right Dubai approvals at the right time prevents delays, rework, penalties, and handover issues.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  features: [
    { title: "Authority Mapping", desc: "Identify all required entities — government, free zone, master developer, utilities — based on your project location and scope." },
    { title: "Design Compliance Checks", desc: "Ensure architectural, structural, and MEP drawings align with applicable codes and authority-specific approval conditions." },
    { title: "Document Control", desc: "Organised submission packages (forms, drawings, reports, method statements) that reduce back-and-forth with authorities." },
    { title: "Coordination Support", desc: "Align consultants, contractors, and facility teams for consistent submissions and fast revisions when comments arise." },
    { title: "Inspection Readiness", desc: "Site preparation guidance covering inspections, testing requirements, and close-out documentation needs." },
    { title: "Handover Assistance", desc: "Close-out packages and NOCs required for project completion, occupancy certificates, and utility activation." },
  ],
  benefits: [
    "Faster approvals with fewer comments by submitting complete, compliant documentation from the start.",
    "Reduced project risk — fewer rejections, penalties, rework events, and schedule overruns.",
    "Clear project visibility with defined stages, responsibilities, and realistic timelines.",
    "Safer, code-compliant outcomes aligned with Dubai standards and authority requirements.",
    "Smoother utility activation and handover by closing technical gaps early in the process.",
  ],
  process: [
    { step: "01", title: "Scope Review & Authority Identification", desc: "Confirm project scope (new build / fit-out / modification) and determine which approvals apply based on location, building type, and works involved." },
    { step: "02", title: "Site & Existing-Condition Assessment", desc: "For renovations and upgrades, review as-built information, services capacity, and any structural or MEP constraints that may affect the approval path." },
    { step: "03", title: "Drawing Preparation & Technical Coordination", desc: "Coordinate required drawings and documents — architectural, structural, MEP, fire as applicable — and align them with authority submission standards." },
    { step: "04", title: "Submission & Application Tracking", desc: "Submit through the relevant portals and processes, then track comments, technical clarifications, and resubmission requirements in real time." },
    { step: "05", title: "Responses, Revisions & Resubmissions", desc: "Address authority comments promptly, revise drawings where needed, and resubmit until all approvals are secured." },
    { step: "06", title: "Site Inspection Coordination", desc: "Support inspection readiness — documentation, installations, testing evidence — and coordinate corrections if authorities request them." },
    { step: "07", title: "Final Approvals & Close-Out", desc: "Compile final deliverables: completion NOCs, test reports, as-builts (if required), and full close-out documentation for smooth handover." },
  ],
  deliverables: [
    "Approval requirement list (authority matrix for your project)",
    "Submission-ready drawing set: architectural plans/sections, structural drawings, MEP layouts, fire & life safety drawings",
    "Technical reports: load schedules, equipment data sheets, method statements (as applicable)",
    "Authority application forms and supporting documents checklist",
    "Responses to authority comments and full resubmission packs",
    "Inspection coordination notes and close-out package",
    "Final NOCs, approvals, and completion documents",
  ],
  suitableFor: [
    { label: "High-Rise Towers", desc: "New build permits, major structural modifications, MEP capacity changes, and phased handovers for multi-storey developments." },
    { label: "Commercial Complexes", desc: "Retail and office fit-outs, tenancy changes, service upgrades, signage and access change approvals." },
    { label: "Residential Villas & Buildings", desc: "Villa construction permits, extensions, pool works, and internal structural or MEP change approvals." },
    { label: "Industrial Facilities", desc: "Power upgrades, mechanical systems, drainage changes, and safety compliance upgrades for industrial premises." },
    { label: "Educational Institutions", desc: "Classroom and lab fit-outs, capacity changes, safety upgrades, and phased renovation approvals for schools and colleges." },
  ],
  faqs: [
    { q: "What are 'authority approvals' in Dubai?", a: "They are required permissions (permits, NOCs, or certificates) from relevant government bodies, free zones, or master developers confirming that your project complies with Dubai rules before work starts, during execution, and before handover." },
    { q: "When do I need authority approvals?", a: "Typically for new construction, fit-out works, MEP changes, structural modifications, utility activation, and project completion or handover. The exact requirements depend on your project scope and location." },
    { q: "Who is responsible for obtaining approvals — owner, contractor, or consultant?", a: "It depends on the project setup. Usually the project owner or tenant authorises the process, while the consultant or contractor prepares drawings and technical documents for submission." },
    { q: "What documents are usually required?", a: "Common items include architectural, MEP, fire, and structural drawings; application forms; site details; NOCs; equipment data sheets; load schedules; and method statements. The exact list varies by authority and scope." },
    { q: "How long do authority approvals take in Dubai?", a: "Timelines vary by authority, project complexity, document quality, and how quickly comments are addressed. Incomplete submissions and design mismatches are the biggest causes of delays." },
    { q: "What are the most common reasons for rejection?", a: "Typical issues include missing documents, inconsistent drawings, incorrect calculations or load schedules, non-compliant fire and life safety details, or a scope mismatch with the application category." },
    { q: "Can I start work before approvals are issued?", a: "In most cases, no. Starting early can lead to stop-work instructions, costly rework, and penalties. Always confirm the correct approval stage required before site mobilisation." },
    { q: "Do I need separate approvals for fit-out vs. construction?", a: "Yes. Construction approvals focus on the building permit and structural compliance, while fit-out approvals address interior works, MEP, fire safety, and building management or developer rules." },
  ],
};

export default function AuthorityApprovalsStructuralPage() {
  return <StructuralServicePage data={data} />;
}
