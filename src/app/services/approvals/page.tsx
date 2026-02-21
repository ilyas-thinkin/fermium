import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authority Approvals | Fermium Designs",
  description:
    "Fermium Designs handles all authority approvals across Dubai — Civil Defense, DEWA, DM, Emaar, Trakhees, and more. Fast, reliable, one-stop approval solutions.",
};

const loggedApprovals = [
  {
    name: "Civil Defense Approval",
    description: "Fire safety compliance and Civil Defense permits for all types of commercial and residential fitout projects.",
    logo: "/Images/Approvals Logo PNG 1-1/DCD.png",
  },
  {
    name: "DEWA Approval",
    description: "Dubai Electricity and Water Authority approvals for electrical, plumbing, and MEP installations.",
    logo: "/Images/Approvals Logo PNG 1-1/DEWA.png",
  },
  {
    name: "Dubai Municipality",
    description: "Comprehensive DM approvals for construction, fitout, and renovation projects across Dubai.",
    logo: "/Images/Approvals Logo PNG 1-1/DM.png",
  },
  {
    name: "Emaar Approval",
    description: "Fitout permits and NOC approvals for properties within Emaar-managed communities and developments.",
    logo: "/Images/Approvals Logo PNG 1-1/Emaar.png",
  },
  {
    name: "Nakheel Approval",
    description: "NOC and fitout approvals for Nakheel properties including Palm Jumeirah, Ibn Battuta, and more.",
    logo: "/Images/Approvals Logo PNG 1-1/Nakheel.png",
  },
  {
    name: "JAFZA Approval",
    description: "Jebel Ali Free Zone Authority permits and fitout approvals for industrial and commercial units.",
    logo: "/Images/Approvals Logo PNG 1-1/Jafza.png",
  },
  {
    name: "DHA Approval",
    description: "Dubai Health Authority permits for medical clinics, pharmacies, and healthcare-related fitout projects.",
    logo: "/Images/Approvals Logo PNG 1-1/DHA 1.png",
  },
  {
    name: "DSO Approval",
    description: "Dubai Silicon Oasis Authority approvals for technology parks, offices, and commercial spaces.",
    logo: "/Images/Approvals Logo PNG 1-1/DSO.png",
  },
  {
    name: "Dubai Development Authority",
    description: "DDA permits for creative economy zones, media cities, and design districts across Dubai.",
    logo: "/Images/Approvals Logo PNG 1-1/DDA.png",
  },
  {
    name: "DAMAC Approval",
    description: "Fitout NOC and approvals for properties within DAMAC-managed developments across Dubai.",
    logo: "/Images/Approvals Logo PNG 1-1/DAMAC.png",
  },
  {
    name: "Trakhees Approval",
    description: "PCFC Trakhees approvals for properties in Jebel Ali, Port Zone, and other free zone areas.",
    logo: "/Images/Approvals Logo PNG 1-1/Trakhees.png",
  },
  {
    name: "Dubai South Approval",
    description: "Fitout and construction permits for Dubai South developments including Expo City and residential zones.",
    logo: "/Images/Approvals Logo PNG 1-1/Dubai South.png",
  },
  {
    name: "DHCA Approval",
    description: "Dubai Healthcare City Authority approvals for medical fitout and healthcare facilities.",
    logo: "/Images/Approvals Logo PNG 1-1/DHCA.png",
  },
  {
    name: "DIEZ Approval",
    description: "Dubai Industrial and Economic Zone permits for industrial units and warehouses.",
    logo: "/Images/Approvals Logo PNG 1-1/DIEZ.png",
  },
  {
    name: "Concordia Approval",
    description: "Master developer approvals for Concordia-managed residential and commercial communities.",
    logo: "/Images/Approvals Logo PNG 1-1/Concordia.png",
  },
];

