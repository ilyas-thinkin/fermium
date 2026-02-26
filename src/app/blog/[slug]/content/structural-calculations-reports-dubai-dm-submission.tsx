export default function BlogContent() {
  return (
    <div>
      <p className="blog-intro">
        Structural calculation reports are one of the most scrutinised elements of a Dubai Municipality submission. A well-prepared report accelerates approval; an incomplete or poorly structured one triggers comment rounds that add weeks to your programme. This guide explains exactly what DM reviewers look for.
      </p>

      <h2>What is a Structural Calculation Report?</h2>
      <p>A structural calculation report is the engineer's written evidence that the proposed structure is safe, code-compliant, and fit for its intended use. It accompanies the structural drawings submitted to Dubai Municipality and provides the analytical basis for every structural element shown on those drawings.</p>
      <p>DM reviewers use the calculations to verify that the structural design is correct — not just that the drawings look reasonable. A drawing without supporting calculations is unacceptable for DM submission.</p>

      <h2>Codes and Standards Referenced in Dubai</h2>
      <p>Structural calculations in Dubai must be based on applicable codes. The primary references are:</p>
      <ul>
        <li><strong>UAE Fire and Life Safety Code:</strong> For structural fire resistance requirements</li>
        <li><strong>BS 8110 / Eurocode 2:</strong> For reinforced concrete design (both are accepted; Eurocode is increasingly preferred)</li>
        <li><strong>BS 5950 / Eurocode 3:</strong> For steel structure design</li>
        <li><strong>ACI 318:</strong> Accepted for reinforced concrete, particularly from US-trained engineers</li>
        <li><strong>UAE Building Code:</strong> Dubai-specific requirements including seismic zone, wind load parameters, and soil conditions</li>
        <li><strong>ASCE 7:</strong> For loading standards where referenced</li>
      </ul>

      <div className="pro-tip">
        <strong>Pro Tip</strong>
        State the design codes explicitly at the start of the calculation report. DM reviewers check code compliance first — if the applicable codes are not clearly stated, the report is sent back immediately for clarification.
      </div>

      <h2>Required Contents of a Structural Calculation Report for DM</h2>
      <p>A complete structural report for DM submission must include the following sections:</p>

      <h3>1. Project Information and Engineer's Statement</h3>
      <p>Project name, location, plot number, client, date, and revision history. Engineer's professional details, DM registration number, and a statement confirming the design has been prepared in accordance with applicable codes.</p>

      <h3>2. Design Basis</h3>
      <p>Applicable codes and standards, design life, exposure conditions (especially relevant in Dubai's coastal and humid environment), concrete grade, steel grade, and any project-specific design assumptions.</p>

      <h3>3. Loading Analysis</h3>
      <p>This is the most scrutinised section. Must include:</p>
      <ul>
        <li>Dead loads — self-weight of all structural and non-structural elements</li>
        <li>Superimposed dead loads — finishes, raised floors, services, cladding</li>
        <li>Live loads — per UAE Building Code for the occupancy type</li>
        <li>Wind loads — calculated per UAE Building Code wind zone and building height</li>
        <li>Seismic loads — Dubai falls in a low-seismicity zone but calculations are still required</li>
        <li>Load combinations — all required combinations as per the applicable code</li>
      </ul>

      <h3>4. Foundation Design</h3>
      <p>Based on the geotechnical investigation report (required separately). Must include soil bearing capacity used, foundation type selection and justification, settlement analysis for significant structures, and pile design where applicable.</p>

      <h3>5. Structural Analysis</h3>
      <p>Analysis method (manual, software), model description, member design checks for all critical elements — columns, beams, slabs, shear walls, connections.</p>

      <h3>6. Structural Drawings Reference</h3>
      <p>Cross-references between the calculation report and the submitted drawings — reviewers check that every element shown on drawings is supported by calculations.</p>

      <h2>Common Reasons for DM Structural Report Rejections</h2>
      <ul>
        <li>Missing or unstated design codes</li>
        <li>Loading analysis not covering all required load types</li>
        <li>Live loads applied that are lower than UAE Building Code minimums for the occupancy</li>
        <li>Wind load calculation not accounting for correct wind zone or building height</li>
        <li>Foundation design not referencing a geotechnical investigation report</li>
        <li>Calculations for structural modifications (openings, new loads) not matching the approved original structure</li>
        <li>Engineer's DM registration number missing or expired</li>
      </ul>

      <h2>Structural Calculations for Fit-Out Modifications</h2>
      <p>Fit-out projects that include structural modifications — openings in concrete walls, new slab penetrations, mezzanine additions, heavy equipment loads — require a structural engineer's NOC in addition to or instead of a full calculation report, depending on the nature and scale of the works.</p>
      <p>For minor modifications (a single door opening in a non-load-bearing wall), a brief structural assessment and NOC from a registered engineer may suffice. For significant modifications (new slab openings, mezzanines, removal of structural elements), full calculations are required.</p>

      <div className="key-takeaways">
        <h3>Key Takeaways</h3>
        <ul>
          <li>State design codes explicitly at the start — this is the first thing DM reviewers check</li>
          <li>Loading analysis must cover dead, superimposed dead, live, wind, and seismic loads with all combinations</li>
          <li>Foundation design must reference a geotechnical investigation report — never assumed values alone</li>
          <li>Cross-reference all calculations to drawing sheet numbers — reviewers check this</li>
          <li>Engineer's DM registration must be current and shown on the report cover</li>
        </ul>
      </div>

      <div className="cta-box">
        <h3>Structural Calculations & DM Submissions</h3>
        <p>Fermium Designs prepares structural calculation reports and manages DM submission for new buildings, fit-out modifications, and structural assessments across Dubai.</p>
        <a href="/contact" className="cta-button">Talk to Our Structural Team</a>
      </div>
    </div>
  );
}
