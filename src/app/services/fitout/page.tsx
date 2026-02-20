import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior FitOut Work | Fermium Designs",
  description:
    "Fermium Designs delivers premium interior fitout solutions across Dubai — offices, retail, restaurants, clinics, villas, and more.",
};

const subServices = [
  {
    name: "Office FitOut",
    description:
      "Transform your workspace into a productivity powerhouse. We design and build modern, functional office environments that reflect your brand and inspire your team.",
    features: [
      "Open plan & cellular layouts",
      "Reception & lounge areas",
      "Meeting room fitout",
      "Server room setup",
      "Ergonomic workstation design",
    ],
    image: "/Images/hero/office-fitout.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Retail & Showroom FitOut",
    description:
      "Create immersive retail experiences that drive footfall and sales. From boutique stores to large-format showrooms, we build spaces that sell.",
    features: [
      "Display & shelving systems",
      "Lighting design",
      "Storefront & facade fitout",
      "POS & checkout areas",
      "Brand-aligned interiors",
    ],
    image: "/Images/hero/retail-interior.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    name: "Restaurant & Café FitOut",
    description:
      "From intimate dining rooms to vibrant café spaces, we craft F&B environments that enhance the guest experience and streamline kitchen operations.",
    features: [
      "Dining area layout design",
      "Commercial kitchen fitout",
      "Bar & counter installations",
      "Acoustic & lighting solutions",
      "Outdoor terrace fitout",
    ],
    image: "/Images/hero/restaurant-interior.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    name: "Clinic & Healthcare FitOut",
    description:
      "Specialist fitout for medical clinics, dental practices, and healthcare facilities — designed with hygiene, patient comfort, and DHA compliance in mind.",
    features: [
      "DHA-compliant layouts",
      "Sterile zone design",
      "Reception & waiting areas",
      "Treatment room fitout",
      "Medical gas & equipment support",
    ],
    image: "/Images/hero/clinic-fitout.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "Villa & Apartment FitOut",
    description:
      "Luxury residential fitout services for villas, apartments, and penthouses across Dubai — blending aesthetics with functionality to create your perfect home.",
    features: [
      "Full villa fitout",
      "Kitchen & bathroom renovations",
      "Custom built-in wardrobes",
      "Feature wall designs",
      "Flooring & ceiling finishes",
    ],
    image: "/Images/hero/villa-fitout.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: "Custom Furniture & Joinery",
    description:
      "Bespoke furniture and joinery crafted to exact specifications — from reception desks and display units to cabinetry and feature installations.",
    features: [
      "Reception counters & desks",
      "Display cabinets & shelving",
      "Kitchen cabinetry",
      "Wardrobes & storage units",
      "Decorative wall paneling",
    ],
    image: "/Images/hero/custom-furniture.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    name: "MEP Works",
    description:
      "Comprehensive mechanical, electrical, and plumbing services as part of our complete fitout offering — ensuring every project is fully functional and compliant.",
    features: [
      "Electrical installations",
      "Plumbing & drainage",
      "HVAC & ventilation",
      "Fire alarm & suppression",
      "DEWA & Civil Defense compliance",
    ],
    image: "/Images/hero/mep-companies.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "False Ceiling & Partitions",
    description:
      "High-quality ceiling systems and partition solutions including gypsum board, glass partitions, and acoustic panels for any space type.",
    features: [
      "Gypsum board ceilings",
      "Feature & coffered ceilings",
      "Glass & aluminum partitions",
      "Acoustic wall panels",
      "Moveable partition systems",
    ],
    image: "/Images/hero/interior-fitout.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
];

export default function FitoutPage() {
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
            Interior FitOut Work
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
            Spaces Crafted to Perfection
          </h1>
          <p className="mt-5 max-w-2xl text-white/60 text-lg leading-relaxed">
            From offices and retail to restaurants and villas — we deliver high-quality interior
            fitout solutions that blend creativity with precision across Dubai and the UAE.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span className="w-2 h-2 rounded-full bg-accent" />
              500+ Projects Completed
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span className="w-2 h-2 rounded-full bg-accent" />
              On-Time Delivery Guaranteed
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span className="w-2 h-2 rounded-full bg-accent" />
              End-to-End Project Management
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="py-24 bg-bg-secondary">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our FitOut Services</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Whatever the space, whatever the scale — we have the expertise to deliver it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subServices.map((service, i) => (
              <div
                key={service.name}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col sm:flex-row"
              >
                {/* Image */}
                <div className="relative sm:w-44 h-48 sm:h-auto shrink-0 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-bold text-primary text-lg">{service.name}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-text-secondary">
                        <svg className="w-3.5 h-3.5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <h2 className="text-3xl font-bold text-white">Ready to Transform Your Space?</h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Tell us about your project and our team will get back to you with a tailored proposal.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-secondary transition-colors">
              Start Your Project
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
