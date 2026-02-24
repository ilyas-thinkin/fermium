import StructuralServicePage from "@/components/structural/StructuralServicePage";
import type { StructuralServiceData } from "@/components/structural/StructuralServicePage";

const data: StructuralServiceData = {
  slug: "design-drafting",
  title: "Structural Design & Drafting",
  category: "Structural Solutions",
  tagline: "Safe, code-compliant engineering from concept to construction-ready drawings.",
  description:
    "Structural design is the engineering work that ensures a building or facility can safely carry loads — gravity, wind, seismic, and usage loads — throughout its life. Structural drafting converts that engineering into clear, buildable drawings that contractors can follow on site. In Dubai, structural design and drafting typically need to align with local authority requirements, relevant international codes, and coordination with architectural and MEP layouts. The goal: a safe, efficient structure with drawings that reduce site confusion, rework, and delays.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  ),
  features: [
    { title: "Code-Aligned Structural Design", desc: "Design for reinforced concrete, steel, and composite systems aligned with UAE practice and applicable international codes." },
    { title: "Load Assessment", desc: "Dead, live, wind, seismic where applicable, and equipment loads evaluated for all key structural elements." },
    { title: "Optimised Framing Schemes", desc: "Structural framing proposals optimised for spans, building height, usage, and constructability on site." },
    { title: "Reinforcement & Connection Detailing", desc: "Practical detailing suited to real site conditions — not just theoretical drawings." },
    { title: "Coordination-Ready Drafting", desc: "Structural drawings aligned with architectural and MEP layouts to reduce clashes and revisions during construction." },
    { title: "Special Zone Checks", desc: "Design checks for openings, transfer zones, cantilevers, staircases, ramps, tanks, and heavy machinery bases." },
  ],
  benefits: [
    "Improved safety and reliability through proper load paths and member sizing.",
    "Fewer site changes with coordinated drawings and practical details.",
    "Better cost control by avoiding overdesign and minimising material waste.",
    "Smoother approvals and submissions with complete, clear documentation.",
    "Faster construction execution — drawings are easier to read and follow on site.",
    "Reduced risk of cracking and deflection issues through good detailing.",
  ],
  process: [
    { step: "01", title: "Project Understanding & Inputs", desc: "We review scope, architectural plans, soil report (if available), design brief, and usage requirements including any special loads, pools, or basements." },
    { step: "02", title: "Structural Scheme Selection", desc: "We propose a suitable framing system (RC slab/beam, flat slab, post-tension, steel framing, etc.) based on spans, height, and functional layout." },
    { step: "03", title: "Analysis & Design", desc: "We develop the analysis model, evaluate load combinations, and design foundations, columns/walls, slabs and beams, and the lateral stability system." },
    { step: "04", title: "Drafting & Detailing", desc: "We produce coordinated structural drawings: reinforcement detailing, sections, schedules, typical details, and connection/anchorage details where relevant." },
    { step: "05", title: "Coordination & Clash Review", desc: "We align with architectural and MEP layouts to resolve conflicts — openings, shafts, risers, beam depths vs. ceilings, and clearances." },
    { step: "06", title: "Final Issue & Support", desc: "We issue the final drawing package and calculations, and support technical clarifications during construction (RFIs, minor revisions as needed)." },
  ],
  deliverables: [
    "Structural design basis / criteria summary",
    "Structural calculations / design report (as required)",
    "GA structural drawings (framing plans, grids, sections)",
    "Reinforcement detailing drawings (slabs, beams, columns, walls, stairs)",
    "Foundation drawings (footings / raft / piles layout, pile caps, tie beams)",
    "Schedules (beam/column schedules, bar bending notes, typical details)",
    "Connection details for steel works and embedded items (where applicable)",
    "Revision set with clear version control for submissions and site use",
  ],
  suitableFor: [
    { label: "High-Rise Towers", desc: "Cores, transfer levels, podiums, stability systems for tall buildings in Dubai." },
    { label: "Commercial Complexes", desc: "Malls, showrooms, offices, and mixed-use buildings with large spans." },
    { label: "Residential Villas & Buildings", desc: "New builds, extensions, and structural modifications for villa and apartment projects." },
    { label: "Industrial Facilities", desc: "Warehouses, heavy loads, equipment foundations, and mezzanine structures." },
    { label: "Educational Institutions", desc: "Schools and colleges with large spans and high occupancy requirements." },
    { label: "Retrofits & Modifications", desc: "Openings, extra floors, mezzanine additions, and structural strengthening works." },
  ],
  faqs: [
    { q: "What's the difference between structural design and structural drafting?", a: "Structural design is engineering — analysis, sizing, and safety checks. Structural drafting converts that design into clear drawings and details used for construction and approvals." },
    { q: "What information is typically required to start?", a: "Architectural drawings (plans/sections), project brief and usage, structural grid, soil report (for foundations), and any special loads such as tanks, machinery, or façade loads." },
    { q: "Can you design for both reinforced concrete and steel structures?", a: "Yes. The chosen system depends on building height, spans, function, speed of construction, and budget. We'll recommend the most suitable system for your project." },
    { q: "How do you coordinate structural drawings with MEP and architecture?", a: "By reserving and verifying openings/shafts, aligning grids and levels, checking beam depths vs. ceilings, and resolving conflicts early through coordinated review." },
    { q: "How long does structural design and drafting take in Dubai?", a: "Timelines vary by size and complexity. Villas are typically faster; towers and complex commercial/industrial projects take longer due to coordination, modelling, and revisions." },
    { q: "What causes delays in structural deliverables?", a: "Late or changing architectural layouts, missing soil report, unclear load requirements, frequent design changes, and incomplete coordination of openings and levels." },
    { q: "Do you provide drawings suitable for authority submissions and construction?", a: "Yes — a structured set with clear notes, revision control, and calculation support, aligned to authority submission and site use requirements." },
    { q: "Can you help with structural changes for existing buildings?", a: "Yes. We assess the existing structure (drawings/site data), check load paths, propose strengthening if required, and produce modification drawings and details." },
  ],
};

export default function StructuralDesignPage() {
  return <StructuralServicePage data={data} />;
}
