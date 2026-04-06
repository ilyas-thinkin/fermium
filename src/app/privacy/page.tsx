import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Fermium Designs Dubai",
  description:
    "Read the Privacy Policy of Fermium Designs. Learn how we collect, use, store, and protect your personal information when you visit our website or engage our services in Dubai, UAE.",
  alternates: {
    canonical: "https://www.fermiumdesigns.ae/privacy",
  },
};

const sections = [
  {
    id: "who-we-are",
    title: "Who We Are",
    content: (
      <>
        <p className="mb-4">
          Fermium Designs is a Dubai-based interior fit-out and engineering firm providing
          end-to-end solutions, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Interior FitOut Work</li>
          <li>Authority Approvals</li>
          <li>Structural Solutions</li>
        </ul>
        <p>
          Our website lists our office at Al Babtain Building - Office 302, Port Saeed,
          Deira, Dubai, with contact via{" "}
          <a href="tel:+971522543903" className="text-accent hover:underline">
            052 254 3903
          </a>{" "}
          and{" "}
          <a href="mailto:info@fermiumdesigns.ae" className="text-accent hover:underline">
            info@fermiumdesigns.ae
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-4">
          When you interact with Fermium Designs through our website, forms, WhatsApp,
          phone, or email, we may collect the following information:
        </p>
        <p className="font-semibold text-[#16245C] mb-2">Personal Information</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name, if provided</li>
          <li>Project-related details</li>
          <li>Service requirements</li>
          <li>Any information you include in your message</li>
        </ul>
        <p className="font-semibold text-[#16245C] mb-2">Technical Information</p>
        <p className="mb-4">
          We may also collect limited technical and usage data such as:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device type</li>
          <li>Pages visited</li>
          <li>Time spent on the website</li>
          <li>Referral source</li>
          <li>Cookies and similar tracking data</li>
        </ul>
        <p className="font-semibold text-[#16245C] mb-2">Project and Service Information</p>
        <p className="mb-4">
          If you contact us regarding Fitout Approvals, authority submissions, or Project
          Management Services, we may collect project-specific details such as:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Property or project location</li>
          <li>Type of fit-out or structural work</li>
          <li>Authority approval requirements</li>
          <li>Drawings, plans, files, or related documents you share</li>
          <li>Communication records related to your project</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-collect",
    title: "How We Collect Your Information",
    content: (
      <>
        <p className="mb-4">We may collect information in the following ways:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>When you fill out a contact form on our website</li>
          <li>When you request a callback</li>
          <li>When you send an enquiry through WhatsApp</li>
          <li>When you call us or email us directly</li>
          <li>When you browse our website</li>
          <li>When you submit project documents or service-related information</li>
          <li>
            When you communicate with us about approvals, engineering, or fit-out services
          </li>
        </ul>
        <p>
          The website includes a message form with fields such as full name, email address,
          phone number, service required, and message, and also allows users to send
          details through WhatsApp for a quick response.
        </p>
      </>
    ),
  },
  {
    id: "why-we-collect",
    title: "Why We Collect Your Information",
    content: (
      <>
        <p className="mb-4">Fermium Designs collects your data to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Respond to your enquiries</li>
          <li>Provide quotations and consultations</li>
          <li>Deliver Fitout Approvals services</li>
          <li>Deliver Project Management Services</li>
          <li>Assess your project requirements</li>
          <li>Prepare and manage authority approval submissions</li>
          <li>Improve our website, services, and customer experience</li>
          <li>Communicate project updates and service information</li>
          <li>Maintain internal records</li>
          <li>Meet legal, regulatory, and compliance obligations</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Personal Information",
    content: (
      <>
        <p className="mb-4">
          We may use your information for the following legitimate business purposes:
        </p>
        <p className="font-semibold text-[#16245C] mb-2">Service Delivery</p>
        <p className="mb-2">To provide our services, including:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Interior fit-out consultations</li>
          <li>Authority approvals coordination</li>
          <li>Structural and engineering support</li>
          <li>Project planning and execution</li>
          <li>Client communication and support</li>
        </ul>
        <p className="font-semibold text-[#16245C] mb-2">Communication</p>
        <p className="mb-2">To contact you regarding:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Your enquiry</li>
          <li>Project updates</li>
          <li>Documentation requirements</li>
          <li>Quotations and proposals</li>
          <li>Follow-ups related to your request</li>
        </ul>
        <p className="font-semibold text-[#16245C] mb-2">Website Improvement</p>
        <p className="mb-2">To understand how visitors use our website and improve:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Website content</li>
          <li>User experience</li>
          <li>Conversion forms</li>
          <li>Service pages</li>
          <li>SEO and website performance</li>
        </ul>
        <p className="font-semibold text-[#16245C] mb-2">Marketing and Business Development</p>
        <p>
          We may use your information to send service-related updates, offers, or relevant
          business communications, where permitted by applicable law. You may request to
          opt out of marketing communications at any time.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and Tracking Technologies",
    content: (
      <>
        <p className="mb-4">
          Our website may use cookies or similar tracking technologies to improve
          performance and user experience. Cookies may help us:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Understand visitor behaviour</li>
          <li>Measure website traffic</li>
          <li>Improve functionality</li>
          <li>Remember user preferences</li>
          <li>Support website analytics and marketing performance</li>
        </ul>
        <p>
          You may disable cookies through your browser settings. However, some features of
          the website may not function properly if cookies are disabled.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing of Information",
    content: (
      <>
        <p className="mb-4">
          Fermium Designs does not sell, rent, or trade your personal data to third
          parties.
        </p>
        <p className="mb-4">We may share information only when necessary with:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Internal team members</li>
          <li>Professional advisors or consultants</li>
          <li>IT, hosting, website, CRM, or communication service providers</li>
          <li>
            Government departments, regulators, developers, free zone authorities, or
            approval bodies involved in your project
          </li>
          <li>Law enforcement or regulatory authorities when legally required</li>
        </ul>
        <p>
          For projects involving Fitout Approvals or regulatory submissions, your
          information may be shared only to the extent necessary to process approvals,
          NOCs, permits, drawings, or related technical documentation.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    content: (
      <>
        <p className="mb-4">We retain your information only for as long as necessary to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Respond to your enquiry</li>
          <li>Deliver contracted services</li>
          <li>Maintain business and project records</li>
          <li>Comply with legal, tax, regulatory, or contractual obligations</li>
          <li>Resolve disputes and enforce agreements</li>
        </ul>
        <p>
          When your information is no longer required, we will securely delete, anonymize,
          or archive it as appropriate.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Data Security",
    content: (
      <>
        <p className="mb-4">
          Fermium Designs takes reasonable technical and organizational measures to protect
          your personal information against:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Unauthorized access</li>
          <li>Misuse</li>
          <li>Loss</li>
          <li>Alteration</li>
          <li>Disclosure</li>
          <li>Destruction</li>
        </ul>
        <p>
          While we aim to protect your information, no method of internet transmission or
          electronic storage is completely secure. Therefore, we cannot guarantee absolute
          security.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Links and Platforms",
    content: (
      <>
        <p className="mb-4">
          Our website may contain links to third-party platforms or services, including
          communication tools such as WhatsApp. Our website also links to WhatsApp for
          chat/contact.
        </p>
        <p>
          If you use any third-party platform, your information may also be subject to that
          platform&apos;s own privacy policy and terms. We recommend reviewing those
          policies before sharing sensitive information.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: (
      <>
        <p className="mb-4">
          Depending on applicable laws and regulations, you may have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Request access to your personal data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to certain processing</li>
          <li>Request restriction of processing</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Request that we stop sending marketing communications</li>
        </ul>
        <p>To exercise any of these rights, please contact us using the details below.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: (
      <>
        <p className="mb-4">
          Our website and services are intended for business users, property owners,
          contractors, consultants, and adults seeking professional services. We do not
          knowingly collect personal information from children.
        </p>
        <p>
          If we become aware that information from a child has been collected without
          proper authorization, we will take appropriate steps to remove it.
        </p>
      </>
    ),
  },
  {
    id: "international",
    title: "International Data Handling",
    content: (
      <>
        <p>
          If you contact Fermium Designs from outside the UAE, your information may be
          processed in the UAE or through service providers supporting our business
          operations. By submitting your information, you acknowledge that your data may be
          handled in accordance with this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p className="mb-4">
          Fermium Designs may update this Privacy Policy from time to time to reflect:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Changes in our services</li>
          <li>Legal or regulatory updates</li>
          <li>Website or business process improvements</li>
        </ul>
        <p>
          Any updated version will be posted on this page with a revised effective date.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#16245C] pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-base">
            At Fermium Designs, we value your privacy and are committed to protecting your
            personal information. This Privacy Policy explains how we collect, use, store,
            and protect your information when you visit{" "}
            <span className="text-white/80">www.fermiumdesigns.ae</span>, submit an
            enquiry, request our Fitout Approvals support, or engage our Project Management
            Services and related solutions.
          </p>
          <p className="text-white/60 text-base mt-4">
            Fermium Designs is a Dubai-based business offering interior fit-out work,
            authority approvals, and structural solutions. The website also provides contact
            options through enquiry forms, phone, email, and WhatsApp.
          </p>
          <p className="text-white/50 text-sm mt-6">
            Effective Date: April 2, 2026
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
            <h2 className="text-xl font-bold text-[#16245C] mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy or how Fermium Designs
              handles your data, you may contact us at:
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
              <p>
                Website:{" "}
                <Link href="/" className="text-accent hover:underline">
                  www.fermiumdesigns.ae
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
