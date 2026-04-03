import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Fermium Designs Dubai",
  description:
    "Read the Terms & Conditions of Fermium Designs for fitout approvals, interior fitout work, and project management services in Dubai, UAE.",
  alternates: {
    canonical: "https://www.fermiumdesigns.ae/terms",
  },
};

const sections = [
  {
    id: "about",
    title: "About Fermium Designs",
    content: (
      <>
        <p>
          Fermium Designs provides professional solutions for commercial, residential,
          hospitality, healthcare, and other project sectors. Our services include design
          coordination, fitout approvals, authority submission support, structural solutions,
          and project management services tailored to project requirements in Dubai. The
          website also lists contact details including office location in Port Saeed, Deira,
          Dubai, phone, and email support.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "Use of This Website",
    content: (
      <>
        <p className="mb-4">By using this website, you agree that you will:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Use the website only for lawful purposes</li>
          <li>Provide accurate information when filling out contact or enquiry forms</li>
          <li>Not attempt to damage, disrupt, or interfere with the website&apos;s functionality</li>
          <li>Not copy, reproduce, republish, or exploit website content without written permission</li>
          <li>Not use the website in a way that may harm the reputation of Fermium Designs</li>
        </ul>
        <p>
          We reserve the right to restrict or terminate access to any user who misuses the
          website or violates these Terms &amp; Conditions.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "Services Information",
    content: (
      <>
        <p className="mb-4">
          The content on this website is provided for general informational and marketing
          purposes. While Fermium Designs aims to keep all service details accurate and
          updated, the information on the website does not constitute a binding offer,
          guaranteed approval, or final project commitment.
        </p>
        <p className="mb-4">Our services may include, but are not limited to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Interior FitOut Work</li>
          <li>Fitout Approvals</li>
          <li>Authority Approvals</li>
          <li>Structural Solutions</li>
          <li>Project Management Services</li>
        </ul>
        <p>
          The scope, timeline, pricing, and deliverables for any service will be defined
          separately through proposals, quotations, contracts, work orders, or written
          communication agreed between the client and Fermium Designs.
        </p>
      </>
    ),
  },
  {
    id: "approvals",
    title: "Fitout Approvals and Authority Approvals",
    content: (
      <>
        <p className="mb-4">
          As part of our service offering, Fermium Designs may assist clients with fitout
          approvals, authority submissions, NOCs, technical documentation, and coordination
          with relevant authorities or master developers. The website states that the company
          handles approvals with multiple authorities across Dubai.
        </p>
        <p className="mb-4">
          However, by using our website or services, you acknowledge that:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            Final approval decisions remain solely with the relevant authority, municipality,
            free zone, developer, or regulatory body
          </li>
          <li>
            Approval timelines may vary depending on project type, authority requirements,
            design revisions, missing documents, inspections, or third-party dependencies
          </li>
          <li>
            Fermium Designs does not guarantee approval issuance unless explicitly stated in
            a written agreement
          </li>
          <li>
            Clients are responsible for providing accurate project information, valid
            ownership or tenancy documents, and complete supporting documentation
          </li>
        </ul>
        <p>
          Our role in fitout approvals and project management services is to support, guide,
          coordinate, and manage the process professionally, but regulatory decisions are
          outside our direct control.
        </p>
      </>
    ),
  },
  {
    id: "project-management",
    title: "Project Management Services",
    content: (
      <>
        <p className="mb-4">
          Our Project Management Services are designed to support smooth coordination,
          execution planning, consultant communication, authority follow-up, and project
          progress management. Any timelines or estimated completion dates shared on the
          website, in discussions, or in proposals are indicative unless contractually
          committed in writing.
        </p>
        <p className="mb-4">Project completion may be affected by:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Client approval delays</li>
          <li>Authority comments or resubmissions</li>
          <li>Design scope changes</li>
          <li>Site conditions</li>
          <li>Contractor or supplier delays</li>
          <li>Force majeure or events outside reasonable control</li>
        </ul>
        <p>
          Fermium Designs will use reasonable professional efforts to deliver services
          efficiently, but shall not be held liable for delays caused by third parties or
          circumstances beyond our control.
        </p>
      </>
    ),
  },
  {
    id: "quotes",
    title: "Quotes, Proposals, and Payments",
    content: (
      <>
        <p className="mb-4">
          All quotations, proposals, and commercial offers issued by Fermium Designs are
          subject to specific validity periods and conditions mentioned in the relevant
          document.
        </p>
        <p className="mb-4">Unless otherwise agreed in writing:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Prices are subject to revision if the project scope changes</li>
          <li>Additional work outside the original scope may be charged separately</li>
          <li>Payments must be made according to the agreed milestone schedule</li>
          <li>
            Delays in client payment may result in suspension of work, submission holds,
            or project delays
          </li>
          <li>
            Government fees, authority charges, permit fees, testing charges, and
            third-party expenses may be billed separately unless included in writing
          </li>
        </ul>
        <p>
          No work shall be deemed confirmed until Fermium Designs has received written
          approval and any applicable advance payment, where required.
        </p>
      </>
    ),
  },
  {
    id: "client",
    title: "Client Responsibilities",
    content: (
      <>
        <p className="mb-4">
          To ensure timely service delivery, the client agrees to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Provide complete and correct information</li>
          <li>
            Share all required drawings, tenancy contracts, title deeds, licenses, and
            other project documents on time
          </li>
          <li>Review submissions, drawings, and proposals promptly</li>
          <li>Make payments according to agreed terms</li>
          <li>
            Obtain any owner, landlord, tenant, or third-party permissions where applicable
          </li>
          <li>
            Cooperate with authority requirements, inspections, and requested clarifications
          </li>
        </ul>
        <p>
          Fermium Designs shall not be responsible for delays, errors, or losses caused by
          incomplete, inaccurate, or late information provided by the client.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    title: "Intellectual Property Rights",
    content: (
      <>
        <p className="mb-4">
          All content on this website, including but not limited to text, graphics,
          branding, service descriptions, layout, logos, icons, images, and design
          elements, is the property of Fermium Designs unless otherwise stated.
        </p>
        <p className="mb-4">You may not:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Copy website content for commercial use</li>
          <li>Republish material from this website</li>
          <li>Modify or distribute our content without written permission</li>
          <li>
            Use the Fermium Designs name, brand, or website content in a misleading or
            unauthorized manner
          </li>
        </ul>
        <p>
          Limited personal or internal business reference use may be allowed only where it
          does not violate our intellectual property rights.
        </p>
      </>
    ),
  },
  {
    id: "accuracy",
    title: "Accuracy of Website Content",
    content: (
      <>
        <p className="mb-4">
          We aim to ensure that all website content is accurate, useful, and up to date.
          However, Fermium Designs makes no warranties or representations that:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>The website will always be available without interruption</li>
          <li>All website content will always be error-free</li>
          <li>
            All service descriptions, authority references, or process details will remain
            current at all times
          </li>
          <li>
            The website will be free from technical issues, viruses, or compatibility errors
          </li>
        </ul>
        <p>
          Users should verify important commercial, legal, technical, and project-related
          details directly with our team before making decisions based on website content.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Links and External Resources",
    content: (
      <>
        <p className="mb-4">
          This website may contain links to external platforms, third-party tools, or
          communication channels, including WhatsApp or other contact methods shown on the
          site.
        </p>
        <p className="mb-4">We are not responsible for:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>The content or availability of third-party websites</li>
          <li>Any privacy, security, or terms applied by third-party platforms</li>
          <li>Damages or losses arising from your use of external websites or services</li>
        </ul>
        <p>Accessing third-party links is at your own discretion and risk.</p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: (
      <>
        <p className="mb-4">
          To the fullest extent permitted by applicable law, Fermium Designs shall not be
          liable for any direct, indirect, incidental, consequential, or special damages
          arising from:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Use of or inability to use this website</li>
          <li>Reliance on website content</li>
          <li>Delays in fitout approvals or authority approvals</li>
          <li>Rejections, comments, or conditions imposed by authorities</li>
          <li>Third-party contractor, consultant, supplier, or regulatory actions</li>
          <li>Business interruption, loss of profit, or reputational impact</li>
        </ul>
        <p>
          Nothing in these Terms &amp; Conditions excludes liability where such exclusion
          is not permitted under applicable law.
        </p>
      </>
    ),
  },
  {
    id: "no-guarantee",
    title: "No Guarantee of Results",
    content: (
      <>
        <p className="mb-4">
          While Fermium Designs uses professional expertise and practical industry
          knowledge to support clients, we do not guarantee:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Specific approval turnaround times</li>
          <li>Uninterrupted project timelines</li>
          <li>Exact regulatory outcomes</li>
          <li>First-time approval in every case</li>
          <li>Specific commercial or business results from using our services</li>
        </ul>
        <p>
          Every project depends on its own technical scope, authority requirements, client
          readiness, and external factors.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Privacy and Data Use",
    content: (
      <>
        <p className="mb-4">
          When you submit your name, phone number, email address, service request, or
          project enquiry through our website, you agree that Fermium Designs may use that
          information to respond to your request, communicate about services, and manage
          your enquiry.
        </p>
        <p>
          For more details on how personal information may be handled, users should also
          review the website&apos;s{" "}
          <Link href="/privacy" className="text-accent hover:underline font-medium">
            Privacy Policy
          </Link>{" "}
          page, which is linked in the website footer.
        </p>
      </>
    ),
  },
  {
    id: "communication",
    title: "Communication Consent",
    content: (
      <>
        <p className="mb-4">
          By contacting Fermium Designs through forms, phone, email, or WhatsApp, you
          agree that we may contact you regarding your enquiry, requested services,
          quotations, project coordination, and related updates using the contact details
          you provide.
        </p>
        <p>
          You are responsible for ensuring that the information you submit is accurate and
          belongs to you or is authorized for use.
        </p>
      </>
    ),
  },
  {
    id: "suspension",
    title: "Suspension or Termination",
    content: (
      <>
        <p className="mb-4">
          We reserve the right to suspend, refuse, or terminate access to our website or
          services if:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>A user breaches these Terms &amp; Conditions</li>
          <li>False or misleading information is provided</li>
          <li>Payment obligations are not met</li>
          <li>There is misuse, abuse, or unauthorized use of our content or services</li>
          <li>
            The requested service conflicts with legal, regulatory, or ethical obligations
          </li>
        </ul>
        <p>
          Termination of service does not remove the client&apos;s obligation to pay for
          work already completed or costs already incurred.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <>
        <p className="mb-4">
          These Terms &amp; Conditions shall be governed by and interpreted in accordance
          with the laws applicable in the United Arab Emirates, and where relevant, the
          regulations applicable in the Emirate of Dubai.
        </p>
        <p>
          Any disputes arising in connection with the use of this website or our services
          shall be subject to the jurisdiction of the competent courts of Dubai, unless
          otherwise agreed in writing.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    title: "Updates to These Terms & Conditions",
    content: (
      <>
        <p className="mb-4">
          Fermium Designs may revise or update these Terms &amp; Conditions at any time
          without prior notice. Updated versions will be posted on this page and will
          become effective upon publication.
        </p>
        <p>
          We encourage users to review this page regularly to stay informed of any changes.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#16245C] pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-white/60 text-base">
            Welcome to Fermium Designs. These Terms &amp; Conditions govern your use of{" "}
            <span className="text-white/80">www.fermiumdesigns.ae</span> and any related
            services provided by our company. By accessing this website, submitting an
            enquiry, requesting a quotation, or engaging our services, you agree to comply
            with these Terms &amp; Conditions.
          </p>
          <p className="text-white/60 text-base mt-4">
            Fermium Designs is a Dubai-based company offering interior fitout work, fitout
            approvals, authority approvals, structural solutions, and project management
            services for clients across Dubai and the UAE.
          </p>
          <p className="text-white/60 text-base mt-4">
            If you do not agree with any part of these Terms &amp; Conditions, you should
            not use this website or our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-[#16245C] mb-4 pb-3 border-b border-gray-100">
                  {section.title}
                </h2>
                <div className="text-gray-600 leading-relaxed text-base">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Box */}
          <div className="mt-16 bg-[#F5F7FF] rounded-2xl p-8 border border-[#e0e6f7]">
            <h2 className="text-xl font-bold text-[#16245C] mb-4">
              Contact Fermium Designs
            </h2>
            <p className="text-gray-600 mb-6">
              For any questions about these Terms &amp; Conditions or our Fitout Approvals
              and Project Management Services, you may contact:
            </p>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold text-[#16245C]">Fermium Designs</p>
              <p>Al Babtain Building - Office 302, Port Saeed, Deira, Dubai</p>
              <p>
                Phone:{" "}
                <a href="tel:+971522543903" className="text-accent hover:underline">
                  052 254 3903
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@fermiumdesigns.ae"
                  className="text-accent hover:underline"
                >
                  info@fermiumdesigns.ae
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
