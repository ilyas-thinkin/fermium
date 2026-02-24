import StructuralServicePage from "@/components/structural/StructuralServicePage";
import type { StructuralServiceData } from "@/components/structural/StructuralServicePage";

const data: StructuralServiceData = {
  slug: "bim-modelling",
  title: "3D BIM Modelling",
  category: "Structural Solutions",
  tagline: "Intelligent 3D models that coordinate structure, architecture, and MEP in one shared environment.",
  description:
    "3D BIM Modelling is the process of creating an intelligent 3D digital model of a building that combines geometry with detailed data — materials, levels, systems, quantities, and specifications. Unlike basic 3D drafting, BIM models help teams coordinate architecture, structure, and MEP in one shared environment, reducing clashes, rework, and site delays. In the UAE, where projects often involve tight schedules, complex MEP networks, and multi-stakeholder approvals, 3D BIM Modelling supports clearer decision-making from concept through construction and handover.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M21 16.811c0 .376-.208.704-.52.872l-7.9 4.44a1 1 0 01-.96 0l-7.9-4.44A.999.999 0 013 16.811v-9c0-.375.208-.703.52-.871l7.9-4.44a1 1 0 01.96 0l7.9 4.44c.312.168.52.496.52.871v9z" />
    </svg>
  ),
  features: [
    { title: "Discipline-Based Modelling", desc: "Separate and federated models for Architectural, Structural, and MEP to manage complexity and coordination clearly across teams." },
    { title: "Clash Detection & Coordination", desc: "Identify and resolve conflicts between structural elements, MEP services, and architectural components before site work begins." },
    { title: "LOD-Aligned Modelling", desc: "Modelling to required Level of Development (LOD 200–400) based on project stage — concept, design, tender, or construction." },
    { title: "Accurate Geometry & Data-Rich Elements", desc: "Intelligent objects with parameters to support schedules, quantities, specifications, and documentation across all disciplines." },
    { title: "Shop Drawing & Coordination Readiness", desc: "Models prepared to support detailed coordination, builder workflows, and streamlined revision cycles during construction." },
    { title: "Federated Model Setup", desc: "Combine multiple discipline models into one coordination environment for review, reporting, and stakeholder communication." },
  ],
  benefits: [
    "Fewer site clashes and rework — detect coordination issues early before costly site changes occur.",
    "Faster approvals and clearer stakeholder communication through 3D visualisation.",
    "Improved construction planning — better sequencing, MEP routing clarity, and safer coordination.",
    "Higher accuracy in drawings and documentation — a well-managed BIM model reduces inconsistencies.",
    "Better cost control when linked to quantities — model-based take-offs improve estimating reliability.",
    "Stronger handover support — structured digital deliverables support operations and future maintenance.",
  ],
  process: [
    { step: "01", title: "Project Review & BIM Scope Definition", desc: "We review your project goals, stage, and deliverable needs — LOD, disciplines, formats, and timeline — and agree on the modelling scope." },
    { step: "02", title: "Input Collection & Model Setup", desc: "We collect available inputs (CAD, PDFs, IFC, design drawings, survey, specs) and establish modelling standards including levels, grids, naming, and coordinates." },
    { step: "03", title: "3D BIM Modelling", desc: "We develop the model as per agreed LOD and coordinate systems, ensuring modelling accuracy and consistency across architecture, structure, and MEP." },
    { step: "04", title: "Coordination & Clash Checks", desc: "We support clash detection workflows and provide coordination outputs — reports and marked-up snapshots — to resolve conflicts efficiently." },
    { step: "05", title: "Revisions & Model Updates", desc: "We incorporate approved changes, maintain version control, and keep model structure clean for downstream use by contractors and consultants." },
    { step: "06", title: "Deliverables & Handover", desc: "We submit the agreed model files, drawings/exports, and coordination documentation in required formats for client and consultant use." },
  ],
  deliverables: [
    "3D BIM model files (discipline models + federated model as required)",
    "Clash detection reports (issues list, screenshots, zones, priorities)",
    "2D model exports (plans / sections / elevations where required)",
    "Model views and sheets (for coordination and reviews)",
    "Quantity take-off schedules (optional, if model is structured for it)",
    "IFC / NWC / RVT / DWG exports (as per client/consultant needs)",
    "As-built model support (if required at handover stage)",
  ],
  suitableFor: [
    { label: "High-Rise Towers", desc: "Complex cores, vertical risers, and tight MEP coordination across multiple disciplines and contractors." },
    { label: "Commercial Complexes", desc: "Retail and office mixed systems, multi-tenant planning, and large-scale coordination requirements." },
    { label: "Residential Villas & Buildings", desc: "Accurate coordination for services and structure — reducing site issues in villa and apartment projects." },
    { label: "Industrial Facilities", desc: "Heavy MEP networks, plant rooms, service routing, and large equipment coordination." },
    { label: "Educational Institutions", desc: "Repetitive spaces, clear coordination across disciplines, and phased construction requirements." },
    { label: "Mixed-Use Developments", desc: "Multi-discipline, multi-contractor environments needing a single coordinated model environment." },
  ],
  faqs: [
    { q: "What is the difference between 3D modeling and 3D BIM modeling?", a: "3D modelling focuses on geometry and visualisation. 3D BIM Modelling includes geometry plus data (levels, systems, parameters) and supports coordination, documentation, and lifecycle use." },
    { q: "What inputs do you need to start BIM modelling?", a: "We can start with CAD/PDF drawings, design sets, specifications, and project reference points (levels/grids). If you have IFC or existing BIM files, we can use those too." },
    { q: "What LOD do you provide — LOD 200, 300, or 400?", a: "We model based on your project stage and requirement. Typically LOD 300 is used for coordinated design, while LOD 400 supports fabrication/detail-level outcomes when applicable." },
    { q: "Can you model only structural or only MEP?", a: "Yes. We can deliver discipline-specific models (Architectural, Structural, or MEP) or a coordinated federated model, depending on project needs and scope." },
    { q: "Do you provide clash detection?", a: "We support coordination and clash detection workflows and provide clash reports with clear references and snapshots to help teams resolve conflicts quickly and efficiently." },
    { q: "Can BIM help reduce site delays?", a: "Yes — by identifying clashes early, improving coordination, and reducing rework. A coordinated model supports smoother execution and fewer on-site surprises during construction." },
    { q: "Which file formats can you deliver?", a: "Common deliverables include RVT, IFC, NWC, DWG, and PDF exports — based on your consultant/contractor requirements and project stage." },
    { q: "Do you provide as-built BIM models for handover?", a: "Yes. If you have redlines, site updates, or updated shop drawings, we can develop an as-built BIM model aligned with handover requirements." },
  ],
};

export default function BimModellingPage() {
  return <StructuralServicePage data={data} />;
}
