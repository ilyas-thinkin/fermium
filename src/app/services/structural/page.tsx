import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Structural Solutions | Fermium Designs",
  description:
    "Fermium Designs provides expert structural engineering services in Dubai — from design and analysis to BIM modeling, authority approvals, and site supervision.",
};

const subServices = [
  {
    name: "Structural Design & Drafting",
    description:
      "Complete structural solutions from concept to construction-ready drawings. Our engineers deliver precise, code-compliant structural designs for commercial, residential, and industrial projects.",
    features: [
      "Reinforced concrete design",
      "Steel structure design",
      "Foundation design",
      "Retaining wall design",
      "Shop drawings & as-builts",
    ],
    image: "/Images/hero/office-fitout.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    name: "Structural Analysis",
    description:
      "Advanced structural analysis using industry-leading software to assess loads, stresses, and deformations — ensuring your structure performs safely under all conditions.",
    features: [
      "Static & dynamic analysis",
      "Seismic analysis",
      "Wind load assessment",
      "Finite element modeling",
      "Peer review services",
    ],
    image: "/Images/hero/corporate.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    name: "Calculations & Reports",
    description:
      "Detailed structural engineering calculations and technical reports prepared in accordance with UAE building codes and international standards for authority submissions.",
    features: [
      "Structural calculation reports",
      "Load calculation sheets",
      "Material specifications",
      "Authority-ready documentation",
      "Method statements",
    ],
    image: "/Images/hero/interior-fitout.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: "Authority Approvals",
    description:
      "We prepare and submit all structural engineering documents required for Dubai Municipality, Civil Defense, and other authority approvals — managing the entire process.",
    features: [
      "DM structural submissions",
      "Civil Defense compliance",
      "Drawing approval coordination",
      "Revision management",
      "NOC procurement",
    ],
    image: "/Images/hero/warehouse-fitout.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: "3D BIM Modeling",
    description:
      "Advanced Building Information Modeling for structural components — enabling clash detection, quantity take-offs, and seamless coordination with architecture and MEP teams.",
    features: [
      "Revit structural modeling",
      "Clash detection & coordination",
      "4D construction sequencing",
      "Quantity take-offs",
      "IFC model delivery",
    ],
    image: "/Images/hero/corporate.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
  },
  {
    name: "Site Supervision",
    description:
      "Expert on-site structural supervision and quality control to ensure construction faithfully follows approved drawings and meets all safety and regulatory standards.",
    features: [
      "Structural inspection visits",
      "Construction compliance checks",
      "Quality assurance reports",
      "Material testing oversight",
      "Completion certification",
    ],
    image: "/Images/hero/mep-companies.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export default function StructuralPage() {
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
            Structural Solutions
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
            Engineering Built to Last
          </h1>
          <p className="mt-5 max-w-2xl text-white/60 text-lg leading-relaxed">
            Precision structural engineering — from concept design and analysis to BIM modeling,
            authority approvals, and on-site supervision — all delivered by our expert team.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span className="w-2 h-2 rounded-full bg-accent" />
              100% Code Compliant
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span className="w-2 h-2 rounded-full bg-accent" />
              UAE Standards Certified
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span className="w-2 h-2 rounded-full bg-accent" />
              15+ Years Experience
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="py-24 bg-bg-secondary">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">What We Offer</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Comprehensive structural engineering services tailored to every project type and scale.
            </p>
          </div>

          <div className="space-y-6">
            {subServices.map((service, i) => (
              <div
                key={service.name}
                className={`bg-white rounded-2xl overflow-hidden border border-border flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="relative md:w-2/5 h-56 md:h-auto overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-primary">{service.name}</h3>
                  <p className="mt-3 text-text-secondary leading-relaxed">{service.description}</p>
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                        <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <h2 className="text-3xl font-bold text-white">Need Structural Engineering Support?</h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Get in touch with our structural team for a consultation on your project.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-secondary transition-colors">
              Request a Consultation
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
