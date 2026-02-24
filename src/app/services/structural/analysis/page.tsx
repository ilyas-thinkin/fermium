import StructuralServicePage from "@/components/structural/StructuralServicePage";
import type { StructuralServiceData } from "@/components/structural/StructuralServicePage";

const data: StructuralServiceData = {
  slug: "analysis",
  title: "Structural Analysis",
  category: "Structural Solutions",
  tagline: "Engineering verification that confirms safety, stability, and compliance before you build.",
  description:
    "Structural analysis is the engineering process of checking whether a building or structure can safely carry all expected loads throughout its life. In Dubai, structural analysis is essential for new construction, renovations, extensions, change of use, and any condition where safety, compliance, or approvals depend on verified calculations. Whether developing a high-rise tower, upgrading a commercial complex, or modifying a villa, structural analysis helps confirm stability, identify risks early, and avoid costly redesigns during execution.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  features: [
    { title: "Load Assessment", desc: "Dead, live, wind, and seismic loads assessed to confirm member and foundation capacity under all applicable conditions." },
    { title: "Structural Modelling & Analysis", desc: "Industry-standard modelling methods and software applied to the specific project type — tower, villa, industrial slab, and more." },
    { title: "Design Verification", desc: "Verification of beams, slabs, columns, shear walls, cores, and foundations for strength, deflection, and stability." },
    { title: "Condition Assessment", desc: "Assessment support for existing buildings where safety, load capacity, or condition needs to be confirmed before modification." },
    { title: "Value Engineering Checks", desc: "Optimise member sizes while maintaining safety and performance — reducing cost without compromising structural integrity." },
    { title: "Authority Submission Support", desc: "Clear calculations and engineering reports produced to support engineering review and authority approval requirements." },
  ],
  benefits: [
    "Identifies overstressed elements, deflection issues, and stability risks before they become site problems.",
    "Produces structured calculations and reports that support engineering review and approvals.",
    "Prevents overdesign — reduces material waste through smarter sizing and verification.",
    "Early detection of structural conflicts reduces revisions during construction.",
    "Ensures modifications (openings, extra floors, heavier equipment) don't compromise the structure.",
    "Provides documented confidence for clients, project managers, contractors, and reviewers.",
  ],
  process: [
    { step: "01", title: "Requirement Review", desc: "We collect project inputs: drawings, architectural plans, intended usage, load requirements, site conditions, and authority/consultant requirements." },
    { step: "02", title: "Data Validation & Site Verification", desc: "For existing buildings, we may review as-built drawings, conduct site measurements, and confirm structural conditions before analysis begins." },
    { step: "03", title: "Structural Modelling", desc: "We create a structural model suitable for the project type, applying realistic support conditions and load assumptions." },
    { step: "04", title: "Load Calculations & Combinations", desc: "We apply relevant load cases (gravity, wind, seismic, equipment loads) and combinations as per applicable codes and requirements." },
    { step: "05", title: "Member Checks & Stability Review", desc: "We check key elements (slabs, beams, columns, walls, foundations) for strength, deflection, cracking control, and overall stability." },
    { step: "06", title: "Findings & Optimisation", desc: "We provide a clear summary of results and practical recommendations — strengthening, resizing, or detailing changes where required." },
    { step: "07", title: "Final Report & Submission Package", desc: "We deliver analysis outputs and documentation formatted for project review, construction coordination, and approvals support." },
  ],
  deliverables: [
    "Structural analysis report (summary, assumptions, load cases, results, conclusions)",
    "Design/verification calculations (PDF)",
    "Structural model outputs (key results, reactions, demand/capacity checks)",
    "Marked-up drawings / recommendations for required changes",
    "Strengthening concept details (where applicable)",
    "Coordination notes for architectural/MEP interfaces",
    "Authority/consultant submission-ready package (as required)",
  ],
  suitableFor: [
    { label: "High-Rise Towers", desc: "Core stability, lateral load checks, transfer elements, foundation validation." },
    { label: "Commercial Complexes", desc: "Long spans, heavy footfall loads, rooftop equipment, change-of-use scenarios." },
    { label: "Residential Villas & Buildings", desc: "Extensions, majlis additions, slab cut-outs, added floors, boundary wall issues." },
    { label: "Industrial Facilities", desc: "Heavy machinery loads, crane beams, racking loads, mezzanines, industrial slabs." },
    { label: "Educational Institutions", desc: "Auditorium spans, stair/core stability, load verification for change of occupancy." },
    { label: "Retrofits & Strengthening", desc: "Load capacity confirmation, upgrade design, and condition-based structural checks." },
  ],
  faqs: [
    { q: "What is structural analysis, and why is it important in Dubai?", a: "It's the engineering check that confirms a structure can safely resist loads like occupancy, wind, and equipment. In Dubai, it's critical for safety, code compliance, and project approvals." },
    { q: "When do I need structural analysis?", a: "For new builds, extensions, renovations, adding floors, removing walls/columns, creating slab openings, installing heavy equipment, or changing the building's usage or occupancy." },
    { q: "Can you analyse an existing building without original drawings?", a: "Yes, but it may require a site survey, measurement verification, and sometimes material/condition assessment to establish reliable inputs for the analysis." },
    { q: "What documents do you need to start?", a: "Typical inputs include architectural drawings, any available structural drawings/as-builts, site details, soil report (if available), and the intended use and load requirements." },
    { q: "How long does structural analysis take?", a: "It depends on size and complexity. Villas and small buildings are typically faster than high-rise or industrial facilities. Incomplete inputs and revisions can extend timelines." },
    { q: "Will structural analysis help reduce construction cost?", a: "Often, yes. Proper analysis can prevent overdesign and support value engineering while maintaining safety and code compliance — saving on materials and site changes." },
    { q: "Do you provide strengthening solutions if the structure is not adequate?", a: "Yes. If the analysis shows overstress or stability concerns, we provide practical strengthening recommendations and concept details aligned with the findings." },
    { q: "Is structural analysis different from structural design?", a: "Structural design creates the system and member sizing from the start. Structural analysis can be part of design — or a verification/check for an existing or proposed structure." },
  ],
};

export default function StructuralAnalysisPage() {
  return <StructuralServicePage data={data} />;
}
