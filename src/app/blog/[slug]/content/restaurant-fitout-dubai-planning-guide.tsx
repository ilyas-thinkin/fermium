export default function BlogContent() {
  return (
    <div>
      <p className="blog-intro">
        Restaurant and F&B fit-outs in Dubai are among the most complex commercial projects to execute — combining demanding kitchen specifications, front-of-house design, multiple authority approvals, and tight opening timelines. This guide covers everything from initial planning to opening day.
      </p>

      <h2>Understanding the Approvals Landscape for F&B</h2>
      <p>Unlike office or retail fit-outs, restaurants in Dubai require approvals from multiple authorities simultaneously. Missing or delaying any one of them holds up your opening:</p>
      <ul>
        <li><strong>Dubai Municipality (DM):</strong> Architectural and MEP fit-out approval, plus food establishment licensing (separate process)</li>
        <li><strong>Dubai Civil Defence (DCD):</strong> Fire safety approval — kitchen suppression systems, means of escape, fire detection</li>
        <li><strong>Dubai Municipality Food Safety:</strong> Food establishment permit — kitchen specifications, surface materials, food handling area design</li>
        <li><strong>Building management NOC:</strong> Required before submitting to any authority</li>
        <li><strong>DEWA:</strong> Power upgrade approval if your kitchen load exceeds the building's existing allocation</li>
      </ul>

      <div className="pro-tip">
        <strong>Pro Tip</strong>
        Start all approval tracks simultaneously. DM fit-out, DM food license, and DEWA applications can run in parallel. Waiting for one before starting the next adds months to your timeline.
      </div>

      <h2>Kitchen Design: The Starting Point</h2>
      <p>The kitchen layout drives every other design decision in a restaurant. Before front-of-house concepts, furniture selection, or brand expression, the kitchen must be properly sized and programmed.</p>
      <p>Key kitchen design factors for Dubai restaurants:</p>
      <ul>
        <li><strong>Minimum kitchen area:</strong> DM food safety requires adequate space based on menu type and expected covers — there are no universal minimums, but inspectors assess whether the kitchen can operate hygienically at capacity</li>
        <li><strong>Surface materials:</strong> All food contact and preparation surfaces must be smooth, impervious, and easy to clean — stainless steel is standard; tiled surfaces require specific grout types</li>
        <li><strong>Ventilation:</strong> Exhaust canopy over all cooking equipment sized for CFM requirements, with makeup air supply — a common design failure that causes DM rejections</li>
        <li><strong>Grease trap:</strong> Required for all commercial kitchens; sizing depends on kitchen output — coordinate with the building's drainage system</li>
        <li><strong>Staff facilities:</strong> Separate staff changing and toilet facilities away from food preparation areas</li>
        <li><strong>Dry and cold storage:</strong> Properly segregated and sized for menu requirements</li>
      </ul>

      <h2>Front-of-House Design</h2>
      <p>Dubai diners have high expectations for ambiance, especially in the city's premium dining market. Front-of-house design considerations specific to Dubai:</p>
      <ul>
        <li><strong>Acoustics:</strong> Hard surfaces (common in high-end Dubai restaurants) create noise issues — acoustic ceiling baffles or soft furnishings must balance design intent with functional comfort</li>
        <li><strong>Air conditioning:</strong> Critical — guests will not return if the temperature is uncomfortable. HVAC must be oversized for Dubai summers, with strong zoning between kitchen and dining areas</li>
        <li><strong>Lighting:</strong> Dimming capability is expected in dining environments; layer ambient, task, and feature lighting with scenes for different times of day</li>
        <li><strong>Accessibility:</strong> Accessible entry, accessible toilet, and accessible seating are required under UAE Building Code for commercial F&B establishments</li>
        <li><strong>Outdoor seating:</strong> If you plan a terrace or outdoor area, this requires a separate NOC from the building and often additional DM approval</li>
      </ul>

      <h2>Fire Safety Requirements for Restaurants</h2>
      <p>DCD requirements for restaurants go beyond standard fit-out fire safety:</p>
      <ul>
        <li>Kitchen suppression system (wet chemical) over all cooking equipment — this is separate from the building's main sprinkler system</li>
        <li>Means of escape dimensioned for the maximum dining capacity</li>
        <li>Emergency lighting throughout</li>
        <li>Fire detection in kitchen and dining areas coordinated with the building's main system</li>
        <li>Kitchen exhaust duct fire suppression for ducts passing through floor/ceiling assemblies</li>
      </ul>

      <h2>Typical Restaurant Fit-Out Timeline in Dubai</h2>

      <div className="timeline-table">
        <table>
          <thead>
            <tr>
              <th>Stage</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kitchen programming & concept design</td>
              <td>2–4 weeks</td>
            </tr>
            <tr>
              <td>Design development (architectural + kitchen + MEP)</td>
              <td>3–5 weeks</td>
            </tr>
            <tr>
              <td>Authority submissions (DM, DCD, food license — parallel)</td>
              <td>4–8 weeks</td>
            </tr>
            <tr>
              <td>Tender & contractor appointment</td>
              <td>2–3 weeks (can overlap with approvals)</td>
            </tr>
            <tr>
              <td>Construction</td>
              <td>8–14 weeks</td>
            </tr>
            <tr>
              <td>Kitchen equipment installation & commissioning</td>
              <td>2–3 weeks</td>
            </tr>
            <tr>
              <td>DCD & DM inspections, food safety inspection</td>
              <td>2–3 weeks</td>
            </tr>
            <tr>
              <td>Soft launch & snagging</td>
              <td>1–2 weeks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Most well-managed restaurant fit-outs in Dubai run 6–10 months from lease signing to opening. Under-estimating this timeline is the most common planning error for F&B operators.</p>

      <div className="key-takeaways">
        <h3>Key Takeaways</h3>
        <ul>
          <li>Start all authority approval tracks simultaneously — DM, DCD, food license, DEWA</li>
          <li>Design the kitchen first — it drives every other decision in the project</li>
          <li>Kitchen suppression, grease trap, and ventilation are non-negotiable requirements</li>
          <li>Allow 6–10 months from lease signing to opening for a well-managed F&B project</li>
          <li>Acoustic and HVAC quality directly affect whether customers return — don't cut costs here</li>
        </ul>
      </div>

      <div className="cta-box">
        <h3>Planning a Restaurant or Café Fit-Out?</h3>
        <p>Fermium Designs has managed F&B fit-outs across Dubai — handling design, all authority approvals, and construction supervision from brief to opening day.</p>
        <a href="/contact" className="cta-button">Talk to Our F&B Team</a>
      </div>
    </div>
  );
}
