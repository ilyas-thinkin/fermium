export default function BlogContent() {
  return (
    <div className="blog-content-wrapper">
      <h2>test</h2>

      <div className="blog-table-wrap">
        <table>
        <thead>
        <tr>
          <th><span className="text-color-white">test</span></th>
          <th><span className="text-color-white">test</span></th>
          <th><span className="text-color-white">test</span></th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
        </tbody>
        </table>
      </div>

      <blockquote>
        <p>test:test quote</p>
      </blockquote>

      <div className="cta-box">
        <h3>Ready to Start Your Project?</h3>
        <p>Fermium Designs handles design, approvals, and construction management across Dubai — end to end.</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </div>
    </div>
  );
}
