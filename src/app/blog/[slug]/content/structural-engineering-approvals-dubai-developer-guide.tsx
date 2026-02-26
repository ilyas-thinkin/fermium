export default function BlogContent() {
  return (
    <div>
      <p className="blog-intro">
        Structural engineering approval by Dubai Municipality is one of the most technically demanding stages of any construction project. Whether you are building a villa, a mid-rise residential block, or a commercial tower, understanding how DM reviews structural drawings saves significant time and cost.
      </p>

      <h2>Why Structural Approval Matters</h2>
      <p>Dubai's rapid urban growth means buildings are being constructed on varied soil conditions, close to existing structures, and to increasingly ambitious designs. DM structural review ensures every building can safely carry its intended loads throughout its design life — protecting occupants, neighbours, and the public.</p>
      <p>Structural approval is required for:</p>
      <ul>
        <li>All new construction (villas, apartment buildings, commercial towers)</li>
        <li>Additions and vertical extensions</li>
        <li>Structural modifications within existing buildings</li>
        <li>Mezzanine floor installations exceeding DM thresholds</li>
        <li>Retaining walls, basement construction, and deep foundations</li>
        <li>Major renovation works affecting load-bearing elements</li>
      </ul>

      <h2>Submission Requirements for DM Structural Review</h2>

      <h3>Structural Drawings</h3>
      <p>All structural drawings must be prepared by a DM-registered structural engineer. The drawing set must include:</p>
      <ul>
        <li>Foundation plan with column/wall layout and pad/raft/pile schedule</li>
        <li>Ground, typical, and roof floor structural plans</li>
        <li>Beam and column schedules with reinforcement details</li>
        <li>Slab design details (RC slab, post-tensioned, or precast)</li>
        <li>Staircase and ramp structural details</li>
        <li>Connection details for steel structures</li>
        <li>Retaining wall cross-sections (if applicable)</li>
        <li>Bar Bending Schedules (BBS) for reinforced concrete elements</li>
      </ul>

      <h3>Structural Calculations</h3>
      <p>A full structural calculation report must accompany drawings. DM reviewers cross-check drawings against calculations — inconsistencies cause rejection. Calculations must be stamped by the structural engineer and must reference the applicable codes:</p>
      <ul>
        <li>Dubai Building Code (DBC) — the primary reference</li>
        <li>ACI 318 (for reinforced concrete)</li>
        <li>AISC 360 or BS 5950 (for steel structures)</li>
        <li>ACI 330 or similar for foundations</li>
        <li>UAE Seismic Design provisions</li>
      </ul>

      <h3>Soil Investigation Report</h3>
      <p>A geotechnical investigation report (soil report) from a DM-approved testing laboratory is mandatory for new buildings. The report must include borehole data, soil classification, bearing capacity, and groundwater level. Foundation design must be consistent with the soil report findings.</p>

      <div className="pro-tip">
        <strong>Common Mistake</strong>
        Submitting structural drawings that do not match the architectural drawings. DM reviewers check that column and wall positions align between structural and architectural plans. Any mismatch triggers a rejection comment.
      </div>

      <h2>The DM Structural Review Process</h2>

      <h3>Stage 1: Initial Design Approval (Concept NOC)</h3>
      <p>For larger or complex projects, DM may require a concept-stage review before detailed design begins. This confirms the structural system, foundation approach, and building height compliance with DM zoning regulations.</p>

      <h3>Stage 2: Full Structural Submission</h3>
      <p>Submit the complete package (drawings + calculations + soil report + consultant NOC) through DM Pulse. DM assigns a structural reviewer from the Building Permits Department. Initial review typically takes 2–4 weeks for standard projects.</p>

      <h3>Stage 3: Technical Comments & Revisions</h3>
      <p>DM structural reviewers issue detailed technical comments. Common areas of comment include:</p>
      <ul>
        <li>Insufficient reinforcement for moment demand at connections</li>
        <li>Foundation bearing pressure exceeding soil report capacity</li>
        <li>Missing seismic detailing for ductile connections</li>
        <li>Column sizes not matching architectural drawings</li>
        <li>Slab deflection calculations not provided</li>
      </ul>

      <h3>Stage 4: Structural Approval Issued</h3>
      <p>Once all comments are satisfactorily resolved, the structural approval is incorporated into the overall building permit. Construction of structural elements can now commence. Any structural change on site (column relocation, slab opening, load addition) requires a re-submission.</p>

      <h2>Structural Approval for Modifications</h2>
      <p>Modifying an existing structure is often more complex than new construction. DM requires a structural assessment of the existing building before any modification is approved. This involves:</p>
      <ul>
        <li>Review of original structural drawings and calculations</li>
        <li>Visual inspection and material testing (if original drawings are unavailable)</li>
        <li>Load path analysis to confirm the modification does not overstress existing elements</li>
        <li>Design of strengthening works if required</li>
        <li>NOC from the original structural engineer (if still practicing) or a peer review</li>
      </ul>

      <div className="timeline-table">
        <table>
          <thead>
            <tr>
              <th>Project Type</th>
              <th>Typical Structural Approval Time</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Villa (G+1 or G+2)</td><td>3–6 weeks</td></tr>
            <tr><td>Low-rise apartment (up to 5 floors)</td><td>4–8 weeks</td></tr>
            <tr><td>Mid-rise building (6–15 floors)</td><td>6–12 weeks</td></tr>
            <tr><td>High-rise tower (above 15 floors)</td><td>10–20 weeks</td></tr>
            <tr><td>Structural modification to existing</td><td>4–10 weeks</td></tr>
          </tbody>
        </table>
        <p className="table-note">* Timelines assume complete, code-compliant first submission. Complex projects and multiple revision rounds extend these significantly.</p>
      </div>

      <h2>BIM for Structural Submissions</h2>
      <p>Dubai Municipality is increasingly accepting and encouraging BIM-based structural submissions for larger projects. A properly structured Revit or Tekla model provides clash detection between structural and architectural/MEP elements before submission — catching coordination issues that would otherwise become DM comments. For projects above 10 floors, BIM coordination is strongly recommended.</p>

      <div className="key-takeaways">
        <h3>Key Takeaways</h3>
        <ul>
          <li>Use a DM-registered structural engineer — only registered engineers can submit to DM</li>
          <li>Coordinate structural and architectural drawings before submission — mismatches cause rejection</li>
          <li>Submit the geotechnical soil report with your first submission — it is always required</li>
          <li>Never modify load-bearing elements on site without DM re-approval</li>
          <li>BIM coordination reduces structural comments by catching clashes before submission</li>
        </ul>
      </div>

      <div className="cta-box">
        <h3>Need Structural Engineering Approval?</h3>
        <p>Fermium Designs provides complete structural design, calculations, and DM submission management — from foundation to roof.</p>
        <a href="/services/structural" className="cta-button">View Structural Services</a>
      </div>
    </div>
  );
}
