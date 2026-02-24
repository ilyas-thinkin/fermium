import StructuralServicePage from "@/components/structural/StructuralServicePage";
import type { StructuralServiceData } from "@/components/structural/StructuralServicePage";

const data: StructuralServiceData = {
  slug: "site-supervision",
  title: "Site Supervision",
  category: "Structural Solutions",
  tagline: "On-site technical oversight that keeps structural execution aligned with approved designs.",
  description:
    "Site supervision is the on-site technical oversight that ensures your structural designs and analysis are executed correctly during construction. In the UAE, even small deviations in reinforcement, formwork, concrete quality, or sequencing can lead to rework, delays, and approval issues. Our site supervision focuses on verifying that structural works match approved drawings, specifications, and engineering intent — so your project stays safe, compliant, and buildable from foundation to final structural completion.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  features: [
    { title: "On-Site Structural Inspections", desc: "Regular inspections of foundations, columns, beams, slabs, and staircases to verify construction matches approved structural drawings." },
    { title: "Rebar & Formwork Checks", desc: "Verification of reinforcement spacing, lap lengths, concrete cover, supports, and openings before any concrete pour proceeds." },
    { title: "Concrete Pour Readiness", desc: "Pre-pour checklist verification including pour sequence, embedded items, curing requirements, and structural readiness sign-off." },
    { title: "Design-to-Site Coordination", desc: "Resolve conflicts between drawings and actual site conditions through RFIs, field clarifications, and practical engineering solutions." },
    { title: "Progress & Quality Reporting", desc: "Clear site reports with photos, observations, risk levels, action items, responsible parties, and deadlines for follow-up." },
    { title: "Non-Conformance Support", desc: "NCR identification with corrective actions, preventive measures, and verification that issues are properly resolved before work continues." },
  ],
  benefits: [
    "Reduces costly rework by catching issues before concrete is poured — when corrections are cheapest.",
    "Improves structural safety and quality with systematic checks and documented compliance.",
    "Protects design intent so the structural system performs as engineered under all loads.",
    "Fewer delays through faster decisions, clear RFI responses, and smoother authority inspections.",
    "Better contractor coordination with practical, on-site engineering guidance and clear directions.",
    "Minimises risk from unauthorised modifications or site shortcuts that compromise structural integrity.",
  ],
  process: [
    { step: "01", title: "Project Review & Site Setup", desc: "We review approved structural drawings, specifications, design assumptions, and method statements. We set inspection checkpoints and reporting formats." },
    { step: "02", title: "Inspection Plan & Hold Points", desc: "We define key hold points — foundation rebar, slab reinforcement, beam-column joints, post-tension zones — and align them with the construction schedule." },
    { step: "03", title: "Routine Site Visits & Structural Checks", desc: "We conduct planned visits verifying reinforcement placement, formwork alignment, embedded items, openings, and concrete pour readiness." },
    { step: "04", title: "RFIs, Clarifications & On-Site Solutions", desc: "When site conditions differ from drawings, we issue/answer RFIs and provide constructible solutions aligned with structural analysis." },
    { step: "05", title: "Reporting & Corrective Actions", desc: "We provide clear site reports with photos, observations, risk level, and action items with deadlines and responsible parties." },
    { step: "06", title: "Final Structural Walkthrough Support", desc: "Before closing structural works, we support final checks, as-built markups (as applicable), and documentation readiness for inspections and handover." },
  ],
  deliverables: [
    "Site supervision plan (scope, checkpoints, and inspection frequency)",
    "Pre-pour and post-pour checklists (slabs / beams / columns / foundations)",
    "Site visit reports with photos and action list",
    "Structural compliance observations aligned to drawings/specs",
    "RFI / technical clarification notes (as needed)",
    "NCR support notes and corrective action verification",
    "Coordination notes for openings, sleeves, embedded plates, and load changes",
    "Final structural status summary for project records",
  ],
  suitableFor: [
    { label: "High-Rise Towers", desc: "Complex load paths, tight schedules, and multiple contractors requiring independent structural oversight." },
    { label: "Commercial Complexes", desc: "Large spans, heavy usage loads, and strict compliance needs for retail and office structures." },
    { label: "Residential Villas & Buildings", desc: "Quality control in rebar placement, concrete mix, and structural detailing for villa and apartment projects." },
    { label: "Industrial Facilities", desc: "High loads, equipment bases, vibration-sensitive areas, and heavy structural requirements." },
    { label: "Educational Institutions", desc: "Safe occupancy requirements and consistent quality standards for school and college buildings." },
    { label: "Fast-Track Projects", desc: "Projects requiring frequent visits or milestone-based inspection to maintain pace without compromising quality." },
  ],
  faqs: [
    { q: "What does site supervision cover in structural works?", a: "It covers on-site checks to ensure structural elements are built as per approved drawings and structural analysis — especially reinforcement, formwork, concrete quality, and construction sequence." },
    { q: "How often should site supervision visits occur?", a: "It depends on project complexity and programme. Typical options include weekly visits, milestone-based inspections (hold points), or more frequent supervision for fast-track projects." },
    { q: "Can site supervision reduce project delays?", a: "Yes. Early detection of issues (wrong rebar, missing openings, incorrect levels) prevents pour stoppages and rework that usually cause major schedule delays and cost overruns." },
    { q: "Do you help with changes if site conditions don't match drawings?", a: "Yes. We support RFIs and provide practical engineering solutions that maintain structural safety and align with the original structural analysis assumptions." },
    { q: "Is site supervision the same as contractor supervision?", a: "No. Contractor supervision manages execution. Our role is independent technical oversight to verify compliance with design intent and structural safety requirements." },
    { q: "What are common structural site issues you catch early?", a: "Incorrect rebar spacing/laps, insufficient concrete cover, unapproved openings, poor formwork support, misaligned columns, and missing embed plates or sleeves." },
    { q: "Will you provide documentation for approvals and handover?", a: "We provide site reports, checklists, and compliance notes that support inspection readiness and smooth project closeout with relevant authorities." },
    { q: "When is the best time to start site supervision?", a: "From the start of substructure works (excavation/foundation preparation) — because early-stage structural mistakes are the most expensive and disruptive to fix later." },
  ],
};

export default function SiteSupervisionPage() {
  return <StructuralServicePage data={data} />;
}
