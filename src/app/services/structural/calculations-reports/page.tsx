import StructuralServicePage from "@/components/structural/StructuralServicePage";
import type { StructuralServiceData } from "@/components/structural/StructuralServicePage";

const data: StructuralServiceData = {
  slug: "calculations-reports",
  title: "Calculations & Reports",
  category: "Structural Solutions",
  tagline: "The technical backbone — structured calculation packages that authorities and reviewers trust.",
  description:
    "Structural calculations and reports are the technical backbone of any safe, approvable, and buildable project. Whether planning a villa, a commercial building, or an industrial facility, a well-prepared structural analysis report helps confirm that the structure can resist all expected loads and site conditions before construction begins. Our service focuses on Structural 3D Design and Structural Analysis, producing calculation packages and reports that support design decisions, authority submissions, contractor execution, and on-site coordination across the UAE.",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  features: [
    { title: "Gravity & Lateral Load Analysis", desc: "Full combination checks for dead, live, wind, seismic, and equipment loads across all applicable load cases." },
    { title: "Foundation Adequacy Assessment", desc: "Foundation design checks and soil interaction assumptions based on available geotechnical inputs and site conditions." },
    { title: "Member Design Checks", desc: "Reinforcement and steel sizing for beams, slabs, columns, walls, and stability systems with governing case identification." },
    { title: "Stability & Drift Verification", desc: "Stability and drift checks for multi-storey structures — overturning, sliding, and uplift where applicable." },
    { title: "Code-Based Verification", desc: "Checks aligned with commonly accepted UAE practice and project-specific requirements for each structural element." },
    { title: "Revision & Version Control", desc: "Structured handling of design changes with re-issued controlled report versions and clear revision logs." },
  ],
  benefits: [
    "Faster approvals with fewer reviewer queries — properly structured calculation reports set the standard.",
    "Reduced rework on site by validating the design before construction begins.",
    "Safer structures through verified load resistance and documented stability checks.",
    "Cost control by avoiding overdesign and identifying efficient structural systems.",
    "Better coordination between architectural, MEP, and structural requirements.",
    "Stronger risk management by documenting all design decisions and compliance references.",
  ],
  process: [
    { step: "01", title: "Project Intake & Data Review", desc: "We review drawings, architectural plans, usage/loading intent, available soil report, and scope boundaries — new build, extension, or retrofit." },
    { step: "02", title: "Define Design Basis", desc: "We confirm materials, design standards, load criteria, exposure conditions, and analysis approach (2D/3D, linear/nonlinear as required)." },
    { step: "03", title: "Structural 3D Design & Modelling", desc: "We create the structural model, define supports, assign member properties, and set up load patterns and combinations." },
    { step: "04", title: "Structural Analysis & Verification", desc: "We run analysis checks and validate results — reactions, deflections, drift, demand/capacity ratios, and overall stability." },
    { step: "05", title: "Calculations Package Preparation", desc: "We prepare organised calculations with summaries, assumptions, governing cases, and element-by-element design checks." },
    { step: "06", title: "Report Formatting & Submission Readiness", desc: "We compile a professional report structure suitable for technical review and authority/consultant submissions." },
    { step: "07", title: "Review Support & Revisions", desc: "We respond to comments, revise calculations if needed, and re-issue controlled report versions as required." },
  ],
  deliverables: [
    "Structural analysis report (design basis, load cases, combinations, results summary)",
    "Calculation sheets for foundations, slabs, beams, columns, and walls",
    "Structural 3D model outputs (model views, screenshots, tables, force diagrams)",
    "Load take-off summary (where required)",
    "Member sizing and reinforcement/steel design summary",
    "Stability checks (drift, overturning, sliding, uplift where applicable)",
    "Revision logs and controlled issue copies (Rev-0, Rev-1, etc.)",
    "Coordination notes aligning structural intent with architectural/MEP constraints",
  ],
  suitableFor: [
    { label: "High-Rise Towers", desc: "Drift/stability critical structures with complex lateral load requirements and transfer elements." },
    { label: "Commercial Complexes", desc: "Large spans, mixed-use loading, and change-of-use checks for retail and office buildings." },
    { label: "Residential Villas & Buildings", desc: "New builds, extensions, majlis additions, and roof or structural system changes." },
    { label: "Industrial Facilities", desc: "Equipment loads, mezzanines, warehouse racking impacts, and vibration-sensitive areas." },
    { label: "Educational Institutions", desc: "Assembly areas, long-span spaces, and safety-focused load checks." },
    { label: "Fit-Out Structural Checks", desc: "Slab openings, core drilling, slab capacity verification, and load changes from heavy fitout works." },
  ],
  faqs: [
    { q: "What's included in a structural calculations and report package?", a: "Typically: design basis, load assumptions, analysis results, element design checks, governing load combinations, and a summarised conclusion — plus supporting tables and figures from the structural model." },
    { q: "Do you provide structural 3D design models as part of the service?", a: "Yes. Structural 3D design is often essential for accurate structural analysis — especially for multi-storey, irregular, or lateral-load-sensitive structures." },
    { q: "What information do you need to start?", a: "Common inputs include architectural drawings, grid/levels, intended usage, material preferences, available soil report (if any), and any project-specific design criteria." },
    { q: "How do you avoid overdesign while staying safe?", a: "We focus on correct load paths, realistic load assumptions, and governing case checks. Where possible, we propose efficient member sizing and system selection while maintaining code compliance." },
    { q: "Can you update the report if the design changes?", a: "Yes. We handle revisions when layouts, loads, or structural systems change, and re-issue controlled versions with updated calculations and revision notes." },
    { q: "Do you support authority or third-party review comments?", a: "Yes. We provide clarifications, revise calculations if needed, and format reports to align with typical reviewer expectations and authority requirements." },
    { q: "Is this service only for new buildings?", a: "No. It's also used for extensions, renovations, slab openings, additional loads, change of use, structural strengthening, and condition-based checks (subject to available data)." },
    { q: "How long does it take to prepare calculations and reports?", a: "Timelines depend on project size, completeness of inputs, complexity, and the number of structural elements to be checked. Early coordination and complete documents significantly reduce delays." },
  ],
};

export default function CalculationsReportsPage() {
  return <StructuralServicePage data={data} />;
}