const iconApprovals = [
  {
    name: "Food Control Department",
    description: "Food establishment permits and kitchen approvals for restaurants, cafés, and food outlets in Dubai.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    name: "Spa Approval",
    description: "Full spa licensing and fitout approval services for wellness centers and beauty establishments.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    name: "Shisha Café License",
    description: "End-to-end shisha café licensing, layout approvals, and compliance documentation.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    name: "Smoking Permit",
    description: "Designated smoking area approvals and permit processing for compliant hospitality venues.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: "Swimming Pool Approval",
    description: "Swimming pool design, safety, and construction approvals from relevant Dubai authorities.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
      </svg>
    ),
  },
  {
    name: "Solar Approval",
    description: "DEWA and authority approvals for solar panel installations on rooftops and commercial buildings.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    name: "Signage Approval",
    description: "Outdoor and indoor signage permits and RTA/DM approvals for storefronts and commercial spaces.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    name: "Tent Approval",
    description: "Temporary structure and event tent permits from Civil Defense and Dubai Municipality.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
      </svg>
    ),
  },
  {
    name: "RTA Permit",
    description: "Roads and Transport Authority permits for roadside projects, signage, and transport-related fitout work.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    name: "Tecom & DCCA Approval",
    description: "Technology and media free zone approvals including Dubai Internet City and Dubai Media City.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    name: "Third Party Consultants",
    description: "Coordination with approved third-party consultants for peer review, NOC, and technical sign-offs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

function ContactLink() {
  return (
    <Link
      href="/contact"
      className="mt-4 inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-primary hover:bg-accent rounded-lg transition-colors duration-200"
    >
      Send Enquiry
    </Link>
  );
}

export default function ApprovalsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <span className="inline-block px-5 py-2 bg-white/10 text-accent text-xs font-semibold uppercase tracking-widest rounded-sm">
            Authority Approvals
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
            Permits Without the Paperwork Headache
          </h1>
          <p className="mt-5 max-w-2xl text-white/60 text-lg leading-relaxed">
            We handle the complete approval process across 21+ Dubai authorities — so you can
            focus on your business while we take care of every stamp, signature, and submission.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {["98% First-pass Rate", "500+ Permits Processed", "21+ Authorities Covered"].map((b) => (
              <div key={b} className="flex items-center gap-2 text-white/70 text-sm">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Logo Cards — icon-style matching reference */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
              Authorities We Work With
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Authority Approvals</h2>
            <p className="mt-3 text-text-secondary max-w-xl mx-auto">
              One point of contact for every approval you need across Dubai and the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {loggedApprovals.map((item) => (
              <div
                key={item.name}
                className="group bg-white rounded-2xl border border-[#e9ecef] hover:border-accent/40 hover:shadow-[0_12px_32px_rgba(31,182,181,0.12)] transition-all duration-300 flex flex-col items-center text-center p-6"
              >
                {/* Logo circle */}
                <div className="w-20 h-20 rounded-full bg-[#F5F7FA] group-hover:bg-accent/5 flex items-center justify-center mb-5 transition-colors duration-300 overflow-hidden shrink-0">
                  <div className="relative w-14 h-14">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <h3 className="font-bold text-primary text-sm leading-snug mb-2">{item.name}</h3>
                <p className="text-xs text-text-secondary leading-relaxed flex-1">{item.description}</p>
                <ContactLink />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional icon-only approvals */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              Additional Approvals &amp; Permits
            </h2>
            <p className="mt-3 text-text-secondary max-w-xl mx-auto">
              Beyond authority approvals, we handle specialist permits and licensing across Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {iconApprovals.map((item) => (
              <div
                key={item.name}
                className="group bg-[#F5F7FA] rounded-2xl border border-[#e9ecef] hover:border-accent/40 hover:bg-white hover:shadow-[0_12px_32px_rgba(31,182,181,0.10)] transition-all duration-300 flex flex-col items-center text-center p-6"
              >
                {/* Icon circle */}
                <div className="w-20 h-20 rounded-full bg-white group-hover:bg-accent flex items-center justify-center mb-5 transition-all duration-300 text-accent group-hover:text-white shadow-sm shrink-0">
                  {item.icon}
                </div>

                <h3 className="font-bold text-primary text-sm leading-snug mb-2">{item.name}</h3>
                <p className="text-xs text-text-secondary leading-relaxed flex-1">{item.description}</p>
                <ContactLink />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-5 py-2 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest rounded-sm">
              How It Works
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-primary">Our Approval Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Document Collection", desc: "We gather all required drawings, NOCs, and supporting documents from you." },
              { step: "02", title: "Application Submission", desc: "Our team submits applications to the relevant authorities on your behalf." },
              { step: "03", title: "Follow-up & Response", desc: "We actively follow up, respond to queries, and handle any revisions." },
              { step: "04", title: "Permit Delivery", desc: "Approved permits are delivered directly to you, ready for use on-site." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-accent font-bold text-xl mx-auto">
                  {s.step}
                </div>
                <h3 className="mt-5 font-bold text-primary">{s.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Get Your Approvals Done?</h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Contact us today and let our approvals team handle everything from start to finish.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-secondary transition-colors">
              Get in Touch
            </Link>
            <a href="tel:+971522543903" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
              052 254 3903
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
